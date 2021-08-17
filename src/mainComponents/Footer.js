import React from 'react'

import logo from "../img/logo.svg";


import FooterIcons from "./FooterIcons";
import FooterNavigation from "./FooterNavigation";



const Footer = () => {


    return (
        <footer className={"footer"}>

            <div className={"footer__wrapLogo"}>
                <img className={"footer__logo"} src={logo} alt={"logo"}/>
            </div>

            <div className={"footer__wrapIcons"}>
                <FooterIcons/>
            </div>

            <div className={"footer__wrapFooterNavigation"}>
                <FooterNavigation/>
            </div>

            <button className={"header__btnGetStarted btnAll"}>Request Invite</button>

            <p className={"footer__info paragraphAll"}>© Easybank, All Rights Reserved</p>




        </footer>
    );
}

export default Footer;