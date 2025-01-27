export interface User {
    name: string,
    email: string,
    phone: string
}

export interface UserContact {
    user: User,
    message: string
}