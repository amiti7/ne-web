import React, {useState} from 'react';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import InfoSection from '../components/InfoSection';
import { homeObjFour, homeObjOne, homeObjFive } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import Connect from '../components/Connect/Connect';

const Home = () => {
    const [isOpen, setIsOpen]  = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
   <>
        <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
        <Navbar toggle={toggle}>
        </Navbar>
        <HomeSection></HomeSection>
        <Products></Products>
        <InfoSection {...homeObjOne}></InfoSection>
        {/* <BothSide data={teamData}></BothSide> */}
        <InfoSection Child ={<Connect/>} {...homeObjFour}></InfoSection>
        <InfoSection {...homeObjFive}></InfoSection>
        <Footer></Footer>
    </>
  )
}

export default Home;