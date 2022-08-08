import './style.css';
import { getCars } from './api';

console.log(getCars(3,5))





const f = document.createElement('div');
f!.innerHTML = "БУДУ ЕЩЕ ДЕЛАТЬ В БЛИЖАЙШИЕ ДНИ";
f.classList.add('text');
document.body.appendChild(f);
const k = document.createElement('div');
k.classList.add('cube');


    const html = `
        <div class="menu">
            <button class="button" id="garage-menu">To garage</button>
            <button class="button" id="winners-menu">To winners</button>
        </div>
        <div id="garage-view">
            <div>
                <form class="form">
                    <input class="input" id="create-name" name="name" type="text">
                    <input class="color" id="create-color" name="color" type="color" value="#fff">
                    <button class="button" type="submit">Create</button>
                </form>
                <form class="form">
                    <input class="input" id="update-name" name="name" type="text" disabled>
                    <input class="color" id="update-color" name="color" type="color" value="#fff" disabled>
                    <button class="button" id="update-submit type-"submit" >Update</button>
                </form>
            </div>
            <div class="race-controls">
                <button class="button" id="race">Race</button>
                <button class="button" id="reset">Reset</button>
                <button class="button" id="generator">Generate cars</button>
            </div>
            <div id="garage">
               
            </div>
            <div>
                <p class="message" id="message"></p>
            </div>
        </div>
        <div id="winners-view" style="display: none">
           
        </div>
        <div class="pagination">
            <button class="button" disabled id="prev">Prev</button>
            <button class="button" disabled id="next">Next</button>
        </div>
    `;
    const push = document.createElement('div');
    push.innerHTML = html;
    document.body.appendChild(push);



