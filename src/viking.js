// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage

  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else return `${this.name} has died in act of combat`
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    return this.health <= 0 ? 'A Saxon has died in combat'
      : `A Saxon has received ${damage} points of damage`;
  }

}

// War
class War { 
  constructor(){
  this.vikingArmy = []
  this.saxonArmy = []
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    let randomSaxon = [Math.floor(Math.random()*this.saxonArmy.length)]
    let battleText = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[0].strength)
    if (this.saxonArmy[randomSaxon].health <= 0){
      this.saxonArmy.splice(randomSaxon)
    }
    return battleText
  }

  saxonAttack(){
    let randomViking = [Math.floor(Math.random()*this.vikingArmy.length)]
    let battleText = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[0].strength)
    if (this.vikingArmy[randomViking].health <= 0){
      this.vikingArmy.splice(randomViking)
    }
    return battleText
  }
  showStatus(){
    if(this.saxonArmy.length <= 0){
      
      clearInterval(int)
      return 'Vikings have won the war of the century!'
    }
    if(this.vikingArmy.length <= 0){
      
      clearInterval(int)
      return 'Saxons have fought for their lives and survived another day...'
      
    }
    else {
      return 'Vikings and Saxons are still in the thick of battle.'
  }
  }
}

let battle = new War()
let saxon1 = new Saxon(100, 50)
let saxon2 = new Saxon(99, 50)
let saxon3 = new Saxon(90, 50)
let saxon4 = new Saxon(89, 50)
let saxon5 = new Saxon(67, 50)

let viking1 = new Viking('Thor', 99999, 40)
let viking2 = new Viking('Odin', 99999, 40)
let viking3 = new Viking('Norse', 99999, 40)
let viking4 = new Viking('Loki', 99999, 40)
let viking5 = new Viking('Ragnarok', 99999, 40)

battle.addSaxon(saxon1)
battle.addSaxon(saxon2)
battle.addSaxon(saxon3)
battle.addSaxon(saxon4)
battle.addSaxon(saxon5)

battle.addViking(viking1)
battle.addViking(viking2)
battle.addViking(viking3)
battle.addViking(viking4)
battle.addViking(viking5)

let int = setInterval(() => {
  console.log("Swords clink")
  console.log(battle.saxonAttack())
  console.log(battle.vikingAttack())
  console.log(battle.showStatus())
},100)
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
