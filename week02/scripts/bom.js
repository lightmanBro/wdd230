    
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click',()=>{
    if(input.value != ''){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '✂';
        li.append(deleteButton);
        list.append(li);
        deleteButton.ariaLabel = `delete ${input.value}`;
        deleteButton.addEventListener('click',(e)=>{
            list.removeChild(li);
            input.focus();
            input.value = '';
        })
    }
})

