import React, {useState} from 'react'

// import "../scss/_NavigationMain.scss"

import logo from "../img/logo.svg"
import navigationOpen from "../img/icon-hamburger.svg";
import navigationClose from "../img/icon-close.svg";


const menuItems = ["Home", "About", "Contact", "Blog", "Careers"]

// const mainPartOfMenu =  <div className={"navigation__wrapNavigation"}>
//     <nav className={"navigation__navigation"}>
//         <ul className={"navigation__ul"}>
//             <li className={"navigation__li"}>
//                 <a className={"navigation__link"} href={"#"}>Home</a>
//             </li>
//             <li className={"navigation__li"}>
//                 <a className={"navigation__link"} href={"#"}>About</a>
//             </li>
//             <li className={"navigation__li"}>
//                 <a className={"navigation__link"} href={"#"}>Contact</a>
//             </li>
//             <li className={"navigation__li"}>
//                 <a className={"navigation__link"} href={"#"}>Blog</a>
//             </li>
//             <li className={"navigation__li"}>
//                 <a className={"navigation__link"} href={"#"}>Careers</a>
//             </li>
//         </ul>
//     </nav>
// </div>
const NavigationMain = () => {

    const menuItem = menuItems.map(item => (

        <li className={"navigation__li"} key={item}>
            <a className={"navigation__link"} href={"#"}>{item}</a>
        </li>

    ))


    return (
        <div className="navigation">
            <div className={"navigation__wrapLogo"}>
                <img className={"navigation__logo"} src={logo} alt={"logo"}/>
            </div>

            <div className={"navigation__wrapIconNavigation"}>
                <img className={"navigation__iconNavigation"} src={navigationOpen} alt={"logo"}/>
            </div>


            {/*<div className={"navigation__wrapNavigation"}>*/}
            {/*    <nav className={"navigation__navigation"}>*/}
            {/*        <ul className={"navigation__ul"}>*/}
            {/*            {menuItem}*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*</div>*/}


        </div>
    );
}

export default NavigationMain;

