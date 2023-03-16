import http from './httpServices';
export const loginUser = (data) => {
  return http.post('/api/user/login', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
