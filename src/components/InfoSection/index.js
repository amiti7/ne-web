import React from 'react';
import {InfoContainer, InforWrapper, InfoRow, Column1, TextWrapper, TopLine,
    Heading,Subtitle, Column2, ImgWrap, Img } from './InfoElements';

const InfoSection = ({id, lightBg, imgStart,description,  topLine, lightText, headline, darkText, buttonLabel, img, alt, primary, dark, dark2, buttonAction}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
        <InforWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    {/* <BtnWrap >
                        <Button
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        primary={primary?1:0}
                        dark={dark?1:0}
                        dark2={dark2?1:0}
                        >{buttonLabel}</Button>
                    </BtnWrap> */}
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt} ></Img>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InforWrapper>
    </InfoContainer>
  )
}

export default InfoSection;