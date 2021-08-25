import React from 'react'

import iconFacebook from "../img/icon-facebook.svg"
import iconYouTube from "../img/icon-youtube.svg"
import iconTwitter from "../img/icon-twitter.svg"
import iconPinterest from "../img/icon-pinterest.svg"
import iconInstagram from "../img/icon-instagram.svg"

// TODO tutaj niepotrzebnie ręcznie dodany index

const iconsList = [
    {
      name: iconFacebook,
      // index: 0
    },
    {
      name: iconYouTube,
      // index: 1
    },
    {
      name: iconTwitter,
      // index: 2
    },
    {
      name: iconPinterest,
      // index: 3
    },
    {
      name: iconInstagram,
      // index: 4
    },
]

const FooterIcons = () => {

    // const oneIcon = iconsList.map(icon => (
    // TODO index jest dostępny przy każdym mapowaniu jako drugi argument funkcji
    const oneIcon = iconsList.map( (icon, index) => (
        // <div className={"footer__wrapIcon"} key={icon.index}>
        // TODO i zamiast icon.index po prostu index
        <div className={"footer__wrapIcon"} key={index}>
            <img className={"footer__icon"} src={icon.name} alt={"icon"}/>
        </div>
    ))

    return (
      oneIcon
    )
}

export default FooterIcons;