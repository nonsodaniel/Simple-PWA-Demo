


// var jobs = []
const BASE_URL = "https://randomuser.me/api/1.2/?results=10";
const userList = document.querySelector(".jobs");
// new Date('2010-06-06T13:49:48Z').toDateString()

const fetchUsers = () => {
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data && data.results.length > 0) {
        let html = "";
        data.results.map((user) => {
          let {
            id: { value },
            name: { title, first, last },
            email,
            phone,
            dob: { age },
            location: { street, city, state },
            picture: { medium, large },
            nat,
          } = user;

          html += `
                <div class="job" id=${value}>
                <div class="logo-wrap">
                    
                </div>
                <h4 class="name">${title} ${first} ${last}</h4>
                <div class="contact">
                  <div class="email-wrap">
                    <div class="title"><span><i class="fas fa-envelope-square"></i></span></div>
                    <div class="email desc">${email}</div>
                </div>
                <div class="phone-wrap"> 
                  <div class="title"><span><i class="fas fa-phone"></i></span></div>
                  <div class="phone desc">${phone}</div>
              </div>
              <div class="dob-wrap">
                <div class="title">Age</div>
                <div class="phone desc">${age}</div>
            </div>
              <div class="location-wrap">
                <div class="title"><span><i class="fas fa-map-marker"></i></span></div>
                <div class="phone desc">${street}, ${city}, ${state}.</div>
            </div>
            <div class="nat-wrap">
              <div class="title"><span><i class="fas fa-flag"></i></span></div>
              <div class="phone desc">${nat}</div>
          </div>
                </div>
             
          </div>
                `;
        });
        console.log(html);
        userList.innerHTML = html;
      }
    });
};

fetchUsers();



