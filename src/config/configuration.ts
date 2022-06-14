export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
    expiresIn: process.env.EXPIREIN || '1h',
  },
});
