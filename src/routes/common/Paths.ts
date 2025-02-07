
export default {
  Base: '/api',
  Users: {
    Base: '/users',
    Common: '/:id',
    Get: '/all',
    Add: '/add',
    Update: '/:id',
    Delete: '/delete/:id',
  },
} as const;
