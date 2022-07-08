import React from 'react';
import { FlatList } from 'react-native';
import { useQuery } from 'react-query';
import todoService from '../src/services/todo.service';
import { Todo } from '../src/static/QUERY.KEY';
import TodoElement from './TodoElement';

export default function TodoList() {
  const { data } = useQuery(Todo, todoService.getAllTodo.bind(todoService));
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <TodoElement todo={item} />}
    />
  );
}
