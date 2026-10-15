var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Normies",
  "level": "1",
  "url": "#Normies",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Homework 4",
  "body": " Math 2301 Homework 4       Normies   Normal Things    Let be an inner product space. Show that for all and ,    A function is convex if, for any and , .    Let be an inner product space. Show that defined by is a convex function.      Quadratic Algebra  Let be an invertible matrix. Define by .    Show that , where we interpret as a matrix.      Show that is an inner product on .      Geometry  Let , and suppose that . Define the hyperplane , the set of vectors orthogonal to .    Show that for any and ,      Let . Define   Show that .  Show that .  What does combining the results of and this exercise tell you?            "
},
{
  "id": "ex-norm-scalar",
  "level": "2",
  "url": "#ex-norm-scalar",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let be an inner product space. Show that for all and ,   "
},
{
  "id": "sec-normal-things-3",
  "level": "2",
  "url": "#sec-normal-things-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convex "
},
{
  "id": "ex-norm-convex",
  "level": "2",
  "url": "#ex-norm-convex",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Let be an inner product space. Show that defined by is a convex function.   "
},
{
  "id": "ex-quadratic-form",
  "level": "2",
  "url": "#ex-quadratic-form",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Show that , where we interpret as a matrix.   "
},
{
  "id": "ex-induced-inner-product",
  "level": "2",
  "url": "#ex-induced-inner-product",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Show that is an inner product on .   "
},
{
  "id": "ex-distance-lower-bound",
  "level": "2",
  "url": "#ex-distance-lower-bound",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Show that for any and ,   "
},
{
  "id": "ex-projection-attains-bound",
  "level": "2",
  "url": "#ex-projection-attains-bound",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Let . Define   Show that .  Show that .  What does combining the results of and this exercise tell you?    "
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
