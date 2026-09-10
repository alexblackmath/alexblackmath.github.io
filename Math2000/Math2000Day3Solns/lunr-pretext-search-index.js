var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "affine",
  "level": "1",
  "url": "#affine",
  "type": "Article",
  "number": "",
  "title": "Day 3 Solutions",
  "body": " Day 3 Solutions          Day 3 Solutions    Let , .  Compute  Compute  Compute . How does your answer compare to part (b)?  Compute .      For (a), you get .  For (b) and (c), you get and observe they are the same. This is because of the distributive property of scalar multiplication.  For (d), you get .      Consider the linear system     Write the augmented matrix of the system.  Write the system as a vector equation.  Which one is your favorite?      (a) The augmented matrix for the system is   (b) The vector equation is   (c) I like the vector equation best because of its geometric interpretation. The augmented matrix form is nicest as a tool for solving the linear system though.      Consider the linear system     Write the augmented matrix of the system.  Write the system as a vector equation.  Solve the system of equations and write the linear function with vector coefficients describing the solution set.      (a) The augmented matrix is   (b) As a vector equation, I'd write this as   (c) You could just solve the linear system like always, but here note that the vector equation actually gives more insight. Really what you get is   Letting and yields   Via row reduction, you can observe that this system has a unique solution given by and . Then the system of equations is equivalent to   This is in reduced row echelon form with free variables and , so the answer is   Finally, we wanted to write this as a linear function with vector coefficients yielding       Consider the following question: Is in the span of and ?   Rewrite this question as a vector equation.  Rewrite it as a system of linear equations.  Solve the linear system. Is the answer yes?      For part (a), being in the span of and is equivalent to being a linear combination of and . That is the question corresponds to asking if the following system has a solution:   For part (b), we can rewrite this as the system of linear equations   For part (c), we want to solve the system. I would do this by first finding the augmented matrix and putting it in reduced row echelon form. Here is the augmented matrix   To do this, I do replacement on both the second and third row subtracting twice the first and three times the first respectively and get:   Then I subtract twice the second from the third   Now I could do more row operations, but I already know since its upper triangular with nonzero elements on the diagonal, these will eventually lead to an identity matrix:   The last column is a pivot column, so the system has no solution (i.e., it is inconsistent) meaning that is not in the span of and .      Are , , and linearly independent? Explain why or why not.    To check this, I can make them the columns of a matrix:   If this matrix has exclusively pivot columns in reduced row echelon form, then it is linearly independent. If you do the row reduction, you get   and so indeed they are linearly independent.     "
},
{
  "id": "sec-span-independence-2",
  "level": "2",
  "url": "#sec-span-independence-2",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let , .  Compute  Compute  Compute . How does your answer compare to part (b)?  Compute .      For (a), you get .  For (b) and (c), you get and observe they are the same. This is because of the distributive property of scalar multiplication.  For (d), you get .   "
},
{
  "id": "sec-span-independence-3",
  "level": "2",
  "url": "#sec-span-independence-3",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider the linear system     Write the augmented matrix of the system.  Write the system as a vector equation.  Which one is your favorite?      (a) The augmented matrix for the system is   (b) The vector equation is   (c) I like the vector equation best because of its geometric interpretation. The augmented matrix form is nicest as a tool for solving the linear system though.   "
},
{
  "id": "sec-span-independence-4",
  "level": "2",
  "url": "#sec-span-independence-4",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Consider the linear system     Write the augmented matrix of the system.  Write the system as a vector equation.  Solve the system of equations and write the linear function with vector coefficients describing the solution set.      (a) The augmented matrix is   (b) As a vector equation, I'd write this as   (c) You could just solve the linear system like always, but here note that the vector equation actually gives more insight. Really what you get is   Letting and yields   Via row reduction, you can observe that this system has a unique solution given by and . Then the system of equations is equivalent to   This is in reduced row echelon form with free variables and , so the answer is   Finally, we wanted to write this as a linear function with vector coefficients yielding    "
},
{
  "id": "sec-span-independence-5",
  "level": "2",
  "url": "#sec-span-independence-5",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Consider the following question: Is in the span of and ?   Rewrite this question as a vector equation.  Rewrite it as a system of linear equations.  Solve the linear system. Is the answer yes?      For part (a), being in the span of and is equivalent to being a linear combination of and . That is the question corresponds to asking if the following system has a solution:   For part (b), we can rewrite this as the system of linear equations   For part (c), we want to solve the system. I would do this by first finding the augmented matrix and putting it in reduced row echelon form. Here is the augmented matrix   To do this, I do replacement on both the second and third row subtracting twice the first and three times the first respectively and get:   Then I subtract twice the second from the third   Now I could do more row operations, but I already know since its upper triangular with nonzero elements on the diagonal, these will eventually lead to an identity matrix:   The last column is a pivot column, so the system has no solution (i.e., it is inconsistent) meaning that is not in the span of and .   "
},
{
  "id": "sec-span-independence-6",
  "level": "2",
  "url": "#sec-span-independence-6",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Are , , and linearly independent? Explain why or why not.    To check this, I can make them the columns of a matrix:   If this matrix has exclusively pivot columns in reduced row echelon form, then it is linearly independent. If you do the row reduction, you get   and so indeed they are linearly independent.   "
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
