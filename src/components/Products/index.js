import React from 'react'
import {ProductContainer, ProductsH1, ProductsWrapper, ProductCard, ProductIcon, ProductsH2} from './ProductElements'
import item1 from '../../images/pk_p.png';
import item2 from '../../images/pk_wp.png';

const Products = () => {
  return (
    <ProductContainer id='product'>
        <ProductsH1>Products For You</ProductsH1>
        <ProductsWrapper>
          
            <ProductCard>
            <ProductsH2>Plaster King Premium</ProductsH2>
                <div style={{display:'flex', width: '36em'}}>
                <div style={{margin:'auto'}}>
                  <ul style={{listStyleType:'disclosure-closed'}}>
                    <li>सिल्ट फ्री मौरंग दे दरार मुक्त प्लास्टर</li>
                    <li>किंग बॉन्ड-25% तक ज्यादा मजबूत</li>
                    <li>छनाई के खर्च में 100% बचत</li>
                    <li>30% तक ज्यादा इस्तेमाल योग्य माल</li>
                    <li>रख-रखाव में आसान</li>
                    <li>मोरंग की बर्बादी से मुक</li>
                    <li>ट्रांसपोर्ट लागत में बचत</li>
                    <li>तौल से मुक्ति पाएं,बोरी गिनकर घर लेजाए</li>
                    <li>बेहतर वर्कबिलिट</li>
                    <li>समय की बचत</li>
                  </ul>
                </div>
                <ProductIcon src={item1}></ProductIcon>
                </div>
               
            </ProductCard>
            <ProductCard>
            <ProductsH2>Plaster King Weather Proof</ProductsH2>
            <div style={{display:'flex', width: '36em'}}>
            <div style={{margin:'auto'}}>
            <ul style={{listStyleType:'disclosure-closed'}}>
                    <li>जलरिसाव एवम पृथक्करण से बचाव</li>
                    <li>पानी की टंकी , बाथरूम, किचन, बाहरी दीवारें, बालकनी इत्यादि की लिए सर्वश्रेष</li>
                    <li>सिल्ट फ्री मौरंग दे दरार मुक्त प्लास्टर</li>
                    <li>किंग बॉ न्ड-25% तक ज्यादा मजबूत</li>
                    <li>छनाई के खर्च में 100% बचत</li>
                    <li>30% तक ज्यादा इस्तेमाल योग्य माल</li>
                    <li>मोरंग की बर्बादी से मुक</li>
                    <li>ट्रांसपोर्ट लागत में बचत</li>
                    <li>बेहतर वर्कबिलिट</li>
                    <li>समय की बचत</li>
                  </ul>
            </div>
                <ProductIcon src={item2}></ProductIcon>
                </div>
            </ProductCard>
           
        </ProductsWrapper>
    </ProductContainer>
  )
}

export default Products;