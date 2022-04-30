export interface Theme {
    main: string
    secondary: string
}

export interface CardProps {
    type: string | Type
    asset: string
    amount: number
    sender: string
    receiver: string
    name: string
}

export enum Type {
    TRANSACTION_RECEIVED = 'TRANSACTION_RECEIVED',
    TRANSACTION_SENT = 'TRANSACTION_SENT',
    ACCOUNT_CREATED = 'ACCOUNT_CREATED',
}

export const SentTheme: Theme = {
    main: '#e52828',
    secondary: '#fb8181',
}

export const ReceivedTheme: Theme = {
    main: '#3db102',
    secondary: '#a5ff6d',
}

export const DefaultTheme: Theme = {
    main: '#2a26ff',
    secondary: '#9392f7',
}
