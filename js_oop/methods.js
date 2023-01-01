// methods

class Animal {
	constructor(type, species, age) {
		this.type = type;
		this.species = species;
		this.age = age;
	}
	info() {
		info = document.write(`Type: ${this.type}` + '<br>'
					   		  + `Species: ${this.species}` + '<br>'
					   		  + `Age: ${this.age}`);
		return info;
	}
}

const dog = new animal("mammal", "dog", 5);

dog.info();