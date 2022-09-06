function generateProfile(data) {
    return `# ${data.title}

  ## Name: 
    * ${data.getName()}
  
  ## Role:
    * ${data.getRole()}

  ### Employee ID:
    * ${data.getId()}

  ### Office Number:
    * ${data.getOffice()}

  ### Email:
    * ${data.getEmail()}
  
  ### GitHub:
    * ${data.github()}
  
  ### School:
    *${data.getSchool()}
  
  `;
  
  }