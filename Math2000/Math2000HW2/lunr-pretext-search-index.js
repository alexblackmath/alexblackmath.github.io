var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "basic",
  "level": "1",
  "url": "#basic",
  "type": "Article",
  "number": "",
  "title": "The Span Inquisition",
  "body": " The Span Inquisition            Exercises   Vectors, Independence, and Span    Consider the following vectors and . Do the following:   Rewrite in the form , where and all have entries in .    Rewrite in the form , where and all have entries in .    Rewrite in the form , where and all have entries in .    We say vectors are linearly independent if there is no linear combination of them with nonzero coefficients that equals . For example, and are linearly independent, since if , then . However, , , and are not linear independent, because .    Consider the vector equation:     Rewrite this is a system of linear equations.    Solve the linear system.    Based on your solution to part (b), are , , and linearly independent?     Is in the span of , , and ? Explain why or why not.     Matrix Form    Consider the matrix   Consider the vectors     Compute .    Compute .    Compute .    Compute and .    Compute and .      Consider the matrix equation:     Rewrite this as a system of linear equations.    Solve the system of linear equations.    Use your solution to describe the plane spanned by and by a linear equation.     Consider the -plane in spanned by and . Write this plane as a solution set to a system of linear equations.     "
},
{
  "id": "exercises-2-2",
  "level": "2",
  "url": "#exercises-2-2",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Consider the following vectors and . Do the following:   Rewrite in the form , where and all have entries in .    Rewrite in the form , where and all have entries in .    Rewrite in the form , where and all have entries in .   "
},
{
  "id": "exercises-2-4",
  "level": "2",
  "url": "#exercises-2-4",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider the vector equation:     Rewrite this is a system of linear equations.    Solve the linear system.    Based on your solution to part (b), are , , and linearly independent?   "
},
{
  "id": "exercises-2-5",
  "level": "2",
  "url": "#exercises-2-5",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": " Is in the span of , , and ? Explain why or why not.  "
},
{
  "id": "exercises-3-2",
  "level": "2",
  "url": "#exercises-3-2",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Consider the matrix   Consider the vectors     Compute .    Compute .    Compute .    Compute and .    Compute and .   "
},
{
  "id": "exercises-3-3",
  "level": "2",
  "url": "#exercises-3-3",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Consider the matrix equation:     Rewrite this as a system of linear equations.    Solve the system of linear equations.    Use your solution to describe the plane spanned by and by a linear equation.   "
},
{
  "id": "exercises-3-4",
  "level": "2",
  "url": "#exercises-3-4",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": " Consider the -plane in spanned by and . Write this plane as a solution set to a system of linear equations.  "
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
