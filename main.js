const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

xhr.open('GET', url)
let data, page = 1;
xhr.onreadystatechange =() => {
    if(xhr.status === 200 && xhr.readyState === 4) {
        data = JSON.parse(xhr.responseText)
        // console.log(response)
updateContent();
     
    // let template = ''
    // for(let i=0; i<response.length; i++) {
    //      template+=`        
    //      <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
    //      <div class="card-body">
    //        <h4 class="card-title">${response[i].title}</h4>
    //        <p class="card-text">${response[i].body}</p>
    //      </div>
    //    </div>
    //    `
    // }
    // document.querySelector('#mycontainer').innerHTML = template
}
};
xhr.send()

let pagination = new tui.Pagination("pagination", {
    totalItems: 100,
  });
  
  pagination.on("beforeMove", function (eventData) {
    page = eventData.page;
    updateContent();
  });
  
  function updateContent() {
    let output = "";
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      output += `
      <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
      <div class="card-body">
        <h4 class="card-title">${data[i].title}</h4>
        <p class="card-text">${data[i].body}</p>
      </div>
    </div>
         `;
    }
    document.querySelector("#mycontainer").innerHTML = output;
  }

document.getElementById("submitbtn").addEventListener("click", (e)=>{
   e.preventDefault()
    const val=`       
    <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
    <div class="card-body">
      <h4 class="card-title">${document.getElementById("titlevalue").value}</h4>
      <p class="card-text">${document.getElementById("textarea").value}</p>
    </div>
  </div>`
  document.querySelector('#mycontainer').innerHTML += val
})
