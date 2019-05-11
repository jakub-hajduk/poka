export function Output(): MethodDecorator {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const original: Function = descriptor.value;

        descriptor.value = function(...args) {
            const output = original.call(this, ...args);
            
            console.group(`${target.constructor.name} ${propertyKey}()`);
            if( output.constructor === Array || output.constructor === Object ){
                console.table(output);
            }else{
                console.log(output);
            }
            console.groupEnd();

            return output;
        }
    }
}