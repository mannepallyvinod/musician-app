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
        stage('Install') {
           steps {
               // Build the Node.js/React application
              bat 'npm install'
              bat 'npm run build'
           }
       }
        stage('Audit') {
            steps {
                bat 'npm audit fix' 
            }
        }
    }
}
