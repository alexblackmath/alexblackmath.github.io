var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Invert",
  "level": "1",
  "url": "#Invert",
  "type": "Article",
  "number": "",
  "title": "Homework 4",
  "body": " Homework 4       Inversion Conversion    Compute the inverses of the following matrices, or explain why they are not invertible:                           Consider the matrix equation:     Suppose that is invertible and     What is the solution to the equation?      Let be an matrix, and suppose it is invertible. What must its rank and nullity be? Explain your answer.          "
},
{
  "id": "hw4-inverses",
  "level": "2",
  "url": "#hw4-inverses",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Compute the inverses of the following matrices, or explain why they are not invertible:                        "
},
{
  "id": "hw4-matrix-equation",
  "level": "2",
  "url": "#hw4-matrix-equation",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider the matrix equation:     Suppose that is invertible and     What is the solution to the equation?   "
},
{
  "id": "hw4-rank-nullity",
  "level": "2",
  "url": "#hw4-rank-nullity",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Let be an matrix, and suppose it is invertible. What must its rank and nullity be? Explain your answer.   "
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
