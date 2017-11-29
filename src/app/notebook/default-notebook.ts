export const defaultNotebook = {
  title: 'Getting Started',
  cards: [
    {
      type: 'comment',
      value:
        "### Bosc\n> **A data-driven, object-oriented scripting language**\n\nLet's start by looking at a high level example, then let's explore the language. **Hit the play button to run each code block**.",
      editMode: false
    },
    { type: 'code', value: "5 times #([x] 5 - x) push 'Boom'\n", height: 50 },
    {
      type: 'comment',
      value:
        "### Objects (or Tables) \n#### Everything is an Object\nIn Bosc there is only one data structure: the **table**. Everything is a table, including primitives like `3`, `'Hello'`, and `true`. Hence forth I will use the terms object and table interchangeably.\n\nThe table is most similar to a map or dictionary in other languages. However, it also acts as an array by letting numerical keys represent list entries.\n\nThere are three ways to define a table: as a **list** `[1 2 3]`, as a **map** `{key 'value'}`, and as a **function** `#([args] symbol1 symbol2)`. In the end though, the different forms just choose how each value is assigned to a key. Run the example bellow to explore the resulting tables of each table literal.\n\nDon't worry about the `local : [variable]` we will come back to that later.",
      editMode: false
    },
    {
      type: 'code',
      value:
        "local : list [1 2 3] ,\nlocal : map  { name 'Gabe' age 23 } ,\nlocal : fun  #([x] x + 1)",
      height: 100
    },
    {
      type: 'comment',
      value:
        '### The Interpreter\n\nThe interpreter is very simple and for the most part has one expectation about the structure of your code. Let me explain:\n\n> 1. The first symbol consumed should be an **object**, for example `3`.\n> 2. The second symbol should be a **method** of the preceding object, for example `+`.\n> 3. The next zero or more symbols should be the **arguments** for the previous method, for example `4`.\n> 4. Once the method is evaluated it takes the returned object and returns to state 2 (expecting another method).\n\n**Note that symbols are delimited by spaces.**\n\nFollowing the above process, lets explore the code block bellow:\n```\n3 + 4 / 2\n```\nIn this example `3` is our object, `+` is our method, and  `4` is the single argument (to the `+` method). This returns the object `7`, which subsequently has the method `/` which takes the argument `2`. The end result is the object `3.5`.\n\n',
      editMode: false
    },
    { type: 'code', value: '3 + 4 / 2', height: 50 },
    {
      type: 'comment',
      value:
        '### Storing data with `local`\nLike everything else in Bosc, **`local` is a table**. Every table comes preloaded with the `:` method. The `:` method takes two arguments, a key and a value, and creates that entry in the source object. It then returns the object manipulated. So, like in our earlier example, when we say `local : x 3` we are assigning the value `3` to the `x` key of our local object. \n\n`local` receives some special treatment from the interpreter. When the interpreter encounters an unknown symbol (variable name) it will check the `local` table for that key. If found it will inject the corresponding value in place of the symbol. Look at the example bellow. After we have defined x, we can use it as symbol in future statements.\n\n`local` also has some special properties to enable **lexical scoping** -- we will explore this more when we learn how to define methods.\n\n### A quick note about `,`\n`,` is another preloaded method that comes with every object in Bosc. It takes one argument -- and then returns that argument. This allows one to switch the object they are currently operating on. In the example below, after the statement `local : x 3`, I no longer want to call any methods on `local`. Therefore, by using the `,` method I can switch gears and make `x` my source object.',
      editMode: false
    },
    { type: 'code', value: 'local : x 3 ,\nx + 10', height: 50 },
    {
      type: 'comment',
      value:
        '### Functions/Methods\nA function is list of symbols with an `args` key that defines a list of arguments. The short hand to define a function is `#([args] symbols)`.\n\n### The `$( ... )` special form\nThe only exception to the object-method-argument rule is the special form `$(function arg1 arg2)`. This allows one to call a function without having to reference `local`. That being said, there is never a strict requirement to do so. This is equivalent to `local function arg1 arg2`.\n',
      editMode: false
    },
    {
      type: 'code',
      value: 'local : func #([x] x + 1) ,\n$(func 5)',
      height: 100
    }
  ]
};
