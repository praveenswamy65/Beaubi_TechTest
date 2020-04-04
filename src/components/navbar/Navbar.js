import React from 'react'
import styled from "styled-components";
import Icon from "../../Icon.js"
const Navbar = (props) => {
  return (
    <>
      <NavBar>
        <FlexContainer>
            <div className="ui centered medium image">
                <Icon/>
            </div>
        </FlexContainer>
      </NavBar>
   </>
  )
}

export default Navbar
const NavBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100px;
  background: #3498DB;
  z-index: 1;
  font-size: 1.4rem;
`;
const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

