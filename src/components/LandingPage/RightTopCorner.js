import React from 'react'
import { HamburgerMenuWrapper, NavIconSpan, NavIconWrapper, RightTopCornerWrapper } from './LandingPage.styled';

const RightTopCorner = () => {
    return ( 
        <RightTopCornerWrapper>
            <HamburgerMenuWrapper>
                <NavIconWrapper>
                    <NavIconSpan></NavIconSpan>
                    <NavIconSpan></NavIconSpan>
                    <NavIconSpan></NavIconSpan>
                    <NavIconSpan></NavIconSpan>
                    <NavIconSpan></NavIconSpan>
                    <NavIconSpan></NavIconSpan>
                </NavIconWrapper>
            </HamburgerMenuWrapper>
        </RightTopCornerWrapper>
     );
}
 
export default RightTopCorner;