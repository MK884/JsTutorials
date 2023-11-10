var searchText = document.getElementById('search');
var btnSearch = document.getElementById('addBtn');
var tasksBox = document.getElementById('tasks');

btnSearch.addEventListener('click', function(){
    if(searchText.value == ''){
        alert('First Enter Your Task')
    }else{
        var Li = document.createElement('li');
        Li.innerHTML = searchText.value;
        tasksBox.appendChild(Li);
        var span  = document.createElement('span');
        span.innerHTML = '\u00d7';
        Li.appendChild(span);
    }
    searchText.value='';
    saveData();

})

tasksBox.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        console.log('click')
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('tasks',tasksBox.innerHTML)
}

function getData(){
    tasksBox.innerHTML = localStorage.getItem('tasks');
}

getData();