//async é quando algo está acontecendo mas
//a gente não quer esperar que isso acabe, pra poder continuar alguma tarefa
//pra isso utilizamos o async, para fazer 1 tarefa, esperar 1 resposta e fazer outras
//sync é quando vc espera algo acontecer pra ir para o proximo


//promises são 1 jeito mais elegante de lidar com async


//CALLBACKS

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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
//a ideia é que o callback como parametro,
//so vai rodar depois do push(pq ta embaixo dele)
//entao primeiro o push é feito, e so depois
//o callback vem


createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
