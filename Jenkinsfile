pipeline {
    agent { label 'agent' }

    options {
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
        timestamps()
        ansiColor('xterm')
        disableConcurrentBuilds()
    }

    environment {
        NOME_PIPELINE = 'S07 — Testes Automatizados PETSTORE'
        EMAIL_DESTINO = "${env.EMAIL_DESTINO}"
        EMAIL_REMETENTE = "${env.EMAIL_REMETENTE}"
        EMAIL_SENHA = "${env.APP_PASSWORD}"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Clonando repositório do GitHub...'
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: 'https://github.com/kafreitas07/Project_01_group_02_S07.git']]
                ])
            }
        }

        stage('Build') {
            steps {
                echo 'Instalando dependências npm...'
                sh 'npm ci'
                sh 'npm install nodemailer' 
            }
        }

        stage('Tests') {
            steps {
                echo 'Limpando relatórios antigos...'
                sh 'docker exec s07-newman rm -rf /etc/newman/newman || true'
                echo 'Executando testes Postman com Newman...'
                sh 'npm test'
                echo 'Copiando artefatos de teste...'
                sh 'docker cp s07-newman:/etc/newman/newman/. ./newman || true'
            }
        }

        stage('Notification') {
            steps {
                echo 'Enviando e-mail...'
                script {
                    env.STATUS_PIPELINE = "${currentBuild.currentResult}"
                    env.DURACAO_PIPELINE = "${currentBuild.durationString}"
                    sh 'node ./jenkins/notification/script-email.js'
                }
            }
        }
    }
    
    post {
        success {
            echo 'O pipeline concluido com SUCESSO!'
            archiveArtifacts artifacts: 'newman/**/*.html, package.json, postman/*.json', allowEmptyArchive: true
        }
        failure {
            echo 'O pipeline FALHOU! Verifique os logs acima.'
        }
        unstable {
            echo 'O pipeline está INSTÁVEL - alguns testes falharam.'
        }
        always {
            echo "Pipeline : ${env.NOME_PIPELINE}"
            echo "Build    : #${BUILD_NUMBER}"
            echo "Resultado: ${currentBuild.currentResult}"
            echo "Duração  : ${currentBuild.durationString}"
        }
    }
}