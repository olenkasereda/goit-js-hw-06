console.log(`Number of categories:  ${document.querySelectorAll('.item').length}`);

for (const element of document.querySelectorAll('li.item')) {

    console.log(`Category: ${element.querySelector('h2').textContent} \nElements: ${element.querySelectorAll('li').length}`);
  
}

/*
Code	Result
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
*/ 