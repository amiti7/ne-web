import React, {useState} from 'react'
import {HomeContainer, HomeBg, HomeContent, HomeHeading, HomeBody, HomeButtonWrapper } from './HomeElement';
import titleImage from '../../images/titleImage.png'
import playStore from '../../images/playStore.png'

function HomeSection() {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
  return (
    <HomeContainer id='home'>
        <HomeBg style={{backgroundImage:`url(${titleImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
        </HomeBg>
        <HomeContent>
            <HomeHeading>
            Choose our top-quality product range
for unparalleled construction solutions,
setting new standards in the industry
            </HomeHeading>
            <HomeBody>
            We are your trusted partner in
construction supply chain management,
dedicated to revolutionizing the industry
with innovative products and cutting edge
technology.
             </HomeBody>
            <HomeButtonWrapper>
                <img onMouseEnter={onHover} onMouseLeave={onHover} onClick={()=> window.open('https://play.google.com/store/apps/details?id=in.nirmaneasy.ecom.twa')} width={'400px'} alt='plaster king' src={playStore}></img>
                {/* <Button  primary={true} dark={true} to="signUp" onMouseEnter={onHover} onMouseLeave={onHover}>Get Started{hover?<ArrowForward/>:<ArrowRight/>}</Button> */}
            </HomeButtonWrapper>
        </HomeContent>
    </HomeContainer>
  );
}

export default HomeSection