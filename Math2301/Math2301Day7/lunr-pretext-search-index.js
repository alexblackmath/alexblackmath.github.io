var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "TheUnexpected",
  "level": "1",
  "url": "#TheUnexpected",
  "type": "Article",
  "number": "",
  "title": "Expectations vs. Reality",
  "body": " Expectations vs. Reality        Random Variables Review  A vector space of functions we care about are random variables , which are as Prof. Maresca likes to say, neither random nor variables. They are actually just functions from some set that has some probability space associated to it.  For example, the random variable could be the value on a -sided die of a roll. Then .  The magic is that there is also a probability function associated to the random variable telling you the probability of an outcome of the input to the random variable happening. For a die, we like to hope the probability function is just the constant function . Probability functions satisfy the additional constraints that and for all .    Great Expectations  Fix a probability space and a density function. Then the set of random variables is just , is the set of labelings of by real-values. In particular, the set of random variables is a vector space. There is a very important map called the Expectation , which is    Linearity of Expectation   The function is a linear transformation.    Let and be random variables, and let . Then    and      In fact, this extends more generally to infinite case using the same arguments but with infinite sums or more generally integrals. Expectation is one of the most useful linear transformations, and using linearity already buys you a lot.     Flipping Coins  Here is a common quant interview style question. Suppose you flip a coin until you get heads. How many flips do you expect this to take?  Here the random variable is , where is the number of flips it takes to get heads. The probability space is infinite. Here we want essentially,   To be clear, the after flips means that the first flips were tails and the -th flip was heads. You could compute this directly, or we could use linearity of expectation. You can compute this directly as an infinite series.   Explain why the probability of the first heads appearing after flips is .    Using the result of the exercise, you get the expectation   and then you could use calculus tricks to compute it. But maybe you're looking at that and don't remember what a so-called “calculus” is. Instead you think there must be some better way. Indeed there is.    The expected number of flips until reaching a first heads is .    You can split into two random variables. Let be a variable that is if you flip heads first and otherwise. Let be a random variable that is if you flip heads first and the number of flips until you reached your first heads otherwise.  Claim 1 : .   Claim 2:    Claim 3:  .        Exercises   Find the expected number of coin flips until reaching the first tails.      Find the expected number of coin flips until reaching the first consecutive pair of heads.       Find the expected number of coin flips until you have a consecutive heads and then tails.       "
},
{
  "id": "lemma-linearity-expectation",
  "level": "2",
  "url": "#lemma-linearity-expectation",
  "type": "Lemma",
  "number": "2.1",
  "title": "Linearity of Expectation.",
  "body": " Linearity of Expectation   The function is a linear transformation.    Let and be random variables, and let . Then    and     "
},
{
  "id": "exercise-first-heads-probability",
  "level": "2",
  "url": "#exercise-first-heads-probability",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "",
  "body": " Explain why the probability of the first heads appearing after flips is .   "
},
{
  "id": "theorem-first-heads-expectation",
  "level": "2",
  "url": "#theorem-first-heads-expectation",
  "type": "Theorem",
  "number": "3.2",
  "title": "",
  "body": "  The expected number of flips until reaching a first heads is .    You can split into two random variables. Let be a variable that is if you flip heads first and otherwise. Let be a random variable that is if you flip heads first and the number of flips until you reached your first heads otherwise.  Claim 1 : .   Claim 2:    Claim 3:  .    "
},
{
  "id": "exercise-first-tails",
  "level": "2",
  "url": "#exercise-first-tails",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "",
  "body": " Find the expected number of coin flips until reaching the first tails.    "
},
{
  "id": "exercise-consecutive-heads",
  "level": "2",
  "url": "#exercise-consecutive-heads",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "",
  "body": " Find the expected number of coin flips until reaching the first consecutive pair of heads.     "
},
{
  "id": "exercise-heads-then-tails",
  "level": "2",
  "url": "#exercise-heads-then-tails",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "",
  "body": " Find the expected number of coin flips until you have a consecutive heads and then tails.     "
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
