import React from "react";
import styled from 'styled-components'

import LinkAll from "../basicStyle/LinkAll";

const NavigationWrapp = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 350px;
  height: 300px;
  background-color: white;`

const NavigationUl = styled.ul`
  display: flex;
  flex-direction: column;
  height: 60px;
  background-color: white;`

const NavigationLi = styled.li`
  list-style: none;
  cursor: pointer;
  line-height: 60px;
  :hover a {
    color: ${props => props.theme.colors.limeGreen};
  }`

const NavigationLink = styled(LinkAll)`
  text-decoration: none;
  height: 60px;
  color: black;`

const NavigationMainListSmall = ({ menuItems }) => {

    const menuItem = menuItems.map( (item, index) => (
        <NavigationLi key={index}>
            <NavigationLink href={"#"}>{item}</NavigationLink>
        </NavigationLi>
    ));

    return (
        <NavigationWrapp>
            <nav>
                <NavigationUl>
                    {menuItem}
                </NavigationUl>
            </nav>
        </NavigationWrapp>
    )
}

export default NavigationMainListSmall;