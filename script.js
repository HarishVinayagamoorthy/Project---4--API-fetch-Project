async function foo(){

  try{


    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const result= await res.json();
     console.log(result)
    
    for(var i=0; i< result.length; i++){
        const div = document.createElement("div" );
        const div1 = document.querySelector(".api-data");
    
        
        div.innerHTML=`       
        <div class="row  row-cols-md-5 g-4" >
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
            </div>`
        document.body.append(div1);
         div1.append(div)
    }
  }
  catch(error){
    console.log(error)
  }
  
  }


foo();