//Promise.all([promise1, promise2, ...])  
//Este método retorna uma promise pendente que será resolvida quando todas as promises
// passadas por parâmetro (em uma array) forem resolvidas. Ela será rejeitada se qualquer uma das promises rejeitar
// Neste exemplo, a chamada à função em then acontecerá somente quando todas as 
// promises na array tiverem sido resolvidas. A função em catch será chamada caso qualquer uma delas falhe.

Promise.all([  
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