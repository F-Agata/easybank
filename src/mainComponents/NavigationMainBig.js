import React from 'react'
import NavigationMain from "./NavigationMain";


const NavigationMainBig = ({menuItems}) => {

    const menuItem = menuItems.map(item => (

        <li className={"navigation__li--big"} key={item}>
            <a className={"navigation__link--big paragraphAll"} href={"#"}>{item}</a>
        </li>

    ));

    return (

        <div className={"navigation__wrapNavigation--big"}>
            <nav className={"navigation__navigation--big"}>
                <ul className={"navigation__ul--big"}>
                    {menuItem}
                </ul>
            </nav>
        </div>

    )
}

export default NavigationMainBig;