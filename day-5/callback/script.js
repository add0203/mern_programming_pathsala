let arr = [2, 13, 24, 21, 45];

let printArraypretty = (ele) => {
  console.log(`: ${ele}`);
};

let printArray = (arr) => {
  arr.forEach(printArraypretty);
};

// printArray(arr);

// let printArray2 = (arr) => {
//   arr.forEach((ele) => {
//     console.log(ele);
//   });
// };

// we can pass the (ele,index, array)

let printArray2 = (arr) => {
  arr.forEach((ele, i, array) => {
    console.log(ele, ": ", i, ": ", array);
  });
};

printArray2(arr);

// JavaScript provides several built-in array methods for performing various operations on arrays. Some of the most commonly used array methods include:

// 1. **push**: Adds one or more elements to the end of an array and returns the new length of the array.
//    ```javascript
//    const array = [1, 2, 3];
//    array.push(4); // array is now [1, 2, 3, 4]
//    ```

// 2. **pop**: Removes the last element from an array and returns that element.
//    ```javascript
//    const array = [1, 2, 3];
//    const lastElement = array.pop(); // lastElement is 3, array is now [1, 2]
//    ```

// 3. **shift**: Removes the first element from an array and returns that element.
//    ```javascript
//    const array = [1, 2, 3];
//    const firstElement = array.shift(); // firstElement is 1, array is now [2, 3]
//    ```

// 4. **unshift**: Adds one or more elements to the beginning of an array and returns the new length of the array.
//    ```javascript
//    const array = [2, 3];
//    array.unshift(1); // array is now [1, 2, 3]
//    ```

// 5. **splice**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//    ```javascript
//    const array = [1, 2, 3, 4, 5];
//    array.splice(2, 1, 'a', 'b'); // array is now [1, 2, 'a', 'b', 4, 5]
//    ```

// 6. **slice**: Returns a shallow copy of a portion of an array into a new array object selected from begin to end.
//    ```javascript
//    const array = [1, 2, 3, 4, 5];
//    const newArray = array.slice(2, 4); // newArray is [3, 4]
//    ```

// 7. **concat**: Returns a new array comprised of this array joined with other array(s) and/or value(s).
//    ```javascript
//    const array1 = [1, 2];
//    const array2 = [3, 4];
//    const newArray = array1.concat(array2); // newArray is [1, 2, 3, 4]
//    ```

// 8. **forEach**: Executes a provided function once for each array element.
//    ```javascript
//    const array = [1, 2, 3];
//    array.forEach(item => console.log(item)); // logs each item in the array
//    ```

// 9. **map**: Creates a new array populated with the results of calling a provided function on every element in the calling array.
//    ```javascript
//    const array = [1, 2, 3];
//    const mappedArray = array.map(item => item * 2); // mappedArray is [2, 4, 6]
//    ```

// 10. **filter**: Creates a new array with all elements that pass the test implemented by the provided function.
//     ```javascript
//     const array = [1, 2, 3, 4, 5];
//     const filteredArray = array.filter(item => item % 2 === 0); // filteredArray is [2, 4]
//     ```

// These are just a few examples of array methods available in JavaScript. There are many more array methods available for various purposes, such as sorting, searching, and reducing arrays.

// JavaScript provides a variety of built-in methods for working with strings. Here are some commonly used string methods:

// 1. **charAt(index)**: Returns the character at the specified index.
//    ```javascript
//    const str = "hello";
//    console.log(str.charAt(0)); // Output: "h"
//    ```

// 2. **charCodeAt(index)**: Returns the Unicode value of the character at the specified index.
//    ```javascript
//    const str = "hello";
//    console.log(str.charCodeAt(0)); // Output: 104
//    ```

// 3. **concat(str1, str2, ...)**: Combines the text of two or more strings and returns a new string.
//    ```javascript
//    const str1 = "Hello";
//    const str2 = "World";
//    console.log(str1.concat(" ", str2)); // Output: "Hello World"
//    ```

// 4. **indexOf(searchValue, startIndex)**: Returns the index within the calling string of the first occurrence of the specified value, starting the search at the specified index.
//    ```javascript
//    const str = "hello world";
//    console.log(str.indexOf("world")); // Output: 6
//    ```

// 5. **lastIndexOf(searchValue, startIndex)**: Returns the index within the calling string of the last occurrence of the specified value, starting the search at the specified index.
//    ```javascript
//    const str = "hello world";
//    console.log(str.lastIndexOf("o")); // Output: 7
//    ```

// 6. **slice(startIndex, endIndex)**: Extracts a section of a string and returns it as a new string.
//    ```javascript
//    const str = "hello world";
//    console.log(str.slice(0, 5)); // Output: "hello"
//    ```

// 7. **substring(startIndex, endIndex)**: Returns the part of the string between the start and end indexes, or to the end of the string.
//    ```javascript
//    const str = "hello world";
//    console.log(str.substring(6, 11)); // Output: "world"
//    ```

// 8. **toUpperCase()**: Converts all characters in a string to uppercase.
//    ```javascript
//    const str = "hello";
//    console.log(str.toUpperCase()); // Output: "HELLO"
//    ```

// 9. **toLowerCase()**: Converts all characters in a string to lowercase.
//    ```javascript
//    const str = "HELLO";
//    console.log(str.toLowerCase()); // Output: "hello"
//    ```

// 10. **replace(searchValue, newValue)**: Searches a string for a specified value or regular expression and replaces it with a new value.
//     ```javascript
//     const str = "Hello, World!";
//     console.log(str.replace("World", "Universe")); // Output: "Hello, Universe!"
//     ```

// 11. **split(separator, limit)**: Splits a string into an array of substrings based on the specified separator.
//     ```javascript
//     const str = "apple, banana, orange";
//     console.log(str.split(", ")); // Output: ["apple", "banana", "orange"]
//     ```

// 12. **trim()**: Removes whitespace from both ends of a string.
//     ```javascript
//     const str = "   Hello, World!   ";
//     console.log(str.trim()); // Output: "Hello, World!"
//     ```

// These are just a few examples of string methods in JavaScript. There are many more methods available for various string manipulation tasks.
