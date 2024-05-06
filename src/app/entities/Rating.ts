import { User } from "./User";

export class Rating{
    id?:number;
    value!: number;
    User?: User;
}