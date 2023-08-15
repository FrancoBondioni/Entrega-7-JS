var ingreso=[1500, 2500, 84683,135353,1535,4343354,435453,78351,1878,48483,35483,3843];
var egreso=[1500,2500,1155,1533,5434,5434543,4543,7816,95634,9433,53133,348133];
/* ///PARA CARGA MANUAL
var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre", "Noviembre","Diciembre"];
var ingreso=[];
var egreso=[];
function cargaringresos(v1,v2,meses){
    var ing;
    var egre;
    for(var i=0;i<meses.length;i++){
    ing= prompt("El ingreso de "+meses[i]+" fue de: ");
    v1[i]=ing;
    egre= prompt("El egreso de "+meses[i]+" fue de: ");
    v2[i]=egre;
    }
}
cargaringresos(ingreso,egreso,meses);

*/

function recorrer(v1, v2){
    var totalingreso=0;
    var totalegreso=0;
    for(var i=0;i<v1.length; i++ ){
        totalingreso=totalingreso+v1[i];
    }
    for(var i=0;i<v2.length; i++ ){
        totalegreso=totalegreso+v2[i];
    }
    return totalingreso-totalegreso;
}
var diferencia=recorrer(ingreso,egreso);

function retorno(diferencia){
    if(diferencia>0){
        return 1;
    }
    if(diferencia===0){
        return 0;
    }
    else{
        return -1;
    }
}
alert(retorno(diferencia));


