function txt_replace(time, element, item1){
  time = time * 1000;
  setTimeout(function() {
  var txt = document.getElementById(element);
  txt.textContent = item1;
  }, time);
}

function txt_replace2(time, element, item1, item2) {
  time = time * 1000;
  element = document.getElementById(element);
  setTimeout(function() {
    if (element.textContent === item1) {
      element.textContent = item2;
    } else {
      element.textContent = item1;
    }
  }, time);
}

function txt_replace3(time, element, item1, item2) {
  time = time * 1000;
  element = document.getElementById(element);
          element.textContent = item1;
          setTimeout(function() {
            element.textContent = item2;
      }, time);
}


// se clicar fora do elemento elementoId, o element ganha replace
function replace_out(elementoId, element, item1, item2) {
        const elemento = document.getElementById(elementoId);
        const elemento_filho = document.getElementById(element);
    
        document.addEventListener('click', function (event) {
            if (!elemento.contains(event.target)) {
                if (elemento_filho.classList.contains(item1)) {
                    elemento_filho.classList.replace(item1, item2);
                }
            }
        });
}

function replace_out_delay(delay, elementoId, element, item1, item2) {

  delay = delay * 1000;

  const elemento = document.getElementById(elementoId);
  const elemento_filho = document.getElementById(element);

  let timeoutId;

  document.addEventListener('click', function (event) {
    if (!elemento.contains(event.target)) {
      if (elemento_filho.classList.contains(item1)) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(function () {
          elemento_filho.classList.replace(item1, item2);
        }, delay);
      }
    }
  });
}


function replace(time, element, item1, item2) {
    time = time * 1000;
    element = document.getElementById(element);
    setTimeout(function() {
        element.classList.replace(item1, item2);
    }, time);
}

function class_replace(time, classeBase, classe1, classe2) {
  time = time * 1000;
  setTimeout(function() {
    var elementos = document.getElementsByClassName(classeBase);

    for (var i = 0; i < elementos.length; i++) {
      var elemento = elementos[i];
      
      elemento.classList.replace(classe1, classe2);
    
    }
  }, time);
}


function replace2(time, element, item1, item2) {
    time = time * 1000;
    element = document.getElementById(element);
    setTimeout(function() {
      if (element.classList.contains(item1)) {
          element.classList.replace(item1, item2);
      } else {
          element.classList.replace(item2, item1);
      }
    }, time);
}

function class_replace2(time, element, item1, item2) {
  time = time * 1000;
  element = document.querySelector('.' + element);
  setTimeout(function() {
    if (element.classList.contains(item1)) {
        element.classList.replace(item1, item2);
    } else {
        element.classList.replace(item2, item1);
    }
  }, time);
}

function replace3(time, element, item1, item2) {
    time = time * 1000;

    element = document.getElementById(element);
            element.classList.replace(item1, item2);
            setTimeout(function() {
                element.classList.replace(item2, item1);
        }, time);
}

function replace4(time, time2, element, item1, item2) {
    time = time * 1000;
    time2 = time2 * 1000;
    element = document.getElementById(element);
    setTimeout(function() {
            element.classList.replace(item1, item2);
            setTimeout(function() {
                element.classList.replace(item2, item1);
        }, time2);
    }, time);
}

function add(time, element, item1) {
    time = time * 1000;
    element = document.getElementById(element);
    setTimeout(function() {
            element.classList.add(item1);
    }, time);
}

function add2(time, element, item1) {
    time = time * 1000;
    let time2 = time
    if (time < 1){
        time2 = 1000
    }

    element = document.getElementById(element);
    setTimeout(function() {
            element.classList.add(item1);
            setTimeout(function() {
                element.classList.remove(item1);
        }, time2);
    }, time);
}

function remove(time, element, item2) {
    time = time * 1000;
    element = document.getElementById(element);
    setTimeout(function() {
            element.classList.remove(item2);
    }, time);
}

function remove2(time, element, item1) {
    time = time * 1000;
    let time2 = time
    if (time < 1){
        time2 = 1000
    }

    element = document.getElementById(element);
    setTimeout(function() {
            element.classList.remove(item1);
            setTimeout(function() {
                element.classList.add(item1);
        }, time2);
    }, time);
}

function copy(txt){
const filho = document.getElementById(txt);

    const texto = filho.innerText;
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
};


