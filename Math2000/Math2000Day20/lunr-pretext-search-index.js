var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Camera",
  "level": "1",
  "url": "#Camera",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Day 20",
  "body": " Math 2000 Day 20       Turning Things Around   Independence, Span, Basis Review  Is the following a basis for polynomials of degree at most ? Find the coordinates of in that basis.    Representing in a Basis  In order to apply linear algebra tools to an abstract vector space , the first step is to find a basis for . Namely, given a linear transformation between two vector spaces, so long as the vector spaces are finite dimensional, one can always write the linear transformation in the form of a matrix.  For example, for polynomials, we could take . Then if we want to use matrix tools, we write out our vectors in that basis: .  Doing so allows us to convert operations that don't seem linear algebraic into ones that are. For example, consider the linear transformation on polynomials given by . For example, . Instead of doing that computation, we can think of as a linear transformation given by . In matrix form restricted to linear polynomials (i.e., ) is and , so the matrix is .    Changing a Basis  Frequently, in applications of linear algebra, there is a basis we need to work in other than the standard basis. This in particular comes up when we care about the signs of the coefficients.  For example, if I want my vectors to be increasing, then I would work in the basis , , . Then a vector is non-negative and increasing if and only if its coefficients are non-negative in this basis. Then it becomes relevant, given a vector such as , how do I write it in a given basis? That is, how do I find , , and such that ? For this, we just put the vectors as columns in a matrix, and then finding , , and is equivalent to finding the solution to . The columns of the matrix correspond in order to , , and . This is solving a linear system, which we can do via row reduction. However, this can be laborious if we need to write many vectors in a basis.  Alternatively, if we need to do this many times, we just compute the inverse of the matrix. Let's do this for our matrix with columns , , and .  Let me show you a new way to do it. We want to convert from the standard basis to the basis . To do this, we write each in terms of the new basis. Note that . The coefficients tell us the columns of the inverse matrix: .   Then to figure out the coefficients in the basis, we just multiply the matrix by the vector: . You can see that . Thus, tells you the coordinates of in the basis given by the columns of .    Matrix Multiplication in a New Basis  What often happens is you talk to someone, and they tell you their favorite basis, and their whole world is written in that basis. Even their linear transformations are written in this strange unearthly language. If someone speaks the language of , they would write the familiar vector as . This is just like how we can think of the polynomial as the vector . This becomes even stranger when one is working with applying linear transformations in an unfamiliar basis.  For example, if I am living in the world with basis , I may consider the linear map sending to , to , and to . In the basis , this may be written in matrix form: . For example, if I were to apply this to the vector , I would first write as . Then , which is .  It turns out there's a general way to deal with this that reflects what we have done. Suppose that you have a linear transformation defined with respect to a basis . That is, I know . Then to figure out how this matrix works in our more familiar basis, we take the matrix . Then if we want to apply to a vector in our language, we first translate into the language of the by applying . Then we apply in that resulting basis, and apply to convert back to our language. Hence, for a linear transformation written in the basis , the result is in the more familiar basis.  For example, taking , we get .  What this observation gives rise to is that given a matrix , there may be a more natural basis to write your matrix in. Is it true that, up to a change of basis, every matrix is diagonal? The answer is no in general, but it turns out that almost every matrix is a diagonal matrix in disguise. That is, there is some basis for which it is a diagonal matrix. Furthermore, up to reordering the elements of the diagonal, the diagonal matrix is unique when it exists. The next unit is devoted to that question.    Exercises    Write down the matrix corresponding to the linear transformation of polynomials of degree at most given by .    We say that we write a vector in a basis if we say the coefficients of that vector when written as a linear combination of those basis elements.    Consider the vectors , , and . Explain why they are a basis, and write the vector in this basis.      Consider the basis for polynomials .    Write in that basis.    Write in that basis.    Write in that basis.    Write in that basis.      Write the matrix of the linear transformation from to with respect to the standard basis for polynomials.      Consider the vectors , , and .    Explain why is a basis.    Write , , and in that basis.    Consider the linear transformation , , and . Write down the matrix of this linear transformation with respect to the basis .    Write down an expression of the form for writing the matrix with respect to the standard basis.      The map can be represented by multiplication by a invertible matrix .    Find .    Find the basis for for barycentric coordinates with respect to the triangle .    Rewrite the matrix in the barycentric coordinate basis.       In Stage 2 of Contra 3: The Alien Wars, you play a shirtless man with a laser gun and a bandana who is not Rambo (His name is actually Bill Rizer). Stage 2 has a top down view with Bill at the center of the screen, and his gun always points upward in the direction . In the game, you can rotate Bill, and the camera rotates with him, always maintaining that Bill is pointed upward. Because we want to model translation as a linear transformation, we will work with coordinates in -D.     Bill moves forward by a step in the direction , but the screen is still centered on him, so the camera moves forward by a step as well. There is a stationary turret on screen at the point . What is its position in the new coordinate system?      Write the matrix that you would multiple by to update the position after moving in the direction .      The turret shoots at Bill from its position . Bill rotates in place by degrees clockwise right as the bullet hits . Where should the bullet be on screen after the rotation? What direction is the bullet moving in after the rotation?      The matrix representing translating for the bullet is . The matrix representing the rotation is . Find the matrix representing the translation of the bullet on screen after rotating.      "
},
{
  "id": "ex-evaluate-at-zero",
  "level": "2",
  "url": "#ex-evaluate-at-zero",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Write down the matrix corresponding to the linear transformation of polynomials of degree at most given by .   "
},
{
  "id": "sec-exercises-3",
  "level": "2",
  "url": "#sec-exercises-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "write a vector in a basis "
},
{
  "id": "ex-scaled-standard-basis",
  "level": "2",
  "url": "#ex-scaled-standard-basis",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider the vectors , , and . Explain why they are a basis, and write the vector in this basis.   "
},
{
  "id": "ex-shifted-polynomial-basis",
  "level": "2",
  "url": "#ex-shifted-polynomial-basis",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Consider the basis for polynomials .    Write in that basis.    Write in that basis.    Write in that basis.    Write in that basis.   "
},
{
  "id": "ex-derivative-matrix",
  "level": "2",
  "url": "#ex-derivative-matrix",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Write the matrix of the linear transformation from to with respect to the standard basis for polynomials.   "
},
{
  "id": "ex-cyclic-map",
  "level": "2",
  "url": "#ex-cyclic-map",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Consider the vectors , , and .    Explain why is a basis.    Write , , and in that basis.    Consider the linear transformation , , and . Write down the matrix of this linear transformation with respect to the basis .    Write down an expression of the form for writing the matrix with respect to the standard basis.   "
},
{
  "id": "ex-barycentric",
  "level": "2",
  "url": "#ex-barycentric",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  The map can be represented by multiplication by a invertible matrix .    Find .    Find the basis for for barycentric coordinates with respect to the triangle .    Rewrite the matrix in the barycentric coordinate basis.   "
},
{
  "id": "ex-turning-camera",
  "level": "2",
  "url": "#ex-turning-camera",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  In Stage 2 of Contra 3: The Alien Wars, you play a shirtless man with a laser gun and a bandana who is not Rambo (His name is actually Bill Rizer). Stage 2 has a top down view with Bill at the center of the screen, and his gun always points upward in the direction . In the game, you can rotate Bill, and the camera rotates with him, always maintaining that Bill is pointed upward. Because we want to model translation as a linear transformation, we will work with coordinates in -D.     Bill moves forward by a step in the direction , but the screen is still centered on him, so the camera moves forward by a step as well. There is a stationary turret on screen at the point . What is its position in the new coordinate system?      Write the matrix that you would multiple by to update the position after moving in the direction .      The turret shoots at Bill from its position . Bill rotates in place by degrees clockwise right as the bullet hits . Where should the bullet be on screen after the rotation? What direction is the bullet moving in after the rotation?      The matrix representing translating for the bullet is . The matrix representing the rotation is . Find the matrix representing the translation of the bullet on screen after rotating.    "
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
