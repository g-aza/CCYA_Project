
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#button');
    button.addEventListener('click', handleButtonClick);
  
    const select = document.querySelector('#select');
    select.addEventListener('change', handleSelectChange);
  
    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
  });
  
  const handleButtonClick = function () {
    const resultParagraph = document.querySelector('#button-result');
    const username= document.querySelector('#username');
    username.textContent = (username.value);
    resultParagraph.textContent = `Thank you ${username.value}, you are now logged in!`;
  };