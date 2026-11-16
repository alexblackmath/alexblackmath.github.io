var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Treeson",
  "level": "1",
  "url": "#Treeson",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 20",
  "body": " Math 2301 Day 20       Treeson  Recall that a graph is a network with a collection of vertices and edges given as a set of pairs of vertices. This week we will discuss a few ways to build a matrix from a graph and how to relate properties of that graph to properties of the matrix.  Recall that denotes the vector with in the th coordinate and zeroes otherwise. The signed incidence matrix : if two nodes are connected, add a column vector . Note that the order of the column vectors does not really matter for modeling purposes.  Use the following computational tool on this site to help answer the following questions:     Start with networks that are just a cycle.     Characterize what the signed incidence matrices look like.      When are their columns independent, if ever? Explain your answer.       Explain why adding an edge to a network for which the columns of its signed incidence matrix are dependent can never make it independent.      Characterize which networks on at most 5 vertices are independent.      Take an independent network and add an edge between two nodes. When does this stop the columns of the signed incidence matrix of the network from being independent and why? When does it preserve independence?      When are the columns of such a matrix independent?      Prove that the columns are never spanning.      What is the maximum rank of such a matrix? When is the maximum attained?      When are the columns both independent and the rank maximal?      Let be such an incidence matrix.     Show that       Show that is positive semidefinite.      Show that , where is the diagonal matrix with equal to the number of vertices adjacent to vertex and if and are adjacent and otherwise.      "
},
{
  "id": "Math2301Day20-2",
  "level": "2",
  "url": "#Math2301Day20-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph "
},
{
  "id": "Math2301Day20-3",
  "level": "2",
  "url": "#Math2301Day20-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "signed incidence matrix "
},
{
  "id": "day20-cycles",
  "level": "2",
  "url": "#day20-cycles",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Start with networks that are just a cycle.     Characterize what the signed incidence matrices look like.      When are their columns independent, if ever? Explain your answer.    "
},
{
  "id": "day20-add-edge-dependent",
  "level": "2",
  "url": "#day20-add-edge-dependent",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Explain why adding an edge to a network for which the columns of its signed incidence matrix are dependent can never make it independent.   "
},
{
  "id": "day20-five-vertices",
  "level": "2",
  "url": "#day20-five-vertices",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Characterize which networks on at most 5 vertices are independent.   "
},
{
  "id": "day20-add-edge-independent",
  "level": "2",
  "url": "#day20-add-edge-independent",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Take an independent network and add an edge between two nodes. When does this stop the columns of the signed incidence matrix of the network from being independent and why? When does it preserve independence?   "
},
{
  "id": "day20-when-independent",
  "level": "2",
  "url": "#day20-when-independent",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  When are the columns of such a matrix independent?   "
},
{
  "id": "day20-never-spanning",
  "level": "2",
  "url": "#day20-never-spanning",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Prove that the columns are never spanning.   "
},
{
  "id": "day20-max-rank",
  "level": "2",
  "url": "#day20-max-rank",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  What is the maximum rank of such a matrix? When is the maximum attained?   "
},
{
  "id": "day20-independent-max-rank",
  "level": "2",
  "url": "#day20-independent-max-rank",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  When are the columns both independent and the rank maximal?   "
},
{
  "id": "day20-laplacian",
  "level": "2",
  "url": "#day20-laplacian",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Let be such an incidence matrix.     Show that       Show that is positive semidefinite.      Show that , where is the diagonal matrix with equal to the number of vertices adjacent to vertex and if and are adjacent and otherwise.    "
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
