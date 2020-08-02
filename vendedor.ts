export default class Vendedor {

    private vendedor: string;
    private lunes: number;
    private martes: number;
    private miercoles: number;
    private jueves: number;
    private viernes: number;

    public constructor(vendedor: string, lunes: number, martes: number, miercoles: number, jueves: number, viernes: number) {
        this.vendedor = vendedor;
        this.lunes = lunes;
        this.martes = martes;
        this.miercoles = miercoles;
        this.jueves = jueves;
        this.viernes = viernes;

    }

    public getVendedor(): string {
        return this.vendedor;
    }
    public getLunes(): number {
        return this.lunes;
    }
    public getMartes(): number {
        return this.martes;
    }
    public getMiercoles(): number {
        return this.miercoles;
    }
    public getJueves(): number {
        return this.jueves;
    }
    public getViernes(): number {
        return this.viernes;
    }
}