export class Paddler {
    name: string;
    paddlingSide: string;
    time_s: number;

    constructor(name: string, paddlingSide: string, time_s: number) {
        this.name = name;
        this.paddlingSide = paddlingSide;
        this.time_s = time_s;
    }
}