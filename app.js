const speciesArray = [];
    
    // Create Dino Constructor

    function Dino(dinoObject){
        this.species = dinoObject.species;
        this.weight = dinoObject.weight;
        this.height = dinoObject.height;
        this.diet = dinoObject.diet;
        this.where = dinoObject.where;
        this.when = dinoObject.when;
        this.fact = dinoObject.fact;
        this.factArray = [this.fact];
    }
    
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
    // Create Human Object
    const human = {}
   
    // Use IIFE to get human data from form
function getAllFormData(){
    console.log("func start");
    document.getElementById('btn')
        .addEventListener('click',function () {
                let inputs = document.getElementById('dino-compare').elements;
                let name = human['name'] = inputs['name'].value;
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
                compareHumansWithDinos(jsonData, human);
            });
    
        
}

getAllFormData();

function isEmpty(str) {
    return (!str || str.length === 0 );
}

   
function compareHumansWithDinos(dino, human){
    console.log("in compare");
    let dinoArray = [];
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

        dinoArray.push(generateDinoArray(dObject));
        
    }
    generateTiles(dinoArray, human);
    
}
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    
    function compareHeight(dSpecies, dHeight, hHeight){
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
        let fact = "";
        if(dDiet === hDiet){
            fact = `${dSpecies} were ${dDiet}, just like you`;
        }else
            fact = `Unlike you, ${dSpecies} were ${dDiet}`;
        return fact;   
    }
    // Generate Tiles for each Dino in Array
    function generateDinoArray(dObject){
        const dinoArray = [];
        let speciesName = dObject.species;
        dinoArray.push(speciesName);
        let randomFact = dObject.factArray[Math.floor(Math.random() * dObject.factArray.length)];
        if(dObject.species === "Pigeon") {
            randomFact = "All birds are living dinosaurs";
        }
        dinoArray.push(randomFact);
        let speciesImage = encodeURI(speciesName.toLowerCase());
        let imageName =  speciesImage + '.png';
        dinoArray.push(imageName);
        return dinoArray;
    }
   function generateTiles(dinoArray, human){
        if(isEmpty(human.name)){
            return;
        }
        let speciesArray = [...dinoArray];
        let humanData = [human.name, '', 'human.png'];
        speciesArray.splice(4, 0, humanData);   // added human at the center of an matrix
        console.log(speciesArray);
        console.log("i m here");
        console.log(speciesArray.length);
        if(speciesArray.length === 9)
            addTilesToDom(speciesArray);
   }
    
   

     // Add tiles to DOM
    function addTilesToDom(speciesArray){
        console.log("generate tiles");
        let tiles = '';
    
        speciesArray.forEach(function traverseThruArray(element){
            let tileClassName = "grid-item";
            let imageName = element[2];
            let imgPath = `images/${imageName}`;
            console.log(imgPath);
            tiles =  `
                    <div class=${tileClassName}>
                        <h3>${element[0]}</h3>
                        <img src=${imgPath}>
                        <p>${element[1]}</p>
                    </div>`
            document.getElementById("grid").innerHTML += tiles;
        });
     
    }

    // Remove form from screen


// On button click, prepare and display infographic
