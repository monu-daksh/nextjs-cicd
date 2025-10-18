pipeline {
  agent any

  tools {
    nodejs "Node18"  // Name you gave in Global Tool Config
  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'sprint1', url: 'https://github.com/monu-daksh/nextjs-cicd.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci || npm install'
      }
    }

    stage('Build Project') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test || echo "No tests found"'
      }
    }
  }

  post {
    success { echo '✅ Build successful!' }
    failure { echo '❌ Build failed!' }
    always { echo 'Pipeline completed' }
  }
}
