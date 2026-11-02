var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "McNuggs",
  "level": "1",
  "url": "#McNuggs",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Day 17",
  "body": " Math 2000 Day 17       Nugget Theory    Review  What are the three things you need to check in order to see if a subset of a vector space is a subspace?     Exercises    Reexplain the four subspaces in your own words.      Explain why the vector cannot be obtained from any linear combination of the vectors , , and .      Is the collection of vectors in such that and a subspace of ?      Which of the following are linear subspaces of the vector space of matrices:  Invertible matrices  Noninvertible matrices  Upper triangular matrices  Permutation matrices  Diagonal matrices  Matrices with determinant  Orthogonal matrices (i.e., such that )        Consider the linear system: Use the Fredholm alternative to explain why it has no solution.      Consider the following linear system      Without row reducing, explain why this system has a solution and give an example solution.      Does this system have a solution in which each for each ?        Span  I would like to motivate span and why we care about it. For me, I often deal with problems where I care about the span, but the coefficients allowed are more restricted than to real numbers. I usually don't allow negatives and often restrict to whole numbers. Let's start with an illustrative example.     The Denver Nuggets  I love nuggets of all kinds, Denver, gold and chicken in that order especially. Suppose you are in desperate need of chicken nuggets, but you need a very particular number of nuggets. If you buy a bag of Dino nuggets, you can make them however you want. They're good. Very good even. But you know sometimes you want to make a day of it, so you seek out a professional fresh nugget manufacturer. But the question is: Can you still get your perfect preference of the exact number of nuggets to eat in one sitting? They are not good leftover, so it's important to be able to exactly match your appetite to avoid food waste.  This leads to the chicken nugget problem. Let's start with McDonald's.    McDonald's offers the following McNuggets sizes:  4 mcnuggs  6 mcnuggs  10 mcnuggs  20 mcnuggs  40 mcnuggs    I'm interested in the following questions:     Can you get 47 mcnuggs from a single order?      What about , or mcnuggs?      Characterize the different sizes of mcnuggs you can get.     Let's compare this to Chick-fil-A, which has a much superior product objectively.    Chick-fil-A offers the following nuggs sizes:  5 nuggs  8 nuggs  12 nuggs  30 nuggs    They also offer both grilled and fried nuggs. I typically go for the grilled. There's a location in South Portland. Let's ask the same questions:     Can you get 47 nuggs from a single order?      What about , or nuggs?      Characterize the different sizes of nuggs you can get.        Subset-Sum  The chicken nugget problem seems silly, but similar questions appear in computer science as fundamental subroutines in more complicated computational problems. For example, they have a limited stock of nuggets and they may already be prepackaged.    Say you're at Chick-fil-A and they have  6 packs of 5 nuggs left  1 pack of 8 nuggs left  2 packs of 12 nuggs left  1 pack of 30 nuggs left       Can I get 42 nuggs?      Can I get 50 nuggs?      Can I get nuggs?     These are examples of the subset sum problem in theoretical computer science. Namely, you want an algorithm to solve the following problem: Given a list of numbers and a number , can I find a subset that sums to exactly ?  This is really a linear algebra question. Equivalently, can you find all either or such that This is a single linear equation! If could have entries given by any real number, we know how to solve this. In general, this problem is actually provably hard. If you could prove you can solve it efficiently, you would literally get a million dollars. That's how much of a difference restricting coefficients makes. Amazingly though you can use linear algebra as a tool to help solve this in practice.     Independence  What you can observe is that sometimes some of the options are redundant:    Which sizes of mcnuggs are not needed to be able to generate new possibilities? What about for Chick-fil-A?    You can ask the same question for vectors in any vector space. Given a set of vectors, , are there any that we can throw out without changing the span? If there are none, we call the vectors linearly independent . This happens precisely when I can't get any of the vectors of the list by combining other vectors.     Exercises Again    Suppose you work at a competing McDonald's across the street from another McDonald's. Oh no, you're out of nuggets and now you need precisely nuggets for the rest of the day. Now you can both buy and sell nuggets at the McDonald's sizes. Can you get the exact amount of nuggets you need? How would that change what possible mcnugg numbers you can get?      You're Nicolas Cage. You heard a rumor the Declaration of Independence is in the Bowdoin College Museum of Art. You yearn to heist, but the movie industry has weighed you down. All those years. You can only take at most 20 lbs of goods with you. Here are the items and their value:        Item  Value  Weight  Number available    Declaration of Independence  million  lbs     Landscape paintings  each  lbs each     Busts  each  lbs each     Answer the following questions:     What should you steal to maximize your profit?      How much do you profit from the theft?        "
},
{
  "id": "ex-four-subspaces",
  "level": "2",
  "url": "#ex-four-subspaces",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Reexplain the four subspaces in your own words.   "
},
{
  "id": "ex-not-in-span",
  "level": "2",
  "url": "#ex-not-in-span",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Explain why the vector cannot be obtained from any linear combination of the vectors , , and .   "
},
{
  "id": "ex-quadrant",
  "level": "2",
  "url": "#ex-quadrant",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Is the collection of vectors in such that and a subspace of ?   "
},
{
  "id": "ex-matrix-subspaces",
  "level": "2",
  "url": "#ex-matrix-subspaces",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Which of the following are linear subspaces of the vector space of matrices:  Invertible matrices  Noninvertible matrices  Upper triangular matrices  Permutation matrices  Diagonal matrices  Matrices with determinant  Orthogonal matrices (i.e., such that )     "
},
{
  "id": "ex-fredholm",
  "level": "2",
  "url": "#ex-fredholm",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Consider the linear system: Use the Fredholm alternative to explain why it has no solution.   "
},
{
  "id": "ex-nonnegative-solution",
  "level": "2",
  "url": "#ex-nonnegative-solution",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Consider the following linear system      Without row reducing, explain why this system has a solution and give an example solution.      Does this system have a solution in which each for each ?    "
},
{
  "id": "ex-mcdonalds",
  "level": "2",
  "url": "#ex-mcdonalds",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  McDonald's offers the following McNuggets sizes:  4 mcnuggs  6 mcnuggs  10 mcnuggs  20 mcnuggs  40 mcnuggs    I'm interested in the following questions:     Can you get 47 mcnuggs from a single order?      What about , or mcnuggs?      Characterize the different sizes of mcnuggs you can get.    "
},
{
  "id": "ex-chick-fil-a",
  "level": "2",
  "url": "#ex-chick-fil-a",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Chick-fil-A offers the following nuggs sizes:  5 nuggs  8 nuggs  12 nuggs  30 nuggs    They also offer both grilled and fried nuggs. I typically go for the grilled. There's a location in South Portland. Let's ask the same questions:     Can you get 47 nuggs from a single order?      What about , or nuggs?      Characterize the different sizes of nuggs you can get.    "
},
{
  "id": "ex-limited-stock",
  "level": "2",
  "url": "#ex-limited-stock",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Say you're at Chick-fil-A and they have  6 packs of 5 nuggs left  1 pack of 8 nuggs left  2 packs of 12 nuggs left  1 pack of 30 nuggs left       Can I get 42 nuggs?      Can I get 50 nuggs?      Can I get nuggs?    "
},
{
  "id": "sec-subset-sum-4",
  "level": "2",
  "url": "#sec-subset-sum-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subset sum "
},
{
  "id": "ex-redundant-sizes",
  "level": "2",
  "url": "#ex-redundant-sizes",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  Which sizes of mcnuggs are not needed to be able to generate new possibilities? What about for Chick-fil-A?   "
},
{
  "id": "sec-independence-4",
  "level": "2",
  "url": "#sec-independence-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly independent "
},
{
  "id": "ex-buy-and-sell",
  "level": "2",
  "url": "#ex-buy-and-sell",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Suppose you work at a competing McDonald's across the street from another McDonald's. Oh no, you're out of nuggets and now you need precisely nuggets for the rest of the day. Now you can both buy and sell nuggets at the McDonald's sizes. Can you get the exact amount of nuggets you need? How would that change what possible mcnugg numbers you can get?   "
},
{
  "id": "ex-heist",
  "level": "2",
  "url": "#ex-heist",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": "  You're Nicolas Cage. You heard a rumor the Declaration of Independence is in the Bowdoin College Museum of Art. You yearn to heist, but the movie industry has weighed you down. All those years. You can only take at most 20 lbs of goods with you. Here are the items and their value:        Item  Value  Weight  Number available    Declaration of Independence  million  lbs     Landscape paintings  each  lbs each     Busts  each  lbs each     Answer the following questions:     What should you steal to maximize your profit?      How much do you profit from the theft?    "
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
