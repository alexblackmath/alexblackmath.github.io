var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase",
  "level": "1",
  "url": "#shorttitlelowercase",
  "type": "Article",
  "number": "",
  "title": "Day 2 Solutions",
  "body": " Day 2 Solutions       Exercises   NOTE: You are not expected to have solved all of these exercises in class. Their sole purpose is to start having you think about the material while I'm there, so we can talk about it together.    Consider the following system of linear equations in variables :      Write down the augmented matrix.    The augmented matrix is       Put the augmented matrix in reduced row echelon form.    To put it in reduced row echelon form, you first look for the left most column with nonzero entry. That is your first pivot column. Pick a favorite row whose leading entry is in that column. I pick the first row. Then rescale it so the leading entry is . That is already the case, so I don't do anything. Then for every other row with same leading entry, replace it with the row plus a multiple of the first row that cancels out that entry. Here the only row other than the first with the leading entry in the first column is the second row, so I replace the second row with it plus the first row to get the following:   Now there is a unique row, the first row, with leading entry in the first column, and that entry is equal to . That is what we want, so now we look at all rows with next leftmost leading entry. Here those are rows and . I pick my favorite. Here I choose row . You rescale it so its leading entry. Here that is already the case, so we're golden. Now we take any other row with leading entry in the same column. The only other row like that is row 4. We want to cancel out the entry in that column. To do that we replace it with it plus the suitable scaling of our favorite row, row 3. Here we replace row 4 with row 4 plus row 3.   Now the second column has a unique nonzero entry equal to . We move that row up to the top using interchange directly below the row with the previous pivot element. This yields the following matrix:   Now again we look at the next column with earliest leading entry among the remaining rows. That is the third column. We pick our favorite row with leading entry in that column. That is row . Then we replace any other row with a nonzero entry in that column by adding a scalar multiple of row to cancel it out. In this case, that row would be row . And to cancel out the third entry in row , I subtract row . This yields the following:   Now there is a unique nonzero entry in the third column. It is equal to , and it is in the row at the top among the remaining rows to look at. That means we move on to looking at the last row. I look at the leading entry. It is in column . It is equal to already, so we don't need to scale it. There is other row with a nonzero entry in that column, which is row . We cancel it out with replacement:   After all that labor, the resulting matrix is in reduced row echelon form.      What is the dimension of the solution set?    There are four pivot columns, columns and corresponding to variables . Those are our dependent variables. There are three non-pivot columns. Two correspond to independent variables and . The final column corresponds to constants. Since there are two independent variables, the solution set is two dimensional. The resulting system of equations is       Give an explicit parametrization of the solution set.    Since and are independent variables, to parametrize the solution set, we solve in terms of and . Then we get   Thus, the plane we get if we let and is        Consider the following matrix:      Put the matrix in reduced row echelon form.    The matrix is very close. We just need to do some interchanging. Reorder so that the last row comes first, then the third row comes second, the first row comes third, and the second row comes last. This yields the following matrix:   The resulting matrix is in reduced row echelon form.      Suppose this is the augmented matrix of a linear system. Will that linear system be consistent? Explain why or why not.    Suppose it is the augmented matrix of a linear system. The last column is not a pivot column, so the linear system would be consistent.       Consider the following matrix:   Suppose this is the coefficient matrix of a linear system. For which right hand sides is it consistent?    The augmented matrix for the system would look like:   I could do like last time in put it in reduced row echelon form. Instead if I write out the equations I get,   Then , but and can be any thing. In particular, is always a solution for any choice of and , when .     "
},
{
  "id": "exercises-3",
  "level": "2",
  "url": "#exercises-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Consider the following system of linear equations in variables :      Write down the augmented matrix.    The augmented matrix is       Put the augmented matrix in reduced row echelon form.    To put it in reduced row echelon form, you first look for the left most column with nonzero entry. That is your first pivot column. Pick a favorite row whose leading entry is in that column. I pick the first row. Then rescale it so the leading entry is . That is already the case, so I don't do anything. Then for every other row with same leading entry, replace it with the row plus a multiple of the first row that cancels out that entry. Here the only row other than the first with the leading entry in the first column is the second row, so I replace the second row with it plus the first row to get the following:   Now there is a unique row, the first row, with leading entry in the first column, and that entry is equal to . That is what we want, so now we look at all rows with next leftmost leading entry. Here those are rows and . I pick my favorite. Here I choose row . You rescale it so its leading entry. Here that is already the case, so we're golden. Now we take any other row with leading entry in the same column. The only other row like that is row 4. We want to cancel out the entry in that column. To do that we replace it with it plus the suitable scaling of our favorite row, row 3. Here we replace row 4 with row 4 plus row 3.   Now the second column has a unique nonzero entry equal to . We move that row up to the top using interchange directly below the row with the previous pivot element. This yields the following matrix:   Now again we look at the next column with earliest leading entry among the remaining rows. That is the third column. We pick our favorite row with leading entry in that column. That is row . Then we replace any other row with a nonzero entry in that column by adding a scalar multiple of row to cancel it out. In this case, that row would be row . And to cancel out the third entry in row , I subtract row . This yields the following:   Now there is a unique nonzero entry in the third column. It is equal to , and it is in the row at the top among the remaining rows to look at. That means we move on to looking at the last row. I look at the leading entry. It is in column . It is equal to already, so we don't need to scale it. There is other row with a nonzero entry in that column, which is row . We cancel it out with replacement:   After all that labor, the resulting matrix is in reduced row echelon form.      What is the dimension of the solution set?    There are four pivot columns, columns and corresponding to variables . Those are our dependent variables. There are three non-pivot columns. Two correspond to independent variables and . The final column corresponds to constants. Since there are two independent variables, the solution set is two dimensional. The resulting system of equations is       Give an explicit parametrization of the solution set.    Since and are independent variables, to parametrize the solution set, we solve in terms of and . Then we get   Thus, the plane we get if we let and is     "
},
{
  "id": "exercises-4",
  "level": "2",
  "url": "#exercises-4",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider the following matrix:      Put the matrix in reduced row echelon form.    The matrix is very close. We just need to do some interchanging. Reorder so that the last row comes first, then the third row comes second, the first row comes third, and the second row comes last. This yields the following matrix:   The resulting matrix is in reduced row echelon form.      Suppose this is the augmented matrix of a linear system. Will that linear system be consistent? Explain why or why not.    Suppose it is the augmented matrix of a linear system. The last column is not a pivot column, so the linear system would be consistent.    "
},
{
  "id": "exercises-5",
  "level": "2",
  "url": "#exercises-5",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Consider the following matrix:   Suppose this is the coefficient matrix of a linear system. For which right hand sides is it consistent?    The augmented matrix for the system would look like:   I could do like last time in put it in reduced row echelon form. Instead if I write out the equations I get,   Then , but and can be any thing. In particular, is always a solution for any choice of and , when .   "
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
