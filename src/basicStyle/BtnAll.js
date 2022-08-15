import React from 'react'
import styled from 'styled-components'

const BtnAll = styled.button`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.limeGreen} 0%,
    ${(props) => props.theme.colors.brightCyan} 100%
  );
  border-color: transparent;
  border-radius: 50px;
  height: 60px;
  width: 200px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background: linear-gradient(
      90deg,
      lighten(${(props) => props.theme.colors.limeGreen}, 10%) 0%,
      lighten(
          hsl(192, 70%, 51%) ${(props) => props.theme.colors.brightCyan},
          10%
        )
        100%
    );
  }
`

export default BtnAll
