pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image with project folder 'my_project'
                    sh 'docker build -t static-site ./my_project'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Clean up any previous containers with the same name
                    sh 'docker rm -f static-container || true'
                    
                    // Run the Docker container and map the port 8081
                    sh 'docker run -d --name static-container -p 8081:80 static-site'
                }
            }
        }
    }
}
