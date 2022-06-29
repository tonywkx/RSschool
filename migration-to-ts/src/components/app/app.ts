import AppController from '../controller/controller';
import { AppView, IDrawNews, IDrawSources } from '../view/appView';

class App {

    controller: AppController
    view: AppView
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document
            .querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e) => this.controller.getNews(e, (data: IDrawNews) => this.view.drawNews(data)));
        this.controller.getSources((data:IDrawSources) => this.view.drawSources(data));
        
    }
}

export default App;
