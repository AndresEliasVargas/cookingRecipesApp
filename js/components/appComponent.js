'use strict';

class AppComponent{
    constructor(pUIManager){
        this.uiManager = pUIManager;
        
        this.div = document.createElement('div');
        this.div.id = 'appComponent';
        this.div.classList.add('container-fluid');

        this.headerComponent = new HeaderComponent(this.uiManager);
    };

    addPrincipalElement(pBody){
        pBody.prepend(this.div);
        this.headerComponent.showHeader(
            this.div,
            this.uiManager
        );
    };
};