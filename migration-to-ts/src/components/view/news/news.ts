import './news.css';


class News {
    draw(data) {
        console.log(data);
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = (document.querySelector('#newsItemTemp') as HTMLElement);

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);

            if (idx % 2) (newsClone.querySelector('.news__item')as HTMLElement).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo')as HTMLElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })` ;
            (newsClone.querySelector('.news__meta-author')as HTMLElement).textContent = item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title').textContent = item.title as HTMLElement);
            (newsClone.querySelector('.news__description-source').textContent = item.source.name as HTMLElement);
            (newsClone.querySelector('.news__description-content').textContent = item.description as HTMLElement);
            (newsClone.querySelector('.news__read-more a').setAttribute('href', item.url) as HTMLElement);

            fragment.append(newsClone);
        });

        (document.querySelector('.news')as HTMLElement).innerHTML = '';
        (document.querySelector('.news')as HTMLElement).appendChild(fragment);
    }
}

export default News;
