import { ReservationT } from "./ReservationT";

export class User{
    idUser?: number;
    name!:string;
    email!:string;
    password!:string;
    mobile!: number;
    reservationT?: ReservationT;
    testUser={
        idUser:2,
        name:"abir",
        email:"abir@gmail.com",
        password:"123",
        mobile: 123456
      };
}