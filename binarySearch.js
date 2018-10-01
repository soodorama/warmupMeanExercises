function binarySearch(arr, num) {
    var pos = -1
    var start = 0
    var end = arr.length -1
    var iterations = 0
    while (pos == -1 && end - start > 1) {
        iterations++
        var mid = Math.ceil((end+start) / 2)
        console.log("mid",mid)
        if (num == arr[mid]) {
            console.log("arr[mid]",arr[mid])
            pos = (end-start) / 2
        }
        else if (num > arr[mid]) {
            // do the search in the second half
            start = mid
            console.log("Start",start)
        }
        else {
            // do search in first half
            end = mid
            console.log("End",end)
        }
    }
    console.log(iterations)
    return pos
}

// Big O is O(log(n))

// TODO: Recursive binary search