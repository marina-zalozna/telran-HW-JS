const textareaRef = document.querySelector('#field') 

if (localStorage.getItem('text') !== null) {
  textareaRef.value = localStorage.getItem('text');
}
document.addEventListener('input', function(e) {
  localStorage.setItem('text', textareaRef.value);
});