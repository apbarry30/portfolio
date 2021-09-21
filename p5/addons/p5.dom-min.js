/*! p5.dom.js v0.4.0 August 9, 2018 */
!function(t,e){"function"==typeof define&&define.amd?define("p5.dom",["p5"],(function(t){e(t)})):"object"==typeof exports?e(require("../p5")):e(t.p5)}(this,(function(t){function e(e){var i=document;return"string"==typeof e&&"#"===e[0]?(e=e.slice(1),i=document.getElementById(e)||document):e instanceof t.Element?i=e.elt:e instanceof HTMLElement&&(i=e),i}function i(e,i,n){(i._userNode?i._userNode:document.body).appendChild(e);var r=n?new t.MediaElement(e,i):new t.Element(e,i);return i._elements.push(r),r}t.prototype.select=function(i,n){t._validateParameters("select",arguments);var r=null,o=e(n);return"."===i[0]?(i=i.slice(1),r=(r=o.getElementsByClassName(i)).length?r[0]:null):"#"===i[0]?(i=i.slice(1),r=o.getElementById(i)):r=(r=o.getElementsByTagName(i)).length?r[0]:null,r?this._wrapElement(r):null},t.prototype.selectAll=function(i,n){t._validateParameters("selectAll",arguments);var r,o=[],s=e(n);if("."===i[0]?(i=i.slice(1),r=s.getElementsByClassName(i)):r=s.getElementsByTagName(i),r)for(var a=0;a<r.length;a++){var l=this._wrapElement(r[a]);o.push(l)}return o},t.prototype._wrapElement=function(e){var i=Array.prototype.slice.call(e.children);if("INPUT"===e.tagName&&"checkbox"===e.type){var n=new t.Element(e,this);return n.checked=function(){return 0===arguments.length?this.elt.checked:(arguments[0]?this.elt.checked=!0:this.elt.checked=!1,this)},n}return"VIDEO"===e.tagName||"AUDIO"===e.tagName?new t.MediaElement(e,this):"SELECT"===e.tagName?this.createSelect(new t.Element(e,this)):i.length>0&&i.every((function(t){return"INPUT"===t.tagName||"LABEL"===t.tagName}))?this.createRadio(new t.Element(e,this)):new t.Element(e,this)},t.prototype.removeElements=function(e){t._validateParameters("removeElements",arguments);for(var i=0;i<this._elements.length;i++)this._elements[i].elt instanceof HTMLCanvasElement||this._elements[i].remove()};function n(t,e,n,r){var o=document.createElement(e);"string"==typeof(n=n||"")&&(n=[n]);for(var s=0;s<n.length;s++){var a=document.createElement("source");a.src=n[s],o.appendChild(a)}if(void 0!==r){var l=function(){r(),o.removeEventListener("canplaythrough",l)};o.addEventListener("canplaythrough",l)}var h=i(o,t,!0);return h.loadedmetadata=!1,o.addEventListener("loadedmetadata",(function(){h.width=o.videoWidth,h.height=o.videoHeight,0===h.elt.width&&(h.elt.width=o.videoWidth),0===h.elt.height&&(h.elt.height=o.videoHeight),h.presetPlaybackRate&&(h.elt.playbackRate=h.presetPlaybackRate,delete h.presetPlaybackRate),h.loadedmetadata=!0})),h}["div","p","span"].forEach((function(e){var n="create"+e.charAt(0).toUpperCase()+e.slice(1);t.prototype[n]=function(t){var n=document.createElement(e);return n.innerHTML=void 0===t?"":t,i(n,this)}})),t.prototype.createImg=function(){t._validateParameters("createImg",arguments);var e,n=document.createElement("img"),r=arguments,o=function(){e.width=n.offsetWidth||n.width,e.height=n.offsetHeight||n.height,r.length>1&&"function"==typeof r[1]?(e.fn=r[1],e.fn()):r.length>1&&"function"==typeof r[2]&&(e.fn=r[2],e.fn())};return n.src=r[0],r.length>1&&"string"==typeof r[1]&&(n.alt=r[1]),n.onload=function(){o()},e=i(n,this)},t.prototype.createA=function(e,n,r){t._validateParameters("createA",arguments);var o=document.createElement("a");return o.href=e,o.innerHTML=n,r&&(o.target=r),i(o,this)},t.prototype.createSlider=function(e,n,r,o){t._validateParameters("createSlider",arguments);var s=document.createElement("input");return s.type="range",s.min=e,s.max=n,0===o?s.step=1e-18:o&&(s.step=o),"number"==typeof r&&(s.value=r),i(s,this)},t.prototype.createButton=function(e,n){t._validateParameters("createButton",arguments);var r=document.createElement("button");return r.innerHTML=e,n&&(r.value=n),i(r,this)},t.prototype.createCheckbox=function(){t._validateParameters("createCheckbox",arguments);var e=document.createElement("div"),n=document.createElement("input");n.type="checkbox",e.appendChild(n);var r=i(e,this);if(r.checked=function(){var t=r.elt.getElementsByTagName("input")[0];if(t){if(0===arguments.length)return t.checked;arguments[0]?t.checked=!0:t.checked=!1}return r},this.value=function(t){return r.value=t,this},arguments[0]){var o=Math.random().toString(36).slice(2),s=document.createElement("label");n.setAttribute("id",o),s.htmlFor=o,r.value(arguments[0]),s.appendChild(document.createTextNode(arguments[0])),e.appendChild(s)}return arguments[1]&&(n.checked=!0),r},t.prototype.createSelect=function(){var e,n;t._validateParameters("createSelect",arguments);var r=arguments[0];return"object"==typeof r&&"SELECT"===r.elt.nodeName?(n=r,e=this.elt=r.elt):(e=document.createElement("select"),r&&"boolean"==typeof r&&e.setAttribute("multiple","true"),n=i(e,this)),n.option=function(t,i){for(var n,r=0;r<this.elt.length;r++)if(this.elt[r].innerHTML===t){n=r;break}if(void 0!==n)!1===i?this.elt.remove(n):this.elt[n].innerHTML===this.elt[n].value?this.elt[n].innerHTML=this.elt[n].value=i:this.elt[n].value=i;else{var o=document.createElement("option");o.innerHTML=t,arguments.length>1?o.value=i:o.value=t,e.appendChild(o)}},n.selected=function(t){var e,i=[];if(arguments.length>0){for(e=0;e<this.elt.length;e++)t.toString()===this.elt[e].value&&(this.elt.selectedIndex=e);return this}if(this.elt.getAttribute("multiple")){for(e=0;e<this.elt.selectedOptions.length;e++)i.push(this.elt.selectedOptions[e].value);return i}return this.elt.value},n},t.prototype.createRadio=function(e){t._validateParameters("createRadio",arguments);var n,r,o=document.querySelectorAll("input[type=radio]"),s=0;if(o.length>1){var a=o.length,l=o[0].name,h=o[1].name;s=1;for(var d=1;d<a;d++)l!==(h=o[d].name)&&s++,l=h}else 1===o.length&&(s=1);"object"==typeof e?(r=e,n=this.elt=e.elt):(n=document.createElement("div"),r=i(n,this)),r._getInputChildrenArray=function(){return Array.prototype.slice.call(this.elt.children).filter((function(t){return"INPUT"===t.tagName}))};var c=-1;return r.option=function(t,e){var i=document.createElement("input");if(i.type="radio",i.innerHTML=t,i.value=e||t,i.setAttribute("name","defaultradio"+s),n.appendChild(i),t){c++;var r=document.createElement("label");i.setAttribute("id","defaultradio"+s+"-"+c),r.htmlFor="defaultradio"+s+"-"+c,r.appendChild(document.createTextNode(t)),n.appendChild(r)}return i},r.selected=function(t){var e,i=r._getInputChildrenArray();if(t){for(e=0;e<i.length;e++)i[e].value===t&&(i[e].checked=!0);return this}for(e=0;e<i.length;e++)if(!0===i[e].checked)return i[e].value},r.value=function(t){var e,i=r._getInputChildrenArray();if(t){for(e=0;e<i.length;e++)i[e].value===t&&(i[e].checked=!0);return this}for(e=0;e<i.length;e++)if(!0===i[e].checked)return i[e].value;return""},r},t.prototype.createColorPicker=function(e){t._validateParameters("createColorPicker",arguments);var n,r=document.createElement("input");return r.type="color",e?e instanceof t.Color?r.value=e.toString("#rrggbb"):(t.prototype._colorMode="rgb",t.prototype._colorMaxes={rgb:[255,255,255,255],hsb:[360,100,100,1],hsl:[360,100,100,1]},r.value=t.prototype.color(e).toString("#rrggbb")):r.value="#000000",(n=i(r,this)).color=function(){return e.mode&&(t.prototype._colorMode=e.mode),e.maxes&&(t.prototype._colorMaxes=e.maxes),t.prototype.color(this.elt.value)},n},t.prototype.createInput=function(e,n){t._validateParameters("createInput",arguments);var r=document.createElement("input");return r.type=n||"text",e&&(r.value=e),i(r,this)},t.prototype.createFileInput=function(e,n){function r(i){function n(i){var n=new t.File(i);return function(t){n.data=t.target.result,e(n)}}for(var r=i.target.files,o=0;o<r.length;o++){var s=r[o],a=new FileReader;a.onload=n(s),s.type.indexOf("text")>-1?a.readAsText(s):a.readAsDataURL(s)}}if(t._validateParameters("createFileInput",arguments),window.File&&window.FileReader&&window.FileList&&window.Blob){var o=document.createElement("input");return o.type="file",n&&(o.multiple="multiple"),o.addEventListener("change",r,!1),i(o,this)}console.log("The File APIs are not fully supported in this browser. Cannot create element.")},t.prototype.createVideo=function(e,i){return t._validateParameters("createVideo",arguments),n(this,"video",e,i)},t.prototype.createAudio=function(e,i){return t._validateParameters("createAudio",arguments),n(this,"audio",e,i)},t.prototype.VIDEO="video",t.prototype.AUDIO="audio",void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(t){var e=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return e?new Promise((function(i,n){e.call(navigator,t,i,n)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),t.prototype.createCapture=function(){t._validateParameters("createCapture",arguments);for(var e,n,r=!0,o=!0,s=0;s<arguments.length;s++)arguments[s]===t.prototype.VIDEO?o=!1:arguments[s]===t.prototype.AUDIO?r=!1:"object"==typeof arguments[s]?e=arguments[s]:"function"==typeof arguments[s]&&(n=arguments[s]);if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw"getUserMedia not supported in this browser";var a=document.createElement("video");a.setAttribute("playsinline",""),e||(e={video:r,audio:o}),navigator.mediaDevices.getUserMedia(e).then((function(t){try{"srcObject"in a?a.srcObject=t:a.src=window.URL.createObjectURL(t)}catch(e){a.src=t}n&&n(t)}),(function(t){console.log(t)}));var l=i(a,this,!0);return l.loadedmetadata=!1,a.addEventListener("loadedmetadata",(function(){a.play(),a.width?(l.width=a.videoWidth=a.width,l.height=a.videoHeight=a.height):(l.width=l.elt.width=a.videoWidth,l.height=l.elt.height=a.videoHeight),l.loadedmetadata=!0})),l},t.prototype.createElement=function(e,n){t._validateParameters("createElement",arguments);var r=document.createElement(e);return void 0!==n&&(r.innerHTML=n),i(r,this)},t.Element.prototype.addClass=function(t){return this.elt.className?this.elt.className=this.elt.className+" "+t:this.elt.className=t,this},t.Element.prototype.removeClass=function(t){var e=new RegExp("(?:^|\\s)"+t+"(?!\\S)");return this.elt.className=this.elt.className.replace(e,""),this.elt.className=this.elt.className.replace(/^\s+|\s+$/g,""),this},t.Element.prototype.child=function(e){return void 0===e?this.elt.childNodes:("string"==typeof e?("#"===e[0]&&(e=e.substring(1)),e=document.getElementById(e)):e instanceof t.Element&&(e=e.elt),this.elt.appendChild(e),this)},t.Element.prototype.center=function(t){var e=this.elt.style.display,i="none"===this.elt.style.display,n="none"===this.parent().style.display,r={x:this.elt.offsetLeft,y:this.elt.offsetTop};i&&this.show(),this.elt.style.display="block",this.position(0,0),n&&(this.parent().style.display="block");var o=Math.abs(this.parent().offsetWidth-this.elt.offsetWidth),s=Math.abs(this.parent().offsetHeight-this.elt.offsetHeight),a=r.y,l=r.x;return"both"===t||void 0===t?this.position(o/2,s/2):"horizontal"===t?this.position(o/2,a):"vertical"===t&&this.position(l,s/2),this.style("display",e),i&&this.hide(),n&&(this.parent().style.display="none"),this},t.Element.prototype.html=function(){return 0===arguments.length?this.elt.innerHTML:arguments[1]?(this.elt.innerHTML+=arguments[0],this):(this.elt.innerHTML=arguments[0],this)},t.Element.prototype.position=function(){return 0===arguments.length?{x:this.elt.offsetLeft,y:this.elt.offsetTop}:(this.elt.style.position="absolute",this.elt.style.left=arguments[0]+"px",this.elt.style.top=arguments[1]+"px",this.x=arguments[0],this.y=arguments[1],this)},t.Element.prototype._translate=function(){this.elt.style.position="absolute";var t="";return this.elt.style.transform&&(t=(t=this.elt.style.transform.replace(/translate3d\(.*\)/g,"")).replace(/translate[X-Z]?\(.*\)/g,"")),2===arguments.length?this.elt.style.transform="translate("+arguments[0]+"px, "+arguments[1]+"px)":arguments.length>2&&(this.elt.style.transform="translate3d("+arguments[0]+"px,"+arguments[1]+"px,"+arguments[2]+"px)",3===arguments.length?this.elt.parentElement.style.perspective="1000px":this.elt.parentElement.style.perspective=arguments[3]+"px"),this.elt.style.transform+=t,this},t.Element.prototype._rotate=function(){var t="";return this.elt.style.transform&&(t=(t=this.elt.style.transform.replace(/rotate3d\(.*\)/g,"")).replace(/rotate[X-Z]?\(.*\)/g,"")),1===arguments.length?this.elt.style.transform="rotate("+arguments[0]+"deg)":2===arguments.length?this.elt.style.transform="rotate("+arguments[0]+"deg, "+arguments[1]+"deg)":3===arguments.length&&(this.elt.style.transform="rotateX("+arguments[0]+"deg)",this.elt.style.transform+="rotateY("+arguments[1]+"deg)",this.elt.style.transform+="rotateZ("+arguments[2]+"deg)"),this.elt.style.transform+=t,this},t.Element.prototype.style=function(e,i){var n=this;if(i instanceof t.Color&&(i="rgba("+i.levels[0]+","+i.levels[1]+","+i.levels[2]+","+i.levels[3]/255+")"),void 0===i){if(-1===e.indexOf(":")){var r=window.getComputedStyle(n.elt),o=r.getPropertyValue(e);return o}for(var s=e.split(";"),a=0;a<s.length;a++){var l=s[a].split(":");l[0]&&l[1]&&(this.elt.style[l[0].trim()]=l[1].trim())}}else if("rotate"===e||"translate"===e||"position"===e){var h=Array.prototype.shift.apply(arguments),d=this[h]||this["_"+h];d.apply(this,arguments)}else if(this.elt.style[e]=i,"width"===e||"height"===e||"left"===e||"top"===e){var c=i.replace(/\D+/g,"");this[e]=parseInt(c,10)}return this},t.Element.prototype.attribute=function(t,e){if(null==this.elt.firstChild||"checkbox"!==this.elt.firstChild.type&&"radio"!==this.elt.firstChild.type)return void 0===e?this.elt.getAttribute(t):(this.elt.setAttribute(t,e),this);if(void 0===e)return this.elt.firstChild.getAttribute(t);for(var i=0;i<this.elt.childNodes.length;i++)this.elt.childNodes[i].setAttribute(t,e)},t.Element.prototype.removeAttribute=function(t){if(null!=this.elt.firstChild&&("checkbox"===this.elt.firstChild.type||"radio"===this.elt.firstChild.type))for(var e=0;e<this.elt.childNodes.length;e++)this.elt.childNodes[e].removeAttribute(t);return this.elt.removeAttribute(t),this},t.Element.prototype.value=function(){return arguments.length>0?(this.elt.value=arguments[0],this):"range"===this.elt.type?parseFloat(this.elt.value):this.elt.value},t.Element.prototype.show=function(){return this.elt.style.display="block",this},t.Element.prototype.hide=function(){return this.elt.style.display="none",this},t.Element.prototype.size=function(e,i){if(0===arguments.length)return{width:this.elt.offsetWidth,height:this.elt.offsetHeight};var n=e,r=i,o=t.prototype.AUTO;if(n!==o||r!==o){if(n===o?n=i*this.width/this.height:r===o&&(r=e*this.height/this.width),this.elt instanceof HTMLCanvasElement){var s,a={},l=this.elt.getContext("2d");for(s in l)a[s]=l[s];for(s in this.elt.setAttribute("width",n*this._pInst._pixelDensity),this.elt.setAttribute("height",r*this._pInst._pixelDensity),this.elt.setAttribute("style","width:"+n+"px; height:"+r+"px"),this._pInst.scale(this._pInst._pixelDensity,this._pInst._pixelDensity),a)this.elt.getContext("2d")[s]=a[s]}else this.elt.style.width=n+"px",this.elt.style.height=r+"px",this.elt.width=n,this.elt.height=r,this.width=n,this.height=r;this.width=this.elt.offsetWidth,this.height=this.elt.offsetHeight,this._pInst&&this._pInst._curElement&&this._pInst._curElement.elt===this.elt&&(this._pInst._setProperty("width",this.elt.offsetWidth),this._pInst._setProperty("height",this.elt.offsetHeight))}return this},t.Element.prototype.remove=function(){for(var t in this._events)this.elt.removeEventListener(t,this._events[t]);this.elt.parentNode&&this.elt.parentNode.removeChild(this.elt)},t.MediaElement=function(e,i){t.Element.call(this,e,i);var n=this;this.elt.crossOrigin="anonymous",this._prevTime=0,this._cueIDCounter=0,this._cues=[],this._pixelDensity=1,this._modified=!1,this._pixelsDirty=!0,this._pixelsTime=-1,Object.defineProperty(n,"src",{get:function(){var t=n.elt.children[0].src,e=n.elt.src===window.location.href?"":n.elt.src;return t===window.location.href?e:t},set:function(t){for(var i=0;i<n.elt.children.length;i++)n.elt.removeChild(n.elt.children[i]);var r=document.createElement("source");r.src=t,e.appendChild(r),n.elt.src=t,n.modified=!0}}),n._onended=function(){},n.elt.onended=function(){n._onended(n)}},t.MediaElement.prototype=Object.create(t.Element.prototype),t.MediaElement.prototype.play=function(){var t;return this.elt.currentTime===this.elt.duration&&(this.elt.currentTime=0),this.elt.readyState>1||this.elt.load(),(t=this.elt.play())&&t.catch&&t.catch((function(t){console.log("WARN: Element play method raised an error asynchronously",t)})),this},t.MediaElement.prototype.stop=function(){return this.elt.pause(),this.elt.currentTime=0,this},t.MediaElement.prototype.pause=function(){return this.elt.pause(),this},t.MediaElement.prototype.loop=function(){return this.elt.setAttribute("loop",!0),this.play(),this},t.MediaElement.prototype.noLoop=function(){return this.elt.setAttribute("loop",!1),this},t.MediaElement.prototype.autoplay=function(t){return this.elt.setAttribute("autoplay",t),this},t.MediaElement.prototype.volume=function(t){if(void 0===t)return this.elt.volume;this.elt.volume=t},t.MediaElement.prototype.speed=function(t){if(void 0===t)return this.presetPlaybackRate||this.elt.playbackRate;this.loadedmetadata?this.elt.playbackRate=t:this.presetPlaybackRate=t},t.MediaElement.prototype.time=function(t){return void 0===t?this.elt.currentTime:(this.elt.currentTime=t,this)},t.MediaElement.prototype.duration=function(){return this.elt.duration},t.MediaElement.prototype.pixels=[],t.MediaElement.prototype._ensureCanvas=function(){this.canvas||this.loadPixels()},t.MediaElement.prototype.loadPixels=function(){if(this.canvas||(this.canvas=document.createElement("canvas"),this.drawingContext=this.canvas.getContext("2d")),this.loadedmetadata){this.canvas.width!==this.elt.width&&(this.canvas.width=this.elt.width,this.canvas.height=this.elt.height,this.width=this.canvas.width,this.height=this.canvas.height,this._pixelsDirty=!0);var e=this.elt.currentTime;(this._pixelsDirty||this._pixelsTime!==e)&&(this._pixelsTime=e,this._pixelsDirty=!0,this.drawingContext.drawImage(this.elt,0,0,this.canvas.width,this.canvas.height),t.Renderer2D.prototype.loadPixels.call(this))}return this.setModified(!0),this},t.MediaElement.prototype.updatePixels=function(e,i,n,r){return this.loadedmetadata&&(this._ensureCanvas(),t.Renderer2D.prototype.updatePixels.call(this,e,i,n,r)),this.setModified(!0),this},t.MediaElement.prototype.get=function(e,i,n,r){if(this.loadedmetadata){var o=this.elt.currentTime;return this._pixelsTime!==o?this.loadPixels():this._ensureCanvas(),t.Renderer2D.prototype.get.call(this,e,i,n,r)}return void 0===e?new t.Image(1,1):n>1?new t.Image(e,i,n,r):[0,0,0,255]},t.MediaElement.prototype.set=function(e,i,n){this.loadedmetadata&&(this._ensureCanvas(),t.Renderer2D.prototype.set.call(this,e,i,n),this.setModified(!0))},t.MediaElement.prototype.copy=function(){this._ensureCanvas(),t.Renderer2D.prototype.copy.apply(this,arguments)},t.MediaElement.prototype.mask=function(){this.loadPixels(),this.setModified(!0),t.Image.prototype.mask.apply(this,arguments)},t.MediaElement.prototype.isModified=function(){return this._modified},t.MediaElement.prototype.setModified=function(t){this._modified=t},t.MediaElement.prototype.onended=function(t){return this._onended=t,this},t.MediaElement.prototype.connect=function(e){var i,n;if("function"==typeof t.prototype.getAudioContext)i=t.prototype.getAudioContext(),n=t.soundOut.input;else try{n=(i=e.context).destination}catch(t){throw"connect() is meant to be used with Web Audio API or p5.sound.js"}this.audioSourceNode||(this.audioSourceNode=i.createMediaElementSource(this.elt),this.audioSourceNode.connect(n)),e?e.input?this.audioSourceNode.connect(e.input):this.audioSourceNode.connect(e):this.audioSourceNode.connect(n)},t.MediaElement.prototype.disconnect=function(){if(!this.audioSourceNode)throw"nothing to disconnect";this.audioSourceNode.disconnect()},t.MediaElement.prototype.showControls=function(){this.elt.style["text-align"]="inherit",this.elt.controls=!0},t.MediaElement.prototype.hideControls=function(){this.elt.controls=!1};var r=function(t,e,i,n){this.callback=t,this.time=e,this.id=i,this.val=n};t.MediaElement.prototype.addCue=function(t,e,i){var n=this._cueIDCounter++,o=new r(e,t,n,i);return this._cues.push(o),this.elt.ontimeupdate||(this.elt.ontimeupdate=this._onTimeUpdate.bind(this)),n},t.MediaElement.prototype.removeCue=function(t){for(var e=0;e<this._cues.length;e++)this._cues[e].id===t&&(console.log(t),this._cues.splice(e,1));0===this._cues.length&&(this.elt.ontimeupdate=null)},t.MediaElement.prototype.clearCues=function(){this._cues=[],this.elt.ontimeupdate=null},t.MediaElement.prototype._onTimeUpdate=function(){for(var t=this.time(),e=0;e<this._cues.length;e++){var i=this._cues[e].time,n=this._cues[e].val;this._prevTime<i&&i<=t&&this._cues[e].callback(n)}this._prevTime=t},t.File=function(t,e){this.file=t,this._pInst=e;var i=t.type.split("/");this.type=i[0],this.subtype=i[1],this.name=t.name,this.size=t.size,this.data=void 0}}));