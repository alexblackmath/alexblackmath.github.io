var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "NationalTreasure",
  "level": "1",
  "url": "#NationalTreasure",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Homework 6",
  "body": " Math 2000 Homework 6       National Treasure   Span    You're Nicolas Cage. You heard a rumor the Declaration of Independence is in the Bowdoin College Museum of Art. You yearn to heist, but the movie industry has weighed you down. All those years. You can only take at most lbs of goods with you. Here are the items and their value:        Item  Value (each)  Weight (each)  Number available    Declaration of Independence  $1.6 million  lbs     Landscape paintings  $50  lbs     Busts  $300  lbs     Answer the following questions:     What should you steal to maximize your profit?      How much do you profit from the theft?     We call a set of vectors in  spanning if every vector in is in their span.    Use the Fredholm alternative to argue that the set of columns of a signed incidence matrix of a network is never spanning.    One can detect if a matrix is spanning from its reduced row echelon form. This happens exactly when there are number of rows many pivot columns.    Characterize when the set of columns of an unsigned incidence matrix of a network is spanning in terms of the network.      Independence    Consider the following matrix: Its reduced row echelon form is      Write the third column of as a linear combination of the first two.      Write the fourth column of as a linear combination of the first two.      Explain how you could solve (a) and (b) using .      Find a linearly independent subset of the columns of with the same span.       Use the following      to argue that and are linearly independent in the vector space of functions.      Consider a vector space and a subspace of . Let and be linearly independent vectors in . Let be a vector not in . Explain why , , and are therefore linearly independent.      "
},
{
  "id": "ex-heist",
  "level": "2",
  "url": "#ex-heist",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  You're Nicolas Cage. You heard a rumor the Declaration of Independence is in the Bowdoin College Museum of Art. You yearn to heist, but the movie industry has weighed you down. All those years. You can only take at most lbs of goods with you. Here are the items and their value:        Item  Value (each)  Weight (each)  Number available    Declaration of Independence  $1.6 million  lbs     Landscape paintings  $50  lbs     Busts  $300  lbs     Answer the following questions:     What should you steal to maximize your profit?      How much do you profit from the theft?    "
},
{
  "id": "sec-span-3",
  "level": "2",
  "url": "#sec-span-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spanning "
},
{
  "id": "ex-signed-incidence",
  "level": "2",
  "url": "#ex-signed-incidence",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Use the Fredholm alternative to argue that the set of columns of a signed incidence matrix of a network is never spanning.   "
},
{
  "id": "ex-unsigned-incidence",
  "level": "2",
  "url": "#ex-unsigned-incidence",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Characterize when the set of columns of an unsigned incidence matrix of a network is spanning in terms of the network.   "
},
{
  "id": "ex-rref-columns",
  "level": "2",
  "url": "#ex-rref-columns",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Consider the following matrix: Its reduced row echelon form is      Write the third column of as a linear combination of the first two.      Write the fourth column of as a linear combination of the first two.      Explain how you could solve (a) and (b) using .      Find a linearly independent subset of the columns of with the same span.    "
},
{
  "id": "ex-sin-cos",
  "level": "2",
  "url": "#ex-sin-cos",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Use the following      to argue that and are linearly independent in the vector space of functions.   "
},
{
  "id": "ex-extend-independent",
  "level": "2",
  "url": "#ex-extend-independent",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Consider a vector space and a subspace of . Let and be linearly independent vectors in . Let be a vector not in . Explain why , , and are therefore linearly independent.   "
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
