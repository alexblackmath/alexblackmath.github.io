var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "affine",
  "level": "1",
  "url": "#affine",
  "type": "Article",
  "number": "",
  "title": "Affine Selection of Exercises",
  "body": " Affine Selection of Exercises        Affine Span  The affine span  of a set of vectors is the set of all finite linear combinations of vectors in such that the coefficients sum to . Such a linear combination is called an affine linear combination. For example, is an affine combination of , and .    Let . Draw and describe .         Let for a vector space , and suppose that . Show that .       An affine subspace is a subset of a vector space such that any affine linear combination of finitely many elements in is still in .    Show that for any subset , is an affine linear subspace.         Affine Independence  A finite set of vectors is affinely independent if there is no nontrivial linear combination of them that sums to such that the coefficients sum to . For example are not affinely independent, because   and .    Show that is affinely independent.         Prove that if a set of vectors is affinely independent, then for any .         Prove that if a set of vectors satisfies for any , then is affinely independent.            "
},
{
  "id": "affine-span-2",
  "level": "2",
  "url": "#affine-span-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "affine span affine "
},
{
  "id": "exercise-affine-span-two-points",
  "level": "2",
  "url": "#exercise-affine-span-two-points",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let . Draw and describe .      "
},
{
  "id": "exercise-affine-span-zero-in-s",
  "level": "2",
  "url": "#exercise-affine-span-zero-in-s",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Let for a vector space , and suppose that . Show that .      "
},
{
  "id": "affine-span-5",
  "level": "2",
  "url": "#affine-span-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "affine subspace "
},
{
  "id": "exercise-affine-span-subspace",
  "level": "2",
  "url": "#exercise-affine-span-subspace",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Show that for any subset , is an affine linear subspace.      "
},
{
  "id": "affine-independence-2",
  "level": "2",
  "url": "#affine-independence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "affinely independent "
},
{
  "id": "exercise-zero-affinely-independent",
  "level": "2",
  "url": "#exercise-zero-affinely-independent",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Show that is affinely independent.      "
},
{
  "id": "exercise-independent-proper-subset",
  "level": "2",
  "url": "#exercise-independent-proper-subset",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Prove that if a set of vectors is affinely independent, then for any .      "
},
{
  "id": "exercise-proper-subset-independent",
  "level": "2",
  "url": "#exercise-proper-subset-independent",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Prove that if a set of vectors satisfies for any , then is affinely independent.      "
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
