# TOP-library
The "Library" project from The Odin Project

### The project
The project outlined that we make a site that took user input about books and add it to an array. From there, loop through array and display all the entries on the page. 

biggest MVP of the project was using `type='module'`. It made sense to put the constructor function in its own file. I think at some point, i'll turn the constructor function into a ES6 class. 

I was proud that I figured out how to delete an item based on object id. It was pretty much the same way that one would do it in React. 
```javascript
arr.filter(id => item.id !== id);
```

Something else that was useful was puttin the book functions in to its own folder too. I do want to go back and an efficient way to make `deleteBooks` work. Firefox gave the the crazy recursion error. 

### TODO
1. Convert the book function constructor into an ES6 class. 
2. Turn that huge block of DOM creation in the `forEach` loop into seperate functions. 
3. Make `deleteBook` function work. 