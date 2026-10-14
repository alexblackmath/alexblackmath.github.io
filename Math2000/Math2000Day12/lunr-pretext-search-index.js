var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "CauchySchwarz",
  "level": "1",
  "url": "#CauchySchwarz",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 11",
  "body": " Math 2301 Day 11       Determine It   Matrix Inversion Review  Let's find the inverse of the following matrix:       Areas and Volumes    Explore the determinant simulation .    Recall that two vectors starting at the origin span a parallelogram: their sum is its opposite vertex. For example, the vectors and span the following unit square.   The unit square spanned by the standard basis vectors.      The area of this square is . The square corresponds to the matrix     where the rows are the spanning vectors. Let's see how the area changes under elementary row operations.  First, swapping the two rows does not change the area, because the same two vectors span the same parallelogram. If we instead multiply the second row by , we obtain the following rectangle.   Doubling the second spanning vector doubles the area.      We have doubled the height, so the area doubles. More generally, multiplying one row by a nonzero scalar multiplies the area by . The absolute value is essential: area cannot become negative.  The remaining row operation is row replacement. Let's add twice the first row to the second. The resulting matrix is     The corresponding parallelogram is shown below.   Adding a multiple of one spanning vector to another preserves area.      Although the parallelogram has been sheared, its base length and perpendicular height are unchanged. Therefore its area is unchanged.  These observations give a way to find the area of the parallelogram spanned by the rows of any matrix     Reduce to reduced row echelon form while keeping track of row operations. Each row swap or row replacement leaves area unchanged; each multiplication of a row by multiplies area by . If the result is the identity, the original area is     where are the scaling factors used in the reduction. If the reduced row echelon form is not the identity, the rows are linearly dependent and the area is .  The same reasoning holds in higher dimensions. In dimension , three vectors span a parallelepiped . In higher dimensions, the corresponding figures are called parallelotopes . Their volumes are the absolute values of a polynomial function of the matrix entries called the determinant , denoted .  Because elementary row operations are represented by elementary matrices, and every invertible matrix is a product of elementary matrices, we obtain the multiplicative rule for volumes:       The Determinant  The determinant is a signed version of volume. Its sign records orientation, a concept related to the right-hand rule in three dimensions and important in multivariable calculus.  For determinants, unlike unsigned area or volume, the order of rows matters. Interchanging two rows multiplies the determinant by , multiplying one row by multiplies the determinant by , and adding a multiple of one row to another leaves the determinant unchanged.  For example, subtracting the first row from the second and then swapping the two rows gives     There are explicit formulas for determinants, but row reduction is often more efficient for larger matrices, unless the matrix has a useful special structure. For a matrix, the formula is     For matrices, one can use cofactor expansion, discussed below. A related formal determinant mnemonic also appears when computing cross products.    An matrix is invertible if and only if its determinant is nonzero.      Cofactor Expansion and Inversion  There is an explicit formula for the inverse of an invertible matrix. For an matrix (with ), let be its cofactor matrix , with entries     where is the submatrix obtained by deleting row and column of .   Cofactor Expansion   Expanding along the first row gives the recursive formula       The cofactor matrix also provides an explicit formula for the inverse.    If is invertible, then       The transpose of the cofactor matrix is called the adjugate of , denoted .    Exercises    Compute the determinant of each matrix.                   Find the adjugate of the following matrix:         Find the area of the parallelogram with vertices     The area of a triangle is one-half the area of the parallelogram spanned by two edge vectors from the same vertex. In dimension , the volume of a tetrahedron is one-sixth the volume of the parallelepiped spanned by three such edge vectors.  More generally, for a -dimensional simplex with vertices in , its -dimensional volume is     where is the matrix whose rows are the edge vectors . In dimension , a simplex is a tetrahedron.    Find the volume of the tetrahedron with vertices       Try the related game .           "
},
{
  "id": "exercise-determinant-simulation",
  "level": "2",
  "url": "#exercise-determinant-simulation",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Explore the determinant simulation .   "
},
{
  "id": "figure-unit-square",
  "level": "2",
  "url": "#figure-unit-square",
  "type": "Figure",
  "number": "1.2",
  "title": "",
  "body": " The unit square spanned by the standard basis vectors.     "
},
{
  "id": "figure-scaled-rectangle",
  "level": "2",
  "url": "#figure-scaled-rectangle",
  "type": "Figure",
  "number": "1.3",
  "title": "",
  "body": " Doubling the second spanning vector doubles the area.     "
},
{
  "id": "figure-sheared-parallelogram",
  "level": "2",
  "url": "#figure-sheared-parallelogram",
  "type": "Figure",
  "number": "1.4",
  "title": "",
  "body": " Adding a multiple of one spanning vector to another preserves area.     "
},
{
  "id": "areas-volumes-21",
  "level": "2",
  "url": "#areas-volumes-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallelepiped parallelotopes determinant "
},
{
  "id": "theorem-invertibility-determinant",
  "level": "2",
  "url": "#theorem-invertibility-determinant",
  "type": "Theorem",
  "number": "1.5",
  "title": "",
  "body": "  An matrix is invertible if and only if its determinant is nonzero.   "
},
{
  "id": "cofactor-expansion-and-inversion-2",
  "level": "2",
  "url": "#cofactor-expansion-and-inversion-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cofactor matrix "
},
{
  "id": "theorem-cofactor-expansion",
  "level": "2",
  "url": "#theorem-cofactor-expansion",
  "type": "Theorem",
  "number": "1.6",
  "title": "Cofactor Expansion.",
  "body": " Cofactor Expansion   Expanding along the first row gives the recursive formula      "
},
{
  "id": "theorem-adjugate-inverse",
  "level": "2",
  "url": "#theorem-adjugate-inverse",
  "type": "Theorem",
  "number": "1.7",
  "title": "",
  "body": "  If is invertible, then      "
},
{
  "id": "cofactor-expansion-and-inversion-8",
  "level": "2",
  "url": "#cofactor-expansion-and-inversion-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adjugate "
},
{
  "id": "exercise-determinants",
  "level": "2",
  "url": "#exercise-determinants",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Compute the determinant of each matrix.                "
},
{
  "id": "exercise-adjugate",
  "level": "2",
  "url": "#exercise-adjugate",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Find the adjugate of the following matrix:      "
},
{
  "id": "exercise-parallelogram-area",
  "level": "2",
  "url": "#exercise-parallelogram-area",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Find the area of the parallelogram with vertices    "
},
{
  "id": "exercises-6",
  "level": "2",
  "url": "#exercises-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simplex "
},
{
  "id": "exercise-tetrahedron-volume",
  "level": "2",
  "url": "#exercise-tetrahedron-volume",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Find the volume of the tetrahedron with vertices    "
},
{
  "id": "exercise-related-game",
  "level": "2",
  "url": "#exercise-related-game",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Try the related game .   "
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
