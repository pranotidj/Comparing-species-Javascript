
    // Create Dino Constructor
      function Dino(dinoObject){
        this.species = dinoObject.species;
        this.weight = dinoObject.weight;
        this.height = dinoObject.height;
        this.diet = dinoObject.diet;
        this.where = dinoObject.where;
        this.when = dinoObject.when;
        this.fact = dinoObject.fact;
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
    }    

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
