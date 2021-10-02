$(function() {
  const nexbtn = document.getElementById('next');
  const arrInput = document.getElementsByClassName('input-form');

  nexbtn.addEventListener('click', () => {
    for (input of arrInput) {
      if (input.value == '' || input.value === null) {
        $('.error-label').css('display', 'block');
      } else {
        $('.error-label').css('display', 'none');
      }
    }
  })
})
