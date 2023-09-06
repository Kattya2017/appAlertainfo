

export interface LoginResponse {
    ok: boolean;
    msg: string;
    user: User;
    token: string;
}

export interface User{
    id: number;
    nombre: string;
    apellido: string;
    password: string;
    dni: string;
}

export interface LoginData {
    dni: string;
    password: string
}

export interface RegisterUser{
    nombre: string;
    apellido: string;
    password: string;
    dni: string;
}