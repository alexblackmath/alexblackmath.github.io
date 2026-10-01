var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shortest-paths",
  "level": "1",
  "url": "#shortest-paths",
  "type": "Article",
  "number": "",
  "title": "The Path of Least Resistance",
  "body": " The Path of Least Resistance        Review  Let be a linear subspace, and consider . An elementary vector  is a nonzero vector that is support minimal in the sense that there does not exist another nonzero vector such that .    Let be a linear subspace and .     Show that the support of any nonzero vector in contains the support of some elementary vector.      Show that, for any nonzero vector , there exists an elementary vector such that and .      Show that is the set of non-negative linear combinations of its elementary vectors.       Shortest Paths  Given a graph , the shortest paths problem asks to find the shortest path between two nodes and of the graph, where the length of the path is the sum of the weights on the edges.  Our goal today is to model this problem using linear algebra.    Let be a directed graph with two distinguished nodes such that . The support of any non-negative circulation on for which contains a path from to . As a consequence, the support of any minimal support circulation with is a cycle containing .    Any non-negative circulation is a non-negative combination of cycles. Thus, in particular, each edge in the support must be contained in such a cycle. Thus, is contained in a cycle meaning there is a path from to in the support. In particular, then a minimal support circulation must contain such a cycle and therefore the support must just be the cycle.    We can define the cost of a non-negative circulation as . The minimum cost circulation problem is to find a circulation of minimum cost subject to some constraints.    Let be a directed graph with two distinguished nodes such that . The minimum cost of a non-negative circulation such that the weight on edge is is plus the minimal number of edges in a shortest path from to .    Let be a non-negative circulation such that , and suppose that is of minimal cost. Let be any cycle containing . Then is a non-negative circulation by last time, and . Thus, is a non-negative circulation with weight on edge equal to . It follows that . Therefore, by minimality of , meaning that is at most the minimum length of a cycle containing . It remains to show that it is exactly that.  Since is a non-negative circulation, by the main theorem of last class, it is a non-negative combination of indicator vectors of cycles. That is , for some and cycles .  Note that the cost of a non-negative circulation is the sum of its weights. This is a linear transformation, so . From this expression, we can see that removing a cycle will only reduce the cost. Furthermore, removing any cycle preserves being a non-negative combination of cycles and thus being a non-negative circulation. The only property this could break would be that .  If a cycle does not contain , then removing it preserves that . Thus, by minimality of , we must have each contains . Thus, for all , so . Let be the minimal length of a cycle in the decomposition. Then . Thus, is at least the minimum length of a cycle containing .  Therefore, it is exactly the weight of a minimal cycle containing , which is the length of a shortest path plus .    This formulation of the shortest path problem endows it with geometry and allows us to use algorithms from linear algebra for solving it. This is particularly relevant right now with the proliferation of GPUs as problems represented in terms of linear algebra benefit from GPU based acceleration. For more details, you'll have to take Math 3009 Combinatorial Optimization.      Exercises    Let be a weighted graph with distinguished vertices and and edge . Let . Define the weighted cost of a circulation as . Suppose that is non-negative and . Then the minimum cost of a non-negative weighted circulation such that is the minimum length of a weighted shortest path with edge weights .     "
},
{
  "id": "review-2",
  "level": "2",
  "url": "#review-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary vector "
},
{
  "id": "review-3",
  "level": "2",
  "url": "#review-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let be a linear subspace and .     Show that the support of any nonzero vector in contains the support of some elementary vector.      Show that, for any nonzero vector , there exists an elementary vector such that and .      Show that is the set of non-negative linear combinations of its elementary vectors.    "
},
{
  "id": "Section-1-2",
  "level": "2",
  "url": "#Section-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shortest paths problem "
},
{
  "id": "Section-1-4",
  "level": "2",
  "url": "#Section-1-4",
  "type": "Lemma",
  "number": "2.1",
  "title": "",
  "body": "  Let be a directed graph with two distinguished nodes such that . The support of any non-negative circulation on for which contains a path from to . As a consequence, the support of any minimal support circulation with is a cycle containing .    Any non-negative circulation is a non-negative combination of cycles. Thus, in particular, each edge in the support must be contained in such a cycle. Thus, is contained in a cycle meaning there is a path from to in the support. In particular, then a minimal support circulation must contain such a cycle and therefore the support must just be the cycle.   "
},
{
  "id": "Section-1-5",
  "level": "2",
  "url": "#Section-1-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cost "
},
{
  "id": "Section-1-6",
  "level": "2",
  "url": "#Section-1-6",
  "type": "Theorem",
  "number": "2.2",
  "title": "",
  "body": "  Let be a directed graph with two distinguished nodes such that . The minimum cost of a non-negative circulation such that the weight on edge is is plus the minimal number of edges in a shortest path from to .    Let be a non-negative circulation such that , and suppose that is of minimal cost. Let be any cycle containing . Then is a non-negative circulation by last time, and . Thus, is a non-negative circulation with weight on edge equal to . It follows that . Therefore, by minimality of , meaning that is at most the minimum length of a cycle containing . It remains to show that it is exactly that.  Since is a non-negative circulation, by the main theorem of last class, it is a non-negative combination of indicator vectors of cycles. That is , for some and cycles .  Note that the cost of a non-negative circulation is the sum of its weights. This is a linear transformation, so . From this expression, we can see that removing a cycle will only reduce the cost. Furthermore, removing any cycle preserves being a non-negative combination of cycles and thus being a non-negative circulation. The only property this could break would be that .  If a cycle does not contain , then removing it preserves that . Thus, by minimality of , we must have each contains . Thus, for all , so . Let be the minimal length of a cycle in the decomposition. Then . Thus, is at least the minimum length of a cycle containing .  Therefore, it is exactly the weight of a minimal cycle containing , which is the length of a shortest path plus .   "
},
{
  "id": "exercises-2",
  "level": "2",
  "url": "#exercises-2",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "",
  "body": "  Let be a weighted graph with distinguished vertices and and edge . Let . Define the weighted cost of a circulation as . Suppose that is non-negative and . Then the minimum cost of a non-negative weighted circulation such that is the minimum length of a weighted shortest path with edge weights .   "
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
