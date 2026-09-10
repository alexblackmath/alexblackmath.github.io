var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "affine",
  "level": "1",
  "url": "#affine",
  "type": "Article",
  "number": "",
  "title": "RREF Your Engines",
  "body": " RREF Your Engines        Review    How many different solutions can a system of linear equations have?      What does it mean for a system of linear equations to be consistent?      What are the three operations we learned do not change the solution set to a system of linear equations?      Reduced Row Echelon Form (RREF)  We saw last in Exercise 5 that solving a linear system seems pretty doable when its coefficient matrix is diagonal such as this one:   By rescaling we can force each coefficient on the left handside to be and arrive at the following equation:   The coefficient matrix of this equation has the following form   It is called the identity matrix . It is an ideal coefficient matrix. It turns out by applying row operations we can always arrive at a system with coefficient matrix that looks like the identity matrix. In fact, in general we will usually look at the augmented matrix. The shape is as follows:   An example linear system with such an augmented matrix would be the following:   What you can see is that the solution is no longer unique. Now the variables , , and can take on whatever value we choose, and , , and are determined by those values.  A formal definition is as follows. We call the leftmost nonzero entry in a row of a matrix the leading entry of that row and call the column containing it the leading column of that row. A matrix is in Echelon Form if:   All nonzero rows are above any rows of all zeros  Each leading entry is in a column strictly to the right of the leading entry that comes before it  All entries in a column below a leading entry are zeros   A matrix is in Reduced Row Echelon Form if in addition to the previous properties:   The leading entry in each row is 1.  The leading entry is the only nonzero entry in its column.   The columns containing leading entries are called pivot columns . I usually think of them as being dependent variables. The variables corresponding to the remaining columns are completely free to vary while the pivot columns are determined uniquely by their values. The number of free variables is the dimension of the set of solutions.  Take the system of equations in three variables:   The corresponding coefficient matrix is   It is in reduced row echelon form. There is one free variable , so the solution set is one dimensional. If we solve in terms of , we get , , and of course . If we parametrize the solution set in terms of , we get the line   Geometrically this tells us the intersection of those two planes is that line. The free variable count told us without further computation that the solution set had to be one dimensional, and so it makes sense that it is a line.    Gaussian Elimination    By applying row operations, any matrix may be written in reduced row echelon form. Furthermore, the reduced row echelon form of that matrix is unique.    The Gaussian Elimination algorithm goes as follows:   Pick a row with leftmost leading entry.  Scale that row so that its leading entry is .  For each row with the same leading column, replace it with , where is the leading entry of .  Apply interchange to move to the top row  Repeat on the submatrix consisting of all rows other than .  For each pivot column, apply replacements to make all entry other than the unique row with leading entry in that pivot column equal to .   Let's show this on an example. Consider the linear system:   Start with the following matrix, which is the augmented matrix of the system:   Pick a row with leftmost leading entry such as the second row. Rescale that row so its first entry is .   Then use it to cancel out the leading entry of any other row with the same leading entry by using replacement.   Use interchange to place that row as the first row in the matrix.   Then follow the same strategy on the remaining rows. The bottom row already has first nonzero entry equal to , so we can take that one. We replace the second row with it minus twice the third row.   Swap until row is at the top of the rows not already sorted, so we swap it with row .   Then we have one more row. We rescale it to be . Then we cancel out the entries in the columns for that row via replacement. In the end we get the identity matrix.   Putting this back into equational form we get   Thus, the system has no solutions, since . In fact, the certification of there being no solution is an example of a more general phenomenon:    A linear system is consistent if and only if the final column of the reduced row echelon form of its augmented matrix is not a pivot column.      Parametrizing the Solution Set  Let's look back at this example.   There are three free variables: and . We can use those to parametrize our solution. In particular,   Let , , and . Then we get a -D plane in with parametrization:   This is a plane. You can think of it parametrically as being of the form   Next time we will talk about this last formulation.    Exercises    Consider the following system of linear equations in variables :     Write down the augmented matrix.    Put the augmented matrix in reduced row echelon form    What is the dimension of the solution set?    Give an explicit parametrization of the solution set.      Consider the following matrix:     Put the matrix in reduced row echelon form.    Suppose this is the augmented matrix of a linear system. Will that linear system be consistent? Explain why or why not.      Consider the following matrix:   Suppose this is the coefficient matrix of a linear system. For which right hand sides is it consistent?     "
},
{
  "id": "review-2",
  "level": "2",
  "url": "#review-2",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  How many different solutions can a system of linear equations have?   "
},
{
  "id": "review-3",
  "level": "2",
  "url": "#review-3",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  What does it mean for a system of linear equations to be consistent?   "
},
{
  "id": "review-4",
  "level": "2",
  "url": "#review-4",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  What are the three operations we learned do not change the solution set to a system of linear equations?   "
},
{
  "id": "Section-1-8",
  "level": "2",
  "url": "#Section-1-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "Section-1-13",
  "level": "2",
  "url": "#Section-1-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "leading entry leading column Echelon Form "
},
{
  "id": "Section-1-15",
  "level": "2",
  "url": "#Section-1-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reduced Row Echelon Form "
},
{
  "id": "Section-1-17",
  "level": "2",
  "url": "#Section-1-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot columns dimension "
},
{
  "id": "Section-2-2",
  "level": "2",
  "url": "#Section-2-2",
  "type": "Theorem",
  "number": "3.1",
  "title": "",
  "body": "  By applying row operations, any matrix may be written in reduced row echelon form. Furthermore, the reduced row echelon form of that matrix is unique.   "
},
{
  "id": "Section-2-3",
  "level": "2",
  "url": "#Section-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian Elimination "
},
{
  "id": "Section-2-24",
  "level": "2",
  "url": "#Section-2-24",
  "type": "Theorem",
  "number": "3.2",
  "title": "",
  "body": "  A linear system is consistent if and only if the final column of the reduced row echelon form of its augmented matrix is not a pivot column.   "
},
{
  "id": "exercises-2",
  "level": "2",
  "url": "#exercises-2",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "",
  "body": "  Consider the following system of linear equations in variables :     Write down the augmented matrix.    Put the augmented matrix in reduced row echelon form    What is the dimension of the solution set?    Give an explicit parametrization of the solution set.   "
},
{
  "id": "exercises-3",
  "level": "2",
  "url": "#exercises-3",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "",
  "body": "  Consider the following matrix:     Put the matrix in reduced row echelon form.    Suppose this is the augmented matrix of a linear system. Will that linear system be consistent? Explain why or why not.   "
},
{
  "id": "exercises-4",
  "level": "2",
  "url": "#exercises-4",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "",
  "body": "  Consider the following matrix:   Suppose this is the coefficient matrix of a linear system. For which right hand sides is it consistent?   "
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
