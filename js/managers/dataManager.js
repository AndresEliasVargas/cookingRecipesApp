'use strict';

class DataManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.recipes = [];
        this.getRecipes();
    }

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
                //console.log(dataRecipes);

                //recipe json
                dataRecipes.recipe.map(dataRecipe => {
                    //console.log(dataRecipe);

                    let ingredients = dataRecipe.ingredient.map(ingredient => {
                        // console.log(ingredient.name);

                        let name = null;
                        let amount = null;
                        let unit = null;
                        let preparation = null;


                        if (
                            ingredient.name != undefined &&
                            ingredient.name != '' &&
                            ingredient.name != null
                        ) {
                            name = ingredient.name;
                        };

                        if (
                            ingredient.amount != undefined &&
                            ingredient.amount != '' &&
                            ingredient.amount != null
                        ) {
                            amount = ingredient.amount;
                        };

                        if (
                            ingredient.unit != undefined &&
                            ingredient.unit != '' &&
                            ingredient.unit != null
                        ) {
                            unit = ingredient.unit;
                        };

                        if (
                            ingredient.preparation != undefined &&
                            ingredient.preparation != '' &&
                            ingredient.preparation != null
                        ) {
                            preparation = ingredient.preparation;
                        };

                        return new Ingredient(
                            name,
                            amount,
                            unit,
                            preparation
                        );
                    });

                    let steps = dataRecipe.step.map(step => {
                        //console.log(step.description);
                        return new Step(step.description);
                    });

                    if (
                        dataRecipe.notes != undefined &&
                        dataRecipe.notes != '' &&
                        dataRecipe.notes != null
                    ) {
                        notes = dataRecipe.notes;
                    };

                    let newRecipe = new Recipe(
                        dataRecipe.id,
                        dataRecipe.name,
                        dataRecipe.description,
                        dataRecipe.forked,
                        dataRecipe.image,
                        notes,
                        ingredients,
                        steps
                    );

                    this.recipes.push(newRecipe);
                });
            };

            this.appManager.completeDowload();
            // console.log(this.recipes);
        };

    };

};