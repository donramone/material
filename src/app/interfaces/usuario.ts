export interface Usuario {
    id: number;
    dni?: string;
    nombre: string;
    direccion?: string;
    telefono?: string;
    fechaNacimiento?: string;
    sexo?: string;
    // datos de su empleo
    importe?: number;
    ocupacion?: string;
    area?: string;
    estado?: string;
}