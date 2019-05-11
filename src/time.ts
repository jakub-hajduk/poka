export function Time(): MethodDecorator {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const original: Function = descriptor.value;

            descriptor.value = function(...args){
                console.time(`${target.constructor.name} ${propertyKey}()`);
                const output = original.call(this, ...args);
                
                console.timeEnd(`${target.constructor.name} ${propertyKey}()`);
                return output;
            }

            return descriptor;
        }
}