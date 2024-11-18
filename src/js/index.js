import { Tab } from "/src/js/modules/Tab";
import { Hamburger } from "/src/js/modules/Hamburger";

(()=>{
    const tab = new Tab();
    tab.init();
})();

(()=>{
    console.log('ok');
    const hamburger = new Hamburger();
    hamburger.init();
})();