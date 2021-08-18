import React from 'react'

import logoWhite from "../img/logo-white.svg";


import FooterIcons from "./FooterIcons";
import FooterNavigation from "./FooterNavigation";



const Footer = () => {


    return (
        <footer className={"footer"}>

            <div className={"footer__wrapLogo"}>
                <img className={"footer__logo"} src={logoWhite} alt={"logo"}/>
            </div>

            <div className={"footer__wrapIcons"}>
                <FooterIcons/>
            </div>

            <div className={"footer__wrapFooterNavigation"}>
                <FooterNavigation/>
            </div>

            <button className={"footer__btnRequestInvite btnAll"}>Request Invite</button>

            <p className={"footer__infoCopy paragraphAll"}>© Easybank, All Rights Reserved</p>




        </footer>
    );
}

export default Footer;