class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // Simple hash function to convert string to an index
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
}
