var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "matroid",
  "level": "1",
  "url": "#matroid",
  "type": "Article",
  "number": "",
  "title": "Cogito Ergo Sum and Scale",
  "body": " Cogito Ergo Sum and Scale        Inner to Outer Review  Consider the linear system:     Is the augmented matrix for this system in reduced row echelon form?  What is the solution to this system in parametric form?  What is an outer description of ?      Spanning and Existence of Solutions  One property the vectors have is that any two dimensional vector can be written as a linear combination of them. In notation, In other words, the linear equation with vector coefficients always has a solution. In matrix form   We call such vectors spanning . Today, our first goal is to characterize when a set of vectors is spanning. It turns out by making those vectors the columns of a matrix , this can be entirely determined from the matrix.    A collection of vectors in is spanning if in reduced row echelon form of the matrix with those columns as vectors has pivot columns.    For example, and are not spanning. If you put them as the columns of a matrix, you obtain Doing replacement on the first row by subtracting the second yields the reduced row echelon form: There are only pivot columns and the vectors have entries, so they are not spanning.  The essential reason for this is the number of pivot columns is the number of rows with nonzero entries in reduced row echelon form. If there are fewer than pivot columns, then the bottom row has to be a row of all 's That means if the righthand side has a in the last coordinate, you get the equation , which has no solution.  Reinterpreting this in terms of spans, we find.    If a collection of vectors spans , then .    Why? This is because the matrix with them has at least pivot columns, meaning it has to have at least columns, and is the number of columns. Therefore, .    Independence and Uniqueness of Solutions  Given a linear system of equations of the form , when is a solution unique?  We know from what we have shown so far, that this occurs, when the augmented matrix has no non-pivot columns except its last column in reduced row echelon form. In other words, if you just look at the coefficient matrix, you get the following:    A linear system has a unique solution whenever one exists if and only if all columns of the reduced row echelon form of are pivot columns.    In that case, we say the columns of the matrix are linearly independent . In particular, to relate to the definition, on the homework this means that has a unique solution . Thus, any linear combination of the columns that equals has all coefficients.    Rank-Nullity Theorem  Arguably the most important result in linear algebra is captured by interpolating between these two cases. We define the rank of a matrix to be the dimension of the span of its columns. For example, the following matrix is of rank : This is because its columns span exactly the -plane.  We call the Nullity of a matrix the dimension of the solution set to . For example, consider the system The augmented matrix is which is in reduced row echelon form. It has one free variable, so the solution is dimensional.  For this matrix, we can notice that the rank plus the nullity is always the number of columns of the matrix. This is true in general.   Rank-Nullity Theorem   Let be an matrix. Then the is its number of pivot columns in reduced row echelon form and is its number of non-pivot columns in reduced row echelon form. In particular, .        Consider the matrix     Find its rank.  Find its nullity.  Are the columns spanning?  Are the columns linearly independent?  How could you figure out your answer for parts (c) and (d) from your answers for (a) and (b)?        Consider the matrix     Find its rank.  Find its nullity.  Are the columns spanning?  Are the columns linearly independent?  How could you figure out your answer for parts (c) and (d) from your answers for (a) and (b)?        For each of the following, give an example or explain why you think no such example can exist:  Two distinct vectors in that don't span .  A matrix of rank .  A matrix of rank .  A matrix and a vector in for which has no solution.  A matrix for which always has a solution and the solution is unique.        What must the reduced row echelon form of a matrix for which always has a solution and that solution must be unique look like? Explain why you think so.     "
},
{
  "id": "Section-1-4",
  "level": "2",
  "url": "#Section-1-4",
  "type": "Theorem",
  "number": "2.1",
  "title": "",
  "body": "  A collection of vectors in is spanning if in reduced row echelon form of the matrix with those columns as vectors has pivot columns.   "
},
{
  "id": "Section-1-8",
  "level": "2",
  "url": "#Section-1-8",
  "type": "Theorem",
  "number": "2.2",
  "title": "",
  "body": "  If a collection of vectors spans , then .   "
},
{
  "id": "Section-2-4",
  "level": "2",
  "url": "#Section-2-4",
  "type": "Theorem",
  "number": "3.1",
  "title": "",
  "body": "  A linear system has a unique solution whenever one exists if and only if all columns of the reduced row echelon form of are pivot columns.   "
},
{
  "id": "Section-3-5",
  "level": "2",
  "url": "#Section-3-5",
  "type": "Theorem",
  "number": "4.1",
  "title": "Rank-Nullity Theorem.",
  "body": " Rank-Nullity Theorem   Let be an matrix. Then the is its number of pivot columns in reduced row echelon form and is its number of non-pivot columns in reduced row echelon form. In particular, .   "
},
{
  "id": "exercises-1",
  "level": "2",
  "url": "#exercises-1",
  "type": "Checkpoint",
  "number": "5.1",
  "title": "",
  "body": "  Consider the matrix     Find its rank.  Find its nullity.  Are the columns spanning?  Are the columns linearly independent?  How could you figure out your answer for parts (c) and (d) from your answers for (a) and (b)?     "
},
{
  "id": "exercises-2",
  "level": "2",
  "url": "#exercises-2",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "",
  "body": "  Consider the matrix     Find its rank.  Find its nullity.  Are the columns spanning?  Are the columns linearly independent?  How could you figure out your answer for parts (c) and (d) from your answers for (a) and (b)?     "
},
{
  "id": "exercises-3",
  "level": "2",
  "url": "#exercises-3",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "",
  "body": "  For each of the following, give an example or explain why you think no such example can exist:  Two distinct vectors in that don't span .  A matrix of rank .  A matrix of rank .  A matrix and a vector in for which has no solution.  A matrix for which always has a solution and the solution is unique.     "
},
{
  "id": "exercises-4",
  "level": "2",
  "url": "#exercises-4",
  "type": "Checkpoint",
  "number": "5.4",
  "title": "",
  "body": "  What must the reduced row echelon form of a matrix for which always has a solution and that solution must be unique look like? Explain why you think so.   "
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
