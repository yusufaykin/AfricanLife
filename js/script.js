let baslik = document.title;
window.onblur = () =>
document.title = "Come back ...";
window.onfocus = () =>
document.title = baslik;