document.addEventListener("DOMContentLoaded", function() {
    const sLeft = document.querySelector(".s-left-fade");
    const sRight = document.querySelector(".s-right-fade");
    const sDots = document.querySelectorAll(".s-dot-fade");
    const sItems = document.querySelectorAll(".s-item-fade");
    const slider = document.querySelector(".slider-fade");
    let currentIndex = 0;
    let isMouseOverSlider = false;
  
    sDots[currentIndex].classList.replace("bg-custom", "bg-custom2");
  
    sLeft.addEventListener("click", function() {
      sDots[currentIndex].classList.replace("bg-custom2", "bg-custom");
      sItems[currentIndex].classList.replace("op-1", "op-0");
  
      currentIndex = (currentIndex - 1 + sDots.length) % sDots.length;
      sDots[currentIndex].classList.replace("bg-custom", "bg-custom2");
  
      sItems[currentIndex].classList.replace("op-0", "op-1");
    });
  
    sRight.addEventListener("click", function() {
      sDots[currentIndex].classList.replace("bg-custom2", "bg-custom");
      sItems[currentIndex].classList.replace("op-1", "op-0");
  
      currentIndex = (currentIndex + 1) % sDots.length;
      sDots[currentIndex].classList.replace("bg-custom", "bg-custom2");
  
      sItems[currentIndex].classList.replace("op-0", "op-1");
    });


    function handleSRight() {
      if (!isMouseOverSlider) {
        sDots[currentIndex].classList.replace("bg-custom2", "bg-custom");
        sItems[currentIndex].classList.replace("op-1", "op-0");
  
        currentIndex = (currentIndex + 1) % sDots.length;
        sDots[currentIndex].classList.replace("bg-custom", "bg-custom2");
  
        sItems[currentIndex].classList.replace("op-0", "op-1");
      }
    }
  
    setTimeout(function() {
        setInterval(handleSRight, 4000);
        handleSRight();
      }, 4000)
     
    slider.addEventListener("mouseover", function() {
      isMouseOverSlider = true;
    });
  
    slider.addEventListener("mouseout", function() {
      isMouseOverSlider = false;
    });
  });
  
  


  document.addEventListener("DOMContentLoaded", function() {
    const sLeft = document.querySelector(".s-left-fade2");
    const sRight = document.querySelector(".s-right-fade2");
    const sDots = document.querySelectorAll(".s-dot-fade2");
    const sItems = document.querySelectorAll(".s-item-fade2");
    const slider = document.querySelector(".slider-fade2");
    let currentIndex = 0;
    let isMouseOverSlider = false;
  
    sDots[currentIndex].classList.replace("bg-custom", "bg-custom2");
  
    sLeft.addEventListener("click", function() {
       sDots[currentIndex].classList.replace("bg-custom2", "bg-custom");
       sItems[currentIndex].classList.replace("w-full-100", "w-full-0");
       sItems[currentIndex].classList.replace("op-1", "op-0");
  
      currentIndex = (currentIndex - 1 + sDots.length) % sDots.length;
      sDots[currentIndex].classList.replace("bg-custom", "bg-custom2");
  
      sItems[currentIndex].classList.replace("w-full-0", "w-full-100");
      sItems[currentIndex].classList.replace("op-0", "op-1");
    });
  
    sRight.addEventListener("click", function() {
      sDots[currentIndex].classList.replace("bg-custom2", "bg-custom");
      sItems[currentIndex].classList.replace("w-full-100", "w-full-0");
      sItems[currentIndex].classList.replace("op-1", "op-0");
  
      currentIndex = (currentIndex + 1) % sDots.length;
      sDots[currentIndex].classList.replace("bg-custom", "bg-custom2");
  
      sItems[currentIndex].classList.replace("w-full-0", "w-full-100");
      sItems[currentIndex].classList.replace("op-0", "op-1");
    });


    function handleSRight() {
      if (!isMouseOverSlider) {
        sDots[currentIndex].classList.replace("bg-custom2", "bg-custom");
        sItems[currentIndex].classList.replace("w-full-100", "w-full-0");
        sItems[currentIndex].classList.replace("op-1", "op-0");
  
        currentIndex = (currentIndex + 1) % sDots.length;
        sDots[currentIndex].classList.replace("bg-custom", "bg-custom2");
  
        sItems[currentIndex].classList.replace("w-full-0", "w-full-100");
        sItems[currentIndex].classList.replace("op-0", "op-1");
      }
    }
  
    setTimeout(function() {
        setInterval(handleSRight, 4000);
        handleSRight();
      }, 4000)
     
    slider.addEventListener("mouseover", function() {
      isMouseOverSlider = true;
    });
  
    slider.addEventListener("mouseout", function() {
      isMouseOverSlider = false;
    });
  });
  
  


  document.addEventListener("DOMContentLoaded", function() {
    const left = document.querySelector(".s-left2");
    const right = document.querySelector(".s-right2");
    const dots = document.querySelectorAll(".s-dot2");
    const items = document.querySelectorAll(".s-item2");
    const slider = document.querySelector(".slider2");
  
    let index = 0;
    let isMouseOverSlider = false;
    
    dots[index].classList.replace("bg-custom", "bg-custom2");
    
    
    
    left.addEventListener("click", function() {
    
      dots[index].classList.replace("bg-custom2", "bg-custom");
      items[index].classList.replace("right-0", "right-negative");
      console.log("Ultimo index: " + index)
    
      var anterior = index;
    
      index = (index - 1 + dots.length) % dots.length;
    
      var atual = index;
    
      dots[index].classList.replace("bg-custom", "bg-custom2");
        items[index].classList.replace("right-totaly", "right-0");
        console.log("Index atual: " + index)
    
        if (index === 0) {
          for (var i = 0; i < items.length; i++) {
            items[i].classList.replace("right-negative", "right-totaly");
          }
        }
    
        if (anterior < atual) {
          for (var i = 0; i < items.length; i++) {
            items[i].classList.replace("right-negative", "right-totaly");
          }
        }
    
          items[anterior].classList.replace("right-negative", "right-totaly");
    
        
    });
    
    
    
    right.addEventListener("click", function() {
    
      dots[index].classList.replace("bg-custom2", "bg-custom");
      items[index].classList.replace("right-0", "right-negative");
      console.log("Ultimo index: " + index)
    
      var anterior = index;
    
        index = (index + 1) % dots.length;
    
        var atual = index;
    
        dots[index].classList.replace("bg-custom", "bg-custom2");
        items[index].classList.replace("right-totaly", "right-0");
        console.log("Index atual: " + index)
    
        if (index === 0) {
          for (var i = 0; i < items.length; i++) {
            items[i].classList.replace("right-negative", "right-totaly");
          }
        }
    
          items[anterior].classList.replace("right-negative", "right-totaly");
    
    });
    
    function handleSRight() {
      if (!isMouseOverSlider) {
        dots[index].classList.replace("bg-custom2", "bg-custom");
        items[index].classList.replace("right-0", "right-negative");
        console.log("Ultimo index: " + index)
      
        var anterior = index;
    
          index = (index + 1) % dots.length;
    
          var atual = index;
    
          dots[index].classList.replace("bg-custom", "bg-custom2");
          items[index].classList.replace("right-totaly", "right-0");
          console.log("Index atual: " + index)
    
          if (index === 0) {
            for (var i = 0; i < items.length; i++) {
              items[i].classList.replace("right-negative", "right-totaly");
            }
          }
    
          setTimeout(function() {
            items[anterior].classList.replace("right-negative", "right-totaly");
          }, 1000)
          
    
        }
    }
    
    setTimeout(function() {
        setInterval(handleSRight, 4000);
        handleSRight();
      }, 4000)
     
    slider.addEventListener("mouseover", function() {
      isMouseOverSlider = true;
    });
    
    slider.addEventListener("mouseout", function() {
      isMouseOverSlider = false;
    });
    
    });







