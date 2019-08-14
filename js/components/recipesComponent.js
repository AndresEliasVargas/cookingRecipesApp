'use strict';

class RecipesComponent {
    constructor(pUIManager) {
        this.uiManager = pUIManager;

        this.leftDiv = document.createElement('div');





        this.recipe = document.createElement('div');



        this.rightDiv = document.createElement('div');



        
    };

    showRecipes(pSection, pUIManager) {
        pSection.append(
            this.leftDiv,
            this.recipe,
            this.rightDiv
        );
    };
};