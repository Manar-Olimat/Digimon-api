
const url = "https://digimon-api.vercel.app/api/digimon";

// const search = "https://digimon-api.vercel.app/api/digimon/name/" // search by name
// const level = "https://digimon-api.vercel.app/api/digimon/level/" // search by name




// get search button from DOM 
const searchButton = document.getElementById("searchButton")
// get search input from DOM 
const searchFelid = document.getElementById("searchFelid")

// degemon constructer
function Degemon(name, level, imgUrl){

    if (!new.target) {
        throw Error("Cannot be called without the new keyword");
    }

    this.name=name;
    this.level=level;
    this.imgUrl=imgUrl;
}

//create object array to store data
let degemonArr=new Array();



// fire event on click 
searchButton.onclick = (event) => {
    // cancel default behavior (refresh page)
    event.preventDefault()

    // get search value 
    const degemonSearch = searchFelid.value

   
  
 


       
 // call getData function 
 getData();
}



//fetch all data from url
async function getData() {
    try {
        let res = await fetch(url);
        const data= await res.json();
        //store data in degemon array
   for (let i = 0; i < 21; i++) {
    
            degemonArr.push(new Degemon(data[i].name,data[i].level,data[i].img));
           

}
// save data to localStorage
const strDegemon= JSON.stringify(degemonArr);
 localStorage.setItem('degemon',strDegemon);
 console.log(degemonArr);
       
        } catch (error) {
        console.log(error);
    }
}


// get fom local
function getFromLocal(){
    let strDegemon = localStorage.getItem('degemon');
    let arr = JSON.parse(strDegemon);
    degemonArr = arr;
   for (let i=0;i<degemonArr.length;i++) {
     display(degemonArr[i]);
   }
    console.log(arr);
 }

getFromLocal();



function display(data) {


        // create div container and set class name 
        let divCol = document.createElement("div");
        divCol.className = "col-sm-3";
        document.querySelector('#cardDiv').appendChild(divCol);
        // cardDiv.append(divCol);

        // create div container to carry card-title, card-image, card-body, and card-text 
        let card = document.createElement("div");
        card.className = "card"
        divCol.append(card);

        let imgCard = document.createElement("img");
        imgCard.className = "card-img-top w-100";
        imgCard.style.width = "100px"
        imgCard.src = data.imgUrl;
        card.append(imgCard)

        let cardBody = document.createElement("div");
        cardBody.className = "card-body"
        card.append(cardBody);

        let cardTitle = document.createElement("h5");
        cardTitle.className = "card-title"
        cardTitle.textContent ='Digimon ';
        cardBody.append(cardTitle);

        let cardText = document.createElement("p");
        cardText.className = "card-text"
        cardText.setAttribute('style', 'white-space: pre;');
        cardText.textContent = "-Name: " + data.name + " \n\r- Level: " + data.level ;
        cardBody.append(cardText);

    }

    

// const url = "https://digimon-api.herokuapp.com/";

// const search = "https://digimon-api.vercel.app/api/digimon/" // replace whitespace with + 


// // Secret key Every api server has a way to authenticate the request by passing a secret key. Put your secret key down here
// // replace your secret key with config.SECRET_API_KEY.
// let key = config.SECRET_API_KEY

// // get search button from DOM 
// const searchButton = document.getElementById("searchButton")
// // get search input from DOM 
// const searchFelid = document.getElementById("searchFelid")


// // fire event on click 
// searchButton.onclick = (event) => {
//     // cancel default behavior (refresh page)
//     event.preventDefault()

//     // get search value 
//     const moveName = searchFelid.value

//     // call getData function and pass move name as parameter 
//     getData(moveName);
// }

// // function to handle get data from server 
// function getData(moveName) {
//     // one of stander URL role is the url doesn't accept whitespace here we are replace whitespace whit '+' (this info from api documentation)
//     // handle whitespace 
//     moveName = moveName.replace(' ', '+');

//     // fetch function take api URL as as parameter 
//     // the url must have api key and move name   
//     fetch("https://digimon-api.vercel.app/api/digimon/name/" + moveName )
//         // convert response to object by json() method  
//         .then((response) => response.json())
//         // after we handle the response 
//         .then((data) => {
//             // log the response as object
//             console.log(data)

//             // call function display and take data as parameter to represent the data by DOM Manipulation
//             display(data)
//         });
// }






