(()=>{"use strict";var e={425:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Circle=void 0;var i=function(){function e(e,t,i){void 0===i&&(i=0),this.x=e,this.y=t,this.radius=i}return e.zero=new e(0,0),e}();t.Circle=i},944:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0;var r=i(489),n=function(){function e(e,t,i){this.values=new Float32Array(3),this.rgb=[e,t,i]}return Object.defineProperty(e.prototype,"r",{get:function(){return this.values[0]},set:function(e){this.values[0]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"g",{get:function(){return this.values[1]},set:function(e){this.values[1]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"b",{get:function(){return this.values[2]},set:function(e){this.values[2]=Math.floor(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rgb",{get:function(){return[this.r,this.g,this.b]},set:function(e){this.r=e[0],this.g=e[1],this.b=e[2]},enumerable:!1,configurable:!0}),e.prototype.mix=function(t,i){return void 0===i&&(i=.5),new e(r.lerp(this.r,t.r,i),r.lerp(this.g,t.g,i),r.lerp(this.b,t.b,i))},e.prototype.toHex=function(){var e=function(e){return e.toString(16).padStart(2,"0")};return"#"+e(this.r)+e(this.g)+e(this.b)},e.prototype.toString=function(){return"rgb("+this.values.join(", ")+")"},e.fromHex=function(t){return t.startsWith("#")&&(t=t.substr(1)),new e(parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16))},e.fromHsl=function(t,i,r){if(t/=360,r/=100,0==(i/=100))return new e(r,r,r);var n=function(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e},o=function(e){return Math.min(255,256*e)},a=r<.5?r*(1+i):r+i-r*i,s=2*r-a;return new e(o(n(s,a,t+1/3)),o(n(s,a,t)),o(n(s,a,t-1/3)))},e.white=new e(255,255,255),e.black=new e(0,0,0),e}();t.Color=n},298:function(e,t,i){var r,n=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=this&&this.__spreadArray||function(e,t){for(var i=0,r=t.length,n=e.length;i<r;i++,n++)e[n]=t[i];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Gradient=void 0;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.interpolate=function(e,t,i){return e.mix(t,i)},t.solid=function(e){return new t({value:e,time:.5})},t.simple=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var r=1/(e.length-1);return new(t.bind.apply(t,o([void 0],e.map((function(e,t){return{value:e,time:t*r}})))))},t}(i(882).Spline);t.Gradient=a},184:function(e,t,i){var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(425),t),n(i(944),t),n(i(298),t),n(i(341),t),n(i(101),t),n(i(557),t)},341:function(e,t,i){var r,n=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0}),t.NumericSpline=void 0;var o=i(489),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.interpolate=function(e,t,i){return o.slerp(e,t,i)},t}(i(882).Spline);t.NumericSpline=a},101:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Rect=void 0;var i=function(){function e(e,t,i,r){void 0===i&&(i=0),void 0===r&&(r=0),this.x=e,this.y=t,this.width=i,this.height=r}return e.fromScreen=function(){return new e(window.scrollX,window.scrollY,window.innerWidth,window.innerHeight)},e.fromElement=function(t){var i=t.getBoundingClientRect();return new e(window.scrollX+i.x,window.scrollY+i.y,i.width,i.height)},e.zero=new e(0,0),e}();t.Rect=i},882:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Spline=void 0;var r=i(489),n=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Splines require at least one key.");if(Array.isArray(e[0]))throw new Error("You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.");this.keys=e}return e.prototype.evaluate=function(e){if(0===this.keys.length)throw new Error("Attempt to evaluate a spline with no keys.");if(1===this.keys.length)return this.keys[0].value;var t=this.keys.sort((function(e,t){return e.time-t.time})),i=t.findIndex((function(t){return t.time>e}));if(0===i)return t[0].value;if(-1===i)return t[t.length-1].value;var n=t[i-1],o=t[i],a=r.invlerp(n.time,o.time,e);return this.interpolate(n.value,o.value,a)},e}();t.Spline=n},557:function(e,t,i){var r=this&&this.__spreadArray||function(e,t){for(var i=0,r=t.length,n=e.length;i<r;i++,n++)e[n]=t[i];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;var n=i(489),o=function(){function e(e,t,i){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),this.values=new Float32Array(3),this.xyz=[e,t,i]}return Object.defineProperty(e.prototype,"x",{get:function(){return this.values[0]},set:function(e){this.values[0]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.values[1]},set:function(e){this.values[1]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this.values[2]},set:function(e){this.values[2]=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"xyz",{get:function(){return[this.x,this.y,this.z]},set:function(e){this.values[0]=e[0],this.values[1]=e[1],this.values[2]=e[2]},enumerable:!1,configurable:!0}),e.prototype.magnitude=function(){return Math.sqrt(this.sqrMagnitude())},e.prototype.sqrMagnitude=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.scale=function(t){return"number"==typeof t?new e(this.x*t,this.y*t,this.z*t):new e(this.x*t.x,this.y*t.y,this.z*t.z)},e.prototype.normalized=function(){var t=this.magnitude();return 0!==t?this.scale(1/t):new(e.bind.apply(e,r([void 0],this.xyz)))},e.prototype.angle=function(e){return n.rad2deg*Math.acos((this.x*e.x+this.y*e.y+this.z*e.z)/(this.magnitude()*e.magnitude()))},e.prototype.cross=function(t){return new e(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},e.prototype.dot=function(e){return this.magnitude()*e.magnitude()*Math.cos(n.deg2rad*this.angle(e))},e.prototype.toString=function(){return"Vector("+this.values.join(", ")+")"},e.from2dAngle=function(t){return new e(Math.cos(t*n.deg2rad),Math.sin(t*n.deg2rad))},e.zero=new e(0,0,0),e.one=new e(1,1,1),e.right=new e(1,0,0),e.up=new e(0,1,0),e.forward=new e(0,0,1),e}();t.Vector=o},518:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.particleContainer=t.debugContainer=t.rootContainer=void 0;var r=i(171),n=i(191);function o(e){return e&&e.isConnected}function a(e,t,i){var r=document.createElement("div");return r.id="party-js-"+e,Object.assign(r.style,t),i.appendChild(r)}t.rootContainer=new n.Lazy((function(){return a("container",{position:"fixed",left:"0",top:"0",height:"100vh",width:"100vw",pointerEvents:"none",userSelect:"none",zIndex:r.settings.zIndex.toString()},document.body)}),o),t.debugContainer=new n.Lazy((function(){return a("debug",{position:"absolute",top:"0",left:"0",margin:"0.5em",padding:"0.5em 1em",border:"2px solid rgb(0, 0, 0, 0.2)",background:"rgb(0, 0, 0, 0.1)",color:"#555",fontFamily:"monospace"},t.rootContainer.current)}),o),t.particleContainer=new n.Lazy((function(){return a("particles",{width:"100%",height:"100%",overflow:"hidden",perspective:"1200px"},t.rootContainer.current)}),o)},929:function(e,t,i){var r=this&&this.__spreadArray||function(e,t){for(var i=0,r=t.length,n=e.length;i<r;i++,n++)e[n]=t[i];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Debug=void 0;var n=i(518),o=i(171),a=function(){function e(e){this.scene=e,this.refreshRate=8,this.refreshTimer=1/this.refreshRate}return e.prototype.tick=function(e){var t=n.debugContainer.current,i=o.settings.debug?"block":"none";t.style.display!==i&&(t.style.display=i),o.settings.debug&&(this.refreshTimer+=e,this.refreshTimer>1/this.refreshRate&&(this.refreshTimer=0,t.innerHTML=this.getDebugInformation(e).join("<br>")))},e.prototype.getDebugInformation=function(e){var t=this.scene.emitters.length,i=this.scene.emitters.reduce((function(e,t){return e+t.particles.length}),0),n=["<b>party.js Debug</b>","--------------","FPS: "+Math.round(1/e),"Emitters: "+t,"Particles: "+i],o=this.scene.emitters.map((function(e){return["⭯: "+(e.currentLoop+1)+"/"+(e.options.loops>=0?e.options.loops:"∞"),"Σp: "+e.particles.length,e.isExpired?"<i>expired</i>":"Σt: "+e.durationTimer.toFixed(3)+"s"].join(", ")}));return n.push.apply(n,r(["--------------"],o)),n},e}();t.Debug=a},393:function(e,t,i){var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.forceInit=t.util=t.math=t.random=t.sources=t.variation=t.Emitter=t.Particle=t.settings=t.scene=void 0;var o=i(335),a=i(191);n(i(184),t),n(i(560),t),n(i(433),t),n(i(450),t),t.scene=new a.Lazy((function(){if("undefined"==typeof document||"undefined"==typeof window)throw new Error("It seems like you are trying to run party.js in a non-browser-like environment, which is not supported.");return new o.Scene}));var s=i(171);Object.defineProperty(t,"settings",{enumerable:!0,get:function(){return s.settings}});var u=i(60);Object.defineProperty(t,"Particle",{enumerable:!0,get:function(){return u.Particle}});var c=i(737);Object.defineProperty(t,"Emitter",{enumerable:!0,get:function(){return c.Emitter}}),t.variation=i(166),t.sources=i(597),t.random=i(852),t.math=i(489),t.util=i(191),t.forceInit=function(){t.scene.current},t.default=i(393)},737:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Emitter=void 0;var r=i(557),n=i(171),o=i(166),a=i(12),s=i(44),u=i(60),c=function(){function e(e){this.particles=[],this.currentLoop=0,this.durationTimer=0,this.emissionTimer=0,this.attemptedBurstIndices=[],this.options=a.overrideDefaults(s.getDefaultEmitterOptions(),null==e?void 0:e.emitterOptions),this.emission=a.overrideDefaults(s.getDefaultEmissionOptions(),null==e?void 0:e.emissionOptions),this.renderer=a.overrideDefaults(s.getDefaultRendererOptions(),null==e?void 0:e.rendererOptions)}return Object.defineProperty(e.prototype,"isExpired",{get:function(){return this.options.loops>=0&&this.currentLoop>=this.options.loops},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"canRemove",{get:function(){return 0===this.particles.length},enumerable:!1,configurable:!0}),e.prototype.clearParticles=function(){return this.particles.splice(0).length},e.prototype.tick=function(e){if(!this.isExpired&&(this.durationTimer+=e,this.durationTimer>=this.options.duration&&(this.currentLoop++,this.durationTimer=0,this.attemptedBurstIndices=[]),!this.isExpired)){for(var t=0,i=0,r=this.emission.bursts;i<r.length;i++){var n=r[i];if(n.time<=this.durationTimer&&!this.attemptedBurstIndices.includes(t)){for(var a=o.evaluateVariation(n.count),s=0;s<a;s++)this.emitParticle();this.attemptedBurstIndices.push(t)}t++}this.emissionTimer+=e;for(var u=1/this.emission.rate;this.emissionTimer>u;)this.emissionTimer-=u,this.emitParticle()}var c=function(t){var i=l.particles[t];l.tickParticle(i,e),l.options.despawningRules.some((function(e){return e(i)}))&&l.particles.splice(t,1)},l=this;for(s=this.particles.length-1;s>=0;s--)c(s)},e.prototype.tickParticle=function(e,t){e.lifetime-=t,this.options.useGravity&&(e.velocity=e.velocity.add(r.Vector.up.scale(n.settings.gravity*t))),e.location=e.location.add(e.velocity.scale(t));for(var i=0,o=this.options.modules;i<o.length;i++)(0,o[i])(e)},e.prototype.emitParticle=function(){var e=new u.Particle({location:this.emission.sourceSampler(),lifetime:o.evaluateVariation(this.emission.initialLifetime),velocity:r.Vector.from2dAngle(o.evaluateVariation(this.emission.angle)).scale(o.evaluateVariation(this.emission.initialSpeed)),size:o.evaluateVariation(this.emission.initialSize),rotation:o.evaluateVariation(this.emission.initialRotation),color:o.evaluateVariation(this.emission.initialColor)});return this.particles.push(e),this.particles.length>this.options.maxParticles&&this.particles.shift(),e},e}();t.Emitter=c},94:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultEmissionOptions=void 0;var r=i(184),n=i(597);t.getDefaultEmissionOptions=function(){return{rate:10,angle:0,bursts:[],sourceSampler:n.rectSource(r.Rect.zero),initialLifetime:5,initialSpeed:5,initialSize:1,initialRotation:r.Vector.zero,initialColor:r.Color.white}}},188:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultEmitterOptions=void 0;var r=i(866);t.getDefaultEmitterOptions=function(){return{duration:5,loops:1,useGravity:!0,maxParticles:300,despawningRules:[r.despawningRules.lifetime,r.despawningRules.bounds],modules:[]}}},44:function(e,t,i){var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(188),t),n(i(94),t),n(i(837),t)},837:(e,t)=>{function i(e,t){var i=e.toHex();switch(t.nodeName.toLowerCase()){case"div":t.style.background=i;break;case"svg":t.style.fill=t.style.color=i;break;default:t.style.color=i}}function r(e,t){t.style.opacity=e.toString()}function n(e,t){t.style.filter="brightness("+(.5+Math.abs(e))+")"}function o(e,t){t.style.transform="translateX("+(e.location.x-window.scrollX).toFixed(3)+"px) translateY("+(e.location.y-window.scrollY).toFixed(3)+"px) translateZ("+e.location.z.toFixed(3)+"px) rotateX("+e.rotation.x.toFixed(3)+"deg) rotateY("+e.rotation.y.toFixed(3)+"deg) rotateZ("+e.rotation.z.toFixed(3)+"deg) scale("+e.size.toFixed(3)+")"}Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultRendererOptions=void 0,t.getDefaultRendererOptions=function(){return{shapeFactory:"square",applyColor:i,applyOpacity:r,applyLighting:n,applyTransform:o}}},60:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Particle=void 0;var r=i(184),n=i(12);t.Particle=function(e){var t=n.overrideDefaults({lifetime:0,size:1,location:r.Vector.zero,rotation:r.Vector.zero,velocity:r.Vector.zero,color:r.Color.white,opacity:1},e);this.id=Symbol(),this.size=this.initialSize=t.size,this.lifetime=this.initialLifetime=t.lifetime,this.rotation=this.initialRotation=t.rotation,this.location=t.location,this.velocity=t.velocity,this.color=t.color,this.opacity=t.opacity}},577:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Renderer=void 0;var r=i(393),n=i(557),o=i(518),a=i(433),s=i(191),u=function(){function e(){this.elements=new Map,this.light=new n.Vector(0,0,1),this.enabled=!0,this.enabled=!r.settings.respectReducedMotion||!window.matchMedia("(prefers-reduced-motion)").matches}return e.prototype.begin=function(){this.renderedParticles=[]},e.prototype.end=function(){for(var e=this.elements.keys(),t=e.next();!t.done;){var i=t.value;this.renderedParticles.includes(i)||(this.elements.get(i).remove(),this.elements.delete(i)),t=e.next()}return this.renderedParticles.length},e.prototype.renderParticle=function(e,t){if(this.enabled){var i=t.renderer,r=this.elements.has(e.id)?this.elements.get(e.id):this.createParticleElement(e,i);if(i.applyColor&&i.applyColor(e.color,r),i.applyOpacity&&i.applyOpacity(e.opacity,r),i.applyLighting){var n=s.rotationToNormal(e.rotation).dot(this.light);i.applyLighting(n,r)}i.applyTransform&&i.applyTransform(e,r),this.renderedParticles.push(e.id)}},e.prototype.createParticleElement=function(e,t){var i=a.resolveShapeFactory(t.shapeFactory).cloneNode(!0);return i.style.position="absolute",this.elements.set(e.id,o.particleContainer.current.appendChild(i)),i},e}();t.Renderer=u},335:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Scene=void 0;var r=i(929),n=i(737),o=i(577),a=function(){function e(){this.emitters=[],this.debug=new r.Debug(this),this.renderer=new o.Renderer,this.scheduledTickId=void 0,this.lastTickTimestamp=performance.now(),this.tick=this.tick.bind(this),this.scheduleTick()}return e.prototype.createEmitter=function(e){var t=new n.Emitter(e);return this.emitters.push(t),t},e.prototype.clearEmitters=function(){return this.emitters.splice(0).length},e.prototype.clearParticles=function(){return this.emitters.reduce((function(e,t){return e+t.clearParticles()}),0)},e.prototype.scheduleTick=function(){this.scheduledTickId=window.requestAnimationFrame(this.tick)},e.prototype.cancelTick=function(){window.cancelAnimationFrame(this.scheduledTickId)},e.prototype.tick=function(e){var t=(e-this.lastTickTimestamp)/1e3;try{for(var i=0;i<this.emitters.length;i++)(o=this.emitters[i]).tick(t),o.isExpired&&o.canRemove&&this.emitters.splice(i--,1)}catch(e){console.error("An error occurred while updating the scene's emitters:\n\""+e+'"')}try{this.renderer.begin();for(var r=0,n=this.emitters;r<n.length;r++)for(var o=n[r],a=0,s=o.particles;a<s.length;a++){var u=s[a];this.renderer.renderParticle(u,o)}this.renderer.end()}catch(e){console.error("An error occurred while rendering the scene's particles:\n\""+e+'"')}this.debug.tick(t),this.lastTickTimestamp=e,this.scheduleTick()},e}();t.Scene=a},171:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.settings=void 0,t.settings={debug:!1,gravity:800,zIndex:99999,respectReducedMotion:!0}},489:(e,t)=>{function i(e,t,i){return(1-i)*e+i*t}Object.defineProperty(t,"__esModule",{value:!0}),t.approximately=t.clamp=t.invlerp=t.slerp=t.lerp=t.epsilon=t.rad2deg=t.deg2rad=void 0,t.deg2rad=Math.PI/180,t.rad2deg=180/Math.PI,t.epsilon=1e-6,t.lerp=i,t.slerp=function(e,t,r){return i(e,t,(1-Math.cos(r*Math.PI))/2)},t.invlerp=function(e,t,i){return(i-e)/(t-e)},t.clamp=function(e,t,i){return Math.min(i,Math.max(t,e))},t.approximately=function(e,i){return Math.abs(e-i)<t.epsilon}},450:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleBuilder=void 0;var r=i(184),n=function(){function e(){this.factor="lifetime",this.isRelative=!1}return e.prototype.drive=function(e){return this.driverKey=e,this},e.prototype.through=function(e){return this.factor=e,this},e.prototype.by=function(e){return this.driverValue=e,this},e.prototype.relative=function(e){return void 0===e&&(e=!0),this.isRelative=e,this},e.prototype.build=function(){var e=this;if(void 0===this.driverKey)throw new Error("No driving key was provided in the module builder. Did you forget a '.drive()' call?");if(void 0===this.driverValue)throw new Error("No driving value was provided in the module builder. Did you forget a '.through()' call?");return function(t){o(t,e.driverKey,function(e,t,i){return"object"==typeof e&&"evaluate"in e?e.evaluate(t):"function"==typeof e?e(t,i):e}(e.driverValue,function(e,t){switch(e){case"lifetime":return t.initialLifetime-t.lifetime;case"relativeLifetime":return(t.initialLifetime-t.lifetime)/t.initialLifetime;case"size":return t.size;default:throw new Error("Invalid driving factor '"+e+"'.")}}(e.factor,t),t),e.isRelative)}},e}();function o(e,t,i,n){if(void 0===n&&(n=!1),n){var a=e["initial"+t[0].toUpperCase()+t.substr(1)];if(void 0===a)throw new Error("Unable to use relative chaining with key '"+t+"'; no initial value exists.");if(i instanceof r.Vector)o(e,t,a.add(i));else{if("number"!=typeof i)throw new Error("Unable to use relative chaining with particle key '"+t+"'; no relative operation for '"+i+"' could be inferred.");o(e,t,a*i)}}else e[t]=i}t.ModuleBuilder=n},852:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomInsideCircle=t.randomInsideRect=t.randomUnitVector=t.pick=t.randomRange=void 0;var r=i(184),n=i(489);function o(e,t){return void 0===e&&(e=0),void 0===t&&(t=1),n.lerp(e,t,Math.random())}t.randomRange=o,t.pick=function(e){return 0===e.length?void 0:e[Math.floor(Math.random()*e.length)]},t.randomUnitVector=function(){var e=o(0,2*Math.PI),t=o(-1,1);return new r.Vector(Math.sqrt(1-t*t)*Math.cos(e),Math.sqrt(1-t*t)*Math.sin(e),t)},t.randomInsideRect=function(e){return new r.Vector(e.x+o(0,e.width),e.y+o(0,e.height))},t.randomInsideCircle=function(e){var t=o(0,2*Math.PI),i=o(0,e.radius);return new r.Vector(e.x+Math.cos(t)*i,e.y+Math.sin(t)*i)}},433:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resolveShapeFactory=t.resolvableShapes=void 0;var r=i(166);t.resolvableShapes={square:'<div style="height: 10px; width: 10px;"></div>',rectangle:'<div style="height: 6px; width: 10px;"></div>',circle:'<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1" fill="currentColor"/></svg>',roundedSquare:'<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',roundedRectangle:'<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',star:'<svg viewBox="0 0 512 512" width="15" height="15"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>'},t.resolveShapeFactory=function(e){var i=r.evaluateVariation(e);if("string"==typeof i){var n=t.resolvableShapes[i];if(!n)throw new Error("Failed to resolve shape key '"+i+"'. Did you forget to add it to the 'resolvableShapes' lookup?");var o=document.createElement("div");return o.innerHTML=n,o.firstElementChild}return i}},597:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.circleSource=t.rectSource=t.mouseSource=t.elementSource=t.dynamicSource=void 0;var r=i(184),n=i(852);function o(e){return function(){return n.randomInsideRect(r.Rect.fromElement(e))}}function a(e){return function(){return new r.Vector(window.scrollX+e.clientX,window.scrollY+e.clientY)}}function s(e){return function(){return n.randomInsideRect(e)}}function u(e){return function(){return n.randomInsideCircle(e)}}t.dynamicSource=function(e){if(e instanceof HTMLElement)return o(e);if(e instanceof r.Circle)return u(e);if(e instanceof r.Rect)return s(e);if(e instanceof MouseEvent)return a(e);throw new Error("Cannot infer the source type of '"+e+"'.")},t.elementSource=o,t.mouseSource=a,t.rectSource=s,t.circleSource=u},166:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gradientSample=t.splineSample=t.skewRelative=t.skew=t.range=t.evaluateVariation=void 0;var r=i(852);function n(e){return function(){return e.evaluate(Math.random())}}t.evaluateVariation=function(e){return Array.isArray(e)?r.pick(e):"function"==typeof e?e():e},t.range=function(e,t){return function(){return r.randomRange(e,t)}},t.skew=function(e,t){return function(){return e+r.randomRange(-t,t)}},t.skewRelative=function(e,t){return function(){return e*(1+r.randomRange(-t,t))}},t.splineSample=n,t.gradientSample=function(e){return n(e)}},874:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.confetti=void 0;var r=i(393),n=i(184),o=i(450),a=i(852),s=i(597),u=i(166),c=i(191);t.confetti=function(e,t){var i=c.overrideDefaults({count:u.range(20,40),spread:u.range(35,45),speed:u.range(300,600),size:u.skew(1,.2),rotation:function(){return a.randomUnitVector().scale(180)},color:function(){return n.Color.fromHsl(a.randomRange(0,360),100,70)},modules:[(new o.ModuleBuilder).drive("size").by((function(e){return Math.min(1,3*e)})).relative().build(),(new o.ModuleBuilder).drive("rotation").by((function(e){return new n.Vector(140,200,260).scale(e)})).relative().build()],shapes:["square","circle"]},t);return r.scene.current.createEmitter({emitterOptions:{loops:1,duration:8,modules:i.modules},emissionOptions:{rate:0,bursts:[{time:0,count:i.count}],sourceSampler:s.dynamicSource(e),angle:u.skew(-90,u.evaluateVariation(i.spread)),initialLifetime:8,initialSpeed:i.speed,initialSize:i.size,initialRotation:i.rotation,initialColor:i.color},rendererOptions:{shapeFactory:i.shapes}})}},560:function(e,t,i){var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(874),t),n(i(614),t)},614:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sparkles=void 0;var r=i(393),n=i(184),o=i(450),a=i(852),s=i(597),u=i(166),c=i(191);t.sparkles=function(e,t){var i=c.overrideDefaults({lifetime:u.range(1,2),count:u.range(10,20),speed:u.range(100,200),size:u.range(.8,1.8),rotation:function(){return new n.Vector(0,0,a.randomRange(0,360))},color:function(){return n.Color.fromHsl(50,100,a.randomRange(55,85))},modules:[(new o.ModuleBuilder).drive("rotation").by((function(e){return new n.Vector(0,0,200).scale(e)})).relative().build(),(new o.ModuleBuilder).drive("size").by(new n.NumericSpline({time:0,value:0},{time:.3,value:1},{time:.7,value:1},{time:1,value:0})).through("relativeLifetime").relative().build(),(new o.ModuleBuilder).drive("opacity").by(new n.NumericSpline({time:0,value:1},{time:.5,value:1},{time:1,value:0})).through("relativeLifetime").build()],shapes:"star"},t);return r.scene.current.createEmitter({emitterOptions:{loops:1,duration:3,useGravity:!1,modules:i.modules},emissionOptions:{rate:0,bursts:[{time:0,count:i.count}],sourceSampler:s.dynamicSource(e),angle:u.range(0,360),initialLifetime:i.lifetime,initialSpeed:i.speed,initialSize:i.size,initialRotation:i.rotation,initialColor:i.color},rendererOptions:{applyLighting:void 0,shapeFactory:i.shapes}})}},12:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.overrideDefaults=void 0,t.overrideDefaults=function(e,t){return Object.assign({},e,t)}},191:function(e,t,i){var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(12),t),n(i(956),t),n(i(866),t),n(i(362),t)},362:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Lazy=void 0;var i=function(){function e(t,i){void 0===i&&(i=e.defaultExists),this.factory=t,this.exists=i}return Object.defineProperty(e.prototype,"current",{get:function(){return this.exists(this.value)||(this.value=this.factory()),this.value},enumerable:!1,configurable:!0}),e.defaultExists=function(e){return void 0!==e},e}();t.Lazy=i},956:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rotationToNormal=void 0;var r=i(184),n=i(489);t.rotationToNormal=function(e){var t=e.x*n.deg2rad,i=e.y*n.deg2rad,o=new r.Vector(Math.cos(i),0,Math.sin(i)),a=new r.Vector(0,Math.cos(t),Math.sin(t));return o.cross(a)}},866:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.despawningRules=void 0,t.despawningRules={lifetime:function(e){return e.lifetime<=0},bounds:function(e){var t=document.documentElement.scrollHeight;return e.location.y>t}}}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=i(393),t=i.n(e);const r=document.querySelector("#expand-menu"),n=document.querySelector("#collapse-menu"),o=document.querySelector("aside"),a=document.querySelector("#dashboardContainer"),s=document.querySelector("article"),u=document.querySelectorAll(".individual-task");function c(){o.classList.remove("expand"),a.removeEventListener("click",c),s.classList.remove("darken")}r.addEventListener("click",(function(){o.classList.add("expand"),a.addEventListener("click",c),s.classList.add("darken")})),u.forEach((e=>e.addEventListener("click",(function(e){!function(e,i){"INPUT"!==i.tagName&&"LABEL"!==i.tagName&&e.classList.add("expanded-task"),"INPUT"!==i.tagName&&"LABEL"!==i.tagName||(e.classList.add("animateCompletion"),t().confetti(i,{count:t().variation.range(25,50),speed:t().variation.range(350,600)}),setTimeout((function(){e.remove()}),2e3))}(this,e.target)})))),n.addEventListener("click",c),document.querySelector("img.user-avatar").src="pics/avatar.jpeg"})()})();