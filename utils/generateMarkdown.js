// function to generate markdown for README
function generateMarkdown(data) {
 
    return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![${data.license} license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions about the repo, please contact ${data.github} at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;