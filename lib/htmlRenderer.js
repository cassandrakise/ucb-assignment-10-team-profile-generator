function render(team) {
    return`
    <html>
    <head></head>
    <body>
        ${renderCard(team)}
    </body>
    </html>
    `
}

function renderCard(team){
    let cards = ``
    for (let i=0; i < team.length; i++){
        let data = ""
        if(team[i].getRole() === "Manager") {
            data = `
            <p> ${team[i].getOfficeNumber()} </p>
            `
        }
        else if(team[i].getRole() === "Engineer") {
            data = `
            <p> ${team[i].getGitHub()} </p>
            `
        }
        else if(team[i].getRole() === "Intern") {
            data = `
            <p> ${team[i].getSchool()} </p>
            `
        }
        let card = `<div>
            <h1>${team[i].name}</h1>
            ${data}
        </div>`
                

        cards += card;
    }

    return cards;

}

//html card rendering occurs here 
module.exports = render;


//conditional rendering will need to occur (before exports)