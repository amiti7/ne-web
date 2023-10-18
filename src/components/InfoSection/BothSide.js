import React from 'react';
import {InfoContainer, InfoRow, Column1, TextWrapper, TitleWrapper,
    Heading,Subtitle, BtnWrap, Column2, Designation , PageTitle} from './InfoElements';
import {Button} from '../ButtonElement';

const BothSide = ({data}) => {
    const [priyam, amit, ali, udit] = data;

  return (
    <>
    <InfoContainer lightBg={amit.lightBg} id={amit.id}>
    <PageTitle>{amit.topLine}</PageTitle>
        <TitleWrapper>
            <InfoRow imgStart={amit.imgStart}>
            <Column2>
                    <TextWrapper>
                        {/* <TopLine>{priyam.topLine}</TopLine> */}
                        <Heading lightText={udit.lightText}>{udit.headline}</Heading>
                        <Designation lightText={udit.lightText} >{udit.designation}</Designation>
                        <Subtitle darkText={udit.darkText}>{udit.description}</Subtitle>
                        <BtnWrap >
                            <Button
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            primary={udit.primary?1:0}
                            dark={udit.dark?1:0}
                            dark2={udit.dark2?1:0}
                            to='home'>{udit.buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
            </Column2>
               
            <Column1>
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
            </Column1>
            </InfoRow>
        </TitleWrapper>
        <TitleWrapper>
            <InfoRow imgStart={ali.imgStart}>
                <Column1>
                    <TextWrapper>
                        {/* <TopLine>{amit.topLine}</TopLine> */}
                        <Heading lightText={ali.lightText}>{ali.headline}</Heading>
                        <Designation lightText={ali.lightText} >{ali.designation}</Designation>
                        <Subtitle darkText={ali.darkText}>{ali.description}</Subtitle>
                        <BtnWrap >
                            <Button
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            primary={ali.primary?1:0}
                            dark={ali.dark?1:0}
                            dark2={ali.dark2?1:0}
                            to='home'>{ali.buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
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
                </Column2>
            </InfoRow>
        </TitleWrapper>
    </InfoContainer>
    </>
  )
}

export default BothSide;