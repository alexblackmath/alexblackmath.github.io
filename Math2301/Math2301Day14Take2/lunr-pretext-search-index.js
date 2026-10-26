var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "EigenundEigen",
  "level": "1",
  "url": "#EigenundEigen",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 14",
  "body": " Math 2301 Day 14       We're Doing This Eigen?    Review    Let be a linear transformation between vector spaces. Let be a subspace. Let . Show that is a subspace of .       Eigenstuff  With all of our new tools from orthogonality, we are now going to revisit eigenvectors from the end of math 2000. The rest of the course is focused on building and then extending this theory from diagonalizable square matrices to encompass every matrix. We will conclude with a core application to data science.  First let's remind ourselves about eigenvectors.    Let be a vector space and be an operator. A nonzero vector is an eigenvector of with eigenvalue  if The eigenspace for is the set of eigenvectors with eigenvalue , together with the zero vector.      Let be a vector space and an operator with eigenvalue and be the identity operator. Then the eigenspace of is precisely In particular, it is a linear subspace of .    A vector if and only if which is true if and only if . Thus, the eigenspace is indeed a linear subspace.    For any set , a fixed point of a function is a point such that . For example, for any operator, is a fixed point. Eigenspaces are generalizations of fixed points. Instead of just fixing a point, you fix a subspace.    A subspace is invariant under if .    Eigenspaces are a particular kind of invariant subspace. Recalling from math 2000, for a matrix , an eigenvector is a solution to the equation or equivalently In that class, we then came to the conclusion that a nonzero solution exists exactly when is singular. This happens precisely when This function is a polynomial called the characteristic polynomial of the matrix, and the eigenvalues are the roots of that polynomial. Then computationally finding eigenvalues came down to finding roots of characteristic polynomials, and you'd find eigenvectors after by solving the linear system for each eigenvalue .     Eigenvectors and Bases  From the definition, any two eigenspaces for distinct eigenvalues only intersect at the zero vector. In fact, we get a stronger property.    Let be a vector space and be a linear operator. Nonzero eigenvectors corresponding to distinct eigenvalues are linearly independent.    We do this by induction. Certainly, one eigenvector is independent. Suppose that any set of eigenvectors with distinct eigenvalues is linearly independent. We want to show it is true for eigenvectors.  Let be eigenvectors each with distinct eigenvalues. Suppose for the sake of contradiction that they are linearly dependent. By our inductive hypothesis is linearly independent. Since is linearly dependent, we must then have that is -dimensional.  Define the linear transformation by and extending linearly. Then the image is precisely . Thus, the kernel is one dimensional by the rank-nullity theorem.  Hence, there is a unique nonzero vector up to rescaling such that In particular, since each is nonzero, there exist such that .  Finally now we use that each is an eigenvector with eigenvalue to see that Thus, by the uniqueness of , we must have that there exists such that for all . In particular, and . Since and are both nonzero, this implies , a contradiction. The only assumption we made was that were dependent. Hence, the contradiction implies they are independent, and induction completes the proof.         Diagonalization  One of the primary uses of eigenvalues and eigenvectors is that they allow us to treat almost any matrix as a diagonal matrix via a process called diagonalization.    An operator is diagonalizable over if has a basis consisting of real eigenvectors of .    We call a basis of eigenvectors an eigenbasis . Let be an eigenbasis for an operator with . Then recall the notation for how to go from an operator to a matrix in a basis. We just write the coefficients of the image of each basis element in that basis. Well, , meaning that the th column is just in the th entry and 's otherwise. Thus, written in an eigenbasis, the operator is a diagonal matrix: You may recall that for matrices, using the change of basis formula, if has columns given by an eigenbasis for a matrix , then where is the diagonal matrix of corresponding eigenvalues. You may recall from math 2000 that not every matrix is diagonalizable. Here is a characterization in terms of eigenspaces that follows from what we've shown so far:    An real matrix is diagonalizable if and only if the sum of the dimensions of its real eigenspaces is .    Eigenspaces for distinct eigenvalues combine independently by the preceding theorem. Their union of bases forms an eigenbasis exactly when the total number of basis vectors is .       Iterated Powers  If , then For an initial state , Each eigen-direction evolves independently.     Exercises    Consider the rotation . Show that has no invariant lines and no real eigenvalues. Interpret this geometrically.      Let be an operator on an inner product space. Let be an eigenvector of with eigenvalue . Show that       Let be any matrix. Show that for all , where the inner product is the dot product.    We call a matrix  symmetric if .    Suppose that a matrix is symmetric.     Show that , where the inner product here is the regular old dot product.      Show that eigenvectors of a symmetric matrix with distinct eigenvalues are orthogonal.       "
},
{
  "id": "ex-preimage-subspace",
  "level": "2",
  "url": "#ex-preimage-subspace",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let be a linear transformation between vector spaces. Let be a subspace. Let . Show that is a subspace of .   "
},
{
  "id": "def-eigenvector",
  "level": "2",
  "url": "#def-eigenvector",
  "type": "Definition",
  "number": "1.2",
  "title": "",
  "body": "  Let be a vector space and be an operator. A nonzero vector is an eigenvector of with eigenvalue  if The eigenspace for is the set of eigenvectors with eigenvalue , together with the zero vector.   "
},
{
  "id": "thm-eigenspace-kernel",
  "level": "2",
  "url": "#thm-eigenspace-kernel",
  "type": "Theorem",
  "number": "1.3",
  "title": "",
  "body": "  Let be a vector space and an operator with eigenvalue and be the identity operator. Then the eigenspace of is precisely In particular, it is a linear subspace of .    A vector if and only if which is true if and only if . Thus, the eigenspace is indeed a linear subspace.   "
},
{
  "id": "def-invariant-subspace",
  "level": "2",
  "url": "#def-invariant-subspace",
  "type": "Definition",
  "number": "1.4",
  "title": "",
  "body": "  A subspace is invariant under if .   "
},
{
  "id": "sec-eigenstuff-8",
  "level": "2",
  "url": "#sec-eigenstuff-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic polynomial "
},
{
  "id": "thm-distinct-eigenvalues-independent",
  "level": "2",
  "url": "#thm-distinct-eigenvalues-independent",
  "type": "Theorem",
  "number": "1.5",
  "title": "",
  "body": "  Let be a vector space and be a linear operator. Nonzero eigenvectors corresponding to distinct eigenvalues are linearly independent.    We do this by induction. Certainly, one eigenvector is independent. Suppose that any set of eigenvectors with distinct eigenvalues is linearly independent. We want to show it is true for eigenvectors.  Let be eigenvectors each with distinct eigenvalues. Suppose for the sake of contradiction that they are linearly dependent. By our inductive hypothesis is linearly independent. Since is linearly dependent, we must then have that is -dimensional.  Define the linear transformation by and extending linearly. Then the image is precisely . Thus, the kernel is one dimensional by the rank-nullity theorem.  Hence, there is a unique nonzero vector up to rescaling such that In particular, since each is nonzero, there exist such that .  Finally now we use that each is an eigenvector with eigenvalue to see that Thus, by the uniqueness of , we must have that there exists such that for all . In particular, and . Since and are both nonzero, this implies , a contradiction. The only assumption we made was that were dependent. Hence, the contradiction implies they are independent, and induction completes the proof.    "
},
{
  "id": "def-diagonalizable",
  "level": "2",
  "url": "#def-diagonalizable",
  "type": "Definition",
  "number": "1.6",
  "title": "",
  "body": "  An operator is diagonalizable over if has a basis consisting of real eigenvectors of .   "
},
{
  "id": "sec-diagonalization-4",
  "level": "2",
  "url": "#sec-diagonalization-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eigenbasis "
},
{
  "id": "thm-diagonalizable-dimensions",
  "level": "2",
  "url": "#thm-diagonalizable-dimensions",
  "type": "Theorem",
  "number": "1.7",
  "title": "",
  "body": "  An real matrix is diagonalizable if and only if the sum of the dimensions of its real eigenspaces is .    Eigenspaces for distinct eigenvalues combine independently by the preceding theorem. Their union of bases forms an eigenbasis exactly when the total number of basis vectors is .   "
},
{
  "id": "ex-invariant-lines",
  "level": "2",
  "url": "#ex-invariant-lines",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Consider the rotation . Show that has no invariant lines and no real eigenvalues. Interpret this geometrically.   "
},
{
  "id": "ex-eigen-inner-product",
  "level": "2",
  "url": "#ex-eigen-inner-product",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Let be an operator on an inner product space. Let be an eigenvector of with eigenvalue . Show that    "
},
{
  "id": "ex-transpose-adjoint",
  "level": "2",
  "url": "#ex-transpose-adjoint",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Let be any matrix. Show that for all , where the inner product is the dot product.   "
},
{
  "id": "sec-day14-exercises-5",
  "level": "2",
  "url": "#sec-day14-exercises-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "ex-symmetric-orthogonal",
  "level": "2",
  "url": "#ex-symmetric-orthogonal",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Suppose that a matrix is symmetric.     Show that , where the inner product here is the regular old dot product.      Show that eigenvectors of a symmetric matrix with distinct eigenvalues are orthogonal.    "
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
