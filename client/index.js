const complimentForm = document.querySelector('#addCompliment');
const showAllBtn = document.querySelector('#ShowAll');
const compCon = document.querySelector('#compliment-container');
const errCallBack = err => console.log(err);
const compCallBack = function({data: compliments}){
    displayCompliments(compliments)
    console.log(compliments)
}
// ({data: compliments}) => displayCompliments(compliments)
complimentForm.addEventListener('click', complimentSubmitHandler);
showAllBtn.addEventListener('click', showAllComps);

function uploadComp(body){
    axios.post("http://localhost:4000/api/compliment/", body)
         .then(alert('Thank you for your contribution!'))
         .catch(errCallBack)
}

function showAllComps(){
    axios.get("http://localhost:4000/api/compliment/all")
    .then(compCallBack)
    .catch(errCallBack)
}

function complimentSubmitHandler(e) {
    e.preventDefault();
    let compAdd = document.querySelector('#compliment')
    let compObj = {
        compliment: compAdd.value
    }
    console.log(compObj);
    uploadComp(compObj);
    compAdd.value = ''
}


function createCompLine(comps) {
    console.log(comps)
    const compLine = document.createElement('div');
    compLine.classList.add('comp-line');
    compLine.innerHTML = `<h3>${comps}<h3>`
    compCon.appendChild(compLine);
}

function displayCompliments(arr) {
    console.log(arr)
    compCon.innerHTML = ``
    for (let i=0; i<arr.length; i++){
        createCompLine(arr[i])
    }
}