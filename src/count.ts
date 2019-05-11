export function Count(): MethodDecorator {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const original: Function = descriptor.value;

        descriptor.value = function(...args){
            console.count(`${target.constructor.name} ${propertyKey}()`);
            return original.call(this, ...args);
        }

        return descriptor;
    }
}