function render(team) {
  return `
      <!DOCTYPE html>
        <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>My Team</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
          </head>
          
          <body>
            <section class="section">
              <div class="container">
                <div class="card">
                  <div class="card-content">
                    <div class="media-content">
                    <p class="bd-notification is-info"> ${renderCard(team)} </p>
                    </div>
                    <div>
                    <p class="bd-notification is-info"> ${renderCard(team)} </p>
                    </div>
                    <div>
                    <p class="bd-notification is-info"> ${renderCard(team)} </p>
                    </div>
                  </div>
                </div>
              </div>
                </p>
              </div>
            </section>
          </body>
      </html>

      
    `;
}

function renderCard(team) {
  let cards = ``;
  for (let i = 0; i < team.length; i++) {
    let data = "";
    if (team[i].getRole() === "Manager") {
      data = `
            <p> ${team[i].getOfficeNumber()} </p>
            `;
    } else if (team[i].getRole() === "Engineer") {
      data = `
            <p> ${team[i].getGitHub()} </p>
            `;
    } else if (team[i].getRole() === "Intern") {
      data = `
            <p> ${team[i].getSchool()} </p>
            `;
    }
    let card = `<div>
            <h1>${team[i].name}</h1>
            <h2>${team[i].id}</h2>
            <h2>${team[i].email}</h2>
            ${data}
        </div>`;

    cards += card;
  }

  return cards;
}

//html card rendering occurs here
module.exports = render;

//conditional rendering will need to occur (before exports)
