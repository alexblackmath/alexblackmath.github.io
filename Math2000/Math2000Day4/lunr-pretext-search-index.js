var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "affine",
  "level": "1",
  "url": "#affine",
  "type": "Article",
  "number": "",
  "title": "The Span Inquisition",
  "body": " The Span Inquisition        Linear Equations with Vector Coefficients Review    Consider the following pair of linear equations with vector coefficients: and    What is a solution to the first equation?  What is a solution to the second equation?  What happens when we add the two?       Reduced Row Echelon Form (RREF)  Matrix Representations  Another crucial operation for vectors is the dot product For example, .  Given a system of linear equations: We can rewrite these equations using dot products with vectors, However, to save money and time on parentheses and rewriting , we just write this using the coefficient matrix as If we're being really succinct, I call the coeffient matrix , the variables , and the righthand side . Then we finally arrive at the standard way of writing down a system of linear equations In particular, given an matrix , I can define its multiplication with a vector in by For example,     Solving a system of linear equations corresponds to solving the matrix vector equation , where is the coefficient matrix of the linear system and is the right hand side.      Two Ways to Represent a -Dimensional Plane  Consider the plane A parametric solution to the system is the following: In other words, the plane is .  The first is an equational or outer representation. It tells you what the plane is by giving you a way to test by plugging it into the equation, but it does not give you a way to generate any vector in the plane without solving a linear system.  The second is a parametric or inner representation. This gives you an easy way to get vectors in the plane, but testing if a vector is in the plane corresponds to solving a linear system.  We've already covered how to go from an outer representation to an inner. That's what Gaussian elimination does. But how does one go from an inner representation to an outer one?  In concrete terms: Given a collection of vectors, how do we find an equation describing their span?  This is where the dot product interpretation comes to help us. The key observation is: If a vector is in a row of our matrix representation it must dot product with each vector in the span to equal . In other words, for and it must be a solution to the equation: We can solve this. The augmented matrix is Replacing row with row - row yields Rescaling the second row by gives Then interchanging yields the reduced row echelon form: The first two columns are pivot columns, and the equations are and . Thus, the solution is , so the solution set is .  It turns out then that is the row of the coefficient matrix in the equation defining is defined by the matrix equation: In fact, that is how it always works. If you want to find an outer representation for the span of a set of vectors:  Put those vectors as rows of a matrix in the equation .  Solve that equation.  Write that solution as a span of vectors.  Those vectors are the rows of the matrix in the outer representation .       Exercises    Consider the following system of linear equations:    Write the coefficient and augmented matrix of the system.  Write the system as a linear equation with vector coefficients.  Write the system in matrix-vector form.  Which is your favorite?       Consider the matrix Consider the vectors    Compute  Compute .  Compute  Compute .  Describe what multiplying by does in words. For which vectors does ?       Consider the following linear system defined by the matrix equation:    What is the dimension of the solution set of the linear system?  Solve the linear system by giving a parametric solution.  Write the solution set as a span.  Use your solution to give an outer representation for the plane .       Consider vectors and . Describe their span as the solution set to a system of linear equations.     "
},
{
  "id": "review-2",
  "level": "2",
  "url": "#review-2",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Consider the following pair of linear equations with vector coefficients: and    What is a solution to the first equation?  What is a solution to the second equation?  What happens when we add the two?    "
},
{
  "id": "Section-1-5",
  "level": "2",
  "url": "#Section-1-5",
  "type": "Theorem",
  "number": "2.1",
  "title": "",
  "body": "  Solving a system of linear equations corresponds to solving the matrix vector equation , where is the coefficient matrix of the linear system and is the right hand side.   "
},
{
  "id": "exercises-2",
  "level": "2",
  "url": "#exercises-2",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "",
  "body": "  Consider the following system of linear equations:    Write the coefficient and augmented matrix of the system.  Write the system as a linear equation with vector coefficients.  Write the system in matrix-vector form.  Which is your favorite?    "
},
{
  "id": "exercises-3",
  "level": "2",
  "url": "#exercises-3",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "",
  "body": "  Consider the matrix Consider the vectors    Compute  Compute .  Compute  Compute .  Describe what multiplying by does in words. For which vectors does ?    "
},
{
  "id": "exercises-4",
  "level": "2",
  "url": "#exercises-4",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "",
  "body": "  Consider the following linear system defined by the matrix equation:    What is the dimension of the solution set of the linear system?  Solve the linear system by giving a parametric solution.  Write the solution set as a span.  Use your solution to give an outer representation for the plane .    "
},
{
  "id": "exercises-5",
  "level": "2",
  "url": "#exercises-5",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "",
  "body": "  Consider vectors and . Describe their span as the solution set to a system of linear equations.   "
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
