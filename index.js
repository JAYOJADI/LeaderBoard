document.addEventListener('DOMContentLoaded', getUser);


function getUser(){
    fetch('points.json')
        .then(function(res){
             return res.json();
        })
        .then(function(datas){
           console.log(datas);
           let output ='';
           datas.forEach(function(data, index){
               output +=
               `
            <tr>
            <th>${index}</th>
            <td>${data.fullname}</td>
            <td>${data.slackname}</td>
            <td>${data.email}</td> 
            <td>${data.totalpoints}</td> 
            </tr>`
            document.getElementById('tables').innerHTML = output;
           })

           
        })
        .catch(function(err){
            console.log(err);
        })
    
}

document.getElementById('buttons').addEventListener('click', getSort);
function getSort(){
    fetch()
        .then(function(res){
             return res.json();
        })
        .then(function(datas){
           console.log(datas);
           let output ='';
           datas.forEach(function(data, index){
               output +=
               `
            <tr>
            <th>${index}</th>
            <td>${data.fullname}</td>
            <td>${data.slackname}</td>
            <td>${data.email}</td> 
            <td>${data.totalpoints}</td> 
            </tr>`
            document.getElementById('tables').innerHTML = output;
           })

           
        })
        .catch(function(err){
            console.log(err);
        })
    
}