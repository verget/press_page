export interface CustomEvent{
  type: EventTypes,
  message: string
}

export enum EventTypes {
  error = 'error',
}