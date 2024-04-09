function insertionSort(arr) {
    const n = arr.length;

    // Traverse through the array starting from the second element
    for (let i = 1; i < n; i++) {
        // Store the current element to be inserted
        const key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element (key) into the correct position in the sorted sequence
        arr[j + 1] = key;
    }

    return arr;
}
