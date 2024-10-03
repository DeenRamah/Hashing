class HashTableOpenAddressing extends HashTable {
  private table: Array<[string, any] | null>; // Holds key-value pairs or null

  constructor(size: number) {
    super(size);
    this.table = new Array(this.size).fill(null);
  }

  // Insert key-value pair using linear probing for collision resolution
  public set(key: string, value: any): void {
    let index = this.hash(key);
    let initialIndex = index;

    while (this.table[index] && this.table[index][0] !== key) {
      index = (index + 1) % this.size;
      if (index === initialIndex) {
        throw new Error("Hash table is full");
      }
    }

    this.table[index] = [key, value];
  }

  // Get value by key using linear probing to resolve collisions
  public get(key: string): any {
    let index = this.hash(key);
    let initialIndex = index;

    while (this.table[index]) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + 1) % this.size;
      if (index === initialIndex) break; // Avoid infinite loop
    }

    return undefined;
  }
}
