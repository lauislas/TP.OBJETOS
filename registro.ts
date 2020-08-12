import * as fs from 'fs';
import * as rl from 'readline-sync';
import  Vendedor from './vendedor';
let Chart = require('cli-chart');

let registro = new Array();

class Registro {
    private registro: Vendedor[];

    public constructor(registro: Vendedor[]) {
        this.registro = registro;
    }

    public cargarRegistro():void {

        let archivoTxt: string = fs.readFileSync('datos.txt', 'utf8');
        let registro: string[] = archivoTxt.split('\r\n');

        for (let i: number = 0; i < registro.length; i++) {
            let dato: string[] = registro[i].split(',');

            let registros = new Vendedor(dato[0], Number(dato[1]), Number(dato[2]), Number(dato[3]), Number(dato[4]), Number(dato[5]));
            this.registro.push(registros);
            console.log(registros);
        }
    }

    public buscarVendedor(busqueda: string): number {
        for (let i: number = 0; i < this.registro.length; i++) {
            if (busqueda == this.registro[i].getVendedor()) {
                return i;
            }
        }
        return null;
    }

    public graficarVendedor(): void {
        let encontrar: string = rl.question("Indique el vendedor: ");
        let i: number = this.buscarVendedor(encontrar);
        if (i != null) {
            console.log("-------------");
            console.log(this.registro[i]);
            console.log("-------------");

            let chart = new Chart({ width: 80, lmargin: 9, height: 9, step: 2, direction: 'x', xlabel: 'Ventas semanales', });
            console.log("GRAFICO DE VENTAS");
            let ventasL:number = this.registro[i].getLunes();
            chart.addBar({ size: ventasL, label: 'LUNES' });
            let ventasM:number = this.registro[i].getMartes();
            chart.addBar({ size: ventasM, label: 'MARTES' });
            let ventasX:number = this.registro[i].getMiercoles();
            chart.addBar({ size: ventasX, label: 'MIERCOLES' });
            let ventasJ:number = this.registro[i].getJueves();
            chart.addBar({ size: ventasJ, label: 'JUEVES' });
            let ventasV:number = this.registro[i].getViernes();
            chart.addBar({ size: ventasV, label: 'VIERNES' });
            chart.draw();
        }else{
            console.log("Error.Nombre del vendedor no encontrado.");
        }
    }

    public cargarNuevo(): void {
        let vendedor: string = rl.question("Ingrese nuevo vendedor ");
        let lunes: number = rl.questionInt("Ingrese ventas del lunes: ");
        let martes: number = rl.questionInt("Ingrese ventas del martes: ");
        let miercoles: number = rl.questionInt("Ingrese ventas del miercoles:");
        let jueves: number = rl.questionInt("Ingrese ventas del jueves:");
        let viernes: number = rl.questionInt("Ingrese ventas del viernes:");
        let nuevo: Vendedor = new Vendedor(vendedor, lunes, martes, miercoles, jueves, viernes);
        this.registro.push(nuevo);
        console.log(this.registro);
        console.log("VENDEDOR AGREGADO.");
    }
}

let miRegistro:any = new Registro(registro);
function menu() {
    let elegirMenu: number = rl.questionInt("\nIngrese..\n[1]Para cargar registro de vendedores.\n[2]Para mostrar estadistica en grafico.\n[3]Dar de alta nuevo vendedor\n[0]Para salir\nNum: ");

    while (elegirMenu != 0) {

        switch (elegirMenu) {
            case 1:
                miRegistro.cargarRegistro();
                break;
            case 2:
                miRegistro.graficarVendedor();
                break;
            case 3:
                miRegistro.cargarNuevo();
                break;
            default:
                console.log("Ingrese una opción valida.");
                break;
        }
        elegirMenu = rl.questionInt("\nIngrese..\n[1]Para cargar registro de vendedores.\n[2]Para mostrar estadistica en grafico.\n[3]Dar de alta nuevo vendedor\n[0]Para salir\nNum: ");
    }
}
menu();
