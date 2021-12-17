import styled from 'styled-components/native'

export default styled.Text`
  background: ${props => {
        if (props.active) {
          return '#2A86FF'
        }
      
        if (props.color) {
          return 'rgba(132, 210, 105, 0.21)'
        }
        return '#E9F5FF'
        }
  };
  color: ${props => {
      if (props.active) {
        return '#fff'
      }
      
      if (props.color) {
        return '#61BB42'
      }
      return '#4294ff' 
    }
  };
  border-radius: 18px;
  font-weight: 700;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 32px;
`