import { Button, HStack, Stack, TextInput } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import userService from '../src/services/user.service';
import { home, registration } from '../src/static/ROUTER.KEY';
import { AuthValidationSchema } from './validation/userValidation';

export default function Login() {
  const navigation = useNavigation();
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={AuthValidationSchema}
        onSubmit={async (values) => {
          const user = await userService.login(values);
          localStorage.setItem('token', user?.token || '');
          navigation.navigate(home);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
        }) => (
          <Stack>
            <TextInput
              label='Email'
              onChangeText={handleChange('email')}
              value={values.email}
              placeholder={'Enter your email'}
              helperText={errors.email}
            />
            <TextInput
              label='Password'
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder={'Enter your password'}
              helperText={errors.password}
              secureTextEntry={true}
            />
            <Button title='Login' onPress={() => handleSubmit()}
              disabled={!values.email ||!!errors.email || !!errors.password}
            />
          </Stack>
        )}
      </Formik>
      <HStack items='center'>
        <Button
          title='Register'
          onPress={() => navigation.navigate(registration)}/>
      </HStack>
    </>
  );
}
