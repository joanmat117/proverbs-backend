import { CreateExerciseDto } from '../dto/create-exercise.dto';
import { Category, Difficulty } from 'generated/prisma/enums';

export const EXERCISES_SEED: CreateExerciseDto[] = [
  // ALGEBRA - EASY
  {
    content: 'Solve the linear equation: 2x + 5 = 15. Show your step-by-step procedure and verify your solution by substituting the found value back into the original equation.',
    category: Category.algebra,
    difficulty: Difficulty.easy
  },
  {
    content: 'Simplify the following algebraic expression by combining like terms: 3a + 2b - a + 4b - 2a + 3b. Then, evaluate the result for a = 2 and b = 3.',
    category: Category.algebra,
    difficulty: Difficulty.easy
  },
  {
    content: 'Calculate the value of x in the proportion: x/4 = 8. Solve using the fundamental property of proportions (product of means equals product of extremes) and check your answer.',
    category: Category.algebra,
    difficulty: Difficulty.easy
  },
  
  // ALGEBRA - MEDIUM
  {
    content: 'Solve the quadratic equation by completing the square: x² - 5x + 6 = 0. Then, verify your solutions by factoring the original expression and find the x-intercepts of the corresponding parabola.',
    category: Category.algebra,
    difficulty: Difficulty.medium
  },
  {
    content: 'Simplify the rational expression: (x² - 9)/(x - 3). State the domain of the original expression and the simplified one, explain why they are different, and describe what happens at x = 3.',
    category: Category.algebra,
    difficulty: Difficulty.medium
  },
  {
    content: 'Solve the following system of linear equations using substitution or elimination method: 2x + y = 10, x - y = 2. Interpret the solution geometrically (intersection point of two lines) and verify your answer.',
    category: Category.algebra,
    difficulty: Difficulty.medium
  },
  
  // ALGEBRA - HARD
  {
    content: 'Solve the logarithmic equation by applying logarithm properties: log₂(x) + log₂(x - 2) = 3. Determine the domain of the equation, verify that the obtained solutions are valid, and explain why some might be discarded.',
    category: Category.algebra,
    difficulty: Difficulty.hard
  },
  {
    content: 'Find all roots of the cubic polynomial: x³ - 6x² + 11x - 6 = 0. Completely factor the polynomial using the factor theorem and synthetic division. Relate each root to the corresponding linear factors.',
    category: Category.algebra,
    difficulty: Difficulty.hard
  },

  // GEOMETRY - EASY
  {
    content: 'Calculate the area of a square whose side measures 5 cm. Then, if we double the side length, by what factor does the area multiply? Explain the relationship between the change in side length and the change in area.',
    category: Category.geometry,
    difficulty: Difficulty.easy
  },
  {
    content: 'Find the perimeter of a rectangle with a base of 8 cm and a height of 3 cm. If we increase the base by 2 cm and decrease the height by 1 cm, how does the perimeter change? Calculate both perimeters and compare.',
    category: Category.geometry,
    difficulty: Difficulty.easy
  },
  {
    content: 'How many degrees do the interior angles of a triangle sum to? Prove this property by drawing any triangle and drawing a line parallel to one of its sides. Then, calculate the value of the third angle if the other two measure 45° and 60°.',
    category: Category.geometry,
    difficulty: Difficulty.easy
  },
  
  // GEOMETRY - MEDIUM
  {
    content: 'Calculate the volume of a sphere with radius 6 cm. Then, if the radius is reduced by half, by what proportion does the volume decrease? Explain the relationship between radius and volume of a sphere using the formula V = (4/3)πr³.',
    category: Category.geometry,
    difficulty: Difficulty.medium
  },
  {
    content: 'In a right triangle, the legs measure 3 cm and 4 cm. Find the length of the hypotenuse by applying the Pythagorean theorem. Then, calculate the perimeter of the triangle and the area. What type of triangle is it according to its sides?',
    category: Category.geometry,
    difficulty: Difficulty.medium
  },
  {
    content: 'Calculate the area of a circle inscribed in a square with side 10 cm. Then, calculate the area of the circle circumscribed about the same square. What relationship exists between both areas? Express the result in terms of π.',
    category: Category.geometry,
    difficulty: Difficulty.medium
  },
  
  // GEOMETRY - HARD
  {
    content: 'Prove that the volume of a right circular cone is exactly one-third of the volume of a cylinder with the same base and height. Use Cavalieri\'s principle or consider the cone as a pyramid with a circular base. Apply this result to calculate the volume of a cone with radius 3 cm and height 7 cm.',
    category: Category.geometry,
    difficulty: Difficulty.hard
  },
  {
    content: 'Calculate the area of an equilateral triangle inscribed in a circle of radius R. Express the result in terms of R. Then, determine the ratio between the area of the triangle and the area of the circle. How does this ratio change if the radius is doubled?',
    category: Category.geometry,
    difficulty: Difficulty.hard
  },

  // TRIGONOMETRY - EASY
  {
    content: 'Calculate the exact value of sin(30°) without using a calculator, using an equilateral triangle with side 2. Then, find the values of cos(30°) and tan(30°) from the trigonometric relationships in the same triangle.',
    category: Category.trigonometry,
    difficulty: Difficulty.easy
  },
  {
    content: 'What is the exact value of cos(60°)? Explain using the properties of a right triangle with angles 30° and 60°. Relate this result to sin(30°) and explain why they are equal.',
    category: Category.trigonometry,
    difficulty: Difficulty.easy
  },
  {
    content: 'Express 45° in radians. Then, express π/3 radians in degrees. Establish a general rule for converting from degrees to radians and vice versa. How many radians are in a full circle?',
    category: Category.trigonometry,
    difficulty: Difficulty.easy
  },
  
  // TRIGONOMETRY - MEDIUM
  {
    content: 'Prove the fundamental Pythagorean identity: sin²(x) + cos²(x) = 1 for any angle x. Use the unit circle and the Pythagorean theorem. Then, apply this identity to find the value of sin(x) if cos(x) = 3/5 and x is in the first quadrant.',
    category: Category.trigonometry,
    difficulty: Difficulty.medium
  },
  {
    content: 'Solve the trigonometric equation: sin(x) = 1/2 for x in the interval [0, 2π]. Find all solutions and represent them on the unit circle. Explain why there are two solutions in this interval and how they relate to reference angles.',
    category: Category.trigonometry,
    difficulty: Difficulty.medium
  },
  {
    content: 'Calculate the exact value of tan(45°) · cot(45°). Generalize this result: what is the product of tangent and cotangent of the same angle? Prove this property using the definitions of these functions in terms of sine and cosine.',
    category: Category.trigonometry,
    difficulty: Difficulty.medium
  },
  
  // TRIGONOMETRY - HARD
  {
    content: 'Prove the double-angle identity: sin(2x) = 2sin(x)cos(x). Use the sum formulas: sin(a+b) = sin(a)cos(b) + cos(a)sin(b). Then, apply this identity to calculate sin(120°) without a calculator, knowing that sin(60°) = √3/2 and cos(60°) = 1/2.',
    category: Category.trigonometry,
    difficulty: Difficulty.hard
  },
  {
    content: 'Solve the quadratic trigonometric equation: 2cos²(x) - cos(x) - 1 = 0 for x in the interval [0, 2π]. Treat it as a quadratic equation in cos(x), find the possible values for cos(x), and then determine all angles that satisfy the original equation. Verify your solutions.',
    category: Category.trigonometry,
    difficulty: Difficulty.hard
  },

  // FUNCTIONS - EASY
  {
    content: 'Given the linear function f(x) = 2x + 1, calculate f(3), f(0), and f(-2). Then, find the value of x such that f(x) = 7. Interpret these values as points on the Cartesian plane and sketch an approximate graph of the function.',
    category: Category.functions,
    difficulty: Difficulty.easy
  },
  {
    content: 'What is the slope of the linear function f(x) = 3x - 2? Explain what the slope represents geometrically. Then, determine whether the function is increasing or decreasing and find its y-intercept.',
    category: Category.functions,
    difficulty: Difficulty.easy
  },
  {
    content: 'Find the y-intercept of the function f(x) = -2x + 5. At what point does this function intersect the x-axis? Calculate the root of the function by solving f(x) = 0. Represent this information graphically.',
    category: Category.functions,
    difficulty: Difficulty.easy
  },
  
  // FUNCTIONS - MEDIUM
  {
    content: 'Find the domain of the rational function f(x) = 1/(x - 3). Explain why certain values must be excluded from the domain. Then, determine the range of the function and describe its behavior near the vertical asymptote. Does it have horizontal asymptotes?',
    category: Category.functions,
    difficulty: Difficulty.medium
  },
  {
    content: 'Calculate the composite function (f∘g)(x) if f(x) = x² and g(x) = x + 1. Then, calculate (g∘f)(x) and compare both results. Are they equal? Explain why function composition is not commutative in general and find an example where it is.',
    category: Category.functions,
    difficulty: Difficulty.medium
  },
  {
    content: 'Determine whether the function f(x) = x³ is even, odd, or neither. Apply the definitions of even functions (f(-x) = f(x)) and odd functions (f(-x) = -f(x)). Explain what symmetry its graph presents in each case. Then, classify the function f(x) = x² in the same way.',
    category: Category.functions,
    difficulty: Difficulty.medium
  },
  
  // FUNCTIONS - HARD
  {
    content: 'Find the inverse function of the rational function f(x) = (2x + 1)/(x - 3). Determine the domain and range of f and its inverse. Verify that f⁻¹(f(x)) = x and f(f⁻¹(y)) = y for values in the corresponding domains. What relationship exists between the asymptotes of f and f⁻¹?',
    category: Category.functions,
    difficulty: Difficulty.hard
  },
  {
    content: 'Analyze the continuity of the piecewise function: f(x) = { x² if x ≤ 1, 2x - 1 if x > 1 } at the point x = 1. Calculate the one-sided limits, the function value at x = 1, and determine if it is continuous. If not, classify the type of discontinuity and propose a modification to make it continuous.',
    category: Category.functions,
    difficulty: Difficulty.hard
  },
];
