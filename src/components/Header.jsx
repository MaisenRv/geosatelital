import logo from '../images/Logo.png'
import styled from 'styled-components'
import StyledList from './atoms/StyledList'
import StyledButton from './atoms/StyledButton'

const StyledHeader = styled.header`
    background-image: linear-gradient(to right, #0B2948 , #1864A4);
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: -2px 2px 8px #0B2948;
    padding: 5px;
    color: #ffffff;
    box-sizing: border-box;
    position: sticky;
    top: 0;
`


const Header = ({children, navInfo, open, handleClick}) =>{
    return(
        <StyledHeader>
            <img src= {logo} alt='' className='logo'></img>
            <h1 className='title'>Geosatelital Colombia</h1>
            <nav className='header-nav'>
                <StyledList navInfo = {navInfo} open={open}></StyledList>
                <StyledButton open={open} handleClick={handleClick}>Hola</StyledButton>
            </nav>
        </StyledHeader>
    )
}

export default Header