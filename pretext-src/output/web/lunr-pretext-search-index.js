var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Linkedin",
  "level": "1",
  "url": "#Linkedin",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Day 18",
  "body": " Math 2000 Day 18       Linkedin   Review    For the McDonald's and Chick-fil-A Nugget sizes, which actual nugget sizes were needed to be able to generate anything?      Independence  Often a set of vectors contains redundancy, where you can get one as a combination of the others. For example, consider the following Note that so its inclusion does not change the span. That is But that's as far as it goes. No more can be removed. When you can't write any vector as a linear combination of the others, you call the set of vectors independent .  Recall that for vectors in , we already had an algorithm for checking independence. Simply row reduce the matrix with columns given by those vectors. Then they are independent exactly when every column is a pivot column.    Use row reduction of the following matrix to explain why its columns are not independent:       Are the columns of the following matrix independent?       Networks  A network is a collection of nodes, which you can think of as, for example, computers on the internet, and connections between nodes. Consider a network with nodes labeled . Here we are going to consider two ways to build a matrix from a network.  Recall that denotes the vector with in the th coordinate and zeroes in all other coordinates.  The signed incidence matrix: If two nodes are connected, add a column vector .  The unsigned incidence matrix: If two nodes are connected, add a column vector .  Given a network, when is the collection of vectors independent?    Consider the graph of a triangle.   Draw it.    Label the nodes .    Write down the vectors for the edges.    Are they independent for the signed incidence matrix?    What about for the unsigned incidence matrix?         Exercises  Use the following simulation for signed incidence matrices of networks on this page . Our goal is to characterize when the column sets of these matrices are independent.    Start with networks that are just a cycle.   Characterize what the signed incidence matrices look like.    When are their columns independent if ever? Explain your answer.         Explain why adding an edge to a network for which the columns of its signed incidence matrix are dependent can never make it independent.      Characterize which networks on at most 5 nodes are independent.      Take an independent network and add an edge between two nodes. When does this stop the columns of the signed incidence matrix of the network from being independent and why? When does it preserve independence?      Propose a characterization of the networks for which the signed incidence matrices are independent.    Use the following simulation for unsigned incidence matrices of networks at this page . Our goal is to characterize when the column sets of these matrices are independent.    Start with networks that are just a cycle.   Characterize what the unsigned incidence matrices look like.    When are their columns independent if ever? Explain your answer.         Explain why adding an edge to a network for which the columns of its unsigned incidence matrix are dependent can never make it independent.      Characterize which networks on at most 5 nodes are independent.      Take an independent network and add an edge between two nodes. When does this stop the columns of the unsigned incidence matrix of the network from being independent and why? When does it preserve independence?      "
},
{
  "id": "day18-ex-nuggets",
  "level": "2",
  "url": "#day18-ex-nuggets",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  For the McDonald's and Chick-fil-A Nugget sizes, which actual nugget sizes were needed to be able to generate anything?   "
},
{
  "id": "day18-independence-2",
  "level": "2",
  "url": "#day18-independence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independent "
},
{
  "id": "day18-ex-rowreduce-dependent",
  "level": "2",
  "url": "#day18-ex-rowreduce-dependent",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Use row reduction of the following matrix to explain why its columns are not independent:    "
},
{
  "id": "day18-ex-columns-independent",
  "level": "2",
  "url": "#day18-ex-columns-independent",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Are the columns of the following matrix independent?    "
},
{
  "id": "day18-ex-triangle",
  "level": "2",
  "url": "#day18-ex-triangle",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Consider the graph of a triangle.   Draw it.    Label the nodes .    Write down the vectors for the edges.    Are they independent for the signed incidence matrix?    What about for the unsigned incidence matrix?      "
},
{
  "id": "day18-ex-signed-cycle",
  "level": "2",
  "url": "#day18-ex-signed-cycle",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Start with networks that are just a cycle.   Characterize what the signed incidence matrices look like.    When are their columns independent if ever? Explain your answer.      "
},
{
  "id": "day18-ex-signed-add-edge-dependent",
  "level": "2",
  "url": "#day18-ex-signed-add-edge-dependent",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Explain why adding an edge to a network for which the columns of its signed incidence matrix are dependent can never make it independent.   "
},
{
  "id": "day18-ex-signed-five-nodes",
  "level": "2",
  "url": "#day18-ex-signed-five-nodes",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Characterize which networks on at most 5 nodes are independent.   "
},
{
  "id": "day18-ex-signed-add-edge-independent",
  "level": "2",
  "url": "#day18-ex-signed-add-edge-independent",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Take an independent network and add an edge between two nodes. When does this stop the columns of the signed incidence matrix of the network from being independent and why? When does it preserve independence?   "
},
{
  "id": "day18-ex-signed-characterization",
  "level": "2",
  "url": "#day18-ex-signed-characterization",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Propose a characterization of the networks for which the signed incidence matrices are independent.   "
},
{
  "id": "day18-ex-unsigned-cycle",
  "level": "2",
  "url": "#day18-ex-unsigned-cycle",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Start with networks that are just a cycle.   Characterize what the unsigned incidence matrices look like.    When are their columns independent if ever? Explain your answer.      "
},
{
  "id": "day18-ex-unsigned-add-edge-dependent",
  "level": "2",
  "url": "#day18-ex-unsigned-add-edge-dependent",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Explain why adding an edge to a network for which the columns of its unsigned incidence matrix are dependent can never make it independent.   "
},
{
  "id": "day18-ex-unsigned-five-nodes",
  "level": "2",
  "url": "#day18-ex-unsigned-five-nodes",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Characterize which networks on at most 5 nodes are independent.   "
},
{
  "id": "day18-ex-unsigned-add-edge-independent",
  "level": "2",
  "url": "#day18-ex-unsigned-add-edge-independent",
  "type": "Checkpoint",
  "number": "1.13",
  "title": "",
  "body": "  Take an independent network and add an edge between two nodes. When does this stop the columns of the unsigned incidence matrix of the network from being independent and why? When does it preserve independence?   "
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
