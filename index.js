// GlobalNameSpace
if (typeof MemoryProbe === 'undefined') {
    MemoryProbe = {};

    (function(){
        var probeStore = {};

        MemoryProbe.get = function getProbe(name){
            var probe = probeStore[name];
            if (!probe) {
                eval('probe = function ' + name + 'Probe' + '(){}');
                probeStore[name] = probe;
            }
            return probe;
        };

        MemoryProbe.set = function setProbe(target, name){
            if (typeof target !== 'object') {
                console.warn('target is not an object : ', name, name);
                return false;
            } else if (!target.hasOwnProperty('constructor')) {
                target.constructor = this.get(name);
                return true;
            } else {
                console.warn('target has constructor, ' + target.constructor.name + ' : ', name, name);
                return false;
            }
        };
    })();
} else {
    console.warn('MemoryProbe is already defined')
}