// Create logo for Beaubi homepage
// Used styled components for defining logo image

import React from 'react'
import styled from "styled-components"
import beaubiLogo from "./components/Images/beaubi_logo_blue.png";

const beaubiIcon = () => (
    <Logo src={beaubiLogo}/>
)

export default beaubiIcon

// Styled components
const Logo = styled.img`
    width: 200px;
    height: 200px;
    margin: 20px;
`;


