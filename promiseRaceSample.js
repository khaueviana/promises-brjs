// Promise.race([promise1, promise2, ...]): 
// também retorna uma promise pendente, mas ela será resolvida assim que qualquer uma das 
// promises enviadas seja resolvida, ou seja, assim que a primeira delas resolver. 
// Mas, se uma delas falhar antes de qualquer uma ser resolvida, então essa promise será rejeitada.
// Já neste exemplo, a função em then será evocada assim que a primeira promise resolver e as
// demais serão ignoradas. Note que as demais promises não serão interrompidas, ou seja,
// suas instruções continuarão normalmente, mas o then será chamado uma única vez, e será apenas para a primeira que resolver. 
// Enquanto que o catch neste caso, será chamado caso uma promise falhe antes de qualquer outra promise resolver.

Promise.race([  
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve('A');
    }, 500);
  }),
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve('B');
    }, 300);
  }),
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve('C');
    }, 500);
  }),
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve('D');
    }, 5000);
  }),
  new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve('E');
    }, 500);
  })
]).then(result=>{
  console.info(result);
}).catch(reason=>{
  console.warn('Failed: ', reason);
});