document.addEventListener("DOMContentLoaded", function() {
  const left = document.querySelector(".s-left");
  const right = document.querySelector(".s-right");
  const dots = document.querySelectorAll(".s-dot");
  const items = document.querySelectorAll(".s-item");
  const slider = document.querySelector(".slider");

let index = 0;
let isMouseOverSlider = false;

dots[index].classList.replace("bg-custom", "bg-custom2");



left.addEventListener("click", function() {

  dots[index].classList.replace("bg-custom2", "bg-custom");
  items[index].classList.replace("right-0", "right-negative");
  console.log("Ultimo index: " + index)

  var anterior = index;

  index = (index - 1 + dots.length) % dots.length;

  var atual = index;

  dots[index].classList.replace("bg-custom", "bg-custom2");
    items[index].classList.replace("right-totaly", "right-0");
    console.log("Index atual: " + index)

    if (index === 0) {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.replace("right-negative", "right-totaly");
      }
    }

    if (anterior > atual) {
        items[atual].classList.replace("right-negative", "right-0");
        items[anterior].classList.replace("right-negative", "right-totaly");
    }

    if (anterior < atual) {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.replace("right-totaly", "right-negative");
      }
    }
    
});



right.addEventListener("click", function() {

  dots[index].classList.replace("bg-custom2", "bg-custom");
  items[index].classList.replace("right-0", "right-negative");
  console.log("Ultimo index: " + index)

  var anterior = index;

    index = (index + 1) % dots.length;

    var atual = index;

    dots[index].classList.replace("bg-custom", "bg-custom2");
    items[index].classList.replace("right-totaly", "right-0");
    console.log("Index atual: " + index)

    if (index === 0) {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.replace("right-negative", "right-totaly");
      }
    }

    if (anterior > atual) {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.replace("right-negative", "right-totaly");
      }
    }

});

