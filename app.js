const flashcards = {
    "Variables & Data Types": [
        { front: "What are the three keywords to declare variables in JavaScript?", back: "var, let, const" },
        { front: "What are the primitive data types in JavaScript?", back: "String, Number, Boolean, Undefined, Null, BigInt, Symbol" },
        { front: "What is the difference between `let` and `const`?", back: "`let` can be reassigned, `const` cannot" }
    ],
    "Primitive Types & Conditionals": [
        { front: "What is a conditional statement?", back: "A statement that checks a condition and executes code based on it." },
        { front: "What are the main types of conditional statements?", back: "if, else if, else, switch" },
        { front: "What are the comparison operators?", back: "==, ===, !=, !==, >, <, >=, <=" }
    ],
    "Input Element & Math Functions": [
        { front: "How do you get the value of an input element?", back: "Using .value property of the element" },
        { front: "What are some common math functions?", back: "Math.round(), Math.floor(), Math.ceil(), Math.random()" },
        { front: "How to create input element?", back: "By creating it dynamically with js or add it in the html file using <input>" }
    ],
    "Arrays & Objects": [
        { front: "What is an array?", back: "An ordered list of values" },
        { front: "What is an object?", back: "A collection of key-value pairs" },
        { front: "How do you access elements in an array?", back: "By their index (starting from 0)" }
    ],
    "Arrays & More DOM Manipulations": [
        { front: "How can you add an element to the end of an array?", back: "Using the `push()` method" },
        { front: "How to get element by id", back: "document.getElementById(id)" },
        { front: "How to change the inner text of an element", back: "element.innerText = 'new text'" }
    ],
    "Objects": [
        { front: "How do you access object properties?", back: "Using dot notation (object.property) or bracket notation (object['property'])" },
        { front: "How to add property in object?", back: "object.propertyName = value" },
        { front: "How to delete property from object", back: "delete object.propertyName" }
    ],
    "Functions & Callbacks": [
        { front: "What is a function?", back: "A block of reusable code" },
        { front: "What is a callback function?", back: "A function passed as an argument to another function" },
        { front: "How do you define a function?", back: "Using the `function` keyword or an arrow function (`=>`)" }
    ],
    "Callbacks & Schedulers": [
        { front: "What is the setTimeout() function used for?", back: "To delay the execution of a function by a specified time" },
        { front: "What is the setInterval() function used for?", back: "To execute a function repeatedly at a specified time interval" },
        { front: "How to stop setInterval?", back: "clearInterval() with the id returned by setInterval" }
    ],
    "Event Listeners and More Events": [
        { front: "What is an event listener?", back: "A function that listens for specific events on elements" },
        { front: "How do you add an event listener?", back: "Using `element.addEventListener(event, callback)`" },
        { front: "What are some common events?", back: "click, mouseover, mouseout, keydown, keyup, submit" }
    ],
    "Asynchronous JavaScript & HTTP Requests": [
        { front: "What does asynchronous mean?", back: "Code that doesn't block the main thread" },
        { front: "What is a promise?", back: "An object representing the eventual completion or failure of an asynchronous operation" },
        { front: "What is the async/await syntax?", back: "A way to write asynchronous code that looks and behaves a bit more like synchronous code" }
    ],
    "Hypertext Transfer Protocol (HTTP)": [
        { front: "What is HTTP?", back: "Hypertext Transfer Protocol - the foundation of data communication on the web" },
        { front: "What are some HTTP methods?", back: "GET, POST, PUT, DELETE" },
        { front: "What is an HTTP status code?", back: "A code that indicates the status of an HTTP request (e.g., 200 OK, 404 Not Found)" }
    ],
    "HTTP Requests using JS": [
        { front: "How to make HTTP request using JS?", back: "Using the Fetch API or XMLHttpRequest object" },
        { front: "How to create post request?", back: "Using POST method and pass the data in body with the request" },
        { front: "What to do with the response from the server?", back: "Handling the response with .then and convert it to json using .json()" }
    ],
    "Fetch API & Callbacks": [
        { front: "What is the Fetch API?", back: "A modern interface for making HTTP requests" },
        { front: "What does `fetch()` return?", back: "A Promise" },
        { front: "How to pass data using fetch api?", back: "By passing an object in the second argument with body and methods properties" }
    ],
    "DOM Manipulation": [
        { front: "How to add an element dynamically?", back: "Using document.createElement(), element.appendChild()" },
        { front: "How to change the attribute of an element?", back: "Using element.setAttribute('attributeName', 'value')" },
        { front: "How to get the parent of an element", back: "Using parentNode property" }
    ],
    "Forms & Input Handling": [
        { front: "What is a form used for?", back: "To collect user input and submit data to a server." },
        { front: "What is the `action` attribute in a form?", back: "Specifies where to send the form-data when a form is submitted" },
        { front: "What is the `method` attribute in a form?", back: "Specifies the HTTP method (GET or POST) to use when submitting the form" },
        { front: "How do you prevent a form from submitting normally?", back: "By using `event.preventDefault()` in the form's submit event handler." },
        { front: "How do you get the form data when a form is submitted?", back: "By accessing the input elements' values within the form's submit event handler using .value property" },
        { front: "What are the different input types in forms?", back: "text, password, email, radio, checkbox, submit, button etc" }
    ]
};



