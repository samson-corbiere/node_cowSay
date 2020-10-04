let name = 'Samson';
let campus = 'Toulouse';

const myInfo = () => {
    console.log(`Hello I'm ${name} from ${campus} campus!`);
}

module.exports = myInfo;

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello I'm ${name} from ${campus} campus!`,
	e : "oO",
	T : "U "
}));