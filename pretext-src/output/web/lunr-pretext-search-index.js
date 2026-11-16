var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Treeson",
  "level": "1",
  "url": "#Treeson",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Day 21",
  "body": " Math 2000 Day 21       ...And its Applications    Reverse Row Reduction    Consider the following reduced row echelon form matrix      Is there a matrix with first column and third column with reduced row echelon form ? If so, construct it. Otherwise, explain why not.      Is there a matrix with first column and third column and reduced row echelon form ? If so, construct it. Otherwise, explain why not.      Which columns of are in the span of the first column?        Consider the following reduced row echelon form matrix      Is there a matrix with first column , second column , and fourth column with reduced row echelon form ? If so, construct it. Otherwise, explain why not.      Is there a matrix with first column , second column , and fourth column with reduced row echelon form ? If so, construct it. Otherwise, explain why not.      Which columns of are in the span of the first two columns?       This time you are given the non-pivot columns instead of the pivot columns. Consider the following reduced row echelon form matrix      Find a matrix with third column and fourth column whose reduced row echelon form is . Is your answer the only possibility?      Is there a matrix with third column and fourth column and reduced row echelon form ? If so, construct it. Otherwise, explain why not.       Find a matrix with no zero entries whose reduced row echelon form is . Can you find one where every entry is positive?      Suppose a matrix has reduced row echelon form , and column of is not a pivot column. Explain how to use the entries of column of to write column of as a linear combination of the pivot columns of . Why do row operations not change this relationship?       Matrix Subspaces and Bases  As a vector space matrices have a standard basis analogous to that of vectors. It consists of matrices with in a single coordinate and 's otherwise.  Recall that the dimension of a vector space is the number of vectors in any basis.    What is the dimension of the vector space of matrices?      Find a basis for the subspace of diagonal matrices. What is the dimension?      Find a general expression for the dimension of the set of diagonal matrices.      Find a basis for the subspace of upper triangular matrices. What is the dimension?       Rotation About a Fixed Point  We learned long ago that rotation is a linear transformation, but this technically depends on your reference frame. If you rotate around the origin , that is a linear transformation and thus corresponds to multiplication by a matrix. But what if you were rotating with respect to (i.e., is fixed and everything rotates around it)?    Take the point and rotate it degrees counterclockwise about . What do you get?      Explain why rotation about is not a linear transformation.    But we can fix this the same way we fix translation. Use homogeneous coordinates instead of . In fact, you can think of this as a change of basis.    Explain intuitively why the following three step procedure would correspond to rotating about by degrees counterclockwise:   Translate by  Rotate degrees about counterclockwise  Translate by .   How would you interpret that in terms of changes of basis?      Find a matrix representing rotation by degrees about the point .       Signed Incidence Matrices  Recall the following website for signed incidence matrices .    What is the maximum rank of a signed incidence matrix for a network on nodes?      Characterize when signed incidence matrices attain their maximum rank.      Characterize when signed incidence matrices attain their maximum rank and have independent columns.      "
},
{
  "id": "ex-reverse-rr-1",
  "level": "2",
  "url": "#ex-reverse-rr-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Consider the following reduced row echelon form matrix      Is there a matrix with first column and third column with reduced row echelon form ? If so, construct it. Otherwise, explain why not.      Is there a matrix with first column and third column and reduced row echelon form ? If so, construct it. Otherwise, explain why not.      Which columns of are in the span of the first column?    "
},
{
  "id": "ex-reverse-rr-2",
  "level": "2",
  "url": "#ex-reverse-rr-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider the following reduced row echelon form matrix      Is there a matrix with first column , second column , and fourth column with reduced row echelon form ? If so, construct it. Otherwise, explain why not.      Is there a matrix with first column , second column , and fourth column with reduced row echelon form ? If so, construct it. Otherwise, explain why not.      Which columns of are in the span of the first two columns?    "
},
{
  "id": "ex-reverse-rr-3",
  "level": "2",
  "url": "#ex-reverse-rr-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  This time you are given the non-pivot columns instead of the pivot columns. Consider the following reduced row echelon form matrix      Find a matrix with third column and fourth column whose reduced row echelon form is . Is your answer the only possibility?      Is there a matrix with third column and fourth column and reduced row echelon form ? If so, construct it. Otherwise, explain why not.    "
},
{
  "id": "ex-reverse-rr-4",
  "level": "2",
  "url": "#ex-reverse-rr-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Find a matrix with no zero entries whose reduced row echelon form is . Can you find one where every entry is positive?   "
},
{
  "id": "ex-reverse-rr-5",
  "level": "2",
  "url": "#ex-reverse-rr-5",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Suppose a matrix has reduced row echelon form , and column of is not a pivot column. Explain how to use the entries of column of to write column of as a linear combination of the pivot columns of . Why do row operations not change this relationship?   "
},
{
  "id": "sec-matrix-subspaces-4",
  "level": "2",
  "url": "#sec-matrix-subspaces-4",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  What is the dimension of the vector space of matrices?   "
},
{
  "id": "sec-matrix-subspaces-5",
  "level": "2",
  "url": "#sec-matrix-subspaces-5",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Find a basis for the subspace of diagonal matrices. What is the dimension?   "
},
{
  "id": "sec-matrix-subspaces-6",
  "level": "2",
  "url": "#sec-matrix-subspaces-6",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Find a general expression for the dimension of the set of diagonal matrices.   "
},
{
  "id": "sec-matrix-subspaces-7",
  "level": "2",
  "url": "#sec-matrix-subspaces-7",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Find a basis for the subspace of upper triangular matrices. What is the dimension?   "
},
{
  "id": "sec-rotation-fixed-point-3",
  "level": "2",
  "url": "#sec-rotation-fixed-point-3",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Take the point and rotate it degrees counterclockwise about . What do you get?   "
},
{
  "id": "sec-rotation-fixed-point-4",
  "level": "2",
  "url": "#sec-rotation-fixed-point-4",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Explain why rotation about is not a linear transformation.   "
},
{
  "id": "sec-rotation-fixed-point-6",
  "level": "2",
  "url": "#sec-rotation-fixed-point-6",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Explain intuitively why the following three step procedure would correspond to rotating about by degrees counterclockwise:   Translate by  Rotate degrees about counterclockwise  Translate by .   How would you interpret that in terms of changes of basis?   "
},
{
  "id": "sec-rotation-fixed-point-7",
  "level": "2",
  "url": "#sec-rotation-fixed-point-7",
  "type": "Checkpoint",
  "number": "1.13",
  "title": "",
  "body": "  Find a matrix representing rotation by degrees about the point .   "
},
{
  "id": "sec-signed-incidence-3",
  "level": "2",
  "url": "#sec-signed-incidence-3",
  "type": "Checkpoint",
  "number": "1.14",
  "title": "",
  "body": "  What is the maximum rank of a signed incidence matrix for a network on nodes?   "
},
{
  "id": "sec-signed-incidence-4",
  "level": "2",
  "url": "#sec-signed-incidence-4",
  "type": "Checkpoint",
  "number": "1.15",
  "title": "",
  "body": "  Characterize when signed incidence matrices attain their maximum rank.   "
},
{
  "id": "sec-signed-incidence-5",
  "level": "2",
  "url": "#sec-signed-incidence-5",
  "type": "Checkpoint",
  "number": "1.16",
  "title": "",
  "body": "  Characterize when signed incidence matrices attain their maximum rank and have independent columns.   "
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
