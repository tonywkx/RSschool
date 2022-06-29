/* import {IDrawSources  } from '../view/appView'
 */
interface IerrorHandler {
    bodyUsed?: boolean
    headers?: object  
    ok?: boolean
    redirected?: boolean
    status: number
    statusText: string
    type?: string
    url?: string
    json(): void 
}
/* 
interface GenericInterface<U> {
    getResp?: () => U
} */

type UrlOptions = {
    [prop: string]: string;
}
class Loader  {
    baseLink: string;
    options: UrlOptions;
    constructor(baseLink: string, options: UrlOptions) {
        this.baseLink = baseLink;
        this.options = options;  
    }
    
    getResp(
        { endpoint, options = {} } : { endpoint: string; options?: Record<string,string>},
        callback: <T>(data: T) => void= () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
        
        
    }

    errorHandler(res: IerrorHandler) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: {source?: string}, endpoint: string) {
        const urlOptions: UrlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: <T>(data: T) => void, options = {}) {
       
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
