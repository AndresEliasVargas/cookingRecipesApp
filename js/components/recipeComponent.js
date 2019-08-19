'use strict';

class RecipeComponent {
    constructor(pModel, pParent, pUIManager) {
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager; //main componet

        this.div = document.createElement('div');
        this.div.id = 'recipeComponent';
        this.div.classList.add(
            'row',
            'pointer',
            'text-white'
        );
        this.div.onclick = this.onRecipeClick.bind(this);

        this.icon = document.createElement('i');
        this.icon.classList.add(
            'fa',
            'fa-compact-disc',
            'col-12',
            'text-center',
            'mt-4',
            'pt-1'
        );

        this.title = document.createElement('h6');
        this.title.classList.add(
            'text-light',
            'my-4',
            'text-center',
            'col-12'
        );
        this.title.innerHTML = this.model.name;

        this.parent.appendChild(this.div);
        this.div.append(this.icon, this.title);
    };

    onRecipeClick() {
        window.scrollTo(0, 0); //eliminar si se corrige el error del css
        this.uiManager.showRecipeDetails(this.model);
    };
};