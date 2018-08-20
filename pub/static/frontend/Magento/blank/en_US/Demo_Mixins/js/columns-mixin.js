define(function () {
 'use strict';

 var mixin = {

     /**
      *
      * @param {Column} elem
      */
      alert('asdfasdf');
     isDisabled: function (elem) {
         return elem.blockVisibility || this._super();
     }
 };

 return function (target) { // target == Result that Magento_Ui/.../columns returns.
     return target.extend(mixin); // new result that all other modules receive
 };
});