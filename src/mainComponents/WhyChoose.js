import React from 'react'
import styled from 'styled-components'

import TitleAll from "../basicStyle/TitleAll";
import ParagraphAll from "../basicStyle/ParagraphAll";

import WhyChooseOneBenefit from "./WhyChooseOneBenefit"

const WrappWhyChoose = styled.section`
  min-width: 375px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.theme.colors.lightGrayishBlue};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  @media (min-width: 992px) {
    max-width: 1440px;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 80px;
    justify-content: space-between;
  }`

const TextWrapp = styled.div`
  margin: 40px 20px;
  max-width: 500px;
  align-self: center;
  justify-self: center;

  @media (min-width: 992px) {
    max-width: 1440px;
    width: 100%;
    align-self: flex-start;
    flex-grow: 1;
    text-align: left;
  }`

const Title = styled(TitleAll)`
  margin-top: 20px;`

const Paragraph = styled(ParagraphAll)`
  margin-top: 20px;

  @media (min-width: 992px) {
    width: 55%;
  }`

const WhyChoose = () => {

    return (
        <WrappWhyChoose>
            <TextWrapp>
                <Title>Why choose Easybank?</Title>
                <Paragraph>We leverege Open Banking to turn your bank account into your financial hub. Control your finances like never before.</Paragraph>
            </TextWrapp>
            <WhyChooseOneBenefit/>
        </WrappWhyChoose>
    );
}

export default WhyChoose;





