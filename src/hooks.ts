export function hooks(): ClassDecorator {
    return (target: Function) => {
        ['ngOnInit', 'ngOnChanges', 'ngOnDestroy'].forEach((hook) => {
            const original = target.prototype[hook];

            if(typeof original === 'function') {
                target.prototype[hook] = function(...args) {
                    console.log(`${target.constructor.name} ${hook}()`, ...args);
                    original.call(this, ...args);
                };
            }
        });
    };
}