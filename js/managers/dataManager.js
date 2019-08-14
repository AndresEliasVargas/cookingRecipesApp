'use strict';

class DataManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.recipes = [];
        this.getData();
    }

    getData() {
        const request = this.getRecipes();
    };

    getRecipes() {
        let request = new XMLHttpRequest();
        request.open('GET', '../../data/data.json', true);
        request.onreadystatechange = this.getRecipesCallback.bind(this);
        request.send();
    };

    getRecipesCallback(e) {
        let request = e.target;
        let notes = null;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let dataRecipes = JSON.parse(request.response);
                console.log(dataRecipes.recipe);

                dataRecipes.recipe.map(dataRecipe => {
                    console.log(dataRecipe);

                    let ingredients = new Ingredient(
                        dataRecipe.ingredient.amount,
                        dataRecipe.ingredient.unit,
                        dataRecipe.ingredient.name
                    );

                    // let step = new Step();

                    // let tag = new Tag();

                    if(dataRecipe.notes === undefined || dataRecipe.notes === '' || dataRecipe.notes === null){
                        notes;
                    } else {
                        notes = dataRecipe.notes;
                    };

                    let newRecipe = new Recipe(
                        dataRecipe.id,
                        dataRecipe.name,
                        dataRecipe.description,
                        dataRecipe.forked,
                        dataRecipe.image,
                        notes,
                        ingredients
                    );

                    this.recipes.push(newRecipe);
                });
            };
            console.log(this.recipes);
            
        };

    };

};