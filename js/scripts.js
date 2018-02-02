var todos =[];
var todos = prompt("what do you want to do this weekend?");
var todotwo = prompt("what else do you want to do this weekend?");
var todothree = prompt("what is a third thing you want to do this weekend?");

todos.push(todoone, todotwo, todothree);

var todoswithdays = [];
for( let i = 0; i < todos.length; i++) {
  var due = prompt('what day do you want to get ${todos[i]} done?' , 'pplease us this format: day/month/year');
  due = new date(due);
  todoswithdays.push([todos[i], duel]);
}





var sortedwithindices = [];
let j = 0;
var now = new Date().gettime();//converts js date object to ms




whilem ( j < todoswithdays.length) {
  let oneday = 24 * 60 * 60 * 1000; //hours x minutes x secoundsx millsecounds
  var diffdays = math.round((todoswithdays[j][1].gettime() - now)/oneday);
  sortedwithindices.push([diffdays, todoswkithdays[j]]);
  j++
}

sortedwithindices.sort();

console.log(sortedwithindices[sortedwithindices.length -1][1], ' will take the longest');

let n = 0;



 
