function increase (a,b) {

  if (a === b+1) {
    return;
  }
   else {console.log (a);
  increase (a + 1, b);}

}

increase (1,5);

function decrease (a,b) {
  if (a >= b) {
    console.log (a);
    decrease (a-1, b);
  }

  else {
    return;
  }
}

decrease (5,1);


let div = document.querySelector('div');

function clockNow () {

  let time = new Date();
  let h = time.getHours().toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();
  
  if (h.length < 2) {
    h = '0' + h;
  }

  if (m.length < 2) {
    m = '0' + m;
  }

  if (s.length < 2) {
    s = '0' + s;
  }

  let longForm = h + ':' + m + ':' + s; 

  div.innerHTML = longForm; 




  div.addEventListener ('click', (event) => {
    if (event.target.tagName === 'DIV') {
      

      if (h.length < 2) {
        h = '0' + h;
      }
    
      if (m.length < 2) {
        m = '0' + m;
      }

      let shotForm = h + ':' + m;

        div.innerHTML = shotForm;    
        
    }
  
    
  });

}

setInterval(clockNow, 1000);

clockNow();



