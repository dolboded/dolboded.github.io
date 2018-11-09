(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,731,500);


(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,78);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,386,54);


(lib.wing = function() {
	this.initialize(img.wing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,400);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(244,-155,3.033,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(-120,-200,728,90), null);


(lib.txt0402 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AJLBCQgRgKgJgRQgJgRAAgWQAAgVAJgRQAJgRARgKQAPgKAXAAQAWAAAPAKQARAKAJARQAJARAAAVQAAAWgJARQgJARgRAKQgPAKgWAAQgXAAgPgKgAJUgzQgMAIgGANQgHAOgBAQQABARAHAOQAGANAMAIQAMAHARABQAQgBAMgHQAMgIAHgNQAGgOABgRQgBgQgGgOQgHgNgMgIQgMgHgQgBQgRABgMAHgAE5BCQgRgJgKgRQgKgRAAgXQAAgWAKgRQAKgRARgJQARgKAVAAQANAAAKAEQALAEAIAGQAIAHAGAIIgQAJQgGgKgLgGQgKgFgNgBQgQABgNAHQgNAIgHANQgHANgBARQABARAHAOQAHANANAIQANAHAQABQANgBAKgFQALgGAGgKIAQAJQgJANgOAIQgNAIgUAAQgVAAgRgKgAkBBCQgRgKgJgRQgJgRAAgWQAAgVAJgRQAJgRARgKQAPgKAWAAQAXAAAPAKQARAKAJARQAJARAAAVQAAAWgJARQgJARgRAKQgPAKgXAAQgWAAgPgKgAj4gzQgMAIgGANQgHAOgBAQQABARAHAOQAGANAMAIQAMAHAQABQARgBAMgHQAMgIAHgNQAGgOAAgRQAAgQgGgOQgHgNgMgIQgMgHgRgBQgQABgMAHgAOZBJIAAiBIgvAAIAAgQIBvAAIAAAQIguAAIAACBgAM/BJIAAh0IhWB0IgSAAIAAiRIASAAIAABxIBVhxIATAAIAACRgAHUBJIAAiBIgvAAIAAgQIBwAAIAAAQIgvAAIAACBgABhBJIAAiRIBhAAIAAAQIhOAAIAAAvIBMAAIAAAPIhMAAIAAAzIBOAAIAAAQgAAsBJIAAhDIhVAAIAABDIgSAAIAAiRIASAAIAAA/IBVAAIAAg/IATAAIAACRgAmZBJIAAiRIBhAAIAAAQIhOAAIAACBgAoXBJIAAiRIBhAAIAAAQIhOAAIAAAvIBNAAIAAAPIhNAAIAAAzIBOAAIAAAQgApMBJIAAg/IgQADQgJACgLAAQgRAAgLgGQgLgHgGgKQgFgLAAgPIAAgmIASAAIAAAmQAAARAJAIQAIAJARAAQAKAAAIgCIAQgDIAAhDIASAAIAACRgArUBJIAAh0IhVB0IgSAAIAAiRIATAAIAABxIBUhxIASAAIAACRgAtwBJIAAhDIhWAAIAABDIgTAAIAAiRIATAAIAAA/IBWAAIAAg/IASAAIAACRg");
	this.shape.setTransform(0.6,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0402, new cjs.Rectangle(-101.7,-16.4,203.8,30.8), null);


(lib.txt0401 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AIrBCQgRgKgJgRQgJgRAAgWQAAgVAJgRQAJgRARgKQAQgKAWAAQAWAAAQAKQAQAKAJARQAJARABAVQgBAWgJARQgJARgQAKQgQAKgWAAQgWAAgQgKgAI0gzQgMAIgGANQgHAOAAAQQAAARAHAOQAGANAMAIQAMAHARABQAQgBAMgHQAMgIAHgNQAHgOAAgRQAAgQgHgOQgHgNgMgIQgMgHgQgBQgRABgMAHgAGYBCQgRgJgKgRQgKgRAAgXQAAgWAKgRQAKgRARgJQARgKAVAAQANAAAKAEQALAEAIAGQAIAHAGAIIgQAJQgGgKgLgGQgKgFgNgBQgQABgNAHQgNAIgHANQgHANgBARQABARAHAOQAHANANAIQANAHAQABQANgBAKgFQALgGAGgKIAQAJQgJANgOAIQgOAIgTAAQgVAAgRgKgAM2BJIAAiRIBgAAIAAAQIhOAAIAAAvIBNAAIAAAPIhNAAIAAAzIBOAAIAAAQgALcBJIAAiBIgvAAIAAgQIBwAAIAAAQIgvAAIAACBgAFDBJIAAiRIASAAIAACRgADKBJIAAiRIASAAIAAA6IApAAQAPAAAKAGQAKAGAFAJQAGAKAAAMQAAAMgFAKQgGAKgKAGQgKAGgPAAgADcA5IAnAAQANAAAIgIQAIgHAAgNQAAgNgIgHQgIgIgNAAIgnAAgAA+BJIAAiRIBCAAQANAAAJAEQAJAFAFAIQAFAJAAALQAAAJgEAHQgDAHgGAFQgGAEgHACQAIABAHAEQAGAFAEAIQAEAIAAAJQAAAMgFAIQgFAJgKAFQgJAFgOAAgABRA5IAtAAQANAAAHgHQAHgHAAgLQAAgHgDgGQgDgGgGgDQgGgDgJgBIgtAAgABRgJIAsAAQAMAAAHgHQAGgGAAgKQAAgLgGgGQgHgHgMAAIgsAAgAgkBJIgNggIhJAAIgNAgIgVAAIA7iRIAXAAIA7CRgAg2AYIgfhOIggBOIA/AAgAjCBJIAAhDIhWAAIAABDIgSAAIAAiRIASAAIAAA/IBWAAIAAg/IASAAIAACRgAnmBJIAAiRIASAAIAAA6IApAAQAPAAAKAGQAKAGAFAJQAGAKAAAMQAAAMgFAKQgGAKgKAGQgKAGgPAAgAnUA5IAnAAQANAAAIgIQAIgHAAgNQAAgNgIgHQgIgIgNAAIgnAAgApABJIAAiBIgvAAIAAgQIBwAAIAAAQIgvAAIAACBgAqaBJIAAiRIASAAIAACRgAsTBJIAAiRIASAAIAAA6IApAAQAPAAAKAGQAKAGAFAJQAGAKAAAMQAAAMgFAKQgGAKgKAGQgKAGgPAAgAsBA5IAnAAQANAAAIgIQAIgHAAgNQAAgNgIgHQgIgIgNAAIgnAAgAuVBJIAAiRIBfAAIAAAQIhNAAIAAAqIApAAQAPAAAKAGQAKAGAFAJQAGAKAAAMQAAAMgFAKQgGAKgKAGQgKAGgPAAgAuDA5IAnAAQANAAAIgIQAIgHAAgNQAAgNgIgHQgIgIgNAAIgnAAg");
	this.shape.setTransform(-0.2,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0401, new cjs.Rectangle(-95.4,-15.4,190.8,30.8), null);


(lib.txt0302 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ACWBMQAGAAAGgCQAFgDAEgGQAEgHADgLQADgMACgTIAJhIIBaAAIAACRIgSAAIAAiBIg3AAIgIA5QgCAZgFAPQgFAOgHAIQgGAIgIACQgIADgKAAgAhrBYQgIgCgEgGIAHgOIAJAHQAGACAFABQAGAAAFgCQAEgDADgEIAHgMIADgFIg5hqIAWAAIAuBZIAuhZIATAAIg/B3IgJAPQgGAHgHADQgHAEgKAAQgKAAgHgEgAmSBVQgKgGgHgLQgHgLgDgOQgDgNAAgOQAAgNADgNQADgNAHgLQAHgLAKgGQALgHAQAAQAOAAALAHQAKAGAIALQAGALAEANQACANAAANQAAAOgCANQgEAOgGALQgIALgKAGQgLAHgOAAQgQAAgLgHgAmJglQgIAFgEAJQgEAIgCALQgCAJAAALQAAAMACAKQACALAEAIQAEAJAIAEQAHAGALAAQAKAAAHgGQAHgEAEgJQAFgIACgLQABgKAAgMQAAgLgBgJQgCgLgFgIQgEgJgHgFQgHgFgKAAQgLAAgHAFgAoTBWQgLgHgHgKQgGgKgDgOQgEgOAAgPQAAgOAEgNQADgOAIgLQAHgKALgGQALgGAQAAQAOAAAKAEQAKAGAGAHIgJAOQgFgHgHgEQgIgEgLAAQgOAAgKAJQgJAHgEAOQgEAMgBAOIAAADIAAADQAEgFAGgFQAGgFAJgEQAIgCAJgBQANAAAMAFQAKAFAGAKQAHALAAAPQAAANgGALQgGALgLAHQgMAGgQAAQgQAAgKgGgAoPATQgKAGgGAKQABAJAEAJQAEAKAHAGQAJAHAMAAQALgBAIgEQAIgFADgHQAEgHAAgHQgBgLgEgHQgFgHgHgEQgHgDgKAAQgLAAgKAGgAIhBZIAAh0IhVB0IgSAAIAAiRIASAAIAAByIBUhyIATAAIAACRgAE9BZIAAiRIBgAAIAAAQIhOAAIAAAuIBMAAIAAARIhMAAIAAAyIBOAAIAAAQgAAfBZIAAiRIBgAAIAAAQIhOAAIAAApIApAAQAPAAAKAGQALAGAEAKQAGAKAAAMQAAAMgFALQgGAJgKAHQgKAFgPAAgAAxBJIAnAAQANAAAIgHQAIgIAAgNQAAgNgIgHQgIgIgNAAIgnAAgAjqBZIAAiRIA6AAQAPAAALAGQAKAGAGAKQAEAKAAAMQABAMgGAJQgFAKgKAGQgLAGgPAAIgoAAIAAA6gAjYAPIAnAAQANAAAHgIQAJgHgBgMQABgMgJgIQgHgHgNgBIgnAAgAHghGQgKgFgHgJIAJgHQAFAHAIAEQAIAFAKAAQAJAAAIgFQAIgEAFgHIAIAHQgHAJgKAFQgKAFgLAAQgMAAgLgFg");
	this.shape.setTransform(-0.7,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0302, new cjs.Rectangle(-60.1,-16.4,119.7,30.8), null);


(lib.txt0301 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ALdBYIAAgbIhuAAIAAAbIgSAAIAAgqQAGAAAGgDQAFgBAFgHQADgFAEgMQADgLABgSIAJhJIBaAAIAACAIAOAAIAAAsgAKRgKQgDAWgGANQgGAOgHAFIBUAAIAAhwIg3AAgAiSA8QgMgDgHgGQgJgFgEgGIAKgNQAIAKALAFQAMAFANABQASgBAKgHQAKgHgBgNQAAgJgEgGQgFgFgJgCQgIgDgMAAIgdAAIAAgQIAdAAQALgBAHgCQAIgCAGgGQAEgFAAgJQAAgHgEgGQgGgGgIgCQgHgEgKAAQgMAAgLAFQgLAFgHAIIgKgLQAHgKAOgHQAOgFARgBQAPAAAMAEQAMAFAGAJQAIAJAAANQAAAKgFAHQgGAHgHAEQgHAEgHACQAHAAAIAEQAHAEAHAHQAFAIAAAMQAAAMgHAJQgGAJgNAGQgNAGgQgBQgNABgKgEgAoXAwQAHAAAFgDQAFgCAEgHQAEgGADgMQADgLACgSIAJhJIBaAAIAACRIgSAAIAAiBIg3AAIgIA6QgCAXgFAPQgFAPgHAIQgGAHgIADQgIACgKAAgAOsA9IAAiRIBgAAIAAAQIhOAAIAAAvIBMAAIAAAQIhMAAIAAAxIBOAAIAAARgAN7A9IAAiRIASAAIAACRgAMCA9IAAiRIATAAIAAA5IAoAAQAPAAAKAHQAKAFAGALQAFAIAAAMQAAANgFAKQgGAKgKAGQgKAGgPAAgAMVAsIAmAAQANAAAIgHQAIgIAAgNQAAgMgIgGQgIgIgNAAIgmAAgAI/A9Ig3hBIgJAJIAAA4IgSAAIAAg4IgJgJIg3BBIgXAAIBDhMIg+hFIAXAAIA7BEIAAhEIASAAIAABEIA8hEIAWAAIg9BFIBDBMgAF/A9IgNghIhJAAIgNAhIgVAAIA7iRIAWAAIA8CRgAFtAMIgghOIgfBOIA/AAgADvA9Ig4hBIgOAQIAAAxIgTAAIAAiRIATAAIAABLIBAhLIAXAAIg9BFIBCBMgAA9A9IgNghIhIAAIgNAhIgVAAIA6iRIAXAAIA7CRgAArAMIgghOIgeBOIA+AAgAkNA9IAAh0IhVB0IgSAAIAAiRIASAAIAABxIBUhxIATAAIAACRgAo+A9IAAh0IhVB0IgSAAIAAiRIATAAIAABxIBUhxIASAAIAACRgArWA9IAAh3IgxB3IgIAAIgxh3IAAB3IgTAAIAAiRIAaAAIAuBtIAuhtIAaAAIAACRgAwLA9IAAgPIAtgkQASgPAJgNQAKgNgBgNQAAgJgEgGQgEgGgHgDQgHgDgIAAQgNABgKAFQgKAEgHAJIgLgMQAIgLAOgGQANgGAQAAQAMAAAMAFQALAEAHAKQAHAKAAAOQAAAPgJAPQgJAOgQAOQgQAPgVAPIBIAAIAAARg");
	this.shape.setTransform(0.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0301, new cjs.Rectangle(-106.6,-15.7,213.3,30.8), null);


(lib.txt0202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AImBCQgQgKgJgRQgJgRAAgWQAAgVAJgRQAJgRAQgKQAQgKAWAAQAWAAAQAKQARAKAJARQAJARAAAVQAAAWgJARQgJARgRAKQgQAKgWAAQgWAAgQgKgAIwgzQgMAIgHANQgGAOgBAQQABARAGAOQAHANAMAIQAMAHAQABQARgBAMgHQAMgIAHgNQAGgOAAgRQAAgQgGgOQgHgNgMgIQgMgHgRgBQgQABgMAHgAhbA8QAGAAAGgDQAFgCAEgHQAEgGADgMQADgLACgTIAJhIIBZAAIAACRIgSAAIAAiBIg2AAIgIA5QgCAYgFAPQgFAPgHAIQgGAIgIACQgIADgKAAgAltBCQgRgJgKgRQgKgRAAgXQAAgWAKgRQAKgRARgJQARgKAVAAQANAAALAEQAKAEAIAGQAIAHAGAIIgPAJQgHgKgKgGQgLgFgNgBQgQABgMAHQgNAIgIANQgHANAAARQAAARAHAOQAIANANAIQAMAHAQABQANgBALgFQAKgGAHgKIAPAJQgJANgNAIQgOAIgUAAQgVAAgRgKgAHQBJIAAhDIhWAAIAABDIgSAAIAAiRIASAAIAAA/IBWAAIAAg/IASAAIAACRgAEKBJIAAiBIgvAAIAAgQIBwAAIAAAQIgvAAIAACBgAC4BJIgNggIhJAAIgNAgIgVAAIA7iRIAXAAIA7CRgACmAYIgfhOIggBOIA/AAgAiLBJIAAiBIhVAAIAACBIgTAAIAAiRIB7AAIAACRgAoOBJIAAiRIBgAAIAAAQIhOAAIAAAvIBNAAIAAAPIhNAAIAAAzIBOAAIAAAQgAqUBJIAAiRIBfAAIAAAQIhNAAIAAAqIApAAQAPAAAKAGQAKAGAFAJQAGAKAAAMQAAAMgFAKQgGAKgKAGQgKAGgPAAgAqCA5IAnAAQANAAAIgIQAIgHAAgNQAAgNgIgHQgIgIgNAAIgnAAg");
	this.shape.setTransform(0.1,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0202, new cjs.Rectangle(-69.9,-16.4,139.8,30.8), null);


(lib.txt0201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AkqBIQgHgDgEgFIAIgOIAJAHQAFACAFABQAHAAADgDQAFgCADgEIAIgMIACgFIg4hqIAUAAIAuBZIAuhZIAWAAIhAB3IgKAPQgGAHgHADQgHAEgLAAQgJAAgIgEgAnTA8QAGAAAGgDQAFgCAEgHQAEgGADgMQADgLACgTIAJhIIBaAAIAACRIgSAAIAAiBIg3AAIgIA5QgCAYgFAPQgFAPgHAIQgGAIgIACQgIADgKAAgApDBCQgRgJgKgRQgKgRAAgXQAAgWAKgRQAKgRARgJQARgKAVAAQANAAALAEQAKAEAIAGQAIAHAGAIIgPAJQgHgKgKgGQgLgFgNgBQgQABgNAHQgMAIgIANQgHANgBARQABARAHAOQAIANAMAIQANAHAQABQANgBALgFQAKgGAHgKIAPAJQgJANgOAIQgOAIgTAAQgVAAgRgKgAt5BCQgRgKgIgRQgKgRABgWQgBgVAKgRQAIgRARgKQAQgKAWAAQAWAAAQAKQAQAKAKARQAJARAAAVQAAAWgJARQgKARgQAKQgQAKgWAAQgWAAgQgKgAtvgzQgMAIgHANQgGAOgBAQQABARAGAOQAHANAMAIQAMAHAQABQARgBALgHQANgIAGgNQAHgOAAgRQAAgQgHgOQgGgNgNgIQgLgHgRgBQgQABgMAHgAM8BJIAAiRIBgAAIAAAQIhNAAIAAAvIBMAAIAAAPIhMAAIAAAzIBNAAIAAAQgAMCBJIAAh0IhVB0IgSAAIAAiRIATAAIAABxIBUhxIASAAIAACRgAJhBJIAAhDIhVAAIAABDIgSAAIAAiRIASAAIAAA/IBVAAIAAg/IATAAIAACRgAHNBJIgOggIhJAAIgMAgIgWAAIA8iRIAWAAIA7CRgAG6AYIgfhOIgfBOIA+AAgADUBJIAAiRIBBAAQANAAAKAEQAJAFAEAIQAGAJAAALQgBAJgDAHQgDAHgHAFQgGAEgGACQAIABAHAEQAFAFAFAIQADAIAAAJQAAAMgEAIQgGAJgJAFQgKAFgNAAgADmA5IAtAAQAOAAAGgHQAIgHgBgLQAAgHgCgGQgDgGgGgDQgHgDgJgBIgtAAgADmgJIAsAAQANAAAGgHQAHgGAAgKQAAgLgHgGQgGgHgNAAIgsAAgACbBJIAAh0IhWB0IgSAAIAAiRIASAAIAABxIBVhxIATAAIAACRgAADBJIg3hCIgJAKIAAA4IgSAAIAAg4IgJgKIg4BCIgWAAIBChMIg9hFIAXAAIA7BFIAAhFIASAAIAABFIA7hFIAWAAIg8BFIBBBMgAroBJIAAiRIBfAAIAAAQIhNAAIAAAqIAoAAQAPAAAKAGQALAGAFAJQAGAKgBAMQAAAMgEAKQgGAKgLAGQgKAGgPAAgArWA5IAmAAQAOAAAHgIQAJgHgBgNQABgNgJgHQgHgIgOAAIgmAAg");
	this.shape.setTransform(0.5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0201, new cjs.Rectangle(-96.1,-15.4,191.9,30.8), null);


(lib.txt0102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AFpBCQgQgKgJgRQgJgRAAgWQAAgVAJgRQAJgRAQgKQARgKAVAAQAWAAARAKQAQAKAJARQAJARAAAVQAAAWgJARQgJARgQAKQgRAKgWAAQgVAAgRgKgAFzgzQgMAIgHANQgGAOgBAQQABARAGAOQAHANAMAIQAMAHAQABQARgBAMgHQAMgIAHgNQAHgOgBgRQABgQgHgOQgHgNgMgIQgMgHgRgBQgQABgMAHgACmA8QAGAAAGgDQAFgCAEgHQAEgGADgMQADgLACgTIAJhIIBaAAIAACRIgSAAIAAiBIg3AAIgIA5QgCAYgFAPQgFAPgHAIQgGAIgIACQgIADgKAAgAiMBCQgQgKgKgRQgIgRgBgWQABgVAIgRQAKgRAQgKQAQgKAWAAQAWAAAQAKQAQAKAKARQAIARABAVQgBAWgIARQgKARgQAKQgQAKgWAAQgWAAgQgKgAiDgzQgMAIgGANQgHAOAAAQQAAARAHAOQAGANAMAIQANAHAQABQAQgBANgHQALgIAIgNQAGgOAAgRQAAgQgGgOQgIgNgLgIQgNgHgQgBQgQABgNAHgAmyBEQgOgIgKgNIARgJQAGAKALAGQAKAFAMABQAPgBANgGQAMgHAHgMQAIgMABgQIhQAAIAAgPIBQAAQgCgPgIgLQgHgLgMgGQgMgGgPgBQgMABgKAFQgLAGgGAKIgQgJQAFgIAJgHQAIgGAKgEQAKgEANAAQAWAAARAKQARAJAKARQAKARAAAWQAAAXgKARQgKARgRAJQgRAKgWAAQgTAAgNgIgAIaBJIAAiBIgvAAIAAgQIBwAAIAAAQIgvAAIAACBgAA9BJIAAgOQgVgCgPgHQgQgIgIgNQgHgMAAgRQAAgPAHgNQAIgNAQgIQAPgHAVgCIAAgOIASAAIAAAOQAWACAPAHQAPAIAIANQAJANgBAPQABARgJAMQgIANgPAIQgPAHgWACIAAAOgABPAqQAYgCANgLQANgLgBgSQABgRgNgLQgNgLgYgCgAAZgcQgNALgBARQABASANALQAMALAYACIAAhTQgYACgMALgAkqBJIAAiRIA7AAQAPAAAKAGQAKAGAGAKQAFAKAAAMQAAAMgFAKQgGAJgKAGQgKAGgPAAIgoAAIAAA6gAkXAAIAmAAQANgBAIgHQAIgIAAgMQAAgNgIgHQgIgIgNAAIgmAAgAnmBJIgOggIhJAAIgMAgIgWAAIA7iRIAXAAIA7CRgAn5AYIgfhOIgfBOIA+AAgAKIA7IAjgnIgjgmIARAAIAjAmIgjAngAJoA7IAjgnIgjgmIAQAAIAkAmIgkAngAp3A7IgjgnIAjgmIAQAAIgjAmIAjAngAqXA7IgkgnIAkgmIAQAAIgjAmIAjAng");
	this.shape.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0102, new cjs.Rectangle(-72.7,-15.4,145.4,30.8), null);


(lib.txt0101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AE0BJIgNggIhJAAIgNAgIgVAAIA7iRIAWAAIA8CRgAEhAYIgfhOIgfBOIA+AAgAByBJIAAiBIgvAAIAAgQIBwAAIAAAQIgvAAIAACBgAgzBJIAAiRIA6AAQAPAAAKAGQALAGAFAKQAFAKAAAMQAAAMgFAKQgFAJgLAGQgKAGgPAAIgnAAIAAA6gAggAAIAlAAQANgBAIgHQAIgIAAgMQAAgNgIgHQgIgIgNAAIglAAgAhbBJIgNggIhJAAIgNAgIgVAAIA7iRIAXAAIA7CRgAhtAYIgfhOIggBOIA/AAgAjvBJIg4hCIgOARIAAAxIgTAAIAAiRIATAAIAABKIBBhKIAWAAIg9BFIBDBMg");
	this.shape.setTransform(0.9,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0101, new cjs.Rectangle(-35.9,-15.4,71.9,30.8), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wing();
	this.instance.parent = this;
	this.instance.setTransform(-124,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-200,248,400);


(lib.logos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgBCdIAAk5IADAAIAAE5g");
	this.shape.setTransform(45.8,0.4,1.337,1.337);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE3524").s().p("AA4BoIgOgnIhSAAIgOAnQgBAAAAABQAAAAgBABQAAAAgBAAQgBAAAAAAIghgNQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBIA8ijQAGgPAFgGQAJgKANAAQAPAAAIAKQAFAGAGAPIA8CjQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIggANIgCAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAgAAcAcIgchTIAAAAIgbBTIA3AAg");
	this.shape_1.setTransform(-106.4,-6.5,1.337,1.337);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE3524").s().p("AhhAVQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgiQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAIDDAAQABAAABAAQAAAAABABQAAAAAAABQAAABAAABIAAAiQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_2.setTransform(-106.5,18.7,1.337,1.337);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE3524").s().p("AATAoIgGgQIgaAAIgFAQIgQAAIAbhNIADgBIAEgBQAGAAAEACIAZBNgAAKALIgJghIgBAAIgJAhIATAAg");
	this.shape_3.setTransform(-75.7,1.2,1.337,1.337);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE3524").s().p("AgYAVIADgEIACgFIAAgCIABgDIAAggIALgCIAKgBIALABIALACIAAA1IgPAAIAAgrIgCAAIgKAAIgCAAIgBAeIgDAHQgBACgEACIgHADg");
	this.shape_4.setTransform(-67.1,2.7,1.337,1.337);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE3524").s().p("AgLAcQgFgBgGgDIAAg0IAPAAIAAASIAFgBIADAAQALAAAFAFQAGAGAAAHQAAAKgGAGQgHAGgKAAgAgHABIAAAPIAHABQAEAAACgDQABgCAAgEQAAgEgBgCQgCgCgEAAIgDAAg");
	this.shape_5.setTransform(-58.6,2.8,1.337,1.337);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE3524").s().p("AgGAxIAAgUIgFACIgHAAQgLAAgFgHQgGgHAAgOQAAgOAHgIQAHgHAKAAIAFABQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAIAAgYIANAAIAAAYIAFgBIAFgBQAKAAAHAHQAHAIAAANQAAAIgCAFIgEAJIgHAGQgEABgFAAIgHAAIgFgCIAAAUgAAHgMIAAAeIAEABIAEAAQAFAAADgEQADgFAAgIQAAgPgLAAIgDAAIgFABgAgWgJQgDAEAAAIQAAAHADAFQADAEAFAAIAEAAIAEgBIAAgeIgFgBIgDAAQgFAAgDAEg");
	this.shape_6.setTransform(-49.1,2.4,1.337,1.337);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3524").s().p("AANAcIgEgDIgCABIgHADIgFAAIgHgBIgHgDIgDgFIgBgIQgBgJAGgEQAFgFALAAIADAAIAEABIAAgHIgBgDIgEgBIgEAAIgMABIgDgLQALgCAIAAQAGAAAEABQAFACABADIACACIABADIAAAEIAAATIACAJIABAEIADAEIgKAGgAgHAEQgCACAAAEQAAAEACACQACACAEAAIAHgCIAAgDIgBgKIgBAAIgDAAQgFAAgDABg");
	this.shape_7.setTransform(-39,2.7,1.337,1.337);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE3524").s().p("AALAoIAAhAIgLgBIgKABIAABAIgPAAIAAhLIAZgEIANABIANADIAABLg");
	this.shape_8.setTransform(-26.3,1.2,1.337,1.337);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE3524").s().p("AgYAnIAAhJIAMgDIAMgBQAGAAAEACQAFABADADIAFAJQACAGAAAIQAAAHgCAEQgCAGgDADQgDAEgEACQgEABgFAAIgGAAIgFgCIAAAXgAgJgZIAAAeIAEACIAEAAQAEAAADgFQAEgEAAgHIgBgHIgCgFIgDgEIgEgBIgFAAg");
	this.shape_9.setTransform(-17.2,4.1,1.337,1.337);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EE3524").s().p("AgIAcIgHgEIgFgFIgDgHIgBgLQAAgGACgEQABgFAEgFQAEgFAFgCQAFgCAFAAQAFAAAGACIAHAGQACACACAGQABAEAAAHIAAAEIgiAAIABAGIACAEIAEAEQACABAEAAIAPgCIACALQgLADgIgBgAgGgPQgCADgBAGIATAAIAAgEIgBgEIgDgDIgFgBQgFAAgCADg");
	this.shape_10.setTransform(-9.5,2.8,1.337,1.337);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE3524").s().p("AASAdIgCgpIAAAAIgKAhIgGABIgDAAIgCgBIgKghIgBAAIAAApIgPAAIADg4IAFgBIAJAAIAEABIAIAbIABACIAAAEIABACIAAADIAAAAIADgLIAHgbIAFgBIAKAAIAEABIADA4g");
	this.shape_11.setTransform(-0.7,2.7,1.337,1.337);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EE3524").s().p("AAJAcIAAgZIABgDIAAgIIgBAAIgQAkIgQAAIAAg3IAPAAIAAAbIgBADIAAAHIARglIAQAAIAAA3g");
	this.shape_12.setTransform(8.4,2.8,1.337,1.337);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EE3524").s().p("AgRAmIgIgDIAEgLIAKADQAEAAACgCIADgEIABgFIgBAAIgCAAIgFgBIgRg1IAQAAIAKAuIABAAIAJguIARAAIgQA4IgEALQgEAGgDABQgEADgHAAg");
	this.shape_13.setTransform(16.4,4.2,1.337,1.337);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EE3524").s().p("AARAdIgBgpIAAAAIgKAhIgGABIgCAAIgDgBIgKghIgBAAIgBApIgOAAIADg4IAFgBIAJAAIAEABIAIAbIABACIAAAEIABACIAAADIAAAAIADgLIAHgbIAFgBIAKAAIAEABIADA4g");
	this.shape_14.setTransform(24.9,2.7,1.337,1.337);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EE3524").s().p("AgGAHQgCgEAAgDQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAADgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_15.setTransform(-33.2,2.7,1.337,1.337);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAAABIAAgBIABAAIAAAAIgBABg");
	this.shape_16.setTransform(118.8,21.7,1.337,1.337);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgJAMQgFgFAAgHQAAgIAGgFQAFgEAGAAQAHAAAFAEIgDAHQgDgEgGAAQgEAAgDAEQgCADAAADQAAAFADADQACAEAEAAQAFAAAEgEIADAHQgFADgGAAQgIAAgFgGg");
	this.shape_17.setTransform(98.7,19.2,1.337,1.337,0,0,0,-0.1,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgLAMQgFgGAAgGQAAgGAFgFQAFgGAHAAQALAAADAKQACAFgBAEIgXAAIABAEQADAFAEAAQAFAAAFgEIAEAGQgIAFgGAAQgHAAgFgGgAAJgDQAAgHgIgBIgBAAQgFABgBAEIgBADIAQAAIAAAAg");
	this.shape_18.setTransform(90.3,19.5,1.337,1.337,0,0,0,-0.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgFARIgCgGIAAgQIgGAAIAAgHIAGAAIAAgKIAHAAIAAAKIAMAAIAAAHIgMAAIAAAQIAAACQACACADAAQADAAADgCIADAHQgGADgEAAQgHAAgCgGg");
	this.shape_19.setTransform(85.7,18.7,1.337,1.337,0,0,0,-0.2,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgKAQIgEgDIADgFIAEACIAHABQAHAAAAgDQAAgCgEgCIgDgBQgNAAAAgKQAAgKAOAAQAEAAAJAEIgDAFIgLgCQgFAAAAADQAAADAJACQALABAAAIQAAALgPAAQgEAAgGgCg");
	this.shape_20.setTransform(81.2,19.4,1.337,1.337,0,0,0,-0.1,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgMASQgEgFAAgHQAAgGADgFQAGgFAHAAQAGAAAEAEIAAgRIAIAAIAAAuIgIAAIAAgDQgFAEgFAAQgHAAgFgGgAgGAAQgEACABAFQgBAEAEADQADAEAEAAQADAAAEgEQADgDAAgEQAAgFgDgCQgEgEgDAAQgEAAgDAEg");
	this.shape_21.setTransform(112.8,18.4,1.337,1.337,0,0,0,-0.1,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgMAMQgFgFABgHQAAgGADgFQAGgGAHAAQAGAAAFAFIAAgEIAHAAIAAAhIgHAAIAAgEQgFAFgGAAQgHAAgFgGgAgGgGQgDADAAADQAAAFADADQADAEAEAAQAEAAADgEQADgDAAgFQAAgDgDgDQgDgEgEAAQgEAAgDAEg");
	this.shape_22.setTransform(103.5,19.2,1.337,1.337,0,0,0,-0.2,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgMAMQgEgFAAgHQAAgGAEgFQAFgGAHAAQAGAAAFAFIAAgEIAHAAIAAAhIgHAAIAAgEQgGAFgFAAQgGAAgGgGgAgGgGQgDADAAADQAAAFADADQAEAEADAAQAEAAADgEQADgDAAgFQAAgDgDgDQgDgEgEAAQgDAAgEAEg");
	this.shape_23.setTransform(75.8,19.2,1.337,1.337,0,0,0,-0.1,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgKARIAAggIAHAAIAAAEIADgDQAEgCACAAIAFABIgCAGIgEgBQgFAAgCAEIgBADIAAAUg");
	this.shape_24.setTransform(108.6,19.1,1.337,1.337,0,0,0,-0.2,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgKARIAAggIAHAAIAAAEIADgDIAGgCIAFABIgCAGIgFgBQgEAAgCAEIgBADIAAAUg");
	this.shape_25.setTransform(95.1,19.1,1.337,1.337,0,0,0,-0.1,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AAUARIAAgUQAAgGgIAAQgFAAgCADIgBADIAAAUIgHAAIAAgUQAAgHgHAAQgFAAgCAEIgBADIAAAUIgIAAIAAggIAIAAIAAAEIADgDQAEgCACAAQAIAAADAGIADgDQADgDAFAAQAMAAACAKIAAAXg");
	this.shape_26.setTransform(69,19.1,1.337,1.337,0,0,0,-0.1,-0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7A01E").s().p("AAFACIAAgCIgCACIgBAAIgBgCIAAACIgBAAIAAgDIABAAIACACIABgCIABAAIAAADgAgCACIAAgDIgCAAIAAAAIAEAAIAAAAIgCAAIAAADg");
	this.shape_27.setTransform(118.8,5.2,1.337,1.337);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F26122").s().p("AgjA5QgNgbAAgeQAAgdANgbQANgaAWgSQAXASANAaQANAbAAAdQAAAegNAbQgNAagXASQgWgSgNgag");
	this.shape_28.setTransform(90.2,-4,1.337,1.337,0,0,0,-0.1,-0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E91D25").s().p("AhZBaQglglAAg1QAAg0AlglQAlgmA0AAQA1AAAlAmQAlAlAAA0QAAA1glAlQglAmg1AAQg0AAglgmg");
	this.shape_29.setTransform(79.7,-4,1.337,1.337,0,0,0,-0.1,-0.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7A01E").s().p("AhZBaQglglAAg1QAAg0AlglQAlgmA0AAQA1AAAlAmQAlAlAAA0QAAA1glAlQglAmg1AAQg0AAglgmg");
	this.shape_30.setTransform(100.9,-3.9,1.337,1.337);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logos, new cjs.Rectangle(-120,-21,239.5,42.9), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-193,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-193,-27,386,54), null);


(lib.flare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.486,1],-20.4,-14.6,35.7,0.5).s().p("ApTQBMAAAggBISnAAMAAAAgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flare, new cjs.Rectangle(-59.5,-102.5,119.1,205.1), null);


(lib.button_one = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AK+A6QgGgDgEgEIAHgLQADADAEACQAEADAFAAQAEAAADgCQAEgCACgDIAGgKIACgEIgthVIARAAIAlBIIAlhIIAQAAIgzBgQgDAHgFAFQgEAFgGADQgFADgJAAQgHAAgGgDgACyA6QgJgDgGgEQgGgEgEgGIAIgJQAGAHAJAEQAKAFALAAQAOAAAHgGQAIgGAAgKQAAgHgEgFQgEgFgGgCQgHgCgJAAIgYAAIAAgMIAYAAQAIAAAGgCQAHgCADgEQAEgEAAgHQAAgHgEgEQgDgFgHgCQgGgCgIAAQgKAAgIADQgJAEgGAHIgIgJQAGgIALgFQALgFAOAAQAMAAAJADQAKAEAGAHQAFAHAAAKQAAAIgEAGQgEAGgGADQgFADgGABQAGABAGACQAGADAEAGQAFAHAAAJQAAAKgGAHQgFAIgKAEQgKAFgNAAQgKAAgJgDgAp5A1QgNgHgIgOQgIgOAAgSQAAgRAIgOQAIgNANgIQAOgHARgBQAKABAJADQAIADAHAFIALAMIgNAHQgFgIgIgFQgJgEgKAAQgNAAgKAGQgKAGgGAKQgGALAAANQAAAOAGALQAGALAKAGQAKAGANAAQAKAAAJgFQAIgFAFgHIANAHQgIAKgKAGQgLAHgQAAQgRAAgOgIgAsCA1QgNgIgHgOQgHgNAAgSQAAgQAHgOQAHgOANgHQAOgIARgBQARABANAIQAOAHAHAOQAHAOAAAQQAAASgHANQgHAOgOAIQgNAIgRAAQgRAAgOgIgAr6goQgKAGgFALQgFAKAAANQAAAOAFALQAFAKAKAGQAKAHANAAQANAAAKgHQAJgGAGgKQAFgLAAgOQAAgNgFgKQgGgLgJgGQgKgGgNAAQgNAAgKAGgAKdA7Igtg1IgLANIAAAoIgPAAIAAh1IAPAAIAAA8IA0g8IASAAIgxA4IA1A9gAHnA7IAAh1IA1AAQAKAAAHAEQAIAEAEAHQAEAGAAAJQAAAIgDAFQgDAGgFAEQgEADgGABQAGABAGADQAFAFADAGQADAGAAAHQAAAKgEAHQgEAHgIAEQgHAEgLAAgAH2AuIAkAAQAKAAAGgGQAGgFAAgKQAAgFgDgEQgCgFgFgDQgFgDgHAAIgkAAgAH2gHIAjAAQAKAAAFgFQAGgFAAgJQAAgIgGgFQgFgFgKgBIgjAAgAG9A7IAAgvIgXAAIgeAvIgRAAIAfgwQgIgBgHgEQgHgEgEgGQgEgIAAgKQAAgLAEgIQAFgIAIgEQAJgFALAAIAvAAIAAB1gAGNgmQgGAGAAAKQAAAKAGAGQAHAGAKAAIAfAAIAAgtIgfAAQgKABgHAGgAFcA7IgLgaIg6AAIgKAaIgRAAIAvh1IASAAIAvB1gAFNAUIgZg/IgZA/IAyAAgAAMA7IAAh1IAPAAIAAAvIAhAAQALAAAJAFQAIAFAEAHQAEAIAAAJQAAAKgEAIQgEAIgIAFQgIAFgMAAgAAbAuIAfAAQALAAAGgGQAGgHAAgKQAAgKgGgGQgGgGgLAAIgfAAgAg6A7IAAhoIglAAIAAgNIBZAAIAAANIglAAIAABogAiBA7IAAhdIhEBdIgPAAIAAh1IAPAAIAABbIBEhbIAPAAIAAB1gAlDA7IAAh1IA1AAQAKAAAHAEQAIAEAEAHQAEAGAAAJQAAAIgDAFQgDAGgFAEQgEADgGABQAGABAGADQAFAFADAGQADAGAAAHQAAAKgEAHQgEAHgIAEQgHAEgLAAgAk0AuIAkAAQAKAAAGgGQAGgFAAgKQAAgFgDgEQgCgFgFgDQgFgDgHAAIgkAAgAk0gHIAjAAQAKAAAFgFQAGgFAAgJQAAgIgGgFQgFgFgKgBIgjAAgAljA7IgKgaIg7AAIgKAaIgRAAIAvh1IATAAIAvB1gAlyAUIgYg/IgZA/IAxAAgAn+A7IAAhoIglAAIAAgNIBZAAIAAANIglAAIAABog");
	this.shape.setTransform(0.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE3524").s().p("AuzCwIAAlgIdnAAIAAFgg");
	this.shape_1.setTransform(0.8,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.button_one, new cjs.Rectangle(-94,-18,189.6,35.3), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-48,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(-48,-220,731,500), null);


(lib.TXT04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzkBvIAAjbMAnJAAAIAADbg");
	mask.setTransform(0.4,11.1);

	// txt0102
	this.instance = new lib.txt0402();
	this.instance.parent = this;
	this.instance.setTransform(0,-12);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:0.5,regY:-1.4,x:0.5,y:-7.2,alpha:0.246},0).wait(1).to({y:-2.7,alpha:0.425},0).wait(1).to({y:0.6,alpha:0.56},0).wait(1).to({y:3.2,alpha:0.663},0).wait(1).to({y:5.2,alpha:0.745},0).wait(1).to({y:6.9,alpha:0.811},0).wait(1).to({y:8.2,alpha:0.863},0).wait(1).to({y:9.2,alpha:0.904},0).wait(1).to({y:10,alpha:0.937},0).wait(1).to({y:10.6,alpha:0.961},0).wait(1).to({y:11.1,alpha:0.979},0).wait(1).to({y:11.4,alpha:0.991},0).wait(1).to({y:11.5,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:0,y:13,alpha:1},0).wait(80).to({regX:0.5,regY:-1.4,x:0.5,y:11.7,alpha:0.998},0).wait(1).to({y:11.9,alpha:0.99},0).wait(1).to({y:12.2,alpha:0.977},0).wait(1).to({y:12.7,alpha:0.957},0).wait(1).to({y:13.4,alpha:0.93},0).wait(1).to({y:14.4,alpha:0.894},0).wait(1).to({y:15.5,alpha:0.849},0).wait(1).to({y:17,alpha:0.792},0).wait(1).to({y:18.9,alpha:0.721},0).wait(1).to({y:21.2,alpha:0.632},0).wait(1).to({y:24,alpha:0.522},0).wait(1).to({y:27.7,alpha:0.382},0).wait(1).to({y:32.3,alpha:0.204},0).wait(1).to({regX:0,regY:0,x:0,y:39,alpha:0},0).to({_off:true},1).wait(3));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AzkBiIAAjbMAnJAAAIAADbg");
	mask_1.setTransform(0.4,-12.1);

	// txt0101
	this.instance_1 = new lib.txt0401();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-38);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.2,regY:-1.4,x:-0.2,y:-32.9,alpha:0.246},0).wait(1).to({y:-28.3,alpha:0.425},0).wait(1).to({y:-24.8,alpha:0.56},0).wait(1).to({y:-22.1,alpha:0.663},0).wait(1).to({y:-20,alpha:0.745},0).wait(1).to({y:-18.3,alpha:0.811},0).wait(1).to({y:-16.9,alpha:0.863},0).wait(1).to({y:-15.8,alpha:0.904},0).wait(1).to({y:-15,alpha:0.937},0).wait(1).to({y:-14.4,alpha:0.961},0).wait(1).to({y:-13.9,alpha:0.979},0).wait(1).to({y:-13.6,alpha:0.991},0).wait(1).to({y:-13.4,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:0,y:-12,alpha:1},0).wait(86).to({regX:-0.2,regY:-1.4,x:-0.2,y:-13.3,alpha:0.998},0).wait(1).to({y:-13.1,alpha:0.99},0).wait(1).to({y:-12.8,alpha:0.977},0).wait(1).to({y:-12.3,alpha:0.957},0).wait(1).to({y:-11.6,alpha:0.93},0).wait(1).to({y:-10.7,alpha:0.894},0).wait(1).to({y:-9.6,alpha:0.849},0).wait(1).to({y:-8.1,alpha:0.792},0).wait(1).to({y:-6.4,alpha:0.721},0).wait(1).to({y:-4.2,alpha:0.632},0).wait(1).to({y:-1.4,alpha:0.522},0).wait(1).to({y:2.1,alpha:0.382},0).wait(1).to({y:6.5,alpha:0.204},0).wait(1).to({regX:0,regY:0,x:0,y:13,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.TXT03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzkBvIAAjbMAnJAAAIAADbg");
	mask.setTransform(0.4,11.1);

	// txt0102
	this.instance = new lib.txt0302();
	this.instance.parent = this;
	this.instance.setTransform(0,-12);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:-0.7,regY:-2.8,x:-0.7,y:-8.6,alpha:0.246},0).wait(1).to({y:-4.1,alpha:0.425},0).wait(1).to({y:-0.8,alpha:0.56},0).wait(1).to({y:1.8,alpha:0.663},0).wait(1).to({y:3.8,alpha:0.745},0).wait(1).to({y:5.5,alpha:0.811},0).wait(1).to({y:6.8,alpha:0.863},0).wait(1).to({y:7.8,alpha:0.904},0).wait(1).to({y:8.6,alpha:0.937},0).wait(1).to({y:9.2,alpha:0.961},0).wait(1).to({y:9.7,alpha:0.979},0).wait(1).to({y:10,alpha:0.991},0).wait(1).to({y:10.1,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:0,y:13,alpha:1},0).wait(45).to({regX:-0.7,regY:-2.8,x:-0.7,y:10.3,alpha:0.997},0).wait(1).to({y:10.6,alpha:0.986},0).wait(1).to({y:11,alpha:0.969},0).wait(1).to({y:11.6,alpha:0.945},0).wait(1).to({y:12.4,alpha:0.914},0).wait(1).to({y:13.4,alpha:0.876},0).wait(1).to({y:14.6,alpha:0.83},0).wait(1).to({y:16,alpha:0.775},0).wait(1).to({y:17.7,alpha:0.71},0).wait(1).to({y:19.7,alpha:0.634},0).wait(1).to({y:22.1,alpha:0.541},0).wait(1).to({y:25.1,alpha:0.426},0).wait(1).to({y:29.1,alpha:0.273},0).wait(1).to({regX:0,regY:0,x:0,y:39,alpha:0},0).wait(4));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AzkBiIAAjbMAnJAAAIAADbg");
	mask_1.setTransform(0.4,-12.1);

	// txt0101
	this.instance_1 = new lib.txt0301();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-38);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.6,regY:-0.2,x:0.6,y:-31.7,alpha:0.246},0).wait(1).to({y:-27.1,alpha:0.425},0).wait(1).to({y:-23.6,alpha:0.56},0).wait(1).to({y:-20.9,alpha:0.663},0).wait(1).to({y:-18.8,alpha:0.745},0).wait(1).to({y:-17.1,alpha:0.811},0).wait(1).to({y:-15.7,alpha:0.863},0).wait(1).to({y:-14.6,alpha:0.904},0).wait(1).to({y:-13.8,alpha:0.937},0).wait(1).to({y:-13.2,alpha:0.961},0).wait(1).to({y:-12.7,alpha:0.979},0).wait(1).to({y:-12.4,alpha:0.991},0).wait(1).to({y:-12.2,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:0,y:-12,alpha:1},0).wait(51).to({regX:0.6,regY:-0.2,x:0.6,y:-12.1,alpha:0.997},0).wait(1).to({y:-11.8,alpha:0.986},0).wait(1).to({y:-11.4,alpha:0.969},0).wait(1).to({y:-10.8,alpha:0.945},0).wait(1).to({y:-10,alpha:0.914},0).wait(1).to({y:-9.1,alpha:0.876},0).wait(1).to({y:-7.9,alpha:0.83},0).wait(1).to({y:-6.5,alpha:0.775},0).wait(1).to({y:-4.9,alpha:0.71},0).wait(1).to({y:-3,alpha:0.634},0).wait(1).to({y:-0.7,alpha:0.541},0).wait(1).to({y:2.1,alpha:0.426},0).wait(1).to({y:6,alpha:0.273},0).wait(1).to({regX:0,regY:0,x:0,y:13,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.TXT02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzkBvIAAjbMAnJAAAIAADbg");
	mask.setTransform(0.4,11.1);

	// txt0102
	this.instance = new lib.txt0202();
	this.instance.parent = this;
	this.instance.setTransform(0,-12);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:0.1,regY:-1.4,x:0.1,y:-7.2,alpha:0.246},0).wait(1).to({y:-2.7,alpha:0.425},0).wait(1).to({y:0.6,alpha:0.56},0).wait(1).to({y:3.2,alpha:0.663},0).wait(1).to({y:5.2,alpha:0.745},0).wait(1).to({y:6.9,alpha:0.811},0).wait(1).to({y:8.2,alpha:0.863},0).wait(1).to({y:9.2,alpha:0.904},0).wait(1).to({y:10,alpha:0.937},0).wait(1).to({y:10.6,alpha:0.961},0).wait(1).to({y:11.1,alpha:0.979},0).wait(1).to({y:11.4,alpha:0.991},0).wait(1).to({y:11.5,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:0,y:13,alpha:1},0).wait(41).to({regX:0.1,regY:-1.4,x:0.1,y:11.7,alpha:0.998},0).wait(1).to({y:11.9,alpha:0.99},0).wait(1).to({y:12.2,alpha:0.977},0).wait(1).to({y:12.7,alpha:0.957},0).wait(1).to({y:13.4,alpha:0.93},0).wait(1).to({y:14.4,alpha:0.894},0).wait(1).to({y:15.5,alpha:0.849},0).wait(1).to({y:17,alpha:0.792},0).wait(1).to({y:18.9,alpha:0.721},0).wait(1).to({y:21.2,alpha:0.632},0).wait(1).to({y:24,alpha:0.522},0).wait(1).to({y:27.7,alpha:0.382},0).wait(1).to({y:32.3,alpha:0.204},0).wait(1).to({regX:0,regY:0,x:0,y:39,alpha:0},0).to({_off:true},1).wait(3));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AzkBbIAAjbMAnJAAAIAADbg");
	mask_1.setTransform(0.4,-12.8);

	// txt0101
	this.instance_1 = new lib.txt0201();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-38);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.5,regY:-1.4,x:0.5,y:-32.9,alpha:0.246},0).wait(1).to({y:-28.3,alpha:0.425},0).wait(1).to({y:-24.8,alpha:0.56},0).wait(1).to({y:-22.1,alpha:0.663},0).wait(1).to({y:-20,alpha:0.745},0).wait(1).to({y:-18.3,alpha:0.811},0).wait(1).to({y:-16.9,alpha:0.863},0).wait(1).to({y:-15.8,alpha:0.904},0).wait(1).to({y:-15,alpha:0.937},0).wait(1).to({y:-14.4,alpha:0.961},0).wait(1).to({y:-13.9,alpha:0.979},0).wait(1).to({y:-13.6,alpha:0.991},0).wait(1).to({y:-13.4,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:0,y:-12,alpha:1},0).wait(47).to({regX:0.5,regY:-1.4,x:0.5,y:-13.3,alpha:0.998},0).wait(1).to({y:-13.1,alpha:0.99},0).wait(1).to({y:-12.8,alpha:0.977},0).wait(1).to({y:-12.3,alpha:0.957},0).wait(1).to({y:-11.6,alpha:0.93},0).wait(1).to({y:-10.7,alpha:0.894},0).wait(1).to({y:-9.6,alpha:0.849},0).wait(1).to({y:-8.1,alpha:0.792},0).wait(1).to({y:-6.4,alpha:0.721},0).wait(1).to({y:-4.2,alpha:0.632},0).wait(1).to({y:-1.4,alpha:0.522},0).wait(1).to({y:2.1,alpha:0.382},0).wait(1).to({y:6.5,alpha:0.204},0).wait(1).to({regX:0,regY:0,x:0,y:13,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.TXT01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzkBvIAAjbMAnJAAAIAADbg");
	mask.setTransform(0.4,11.1);

	// txt0102
	this.instance = new lib.txt0102();
	this.instance.parent = this;
	this.instance.setTransform(0,-12);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regY:-1.4,y:-7.2,alpha:0.246},0).wait(1).to({y:-2.7,alpha:0.425},0).wait(1).to({y:0.6,alpha:0.56},0).wait(1).to({y:3.2,alpha:0.663},0).wait(1).to({y:5.2,alpha:0.745},0).wait(1).to({y:6.9,alpha:0.811},0).wait(1).to({y:8.2,alpha:0.863},0).wait(1).to({y:9.2,alpha:0.904},0).wait(1).to({y:10,alpha:0.937},0).wait(1).to({y:10.6,alpha:0.961},0).wait(1).to({y:11.1,alpha:0.979},0).wait(1).to({y:11.4,alpha:0.991},0).wait(1).to({y:11.5,alpha:0.998},0).wait(1).to({regY:0,y:13,alpha:1},0).wait(41).to({regY:-1.4,y:11.7,alpha:0.998},0).wait(1).to({y:11.9,alpha:0.99},0).wait(1).to({y:12.2,alpha:0.977},0).wait(1).to({y:12.7,alpha:0.957},0).wait(1).to({y:13.4,alpha:0.93},0).wait(1).to({y:14.4,alpha:0.894},0).wait(1).to({y:15.5,alpha:0.849},0).wait(1).to({y:17,alpha:0.792},0).wait(1).to({y:18.9,alpha:0.721},0).wait(1).to({y:21.2,alpha:0.632},0).wait(1).to({y:24,alpha:0.522},0).wait(1).to({y:27.7,alpha:0.382},0).wait(1).to({y:32.3,alpha:0.204},0).wait(1).to({regY:0,y:39,alpha:0},0).to({_off:true},1).wait(3));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AzkBbIAAjbMAnJAAAIAADbg");
	mask_1.setTransform(0.4,-12.8);

	// txt0101
	this.instance_1 = new lib.txt0101();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-38);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.9,regY:-1.7,x:0.9,y:-33.2,alpha:0.246},0).wait(1).to({y:-28.6,alpha:0.425},0).wait(1).to({y:-25.1,alpha:0.56},0).wait(1).to({y:-22.4,alpha:0.663},0).wait(1).to({y:-20.3,alpha:0.745},0).wait(1).to({y:-18.6,alpha:0.811},0).wait(1).to({y:-17.2,alpha:0.863},0).wait(1).to({y:-16.1,alpha:0.904},0).wait(1).to({y:-15.3,alpha:0.937},0).wait(1).to({y:-14.7,alpha:0.961},0).wait(1).to({y:-14.2,alpha:0.979},0).wait(1).to({y:-13.9,alpha:0.991},0).wait(1).to({y:-13.7,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:0,y:-12,alpha:1},0).wait(47).to({regX:0.9,regY:-1.7,x:0.9,y:-13.6,alpha:0.998},0).wait(1).to({y:-13.4,alpha:0.99},0).wait(1).to({y:-13.1,alpha:0.977},0).wait(1).to({y:-12.6,alpha:0.957},0).wait(1).to({y:-11.9,alpha:0.93},0).wait(1).to({y:-11,alpha:0.894},0).wait(1).to({y:-9.9,alpha:0.849},0).wait(1).to({y:-8.4,alpha:0.792},0).wait(1).to({y:-6.7,alpha:0.721},0).wait(1).to({y:-4.5,alpha:0.632},0).wait(1).to({y:-1.7,alpha:0.522},0).wait(1).to({y:1.8,alpha:0.382},0).wait(1).to({y:6.2,alpha:0.204},0).wait(1).to({regX:0,regY:0,x:0,y:13,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.logogoup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logos();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.64,0.64);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.3,regY:0.4,scaleX:0.75,scaleY:0.75,x:-0.2,y:0.3,alpha:0.314},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:0.4,alpha:0.486},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.607},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.698},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-0.3,alpha:0.771},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.828},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.875},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.912},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.941},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.964},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.98},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.8,-13.4,153.3,27.5);


