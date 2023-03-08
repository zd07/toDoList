var i;
function newList()
{
    var x=document.getElementById('myInput').value ;
    document.getElementById("myInput").value = "";
    y=document.getElementById('demo');
    var div1=document.createElement('div');
    var div2=document.createElement('div');
    var div3=document.createElement('div');
    var para;
    if (x === '') {
        alert("Please write!!!");
      } else {
        para=document.createTextNode(x);
      }
    div2.appendChild(para);
    div3.innerHTML="\u00D7";
    div1.appendChild(div2);
    div1.appendChild(div3);
    y.appendChild(div1);
    div1.classList.add('div1');
    div2.classList.add('div2');
    div3.classList.add('div3');

    div3.addEventListener('click',delete1);
    function delete1()
    {
      div1.style.display='none';
    }
   

 }
 