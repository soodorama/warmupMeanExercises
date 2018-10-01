function bubbleSort(arr) {
    var exit = false
    for (var j = 0; j < arr.length - 1; j++) {
        if (exit == true) return arr
        else {
            exit = true
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i+1]) {
                    var temp = arr[i]
                    arr[i] = arr[i+1]
                    arr[i+1] = temp
                }
            }
        }
        exit = false
    }
    return arr
}

var test = [6,5,3,1,8,7,2,4]

bubbleSort(test)

// TODO: quick exit
// TODO: big O notation

// Classify functions by time complexity:

// O(n)

// O(1)

// O(log(n))

// O(n^2)