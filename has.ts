class HashTable {
  private table: Array<any>;
  private size: number;

  constructor(size: number) {
    this.size = size;
    this.table = new Array(size);
  }

  // Simple hash function to convert string to an index
  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
}
