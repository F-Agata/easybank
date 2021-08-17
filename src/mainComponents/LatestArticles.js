import React from 'react'


import article1img from "../img/image-currency.jpg"
import article2img from "../img/image-restaurant.jpg"
import article3img from "../img/image-plane.jpg"
import article4img from "../img/image-confetti.jpg"


const articlesList = [
    {picture: article1img,
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        text: "Individual property parameters are set respectively. Because the image is put underneath the color overlay, its property parameters are also placed after color overlay parameters."
    },
    {picture: article2img,
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        text: "Benefit of this method is you can implement it for other cases easily, for example, you want to make the blue color overlaying the image with certain opacity.security features we allow to help secure your files"
    },
    {picture: article3img,
        author: "Wilson Hutton",
        title: "Take Your Easybank card wherever you go",
        text: "Securely share files and foldesr with friends, family and colleagues for live collaboration. No email attachments required"
    },
    {picture: article4img,
        author: "Claire Robinson",
        title: "Our Invite-only Beta accounts are now live!",
        text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."}
]


const LatestArticles = () => {

    const oneArticle = articlesList.map(article => (
        <div className={"oneArticle"} key={article.title}>
            <div className={"oneArticle__pictureWrapp"}>
                <img className={"oneArticle__picture"} src={article.picture} alt={article.title}/>
            </div>
            <p className={"oneArticle__author paragraphAll"}>By {article.author}</p>
            <h3 className={"oneArticle__title titleAll"}>{article.title}</h3>
            <p className={"oneArticle__text paragraphAll"}>{article.text}</p>
        </div>

    ))

    return (
        <section className={"latestArticles"}>
            <div className={"latestArticles__text"}>
                <h2 className={"latestArticles__title titleAll"}>Latest Articles</h2>
            </div>

            {oneArticle}
        </section>
    );
}

export default LatestArticles;