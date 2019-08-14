'use strict';

class MainComponent{
    constructor(pUIManager){
        this.uiManager = pUIManager;

        this.main = document.createElement('main');
        this.main.id = 'mainComponent';
        this.main.classList.add('row');

        this.left = document.createElement('section');
        this.left.id = 'recipeSection';
        this.left.classList.add('col-3', 'bg-info');

        this.right = document.createElement('section');
        this.right.id = 'informationSection';
        this.right.classList.add('col-9', 'bg-light');

        this.main.append(
            this.left,
            this.right
        );

        this.recipesComponent = new RecipesComponent(this);
    };

    showMain(pBody, pUIManager){
        let body = pBody.childNodes[0];
        body.appendChild(this.main);

        this.recipesComponent.showRecipes(this.left, pUIManager);
    };
};