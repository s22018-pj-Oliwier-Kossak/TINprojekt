function funtionChoose(){
    var selectedValue = document.getElementById("choose").value;
    var creatboxKontakt1 = document.getElementById('boxKontakt1')
    var deleteboxKontakt1 =document.getElementById('boxKontakt1').innerHTML = '';
    if(selectedValue=="Gdynia"){
        for(var i=0; i<1; i++){
            var row =`  <p>Gdynia - Trójmiasto Burger <br>
        ul. Miętowa 43 <br>
        81-368 Gdynia <br>
        321 321 432<br>
          Gdynia</p>`
          creatboxKontakt1 .innerHTML +=row;
        }
        deleteboxKontakt1;
       
    }
    if(selectedValue=="Gdańsk"){
        for(var i=0; i<1; i++){
            var row =`  <p>Gdańsk - Trójmiasto Burger <br>
            ul. Grunwladzka 231 <br>
            80-851 Gdańsk <br>
            123 536 421<br>
              Gdańsk</p>`
        creatboxKontakt1 .innerHTML +=row;
        }
        deleteboxKontakt1;
    }
}
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});
