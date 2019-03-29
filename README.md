# List_Pagination_Filtering

This project took a list of 54 students and created the functionality to limit
10 students per page.

There are two main functions showPage() and appendPageLinks()

showPage() take two arguments and applies logic to determine which objects of the
HTML collection to return based on what page you are on.

appendPageLinks() adds HTML elements by DOM manipulation and add and on click eventlistener
that passes an argument to showPage() and sets the event.target class.
