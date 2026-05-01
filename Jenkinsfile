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

        stage('Clean Old Containers') {
            steps {
                bat 'docker rm -f todo-backend || exit 0'
                bat 'docker rm -f todo-frontend || exit 0'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker compose up -d'
            }
        }
    }
}