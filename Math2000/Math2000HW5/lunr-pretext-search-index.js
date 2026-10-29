var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "supersmash",
  "level": "1",
  "url": "#supersmash",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Homework 5",
  "body": " Math 2000 Homework 5       Axioms Speak Louder than Words   The Four Fundamental Subspaces    Consider the matrix      Is in the kernel of ?      Is in the kernel of ?      Is in the column span of ?      Is in the row span of ?       Consider a matrix and suppose that it is invertible.     What is ?      What is ?      What is ?      What is ?      Explain your answers.       Use the Fredholm alternative to explain why the following linear system has no solution.      Polynomials  Recall the following facts about polynomials. Polynomials are functions of the form . Polynomials form a vector space under addition and scalar multiplication.  The degree of a polynomial is the maximum power of that appears with nonzero coefficient. For example, has degree and has degree . We say the polynomial has degree . A nonzero constant polynomial such as has degree .    Polynomials of degree at most are a subspace of the vector space of all polynomials. Explain why this is the case by following the three steps:     Explain why the polynomial has degree at most .      Explain why the sum of any polynomials of degree at most has degree at most .      Explain why rescaling a polynomial of degree at most yields a polynomial of degree at most .        Explain why the set of polynomials of degree exactly is not a linear subspace. Which properties does it not satisfy and why?      A polynomial is called even if for all . Define and .     Find a system of linear equations on for which is even if and only if its coefficients are a solution to that system.      Find a system of linear equations on for which is even if and only if its coefficients are a solution to that system.      Find a system of linear equations on for which and are both even if and only if their corresponding coefficients are a solution to that linear system.         "
},
{
  "id": "ex-kernel-span-membership",
  "level": "2",
  "url": "#ex-kernel-span-membership",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Consider the matrix      Is in the kernel of ?      Is in the kernel of ?      Is in the column span of ?      Is in the row span of ?    "
},
{
  "id": "ex-invertible-subspaces",
  "level": "2",
  "url": "#ex-invertible-subspaces",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider a matrix and suppose that it is invertible.     What is ?      What is ?      What is ?      What is ?      Explain your answers.    "
},
{
  "id": "ex-fredholm",
  "level": "2",
  "url": "#ex-fredholm",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Use the Fredholm alternative to explain why the following linear system has no solution.   "
},
{
  "id": "sec-polynomials-3",
  "level": "2",
  "url": "#sec-polynomials-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degree "
},
{
  "id": "ex-degree-at-most-2-subspace",
  "level": "2",
  "url": "#ex-degree-at-most-2-subspace",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Polynomials of degree at most are a subspace of the vector space of all polynomials. Explain why this is the case by following the three steps:     Explain why the polynomial has degree at most .      Explain why the sum of any polynomials of degree at most has degree at most .      Explain why rescaling a polynomial of degree at most yields a polynomial of degree at most .    "
},
{
  "id": "ex-degree-exactly-2",
  "level": "2",
  "url": "#ex-degree-exactly-2",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Explain why the set of polynomials of degree exactly is not a linear subspace. Which properties does it not satisfy and why?   "
},
{
  "id": "ex-even-polynomials",
  "level": "2",
  "url": "#ex-even-polynomials",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  A polynomial is called even if for all . Define and .     Find a system of linear equations on for which is even if and only if its coefficients are a solution to that system.      Find a system of linear equations on for which is even if and only if its coefficients are a solution to that system.      Find a system of linear equations on for which and are both even if and only if their corresponding coefficients are a solution to that linear system.    "
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
