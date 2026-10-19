var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Exam2Prep",
  "level": "1",
  "url": "#Exam2Prep",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Day 13",
  "body": " Math 2000 Day 13       Family Friendly Matrices   Games  The games are good practice for the geometry question:  Linear Transformations Game  Area Game      Matrix Notation  Given a matrix , we need a way to specify a given entry. I use the notation for the entry in the th row and th column.    Let and    What is ?  What is ?  Can you do the multiplication ? If so, what are the dimensions of ? What is ?  Can you do the multiplication ? If so, what are the dimensions of ? What is ?   I built a Khan Academy-esque tool to practice this kind of thing with infinite examples. If it's something that you find confusing, I encourage you to try it: Matrix Notation Game .    Diagonal Matrices  For the remainder today, I want to spend a great deal of time on specific families of matrices.  A matrix is called a diagonal matrix if for all . That is, everything other than the diagonal from top left to bottom right is .    A diagonal matrix is always of the form    Explain why if or , the determinant is .  Explain why if and , the determinant is .  Find a general expression for the inverse of the matrix when and are nonzero.   This is a general fact.   The determinant of a diagonal matrix is the product of its diagonal entries.    Find the determinant of    There is also an analogous expression for the inverse.    Upper Triangular Matrices  An upper triangular matrix is a matrix where every entry strictly below the diagonal is equal to .    A upper triangular matrix is always of the form    Explain why if or , the determinant is .  Explain why if and , the determinant is .  Find a general expression for the inverse of the matrix when and are nonzero.   This also generalizes to any upper triangular matrix:   The determinant of an upper triangular matrix is the product of its diagonal entries.   Finding the inverse is more work. Row reduction is a safer bet than an explicit formula.  There is also a notion of a lower triangular matrix , where every entry strictly above the diagonal is equal to . These are precisely the transposes of upper triangular matrices. A general, useful fact is the following:   For any square matrix , the determinant of is equal to the determinant of .    Explain why the determinant of a lower triangular matrix is the product of its diagonal elements.     Permutation Matrices  A matrix is called a permutation matrix if it has precisely one entry equal to in each row and column, and all its other entries are equal to .   Do the following:  Write down all permutation matrices.  Find their determinants, and find inverses for the ones that are invertible.  Write down all permutation matrices.  Find their determinants, and find inverses for the ones that are invertible.     Permutation matrices are precisely those obtained from the identity matrix by only applying interchanges. Consider the following consequences of this fact:   Explain why the determinant of a permutation matrix is always equal to or .  Explain why all permutation matrices are invertible.  Explain why the inverse of a permutation matrix is always a permutation matrix.     Simplest Linear Transformations  One way to think of a linear transformation is as a function whose coordinates are linear combinations of variables. For example, you could get : Each coordinate is a linear combination of the variables, so I can see it's a linear transformation.   Find the matrix for the linear transformation:    One special case is when the output in each coordinate is a variable. For example, given by    Find the matrix for the linear transformation     Find all linear transformations such that their output is a variable in each coordinate. Write down their corresponding matrices.   The linear transformations for permutation matrices are of this form.   Explain why the linear transformation for a permutation matrix is given by a single variable in each coordinate. Try to describe in words what these linear transformations do.     General Linear Group  The set of invertible matrices is called the General Linear Group and denoted .   Find an explicit expression for the inverse of an invertible matrix.     Special Linear Group  The special linear group is the collection of matrices of determinant .   Which of the following operations preserve membership in the special linear group?  Replacing the first row by it minus twice the second row.  Rescaling row by a factor of .  For a matrix, interchanging row and row as well as row and row .   While a fair bit trickier to prove, it turns out that is the collection of matrices obtained from the identity matrix by applying only row replacements. Try to show this for :   Let's consider the case:  Which diagonal matrices have determinant ?  Which upper triangular matrices have determinant ?  Explain why any matrix is either upper triangular or can be made upper triangular by only applying replacements.  Explain why any invertible upper triangular matrix that is not diagonal can be made diagonal with one replacement.  Describe which diagonal matrices have determinant .  Show how to go from a diagonal matrix with determinant to the identity matrix by only applying replacements.          "
},
{
  "id": "matrix-notation-3",
  "level": "2",
  "url": "#matrix-notation-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let and    What is ?  What is ?  Can you do the multiplication ? If so, what are the dimensions of ? What is ?  Can you do the multiplication ? If so, what are the dimensions of ? What is ?  "
},
{
  "id": "diagonal-matrices-3",
  "level": "2",
  "url": "#diagonal-matrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diagonal "
},
{
  "id": "diagonal-matrices-4",
  "level": "2",
  "url": "#diagonal-matrices-4",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  A diagonal matrix is always of the form    Explain why if or , the determinant is .  Explain why if and , the determinant is .  Find a general expression for the inverse of the matrix when and are nonzero.  "
},
{
  "id": "diagonal-matrices-6",
  "level": "2",
  "url": "#diagonal-matrices-6",
  "type": "Theorem",
  "number": "1.3",
  "title": "",
  "body": " The determinant of a diagonal matrix is the product of its diagonal entries.  "
},
{
  "id": "diagonal-matrices-7",
  "level": "2",
  "url": "#diagonal-matrices-7",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": " Find the determinant of   "
},
{
  "id": "upper-triangular-matrices-2",
  "level": "2",
  "url": "#upper-triangular-matrices-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper triangular matrix "
},
{
  "id": "upper-triangular-matrices-3",
  "level": "2",
  "url": "#upper-triangular-matrices-3",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  A upper triangular matrix is always of the form    Explain why if or , the determinant is .  Explain why if and , the determinant is .  Find a general expression for the inverse of the matrix when and are nonzero.  "
},
{
  "id": "upper-triangular-matrices-5",
  "level": "2",
  "url": "#upper-triangular-matrices-5",
  "type": "Theorem",
  "number": "1.6",
  "title": "",
  "body": " The determinant of an upper triangular matrix is the product of its diagonal entries.  "
},
{
  "id": "upper-triangular-matrices-7",
  "level": "2",
  "url": "#upper-triangular-matrices-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lower triangular matrix "
},
{
  "id": "upper-triangular-matrices-8",
  "level": "2",
  "url": "#upper-triangular-matrices-8",
  "type": "Theorem",
  "number": "1.7",
  "title": "",
  "body": " For any square matrix , the determinant of is equal to the determinant of .  "
},
{
  "id": "upper-triangular-matrices-9",
  "level": "2",
  "url": "#upper-triangular-matrices-9",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": " Explain why the determinant of a lower triangular matrix is the product of its diagonal elements.  "
},
{
  "id": "permutation-matrices-2",
  "level": "2",
  "url": "#permutation-matrices-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "permutation matrix "
},
{
  "id": "permutation-matrices-3",
  "level": "2",
  "url": "#permutation-matrices-3",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": " Do the following:  Write down all permutation matrices.  Find their determinants, and find inverses for the ones that are invertible.  Write down all permutation matrices.  Find their determinants, and find inverses for the ones that are invertible.  "
},
{
  "id": "permutation-matrices-4",
  "level": "2",
  "url": "#permutation-matrices-4",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Permutation matrices are precisely those obtained from the identity matrix by only applying interchanges. Consider the following consequences of this fact:   Explain why the determinant of a permutation matrix is always equal to or .  Explain why all permutation matrices are invertible.  Explain why the inverse of a permutation matrix is always a permutation matrix.  "
},
{
  "id": "simplest-linear-transformations-3",
  "level": "2",
  "url": "#simplest-linear-transformations-3",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": " Find the matrix for the linear transformation:   "
},
{
  "id": "simplest-linear-transformations-5",
  "level": "2",
  "url": "#simplest-linear-transformations-5",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": " Find the matrix for the linear transformation   "
},
{
  "id": "simplest-linear-transformations-6",
  "level": "2",
  "url": "#simplest-linear-transformations-6",
  "type": "Checkpoint",
  "number": "1.13",
  "title": "",
  "body": " Find all linear transformations such that their output is a variable in each coordinate. Write down their corresponding matrices.  "
},
{
  "id": "simplest-linear-transformations-8",
  "level": "2",
  "url": "#simplest-linear-transformations-8",
  "type": "Checkpoint",
  "number": "1.14",
  "title": "",
  "body": " Explain why the linear transformation for a permutation matrix is given by a single variable in each coordinate. Try to describe in words what these linear transformations do.  "
},
{
  "id": "general-linear-group-2",
  "level": "2",
  "url": "#general-linear-group-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "General Linear Group "
},
{
  "id": "general-linear-group-3",
  "level": "2",
  "url": "#general-linear-group-3",
  "type": "Checkpoint",
  "number": "1.15",
  "title": "",
  "body": " Find an explicit expression for the inverse of an invertible matrix.  "
},
{
  "id": "special-linear-group-3",
  "level": "2",
  "url": "#special-linear-group-3",
  "type": "Checkpoint",
  "number": "1.16",
  "title": "",
  "body": " Which of the following operations preserve membership in the special linear group?  Replacing the first row by it minus twice the second row.  Rescaling row by a factor of .  For a matrix, interchanging row and row as well as row and row .  "
},
{
  "id": "special-linear-group-5",
  "level": "2",
  "url": "#special-linear-group-5",
  "type": "Checkpoint",
  "number": "1.17",
  "title": "",
  "body": " Let's consider the case:  Which diagonal matrices have determinant ?  Which upper triangular matrices have determinant ?  Explain why any matrix is either upper triangular or can be made upper triangular by only applying replacements.  Explain why any invertible upper triangular matrix that is not diagonal can be made diagonal with one replacement.  Describe which diagonal matrices have determinant .  Show how to go from a diagonal matrix with determinant to the identity matrix by only applying replacements.  "
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
