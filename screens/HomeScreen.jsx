import React, {useEffect, useState} from 'react';
import { SectionList, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-swipeable-row';
import styled from 'styled-components/native'
import { Appointment, SectionTitle } from '../components'
import { appointmentsApi } from '../api/index'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchAppointments = () => {
    setIsLoading(true)
    appointmentsApi.get().then(({ data }) =>  {
      setData(data.data)
      setIsLoading(false)
    }).catch(e => {
      console.log(e)
      setIsLoading(false)
    })
  }

  useEffect(fetchAppointments, [])

  const navigateToPatientDetails = (item) => {
    navigation.navigate('PatientCard', {item})
  }

  return (
    <Container>
      <SectionList
        sections={data}
        onRefresh={fetchAppointments}
        refreshing={isLoading}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>
          <Swipeable rightButtons={[<Text>left</Text>, <Text>right</Text>]}>
            <Appointment navigateToDetails={() => navigateToPatientDetails(item)} item={item}/>
          </Swipeable>
        }
        renderSectionHeader={({ section: { _id } }) => (
          <SectionTitle title={_id} />
        )}
      />
      <PlusButton onPress={() => navigation.navigate('AddPatient')}>
        <Ionicons name={'ios-add'} size={36} color={'white'} />
      </PlusButton>
    </Container>
  );
}

export default HomeScreen

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2A86FF;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2A86FF;
  shadow-opacity: 1;
  shadow-radius: 15px;
  elevation: 16;
`

const Container = styled.View`
  flex: 1;
`
