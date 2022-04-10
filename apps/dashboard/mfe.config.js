module.exports = {
  name: 'dashboard',
  remotes: {
    todo: 'https://todo-mfe.netlify.app/remoteEntry.js',
    login: 'https://login-mfe.netlify.app/remoteEntry.js',
  },
  shared: ({
    "@bg-hoard/shared/auth": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      eager: true //true means it will be in my remoteEntry.js
    }
  }),
};
