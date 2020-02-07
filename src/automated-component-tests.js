// This script is a WORK IN PROGRESS by Ron Martin. Forgive the spagetti code, I started this a while ago
// It will create the new files as described. The main issue now, is it will overwrite any tests that already 
// exist if you run it again. So instead of creating tests for the new Components, instead creates new tests for ALL components
// in the folder. This is bad if you have updated the tests at all or have custom tests for specific components,
// but it works fine to create tests when you have many new components with no tests yet!
//
//===============================================
// RUN THIS SCRIPT BY TYPING: 
// node automated-component-tests.js
//
// This script will: 
//                   Search the specified directory in myPath for React Components (Any Javascript file that is capitalized)
//                   and create a test file for each component based on a template. All files will be saved in the folder you searched.
//                   Currently, this will only search the specified folder and not any subfolders within.
// Example:
//        You set myPath to be ./src/
//        Inside that directory:
//           

// ./src/
//           |_ Header.js
//           |_ Feature.js
//           |
//                    
// myPath = the path you wish to search for your React Components that need test files. 
// TODO: Ask user for input - What is the path to the folder we should search?
// TODO:    -Add an option to search files recursively or not
// TODO: By default, only create files that start with a Capital letter!
// TODO:    -Add an option to ignore that setting
// Also, since this is for React Components, I should make it so that it only makes .test.js files 
// for files that START WITH A CAPITAL LETTER


const fs = require('fs');

// The path where your Components are saved
let myPath = './src/components';

// This will be used for options in the future
let optionRecurse = false; // OFF by default: recursively run the program into all folders within the selected path
let optionCaps = false;  // when you type the Caps option, the program WILL make test files for ALL files in the directory instead of just Capitialized components

// allFiles is an array of all the file names in that path
// ie [Bob.js, Sally.js, Joe.html, Jill.css]
let allFiles = fs.readdirSync(myPath);

// If a test file already exists, don't make a new one.
// if file ends in .test.js (ie NAME.test.js)
// remove the file that ends in NAME.js from the list
function removeTests(allFiles) {
    // finds all Foobar.test.js files 
    // then turns all Foobar.test.js files into Foobar.js files
            // console.log(allFiles);
            // let removeFiles = allFiles.filter( file => file.indexOf('.test.js') >= 0).map(file => file.replace('.test', '');

            // allFiles = allFiles.filter(file => {
            //     return removeFiles.indexOf(file) === -1;
            // });

    // newFiles = newFiles.map(file => file.replace('.test', '') );

    // if(file.indexOf('.test.js') >= 0) {
    //     let newFile = file;
        
    //     return true;
    // }
    // // removes all pr
    // var str = "test_23";
    // alert(str.split("_").pop());
    // // -> 23
    // console.log(removeFiles);
    console.log(allFiles);
}
removeTests(allFiles);
// A little hacky, but this works. If .js is in the string then it returns a positive number.
// So this searches allFiles and returns only files ending in .js (except for .test.js)
// By default the script will only make files for components that start with a Capital
if(!optionCaps) {
    allFiles = allFiles.filter(file => file.indexOf('.js') >= 0 && file[0] === file[0].toUpperCase() && file.indexOf('.test.js') < 0);
} else {
// If the OPTION to run the script on all files regardless of capitalization
    allFiles = allFiles.filter(file => file.indexOf('.js') >= 0  && file.indexOf('.test.js') < 0);
}

// console.log(allFiles);


// This regex removes the file extensions 
// It returns an array of strings
// ie: [Bob.js, Sally.js, Joe.html, Jill.css] ====> [Bob, Sally, Joe, Jill]
// ASIDE: Technically I could use splice since I already know all the files are .js, but this 
// code works on any file extension
let cleanedFiles = allFiles.map(file => file.replace(/\.[^/.]+$/, ""));



// ============================================
//            IMPORTANT CODE BELOW 

function createReactComponentTests(cleanedFiles){

    cleanedFiles.forEach(currentFileName => {
        const contents = `
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import ${currentFileName} from './${currentFileName}';

describe('<${currentFileName} />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<${currentFileName} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<${currentFileName} />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});`
    
    console.log(contents);
    
        fs.writeFile(`./${myPath}/${currentFileName}.test.js`, contents, err => {
            if (err) {
                return console.error(`Dagnabbit! Failed to create file: ${err.message}.`);
            }
            console.log(`Created ${currentFileName}.test.js!`);
        });
    });

}

createReactComponentTests(cleanedFiles);