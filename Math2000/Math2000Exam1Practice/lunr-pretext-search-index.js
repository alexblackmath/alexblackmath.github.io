var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "matroid",
  "level": "1",
  "url": "#matroid",
  "type": "Article",
  "number": "",
  "title": "RREFinement",
  "body": " RREFinement            Math 2000 Exam 1 Practice Solutions  The exam will consist of 4 questions . Each question will come from one of these categories, and they will be written in this order. I give three examples of each question type.   Matrix-Vector Computations  The first question will be about practicing actually doing some calculations. I will give you a matrix and some vectors and ask you to calculate something. I may ask you something conceptual to explain your calculations. This will be in reference to the additivity or respecting scaling properties of linear transformations.    Consider the matrix , vector and .   Compute .  Compute . Interpret the result geometrically.  Compute .  Compute .  Compute . Explain how you can know the answer without doing any calculations.     For (a), .  For (b), . They're orthogonal.  For (c), .  For (d),   You could also use dot products here, but for me this was easier.  For (e), this is equal to by the additivity property of linear transformations.      Consider the matrix   Let and .   Compute .  Compute .  How do and relate to the columns of your original matrix? Why does that relation hold?     For (a), we have   For (b), we have   For (c), they are the first and second columns of the matrix respectively. This is because and are the standard basis vectors, and multiplying by the th standard basis vector always returns the th column of the matrix.      Consider the matrix . Let .   Compute .  Compute .  Compute . How does it compare to ?     Note that   Then for (a), . For (b), . Finally, for (c), , which is equal to .      Are these Rows Reduced Enough for You?  The following questions are meant to evaluate your ability to recognize if a matrix is in reduced row echelon form and use that to gain some insight into the solution of linear systems. To make this easier, the matrix will be in reduced row echelon form or one row operation away. If it is not in reduced row echelon form, you will be asked to put it in reduced row echelon form.    Consider the following matrix    Is in reduced row echelon form? If not, explain why, and say what row operation would put it in reduced row echelon form?  What are the pivot columns of ?  What is the nullity of ? Explain why.  If is the augmented matrix of a linear system, is the system consistent? Explain why or why not. What is the dimension of the solution set? Explain.  Describe the solution set to the system parametrically.     For (a), yes it is in reduced row echelon form. For (b), the first and third columns are pivot columns. For (c), the nullity is the number of non-pivot columns, which is . For (d), the system is consistent, since the last column is not a pivot column. The dimension of the solution set is , since there are free variables. For (e), the solution set is parametrized by variables and in the equations:   Then we have   Thus, the solution set is given parametrically by       Consider the following matrix:    Is this matrix in reduced row echelon form? If not, explain why. What row operation would put it in reduced row echelon form?  What are the pivot columns?  Are the columns spanning?  Are the rows spanning?  Are the columns linearly independent?  Suppose this is the coefficient matrix of a linear system with right-hand side all 's. Describe the solution set to the resulting linear system parametrically.     For (a), it is not in reduced row echelon form, because there is a zero row above a row with some nonzero entry. This can be fixed by swapping row and . For (b), both columns are pivot columns. For (c), the rank is the number of columns, which is . Since the rank is less than the number of rows, the columns are not spanning. For (d), since the rank is the number of columns, the rows are spanning. For (e), the columns are linearly independent, since they are all pivot columns. For (f), since the rank is , the nullity is , and so there is a unique solution given by .      Consider the following matrix:    Is this matrix in reduced row echelon form? If not, explain why. What row operation would put it in reduced row echelon form?  Which are the pivot columns?  Which are the free variable columns?  What is the rank, and what is the nullity?  Are the rows spanning?  Are the columns spanning?  Suppose that is the coefficient matrix of a linear system with right hand side before row reduction if any is done . What is the solution set?     For (a), it is not in reduced row echelon form, the second column has to be a pivot column, since the second row has leading term in that column, and there are two nonzero elements. Subtracting the second row from the first fixes it. For (b), all columns are pivot columns, and so for (c), there are no free variable columns. For (d), the rank is since there are three pivot columns, and so the nullity is . For (e), the rows are spanning, since the rank is equal to the number of columns. For (f), the columns are spanning, since the rank is equal to the number of rows. For (g), the linear system would be   Thus, the solution is and , and it is unique.      Switching Between Representations  This problem will be about different ways to represent a system, solving it, and interpreting the solution.    Consider the linear equation with vector coefficients    Convert this to a matrix equation.  Add the column to the coefficient matrix in your matrix equation. What does that correspond to when you convert back to the linear equation with vector coefficients? What is a solution to the equation?  If you take the augmented matrix of the original system and put it in reduced row echelon form, you find:   Is the system consistent? If there is a solution, find a parametrization of the solution set.      For (a), you get the matrix equation:   For (b), when you convert back to linear equation with vector coefficients, you get   You get that and is a solution.  For (c), the last column is a pivot column, so it is not consistent. That is, there is no solution to parametrize.      Consider the following coefficient matrix   for the equation .   What would the linear equation with vector coefficients be if we converted?  Suppose that is a solution to this equation. What must equal?  In reduced row echelon form, the matrix is the identity matrix   Does that mean a solution exists for all choices of ? Is a solution always unique when it exists?      For (a), then it would be   For (b), we would find   so the right hand side is .  For (c), since the coefficient matrix has at least number of rows many pivot columns in reduced row echelon form, a solution always exists. Furthermore, since every column is a pivot column the solution is always unique.      Consider the following system of linear equations   in variables and .   Rewrite this as a linear equation with vector coefficients.  Rewrite this as a matrix equation.  Write the augmented matrix of the system.  Explain why if a solution exists, it has to be at least dimensional.     For (a), you could take   For (b), you get   For (c), the augmented matrix is   For (d), the augmented matrix only has rows, so it has at most pivot columns. Thus, there are at least free variable columns. Therefore, if a solution exists, it has to be at least dimensional.      Modeling Work  The last problem is about modeling and communication. We have discussed several kinds of questions we can answer via the row reduction algorithm, and the previous questions show me you can run it. This question asks whether you know when to apply it and to communicate how to apply it.    Explain in words how you would do the computation to solve the following problems. You do not need to do the computation :   Is in ?  Find an inner description of the collection of x, y, and z satisfying the equation .  Find the dimension of the .     For (a), I'd check if the system   is consistent. To do this, I'd compute the augmented matrix, put it in reduced row echelon form, and check if the last column is a pivot column. If the answer is yes, it is inconsistent. Otherwise, it is consistent.  For (b), the inner description is the parametric description of the solution to the system. I'd convert the linear equation with vector coefficients to the augmented matrix form. Then I'd row reduce. From the reduced row echelon form, I'd translate it back a system of equations and solve for each pivot column variable in terms of the non pivot column variables.  For (c), I'd make them the columns of a matrix   and row reduce. The number of pivot columns is the dimension of their span.      Explain how you would do the computation to solve the following problems. You do not need to do the computation :   Write as a linear combination of .  I give you three vectors in . Check if they are spanning.  Consider , , in . How would you check if they are linearly independent?     For (a), interpreting the statement literally, this means solving . I could solve this by constructing the augmented matrix of this system, row reducing, solving the system to get a function of the free variables or a unique solution. Taking any output of that function would yield a solution. Alternatively, I'd also just guess and check and guess .  For (b), first thing I do for spanning is check the number of vectors. There are only three, which is less than the dimension , so I know immediately they are not spanning.  For (c), I'd make them the columns of the matrix:   Then I'd row reduce and check if in the end every column is a pivot column. If yes, they are independent.      Explain how you would do the computation to solve the following problems. You do not need to do the computation :   Find an outer representation of .  Find the rank of the matrix .  I give you a matrix equation , and I tell you the columns of are linearly independent and the system is consistent. Determine the dimension of the solution set.     For (a), I'd make these the rows of the coefficient matrix in the matrix equation   Then I'd form the augmented matrix, solve the system, and get a parametric form as a linear function with vector coefficients. Then the vector coefficients would be the rows defining the matrix equation giving the outer representation.  For (b), I'd row reduce it. The number of pivot columns will then tell me the rank.  For (c), the system is consistent, so there is a solution. Since the columns are linearly independent in the coefficient matrix, the solution is unique. Thus, the dimension of the solution set is .      "
},
{
  "id": "matrix-vector-exercise-1",
  "level": "2",
  "url": "#matrix-vector-exercise-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Consider the matrix , vector and .   Compute .  Compute . Interpret the result geometrically.  Compute .  Compute .  Compute . Explain how you can know the answer without doing any calculations.     For (a), .  For (b), . They're orthogonal.  For (c), .  For (d),   You could also use dot products here, but for me this was easier.  For (e), this is equal to by the additivity property of linear transformations.   "
},
{
  "id": "matrix-vector-exercise-2",
  "level": "2",
  "url": "#matrix-vector-exercise-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider the matrix   Let and .   Compute .  Compute .  How do and relate to the columns of your original matrix? Why does that relation hold?     For (a), we have   For (b), we have   For (c), they are the first and second columns of the matrix respectively. This is because and are the standard basis vectors, and multiplying by the th standard basis vector always returns the th column of the matrix.   "
},
{
  "id": "matrix-vector-exercise-3",
  "level": "2",
  "url": "#matrix-vector-exercise-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Consider the matrix . Let .   Compute .  Compute .  Compute . How does it compare to ?     Note that   Then for (a), . For (b), . Finally, for (c), , which is equal to .   "
},
{
  "id": "rref-exercise-1",
  "level": "2",
  "url": "#rref-exercise-1",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Consider the following matrix    Is in reduced row echelon form? If not, explain why, and say what row operation would put it in reduced row echelon form?  What are the pivot columns of ?  What is the nullity of ? Explain why.  If is the augmented matrix of a linear system, is the system consistent? Explain why or why not. What is the dimension of the solution set? Explain.  Describe the solution set to the system parametrically.     For (a), yes it is in reduced row echelon form. For (b), the first and third columns are pivot columns. For (c), the nullity is the number of non-pivot columns, which is . For (d), the system is consistent, since the last column is not a pivot column. The dimension of the solution set is , since there are free variables. For (e), the solution set is parametrized by variables and in the equations:   Then we have   Thus, the solution set is given parametrically by    "
},
{
  "id": "rref-exercise-2",
  "level": "2",
  "url": "#rref-exercise-2",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Consider the following matrix:    Is this matrix in reduced row echelon form? If not, explain why. What row operation would put it in reduced row echelon form?  What are the pivot columns?  Are the columns spanning?  Are the rows spanning?  Are the columns linearly independent?  Suppose this is the coefficient matrix of a linear system with right-hand side all 's. Describe the solution set to the resulting linear system parametrically.     For (a), it is not in reduced row echelon form, because there is a zero row above a row with some nonzero entry. This can be fixed by swapping row and . For (b), both columns are pivot columns. For (c), the rank is the number of columns, which is . Since the rank is less than the number of rows, the columns are not spanning. For (d), since the rank is the number of columns, the rows are spanning. For (e), the columns are linearly independent, since they are all pivot columns. For (f), since the rank is , the nullity is , and so there is a unique solution given by .   "
},
{
  "id": "rref-exercise-3",
  "level": "2",
  "url": "#rref-exercise-3",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Consider the following matrix:    Is this matrix in reduced row echelon form? If not, explain why. What row operation would put it in reduced row echelon form?  Which are the pivot columns?  Which are the free variable columns?  What is the rank, and what is the nullity?  Are the rows spanning?  Are the columns spanning?  Suppose that is the coefficient matrix of a linear system with right hand side before row reduction if any is done . What is the solution set?     For (a), it is not in reduced row echelon form, the second column has to be a pivot column, since the second row has leading term in that column, and there are two nonzero elements. Subtracting the second row from the first fixes it. For (b), all columns are pivot columns, and so for (c), there are no free variable columns. For (d), the rank is since there are three pivot columns, and so the nullity is . For (e), the rows are spanning, since the rank is equal to the number of columns. For (f), the columns are spanning, since the rank is equal to the number of rows. For (g), the linear system would be   Thus, the solution is and , and it is unique.   "
},
{
  "id": "representations-exercise-1",
  "level": "2",
  "url": "#representations-exercise-1",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Consider the linear equation with vector coefficients    Convert this to a matrix equation.  Add the column to the coefficient matrix in your matrix equation. What does that correspond to when you convert back to the linear equation with vector coefficients? What is a solution to the equation?  If you take the augmented matrix of the original system and put it in reduced row echelon form, you find:   Is the system consistent? If there is a solution, find a parametrization of the solution set.      For (a), you get the matrix equation:   For (b), when you convert back to linear equation with vector coefficients, you get   You get that and is a solution.  For (c), the last column is a pivot column, so it is not consistent. That is, there is no solution to parametrize.   "
},
{
  "id": "representations-exercise-2",
  "level": "2",
  "url": "#representations-exercise-2",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Consider the following coefficient matrix   for the equation .   What would the linear equation with vector coefficients be if we converted?  Suppose that is a solution to this equation. What must equal?  In reduced row echelon form, the matrix is the identity matrix   Does that mean a solution exists for all choices of ? Is a solution always unique when it exists?      For (a), then it would be   For (b), we would find   so the right hand side is .  For (c), since the coefficient matrix has at least number of rows many pivot columns in reduced row echelon form, a solution always exists. Furthermore, since every column is a pivot column the solution is always unique.   "
},
{
  "id": "representations-exercise-3",
  "level": "2",
  "url": "#representations-exercise-3",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Consider the following system of linear equations   in variables and .   Rewrite this as a linear equation with vector coefficients.  Rewrite this as a matrix equation.  Write the augmented matrix of the system.  Explain why if a solution exists, it has to be at least dimensional.     For (a), you could take   For (b), you get   For (c), the augmented matrix is   For (d), the augmented matrix only has rows, so it has at most pivot columns. Thus, there are at least free variable columns. Therefore, if a solution exists, it has to be at least dimensional.   "
},
{
  "id": "modeling-exercise-1",
  "level": "2",
  "url": "#modeling-exercise-1",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Explain in words how you would do the computation to solve the following problems. You do not need to do the computation :   Is in ?  Find an inner description of the collection of x, y, and z satisfying the equation .  Find the dimension of the .     For (a), I'd check if the system   is consistent. To do this, I'd compute the augmented matrix, put it in reduced row echelon form, and check if the last column is a pivot column. If the answer is yes, it is inconsistent. Otherwise, it is consistent.  For (b), the inner description is the parametric description of the solution to the system. I'd convert the linear equation with vector coefficients to the augmented matrix form. Then I'd row reduce. From the reduced row echelon form, I'd translate it back a system of equations and solve for each pivot column variable in terms of the non pivot column variables.  For (c), I'd make them the columns of a matrix   and row reduce. The number of pivot columns is the dimension of their span.   "
},
{
  "id": "modeling-exercise-2",
  "level": "2",
  "url": "#modeling-exercise-2",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Explain how you would do the computation to solve the following problems. You do not need to do the computation :   Write as a linear combination of .  I give you three vectors in . Check if they are spanning.  Consider , , in . How would you check if they are linearly independent?     For (a), interpreting the statement literally, this means solving . I could solve this by constructing the augmented matrix of this system, row reducing, solving the system to get a function of the free variables or a unique solution. Taking any output of that function would yield a solution. Alternatively, I'd also just guess and check and guess .  For (b), first thing I do for spanning is check the number of vectors. There are only three, which is less than the dimension , so I know immediately they are not spanning.  For (c), I'd make them the columns of the matrix:   Then I'd row reduce and check if in the end every column is a pivot column. If yes, they are independent.   "
},
{
  "id": "modeling-exercise-3",
  "level": "2",
  "url": "#modeling-exercise-3",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Explain how you would do the computation to solve the following problems. You do not need to do the computation :   Find an outer representation of .  Find the rank of the matrix .  I give you a matrix equation , and I tell you the columns of are linearly independent and the system is consistent. Determine the dimension of the solution set.     For (a), I'd make these the rows of the coefficient matrix in the matrix equation   Then I'd form the augmented matrix, solve the system, and get a parametric form as a linear function with vector coefficients. Then the vector coefficients would be the rows defining the matrix equation giving the outer representation.  For (b), I'd row reduce it. The number of pivot columns will then tell me the rank.  For (c), the system is consistent, so there is a solution. Since the columns are linearly independent in the coefficient matrix, the solution is unique. Thus, the dimension of the solution set is .   "
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
