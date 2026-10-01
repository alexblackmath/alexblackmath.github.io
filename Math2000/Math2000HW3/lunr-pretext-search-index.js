var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shortest-paths",
  "level": "1",
  "url": "#shortest-paths",
  "type": "Article",
  "number": "",
  "title": "Matrix of the Trade",
  "body": " Matrix of the Trade              Playing the Game    For each of the following pairs of points, find a matrix taking the first point to the second.    to .    to .    to .    to .    Recall from Math 1800 the geometry of vector addition. Namely, given and , the points , , , and are the vertices of a (possibly degenerate) parallelogram. For example, if and , the parallelogram has vertices , , , and , and is therefore a square.    What property of a linear transformation guarantees that, given the vertices , , , and of a parallelogram and a matrix , the points , , , and are also the vertices of a parallelogram?      Matrices of Linear Transformations    Suppose I have a linear transformation that scales all coordinates by a factor of : .    If , what is the matrix of ?    If , what is the matrix of ?    Describe in words what you think such a matrix would look like in general.      Consider the linear transformation      Compute      Find the matrix of the linear transformation .     Experiment with applying the linear transformation to examples using the following website . Describe in your own words what this linear transformation does geometrically.     Based on your description in part (c), what do you expect to do?      Linear Transformation Properties    Consider the function .    Compute .    Compute .    Compute .    Explain how the results of parts (a), (b), and (c) show that is not a linear transformation.      If I rescale a vector by and then rotate it by , it is the same as rotating it by and then rescaling it by . Rotation is a linear transformation. What property of linear transformations does what I described illustrate?      Matrix Multiplication   Write down an example of each of the following kinds of matrices.   A matrix .    A matrix .    A matrix .    A matrix .    Which pairs of these matrices can you add together? Which pairs can you multiply together, and in what order?      Consider the row vector   and the column vector     Compute using matrix multiplication.    Compute using matrix multiplication.    What is the rank of the resulting matrix in part (a)? Explain.    What is the rank of the resulting matrix in part (b)? Explain.      Consider the matrix . Consider the following matrices:       Compute .    Compute .    Compute .    What do you notice about these matrices? How do they relate to one another?      "
},
{
  "id": "playing-the-game-2",
  "level": "2",
  "url": "#playing-the-game-2",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  For each of the following pairs of points, find a matrix taking the first point to the second.    to .    to .    to .    to .   "
},
{
  "id": "playing-the-game-4",
  "level": "2",
  "url": "#playing-the-game-4",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  What property of a linear transformation guarantees that, given the vertices , , , and of a parallelogram and a matrix , the points , , , and are also the vertices of a parallelogram?   "
},
{
  "id": "matrices-of-linear-transformations-2",
  "level": "2",
  "url": "#matrices-of-linear-transformations-2",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Suppose I have a linear transformation that scales all coordinates by a factor of : .    If , what is the matrix of ?    If , what is the matrix of ?    Describe in words what you think such a matrix would look like in general.   "
},
{
  "id": "matrices-of-linear-transformations-3",
  "level": "2",
  "url": "#matrices-of-linear-transformations-3",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Consider the linear transformation      Compute      Find the matrix of the linear transformation .     Experiment with applying the linear transformation to examples using the following website . Describe in your own words what this linear transformation does geometrically.     Based on your description in part (c), what do you expect to do?   "
},
{
  "id": "linear-transformation-properties-2",
  "level": "2",
  "url": "#linear-transformation-properties-2",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Consider the function .    Compute .    Compute .    Compute .    Explain how the results of parts (a), (b), and (c) show that is not a linear transformation.   "
},
{
  "id": "linear-transformation-properties-3",
  "level": "2",
  "url": "#linear-transformation-properties-3",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  If I rescale a vector by and then rotate it by , it is the same as rotating it by and then rescaling it by . Rotation is a linear transformation. What property of linear transformations does what I described illustrate?   "
},
{
  "id": "matrix-multiplication-2",
  "level": "2",
  "url": "#matrix-multiplication-2",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": " Write down an example of each of the following kinds of matrices.   A matrix .    A matrix .    A matrix .    A matrix .    Which pairs of these matrices can you add together? Which pairs can you multiply together, and in what order?   "
},
{
  "id": "matrix-multiplication-3",
  "level": "2",
  "url": "#matrix-multiplication-3",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Consider the row vector   and the column vector     Compute using matrix multiplication.    Compute using matrix multiplication.    What is the rank of the resulting matrix in part (a)? Explain.    What is the rank of the resulting matrix in part (b)? Explain.   "
},
{
  "id": "matrix-multiplication-4",
  "level": "2",
  "url": "#matrix-multiplication-4",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Consider the matrix . Consider the following matrices:       Compute .    Compute .    Compute .    What do you notice about these matrices? How do they relate to one another?   "
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
