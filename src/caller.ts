// getName function written by: user3335966 ( :) )
// Taken from: https://stackoverflow.com/a/47812770

function getName(d){
    const error = new Error();
    const firefoxMatch = (error.stack.split('\n')[0 + d].match(/^.*(?=@)/) || [])[0];
    const chromeMatch = ((((error.stack.split('at ') || [])[1 + d] || '').match(/(^|\.| <| )(.*[^(<])( \()/) || [])[2] || '').split('.').pop();
    const safariMatch = error.stack.split('\n')[0 + d];
  
    return firefoxMatch || chromeMatch || safariMatch;
}

// Experimental decorator - may not work correctly.
export function Caller(): MethodDecorator {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const original: Function = descriptor.value;

        descriptor.value = function(...args) {
            console.log(`${target.constructor.name} ${propertyKey}() was called by ${getName(2)}()`);
            return original.call(this, ...args);
        }
    }
}