import React from 'react';
import { Stack, Text } from '@react-native-material/core';
import Registration from '../components/Registration';

export default function RegistrationScreen() {
  return (
    <Stack spacing={6}>
      <Text variant='h5'>Registration</Text>
      <Registration />
    </Stack>
  );
}
