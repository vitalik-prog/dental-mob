import React, {useEffect, useState} from 'react';
import { SectionList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import styled from 'styled-components/native'
import { Appointment, SectionTitle } from '../components'

const DATA = [
  {
    title: "11 september",
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
    title: "12 september",
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
    title: "13 september",
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
    title: "14 september",
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
    title: "15 september",
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
    axios.get('').then(({ data }) => setData(data))
  }, [])

  const navigateToPatientDetails = (item) => {
    navigation.navigate('PatientCard', {item})
  }

  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Appointment navigateToDetails={() => navigateToPatientDetails(item)} item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle title={title} />
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
