# Type Guards

A type guard is a TypeScript technique used to get information about the type of a variable, usually within a conditional block. It is essential for writing safer, more precise code by helping TypeScript understand the specific type of a variable at runtime.

# Importance of type guards

- **Type Safety:** Type guards enforces the code to interact with the values according to their specific types.
- **Union Types:** When working with union types, type guards help TypeScript to differentiate between the types in the union.
- **Code Readability:** Type guards enhances code readability by explicitly checking the type and clarify the intend of the code.
- **Type-Safe Refactoring:** When refactoring a code if given specific type mismatches, typescript will catch error. Which will make refactoring easier.

## Use Cases

- ### `typeof` Type Guard
  The `typeof` operator is used to check primitive types like string, number, boolean, etc. It’s helpful when working with union types containing primitive types.
  ```ts
  const checkType = (val: string | number): void => {
    if (typeof val === "number") {
      console.log("Input is a number.");
    } else {
      console.log("Input is a string.");
    }
  };
  ```
- ### `instanceof` Type Guard

  The `instanceof` operator checks whether an object is an instance of a specific class. It is useful when working with class-based instances and when union types involve multiple class types.

  ```ts
  class Dog {
    bark() {
      console.log("Woof!");
    }
  }

  class Cat {
    meow() {
      console.log("Meow!");
    }
  }

  function speak(animal: Dog | Cat) {
    if (animal instanceof Dog) {
      animal.bark();
    } else {
      animal.meow();
    }
  }
  ```

- ### `in` Operator Type Guard

  The `in` operator checks for the existence of a property in an object. This is usefull when constraining a value to be within the limits of the existing properties of an object.

  ```ts
  interface Person {
    name?: string;
    age?: number;
    email?: string;
  }

  const validateKeys = (obj: Person, keys: (keyof Person)[]): boolean => {
    return keys.every((key) => key in obj);
  };
  ```
