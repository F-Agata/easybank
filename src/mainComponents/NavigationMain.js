import React, {useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import NavigationListBig from "./NavigationListBig";
import NavigationListSmall from "./NavigationListSmall";

import BtnAll from "../basicStyle/BtnAll";

import logo from "../img/logo.svg"
import navigationOpen from "../img/icon-hamburger.svg";
import navigationClose from "../img/icon-close.svg";

const menuItems = ["Home", "About", "Contact", "Blog", "Careers"]

const WrappNavigation = styled.aside`
  height: 60px;
  align-self: center;
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;

  @media (min-width: 992px) {
    max-width: 1440px;
    padding: 0px 60px
  }`

const WrappLogo = styled.div`
  height: 25px;
  margin-left: 20px;
  justify-self: flex-start;`

const Logo = styled.img`
  height: 100%;`

const WrapIcon = styled.div`
  height: 25px;
  margin-right: 20px;
  justify-self: flex-end;
  flex-grow: 1;
  text-align: right;`

const Icon = styled.img`
  height: 100%;`

const BtnRequestInvite = styled(BtnAll)`
  @media (min-width: 992px) {
    justify-self: flex-end;
    align-self: center;
    height: 40px;
    margin-right: 20px;
  }`

const NavigationMain = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [iconMenu, setIconMenu] = useState(false)

    const m = useMediaQuery({query: '(min-width: 768px)' });
    const l = useMediaQuery({query: '(min-width: 992px)' });

    const changeMenu = () => {
        setIconMenu (!iconMenu);
        setIsOpen (!isOpen);
    };

    return (
        <WrappNavigation>
            <WrappLogo>
                <Logo src={logo} alt={"logo"}/>
            </WrappLogo>
            { m ? null :
                <WrapIcon>
                   <Icon
                    onClick={changeMenu}
                    src={ iconMenu ? navigationClose : navigationOpen }
                    alt={"menu"}
                   />
                </WrapIcon>
            }
            { isOpen && !m ?
                <NavigationListSmall menuItems={menuItems}/> : null
            }
            { m &&
                <NavigationListBig menuItems={menuItems}/>
            }
            { l &&
                <BtnRequestInvite>Request Invite</BtnRequestInvite>
            }
        </WrappNavigation>
    );
};

export default NavigationMain;

