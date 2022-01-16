let questionAnswer = [

    ['What is git? What is the difference between git and Github?', 'Git is a version control system that allows many coders to work on the same code. Github is a internet service provider that host version control using Git.'],
    ['What types of evaluations will return a Boolean value?', 'More specifically, relational, logical, and equality operators will return Boolean values.'],
    ['What is an index? What is the difference between index and value?', 'Index is the location of an element within an array. The differences between index and value is that index provides the location of an element while value provides the content in that element.'],
    ['What is iteration?', 'The repeation of performing an action a number of times until a certain condition is met.'],
    ['Give a brief description of proper pair programming techniques. What are the roles of each person?', 'Pair programming is having two individuals working in the same code. One person operating the keyboard, known as the driver, while the other person watches and navigates the driver while working on the code. The driver mainly focuses on making sure the syntax of the code is written properly while the navigator focus on the more abstract of the code to deliver the proper results. Proper pair programming techniques is having both individuals be prepared open line of communication, both persons need to be engage while coding, switch roles at certain time intervals.'],
    ['What is the difference between a parameter and an argument?', 'Parameters are placeholder variables listed as a part of a function while arguments are the actual values that are passed to the function when invoked.'],
    ['The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?', 'The predifined parameters are the single elements of the selected array, index, array itself, and a function. The required parameters are the individual elements of an array and a function. The optional parameters are the array and index of each element of the selected array.'],
    ['What is object destructuring?', 'Extraction of properties from objects and assign them to distinct variables.'],
    ['What is the difference between a function and a method?', 'A method is similar to a function, however, the difference is a method is stored in an object while a function is not. Furthermore, function can only work with the input arguments that we have provided while a method has access to the input arguments and properties of the associated object.'],
    ['What is the difference between a class and an object?', ' The difference between the two is the class is a blueprint for creating objects while an object is an instance of a class.'],
    ['What is hoisting in JavaScript?', 'Before the execution of code, Javascript interpreter does the process of moving declaration of functions, variables, and classes to the top of their scope.'],
    ['What is this in JavaScript?', '"this" is a keyword that refers to an object and used for accessing the value within the object. It is used as a reference to call upon properties and methods within the object. The this refers to the object itself.'],
    ['What is React? Why would you use it?', 'React is a library to create components for web applications. It combines javascript and markup language. React is considered flexible, creates a virtual DOM, and a large community to support the technology. We would use React because of its effeciency with updating state of the DOM by having a virtua DOM. The virtual DOM gets updated and sync with the real DOM by ReactDOM. In addition, readibility is easier, since html is used inside javascript.'],
    ['Which lifecycle method is required in a React class component?', 'The render() method is the only required lifecycle method for class components. The method controls the items that will be passed on to the DOM. If items have been passed to the DOM previously, the render() will mutate the DOM with the new updated items.'],
    ['What is JSX? What is one notable difference between HTML and JSX?', 'JSX is known as Javascript Syntax Extension or JavaScript XML. JSX is the combination of Javascript and HTML together. One notable difference between JSX and HTML is that JSX can only return one single element in contrast HTML can return multiple elements.'],
    ['What is yarn? What file(s) are modified in a React application when you run yarn?', 'Yarn is a package manager for the javascript language. It manages the dependency files of applications. When yarn is run the dependencies that are listed in the package.json are downloaded and a node_modules file is created/updated to store all the dependencies files.'],
    ['What is an anonymous function in JavaScript?', 'An anonymous function is a nameless function. An example of an anonymous function is arrow functions () => {}, typically stored in variables for later future use. In addition, anonymous functions are typically used in higher order functions.'],
    ['What are props in React?', 'Props are short for properties, they are received from the parent to child component and considered immutable. Immutable means the props cannot change in the child component.'],
    ['What is a DOM event?', 'Is a signal that something has changed or occuring in the DOM and can be caused by the user interaction or by the browser. DOM events types include mouse events, touch events, keyboard event, form events, etc.'],
    ['What is object-oriented programming? How is it different than functional programming?', 'The concept that information is stored in objects. In OOP the main concepts are encapsulation meaning storage of information within an object, abstraction meaning only use the needed information within an object and nothing more, inheritance the passage of properties and methods to a child object, and polymorphism meaning a class/object can represent many things with the same configuration. OOP is based on objects while functional programming is based on functions. Objects store information while functions do not store information and depend only on the input arguments.'],
    ['What is the difference between a Float and an Integer in Ruby?', 'Float is a subclass of Numeric class in ruby and represents real numbers. Integers are whole numbers with no decimal places. The difference between float and integer is that float can hold values after the decimal point while the integer does not.'],
    ['Ruby has an implicit return. What does that mean?', 'Ruby will return the value of the last line of block code automatically. It means a return is not required everytime when defining a function and can reduce code lines.'],
    ['What is a block in Ruby?', 'Ruby blocks are created with the do/end or single line code {}. A block is a chunk of code that is passed to a method in ruby. The block of code is invoked when the method is called.'],
    ['What is a gem?', 'A package of code also known as a library that contains a set of functionality that can be use in ruby. The gems can be installed by "gem install <name_of_gem>". After a gem has been installed the user must use "require <name_of_gem>" to access the gem in the local ruby file.'],
    ['What is Ruby on Rails?', 'Researched answer: Rails is a back-end framework (gem in ruby) built in the ruby language. Rails is a model-view-controller framework (MVC). The Model (Active Record) interacts with the database. The Views (Action Views) is all the html files and structure. The Controller(Action controller) interacts with the views and model to specify the actions of the application.'],
    ['What is a relational database? Are there other kinds of databases?', 'A relational database displays information in rows and columns. The database can contain many tables that are related to each other. Other non-relational databases includes MongoDB, Google Cloud Firestore, Cassandra, Redis, and etc.'],
    ['What are primary keys? Why are they important?', 'Primary keys are unique that specify a particular row within a table in a relational database. The importance of keys, it allows the program to identify which row to select when duplicates exist.']



]

export default questionAnswer