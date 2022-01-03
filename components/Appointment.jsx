import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native'
import GrayText from "./GrayText";
import Badge from "./Badge";
import GetAvatarColor from '../utils/getAvatarColor'
import getAvatarColor from "../utils/getAvatarColor";

const Appointment = ({navigateToDetails, item }) => {
  const { patient, diagnosis, active, time } = item;
  const avatarColors = getAvatarColor(patient.fullname[0].toUpperCase())
  return (
    <GroupItem onPress={navigateToDetails}>
      <Avatar style={{ backgroundColor: avatarColors.background }}>
        <Letter style={{ color: avatarColors.color }}>{patient.fullname[0].toUpperCase()}</Letter>
      </Avatar>
      <View style={{flex: 1}}>
        <FullName>{patient.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <Badge active={active}>{time}</Badge>
    </GroupItem>
  );
}

export default Appointment

const FullName = styled.Text`
  font-weight: 700;
  font-size: 16px;
`

const Avatar = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`

const Letter = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`
