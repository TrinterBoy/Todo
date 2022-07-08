import React from 'react';
import { Button, ListItem, Stack, Switch, TextInput }
  from '@react-native-material/core';
import { Formik } from 'formik';
import todoService from '../src/services/todo.service';
import { useNavigation } from '@react-navigation/native';
import { home } from '../src/static/ROUTER.KEY';
import { useMutation } from 'react-query';
import { queryClient } from '../App';
import { Todo } from '../src/static/QUERY.KEY';
import { TodoValidationSchema } from './validation/todoValidation';
import { ITodoStrict } from '../types/todoTypes';

interface IProps{
    todo: ITodoStrict;
}

export default function UpdateTodo({ todo }: IProps) {
  const navigation = useNavigation();
  const onSuccessMutation = {
    onSuccess: () => queryClient.invalidateQueries(Todo),
  };
  const mutationUpdate = useMutation(
      todoService.updateTodo.bind(todoService),
      onSuccessMutation,
  );

  return (
    <Formik
      initialValues={
        {
          title: todo.title,
          description: todo.description,
          year: todo.year,
          public: todo.public,
          completed: todo.completed,
        }
      }
      validationSchema={TodoValidationSchema}
      onSubmit={async (values) => {
        mutationUpdate.mutate({ id: todo._id, updatedTodo: values });
        navigation.navigate(home);
      }}
    >
      {({
        values,
        handleChange,
        setFieldValue,
        handleSubmit,
        errors,
      }) => (
        <Stack>
          <TextInput
            label='Title'
            onChangeText={handleChange('title')}
            value={values.title}
            helperText={errors.title}
            placeholder={'Enter your title'}
          />
          <TextInput
            label='Description'
            onChangeText={handleChange('description')}
            value={values.description}
            helperText={errors.description}
            placeholder={'Enter description Todo'}
          />
          <TextInput
            label='Year'
            onChangeText={handleChange('year')}
            value={`${values.year}`}
            helperText={errors.year}
          />
          <ListItem
            title="Completed"
            trailing={
              <Switch
                value={values.completed}
                onValueChange={
                  (nextValue) => setFieldValue('completed', nextValue)
                }
              />
            }
          />
          <ListItem
            title="Public"
            trailing={
              <Switch
                value={values.public}
                onValueChange={
                  (nextValue) => setFieldValue('public', nextValue)
                }
              />
            }
          />
          <Button
            onPress={() => handleSubmit()}
            title={'Update'}
            disabled={
              !values.title ||
              !values.year ||
              !values.description ||
              !!errors.description ||
              !!errors.title ||
              !!errors.year
            }
          />
        </Stack>

      )}
    </Formik>
  );
}
