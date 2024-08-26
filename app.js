//Make an single element using an ID(#)
let serviceHeading = document.getElementById("serviceAmazing");
console.log(serviceHeading);

//Makes an array with all the elements with the specified classname.
let serviceElements = document.getElementsByClassName("serviceIcons");
console.log(serviceElements);

//How to get a tag/query selector.
let serviceSupport = document.querySelector(".amazingIcon h6");
console.log(serviceSupport);

//Changing the style once saved to a variable.
serviceSupport.style.color = "green";
serviceSupport.style.fontSize = "30px";

//How to ADD text to HTML with JavaScript
serviceHeading.innerHTML = "AMAZING" //serviceHeading is a variable we made up ^

let serviveColumns = document.querySelectorAll(".serviceIcons h6") //This is gone make all the selector tags into an array.
serviveColumns[1].innerHTML = "PIZZA"; //This is how you you change an element in an array


let serviceImageOne = document.querySelector(".amazingIcon img"); //calling and saving the image to a variable using the img-tag
console.log(serviceImageOne);
//serviceImageOne.addEventListener("click", onImagePress); //How to add an event/action to an object once clicked, hovered, etc.

function onImagePress()
{ console.log("Hey you pressed me!");}

let servicesText = document.querySelectorAll(".container6 h6"); //getting and saving all the h6 tags in container 6.
console.log(servicesText)
function stylingText()
{
    for (let i = 0; i < servicesText.length; i++) {
        const element = servicesText[i];
        servicesText[i].style.color = "green";
        servicesText[i].style.fontSize = "30px";    
    }
}
serviceImageOne.addEventListener("click", stylingText); //addEventListener is a function made alredy by javascript. click is a varible, stylingText is a function we made used as a variable but with out parenthesis so it will only run when the addEventListener Method is executed.

let ct6ImageFour = document.querySelector(".ct6Col4 img");
console.log(ct6ImageFour);
let navBar = document.querySelectorAll(".ct1Col2 a");
console.log(navBar);
function styleNavBar()
{
    for (let i = 0; i < navBar.length; i++) 
    {
        navBar[i].style.color = "green";
        navBar[i].style.fontSize = "30px"; 
    }
}
ct6ImageFour.addEventListener("click", styleNavBar);

let changePizzaToNormal = document.querySelectorAll(".container6 h6");
changePizzaToNormal[1].innerHTML = "24 HOUR";

let container7Span = document.querySelector(".ct7Col1 span");
console.log(container7Span.innerText);
function print(){console.log("Ima Mr. Portfolio");}
container7Span.addEventListener("mouseover", print);

let greenButtons = document.querySelectorAll(".container7 input");
console.log(greenButtons);
for (let i = 0; i < greenButtons.length; i++) 
{
    greenButtons[i].style.backgroundColor = "purple";
}

let mooImage = document.querySelectorAll(".img1 img")
console.log(mooImage);
mooImage[1].addEventListener("click", () =>
{
    let portfolioHeaders = document.querySelectorAll(".text h6");
    console.log(portfolioHeaders);
    for (let i = 0; i < portfolioHeaders.length; i++)
    {
        const element = portfolioHeaders[i];
        portfolioHeaders[i].style.fontSize = "30px";
    }
});

// //Saving Information from an Input Box.
// let inputName = document.querySelector(".name");
// console.log(inputName);
// let savedInfo = ""; //saves everytime something is added to the input box
// inputName.addEventListener("input", () =>
// {
//     let currentInput = inputName.value;
//     savedInfo = currentInput;
//     console.log(savedInfo)
// });

// let inputEmail = document.querySelector(".email");
// console.log(inputEmail);

// let subscribeButton = document.querySelector(".subscribe");
// console.log(subscribeButton);
// let savedEmailInfo = "";
// subscribeButton.addEventListener("click", () => {
//     console.log(inputEmail.value);
//     savedEmailInfo = inputEmail.value;
//     inputEmail.value = "";
//     console.log(savedEmailInfo);
// } )

let subscribeList = []; //empty array to hold all the arrays made from the different times they click the subscribe button.
let personInfo = {name: "", email: ""};//Will store the name and email in one array.
let subscribeButton = document.querySelector(".subscribe");
console.log(subscribeButton);

subscribeButton.addEventListener("click", grabInfo);
function grabInfo()
{
    let inputName = document.querySelector(".name"); //This is going to grab the tag and the element inside the class.
    let inputEmail = document.querySelector(".email");
    personInfo.name = inputName.value; //This is going to grab only the text inside the tag being called by the class.
    personInfo.email = inputEmail.value;
    console.log(personInfo); //console log is just to make sure the right data is being saved
    //PUSHING personInfor(name and email into the array subscribeList I made to hold the data.)
    subscribeList.push(personInfo);
    console.log(subscribeList);
    //Clearing out the input boxes on the WEBPAGE once the subscribe button is pushed
    inputName.value = "";
    inputEmail.value = "";
}