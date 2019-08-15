'use strict';

class HeaderComponent{
    constructor(pAppManager){
        this.appManager = pAppManager;

        this.header = document.createElement('header');
        this.header.id = 'headerComponent';
        this.header.classList.add('bg-dark', 'row');
        
        this.title = document.createElement('h1');
        this.title.innerHTML = 'Cooking Your World';
        this.title.classList.add('text-center', 'text-white', 'my-4', 'col-12');

        this.header.appendChild(this.title);

        this.mainComponent = new MainComponent(this.appManager);
    };

    showHeader(pBody, pDiv, pAppManager){
        pDiv.prepend(this.header);
        this.mainComponent.showMain(pBody, pAppManager);
    };
};