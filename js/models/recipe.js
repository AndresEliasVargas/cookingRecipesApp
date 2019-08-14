'use strict';

class Recipe{
    constructor(pId, pName, pDescription, pForked, pImage, pNotes, pIngredients, pStep){
        this.id = pId;
        this.name = pName;
        this.description = pDescription;
        this.forked = pForked;
        this.image = pImage;
        this.notes = pNotes;
        this.ingredients = pIngredients;
        this.step = pStep;
    }
};