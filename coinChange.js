function coinChange(total) {
    var dollars = ""
    var quarters = ""
    var dimes = ""
    var nickels = ""
    var pennies = ""
    var str = ""
    var remainder = total % 25
    total /= Math.floor(25)
    remainder = total % 10
    total /= Math.floor(10)
    remainder = total % 5
    total /= Math.floor(5)
    remainder = total % 1
    total /= Math.floor(1)
    console.log("dollars: " + dollars + "quarters: " + quarters + "dimes: " + dimes +
     "nickels: " + nickels + "pennies: " + pennies + "}")
}