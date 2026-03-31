import { eventBus } from './event-bus';

export function publishEvent(event: string, data: any) {
  eventBus.emit(event, data);
}