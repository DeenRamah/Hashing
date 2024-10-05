class HashTableOpenAddressing {
    constructor(size = 50) {
        this.table = new Array(size);
        this.size = size;
    }

    // Hash function
    _hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    // Insert using linear probing
    set(key, value) {
        let index = this._hash(key);
        while (this.table[index]) {
            index = (index + 1) % this.size;  // Linear probing: find the next available slot
        }
        this.table[index] = [key, value];
    }

    // Retrieve using linear probing
    get(key) {
        let index = this._hash(key);
        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
        }
        return undefined;
    }
}

// Usage:
let hashTableOpen = new HashTableOpenAddressing();
hashTableOpen.set('name', 'John');
hashTableOpen.set('age', 25);
console.log(hashTableOpen.get('name'));  // Output: John
console.log(hashTableOpen.get('age'));   // Output: 25
