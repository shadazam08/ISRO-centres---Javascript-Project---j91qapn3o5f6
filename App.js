var url = "https://isro.vercel.app/api/centres";
function getData(){
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        let length = data.centres.length;
        var temp = "";
        for(i=0; i<length; i++){
            temp += "<thead>"
            temp += "<tr>";
            temp += "<th>CENTER</th>";
            temp += "<th>PLACE</th>";
            temp += "<th>STATE</th>";
            temp += "</tr>";
            temp += "</thead>";
            temp += "<tbody>";
            temp += "<tr>";
            temp += "<td>"+data.centres[i].name+"</td>";
            temp += "<td>"+data.centres[i].Place+"</td>";
            temp += "<td>"+data.centres[i].State+"</td>";
            temp += "</tr>";
            temp += "</tbody>"
        }
        document.getElementById("fetchData").innerHTML = temp;
    });
}

function mySearch() {
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        const name = data.centres.filter(member => member.name === `${document.getElementById("query").value}`);
        const place = data.centres.filter(member => member.Place === `${document.getElementById("query").value}`);
        const center = data.centres.filter(member => member.State === `${document.getElementById("query").value}`);
        
        console.log(name);
        var temp = "";
        name.forEach(element => {
            temp += "<thead>"
            temp += "<tr>";
            temp += "<th>CENTER</th>";
            temp += "<th>PLACE</th>";
            temp += "<th>STATE</th>";
            temp += "</tr>";
            temp += "</thead>";
            temp += "<tbody>";
            temp += "<tr>";
            temp += "<td>"+element.name +"</td>";
            temp += "<td>"+element.Place+"</td>";
            temp += "<td>"+element.State+"</td>";
            temp += "</tr>";
            temp += "</tbody>";
        });
        document.getElementById("fetchData").innerHTML = temp;
    });
}
function myCity() {
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        const developers = data.centres.filter(member => member.Place === `${document.getElementById("query").value}`);
        
        console.log(developers);
        var temp = "";
        developers.forEach(element => {
            temp += "<thead>"
            temp += "<tr>";
            temp += "<th>CENTER</th>";
            temp += "<th>PLACE</th>";
            temp += "<th>STATE</th>";
            temp += "</tr>";
            temp += "</thead>";
            temp += "<tbody>";
            temp += "<tr>";
            temp += "<td>"+element.name +"</td>";
            temp += "<td>"+element.Place+"</td>";
            temp += "<td>"+element.State+"</td>";
            temp += "</tr>";
            temp += "</tbody>";
        });
        document.getElementById("fetchData").innerHTML = temp;
    });
}
function myState() {
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        const developers = data.centres.filter(member => member.State === `${document.getElementById("query").value}`);
        
        console.log(developers);
        var temp = "";
        developers.forEach(element => {
            temp += "<thead>"
            temp += "<tr>";
            temp += "<th>CENTER</th>";
            temp += "<th>PLACE</th>";
            temp += "<th>STATE</th>";
            temp += "</tr>";
            temp += "</thead>";
            temp += "<tbody>";
            temp += "<tr>";
            temp += "<td>"+element.name +"</td>";
            temp += "<td>"+element.Place+"</td>";
            temp += "<td>"+element.State+"</td>";
            temp += "</tr>";
            temp += "</tbody>";
        });
        document.getElementById("fetchData").innerHTML = temp;
    });
}
function myCenter() {
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        const developers = data.centres.filter(member => member.name === `${document.getElementById("query").value}`);
        
        console.log(developers);
        var temp = "";
        developers.forEach(element => {
            temp += "<thead>"
            temp += "<tr>";
            temp += "<th>CENTER</th>";
            temp += "<th>PLACE</th>";
            temp += "<th>STATE</th>";
            temp += "</tr>";
            temp += "</thead>";
            temp += "<tbody>";
            temp += "<tr>";
            temp += "<td>"+element.name +"</td>";
            temp += "<td>"+element.Place+"</td>";
            temp += "<td>"+element.State+"</td>";
            temp += "</tr>";
            temp += "</tbody>";
        });
        document.getElementById("fetchData").innerHTML = temp;
    });
}
getData();

