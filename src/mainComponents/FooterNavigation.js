import React from 'react'
import styled from 'styled-components'

const itemsListFooterNavigation = [
    {name: "About Us"},
    {name: "Contact"},
    {name: "Blog"},
    {name: "Careers"},
    {name: "Support"},
    {name: "Privacy Policy"},
];

const NavigationWrapp = styled.nav`
  margin: 20px 0px;

  @media (min-width: 992px) {
    margin: 0;
    padding: 0;
  }`

const Navigation_ul = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 40px 0 40px;
    padding: 0;
    text-align: left;
    justify-content: space-between;
  }`

const Navigation_li = styled.li`
  padding: 10px;
  list-style: none;
  cursor: pointer;

  @media (min-width: 992px) {
    width: 50%;
    margin: 0;
    padding: 0 0 0 60px;
  }`

const Navigation_link = styled.a`
  color: hsl(220, 16%, 96%);
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: hsl(136, 65%, 51%);
  }`

const FooterNavigation = () => {

    const menuItem = itemsListFooterNavigation.map( (item, index) => (
        <Navigation_li className={`footerNavigation__liPosition${index}`} key={index}>
            <Navigation_link href={"#"}>{item.name}</Navigation_link>
        </Navigation_li>
    ))

    return (
        <NavigationWrapp>
            <Navigation_ul>
                {menuItem}
            </Navigation_ul>
        </NavigationWrapp>
    );
}

export default FooterNavigation;