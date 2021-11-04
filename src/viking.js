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
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
