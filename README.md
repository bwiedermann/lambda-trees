# lambda-trees
A visualizer for lambda expressions

### Development

#### Development environment

The development environment has several dependencies:

To set up the environment:

   1. Install each of these dependencies:
      * [node.js](https://nodejs.org/)
      * [bower](http://bower.io/)
      * [pegjs](http://pegjs.org/)

   2. Clone this repository

   3. Run `bower install` to install the remaining dependencies

#### Modifying the parser

   1. Modify the grammar in the file `assets/lambda.pegjs`
   1. Generate a new parser, by running the following command in the top-level
   directory:

    ```
    pegjs assets/lambda.pegjs js/lambda-parser.js
    ```

   1. pegjs assumes we're using node on the server, but wer' not. So, we need to
   modify the generated parser. 
      a. Uncomment the first line, which looks something like:

        ```
        module.exports = (function() {
        ```
      b. Uncomment the last few lines, which look something like:
        ```
          return {
           SyntaxError: SyntaxError,
           parse:       parse
          };
        })();
        ```