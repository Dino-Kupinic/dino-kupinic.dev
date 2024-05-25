---
title: "Pocoloco Solver"
description: "automatic solver for the pocoloco puzzle with 3D visualization"
icons:
  - "i-simple-icons-python"
  - "i-simple-icons-numpy"
technologies:
  - "Python"
  - "PyTest"
  - "Panda3D"
  - "NumPy"
date: 2024-01-09T00:00:00.000Z
featured: true
---

The goal of this project is to create an automatic solver for
the [Pocoloco](https://rombol.de/en/products/poco-loco-yavuz-demirhan-turkei-2014-holzspiel-denkspiel-knobelspiel-geduldspiel-aus-holz)
puzzle. The Pocoloco puzzle is a 3D puzzle that consists of 4 pieces which must fit into a frame. There is only one
solution to the puzzle.

Despite the puzzle being relatively simple, it is quite challenging to solve it manually. With a few people you still
need around 20 minutes to solve it.

In order to automatically solve the puzzle, we use a brute force approach. Matrices are used to represent the puzzle in
the code and the A\* algorithm is used to find the solution. The algorithm is implemented in Python and uses the NumPy
library for matrix operations.

For 3D visualization of the puzzle, the Panda3D library is used. The visualization is not necessary for the solver to
work, but it is a nice addition. After the puzzle is solved, a json file is created that contains the necessary
movements of each piece in order to solve the puzzle.
