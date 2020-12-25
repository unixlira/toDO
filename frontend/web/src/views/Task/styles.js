import styled from 'styled-components';

export const Container = styled.div`

    width:100%;
    display: flex;
    align-items: center;
    flex-direction: column;

` 

export const Form = styled.div`

    width: 40%;

`

export const TypeIcons = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.4;
    }

    button{
        border: none;
        background: none;
    }

    img{
        width: 35px;
        height: 35px;
        margin: 4px;
        cursor: pointer;

        &:hover{
            opacity: 0.4;
        }
    }

`

export const Input = styled.div`

    width: 100%;
    display:flex;
    flex-direction: column;
    margin: 10px 0;

    span{
        color: #707070;
        margin-bottom: 5px 0;
    }

    input{
        font-size: 16px;
        padding:15px;
        border:none;
        border-bottom: 1px solid #00FF44;
    }

    img{
        width: 20px;
        height:20px;
        position: relative;
        left: 93.5%;
        bottom: 37px;
    }

`

export const TextArea = styled.div`

    width: 100%;
    display:flex;
    flex-direction: column;
    margin: 15px 0;

    span{
        color: #707070;
        margin-bottom: 5px 0;
    }

    textarea{
        font-size: 16px;
        padding:15px;
        border: 1px solid #00FF44;
        margin: 10px 0;
    }

`

export const Options = styled.div`

    width: 40%;
    display: flex;
    justify-content: space-between;
    
    button {
        font-weight: bold;
        color: #20295F;
        border: none;
        background: none;
        font-size: 15px;
        cursor: pointer;


        &:hover{
            opacity:0.7;
        }
    }

    div {
        display: flex;
        align-items: center;
        color:#00FF44;
        font-weight: bold;
        font-size: 15px;
    }

`

export const Save = styled.div`

    width: 40%;

    button {

        width: 100%;
        background:#00FF44;
        border:none;
        color:#FFF;
        border-radius:20px;
        font-weight: bold;
        margin: 10px 0 auto;
        padding: 9px;
        cursor:pointer;


        &:hover{
            opacity:0.7;
        }

    }
    

`