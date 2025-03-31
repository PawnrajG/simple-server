pipeline {
    agent {
        docker {
            image 'node:latest'
        }
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/PawnrajG/simple-server.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                sh 'node index.js &'
            }
        }
    }
}
