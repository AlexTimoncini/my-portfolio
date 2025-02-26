export class Router {
    constructor(root) {
        this.root = root;
        this.routes = {};
    }
    get(route, callback) {
        this.routes[this.root + route] = callback;
    }
    //OLD ROUTER
    start() {
        window.addEventListener('hashchange', this.handleHashChange.bind(this));
        window.addEventListener('load', this.handleHashChange.bind(this));
    }

    handleHashChange() {
        let currentHash = window.location.hash.substring(1);
        let currentHashNoParams = currentHash.split("?")
        currentHash = currentHashNoParams[0] || currentHash

        const currentRoute = this.root + (currentHash || '/');

        if (currentRoute in this.routes) {
            this.routes[currentRoute]();
        } else {
            console.log(currentHash, currentRoute, 'Route not found, loading default route');
            const defaultRoute = this.root + '/';
            if (defaultRoute in this.routes) {
                this.routes[defaultRoute]();
            }
        }
    }
}
