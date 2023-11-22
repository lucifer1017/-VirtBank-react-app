import React from 'react'
import { Button } from '../ButtonElement'
import { Column2, ImgWrap,InfoContainer,InfoWrapper,InfoRow,TopLine,Column1,Heading,Subtitle,BtnWrap,TextWrapper,Img } from './InfoElements'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,img,alt,dark2,primary,dark}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}> {headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                        <Button to='home'
                        smooth={true}
                        spy={true}
                        duration={500}
                        exact='true'
                        offset={-70}
                        primary={primary? 1: 0}
                        dark={dark? 1: 0}
                        dark2={dark2? 1: 0}

                        >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt} />
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>  
    </>
  )
}

export default InfoSection