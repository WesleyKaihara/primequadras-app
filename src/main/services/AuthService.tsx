interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '9c48174c9018mc44v17j1r1lj7x6746',
        user: {
          name: 'Teste',
          email: 'teste@gmail.com',
        },
      });
    }, 2000);
  });
}
