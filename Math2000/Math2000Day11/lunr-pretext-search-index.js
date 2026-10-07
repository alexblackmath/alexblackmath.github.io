var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ExamPrep",
  "level": "1",
  "url": "#ExamPrep",
  "type": "Article",
  "number": "",
  "title": "Crossing the Line",
  "body": " Crossing the Line      > There and Back Again   Matrix Operations Review    Consider the following matrices:   Compute .  Compute .  Compute .  Compute .        Row Reduction Meets Matrix Multiplication  Recall that an identity matrix  is an matrix with entries equal to on the diagonal and elsewhere. An elementary matrix is an matrix obtained from by applying one elementary row operation.    Which of the following is an elementary matrix?     The following theorem says that row reduction is really a special case of matrix multiplication:    Let be an matrix. Multiplying on the left by an elementary matrix corresponds to applying to the row operation that produced that elementary matrix.    Why do I specify on the left? Complete the following exercise:    Take the elementary matrix Then for the matrix   What row operation does correspond to?  Compute .  Compute .  Based on the result, explain why multiplication on the left matters.       To put a matrix in reduced row echelon form, we apply several row operations. Each one corresponds to multiplying by a corresponding elementary matrix . Let . Then where is the reduced row echelon form of .  To put this into practice, consider the following matrix: Let's compute a matrix to multiply it by on the left to put it into reduced row echelon form: Then we subtract the second row from the first row to get We do the same, subtracting the third row from the second row: Now the first block is the reduced row echelon form of our matrix, and the second block is what we multiply by on the left to get it into reduced row echelon form:     Invertibility  An matrix is called invertible if there exists another matrix such that In that case, we say and call the inverse of .    Play the following game to practice until you get a feel for how to find the inverse of an invertible matrix: .    Why care about invertibility? First off, it allows us to undo a transformation. Let's consider the example of a rotation matrix:     Rotation matrices are invertible.    If we think of matrices as coming from linear transformations, then the inverse corresponds to finding a function that takes you back from where you came from, also called the inverse function . For example, is the inverse function of , because .    Recall that and .  Write down .  Show that is the inverse of .  Explain what this means geometrically in terms of rotations.       From the argument above, an matrix is invertible if one can apply row operations to reach the identity matrix. It turns out these two properties are equivalent.    An matrix is invertible if and only if its reduced row echelon form is the identity matrix.    A second reason invertibility matters so much is that it allows us to efficiently solve linear systems:    Let be an invertible matrix and be in . Explain why is the unique solution to .      Exercises    Give an example of a matrix that is not invertible. Are all matrices invertible?      For each of the following matrices, compute a matrix to multiply it by on the left to put it in reduced row echelon form, and say whether it is invertible:           Explain why, for any matrix , if there exists a matrix such that , then must be a square matrix (i.e., ).      Let be nonzero.  Find the inverse of  Find the inverse of  Find the inverse of  Each of these matrices corresponds to the linear transformation of rescaling each coordinate of your vector by . Explain the geometric intuition for your answers to (a)--(c).  Why did I require that the are all nonzero?        Explain why the following are equivalent to invertibility for an matrix:  The rank of is .  The nullity of is .  has a solution for all choices of .  has a unique solution for all choices of .  is invertible.  is invertible for some choice of matrix .  for some invertible matrices and .             "
},
{
  "id": "Math2000Day11-2-2",
  "level": "2",
  "url": "#Math2000Day11-2-2",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Consider the following matrices:   Compute .  Compute .  Compute .  Compute .     "
},
{
  "id": "Math2000Day11-3-2",
  "level": "2",
  "url": "#Math2000Day11-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix elementary matrix "
},
{
  "id": "Math2000Day11-3-3",
  "level": "2",
  "url": "#Math2000Day11-3-3",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Which of the following is an elementary matrix?    "
},
{
  "id": "Math2000Day11-3-5",
  "level": "2",
  "url": "#Math2000Day11-3-5",
  "type": "Theorem",
  "number": "1.3",
  "title": "",
  "body": "  Let be an matrix. Multiplying on the left by an elementary matrix corresponds to applying to the row operation that produced that elementary matrix.   "
},
{
  "id": "Math2000Day11-3-7",
  "level": "2",
  "url": "#Math2000Day11-3-7",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Take the elementary matrix Then for the matrix   What row operation does correspond to?  Compute .  Compute .  Based on the result, explain why multiplication on the left matters.     "
},
{
  "id": "Math2000Day11-4-2",
  "level": "2",
  "url": "#Math2000Day11-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invertible inverse "
},
{
  "id": "Math2000Day11-4-3",
  "level": "2",
  "url": "#Math2000Day11-4-3",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Play the following game to practice until you get a feel for how to find the inverse of an invertible matrix: .   "
},
{
  "id": "Math2000Day11-4-5",
  "level": "2",
  "url": "#Math2000Day11-4-5",
  "type": "Theorem",
  "number": "1.6",
  "title": "",
  "body": "  Rotation matrices are invertible.   "
},
{
  "id": "Math2000Day11-4-6",
  "level": "2",
  "url": "#Math2000Day11-4-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse function "
},
{
  "id": "Math2000Day11-4-7",
  "level": "2",
  "url": "#Math2000Day11-4-7",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Recall that and .  Write down .  Show that is the inverse of .  Explain what this means geometrically in terms of rotations.     "
},
{
  "id": "Math2000Day11-4-9",
  "level": "2",
  "url": "#Math2000Day11-4-9",
  "type": "Theorem",
  "number": "1.8",
  "title": "",
  "body": "  An matrix is invertible if and only if its reduced row echelon form is the identity matrix.   "
},
{
  "id": "Math2000Day11-4-11",
  "level": "2",
  "url": "#Math2000Day11-4-11",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Let be an invertible matrix and be in . Explain why is the unique solution to .   "
},
{
  "id": "Math2000Day11-5-2",
  "level": "2",
  "url": "#Math2000Day11-5-2",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Give an example of a matrix that is not invertible. Are all matrices invertible?   "
},
{
  "id": "Math2000Day11-5-3",
  "level": "2",
  "url": "#Math2000Day11-5-3",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  For each of the following matrices, compute a matrix to multiply it by on the left to put it in reduced row echelon form, and say whether it is invertible:        "
},
{
  "id": "Math2000Day11-5-4",
  "level": "2",
  "url": "#Math2000Day11-5-4",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Explain why, for any matrix , if there exists a matrix such that , then must be a square matrix (i.e., ).   "
},
{
  "id": "Math2000Day11-5-5",
  "level": "2",
  "url": "#Math2000Day11-5-5",
  "type": "Checkpoint",
  "number": "1.13",
  "title": "",
  "body": "  Let be nonzero.  Find the inverse of  Find the inverse of  Find the inverse of  Each of these matrices corresponds to the linear transformation of rescaling each coordinate of your vector by . Explain the geometric intuition for your answers to (a)--(c).  Why did I require that the are all nonzero?     "
},
{
  "id": "Math2000Day11-5-6",
  "level": "2",
  "url": "#Math2000Day11-5-6",
  "type": "Checkpoint",
  "number": "1.14",
  "title": "",
  "body": "  Explain why the following are equivalent to invertibility for an matrix:  The rank of is .  The nullity of is .  has a solution for all choices of .  has a unique solution for all choices of .  is invertible.  is invertible for some choice of matrix .  for some invertible matrices and .     "
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
