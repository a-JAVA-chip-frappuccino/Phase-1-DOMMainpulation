/* ----------------------------------------------------- 
    VOCABULARY TERMS
----------------------------------------------------- */

/*

    - Document Object Model (DOM): HTML tree that makes up a browser's content
    - node: element of a tree
        - parent node: node containing reference node in hierarchy
        - child node: node contained by reference node in hierarchy

*/

/* ----------------------------------------------------- 
    MANIPULATING EXISTING ELEMENTS
----------------------------------------------------- */

/*

    1. grab existing element from DOM
    2. manipulate element

*/

// const h1 = document.getElementById('page_title')
// const h1 = document.querySelector('h1')
const h1 = document.querySelector('#page_title')

h1.style.color = 'pink'

const p1 = document.querySelector('p')

// p1.innerHTML = "inner HTML"
// p1.textContent = "text content"
// p1.innerText = "inner text"

// p1.textContent = "<h1>what's gonna happen to this code?</h1>"
// p1.innerHTML = "<h1>what's gonna happen to this code?</h1>" // 🚨 XSS ATTACK! 🚨
p1.innerText = "<h1>what's gonna happen to this code?</h1>"

/* ----------------------------------------------------- 
    MANIPULATING NEW ELEMENTS
----------------------------------------------------- */

/*

    1. grab existing element from DOM
    2. create new element
    3. manipulate new element
    4. attach new element to existing element (to attach to DOM)

*/

const ol = document.querySelector('ol')

// const li = document.createElement('li')

// li.textContent = "This is the first list item!"

/*
let i = 0

while (i < 5) {
    // do stuff
    
    i++
}
*/

const letters = ['a', 'b', 'c', 'd', 'e']

/*
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li')

    li.textContent = letters[i]

    ol.appendChild(li)
}
*/

letters.forEach((letter) => {
    console.log(letter)

    const li = document.createElement('li')

    li.textContent = letter

    ol.append(li)
})

console.log(ol)

/* ----------------------------------------------------- 
    REMOVING ELEMENTS
----------------------------------------------------- */

const p_last = document.querySelector('.removable')

p_last.remove()