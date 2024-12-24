// 1. For the Theme control

// select the select element on the header
const select = document.querySelector("#theme");

// Grab the the html document element

const html = document.querySelector("html");
const main = document.querySelector("main");
 // This is the input for the number
 const promptInput = document.querySelector("#prompt");
   
 // Generate button & Reset button

const genBtn = document.querySelector("#generate");
const resetBtn = document.querySelector("#reset");

 //Display result section and container
const container = document.querySelector("#container");
const resultContainer = document.querySelector("#resultContainer");
const listContainer = document.querySelector("#list");

html.addEventListener("load", () => {
    resultContainer.style.borderLeftColor = "white";
    container.style.borderRightColor = "white";
});
 
 
 // Add event listener for the change in the select

select.addEventListener("change", () => {
    const choice = select.value

    if (choice === "" || choice === "white") {
        changeTheme("white", "black");
        resultContainer.style.borderLeftColor = "gray";
        container.style.borderRightColor = "gray";
    } else if(choice === "black"){
        changeTheme("black","white");
        resultContainer.style.borderLeftColor = "white";
        container.style.borderRightColor = "white";
    } else if(choice === "purple"){
        changeTheme("rgb(68, 6, 68)","white");
        resultContainer.style.borderLeftColor = "white";
        container.style.borderRightColor = "white";
    };
});

// Create a function to change the page theme
//this fucntion takes the background color and the text color as parameters

function changeTheme (bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
};

// 2. For the Fizzbuzz Game display

    // add event listener on the generate button

    genBtn.addEventListener("click", () => {
    // Declare a variable to carry the result
        let result = parseInt(promptInput.value);

        for (let i = 1; i <= result; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                const list = document.createElement("li");
                list.textContent = "Fizz Buzz";
                list.classList = "list";
                listContainer.appendChild(list);
                listContainer.classList = "listContainer";

                if (list.textContent === "Buzz") {
                    list.style.backgroundColor = "red";
                }else if (list.textContent === "Fizz") {
                    list.style.backgroundColor = "green";
                }else if (list.textContent === "Fizz Buzz") {
                    list.style.backgroundColor = "orange";
                }
                
            }else if (i % 3 === 0){
                const list = document.createElement("li");
                list.textContent = "Fizz";
                list.classList = "list";
                listContainer.appendChild(list);
                listContainer.classList = "listContainer";
                // background color of each list
                if (list.textContent === "Buzz") {
                    list.style.backgroundColor = "red";
                }else if (list.textContent === "Fizz") {
                    list.style.backgroundColor = "green";
                }else if (list.textContent === "Fizz Buzz") {
                    list.style.backgroundColor = "orange";
                }
            }else if (i % 5 === 0) {
                const list = document.createElement("li");
                list.textContent = "Buzz";
                list.classList = "list";
                listContainer.appendChild(list);
                // background color of each list
                if (list.textContent === "Buzz") {
                    list.style.backgroundColor = "red";
                }else if (list.textContent === "Fizz") {
                    list.style.backgroundColor = "green";
                }else if (list.textContent === "Fizz Buzz") {
                    list.style.backgroundColor = "orange";
                }
            }else {
                const list = document.createElement("li");
                list.textContent = i;
                list.classList = "list";
                listContainer.appendChild(list);
                listContainer.appendChild(list);
                list.style.backgroundColor = "#6A994E";
            }
            
        }
         
    });

    // Reset button

    resetBtn.addEventListener("click", () => {
        window.location.reload()
    });


   
