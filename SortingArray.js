var array = [2, 5, 6, 78, 8, 0, 2];
var swap;
var swapCount = 0;

do {
    for (var i = 1, swapCount = 0; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            swap = array[i - 1];
            array[i - 1] = array[i];
            array[i] = swap;
            swapCount += 1;
        }
    }
}

while (swapCount > 0);

console.log(array); // [0, 2, 2, 5, 6, 8, 78 ]
   