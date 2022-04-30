// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-blue)`;
  } else if (license === 'Apache License, version 2.0'){
    return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue)`;
  } else if (license === 'Apache') {
    return `![License: Apache](https://img.shields.io/badge/License-Apache-blue)`;
  } else if (license === 'GPL'){
    return `![License GPL](https://img.shields.io/badge/License-GPL-blue)`;
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT](https://www.mit.edu/~amini/LICENSE.md)`;
  } else if (license === 'Apache License, version 2.0') {
    return `[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license === 'Apache') {
    return `[Apache](https://www.apache.org/licenses/LICENSE-1.0)`;
  } else if (license === 'GPL') {
    return `[GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `


For more information about the specified license,  please click on the following link.


  `;
};

function contribute(info) {
  if (info.contributors === undefined) {
    return ` 
  If you would like to contribute please contact me at the following email or github.

  * GitHub: [${info.github}](https://github.com/${info.github})
  * E-mail: ${info.email};
    `;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installationInstructions}

  ## Usage
  ${data.howToUse}

## License
  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}


  ## Contributors
  ${contribute(data)}

  ## Test
  ${data.testing}

  ## Questions
  If you would like to contact me for any questions or comments contact at the following links.

  * GitHub: [${data.github}](https://github.com/${data.github}),
  * E-mail: ${data.email}
  
`
};

module.exports = generateMarkdown;
