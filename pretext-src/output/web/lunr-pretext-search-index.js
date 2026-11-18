var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Lukewarm",
  "level": "1",
  "url": "#Lukewarm",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Day 21",
  "body": " Math 2301 Day 21       Reasonably Warm  I made the following game on this site to help answer the following questions:    How do you change what direction you are facing without moving? What matrix do you use and why?      How do you move your ship without rotating? What matrix do you multiply by and why?      After you move, you update the coordinates so that the center is at . You can interpret this as rewriting everything in a new basis. How do you find the coordinates in the new basis?      Explain why for with , the function is not a linear transformation.    To deal with this, we introduce homogeneous coordinates , where we just add a to the end of a vector. This opens us up to more possible transformations.    Let . Find a linear transformation such that for all .    For example, in , the linear transformation is given by     Find the inverse of . Give an intuitive geometric explanation for why your choice of inverse makes sense.    Homogeneous coordinates preserve all the linear transformations we know and love.    Let be an matrix. Show that     We call the matrix for acting in homogeneous coordinates the homogenization of .    Recall that rotation counterclockwise by degrees is given by     Find an expression for a rotation matrix in homogeneous coordinates.    Show that its columns form an orthonormal basis.    Find a matrix with columns that form an orthonormal basis that is not a rotation matrix.      Let be an matrix with an eigenvector with eigenvalue . Let be its homogenization. Let be the matrix for translating by . Show that      "
},
{
  "id": "ex-rotate",
  "level": "2",
  "url": "#ex-rotate",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  How do you change what direction you are facing without moving? What matrix do you use and why?   "
},
{
  "id": "ex-translate",
  "level": "2",
  "url": "#ex-translate",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  How do you move your ship without rotating? What matrix do you multiply by and why?   "
},
{
  "id": "ex-new-basis",
  "level": "2",
  "url": "#ex-new-basis",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  After you move, you update the coordinates so that the center is at . You can interpret this as rewriting everything in a new basis. How do you find the coordinates in the new basis?   "
},
{
  "id": "ex-translation-not-linear",
  "level": "2",
  "url": "#ex-translation-not-linear",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Explain why for with , the function is not a linear transformation.   "
},
{
  "id": "math2301-day21-7",
  "level": "2",
  "url": "#math2301-day21-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous coordinates "
},
{
  "id": "ex-translation-homogeneous",
  "level": "2",
  "url": "#ex-translation-homogeneous",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Let . Find a linear transformation such that for all .   "
},
{
  "id": "ex-translation-inverse",
  "level": "2",
  "url": "#ex-translation-inverse",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Find the inverse of . Give an intuitive geometric explanation for why your choice of inverse makes sense.   "
},
{
  "id": "ex-homogenization",
  "level": "2",
  "url": "#ex-homogenization",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Let be an matrix. Show that    "
},
{
  "id": "math2301-day21-13",
  "level": "2",
  "url": "#math2301-day21-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogenization "
},
{
  "id": "ex-rotation-homogeneous",
  "level": "2",
  "url": "#ex-rotation-homogeneous",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Recall that rotation counterclockwise by degrees is given by     Find an expression for a rotation matrix in homogeneous coordinates.    Show that its columns form an orthonormal basis.    Find a matrix with columns that form an orthonormal basis that is not a rotation matrix.   "
},
{
  "id": "ex-commuting-translation",
  "level": "2",
  "url": "#ex-commuting-translation",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Let be an matrix with an eigenvector with eigenvalue . Let be its homogenization. Let be the matrix for translating by . Show that    "
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
