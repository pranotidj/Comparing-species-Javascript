    // Create Dino Constructor

    function Dino(dinoObject){
        this.species = dinoObject.species;
        this.weight = dinoObject.weight;
        this.height = dinoObject.height;
        this.diet = dinoObject.diet;
        this.where = dinoObject.where;
        this.when = dinoObject.when;
        this.fact = dinoObject.fact;
        this.factArray = [];
    }
    //console.log(Dino);
    // Create Dino Objects

    const jsonData = [];
    fetch('./dino.json')
            .then(data => data.json())
            .then(items => {
                let dinos = items.Dinos;
                getValues(dinos);
             });
    function getValues(dinos) {
        dinos.map((dino) => jsonData.push(dino));
    }
    console.log(jsonData);

    // Create Human Object
    const human = {}
   
    // Use IIFE to get human data from form
function getAllFormData(){
    console.log("func start");
    document.getElementById('btn')
        .addEventListener('click',function () {
                let inputs = document.getElementById('dino-compare').elements;
                human['name'] = inputs['name'].value;
                let enteredFeet = parseInt(inputs['feet'].value);
                let enteredInches = parseInt(inputs['inches'].value);
                human['height'] = (enteredFeet * 12) + enteredInches;
                human['weight'] = inputs['weight'].value;
                let s = document.getElementById('diet');
                let enteredDiet = s.options[s.selectedIndex].value;
                human['diet'] = enteredDiet;
                if(Object.keys(human).length === 0){
                    return;
                }
                console.log(human);
                compareHumansWithDinos(jsonData, human);
            });
    
        
}

getAllFormData();

function isEmpty(str) {
    return (!str || str.length === 0 );
}

   
function compareHumansWithDinos(dino, human){
    console.log("in compare");
    for(i = 0; i < jsonData.length; i++){
        dObject = new Dino(jsonData[i]);
        dSpecies = dObject.species;
        dHeight = dObject.height;
        dWeight = dObject.weight;
        dDiet = dObject.diet;
        dFacts = dObject.factArray;
        
        let fact1 = compareHeight(dSpecies, dHeight, human.height);
        let fact2 = compareWeight(dSpecies, dWeight, human.weight);
        let fact3 = compareDiet(dSpecies, dDiet, human.diet);
        if(!isEmpty(fact1)){
            dFacts.push(fact1);     //adding facts to Dino objects
        }
        if(!isEmpty(fact2)){
            dFacts.push(fact2);     //adding facts to Dino objects
        }
        if(!isEmpty(fact3)){
            dFacts.push(fact3);     //adding facts to Dino objects
        }

        const iterator = dFacts.values();

        for (const value of iterator) {
        console.log(value);
        }
    }
    
}
    

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    
    function compareHeight(dSpecies, dHeight, hHeight){
        console.log(dHeight);
        let fact = "";
        if(dHeight < hHeight){
            let diff = Math.abs(hHeight - dHeight);
            fact = `Wow! You are taller than ${dSpecies} by ${diff}`;
        }else
            fact = `${dSpecies} is taller than you`;
         return fact;   
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareWeight(dSpecies, dWeight, hWeight){
        console.log(dWeight);
        let fact = "";
        if(dWeight < hWeight){
            let diff = Math.abs(hWeight - dWeight);
            fact = `Surprisingly, you are heavier than ${dSpecies} by ${diff}`;
        }else
            fact = `No doubt about this! They had to be heavier to ruled the earth`;
        return fact;   
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareDiet(dSpecies, dDiet, hDiet){
        console.log(dDiet);
        let fact = "";
        if(dDiet === hDiet){
            fact = `${dSpecies} were ${dDiet}, just like you`;
        }else
            fact = `Unlike you, ${dSpecies} were ${dDiet}`;
        return fact;   
    }

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
