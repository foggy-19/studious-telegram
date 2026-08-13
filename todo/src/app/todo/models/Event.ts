export enum EventType {
  RemoveTodo = 'removeTodo',
}

export class Event<T = any> {
  constructor(
    public type: EventType,
    public payload: T,
  ) {}
}
