/* eslint-disable prefer-const */


import AppLoader from './appLoader';


class AppController extends AppLoader {
    getSources<Data>(callback: (data: Data) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
        
    }

    /* filterSources(data: Array<ILoadedData>){
        
    } */
    

    getNews<Data>(e: Event , callback: (data: Data) => void) {
        
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
