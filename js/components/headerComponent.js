'use strict';

class HeaderComponent{
    constructor(pUIManager){
        this.uiManager = pUIManager;

        this.header = document.createElement('header');
        this.header.id = 'headerComponent';
        this.header.classList.add('bg-dark', 'row');
        
        this.title = document.createElement('h1');
        this.title.innerHTML = 'Cooking Your World';
        this.title.classList.add('text-center', 'text-white', 'my-4', 'col-12');

        this.header.appendChild(this.title);

        this.main = new MainComponent(this);
    };

    showHeader(pBody, pDiv, pUIManager){
        pDiv.prepend(this.header);
        this.main.showMain(pBody, pUIManager);
    };
};