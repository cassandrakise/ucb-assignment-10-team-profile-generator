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
            <header class="hero is-primary"> 
              <div class="hero-body title has-text-centered">
                My Team 
              </div>
            </header>
            <div class="container">
              <div class="columns is-centered is-multiline is-4">
              ${renderCard(team)}
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
    let card = `
    <div class="column is-3">
      <div class="card">
        <header class="card-header has-background-danger-light">
         <p class="card-header-title">
          <h2 class="has-text-weight-bold">${team[i].name}</h2>
          <h3>${team[i].getRole()}</h3>
        </p>
          <span class="card-header-icon">👤</span>
        </header>
      <div class="card-content">
        <div class="media-content">
          <h4>${team[i].id}</h4>
          <h4>${team[i].email}</h4>
          ${data}
        </div>
      </div>
    </div>
  </div>`;

    cards += card;
  }

  return cards;
}

//html card rendering occurs here
module.exports = render;

//conditional rendering will need to occur (before exports)
