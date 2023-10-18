import React from 'react';
import {InfoContainer, InfoRow, Column1, TextWrapper, TitleWrapper,
    Heading,Subtitle, BtnWrap, Column2, Designation , PageTitle, Column3, Column4} from './InfoElements';
import {Button} from '../ButtonElement';

const BothSide = ({data}) => {
    const [amit,priyam,shruti,priya] = data;

  return (
    <>
    <InfoContainer lightBg={amit.lightBg} id={amit.id}>
    <PageTitle>{amit.topLine}</PageTitle>
        <TitleWrapper>
            <InfoRow imgStart={amit.imgStart}>
                <Column1>
                    <TextWrapper>
                        {/* <TopLine>{amit.topLine}</TopLine> */}
                        <Heading lightText={amit.lightText}>{amit.headline}</Heading>
                        <Designation lightText={amit.lightText} >{amit.designation}</Designation>
                        <Subtitle darkText={amit.darkText}>{amit.description}</Subtitle>
                        <BtnWrap >
                            <Button
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            primary={amit.primary?1:0}
                            dark={amit.dark?1:0}
                            dark2={amit.dark2?1:0}
                            to='home'>{amit.buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <TextWrapper>
                        {/* <TopLine>{priyam.topLine}</TopLine> */}
                        <Heading lightText={priyam.lightText}>{priyam.headline}</Heading>
                        <Designation lightText={priyam.lightText} >{priyam.designation}</Designation>
                        <Subtitle darkText={priyam.darkText}>{priyam.description}</Subtitle>
                        <BtnWrap >
                            <Button
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            primary={priyam.primary?1:0}
                            dark={priyam.dark?1:0}
                            dark2={priyam.dark2?1:0}
                            to='home'>{priyam.buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column2>
            </InfoRow>
            <InfoRow imgStart={priya.imgStart}>
                <Column1>
                    <TextWrapper>
                        {/* <TopLine>{amit.topLine}</TopLine> */}
                        <Heading lightText={priya.lightText}>{priya.headline}</Heading>
                        <Designation lightText={priya.lightText} >{priya.designation}</Designation>
                        <Subtitle darkText={priya.darkText}>{priya.description}</Subtitle>
                        <BtnWrap >
                            <Button
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            primary={priya.primary?1:0}
                            dark={priya.dark?1:0}
                            dark2={priya.dark2?1:0}
                            to='home'>{priya.buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <TextWrapper>
                        {/* <TopLine>{priyam.topLine}</TopLine> */}
                        <Heading lightText={shruti.lightText}>{shruti.headline}</Heading>
                        <Designation lightText={shruti.lightText} >{shruti.designation}</Designation>
                        <Subtitle darkText={shruti.darkText}>{shruti.description}</Subtitle>
                        <BtnWrap >
                            <Button
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            primary={shruti.primary?1:0}
                            dark={shruti.dark?1:0}
                            dark2={shruti.dark2?1:0}
                            to='home'>{shruti.buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column2>
            </InfoRow>
        </TitleWrapper>
    </InfoContainer>
    </>
  )
}

export default BothSide;