var planes = [
    ['Plan 001',150000,30,0.15],
    ['Plan 002',300000,180,0.10],
    ['Plan 003',485000,60,0.23],
];

const intereses=[0,0,0];
for(var i=0;i<planes.length;i++){
    intereses[i]=(planes[i][1]*planes[i][2]*planes[i][3])/100;

}
    alert(`El `+planes[0][0]+`: con un capital de `+planes[0][1]+` en un plazo de `+planes[0][2]+` dias, con una tasa del `+(100*planes[0][3])+`%. El interés generado va ser de $` +intereses[0]+"."+"\n"+
    "\n"+`El `+planes[1][0]+`: con un capital de `+planes[1][1]+` en un plazo de `+planes[1][2]+` dias, con una tasa del `+(100*planes[1][3])+`%. El interés generado va ser de $`+intereses[1]+"."+"\n"+
    "\n"+`El `+planes[2][0]+`: con un capital de `+planes[2][1]+` en un plazo de `+planes[2][2]+` dias con una tasa del `+(100*planes[2][3])+`%. El interés generado va ser de $`+intereses[2]+".")
