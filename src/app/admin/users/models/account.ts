export interface Account {
    id: number,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    dateRegistered: Date,
    modifiedBy: string,
    modifiedOn: string,
    deleteFlag: string,
    roles: [
        {
            id: number,
            name: string,
            description:string
        }
    ],
    acctActive: boolean,
    acctLocked: boolean,
    loggedIn: boolean
}
