import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from './pages/list/List';
import AddUser from './pages/addUser/AddUser';

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go Back"
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="AddEditUser" component={AddUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
