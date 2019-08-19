'use strict';

class InformationComponent{
    constructor(pModel, pParent, pUIManager){
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        this.container = document.createElement('div');

        this.image = document.createElement('img');
        this.image.src = this.model.image;
        this.image.alt = 'Recipe ' + this.model.name + ' image';
        this.image.classList.add('mx-auto', 'my-4', 'd-block', 'img-fluid');
        this.image.setAttribute('width', '500px');

        this.name = document.createElement('p');
        this.name.innerHTML = '<b>' + this.model.name + '</b>';

        this.description = document.createElement('p');
        this.description.innerHTML = this.model.description;

        this.notes = document.createElement('p');
        this.notes.innerHTML = '<b>Notes: </b>' + this.model.notes;

        this.ingredientsTitle = document.createElement('h6');
        this.ingredientsTitle.innerHTML = 'Ingredients List';

        this.ingredientsContainer = document.createElement('ul');

        let ingredients = this.model.ingredients.map(ingredient => {
            let name = ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1).toLowerCase();
            let amount = ingredient.amount;
            let unit = ingredient.unit;
            let preparation = ingredient.preparation;
            let li = document.createElement('li');
            let ingString = name + ', ' + amount + unit + ' ' + preparation;

            //HACER LA VALIDACION DE LOS CAMPOS NULL PARA QUE NO APAREZCAN
            
            this.ingredientsContainer.append(li);
            li.append(ingString);
        });

        console.log(this.model.step);

        this.parent.appendChild(this.container);
        this.container.append(
            this.image,
            this.name,
            this.description,
            this.ingredientsTitle,
            this.ingredientsContainer,
            this.notes
        );

        this.ingredientsContainer.append(
            this.ingredients
        );
    }
};