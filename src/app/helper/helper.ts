export class Helper {
    static getNumberRange(start: any, end: any): number[] {
        const range = [];
        for (let i = parseInt(start); i <= Math.round(end); i++) {
            range.push(i);
        }
        return range;
    }

}