import React, {createContext, useContext, useState} from 'react';
import {signIn as logar} from '@services';

interface AuthContextData {
  signed: boolean;
  user: {nome: string; id: number} | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<any | null>(null);

  async function signIn() {
    const response = await logar({
      email: 'wesley@email.com',
      senha: 'Wesley123',
    });

    if (response) {
      setUser(response.user);
    }
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user: user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
