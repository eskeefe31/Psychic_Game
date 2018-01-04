var validLetters = ["a", "b", "c"]
var LettersGuessed = []


var keyPressed = event.key.toLowerCase ();
    if (validLetters.indexOf(keyPressed) > -1) {

        if (LettersGuessed.indexOf(keyPressed) > -1) {
                // alert you already guessed that letter, try again      
        } else {
            LettersGuessed.push(keyPressed);
        }
    } else if (event.ket.toLowerCase() === "escape") {
        //reset 
    } else {
        alert ("you did not press a valid key");
    }


    document.getElementById("Id name").innerHTML = "Hello"

    var myFunc = function(event) { document.getElementById("Id name");
    Element.innerHTML = "Hello" + event.key + "Bye";

    //the right way is the way below with addEventListener

    document.addEventListener("keyup", function(event) {
        var element = document.getElementById("Id Name");
        element.innerHTML = "h1" + event.key + "h2";
    })

    var car = {
        make: "chevrolet",
        getMake: function() {
            
            return this.make;
        }
    }
    car.getMake(); //return chevrolet 


    var car = { 
        make: "chevrolet",
        mileage: 5000, 
        getMake: function() {
            var doSomethingElse = function() {
                this.mileage += 120; //mileage doesn't exist 
            }
            doSomethingElse ();
            
            return this.make;
        }
    }

    var car = { 
        make: "chevrolet",
        mileage: 5000, 
        getMake: function() {
            var that = this;
            var doSomethingElse = function() {
                this.mileage += 120; 
            }
            doSomethingElse ();
            
            return this.make;
        }
    }
    //binding is key but we'll learn that later 
    
    }
