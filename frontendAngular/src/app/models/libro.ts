export class Libro{
  length: number;
    constructor(
        public id: number,
        public codigo: number,
        public isbn: number,
        public titulo: string,
        public autor: string,
        public sinopsis: string,
        public portada: string,
        public categoria: string,
        public establecimiento: string, 
        public estado: string
        ){}
}