module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dcdac7b54d44a1e7b7271f11e6fbaa9711aeacf5996e16557ea3fab0de62023a'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'ba89ca20cdfc05b8ea96c3527f8deee77acd7a4eccdce4405a2eb593e3c41d3f'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'fe7fdbb2bb18cab45e6e1666fb4648ebf881ca93680c5cba1331c913fe0dccbb'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
