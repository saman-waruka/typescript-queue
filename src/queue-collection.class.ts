
import { IQueue } from './queue.interface';
import { Collection } from './collection.abstract';

export class QueueCollection<T> extends Collection<T> implements IQueue<T> {
  constructor(private capacity: number = Infinity) {
    super();
  }
  enqueue(item: T): void {
    if (this.isFull()) {
      throw Error("Queue has reached max capacity, you cannot add more items");
    }
    // In the derived class, we can access protected properties of the abstract class
    this.storage.push(item);
  }
  dequeue(): T | undefined {
    return this.storage.shift();
  }

  // Implementation of the abstract method
  isFull(): boolean {
    return this.capacity === this.size();
  }
  
}