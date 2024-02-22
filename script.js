const jedi = []
jedi[0] = "Luke"
console.log(jedi)
jedi.push("Obi-Wan Kenobi")
console.log(jedi)
jedi.unshift("Yoda")
console.log(jedi)
console.log(jedi[1])
jedi.pop(jedi[2])
console.log(jedi)
jedi.splice(1)
console.log(jedi)

const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"]
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"]
const starWarsVillains = sithLords.concat(imperialOfficers)
console.log(starWarsVillains)
const sliceVillains = [starWarsVillains.slice(2, 3), starWarsVillains.slice(3, 4)]
console.log(sliceVillains)

const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
}

console.log(droids[`astromech`])
console.log(droids.protocol)
droids.assassin = "IG-11"
console.log(droids)