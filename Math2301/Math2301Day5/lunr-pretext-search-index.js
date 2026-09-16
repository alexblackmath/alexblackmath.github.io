var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "basic",
  "level": "1",
  "url": "#basic",
  "type": "Article",
  "number": "",
  "title": "Kernel Mustard",
  "body": " Kernel Mustard        Review   What was the statement of the Steinitz lemma?  What were we trying to use it to prove?   -->  Finishing Bases    Every basis of a finite dimensional vector space has the same size.    Proof of  Let and be two bases, and suppose for the sake of contradiction that . Let be a subset of of maximal size such that there exists such that and is a basis. Such a set exists, since one can take . Note that   Thus, there exists . Then by the Steinitz lemma, there exists such that is a basis, a contradiction to the maximality of .      Linear Transformations  We have talked about vector spaces and now know that vector spaces have bases. Part of the purpose of bases is they give you a way to identify vector spaces and move between them.   A linear transformation  , where and are vector spaces, is a function such that for any and , and .   That is, a linear transformation is a function that preserves the only two things we are guaranteed to be able to do in a vector space, scaling and adding.   Any map of the form given by for an matrix is a linear transformation.    The map from the set of real valued functions to numbers given by is a linear transformation.    The map from differentiable functions to functions is a linear transformation, since    Once you know a function is a linear transformation, you learn some important properties of it for free.    Let be a linear transformation between two vector spaces and . Then .    Note that    For example, the derivative of the function is , and multiplying a matrix by the zero vector always yields . This is a uniform proof of both phenomena.  In fact, a stronger statement is true. For any linear transformation , we define , the pre-image of . We just showed that . Recall that is one of the three properties for being a linear subspace.    For any linear transformation , is a linear subspace of .    We just showed . Thus, it suffices to show closure under addition and scalar multiplication. Let . Then   Let . Then   Thus, . Therefore, by definition, is a linear subspace.    This fact gives a very useful way to build various linear subspaces. For example, this shows that functions with derivative are a linear subspace. These are exactly the constant functions, which indeed are preserved under scaling and addition. It also shows that for any matrix, the set of such that   is always a linear subspace. The power of this general statement is we get a proof of both facts simultaneously all as a consequence of this fundamental idea.  Kernels also tell us about a linear transformation. Recall from 2020 that a function is one-to-one if each input has a distinct output. That is implies .    Let be a linear transformation between vector spaces and . Then is one-to-one if and only if .    ( ) Suppose that is one-to-one. Note that . Since is one-to-one, is the only vector for which that is the case. Therefore, .  ( ) Suppose that . Let , and suppose that . To prove is one-to-one, we want to then show that . To argue this, observe that   Thus, . Therefore, since , , so . Therefore, is one-to-one.    Linear transformations give rise to another set called their image denoted     Let be a linear transformation from a vector space to a vector space . Then is a linear subspace of .    Note that . Thus, the image contains the zero vector.  Let . Then there exist such that and . It follows that   Therefore, is closed under addition.  Let . Then   Therefore, is closed under scalar multiplication and is thus a linear subspace.       Exercises  Recall that a function is called onto if its range is .   Explain why for a linear transformation between vector spaces and , if and only if is onto.   Part of the purpose of the introduction of kernel and images is to give you new ways to build linear subspaces.   Let denote the set of vectors such that . Is a linear subspace? If yes, find a linear transformation for which . Otherwise, prove why not.    Let denote the set of vectors such that . Is a linear subspace? If yes, find a linear transformation for which . Otherwise, prove why not.    Prove that the set of functions that are their own derivative is a linear subspace.    Let and be linear transformations between vector spaces. Show that if and only if is the -function.    "
},
{
  "id": "thm-BaseSize",
  "level": "2",
  "url": "#thm-BaseSize",
  "type": "Theorem",
  "number": "2.1",
  "title": "",
  "body": "  Every basis of a finite dimensional vector space has the same size.    Proof of  Let and be two bases, and suppose for the sake of contradiction that . Let be a subset of of maximal size such that there exists such that and is a basis. Such a set exists, since one can take . Note that   Thus, there exists . Then by the Steinitz lemma, there exists such that is a basis, a contradiction to the maximality of .   "
},
{
  "id": "Section-2-3",
  "level": "2",
  "url": "#Section-2-3",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": " A linear transformation  , where and are vector spaces, is a function such that for any and , and .  "
},
{
  "id": "Section-2-5",
  "level": "2",
  "url": "#Section-2-5",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": " Any map of the form given by for an matrix is a linear transformation.  "
},
{
  "id": "Section-2-6",
  "level": "2",
  "url": "#Section-2-6",
  "type": "Example",
  "number": "3.3",
  "title": "",
  "body": " The map from the set of real valued functions to numbers given by is a linear transformation.  "
},
{
  "id": "Section-2-7",
  "level": "2",
  "url": "#Section-2-7",
  "type": "Example",
  "number": "3.4",
  "title": "",
  "body": " The map from differentiable functions to functions is a linear transformation, since   "
},
{
  "id": "Section-2-9",
  "level": "2",
  "url": "#Section-2-9",
  "type": "Theorem",
  "number": "3.5",
  "title": "",
  "body": "  Let be a linear transformation between two vector spaces and . Then .    Note that   "
},
{
  "id": "Section-2-12",
  "level": "2",
  "url": "#Section-2-12",
  "type": "Theorem",
  "number": "3.6",
  "title": "",
  "body": "  For any linear transformation , is a linear subspace of .    We just showed . Thus, it suffices to show closure under addition and scalar multiplication. Let . Then   Let . Then   Thus, . Therefore, by definition, is a linear subspace.   "
},
{
  "id": "Section-2-16",
  "level": "2",
  "url": "#Section-2-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-to-one "
},
{
  "id": "Section-2-17",
  "level": "2",
  "url": "#Section-2-17",
  "type": "Theorem",
  "number": "3.7",
  "title": "",
  "body": "  Let be a linear transformation between vector spaces and . Then is one-to-one if and only if .    ( ) Suppose that is one-to-one. Note that . Since is one-to-one, is the only vector for which that is the case. Therefore, .  ( ) Suppose that . Let , and suppose that . To prove is one-to-one, we want to then show that . To argue this, observe that   Thus, . Therefore, since , , so . Therefore, is one-to-one.   "
},
{
  "id": "Section-2-18",
  "level": "2",
  "url": "#Section-2-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "image "
},
{
  "id": "Section-2-20",
  "level": "2",
  "url": "#Section-2-20",
  "type": "Theorem",
  "number": "3.8",
  "title": "",
  "body": "  Let be a linear transformation from a vector space to a vector space . Then is a linear subspace of .    Note that . Thus, the image contains the zero vector.  Let . Then there exist such that and . It follows that   Therefore, is closed under addition.  Let . Then   Therefore, is closed under scalar multiplication and is thus a linear subspace.   "
},
{
  "id": "exercises-2",
  "level": "2",
  "url": "#exercises-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "onto "
},
{
  "id": "exercises-3",
  "level": "2",
  "url": "#exercises-3",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "",
  "body": " Explain why for a linear transformation between vector spaces and , if and only if is onto.  "
},
{
  "id": "exercises-5",
  "level": "2",
  "url": "#exercises-5",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "",
  "body": " Let denote the set of vectors such that . Is a linear subspace? If yes, find a linear transformation for which . Otherwise, prove why not.  "
},
{
  "id": "exercises-6",
  "level": "2",
  "url": "#exercises-6",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "",
  "body": " Let denote the set of vectors such that . Is a linear subspace? If yes, find a linear transformation for which . Otherwise, prove why not.  "
},
{
  "id": "exercises-7",
  "level": "2",
  "url": "#exercises-7",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "",
  "body": " Prove that the set of functions that are their own derivative is a linear subspace.  "
},
{
  "id": "exercises-8",
  "level": "2",
  "url": "#exercises-8",
  "type": "Checkpoint",
  "number": "4.5",
  "title": "",
  "body": " Let and be linear transformations between vector spaces. Show that if and only if is the -function.  "
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
