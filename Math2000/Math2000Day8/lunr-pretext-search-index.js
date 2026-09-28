var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "MichaelBay",
  "level": "1",
  "url": "#MichaelBay",
  "type": "Article",
  "number": "",
  "title": "Linear Transformers: Matrices in Disguise",
  "body": " Linear Transformers: Matrices in Disguise        Review  Play the following game: Linear Transformations Game .     Transforming  The core question of the day is: Which functions may be written as for some matrix ?  What properties does this function have?  It is additive :   It respects scaling :     We call a function a linear transformation if is additive and respects scaling.      A function is a linear transformation if and only if for some matrix .    Let's start in one dimension. Then . A matrix in this setting corresponds to just multiplying by a number, so we want to show that for some .  Define . Then for all ,   For higher dimensions, a similar argument works. Let . We would want to write this as   Define and . Then   It turns out this same argument works in general. We will just use some notation to make it work. Let be the vector in the th coordinate and zeroes otherwise.  Define , and suppose that is a linear transformation. Then        Exercises   Let be a linear transformation such that , , and . Write in matrix form as .    Write the linear transformation defined by as a matrix.    Explain why defined by is a linear transformation. What is the matrix representation?    Explain why is not a linear transformation.    Is a linear transformation? If so, describe the matrix. If not, explain why not.    Is a linear transformation? If so, describe the matrix. If not, explain why not.    "
},
{
  "id": "Section-1-4",
  "level": "2",
  "url": "#Section-1-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "additive "
},
{
  "id": "Section-1-6",
  "level": "2",
  "url": "#Section-1-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scaling "
},
{
  "id": "Section-1-8",
  "level": "2",
  "url": "#Section-1-8",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  We call a function a linear transformation if is additive and respects scaling.   "
},
{
  "id": "Section-1-9",
  "level": "2",
  "url": "#Section-1-9",
  "type": "Theorem",
  "number": "2.2",
  "title": "",
  "body": "  A function is a linear transformation if and only if for some matrix .   "
},
{
  "id": "exercises-2",
  "level": "2",
  "url": "#exercises-2",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "",
  "body": " Let be a linear transformation such that , , and . Write in matrix form as .  "
},
{
  "id": "exercises-3",
  "level": "2",
  "url": "#exercises-3",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "",
  "body": " Write the linear transformation defined by as a matrix.  "
},
{
  "id": "exercises-4",
  "level": "2",
  "url": "#exercises-4",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "",
  "body": " Explain why defined by is a linear transformation. What is the matrix representation?  "
},
{
  "id": "exercises-5",
  "level": "2",
  "url": "#exercises-5",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "",
  "body": " Explain why is not a linear transformation.  "
},
{
  "id": "exercises-6",
  "level": "2",
  "url": "#exercises-6",
  "type": "Checkpoint",
  "number": "3.5",
  "title": "",
  "body": " Is a linear transformation? If so, describe the matrix. If not, explain why not.  "
},
{
  "id": "exercises-7",
  "level": "2",
  "url": "#exercises-7",
  "type": "Checkpoint",
  "number": "3.6",
  "title": "",
  "body": " Is a linear transformation? If so, describe the matrix. If not, explain why not.  "
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
