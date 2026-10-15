var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Ants",
  "level": "1",
  "url": "#Ants",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Exam 2 Practice",
  "body": " Math 2000 Exam 2 Practice       Determined Ants   Matrix Computations  The focus on this exercise will be on computing things about some specific small matrices.    Let and .   Compute  Compute  Compute  What is the determinant of ?  Is invertible?     For (a), For (b): For (c), For (d), For (e),      Let and .   Compute .  Compute  Compute  Compute  For what values of is invertible? Explain.     For (a), since products of diagonal matrices just correspond to multiplying the elements on the diagonal, For (b), For (c), For (d), , so . For (e), note that Then is invertible, if and only if , which is true if and only if .      Let .   Compute  Compute .  Compute .  Is invertible? Explain.  Is invertible? Explain.     For (a), , so For (b), For (c), For (d), , which is invertible. For (e), has a row of zeroes and is therefore not invertible.      Compute Determinants  In this exercise, I will give you three matrices defined implicitly somehow or explicitly, and you will need to either compute their determinants or explain why it's not possible to do so.    Compute the determinants of the following matrices or explain why you can't. Explain your answers:     , where is obtained from the identity matrix by the sequence of operations: Replacement of first row minus the second, Scaling row by , Interchanging rows one and three, Scaling row by , and Replacing row by row minus row .     For (a), apply row replacement to subtract three times the first row from the third row. The resulting matrix has an all row and so has determinant . Replacement does not change the determinant, so the whole matrix has determinant .  For (b), the determinant of a diagonal matrix is the product of the diagonal entries, which is in this case.  For (c), the replacements don't change anything, so we can ignore them. There is one interchange, and a scaling by and , so the determinant in the end is .      Compute the determinants of the following matrices or explain why you can't. Explain your answers:     , where     For (a), the matrix is upper triangular, so the determinant is the product of the diagonal entries, which is .  For (b), it is not square, so you can't take the determinant.  For (c), is one interchange away from and so has determinant . Then      Compute the determinants of the following matrices or explain why you can't. Explain your answers:    , where  where is a matrix obtained from the identity matrix by applying interchanges.     For (a), the third row is the sum of the first , so the rows are linearly dependent. It follows that the matrix is not invertible, and so the matrix has determinant .  For (b), is upper triangular, so its determinant is the product of its diagonal entries, which is . After interchanging, is diagonal with entries and so has determinant . Hence,  For (c), each interchange yields a multiplication by , so the determinant is .      Is the matrix invertible?  In this exercise, I will give you 5 situations. In each, there are three possibilities:   The matrix is definitely invertible.  The matrix is definitely not invertible.  There's not enough information to determine either way.   Your job will be to determine which situation of the you are in and justify why.    Which of the following conditions guarantee a matrix is invertible, guarantee it is not invertible, or does not give enough information to determine one way or another? Explain why for each.   is with rank  is with determinant  is and there exist and both such that  is and is upper triangular  is and     For (a), it is not invertible, since only square matrices are invertible. For (b), it is invertible, since its determinant is nonzero. For (c), since is invertible, . Then . Hence, is invertible, with inverse . For (d), there is not enough information to determine it. For example, the zero matrix is such that and the zero matrix is upper triangular, but it is not invertible. However, the same holds for . It is upper triangular and invertible. Therefore, there is not enough to determine it. For (e), the same two examples work.      Which of the following conditions guarantee a matrix is invertible, guarantee it is not invertible, or does not give enough information to determine one way or another? Explain why for each.   is , and the rows and columns of all sum to .  is , and the rows and columns of all sum to .  The columns of are linearly independent.  is , and  is invertible.     For (a), this is not enough information to determine it. The identity matrix satisfies this and is invertible. However, the matrix with all entries satisfies that and is not invertible.  For (b), it is never invertible. There are various ways to see this, but for example, one can apply three replacements adding row 1 to row 4, then adding row 2 to row 4, and finally row 3 to row 4. After that row 4 would be equal to the sum of the rows, which is . Thus, after applying row operations one finds a matrix with a row of all zeroes. Hence, it is never invertible.  For (c), this is not enough information, since you need to know if is a square matrix or not.  For (d), it is not enough information to determine it. For example, if , then is the zero matrix and so has determinant . Thus, can be invertible. At the same time if , it is not invertible, and The determinant of in that case is still . Thus, it is not enough information to determine it.  For (e), there are various ways to see this. For example, is row equivalent to by rescaling each row by a factor of . Hence, since is invertible, must also be invertible.      Which of the following conditions guarantee a matrix is invertible, guarantee it is not invertible, or does not give enough information to determine one way or another? Explain why for each.   is , and the reduced row echelon form of has pivot columns  is , and has a unique solution  is , and every entry on the diagonal of is equal to for .  is , and all subdeterminants of are nonzero.  is and     For (a), the answer is yes. It implies that the reduced row echelon form has to be the identity matrix.  For (b), the answer is also yes. It implies the columns of are linearly independent meaning that the nullity is , so the rank is , which implies invertibility for an matrix.  For (c), there is not enough information. The identity matrix satisfies this and is invertible. However, the all 's matrix satisfies this but is not invertible, since one row replacement yields a row of all 's.  For (d), there is not enough information to determine it. Note that the determinant of the matrix: is and so it is invertible. Then applying two replacements adding the first row to the latter two rows to get the matrix Define . Then the entries are, up to a nonzero constant scaling, exactly the subdeterminants of . Hence, the subdeterminants of are all nonzero in that case. For a noninvertible example, take The last row is the sum of the previous two rows meaning the rows are linearly dependent and so it is not invertible. By checking each subdeterminant, you can verify they are all nonzero.  For (e), and the zero matrix is equal to its square, so it is not enough information to determine that is invertible.      Geometry    Consider the linear transformation given by Let .   Find the matrix of .  Compute  Describe what does geometrically.  Find the inverse of .  Describe what multiplication by does geometrically.     For (a), the columns of the matrix are the images of the standard basis vectors. Since we have  For (b),  For (c), rotates vectors counterclockwise by and scales their lengths by a factor of .  For (d), because the inverse must undo both operations, Indeed, .  For (e), multiplication by rotates vectors clockwise by and scales their lengths by a factor of .      Let and .   Find a matrix such that .  Find a matrix such that .  Find a matrix such that and .  Explain why for such a matrix , for any point on the -axis, is also on the -axis.     For (a), one choice is . Then .  For (b), one choice is . Then .  For (c), write . Since , the first column must be . The condition then gives and . Therefore, Both conditions are satisfied.  For (d), every point on the -axis has the form for some real number . By linearity, which is again on the -axis.      Consider the pentagon with vertices: .   Draw the pentagon.  Draw a subdivision of the pentagon into triangles.  Find the area of the pentagon.     For (a), plot the five given points and join them in the order , , , , , returning to .  For (b), draw two diagonals from to and . This divides the pentagon into three triangles.  For (c), use as the reference point for each triangle. Each row is one of the other vertices minus , with the coordinate differences shown explicitly: Therefore,   Pentagon with five labeled vertices.     Pentagon subdivided into three triangles by two diagonals from the top vertex.             "
},
{
  "id": "exercise-1-1",
  "level": "2",
  "url": "#exercise-1-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let and .   Compute  Compute  Compute  What is the determinant of ?  Is invertible?     For (a), For (b): For (c), For (d), For (e),   "
},
{
  "id": "exercise-1-2",
  "level": "2",
  "url": "#exercise-1-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Let and .   Compute .  Compute  Compute  Compute  For what values of is invertible? Explain.     For (a), since products of diagonal matrices just correspond to multiplying the elements on the diagonal, For (b), For (c), For (d), , so . For (e), note that Then is invertible, if and only if , which is true if and only if .   "
},
{
  "id": "exercise-1-3",
  "level": "2",
  "url": "#exercise-1-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Let .   Compute  Compute .  Compute .  Is invertible? Explain.  Is invertible? Explain.     For (a), , so For (b), For (c), For (d), , which is invertible. For (e), has a row of zeroes and is therefore not invertible.   "
},
{
  "id": "exercise-2-1",
  "level": "2",
  "url": "#exercise-2-1",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Compute the determinants of the following matrices or explain why you can't. Explain your answers:     , where is obtained from the identity matrix by the sequence of operations: Replacement of first row minus the second, Scaling row by , Interchanging rows one and three, Scaling row by , and Replacing row by row minus row .     For (a), apply row replacement to subtract three times the first row from the third row. The resulting matrix has an all row and so has determinant . Replacement does not change the determinant, so the whole matrix has determinant .  For (b), the determinant of a diagonal matrix is the product of the diagonal entries, which is in this case.  For (c), the replacements don't change anything, so we can ignore them. There is one interchange, and a scaling by and , so the determinant in the end is .   "
},
{
  "id": "exercise-2-2",
  "level": "2",
  "url": "#exercise-2-2",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Compute the determinants of the following matrices or explain why you can't. Explain your answers:     , where     For (a), the matrix is upper triangular, so the determinant is the product of the diagonal entries, which is .  For (b), it is not square, so you can't take the determinant.  For (c), is one interchange away from and so has determinant . Then   "
},
{
  "id": "exercise-2-3",
  "level": "2",
  "url": "#exercise-2-3",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Compute the determinants of the following matrices or explain why you can't. Explain your answers:    , where  where is a matrix obtained from the identity matrix by applying interchanges.     For (a), the third row is the sum of the first , so the rows are linearly dependent. It follows that the matrix is not invertible, and so the matrix has determinant .  For (b), is upper triangular, so its determinant is the product of its diagonal entries, which is . After interchanging, is diagonal with entries and so has determinant . Hence,  For (c), each interchange yields a multiplication by , so the determinant is .   "
},
{
  "id": "exercise-3-1",
  "level": "2",
  "url": "#exercise-3-1",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Which of the following conditions guarantee a matrix is invertible, guarantee it is not invertible, or does not give enough information to determine one way or another? Explain why for each.   is with rank  is with determinant  is and there exist and both such that  is and is upper triangular  is and     For (a), it is not invertible, since only square matrices are invertible. For (b), it is invertible, since its determinant is nonzero. For (c), since is invertible, . Then . Hence, is invertible, with inverse . For (d), there is not enough information to determine it. For example, the zero matrix is such that and the zero matrix is upper triangular, but it is not invertible. However, the same holds for . It is upper triangular and invertible. Therefore, there is not enough to determine it. For (e), the same two examples work.   "
},
{
  "id": "exercise-3-2",
  "level": "2",
  "url": "#exercise-3-2",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Which of the following conditions guarantee a matrix is invertible, guarantee it is not invertible, or does not give enough information to determine one way or another? Explain why for each.   is , and the rows and columns of all sum to .  is , and the rows and columns of all sum to .  The columns of are linearly independent.  is , and  is invertible.     For (a), this is not enough information to determine it. The identity matrix satisfies this and is invertible. However, the matrix with all entries satisfies that and is not invertible.  For (b), it is never invertible. There are various ways to see this, but for example, one can apply three replacements adding row 1 to row 4, then adding row 2 to row 4, and finally row 3 to row 4. After that row 4 would be equal to the sum of the rows, which is . Thus, after applying row operations one finds a matrix with a row of all zeroes. Hence, it is never invertible.  For (c), this is not enough information, since you need to know if is a square matrix or not.  For (d), it is not enough information to determine it. For example, if , then is the zero matrix and so has determinant . Thus, can be invertible. At the same time if , it is not invertible, and The determinant of in that case is still . Thus, it is not enough information to determine it.  For (e), there are various ways to see this. For example, is row equivalent to by rescaling each row by a factor of . Hence, since is invertible, must also be invertible.   "
},
{
  "id": "exercise-3-3",
  "level": "2",
  "url": "#exercise-3-3",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Which of the following conditions guarantee a matrix is invertible, guarantee it is not invertible, or does not give enough information to determine one way or another? Explain why for each.   is , and the reduced row echelon form of has pivot columns  is , and has a unique solution  is , and every entry on the diagonal of is equal to for .  is , and all subdeterminants of are nonzero.  is and     For (a), the answer is yes. It implies that the reduced row echelon form has to be the identity matrix.  For (b), the answer is also yes. It implies the columns of are linearly independent meaning that the nullity is , so the rank is , which implies invertibility for an matrix.  For (c), there is not enough information. The identity matrix satisfies this and is invertible. However, the all 's matrix satisfies this but is not invertible, since one row replacement yields a row of all 's.  For (d), there is not enough information to determine it. Note that the determinant of the matrix: is and so it is invertible. Then applying two replacements adding the first row to the latter two rows to get the matrix Define . Then the entries are, up to a nonzero constant scaling, exactly the subdeterminants of . Hence, the subdeterminants of are all nonzero in that case. For a noninvertible example, take The last row is the sum of the previous two rows meaning the rows are linearly dependent and so it is not invertible. By checking each subdeterminant, you can verify they are all nonzero.  For (e), and the zero matrix is equal to its square, so it is not enough information to determine that is invertible.   "
},
{
  "id": "exercise-4-1",
  "level": "2",
  "url": "#exercise-4-1",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Consider the linear transformation given by Let .   Find the matrix of .  Compute  Describe what does geometrically.  Find the inverse of .  Describe what multiplication by does geometrically.     For (a), the columns of the matrix are the images of the standard basis vectors. Since we have  For (b),  For (c), rotates vectors counterclockwise by and scales their lengths by a factor of .  For (d), because the inverse must undo both operations, Indeed, .  For (e), multiplication by rotates vectors clockwise by and scales their lengths by a factor of .   "
},
{
  "id": "exercise-4-2",
  "level": "2",
  "url": "#exercise-4-2",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Let and .   Find a matrix such that .  Find a matrix such that .  Find a matrix such that and .  Explain why for such a matrix , for any point on the -axis, is also on the -axis.     For (a), one choice is . Then .  For (b), one choice is . Then .  For (c), write . Since , the first column must be . The condition then gives and . Therefore, Both conditions are satisfied.  For (d), every point on the -axis has the form for some real number . By linearity, which is again on the -axis.   "
},
{
  "id": "exercise-4-3",
  "level": "2",
  "url": "#exercise-4-3",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Consider the pentagon with vertices: .   Draw the pentagon.  Draw a subdivision of the pentagon into triangles.  Find the area of the pentagon.     For (a), plot the five given points and join them in the order , , , , , returning to .  For (b), draw two diagonals from to and . This divides the pentagon into three triangles.  For (c), use as the reference point for each triangle. Each row is one of the other vertices minus , with the coordinate differences shown explicitly: Therefore,   Pentagon with five labeled vertices.     Pentagon subdivided into three triangles by two diagonals from the top vertex.     "
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
