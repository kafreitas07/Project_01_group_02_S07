const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const destinatario = process.env.EMAIL_DESTINO;
const remetente = process.env.EMAIL_REMETENTE;
const senha = process.env.APP_PASSWORD;

if (!destinatario || !remetente || !senha) {
    console.error("❌ ERRO: Variáveis de ambiente do e-mail não configuradas.");
    process.exit(1);
}

const status = process.env.STATUS_PIPELINE;
const duracao = process.env.DURACAO_PIPELINE;
const buildNumber = process.env.BUILD_NUMBER;
const pipelineName = process.env.NOME_PIPELINE;

let emoji = 'ℹ️';
let subjectStatus = 'INFO';
let statusColor = '#363636';

if (status === 'SUCCESS') {
    emoji = '✅';
    subjectStatus = 'SUCESSO';
    statusColor = '#28a745';
} else if (status === 'FAILURE') {
    emoji = '❌';
    subjectStatus = 'FALHOU';
    statusColor = '#dc3545';
} else if (status === 'UNSTABLE') {
    emoji = '⚠️';
    subjectStatus = 'INSTÁVEL';
    statusColor = '#ffc107';
}

const subject = `${emoji} [${subjectStatus}] Relatório de Pipeline: ${pipelineName} - Build #${buildNumber}`;

const attachments = [];
const newmanDir = path.join(process.cwd(), 'newman');
if (fs.existsSync(newmanDir)) {
    const files = fs.readdirSync(newmanDir);
    const htmlFile = files.find(file => file.endsWith('.html'));
    if (htmlFile) {
        attachments.push({
            filename: htmlFile,
            path: path.join(newmanDir, htmlFile)
        });
    }
}

const htmlBody = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
        .header { text-align: center; padding-bottom: 20px; border-bottom: 2px solid #eee; }
        .status-badge { display: inline-block; padding: 10px 20px; color: #fff; font-weight: bold; border-radius: 3px; font-size: 16px; margin: 10px 0; }
        .details { margin: 20px 0; background: #f9f9f9; padding: 15px; border-radius: 3px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #eee; font-size: 12px; color: #777; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Relatório de Pipeline</h2>
            <div class="status-badge" style="background-color: ${statusColor};">
                ${emoji} ${subjectStatus}
            </div>
        </div>
        
        <p>Olá,</p>
        <p>O Jenkins finalizou a execução do pipeline <strong>${pipelineName}</strong>.</p>
        
        <div class="details">
            <strong>Detalhes da Execução:</strong>
            <ul>
                <li><strong>Build:</strong> #${buildNumber}</li>
                <li><strong>Resultado:</strong> ${status}</li>
                <li><strong>Duração:</strong> ${duracao}</li>
            </ul>
        </div>

        ${status === 'SUCCESS'
        ? '<p>🎉 Todos os testes passaram! O relatório visual em HTML foi gerado e está anexado a este e-mail.</p>'
        : '<p>⚠️ O pipeline falhou ou ficou instável. Por favor, verifique os logs do console do Jenkins para identificar a causa e localização do erro.</p>'}
        
        <p>Atenciosamente,<br>Equipe de Automação - Grupo 02</p>
        
        <div class="footer">
            Este é um e-mail automático gerado pelo Jenkins. Não responda a esta mensagem.
        </div>
    </div>
</body>
</html>
`;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: remetente,
        pass: senha
    }
});

const mailOptions = {
    from: remetente,
    to: destinatario,
    subject: subject,
    html: htmlBody,
    attachments: attachments
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error("❌ Erro ao enviar e-mail:", error);
        process.exit(1);
    } else {
        console.log('✅ E-mail enviado com sucesso: ' + info.response);
    }
});