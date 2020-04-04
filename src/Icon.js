import React from 'react'
import styled from "styled-components"
import myLogo from "./components/Images/beaubi_logo_blue.png";
const ImageExampleImage = () => (
  <Logo src={myLogo}/>
)

export default ImageExampleImage
const Logo = styled.img`
    width: 200px;
    height: 200px;
    margin: 20px;
`;


