import React, {useState} from 'react';
import {
  Button,
  NativeModules,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';

import RTNMyFirstTurboModule from 'rtn-newarchnnapp/js/NativeMyFirstModule';

const App = (): JSX.Element => {
  const [value, setValue] = useState('');
  const [data, setData] = useState('');
  const onChangePhoneNu = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const currText = e.nativeEvent.text;
    setValue(currText);
  };

  const handleAskJava = async () => {
    const javaAskResult = await NativeModules.MyModule.askJava();
    console.log({javaAskResult});
    setData(javaAskResult);
  };

  const handleAskJavaWithTurboModule = async () => {
    const javaWithTurboModule = await RTNMyFirstTurboModule?.add(10, 7);
    console.log({javaWithTurboModule});
    setData(javaWithTurboModule?.toString() as string);
  };

  return (
    <View style={styles.appBack}>
      <Text style={styles.appHeading}>App</Text>
      <TextInput
        onChange={onChangePhoneNu}
        keyboardType={'number-pad'}
        style={styles.inputNumber}
        placeholder="Enter Number"
        placeholderTextColor={'black'}
        value={value}
      />
      <View style={styles.submitBtn}>
        <Button title="Validate" />
      </View>
      <Text>{value && parseInt(value) + 1}</Text>
      <Button onPress={handleAskJava} title="Ask Java" />
      <Button
        onPress={handleAskJavaWithTurboModule}
        title="Ask Java with TurboModules"
      />
      {data && <Text>data</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  appBack: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeading: {
    textAlign: 'center',
    fontSize: 60,
  },
  inputNumber: {
    borderWidth: 1,
    width: '90%',
    color: 'black',
    marginTop: 5,
  },
  submitBtn: {
    width: '90%',
    marginTop: 5,
  },
});

export default App;
