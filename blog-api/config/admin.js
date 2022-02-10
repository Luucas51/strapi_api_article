module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7bcce1b2f87f1acd13470d7f055da768'),
  },
});
