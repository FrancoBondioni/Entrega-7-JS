var planes = [
    ['Plan 001',150000,30,0.15],
    ['Plan 002',300000,180,0.10],
    ['Plan 003',485000,60,0.23],
];
var interes=[];
function cargar(v1, interes){
    for(var i=0;i<v1.length;i++){
        interes[i]= (v1[i][1]*v1[i][2]*v1[i][3])/100;
    }
}
cargar(planes,interes);
    alert(`Para el `+planes[0][0]+` el interés generado va ser de $` +interes[0]+"."+"\n"+
    "\n"+`Para el `+planes[1][0]+` el interés generado va ser de $`+interes[1]+"."+"\n"+
    "\n"+`Para el `+planes[2][0]+` el interés generado va ser de $`+interes[2]+".")
