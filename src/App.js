import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Text>App</Text>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
