import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const Config = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18%;
    height: 540px;
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    padding-bottom: 15px;
    border: 1px solid black;
    width: 100%;
    height: 540px;
    textarea {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
    }
`;

