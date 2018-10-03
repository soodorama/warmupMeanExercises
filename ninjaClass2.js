function Ninja(name) {
    this.name = name;
    this.health = 100
    var speed = 3
    var strength = 3
    this.sayName = function() {
        console.log(this.name)
    }
    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength)
    }
    this.drinkSake = function() {
        this.health += 10
    }
    this.punch = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 5
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!")
        }
        else {
            console.log("Not a ninja")
        }
    }
    this.kick = function(ninja) {
        if (ninja instanceof Ninja) {
            var damage = 15 * strength
            ninja.health -= damage
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!")
        }
        else {
            console.log("Not a ninja")
        }
    }
}