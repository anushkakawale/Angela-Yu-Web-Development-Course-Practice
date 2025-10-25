// var generateName = require('sillyname'); //commonJS
import generateName from "sillyname";    //modules
var sillyName = generateName();
console.log(sillyName);

import { randomSuperhero } from 'superheroes';

console.log("I am "+randomSuperhero());
