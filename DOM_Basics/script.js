const container=document.querySelector('.container')
// console.log(container);
// console.log(container.children);
// console.log(container.children[1]);

// container.children[1].style.color="red"

// console.log(container.lastElementChild);
// console.log(container.firstElementChild);

const weekDay=document.querySelector('.day')

console.log(weekDay);
console.log(weekDay.parentElement);
console.log(weekDay.nextElementSibling);
console.log(container.childNodes);

// const heading=document.createElement('h1')
// heading.innerText="Week Days Routine"
const heading=document.querySelector('.container')
const main=document.createElement('h1')
main.className="title"
main.id="ttl"

const addtext=document.createTextNode("Week Day Routine")
// console.log(container.children);
heading.appendChild(main).appendChild(addtext);







