'use strict';

class HeaderComponent{
    constructor(pAppManager){
        this.appManager = pAppManager;

        this.header = document.createElement('header');
        this.header.id = 'headerComponent';
        this.header.classList.add('bg-orange', 'row', 'text-white');
        
        this.title = document.createElement('h1');
        this.title.innerHTML = 'Cooking Your World';
        this.title.classList.add('text-center', 'my-4', 'col-12', 'headTitle');

        this.icon = document.createElement('i');
        this.icon.classList.add('fa', 'fa-book', 'display-4', 'ml-3');

        this.header.appendChild(this.title);
        this.title.appendChild(this.icon);

        this.mainComponent = new MainComponent(this.appManager);
    };

    showHeader(pBody, pDiv, pAppManager){
        pDiv.prepend(this.header);
        this.mainComponent.showMain(pBody, pAppManager);
    };
};