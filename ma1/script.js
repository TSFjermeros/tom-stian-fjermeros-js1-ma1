// question 1
var cat = {
	complain: "Meow"
};
console.log(cat);

// question 2
const heading = document.querySelector("h3");
console.dir(heading);

// question 3
const heading = document.querySelector("h3");
heading.style.padding = "2em";

console.dir(heading);

// question 4
const heading = document.querySelector("h3");
heading.classList.add("subheading");

console.log(heading.className);
// question 5
const paragraphs = document.querySelectorAll("p");
console.dir(paragraphs);
// question 6
const div = document.querySelector("div");
div.innerHTML = "<p>New paragraph</p>";
// question 7
const cats = [
	{
		name: "Blob",
		age: 10
	},
	{
		name: "Harold"
	},
	{
		name: "Blurt",
		age: 21
	}
];
for (let i = 0; i < cats.length; i++) {
	console.log(cats[i].name);
}
// question 8
const cats = [
	{
		name: "Blob",
		age: 10
	},
	{
		name: "Harold"
	},
	{
		name: "Blurt",
		age: 21
	}
];
for (let i = 0; i < cats.length; i++) {
	const name = "<h5>" + cats[i].name + "</h5>";
	console.log(name);
// question 9

// I did not manage to finsih this question. I think maybe this is all wrong.
const cats = [
	{
		name: "Blob",
		age: 10
	},
	{
		name: "Harold"
	},
	{
		name: "Blurt",
		age: 21
	}
];
for (let i = 0; i < cats.length; i++) {
	console.log(cats[i].name);
}

const name = document.querySelector("name");
name.innerHTML = console.log(name);
// question 10.

// I have a feealing this issent the right way to to it I think i should use let/if but i did not manage to get this right.

const cats = [
	{
		name: "Blob",
		age: 10
	},
	{
		name: "Harold"
	},
	{
		name: "Blurt",
		age: 21
	}
];
for (let i = 0; i < cats.length; i++) {
	const name = "<h5>" + cats[i].name + "</h5>";
	const age = "<p>" + cats[i].age + "</p>";
	console.log(name);
	console.log(age);
}