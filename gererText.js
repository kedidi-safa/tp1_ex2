function updateFirst(event) {
    var p = document.querySelector("p");
  
    if (p) {
      p.style.color = event.target.value;
    }
  }
  function changeColor(){
    var x=document.getElementById('test').value;
    var y=document.querySelector('p');
    y.style.color=x;
   }

   document.querySelector("#test")
   .addEventListener("input",changeColor);
   document.querySelector("#test")
   .addEventListener("change",changeColor);  
  
   function changeSize(){
   var x=document.getElementById('test1').value;
   var y=document.querySelector('p');
   y.style.fontSize=x+'px';
   }
   document.querySelector("#test1")
   .addEventListener("click",changeSize);
   function police(){
       var x=document.getElementById('test2').value;
   var y=document.querySelector('p');
   y.style.fontFamily=x;  

   }
   document.querySelector("#test2")
   .addEventListener("click",police);
