import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createTodo, login } from '../src/static/ROUTER.KEY';
import TodoList from '../components/TodoList';
import { Stack, Button } from '@react-native-material/core';

export default function HomeScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigation.navigate(login);
  }, []);
  return (
    <Stack>
      <Button title='Create new Todo'
        onPress={() => {
          return navigation.navigate(createTodo);
        }}
      />
      {localStorage.getItem('token')?<TodoList />:
      null
      }
      <Button title='LogOut'
        onPress={() => {
          localStorage.setItem('token', '');
          return navigation.navigate(login);
        }}
      />
    </Stack>
  );
}
