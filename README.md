# poka
Simple typescript decorators for console logging and debugging

## @Changes()
### Method decortator
Decorator for Angular components. It logs all the changes of the data-bound properties.

```javascript
@Component({
    [...]
})
class MyComponent {
    @Changes
    ngOnChanges() {
        [...]
    }
}
```

## @Count()
### Method decorator
Counts calls of the ecorated method.

```javascript
class MyClass {
    @Count()
    method() {
        [...]
    }
}
```

## @Group()
### Method decorator
Groups every console logs called inside method.

```javascript
class MyClass {
    @Group()
    method() {
        console.log('this will be logged inside group')
    }
}
```

## @Methods()
### Class decorator
Logs every method in class when it's called.

```javascript
@Methods()
class MyClass() {
    method() {
    }

    otherMethods() {
    }
}
```