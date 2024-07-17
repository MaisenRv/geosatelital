import styled from "styled-components"
import StyledLink from "./StyledLink"
import StyledItemList from "./StyledItemList"

const List = styled.ul`
    display: flex;
    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'};
    gap: 2rem;
`

const StyledList = ({children, flexDirection, navInfo}) => {

    const listElements = navInfo.map((nav) =>
        <StyledItemList>  
            <StyledLink to = {nav.path}> {nav.text} </StyledLink>
        </StyledItemList>
    )

    return(
        <List flexDirection = {flexDirection} >
            {children}
            {listElements}
        </List>
    )
}

export default StyledList
