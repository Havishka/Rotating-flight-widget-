const tableBody = document.getElementById('table-body');

//using let for a reason that comes up later
let flights = [
    {
        time: "09:11",
        destination: "OMAN",
        flight: "UL501",
        gate: "A 20",
        remarks: "ON TIME"

    },

    {
        time: "11:11",
        destination: "Kuwait",
        flight: "UL511",
        gate: "B 20",
        remarks: "DELAYED"

    },

    {
        time: "12:41",
        destination: "LONDON",
        flight: "UL401",
        gate: "C 20",
        remarks: "CANCELED"

    },

    {
        time: "14:20",
        destination: "SAUDI",
        flight: "UL801",
        gate: "A 26",
        remarks: "ON TIME"

    }
]

// Adding random numbers and changing objects values optional just for fun do this last after populate table
const destinations = ["SAUDI", "LONDON", "KUWAIT", "OMAN"]
const remarks =["ON TIME", "CANCELED", "DELAYED"]
let hours = 14

//Show flight in table
function populateTable(){
    //taking flights detalis as one flight
    for (const flight of flights) {
        const tableRow = document.createElement("tr");

        //working with objects so we use in 
        for (const flightDetail in flight ) { 
           const tableCell=  document.createElement("td")
           const word = Array.from(flight[flightDetail])// getting words inside an array to splitting the word
          // for loop for splitting the word
            for(const [index ,letter] of word.entries()){// getting the index of words
              const letterElement =   document.createElement('div')
                //loop for rotate latters
              setTimeout(() =>{

                letterElement.classList.add('flip')//flip the letters class for each letter
                letterElement.textContent = letter
                tableCell.append(letterElement)
              },
             100* index)
              
            }
            tableRow.append(tableCell); // append can add multiple elements 
        }
       //append tr to our table body
        tableBody.appendChild(tableRow) //append child can add only one element to the last
    }
}
populateTable()

//let studnets do this
function genarateRandomLetter(){
    const alpahbat = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    return alpahbat.charAt(Math.floor(Math.random() * alpahbat.length));
}

function genarateRandomNumber(maxNumber){
    const numbers = "0123456789";
    if(maxNumber){
        const newNumbers = numbers.slice(0, maxNumber)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));//we made a new array
    } else {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
}

function genarateTime (){
    //Display hour variable
    let displayhour = hours;
    // check the hour is less than 24 and increment it 
    if (hours < 24){
        hours ++
    }
    // check the hour is greater than 24 and reset it 
    if (hours >= 24){
        hours = 1;
        displayhour = hours
    }

    if (hours < 10){
        
        displayhour = "0" + hours
    }
    return displayhour + ":" +  genarateRandomNumber(5) +  genarateRandomNumber()
}
//fun function
function shuffleUp() {
    flights.shift()//removes the first elements from the arrays
    //Append new elemnts to the array
    flights.push({
        time: genarateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)], // Pass random numbers based on the array length multiplying
        //it give a random number from 0 to array length
        //math.floor round the number assume you get 8.5 then it will round it to 9 
        flight: genarateRandomLetter() + genarateRandomLetter() + " " +  genarateRandomNumber() +  genarateRandomNumber(),
        gate: genarateRandomLetter() + " " + genarateRandomNumber() + genarateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    //to run above code we need to clear the table first
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 5000)