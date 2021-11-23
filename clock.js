let fullName = prompt("Lütfen İsminizi Giriniz")
let myName = document.querySelector('#myName')
myName.innerHTML=`${fullName}`


    setInterval(odev,500);
function odev() {   
 var now = new Date();
 var saat = now.getHours();
 var dakika = now.getMinutes();
 var saniye = now.getSeconds(); 
 var gun = now.getDate(); 
 var aylar =["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]
 var ay = [now.getMonth()];
 var yil = now.getFullYear();
 var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
 var gi =gunler[now.getDay()];

 saat = (saat<10)? "0"+saat:saat;
 dakika = (dakika<10)? "0"+dakika:dakika;
 saniye = (saniye<10)? "0"+saniye:saniye;

var zaman = saat+":"+dakika+":"+saniye+" "+gun+"/"+ay+"/"+yil+"/"+gi;;
var saaat= document.getElementById("myClock").innerHTML=zaman;

}

