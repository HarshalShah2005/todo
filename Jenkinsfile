pipeline {
    agent any

    stages {
        stage('Build Backend Image') {
            steps {
                bat 'docker build -t todo-backend ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                bat 'docker build -t todo-frontend ./frontend'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker compose down'
                bat 'docker compose up -d'
            }
        }
    }
}