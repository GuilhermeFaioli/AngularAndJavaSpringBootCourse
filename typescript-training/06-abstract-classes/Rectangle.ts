import { Shape } from "./Shape";

export class Rectangle extends Shape {

    private _width: number;
   
    private _length: number;

    constructor(theX : number, theY : number, width : number, length : number) {
        super(theX, theY);
        this._width = width;
        this._length = length;
    }

    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        this._width = value;
    }

    public get length(): number {
        return this._length;
    }

    public set length(value: number) {
        this._length = value;
    }

    public getInfo() : string {
        return super.getInfo() + `, width = ${this._width}, length = ${this._length}`;
    }

    public calculatorArea(): number {
        return this._width * this._length;
    }
}