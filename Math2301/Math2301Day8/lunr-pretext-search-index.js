var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "flow",
  "level": "1",
  "url": "#flow",
  "type": "Article",
  "number": "",
  "title": "Flow Rida",
  "body": " Flow Rida          Let and be linear transformations. Define by . Then is a linear transformation.      Graphs  A directed graph is a finite collection of nodes and arrows between nodes .      A directed path.   Three vertices a, b, and c arranged in a row, with directed edges from a to b and from b to c.      A directed cycle.   Three vertices a, b, and c forming a triangle, with directed edges a to b, b to c, and c to a.       We are interested in weighted directed graphs, which additionally have a function giving a weight to each edge.      Positive edge weights.   A directed triangle with edge weights 2, 3, and 1.      General real edge weights.   A directed triangle with edge weights negative 1, three halves, and 0.       Today we are going to model having water or electricity or Amazon packages flow through a graph. There is a key property such a flow has. At any node of the network the total weight of what comes in must equal the total weight of what comes out.  The in-flow at a node of a graph is the sum of weights of all edges going into , and we denote it . The is the sum of weights of edges going out. A weighting of a directed graph is called a circulation if in-flow is equal to out-flow at all vertices of the graph.      A circulation. At , ; flow is conserved at every vertex.   A four-vertex directed graph with weights 2, 2, 3, 3, and 5 that satisfies flow conservation at every vertex.      Not a circulation. At , the in-flow is , but the out-flow is .   A four-vertex directed graph with weights 2, 2, 3, 3, and 4 that fails flow conservation at vertex a.       For a graph , we let denote the set of weightings of the edges of .    Let be a directed graph. The set of for which is a circulation is a linear subspace of .    For each node , define a linear transformation by . Define by . By definition, a weighting of the edges is a circulation if and only if for all . Thus, the circulations are exactly .    Unlike my freestyle rapping, when we talk about graphs, one cannot have negative flow. Thus, we will only concern ourselves with edge weights that are all non-negative. Thus, the set of non-negative circulations is .  The indicator vector of a subset of edges of a graph is , defined by if and otherwise. A cycle in a graph is a path that starts and ends at the same point and does not repeat any vertex other than its start.   The black cycle is . Its indicator weighting is on the cycle and elsewhere.   A larger directed graph containing the cycle a to b to c to d to a. Cycle edges are black with weight 1; all other edges are gray and translucent with weight 0.       The indicator vector of any cycle is a circulation.    Consider a vertex of a cycle. Then it has one incoming edge of the cycle and one outgoing edge of the cycle. Thus, the net flow is at each vertex, so it is a circulation.    We call the support of a weighting  , the set of edges with nonzero weight. It turns out that the support of any non-negative circulation must contain a cycle.    Let be a directed graph. Let be a non-negative circulation. Then if , it contains a cycle.    Let be the set of vertices of with an incoming edge of positive weight. Since , there exists at least one vertex with an incoming edge of positive weight, meaning that .  Let . Then the in-flow of is positive, so by flow conservation, the out-flow must also be positive. Therefore, it must have an outgoing edge of positive weight. Furthermore, the vertex reached by moving along that edge must also be in , as it has an incoming edge of positive weight.  Then one can generate a path in the graph starting at a vertex in and always choosing an outgoing edge of positive weight. Since the graph is finite, this path will eventually reach a vertex that has already been seen and thus contain a cycle.    In fact, a stronger property holds: the indicator vectors of cycles play an analogous role to a basis for non-negative circulations.    Let be a directed graph. Let . Then is a non-negative circulation if and only if it is a non-negative linear combination of indicator vectors of cycles.    By , any indicator vector of a cycle is a circulation. Furthermore, the set of circulations is a linear subspace, so any linear combination is a circulation. Any non-negative linear combination of non-negative circulations will similarly be a non-negative circulation. Therefore, any non-negative linear combination of indicator vectors of cycles is a non-negative circulation.  For the other direction, let be a non-negative circulation. Then by , its support contains a cycle . Take , where is the minimum weight of any edge on that cycle. Then is still a non-negative circulation but has at least one fewer nonzero-weight edge. Repeating this at most times yields   for some and cycles . Thus,   and is therefore a non-negative linear combination of indicator vectors of cycles.        Exercises    Consider the following weighted directed graphs. Which weightings are non-negative circulations?         Graph a: a four-vertex directed graph with edge weights 4, 4, 2, 2, and 6.        Graph b: a four-vertex directed graph with edge weights 4, 4, 2, 2, and 5.          Graph c: a four-vertex directed acyclic graph in which every edge has weight 0.        Graph d: a directed triangle with edge weights 2, 2, and negative 2.          Let be a linear subspace, and consider . An elementary vector  is a nonzero vector that is support minimal in the sense that there does not exist a nonzero vector such that .    Let be a linear subspace and .    Show that the support of any nonzero vector in contains the support of some elementary vector.    Show that, for any nonzero vector , there exists an elementary vector such that and .    Show that is the set of non-negative linear combinations of its elementary vectors.       "
},
{
  "id": "review-1",
  "level": "2",
  "url": "#review-1",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let and be linear transformations. Define by . Then is a linear transformation.   "
},
{
  "id": "Section-1-2",
  "level": "2",
  "url": "#Section-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "directed graph "
},
{
  "id": "fig-directed-graphs",
  "level": "2",
  "url": "#fig-directed-graphs",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": "    A directed path.   Three vertices a, b, and c arranged in a row, with directed edges from a to b and from b to c.      A directed cycle.   Three vertices a, b, and c forming a triangle, with directed edges a to b, b to c, and c to a.      "
},
{
  "id": "Section-1-4",
  "level": "2",
  "url": "#Section-1-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weighted "
},
{
  "id": "fig-weighted-directed-graphs",
  "level": "2",
  "url": "#fig-weighted-directed-graphs",
  "type": "Figure",
  "number": "2.2",
  "title": "",
  "body": "    Positive edge weights.   A directed triangle with edge weights 2, 3, and 1.      General real edge weights.   A directed triangle with edge weights negative 1, three halves, and 0.      "
},
{
  "id": "Section-1-7",
  "level": "2",
  "url": "#Section-1-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circulation "
},
{
  "id": "fig-circulation-examples",
  "level": "2",
  "url": "#fig-circulation-examples",
  "type": "Figure",
  "number": "2.3",
  "title": "",
  "body": "    A circulation. At , ; flow is conserved at every vertex.   A four-vertex directed graph with weights 2, 2, 3, 3, and 5 that satisfies flow conservation at every vertex.      Not a circulation. At , the in-flow is , but the out-flow is .   A four-vertex directed graph with weights 2, 2, 3, 3, and 4 that fails flow conservation at vertex a.      "
},
{
  "id": "thm-circulations-subspace",
  "level": "2",
  "url": "#thm-circulations-subspace",
  "type": "Theorem",
  "number": "2.4",
  "title": "",
  "body": "  Let be a directed graph. The set of for which is a circulation is a linear subspace of .    For each node , define a linear transformation by . Define by . By definition, a weighting of the edges is a circulation if and only if for all . Thus, the circulations are exactly .   "
},
{
  "id": "Section-1-12",
  "level": "2",
  "url": "#Section-1-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indicator vector cycle "
},
{
  "id": "fig-cycle-indicator",
  "level": "2",
  "url": "#fig-cycle-indicator",
  "type": "Figure",
  "number": "2.5",
  "title": "",
  "body": " The black cycle is . Its indicator weighting is on the cycle and elsewhere.   A larger directed graph containing the cycle a to b to c to d to a. Cycle edges are black with weight 1; all other edges are gray and translucent with weight 0.    "
},
{
  "id": "lem-cyclecirculation",
  "level": "2",
  "url": "#lem-cyclecirculation",
  "type": "Lemma",
  "number": "2.6",
  "title": "",
  "body": "  The indicator vector of any cycle is a circulation.    Consider a vertex of a cycle. Then it has one incoming edge of the cycle and one outgoing edge of the cycle. Thus, the net flow is at each vertex, so it is a circulation.   "
},
{
  "id": "Section-1-15",
  "level": "2",
  "url": "#Section-1-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "support "
},
{
  "id": "lem-cyclecontainment",
  "level": "2",
  "url": "#lem-cyclecontainment",
  "type": "Lemma",
  "number": "2.7",
  "title": "",
  "body": "  Let be a directed graph. Let be a non-negative circulation. Then if , it contains a cycle.    Let be the set of vertices of with an incoming edge of positive weight. Since , there exists at least one vertex with an incoming edge of positive weight, meaning that .  Let . Then the in-flow of is positive, so by flow conservation, the out-flow must also be positive. Therefore, it must have an outgoing edge of positive weight. Furthermore, the vertex reached by moving along that edge must also be in , as it has an incoming edge of positive weight.  Then one can generate a path in the graph starting at a vertex in and always choosing an outgoing edge of positive weight. Since the graph is finite, this path will eventually reach a vertex that has already been seen and thus contain a cycle.   "
},
{
  "id": "thm-cycle-decomposition",
  "level": "2",
  "url": "#thm-cycle-decomposition",
  "type": "Theorem",
  "number": "2.8",
  "title": "",
  "body": "  Let be a directed graph. Let . Then is a non-negative circulation if and only if it is a non-negative linear combination of indicator vectors of cycles.    By , any indicator vector of a cycle is a circulation. Furthermore, the set of circulations is a linear subspace, so any linear combination is a circulation. Any non-negative linear combination of non-negative circulations will similarly be a non-negative circulation. Therefore, any non-negative linear combination of indicator vectors of cycles is a non-negative circulation.  For the other direction, let be a non-negative circulation. Then by , its support contains a cycle . Take , where is the minimum weight of any edge on that cycle. Then is still a non-negative circulation but has at least one fewer nonzero-weight edge. Repeating this at most times yields   for some and cycles . Thus,   and is therefore a non-negative linear combination of indicator vectors of cycles.   "
},
{
  "id": "ex-circulations",
  "level": "2",
  "url": "#ex-circulations",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "",
  "body": "  Consider the following weighted directed graphs. Which weightings are non-negative circulations?         Graph a: a four-vertex directed graph with edge weights 4, 4, 2, 2, and 6.        Graph b: a four-vertex directed graph with edge weights 4, 4, 2, 2, and 5.          Graph c: a four-vertex directed acyclic graph in which every edge has weight 0.        Graph d: a directed triangle with edge weights 2, 2, and negative 2.         "
},
{
  "id": "exercises-3",
  "level": "2",
  "url": "#exercises-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary vector "
},
{
  "id": "ex-elementary-vectors",
  "level": "2",
  "url": "#ex-elementary-vectors",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "",
  "body": "  Let be a linear subspace and .    Show that the support of any nonzero vector in contains the support of some elementary vector.    Show that, for any nonzero vector , there exists an elementary vector such that and .    Show that is the set of non-negative linear combinations of its elementary vectors.     "
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
