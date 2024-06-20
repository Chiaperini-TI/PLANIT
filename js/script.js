// textReplace('id', 'texto novo', delay)
function textReplace(elementId, newText, time = 0) {
  var element = document.getElementById(elementId);
  time = time * 1000;

  setTimeout(function () {
    element.innerHTML = newText;
  }, time);
}

// textReplace2('id', 'texto atual', 'texto novo', delay)
function textReplace2(element, item1, item2, time = 0) {
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

// replaceClass(['classeTarget'], ['classe inicial'], ['classe final'], [delay])
function replaceClass(targetClass, firstClasses, secondClasses, delay = 0) {
  var elements = document.getElementsByClassName(targetClass);
  delay = delay * 1000;
  
  setTimeout(function () {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var classNames = element.className.split(' ');

      for (var j = 0; j < classNames.length; j++) {
        var index = firstClasses.indexOf(classNames[j]);
        if (index !== -1) {
          classNames[j] = secondClasses[index];
        }
      }
      element.className = classNames.join(' ');
    }
  }, delay);
}

// replaceId(['id'], ['classe inicial'], ['classe final'], [delay])
function replaceId(targetIds, firstClasses, secondClasses, delays = [0]) {
  if (!Array.isArray(targetIds) || !Array.isArray(delays)) {
    console.error('Os parâmetros targetIds e delays devem ser arrays.');
    return;
  }

  targetIds.forEach(function(targetId, index) {
    var element = document.getElementById(targetId);
    var delay = (delays[index] || 0) * 1000;

    setTimeout(function() {
      if (element) {
        var classNames = element.className.split(' ');

        for (var j = 0; j < classNames.length; j++) {
          var classIndex = firstClasses.indexOf(classNames[j]);
          if (classIndex !== -1) {
            classNames[j] = secondClasses[classIndex];
          }
        }

        element.className = classNames.join(' ');
      }
    }, delay);
  });
}

// replaceId2(['id'], ['classe inicial'], ['classe final'], [delay]) essa função suporta clique duplo no elemento
function replaceId2(elementIds, classList1, classList2, times = [0]) {
  if (!Array.isArray(elementIds) || !Array.isArray(times)) {
    console.error('Os parâmetros elementIds e times devem ser arrays.');
    return;
  }

  if (!Array.isArray(classList1)) {
    classList1 = [classList1];
  }

  if (!Array.isArray(classList2)) {
    classList2 = [classList2];
  }

  elementIds.forEach(function(elementId, index) {
    const time = (times[index] || 0) * 1000;
    const element = document.getElementById(elementId);

    if (element) {
      setTimeout(() => {
        const hasClass1 = classList1[index].split(' ').every(className => element.classList.contains(className));

        if (hasClass1) {
          element.classList.remove(...classList1[index].split(' '));
          element.classList.add(...classList2[index].split(' '));
        } else {
          element.classList.remove(...classList2[index].split(' '));
          element.classList.add(...classList1[index].split(' '));
        }
      }, time);
    }
  });
}

// replaceClass2('[classeTarget]', ['classe inicial'], ['classe final'], [delay]) essa função suporta clique duplo no elemento
function replaceClass2(elementClasses, classList1, classList2, times = [0]) {
  if (!Array.isArray(elementClasses) || !Array.isArray(times)) {
    console.error('Os parâmetros elementClasses e times devem ser arrays.');
    return;
  }

  if (!Array.isArray(classList1)) {
    classList1 = [classList1];
  }

  if (!Array.isArray(classList2)) {
    classList2 = [classList2];
  }

  elementClasses.forEach(function(elementClass, index) {
    const time = (times[index] || 0) * 1000;
    const elements = document.getElementsByClassName(elementClass);

    if (elements.length > 0) {
      setTimeout(() => {
        Array.from(elements).forEach(element => {
          const hasClass1 = classList1[index].split(' ').every(className => element.classList.contains(className));

          if (hasClass1) {
            element.classList.remove(...classList1[index].split(' '));
            element.classList.add(...classList2[index].split(' '));
          } else {
            element.classList.remove(...classList2[index].split(' '));
            element.classList.add(...classList1[index].split(' '));
          }
        });
      }, time);
    }
  });
}

