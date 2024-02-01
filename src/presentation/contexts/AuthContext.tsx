import React, {createContext, useState} from 'react';
import {signIn as logar} from '@services';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await logar();

    setUser(response.user);

    console.log(response);
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
