import React from 'react';
import styled from 'styled-components/native'
import {Foundation, Ionicons, Feather} from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Button, GrayText, Badge } from "../components";

const PatientDetailsScreen = () => {
  const { params: { item } } = useRoute();

  return (
    <Container>
      <PatientDetails>
        <PatientFullName>
          {item.patient.fullname}
        </PatientFullName>
        <GrayText>{item.patient.phone}</GrayText>
        <PatientButtons>
          <FormulaView><Button>Dental formula</Button></FormulaView>
          <PhoneView>
            <Button color={'#84D269'}>
              <Foundation name={'telephone'} size={22} color={'white'}/>
            </Button>
          </PhoneView>
        </PatientButtons>
      </PatientDetails>
      <PatientAppointments>
        <AppointmentCard>
          <MoreButton>
            <Feather name="more-vertical" size={24} color="gray" />
          </MoreButton>
          <AppointmentCardRow>
            <Ionicons name={'md-medical'} size={16} color={'#A3A3A3'}/>
            <AppointmentCardLabel>
              Tooth: <AppointmentCardLabelNumber>12</AppointmentCardLabelNumber>
            </AppointmentCardLabel>
          </AppointmentCardRow>
          <AppointmentCardRow>
            <Foundation name={'clipboard-notes'} size={16} color={'#A3A3A3'}/>
            <AppointmentCardLabel>
              Diagnosis: <AppointmentCardLabelNumber>some diagnosis</AppointmentCardLabelNumber>
            </AppointmentCardLabel>
          </AppointmentCardRow>
          <AppointmentCardRow style={{ justifyContent: 'space-between', marginTop: 15 }}>
            <Badge active style={{ width: 160 }}>
              11.10.2019 - 15:40
            </Badge>
            <Badge color={'green'}>1500 P</Badge>
          </AppointmentCardRow>
        </AppointmentCard>
      </PatientAppointments>
    </Container>
  );
};

export default PatientDetailsScreen;

const Container = styled.View`
  flex: 1;
`

const PatientDetails = styled.View`
  padding: 25px;
`

const PatientFullName = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 3px;
`

const PatientButtons = styled.View`
  margin-top: 20px;
  flex-direction: row;
`

const FormulaView = styled.View`
  flex-grow: 1;
`

const PhoneView = styled.View`
  margin-left: 10px;
  width: 45px;
`

const PatientAppointments = styled.View`
  background: #f8fafd;
  padding-top: 20px;
  flex: 1;
`

const AppointmentCard = styled.View`
  shadow-color: black;
  shadow-opacity: 0.8;
  shadow-radius: 5px;
  elevation: 1;
  padding: 20px 25px;
  border-radius: 10px;
  background: white;
  margin: 0 20px;
`

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`

const AppointmentCardLabelNumber = styled.Text`
  font-weight: 700;
`

const MoreButton = styled.View`
  position: absolute;
  right: 5px;
  top: 25px;
  height: 32px;
  width: 32px;
`
