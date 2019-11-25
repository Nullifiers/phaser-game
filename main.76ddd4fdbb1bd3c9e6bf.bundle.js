!function(t){function e(e){for(var o,i,l=e[0],s=e[1],c=e[2],p=0,h=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);for(u&&u(e);h.length;)h.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},a={0:0},n=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;n.push([531,1]),r()}({1449:function(t,e,r){"use strict";r.r(e);var o=r(117),a=r.n(o),n={width:800,height:600,playerWidth:16,playerHeight:16,playerSpeed:300,playerJumpSpeed:200,platformHeight:16,portalWidth:16,portalHeight:16};var i=function(t){var e=t.add.rectangle(n.width-16,16,16,16,3355443);e.setInteractive(),e.on("pointerup",(function(){t.scale.isFullscreen?t.scale.stopFullscreen():t.scale.startFullscreen()}))};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=c(this,u(e).call(this,"game"))).portals={},t.portalsEnabled=!0,t}var r,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,Phaser.Scene),r=e,(o=[{key:"preload",value:function(){}},{key:"createPlayer",value:function(){this.player=this.add.rectangle(100,550,n.playerWidth,n.playerHeight,16777215),this.player.setOrigin(0,0),this.physics.add.existing(this.player),this.player.body.setCollideWorldBounds(!0)}},{key:"createPlatform",value:function(t,e,r,o){var a=this.add.rectangle(t,e,r,o,16711680);a.setOrigin(0,0),this.physics.add.existing(a),a.body.setImmovable(!0),a.body.allowGravity=!1,this.physics.add.collider(this.player,a)}},{key:"createPlatforms",value:function(){this.createPlatform(0,n.height-n.platformHeight-100,n.width,n.platformHeight),this.createPlatform(0,n.height-n.platformHeight,n.width-n.portalWidth,n.platformHeight),this.createPlatform(n.width-n.portalWidth,n.height-.1,n.portalWidth,n.platformHeight)}},{key:"createPortal",value:function(t,e,r){var o=this.add.rectangle(e,r,n.portalWidth,n.portalHeight,255);o.setOrigin(0,0),this.physics.add.existing(o),o.body.setImmovable(!0),o.body.allowGravity=!1,this.portals[t]=o}},{key:"createPortals",value:function(){this.createPortal("one",n.width-n.portalWidth,n.height-n.portalHeight),this.createPortal("two",10,400)}},{key:"addPortalMapping",value:function(t,e){var r=this;this.physics.add.overlap(this.player,t,(function(){r.portalsEnabled&&(r.portalsEnabled=!1,r.player.body.x=e.body.x,r.player.body.y=e.body.y,r.time.addEvent({delay:1e3,callback:function(){r.portalsEnabled=!0},callbackScope:r}))}))}},{key:"addPortalOverlaps",value:function(){var t=this,e={one:"two",two:"one"};Object.keys(e).forEach((function(r){t.addPortalMapping(t.portals[r],t.portals[e[r]])}))}},{key:"create",value:function(){i(this),this.createPlayer(),this.cursors=this.input.keyboard.createCursorKeys(),this.createPlatforms(),this.createPortals(),this.addPortalOverlaps()}},{key:"update",value:function(){var t=this.player.body;t.setVelocityX(0),this.cursors.left.isDown?t.setVelocityX(-n.playerSpeed):this.cursors.right.isDown&&t.setVelocityX(n.playerSpeed),this.cursors.up.isDown&&t.touching.down&&t.setVelocityY(-n.playerJumpSpeed)}}])&&s(r.prototype,o),a&&s(r,a),e}(),f={type:a.a.AUTO,scale:{mode:a.a.Scale.FIT,autoCenter:a.a.Scale.CENTER_BOTH},width:n.width,height:n.height,physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:[h]};new a.a.Game(f)},531:function(t,e,r){t.exports=r(1449)}});