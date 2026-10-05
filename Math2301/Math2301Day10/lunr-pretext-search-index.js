var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ExamPrep",
  "level": "1",
  "url": "#ExamPrep",
  "type": "Article",
  "number": "",
  "title": "Crossing the Line",
  "body": " Crossing the Line       Crossing the Line   Cake or Fake  You need to prove or disprove that something is a linear subspace or linear transformation. To prove something is a linear subspace, you showed it contains and is closed under addition and scalar multiplication or that it is an example of a family of linear subspaces we are already familiar with such as images and kernels of linear transformations.  To show that something is a linear transformation, you check that it respects addition and scalar multiplication. You can also show it is a known linear transformation such as multiplying by a fixed matrix.    Let be a bijection. Define by . Then is a linear transformation.    To show that something is not a linear transformation or subspace, you need to exhibit an explicit counterexample to one of the defining properties.    Let be a linear subspace of and be defined to be its non-negative part (i.e., the vectors in for which all entries are at least ). Give an example of for which is a linear subspace and one for which it is not.      New from Old  In spirit, this exercise is similar to the last one. I want you to show that something is a linear transformation or subspace, but this won't be about a specific function or set. Instead, I will give you a way to combine things together, and I want you to show that the property remains.    Let and be vector spaces. Define to be the set of linear transformations from to . Show that is closed under addition and scalar multiplication.      Span, Independence, Bases  Several of the exercises have worked around proving essential facts regarding span, independence, and bases. The key here is to make sure that you are fully explicit in your arguments. You should either be using definitions or results you know for sure we have proven in class or on homeworks to build what you need. Here is a tool that is very useful for you to prove as practice:    Show that the following are equivalent for a subset of a finite-dimensional vector space such that :  is a basis,  is spanning,  is independent.        ... And its Applications  We discussed two core applications of the ideas we have covered. The first comes from probability theory and is that the expected value map is a linear transformation. Here is an example application:    Take a random directed graph , where each possible directed edge is included in independently with probability . What is the expected number of 2-cycles in (i.e., pairs and that are both edges in )?    The second comes from combinatorics and optimization and shows that we can model graph theoretic properties with linear algebra.    Show that no indicator vector of a cycle can be written as a non-negative linear combination of indicator vectors of other cycles.           "
},
{
  "id": "Math2301Day10-2-4",
  "level": "2",
  "url": "#Math2301Day10-2-4",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let be a bijection. Define by . Then is a linear transformation.   "
},
{
  "id": "Math2301Day10-2-6",
  "level": "2",
  "url": "#Math2301Day10-2-6",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Let be a linear subspace of and be defined to be its non-negative part (i.e., the vectors in for which all entries are at least ). Give an example of for which is a linear subspace and one for which it is not.   "
},
{
  "id": "Math2301Day10-3-3",
  "level": "2",
  "url": "#Math2301Day10-3-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Let and be vector spaces. Define to be the set of linear transformations from to . Show that is closed under addition and scalar multiplication.   "
},
{
  "id": "Math2301Day10-4-3",
  "level": "2",
  "url": "#Math2301Day10-4-3",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Show that the following are equivalent for a subset of a finite-dimensional vector space such that :  is a basis,  is spanning,  is independent.     "
},
{
  "id": "Math2301Day10-5-3",
  "level": "2",
  "url": "#Math2301Day10-5-3",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Take a random directed graph , where each possible directed edge is included in independently with probability . What is the expected number of 2-cycles in (i.e., pairs and that are both edges in )?   "
},
{
  "id": "Math2301Day10-5-5",
  "level": "2",
  "url": "#Math2301Day10-5-5",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Show that no indicator vector of a cycle can be written as a non-negative linear combination of indicator vectors of other cycles.   "
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
