var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "review",
  "level": "1",
  "url": "#review",
  "type": "Article",
  "number": "",
  "title": "Scaling Things Down and Summing Things Up",
  "body": " Scaling Things Down and Summing Things Up            Exercises   Matrix and Vector Operations Review  Recall the notation that in denotes the vector with in the th coordinate and all 's otherwise. For example, in , Let's practice this:    Using the notation, we have introduced, answer the following:  Write in  Write in  Why can't you write in ?       The standard basis vectors are useful for understanding matrix vector multiplication. Instead of using dot products, for a matrix and a vector we can write For example, This is where the equivalence between matrix equations and linear equations with vector coefficients comes from.  This is especially helpful for multiplying by standard basis vectors. Try this in the following two exercises:    Consider the matrix:   Compute  Compute  From what you found in exercises and , explain what means in words?  How would you describe ?         Consider the matrix   Compute  Compute  Compute  Compute   Compute   For , give a solution to       This last exercise illustrates an important fact. The set of vectors of the form are precisely the linear combinations of the columns of . Thus, has a solution if and only if it may be written as a linear combination of the columns of . In fact, this is what conversion is doing between linear equations with vector coefficients and matrix equations.    Consider the following linear system:   Write the coefficient and augmented matrices of the system.  Rewrite this as a matrix equation.  Rewrite this as a linear equation with vector coefficients.  Without doing any row reduction, explain why you can see that and has to be a solution. Which form makes this clearest to see?      You can use this insight to solve a related problem, which is the kind of question you'd ask in cryptography.    Suppose I give you a secret matrix , and Then what is the matrix ?    In fact, this is why matrices aren't used in that way for cryptographic systems. It's too easy to break the code!    Solving Linear Systems  Linear systems appear everywhere. Stoichiometry in chemistry is a particularly good illustration.   Balancing a chemical equation   In a chemical reaction, atoms are neither created nor destroyed. Thus, for each chemical element, the number of atoms appearing on the left side of the reaction must equal the number appearing on the right side.  Consider the combustion reaction Introduce unknown coefficients:   Counting the atoms of carbon, hydrogen, and oxygen gives the system   Write this system in the matrix form   Use row reduction to find all solutions of the system.  Find a solution in which all four variables are positive integers and have no common factor greater than .  Use your answer to complete the balanced equation          Independence, Span, and Rank  A key application of rank appears in data analysis. Rank is used to try to isolate how much of the data you actually need. Consider the following example regarding movie ratings:   Movie ratings and rank   Five viewers rate four movies:    Movie  Era score  Genre score    Singin' in the Rain      Superman      Wicked      Spider-Man: Across the Spider-Verse      Here and represent old\/new and musical\/comic-book, respectively.  Each viewer has two taste parameters and , and rates a movie by   The viewers' parameters are         Stacy      Tracy      Lacy      Macy      Usher Terry Raymond IV      Then, for example, Usher would rate Singin' in the Rain as .    Compute the matrix of movie ratings.  Row reduce and find its rank.  The movie ratings depend only on two parameters, the era score and genre score. How does that relate to the rank?       In practice, matrices tend to be well approximated by low rank matrices. One often only needs a very coarse idea of the data in order to make conclusions.  Independence is at the exact opposite end of the spectrum.    Using the definition of rank, explain why if the columns of a matrix are independent, the rank of the matrix is the number of columns.     Independence is relevant for engineering problems. There you can imagine you have thrusters on a rocket moving in given directions. For efficiency, you don't want redundant thrusters.  Spanning is also relevant. You want to ensure you can move in any direction with the rocket. Here is a toy example:    You are building a rocket and have been given a design with thrusters that move in the following directions:   Are the columns independent?  Based on your answer to the previous part, do you think any of the rockets are redundant?  Do the vectors span all of ?  Could the rocket move in an arbitrary direction by scaling the output of the thrusters?        Inner and Outer Representation  Here is a jeopardy style problem. I'll give you the solution and you give what you think the question is trying to answer:    Explain what the following schematic diagram is describing how to do:       We have worked through transitioning between inner and outer representations. I find working through the following example helpful.    Take the system   Solve this system and write the solution in the form .  Create the system Solve it.  Compare your answer in part (b) to the matrix we started with. What makes you expect your answer?         "
},
{
  "id": "exercises-2-3",
  "level": "2",
  "url": "#exercises-2-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Using the notation, we have introduced, answer the following:  Write in  Write in  Why can't you write in ?      "
},
{
  "id": "exercises-2-6",
  "level": "2",
  "url": "#exercises-2-6",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Consider the matrix:   Compute  Compute  From what you found in exercises and , explain what means in words?  How would you describe ?      "
},
{
  "id": "exercises-2-7",
  "level": "2",
  "url": "#exercises-2-7",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Consider the matrix   Compute  Compute  Compute  Compute   Compute   For , give a solution to      "
},
{
  "id": "exercises-2-9",
  "level": "2",
  "url": "#exercises-2-9",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Consider the following linear system:   Write the coefficient and augmented matrices of the system.  Rewrite this as a matrix equation.  Rewrite this as a linear equation with vector coefficients.  Without doing any row reduction, explain why you can see that and has to be a solution. Which form makes this clearest to see?     "
},
{
  "id": "exercises-2-11",
  "level": "2",
  "url": "#exercises-2-11",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Suppose I give you a secret matrix , and Then what is the matrix ?   "
},
{
  "id": "exercises-3-3",
  "level": "2",
  "url": "#exercises-3-3",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "Balancing a chemical equation.",
  "body": " Balancing a chemical equation   In a chemical reaction, atoms are neither created nor destroyed. Thus, for each chemical element, the number of atoms appearing on the left side of the reaction must equal the number appearing on the right side.  Consider the combustion reaction Introduce unknown coefficients:   Counting the atoms of carbon, hydrogen, and oxygen gives the system   Write this system in the matrix form   Use row reduction to find all solutions of the system.  Find a solution in which all four variables are positive integers and have no common factor greater than .  Use your answer to complete the balanced equation       "
},
{
  "id": "exercises-4-3",
  "level": "2",
  "url": "#exercises-4-3",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "Movie ratings and rank.",
  "body": " Movie ratings and rank   Five viewers rate four movies:    Movie  Era score  Genre score    Singin' in the Rain      Superman      Wicked      Spider-Man: Across the Spider-Verse      Here and represent old\/new and musical\/comic-book, respectively.  Each viewer has two taste parameters and , and rates a movie by   The viewers' parameters are         Stacy      Tracy      Lacy      Macy      Usher Terry Raymond IV      Then, for example, Usher would rate Singin' in the Rain as .    Compute the matrix of movie ratings.  Row reduce and find its rank.  The movie ratings depend only on two parameters, the era score and genre score. How does that relate to the rank?      "
},
{
  "id": "exercises-4-6",
  "level": "2",
  "url": "#exercises-4-6",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Using the definition of rank, explain why if the columns of a matrix are independent, the rank of the matrix is the number of columns.    "
},
{
  "id": "exercises-4-9",
  "level": "2",
  "url": "#exercises-4-9",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  You are building a rocket and have been given a design with thrusters that move in the following directions:   Are the columns independent?  Based on your answer to the previous part, do you think any of the rockets are redundant?  Do the vectors span all of ?  Could the rocket move in an arbitrary direction by scaling the output of the thrusters?     "
},
{
  "id": "exercises-5-3",
  "level": "2",
  "url": "#exercises-5-3",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Explain what the following schematic diagram is describing how to do:      "
},
{
  "id": "exercises-5-5",
  "level": "2",
  "url": "#exercises-5-5",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Take the system   Solve this system and write the solution in the form .  Create the system Solve it.  Compare your answer in part (b) to the matrix we started with. What makes you expect your answer?      "
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
