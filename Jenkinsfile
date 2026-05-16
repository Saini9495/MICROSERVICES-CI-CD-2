pipeline {
    environment {
        VERCEL_TOKEN = credentials ('vercel_token')
    }
    stages {
        stage ('Install')
        steps{
            bat 'npm install'
        }
    }
    stages {
        stage ('test')
        steps{
            echo 'no test'
        }
    }
    stages {
        stage ('build')
        steps{
            bat 'npm run build'
        }
    }
    stages {
        stage ('deploy')
        steps{
            bat 'npx vercel --prod --yes --token = %VERCEL_TOKEN%'
        }
    }
}