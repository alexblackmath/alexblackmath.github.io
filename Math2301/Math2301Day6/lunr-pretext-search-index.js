var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "matroid",
  "level": "1",
  "url": "#matroid",
  "type": "Article",
  "number": "",
  "title": "Rank and File",
  "body": " Rank and File        Review   What is the dimension of a vector space?  What is a linear transformation?  What is the kernel of a linear transformation?     Subspaces and Dimension  Let be a linear transformation. Then the image is the range of . That is, .   Show that is a linear subspace.    Step . I claim it contains . Argue this. What does a linear transformation always send to ?   Step . I claim it is closed under addition. Let . Then and . What do you apply to in order to get ?   Step . I claim it is closed under scalar multiplication. Let . Again . What do I apply to in order to get ?    Images and kernels of linear transformations from finite dimensional vector spaces are always finite dimensional.    Let be a finite dimensional vector space, let be a linear transformation, and let be a linear subspace of .    Then is finite dimensional with dimension at most dimension of .    Then is finite dimensional with dimension at most dimension of .    Then is finite dimensional.     For (a), note that a basis of must also be linearly independent in . Why does that mean it must have size at most the size of a basis of ?   For (b), explain how this follows from part (a).   For (c), take a basis of . Show that spans .      Rank-Nullity Theorem  We define to be the dimension of . We define to be the dimension of the , also called the null space of .    For any linear transformation , where is finite dimensional, .    Note that, by the exercise we did earlier, both and are finite dimensional. Take a basis for and a basis for . Then, by definition of the image, there exists such that for all .  I claim that is a basis for . Explain why : If we can show this, then we have proved the theorem.   Let's do spanning first. Let . We want to show that   Then . Since is a basis for ,   for some .  Explain then why    Thus,   Explain then why    Thus,   Conclude that    Next we need to show independence. Suppose that   We want to show that the and are all then equal to . The key idea is to rewrite it like this:   Explain why : .   Thus,   Explain why this means that .   Thus,   Explain why this means that . Therefore, they are linearly independent.        Exercises  Consider a linear transformation . We can define , where is the standard basis of . Then the matrix of is    Let be a linear transformation, and let be its matrix. Show that          What this illustrates is that a linear transformation is determined entirely by its behavior on a basis. In general, we have:   Let be linear transformations. Let be a basis for . Suppose that for all . Then .         There is a reverse direction to this. You can define an arbitrary function . Then there is always a unique linear transformation that agrees with that function.    Let and be vector spaces, and let be a basis. Let . Then define by   whenever for .    Prove that for any , .    Prove that is well-defined. That is each input has a unique output.    Prove that respects scalar multiplication.    Prove that respects addition.             "
},
{
  "id": "exercise-image-subspace",
  "level": "2",
  "url": "#exercise-image-subspace",
  "type": "Checkpoint",
  "number": "2.1",
  "title": "",
  "body": " Show that is a linear subspace.  "
},
{
  "id": "Section-1-4",
  "level": "2",
  "url": "#Section-1-4",
  "type": "Proof",
  "number": "2.1",
  "title": "",
  "body": " Step . I claim it contains . Argue this. What does a linear transformation always send to ?   Step . I claim it is closed under addition. Let . Then and . What do you apply to in order to get ?   Step . I claim it is closed under scalar multiplication. Let . Again . What do I apply to in order to get ?   "
},
{
  "id": "exercise-subspaces-finite-dimensional",
  "level": "2",
  "url": "#exercise-subspaces-finite-dimensional",
  "type": "Checkpoint",
  "number": "2.2",
  "title": "",
  "body": "  Let be a finite dimensional vector space, let be a linear transformation, and let be a linear subspace of .    Then is finite dimensional with dimension at most dimension of .    Then is finite dimensional with dimension at most dimension of .    Then is finite dimensional.   "
},
{
  "id": "Section-1-7",
  "level": "2",
  "url": "#Section-1-7",
  "type": "Proof",
  "number": "2.2",
  "title": "",
  "body": " For (a), note that a basis of must also be linearly independent in . Why does that mean it must have size at most the size of a basis of ?   For (b), explain how this follows from part (a).   For (c), take a basis of . Show that spans .   "
},
{
  "id": "theorem-rank-nullity",
  "level": "2",
  "url": "#theorem-rank-nullity",
  "type": "Theorem",
  "number": "3.1",
  "title": "",
  "body": "  For any linear transformation , where is finite dimensional, .    Note that, by the exercise we did earlier, both and are finite dimensional. Take a basis for and a basis for . Then, by definition of the image, there exists such that for all .  I claim that is a basis for . Explain why : If we can show this, then we have proved the theorem.   Let's do spanning first. Let . We want to show that   Then . Since is a basis for ,   for some .  Explain then why    Thus,   Explain then why    Thus,   Conclude that    Next we need to show independence. Suppose that   We want to show that the and are all then equal to . The key idea is to rewrite it like this:   Explain why : .   Thus,   Explain why this means that .   Thus,   Explain why this means that . Therefore, they are linearly independent.    "
},
{
  "id": "exercise-matrix-action",
  "level": "2",
  "url": "#exercise-matrix-action",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "",
  "body": " Let be a linear transformation, and let be its matrix. Show that   "
},
{
  "id": "exercises-5",
  "level": "2",
  "url": "#exercises-5",
  "type": "Proof",
  "number": "4.1",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-equal-on-basis",
  "level": "2",
  "url": "#exercise-equal-on-basis",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "",
  "body": " Let be linear transformations. Let be a basis for . Suppose that for all . Then .  "
},
{
  "id": "exercises-8",
  "level": "2",
  "url": "#exercises-8",
  "type": "Proof",
  "number": "4.2",
  "title": "",
  "body": "     "
},
{
  "id": "exercise-linear-extension",
  "level": "2",
  "url": "#exercise-linear-extension",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "",
  "body": "  Let and be vector spaces, and let be a basis. Let . Then define by   whenever for .    Prove that for any , .    Prove that is well-defined. That is each input has a unique output.    Prove that respects scalar multiplication.    Prove that respects addition.   "
},
{
  "id": "exercises-11",
  "level": "2",
  "url": "#exercises-11",
  "type": "Proof",
  "number": "4.3",
  "title": "",
  "body": "      "
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
