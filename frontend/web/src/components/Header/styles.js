import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295F;
    border-bottom: 5px solid #00FF44;

    display:flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img{
        width: 100px;
        height: 50px;
    }

`

export const RigthSide = styled.div`
    width: 50%;
    height: 70px;
    display:flex;
    align-items: center;
    justify-content: flex-end;

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    a, button{
        color:#FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #00FF44;
        }
    }



    #notification {
        img{
            width: 25px;
            height: 30px;
        }

        span{
            background: #FFF;
            color: #20295F;
            padding: 2px 7px;
            border-radius:50%;
            position: relative;
            top: -20px;
            right: 10px;

        }

        &:hover{
            opacity: 0.5;
        }
    }

    .divisor::after{
        content: "|";
        margin:0 10px;
        color: #FFF;
    }

`
