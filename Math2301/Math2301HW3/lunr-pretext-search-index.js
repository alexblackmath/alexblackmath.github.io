var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Animorphs",
  "level": "1",
  "url": "#Animorphs",
  "type": "Article",
  "number": "",
  "title": "Animorphs",
  "body": " Animorphs             Isomorphism  This is an important fact that we have used implicitly in class that I want you to work through explicitly as an exercise:    Let be a linearly independent subset of a vector space. Then is a basis for .         Let be a linear transformation. Let be a basis for . Suppose that . Show that is a basis for .       We call a linear transformation an isomorphism if it is also a bijection. That is, if it is both one-to-one and onto.    Let and be finite dimensional vector spaces of the same dimension. Then let . Show that if , then is a linear isomorphism.         Unexpected Values     What is the expected number of rolls of a six-sided die until you roll your first ?        Expected profit from repeated investor pitches   An entrepreneur repeatedly pitches a business idea to potential investors. Each pitch is successful with probability independently of all previous pitches. The entrepreneur stops pitching as soon as the first successful pitch occurs. Each pitch costs $200 to prepare and deliver. If a pitch is successful, the entrepreneur receives $8,000 in funding. Let be the random variable denoting the total number of pitches made, including the successful pitch.     Find .      Let be the random variable denoting the entrepreneur's net profit after the first successful pitch. Express in terms of .      Compute .      Suppose instead that each pitch costs $1,000. Compute the entrepreneur's expected net profit.      More generally, suppose each pitch costs $ . Find the value of for which the entrepreneur's expected net profit is exactly zero.          Subdivide a circle of radius centered at into cells. Suppose that the expected length of the intersection of any line through with any given cell is at least . Show that the expected total number of cells intersected by a ray emanating from is at most .         "
},
{
  "id": "exercises-1-3",
  "level": "2",
  "url": "#exercises-1-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let be a linearly independent subset of a vector space. Then is a basis for .   "
},
{
  "id": "exercises-1-4",
  "level": "2",
  "url": "#exercises-1-4",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-1-5",
  "level": "2",
  "url": "#exercises-1-5",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Let be a linear transformation. Let be a basis for . Suppose that . Show that is a basis for .   "
},
{
  "id": "exercises-1-6",
  "level": "2",
  "url": "#exercises-1-6",
  "type": "Proof",
  "number": "1.1.2",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-1-7",
  "level": "2",
  "url": "#exercises-1-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isomorphism "
},
{
  "id": "exercises-1-8",
  "level": "2",
  "url": "#exercises-1-8",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Let and be finite dimensional vector spaces of the same dimension. Then let . Show that if , then is a linear isomorphism.   "
},
{
  "id": "exercises-1-9",
  "level": "2",
  "url": "#exercises-1-9",
  "type": "Proof",
  "number": "1.1.3",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-2-2",
  "level": "2",
  "url": "#exercises-2-2",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  What is the expected number of rolls of a six-sided die until you roll your first ?   "
},
{
  "id": "exercises-2-3",
  "level": "2",
  "url": "#exercises-2-3",
  "type": "Proof",
  "number": "1.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-2-4",
  "level": "2",
  "url": "#exercises-2-4",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "Expected profit from repeated investor pitches.",
  "body": " Expected profit from repeated investor pitches   An entrepreneur repeatedly pitches a business idea to potential investors. Each pitch is successful with probability independently of all previous pitches. The entrepreneur stops pitching as soon as the first successful pitch occurs. Each pitch costs $200 to prepare and deliver. If a pitch is successful, the entrepreneur receives $8,000 in funding. Let be the random variable denoting the total number of pitches made, including the successful pitch.     Find .      Let be the random variable denoting the entrepreneur's net profit after the first successful pitch. Express in terms of .      Compute .      Suppose instead that each pitch costs $1,000. Compute the entrepreneur's expected net profit.      More generally, suppose each pitch costs $ . Find the value of for which the entrepreneur's expected net profit is exactly zero.    "
},
{
  "id": "exercises-2-5",
  "level": "2",
  "url": "#exercises-2-5",
  "type": "Proof",
  "number": "1.2.2",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-2-6",
  "level": "2",
  "url": "#exercises-2-6",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Subdivide a circle of radius centered at into cells. Suppose that the expected length of the intersection of any line through with any given cell is at least . Show that the expected total number of cells intersected by a ray emanating from is at most .   "
},
{
  "id": "exercises-2-7",
  "level": "2",
  "url": "#exercises-2-7",
  "type": "Proof",
  "number": "1.2.3",
  "title": "",
  "body": "  "
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
