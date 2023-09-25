pipeline {
  agent none
  stages {
    stage('Check Out Code') {
      steps {
        git(url: 'https://github.com/Aman2233/Portfolio', branch: 'main')
      }
    }

    stage('') {
      steps {
        sh '''ssh root@143.42.39.219 
Lazyfoxjumps3416$
sudo git pull'''
      }
    }

  }
}