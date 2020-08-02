"use strict";
exports.__esModule = true;
var Vendedor = /** @class */ (function () {
    function Vendedor(vendedor, lunes, martes, miercoles, jueves, viernes) {
        this.vendedor = vendedor;
        this.lunes = lunes;
        this.martes = martes;
        this.miercoles = miercoles;
        this.jueves = jueves;
        this.viernes = viernes;
    }
    Vendedor.prototype.getVendedor = function () {
        return this.vendedor;
    };
    Vendedor.prototype.getLunes = function () {
        return this.lunes;
    };
    Vendedor.prototype.getMartes = function () {
        return this.martes;
    };
    Vendedor.prototype.getMiercoles = function () {
        return this.miercoles;
    };
    Vendedor.prototype.getJueves = function () {
        return this.jueves;
    };
    Vendedor.prototype.getViernes = function () {
        return this.viernes;
    };
    return Vendedor;
}());
exports["default"] = Vendedor;
