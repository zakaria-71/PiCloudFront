// src/app/models/class.model.ts
import {Bloc} from "./bloc.model";

export interface Class {
  idC?: number; // Make optional for adding new where ID isn't yet known
  num: number;
  liberated: boolean;
  bloc?: Bloc; // Make sure the 'Bloc' type is correctly imported
}
