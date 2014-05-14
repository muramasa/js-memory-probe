js-memory-probe
===============

Add probe for js memory analysis


## Usage

add probe into an object:

```javascript
var targetObject = Object.create(object);
MemoryProbe.set(targetObject, 'ProbeName');
```

get probe :

```javascript
MemoryProbe.get('ProbeName');
```
