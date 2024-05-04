import {Team} from "./team.model";

export class Competition{
  competitionId?:any;
  nom?:String;
  qrcode?:String;
  categorie?:String;
  dateDebut?:any;
  teams?:Team;
}
