var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Reality",
  "level": "1",
  "url": "#Reality",
  "type": "Article",
  "number": "",
  "title": "Expectations vs. Reality",
  "body": " Expectations vs. Reality        Random Variables Review  A vector space of functions we care about are random variables , which are as Prof. Maresca likes to say, neither random nor variables. They are actually just functions from some set that has some probability space associated to it.  For example, the random variable could be the value on a -sided die of a roll. Then .  The magic is that there is also a probability function associated to the random variable telling you the probability of an outcome of the input to the random variable happening. For a die, we like to hope the probability function is just the constant function . Probability functions satisfy the additional constraints that and for all .    Great Expectations  Fix a probability space and a density function. Then the set of random variables is just , the set of labelings of be real-values. In particular, the set of random variables is a vector space. There is a very important map called the Expectation , which is    Linearity of Expectation   The function is a linear transformation.    Let and be random variables, and let . Then   and     In fact, this extends more generally to infinite case using the same arguments but with infinite sums or more generally integrals. Expectation is one of the most useful linear transformations, and using linearity already buys you a lot.    Flipping Coins  Here is a common quant interview style question. Suppose you flip a coin until you get heads. How many flips do you expect this to take?  Here the random variable is is the number of flips it takes to get heads. The probability space is infinite. Here we want essentially,   You could compute this directly, or we could use linearity of expectation. You can compute this directly as an infinite series.    Explain why the probability of the first heads appearing after flips is .    Using the result of the exercise, you get the expectation   and then you could use calculus tricks to compute it. But maybe you're looking at that and don't remember what a so-called “calculus” is. Instead you think there must be some better way. Indeed there is.    The expected number of flips until reaching a first heads is .    You can split into two random variables. Let be a variable that is is you flip heads first and otherwise. Let be a random variable that is if you flip heads first and the number of flips until you reached your first heads otherwise.  Claim 1 : . The informal way to explain this is that is the amount of time you wait until your first heads. If your first flip is a heads, , , and by definition. Hence, . Otherwise, is still the number of flips until the first heads, , and is the number of flips until the first heads. Thus, in both cases. Please feel free to use this kind of informal reasoning on the exercises.  Claim 2:  . This is direct, if the first flip is heads, which happens with probability . It is otherwise, so the expected value is .  Claim 3:  . Note that is only nonzero with probability . If is nonzero, the first flip is tails, and is the amount of time until reaching heads. The first flip being tails gives no information other than a flip has already occur. Thus, the expected amount of time after making the first flip until reaching heads is . The expected overall number of flips is . Since this case only arises with probability , we obtain   Finally, then putting this together,   By subtract on both sides, this yields   so .    While it requires some thought, it is much easier to calculate and a better proof strategy to use this approach.     Exercises    Find the expected number of coin flips until reaching the first tails.    This is the same as for heads.      Find the expected number of coin flips until reaching the first consecutive pair of heads.    The result is . We define four random variables. We let be the number of flips until having the first consecutive pair of heads.  We let be the random variable that is the number of flips until reaching the first consecutive pair of heads if the first flip is tails and otherwise.  We let be the random variable that is if the first two flips are heads and otherwise.  We let be the random variable that is the number of flips until reaching the first two consecutive heads assuming the first two flips are HT.  Then, by construction, , because , , and are only nonzero at disjoint times covering all of the cases. If the first flip is tails, by definition, only is nonzero and gives the amount of time until the first two flips occurs which is . Otherwise, the first flip is heads and there are two cases. If the second flip, is also heads, and the other variables are . Otherwise, the second flip is tails, and we are in the case.  Therefore, . Thus, we want to compute the expectations of each of these.  For , this case occurs with probability , since we know the start is tails. Then a flip has already occurred, but no other information is known. Thus, we get   For , this case occurs with probability , and we know for sure the out come is flips, since the first two flips are heads. Thus,   For , this case occurs with probability . There are two initial flips, and otherwise, no information is gained. Thus, the resulting relation is   Then finally,   Therefore, by subtracting on both sides we get   so . This coincides with what we saw in the simulations.      Find the expected number of coin flips until you have a consecutive heads and then tails.    I'm purposefully not giving a solution to this one.   "
},
{
  "id": "lemma-linearity-expectation",
  "level": "2",
  "url": "#lemma-linearity-expectation",
  "type": "Lemma",
  "number": "2.1",
  "title": "Linearity of Expectation.",
  "body": " Linearity of Expectation   The function is a linear transformation.    Let and be random variables, and let . Then   and    "
},
{
  "id": "exercise-first-heads-probability",
  "level": "2",
  "url": "#exercise-first-heads-probability",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "",
  "body": "  Explain why the probability of the first heads appearing after flips is .   "
},
{
  "id": "theorem-first-heads-expectation",
  "level": "2",
  "url": "#theorem-first-heads-expectation",
  "type": "Theorem",
  "number": "3.2",
  "title": "",
  "body": "  The expected number of flips until reaching a first heads is .    You can split into two random variables. Let be a variable that is is you flip heads first and otherwise. Let be a random variable that is if you flip heads first and the number of flips until you reached your first heads otherwise.  Claim 1 : . The informal way to explain this is that is the amount of time you wait until your first heads. If your first flip is a heads, , , and by definition. Hence, . Otherwise, is still the number of flips until the first heads, , and is the number of flips until the first heads. Thus, in both cases. Please feel free to use this kind of informal reasoning on the exercises.  Claim 2:  . This is direct, if the first flip is heads, which happens with probability . It is otherwise, so the expected value is .  Claim 3:  . Note that is only nonzero with probability . If is nonzero, the first flip is tails, and is the amount of time until reaching heads. The first flip being tails gives no information other than a flip has already occur. Thus, the expected amount of time after making the first flip until reaching heads is . The expected overall number of flips is . Since this case only arises with probability , we obtain   Finally, then putting this together,   By subtract on both sides, this yields   so .   "
},
{
  "id": "exercise-first-tails",
  "level": "2",
  "url": "#exercise-first-tails",
  "type": "Checkpoint",
  "number": "4.1",
  "title": "",
  "body": "  Find the expected number of coin flips until reaching the first tails.    This is the same as for heads.   "
},
{
  "id": "exercise-consecutive-heads",
  "level": "2",
  "url": "#exercise-consecutive-heads",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "",
  "body": "  Find the expected number of coin flips until reaching the first consecutive pair of heads.    The result is . We define four random variables. We let be the number of flips until having the first consecutive pair of heads.  We let be the random variable that is the number of flips until reaching the first consecutive pair of heads if the first flip is tails and otherwise.  We let be the random variable that is if the first two flips are heads and otherwise.  We let be the random variable that is the number of flips until reaching the first two consecutive heads assuming the first two flips are HT.  Then, by construction, , because , , and are only nonzero at disjoint times covering all of the cases. If the first flip is tails, by definition, only is nonzero and gives the amount of time until the first two flips occurs which is . Otherwise, the first flip is heads and there are two cases. If the second flip, is also heads, and the other variables are . Otherwise, the second flip is tails, and we are in the case.  Therefore, . Thus, we want to compute the expectations of each of these.  For , this case occurs with probability , since we know the start is tails. Then a flip has already occurred, but no other information is known. Thus, we get   For , this case occurs with probability , and we know for sure the out come is flips, since the first two flips are heads. Thus,   For , this case occurs with probability . There are two initial flips, and otherwise, no information is gained. Thus, the resulting relation is   Then finally,   Therefore, by subtracting on both sides we get   so . This coincides with what we saw in the simulations.   "
},
{
  "id": "exercise-heads-then-tails",
  "level": "2",
  "url": "#exercise-heads-then-tails",
  "type": "Checkpoint",
  "number": "4.3",
  "title": "",
  "body": "  Find the expected number of coin flips until you have a consecutive heads and then tails.   "
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
