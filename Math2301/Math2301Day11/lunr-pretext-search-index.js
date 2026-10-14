var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "CauchySchwarz",
  "level": "1",
  "url": "#CauchySchwarz",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 11",
  "body": " Math 2301 Day 11       Going to Great Lengths and Even Greater Angles   Review  Let . Recall that .    Show that .      Show that for all , with equality if and only if .      Fix a vector . Then define by . Show that is a linear transformation.      Inner Products  The exercises describe the essential properties necessary for everything we want out of the dot product. In fact, it is best to define a more general structure called an inner product based on those properties.    An inner product on a real vector space is a function satisfying, for all and :   Bilinearity : and ;  Symmetry : ;  Squares are non-negative : , with equality only when .     Inner products give us the abstract tools to extend two essential ideas from geometry.  The first is the notion of length. We define the norm of a vector to be . For example, , which is the length of the vector .  The second is the notion of angle. You may recall that . In particular, for nonzero vectors, you can define the angle between two vectors as .  But for this to make sense, we need . This is called the Cauchy–Schwarz inequality and is one of the most important inequalities in all of math.   Cauchy–Schwarz   Let , where is an inner product space. Then .    The claim is immediate if either or , so assume both are nonzero. Let and . Then, by bilinearity, . Thus, it suffices to show that .  We will use the following useful fact by bilinearity and the fact that : .  Then we have again by using this observation and bilinearity: . Moving the inner product to one side and using that , we finally find , so as desired.    One of the reasons it is such an important inequality is that it is used to prove another very important inequality that is secretly the core tool to prove everything in calculus:   Triangle inequality   Let be an inner product space. Then for all , .    Bilinearity and Cauchy–Schwarz give the following: . Taking square roots completes the proof.    Now you may think surely this can only be used for proving inequalities, but despite all odds, you can even prove amazing equalities too.  We say two vectors and are orthogonal in an inner product space if . The following theorem has a familiar name. It's after a notorious mathematician named Pythagoras who had an irrational fear of .   Pythagorean Theorem   Let and be orthogonal. Then .    Using bilinearity, symmetry, and the fact that by our assumption that they are orthogonal, we find the following: .      Exercises    Let be an inner product space, and let . Show that if and only if or is a non-negative multiple of .      Let be an inner product space, and let . Show that if and only if or is a non-negative multiple of .    Let be a vector space. Then a linear functional is a linear transformation .    Let be an inner product space. Let be a linear functional, and let . Suppose that achieves a maximum on .     If is nonzero, every maximizer of on has norm .      Either is the zero map or the maximizer is unique.             "
},
{
  "id": "review-3",
  "level": "2",
  "url": "#review-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Show that .   "
},
{
  "id": "review-4",
  "level": "2",
  "url": "#review-4",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Show that for all , with equality if and only if .   "
},
{
  "id": "review-5",
  "level": "2",
  "url": "#review-5",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Fix a vector . Then define by . Show that is a linear transformation.   "
},
{
  "id": "inner-products-2",
  "level": "2",
  "url": "#inner-products-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inner product "
},
{
  "id": "inner-products-3",
  "level": "2",
  "url": "#inner-products-3",
  "type": "Definition",
  "number": "1.4",
  "title": "",
  "body": "  An inner product on a real vector space is a function satisfying, for all and :   Bilinearity : and ;  Symmetry : ;  Squares are non-negative : , with equality only when .    "
},
{
  "id": "inner-products-5",
  "level": "2",
  "url": "#inner-products-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "norm "
},
{
  "id": "thm-cauchy-schwarz",
  "level": "2",
  "url": "#thm-cauchy-schwarz",
  "type": "Theorem",
  "number": "1.5",
  "title": "Cauchy–Schwarz.",
  "body": " Cauchy–Schwarz   Let , where is an inner product space. Then .    The claim is immediate if either or , so assume both are nonzero. Let and . Then, by bilinearity, . Thus, it suffices to show that .  We will use the following useful fact by bilinearity and the fact that : .  Then we have again by using this observation and bilinearity: . Moving the inner product to one side and using that , we finally find , so as desired.   "
},
{
  "id": "thm-triangle-inequality",
  "level": "2",
  "url": "#thm-triangle-inequality",
  "type": "Theorem",
  "number": "1.6",
  "title": "Triangle inequality.",
  "body": " Triangle inequality   Let be an inner product space. Then for all , .    Bilinearity and Cauchy–Schwarz give the following: . Taking square roots completes the proof.   "
},
{
  "id": "inner-products-12",
  "level": "2",
  "url": "#inner-products-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "thm-pythagorean",
  "level": "2",
  "url": "#thm-pythagorean",
  "type": "Theorem",
  "number": "1.7",
  "title": "Pythagorean Theorem.",
  "body": " Pythagorean Theorem   Let and be orthogonal. Then .    Using bilinearity, symmetry, and the fact that by our assumption that they are orthogonal, we find the following: .   "
},
{
  "id": "exercises-2",
  "level": "2",
  "url": "#exercises-2",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Let be an inner product space, and let . Show that if and only if or is a non-negative multiple of .   "
},
{
  "id": "exercises-3",
  "level": "2",
  "url": "#exercises-3",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Let be an inner product space, and let . Show that if and only if or is a non-negative multiple of .   "
},
{
  "id": "exercises-4",
  "level": "2",
  "url": "#exercises-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear functional "
},
{
  "id": "exercises-5",
  "level": "2",
  "url": "#exercises-5",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Let be an inner product space. Let be a linear functional, and let . Suppose that achieves a maximum on .     If is nonzero, every maximizer of on has norm .      Either is the zero map or the maximizer is unique.    "
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
