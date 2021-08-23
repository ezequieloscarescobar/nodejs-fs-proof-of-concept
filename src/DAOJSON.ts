import * as fs from 'fs';

export class DAOJSON {
    private datos!: Array<object>;

    constructor(private rutaArchivo: string) {
    }

    buscarTodos() {
        if(this.datos == null) {
            const datos = fs.readFileSync(this.rutaArchivo, "utf-8");
            this.datos = JSON.parse(datos);
        }
        return this.datos;
    }

    agregar(unDato: object) {
        this.buscarTodos();
        this.datos.push(unDato);
        fs.writeFileSync(this.rutaArchivo, JSON.stringify(this.datos));
    }
}

