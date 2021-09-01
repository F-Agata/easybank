import React from 'react'
import styled from 'styled-components'

import iconFacebook from "../img/icon-facebook.svg"
import iconYouTube from "../img/icon-youtube.svg"
import iconTwitter from "../img/icon-twitter.svg"
import iconPinterest from "../img/icon-pinterest.svg"
import iconInstagram from "../img/icon-instagram.svg"

const iconsList = [
    {name: iconFacebook},
    {name: iconYouTube},
    {name: iconTwitter},
    {name: iconPinterest},
    {name: iconInstagram},
]

const WrapIcon = styled.div`
  margin: 0px 5px;
  cursor: pointer;

  &:hover {
    color: hsl(136, 65%, 51%);
  }`

const Icon = styled.img`
  color: hsl(136, 65%, 51%);

  &:hover {
    color: hsl(136, 65%, 51%);
  }`

const FooterIcons = () => {

       const oneIcon = iconsList.map( (icon, index) => (
               <WrapIcon key={index}>
                 <Icon src={icon.name} alt={"icon"}/>
               </WrapIcon>
    ))

    return (
      oneIcon
    )
}

export default FooterIcons;