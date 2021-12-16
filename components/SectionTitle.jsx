import React from 'react';
import styled from 'styled-components/native'

export const SectionTitle = ({ title }) => {
  return (
      <GroupTitle>
        {title}
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
