var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Skyrim",
  "level": "1",
  "url": "#Skyrim",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Exam 3 Practice",
  "body": " Math 2000 Exam 3 Practice       Needing Some Vector Space      The exam will consist of 4 questions . There are three categories. The first two contribute one question each, and the last one contributes two questions.     Matrix Computations  I'm going to give you a set of vectors in some vector space, and possibly a linear transformation, and I'm going to ask you to compute stuff for them.    Consider the polynomials , and .   Explain why these are not a basis for polynomials of degree at most .    Write the matrix corresponding to these polynomials in the basis .    Are these polynomials a basis for ?    Note that is in . Find coefficients such that they add to .    Use the Fredholm alternative to argue is not in .       (a) Polynomials of degree at most form a -dimensional space (a basis is ), and three vectors can never span a -dimensional space. Concretely, none of the three involves , so is not in their span.  (b) Expanding, , , and . The columns are the coordinate vectors in the basis :   (c) Yes. Cofactor expanding about the last column, so is invertible and therefore its columns are a basis. Thus, the polynomials corresponding to them are a basis.  (d) We want ,  : The last two give , , and then .  (e) In coordinates, the question is whether is in the column span of or equally whether has a solution. Note that is in , and , so by the Fredholm alternative, this equation has no solution.      Consider the vectors and .   Explain why these vectors are a basis for .    Find coordinates for in that basis.    Consider the linear transformation defined by and . Write as a matrix in the basis .    Take from part (c) and write it in the standard basis , .    Apply to .       (a) The matrix with columns is , with . So are independent, and two independent vectors in the -dimensional space are a basis.  (b) , so the coordinates are .  (c) The columns are the coordinates of and :   (d) With from (a), , and Note that this is to go from a matrix in a weird basis to the normal basis, and so it is instead of .  (e) .      Consider the matrix .   Explain why the columns of are independent.    Are the rows of independent?    Is there a column one can add to such that the resulting set of columns is a basis? If so, find it.    Find a nonzero vector in .    Use the Fredholm alternative to argue that is not in .       (a) There's no way to get either column from scaling the other, so the span changes if you remove either of them meaning they are independent.  (b) No. , so is redundant.  (c) Yes. Take for example   (d) means and . Taking gives .  (e) For to be in , would have to have a solution. But by (d), is in and , so by the Fredholm alternative, it has no solution.       Subspaces  The exercise will focus on the four fundamental subspaces. I will give you a matrix and its reduced row echelon form and ask about the four fundamental subspaces.     Consider the following matrix The reduced row echelon form of is    Explain why the columns of are neither spanning nor independent in .    Find a subset of columns of that is a basis for the column span of .    Find in with and .    Are the rows of independent?    Are the rows of spanning?       Write for the columns of .  (a) Not spanning because the RREF has a zero row, and not independent, because not all columns are pivot columns.  (b) Pivot columns are always a basis for their column span, so columns , , and of are a basis for the column span.  (c) From we get , so . From the last column of the RREF, , so .  (d) No. Independence of rows is preserved under row operations. Since is one of the vectors, they cannot be independent as it is always redundant.  (e) No. vectors can never span .       Consider the following matrix The reduced row echelon form of is    Explain why the columns of are independent.    Explain why the columns of are not spanning in .    Find a vector not in .    Find a nonzero vector in .    Find a basis for .       (a) Every column of the reduced row echelon form is a pivot column.  (b) It has a zero row.  (c) Take for example. If you add it to the columns of , the resulting matrix is lower triangular and has determinant and so they are a basis. Then the columns are independent meaning that is not in the span of the earlier three columns.  (d) Take .  (e) Note that , so by rank-nullity, is -dimensional meaning that is a basis.       Consider the following matrix The reduced row echelon form of is    Explain why the columns of are a basis for .    Are the rows of a basis for ? Explain.    Find a matrix with the same first three columns as and reduced row echelon form     Explain why is dimensional.    Find a basis for .       (a) The columns of a square matrix are a basis exactly when its reduced row echelon form is the identity matrix.  (b) Yes. is a basis means is invertible. Since , that means is invertible, so the rows are a basis too.  (c) You get   (d) Since is and has columns, the rank-nullity theorem says the dimension of is .  (e) Since is dimensional, any nonzero vector in it is a basis. Take for example.        Modeling and Applications  There will be two problems from this category dealing with the applications we have discussed.    In The Elder Scrolls V: Skyrim , you carry around items of various weights but have a limited carrying capacity. Each of these items also comes with some value. Consider the following items:        Item  Weight  Cost (In Septims)    Daedric Cuirass  50  3200    Daedric Helmet  15  1600    Daedric Shield  15  1600    Daedric Boots  10  625    Daedric Gauntlets  6  625        Can you earn precisely septims by selling these items?    Can you earn precisely septims by selling these items?    Say you have a total weight of available. Which items should you obtain to maximize value?    Find a minimal set of items for getting precisely the set of possible values of items you can generate.    Find a minimal set of items for getting precisely the set of possible weights of items you can generate.       For (a), no. The only items of value less than have value , and is not a multiple of .  For (b), take Daedric boots for example.  For (c), the best is two Daedric helmets and three Daedric gauntlets giving a value septims.  For (d), take Daedric Shield and Daedric Boots.  For (e), you can take Daedric Gauntlets, Boots, and Shield.      Link in Legend of Zelda just ate a suspicious leaf, and now the game display is wigging out.   Link's experiencing tunnel vision. Now Link's view narrows to only seeing the middle half in both the horizontal and vertical directions of the screen. How would you describe the new basis after the sus leaf if the initial basis is the standard one?    There's a vase on screen at the point before eating the leaf. Where is it after eating the leaf?    There was an arrow moving on screen in the direction . How do you model that movement as matrix multiplication?    How does the direction of the arrow change after the sus leaf consumption?    Without calculating, write out the change of basis formula to go from your answer in part (c) to your answer in part (d).       (a) Everything on screen is stretched by a factor of : an object at old coordinates is now drawn at . So one unit on the new screen is half of an old unit, and the new basis (written in old coordinates) is   (b) Note that   (c) Moving one step in the direction sends to . A translation is not linear on , so we use homogeneous coordinates :   (d) The arrow still points the same way, but its speed increases so it moves twice the distance. Instead of translating by it goes by .  (e) Extend to homogeneous coordinates as . Then       Consider a network with nodes and edges , , , , and .   Draw the network.    Write an unsigned incidence matrix of the network.    Write a signed incidence matrix for the network.    Are the columns of the unsigned incidence matrix spanning or not?    Are the columns of the signed incidence matrix independent or not?       (a) The network is a -cycle:   A five-cycle graph: nodes 1 through 5 placed evenly around a circle, with edges 1–2, 2–3, 3–4, 4–5, and 5–1.    (b) Rows are nodes and columns are the edges in the order , , , , :   (c) Orient each edge from the smaller node to the larger one, with at the start and at the end:   (d) Spanning. We observed in class that an odd cycle guarantees independence for the unsigned incidence matrix. Independence implies spanning for square matrices (but not for rectangular ones!).  (e) Not independent. You can take , and it is in the kernel of . To be independent, there can't be any nonzero vector in the kernel.      Consider the polygon with vertices in order , , , .   Draw the polygon.    Triangulate the polygon using two triangles.    Write the two barycentric bases for coming from each triangle.    Is the point in either triangle? Argue using the bases.       (a) and (b) The polygon is a trapezoid. Cutting along the diagonal from to gives the triangles with vertices and with vertices . The point from part (d) is marked.   A trapezoid with vertices (0,0), (1,1), (2,1), (3,0), split by a dashed diagonal from (0,0) to (2,1) into an upper triangle T1 and a lower triangle T2. The point (2, .5) is marked in red inside T2.    (c) Use homogeneous coordinates to send each to :   (d) A point is in a triangle exactly when all of its barycentric coordinates are nonnegative, so we write in each basis. In the basis from : One coefficient is negative, so is not in . In the basis from : All coefficients are positive, so  is in (in fact in its interior).      "
},
{
  "id": "ex-polynomials-basis",
  "level": "2",
  "url": "#ex-polynomials-basis",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Consider the polynomials , and .   Explain why these are not a basis for polynomials of degree at most .    Write the matrix corresponding to these polynomials in the basis .    Are these polynomials a basis for ?    Note that is in . Find coefficients such that they add to .    Use the Fredholm alternative to argue is not in .       (a) Polynomials of degree at most form a -dimensional space (a basis is ), and three vectors can never span a -dimensional space. Concretely, none of the three involves , so is not in their span.  (b) Expanding, , , and . The columns are the coordinate vectors in the basis :   (c) Yes. Cofactor expanding about the last column, so is invertible and therefore its columns are a basis. Thus, the polynomials corresponding to them are a basis.  (d) We want ,  : The last two give , , and then .  (e) In coordinates, the question is whether is in the column span of or equally whether has a solution. Note that is in , and , so by the Fredholm alternative, this equation has no solution.   "
},
{
  "id": "ex-change-of-basis-r2",
  "level": "2",
  "url": "#ex-change-of-basis-r2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider the vectors and .   Explain why these vectors are a basis for .    Find coordinates for in that basis.    Consider the linear transformation defined by and . Write as a matrix in the basis .    Take from part (c) and write it in the standard basis , .    Apply to .       (a) The matrix with columns is , with . So are independent, and two independent vectors in the -dimensional space are a basis.  (b) , so the coordinates are .  (c) The columns are the coordinates of and :   (d) With from (a), , and Note that this is to go from a matrix in a weird basis to the normal basis, and so it is instead of .  (e) .   "
},
{
  "id": "ex-fredholm-3x2",
  "level": "2",
  "url": "#ex-fredholm-3x2",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Consider the matrix .   Explain why the columns of are independent.    Are the rows of independent?    Is there a column one can add to such that the resulting set of columns is a basis? If so, find it.    Find a nonzero vector in .    Use the Fredholm alternative to argue that is not in .       (a) There's no way to get either column from scaling the other, so the span changes if you remove either of them meaning they are independent.  (b) No. , so is redundant.  (c) Yes. Take for example   (d) means and . Taking gives .  (e) For to be in , would have to have a solution. But by (d), is in and , so by the Fredholm alternative, it has no solution.   "
},
{
  "id": "ex-subspaces-neither",
  "level": "2",
  "url": "#ex-subspaces-neither",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Consider the following matrix The reduced row echelon form of is    Explain why the columns of are neither spanning nor independent in .    Find a subset of columns of that is a basis for the column span of .    Find in with and .    Are the rows of independent?    Are the rows of spanning?       Write for the columns of .  (a) Not spanning because the RREF has a zero row, and not independent, because not all columns are pivot columns.  (b) Pivot columns are always a basis for their column span, so columns , , and of are a basis for the column span.  (c) From we get , so . From the last column of the RREF, , so .  (d) No. Independence of rows is preserved under row operations. Since is one of the vectors, they cannot be independent as it is always redundant.  (e) No. vectors can never span .   "
},
{
  "id": "ex-subspaces-independent",
  "level": "2",
  "url": "#ex-subspaces-independent",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Consider the following matrix The reduced row echelon form of is    Explain why the columns of are independent.    Explain why the columns of are not spanning in .    Find a vector not in .    Find a nonzero vector in .    Find a basis for .       (a) Every column of the reduced row echelon form is a pivot column.  (b) It has a zero row.  (c) Take for example. If you add it to the columns of , the resulting matrix is lower triangular and has determinant and so they are a basis. Then the columns are independent meaning that is not in the span of the earlier three columns.  (d) Take .  (e) Note that , so by rank-nullity, is -dimensional meaning that is a basis.   "
},
{
  "id": "ex-subspaces-basis",
  "level": "2",
  "url": "#ex-subspaces-basis",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Consider the following matrix The reduced row echelon form of is    Explain why the columns of are a basis for .    Are the rows of a basis for ? Explain.    Find a matrix with the same first three columns as and reduced row echelon form     Explain why is dimensional.    Find a basis for .       (a) The columns of a square matrix are a basis exactly when its reduced row echelon form is the identity matrix.  (b) Yes. is a basis means is invertible. Since , that means is invertible, so the rows are a basis too.  (c) You get   (d) Since is and has columns, the rank-nullity theorem says the dimension of is .  (e) Since is dimensional, any nonzero vector in it is a basis. Take for example.   "
},
{
  "id": "ex-skyrim",
  "level": "2",
  "url": "#ex-skyrim",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  In The Elder Scrolls V: Skyrim , you carry around items of various weights but have a limited carrying capacity. Each of these items also comes with some value. Consider the following items:        Item  Weight  Cost (In Septims)    Daedric Cuirass  50  3200    Daedric Helmet  15  1600    Daedric Shield  15  1600    Daedric Boots  10  625    Daedric Gauntlets  6  625        Can you earn precisely septims by selling these items?    Can you earn precisely septims by selling these items?    Say you have a total weight of available. Which items should you obtain to maximize value?    Find a minimal set of items for getting precisely the set of possible values of items you can generate.    Find a minimal set of items for getting precisely the set of possible weights of items you can generate.       For (a), no. The only items of value less than have value , and is not a multiple of .  For (b), take Daedric boots for example.  For (c), the best is two Daedric helmets and three Daedric gauntlets giving a value septims.  For (d), take Daedric Shield and Daedric Boots.  For (e), you can take Daedric Gauntlets, Boots, and Shield.   "
},
{
  "id": "ex-zelda",
  "level": "2",
  "url": "#ex-zelda",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Link in Legend of Zelda just ate a suspicious leaf, and now the game display is wigging out.   Link's experiencing tunnel vision. Now Link's view narrows to only seeing the middle half in both the horizontal and vertical directions of the screen. How would you describe the new basis after the sus leaf if the initial basis is the standard one?    There's a vase on screen at the point before eating the leaf. Where is it after eating the leaf?    There was an arrow moving on screen in the direction . How do you model that movement as matrix multiplication?    How does the direction of the arrow change after the sus leaf consumption?    Without calculating, write out the change of basis formula to go from your answer in part (c) to your answer in part (d).       (a) Everything on screen is stretched by a factor of : an object at old coordinates is now drawn at . So one unit on the new screen is half of an old unit, and the new basis (written in old coordinates) is   (b) Note that   (c) Moving one step in the direction sends to . A translation is not linear on , so we use homogeneous coordinates :   (d) The arrow still points the same way, but its speed increases so it moves twice the distance. Instead of translating by it goes by .  (e) Extend to homogeneous coordinates as . Then    "
},
{
  "id": "ex-network",
  "level": "2",
  "url": "#ex-network",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Consider a network with nodes and edges , , , , and .   Draw the network.    Write an unsigned incidence matrix of the network.    Write a signed incidence matrix for the network.    Are the columns of the unsigned incidence matrix spanning or not?    Are the columns of the signed incidence matrix independent or not?       (a) The network is a -cycle:   A five-cycle graph: nodes 1 through 5 placed evenly around a circle, with edges 1–2, 2–3, 3–4, 4–5, and 5–1.    (b) Rows are nodes and columns are the edges in the order , , , , :   (c) Orient each edge from the smaller node to the larger one, with at the start and at the end:   (d) Spanning. We observed in class that an odd cycle guarantees independence for the unsigned incidence matrix. Independence implies spanning for square matrices (but not for rectangular ones!).  (e) Not independent. You can take , and it is in the kernel of . To be independent, there can't be any nonzero vector in the kernel.   "
},
{
  "id": "ex-polygon",
  "level": "2",
  "url": "#ex-polygon",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Consider the polygon with vertices in order , , , .   Draw the polygon.    Triangulate the polygon using two triangles.    Write the two barycentric bases for coming from each triangle.    Is the point in either triangle? Argue using the bases.       (a) and (b) The polygon is a trapezoid. Cutting along the diagonal from to gives the triangles with vertices and with vertices . The point from part (d) is marked.   A trapezoid with vertices (0,0), (1,1), (2,1), (3,0), split by a dashed diagonal from (0,0) to (2,1) into an upper triangle T1 and a lower triangle T2. The point (2, .5) is marked in red inside T2.    (c) Use homogeneous coordinates to send each to :   (d) A point is in a triangle exactly when all of its barycentric coordinates are nonnegative, so we write in each basis. In the basis from : One coefficient is negative, so is not in . In the basis from : All coefficients are positive, so  is in (in fact in its interior).   "
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
