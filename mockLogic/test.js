var test = function(gas, cost) {
    let gasRemain = 0;
    let totalGas = 0;
    let start = 0;
    for (let i = 0; i< gas.length; i++) {
        let diff = gas[i] - cost[i];
        totalGas += diff;
        gasRemain += diff;
        if(diff < 0){
            start = i+1;
            gasRemain = 0;
        }
    }
    return totalGas >= 0 ? start : -1;
    
};