import styled, { ThemeProvider } from "styled-components";
import React from 'react';
import { CardProps, DefaultTheme, ReceivedTheme, SentTheme, Type } from "./CardUtils";

const StyledCard = styled.div`
    padding: 10px;
    border-radius: 10px;
    color: black;
    width: 100%;
    background: white;
    border: 1px solid ${props => props.theme.main};
    box-shadow: 0px 4px 4px 0px ${props => props.theme.secondary};
`
const Title = styled.h1`
    font-size: 18px;
    font-weight: 600;
    color: black;
    margin-bottom: 5px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
`
const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Card = ({ type, amount, asset, name, receiver, sender }: CardProps) => {
    return (
        <ThemeProvider theme={type === Type.TRANSACTION_RECEIVED ? ReceivedTheme : type === Type.TRANSACTION_SENT ? SentTheme : DefaultTheme}>
            <StyledCard>
                <Title>{type}</Title>
                <Content>
                    <Row>
                        {name ? <div>name: {name}</div> : null}
                        {asset ? <div>Asset: {asset}</div> : null}
                        {amount ? <div>Amount: {amount}</div> : null}
                    </Row>
                    {sender || receiver ? <Row>
                        <div style={{ cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText(sender)}>From: {sender}</div>
                        <div style={{ cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText(receiver)}>To: {receiver}</div>
                    </Row> : null}
                </Content>
            </StyledCard>
        </ThemeProvider >
    )
}

export default Card;
