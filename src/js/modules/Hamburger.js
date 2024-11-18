export class Hamburger {
    constructor(){
        const header = document.querySelector(".l-header");
        this.button = header.querySelectorAll(".js-menu__hamburger");
        this.menu = header.querySelectorAll(".js-menu");
    }

    init() {
        if (!this.button.length || !this.menu.length) return;
        this.resetStatus();
        this.button.forEach((e)=>{
            e.addEventListener('click', this.switchMenu.bind(this));
        })
    }

    resetStatus() {
        this.menu.forEach(menuItem => {
            if (menuItem.classList.contains("is-open")) {
                menuItem.classList.remove("is-open");
                this.button.forEach((button) => button.setAttribute("aria-expanded", "false"));
            }
        });
    }

    switchMenu() {
        this.menu.forEach((e) => {
            if (e.classList.contains("is-open")) {
                e.classList.remove("is-open");
                this.button.forEach((button) => button.setAttribute("aria-expanded", "false"));
            } else {
                e.classList.add("is-open");
                this.button.forEach((button) => button.setAttribute("aria-expanded", "true"));
            }
        });
    }
}