       var number = document.getElementById('number3');
        var plus = document.getElementById('plus');
        var mine = document.getElementById('mine');
        var reset = document.getElementById('reset');
        var submit = document.getElementById("submit")
        let count = 0;
        var mult = document.querySelector('h1');
        var defaultPrice = 100;
        
        var pTotal = document.getElementById('pTotal');
        var pUnit = document.getElementById('pUnit');
        var quantity = document.getElementById('quantity');
        var line1 = document.getElementById('line1');
        var prev = document.getElementById('prev');
        var next = document.getElementById('next');
        var companyName = document.getElementById('companyName');
        var productName = document.getElementById('productName');
        var guaranty = document.getElementById('guaranty');
        var contactCompany = document.getElementById('contactCompany');
        var websiteCompany = document.getElementById('websiteCompany');
        var li = document.querySelectorAll('li')
        var items = li.length;




        mine.addEventListener('click', () =>{
            count--;
         number.innerHTML=count;

         
        })

        plus.addEventListener('click', () =>{
            count++;
         number.innerHTML=count;
         
        });

        reset.addEventListener('click', () =>{
            number.innerHTML=0;
            mult.innerHTML=0;
            quantity.innerHTML=0;
            pTotal.innerHTML=0;
        })

       

        submit.addEventListener("click", () =>{
          pUnit.innerHTML=defaultPrice;
          quantity.innerHTML=count;
          pTotal.innerHTML = defaultPrice * count;
          if(count<1){
            quantity.innerHTML=0;
          pTotal.innerHTML = 0;

          }
        })

        line1.style.left='0px'

     function prevCar(){
              if( line1.style.left=="0px"){
                line1.style.left="-2000px"
              }
              else if(line1.style.left=='-2000px'){
              line1.style.left='-1500px'
              }
              else if(line1.style.left=='-2000px'){
              line1.style.left='-1500px'
              }
              else if(line1.style.left=='-1500px'){
              line1.style.left='-1000px'
              }
              else if(line1.style.left=='-1000px'){
              line1.style.left='-500px'
              }
              else if(line1.style.left=='-500px'){
              line1.style.left='0px'
              }
        }

        function prevCar(){
              if( line1.style.left=="0px"){
                line1.style.left="-2000px"
              }
              else if(line1.style.left=='-2000px'){
              line1.style.left='-1500px'
              }
              else if(line1.style.left=='-2000px'){
              line1.style.left='-1500px'
              }
              else if(line1.style.left=='-1500px'){
              line1.style.left='-1000px'
              }
              else if(line1.style.left=='-1000px'){
              line1.style.left='-500px'
              }
              else if(line1.style.left=='-500px'){
              line1.style.left='0px'
              }
        }

        function prevCar(){
              if( line1.style.left=="0px"){
                line1.style.left="-2000px"
                companyName.innerHTML='YAMAHA';
                productName.innerHTML='SANILI';
                guaranty.innerHTML="12 months";
                contactCompany.innerHTML='+257 65 526 631';
                websiteCompany.innerHTML='www.yamaha.com';
              }
              
              else if(line1.style.left=='-2000px'){
              line1.style.left='-1500px'
              companyName.innerHTML='HONDA';
                productName.innerHTML='Kayuki';
                guaranty.innerHTML="14 months";
                contactCompany.innerHTML='+21 1214 2578';
                websiteCompany.innerHTML='www.honda.com';
              }
              else if(line1.style.left=='-1500px'){
              line1.style.left='-1000px'
              companyName.innerHTML='Yamamoto';

              productName.innerHTML='Jeho Kuki ';
                guaranty.innerHTML="12 months";
                contactCompany.innerHTML='+87 2587 3654 12';
                websiteCompany.innerHTML='www.yamamoto.com';
              }
              else if(line1.style.left=='-1000px'){
              line1.style.left='-500px'
              companyName.innerHTML='Dushi';
                productName.innerHTML='DushiMoto';
                guaranty.innerHTML="17 months";
                contactCompany.innerHTML='+257 67 457 831';
                websiteCompany.innerHTML='www.dushi.com';
              }
              else if(line1.style.left=='-500px'){
              line1.style.left='0px'
              companyName.innerHTML='TOYOTA';
                productName.innerHTML='TVS Mugore Mwiza';
                guaranty.innerHTML="13 months";
                contactCompany.innerHTML='+257 71 496 005';
                websiteCompany.innerHTML='www.toyota.com';
              }
        }

        function nextCar(){
              if( line1.style.left=="-2000px"){
                line1.style.left="0px"
                companyName.innerHTML='TOYOTA';
                productName.innerHTML='TVS Mugore Mwiza';
                guaranty.innerHTML="13 months";
                contactCompany.innerHTML='+257 71 496 005';
                websiteCompany.innerHTML='www.toyota.com';
              }
              else if(line1.style.left=='0px'){
              line1.style.left='-500px'
              companyName.innerHTML='Dushi';
                productName.innerHTML='DushiMoto';
                guaranty.innerHTML="17 months";
                contactCompany.innerHTML='+257 67 457 831';
                websiteCompany.innerHTML='www.dushi.com';
              }
              else if(line1.style.left=='-500px'){
              line1.style.left='-1000px';
              companyName.innerHTML='Yamamoto';
                productName.innerHTML='Jeho Kuki ';
                guaranty.innerHTML="12 months";
                contactCompany.innerHTML='+87 2587 3654 12';
                websiteCompany.innerHTML='www.yamamoto.com';
              }
              else if(line1.style.left=='-1000px'){
              line1.style.left='-1500px'
              companyName.innerHTML='HONDA';
                productName.innerHTML='Kayuki';
                guaranty.innerHTML="14 months";
                contactCompany.innerHTML='+21 1214 2578';
                websiteCompany.innerHTML='www.honda.com';
              }
              else if(line1.style.left=='-1500px'){
              line1.style.left='-2000px'
              companyName.innerHTML='YAMAHA';
                productName.innerHTML='SANILI';
                guaranty.innerHTML="12 months";
                contactCompany.innerHTML='+257 65 526 631';
                websiteCompany.innerHTML='www.yamaha.com';
              }
             
              
        }
        

        prev.addEventListener("click", prevCar);
        next.addEventListener('click', nextCar)
     
        function change(){
            
            
              
        }

        change()

      setTimeout(nextCar, 500)
