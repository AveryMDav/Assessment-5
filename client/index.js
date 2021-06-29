const complimentForm = document.querySelector('#addCompliment');
const showAllBtn = document.querySelector('#ShowAll');
const compCon = document.querySelector('#compliment-container');
const deleteBtn = document.querySelector('#deleteButton');
const errCallBack = err => console.log(err);
const compCallBack = function({data: compliments}){
    displayCompliments(compliments)
    console.log(compliments)
}
complimentForm.addEventListener('click', complimentSubmitHandler);
showAllBtn.addEventListener('click', showAllComps);
deleteBtn.addEventListener('click', deleteComp);

console.log('hello')
console.log(compCon)

function deleteComp(){
    axios.delete("http://localhost:4000/api/compliment/id")
    .then(compCallBack)
    .catch(errCallBack)
}

function showAllComps(){
    axios.get("http://localhost:4000/api/compliment/all")
    .then(compCallBack)
    .catch(errCallBack)
}
//this function reaches out to the backend with axios to get all compliments in the database. Passing through a parameter and waits for a response. 

//The following functions are related to .post addCompliment
function uploadComp(body){
    axios.post("http://localhost:4000/api/compliment/", body)
         .then(alert('Thank you for your contribution!'))
         .catch(errCallBack)
}
//this function reaches out to the backend with axios. Passing through a parameter and waits for a response. It will thank the user for their contribution.

function complimentSubmitHandler(e) {
    e.preventDefault();
    let compAdd = document.querySelector('#compliment')
    let compObj = {
        compliment: compAdd.value
    }
    console.log(compObj);
    uploadComp(compObj);
    delete compAdd.value
}
//This function takes in parameter 'e' and immediatly stops default events from running. It then takes the value entered into the HTML at id 'compliment' and runs it through the uploadComp function. Then it gets rid of the value in compObj.


// The following functions relate to getAllCompliments
function createCompLine(comps) {
    console.log(comps)
    const compLine = document.createElement('div');
    compLine.classList.add('comp-line');
    compLine.innerHTML = `<h3> <button type="button" id="deleteButton">X</button> ${comps}<h3>`
    compCon.appendChild(compLine);
}
//taking a string as an array this function logs the array, creates a new HTML div with a class of 'comp-line' and a h3 string comprised of "comps". It then adds that to the compliment-container section of the HTML.

function displayCompliments(arr) {
    console.log(arr)
    compCon.innerHTML = ``
    for (let i=0; i<arr.length; i++){
        createCompLine(arr[i])
    }
}
//taking in a array as a parameter this function will log the array and run the createComLine for each item in the array.