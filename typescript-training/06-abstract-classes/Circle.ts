import { Shape } from "./Shape";

export class Circle extends Shape {
    
    private _radius: number;
    

    constructor(theX : number, theY : number, radius : number) {
        super(theX, theY);
        this._radius = radius;
    }

    public get radius_1(): number {
        return this._radius;
    }

    public set radius_1(value: number) {
        this._radius = value;
    }

    public getInfo() : string {
        return super.getInfo() + `, radius = ${this._radius}`;
    } 

    public calculatorArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }

}