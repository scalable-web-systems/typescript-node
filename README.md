# How to Set Up a Node Project With Typescript | Bonus Tutorial
> **Author -** Ishaan Khurana, [LinkedIn](https://www.linkedin.com/in/ishaan-khurana-46968679/)

## Objective
This tutorial focuses on how to integrate typescript into a node project and demonstrates a working example of a minimal express server written using typscript.


## Prerequisites
##### Side note: There are links attached to the bottom of this tutorial for our readers who may not be familiar with the technologies used here.
1. The reader should be familiar with Javascript.
2. The reader should have some understanding how to write code in Typescript.
3. The reader should have have NPM installed on their machine.
4. The reader should have prior experience working with node and express.
5. The reader should have PostMan installed on their machine. Alternatively, one can use CLI tools such as Curl, WGet etc. to make the API calls.


## Why Typescript?
NodeJS has been an incredibly popular backend Javascript runtime environment since its emergence in 2011. However, it falls short of providing the developers with the rich strongly typed coding experience that they very much desire.
Wikipedia defines Typescript as:
> TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language

Typescript helps abridge the gap between the untyped Javascript and strongly typed object oriented languages such as C#, Java etc.

## Steps

1. Open a terminal window and create a new directory called `TypescriptNodeTutorial`. Cd into this directory and initialize a new node project using `npm init`.
2. Install typescript by doing `npm i --save typescript`.
3. Open this project using VS Code or any of your favorite IDE.
4. Now we need to configure Typescript's compiler configuration options. Create a new file in the root directory of your project called `tsconfig.json`. Paste in the following code:

```
{
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "target": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist"
    },
    "lib": ["es2015"]
  }
```

Let's go over some of these options. **module** defines the module code generation method. Node uses **commonjs**. **target** refers to the version of javascript, we are using **es6**. **moduleResolution** tells the compilers how to interpret imports. The value **node** instructs the compiler to emulate node's resolution mechanism. **outDir** specifies the location to the output .js files after transpilation. In this tutorial, we'll be storing our transpiled files in the `dist` folder.

**Note:** When you first save your `tsconfig.json` file, you may see a red underline on the first line of code. That's expected. The editor is complaining that it doesn't have any .ts file to compile yet.

5. Let's go ahead and create our .ts file `index.ts`. We'll be defining our express server here. Our code would look very similar to the typical .js express server definition barring a few minor changes. Let's go ahead and install the express package. Tab over to your terminal window and do `npm i --save express`. Now with typescript, we also need to install the the definitions so that typescript can understand the types of express classes. Let's go ahead and install it - `npm i --save @types/express`.
6. Import express and the following 3 interfaces from the express package.
`import express, { Application, Request, Response } from 'express'`
7. Now let's define our express server and the port.

```
const app: Application = express()
const port: number = parseInt(process.env.PORT) || 5000
```
Intutitive. Our express server is of the type **Application**, an interface that we just imported from the express module.

8. Let's add a simple GET endpoint.

```
app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        msg: 'typescript node rules!'
    })
})
```

The two **req** and **res** parameters are of types **Request** and **Response** respectively, also imported from the express package.

9. Lastly, let's write the code to make our server listen on the port we defined above.

```
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening to the typscript Node server on port ${port}`)
})
```

Here's how the complete code looks like:

`index.ts`

```
import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port: number = parseInt(process.env.PORT) || 5000

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        msg: 'typescript node rules!'
    })
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Listening to the typscript Node server on port ${port}`)
})
```

10. Let's go ahead and compile our code. Tab over to your terminal window and run `npx tsc`. This will compile all .ts files present in our project and spit out the transpiled .js files into the `dist` folder.
11. In order to run the server, do `node dist/index.js`. You should get the following output:
![image](https://user-images.githubusercontent.com/7733516/152696829-a5d481a9-107c-43f4-a648-22ac68d68f7d.png)

**Note**: For your reference, the project code is uploaded to this tutorial. Feel free to inspect the code or even clone the repository if you get stuck anywhere. In order to run the express server after cloning the repository, simply cd into the directory, run `npm install` and then `node dist/index.js`.

## Conclusion
After completing this tutorial, the reader should successfully be able to use typescript in their node projects.

## Acknowledgements
[How To Set Up a Node Project With Typescript](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript)

## Links
1. [Node](https://nodejs.dev/learn)
2. [Javascript](https://www.w3schools.com/js/)
3. [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
