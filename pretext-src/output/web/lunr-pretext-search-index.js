var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "supersmash",
  "level": "1",
  "url": "#supersmash",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Day 16",
  "body": " Math 2000 Day 16       Subspace Emissary    Review  What are the two operations you can do in a vector space?    Consider the linear system: Does it have a solution? Why or why not?       Linear Subspaces  Given a vector space , a subset of is a subspace if it has the following three properties:   Contains .     Closure under addition : Adding any two elements of gives you an element of .     Closure under scaling : Rescaling elements of yields other elements of .     There are four subspaces associated to a matrix that each have rich geometric and computational meaning.     A Kernel of Truth  The first type is called the kernel of the matrix.    Let be an matrix. Then the set of vectors in such that is a subspace of called the kernel  .    In other words, is the set of solutions to the system of linear equations .  But why is it a linear subspace?   It contains , since .    If and , then . Thus, a sum of any two elements in the kernel is in the kernel.    If , then for any real number , . Thus, would also be in the kernel.     This is how you make such an argument. You can always just follow these steps. My intermediate linear algebra students have done this a double digit number of times in class. It's a very fundamental argument style.  For example, let . Then is the set of such that and . In other words, it is the -axis.  Similarly, let . Then is the plane satisfying the equation .     Column Span  As we learned, a linear system may not always have a solution if . When does it?  Well, remember that . Thus, has a solution when you can write as a linear combination of the columns of . Thus, the set of all for which a solution exists is exactly the set of linear combinations of columns of . We called this or equally .    For any collection of vectors in , , their span is a linear subspace.    Why? Again we follow our steps. We consider the matrix with as the columns. Then the question becomes: is the set of vectors of the form a subspace?   Note that , so is in the set of vectors of the form .    Since , the sum of any two vectors in the span must still be in the span.    Similarly, since , any rescaling of something in the span is in the span.   Note our reasoning is very similar to what we did for kernels.     Row Span  By the same argument the span of the rows of a matrix is a linear subspace, but what does this subspace mean?  You have a matrix , and you can consider the linear system . For example, . One solution to this system is . This is because , and . Now take . Then that also equals .  In fact, this fact is true in general.    The row-span of consists of all vectors that are rows of valid equations defining . That is, the set of all vectors that dot product with each vector in the kernel of to get .       Row Kernel  The span of the rows is exactly . What about ? It is interpreted as the set of solutions to , but where do those come up?  Let's say has no solution. How do you know? Well, you can row reduce and check whether the last column is a pivot column for the augmented matrix in reduced row echelon form.  But there's another way to phrase this. This is the same as saying there is a way to derive the equation . If that is the case, then there is no solution.  Note that by how row reduction works, any new row is a linear combination of old rows. A linear combination of rows is a vector of the form by the previous discussion. Therefore, we have the following result:   Fredholm Alternative   Either has a solution or there exists in such that .    This ends up being a useful formulation that generalizes to systems of linear inequalities, systems of polynomial equations, and even systems of polynomial inequalities! It's a primary tool in symbolic computation.     Exercises    Reexplain the four subspaces in your own words.      Explain why the vector cannot be obtained from any linear combination of the vectors , , and .      Is the collection of vectors in such that and a subspace of ?      Which of the following are linear subspaces of the vector space of matrices:  Invertible matrices  Noninvertible matrices  Upper triangular matrices  Permutation matrices  Diagonal matrices  Matrices with determinant  Orthogonal matrices (i.e., such that )        Consider the linear system: . Use the Fredholm alternative to explain why it has no solution.      Consider the following linear system .     Without row reducing, explain why this system has a solution and give an example solution.      Does this system have a solution in which each for each ?       "
},
{
  "id": "ex-review-system",
  "level": "2",
  "url": "#ex-review-system",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Consider the linear system: Does it have a solution? Why or why not?   "
},
{
  "id": "sec-linear-subspaces-2",
  "level": "2",
  "url": "#sec-linear-subspaces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace Closure under addition Closure under scaling "
},
{
  "id": "sec-kernel-2",
  "level": "2",
  "url": "#sec-kernel-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "kernel "
},
{
  "id": "thm-kernel-subspace",
  "level": "2",
  "url": "#thm-kernel-subspace",
  "type": "Theorem",
  "number": "1.2",
  "title": "",
  "body": "  Let be an matrix. Then the set of vectors in such that is a subspace of called the kernel  .   "
},
{
  "id": "thm-span-subspace",
  "level": "2",
  "url": "#thm-span-subspace",
  "type": "Theorem",
  "number": "1.3",
  "title": "",
  "body": "  For any collection of vectors in , , their span is a linear subspace.   "
},
{
  "id": "thm-row-span",
  "level": "2",
  "url": "#thm-row-span",
  "type": "Theorem",
  "number": "1.4",
  "title": "",
  "body": "  The row-span of consists of all vectors that are rows of valid equations defining . That is, the set of all vectors that dot product with each vector in the kernel of to get .   "
},
{
  "id": "thm-fredholm",
  "level": "2",
  "url": "#thm-fredholm",
  "type": "Theorem",
  "number": "1.5",
  "title": "Fredholm Alternative.",
  "body": " Fredholm Alternative   Either has a solution or there exists in such that .   "
},
{
  "id": "ex-four-subspaces",
  "level": "2",
  "url": "#ex-four-subspaces",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": "  Reexplain the four subspaces in your own words.   "
},
{
  "id": "ex-not-in-span",
  "level": "2",
  "url": "#ex-not-in-span",
  "type": "Exercise",
  "number": "1.7.2",
  "title": "",
  "body": "  Explain why the vector cannot be obtained from any linear combination of the vectors , , and .   "
},
{
  "id": "ex-quadrant",
  "level": "2",
  "url": "#ex-quadrant",
  "type": "Exercise",
  "number": "1.7.3",
  "title": "",
  "body": "  Is the collection of vectors in such that and a subspace of ?   "
},
{
  "id": "ex-matrix-subspaces",
  "level": "2",
  "url": "#ex-matrix-subspaces",
  "type": "Exercise",
  "number": "1.7.4",
  "title": "",
  "body": "  Which of the following are linear subspaces of the vector space of matrices:  Invertible matrices  Noninvertible matrices  Upper triangular matrices  Permutation matrices  Diagonal matrices  Matrices with determinant  Orthogonal matrices (i.e., such that )     "
},
{
  "id": "ex-fredholm-apply",
  "level": "2",
  "url": "#ex-fredholm-apply",
  "type": "Exercise",
  "number": "1.7.5",
  "title": "",
  "body": "  Consider the linear system: . Use the Fredholm alternative to explain why it has no solution.   "
},
{
  "id": "ex-nonnegative-solution",
  "level": "2",
  "url": "#ex-nonnegative-solution",
  "type": "Exercise",
  "number": "1.7.6",
  "title": "",
  "body": "  Consider the following linear system .     Without row reducing, explain why this system has a solution and give an example solution.      Does this system have a solution in which each for each ?    "
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
