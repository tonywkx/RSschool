/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* import { getCar, getCars, createCar, deleteCar, updateCar, startEngine, stopEngine, saveWinner, getWinners, deleteWinner, drive } from "./api";
import storeState from "./store";
import { animation, getDistanceBetweenElements, race, generateRandomCars } from "./utils";
import { renderCarImage } from "./renderCarImg";

let selectedCar = null; */



/* const renderCar = ({ id, name, color, isEngineStarted }) => `
    <div class="general-buttons">
        <button class="button select-button" id="select-car-${id}">Select</button>
        <button class="button remove-button" id="remove-car-${id}">Remove</button>
        <span class="car-name">${name}</span>
    </div>
    <div class="road">
        <div class="launch-pad">
            <div class="control-panel">
                <button class="icon start-engine-button" id="start-engine-car-${id}" ${isEngineStarted ? 'disabled' : ''}>A</button>
                <button class="icon stop-engine-button" id="stop-engine-car-${id}" ${isEngineStarted ? 'disabled' : ''}>B</button>
            </div>
            <div class="car" id="car-${id}">
                ${renderCarImage(color)}
            </div>
        </div>
        <div class="flag" id="flag-${id}">🏁</div>
    </div>
`;

export const renderGarage = () => `
    <h1>Garage (${storeState.carsCount})</h1>
    <h2>Page #${storeState.carsPage}</h2>
    <ul class="garage">
        ${storeState.cars.map((car) => `
            <li>${renderCar(car)}</li>
        `).join('')}
    </ul>
`;

export const renderWinners = () => `
    <h1>Winners (${storeState.winnersCount})</h1>
    <h2>Page #${storeState.winnersPage}</h2>
    <table class="table" cellspacing="0" border="0" cellpadding="0">
        <thead>
            <th>Number</th>
            <th>Car</th>
            <th>Name</th>
            <th class="table-button table-wins ${storeState.sortBy === 'wins' ? storeState.sortOrder : ''}" id="sort-by-wins">Wins</th>
            <th class="table-button table-time ${storeState.sortBy === 'time' ? storeState.sortOrder : ''}" id="sort-by-time">Best time</th>
        </thead>
        <tbody>
            ${storeState.winners.map((winner,index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${renderCarImage(winner.car.color)}</td>
                    <td>${winner.car.name}</td>
                    <td>${winner.wins}</td>
                    <td>${winner.time}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>
`;

export const render = async () => {
    const html = `
        <div class="menu">
            <button class="button garage-menu-button primary" id="garage-menu">To garage</button>
            <button class="button winners-menu-button primary" id="winners-menu">To winners</button>
        </div>
        <div id="garage-view">
            <div>
                <form class="form" id="create">
                    <input class="input" id="create-name" name="name" type="text">
                    <input class="color" id="create-color" name="color" type="color" value="#fff">
                    <button class="button" type="submit">Create</button>
                </form>
                <form class="form" id="update">
                    <input class="input" id="update-name" name="name" type="text" disabled>
                    <input class="color" id="update-color" name="color" type="color" value="#fff" disabled>
                    <button class="button" id="update-submit type-"submit" >Update</button>
                </form>
            </div>
            <div class="race-controls">
                <button class="button race-button primary" id="race">Race</button>
                <button class="button reset-button primary" id="reset">Reset</button>
                <button class="button generator-button primary" id="generator">Generate cars</button>
            </div>
            <div id="garage">
                ${renderGarage()}
            </div>
            <div>
                <p class="message" id="message"></p>
            </div>
        </div>
        <div id="winners-view" style="display: none">
            ${renderWinners()}
        </div>
        <div class="pagination">
            <button class="button primary prev-button" disabled id="prev">Prev</button>
            <button class="button primary next-button" disabled id="next">Next</button>
        </div>
    `;
    const root = document.createElement('div');
    root.innerHTML = html;
    document.body.appendChild(root);
};
 */



