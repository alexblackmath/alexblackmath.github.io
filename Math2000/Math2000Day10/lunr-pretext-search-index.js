var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Multiply",
  "level": "1",
  "url": "#Multiply",
  "type": "Article",
  "number": "",
  "title": "Go Forth and Transpose",
  "body": " Go Forth and Transpose       Go Forth and Transpose   Linear Transformations Review  Define and .  Are these linear transformations?  If so, what are the matrix representations?  What is ?  What is ?      Dimensions  A matrix is called if it has rows and columns. These are called the dimensions of a matrix. For example, the dimensions of the matrix are .  In particular, henceforth we will be distinguishing between matrices called row vectors  and matrices called column vectors  Previously I was quite laissez faire about the difference between these two, but it is of critical importance. In particular, you cannot add a row vector to a column vector.    Matrix Addition and Scaling  Like vectors, you can rescale matrices by rescaling each of their entries and add them together by adding each of their entries.    Compute:     Warning: You can only add matrices of exactly the same dimensions!    Matrix Multiplication  We know how to multiply a matrix by a vector. For example, and   To multiply by a matrix, we just multiply the matrix by each column: Beyond convenience, there is a reason for this.    Let and be linear transformations. Let and denote their matrix representations. Then  is a linear transformation.  The matrix representation of is .      That's where the definition of matrix multiplication comes from. It's meant to correspond with composing linear transformations. Namely, denote the columns of by be the columns of . Then   Let's look at some examples. Define by to be the identity map. Then Then . Thus, we would guess that . Let's verify it:   What about ? Then . This we can also verify:   Define by . Then , and this corresponds to Matrices have a rich and incredibly deep algebraic structure that is still being actively studied to this day. One thing we can already see that makes them different from numbers is that the number has square roots, whereas the identity matrix seems to have many.  Consider the function that rotates a point by an angle . It turns out this is a linear transformation with matrix representation: You can see this because if you rotate by you get the point , while if you rotate by , you get the point .  Composing rotations by and should give the rotation by . Let's see if this happens: The last step follows from the angle sum trig identities.   Warning: You can only multiply matrices if the dimensions line up, because you have to take dot products. You can only multiply for an matrix and a matrix if ! The number of columns of the first has to equal the number of rows of the second to take the dot products.    Matrix Transposition  Finally we introduce one last operation that is really new called the transpose. For this we swap the entries below the diagonal of the matrix with those above it. For example, In other words, the transpose of a matrix is the matrix whose columns are the rows of in the same order.    Exercises    Consider the matrices   Compute .  Compute and .  Compute and . Do you notice anything interesting about the results?  What is the rank of ?  What is the rank of ?  Compute .  Compute . How does the answer compare to part (f)?        Consider the matrices:   Can you add and ?  Can you multiply by ? If so, compute .  Can you multiply by ? If so, compute .        Let be an matrix.  What are the dimensions of its transpose?  Can you always do the multiplication ? If so, what are the dimensions of ?  Can you always do the multiplication ? If so, what are the dimensions of ?  Compute several examples of for matrices. What are some observations that you can make about the structure of these matrices? Can you guess which ones arise in this way?             "
},
{
  "id": "Math2000Day10-3-2",
  "level": "2",
  "url": "#Math2000Day10-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dimensions "
},
{
  "id": "Math2000Day10-3-3",
  "level": "2",
  "url": "#Math2000Day10-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row vectors column vectors "
},
{
  "id": "Math2000Day10-4-3",
  "level": "2",
  "url": "#Math2000Day10-4-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Compute:    "
},
{
  "id": "Math2000Day10-5-4",
  "level": "2",
  "url": "#Math2000Day10-5-4",
  "type": "Theorem",
  "number": "1.2",
  "title": "",
  "body": "  Let and be linear transformations. Let and denote their matrix representations. Then  is a linear transformation.  The matrix representation of is .     "
},
{
  "id": "Math2000Day10-7-2",
  "level": "2",
  "url": "#Math2000Day10-7-2",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Consider the matrices   Compute .  Compute and .  Compute and . Do you notice anything interesting about the results?  What is the rank of ?  What is the rank of ?  Compute .  Compute . How does the answer compare to part (f)?     "
},
{
  "id": "Math2000Day10-7-3",
  "level": "2",
  "url": "#Math2000Day10-7-3",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Consider the matrices:   Can you add and ?  Can you multiply by ? If so, compute .  Can you multiply by ? If so, compute .     "
},
{
  "id": "Math2000Day10-7-4",
  "level": "2",
  "url": "#Math2000Day10-7-4",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Let be an matrix.  What are the dimensions of its transpose?  Can you always do the multiplication ? If so, what are the dimensions of ?  Can you always do the multiplication ? If so, what are the dimensions of ?  Compute several examples of for matrices. What are some observations that you can make about the structure of these matrices? Can you guess which ones arise in this way?     "
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
