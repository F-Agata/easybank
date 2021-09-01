import React from 'react'
import styled from 'styled-components'

import ParagraphAll from "../basicStyle/ParagraphAll";
import BtnAll from "../basicStyle/BtnAll";

import logoWhite from "../img/logo-white.svg";
import FooterIcons from "./FooterIcons";
import FooterNavigation from "./FooterNavigation";

const WrappFooter = styled.footer`
  min-width: 375px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 30px 0px;
  background-color:  hsl(233, 26%, 24%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media (min-width: 992px) {
    max-width: 1440px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 40px 80px;
  }`

const LogoAndIconsWrapper = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }`

const WrapLogo = styled.div`
  margin: 20px 0px;

  @media (min-width: 992px) {
    margin: 0px;
  }`

const WrapIcons = styled.div`
  display: flex;
  justify-content: center;
 }`

const WrapFooterNavigation = styled.div`
  @media (min-width: 992px) {
    width: 50%;
    max-width: 500px;
  }`

const BtnAndCopyWrapper = styled.div`
  @media (min-width: 992px) {
    text-align: right;
    margin: 0;
    justify-self: flex-end;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }`

const BtnRequestInvite = styled(BtnAll)`
  align-self: center;
  margin: 20px 0px;

  @media (min-width: 992px) {
    margin: 0;
    align-self: flex-end;
  }`

const InfoCopy = styled(ParagraphAll)`
  margin: 20px 0px;

  @media (min-width: 992px) {
    margin: 0;
  }`

const Footer = () => {

    return (
        <WrappFooter>
            <LogoAndIconsWrapper>
             <WrapLogo>
                <img className={"footer__logo"} src={logoWhite} alt={"logo"}/>
             </WrapLogo>
             <WrapIcons>
                <FooterIcons/>
             </WrapIcons>
            </LogoAndIconsWrapper>
            <WrapFooterNavigation>
                <FooterNavigation/>
            </WrapFooterNavigation>
            <BtnAndCopyWrapper>
             <BtnRequestInvite>Request Invite</BtnRequestInvite>
             <InfoCopy>© Easybank, All Rights Reserved</InfoCopy>
            </BtnAndCopyWrapper>
        </WrappFooter>
    );
}

export default Footer;