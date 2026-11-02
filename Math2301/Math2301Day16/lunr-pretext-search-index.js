var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "axioms",
  "level": "1",
  "url": "#axioms",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 16",
  "body": " Math 2301 Day 16       Quadratic Algebra   Review  What was the statement of the spectral theorem?    Symmetry without coordinates  It turns out that eigenvectors and eigenvalues are particularly nice for symmetric matrices , matrices such that . We want to describe this in arbitrary vector spaces, and this is particularly important as most of what we do here extends to infinite dimensions. In quantum mechanics, you study infinite dimensional operators, and a key property is the following:    A linear operator on an inner-product space is self-adjoint if     In an orthonormal basis on a finite dimensional inner product space, is self-adjoint exactly when its matrix is symmetric:    This definition turns out to be advantageous for generalization and for proving things. For example, let's recall projection operations.    Let be an orthogonal projection onto a linear subspace of an inner product space . Then is self-adjoint.    Let . Using orthogonal decomposition, and , where and . Then applying orthogonality relations and these decompositions yields:       Different eigenspaces are perpendicular  Being self-adjoint allows us to not only show that eigenspaces are distinct and independent but, in fact, orthogonal:    Let be a self-adjoint operator on an inner product space . Let be eigenvectors with distinct eigenvalues in . Then .    Let and . Self-adjointness gives Thus . Since the eigenvalues are distinct , so .       Quadratic Forms  Up until this point in the eigen-unit, we have proven some new things about stuff we already know, but the main things we are talking about are pretty familiar from Math 2000. In order to prove the deeper results, we will need to go one step beyond linear algebra to quadratic algebra .    The quadratic form associated with a matrix is     More explicitly for an matrix , we get Notation you will also see for this is . If you treat as an vector, this gives precisely the same formula as the standard inner product on .  Each term has degree two, which is where it gets its name. Quadratic forms are a key tool for studying symmetric matrices. This is because they only care about the symmetric part of a matrix.    Let be an matrix. Then for all , where . In particular, is symmetric.    Note that Then, since transposing is a linear involution (i.e., it is its own inverse) is symmetric and , which we call skew symmetric . Let . Note that, by bilinearity, Thus, to complete the proof, it suffices to show that . Observe that Thus, , which completes the proof.     Quadratic measurements cannot detect the skew-symmetric part of a matrix.    Positive Matrices  A quadratic form gives a way to detect when an operator is positive.    A symmetric matrix is    positive semidefinite (PSD) if for every ;     positive definite (PD) if for every nonzero .       For example, the identity matrix is positive definite, since with equality if and only if .    Exercises   Let be a positive semidefinite matrix. Show that all eigenvalues of A are non-negative.     Let .     Show that the matrix satisfies       Show that is symmetric.      Show that is positive semidefinite.       Let be a positive definite matrix. Show that     For any , is positive definite.      For any positive definite matrix , is positive definite.       Show that any non-negative linear combination of matrices of the form is positive semidefinite.     It turns out the spectral theorem shows that the reverse direction is true: every positive semidefinite matrix is a non-negative combination of matrices of the form .     "
},
{
  "id": "sec-symmetry-without-coordinates-2",
  "level": "2",
  "url": "#sec-symmetry-without-coordinates-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric matrices "
},
{
  "id": "def-self-adjoint",
  "level": "2",
  "url": "#def-self-adjoint",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  A linear operator on an inner-product space is self-adjoint if    "
},
{
  "id": "thm-projection-self-adjoint",
  "level": "2",
  "url": "#thm-projection-self-adjoint",
  "type": "Theorem",
  "number": "1.2",
  "title": "",
  "body": "  Let be an orthogonal projection onto a linear subspace of an inner product space . Then is self-adjoint.    Let . Using orthogonal decomposition, and , where and . Then applying orthogonality relations and these decompositions yields:    "
},
{
  "id": "thm-eigenvectors-orthogonal",
  "level": "2",
  "url": "#thm-eigenvectors-orthogonal",
  "type": "Theorem",
  "number": "1.3",
  "title": "",
  "body": "  Let be a self-adjoint operator on an inner product space . Let be eigenvectors with distinct eigenvalues in . Then .    Let and . Self-adjointness gives Thus . Since the eigenvalues are distinct , so .   "
},
{
  "id": "def-quadratic-form",
  "level": "2",
  "url": "#def-quadratic-form",
  "type": "Definition",
  "number": "1.4",
  "title": "",
  "body": "  The quadratic form associated with a matrix is    "
},
{
  "id": "thm-quadratic-form-symmetric-part",
  "level": "2",
  "url": "#thm-quadratic-form-symmetric-part",
  "type": "Theorem",
  "number": "1.5",
  "title": "",
  "body": "  Let be an matrix. Then for all , where . In particular, is symmetric.    Note that Then, since transposing is a linear involution (i.e., it is its own inverse) is symmetric and , which we call skew symmetric . Let . Note that, by bilinearity, Thus, to complete the proof, it suffices to show that . Observe that Thus, , which completes the proof.   "
},
{
  "id": "def-psd-pd",
  "level": "2",
  "url": "#def-psd-pd",
  "type": "Definition",
  "number": "1.6",
  "title": "",
  "body": "  A symmetric matrix is    positive semidefinite (PSD) if for every ;     positive definite (PD) if for every nonzero .      "
},
{
  "id": "exercises-day16-2",
  "level": "2",
  "url": "#exercises-day16-2",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": " Let be a positive semidefinite matrix. Show that all eigenvalues of A are non-negative.  "
},
{
  "id": "ex-outer-product",
  "level": "2",
  "url": "#ex-outer-product",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": "  Let .     Show that the matrix satisfies       Show that is symmetric.      Show that is positive semidefinite.    "
},
{
  "id": "ex-pd-cone",
  "level": "2",
  "url": "#ex-pd-cone",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "",
  "body": "  Let be a positive definite matrix. Show that     For any , is positive definite.      For any positive definite matrix , is positive definite.    "
},
{
  "id": "ex-combination-outer-products",
  "level": "2",
  "url": "#ex-combination-outer-products",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": "  Show that any non-negative linear combination of matrices of the form is positive semidefinite.   "
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
