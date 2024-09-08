




fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => posts.forEach(data => 
{
 var apiContent=document.getElementById("content");

  var post=document.createElement('div');
  post.classList.add('post', 'col-md-6' )



  ;
   post.innerHTML=`

   <h2>${data.title}</h2>
   <p>${data.body}</p>
   `
   ;
   apiContent.appendChild(post);

   
   
     
    
})
);