import React from "react";




import headerIllustration from "../img/image-mockups.png"
import headerBgIllustrationMobile from "../img/bg-intro-mobile.svg"
import headerBgIllustrationDesktop from "../img/bg-intro-desktop.svg"

const  Header = () => {


    return (
        <div className="header">
            <div className={"header__wrapIllustration"} >
                <img className={"header__illustration"} src={headerIllustration} alt={"headerIllustration"}/>
            </div>

            <div className={"header__text"}>
                <h1 className={"header__title titleAll"}>Next generation digital banking</h1>
                <p className={"header__paragraph paragraphAll"}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button className={"header__btnGetStarted btnAll"}>Request Invite</button>
            </div>

        </div>
    )

};

export default Header