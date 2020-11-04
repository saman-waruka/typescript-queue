import { Queue } from'./queue.class';
import { QueueCollection } from './queue-collection.class';
import { Singleton } from './singleton/singleton';
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


//singleton client

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
      console.log('Singleton works, both variables contain the same instance.');
  } else {
      console.log('Singleton failed, variables contain different instances.');
  }

  
}

clientCode();