var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "animorphs",
  "level": "1",
  "url": "#animorphs",
  "type": "Article",
  "number": "",
  "title": "Animorphs",
  "body": " Animorphs              Isomorphism  This is an important fact that we have used implicitly in class that I want you to work through explicitly as an exercise:    Let be a linearly independent subset of a vector space. Then is a basis for .      Let be a linear transformation. Let be a basis for . Suppose that . Show that is a basis for .    We call a linear transformation an isomorphism if it is also a bijection. That is, if it is both one-to-one and onto.    Let and be finite dimensional vector spaces of the same dimension. Then let . Show that if , then is a linear isomorphism.      Unexpected Values    What is the expected number of rolls of a six-sided die until you roll your first ?     Expected profit from repeated investor pitches   An entrepreneur repeatedly pitches a business idea to potential investors. Each pitch is successful with probability independently of all previous pitches. The entrepreneur stops pitching as soon as the first successful pitch occurs. Each pitch costs $200 to prepare and deliver. If a pitch is successful, the entrepreneur receives $8,000 in funding. Let be the random variable denoting the total number of pitches made, including the successful pitch.     Find .      Let be the random variable denoting the entrepreneur’s net profit after the first successful pitch. Express in terms of .      Compute .      Suppose instead that each pitch costs $1,000. Compute the entrepreneur’s expected net profit.      More generally, suppose each pitch costs $ . Find the value of for which the entrepreneur’s expected net profit is exactly zero.       Subdivide a circle of radius centered at into cells. Suppose that the expected length of the intersection of any line through with any given cell is at least conditional on the line intersecting it. Show that the expected total number of cells intersected by a ray emanating from is at most .     Suppose there are cells and label them . For each cell, let be the random variable that is if the line intersects cell and otherwise.  Let be the random variable that gives the length of intersection with the cell.  Let be the random variable that is the total number of cells intersected by the line. Show that        Similarly, the total length of the intersection of the line with the circle is the sum of its lengths intersected with each cell. Thus,   Furthermore, since the intersection is unless it occurs, we can rewrite this as   Note that, since is an indicator random variable, and , where is the random variable giving the length assuming an intersection occurs. Use these observations together with linearity of expectation to show that        Put this together and complete the proof .         "
},
{
  "id": "exercises-2-3",
  "level": "2",
  "url": "#exercises-2-3",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let be a linearly independent subset of a vector space. Then is a basis for .   "
},
{
  "id": "exercises-2-4",
  "level": "2",
  "url": "#exercises-2-4",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Let be a linear transformation. Let be a basis for . Suppose that . Show that is a basis for .   "
},
{
  "id": "exercises-2-5",
  "level": "2",
  "url": "#exercises-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isomorphism "
},
{
  "id": "exercises-2-6",
  "level": "2",
  "url": "#exercises-2-6",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Let and be finite dimensional vector spaces of the same dimension. Then let . Show that if , then is a linear isomorphism.   "
},
{
  "id": "exercises-3-2",
  "level": "2",
  "url": "#exercises-3-2",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  What is the expected number of rolls of a six-sided die until you roll your first ?   "
},
{
  "id": "exercises-3-3",
  "level": "2",
  "url": "#exercises-3-3",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "Expected profit from repeated investor pitches.",
  "body": " Expected profit from repeated investor pitches   An entrepreneur repeatedly pitches a business idea to potential investors. Each pitch is successful with probability independently of all previous pitches. The entrepreneur stops pitching as soon as the first successful pitch occurs. Each pitch costs $200 to prepare and deliver. If a pitch is successful, the entrepreneur receives $8,000 in funding. Let be the random variable denoting the total number of pitches made, including the successful pitch.     Find .      Let be the random variable denoting the entrepreneur’s net profit after the first successful pitch. Express in terms of .      Compute .      Suppose instead that each pitch costs $1,000. Compute the entrepreneur’s expected net profit.      More generally, suppose each pitch costs $ . Find the value of for which the entrepreneur’s expected net profit is exactly zero.    "
},
{
  "id": "exercises-3-4",
  "level": "2",
  "url": "#exercises-3-4",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  Subdivide a circle of radius centered at into cells. Suppose that the expected length of the intersection of any line through with any given cell is at least conditional on the line intersecting it. Show that the expected total number of cells intersected by a ray emanating from is at most .   "
},
{
  "id": "exercises-3-5",
  "level": "2",
  "url": "#exercises-3-5",
  "type": "Proof",
  "number": "1.2.1",
  "title": "",
  "body": " Suppose there are cells and label them . For each cell, let be the random variable that is if the line intersects cell and otherwise.  Let be the random variable that gives the length of intersection with the cell.  Let be the random variable that is the total number of cells intersected by the line. Show that        Similarly, the total length of the intersection of the line with the circle is the sum of its lengths intersected with each cell. Thus,   Furthermore, since the intersection is unless it occurs, we can rewrite this as   Note that, since is an indicator random variable, and , where is the random variable giving the length assuming an intersection occurs. Use these observations together with linearity of expectation to show that        Put this together and complete the proof .      "
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
