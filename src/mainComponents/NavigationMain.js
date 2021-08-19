import React, {useState} from 'react'
import { useMediaQuery } from 'react-responsive'



import logo from "../img/logo.svg"
import navigationOpen from "../img/icon-hamburger.svg";
import navigationClose from "../img/icon-close.svg";


const menuItems = ["Home", "About", "Contact", "Blog", "Careers"]


const NavigationMain = () => {

    const m = useMediaQuery({query: '(min-width: 768px)' });
    const l = useMediaQuery({query: '(min-width: 992px)' });
    const xl = useMediaQuery({query: '(min-width: 1224px)' });



    const menuItem = menuItems.map(item => (

        <li className={"navigation__li"} key={item}>
            <a className={"navigation__link paragraphAll"} href={"#"}>{item}</a>
        </li>

    ))


    return (
        <div className="navigation">
            <div className={"navigation__wrapLogo"}>
                <img className={"navigation__logo"} src={logo} alt={"logo"}/>
            </div>


            {m? null : <div className={"navigation__wrapIconNavigation"}>
                <img className={"navigation__iconNavigation"} src={navigationOpen} alt={"logo"}/>
            </div>}



            {/*<div className={"navigation__wrapNavigation"}>*/}
            {/*    <nav className={"navigation__navigation"}>*/}
            {/*        <ul className={"navigation__ul"}>*/}
            {/*            {menuItem}*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*</div>*/}

            {m &&

             <div className={"navigation__wrapNavigation"}>
                <nav className={"navigation__navigation"}>
                    <ul className={"navigation__ul"}>
                        {menuItem}
                    </ul>
                </nav>
             </div>
            }


            {l &&
            <button className={"navigation__btnRequestInvite btnAll"}>Request Invite</button>
            }


        </div>
    );
};

export default NavigationMain;

