import { Button, HStack, Stack, TextInput } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import userService from '../src/services/user.service';
import { login } from '../src/static/ROUTER.KEY';
import { AuthValidationSchema } from './validation/userValidation';

export default function Registration() {
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
          const user = await userService.registration({
            email: values.email,
            password: values.password,
          });
          localStorage.setItem('token', user.token || '');
          navigation.navigate(login);
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
            <Button title='Register' onPress={() => handleSubmit()}
              disabled={
                !values.email ||
                !values.password ||
                !!errors.email ||
                !!errors.password
              }
            />
          </Stack>
        )}
      </Formik>
      <HStack items='center'>
        <Button
          title='Log In'
          onPress={() => navigation.navigate(login)}
        />
      </HStack>
    </>
  );
}
