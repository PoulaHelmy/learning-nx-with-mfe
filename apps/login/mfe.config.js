module.exports = {
  name: 'login',
  exposes: {
    './Module': 'apps/login/src/app/remote-entry/entry.module.ts',
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
