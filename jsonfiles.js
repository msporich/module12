/* Javascript Document */

/***********************/
/*    Module Twelve    */
/*     JSON  FILES     */
/***********************/

//Step 1: Create Reference Variables
let header = document.querySelector("header");
let main = document.querySelector("main");

//Step 2: Create a Variable to Store Request URL
let requestURL = "https://msporich.github.io/module12/iscream.json";

//Step 3: Create a New XHR Object
let request = new XMLHttpRequest();

//Step 4: Open a New Request, Using the Open Method
request.open("GET", requestURL);

//Step 5: Set Up the Request to Accept JSON
request.responseType = "json";

//Step 6: Send the Request Using the Send Method
request.send();

//Step 7: Adding an Event Handler That Listens For Onload of the JSON File
request.onload = function() {
	
	let iScreamInc = request.response;
	console.log(iScreamInc);
	populateHeader(iScreamInc);
	topFlavours(IScreamInc);
	
}

//Step 8: Define populateHeader method
function populateHeader(jsonObj) {
	
	//grab the company name from the JSON object and then create a new element, adding text and appending to the header
	let headerH1 = document.createElement("h1");
	headerH1.textContent = jsonObj["companyName"];
	header.appendChild(headerH1);
	
	//grab the company info and established date and add a new paragraph to your HTML that displays this info
	let para = document.createElement("p");
	para.textContent = jsonObj["headOffice"] + ", Established: " + jsonObj["established"];
	header.appendChild(para);
	
}

//Step 9: Define topFlavours method
function topFlavours(jsonObj) {
	
	//bind top flavours object to a variable
	let topFlavours = jsonObj["topFlavours"];
	
	for(let i = 0; i < topFlavours.length; i++) {
		
		//create a few different elements
		let article = document.createElement("article");
		let h2 = document.createElement("h2");
		let p1 = document.createElement("p");
		let p2 = document.createElement("p");
		let list = document.createElement("ul");
		
		h2.textContent = topFlavours[i].name;
		p1.textContent = "Calories: " + topFlavours[i].calories;
		p2.textContent = "Type: " + topFlavours[i].type;
		
		let ingredients = topFlavours[i].ingredients;
		for(let j = 0; j < ingredients.length; j++) {
			
			let listItem = document.createElement("li");
			listItem.textContent = ingredients[j];
			list.appendChild(listItem);
			
		}
		
		//append each element to article, then append article to section
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(list);
		main.appendChild(article);
		
	}
	
}