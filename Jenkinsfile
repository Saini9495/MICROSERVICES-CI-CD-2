pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/Saini9495/MICROSERVICES-CI-CD-2.git'
            }
        }

        stage('Build Images') {
            steps {
                sh 'docker build -t user-service ./user-service'
                sh 'docker build -t product-service ./product-service'
                sh 'docker build -t gateway ./gateway'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }

    }
}