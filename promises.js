//PROMISES
//é usado para processamento async. 
//Uma promise representa um valor que pode estar disponível agora, 
//no futuro ou nunca.
//Recebe resolve e reject
//quando queremos resolver uma promise, usamos resolve
//para rejeitar, reject(quando der algo errado)

const posts = [
    { 
  title: 'Post One',
  body: 'This is post one'
    },
    { 
  title: 'Post Two',
  body: 'This is post Two'
    }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      posts.push(post);
        
      const error = false;//para resolve, ver se ta td certo
        if(!error) {
          resolve();//se n houver erros, resolve
        } else{
          reject('Algo errado');
        }
    }, 2000);
  });
}

// createPost({ title: 'Post Three', body: 'This is post three' });
//   .then(getPosts);
//   .catch(err => console.log(err));;
//em resumo, se o createPost tem o conteudo, chama o .then para criar

//promises all se tiver mtas promises

const promise1 = new Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

Promise.all([promise1, promise2, promise3]).then(((values) => console.log(values)));//pega 1 array de promises
