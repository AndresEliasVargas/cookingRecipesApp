'use strict';

class InformationComponent{
    constructor(pModel, pParent, pUIManager){
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        console.log(this.model.image);
        console.log(this.model.name);
        console.log(this.model.description);
        console.log(this.model.ingredients);
        console.log(this.model.step);
        console.log(this.model.notes);
    }
};