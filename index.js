

let url = "https://kontests.net/api/v1/all";
let response = fetch(url)
response.then((value) => {
    return value.json();
}).then((value) => {
    ihtml=""
    for(keys in value){
        
        ihtml+= `
            <div class="card m-2 shadow p-3 mb-3 bg-white rounded" style="width: 20rem">
                <div class="card-body">
                    <h5 class="card-title"><b>Project Name :</b> <br>${value[keys].name}</h5>
                    <p class="card-text"><b>Start On:</b> <br>${value[keys].start_time}</p>
                    <p class="card-text"><b>End On:</b> <br>${value[keys].end_time}</p>
                    <p><a href="${value[keys].url}" class="btn btn-primary">Enter Here</a></p>
                </div>
            </div> `
    }
    
    cardContainer.innerHTML=ihtml
})