// Selection Menu
let selectionElement = document.getElementById("selection-menu");
let flashQn=document.getElementById("flash-qn");
let flashAns=document.getElementById("flash-ans")
let nextBtn=document.getElementById("next-btn");
let practiceBtn=document.getElementById("practice-btn");
let exitBtn=document.getElementById("exit-btn");
let startBtn=document.getElementById("start-btn");
let flipBtn=document.getElementById("flip-btn");
let gotBtn=document.getElementById("got-btn");







for (topic of Object.keys(flashcards)){
    let optionElement = document.createElement("option");
    optionElement.textContent = topic;
    optionElement.value = topic;
    selectionElement.appendChild(optionElement);
}




selectionElement.addEventListener("change",function(){
    userSelection=selectionElement.value;
    topicContent=flashcards[userSelection]
    console.log(userSelection);
    // console.log(topicContent);

    const totalQns=topicContent.length;
        console.log(totalQns);
        
    console.log();
    let counter=0;    

    
    //practice flashcards
    practiceBtn.addEventListener("click",function(){
        flashQn.textContent=topicContent[0].front;
        flashAns.textContent=topicContent[0].back;

        nextBtn.classList.remove("d-none");
        exitBtn.classList.remove("d-none");





        nextBtn.addEventListener("click",function(){
            counter+=1;
            if (counter<totalQns){
                flashQn.textContent=topicContent[counter].front;
                flashAns.textContent=topicContent[counter].back;
                console.log(topicContent[counter].front);
            }
            
        })
    
        exitBtn.addEventListener("click",function(){
            flashQn.textContent="";
            flashAns.textContent="";
            counter=0;
        })
        
        
    })

    




    //start test flashcards
    startBtn.addEventListener("click",function(){
        
        flashQn.textContent=topicContent[0].front;
        flashAns.classList.add("d-none");
        flashAns.textContent=topicContent[0].back;


        
        flipBtn.classList.remove("d-none");
        gotBtn.classList.remove("d-none");



        flipBtn.addEventListener("click",function(){
            flashAns.classList.remove("d-none");
        })
    
        nextBtn.addEventListener("click",function(){
            counter+=1;
            if (counter<totalQns){
                flashQn.classList.remove("d-none");
                flashQn.textContent=topicContent[counter].front;
                flashAns.classList.add("d-none");
                flashAns.textContent=topicContent[counter].back;
            }
            
        })

        
    
        let marks=0;
    
        gotBtn.addEventListener("click", function () {
            marks += 1;
            console.log(marks);
            counter += 1;
            console.log(counter);
            if (counter < totalQns) {
              flashQn.textContent = topicContent[counter].front;
              flashAns.classList.add("d-none");
              flashAns.textContent = topicContent[counter].back;
            } else if (counter === totalQns) {
              document.getElementById("flash-qn-card").classList.add("d-none");
              document.getElementById("flash-ans-card").classList.add("d-none");
              let marksParagraph = document.createElement("p");
              marksParagraph.textContent = "Your marks are: " + marks;
              document.querySelector(".card-body").appendChild(marksParagraph);

              flipBtn.classList.add("d-none");
              gotBtn.classList.add("d-none");
            }
          })
        
    
        
        
    })


    

})