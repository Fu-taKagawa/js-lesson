export class Tab {
    constructor() {
        this.tabNaviItems = document.querySelectorAll('.js-tab__navi-item');
        this.tabContents = document.querySelectorAll('.js-tab__contents-item');
    }

    init() {
        if (!this.tabNaviItems.length || !this.tabContents.length) return;
        this.tabNaviItems.forEach((tabNaviItem)=>{
            tabNaviItem.addEventListener('click', this.switchTab.bind(this));
        })
    }

    switchTab(e) {
        e.preventDefault();
        const tabNavi = e.currentTarget.closest('.js-tab__navi');
        const tabNaviItems = tabNavi.querySelectorAll('.js-tab__navi-item');
        const tabData = e.currentTarget.dataset.navi;
        const tabContents = tabNavi.nextElementSibling.querySelectorAll('.js-tab__contents-item');

        this.removeActiveClass(tabNaviItems, 'is-active');
        this.removeActiveClass(tabContents, 'is-show');

        this.addActiveClass(e.currentTarget, 'is-active');
        this.displayTabContents(tabData, tabContents);
    }

    removeActiveClass(tabNaviItems, activeClass) {
        tabNaviItems.forEach((tabNaviItem)=>{
            tabNaviItem.classList.remove(activeClass);
        });
    }

    addActiveClass(elements, activeClass) {
        elements.classList.add(activeClass);
    }

    displayTabContents(data, contents) {
        contents.forEach((content) => {
            if (content.dataset.tabcontent === data) {
                content.classList.add('is-show');
            }
        });
    }
}