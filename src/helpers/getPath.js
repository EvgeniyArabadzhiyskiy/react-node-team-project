export const getPath = path => {
  switch (path) {
    case '/login':
      return '/login';

    case '/register':
      return '/register';

    default:
      return '/login';
  }
};
