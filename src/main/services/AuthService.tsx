import axios from 'axios';
import {PRIME_QUADRAS_API} from '@env';

interface Response {
  access_token: string;
  user: {sub: number; nome: string};
}

type Login = {
  email: string;
  senha: string;
};

export async function signIn({email, senha}: Login): Promise<Response> {
  const {data} = await axios.post(`${PRIME_QUADRAS_API}/auth/login`, {
    email,
    senha,
  });
  return data;
}
