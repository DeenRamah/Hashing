set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
        this.table[index] = [];  // Create a bucket (array) if empty
    }
    this.table[index].push([key, value]);  // Append the key-value pair
}
