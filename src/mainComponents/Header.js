import React from "react";
import styled from 'styled-components'

import BtnAll from "../basicStyle/BtnAll"
import ParagraphAll from "../basicStyle/ParagraphAll";
import TitleAll from "../basicStyle/TitleAll";

import headerIllustration from "../img/image-mockups.png"
import headerBgIllustrationMobile from "../img/bg-intro-mobile.svg"
import headerBgIllustrationDesktop from "../img/bg-intro-desktop.svg"

const HeaderWrapp = styled.header`
  min-width: 375px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: hsl(0, 0%, 98%) url("../img/bg-intro-mobile.svg") no-repeat right -30px;

  @media (min-width: 992px) {
    max-width: 1440px;
    flex-direction: row;
    background: hsl(0, 0%, 98%) url("../img/bg-intro-desktop.svg") no-repeat ;
    background-size: auto 200%;
    background-position: 650px -400px;
    position: relative;
    overflow: visible;
  }`

const WrapIllustration = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 98%;
  align-self: center;

  @media (min-width: 992px) {
    width: 50%;
    margin-right: 0px;
    padding-right: 0px;
    position: absolute;
    right:  0;
    top: 0;
    overflow-y: visible;
    z-index: 2;
  }`

const Illustration = styled.img`
  width: 100%;
  margin-top: -120px;

  @media (min-width: 992px) {
    margin-right: -220px;
    margin-top: -190px;
  }`

const TextWrapp = styled.div`
  margin: 20px;
  max-width: 500px;
  align-self: center;

  @media (min-width: 992px) {
    align-self: flex-start;
    width: 100%;
    flex-grow: 1;
    padding-left: 80px;
    margin-top: 120px;
    margin-bottom: 100px;
    padding-right: 10px;
    text-align: left;
  }`

const Title = styled(TitleAll)`
  margin-bottom: 20px;`

const BtnRequestInvite = styled(BtnAll)`
  margin: 40px 0;`

const  Header = () => {

    return (
        <HeaderWrapp>
            <WrapIllustration>
                <Illustration src={headerIllustration} alt={"headerIllustration"}/>
            </WrapIllustration>
            <TextWrapp>
                <Title>Next generation digital banking</Title>
                <ParagraphAll>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</ParagraphAll>
                <BtnRequestInvite>Request Invite</BtnRequestInvite>
            </TextWrapp>
        </HeaderWrapp>
    )
};

export default Header