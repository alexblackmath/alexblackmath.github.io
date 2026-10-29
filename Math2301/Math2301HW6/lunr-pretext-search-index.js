var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "axioms",
  "level": "1",
  "url": "#axioms",
  "type": "Article",
  "number": "",
  "title": "Math 2301 Homework 6",
  "body": " Math 2301 Homework 6       Calculus Eigen   Calc 2: Power Series  In Calc , you learn about power series. They look like this: Taylor series tells you that any sufficiently nice function has a power series representation given by Thus, they are a useful model of functions.    Let be an infinitely differentiable function.     Show that where is the th derivative of .      Show that if , then for all .     Power series are useful for describing eigenvectors of the derivative.    Let .     Find a power series for .      Show that if , then .      Explain why this means the set of solutions to the differential equation is -dimensional.      Describe the set of solutions to .      Describe the set of all eigenvectors of the derivative.       Multivariable Calc: Second Derivatives  For a function , its gradient is the function given by . Its Hessian is , which is the matrix given by   The following collection of exercises answers the question: Which matrices can appear as Hessians?  Let be an matrix. Then the quadratic form associated with is     Let be an matrix. Show that for all :       Show that       Show that any symmetric matrix is the Hessian of some quadratic form.      "
},
{
  "id": "ex-power-series-coefficients",
  "level": "2",
  "url": "#ex-power-series-coefficients",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Let be an infinitely differentiable function.     Show that where is the th derivative of .      Show that if , then for all .    "
},
{
  "id": "ex-derivative-eigenvectors",
  "level": "2",
  "url": "#ex-derivative-eigenvectors",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Let .     Find a power series for .      Show that if , then .      Explain why this means the set of solutions to the differential equation is -dimensional.      Describe the set of solutions to .      Describe the set of all eigenvectors of the derivative.    "
},
{
  "id": "sec-second-derivatives-2",
  "level": "2",
  "url": "#sec-second-derivatives-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gradient Hessian "
},
{
  "id": "ex-quadratic-form-partials",
  "level": "2",
  "url": "#ex-quadratic-form-partials",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  Let be an matrix. Show that for all :    "
},
{
  "id": "ex-quadratic-form-hessian",
  "level": "2",
  "url": "#ex-quadratic-form-hessian",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Show that    "
},
{
  "id": "ex-symmetric-hessian",
  "level": "2",
  "url": "#ex-symmetric-hessian",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Show that any symmetric matrix is the Hessian of some quadratic form.   "
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
