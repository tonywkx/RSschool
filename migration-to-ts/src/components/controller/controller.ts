

import { NewLoad } from '../view/news/news';
import { ILoadedData } from '../view/sources/sources';

/* import { NewLoad } from '../view/news/news'; */
import AppLoader from './appLoader';

type CallbackType <T> =(data: T) => void ;

class AppController extends AppLoader {
    getSources(callback: CallbackType<ILoadedData>): void {
        
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
        console.log(callback);
    }

    getNews(e: Event , callback: CallbackType<NewLoad>) {
        
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if ((target as HTMLElement).classList.contains('source__item')) {
                const sourceId = (target as HTMLElement).getAttribute('data-source-id');
                if ((newsContainer as HTMLElement).getAttribute('data-source') !== sourceId) {
                    (newsContainer as HTMLElement).setAttribute('data-source', sourceId!);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId!,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (target as HTMLElement).parentNode;
        }
    }
}

export default AppController;
