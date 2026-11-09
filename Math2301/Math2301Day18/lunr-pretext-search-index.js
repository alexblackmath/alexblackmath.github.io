var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Across",
  "level": "1",
  "url": "#Across",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 18",
  "body": " Math 2301 Day 18       Across the Eigenverse    Inner Products and Norms  We mentioned that inner products are more general than dot products. Here is the most prominent example:    Let be the set of all such that is continuous. Then define . Show that is an inner product.    We noted in class that inner products induce norms. However, norms can be defined more generally: A norm  is a function satisfying the following for all and :    Positive definiteness: for all and .    Positive homogeneity: .    Triangle inequality: .      Define the -norm on by . Show that is a norm.       Let be an inner product space. Then show that .      Show that the -norm does not come from an inner product.       Nilpotence  We call an operator  nilpotent if there exists some such that for all .    Let be the vector space of polynomials of degree at most .     Show that is nilpotent.       Show that there is no nonzero polynomial whose derivative is a nonzero scalar multiple of itself.        Show that any nilpotent operator has no nonzero eigenvalues. Conclude that is the unique eigenspace of .      Show that the zero matrix is the unique symmetric nilpotent matrix.       Commuting Matrices    Let and be two diagonalizable matrices with the same eigenbasis. Show that .      Let be a diagonalizable operator on a finite-dimensional vector space . Let be a subspace of . Suppose that .     Let . Since is diagonalizable, , where each is an eigenvector with pairwise distinct eigenvalues or equal to . Prove by induction on the number of nonzero components that each .      Let be the eigenspaces of . Show that .      Show that is still diagonalizable.       Let and be two diagonalizable matrices, and suppose that .      Show that if is an eigenvector of , then is either or an eigenvector of with the same eigenvalue.      Let be the eigenspace of with eigenvalue . Show that there is a basis of consisting of eigenvectors of .      Show that there is a basis that is an eigenbasis for both and simultaneously.        Quadratic Forms    Show that if is symmetric, for all if and only if is the matrix.       Show that two symmetric matrices and satisfy if and only if .      "
},
{
  "id": "ex-integral-inner-product",
  "level": "2",
  "url": "#ex-integral-inner-product",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let be the set of all such that is continuous. Then define . Show that is an inner product.   "
},
{
  "id": "sec-inner-products-norms-4",
  "level": "2",
  "url": "#sec-inner-products-norms-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "norm "
},
{
  "id": "ex-infinity-norm",
  "level": "2",
  "url": "#ex-infinity-norm",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Define the -norm on by . Show that is a norm.   "
},
{
  "id": "ex-polarization",
  "level": "2",
  "url": "#ex-polarization",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Let be an inner product space. Then show that .   "
},
{
  "id": "ex-infinity-norm-not-inner",
  "level": "2",
  "url": "#ex-infinity-norm-not-inner",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Show that the -norm does not come from an inner product.   "
},
{
  "id": "sec-nilpotence-2",
  "level": "2",
  "url": "#sec-nilpotence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nilpotent "
},
{
  "id": "ex-derivative-nilpotent",
  "level": "2",
  "url": "#ex-derivative-nilpotent",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Let be the vector space of polynomials of degree at most .     Show that is nilpotent.       Show that there is no nonzero polynomial whose derivative is a nonzero scalar multiple of itself.    "
},
{
  "id": "ex-nilpotent-eigenvalues",
  "level": "2",
  "url": "#ex-nilpotent-eigenvalues",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Show that any nilpotent operator has no nonzero eigenvalues. Conclude that is the unique eigenspace of .   "
},
{
  "id": "ex-symmetric-nilpotent",
  "level": "2",
  "url": "#ex-symmetric-nilpotent",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Show that the zero matrix is the unique symmetric nilpotent matrix.   "
},
{
  "id": "ex-same-eigenbasis-commute",
  "level": "2",
  "url": "#ex-same-eigenbasis-commute",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Let and be two diagonalizable matrices with the same eigenbasis. Show that .   "
},
{
  "id": "ex-invariant-subspace-diagonalizable",
  "level": "2",
  "url": "#ex-invariant-subspace-diagonalizable",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Let be a diagonalizable operator on a finite-dimensional vector space . Let be a subspace of . Suppose that .     Let . Since is diagonalizable, , where each is an eigenvector with pairwise distinct eigenvalues or equal to . Prove by induction on the number of nonzero components that each .      Let be the eigenspaces of . Show that .      Show that is still diagonalizable.    "
},
{
  "id": "ex-simultaneous-diagonalization",
  "level": "2",
  "url": "#ex-simultaneous-diagonalization",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Let and be two diagonalizable matrices, and suppose that .      Show that if is an eigenvector of , then is either or an eigenvector of with the same eigenvalue.      Let be the eigenspace of with eigenvalue . Show that there is a basis of consisting of eigenvectors of .      Show that there is a basis that is an eigenbasis for both and simultaneously.    "
},
{
  "id": "ex-zero-quadratic-form",
  "level": "2",
  "url": "#ex-zero-quadratic-form",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Show that if is symmetric, for all if and only if is the matrix.   "
},
{
  "id": "ex-symmetric-part",
  "level": "2",
  "url": "#ex-symmetric-part",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Show that two symmetric matrices and satisfy if and only if .   "
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
