var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "exam-prep",
  "level": "1",
  "url": "#exam-prep",
  "type": "Article",
  "number": "",
  "title": "Ranking Up",
  "body": " Ranking Up       Exam 2   Cake or Fake  Prove or disprove that each object is a linear transformation or a linear subspace, as appropriate.    Is defined by a linear transformation?       Let be the set of real polynomials that vanish at , , and ; that is,   Is a linear subspace of ?       Let be the set of nonnegative circulations on the directed cycle graph   Is a linear subspace?       New from Old  Prove that each indicated way of combining two objects produces another object of the same type.    Let and be linear transformations. Define by . Show that is a linear transformation.       Let be a vector space, and let and be subspaces of . Show that   is a linear subspace of .       Let and be linear transformations. Show that is a linear transformation.       Span, Independence, Bases  Use the given information about spanning or linear independence to draw the requested conclusions.    Let be a linear transformation. Show that if spans , then   spans .       Let be a set of vectors in a vector space . Define by   Show that if , then the vectors in are linearly dependent.       Show that there is no linear transformation such that .       ... And its Applications    In Dungeons and Dragons, you roll a twenty-sided die to make decisions. If you roll a , you get a critical hit, and if you roll a , you get a critical failure. Assuming the die is fair, how many rolls do you expect to make until you get your first critical hit or critical failure?       Consider the directed graph      Draw .      Write down all directed cycles of , up to cyclic rotation of the starting vertex.       Write down a collection of weighted graphs such that every nonnegative circulation of is a nonnegative linear combination of them.        Let be a directed graph with edge-weight function . Show that the sum of the total inflow over all vertices equals the sum of the total outflow over all vertices.            "
},
{
  "id": "ex-cyclic-permutation",
  "level": "2",
  "url": "#ex-cyclic-permutation",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Is defined by a linear transformation?    "
},
{
  "id": "ex-polynomials-roots",
  "level": "2",
  "url": "#ex-polynomials-roots",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Let be the set of real polynomials that vanish at , , and ; that is,   Is a linear subspace of ?    "
},
{
  "id": "ex-nonnegative-circulations",
  "level": "2",
  "url": "#ex-nonnegative-circulations",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Let be the set of nonnegative circulations on the directed cycle graph   Is a linear subspace?    "
},
{
  "id": "ex-sum-linear-maps",
  "level": "2",
  "url": "#ex-sum-linear-maps",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Let and be linear transformations. Define by . Show that is a linear transformation.    "
},
{
  "id": "ex-intersection-subspaces",
  "level": "2",
  "url": "#ex-intersection-subspaces",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Let be a vector space, and let and be subspaces of . Show that   is a linear subspace of .    "
},
{
  "id": "ex-composition-linear-maps",
  "level": "2",
  "url": "#ex-composition-linear-maps",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Let and be linear transformations. Show that is a linear transformation.    "
},
{
  "id": "ex-image-spanning-set",
  "level": "2",
  "url": "#ex-image-spanning-set",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Let be a linear transformation. Show that if spans , then   spans .    "
},
{
  "id": "ex-kernel-dependence",
  "level": "2",
  "url": "#ex-kernel-dependence",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Let be a set of vectors in a vector space . Define by   Show that if , then the vectors in are linearly dependent.    "
},
{
  "id": "ex-no-surjection-r2-r3",
  "level": "2",
  "url": "#ex-no-surjection-r2-r3",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Show that there is no linear transformation such that .    "
},
{
  "id": "ex-d20-waiting-time",
  "level": "2",
  "url": "#ex-d20-waiting-time",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  In Dungeons and Dragons, you roll a twenty-sided die to make decisions. If you roll a , you get a critical hit, and if you roll a , you get a critical failure. Assuming the die is fair, how many rolls do you expect to make until you get your first critical hit or critical failure?    "
},
{
  "id": "ex-directed-graph-circulations",
  "level": "2",
  "url": "#ex-directed-graph-circulations",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Consider the directed graph      Draw .      Write down all directed cycles of , up to cyclic rotation of the starting vertex.       Write down a collection of weighted graphs such that every nonnegative circulation of is a nonnegative linear combination of them.     "
},
{
  "id": "ex-total-inflow-outflow",
  "level": "2",
  "url": "#ex-total-inflow-outflow",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Let be a directed graph with edge-weight function . Show that the sum of the total inflow over all vertices equals the sum of the total outflow over all vertices.    "
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
