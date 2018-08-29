'use strict';

let assert = require('assert');

/* global jobTypes object with different jobs   */
let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

/*create a class called crewMember with properties name, job, specialSkill,ship
set ship to null. CrewMember has a method called enterShip that has an instance
of the Ship class as an argument. It also assigns shipInstance to crewmember's
ship property and crewMember to crew of the ship  */
class CrewMember {
  constructor(name, job, specialSkill, ship) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  enterShip(shipInstance) {
    this.ship = shipInstance;
    shipInstance.crew.push(this);
  }
}

/* Ship class with name,type, ability, crew[]. Has missionStatement() which returns
Ship ability when it has a crew greater than 0. */
class Ship {
  constructor(name, type, ability, crew) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }
  missionStatement() {
    return this.crew.length == 0 ? "Can't perform a mission yet." : this.ability;
  }
}

/* Creating instances of Ship and CrewMember classes.                */
let mav = new Ship('Mars Acent Vehicle', 'MAV', 'Ascend into low orbit');
let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
/* instances of CrewMember class calling their enterShip method and passing an
instance of the Ship class */
crewMember1.enterShip(mav);
crewMember2.enterShip(hermes);
/* Ship instances calling their missionStatement() method that returns their
ship ability when they have a crew or Can't perform mission when crew[] length
is 0.  */
mav.missionStatement();
hermes.missionStatement()

//tests
if (typeof describe === 'function') {
  describe('CrewMember', function() {
    it('should have a name, a job, a specialSkill and ship upon instantiation', function() {
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function() {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function() {
    it('should have a name, a type, an ability and an empty crew upon instantiation', function() {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function() {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
