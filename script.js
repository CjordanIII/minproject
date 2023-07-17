// class Example {
// 	constructor(name){
// 		this.name = name
// 		this.method = this.method.bind(this)
// 	}

// 	methodFromExample(){
// 	 return this.name
// 	}
// }

// const btnEl = document.querySelector('button')

// btnEl.addEventListener('click', methodFromExample)


//example


// main ship proprties

class ShipProperties{
    constructor(hull,firepower,accuracy){ // hitpoints,damage output, chaces ship will hit target
        this.enemyHull = hull
        this.enemyFirepower = firepower
        this.enemyAccuracy = accuracy 
    }
    hullhp() {
        const randomNum = Math.floor(Math.random() * (6 - 3 + 1)) + 3
        this.enemyHull = randomNum
    }

    firePower() {
        const randomNum = Math.floor(Math.random() * 6)
        this.enemyFirepower = randomNum
        return this.enemyFirepower
    }

    accuracyOfship() {
        const randomNum = Math.round(Math.random() * (0.8 - 0.6) + 0.6 * 10) / 10
        this.enemyAccuracy = randomNum
    }
}

const ships = new ShipProperties()
const methods = [ships.hullhp(),ships.firePower(),ships.accuracyOfship(),console.table(ships)]

//sub class ===================>

class HumanShips extends ShipProperties{
    constructor(hull,firePower,accuracy,hitPass){
        super(hull,firePower,accuracy)
        this.hitPass = hitPass
    }
    damageDone(){
        this.enemyHull=this.enemyHull-super.firePower() 
    }
}



const ussAssembly = new HumanShips(20,5,0.7)
const arrOfHuman = [ussAssembly.damageDone(),console.table(ussAssembly)]
// Delete soon

// sublcass =========================
class AlienShips extends ShipProperties {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)
        // this.enemyAccuracy = this.alienAccuracy()
    }
    //TODO this needs to take damage
    alienAccuracy(){
        console.log(super.enemyAccuracy)
    }
}



const alienShips = new AlienShips()
const arrOfmethods =[alienShips.hullhp(),alienShips.firePower(),alienShips.accuracyOfship(),,console.table(alienShips),alienShips.alienAccuracy()]











console.log('%c You are attacking an alien ship', 'color:green; font-size: 35px')
console.log('%c you have attacked the ailen','color:red; font-weight: bold; font-size: 35px')
console.log(`%c This is your health ${ussAssembly.hull}hp now  you go and fight`,'color: green; font-size: 35px')
