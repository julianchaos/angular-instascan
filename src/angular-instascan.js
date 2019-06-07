// 'strict mode';
const Instascan = require('instascan');

angular.module('angular-instascan', [])
    .service('$instascan', $instascan);

function $instascan() {
    return {
        getInstascan: function() {
            return Instascan;
        },
    };
}
