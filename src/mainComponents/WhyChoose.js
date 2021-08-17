import React from 'react'



import onlineBanking from "../img/icon-online.svg"
import simpleBudgeting from "../img/icon-budgeting.svg"
import fastOnboarding from "../img/icon-onboarding.svg"
import openApi from "../img/icon-api.svg"


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


const WhyChoose = () => {

        const oneBenefit = benefitsList.map(benefit => (
        <div className={"benefit"} key={benefit.title}>
            <div className={"benefit__pictureWrapp"}>
                <img className={"benefit__picture"} src={benefit.picture} alt={benefit.title}/>
            </div>
            <h3 className={"benefit__title titleAll"}>{benefit.title}</h3>
            <p className={"benefit__text paragraphAll"}>{benefit.text}</p>
        </div>

    ))

    return (
        <section className={"whyChoose"}>
            <div className={"whyChoose__text"}>
                <h2 className={"whyChoose__title titleAll"}>Why choose Easybank?</h2>
                <p className={"whyChoose__paragraph paragraphAll"}>We leverege Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>

            {oneBenefit}
        </section>
    );
}

export default WhyChoose;





