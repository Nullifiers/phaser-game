!function(e){function t(t){for(var n,a,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={0:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([531,1]),r()}({1449:function(e,t,r){"use strict";r.r(t);var n=r(117),o=r.n(n);var i=function(e){var t=e.sys.game.canvas.width,r=e.add.rectangle(t-16,16,16,16,3355443);r.setInteractive(),r.on("pointerup",(function(){e.scale.isFullscreen?e.scale.stopFullscreen():e.scale.startFullscreen()}))};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,s(t).call(this,"game"))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,Phaser.Scene),r=t,(n=[{key:"preload",value:function(){}},{key:"createPlayer",value:function(){this.player=this.add.rectangle(100,600,16,16,16777215),this.physics.add.existing(this.player),this.player.body.setCollideWorldBounds(!0)}},{key:"create",value:function(){this.canvas=this.sys.game.canvas,i(this),this.createPlayer(),this.cursors=this.input.keyboard.createCursorKeys()}},{key:"update",value:function(){var e=this.player.body;e.setVelocityX(0),this.cursors.left.isDown?e.setVelocityX(-300):this.cursors.right.isDown&&e.setVelocityX(300),this.cursors.up.isDown&&e.y>=this.canvas.height-16&&e.setVelocityY(-200)}}])&&u(r.prototype,n),o&&u(r,o),t}(),p={type:o.a.AUTO,scale:{mode:o.a.Scale.FIT,autoCenter:o.a.Scale.CENTER_BOTH},width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:[f]};new o.a.Game(p)},531:function(e,t,r){e.exports=r(1449)}});