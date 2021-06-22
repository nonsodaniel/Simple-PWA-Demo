

const BASE_URL = "https://randomuser.me/api/1.2/?results=15";
const userList = document.querySelector(".users");

const fetchUsers = () => {
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((data) => {
      if (data && data.results.length > 0) {
        let html = "";
        data.results.map((user) => {
          let {
            id: { value },
            name: { title, first, last },
            email,
            phone,
            dob: { date, age },
            location: { street, city, state },
            picture: { medium, large },
            nat,
          } = user;

          html += `
          <div class="user" id=${value}>
          <div class="top">
            <div class="photo-wrap">
              <img src=${medium} alt=${`${first}-image`}>
            </div>
            <h3 class="name">${title} ${first} ${last}</h3>
            <div class="email">${email}</div>
            <h3 class="age">${age} years</h3>
          </div>
          <div class="contact">
            <div class="phone-wrap">
              <div class="title">Phone</div>
              <div class="phone desc">${phone}</div>
            </div>
            <div class="dob-wrap">
              <div class="title">Dob</div>
              <div class="phone desc">${new Date(date).toDateString()}</div>
            </div>
            <div class="location-wrap">
              <div class="title">Location</div>
              <div class="phone desc">${street}, ${city}, ${state}.</div>
            </div>
            <div class="nat-wrap">
              <div class="title">Nationality</div>
              <div class="phone desc">${nat}</div>
            </div>
          </div>
        
        </div>
                `;
        });
        userList.innerHTML = html;
      } else {
        let html = "";
        html = `<div>No Data Available</div>`;
        userList.innerHTML = html;
      }
    });
};

fetchUsers();



