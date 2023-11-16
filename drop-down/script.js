var iconCart = document.querySelector('i');
var select = document.querySelector('.select');
var selected = document.querySelector('.selected');
var menu = document.querySelector('.menu');
var menuItem = document.querySelectorAll('.menu li');

const toggleMenu =()=>{
    select.classList.toggle('select-open');
    menu.classList.toggle('menu-open');
}
select.addEventListener('click',function(){
    toggleMenu();
})

menuItem.forEach(function(Item){
    Item.addEventListener('click',function(){
        selected.innerHTML = Item.innerHTML;
        document.querySelector('.menu .active').classList.remove('active');
        Item.classList.add('active');
        toggleMenu()
    })
})