/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

//identify parent of <li>
const studentList = document.querySelector(".student-list");
//identify children of studentList. this should equal all of the student records
const studentRecords = studentList.children;
const itemsPerpage = 10;




/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

const showPage = (list, page) => {
 const firstIndex = (page * itemsPerpage) - itemsPerpage;
 const lastIndex = (page * itemsPerpage) - 1;
 for (let i = 0; i < studentRecords.length; i += 1){
   if (i >= firstIndex && i <= lastIndex){
     studentRecords[i].style.visibility = 'visible';
   } else {
     studentRecords[i].style.display = 'none';
   }
 }

};

showPage(studentRecords, 6);


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) =>{
  const numberOfpages = studentList.childElementCount/itemsPerpage;
  const pageDiv = document.querySelector('.page');
  const buttonDiv = document.createElement('DIV');
  const links = document.createElement('UL');
  buttonDiv.className = 'pagination';
  pageDiv.appendChild(buttonDiv);
  buttonDiv.appendChild(links);

}

appendPageLinks(studentList);



// Remember to delete the comments that came with this file, and replace them with your own code comments.