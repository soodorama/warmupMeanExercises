function maxMinAvg(nums) {
    console.log(nums);
    if (nums.length > 0) {
        var str = ""
        var max = nums[0]
        var min = nums[0]
        var sum = nums[0]
        for (var i = 1; i < nums.length; i++) {
            var num = nums[i]
            if (num > max) {
                max = num
            }
            if (num < min) {
                min = num
            }
            sum += num
        }
        var avg = sum / nums.length
        str = "The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg + "."

        return str
    }
    else {
        console.log("empty array")
        return
    }
}

maxMinAvg([1,-2,9,4])

