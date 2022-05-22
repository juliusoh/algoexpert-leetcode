function getNthFib(n, hashTable = {1: 0, 2: 1}) {
  if (n in hashTable) {
    return hashTable[n]
  } else {
    hashTable[n] = getNthFib(n - 1, hashTable) + getNthFib(n - 2, hashTable)
    return hashTable[n]
  }
}

getNthFib(3)