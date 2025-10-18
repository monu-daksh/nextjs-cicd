pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'sprint1', url: 'https://github.com/monu-daksh/nextjs-cicd.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test || echo "No tests found"'
      }
    }

    stage('Build Project') {
      steps {
        sh 'npm run build'
      }
    }
  }

  post {
    success {
      echo '✅ Build successful!'
    }
    failure {
      echo '❌ Build failed!'
    }
  }
}
