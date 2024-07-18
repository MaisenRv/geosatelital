import styled from "styled-components";

const Section = styled.section`
    width: 80%;
    padding: 10px;
    background-color: rgb(220,221,224);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 800px;
    font-size: 50px;
`

const StyledSection = ({children}) =>{
    return(
        <Section>
            {children}
        </Section>
    )
}

export default StyledSection