// replaceId(['id'], ['classe inicial'], ['classe final'], 2)
function replaceId3(ids, oldClasses, newClasses, time = 1) {
  time = time * 1000;

  for (let i = 0; i < ids.length; i++) {
      let element = document.getElementById(ids[i]);

      if (element) {
          element.classList.replace(oldClasses[i], newClasses[i]);

          setTimeout(function() {
              element.classList.replace(newClasses[i], oldClasses[i]);
          }, time);
      } else {
          console.error(`Element with ID ${ids[i]} not found.`);
      }
  }
}

// addClass('id', 'class', delay)
function addClass(element, item1, time = 0) {
    time = time * 1000;
    element = document.getElementById(element);
    setTimeout(function() {
            element.classList.add(item1);
    }, time);
}

// addClass2('id', 'class', delay) adiciona e depois remove a class 
function addClass2(element, item1, time = 0) {
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

// removeClass2('id', 'class', delay)
function removeClass(element, item2, time = 0) {
    time = time * 1000;
    element = document.getElementById(element);
    setTimeout(function() {
            element.classList.remove(item2);
    }, time);
}

// removeClass2('id', 'class', delay) remove e depois adiciona a class 
function removeClass2(element, item1, time = 0) {
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

// textCopy('id') copia o texto dentro de um elemento com esse id
function textCopy(txt){
const filho = document.getElementById(txt);

    const texto = filho.innerText;
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
};

// textLimit('id', tamanho) limita o texto ao tamanho de caracteres
function textLimit(id, x) {
  var element = document.getElementById(id);

  if (element.textContent.length > x) {
      element.textContent = element.textContent.substring(0, x) + "...";
  }
}

// observeId(['id'], areaDeView pode ser de 0.1 a 10 é opcional ) substitui os elementos id com a classe op-0 para op-1 de acordo com a visualização do user
function observeId(elements, ranger = 0.3) {
  function handleIntersect(entry, observer) {
    entry.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.replace('op-0', 'op-1');
        observer.unobserve(item.target);
      }
    });
  }

  const observers = [];

  elements.forEach((elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      const observer = new IntersectionObserver(handleIntersect, { root: null, threshold: ranger });
      observer.observe(element);
      observers.push(observer);
    } else {
      console.error(`Element with ID '${elementId}' not found.`);
    }
  });

  return observers;
}

// observeReplace(['id'], ['classe inicial'], ['classe final']);
function observeReplace(elements, classes1, classes2) {
  if (elements.length !== classes1.length || elements.length !== classes2.length) {
    console.error('Número de elementos, classes1 e classes2 deve ser o mesmo.');
    return;
  }

  elements.forEach((element, index) => {
    const item = document.getElementById(element);

    if (!item) {
      console.error(`Elemento com ID ${element} não encontrado.`);
      return;
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          item.classList.replace(classes1[index], classes2[index]);
          observer.unobserve(entry.target);
        }
      });
    }

    const elementoObservado = document.getElementById(element);
    const observer = new IntersectionObserver(handleIntersect, { root: null, threshold: 1 });
    observer.observe(elementoObservado);
  });
}


