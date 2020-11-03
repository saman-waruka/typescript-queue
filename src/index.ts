import { Queue } from'./queue.class';
import { QueueCollection } from './queue-collection.class'
console.log('Hello world!');
const aQueue = new Queue<number>();
console.log( { aQueue });
aQueue.enqueue(1);
aQueue.enqueue(2);
aQueue.enqueue(3);
console.log( { aQueue });

console.log( { pop: aQueue.dequeue()  });
console.log( { aQueue });

console.log( { pop: aQueue.dequeue()  });
console.log( { aQueue });

console.log( { pop: aQueue.dequeue()  });
console.log( { aQueue });
console.log( { pop: aQueue.dequeue()  });
console.log( { aQueue });
console.log( '####################');

const bQ = new QueueCollection(3);

bQ.enqueue(1);
console.log( { bQ });

bQ.enqueue('2');
console.log( { bQ });

bQ.enqueue(true);
console.log( { bQ });

// bQ.enqueue(undefined);
// console.log( { bQ });