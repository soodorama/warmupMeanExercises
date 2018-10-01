function bracesValid(str) {
    var braceCount = 0
    var parentCount = 0
    var squareCount = 0
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "{") {
            braceCount++
        }
        else if (str.charAt(i) == "}") {
            braceCount--
        }
        else if (str.charAt(i) == "[") {
            squareCount++
        }
        else if (str.charAt(i) == "]") {
            squareCount--
        }
        else if (str.charAt(i) == "(") {
            parentCount++
        }
        else if (str.charAt(i) == ")") {
            parentCount--
        }
    }

    if (braceCount == 0 && parentCount == 0 && squareCount == 0) {
        return true
    }
    return false
}

bracesValid("{{()}}[]")
bracesValid("{(})")

// function braceValid(str) {
    
// }