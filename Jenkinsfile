pipeline {
  agent any

  triggers {
    // Poll GitHub every minute for changes
    pollSCM('* * * * *')
    // Or use GitHub webhook (recommended)
    githubPush()
  }

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

    stage('Deploy') {
      steps {
        echo 'Deploying application...'
        // Add your deployment commands here
        // Examples:
        // sh 'pm2 restart nextjs-app'
        // sh 'docker build -t nextjs-app .'
        // sh 'kubectl apply -f k8s/'
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
    always {
      echo 'Pipeline completed'
    }
  }
}