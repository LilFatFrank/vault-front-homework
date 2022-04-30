/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';

type Props = {
    message: string;
    onClick?: () => void;
};

const Button = styled.button`
    cursor: pointer;
    background: #2a26ff;
    padding: 5px 10px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
`;

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;

function Error({ message, onClick }: Props) {
    return (
        <ErrorContainer>
            <div>{message} :(</div>
            {onClick ? <Button onClick={onClick}>Clear Search</Button> : null}
        </ErrorContainer>
    );
}

export default Error;
