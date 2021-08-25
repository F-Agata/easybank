import React from 'react'
import NavigationMain from "./NavigationMain";


const NavigationMainSmall = ({menuItems}) => {

    const menuItem = menuItems.map(item => (

        <li className={"navigation__li--small"} key={item}>
            <a className={"navigation__link--small paragraphAll"} href={"#"}>{item}</a>
        </li>

    ));

    return (

        <div className={"navigation__wrapNavigation--small"}>
            <nav className={"navigation__navigation--small"}>
                <ul className={"navigation__ul--small"}>
                    {menuItem}
                </ul>
            </nav>
        </div>

    )
}

export default NavigationMainSmall;