//Create a Car class or function constructor that has the following properties:
// make (string): The make of the car, e.g., "Toyota".
//model (string): The model of the car, e.g., "Camry".
//year (number): The year the car was manufactured, e.g., 2020.
//isAvailable (boolean): Indicates if the car is currently available for rent
//The Car class or function constructor should also have a method called
//toggleAvailability that changes the isAvailable property to its opposite value (true to
//false, false to true
class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.model=model;
        this.year=year;
        this.isAvailable=isAvailable;
    }
    toggleAvailability(){
this.isAvailable=!this.isAvailable
console.log(this.isAvailable)
    }
    
}
let car= new Car(`Jeep`,`Wrangler`,2021,`True`)
console.log({car})
car.toggleAvailability()

// Create a Rental class or function constructor that has the following properties:
// car (Car object): The car that has been rented.
// renterName (string): The name of the person who rented the car.
// rentalStartDate (Date object): The start date of the rental period
// rentalEndDate (Date object): The end date of the rental period.
class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car;
        this.renterName= renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;
    }
 calculateRentalDuration(){
 let rentalDuration=Math.round(Math.abs(this.rentalEndDate-this.rentalStartDate))/(1000*60*60*24);
  return rentalDuration
    }
}

let rental= new Rental(`Toyota`,`Automack`,new Date('7/15/2022'),new Date('8/20/2022'));
console.log(rental)
console.log(rental.calculateRentalDuration())

// Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.
class Question{
constructor(text,options,correctAnswer,){
    this.text=text;
    this.options=options;
    this.correctAnswer=correctAnswer;
}
checkAnswer(usersAnswer){
   return usersAnswer===this.correctAnswer;
}
}
let questionClass= new Question(`What is your favorite colour`,[`Pink`,`Black`,`Blue`],`Pink`)
console.log(questionClass.checkAnswer(`Yellow`))

// 2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the and updates the
//score if the answer is correct.

class Quiz{
    constructor(){
     this.questions=[];
     this.currentQuestionIndex= 0;
     this.score=0;
    }
     addQuestion(question){
     this.questions.push(question);
    }
     nextQuestion(){
        this.currentQuestionIndex++
    }
     submitAnswer(ans){
     const questionCurrently= this.questions[this.currentQuestionIndex]
     if(questionCurrently.checkAnswer(ans)){
        this.score++
     }
    }
}
const quizes=new Quiz()
const question1= new Question("What is your friend`s zodiac sign",["Gemini","Aries","Pisces"],"Scorpion")
const question2=new Question("Where is KICC located",["Nairobi","Bamburi","Kajiado"],"Nairobi")
const question3= new Question("How many seasons does the originals have",["two","five","three"],"five")

quizes.addQuestion(question1);
quizes.addQuestion(question2);
quizes.addQuestion(question3)

quizes.submitAnswer("Aries");
quizes.nextQuestion();
quizes.submitAnswer("Nairobi");
quizes.nextQuestion();
quizes.submitAnswer("five")
console.log(quizes.score)