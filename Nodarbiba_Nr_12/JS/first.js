/*var div = document.createElement('div');
div.id = 'content';
div.className = 'note';
div.innerHTML = '<p>CreateElement example</p>';
document.body.appendChild(div);


function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));


let menu = document.getElementById('menu');

        // create new li element
        let li = document.createElement('li');
        li.textContent = 'About Us!!!';

        // add it to the ul element
        menu.appendChild(li);

        console.log(menu.innerHTML);

        let btnSend = document.querySelector('#btnSend');
        if (btnSend) {
            btnSend.setAttribute('name', 'send');
            //btnSend.setAttribute('disabled', '');
        }
            
        let btn = document.querySelector('#btn');
     
function handleClick() {
    alert('It was clicked!');
}

btn.addEventListener('click', handleClick);

let btn = document.querySelector('#btn');

btn.addEventListener('click',function() {
    alert('It was clicked!');
});


let btn = document.querySelector('#btn');

btn.onclick = function() {
    alert('Clicked!');
};


let btn = document.querySelector('#btn');

btn.onclick = function() {
    alert(this.id); 
};
*/

let btn = document.querySelector('#btn');
btn.addEventListener('click',function() {
   alert('Clicked!');
});

// won't work
btn.removeEventListener('click', function() {
   alert('Clicked!');
});