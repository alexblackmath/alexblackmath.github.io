var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Reality",
  "level": "1",
  "url": "#Reality",
  "type": "Article",
  "number": "",
  "title": "Rank and File",
  "body": " Rank and File        Review   What is the dimension of a vector space?  What is a linear transformation?  What is the kernel of a linear transformation?     Subspaces and Dimension  Let be a linear transformation. Then the image is the range of . That is, .    Show that is a linear subspace.    Note that , so . Let . Then, by definition, there exist such that and . Then   Similarly, let . Then   Hence, is closed under scaling.    Images and kernels of linear transformations from finite dimensional vector spaces are always finite dimensional.    Let be a finite dimensional vector space, let be a linear transformation, and let be a linear subspace of .  (a) Then is finite dimensional with dimension at most dimension of .  (b) Then is finite dimensional with dimension at most dimension of .  (c) Then is finite dimensional.    For (a), note that a basis of must also be linearly independent in . Why does that mean it must have size at most the size of a basis of ?  There were some assumptions I made here that I realized actually were not as clear as I had hoped. Let be a basis of . Then, if is a basis of , they must have the same size and then we are done. Suppose otherwise then. Since is linearly independent in , it is linearly independent in . Fix a basis of . Since does not span  . Therefore, there exists such that , so is still independent. If is not a basis, we can apply the same argument iteratively, and show that is a basis for some choice of subset . To make this formal, there exists a subset of maximal size such that is independent. Suppose for the sake of contradiction that does not span , there must be some . Then is bigger than with the same property, contradicting the maximality of . Thus, must be spanning and independent and therefore a basis of . Hence, is contained in a basis of and is therefore smaller.  For (b), explain how this follows from part (a).  Note that is a subspace of , so it follows by (a).  For (c), take a basis of . Show that spans .  Let . Then for some . Therefore, since are a basis,   Then   Therefore,   Since and it is a subspace by the previous exercise,   Therefore,   It follows that span , which means they contain a basis and thus a basis has size at most as desired.      Rank-Nullity Theorem  We define to be the dimension of . We define to be the dimension of the , also called the null space of .    For any linear transformation , where is finite dimensional, .    Note that, by the previous lemma, both and are finite dimensional. Take a basis for and a basis for . Then, by definition of the image, there exists such that for all .  I claim that is a basis for .  Note that, by construction, is dimension of the kernel which is equal to the nullity by definition. Similarly, is the dimension of the image, which is equal to the rank by definition. If this is a basis, then has a basis of size , which is exactly the rank plus nullity meaning that .  Thus, in what remains, all we need to do is prove this is a basis.  Let's do spanning first. Let . We want to show that   Then . Since is a basis for ,   for some .  Note that   It follows that   Thus, by definition,   Then, since are a basis for the kernel,   It follows that there exist such that   By isolating , we find   Hence, it is spanning.  Next we need to show independence. Suppose that   We want to show that the and are all then equal to . The key idea is to rewrite it like this:   Since and is a subspace,   Thus,   Then, since are a basis, they are in particular independent meaning that all of the must be equal to .  Thus,   Since are a basis for they are independent meaning that all must also equal . Hence, by definition are linearly independent. They are also spanning and thus a basis, which completes the proof.       Exercises  Given a linear transformation . We can define , where is the standard basis of . Then the matrix of is     Let be a linear transformation, and let be its matrix. Show that      What this illustrates is that a linear transformation is determined entirely by its behavior on a basis. In general, we have:    Let be linear transformations. Let be a basis for . Suppose that for all . Then .     There is a reverse direction to this. You can define an arbitrary function . Then there is always a unique linear transformation that agrees with that function.    Let and be vector spaces, and let be a basis. Let . Then define by   whenever for .  (a) Prove that for any , .  (b) Prove that is well-defined. That is each input has a unique output.  (c) Prove that respects scalar multiplication.  (d) Prove that respects addition.      "
},
{
  "id": "exercise-image-subspace",
  "level": "2",
  "url": "#exercise-image-subspace",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "",
  "body": "  Show that is a linear subspace.    Note that , so . Let . Then, by definition, there exist such that and . Then   Similarly, let . Then   Hence, is closed under scaling.   "
},
{
  "id": "exercise-subspaces-finite-dimensional",
  "level": "2",
  "url": "#exercise-subspaces-finite-dimensional",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "",
  "body": "  Let be a finite dimensional vector space, let be a linear transformation, and let be a linear subspace of .  (a) Then is finite dimensional with dimension at most dimension of .  (b) Then is finite dimensional with dimension at most dimension of .  (c) Then is finite dimensional.    For (a), note that a basis of must also be linearly independent in . Why does that mean it must have size at most the size of a basis of ?  There were some assumptions I made here that I realized actually were not as clear as I had hoped. Let be a basis of . Then, if is a basis of , they must have the same size and then we are done. Suppose otherwise then. Since is linearly independent in , it is linearly independent in . Fix a basis of . Since does not span  . Therefore, there exists such that , so is still independent. If is not a basis, we can apply the same argument iteratively, and show that is a basis for some choice of subset . To make this formal, there exists a subset of maximal size such that is independent. Suppose for the sake of contradiction that does not span , there must be some . Then is bigger than with the same property, contradicting the maximality of . Thus, must be spanning and independent and therefore a basis of . Hence, is contained in a basis of and is therefore smaller.  For (b), explain how this follows from part (a).  Note that is a subspace of , so it follows by (a).  For (c), take a basis of . Show that spans .  Let . Then for some . Therefore, since are a basis,   Then   Therefore,   Since and it is a subspace by the previous exercise,   Therefore,   It follows that span , which means they contain a basis and thus a basis has size at most as desired.   "
},
{
  "id": "theorem-rank-nullity",
  "level": "2",
  "url": "#theorem-rank-nullity",
  "type": "Theorem",
  "number": "3.1",
  "title": "",
  "body": "  For any linear transformation , where is finite dimensional, .    Note that, by the previous lemma, both and are finite dimensional. Take a basis for and a basis for . Then, by definition of the image, there exists such that for all .  I claim that is a basis for .  Note that, by construction, is dimension of the kernel which is equal to the nullity by definition. Similarly, is the dimension of the image, which is equal to the rank by definition. If this is a basis, then has a basis of size , which is exactly the rank plus nullity meaning that .  Thus, in what remains, all we need to do is prove this is a basis.  Let's do spanning first. Let . We want to show that   Then . Since is a basis for ,   for some .  Note that   It follows that   Thus, by definition,   Then, since are a basis for the kernel,   It follows that there exist such that   By isolating , we find   Hence, it is spanning.  Next we need to show independence. Suppose that   We want to show that the and are all then equal to . The key idea is to rewrite it like this:   Since and is a subspace,   Thus,   Then, since are a basis, they are in particular independent meaning that all of the must be equal to .  Thus,   Since are a basis for they are independent meaning that all must also equal . Hence, by definition are linearly independent. They are also spanning and thus a basis, which completes the proof.   "
},
{
  "id": "exercise-matrix-action",
  "level": "2",
  "url": "#exercise-matrix-action",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "",
  "body": "  Let be a linear transformation, and let be its matrix. Show that     "
},
{
  "id": "exercise-equal-on-basis",
  "level": "2",
  "url": "#exercise-equal-on-basis",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "",
  "body": "  Let be linear transformations. Let be a basis for . Suppose that for all . Then .    "
},
{
  "id": "exercise-linear-extension",
  "level": "2",
  "url": "#exercise-linear-extension",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "",
  "body": "  Let and be vector spaces, and let be a basis. Let . Then define by   whenever for .  (a) Prove that for any , .  (b) Prove that is well-defined. That is each input has a unique output.  (c) Prove that respects scalar multiplication.  (d) Prove that respects addition.    "
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
