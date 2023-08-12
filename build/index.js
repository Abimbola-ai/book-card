// Add JavaScript code here
function toggleContent() {
    var content = document.getElementById('front-content');
    content.classList.toggle('hide');

    var image = document.getElementById('back-content');
    if (content.classList.contains('hide')) {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
}