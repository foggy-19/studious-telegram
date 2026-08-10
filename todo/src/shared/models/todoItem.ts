export class TodoItem {
  constructor(
    public title: string,
    public description: string,
    public completed: boolean = false,
  ) {}
}
