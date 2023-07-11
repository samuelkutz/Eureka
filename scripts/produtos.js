function showImage(element) {
    element.style.backgroundImage = "url('./images/nossos-produtos/fundo.jpg')";
    element.style.backgroundSize = "contain";
    element.style.backgroundPosition = "center";
    element.style.backgroundRepeat = "no-repeat";
    element.querySelector('.produto-img').style.display = 'none';
    element.querySelector('p').style.display = 'none';
  }
  
  function hideImage(element) {
    element.style.backgroundImage = "none";
    element.querySelector('.produto-img').style.display = 'block';
    element.querySelector('p').style.display = 'block';
  }
  