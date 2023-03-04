pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git url: "https://github.com/mannepallyvinod/musician-app.git"
            }
        }
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build("music")
                }
            }
        }
        stage('Run') {
            steps {
                script {
                    dockerContainer = dockerImage.run("-p 3000:3000 -d")
                    dockerContainerId = dockerContainer.id
                }
            }
        }
    }
}
