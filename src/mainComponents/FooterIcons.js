import React from 'react'

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

const FooterIcons = () => {

       const oneIcon = iconsList.map( (icon, index) => (
               <div className={"footer__wrapIcon"} key={index}>
                 <img className={"footer__icon"} src={icon.name} alt={"icon"}/>
               </div>
    ))

    return (
      oneIcon
    )
}

export default FooterIcons;