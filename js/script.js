const studentList = document.querySelector(".student-list");
const studentRecords = studentList.children;
const itemsPerpage = 10;


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
showPage(studentList, 1);

const appendPageLinks = (list) => {
  const numberOfpages = Math.ceil(studentList.childElementCount/itemsPerpage);
  const pageDiv = document.querySelector('.page');
  const buttonDiv = document.createElement('DIV');
  const links = document.createElement('UL');
  buttonDiv.className = 'pagination';
  pageDiv.appendChild(buttonDiv);
  buttonDiv.appendChild(links);

  for (let i = 1; i <= numberOfpages; i += 1){
    const buttonLi = document.createElement('LI');
    const buttonAtag = document.createElement('A');
    const parentElement =
    buttonLi.appendChild(buttonAtag);
    buttonAtag.textContent = i;
    links.appendChild(buttonLi);
  }

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
