import React from 'react';
import { Stack, Text } from '@react-native-material/core';
import Login from '../components/Login';

export default function LoginScreen() {
  return (
    <Stack spacing={6}>
      <Text variant='h5'>Login</Text>
      <Login />
    </Stack>
  );
}
