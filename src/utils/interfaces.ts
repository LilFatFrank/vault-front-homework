export interface Notif {
    id: string
    type: string
    data: Data
}

interface Data {
    amount: number
    from: string
    id: number
    to: string
    unit: string
    name: string
}
