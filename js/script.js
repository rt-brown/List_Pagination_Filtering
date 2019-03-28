//global variables
const studentList = document.querySelector(".student-list");
const studentRecords = studentList.children;
const itemsPerpage = 10;

/* showPage function defines the first and last index position of studentRecords for each page.
Then we implement an if statement to check if the index position of studentRecords fits between
firstIndex and lastIndex. If true show those records. If false hide them.
*/
const showPage = (list, page) => {
 const firstIndex = (page * itemsPerpage) - itemsPerpage;
 const lastIndex = (page * itemsPerpage) - 1;
 for (let i = 0; i < studentRecords.length; i += 1){
   if (i >= firstIndex && i <= lastIndex){
     studentRecords[i].style.display = 'inherit';
   } else {
     studentRecords[i].style.display = 'none';
   }
 }

};

// call showPage to have the first page load on refresh.
showPage(studentList, 1);

/*
appendPageLinks() accomplishes 2 main purposes. Creates/Adds elements to the page.
Adds event listener on a tags.
*/
const appendPageLinks = (list) => {
  // defining variables and adding div and ul to page
  const numberOfpages = Math.ceil(studentList.childElementCount/itemsPerpage);
  const pageDiv = document.querySelector('.page');
  const buttonDiv = document.createElement('DIV');
  const links = document.createElement('UL');
  buttonDiv.className = 'pagination';
  pageDiv.appendChild(buttonDiv);
  buttonDiv.appendChild(links);

  // adds the correct number of page buttons dynamically based on studentList.childElementCount
  for (let i = 1; i <= numberOfpages; i += 1){
    const buttonLi = document.createElement('LI');
    const buttonAtag = document.createElement('A');
    buttonLi.appendChild(buttonAtag);
    buttonAtag.textContent = i;
    links.appendChild(buttonLi);
  }

  /*
  select all a tags and add event listner to each. Within eventlistener call showPage,
  loop over aTags to set class and set class of clicked a tag to 'active'
  */
  const aTags = document.getElementsByTagName('A')
  for (let i = 0; i < aTags.length; i++){
    aTags[i].addEventListener('click', (event) => {
      let page = event.target.textContent;
      showPage(studentList, page);
      for (let i = 0; i < aTags.length; i++){
        aTags[i].className = 'inactive';
      }
      event.target.className = 'active'
    })
  }
};

appendPageLinks(studentList);
