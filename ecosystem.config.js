module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    // {
    //   name      : 'website',
    //   script    : 'app.js',
    //   env: {
    //     COMMON_VARIABLE: 'true'
    //   },
    //   env_production : {
    //     NODE_ENV: 'production'
    //   }
    // },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
        user : 'joe',
        host : '120.77.84.9',
        ref  : 'origin/master',
        repo : 'git@github.com:Leon-z/personal-website.git',
        path : '/www/website/production',
        port:'3999',
        ssh_options:'StrictHostKeyChecking=no',
        env: {
            NODE_ENV: 'production'
        },
        'post-deploy' : 'npm install && npm run dist'
    },
  }
};
