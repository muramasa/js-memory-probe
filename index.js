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
            if (typeof target === 'object' && !target.hasOwnProperty('constructor')) {
                target.constructor = this.get(name);
                return true;
            } else {
                console.warn('cannot set probe : ', target, name);
                return false;
            }
        };
    })();
} else {
    console.warn('MemoryProbe is already defined')
}