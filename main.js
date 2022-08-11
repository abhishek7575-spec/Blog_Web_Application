const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

xhr.open('GET', url)

xhr.onreadystatechange =() => {
    if(xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText)
        console.log(response)

     
    let template = ''
    for(let i=0; i<response.length; i++) {
         template+=`        
         <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
         <div class="card-body">
           <h4 class="card-title">${response[i].title}</h4>
           <p class="card-text">${response[i].body}</p>
         </div>
       </div>
       `
    }
    document.querySelector('#mycontainer').innerHTML = template
}
};
xhr.send()