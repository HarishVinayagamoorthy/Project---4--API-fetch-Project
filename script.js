async function foo(){

  try{


    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const result= await res.json();
     // console.log(result)

    for(var i=0; i< result.length; i++){
        const div = document.createElement("div");
        div.innerHTML=`<div class ="container-fluid" id="body-cards">
        <div class="row row-cols-1 row-cols-md-2 g-4" >
            <div class="col" id="cards">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><b> Name:${result[i]. name}</b></h5>
                
                  <p class="card-text">Email: ${result[i].email}</p>
                  <p class="card-text">Street: ${result[i]. address.street
                  }</p>
                  <p class="card-text">City: ${result[i].address. city}</p>
                </div>
              </div>
            </div>
            </div>`
        document.body.append(div);
    }
  }
  catch(error){
    console.log(error)
  }
  
  }


foo();