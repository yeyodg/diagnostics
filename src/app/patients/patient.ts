export class Patient {
  constructor (
    public name: string,
    public id: number,
    public img: string,
    public address?: string,
    public medicalHistory?: string[]
  ) {}
}
