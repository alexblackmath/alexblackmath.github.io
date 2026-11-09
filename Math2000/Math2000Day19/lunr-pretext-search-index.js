var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Camera",
  "level": "1",
  "url": "#Camera",
  "type": "Article",
  "number": "",
  "title": "Math 2000 Day 19",
  "body": " Math 2000 Day 19       Through the Looking Glass   Review  Recall the following definitions:  What is the span of a collection of vectors?  What does it mean for a collection of vectors to be independent?  What does it mean for them to be spanning?      Bases  A basis for a vector space is a collection of vectors that is both independent and spanning .    The columns of a matrix are a basis if and only if the matrix is invertible.    Why? Being a basis means independent and spanning. Spanning means that every vector is in the columnspan. In other words, has a solution for all . Independence means has a unique solution when it exists. If you had two different ones, it would mean you could throw out one of your vectors and still have a solution. Then is just the unique solution to .    Coordinate Systems  Different bases encode different information.    Play the following game: here .    In that game, you use barycentric coordinates . For these, you take the vertices of a triangle , , and in . Then you append a as a new last coordinate: , , .    The vectors , , are the vertices of a triangle if and only if , , is a basis.    Why? They are a triangle unless they all lie on a line segment. This continues to be true when you add the last coordinate. A line segment is always contained in a plane through the origin in and so cannot span.  But this so far only gives you a basis. Given a basis, the coordinates with respect to that basis are the coefficients of a vector written in that basis.  In particular, barycentric coordinates are given by     Video Game Graphics  For a 3-D game, you want to show it on a 2-D screen. How is that possible? First of all, everything in a video game is secretly a triangle.  Here is how we model this. We have a camera in that is in some location, and we define coordinates relative to that camera.  For us, we'll assume the camera is pointing straight up, so a point is determined by , where denotes the distance to the camera relative to the direction it is pointing.  Then to get a point on the screen, we replace the point with . Now if I want to draw a single triangle, this is all I need to know. I just compute that map on each of the vertices, and I get the triangle I want to draw.  In general, we model shapes as many triangles. Then we project each triangle to the screen to check which one we see first.  Thus, for a stationary picture, you  Check pixel by pixel which projected triangle contains it  Check which point on a 3-D triangle in a mesh is closest if there are multiple options  Draw the color for that closest point    How do you check which is closest? Take the barycentric coordinates for the 2-D projection. Then we can compute the distance as follows. Let's first go the other way. Take a point in the triangle. We want to find the -coordinate of this point, which is   Then the projection map yields Then we get It follows that Therefore,   This formula tells you the distance to your point. Then you just check across each point which is closest using this distance measure.  This all works for a stationary camera. In the exercises, I'll have you think about a camera in motion.    Exercises    Recall that for McNuggets sizes, the minimum sizes you needed to get all the sizes you could were and . Nonetheless, give an example where there are multiple ways to get an order of a given size.      Is the point in the triangle , , ? Use barycentric coordinates to justify your answer.      I am drawing a 3-D scene on my computer and want to depict a triangle with vertices , , in 3-D. What are the vertices of the corresponding triangle in 2-D?      Is the point contained in the triangle with vertices , , ? Justify your answer. What about the point ?      Explain in words: How can you use the barycentric coordinates to tell if a point is contained in a polygon?      Suppose you're playing a first person game like Skyrim, and your character moves forward a step from to .     How should you update the positions of all the 3-D triangles relative to the camera?      How should you update the positions of all the 2-D triangles relative to the camera?       You may recall that rotation corresponds to multiplying by a matrix. Say you rotate and that corresponds to multiplying by a matrix . How would you update the positions of all the points?    In actual games, you represent points using vectors of length of the form . This is in part because it makes writing down an important transformation as matrix multiplication easier:    Find a matrix such that when you multiply it by the point you get . More generally, can you get for any ? Is the resulting matrix invertible?      "
},
{
  "id": "thm-basis-invertible",
  "level": "2",
  "url": "#thm-basis-invertible",
  "type": "Theorem",
  "number": "1.1",
  "title": "",
  "body": "  The columns of a matrix are a basis if and only if the matrix is invertible.   "
},
{
  "id": "ex-near-miss",
  "level": "2",
  "url": "#ex-near-miss",
  "type": "Checkpoint",
  "number": "1.2",
  "title": "",
  "body": "  Play the following game: here .   "
},
{
  "id": "sec-coordinate-systems-4",
  "level": "2",
  "url": "#sec-coordinate-systems-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "barycentric coordinates "
},
{
  "id": "thm-triangle-basis",
  "level": "2",
  "url": "#thm-triangle-basis",
  "type": "Theorem",
  "number": "1.3",
  "title": "",
  "body": "  The vectors , , are the vertices of a triangle if and only if , , is a basis.   "
},
{
  "id": "sec-coordinate-systems-7",
  "level": "2",
  "url": "#sec-coordinate-systems-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinates "
},
{
  "id": "ex-mcnuggets",
  "level": "2",
  "url": "#ex-mcnuggets",
  "type": "Checkpoint",
  "number": "1.4",
  "title": "",
  "body": "  Recall that for McNuggets sizes, the minimum sizes you needed to get all the sizes you could were and . Nonetheless, give an example where there are multiple ways to get an order of a given size.   "
},
{
  "id": "ex-point-in-triangle",
  "level": "2",
  "url": "#ex-point-in-triangle",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": "  Is the point in the triangle , , ? Use barycentric coordinates to justify your answer.   "
},
{
  "id": "ex-project-triangle",
  "level": "2",
  "url": "#ex-project-triangle",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "  I am drawing a 3-D scene on my computer and want to depict a triangle with vertices , , in 3-D. What are the vertices of the corresponding triangle in 2-D?   "
},
{
  "id": "ex-point-in-3d-triangle",
  "level": "2",
  "url": "#ex-point-in-3d-triangle",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "  Is the point contained in the triangle with vertices , , ? Justify your answer. What about the point ?   "
},
{
  "id": "ex-polygon",
  "level": "2",
  "url": "#ex-polygon",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "  Explain in words: How can you use the barycentric coordinates to tell if a point is contained in a polygon?   "
},
{
  "id": "ex-moving-camera",
  "level": "2",
  "url": "#ex-moving-camera",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "  Suppose you're playing a first person game like Skyrim, and your character moves forward a step from to .     How should you update the positions of all the 3-D triangles relative to the camera?      How should you update the positions of all the 2-D triangles relative to the camera?    "
},
{
  "id": "ex-rotation",
  "level": "2",
  "url": "#ex-rotation",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "  You may recall that rotation corresponds to multiplying by a matrix. Say you rotate and that corresponds to multiplying by a matrix . How would you update the positions of all the points?   "
},
{
  "id": "ex-translation-matrix",
  "level": "2",
  "url": "#ex-translation-matrix",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "  Find a matrix such that when you multiply it by the point you get . More generally, can you get for any ? Is the resulting matrix invertible?   "
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
