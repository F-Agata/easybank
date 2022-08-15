import React from 'react'
import styled from 'styled-components'

import LinkAll from '../basicStyle/LinkAll'

const NavigationWrapp = styled.div`
  flex-grow: 1;
  align-self: center;
`

const NavigationUl = styled.ul`
  display: flex;
  height: 60px;
  justify-content: center;
`

const NavigationLi = styled.li`
  margin: 0px 20px;
  list-style: none;
  cursor: pointer;
  line-height: 60px;
  border-bottom: white 4px solid;
  :hover {
    border-bottom: ${(props) => props.theme.colors.limeGreen} 4px solid;
  }
`

const NavigationLink = styled(LinkAll)`
  text-decoration: none;
  height: 60px;
  :hover {
    color: black;
  }
`

const NavigationMainListBig = ({ menuItems }) => {
  const menuItem = menuItems.map((item, index) => (
    <NavigationLi key={index}>
      <NavigationLink href={'#'}>{item}</NavigationLink>
    </NavigationLi>
  ))

  return (
    <NavigationWrapp>
      <nav>
        <NavigationUl>{menuItem}</NavigationUl>
      </nav>
    </NavigationWrapp>
  )
}

export default NavigationMainListBig
