const fs=require('fs');
const crearArchivoTabla=async (base)=>{

try {
   
    let salida='';

    for (let i = 1; i < 11; i++) {
       
        let num2=base*i;
        salida +=(`${base} x ${i} = ${num2}
        `);
        
    }
    
    console.log(salida);
     fs.writeFileSync(`tabla-${base}.txt`,`
    ${salida}`);

    return 'creado exitosamente'
       
    


} catch (error) {
    throw error;
}




}
module.exports= {
    crearArchivo: crearArchivoTabla
}