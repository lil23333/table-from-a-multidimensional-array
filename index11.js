let btn = document.querySelector('#btn');
let p = document.querySelector('p');
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
btn.addEventListener('click', (e)=> {
let table = document.createElement('table');

for (let i = 0; i < arr.length; i++) {
    let row = table.insertRow();
    
    for (let j = 0; j < arr[i].length; j++) {
       let cell = row.insertCell(); 
       cell.innerHTML = arr[i][j];
     
    }
    
}
p.appendChild(table);
});









