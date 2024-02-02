import React, {createContext, useState} from 'react';
import {signIn as logar} from '@services';

interface AuthContextData {
  signed: boolean;
  token: string | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<string | null>(null);

  async function signIn() {
    const response = await logar({
      email: 'wesley@email.com',
      senha: 'Wesley123',
    });
    setUser(response.access_token);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, token: user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
