import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createTodo } from '../src/static/ROUTER.KEY';
import TodoList from '../components/TodoList';
import { Stack, Button } from '@react-native-material/core';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <Stack>
      <Button title='Create new Todo'
        onPress={() => {
          return navigation.navigate(createTodo);
        }}
      />
      <TodoList />
    </Stack>
  );
}
