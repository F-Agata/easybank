import React from 'react'
import styled from 'styled-components'

import TitleAll from '../basicStyle/TitleAll'
import ParagraphAll from '../basicStyle/ParagraphAll'

import article1img from '../img/image-currency.jpg'
import article2img from '../img/image-restaurant.jpg'
import article3img from '../img/image-plane.jpg'
import article4img from '../img/image-confetti.jpg'

const articlesList = [
  {
    picture: article1img,
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    text: 'Individual property parameters are set respectively. Because the image is put underneath the color overlay, its property parameters are also placed after color overlay parameters.',
  },
  {
    picture: article2img,
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    text: 'Benefit of this method is you can implement it for other cases easily, for example, you want to make the blue color overlaying the image with certain opacity.security features we allow to help secure your files',
  },
  {
    picture: article3img,
    author: 'Wilson Hutton',
    title: 'Take Your Easybank card wherever you go',
    text: 'Securely share files and foldesr with friends, family and colleagues for live collaboration. No email attachments required',
  },
  {
    picture: article4img,
    author: 'Claire Robinson',
    title: 'Our Invite-only Beta accounts are now live!',
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
]

const OneArticleWrapp = styled.div`
  margin: 20px 20px;
  padding-bottom: 40px;
  max-width: 500px;
  align-self: center;
  text-align: center;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (min-width: 992px) {
    width: 23%;
    text-align: left;
    align-self: stretch;
    margin: 40px 0px;
    padding-bottom: 20px;
  }
`

const OneArticle_pictureWrapp = styled.div`
  overflow: hidden;
  margin: 0 auto;
  max-width: 500px;
  height: 300px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (min-width: 992px) {
    height: 220px;
  }
`

const OneArticle_picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const OneArticle_author = styled(ParagraphAll)`
  margin: 30px 30px 10px 30px;
  font-size: 12px;
`

const OneArticle_text = styled(ParagraphAll)`
  margin: 10px 30px;

  @media (min-width: 992px) {
    justify-self: stretch;
    flex-grow: 1;
  }
`

const OneArticle_title = styled(TitleAll)`
  margin: 20px 30px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${(props) => props.theme.colors.limeGreen};
  }
`

const LatestArticlesOneArticle = () => {
  const oneArticle = articlesList.map((article, index) => (
    <OneArticleWrapp key={index}>
      <OneArticle_pictureWrapp>
        <OneArticle_picture src={article.picture} alt={article.title} />
      </OneArticle_pictureWrapp>
      <OneArticle_author>By {article.author}</OneArticle_author>
      <OneArticle_title>{article.title}</OneArticle_title>
      <OneArticle_text>{article.text}</OneArticle_text>
    </OneArticleWrapp>
  ))

  return oneArticle
}

export default LatestArticlesOneArticle
