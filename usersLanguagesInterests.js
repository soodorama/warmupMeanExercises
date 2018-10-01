var users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

function userLanguages(users) {
    for (var i = 0; i < users.length; i++) {
        var str = users[i].fname + " " + users[i].lname + " knows "
        for (var j = 0; j < users[i].languages.length; j++) {
            str += users[i].languages[j] + ", "
        }
        str = str.substring(0,str.length-2) + "."
        console.log(str)
        str = users[i].fname+ " is also interested in "
        for (var j in users[i].interests) {
            str += users[i].interests[j] + ", "
        }
        str = str.substring(0,str.length-2) + "."
        console.log(str)
    }
}