import React from 'react'


import iconFacebook from "../img/icon-facebook.svg"
import iconYouTube from "../img/icon-youtube.svg"
import iconTwitter from "../img/icon-twitter.svg"
import iconPinterest from "../img/icon-pinterest.svg"
import iconInstagram from "../img/icon-instagram.svg"

const iconsList = [
    {name: iconFacebook,
     index: 0},
    {name: iconYouTube,
     index: 1},
    {name: iconTwitter,
     index: 2},
    {name: iconPinterest,
     index: 3},
    {name: iconInstagram,
     index: 4},

   ]

const FooterIcons = () => {

    const oneIcon = iconsList.map(icon => (
        <div className={"footer__wrapIcon"} key={icon.index}>
            <img className={"footer__icon"} src={icon.name} alt={"icon"}/>
        </div>
    ))

    return (

                oneIcon
    )


}

export default FooterIcons;