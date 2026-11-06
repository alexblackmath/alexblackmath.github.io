var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Eigenverse",
  "level": "1",
  "url": "#Eigenverse",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Exam 2 Practice",
  "body": " Math 2301 Exam 2 Practice       Into the Eigenverse  The exam will be five problems . The first four will each be one question from each the following categories and reflect the examples given. The last will be a challenging surprise. I will grade best four out of five.    Notation    Let be a self-adjoint operator. Show that     By self-adjointness and symmetry,       Show that if and only if .    Note that, by the Cauchy Schwarz inequality, Thus, if and only if the Cauchy Schwarz inequality when applied is an equality. This happens precisely when .      Let be an matrix. Show that     Let denote the th column of . Then        Regression    Write an equation of the form for finding and , where is the equation for the line of best fit through the points , , .    To check if there is a line through these points, you would solve the equation To find the best approximation of a solution, you use the normal equations:       Write a system of linear equations for finding , where is the equation for a parabola through the points , , and .    You can use the following system:       Consider the following graph of a function:   Graph of a periodic function on the interval from 0 to 2 pi. It starts at height 1, rises slightly, dips to 0 at pi over 2, rises back to about 1.1, crosses 1 at pi, falls to a minimum of negative 2 at 3 pi over 2, and returns to 1 at 2 pi.    It is a linear combination of , , , and . Write a system of linear equations for finding the coefficients.    Write the function as Each point read off the graph gives one linear equation in , so we need four points. Be careful: at every multiple of , so if all four points are at multiples of the coefficient drops out and the system cannot determine it. Using the gridlines, we can read off Plugging these in gives the system        Orthogonality    Let be an orthogonal matrix (i.e., ). Show that for all .    Note that Since norms are non-negative, this implies .      Let be a subspace of an inner product space . Show that .    Let . Let . Then . Thus, is orthogonal to every element of . By definition, .      Let be a subspace of an inner product space . Show that .    Let . Then, by orthogonal decomposition, for a unique and . Since and , so , meaning that . It follows that . Hence, .       Spectral Theorem    Show that for any symmetric matrix , there exists a matrix such that and is diagonal.    By the spectral theorem there is an orthonormal basis of consisting of eigenvectors of with eigenvalues . Let be the matrix with columns given by that basis. By orthonormality . Then Thus, is diagonal.      Let be a symmetric matrix. Show that if all eigenvalues of are positive, then for all .    Note that has an orthonormal basis of eigenvectors by the spectral theorem with eigenvalues . Let . Then .  Then by the definition of an inner product, Note that, by orthonormality, if and otherwise. Therefore, By assumption each is positive, so when , .      Let be a linear subspace of an inner product space . Let be the projection operator onto . Show that any orthonormal basis for such that is a basis for is an orthonormal basis of consisting of eigenvectors of .    Let . Then by assumption, so . Hence, is an eigenvector of with eigenvalue .  Let . Then is orthogonal to each of , which are the elements of a basis for . It follows that . Hence, by the definition of a projection operator, , so is an eigenvector of with eigenvalue .      "
},
{
  "id": "ex-self-adjoint",
  "level": "2",
  "url": "#ex-self-adjoint",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let be a self-adjoint operator. Show that     By self-adjointness and symmetry,    "
},
{
  "id": "ex-triangle-equality",
  "level": "2",
  "url": "#ex-triangle-equality",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Show that if and only if .    Note that, by the Cauchy Schwarz inequality, Thus, if and only if the Cauchy Schwarz inequality when applied is an equality. This happens precisely when .   "
},
{
  "id": "ex-quadratic-form-sum",
  "level": "2",
  "url": "#ex-quadratic-form-sum",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Let be an matrix. Show that     Let denote the th column of . Then    "
},
{
  "id": "ex-line-best-fit",
  "level": "2",
  "url": "#ex-line-best-fit",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Write an equation of the form for finding and , where is the equation for the line of best fit through the points , , .    To check if there is a line through these points, you would solve the equation To find the best approximation of a solution, you use the normal equations:    "
},
{
  "id": "ex-parabola",
  "level": "2",
  "url": "#ex-parabola",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Write a system of linear equations for finding , where is the equation for a parabola through the points , , and .    You can use the following system:    "
},
{
  "id": "ex-trig-fit",
  "level": "2",
  "url": "#ex-trig-fit",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Consider the following graph of a function:   Graph of a periodic function on the interval from 0 to 2 pi. It starts at height 1, rises slightly, dips to 0 at pi over 2, rises back to about 1.1, crosses 1 at pi, falls to a minimum of negative 2 at 3 pi over 2, and returns to 1 at 2 pi.    It is a linear combination of , , , and . Write a system of linear equations for finding the coefficients.    Write the function as Each point read off the graph gives one linear equation in , so we need four points. Be careful: at every multiple of , so if all four points are at multiples of the coefficient drops out and the system cannot determine it. Using the gridlines, we can read off Plugging these in gives the system    "
},
{
  "id": "ex-orthogonal-preserves-norm",
  "level": "2",
  "url": "#ex-orthogonal-preserves-norm",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Let be an orthogonal matrix (i.e., ). Show that for all .    Note that Since norms are non-negative, this implies .   "
},
{
  "id": "ex-W-subset-perpperp",
  "level": "2",
  "url": "#ex-W-subset-perpperp",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Let be a subspace of an inner product space . Show that .    Let . Let . Then . Thus, is orthogonal to every element of . By definition, .   "
},
{
  "id": "ex-W-supset-perpperp",
  "level": "2",
  "url": "#ex-W-supset-perpperp",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Let be a subspace of an inner product space . Show that .    Let . Then, by orthogonal decomposition, for a unique and . Since and , so , meaning that . It follows that . Hence, .   "
},
{
  "id": "ex-orthogonal-diagonalization",
  "level": "2",
  "url": "#ex-orthogonal-diagonalization",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Show that for any symmetric matrix , there exists a matrix such that and is diagonal.    By the spectral theorem there is an orthonormal basis of consisting of eigenvectors of with eigenvalues . Let be the matrix with columns given by that basis. By orthonormality . Then Thus, is diagonal.   "
},
{
  "id": "ex-positive-definite",
  "level": "2",
  "url": "#ex-positive-definite",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Let be a symmetric matrix. Show that if all eigenvalues of are positive, then for all .    Note that has an orthonormal basis of eigenvectors by the spectral theorem with eigenvalues . Let . Then .  Then by the definition of an inner product, Note that, by orthonormality, if and otherwise. Therefore, By assumption each is positive, so when , .   "
},
{
  "id": "ex-projection-eigenbasis",
  "level": "2",
  "url": "#ex-projection-eigenbasis",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Let be a linear subspace of an inner product space . Let be the projection operator onto . Show that any orthonormal basis for such that is a basis for is an orthonormal basis of consisting of eigenvectors of .    Let . Then by assumption, so . Hence, is an eigenvector of with eigenvalue .  Let . Then is orthogonal to each of , which are the elements of a basis for . It follows that . Hence, by the definition of a projection operator, , so is an eigenvector of with eigenvalue .   "
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
