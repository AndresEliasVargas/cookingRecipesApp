'use strict';

class MainComponent {
    constructor(pAppManager) {
        this.appManager = pAppManager;

        this.main = document.createElement('main');
        this.main.id = 'mainComponent';
        this.main.classList.add('row');

        this.recipesComponent = new RecipesComponent(this.main, this);
        this.informationsComponent = new InformationsComponent(this.main, this);
    };

    showMain(pBody, pAppManager) {
        let body = pBody.childNodes[0];
        body.appendChild(this.main);

        let recipesData = pAppManager.appManager.dataManager.recipes;
        this.recipesComponent.showRecipes(recipesData, pAppManager);
    };

    showRecipeDetails(recipes){
        this.informationsComponent.showInformation(recipes);
    }
};