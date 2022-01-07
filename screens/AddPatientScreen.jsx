import React, {useState} from 'react';
import styled from 'styled-components/native'
import {Input, Center, NativeBaseProvider, FormControl, Stack} from "native-base"
import { Button, GrayText, Badge } from "../components";
import {patientsApi} from "../api";
import {useNavigation} from "@react-navigation/native";

const AddPatientScreen = () => {
  const [values, setValues] = useState({})
  const navigation = useNavigation();

  const handleChange = (name, text) => {
    setValues({
      ...values,
      [name]: text
    })
  }

  const handleSubmit = () => {
  patientsApi.add(values)
    .then(() => navigation.navigate('Patients'))
    .catch(e => alert(JSON.stringify(e.response.data.message)))
  }

  return (
    <NativeBaseProvider>
      <Container>
        <FormControl.Label style={{ marginTop: 12 }} >Name</FormControl.Label>
        <Input
          onChange={e => handleChange('fullname', e.nativeEvent.text)}
          autoFocus
          value={values.fullname}
          placeholder="Name"
        />
        <FormControl.Label style={{ marginTop: 12 }}>Phone number</FormControl.Label>
        <Input
          onChange={e => handleChange('phone', e.nativeEvent.text)}
          dataDetectorTypes={'phoneNumber'}
          keyboardType={'numeric'}
          value={values.phone}
          style={{ marginBottom: 30 }}
          placeholder="Phone"
        />
        <Button onPress={handleSubmit} color={'#87CC6F'}>
          + Add patient
        </Button>
      </Container>
    </NativeBaseProvider >
  );
};

export default AddPatientScreen;

const Container = styled.View`
  flex: 1;
  padding: 25px;
`
