//async é quando algo está acontecendo mas
//a gente não quer esperar que isso acabe, pra poder continuar alguma tarefa
//pra isso utilizamos o async, para fazer 1 tarefa, esperar 1 resposta e fazer outras
//sync é quando vc espera algo acontecer pra ir para o proximo


//promises são 1 jeito mais elegante de lidar com async


//CALLBACKS

// const posts = [
//     { 
//   title: 'Post One',
//   body: 'This is post one'
//     },
//     { 
//   title: 'Post Two',
//   body: 'This is post Two'
//     }
// ];



//FUNÇÃO SEM ASYNC



// function getPosts() {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// getPosts();


// createpost({ title: 'Post Three', body: 'This is post three' });
