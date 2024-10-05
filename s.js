
class HashTable {
    constructor(size = 50) {
        this.table = new Array(size);
    }

    // Hash function
    _hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.table.length;
    }

    // Insert (set) a key-value pair
    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    // Retrieve (get) a value by key
    get(key) {
        const index = this._hash(key);
        if (!this.table[index]) return undefined;

        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return undefined;
    }
}

// Usage:
let hashTable = new HashTable();
hashTable.set('name', 'John');
hashTable.set('age', 25);
console.log(hashTable.get('name'));  // Output: John
console.log(hashTable.get('age'));   // Output: 25
