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
    })();
} else {
    console.warn('MemoryProbe is already defined')
}