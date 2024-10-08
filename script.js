
let ecript= document.querySelector('.encript');
let decript= document.querySelector('.decript');

ecript.addEventListener('click', ()=>{
    let msg=document.querySelector('.input-text').value;
    let key= parseInt(document.querySelector('.nbr-key').value);
   
    if(msg !=='' && key !==''){
        var newmsg='';
        
        for(let i=0; i< msg.length; i++){
           var x= msg.charCodeAt(i)+key;
           newmsg += String.fromCharCode(x); 
        }
        document.querySelector('.new-msg').innerHTML=`
        <h2>Massage Encripted </h2> <br>
        <p>${newmsg} </p>`
    }else{
        alert('Please enter massage and key both')
    }
})

decript.addEventListener('click', ()=>{
    let msg=document.querySelector('.input-text').value;
    let key= parseInt(document.querySelector('.nbr-key').value);
   
    if(msg !=='' && key !==''){
        var newmsg='';
        
        for(let i=0; i< msg.length; i++){
           var x= msg.charCodeAt(i)-key;
           newmsg += String.fromCharCode(x); 
        }
        document.querySelector('.new-msg').innerHTML=`
        <h2>Massage Decripted </h2> <br>
        <p>${newmsg} </p>`
    }else{
        alert('Please enter massage and key both')
    }
})