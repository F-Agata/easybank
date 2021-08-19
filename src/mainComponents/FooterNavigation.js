import React from 'react'


const itemsListFooterNavigation = [
    {name: "About Us",
        index: 0},
    {name: "Contact",
        index: 1},
    {name: "Blog",
        index: 2},
    {name: "Careers",
        index: 3},
    {name: "Support",
        index: 4},
    {name: "Privacy Policy",
        index: 5},

]

const FooterNavigation = () => {

    const menuItem = itemsListFooterNavigation.map(item => (

        <li className={"footerNavigation__li"} key={item.index}>
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