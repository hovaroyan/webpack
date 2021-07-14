import {users} from './users';


const print = (people)=> {
  let adults = people.filter(user => user.age > 18);
  console.log(adults);
}

print(users);