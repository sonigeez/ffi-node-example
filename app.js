const ffi = require('ffi-napi');
const ref = require('ref-napi');

// Define the signature of the divide function
const lib = ffi.Library('./library.dylib', {
    'divide': ['int', ['int', 'int', ref.refType('int')]]
});

// Create an int buffer to hold the result of the division
const result = ref.alloc('int');

// Call the divide function
const errorCode = lib.divide(10, 0, result);
if (errorCode !== 0) {
    console.error('Error: Division by zero');
} else {
    console.log('The result is:', result.deref());
}
