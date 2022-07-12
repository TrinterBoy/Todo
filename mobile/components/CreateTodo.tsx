import React from 'react';
import { Button, ListItem, Stack, Switch } from '@react-native-material/core';
import { Formik } from 'formik';
import todoService from '../src/services/todo.service';
import { useNavigation } from '@react-navigation/native';
import { home } from '../src/static/ROUTER.KEY';
import { useMutation } from 'react-query';
import { TextInput } from '@react-native-material/core';
import { TodoValidationSchema } from './validation/todoValidation';
import { ITodo } from '../types/todoTypes';
import { queryClient } from '../App';
import { Todo } from '../src/static/QUERY.KEY';


export default function CreateTodo() {
  const onSuccessMutation = {
    onSuccess: () => queryClient.invalidateQueries(Todo),
  };
  const navigation = useNavigation();
  const mutation = useMutation(
      todoService.addTodo.bind(todoService),
      onSuccessMutation,
  );

  return (
    <Formik
      initialValues={
        {
          title: '',
          description: '',
          year: new Date().getFullYear(),
          public: false,
          completed: false,
        }
      }
      validationSchema={TodoValidationSchema}
      onSubmit={async (values:ITodo) => {
        mutation.mutate(values);
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
            title={'Create'}
            disabled={
              !values.title ||
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
