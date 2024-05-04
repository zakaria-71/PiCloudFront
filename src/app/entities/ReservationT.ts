import { Terrain } from "./Terrain";
import { Etat } from "./Etats";

export class ReservationT{
    idResT?:number;
    date_debut!:Date;
    date_fin!:Date;
    etat!: Etat;
    nbre?: number;
    terrain!:Terrain;


}