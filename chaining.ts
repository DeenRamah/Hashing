class HashTableChaining extends HashTable {
  constructor(size: number) {
    super(size);
  }

  // Insert key-value pair using chaining
  public set(key: string, value: any): void {
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    // Check if key exists, update if found, otherwise push new key-value pair
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value; // Update value
        return;
      }
    }

    // Insert new key-value pair
    this.table[index].push([key, value]);
  }

  // Get value by key
  public get(key: string): any {
    const index = this.hash(key);

    if (!this.table[index]) return undefined;

    // Search through linked list at the index
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1];
      }
    }

    return undefined;
  }
}
