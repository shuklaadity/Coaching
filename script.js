var service = document.querySelector("#sirviceclick")
var servicediv = document.querySelector(".serviclist")

var email = document.getElementById("email");
var pas = document.getElementById("password");

function showfun() {
  alert("login success full");
}

// create profile funciton 


function createprofile() {
  var table = document.getElementById("myTable");


  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.innerHTML = `
   
  aditya shukla satna mp india best teacher in satna in 500 300

  Satna best coaching teacher 
  satna best coaching teacher in siddarth nagar mp 
  <div class="teach-pro">
    
      <div class="teach-img">
      <img src="pro.jpg" alt="">
      </div>

      <div class="teach-info">
          <div class="teach-info-1">
              <div class="name">
                  <div class="name-1">
                      <h1>Aditya shukla</h1>
                      <p>2 Yrs of Experience</p>
                      <p>B-tech AKS University </p>
                      <p> Satna MP</p>
                      <p>8085894358</p>
                  </div>
                  <div class="name-star">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                  </div>
              </div>
              <div class="teach-info-1-1">

                  <p> Hello I providing Coaching Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis dignissimos vitae voluptates magni eum odit placeat ad eveniet excepturi
                      vel,
                      adipisci reiciendis qui nam doloribus accusamus dolore quis laboriosam eos!</p>

                  <div class="subject">
                      <p>Maith</p>
                      <p>English</p>
                      <p> Physics</p>
                      <p>Chemestry</p>
                  </div>

              </div>

              <a href="#" id="view-pro"> View Profile<i class="fa-solid fa-arrow-right"></i> </a>

          </div>

      </div>
  </div>
   
   `;

  tr.appendChild(td);

  document.getElementById("myTable").appendChild(tr);
}

// call add function 

function add() {

  createprofile();
}


