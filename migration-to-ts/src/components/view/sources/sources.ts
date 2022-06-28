import './sources.css';

export interface ILoadedData{
    id: string
    name: string
    description?: string
    url?: string
}
class Sources {
    draw(data: Array<ILoadedData>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = (document.querySelector('#sourceItemTemp')as HTMLTemplateElement);

        data.forEach((item) => {
            const sourceClone: HTMLTemplateElement  = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
