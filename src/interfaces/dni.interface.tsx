// Generated by https://quicktype.io

export interface ResultDNI {
    ok:   boolean;
    msg:  string;
    resp: Resp;
}

export interface Resp {
    id:       number;
    dni:      string;
    apellido: string;
    nombre:   string;
}
