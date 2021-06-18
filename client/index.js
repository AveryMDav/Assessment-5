const complimentForm = document.querySelector('#compliment-form');

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