import styled from "styled-components";

const Item = styled.li`
    color: #ffffff;
    transition: all .3s;
    border-radius: 10px;
    font-weight: 200;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        transition: all .3s ease-in-out;
        box-shadow: 2px 2px 4px rgba(255,255,255,.3);
        background-color: #0B2948;
        cursor: pointer;
    }
`

const StyledItemList = ({children}) => {
    return (
        <Item>{children}</Item>
    )
}

export default StyledItemList