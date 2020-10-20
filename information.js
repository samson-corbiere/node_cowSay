let name = 'Samson';
let campus = 'Toulouse';
var cowsay = require("cowsay");

const myInfo = () => {
    console.log(cowsay.say({
		text : `Hello I'm ${name} from ${campus} campus!`,
		e : "oO",
		T : "U "
	}));
}

module.exports = myInfo; 
