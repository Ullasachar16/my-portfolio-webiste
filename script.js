document.querySelector('.cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.sidebar').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
})