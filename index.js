//Homework Part One

//Using what you did with Objects perdiod 2 from the slides, create a personal profile. Instead of Products you will need to create a personal profile. Initialize Constructors and More!
//Step 1
function personProfile (name, age, gender,education,aspiration,hobbies, addInfo){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.education = education;
    this.aspiration = aspiration;
    this.hobbies = hobbies;
    this.addInfo = addInfo   
}



//Step 2
let personProfile1 = new personProfile ('Jonani','42','male','BSc',"cybersecurity consultant",'reading, skydiving, cooking',);


//Step 3
let personProfile2 = new personProfile ('Ronnie','41','female','BSc','philanthropist','reading, traveling, hosting',);
let personProfile3 = new personProfile ('Eti','9','female','k-2','reading, drawing, ballet','artist',);
let personProfile4 = new personProfile ('Perez','24','male','some college', 'pilot','drag-racing, snowboarding, biking',);
let personProfile5 = new personProfile ('Mbappe','22','male','high-school','soccer star','running, soccer',);
// console.log(personProfile1, personProfile2, personProfile3, personProfile4, personProfile5);


//Step 4
function addInfo (nationality, location){
    this.nationality = nationality;
    this.location = location;
}
let addInfo1 = new addInfo('Nigerican','Dorchester');
let addInfo2 = new addInfo('Nigerian','Lagos');
let addInfo3 = new addInfo('American','Boston');
let addInfo4 = new addInfo('British','Sydney');
let addInfo5 = new addInfo('French','Paris');
// console.log(addInfo1, addInfo2, addInfo3, addInfo4, addInfo5);

//Step 5
// Added "addinfo" property to the personalProfile object in Step #1

//Step 6
personProfile1 = new personProfile ('Jonani','42','male','BSc',"cybersecurity consultant",'reading, skydiving, cooking',addInfo1);
personProfile2 = new personProfile ('Ronnie','41','female','BSc','philanthropist','reading, traveling, hosting', addInfo2);
personProfile3 = new personProfile ('Eti','9','female','k-2','reading, drawing, ballet','artist', addInfo3);
personProfile4 = new personProfile ('Perez','24','male','some college', 'pilot','drag-racing, snowboarding, biking', addInfo4);
personProfile5 = new personProfile ('Mbappe','22','male','high-school','soccer star','running, soccer', addInfo5);
// console.log(personProfile1, personProfile2, personProfile3, personProfile4, personProfile5);


// Step 7
personProfile1.phobia = 'height';
console.log(personProfile3, personProfile1);



// Step 8
//Create
//
//Step 1
let personalProfile = {
    type:'languages',
    displayType: function(){
        console.log(this.type);
    }
}
personalProfile.displayType();

//Step 2
let person1 = Object.create(personalProfile);
person1.displayType();

//Step 3
let certs = Object.create(personalProfile);
certs.type = 'Certifications';
certs.displayType();
// console.log(certs);



//Array vs Objects

//Objects: Create a hobby object with properties with name, descriptions and boolean of a property name of supplies needed.
let profile = {
    name: 'Jonani',
    favColor: 'blue',
    hobby: 'skydiving',
    likesFifa: true,
}
console.log(profile);

//Use dot notation to return hobby description
console.log(profile.hobby);


//Use bracket notation to return name
console.log(profile['name']);

//Arrays: Create an array with 4 different hobbies
const favHobbies = ['reading','cooking', 'skydiving', 'soccer']
console.log(favHobbies);


//access second item in the array
favHobbies[2];
console.log(favHobbies[1]);


//Objects
//Change the value of the boolean of the object we created.
profile.likesFifa = false;
console.log(profile.likesFifa);


//Add a new property to our person object such as supplies with multiple values in the property.
profile.supplies = ['gamepads', 'soccerboots', 'highlighters', 'diving gear', 'spatula'];
console.log(profile);


//remove the hobby description property from the person object
delete profile.hobby
console.log(profile);

//Arrays
//Use push to add another hobby to your array of hobbies
favHobbies.push('coding')
console.log(favHobbies);

//use pop to remove the last item from an hobby array
favHobbies.pop();
console.log(favHobbies)

//use unshift to add more values to the beginning of the hobby array.
favHobbies.unshift('baking', 'hiking', 'snowboarding');
console.log(favHobbies)


// use shift to remove the first item from the hobby of the array
favHobbies.shift();
console.log(favHobbies);


//Object
//Write a for in loop for the person object you created
for (let name in profile){
    console.log (profile ['name']);   
}

//Write a for each loop for your person Object
Object.keys(profile).forEach (function(key){
    console.log(key);
    console.log(profile[key]);

})

//Arrays
//Write a for loop for your hobby array
for (let i=0; i < favHobbies.length; i++){
    console.log(favHobbies[i]);
}

//Write a for of loop for your hobby array
for (let snowboarding of favHobbies) {
    console.log('snowboarding');
}
// for (let i of favHobbies){
//     console.log(i);
// }



//write a for each loop for your hobby array
// favHobbies.forEach(item =>{
//     console.log(item);
//     console.log(item.length)
// });

favHobbies.forEach(i => console.log(i));
