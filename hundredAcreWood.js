var eeyore = { character: "Eeyore"}
var heffalumps = { character: "heffalumps"}
var kanga = { character: "kanga"}
var owl = { character: "owl"}
var christopherRobin = { character: "christopherRobin"}
var rabbit = { character: "rabbit"}
var gopher = { character: "gopher"}
var piglet = { character: "piglet"}
var winnieThePooh = { character: "winnieThePooh"}
var bees = { character: "bees"}
var tigger = { character: "tigger"}

eeyore.east = heffalumps
heffalumps.west = eeyore
eeyore.south = kanga
kanga.north = eeyore
christopherRobin.north = kanga
kanga.south = christopherRobin
christopherRobin.west = owl
owl.east = christopherRobin
christopherRobin.east = rabbit
rabbit.west = christopherRobin
christopherRobin.south = winnieThePooh
winnieThePooh.north = christopherRobin
rabbit.east = gopher
gopher.west = rabbit
rabbit.south = bees
bees.north = rabbit
owl.south = piglet
piglet.north = owl
piglet.east = winnieThePooh
winnieThePooh.west = piglet
winnieThePooh.east = bees
bees.west = winnieThePooh
winnieThePooh.south = tigger
tigger.north = winnieThePooh

var player = {
    location: tigger
}