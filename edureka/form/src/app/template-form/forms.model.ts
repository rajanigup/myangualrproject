export class IUser{
    constructor(
        public fullName: string,
        public email: string,
        protected phone:string,
        public password: string,
        public cpassword: string,

    ) {}
}