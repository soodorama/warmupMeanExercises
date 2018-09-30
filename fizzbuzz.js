function fizzbuzz(n) {
    if (Number.isInteger(n)) {
        var str = ""
        for (var i = 1; i <= n; i++) {
            if ((i % 3 == 0) && (i % 5 == 0)) {
                str += "FizzBuzz, "
            }
            else if (i % 3 == 0) {
                str += "Fizz, "
            }
            else if (i % 5 == 0) {
                str += "Buzz ,"
            }
            else {
                str += i + ", "
            }
        }
        str = str.substring(0,str.length-2) + "."
        console.log(str)
    }
    else {
        console.log("Parameter must be a positive number")
    }
}

fizzbuzz(15)