export class Quote {
  constructor(
    public id: number,
    public name: string,
    public quote: string,
    public tag: string,
    public note?: string
  ) { }
}
