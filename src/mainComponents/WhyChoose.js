import React from 'react'
import styled from 'styled-components'

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

const WhyChoose = () => {

    return (
        <WhyChooseWrapp>
            <div className={"whyChoose__text"}>
                <h2 className={"whyChoose__title titleAll"}>Why choose Easybank?</h2>
                <p className={"whyChoose__paragraph paragraphAll"}>We leverege Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <WhyChooseOneBenefit/>
        </WhyChooseWrapp>
    );
}

export default WhyChoose;





