import React from 'react'

// TODO tutaj to samo co w FooterIcons, index można wziąć z map

const itemsListFooterNavigation = [
    {name: "About Us"},
    {name: "Contact"},
    {name: "Blog"},
    {name: "Careers"},
    {name: "Support"},
    {name: "Privacy Policy"},
]

const FooterNavigation = () => {

    const menuItem = itemsListFooterNavigation.map( (item, index) => (
        <li className={`footerNavigation__li footerNavigation__liPosition${index}`} key={index}>
            <a className={"footerNavigation__link"} href={"#"}>{item.name}</a>
        </li>
    ))

    return (
        <nav className="footerNavigation">
            <ul className={"footerNavigation__ul"}>
                {menuItem}
            </ul>
        </nav>
    );
}

export default FooterNavigation;