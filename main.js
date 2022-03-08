class School{
    constructor(name,level,numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    //create getters
    get name(){
      return this._name = name;
    }
    get level(){
      return this._level = level;
    }
    get numberOfStudents(){
      return this._numberOfStudents = numberOfStudents;
    }
  //create setter
  set numberOfStudents(input){
    if(typeOfinput === 'Number'){
      this.numberOfStudents = input;
    }else{
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  //create method quickFacts()
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} student at the ${this._level} school level`)
  }
  static pickSubstituteTeacher(substituteTeachers){
   const inputLength = substituteTeachers.length
   const random = Math.floor(Math.random()*inputLength)
  }
  }
  
  // class PrimarySchool
  class PrimarySchool extends School{
    constructor(name,pickupPolicy,numberOfStudents,level){
      super(name,level);
      this._level = 'primary';
      this._pickupPolicy = pickupPolicy;
      this._name = name;
      this._numberOfStudents = numberOfStudents;
    }
    get PrimarySchool(){
      return this._PrimarySchool;
    }
  
  }
  
  //Create HighSchool Class
  class HighSchool extends School{
    constructor(name,sportsTeams,numberOfStudents,level){
      super(name,level);
  this._level = 'high'
  this._name = name;
  this._numberOfStudents = numberOfStudents;
  this._sportsTeams = sportsTeams;
    }
  sportsTeams(){
    console.log(this._sportsTeams);
  }
  }
  //-----------------Create lorraineHansbury -------------------
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury','Students must be picked up by a parent, guardian, or a family member over the age of 13.',514)
  lorraineHansbury.quickFacts()
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
  //-----------------Create alSmith ----------------------------
  const alSmith = new HighSchool('Al E. Smith',['Baseball', 'Basketball', 'Volleyball', 'Track and Field'],415)
  alSmith.sportsTeams()