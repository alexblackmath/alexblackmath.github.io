var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "math2000day2",
  "level": "1",
  "url": "#math2000day2",
  "type": "Article",
  "number": "",
  "title": "Span’s Labyrinth",
  "body": " Span's Labyrinth    Alex Black     Vector Spaces  Vectors had two primary operations that we could use:   Addition:  Scalar Multiplication: , where   The book gives a more detailed list of definitions to say what constitutes addition and scalar multiplication and enforces that they play well together. It even notes that it doesn't have to use the real numbers . Instead, one could use a more general set of numbers. This can be very useful for modeling certain problems.  There are a few axioms I do want to highlight, because they are less obvious and yield good reminders of proof writing. One of these is that a vector space has to have a notion of a zero vector typically denoted . This vector has the remarkable defining property that for any other vector , we have     Any vector space has a unique zero vector .    That it has some zero vector comes for free by definition. But there could be two or three or infinitely many for all we know. We will do this by proof by contradiction.  Suppose for the sake of contradiction that there were two zero vectors and . In particular, that means . However, by definition of a zero vector,     This is an absolute classic proof. If we didn't talk about the axioms, we'd miss it. Another less obvious axiom is that vectors need to have additive inverses. That is, for all , there exists such that .    Let be a vector space. Let . Then is the unique additive inverse of .    Note that Thus, is an additive inverse of . Let be any other additive inverse.     The book has some fun facts like those that you can prove alongside a detailed discussion of the axioms. In all of the examples we care about in this class with my way of teaching it, how to scale and add will be apparent and the properties familiar.  Examples of vector spaces include:   , the set of -tuples of real numbers   Matrices under addition and rescaling every entry  Polynomials  Functions from to  Continuous functions from to  Differentiable functions from to  Solutions to linear ordinary differential equations   I usually think of vectors as lists of numbers, but on a network with either the nodes or the connection between nodes inheriting weights. This leads to all kinds of applications of linear algebra.    Linear Subspaces  A lot of examples we care about will come from subsets of vector spaces that are themselves vector spaces. There is a nice general condition for when that occurs:    Let be a vector space. Let , and suppose that    Closure Under Addition: For all , .  Closure Under Scalar Multiplication: For and , .   Then is a vector space with the same notion of scalar multiplication.    Such a subset is called a linear subspace . Axler proves this from the axioms, because he's a hardcore guy. You can read that if you want, but it's not the kind of thing I want to prioritize in this class.  For a set of vectors , one can construct , the set of all vectors one can obtain by adding and rescaling finitely many of those vectors. For example,    , which is the line .  is the -plane in .     Let be a vector space. For any nonempty subset , is a linear subspace of .    First, since , there exists an element . Then , so contains the zero vector of .  Let and . Then, by definition, there exist and such that Then so is a linear combination of elements of and therefore in .   Furthermore, which is a linear combination of elements of and therefore in .  Therefore, contains and is closed under addition and scalar multiplication and is thus a linear subspace.    It turns out every single linear subspace arises in this way.     Let be a vector space. Then any finite linear combination of elements of is in .    To prove this, we proceed by induction. Let , and suppose that is a linear combination of element of . Then for some and . Since is closed under scaling and  .  Suppose for the sake of induction that any linear combination of elements of is in . We want to show that any linear combination of elements of must be in . Let be such a linear combination so that and . Let Then is a linear combination of elements of , so by our inductive hypothesis, . Furthermore, since is closed under scaling . Then, since is closed under addition Therefore, any finite linear combination of elements of is in .      Let be a vector space, and let be a subspace. Then     How do we prove two sets are equal? We show both inclusions.  Thus, we first show . Let . Then , which is a linear combination of some set of elements of . Hence, . Therefore .  For the reverse direction, we show . Let . Then, by the definition of span, is a finite lienar combination of elements of . By , any finite linear combination of elements of must be in .      Exercises    Describe the following sets in your own words:     ?   .     Recall that to denote an arbitrary function from to , we say let .    Show that the function defined by for all is the zero vector in the vector space of real-valued functions.      Fix (positive integers). Show that matrices whose rows and columns all sum to are a linear subspace of the vector space of all matrices.    Recall the for two sets and , the intersection is the set of elements in both and , and the union is the set of elements in at least one of or .    Let and be linear subspaces of a vector space . Prove that is also a subspace. What about ?      Give examples of subsets of a vector space closed under addition but not scalar multiplication and the reverse.     "
},
{
  "id": "thm-unique-zero-vector",
  "level": "2",
  "url": "#thm-unique-zero-vector",
  "type": "Theorem",
  "number": "1.1",
  "title": "",
  "body": "  Any vector space has a unique zero vector .    That it has some zero vector comes for free by definition. But there could be two or three or infinitely many for all we know. We will do this by proof by contradiction.  Suppose for the sake of contradiction that there were two zero vectors and . In particular, that means . However, by definition of a zero vector,    "
},
{
  "id": "thm-additive-inverse-minus-one",
  "level": "2",
  "url": "#thm-additive-inverse-minus-one",
  "type": "Theorem",
  "number": "1.2",
  "title": "",
  "body": "  Let be a vector space. Let . Then is the unique additive inverse of .    Note that Thus, is an additive inverse of . Let be any other additive inverse.    "
},
{
  "id": "thm-subspace-test",
  "level": "2",
  "url": "#thm-subspace-test",
  "type": "Theorem",
  "number": "2.1",
  "title": "",
  "body": "  Let be a vector space. Let , and suppose that    Closure Under Addition: For all , .  Closure Under Scalar Multiplication: For and , .   Then is a vector space with the same notion of scalar multiplication.   "
},
{
  "id": "linear-subspaces-4",
  "level": "2",
  "url": "#linear-subspaces-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear subspace "
},
{
  "id": "thm-span-is-subspace",
  "level": "2",
  "url": "#thm-span-is-subspace",
  "type": "Theorem",
  "number": "2.2",
  "title": "",
  "body": "  Let be a vector space. For any nonempty subset , is a linear subspace of .    First, since , there exists an element . Then , so contains the zero vector of .  Let and . Then, by definition, there exist and such that Then so is a linear combination of elements of and therefore in .   Furthermore, which is a linear combination of elements of and therefore in .  Therefore, contains and is closed under addition and scalar multiplication and is thus a linear subspace.   "
},
{
  "id": "lem-inductionexample",
  "level": "2",
  "url": "#lem-inductionexample",
  "type": "Lemma",
  "number": "2.3",
  "title": "",
  "body": "  Let be a vector space. Then any finite linear combination of elements of is in .    To prove this, we proceed by induction. Let , and suppose that is a linear combination of element of . Then for some and . Since is closed under scaling and  .  Suppose for the sake of induction that any linear combination of elements of is in . We want to show that any linear combination of elements of must be in . Let be such a linear combination so that and . Let Then is a linear combination of elements of , so by our inductive hypothesis, . Furthermore, since is closed under scaling . Then, since is closed under addition Therefore, any finite linear combination of elements of is in .   "
},
{
  "id": "thm-span-subspace-equals-subspace",
  "level": "2",
  "url": "#thm-span-subspace-equals-subspace",
  "type": "Theorem",
  "number": "2.4",
  "title": "",
  "body": "  Let be a vector space, and let be a subspace. Then     How do we prove two sets are equal? We show both inclusions.  Thus, we first show . Let . Then , which is a linear combination of some set of elements of . Hence, . Therefore .  For the reverse direction, we show . Let . Then, by the definition of span, is a finite lienar combination of elements of . By , any finite linear combination of elements of must be in .   "
},
{
  "id": "exercise-span-descriptions",
  "level": "2",
  "url": "#exercise-span-descriptions",
  "type": "Exercise",
  "number": "3.1",
  "title": "",
  "body": "  Describe the following sets in your own words:     ?   .    "
},
{
  "id": "exercise-zero-function",
  "level": "2",
  "url": "#exercise-zero-function",
  "type": "Exercise",
  "number": "3.2",
  "title": "",
  "body": "  Show that the function defined by for all is the zero vector in the vector space of real-valued functions.   "
},
{
  "id": "exercise-zero-row-column-sums",
  "level": "2",
  "url": "#exercise-zero-row-column-sums",
  "type": "Exercise",
  "number": "3.3",
  "title": "",
  "body": "  Fix (positive integers). Show that matrices whose rows and columns all sum to are a linear subspace of the vector space of all matrices.   "
},
{
  "id": "exercise-intersection-union-subspaces",
  "level": "2",
  "url": "#exercise-intersection-union-subspaces",
  "type": "Exercise",
  "number": "3.4",
  "title": "",
  "body": "  Let and be linear subspaces of a vector space . Prove that is also a subspace. What about ?   "
},
{
  "id": "exercise-closure-examples",
  "level": "2",
  "url": "#exercise-closure-examples",
  "type": "Exercise",
  "number": "3.5",
  "title": "",
  "body": "  Give examples of subsets of a vector space closed under addition but not scalar multiplication and the reverse.   "
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
