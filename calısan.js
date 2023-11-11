document.getElementById("buton").addEventListener("click",Calısangetır);
function Calısangetır(){
    const xhr=new XMLHttpRequest;
    xhr.open("GET","calısan.json",true);

   xhr.onload=function(){
    let tablo =document.getElementById("calisan");
   if(this.status==200){


    const calisanlar=JSON.parse(this.responseText);
    calisanlar.forEach(function(calisan){
        tablo.innerHTML += `
        <tr>
        <td>${calisan.isim}</td>
        <td>${calisan.departman}</td>
        <td>${calisan.maaş}</td>
        </tr>
        `
    })
   }
    

   }



    xhr.send();
}