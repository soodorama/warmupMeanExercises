function coinChange(total) {
    var dollars = quarters = dimes = nickels = pennies = 0
    var str = "{"
    dollars = Math.floor(total / 100)
    var remainder = total % 100
    quarters = Math.floor(remainder / 25)
    remainder %= 25
    dimes = Math.floor(remainder / 10)
    remainder %= 10
    nickels = Math.floor(remainder / 5)
    remainder %= 5
    pennies = remainder
    if (dollars) str += "dollars: " + dollars + ", "
    if (quarters) str += "quarters: " + quarters + ", "
    if (dimes) str += "dimes: " + dimes + ", "
    if (nickels) str += "nickels: " + nickels + ", "
    if (pennies) str += "pennies: " + pennies + ", "
    if (str.length > 1) str = str.substring(0,str.length-2)
    else str += "}"
    console.log(str)
}