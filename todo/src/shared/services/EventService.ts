import { Subject } from 'rxjs';
import { Event, EventType } from '../models/Event';

class EventService {
  private subject = new Subject<Event<any>>();

  emit<T>(event: Event<T>) {
    this.subject.next(event);
  }

  listen<T>(eventType: EventType, callback: (payload: T) => void) {
    this.subject.asObservable().subscribe((next: Event<T>) => {
      if (eventType === next.type) {
        callback(next.payload);
      }
    });
  }
}

export default new EventService();
