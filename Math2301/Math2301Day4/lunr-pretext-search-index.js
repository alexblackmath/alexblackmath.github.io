var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "basic",
  "level": "1",
  "url": "#basic",
  "type": "Article",
  "number": "",
  "title": "Basic Math",
  "body": " Basic Math        Review   What does it mean for a set of vectors to be linearly independent ?  What does it mean for a set of vectors to span a vector space?     Let , and suppose they are linearly independent. Let . Then are linearly independent if and only if .      Bases  A basis of a vector space is a subset of that is both linearly independent and spanning.    Any vector space of the form , where is finite, has a basis.    Choose a linearly independent subset of maximal cardinality; this is possible because is finite. If , then is both spanning and linearly independent, so it is a basis.  Otherwise, let . Maximality of implies that is linearly dependent. By , . Thus every element of lies in , so   Hence , and is a basis.      Which step used finiteness?    A vector space that can be written as the span of finitely many vectors is called finite-dimensional . We call the size of a basis the dimension of a vector space. By the previous result, every finite-dimensional vector space has a finite basis, which is where the term comes from. However, this definition could hypothetically fail to make sense: if a vector space had one basis of size and another of size , what would its dimension be? Luckily, we can prove this cannot happen.    Every basis of a finite-dimensional vector space has the same finite size.    To prove this, we will use a famous lemma that gives a way to swap elements of bases.   Steinitz Exchange Lemma   Let and be two bases of a finite-dimensional vector space. For any , there exists such that is a basis.    Let . Since is a basis, there are distinct vectors and scalars , not all zero, such that   Some with must lie in . Otherwise every with nonzero coefficient would lie in . Since , the vector is distinct from all of these , and the displayed equation would give a nontrivial linear dependence among elements of . Relabel if necessary so that and .  We claim that is a basis. First, it is linearly independent. Indeed, : if it were, then would have an expression in the basis with coefficient on , contradicting uniqueness of basis coordinates since the displayed expression has . By , replacing by therefore preserves linear independence.  To show spanning, solve the displayed equation for :   Thus . Every other element of is already in the replacement set, so that set spans , and hence spans . Therefore is a basis.    Using the exchange lemma, we can prove .   Proof of the basis-size theorem  Since the vector space is finite dimensional, it has a finite basis by the argument in the proof of . Let and be two bases, and suppose for the sake of contradiction that . We may furthermore assume that is finite.  Let be a subset of of maximal size such that there exists such that and is a basis. Such a set exists, since one can take . Note that   Thus, there exists . Then by the Steinitz lemma, there exists such that is a basis, a contradiction to the maximality of .       Exercises    Apply to and with .      Show that a set of vectors is spanning in a finite-dimensional vector space if and only if it contains a basis.      Show that a set of vectors is linearly independent in a finite-dimensional vector space if and only if it is contained in a basis.    Some properties of bases break down if we use integer coefficients instead of coefficients from a field such as . Let denote the set of integer linear combinations of elements of . We call a set of vectors integer-linearly independent if the only integer linear combination of them that equals is the trivial combination, in which all coefficients are zero.    Let denote the integers.    Explain why and .    Show that .    Show that a nontrivial integer linear combination of and equals .    Conclude that although spans over , it contains no subset that both spans over and is integer-linearly independent.     "
},
{
  "id": "ex-independent-extension",
  "level": "2",
  "url": "#ex-independent-extension",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let , and suppose they are linearly independent. Let . Then are linearly independent if and only if .   "
},
{
  "id": "Section-1-2",
  "level": "2",
  "url": "#Section-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basis "
},
{
  "id": "thm-finite-spanning-set-has-basis",
  "level": "2",
  "url": "#thm-finite-spanning-set-has-basis",
  "type": "Theorem",
  "number": "2.1",
  "title": "",
  "body": "  Any vector space of the form , where is finite, has a basis.    Choose a linearly independent subset of maximal cardinality; this is possible because is finite. If , then is both spanning and linearly independent, so it is a basis.  Otherwise, let . Maximality of implies that is linearly dependent. By , . Thus every element of lies in , so   Hence , and is a basis.   "
},
{
  "id": "ex-where-finiteness",
  "level": "2",
  "url": "#ex-where-finiteness",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "",
  "body": "  Which step used finiteness?   "
},
{
  "id": "Section-1-5",
  "level": "2",
  "url": "#Section-1-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finite-dimensional dimension "
},
{
  "id": "thm-base-size",
  "level": "2",
  "url": "#thm-base-size",
  "type": "Theorem",
  "number": "2.3",
  "title": "",
  "body": "  Every basis of a finite-dimensional vector space has the same finite size.   "
},
{
  "id": "lem-steinitz-exchange",
  "level": "2",
  "url": "#lem-steinitz-exchange",
  "type": "Lemma",
  "number": "2.4",
  "title": "Steinitz Exchange Lemma.",
  "body": " Steinitz Exchange Lemma   Let and be two bases of a finite-dimensional vector space. For any , there exists such that is a basis.    Let . Since is a basis, there are distinct vectors and scalars , not all zero, such that   Some with must lie in . Otherwise every with nonzero coefficient would lie in . Since , the vector is distinct from all of these , and the displayed equation would give a nontrivial linear dependence among elements of . Relabel if necessary so that and .  We claim that is a basis. First, it is linearly independent. Indeed, : if it were, then would have an expression in the basis with coefficient on , contradicting uniqueness of basis coordinates since the displayed expression has . By , replacing by therefore preserves linear independence.  To show spanning, solve the displayed equation for :   Thus . Every other element of is already in the replacement set, so that set spans , and hence spans . Therefore is a basis.   "
},
{
  "id": "Section-1-10",
  "level": "2",
  "url": "#Section-1-10",
  "type": "Proof",
  "number": "2.1",
  "title": "Proof of the basis-size theorem.",
  "body": " Proof of the basis-size theorem  Since the vector space is finite dimensional, it has a finite basis by the argument in the proof of . Let and be two bases, and suppose for the sake of contradiction that . We may furthermore assume that is finite.  Let be a subset of of maximal size such that there exists such that and is a basis. Such a set exists, since one can take . Note that   Thus, there exists . Then by the Steinitz lemma, there exists such that is a basis, a contradiction to the maximality of .  "
},
{
  "id": "ex-steinitz-example",
  "level": "2",
  "url": "#ex-steinitz-example",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "",
  "body": "  Apply to and with .   "
},
{
  "id": "ex-spanning-contains-basis",
  "level": "2",
  "url": "#ex-spanning-contains-basis",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "",
  "body": "  Show that a set of vectors is spanning in a finite-dimensional vector space if and only if it contains a basis.   "
},
{
  "id": "ex-independent-contained-basis",
  "level": "2",
  "url": "#ex-independent-contained-basis",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "",
  "body": "  Show that a set of vectors is linearly independent in a finite-dimensional vector space if and only if it is contained in a basis.   "
},
{
  "id": "exercises-5",
  "level": "2",
  "url": "#exercises-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integer-linearly independent "
},
{
  "id": "ex-integer-span-counterexample",
  "level": "2",
  "url": "#ex-integer-span-counterexample",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "",
  "body": "  Let denote the integers.    Explain why and .    Show that .    Show that a nontrivial integer linear combination of and equals .    Conclude that although spans over , it contains no subset that both spans over and is integer-linearly independent.   "
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