//scrollId(['id'], [tempo do scroll], [delay ao chegar no fim do scroll], [tempo da volta do scroll], [delay antes de executar o scroll inicial]);
function scrollId(elements, times = [30], times2 = [2], times3 = [30], delays = [0]) {
  elements.forEach((element, index) => {
      var minhaDiv = document.getElementById(element);
      var delayMilliseconds = delays[index] * 1000;
      var timeMilliseconds = times[index] * 1000;
      var time2Milliseconds = times2[index] * 1000;
      var time3Milliseconds = times3[index] * 1000;
      var duration = timeMilliseconds;

      setTimeout(function () {
          animate();
      }, delayMilliseconds);

      function animate() {
          var start = minhaDiv.scrollTop;
          var end = minhaDiv.scrollHeight - minhaDiv.clientHeight;
          var startTime = null;

          function scrollAnimation(currentTime) {
              if (!startTime) startTime = currentTime;
              var progress = (currentTime - startTime) / duration;
              progress = Math.min(progress, 1);

              minhaDiv.scrollTop = start + (end - start) * progress;

              if (progress < 1) {
                  requestAnimationFrame(scrollAnimation);
              } else {
                  setTimeout(function () {
                      scrollToTop();
                  }, time2Milliseconds);
              }
          }

          function scrollToTop() {
              var startTime = null;
              var initialScrollTop = minhaDiv.scrollTop;
              var targetScrollTop = 0;
              var scrollDuration = time3Milliseconds;

              function scrollUpAnimation(currentTime) {
                  if (!startTime) startTime = currentTime;
                  var progress = (currentTime - startTime) / scrollDuration;
                  progress = Math.min(progress, 1);

                  minhaDiv.scrollTop = initialScrollTop + (targetScrollTop - initialScrollTop) * progress;

                  if (progress < 1) {
                      requestAnimationFrame(scrollUpAnimation);
                  }
              }

              requestAnimationFrame(scrollUpAnimation);
          }

          requestAnimationFrame(scrollAnimation);
      }
  });
}

//scrollClass(['classe'], [tempo do scroll], [delay ao chegar no fim do scroll], [tempo da volta do scroll], [delay antes de executar o scroll inicial]);
function scrollClass(elements, times = [30], times2 = [2], times3 = [30], delays = [0]) {
  elements.forEach((element, index) => {
      var minhaDivs = document.getElementsByClassName(element);
      var delayMilliseconds = delays[index] * 1000;
      var timeMilliseconds = times[index] * 1000;
      var time2Milliseconds = times2[index] * 1000;
      var time3Milliseconds = times3[index] * 1000;
      var duration = timeMilliseconds;

      setTimeout(function () {
          animate();
      }, delayMilliseconds);

      function animate() {
          Array.from(minhaDivs).forEach(minhaDiv => {
              var start = minhaDiv.scrollTop;
              var end = minhaDiv.scrollHeight - minhaDiv.clientHeight;
              var startTime = null;

              function scrollAnimation(currentTime) {
                  if (!startTime) startTime = currentTime;
                  var progress = (currentTime - startTime) / duration;
                  progress = Math.min(progress, 1);

                  minhaDiv.scrollTop = start + (end - start) * progress;

                  if (progress < 1) {
                      requestAnimationFrame(scrollAnimation);
                  } else {
                      setTimeout(function () {
                          scrollToTop();
                      }, time2Milliseconds);
                  }
              }

              function scrollToTop() {
                  var startTime = null;
                  var initialScrollTop = minhaDiv.scrollTop;
                  var targetScrollTop = 0;
                  var scrollDuration = time3Milliseconds;

                  function scrollUpAnimation(currentTime) {
                      if (!startTime) startTime = currentTime;
                      var progress = (currentTime - startTime) / scrollDuration;
                      progress = Math.min(progress, 1);

                      minhaDiv.scrollTop = initialScrollTop + (targetScrollTop - initialScrollTop) * progress;

                      if (progress < 1) {
                          requestAnimationFrame(scrollUpAnimation);
                      }
                  }

                  requestAnimationFrame(scrollUpAnimation);
              }

              requestAnimationFrame(scrollAnimation);
          });
      }
  });
}