function handleSRight() {
  if (!isMouseOverSlider) {
    dots[index].classList.replace("bg-custom2", "bg-custom");
    items[index].classList.replace("right-0", "right-negative");
    console.log("Ultimo index: " + index)
  
    var anterior = index;

      index = (index + 1) % dots.length;

      var atual = index;

      dots[index].classList.replace("bg-custom", "bg-custom2");
      items[index].classList.replace("right-totaly", "right-0");
      console.log("Index atual: " + index)

      if (index === 0) {
        for (var i = 0; i < items.length; i++) {
          items[i].classList.replace("right-negative", "right-totaly");
        }
      }

      setTimeout(function() {
        items[anterior].classList.replace("right-negative", "right-totaly");
      }, 1000)
      

    }
}

setTimeout(function() {
    setInterval(handleSRight, 4000);
    handleSRight();
  }, 4000)
 
slider.addEventListener("mouseover", function() {
  isMouseOverSlider = true;
});

slider.addEventListener("mouseout", function() {
  isMouseOverSlider = false;
});

});




document.addEventListener("DOMContentLoaded", function() {
  const left = document.querySelector(".s-left3");
  const right = document.querySelector(".s-right3");
  const dots = document.querySelectorAll(".s-dot3");
  const items = document.querySelectorAll(".s-item3");
  const slider = document.querySelector(".slider3");

let index = 0;
let isMouseOverSlider = false;

dots[index].classList.replace("bg-custom", "bg-custom2");



left.addEventListener("click", function() {

  dots[index].classList.replace("bg-custom2", "bg-custom");
  items[index].classList.replace("right-0", "right-negative");
  console.log("Ultimo index: " + index)

  var anterior = index;

  index = (index - 1 + dots.length) % dots.length;

  var atual = index;

  dots[index].classList.replace("bg-custom", "bg-custom2");
    items[index].classList.replace("right-totaly", "right-0");
    console.log("Index atual: " + index)

    if (index === 0) {
      for (var i = 1; i < items.length; i++) {
        items[i].classList.replace("right-negative", "right-totaly");
      }
    }

    if (anterior > atual) {
        items[atual].classList.replace("right-negative", "right-0");
        items[anterior].classList.replace("right-negative", "right-totaly");
    }

    if (anterior < atual) {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.replace("right-totaly", "right-negative");
      }
    }
    
});



right.addEventListener("click", function() {

  dots[index].classList.replace("bg-custom2", "bg-custom");
  items[index].classList.replace("right-0", "right-negative");
  console.log("Ultimo index: " + index)

  var anterior = index;

    index = (index + 1) % dots.length;

    var atual = index;

    dots[index].classList.replace("bg-custom", "bg-custom2");
    items[index].classList.replace("right-totaly", "right-0");
    console.log("Index atual: " + index)

    if (index === 0) {

      items[0].classList.replace("right-negative", "right-0");
      
      for (var i = 0; i < items.length; i++) {
        items[1].classList.replace("right-negative", "right-totaly");
      }
    }

    if (anterior > atual) {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.replace("right-negative", "right-totaly");
      }
    }

});

function handleSRight() {
  if (!isMouseOverSlider) {
    
    
  dots[index].classList.replace("bg-custom2", "bg-custom");
  items[index].classList.replace("right-0", "right-negative");
  console.log("Ultimo index: " + index)

  var anterior = index;

    index = (index + 1) % dots.length;

    var atual = index;

    dots[index].classList.replace("bg-custom", "bg-custom2");
    items[index].classList.replace("right-totaly", "right-0");
    console.log("Index atual: " + index)

    if (index === 0) {

      items[0].classList.replace("right-negative", "right-0");
      
      for (var i = 0; i < items.length; i++) {
        items[1].classList.replace("right-negative", "right-totaly");
      }
    }

    if (anterior > atual) {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.replace("right-negative", "right-totaly");
      }
    }
      

    }
}

