import React from 'react'
import styled from 'styled-components'


const BtnAll = styled.button`
  background:  linear-gradient(90deg, hsl(136, 65%, 51%) 0%, hsl(192, 70%, 51%) 100%);
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

  &:hover {
    background:  linear-gradient(90deg, lighten(hsl(136, 65%, 51%),10%) 0%, lighten(hsl(192, 70%, 51%),10%) 100%);
  }`;

export default BtnAll;