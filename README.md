# RPN_Calculator is a command-line Reverse-Polish Notation calculator.
This application was written in node.js using jasmine for testing. I created this application with the intentions of making it understandable, flexible, and maintainable. I Started out with a general function that would check for valid inputs, calculate, and return either an error if it was not a valid operation, or the result of the calculation.  
 
 
For the actual algorithm I choose to split up the operations, so it would be easier to read and be maintainable. If we break down the process, we do a linear search to put all numbers on the stack, and process all operators. Processing an operator requires removing 2 numbers off the stack and replacing them with a single number, which is an O(1) operation. Meaning, the total cost is proportional to the length of the input. 
 
 
The reason why I choose to write this in node is because this is the language that I am most familiar with. If I was to do it differently with no time limit I would probably us python. Mainly for when this calculator would expand past standard arithmetic operators you would already have the scientific computation modules of NumPy, SciPy, and SymPy. 

## How to run
**How to run:**

```
npm run start
```

**Output example:**

```
> 5
5
> 8
8
> +
13
```

**Special commands:**

- `q` or Control + C -- exit

## Tests

Using `Jasmine`

**How to run:**

```
npm run test
```

# Usage
You can write expression in one line

``` > 5 3 + ```

or in multiple lines

```
> 1
> 2
> +
```
# Examples

```
> 5 
5
> 8
8
> +
13
```

------

```
> 5 5 5 8 + + -
-13.0
> 13 +
0.0
```