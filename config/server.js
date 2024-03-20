module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'dcdac7b54d44a1e7b7271f11e6fbaa9711aeacf5996e16557ea3fab0de62023a'),
    },
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),

  },
  myCustomVariables: {
    apiTokenSalt: env('API_TOKEN_SALT', 'ba89ca20cdfc05b8ea96c3527f8deee77acd7a4eccdce4405a2eb593e3c41d3f'),
    transferTokenSalt: env('TRANSFER_TOKEN_SALT', 'fe7fdbb2bb18cab45e6e1666fb4648ebf881ca93680c5cba1331c913fe0dccbb'),
    jwtSecret: env('JWT_SECRET', '440f8814c6bfeb1d64c76f683dad975436b6263408656690f9f24d6fce2b4a56'),
  }
});