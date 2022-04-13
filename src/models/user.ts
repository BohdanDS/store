export type TUser = {
    name:null|string
    userId: null| string
    email: null|string
    role: null|string
}

export interface IUser {
    token:string,
    user:TUser
}