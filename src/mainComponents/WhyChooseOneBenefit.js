import React from 'react'
import styled from 'styled-components'

import onlineBanking from "../img/icon-online.svg"
import simpleBudgeting from "../img/icon-budgeting.svg"
import fastOnboarding from "../img/icon-onboarding.svg"
import openApi from "../img/icon-api.svg"

import TitleAll from "../basicStyle/TitleAll";
import ParagraphAll from "../basicStyle/ParagraphAll";

const benefitsList = [
    {picture: onlineBanking,
        title: "Online Banking",
        text: "Individual property parameters are set respectively. Because the image is put underneath the color overlay, its property parameters are also placed after color overlay parameters."
    },
    {picture: simpleBudgeting,
        title: "Simple Budgeting",
        text: "Benefit of this method is you can implement it for other cases easily, for example, you want to make the blue color overlaying the image with certain opacity.security features we allow to help secure your files"
    },
    {picture: fastOnboarding,
        title: "Fast Onboarding",
        text: "Securely share files and foldesr with friends, family and colleagues for live collaboration. No email attachments required"
    },
    {picture: openApi,
        title: "Open API",
        text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."}
]

const OneBenefitWrapp = styled.div`
    margin: 40px 20px;
    max-width: 500px;
    align-self: center;
    justify-self: center;

    @media (min-width: 992px) {
       width: 23%;
       text-align: left;
       align-self: stretch;
      margin: 40px 0px;
}`;

const TitleAll__Benefit = styled(TitleAll)`
  margin: 20px 0;
  font-size: 24px;
`

const WhyChooseOneBenefit = () => {

    const oneBenefit = benefitsList.map( (benefit, index) => (
        <OneBenefitWrapp  key={index}>
            <div className={"benefit__pictureWrapp"}>
                <img className={"benefit__picture"} src={benefit.picture} alt={benefit.title}/>
            </div>
            <TitleAll__Benefit>{benefit.title}</TitleAll__Benefit>
            <ParagraphAll>{benefit.text}</ParagraphAll>
        </OneBenefitWrapp>
    ))

    return (
            oneBenefit
    );
}

export default WhyChooseOneBenefit;