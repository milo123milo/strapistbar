module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bb30ad28d54293ff789048c8868a1d74'),
  },
});
