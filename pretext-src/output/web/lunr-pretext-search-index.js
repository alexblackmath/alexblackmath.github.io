var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ExamPrep",
  "level": "1",
  "url": "#ExamPrep",
  "type": "Article",
  "number": "",
  "title": "Crossing the Line",
  "body": " Crossing the Line       MATH 2301 Exam 1 Prep   Cake or Fake  You need to prove or disprove that something is a linear transformation or linear subspace.    Is defined by a linear transformation?    Yes it is given by multiplication by the matrix:     and is therefore a linear transformation.      Let be the set of polynomials with roots at and (i.e., all polynomials such that ). Is a linear subspace?    Recall that for any , the evaluation map defined by is a linear transformation for each . Thus, the map is a linear transformation and by definition has kernel given by . Therefore, is a linear subspace.      Let be the set of non-negative circulations of the cycle graph . Is a linear subspace?    It is not. Note that contains a cycle , so contains the indicator vector of that cycle. However, multiplying by yields a vector with negative edge weights, which is, by definition, not a non-negative circulation. Thus, it is not closed under scalar multiplication.      New from Old  I will ask you to prove that a way of combining two things leads to another thing of the same type.    Let and be linear transformations. Show that is a linear transformation.    Let . Then, since and are linear transformations,   .  Let . Then  .  Therefore, is a linear transformation.      Let be a vector space, and let and be subspaces of . Show that is a linear subspace.    Note that since and are subspaces of , both contain , so .  Let . Then , so since is a linear subspace, . By similar reasoning, . Therefore, .  Let . Then, since is a linear subspace, . Similarly, , so .  Therefore, is a linear subspace.      Let and be linear transformations. Show that is a linear transformation.    Let . Then   .  Let . Then  .  Thus, is a linear transformation.      Span, Independence, Bases  You are given some information about spanning or independence, and you need to make some conclusions based off of it.    Let be a linear transformation. Show that if is spanning, then spans .    Let . Then . Since is spanning, for some and . Therefore,  .  Therefore, spans .      Let be a subset of a vector space of size . Define by  .  Show that if , then the vectors in are linearly dependent.    Since , there exists such that . For such a ,  .  Since , not all are , meaning that the are, by definition, not linearly independent.      Show that there is no linear transformation such that .    Suppose for the sake of contradiction that . By the rank-nullity theorem,  ,  a contradiction.      ... And its Applications    In Dungeons and Dragons, you roll a twenty-sided die to make decisions. If you roll a , you get a critical hit, and something amazing happens. If you roll a , you get a critical failure and something terrible happens. Assuming the die is fair, how many times do you expect to roll it until you roll your first critical hit or failure?    The probability of having a critical hit or failure is on any roll. We will call being in either case a critical roll . Let be the random variable giving the number of rolls until the first critical hit or failure.  Then , where is if the first roll is critical and otherwise, and is if the first roll is critical and otherwise is the number of rolls until the first critical roll. Then by linearity of expectation. Furthermore, as there is a probability of of getting a critical roll on the first roll, and as there is a probability of of the first roll not being critical and the probability distribution after that point is the same as but with one additional roll needed.  Then  .  Thus,  ,  so .      Consider the graph .     Draw .    Here is a drawing of .   A directed graph with vertices 1, 2, 3, and 4 and edges from 1 to 2, 1 to 3, 2 to 3, 3 to 1, and 4 to 3. The opposite arrows between 1 and 3 are curved apart.        Write down all directed cycles of , up to cyclic rotation of the starting vertex.    The directed cycles are   and       Write down a collection of weighted graphs such that every nonnegative circulation of is a nonnegative linear combination of them.    Take the indicator vectors of the cycles from part (b). It follows from the last theorem we proved in class that any non-negative circulation is a non-negative linear combination of them.       Let be a directed graph with weight function . Show that the sum of the total in-flow at each vertex is equal to the sum of the total out-flow at each vertex.    The weight of each edge is counted in precisely one in-flow and one out-flow, so the sum of all in-flows is the total weight across all edges, and so is the sum of all out-flows. Hence, the sum of all in-flows is equal to the sum of all out-flows.           "
},
{
  "id": "cake-or-fake-3",
  "level": "2",
  "url": "#cake-or-fake-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Is defined by a linear transformation?    Yes it is given by multiplication by the matrix:     and is therefore a linear transformation.   "
},
{
  "id": "cake-or-fake-4",
  "level": "2",
  "url": "#cake-or-fake-4",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Let be the set of polynomials with roots at and (i.e., all polynomials such that ). Is a linear subspace?    Recall that for any , the evaluation map defined by is a linear transformation for each . Thus, the map is a linear transformation and by definition has kernel given by . Therefore, is a linear subspace.   "
},
{
  "id": "cake-or-fake-5",
  "level": "2",
  "url": "#cake-or-fake-5",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Let be the set of non-negative circulations of the cycle graph . Is a linear subspace?    It is not. Note that contains a cycle , so contains the indicator vector of that cycle. However, multiplying by yields a vector with negative edge weights, which is, by definition, not a non-negative circulation. Thus, it is not closed under scalar multiplication.   "
},
{
  "id": "new-from-old-3",
  "level": "2",
  "url": "#new-from-old-3",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Let and be linear transformations. Show that is a linear transformation.    Let . Then, since and are linear transformations,   .  Let . Then  .  Therefore, is a linear transformation.   "
},
{
  "id": "new-from-old-4",
  "level": "2",
  "url": "#new-from-old-4",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Let be a vector space, and let and be subspaces of . Show that is a linear subspace.    Note that since and are subspaces of , both contain , so .  Let . Then , so since is a linear subspace, . By similar reasoning, . Therefore, .  Let . Then, since is a linear subspace, . Similarly, , so .  Therefore, is a linear subspace.   "
},
{
  "id": "new-from-old-5",
  "level": "2",
  "url": "#new-from-old-5",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Let and be linear transformations. Show that is a linear transformation.    Let . Then   .  Let . Then  .  Thus, is a linear transformation.   "
},
{
  "id": "span-independence-bases-3",
  "level": "2",
  "url": "#span-independence-bases-3",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Let be a linear transformation. Show that if is spanning, then spans .    Let . Then . Since is spanning, for some and . Therefore,  .  Therefore, spans .   "
},
{
  "id": "span-independence-bases-4",
  "level": "2",
  "url": "#span-independence-bases-4",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Let be a subset of a vector space of size . Define by  .  Show that if , then the vectors in are linearly dependent.    Since , there exists such that . For such a ,  .  Since , not all are , meaning that the are, by definition, not linearly independent.   "
},
{
  "id": "span-independence-bases-5",
  "level": "2",
  "url": "#span-independence-bases-5",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Show that there is no linear transformation such that .    Suppose for the sake of contradiction that . By the rank-nullity theorem,  ,  a contradiction.   "
},
{
  "id": "applications-2",
  "level": "2",
  "url": "#applications-2",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  In Dungeons and Dragons, you roll a twenty-sided die to make decisions. If you roll a , you get a critical hit, and something amazing happens. If you roll a , you get a critical failure and something terrible happens. Assuming the die is fair, how many times do you expect to roll it until you roll your first critical hit or failure?    The probability of having a critical hit or failure is on any roll. We will call being in either case a critical roll . Let be the random variable giving the number of rolls until the first critical hit or failure.  Then , where is if the first roll is critical and otherwise, and is if the first roll is critical and otherwise is the number of rolls until the first critical roll. Then by linearity of expectation. Furthermore, as there is a probability of of getting a critical roll on the first roll, and as there is a probability of of the first roll not being critical and the probability distribution after that point is the same as but with one additional roll needed.  Then  .  Thus,  ,  so .   "
},
{
  "id": "applications-3",
  "level": "2",
  "url": "#applications-3",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Consider the graph .     Draw .    Here is a drawing of .   A directed graph with vertices 1, 2, 3, and 4 and edges from 1 to 2, 1 to 3, 2 to 3, 3 to 1, and 4 to 3. The opposite arrows between 1 and 3 are curved apart.        Write down all directed cycles of , up to cyclic rotation of the starting vertex.    The directed cycles are   and       Write down a collection of weighted graphs such that every nonnegative circulation of is a nonnegative linear combination of them.    Take the indicator vectors of the cycles from part (b). It follows from the last theorem we proved in class that any non-negative circulation is a non-negative linear combination of them.    "
},
{
  "id": "applications-4",
  "level": "2",
  "url": "#applications-4",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  Let be a directed graph with weight function . Show that the sum of the total in-flow at each vertex is equal to the sum of the total out-flow at each vertex.    The weight of each edge is counted in precisely one in-flow and one out-flow, so the sum of all in-flows is the total weight across all edges, and so is the sum of all out-flows. Hence, the sum of all in-flows is equal to the sum of all out-flows.   "
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
