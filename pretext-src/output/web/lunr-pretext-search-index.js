var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sensing",
  "level": "1",
  "url": "#sensing",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Day 15",
  "body": " Math 2000 Day 15       (Vector) Space: The Final Frontier   Game  To start this unit, we will play the following motivating game: Compressed Sensing Game .    Vector Spaces  A vector space is a set of things that you can add and rescale by any real constant.  Examples of vector spaces include:   Matrices of a fixed size under addition and rescaling every entry  Polynomials  Functions from  Continuous functions from to  Differentiable functions from to    It turns out you can use linear algebra to solve problems in all of these settings simultaneously.  Checking if something is a vector space is an arduous and delicate task. We won't talk about how to do that. Though you can feel free to read it in the book. Instead I want to give some applications, so you can see the kinds of problems that solving a linear system helps solve.    Exercises    Suppose I give you a function , and I tell you and . What must and equal?      Suppose I give you a function , and I tell you , , and . Find , , and .    Video game designers rarely move characters at a constant speed, because it looks robotic. Instead, they use ease-in, ease-out curves where the character starts slowly, speeds up, and gently slows to a stop. These are modeled using polynomials, and finding the right curve ends up being a linear algebra problem.    A character needs to move from position to position in one second. Let be its position after seconds. The character should start and end at rest, so      Write a system of linear equations for , , , and .      Solve it.      Why did we need a cubic instead of a quadratic?     The following gives the essential first step for understanding linear regression in statistics.    Write a system of linear equations for solving the following problem: Is there a line that passes through all four of the following points:     The next is an example of an initial value problem from projectile motion. Newtonian physics tells you that the motion of an object is governed by an equation , where is the gravitational constant.    You wake up on a new planet, and you're trying to figure out the gravity. Your best bud Aaron Rodgers wakes up next to you with his league official pigskin. You tell Mr. Rodgers that you can figure out the gravity as long as he throws the football. He throws the football starting at an initial height of cm; it hits its peak height after minute before hitting the ground after minutes. Let be the function defining the height of the football in centimeters after minutes.     Find .      Find .      Find .      Using (a), (b), and (c), write a system of linear equations for finding , , and .      What is the gravitational constant on the planet?     Remember in Calc 2, you learned about something called partial fraction decomposition . This is another example of where linear algebra appears.    We want to compute by finding constants and with      Multiply both sides by . You should get an equation between two polynomials.      Two polynomials are equal exactly when their coefficients are the same. Use this to write a system of linear equations for and .      Solve the system and compute the integral.     Recall from Calc 2, you learned about power series, functions of the form By using Taylor series, it turns out any sufficiently nice function can be written as a power series. For example, The following is an example of how power series are used for solving differential equations:    Suppose I give you a function that is a power series:      Write as a power series.      What is the coefficient of in ?      Two power series are equal exactly when their coefficients are the same. Suppose that . How then must and relate?      Explain why the value of determines the value of all remaining coefficients.      Explain why this means any power series solution must be a multiple of .     In probability theory a special family of matrices called stochastic matrices are used to model a random process.    A matrix is called stochastic if the sum of values in each row is equal to and each entry is non-negative (i.e., ). A matrix is called doubly stochastic if the sum of entries in each row and column is equal to and each entry is non-negative.     Give an example of a matrix that is stochastic but not doubly stochastic.      Explain why every doubly stochastic matrix is symmetric.      Explain how to check if a matrix with non-negative entries is doubly stochastic by solving a system of equations. How many equations do you need?      Explain how to check if a matrix with non-negative entries is doubly stochastic by solving a system of equations. How many equations do you need?      How would your answers to (c) and (d) change if you were talking about stochastic matrices?       Let be a set with vector addition and scalar multiplication by real numbers. For all and , the vector space axioms are:   (closure under addition)  (closure under scalar multiplication)  (commutativity of addition)  (associativity of addition)  There is a zero vector such that .  For every , there is an additive inverse such that .  (compatibility of scalar multiplication)  (identity for scalar multiplication)  (scalar multiplication distributes over vector addition)  (scalar addition distributes over scalar multiplication)      For each axiom, say whether it is surprising to you or not, and explain why. Which ones feel most natural, and which ones would you be most likely to forget when checking whether a set is a vector space?       "
},
{
  "id": "ex-line-two-points",
  "level": "2",
  "url": "#ex-line-two-points",
  "type": "Checkpoint",
  "number": "1.1",
  "title": "",
  "body": "  Suppose I give you a function , and I tell you and . What must and equal?   "
},
{
  "id": "ex-quadratic-derivatives",
  "level": "2",
  "url": "#ex-quadratic-derivatives",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Suppose I give you a function , and I tell you , , and . Find , , and .   "
},
{
  "id": "ex-ease-curve",
  "level": "2",
  "url": "#ex-ease-curve",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": "  A character needs to move from position to position in one second. Let be its position after seconds. The character should start and end at rest, so      Write a system of linear equations for , , , and .      Solve it.      Why did we need a cubic instead of a quadratic?    "
},
{
  "id": "ex-line-four-points",
  "level": "2",
  "url": "#ex-line-four-points",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Write a system of linear equations for solving the following problem: Is there a line that passes through all four of the following points:    "
},
{
  "id": "ex-football",
  "level": "2",
  "url": "#ex-football",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  You wake up on a new planet, and you're trying to figure out the gravity. Your best bud Aaron Rodgers wakes up next to you with his league official pigskin. You tell Mr. Rodgers that you can figure out the gravity as long as he throws the football. He throws the football starting at an initial height of cm; it hits its peak height after minute before hitting the ground after minutes. Let be the function defining the height of the football in centimeters after minutes.     Find .      Find .      Find .      Using (a), (b), and (c), write a system of linear equations for finding , , and .      What is the gravitational constant on the planet?    "
},
{
  "id": "sec-exercises-10",
  "level": "2",
  "url": "#sec-exercises-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial fraction decomposition "
},
{
  "id": "ex-partial-fractions",
  "level": "2",
  "url": "#ex-partial-fractions",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  We want to compute by finding constants and with      Multiply both sides by . You should get an equation between two polynomials.      Two polynomials are equal exactly when their coefficients are the same. Use this to write a system of linear equations for and .      Solve the system and compute the integral.    "
},
{
  "id": "ex-power-series",
  "level": "2",
  "url": "#ex-power-series",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Suppose I give you a function that is a power series:      Write as a power series.      What is the coefficient of in ?      Two power series are equal exactly when their coefficients are the same. Suppose that . How then must and relate?      Explain why the value of determines the value of all remaining coefficients.      Explain why this means any power series solution must be a multiple of .    "
},
{
  "id": "sec-exercises-14",
  "level": "2",
  "url": "#sec-exercises-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stochastic matrices "
},
{
  "id": "ex-stochastic",
  "level": "2",
  "url": "#ex-stochastic",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  A matrix is called stochastic if the sum of values in each row is equal to and each entry is non-negative (i.e., ). A matrix is called doubly stochastic if the sum of entries in each row and column is equal to and each entry is non-negative.     Give an example of a matrix that is stochastic but not doubly stochastic.      Explain why every doubly stochastic matrix is symmetric.      Explain how to check if a matrix with non-negative entries is doubly stochastic by solving a system of equations. How many equations do you need?      Explain how to check if a matrix with non-negative entries is doubly stochastic by solving a system of equations. How many equations do you need?      How would your answers to (c) and (d) change if you were talking about stochastic matrices?    "
},
{
  "id": "ex-vector-space-axioms",
  "level": "2",
  "url": "#ex-vector-space-axioms",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Let be a set with vector addition and scalar multiplication by real numbers. For all and , the vector space axioms are:   (closure under addition)  (closure under scalar multiplication)  (commutativity of addition)  (associativity of addition)  There is a zero vector such that .  For every , there is an additive inverse such that .  (compatibility of scalar multiplication)  (identity for scalar multiplication)  (scalar multiplication distributes over vector addition)  (scalar addition distributes over scalar multiplication)      For each axiom, say whether it is surprising to you or not, and explain why. Which ones feel most natural, and which ones would you be most likely to forget when checking whether a set is a vector space?    "
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
