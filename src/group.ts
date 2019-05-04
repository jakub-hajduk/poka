export function group(): MethodDecorator {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const original: Function = descriptor.value;

        descriptor.value = function(...args){
            console.group(`${target.constructor.name} ${propertyKey}()`);
            const out =  original.call(this, ...args);
            console.groupEnd();
            return out;
        }

        return descriptor;
    }
}