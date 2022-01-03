import React from 'react';
import styled from 'styled-components/native'
import {getTitle} from "../utils/getTitle";

export const SectionTitle = ({ title }) => {
  const parsedDate = title.split('-')
  const date = getTitle(parsedDate[0], parsedDate[1]);
  return (
      <GroupTitle>
        {date}
      </GroupTitle>
  );
}

export default SectionTitle

const GroupTitle = styled.Text`
  font-weight: 700;
  font-size: 22px;
  color: #000000;
  margin-top: 25px;
  padding: 0 20px;
`
