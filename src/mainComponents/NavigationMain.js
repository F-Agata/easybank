import React, {useState} from 'react'
import { useMediaQuery } from 'react-responsive'

import NavigationMainSmall from "./NavigationMainSmall";
import NavigationMainBig from "./NavigationMainBig";



import logo from "../img/logo.svg"
import navigationOpen from "../img/icon-hamburger.svg";
import navigationClose from "../img/icon-close.svg";


const menuItems = ["Home", "About", "Contact", "Blog", "Careers"]


const NavigationMain = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [iconMenu, setIconMenu] = useState(false)

    const m = useMediaQuery({query: '(min-width: 768px)' });
    const l = useMediaQuery({query: '(min-width: 992px)' });



    const changeMenu = () => {
        setIconMenu (!iconMenu);
        setIsOpen (!isOpen);
    };

    const hiddenMenu = () => {
        setIconMenu (!iconMenu);
        setIsOpen (!isOpen);
    };



    return (
        <div className="navigation">
            <div className={"navigation__wrapLogo"}>
                <img className={"navigation__logo"} src={logo} alt={"logo"}/>
            </div>



            {m? null :
                <div className={"navigation__wrapIconNavigation"}>
                   <img
                    className={"navigation__iconNavigation"}
                    onClick={changeMenu}
                    src={iconMenu ? navigationClose : navigationOpen}
                    alt={"menu"}
                   />
                </div>
            }


            {isOpen ?  <NavigationMainSmall menuItems={menuItems}/>: null}


            {m &&
                <>
                    {isOpen ? hiddenMenu() : null}

                    <NavigationMainBig menuItems={menuItems}/>

                </>
            }



            {l &&
            <button className={"navigation__btnRequestInvite btnAll"}>Request Invite</button>
            }


        </div>
    );
};

export default NavigationMain;

