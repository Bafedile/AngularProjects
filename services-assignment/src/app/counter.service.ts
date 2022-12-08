import { Injectable } from "@angular/core";
import { UsersService } from "./users.service";

@Injectable()

export class CounterService {

    activeCounter = 0;
    inActiveCounter = 0;
    constructor() {

    }

    incrementActiveCounter() {
        this.activeCounter++;
    }
    incrementInActiveCounter() {
        this.inActiveCounter++;
    }
}