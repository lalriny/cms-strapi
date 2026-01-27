module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,

  url: env('STRAPI_URL', 'http://localhost:1337'),

  app: {
    keys: env.array('APP_KEYS'),
  },

  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

