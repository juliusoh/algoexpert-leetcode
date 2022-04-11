function isValidSubsequence(array, sequence) {
    let seqIdx = 0;
    for (const value of array) {
        if (seqIdx === sequence.length) break;
        if (sequence[seqIdx] === value) seqIdx++;
    }
    return seqIdx === sequence.length;
 }
 

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])