(lib.legalmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.304},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.468},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.586},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.678},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.751},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.811},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.86},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.901},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.933},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.958},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.977},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.99},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({alpha:1},0).wait(74).to({scaleX:1,scaleY:1,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.987},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.969},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.943},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.907},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.859},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.797},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.718},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.615},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.48},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.293},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.4,-21.6,308.8,43.2);


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoeF+Qg6AAgBg6IAAqHQABg5A6AAIQ+AAQA5AAAAA5IAAKHQAAA6g5AAg");
	mask.setTransform(0.3,0.3);

	// flare
	this.instance = new lib.flare();
	this.instance.parent = this;
	this.instance.setTransform(-209.5,-4.4);
	this.instance.alpha = 0.102;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-209.2},0).wait(1).to({x:-208.3,alpha:0.103},0).wait(1).to({x:-206.8,alpha:0.105},0).wait(1).to({x:-204.6,alpha:0.109},0).wait(1).to({x:-201.6,alpha:0.113},0).wait(1).to({x:-197.7,alpha:0.119},0).wait(1).to({x:-192.9,alpha:0.126},0).wait(1).to({x:-187,alpha:0.135},0).wait(1).to({x:-179.9,alpha:0.145},0).wait(1).to({x:-171.5,alpha:0.157},0).wait(1).to({x:-161.6,alpha:0.172},0).wait(1).to({x:-150.1,alpha:0.189},0).wait(1).to({x:-136.7,alpha:0.208},0).wait(1).to({x:-121.3,alpha:0.231},0).wait(1).to({x:-103.8,alpha:0.257},0).wait(1).to({x:-84.1,alpha:0.286},0).wait(1).to({x:-62.5,alpha:0.317},0).wait(1).to({x:-39.2,alpha:0.352},0).wait(1).to({x:-13.6,alpha:0.321},0).wait(1).to({x:12,alpha:0.29},0).wait(1).to({x:36.5,alpha:0.26},0).wait(1).to({x:59.1,alpha:0.233},0).wait(1).to({x:79.2,alpha:0.208},0).wait(1).to({x:96.8,alpha:0.187},0).wait(1).to({x:111.8,alpha:0.169},0).wait(1).to({x:124.5,alpha:0.154},0).wait(1).to({x:135,alpha:0.141},0).wait(1).to({x:143.7,alpha:0.13},0).wait(1).to({x:150.8,alpha:0.122},0).wait(1).to({x:156.4,alpha:0.115},0).wait(1).to({x:160.6,alpha:0.11},0).wait(1).to({x:163.8,alpha:0.106},0).wait(1).to({x:165.9,alpha:0.103},0).wait(1).to({x:167.1,alpha:0.102},0).wait(1).to({x:167.5},0).wait(80));

	// Layer 1
	this.instance_1 = new lib.card();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61,-39);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-37.9,120.3,76.3);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button_one();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-18,189.6,35.3);


