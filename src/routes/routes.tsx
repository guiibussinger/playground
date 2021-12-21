import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './stacks/AuthStack';
import { useAuth } from '@hooks';

const Routes = () => {
  const { user } = useAuth();
  return <NavigationContainer>{user ? null : <AuthStack />}</NavigationContainer>;
};

export default Routes;
