import { DAOJSON } from "./DAOJSON";
import path from "path";

const ruta = path.join(__dirname, '..', 'hogares.json');
const dao: DAOJSON = new DAOJSON(ruta);
console.log(dao.buscarTodos());

const otroHogar = {
    "id": "eyJpdiI6IlhNWklhOEV3OGJFc1E2VitJK1RNaHc9PSIsInZhbHVlIjoiOFgyMjFoWG5VdGZWWHpyRitXc1dCZz09IiwibWFjIjoiOWY1YjQyYWM0MWJjMDhiMmRiNTU4OWUyZDZiMGM4ODQxOTRmMjlmM2RkMzBmZDIzYTg1OWJkODc4OTg0NDlhZSJ9",
    "nombre": "Nuevo Hogar",
    "ubicacion": {
        "direccion": "C1098ABA, Chile 1393, C1098 Buenos Aires",
        "lat": -34.61657666535632,
        "long": -58.38580212945297
    },
    "telefono": "+541151835168",
    "admisiones": {
        "perros": true,
        "gatos": true
    },
    "capacidad": 22,
    "lugares_disponibles": 8,
    "patio": true,
    "caracteristicas": [
        "Delgado",
        "Amistoso",
        "Manso"
    ]
};

dao.agregar(otroHogar);
console.log(dao.buscarTodos());