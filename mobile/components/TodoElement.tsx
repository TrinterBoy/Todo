import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { updateTodo } from '../src/static/ROUTER.KEY';
import { HStack, Stack, Text, Button } from '@react-native-material/core';
import todoService from '../src/services/todo.service';
import { useMutation } from 'react-query';
import { Todo } from '../src/static/QUERY.KEY';
import { queryClient } from '../App';
import ITodo, { ITodoStrict } from '../types/todoTypes';

interface ITodoElement{
    todo: ITodoStrict
}

export default function TodoElement({ todo }: ITodoElement) {
  const navigation = useNavigation();
  const mutation = useMutation(
      todoService.deleteTodo.bind(todoService),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(Todo);
        },
      });
  return (
    <HStack spacing={10} m={20} justify="between">
      <Stack>
        <Text variant='h6'>{todo.title}-{todo.year}</Text>
        <Text variant='subtitle1'>{todo.description}</Text>
        <Text variant='subtitle1'>
          {todo.completed ? 'Completed' : 'Uncompleted'}</Text>
        <Text variant='subtitle1'>{todo.public ? 'Public' : 'Private'}</Text>
      </Stack>
      <Stack>
        <Button
          title='edit'
          onPress={() => {
            return navigation.navigate(updateTodo, todo);
          }}
        />
        <Button
          title='delete'
          onPress={() => mutation.mutate(todo._id) }
        />
      </Stack>
    </HStack>
    // <Stack spacing={10} mt={10}>
    //   <HStack spacing={20} items='end'>
    //     <Text variant='h6'>{todo.title}</Text>
    //     < Text variant='subtitle2'>{todo.year}</Text>
    //   </HStack>
    //   <Text variant='subtitle1'>{todo.description}</Text>
    //   <HStack spacing={20}>
    //     <Text variant='subtitle1'>
    //       {todo.completed ? 'Completed' : 'Uncompleted'}</Text>
    //     <Text variant='subtitle1'>{todo.public ? 'Public' : 'Private'}</Text>
    //   </HStack>
    //   <HStack spacing={20}>
    //     <Button
    //       title='edit'
    //       onPress={() => {
    //         return navigation.navigate(updateTodo, todo);
    //       }}
    //     />
    //     <Button
    //       title='delete'
    //       onPress={() => mutation.mutate(todo._id) }
    //     />
    //   </HStack>
    // </Stack>
  );
}
