var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "matroid",
  "level": "1",
  "url": "#matroid",
  "type": "Article",
  "number": "",
  "title": "Matroid Ather F",
  "body": " Matroid Ather F       -->      Subspaces    Let and be two linear transformations. Show that is a linear subspace of .       Let be a linear transformation. Let be the function given by composed with itself times. Show that for all .       Define by .   Show that is a linear transformation.  Find .  Let be the function resulting from composing with itself times. Show that for all .        Independence and Bases  For the following exercise, this does not require a proof. You do still need to explain your answer.    Consider the matrix:   Which subsets of the columns of are bases for ?       Construct a matrix such that any subset of columns of size is a basis.       Let and be linearly independent sets of vectors in a vector space , and suppose that . Show that there exists , such that is linearly independent.       "
},
{
  "id": "exercises-1-2",
  "level": "2",
  "url": "#exercises-1-2",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let and be two linear transformations. Show that is a linear subspace of .    "
},
{
  "id": "exercises-1-3",
  "level": "2",
  "url": "#exercises-1-3",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Let be a linear transformation. Let be the function given by composed with itself times. Show that for all .    "
},
{
  "id": "exercises-1-4",
  "level": "2",
  "url": "#exercises-1-4",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Define by .   Show that is a linear transformation.  Find .  Let be the function resulting from composing with itself times. Show that for all .     "
},
{
  "id": "exercises-2-3",
  "level": "2",
  "url": "#exercises-2-3",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Consider the matrix:   Which subsets of the columns of are bases for ?    "
},
{
  "id": "exercises-2-4",
  "level": "2",
  "url": "#exercises-2-4",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Construct a matrix such that any subset of columns of size is a basis.    "
},
{
  "id": "exercises-2-5",
  "level": "2",
  "url": "#exercises-2-5",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Let and be linearly independent sets of vectors in a vector space , and suppose that . Show that there exists , such that is linearly independent.    "
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
