'use strict';

class DataManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.recipes = [];
        this.getData();
    }

    getData() {
        const request = this.getRecipes();
    };

    getRecipes() {
        let request = new XMLHttpRequest();
        request.open('GET', '../../data/data.json', true);
        request.onreadystatechange = this.getRecipesCallback.bind(this);
        request.send();
    };

    getRecipesCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let dataRecipes = JSON.parse(request.response);
                console.log(dataRecipes);

                
            };
        };
    };
};