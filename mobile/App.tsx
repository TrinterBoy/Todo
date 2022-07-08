import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import CreateTodoScreen from './screens/CreateTodoScreen';
import { createTodo, home, updateTodo } from './src/static/ROUTER.KEY';
import UpdateTodoScreen from './screens/UpdateTodoScreen';


export const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={home} component={HomeScreen} />
          <Stack.Screen name={createTodo} component={CreateTodoScreen} />
          <Stack.Screen name={updateTodo} component={UpdateTodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}


