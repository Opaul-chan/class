class Media {
  constructor(title){
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut; 
    }
  get rating(){
    return this._ratings;
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(inputValue){
    if(inputValue <= 5){
      this._ratings.push(inputValue)
    }else{
      console.log('Rating have to be under 5')
    }
  }
  getAverageRating(){
    let sumOfRatings = this._ratings.reduce((perviousRating, rating) => perviousRating + rating,0)
    return Math.floor(sumOfRatings / this._ratings.length)
  }
  set isCheckedOut(checksIn){
    this.isCheckedOut = checkIn
  }
}
// class Book

class Book extends Media{
  constructor(author,title,pages){
    super(title)
this._author = author
this._pages = pages //number
  }
get author(){
return this._author 
  }
get pages(){
return this._pages  
  }
}
//class Movie
class Movie extends Media{
  constructor(director,title,runTime){
    super(title);
this._director = director
this._title = title
this._runTime = runTime //number 
  }
  get director(){
    return this._director
  }
  get title(){
    return this._title
  }
  get runTime (){
    return this._runTime
  }
}



//class CD
class CD extends Media{
  constructor(artist,title,songTitles){
    super(title);
this._artist = artist;
this._title = title; 
this._songs = songs; //array of strings  
  }
  get artist(){
    return this._artist;
  }
  get songTitles(){
    return this._songTitles;
  }
}


const historyOfEverything = new Book('Bill Brysin','A Short History of Nearly Everything',544)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());


