var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Spooky",
  "level": "1",
  "url": "#Spooky",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 17",
  "body": " Math 2301 Day 17       A Very Spooky Theorem   Review  Answer the following questions:   Given a linear operator, what is the corresponding quadratic form?    Given an matrix , what is an symmetric matrix that has the same quadratic form?       The Statement  We will prove the following strong version of the spectral theorem:   Real spectral theorem   Let be a self-adjoint operator on a finite-dimensional real inner-product space . Then has an orthonormal basis of eigenvectors of .     The proof here is involved in part because this requires some tools from outside of linear algebra.    Optimization and Eigenvectors  Recall from last class the quadratic form: The argument is then built from the following intuition. Given two vectors of unit length, by the Cauchy Schwarz inequality, is maximized when . More generally, Cauchy Schwarz says that the inner product is maximized when two vectors are parallel. The quadratic form measures exactly the inner product between a vector and its image under , . Thus, it is reasonable to expect the quadratic form is maximized at some point when and are parallel. That is precisely what it means to be an eigenvector. Thus, we can find an eigenvector by maximizing this quadratic form.  For this let .    Let be a self-adjoint operator on an inner product space . Let denote its associated quadratic form. Let be a maximizer of such that . Then is an eigenvector of .    We want to use that is a maximizer of . Another way to express that condition is that moving in any direction away from gives a smaller value. We are going to look at each line in an orthogonal direction parametrized by a single variable, so we can use the optimality conditions from single variable calculus to argue the result.  Let , and suppose that . Define by Since , by the Pythagorean theorem, Thus, Then and . Thus, is a real-valued function, and we can use calculus to understand it.  It turns out this single-variable function is really just a ratio of single-variable quadratic functions: The numerator of the expression at the end is quadratic. To simplify, I will call it , and write . Now we use the quotient rule from calculus to find Since is a maximizer of by assumption, Note that Thus, Up to this point, the argument has not used self-adjointness. This is where we finally use it. Note that, by self-adjointness, . Thus,   Therefore, for all orthogonal to , is orthogonal to . Hence, , which implies , and hence is a multiple of . Therefore, by definition is an eigenvector of .    Thus, a maximizer of over must be an eigenvector, but why does this function attain its maximum? It turns out this requires a fact from analysis.   Extreme Value Theorem   Let be a continuous function. Then attains its maximum.    Applying this tells us that an eigenvector always exists.    Decomposition  The hardest part of the proof in my opinion is showing an eigenvector exists. For the rest, we can use the tools we developed from studying orthogonality.    Let be a self-adjoint operator, and let be an eigenvector of . Then is invariant under .    Let . In other words, . Then, writing , Thus .    Using this insight allows us to prove the spectral theorem ( ) by induction.   We use induction on . The theorem is immediate for . Assume for the sake of induction that any self-adjoint operator on an -dimensional vector space has an orthonormal eigenbasis. We want to show it is true for an -dimensional space. Let be a self-adjoint operator on an -dimensional vector space. Then, by the first lemma we showed today, has a unit eigenvector . Its orthogonal complement has dimension and is invariant under by our second lemma from today, and the restricted operator is self-adjoint. By induction, has an orthonormal eigenbasis for . Adding yields an orthonormal eigenbasis for the whole space.     Exercises    Let be a real symmetric matrix. Use the spectral theorem to prove the following:    has an orthonormal basis of eigenvectors;     for an orthogonal and diagonal ;     ;     has a spectral decomposition          Try the following game .      "
},
{
  "id": "thm-spectral",
  "level": "2",
  "url": "#thm-spectral",
  "type": "Theorem",
  "number": "1.1",
  "title": "Real spectral theorem.",
  "body": " Real spectral theorem   Let be a self-adjoint operator on a finite-dimensional real inner-product space . Then has an orthonormal basis of eigenvectors of .   "
},
{
  "id": "lem-maximizer-eigenvector",
  "level": "2",
  "url": "#lem-maximizer-eigenvector",
  "type": "Lemma",
  "number": "1.2",
  "title": "",
  "body": "  Let be a self-adjoint operator on an inner product space . Let denote its associated quadratic form. Let be a maximizer of such that . Then is an eigenvector of .    We want to use that is a maximizer of . Another way to express that condition is that moving in any direction away from gives a smaller value. We are going to look at each line in an orthogonal direction parametrized by a single variable, so we can use the optimality conditions from single variable calculus to argue the result.  Let , and suppose that . Define by Since , by the Pythagorean theorem, Thus, Then and . Thus, is a real-valued function, and we can use calculus to understand it.  It turns out this single-variable function is really just a ratio of single-variable quadratic functions: The numerator of the expression at the end is quadratic. To simplify, I will call it , and write . Now we use the quotient rule from calculus to find Since is a maximizer of by assumption, Note that Thus, Up to this point, the argument has not used self-adjointness. This is where we finally use it. Note that, by self-adjointness, . Thus,   Therefore, for all orthogonal to , is orthogonal to . Hence, , which implies , and hence is a multiple of . Therefore, by definition is an eigenvector of .   "
},
{
  "id": "thm-evt",
  "level": "2",
  "url": "#thm-evt",
  "type": "Theorem",
  "number": "1.3",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem   Let be a continuous function. Then attains its maximum.   "
},
{
  "id": "lem-invariant-complement",
  "level": "2",
  "url": "#lem-invariant-complement",
  "type": "Lemma",
  "number": "1.4",
  "title": "",
  "body": "  Let be a self-adjoint operator, and let be an eigenvector of . Then is invariant under .    Let . In other words, . Then, writing , Thus .   "
},
{
  "id": "sec-decomposition-5",
  "level": "2",
  "url": "#sec-decomposition-5",
  "type": "Proof",
  "number": "1.4.1",
  "title": "",
  "body": " We use induction on . The theorem is immediate for . Assume for the sake of induction that any self-adjoint operator on an -dimensional vector space has an orthonormal eigenbasis. We want to show it is true for an -dimensional space. Let be a self-adjoint operator on an -dimensional vector space. Then, by the first lemma we showed today, has a unit eigenvector . Its orthogonal complement has dimension and is invariant under by our second lemma from today, and the restricted operator is self-adjoint. By induction, has an orthonormal eigenbasis for . Adding yields an orthonormal eigenbasis for the whole space.  "
},
{
  "id": "ex-spectral-consequences",
  "level": "2",
  "url": "#ex-spectral-consequences",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  Let be a real symmetric matrix. Use the spectral theorem to prove the following:    has an orthonormal basis of eigenvectors;     for an orthogonal and diagonal ;     ;     has a spectral decomposition       "
},
{
  "id": "ex-circuit-walk",
  "level": "2",
  "url": "#ex-circuit-walk",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  Try the following game .   "
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
