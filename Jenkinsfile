pipeline {
    agent any 
    environment {
    NODE_HOME = 'C:\\Program Files\\nodejs'
    PATH = "${env.PATH};${NODE_HOME}\\bin"
    APPDATA = 'C:\\Users\\VINOD KUMAR\\AppData\\Roaming'
  }
    stages {
        stage('Checkout') {
            steps {
                git url: "https://github.com/mannepallyvinod/musician-app.git"
            }
        }
        stage('Build') {
           steps {
               // Build the Node.js/React application
              bat 'npm install'
              bat 'npm run build'
           }
       }
        stage('Image') {
            steps {
                scirpt {
                    dockerImage = docker.build("music")
                }
            }
        }
        stage('Run container') {
            steps {
                script {
                    dockerContainer = dockerImage.run("-p 3000:3000 -d")
                    dockerContainerId = dockerContainer.id
                }
            }
        }
    }
}
