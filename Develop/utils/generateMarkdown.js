// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    
  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){

  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){

  }
  else{
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ## License Badge
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}
  ## Usage

  ${data.usage}
  ## Credits

  ${data.credits}

  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(license)}
  ---


  ## Features

  ${data.features}

  ## How to Contribute

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Questions?

  github.com/${data.github}
  email :${data.email}
  `;
}

module.exports = generateMarkdown;
