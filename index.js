




function populate(contact) {
    var html_data = "";
    let id1 = JSON.stringify(contact["data"][0]["id"])
    // let email1=JSON.stringify(contact["data"][0]["email"])
    let fn1 = JSON.stringify(contact["data"][0]["first_name"])
    let ln1 = JSON.stringify(contact["data"][0]["last_name"])
    let v1 = `<button onclick="fetchUsers(1)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    let id2 = JSON.stringify(contact["data"][1]["id"])
    // let email2=JSON.stringify(contact["data"][1]["email"])
    let fn2 = JSON.stringify(contact["data"][1]["first_name"])
    let ln2 = JSON.stringify(contact["data"][1]["last_name"])
    let v2 = `<button onclick="fetchUsers(2)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    let id3 = JSON.stringify(contact["data"][2]["id"])
    //  let email3=JSON.stringify(contact["data"][2]["email"])
    let fn3 = JSON.stringify(contact["data"][2]["first_name"])
    let ln3 = JSON.stringify(contact["data"][2]["last_name"])
    let v3 = `<button onclick="fetchUsers(3)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    let id4 = JSON.stringify(contact["data"][3]["id"])
    //  let email4=JSON.stringify(contact["data"][3]["email"])
    let fn4 = JSON.stringify(contact["data"][3]["first_name"])
    let ln4 = JSON.stringify(contact["data"][3]["last_name"])
    let v4 = `<button onclick="fetchUsers(4)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    let id5 = JSON.stringify(contact["data"][4]["id"])
    let fn5 = JSON.stringify(contact["data"][4]["first_name"])
    let ln5 = JSON.stringify(contact["data"][4]["last_name"])
    let v5 = `<button onclick="fetchUsers(5)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    let id6 = JSON.stringify(contact["data"][5]["id"])
    let fn6 = JSON.stringify(contact["data"][5]["first_name"])
    let ln6 = JSON.stringify(contact["data"][5]["last_name"])
    let v6 = `<button onclick="fetchUsers(6)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`



    html_data = [
        [id1, fn1, ln1, v1],
        [id2, fn2, ln2, v2],
        [id3, fn3, ln3, v3],
        [id4, fn4, ln4, v4],
        [id5, fn5, ln5, v5],
        [id6, fn6, ln6, v6],

    ]

  
    $(document).ready(function () {
        $('#example').DataTable({
            distroy: true,
            data: html_data,
            columns: [
                { title: "ID" },
                { title: "First Name" },
                { title: "Last Name" },
                { title: "Details" }


            ]
        });
    });

    
}



function populate2(contact) {
    console.log("called")
    console.log(contact)
    let html_data = "";
    let id1 = JSON.stringify(contact["data"][0]["id"])
    // let email1=JSON.stringify(contact["data"][0]["email"])
    let fn1 = JSON.stringify(contact["data"][0]["first_name"])
    let ln1 = JSON.stringify(contact["data"][0]["last_name"])
    let v1 = `<button onclick="fetchUsers(7)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    let id2 = JSON.stringify(contact["data"][1]["id"])
    // let email2=JSON.stringify(contact["data"][1]["email"])
    let fn2 = JSON.stringify(contact["data"][1]["first_name"])
    let ln2 = JSON.stringify(contact["data"][1]["last_name"])
    let v2 = `<button onclick="fetchUsers(8)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    let id3 = JSON.stringify(contact["data"][2]["id"])
    //  let email3=JSON.stringify(contact["data"][2]["email"])
    let fn3 = JSON.stringify(contact["data"][2]["first_name"])
    let ln3 = JSON.stringify(contact["data"][2]["last_name"])
    let v3 = `<button onclick="fetchUsers(9)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    let id4 = JSON.stringify(contact["data"][3]["id"])
    //  let email4=JSON.stringify(contact["data"][3]["email"])
    let fn4 = JSON.stringify(contact["data"][3]["first_name"])
    let ln4 = JSON.stringify(contact["data"][3]["last_name"])
    let v4 = `<button onclick="fetchUsers(10)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    let id5 = JSON.stringify(contact["data"][4]["id"])
    let fn5 = JSON.stringify(contact["data"][4]["first_name"])
    let ln5 = JSON.stringify(contact["data"][4]["last_name"])
    let v5 = `<button onclick="fetchUsers(11)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    let id6 = JSON.stringify(contact["data"][5]["id"])
    let fn6 = JSON.stringify(contact["data"][5]["first_name"])
    let ln6 = JSON.stringify(contact["data"][5]["last_name"])
    let v6 = `<button onclick="fetchUsers(12)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>`

    html_data = [
        [id1, fn1, ln1,v1],
        [id2, fn2, ln2,v2],
        [id3, fn3, ln3,v3],
        [id4, fn4, ln4,v4],
        [id5, fn5, ln5,v5],
        [id6, fn6, ln6,v6],

    ]

   
    $(document).ready(function () {
        $('#example2').DataTable({
            data: html_data,
            columns: [
                { title: "ID" },
                { title: "First Name" },
                { title: "Last Name" },
                { title: "Details" }

            ]
        });
    });
}

function fetchAllContacts2() {

    fetch("https://reqres.in/api/users?page=2").then(res => res.json()).then(data2 => populate2(data2));
}

function fetchUsers(id) {

    fetch(`https://reqres.in/api/users?id=${id}`).then(res => res.json()).then(data1 => populateUsers(data1));
}


function populateUsers(input) {

    let email = JSON.stringify(input["data"]["email"])
    let avatar = JSON.stringify(input["data"]["avatar"])
    let fn = JSON.stringify(input["data"]["first_name"])
    let ln = JSON.stringify(input["data"]["last_name"])
    let sprt = JSON.stringify(input["data"]["support"])
    console.log(sprt)

    let user_data = "";
    user_data = `<div class="card" style="width: 28rem;padding-left:80px">
    <img src=${avatar} alt="Girl in a jacket" width="250" height="200">
    <div class="card-body">
     
      <h5>First Name&nbsp;:&nbsp&nbsp; ${fn}<h3>
      <h5>Last  Name &nbsp;:&nbsp; ${ln}<h3>
     <h5>Email&nbsp;&nbsp;:&nbsp;&nbsp;${email}<h5>
    </div>
 </div>`


    res.innerHTML = user_data
}

function fetchAllContacts() {

    fetch("https://reqres.in/api/users?page=1").then(res => res.json()).then(data => populate(data));
}