// scrollTo(['id'], ['bottom (ou top)'], [tempo de scroll], [delay antes de executar a função])
function scrollTo(elementIds, positions, directions, durations = [0], delays = [0]) {
  durations = durations.map(duration => duration * 1000);
  delays = delays.map(delay => delay * 1000);

  elementIds.forEach((elementId, index) => {
      var element = document.getElementById(elementId);

      if (element) {
          var start = (directions[index] === 'left') ? element.scrollLeft : element.scrollTop;
          var target;

          if (positions[index] === 'bottom' || positions[index] === 'right') {
              target = (positions[index] === 'bottom') ? element.scrollHeight : element.scrollWidth;
          } else {
              target = 0;
          }

          var startTime;

          setTimeout(function() {
              function scrollStep(timestamp) {
                  if (!startTime) startTime = timestamp;

                  var progress = timestamp - startTime;
                  var percentage = Math.min(progress / durations[index], 1);

                  if (directions[index] === 'left') {
                      element.scrollLeft = start + percentage * (target - start);
                  } else {
                      element.scrollTop = start + percentage * (target - start);
                  }

                  if (percentage < 1) {
                      requestAnimationFrame(scrollStep);
                  }
              }

              requestAnimationFrame(scrollStep);
          }, delays[index]);
      }
  });
}

//  loop(
  //() => addClass('cadentstar1', 'cadentstar'),
  //() => removeClass('cadentstar1', 'cadentstar')
// ,10);
function loop(function1, function2, delay = 0) {
  var i = true;
  var delay = delay * 1000;

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


function customCss(elementoId, prop, cor, delay = 0) {

  delay = delay * 1000;
  
  setTimeout(function() {
    var elemento = document.getElementById(elementoId);

    if (elemento) {
      elemento.style.setProperty(prop, cor);
    } 
  }, delay);
}

// redirectLink('link', delay)
function redirectLink(link, delay = 0){
  delay = delay * 1000;
  setTimeout(function() {
    window.location.href = link;
  }, delay);
}

//<input type="text" id="seach" oninput="searchInput('seach')">
//  <div id="Resultado 1" class="resultado">
//    <p>Resultado 1</p>
//  </div>
function searchInput(idSearch) {
  var termoPesquisa = document.getElementById(idSearch).value.toLowerCase();
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

// orderTable(['id'], ['coluna'], ['asc' ou 'desc']);
function orderTable(tableIds, nomeColunas, ordenate = 'asc', caracteresIgnorados = ['R$', ',', '-', '.', ';', ':', '/', '*', '+', '%', '$', '@', '!', '(', ')', ' ']) {
  for (let k = 0; k < tableIds.length; k++) {
    let Idtable = tableIds[k];
    let nomeColuna = nomeColunas[k];
    nomeColuna = nomeColuna.replace(/\s/g, '');

    var tabela = document.getElementById(Idtable);
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
}

function orderTableString(tableIds, columnIndexes, order = 'asc') {
  tableIds.forEach(function(tableId) {
      var table = document.getElementById(tableId);
      var rows = table.rows;
      var sortedRows = Array.from(rows).slice(1); // Ignora a primeira linha (cabeçalho)

      sortedRows.sort(function(rowA, rowB) {
          var valueA = rowA.cells[columnIndexes[0]].textContent.trim().toUpperCase();
          var valueB = rowB.cells[columnIndexes[0]].textContent.trim().toUpperCase();

          if (order === 'asc') {
              return valueA.localeCompare(valueB);
          } else {
              return valueB.localeCompare(valueA);
          }
      });

      while (table.rows.length > 1) {
          table.deleteRow(1); // Remove todas as linhas exceto o cabeçalho
      }

      sortedRows.forEach(function(sortedRow) {
          table.appendChild(sortedRow); // Adiciona as linhas ordenadas de volta à tabela
      });
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


function countClassesInDiv(containerClass, targetClass) {

  var containerDiv = document.querySelector('.' + containerClass);

  if (!containerDiv) {
      console.error("Div container não encontrada.");
      return 0;
  }

  var elements = containerDiv.getElementsByClassName(targetClass);
  return elements.length;
}

function countClass(className) {
  var elementos = document.getElementsByClassName(className);
  return elementos.length;
}