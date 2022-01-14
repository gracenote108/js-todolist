class SideNavManager{
    #sideNav
    #projList

    addSideNav(snav){
        this.#sideNav = snav;
    }

    addProjList(plist){
        this.#projList = plist;
    }

    get projList() {
        return this.#projList;
    }
    get sideNav() {
        return this.#sideNav;
    }
}

const instance = new SideNavManager()
export default instance;