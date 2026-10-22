var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Ordinary",
  "level": "1",
  "url": "#Ordinary",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Homework 5",
  "body": " Math 2301 Homework 5       Orthonormies   Projecting Confidence  Let be a subspace of a finite dimensional inner product space . Define by if is the orthogonal decomposition of with and . This is the projection map.    Explain why is well-defined. That is, show that if , then .      Show that is a linear transformation.      Show that .      Orthonormal Things    Find an orthonormal basis for , where is defined by .      Let be an inner product space, and let . Suppose that for all ,     Show that is linearly independent.    Show that if is -dimensional, is an orthogonal basis.      "
},
{
  "id": "projecting-confidence-3",
  "level": "2",
  "url": "#projecting-confidence-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Explain why is well-defined. That is, show that if , then .   "
},
{
  "id": "projecting-confidence-4",
  "level": "2",
  "url": "#projecting-confidence-4",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Show that is a linear transformation.   "
},
{
  "id": "projecting-confidence-5",
  "level": "2",
  "url": "#projecting-confidence-5",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Show that .   "
},
{
  "id": "orthonormal-things-2",
  "level": "2",
  "url": "#orthonormal-things-2",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Find an orthonormal basis for , where is defined by .   "
},
{
  "id": "orthonormal-things-3",
  "level": "2",
  "url": "#orthonormal-things-3",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Let be an inner product space, and let . Suppose that for all ,     Show that is linearly independent.    Show that if is -dimensional, is an orthogonal basis.   "
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
