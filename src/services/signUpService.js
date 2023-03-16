import http from './httpServices';
export const signUpUser = (data) => {
  return http.post('/api/user/register', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
