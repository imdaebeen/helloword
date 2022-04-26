import { NewsFeed, NewsDetail } from '../types';

export class Api {
    ajax: XMLHttpRequest;
    url: string;

    constructor(url: string){
        this.ajax = new XMLHttpRequest();
        this.url = url;
    }

    protected getRequest<AjaxResponse>(): AjaxResponse {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', this.url, false);
        ajax.send();

        return JSON.parse(ajax.response);
    }
}

export class NewsFeedApi extends Api {
    getData(): NewsFeed[] {
        return this.getRequest<NewsFeed[]>();
    }
}

export class NewsDetailApi extends Api {
    getData(): NewsDetail {
        return this.getRequest<NewsDetail>();
    }
}
