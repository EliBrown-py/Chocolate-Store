let chocs = [
    {
      chocName: "Plain Milk",
      description: "Smooth milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "assets/plain_milk.jpg",
    },
    {
      chocName: "Plain Dark",
      description: "Dark chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "assets/plain_dark.jpg",
    },
    {
      chocName: "Bailey's Cup",
      description: "Dark chocolate with Bailey's Cream Filling",
      calories: 100,
      ingredients: "Cocoa butter, Milk, Cream, baileys",
      img: "assets/baileys_cup.jpg",
    },
    {
      chocName: "Cappuccino Cup",
      description: "Dark chocolatewith Cappuccino style cream filling",
      calories: 120,
      ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
      img: "assets/cappuccino_cup.jpg",
    },
    {
      chocName: "Nutter Butter",
      description: "Dark chocolate with peanut butter",
      calories: 190,
      ingredients: "Cocoa butter, Milk, Cream, peanut butter",
      img: "assets/nutter_butter.jpg",
    },
    {
      chocName: "Orange Fondant",
      description: "Dark chocolate folded with orange fondant",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
      img: "assets/orange_fondant.jpg",
    },
    {
      chocName: "Pistachio Cup",
      description: "Dark chocolate with nuggets of pistachio",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
      img: "assets/pistachio_diamond.jpg",
    },
    {
      chocName: "Rum Barrel",
      description: "Dark chocolate with a decadent rum filling",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
      img: "assets/rum_barrel.jpg",
    },
    {
      chocName: "Toffee Crunch",
      description: "Dark chocolate with brittle toffee candy",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, toffee",
      img: "assets/toffee_crunch.jpg",
    },
    {
      chocName: "Plain Supreme",
      description: "Dark chocolate with slivers of milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "assets/plain_hybrid.jpg",
    },
  ];
  const chocolatecontent = () => {
    let theWrapper = document.createElement("div");
    console.log("Wrapper: ", theWrapper); 
    chocs.forEach((choc) => {
        console.log(choc);
        let chocDiv = document.createElement("div");
        chocDiv.classList.add("box");
        let chocHeader = document.createElement("h2");
        chocHeader.textContent = choc.chocName;
        let ChocImg = document.createElement("img");
        ChocImg.src = choc.img;
        let ChocDescription = document.createElement("p");
        ChocDescription.textContent = choc.description;
        let ChocCalories = document.createElement("p");
        ChocCalories.textContent = "Calories: " + choc.calories;
        let ChocIngredients = document.createElement("p");
        ChocIngredients.textContent = choc.ingredients;
        chocDiv.append(chocHeader);
        chocDiv.append(ChocImg);
        chocDiv.append(ChocDescription);
        chocDiv.append(ChocCalories);
        chocDiv.append(ChocIngredients);
        ChocDescription.classList.add("chocolateDescription");
        ChocCalories.classList.add("chocolateCalories");
        ChocIngredients.classList.add("chocolateIngredients");

        theWrapper.append(chocDiv);
    });

    $("p:last").after(theWrapper);
    theWrapper.classList.add("chocolateWrapper")
};

let showDetails = true;

const toggleDetails = () =>{
    showDetails = !showDetails;
    if(showDetails){
        $("p.chocolateCalories, p.chocolateIngredients, p.chocolateDescription").show();
    }else{
        $("p.chocolateCalories, p.chocolateIngredients, p.chocolateDescription").hide();
    }
};

const highlightRandomChocolate = () =>{
    $(".chocolateWrapper.box").css("background-color", "#FFFDD0");
    let randomIndex = Math.floor(Math.random() * 9);
    console.log(randomIndex);
    $(".chocolateWrapper .box:eq(" + randomIndex + ")").css(
        "background-color",
        "#FFF985"
    );

    alert("Your free sample code is: "  + (randomIndex + 1)+" give this number to the cashier" );
};

$(document).ready(chocolatecontent);