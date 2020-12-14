console.log('correcto');

document.querySelector('#boton').addEventListener('click',traerDatos());
function traerDatos(){

    console.log('dentro de la función');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','archivo.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

           // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);
            let res = document.querySelector('#rta');
            res.innerHTML = '';
            for(let item of datos){
               // console.log(item);
               res.innerHTML += `
               <tr>
               <td>${item.id}</td>
               <td>${item.name}</td>
               </tr>
               `
            }
            
        }
    }
}