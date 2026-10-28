var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sensing",
  "level": "1",
  "url": "#sensing",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 15",
  "body": " Math 2301 Day 15       Diagonal Lies   Review    What is an eigenvalue?  What is an eigenvector?  What did we show holds for eigenvectors with distinct eigenvalues?      Reminder: From Linear Transformations to Matrices    Given a matrix: , what do we find when we compute ? What about and ?    This observation extends in general to give us the following result:    Given a linear transformation , , where is the matrix with columns .    Note that .    But what about for abstract vector spaces?    Change of Basis  Let be a linear transformation between finite dimensional vector spaces and of dimension and respectively. This linear transformation may be defined abstractly, and instead we want to write it down explicitly.  To do this we take a basis for and for . Then there are linear isomorphisms  and given by   Then we can define a linear transformation by . Then is represented by a matrix , and we say the matrix  represents the linear transformation with respect to the bases and . Different bases give rise to different matrices.  The core question is: What is the natural basis for us to use?    Diagonalization  We'll focus on operators and use the same basis for the domain and co-domain, so here .    An operator is diagonalizable over if has a basis consisting of real eigenvectors of .    We call a basis of eigenvectors an eigenbasis .    Let be an operator, and let be a basis. Then the matrix with respect to representing is diagonal with nonzero entries on the diagonal if and only if is an eigenbasis with nonzero eigenvalues.    Let be the matrix representing . Then is diagonal with nonzero entries on the diagonal if and only if there exist such that for all .  Suppose first that is diagonal. Since represents , for all  . By applying on the left of both sides, we find, , so is an eigenvector for all . Since is diagonal with nonzero entries on the diagonal, it is invertible meaning that must also be a basis.  Suppose instead that is an eigenbasis. Then for all  . Thus, is diagonal.    Intuitively, having a diagonal basis is helpful, but they carry even greater meaning. We'll discuss applications of diagonalization next class and in the exercises. Unfortunately, not all operators are diagonalizable as you'll show in one of the exercises. Our next steps are in pursuit of proving the following spooky theorem called the spectral theorem :    Let be an matrix such that . Then is diagonalizable with real eigenvalues.      Exercises  We know how to take the square of a matrix. But how do we take the square root?    Suppose that an matrix is diagonalizable so and all of its eigenvalues are non-negative. Give an expression for .    This is an important condition. Again like with numbers, not all matrices have real square roots.    Show that the matrix is not diagonalizable andhas no square root.      Show that if an operator has distinct eigenvalues and is dimensional, then has an eigenbasis with respect to .      Suppose that a matrix is symmetric.     Show that , where the inner product here is the regular old dot product.      Show that eigenvectors of a symmetric matrix with distinct eigenvalues are orthogonal.       "
},
{
  "id": "ex-columns",
  "level": "2",
  "url": "#ex-columns",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Given a matrix: , what do we find when we compute ? What about and ?   "
},
{
  "id": "thm-standard-matrix",
  "level": "2",
  "url": "#thm-standard-matrix",
  "type": "Theorem",
  "number": "1.2",
  "title": "",
  "body": "  Given a linear transformation , , where is the matrix with columns .    Note that .   "
},
{
  "id": "sec-change-of-basis-3",
  "level": "2",
  "url": "#sec-change-of-basis-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear isomorphisms "
},
{
  "id": "sec-change-of-basis-4",
  "level": "2",
  "url": "#sec-change-of-basis-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "represents "
},
{
  "id": "def-diagonalizable",
  "level": "2",
  "url": "#def-diagonalizable",
  "type": "Definition",
  "number": "1.3",
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
  "id": "thm-diagonal-iff-eigenbasis",
  "level": "2",
  "url": "#thm-diagonal-iff-eigenbasis",
  "type": "Theorem",
  "number": "1.4",
  "title": "",
  "body": "  Let be an operator, and let be a basis. Then the matrix with respect to representing is diagonal with nonzero entries on the diagonal if and only if is an eigenbasis with nonzero eigenvalues.    Let be the matrix representing . Then is diagonal with nonzero entries on the diagonal if and only if there exist such that for all .  Suppose first that is diagonal. Since represents , for all  . By applying on the left of both sides, we find, , so is an eigenvector for all . Since is diagonal with nonzero entries on the diagonal, it is invertible meaning that must also be a basis.  Suppose instead that is an eigenbasis. Then for all  . Thus, is diagonal.   "
},
{
  "id": "sec-diagonalization-6",
  "level": "2",
  "url": "#sec-diagonalization-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spectral theorem "
},
{
  "id": "thm-spectral",
  "level": "2",
  "url": "#thm-spectral",
  "type": "Theorem",
  "number": "1.5",
  "title": "",
  "body": "  Let be an matrix such that . Then is diagonalizable with real eigenvalues.   "
},
{
  "id": "ex-square-root",
  "level": "2",
  "url": "#ex-square-root",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Suppose that an matrix is diagonalizable so and all of its eigenvalues are non-negative. Give an expression for .   "
},
{
  "id": "ex-no-square-root",
  "level": "2",
  "url": "#ex-no-square-root",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Show that the matrix is not diagonalizable andhas no square root.   "
},
{
  "id": "ex-distinct-eigenvalues",
  "level": "2",
  "url": "#ex-distinct-eigenvalues",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Show that if an operator has distinct eigenvalues and is dimensional, then has an eigenbasis with respect to .   "
},
{
  "id": "ex-symmetric",
  "level": "2",
  "url": "#ex-symmetric",
  "type": "Checkpoint",
  "number": "1.9",
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
