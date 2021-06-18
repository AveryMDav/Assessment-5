const complimentForm = document.querySelector('#compliment-form');
const compCon = document.querySelector('#compliment-container')

complimentForm.addEventListener('Click', complimentSubmitHandler);

function complimentSubmitHandler(e) {
    e.preventDefault();
    let compAdd = document.querySelector('#compliment')
    let combObj = {
        compliment: compAdd.value
    }
    uploadComp(combObj);
    compAdd.value = ''
}

const uploadComp = function(body){
    axios.post("http://localhost:4000/api/compliment/", body)
         .then(res.status(200).send(res.data))
         .catch(err => {console.log(err)})
}


function createCompLine(comps) {
    const compLine = document.createElement('div');
    compLine.classList.add('comp-line');

    compLine.innerHTML = `<h2>${comps.compliment}<h2>`

    complimentForm.appendChild(compLine);
}

function displayCompliments(arr) {
    compCon.innerHTML = ``
    for (let i=0; i<arr.length; i++){
        createCompLine(arr[i])
    }
}