import { ReservationT } from "./ReservationT";

export class Terrain{
    idTerrain?: number;
    name!:string;
    description!:string;
    //latitude!: number;
    //longitude!: number;
    reservationsTS?: ReservationT[];

}