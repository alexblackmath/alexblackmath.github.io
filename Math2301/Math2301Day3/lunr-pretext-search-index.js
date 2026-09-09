var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "independence-day",
  "level": "1",
  "url": "#independence-day",
  "type": "Article",
  "number": "",
  "title": "Independence Day",
  "body": " Independence Day       Review     What are the two key operations for a vector space?    What is a linear subspace of a vector space?    Which vector spaces can be written as a span?       Independence  Last time, we showed that for a vector space , . We can often find a much smaller subset such that . Such a subset is called a spanning subset of .  For example, consider the -plane:  We can rewrite it as  Thus, even though the -plane consists of infinitely many vectors, we need only two vectors to span it.  If we remove either of these two vectors, the span changes. In particular, the following three subspaces are distinct:  The first is the -axis, the second is the -axis, and the third is the -plane. Thus, this spanning set is minimal in the sense that its span changes if we remove any vector.  We call a set of vectors linearly independent if for every proper subset . We use the convention  In particular, the empty set is linearly independent, whereas is not. A set that is not linearly independent is called linearly dependent . Another example of a linearly dependent set is  since  Linear independence is often defined using the equivalent criterion in the following theorem.    Let be a vector space, and let be a finite set of distinct vectors, where . Then is linearly independent if and only if the only scalars satisfying  are .    We prove both directions.  Suppose that is linearly independent. Assume, for a contradiction, that  for scalars that are not all zero. Choose such that . Rearranging and dividing by gives  Thus , so  This contradicts linear independence. The argument also covers : in that case, the sum on the right is empty and equals .  To do this, we prove the contrapositive statement. Suppose that is linearly dependent. Then there is a proper subset such that . Since there exists . Since   The first and last spans are equal, so all three are equal. In particular, lies in the span of the remaining vectors. Hence there are scalars for each such that  Setting yields  Because , the coefficients are not all zero. Thus, we have shown if the set is linearly dependent, then there is a nontrivial linear combination equal to , which is the contrapositive of the original statement.    Given a vector space, we will define the dimension to be the minimal number of vectors in any spanning set. We will need to do some more work to explain why that definition makes sense and will continue with that next time.     Exercises    For each of the following sets, determine whether it is linearly independent in the indicated real vector space. Explain why or why not.     in a real vector space .    in .    in .    in , the vector space of real polynomials.    in the vector space of all functions from to .         Let and be two distinct vectors in a vector space . Prove that is linearly independent if and only if neither vector is a scalar multiple of the other.      Give an example of three vectors in such that no two are scalar multiples of one another, but the three vectors are linearly dependent.      Prove that any nonempty subset of a linearly independent set of vectors is linearly independent.     "
},
{
  "id": "linear-independence-criterion",
  "level": "2",
  "url": "#linear-independence-criterion",
  "type": "Theorem",
  "number": "2.1",
  "title": "",
  "body": "  Let be a vector space, and let be a finite set of distinct vectors, where . Then is linearly independent if and only if the only scalars satisfying  are .    We prove both directions.  Suppose that is linearly independent. Assume, for a contradiction, that  for scalars that are not all zero. Choose such that . Rearranging and dividing by gives  Thus , so  This contradicts linear independence. The argument also covers : in that case, the sum on the right is empty and equals .  To do this, we prove the contrapositive statement. Suppose that is linearly dependent. Then there is a proper subset such that . Since there exists . Since   The first and last spans are equal, so all three are equal. In particular, lies in the span of the remaining vectors. Hence there are scalars for each such that  Setting yields  Because , the coefficients are not all zero. Thus, we have shown if the set is linearly dependent, then there is a nontrivial linear combination equal to , which is the contrapositive of the original statement.   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "#exercise-1",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "",
  "body": "  For each of the following sets, determine whether it is linearly independent in the indicated real vector space. Explain why or why not.     in a real vector space .    in .    in .    in , the vector space of real polynomials.    in the vector space of all functions from to .      "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "#exercise-2",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "",
  "body": "  Let and be two distinct vectors in a vector space . Prove that is linearly independent if and only if neither vector is a scalar multiple of the other.   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "#exercise-3",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "",
  "body": "  Give an example of three vectors in such that no two are scalar multiples of one another, but the three vectors are linearly dependent.   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "#exercise-4",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "",
  "body": "  Prove that any nonempty subset of a linearly independent set of vectors is linearly independent.   "
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