(lib.bg_scale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// WING
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(226,42);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(348).to({_off:false},0).wait(1).to({y:41.8},0).wait(1).to({y:41.3},0).wait(1).to({y:40.4},0).wait(1).to({y:39.1},0).wait(1).to({y:37.4},0).wait(1).to({y:35.2},0).wait(1).to({y:32.5},0).wait(1).to({y:29.3},0).wait(1).to({y:25.5},0).wait(1).to({y:21.3},0).wait(1).to({y:16.6},0).wait(1).to({y:11.5},0).wait(1).to({y:6.1},0).wait(1).to({y:0.6},0).wait(1).to({y:-4.9},0).wait(1).to({y:-10.3},0).wait(1).to({y:-15.3},0).wait(1).to({y:-19.9},0).wait(1).to({y:-23.9},0).wait(1).to({y:-27.5},0).wait(1).to({y:-30.4},0).wait(1).to({y:-32.9},0).wait(1).to({y:-34.8},0).wait(1).to({y:-36.3},0).wait(1).to({y:-37.2},0).wait(1).to({y:-37.8},0).wait(1).to({y:-38},0).wait(104));

	// BG
	this.instance_1 = new lib.BG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71.1,103.9,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,x:-70.9,y:-242.1},455).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-116,731,500);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg_scale
	this.instance = new lib.bg_scale("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(0,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(456));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,-200.9,731,500);


(lib.TXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt04
	this.instance = new lib.TXT04("synched",0,false);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(320).to({_off:false},0).wait(124));

	// Layer 2
	this.instance_1 = new lib.button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).wait(1).to({regX:0.8,regY:-0.4,scaleX:0.88,scaleY:0.88,x:0.7,y:-0.3,alpha:0.402},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:0.8,alpha:0.595},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:-0.4,alpha:0.719},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.807},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.871},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.918},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.951},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.974},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(76).to({regX:0.8,regY:-0.4,scaleX:1,scaleY:1,x:0.8,y:-0.4,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.976},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.945},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.839},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.76},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-0.3,alpha:0.658},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:0.7,alpha:0.523},0).wait(1).to({scaleX:0.87,scaleY:0.87,alpha:0.335},0).wait(1).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:0,y:0,alpha:0},0).to({_off:true},1).wait(123));

	// txt03
	this.instance_2 = new lib.TXT03("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149).to({_off:false},0).to({_off:true},86).wait(209));

	// txt02
	this.instance_3 = new lib.TXT02("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(73).to({_off:false},0).to({_off:true},78).wait(293));

	// txt01
	this.instance_4 = new lib.TXT01("synched",0,false);
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},75).wait(369));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LEGAL
	this.instance = new lib.legalmov("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(377,-153);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(456).to({_off:false},0).wait(112));

	// LOGOS
	this.instance_1 = new lib.logogoup("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(37,-154);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(537).to({startPosition:14},0).wait(1).to({regX:-0.3,regY:0.4,scaleX:1,scaleY:1,x:36.7,y:-153.6,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.985},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.964},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.935},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.895},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.842},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.776},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.692},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.586},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:36.8,alpha:0.451},0).wait(1).to({scaleX:0.85,scaleY:0.85,alpha:0.269},0).wait(1).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:37,y:-154,alpha:0},0).wait(9));

	// WHITE
	this.instance_2 = new lib.white();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:244,regY:-155,x:245,y:-153.2},0).wait(1).to({y:-150.4},0).wait(1).to({y:-145.2},0).wait(1).to({y:-137.1},0).wait(1).to({y:-125.7},0).wait(1).to({y:-111.4},0).wait(1).to({y:-96},0).wait(1).to({y:-82.3},0).wait(1).to({y:-72.1},0).wait(1).to({y:-65.6},0).wait(1).to({y:-62},0).wait(1).to({regX:0,regY:0,x:1,y:94},0).to({_off:true},1).wait(429).to({_off:false,y:-91},0).wait(1).to({regX:244,regY:-155,x:245,y:-245.1},0).wait(1).to({y:-242.5},0).wait(1).to({y:-237.7},0).wait(1).to({y:-230.2},0).wait(1).to({y:-220.1},0).wait(1).to({y:-207.6},0).wait(1).to({y:-193.9},0).wait(1).to({y:-181.1},0).wait(1).to({y:-170.5},0).wait(1).to({y:-162.7},0).wait(1).to({y:-157.6},0).wait(1).to({y:-154.8},0).wait(1).to({regX:0,regY:0,x:1,y:1},0).wait(113));

	// TXT
	this.instance_3 = new lib.TXT("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(476,-153);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({_off:true},443).wait(112));

	// CARD
	this.instance_4 = new lib.card_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(275.1,-244.1,1,1,0,0,0,0.1,-0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(1).to({regX:0.3,regY:0.3,x:275.3,y:-221.5,alpha:0.248},0).wait(1).to({y:-206.8,alpha:0.414},0).wait(1).to({y:-196.1,alpha:0.535},0).wait(1).to({y:-187.8,alpha:0.628},0).wait(1).to({y:-181.3,alpha:0.701},0).wait(1).to({y:-176.1,alpha:0.76},0).wait(1).to({y:-171.8,alpha:0.808},0).wait(1).to({y:-168.3,alpha:0.847},0).wait(1).to({y:-165.5,alpha:0.879},0).wait(1).to({y:-163.2,alpha:0.905},0).wait(1).to({y:-161.3,alpha:0.926},0).wait(1).to({y:-159.7,alpha:0.944},0).wait(1).to({y:-158.4,alpha:0.958},0).wait(1).to({y:-157.4,alpha:0.969},0).wait(1).to({y:-156.6,alpha:0.978},0).wait(1).to({y:-156,alpha:0.985},0).wait(1).to({y:-155.5,alpha:0.991},0).wait(1).to({y:-155.2,alpha:0.995},0).wait(1).to({y:-154.9,alpha:0.997},0).wait(1).to({y:-154.8,alpha:0.999},0).wait(1).to({regX:0.1,regY:-0.1,x:275.1,y:-155.1,alpha:1},0).wait(294).to({regX:0,regY:0,x:275,y:-155},0).wait(1).to({regX:0.3,regY:0.3,x:275.3,y:-154.5,alpha:0.999},0).wait(1).to({y:-154.2,alpha:0.995},0).wait(1).to({y:-153.6,alpha:0.989},0).wait(1).to({y:-152.8,alpha:0.981},0).wait(1).to({y:-151.8,alpha:0.97},0).wait(1).to({y:-150.5,alpha:0.956},0).wait(1).to({y:-148.9,alpha:0.94},0).wait(1).to({y:-147.1,alpha:0.921},0).wait(1).to({y:-145.1,alpha:0.899},0).wait(1).to({y:-142.8,alpha:0.875},0).wait(1).to({y:-140.1,alpha:0.847},0).wait(1).to({y:-137.2,alpha:0.817},0).wait(1).to({y:-134,alpha:0.783},0).wait(1).to({y:-130.4,alpha:0.745},0).wait(1).to({y:-126.5,alpha:0.704},0).wait(1).to({y:-122.2,alpha:0.659},0).wait(1).to({y:-117.5,alpha:0.609},0).wait(1).to({y:-112.3,alpha:0.554},0).wait(1).to({y:-106.5,alpha:0.493},0).wait(1).to({y:-100.1,alpha:0.426},0).wait(1).to({y:-92.8,alpha:0.35},0).wait(1).to({y:-84.5,alpha:0.262},0).wait(1).to({y:-74.3,alpha:0.154},0).wait(1).to({regX:0.1,regY:0.1,x:275.1,y:-59.9,alpha:0},0).to({_off:true},1).wait(218));

	// BG
	this.instance_5 = new lib.bg_1("synched",0,false);
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},456).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-599,775,898.1);


// stage content:
(lib.alfa_aeroflot_728x90_review_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;
	this.instance.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,45,3.033,0.225);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,44,733,500);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"card.jpg", id:"card"},
		{src:"legal.png", id:"legal"},
		{src:"wing.png", id:"wing"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;