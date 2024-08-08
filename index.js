import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

console.log("---------------QR CODE GENERATOR BY YASLO MOHAMED AMINE------------------ but not really i got help from npm library XD");

inquirer
  .prompt([
    /* Pass your questions in here */
    {message : "Enter the url to generate the QR code",
        name:"URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
     qr_svg.pipe(fs.createWriteStream('qr-code.png'));
     console.log("Qr code saved!")
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });