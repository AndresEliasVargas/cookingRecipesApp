'use strict';

class RecipesComponent {
    constructor(pMain, pUIManager) {
        this.main = pMain;
        this.uiManager = pUIManager;
        
        this.recipesElement = document.createElement('section');
        this.recipesElement.id = 'recipesComponent';
        this.recipesElement.classList.add('col-3', 'bg-info');

        this.main.prepend(this.recipesElement);
    };

    showRecipes(recipes) {
        this.recipesElement.innerHTML = '';
        recipes.map(recipe => new RecipeComponent(
            recipe,
            this.recipesElement,
            this.uiManager
            )
        );
        
    };
};