var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase",
  "level": "1",
  "url": "#shorttitlelowercase",
  "type": "Article",
  "number": "",
  "title": "Day 1 Solutions",
  "body": " Day 1 Solutions       Exercises and Solutions    Consider the following linear system:      The first equation says that . Plug into the second equation for and see what you get.    You should find the new equation .      Subtract times the first equation from the second equation.    You should find the new equation .      How do your answers for parts (a) and (b) compare?    They are equal.     A diagonal matrix is a square matrix such that every entry other than the diagonal is . If the coefficient matrix is diagonal, the linear system generally is easier to solve.    Consider the linear system:      Write the coefficient matrix of the system.    The coefficient matrix is       Write the augmented matrix of the system.    The augmented matrix is       Is the system consistent of inconsistent? If the system is consistent, give a solution. Is the solution unique?    The system is consistent, since it has a solution , , and . The solution is unique.     An upper triangular matrix is a square matrix such that every entry strictly below the diagonal is .    Consider the linear system:      Write the coefficient matrix of the system.    The coefficient matrix is       Write the augmented matrix of the system.    The augmented matrix is       Is the system consistent of inconsistent? If the system is consistent, give a solution. Is the solution unique?    The system is consistent with a unique solution , , and .      "
},
{
  "id": "section-1-2",
  "level": "2",
  "url": "#section-1-2",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Consider the following linear system:      The first equation says that . Plug into the second equation for and see what you get.    You should find the new equation .      Subtract times the first equation from the second equation.    You should find the new equation .      How do your answers for parts (a) and (b) compare?    They are equal.    "
},
{
  "id": "section-1-3",
  "level": "2",
  "url": "#section-1-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diagonal matrix "
},
{
  "id": "section-1-4",
  "level": "2",
  "url": "#section-1-4",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider the linear system:      Write the coefficient matrix of the system.    The coefficient matrix is       Write the augmented matrix of the system.    The augmented matrix is       Is the system consistent of inconsistent? If the system is consistent, give a solution. Is the solution unique?    The system is consistent, since it has a solution , , and . The solution is unique.    "
},
{
  "id": "section-1-5",
  "level": "2",
  "url": "#section-1-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper triangular matrix "
},
{
  "id": "section-1-6",
  "level": "2",
  "url": "#section-1-6",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Consider the linear system:      Write the coefficient matrix of the system.    The coefficient matrix is       Write the augmented matrix of the system.    The augmented matrix is       Is the system consistent of inconsistent? If the system is consistent, give a solution. Is the solution unique?    The system is consistent with a unique solution , , and .    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