setTimeout(function() {
    setInterval(handleSRight, 4000);
    handleSRight();
  }, 4000)
 
slider.addEventListener("mouseover", function() {
  isMouseOverSlider = true;
});

slider.addEventListener("mouseout", function() {
  isMouseOverSlider = false;
});

});


function txt_limit(id, x) {
  var element = document.getElementById(id);

  if (element.textContent.length > x) {
      element.textContent = element.textContent.substring(0, x) + "...";
  }
}


function observe(element){
  var item = document.getElementById(element);
  function handleIntersect(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              item.classList.replace('op-0', 'op-1')
              observer.unobserve(entry.target);
          }
  });
}

  const elementoObservado = document.getElementById(element);
  const observer = new IntersectionObserver(handleIntersect, { root: null, threshold: 0.5 });
  observer.observe(elementoObservado);
}

function observe2(element){
  var item = document.getElementById(element);
  function handleIntersect(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              item.classList.replace('op-0', 'op-1')
              observer.unobserve(entry.target);
          }
  });
}

  const elementoObservado = document.getElementById(element);
  const observer = new IntersectionObserver(handleIntersect, { root: null, threshold: 1 });
  observer.observe(elementoObservado);
}

function observe_replace(element, class1, class2){
  var item = document.getElementById(element);
  function handleIntersect(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              item.classList.replace(class1, class2)
              observer.unobserve(entry.target);
          }
  });
}

  const elementoObservado = document.getElementById(element);
  const observer = new IntersectionObserver(handleIntersect, { root: null, threshold: 1 });
  observer.observe(elementoObservado);
}

function scroll( time = 60, element, time2 = 1, time3 = 1 ) {
  var minhaDiv = document.getElementById( element );
  var time = time * 1000
  var time2 = time2 * 1000
  var time3 = time3 * 1000
  var duration = time;

  var start = minhaDiv.scrollTop;
  var end = minhaDiv.scrollHeight - minhaDiv.clientHeight;
  var startTime;

  function animate( currentTime ) {
      if ( !startTime ) startTime = currentTime;
      var progress = ( currentTime - startTime ) / duration;
      progress = Math.min( progress, 1 );

      minhaDiv.scrollTop = start + ( end - start ) * progress;

      if ( progress < 1 ) {
          requestAnimationFrame( animate );
      } else {
          setTimeout( function() {
              rolarAoInicio();
          }
          , time2 );
      }
  }

  function rolarAoInicio() {
      var startTime = null;
      var initialScrollTop = minhaDiv.scrollTop;
      var targetScrollTop = 0;
      var scrollDuration = time3;

      function animateScroll( currentTime ) {
          if ( !startTime ) startTime = currentTime;
          var progress = ( currentTime - startTime ) / scrollDuration;
          progress = Math.min( progress, 1 );

          minhaDiv.scrollTop = initialScrollTop + ( targetScrollTop - initialScrollTop ) * progress;

          if ( progress < 1 ) {
              requestAnimationFrame( animateScroll );
          } else {
              setTimeout( function() {
                  executarScroll();
              }
              , 0 );
          }
      }
      requestAnimationFrame( animateScroll );
  }
  requestAnimationFrame( animate );
}


function loop(time, function1, function2) {
  var i = true;
  var delay = time * 1000;

  setInterval(function() {
      if (i) {
          function1();
          i = false;
      } else {
          function2();
          i = true;
      }
  }, delay);
}


function custom(delay, elementoId, prop, cor) {

  delay = delay * 1000;
  
  setTimeout(function() {
    var elemento = document.getElementById(elementoId);

    if (elemento) {
      elemento.style.setProperty(prop, cor);
    } 
  }, delay);
}

function redirect(delay, link){

  delay = delay * 1000;

  setTimeout(function() {
    window.location.href = link;
  }, delay);
}

function search() {
  var divs = document.getElementsByClassName('resultado');
  for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = 'block';
  }
}

function pesquisar() {
  var termoPesquisa = document.getElementById('search').value.toLowerCase();
  var divs = document.getElementsByClassName('resultado');

  for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      var divId = div.id.toLowerCase();

      if (termoPesquisa === '' || divId.includes(termoPesquisa)) {
          div.style.display = 'block';
      } else {
          div.style.display = 'none';
      }
  }
}

