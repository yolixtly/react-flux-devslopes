'use-strict';
console.log('objects Practice');

var person = {
	name: "Jack",
	age: 23,
	speakName: function(aName) {
		return "hello " + aName;
	},
	sayJack: function(){
		return "hello " + this.name;
	}
};

console.log(person.name);
console.log(person.speakName("Yoli"));
console.log(person["name"]);

console.log(person.sayJack());

person.age += 5;

console.log("age: ", person.age);

var Vehicle = function(make, color, premium) {
	var self = this;
	this.make = make;
	this.odometer = 0;
	this.engine = 'V6';
	this.color= color;

	if(premium == true) {
		this.engine = 'V8';
		this.color = 'Platinum';
	}

	this.addTrip = function(newMiles) {
		if(newMiles > 0) {
			self.odometer += newMiles;
		}
	};
};

var benz = new Vehicle('Mercedez-Benz', 'white', false);

console.log('Color: ' + benz.color);
console.log('Odometer: ' + benz.odometer); 

benz.addTrip(501);
console.log('Odometer: ' + benz.odometer);

benz.addTrip(-500);

console.log('Odometer:' + benz.odometer);

var volvo = new Vehicle('VOLVO', 'ugly maroon', true);
console.log('volvo Color: ' + volvo.color);

