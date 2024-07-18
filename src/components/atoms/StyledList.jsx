import styled from "styled-components"
import StyledLink from "./StyledLink"
import StyledItemList from "./StyledItemList"

const List = styled.ul`
    display: flex;
    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'};
    gap: 2rem;
    
    @media only screen and (max-width: 924px){
        right: ${props => (props.open ? '0': '-100%')};
        flex-direction: column;
        position: fixed;
        top: 80px;
        height: 100vh;
        transition: right 0.4s linear;
        background-color: #1864A4;
        padding: 20px;
        box-shadow: -2px 4px 8px #0B2948;
    }
`

const StyledList = ({children, flexDirection, navInfo, open}) => {

    const listElements = navInfo.map((nav) =>
        <StyledItemList key={nav.text} >  
            <StyledLink to = {nav.path}> {nav.text} </StyledLink>
        </StyledItemList>
    )

    return(
        <List flexDirection = {flexDirection} open={open} >
            {children}
            {listElements}
        </List>
    )
}

export default StyledList
