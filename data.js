fetch("http://localhost:8083/api/admin/findAllEnquiry")
.then(function(response){
return response.json();
})
.then(function(services){
let placeholder = document.querySelector("#data-output");
let out ="";
for (service of services){
out+=`
<li><a href="javascript:void(0);"><i class="fas fa-angle-right"></i> ${service.name}</a>
</li>
`;
}
placeholder.innerHTML = out;
})