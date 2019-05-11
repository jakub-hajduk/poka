export function Changes(): MethodDecorator {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        if(propertyKey === 'ngOnChanges') {
            const original = descriptor.value;

            descriptor.value =function(...args) {
                console.group(`${target.constructor.name} ${propertyKey}()`);
                console.table(args[0]);
                console.groupEnd();

                return original.call(this, ...args);
            };

            return descriptor;
        }
    };
}