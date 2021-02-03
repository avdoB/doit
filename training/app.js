//adding of the text

//selection of the butons wih querySelector
const addSpace=document.querySelector('.addingSpace');
const list= document.querySelector('.todos');
const search=document.querySelector('.search input');
//adding of the li wih a template literal
const liMaker=todo=>{
const html=` <li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>`;
list.innerHTML +=html
};

// event listener on submit than triming the text 
addSpace.addEventListener('submit', e=>{
    e.preventDefault();
    const todo=addSpace.add.value.trim();
  
  if(todo.length) { 
      liMaker(todo);
      addSpace.reset();
    }
})

//delete
list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//filtered search
const filterSearch=(term)=>{
Array.from(list.children)
.filter((tags)=> !tags.textContent.includes(term))
.forEach((tags) => tags.classList.add('hide'));   

Array.from(list.children)
.filter((tags)=> tags.textContent.includes(term))
.forEach((tags) => tags.classList.remove('hide'));   
};

///keyup
search.addEventListener('keyup', ()=>{
    const term =search.value.trim();
    filterSearch(term);
});
