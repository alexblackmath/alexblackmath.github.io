var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Gram",
  "level": "1",
  "url": "#Gram",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 12",
  "body": " Math 2301 Day 12       Linear Aggression   Review  Recall the definitions from last time:  What properties does an inner product have?  How do I go from an inner product to a norm?  What does it mean for two vectors to be orthogonal?      Regressing  A classic tool used throughout the sciences that you may already be familiar with is linear regression . For this you have a set of points in and you want to find the line of best fit for those points.  What does it mean to fit best? We want to minimize the error of our predictions. For example, suppose we get the line . Then the error at the point is . When minimizing error over many points, there's a choice here. It turns out we can think of this from a geometric perspective. Namely, we can store our error terms in a vector: . In other words, . The vector is called the residual vector . When we are minimizing error, we think of this geometrically as minimizing the distance from to the origin. From the distance equation, or really, the Pythagorean theorem, . The notation we use for this is called a norm, and it's like an absolute value with bars: .  Minimizing the square root of a non-negative function is the same as just minimizing the square. Thus, we want to solve the following optimization problem: . We can further rewrite this expression. Define the matrix: , and define . Then we can rewrite the residuals more compactly: . Note that and are fixed as part of our input data. The only thing that varies is . This gives rise to a general problem.    Best Approximations for Solving Linear Systems  We have discussed ad nauseam that a system of linear equations need not have a solution. However, what should we do if there is no solution? Can we please just give up? No! Of course not.  What we could instead ask is how close are we to having a solution. Concretely we have a solution if . We could instead ask to minimize . To do this, we minimize the distance to the origin expressed as . If we can solve this, we can do linear regression and find a line of best fit. Thus, this is our goal. We can reformulate this a bit further in a way that will be helpful. Namely, vectors of the form are exactly the column span of . In other words, .  Thus, another way to view this problem is that we have a vector and a linear subspace . How can we find the closest vector to in that subspace? Our next goal is to solve this problem, and for it, we will need to develop some theory.    The Gram-Schmidt Process  Suppose I have a basis for a subspace of : . Let . Then if we're very lucky is in that subspace, but what if it is not? How do we find the distance to that subspace? It turns out there is a recipe for doing this called the Gram-Schmidt Process . The idea is as follows: Find a basis to write every vector in for which computing distances is easier.  Let be vectors in . We call an orthonormal basis if The reason this is a basis is that if we let be the matrix with columns and let , then by definition of matrix multiplication, . Then Thus, has ones along the diagonal and zeroes otherwise and is therefore an identity matrix. Thus, . We can recall from our group theory unit that we call such a matrix orthogonal .    For any basis of , there exists an orthonormal basis such that for all .    First, we let . Then for we define , and . Then for , assuming are orthonormal, . Since is just a rescaling of , it follows that . By construction, . That the spans coincide follows by construction.    The Gram-Schmidt process is the algorithm used to make this happen:  Start with .   Iteratively replace with , where .   Then is an orthonormal basis.  The beauty of having an orthonormal basis is that distances are easy to compute. To start, as discussed above, the distance from a vector to the origin is given by the distance formula: . Now let's use an orthonormal basis . Then , where . Then . Thus, , where is the matrix with rows .  This actually allows us to solve the distance to a subspace minimization problem. Namely, the subspace is .  Extend to a basis of all of , .  Apply Gram-Schmidt to to get .  Take the matrix with rows . Then is the distance, and gives the closest vector in that subspace.      Exercises    Draw pictures and compute the following:  What is the distance from to ?  What is the distance from to the - plane?  What is the distance from to the -axis?        Consider the points . Write down the system of equations for checking if there is a line through all of these points.      Let and be in .   Explain why the set of vectors orthogonal to are exactly the solutions to the equation .   Find an analogous equation describing the set of vectors orthogonal to .  Write a system of two equations describing the set of vectors orthogonal to both and .  How would you generalize your answer to part (c) to an arbitrary number of vectors?        Consider the point in .  Compute .  Find a vector orthogonal to .  Find an orthonormal basis for using your answers for parts (a) and (b).  Find the closest point to on the line .        Apply the Gram-Schmidt process to the following three vectors to find an orthonormal basis for : .           "
},
{
  "id": "regressing-2",
  "level": "2",
  "url": "#regressing-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear regression line of best fit "
},
{
  "id": "regressing-3",
  "level": "2",
  "url": "#regressing-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "residual vector "
},
{
  "id": "the-gram-schmidt-process-2",
  "level": "2",
  "url": "#the-gram-schmidt-process-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gram-Schmidt Process "
},
{
  "id": "the-gram-schmidt-process-3",
  "level": "2",
  "url": "#the-gram-schmidt-process-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthonormal basis orthogonal "
},
{
  "id": "the-gram-schmidt-process-4",
  "level": "2",
  "url": "#the-gram-schmidt-process-4",
  "type": "Theorem",
  "number": "1.1",
  "title": "",
  "body": "  For any basis of , there exists an orthonormal basis such that for all .    First, we let . Then for we define , and . Then for , assuming are orthonormal, . Since is just a rescaling of , it follows that . By construction, . That the spans coincide follows by construction.   "
},
{
  "id": "exercises-2",
  "level": "2",
  "url": "#exercises-2",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Draw pictures and compute the following:  What is the distance from to ?  What is the distance from to the - plane?  What is the distance from to the -axis?     "
},
{
  "id": "exercises-3",
  "level": "2",
  "url": "#exercises-3",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Consider the points . Write down the system of equations for checking if there is a line through all of these points.   "
},
{
  "id": "exercises-4",
  "level": "2",
  "url": "#exercises-4",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Let and be in .   Explain why the set of vectors orthogonal to are exactly the solutions to the equation .   Find an analogous equation describing the set of vectors orthogonal to .  Write a system of two equations describing the set of vectors orthogonal to both and .  How would you generalize your answer to part (c) to an arbitrary number of vectors?     "
},
{
  "id": "exercises-5",
  "level": "2",
  "url": "#exercises-5",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Consider the point in .  Compute .  Find a vector orthogonal to .  Find an orthonormal basis for using your answers for parts (a) and (b).  Find the closest point to on the line .     "
},
{
  "id": "exercises-6",
  "level": "2",
  "url": "#exercises-6",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Apply the Gram-Schmidt process to the following three vectors to find an orthonormal basis for : .   "
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
