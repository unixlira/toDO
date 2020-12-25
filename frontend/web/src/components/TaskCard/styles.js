import styled from 'styled-components';

export const Container = styled.div`
    width: 215px;
    height: 170px;
    box-shadow: -2px 2px 12px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px 10px;
    cursor:pointer;
    transition: all 0.3s ease;

    &:hover{
        opacity: 0.5;
    }
`

export const TopCard = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 75px;
        height: 75px;
    }
`

export const BottomCard = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-around;

    strong {
        color: #00FF44;
        font-weight: bold;
    }

    span{
        color: #707070;
    }
`