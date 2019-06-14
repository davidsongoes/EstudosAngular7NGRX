import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Service1 {

    public num: string;

    constructor() {
        this.num = Math.round(Math.random() *1000) + ' - Service 1 - Module1'
    }
}