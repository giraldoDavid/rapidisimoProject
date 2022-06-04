import { ObjectId } from "mongodb";

export interface locationMap {
    id?: ObjectId;
    id_order:string,
    address_origin:string,
    address_destiny:string,
    time_estimate:string,
    current_latitude:number,
    current_longitude:number,
}