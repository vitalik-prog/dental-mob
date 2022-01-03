import React, {useEffect, useState} from 'react';
import { SectionList, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import Swipeable from 'react-native-swipeable-row';
import styled from 'styled-components/native'
import { Appointment, SectionTitle } from '../components'
import { appointmentsApi } from '../api/index'

const DATA = [
  {
    _id: "11 september",
    data: [
      {
        id: 1,
        time: '12:00',
        active: true,
        diagnosis: 'some illness',
        user: {
          phone: '+7 (999) 111-23-33',
          fullname: 'patient name1',
          avatar: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'
        }
      },
      {
        id: 2,
        time: '13:00',
        diagnosis: 'another illness',
        user: {
          phone: '+7 (999) 111-23-33',
          fullname: 'patient name2',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcemOrw8mSjbGRWPILUjf-J-VArHi54RO7A&usqp=CAU'
        }
      },
    ]
  },
  {
    _id: "12 september",
    data: [
      {
        id: 3,
        time: '12:00',
        active: true,
        diagnosis: 'some illness',
        user: {
          phone: '+7 (999) 111-23-33',
          fullname: 'patient name1',
          avatar: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'
        }
      },
      {
        id: 4,
        time: '13:00',
        diagnosis: 'another illness',
        user: {
          phone: '+7 (999) 111-23-33',
          fullname: 'patient name2',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcemOrw8mSjbGRWPILUjf-J-VArHi54RO7A&usqp=CAU'
        }
      },
    ]
  },
  {
    _id: "13 september",
    data: [
      {
        id: 5,
        time: '12:00',
        active: true,
        diagnosis: 'some illness',
        user: {
          phone: '+7 (999) 111-23-33',
          fullname: 'patient name1',
          avatar: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'
        }
      },
      {
        id: 6,
        time: '13:00',
        diagnosis: 'another illness!!!',
        user: {
          phone: '+7 (999) 111-23-33',
          fullname: 'patient name2',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcemOrw8mSjbGRWPILUjf-J-VArHi54RO7A&usqp=CAU'
        }
      },
    ]
  },
  {
    _id: "14 september",
    data: [
      {
        id: 7,
        time: '12:00',
        active: true,
        diagnosis: 'some illness',
        user: {
          phone: '+7 (999) 111-23-33',
          fullname: 'patient name1',
          avatar: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'
        }
      },
      {
        id: 8,
        time: '13:00',
        diagnosis: 'another illness',
        user: {
          phone: '+7 (999) 111-23-33',
          fullname: 'patient name2',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcemOrw8mSjbGRWPILUjf-J-VArHi54RO7A&usqp=CAU'
        }
      },
    ]
  },
  {
    _id: "15 september",
    data: [
      {
        id: 9,
        time: '12:00',
        active: true,
        diagnosis: 'some illness',
        user: {
          phone: '+7 (999) 111-23-33',
          fullname: 'patient name1',
          avatar: 'https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg'
        }
      },
      {
        id: 10,
        time: '13:00',
        diagnosis: 'another illness',
        user: {
          phone: '+7 (999) 111-23-33',
          fullname: 'patient name2',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcemOrw8mSjbGRWPILUjf-J-VArHi54RO7A&usqp=CAU'
        }
      },
    ]
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null)

  useEffect(() => {
    appointmentsApi.get().then(({ data }) =>  setData(data.data)).catch(e => console.log(e))
  }, [])

  const navigateToPatientDetails = (item) => {
    navigation.navigate('PatientCard', {item})
  }
// console.log(DATA)
// console.log(data)
  return (
    <Container>
      <SectionList
        sections={data}
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
      <PlusButton>
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
