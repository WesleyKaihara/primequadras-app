import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export function AppLayout({children}) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
