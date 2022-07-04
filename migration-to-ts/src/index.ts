import App from './components/app/app';
import './global.css';

const app = new App();
app.start();


const letters = (document.querySelectorAll('.letter'))
const arr = Array.from(letters).map(data => data.innerHTML.toLowerCase())

console.log(arr);
const container = document.querySelector('.letter-container');
function hide(e: Event){
    (e.target as HTMLElement).style.background = 'orange';
}
  
  container!.addEventListener('click', hide);

