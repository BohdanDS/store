export type TUser = {
    name:null|string
    id: null| string
    email: null|string
    role: null|string
}

export interface IUser {
    token:string,
    user:TUser
}