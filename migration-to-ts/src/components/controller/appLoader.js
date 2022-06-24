import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '690c2ce82ecc4b6d9e0588369d968fe9',
        });
    }
}

export default AppLoader;
