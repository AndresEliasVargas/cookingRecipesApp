'use strict';

class RecipeComponent{
    constructor(pModel, pParent, pUIManager){
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        this.div = document.createElement('div');
        this.div.id = 'recipeComponent';

        this.title = document.createElement('h6');
        this.title.classList.add('text-light', 'my-4', 'text-center', 'pointer');
        this.title.innerHTML = this.model.name;
        this.title.onclick = this.onRecipeClick.bind(this);

        this.parent.appendChild(this.div);
        this.div.append(
            this.title
        );
    };

    onRecipeClick(){
        window.scrollTo(0, 0); //eliminar si se corrige el error del css
        
    };
};