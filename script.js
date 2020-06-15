"use strict"


function calculaScroll(valor){

    let calculo = $($(".contenedor")).width()*valor;
 
    return calculo;
    
 
}


for( let i=0; i<$(".imagen").length;i++ ){


    $($(".imagen")[i]).on( {

        click:function(){

            $($(".contenedor")).scrollLeft(calculaScroll(i));

        }

    } )

}