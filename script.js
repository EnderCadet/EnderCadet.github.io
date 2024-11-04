var current = 'page1';

function showit(var1) {
document.getElementById(current).style.display = 'none';
document.getElementById(var1).style.display = 'block';
current = var1;
}
