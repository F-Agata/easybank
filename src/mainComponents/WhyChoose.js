import React from 'react'
import styled from 'styled-components'

import TitleAll from "../basicStyle/TitleAll";
import ParagraphAll from "../basicStyle/ParagraphAll";

import WhyChooseOneBenefit from "./WhyChooseOneBenefit"

const WhyChooseWrapp = styled.section`
  min-width: 375px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: hsl(220, 16%, 96%);
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
  }
`

const WhyChoose__TextWrapp = styled.div`
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
  }
`
const WhyChoose__title = styled(TitleAll)`
  margin-top: 20px;
`

const WhyChoose__paragraph = styled(ParagraphAll)`
  margin-top: 20px;

  @media (min-width: 992px) {
    width: 55%;
  }
`

const WhyChoose = () => {

    return (
        <WhyChooseWrapp>
            <WhyChoose__TextWrapp>
                <WhyChoose__title>Why choose Easybank?</WhyChoose__title>
                <WhyChoose__paragraph>We leverege Open Banking to turn your bank account into your financial hub. Control your finances like never before.</WhyChoose__paragraph>
            </WhyChoose__TextWrapp>
            <WhyChooseOneBenefit/>
        </WhyChooseWrapp>
    );
}

export default WhyChoose;





