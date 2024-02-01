import {Router} from '@routes';
import * as React from 'react';
import 'react-native-gesture-handler';
import {AuthProvider} from 'src/presentation/contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
