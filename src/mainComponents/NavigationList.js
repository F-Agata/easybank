import React from 'react'
import styled from 'styled-components'

import ParagraphAll from "../basicStyle/ParagraphAll";

const NavigationMainList = ({ menuItems, classType }) => {

    const menuItem = menuItems.map( (item, index) => (
        <li className={`navigation__li--${classType}`} key={index}>
            <a className={`navigation__link--${classType} paragraphAll`} href={"#"}>{item}</a>
        </li>
    ));

    return (

        <div className={`navigation__wrapNavigation--${classType}`}>
            <nav className={`navigation__navigation--${classType}`}>
                <ul className={`navigation__ul--${classType}`}>
                    {menuItem}
                </ul>
            </nav>
        </div>
    )
}

export default NavigationMainList;