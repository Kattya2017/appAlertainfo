// Generated by https://quicktype.io

export interface ResultTipoAlertas {
    ok:   boolean;
    msg:  string;
    resp: Resp[];
}

export interface Resp {
    id:          number;
    descripcion: string;
    estado:      number;
    imagen: string;
}
