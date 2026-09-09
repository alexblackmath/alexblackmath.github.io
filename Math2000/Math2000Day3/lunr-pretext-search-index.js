var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase",
  "level": "1",
  "url": "#shorttitlelowercase",
  "type": "Article",
  "number": "",
  "title": "Despicable, ME",
  "body": " Despicable, ME       Reduced Row Echelon Form Review    For each of the following augmented matrices of linear systems, are they in reduced row echelon form, are the systems consistent, and what is the dimension of the solution space if they are?                           Vector Perkins  Today our goal is to introduce yet another notation for writing systems of linear equations. A vector is a list of numbers and typically denoted . The set of all vectors of length is denoted . Examples include:     A vector of length is best thought of as a point in -dimensional space. Given two vectors of the same length we have two core operations we can apply to them:     Addition:     Scalar Multiplication      After break we will learn that these are the two telltale signs that you can use the tools of linear algebra. Putting these two operations together, we get what is called a linear combination:     An example is .  Given a vector , we are often interested in rewriting as a linear combination of other vectors . Finding coefficients to do this corresponds to an expression of the following form:     We call this a linear equation with vector coefficients . An example of such an equation:     If we expand this out by applying our vector operations, we get the following:     This is just a linear system of equations!    Solving a linear equation with vector coefficients is equivalent to solving a system of linear equations .    This also has a geometric interpretation. There are two equivalent viewpoints to think of a -dimensional plane in that we have started to see. There is an equational form such as:     or in parametric form     If we write the parametric form out we get a vector equation     We call such a function a linear function with vector coefficients .    Solutions sets to linear systems correspond to images of linear functions with vector coefficients.    Let's try this for a more complicated system. Consider a linear system with augmented matrix as follows:     We can put in reduced row echelon by applying replacement to subtract times row from row . This yields the matrix:     This is in reduced row echelon form. It has two free variables and . Solving in terms of and , we have     Letting and we get the -plane in given by     As a vector function we get       Span and Independence  From the previous section, we have seen that a plane may always be parametrized as linear function with vector coefficients. Namely, it is the set of all vectors of the form     Ignoring as it is just a translation term, we define the span of a set of vectors to be the set of all linear combinations of those vectors. Then a plane may always be represented by     A set of vectors is called spanning if       A set of vectors in   is spanning if and only if the matrix     has  pivot columns in reduced row echelon form. More generally, the dimension of the span of is the number of pivots of that matrixin reduced row echelon form.    Oftentimes a list of vectors is redundant in that you can remove a vector from the list and get the same span. This happens when one of the vectors may be written as a linear combination of the others. In that case, we call the vectors linearly dependent and linearly independent otherwise.    The following are equivalent for vectors in :      are linearly independent    If , then for all .    All columns of the matrix are pivot columns in reduced row echelon form.         Exercises    Let , .     Compute .      Compute .      Compute . How does your answer compare to part (b)?      Compute .       Consider the linear system        Write the augmented matrix of the system.      Write the system as a vector equation.      Which one is your favorite?       Consider the linear system        Write the augmented matrix of the system.      Write the system as a vector equation.      Solve the system of equations and write the linear function with vector coefficients describing the solution set.       Consider the following question: Is in the span of and ?      Rewrite this question as a vector equation.      Rewrite it as a system of linear equations.      Solve the linear system. Is the answer yes?       Are , , and linearly independent? Explain why or why not.     "
},
{
  "id": "ex-rref-review",
  "level": "2",
  "url": "#ex-rref-review",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  For each of the following augmented matrices of linear systems, are they in reduced row echelon form, are the systems consistent, and what is the dimension of the solution space if they are?                        "
},
{
  "id": "sec-vector-perkins-2",
  "level": "2",
  "url": "#sec-vector-perkins-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector "
},
{
  "id": "sec-vector-perkins-11",
  "level": "2",
  "url": "#sec-vector-perkins-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear equation with vector coefficients "
},
{
  "id": "thm-vector-equation-system",
  "level": "2",
  "url": "#thm-vector-equation-system",
  "type": "Theorem",
  "number": "2.1",
  "title": "",
  "body": "  Solving a linear equation with vector coefficients is equivalent to solving a system of linear equations .   "
},
{
  "id": "sec-vector-perkins-23",
  "level": "2",
  "url": "#sec-vector-perkins-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear function with vector coefficients "
},
{
  "id": "thm-solution-sets-images",
  "level": "2",
  "url": "#thm-solution-sets-images",
  "type": "Theorem",
  "number": "2.2",
  "title": "",
  "body": "  Solutions sets to linear systems correspond to images of linear functions with vector coefficients.   "
},
{
  "id": "sec-span-independence-4",
  "level": "2",
  "url": "#sec-span-independence-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "span "
},
{
  "id": "sec-span-independence-6",
  "level": "2",
  "url": "#sec-span-independence-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spanning "
},
{
  "id": "thm-spanning-pivots",
  "level": "2",
  "url": "#thm-spanning-pivots",
  "type": "Theorem",
  "number": "3.1",
  "title": "",
  "body": "  A set of vectors in   is spanning if and only if the matrix     has  pivot columns in reduced row echelon form. More generally, the dimension of the span of is the number of pivots of that matrixin reduced row echelon form.   "
},
{
  "id": "sec-span-independence-9",
  "level": "2",
  "url": "#sec-span-independence-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly dependent linearly independent "
},
{
  "id": "thm-linear-independence-equivalences",
  "level": "2",
  "url": "#thm-linear-independence-equivalences",
  "type": "Theorem",
  "number": "3.2",
  "title": "",
  "body": "  The following are equivalent for vectors in :      are linearly independent    If , then for all .    All columns of the matrix are pivot columns in reduced row echelon form.      "
},
{
  "id": "ex-vector-arithmetic",
  "level": "2",
  "url": "#ex-vector-arithmetic",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "",
  "body": "  Let , .     Compute .      Compute .      Compute . How does your answer compare to part (b)?      Compute .    "
},
{
  "id": "ex-system-vector-equation-1",
  "level": "2",
  "url": "#ex-system-vector-equation-1",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "",
  "body": "  Consider the linear system        Write the augmented matrix of the system.      Write the system as a vector equation.      Which one is your favorite?    "
},
{
  "id": "ex-system-vector-equation-2",
  "level": "2",
  "url": "#ex-system-vector-equation-2",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "",
  "body": "  Consider the linear system        Write the augmented matrix of the system.      Write the system as a vector equation.      Solve the system of equations and write the linear function with vector coefficients describing the solution set.    "
},
{
  "id": "ex-span-question",
  "level": "2",
  "url": "#ex-span-question",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "",
  "body": "  Consider the following question: Is in the span of and ?      Rewrite this question as a vector equation.      Rewrite it as a system of linear equations.      Solve the linear system. Is the answer yes?    "
},
{
  "id": "ex-linear-independence",
  "level": "2",
  "url": "#ex-linear-independence",
  "type": "Checkpoint",
  "number": "4.5",
  "title": "",
  "body": "  Are , , and linearly independent? Explain why or why not.   "
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
