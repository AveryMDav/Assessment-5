const fortune = require('./fortuneDB.json');
const compliments = require('./complimentsDB.json');


module.exports = {
getCompliment: (req, res) => {
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  return res.status(200).send(randomCompliment); 
    },

addCompliment: (req, res) => {
    const { compliment } = req.body;
    compliments.push(compliment);
    console.log(compliments)
    return res.status(200).send('Thank you for your support!')
},

getAllCompliments: (req,res) => {
    res.status(200).send(compliments)
},

getFortune: (req,res) => {
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[randomIndex];
    return res.status(200).send(randomFortune);
    },
}