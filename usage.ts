// Chaining
const hashTableChaining = new HashTableChaining(5);
hashTableChaining.set('apple', 100);
hashTableChaining.set('banana', 200);
hashTableChaining.set('cherry', 300);

console.log(hashTableChaining.get('banana')); // 200
console.log(hashTableChaining.get('grape'));  // undefined

// Open Addressing
const hashTableOpen = new HashTableOpenAddressing(5);
hashTableOpen.set('apple', 100);
hashTableOpen.set('banana', 200);
hashTableOpen.set('cherry', 300);

console.log(hashTableOpen.get('banana')); // 200
console.log(hashTableOpen.get('grape'));  // undefined
