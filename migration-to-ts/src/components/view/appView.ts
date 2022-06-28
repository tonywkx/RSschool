
import  News, { NewLoad } from './news/news';
import Sources, { ILoadedData } from './sources/sources';

export interface IDrawNews{
    status: string
    totalResults: number
    articles: Array<NewLoad>
}

export interface IDrawSources{
    status: string
    sources: Array<ILoadedData>
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:IDrawNews): void {
        
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDrawSources): void {
        
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