search();

// function ordenar(table, nomeColuna, ordenate = 'asc') {

//   var tabela = document.getElementById(table);
//   var indiceColuna = -1;

//   if (tabela) {
//     var cabecalho = tabela.getElementsByTagName('th');

//     for (var i = 0; i < cabecalho.length; i++) {
//       if (cabecalho[i].innerHTML.toUpperCase() === nomeColuna.toUpperCase()) {
//         indiceColuna = i;
//         break;
//       }
//     }
//   }

//   var linhas = [].slice.call(tabela.rows, 1);

//   linhas.sort(function (a, b) {
//     var valorA = a.cells[indiceColuna].textContent.trim().toUpperCase();
//     var valorB = b.cells[indiceColuna].textContent.trim().toUpperCase();

//     if (ordenate === 'desc') {
//       return valorB.localeCompare(valorA);
//     } else {
//       return valorA.localeCompare(valorB);
//     }
//   });

//   linhas.forEach(function (linha) {
//     tabela.appendChild(linha);
//   });
// }



function ordenar(table, nomeColuna, ordenate = 'asc', caracteresIgnorados = ['R$', ',', '-', '.', ';', ':', '/', '*', '+', '%', '$', '@', '!', '(', ')', ' ']) {

  nomeColuna = nomeColuna.replace(/\s/g, '');

  var tabela = document.getElementById(table);
  var indiceColuna = -1;

  if (tabela) {
    var cabecalho = tabela.getElementsByTagName('th');

    for (var i = 0; i < cabecalho.length; i++) {
      if (cabecalho[i].innerHTML.toUpperCase() === nomeColuna.toUpperCase()) {
        indiceColuna = i;
        break;
      }
    }
  }

  var linhas = [].slice.call(tabela.rows, 1);

  linhas.sort(function (a, b) {
    var valorA = removerCaracteres(a.cells[indiceColuna].textContent.trim().toUpperCase(), caracteresIgnorados);
    var valorB = removerCaracteres(b.cells[indiceColuna].textContent.trim().toUpperCase(), caracteresIgnorados);

    valorA = parseFloat(valorA) || 0;
    valorB = parseFloat(valorB) || 0;

    if (ordenate === 'desc') {
      return valorB - valorA;
    } else {
      return valorA - valorB;
    }
  });

  linhas.forEach(function (linha) {
    tabela.appendChild(linha);
  });
}

function removerCaracteres(valor, caracteres) {
  for (var i = 0; i < caracteres.length; i++) {
    valor = valor.replace(new RegExp(escapeRegExp(caracteres[i]), 'g'), '');
  }
  return valor;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}






function ordenar2(table, coluna) {

  coluna = coluna -1;

  var tabela = document.getElementById(table);
  var linhas = [].slice.call(tabela.rows, 1); 

  linhas.sort(function (a, b) {
    var nomeA = a.cells[coluna].textContent.trim().toUpperCase();
    var nomeB = b.cells[coluna].textContent.trim().toUpperCase();
    return nomeA.localeCompare(nomeB);
  });

  linhas.forEach(function (linha) {
    tabela.appendChild(linha);
  });
}



function scroll_to(delay, elementId, position) {
  delay = delay * 1000;
  
  setTimeout(function () {
      var element = document.getElementById(elementId);

      if (element) {
          var scrollOptions = {};

          if (position === 'bottom') {
              scrollOptions = {
                  top: element.scrollHeight,
                  behavior: 'smooth'
              };
          } else if (position === 'top') {
              scrollOptions = {
                  top: 0,
                  behavior: 'smooth'
              };
          }

          element.scrollTo(scrollOptions);
      }
  }, delay);
}

function scroll_out(delay, elementoId, posicao) {
  delay = delay * 1000;

  setTimeout(function() {
    var elemento = document.getElementById(elementoId);

    if (elemento) {
      var offsetTop = elemento.offsetTop;

      if (posicao === 'bottom') {
        offsetTop += elemento.clientHeight - window.innerHeight;
      }

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      document.addEventListener('click', function(e) {
        if (!elemento.contains(e.target)) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      });
    }
  }, delay);
}

function width(id1, id2){
  var id1 = document.getElementById(id1);
  var widthItem1 = window.getComputedStyle(id1).width;
  document.getElementById(id2).style.width = widthItem1;
}