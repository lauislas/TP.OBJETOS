"use strict";
exports.__esModule = true;
var fs = require("fs");
var rl = require("readline-sync");
var vendedor_1 = require("./vendedor");
var Chart = require('cli-chart');
var registro = new Array();
var Registro = /** @class */ (function () {
    function Registro(registro) {
        this.registro = registro;
    }
    Registro.prototype.cargarRegistro = function () {
        var archivoTxt = fs.readFileSync('datos.txt', 'utf8');
        var registro = archivoTxt.split('\r\n');
        for (var i = 0; i < registro.length; i++) {
            var dato = registro[i].split(',');
            var registros = new vendedor_1["default"](dato[0], Number(dato[1]), Number(dato[2]), Number(dato[3]), Number(dato[4]), Number(dato[5]));
            this.registro.push(registros);
            console.log(registros);
        }
    };
    Registro.prototype.buscarVendedor = function (busqueda) {
        for (var i = 0; i < this.registro.length; i++) {
            if (busqueda == this.registro[i].getVendedor()) {
                return i;
            }
        }
        return null;
    };
    Registro.prototype.graficarVendedor = function () {
        var encontrar = rl.question("Indique el vendedor: ");
        var i = this.buscarVendedor(encontrar);
        if (i != null) {
            console.log("-------------");
            console.log(this.registro[i]);
            console.log("-------------");
            var chart = new Chart({ width: 80, lmargin: 9, height: 9, step: 2, direction: 'x', xlabel: 'Ventas semanales' });
            console.log("GRAFICO DE VENTAS");
            var ventasL = this.registro[i].getLunes();
            chart.addBar({ size: ventasL, label: 'LUNES' });
            var ventasM = this.registro[i].getMartes();
            chart.addBar({ size: ventasM, label: 'MARTES' });
            var ventasX = this.registro[i].getMiercoles();
            chart.addBar({ size: ventasX, label: 'MIERCOLES' });
            var ventasJ = this.registro[i].getJueves();
            chart.addBar({ size: ventasJ, label: 'JUEVES' });
            var ventasV = this.registro[i].getViernes();
            chart.addBar({ size: ventasV, label: 'VIERNES' });
            chart.draw();
        }
        else {
            console.log("Error.Nombre del vendedor no encontrado.");
        }
    };
    Registro.prototype.cargarNuevo = function () {
        var vendedor = rl.question("Ingrese nuevo vendedor ");
        var lunes = rl.questionInt("Ingrese ventas del lunes: ");
        var martes = rl.questionInt("Ingrese ventas del martes: ");
        var miercoles = rl.questionInt("Ingrese ventas del miercoles:");
        var jueves = rl.questionInt("Ingrese ventas del jueves:");
        var viernes = rl.questionInt("Ingrese ventas del viernes:");
        var nuevo = new vendedor_1["default"](vendedor, lunes, martes, miercoles, jueves, viernes);
        this.registro.push(nuevo);
        console.log(this.registro);
        console.log("VENDEDOR AGREGADO.");
    };
    return Registro;
}());
var miRegistro = new Registro(registro);
function menu() {
    var elegirMenu = rl.questionInt("\nIngrese..\n[1]Para cargar registro de vendedores.\n[2]Para mostrar estadistica en grafico.\n[3]Dar de alta nuevo vendedor\n[0]Para salir\nNum: ");
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
