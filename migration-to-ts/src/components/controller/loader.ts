

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

class Loader {
    baseLink: string;
    options: object;
    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;  
    }
    
    getResp(
        { endpoint, options = {} },
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
        console.log(endpoint);
        
    }

    errorHandler(res:IerrorHandler) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: object, endpoint) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
