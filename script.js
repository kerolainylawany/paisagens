function mudarCor (cor){
  let body = document.body;

  switch(cor){
    case 'praia' : body.style.backgroundImage = "url('praia.jpg')"; break;
    case 'montanha' : body.style.backgroundImage = "url('montanha.jpg')"; break;
    case 'mar' : body.style.backgroundImage = "url('mar.jpg')"; break;
    case 'galaxia' : body.style.backgroundImage = "url('galaxia.jpg')"; break;
    case 'auroraboreal' : body.style.backgroundImage = "url('auroraboreal.jpg')"; break;
    default: body.style.background = 'black';
  }
}
