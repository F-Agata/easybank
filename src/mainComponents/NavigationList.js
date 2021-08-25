import React from 'react'

const NavigationMainList = ({ menuItems, classType }) => {

    const menuItem = menuItems.map(item => (

        <li className={`navigation__li--${classType}`} key={item}>
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