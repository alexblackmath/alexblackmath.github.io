var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "GoneGirl",
  "level": "1",
  "url": "#GoneGirl",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 14",
  "body": " Math 2301 Day 14       Completely Ordinary Equations   Review  What does it mean for a basis to be orthonormal?    Prove that the columns of an matrix form an orthonormal basis if and only if , where is the identity matrix.      A Better Way  Last time we reduced linear regression to the following optimization problem: for an matrix and . We discussed a way to solve this using Gram-Schmidt, but as you may have discovered from the exercises, doing Gram-Schmidt is kind of a pain. Is there a simpler way?  It turns out you can represent this by solving a linear system.    Let be a solution to the linear system . Then is a minimizer of .    The equations are called the normal equations . It is not obvious that they would even have any solution. To prove this, we need to build more theory.    Orthogonal Decomposition  Let be a linear subspace of an inner product space . Define its orthogonal complement  .    Let be a linear subspace of a finite-dimensional real inner product space . Then  is a subspace of .  .  .  Any vector can be written uniquely as for some and .      For (a), let and . Let .  Show that .   Show that .   Explain why is a linear subspace.   For (b), take an orthonormal basis of such that is an orthonormal basis for . This exists by the Gram-Schmidt procedure.  Then let . Since this is a basis, . Explain why .   Note that is a basis for . Explain why for all and .   Use this observation to argue that for all .   Explain why .   Thus, , where and , so . Since , .  For (c), let . Since , . Explain why implies for all .   Explain why implies for all .   Therefore, . Explain why this means .   Therefore, .  For (d), suppose that for some and . Rearranging, . Explain why .   Explain why .   Thus, . Explain why this means and .   Therefore the orthogonal decomposition is unique.    This decomposition gives us a canonical way to isolate the closest point.    Let be a subspace of an inner product space , and let . Let , where and . Then is the closest point in to .    Let . Then, by the Pythagorean theorem, . Therefore, is minimized precisely when .      Proving the Better Way  We use this observation to verify that the normal equations are doing precisely what we want them to be doing.   We will do the proof in two steps. First, I will argue that a minimizer is a solution to the normal equations . This in particular tells you that a solution always exists. Second we argue that any solution will be a closest point.  Let be the span of the columns of . Then let be the orthogonal decomposition of with and . Then is the closest point to in . Furthermore, , so for some . Then Explain why implies that .   Thus, , so . It follows that if is the closest point in the image of to , then is a solution to that equation. In particular, a solution always exists.  What remains is to show that any solution arises in that way. Let be a solution to the normal equation. We want to argue that is the closest point in to . For this, we work in reverse. We can rewrite as . Thus, is in and thus in . Since is a subspace, , so is the orthogonal decomposition of . It follows that the closest point to in is , which completes the proof.     "
},
{
  "id": "sec-review-3",
  "level": "2",
  "url": "#sec-review-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Prove that the columns of an matrix form an orthonormal basis if and only if , where is the identity matrix.   "
},
{
  "id": "thm-normal-equations",
  "level": "2",
  "url": "#thm-normal-equations",
  "type": "Theorem",
  "number": "1.2",
  "title": "",
  "body": "  Let be a solution to the linear system . Then is a minimizer of .   "
},
{
  "id": "sec-better-way-5",
  "level": "2",
  "url": "#sec-better-way-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal equations "
},
{
  "id": "sec-orthogonal-decomposition-2",
  "level": "2",
  "url": "#sec-orthogonal-decomposition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal complement "
},
{
  "id": "sec-orthogonal-decomposition-3",
  "level": "2",
  "url": "#sec-orthogonal-decomposition-3",
  "type": "Theorem",
  "number": "1.3",
  "title": "",
  "body": "  Let be a linear subspace of a finite-dimensional real inner product space . Then  is a subspace of .  .  .  Any vector can be written uniquely as for some and .      For (a), let and . Let .  Show that .   Show that .   Explain why is a linear subspace.   For (b), take an orthonormal basis of such that is an orthonormal basis for . This exists by the Gram-Schmidt procedure.  Then let . Since this is a basis, . Explain why .   Note that is a basis for . Explain why for all and .   Use this observation to argue that for all .   Explain why .   Thus, , where and , so . Since , .  For (c), let . Since , . Explain why implies for all .   Explain why implies for all .   Therefore, . Explain why this means .   Therefore, .  For (d), suppose that for some and . Rearranging, . Explain why .   Explain why .   Thus, . Explain why this means and .   Therefore the orthogonal decomposition is unique.   "
},
{
  "id": "sec-orthogonal-decomposition-5",
  "level": "2",
  "url": "#sec-orthogonal-decomposition-5",
  "type": "Theorem",
  "number": "1.4",
  "title": "",
  "body": "  Let be a subspace of an inner product space , and let . Let , where and . Then is the closest point in to .    Let . Then, by the Pythagorean theorem, . Therefore, is minimized precisely when .   "
},
{
  "id": "sec-proving-better-way-3",
  "level": "2",
  "url": "#sec-proving-better-way-3",
  "type": "Proof",
  "number": "1.4.1",
  "title": "",
  "body": " We will do the proof in two steps. First, I will argue that a minimizer is a solution to the normal equations . This in particular tells you that a solution always exists. Second we argue that any solution will be a closest point.  Let be the span of the columns of . Then let be the orthogonal decomposition of with and . Then is the closest point to in . Furthermore, , so for some . Then Explain why implies that .   Thus, , so . It follows that if is the closest point in the image of to , then is a solution to that equation. In particular, a solution always exists.  What remains is to show that any solution arises in that way. Let be a solution to the normal equation. We want to argue that is the closest point in to . For this, we work in reverse. We can rewrite as . Thus, is in and thus in . Since is a subspace, , so is the orthogonal decomposition of . It follows that the closest point to in is , which completes the proof.  "
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
