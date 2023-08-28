const deleteRestaurant = async () => {
    const params = new URL(document.location).searchParams;
    const id = params.get("id");

    if (id) {
        
        const url = "http://localhost:5000/restaurant/"
      console.log(url+id);
      const restaurant = await fetch(url + id, {
      method:"DELETE",
      moode:"cors",
      cache:"no-cache",
      credentials:"same-origin",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(params)
    }).then((response)=>response.json()).then(() =>{
        alert(`Restaurant id ${id} is not Deleted!`)
        
    })

    }
}
