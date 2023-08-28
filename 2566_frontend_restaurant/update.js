
const init = async() => {
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  if(id){
      //get restaurant by ID
      
      try{
      const url = "http://localhost:5000/restaurant/"
      console.log(url+id);
      const restaurant = await fetch(url + id, {
      method:"GET",
      moode:"cors",
      cache:"no-cache",
      credentials:"same-origin",
      headers:{
          "Content-Type":"application/json"
      },
      
  }).then((response)=>response.json())
  console.log(restaurant);
  const id = document.getElementById("id").value;
  console.log(id);
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const img = document.getElementById("img").value;
      }catch (error){
           alert(`Restaurant id ${id} is not found`)
       }
  }else{
    window.location.href = "./index.html";
  }
}
const editResto = async () => {
    console.log("hello");
    const id = document.getElementById("id").value;
  if(id){
      const params = {
          id:id,
          name: document.getElementById("name").value,
          type: document.getElementById("type").value,
          img: document.getElementById("img").value,
      }
      try{
        const url = "http://localhost:5000/restaurant/"
      console.log(url+id);
      const restaurant = await fetch(url + id, {
      method:"PUT",
      moode:"cors",
      cache:"no-cache",
      credentials:"same-origin",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(params)
  }).then((response)=>response.json()).then(() =>{
      alert(`Restaurant id ${id} is not Update!`)
      
  })
      }catch(error){
          console(error)
      }
  }
}
