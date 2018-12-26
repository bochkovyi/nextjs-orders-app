const settings = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  },
}

module.exports = {
  development: settings,
  test: settings,
  production: settings
};
