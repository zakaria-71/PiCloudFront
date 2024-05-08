import { ReservationT } from "./ReservationT";

export class User{
    idUser?: number;
    name!:string;
    email!:string;
    password!:string;
    mobile!: number;
    reservationT?: ReservationT;s
}