export function methods(): ClassDecorator {
    return (target: Function) => {
        Object.keys(target.prototype).forEach((methodName: string) => {
            const original = target.prototype[methodName];

            target.prototype[methodName] = function(...args) {
                console.log(`${target.constructor.name} ${methodName}()`, ...args);

                return original.call(this, ...args);
            };
        });
    }
}