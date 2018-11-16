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



(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,54);


(lib.sheep = function() {
	this.initialize(img.sheep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,156);// helper functions:

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


(lib.txt302 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AGQBaIAAiLIAQAAIAAAPQAGgIAJgEQAJgFAKAAQAVAAAMAOQANAPAAAXQAAAYgNAPQgMAOgVAAQgVAAgNgSIAAA2gAGsggQgIAEgEAHIAAAtQAEAHAIAEQAJAFAJAAQAPAAAJgLQAJgLAAgRQAAgQgJgLQgJgLgPAAQgJAAgJAFgAn+BOIAAgaIhNAAIAAAaIgPAAIAAgnQAHgCAEgIQAFgHADgWIAGgxIBGAAIAABXIANAAIAAAogAo3ACQgEAbgLAJIA8AAIAAhJIgpAAgAEnAtQgLgJAAgPQAAgQAKgIQALgJAOAAQAWAAAMANIAAgRQAAgKgHgGQgHgGgMAAQgRAAgNAPIgIgLQARgRAXAAQASAAALAIQALAJAAARIAABFIgQAAIAAgMQgMAOgWAAQgNAAgLgJgAE0AFQgIAGAAAKQAAAKAIAGQAGAGAMAAQASAAAJgNIAAgTQgJgLgSAAQgMAAgGAFgAkgAwQgNgHgIgKIALgLQAGAJAKAFQALAFAMAAQAPAAAJgHQAJgHgBgNQAAgMgJgFQgJgGgQAAIgPAAIAAgQIAPAAQAOAAAJgGQAKgFgBgMQABgLgKgGQgIgHgOAAQgVAAgQARIgJgLQASgVAeAAQAUAAAOAKQANAKAAARQAAAOgKAIQgJAIgLACQALACAKAJQALAJAAAOQAAASgNALQgOALgWAAQgRAAgNgGgAnRAnQgOgPAAgXQAAgWAOgPQAOgPAWAAQAXAAAOAPQAOAPAAAWQAAAXgOAPQgOAPgXAAQgWAAgOgPgAnFgaQgJAMAAAPQAAAQAJAMQAJALAPAAQAQAAAJgLQAJgMAAgQQAAgPgJgMQgJgLgQAAQgPAAgJALgAJMA0IAAgoIgcAAIgZAoIgSAAIAbgoQgMgCgHgIQgHgHAAgNQAAgNAIgJQAJgJAPAAIA2AAIAABlgAIbgeQgFAFAAAHQAAAIAFAFQAEAFAJAAIAkAAIAAgjIgkAAQgJAAgEAFgACtA0IAAhlIA4AAQANAAAIAHQAIAIgBALQABAJgFAGQgFAGgGACQAHABAGAHQAEAIABAIQAAANgIAHQgIAIgOAAgAC9AmIAmAAQAHAAAFgEQAEgFABgHQgBgGgEgFQgFgEgHAAIgmAAgAC9gGIAmAAQAGAAAEgEQAEgEABgGQgBgHgEgEQgEgEgGAAIgmAAgAB+A0IAAguIg1AAIAAAuIgQAAIAAhlIAQAAIAAAqIA1AAIAAgqIAPAAIAABlgAAKA0IAAgoIgbAAIgZAoIgSAAIAbgoQgLgCgIgIQgHgHAAgNQAAgNAIgJQAJgJAPAAIA1AAIAABlgAgmgeQgFAFAAAHQAAAIAEAFQAGAFAIAAIAjAAIAAgjIgjAAQgIAAgFAFgAigA0IAAh0IgXAYIgKgLIAjgkIAQAAIAACLg");
	this.shape.setTransform(-0.6,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt302, new cjs.Rectangle(-63.4,-14.8,126.9,29.6), null);


(lib.txt301 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AB4BLQgTgTAAggQAAgdATgUQATgVAdAAQAdAAASAVQARAUAAAfIAAAFIhtAAQABAUAOANQANAOAUAAQAaAAAQgRIAKANQgUAVgiAAQgdAAgUgUgACHgPQgLAOgBARIBZAAQgBgRgLgOQgLgOgWAAQgUAAgMAOgAitBLQgSgUgBgfQABgeASgUQATgUAeAAQAfAAASAYIgOAMQgMgRgVAAQgWAAgNAOQgNAOAAAXQAAAXANAPQANAOAWAAQAUAAANgRIAOANQgSAXgfAAQgeAAgTgUgAlpBbQgKgEgFgHIAKgSQAMAMANAAQALAAAGgFQAHgGAIgPIADgHIhIiHIAbAAIA7BzIA6hzIAbAAIhSCZQgKASgKAJQgMAJgSAAQgMAAgKgEgAFlBcIAAhpIhHBpIgUAAIAAiGIAVAAIAABmIBHhmIAUAAIAACGgAAtBcIAAh0IhFAAIAAB0IgVAAIAAiGIBwAAIAACGgAERhTIALgJQAOAVAYAAQAZAAAOgVIALAJQgTAZgfAAQgeAAgTgZg");
	this.shape.setTransform(-1.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt301, new cjs.Rectangle(-41.1,-19,82.3,38.1), null);


(lib.txt102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("Ao0B3IAAjpIAaAAIAAAZQAKgMAOgJQAPgIASAAQAiAAAVAZQAUAXAAApQAAAogUAYQgVAYgiAAQgkAAgVgeIAABagAoFhXQgOAJgHAKIAABMQAHAMAOAHQAOAIAPAAQAaAAAOgSQAOgRAAgdQAAgdgOgSQgOgSgagBQgPABgOAHgAgeBiIAAgsIiGAAIAAioIAaAAIAACSIBYAAIAAiSIAbAAIAACSIATAAIAABCgAAtAiQgYgYAAgnQAAgmAYgZQAYgaAkAAQAlAAAVAaQAXAaAAAnIAAAHIiJAAQACAYAQAQQARARAZAAQAgAAAUgVIANARQgaAagpAAQglAAgZgZgABAhPQgOARgBAXIBvAAQgBgXgOgRQgPgRgaAAQgaAAgOARgAlfAhQgXgaAAgkQAAgmAXgZQAXgaAmAAQAmAAAXAaQAWAZAAAmQAAAkgWAaQgXAagmAAQgmAAgXgagAlMhLQgOATAAAbQAAAbAOASQAPATAbAAQAZAAAPgTQAQgSgBgbQABgbgQgTQgPgUgZAAQgbABgPATgALcA2IAAioIAaAAIAACogAIyA2IAAioIAaAAIAABCIA/AAQAZAAAOAPQAOAPAAAUQAAAXgOAOQgPAQgYgBgAJMAgIA8AAQAOgBAIgHQAHgJAAgNQAAgMgHgHQgIgIgOAAIg8AAgAHDA2IAAiQIgxAAIAAgYIB9AAIAAAYIgyAAIAACQgAFWA2IAAhKIhYAAIAABKIgaAAIAAioIAaAAIAABGIBYAAIAAhGIAaAAIAACogAqDA2IAAiQIhYAAIAACQIgaAAIAAioICNAAIAACog");
	this.shape.setTransform(-0.2,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt102, new cjs.Rectangle(-80.5,-23.3,161.1,46.7), null);


(lib.txt101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AiVCXIAAjoIAaAAIAAAYQAJgNAPgIQAPgIASAAQAhAAAVAZQAUAXAAAoQAAAogUAYQgVAZghAAQgkAAgVgeIAABagAhmg2QgOAHgHAMIAABLQAHAMAOAHQAOAIAPAAQAZAAAPgSQAOgTAAgcQAAgcgOgSQgPgSgZAAQgPgBgOAJgAn0A5QgjgiAAg0QAAg1AjgiQAigiAzAAQA4AAAhAuIgZAOQgKgPgRgKQgRgJgUAAQgmAAgaAbQgaAaAAAqQAAApAaAaQAaAbAmAAQAUAAARgJQARgKAKgPIAZAOQgiAug3AAQgzAAgigigAH9BWIAAiCIhZCCIgZAAIAAinIAaAAIAACAIBZiAIAaAAIAACngADzBWIAAinIB2AAIAAAWIhcAAIAACRgACkBWIAAiCIhZCCIgZAAIAAinIAaAAIAACAIBYiAIAaAAIAACngAkDBWIAAiRIgxAAIAAgWIB8AAIAAAWIgxAAIAACRg");
	this.shape.setTransform(-23.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt101, new cjs.Rectangle(-77,-23.3,134.9,46.7), null);


(lib.txt2month = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ADlBEIAAgbIhUAAIAAhqIAQAAIAABbIA3AAIAAhbIARAAIAABbIAMAAIAAAqgAESAiQgMgJAAgRQAAgPALgKQAMgJAOAAQAXAAANAPIAAgTQAAgLgIgGQgHgGgMAAQgTAAgOAPIgIgLQASgSAZAAQASAAAMAJQALAJAAASIAABIIgQAAIAAgMQgOAPgWAAQgOAAgLgKgAEfgHQgIAGAAAJQAAALAIAGQAHAHAMAAQATAAAKgOIAAgTQgKgNgTAAQgMAAgHAHgAhMAcQgPgQAAgYQAAgXAPgQQAPgQAXAAQAZAAANASIgKALQgKgOgRAAQgQAAgKALQgKAMAAARQAAASAKALQAKAMAQAAQARAAAKgOIAKAKQgNATgZAAQgXAAgPgQgAjHAcQgQgPAAgZQAAgXAPgQQAPgQAXAAQAYAAANAQQAOAQAAAZIAAAEIhWAAQABAPAKAKQALALAQAAQAUAAANgOIAIALQgQARgaAAQgYAAgPgQgAi7gqQgKAKAAAOIBGAAQAAgNgKgLQgJgMgRAAQgPAAgJAMgABfApIAAgpIgeAAIgZApIgUAAIAcgpQgMgCgHgIQgIgIAAgOQAAgOAJgJQAJgKAQAAIA4AAIAABqgAArgtQgFAFAAAIQAAAIAFAFQAFAFAJAAIAmAAIAAgkIgmAAQgJAAgFAFgAkCApIAAhSIgjBSIgGAAIgjhSIAABSIgQAAIAAhqIAWAAIAgBPIAghPIAXAAIAABqg");
	this.shape.setTransform(102.1,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2month, new cjs.Rectangle(-37.1,-72,174.4,86.9), null);


(lib.txt2first = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhLBLIAAiSIAQAAIAAAQQAHgJAJgEQAKgGAKAAQAWAAAMAQQANAPAAAZQAAAZgNAPQgMAPgWAAQgVAAgPgTIAAA5gAgtg2QgJAFgFAHIAAAvQAFAHAJAFQAJAFAJAAQAQAAAKgLQAIgLAAgSQAAgSgIgLQgKgMgQAAQgJAAgJAFgAGTAVQgOgQgBgXQABgYAOgPQAPgRAXAAQAYAAAOARQAPAPAAAYQAAAXgPAQQgOAQgYAAQgXAAgPgQgAGfgvQgJAMAAARQAAARAJALQAJAMARAAQAQAAAKgMQAJgLAAgRQAAgRgJgMQgKgMgQAAQgRAAgJAMgAC1AVQgPgQAAgXQAAgYAPgPQAOgRAYAAQAXAAAPARQAPAPgBAYQABAXgPAQQgPAQgXAAQgYAAgOgQgADBgvQgKAMAAARQAAARAKALQAJAMARAAQAQAAAJgMQAKgLAAgRQAAgRgKgMQgJgMgQAAQgRAAgJAMgAi9AVQgQgPAAgYQAAgXAPgQQAPgRAXAAQAYAAANARQANAQAAAZIAAAEIhVAAQAAAOALALQAKAKARAAQAUAAANgNIAIALQgRAQgaAAQgXAAgPgQgAixgxQgKALAAAOIBGAAQAAgOgKgLQgJgLgRAAQgPAAgJALgAneAVQgOgQAAgXQAAgYAOgQQAPgQAYAAQAYAAAOATIgLAKQgKgOgRAAQgRAAgJAMQgKALAAASQAAASAKALQAJALARAAQARAAAKgOIALALQgOASgYAAQgYAAgPgQgAEqAjIAAhqIBKAAIAAAPIg5AAIAABbgAAyAjIAAhqIA7AAQAOAAAHAHQAJAIgBAMQABAJgFAHQgFAGgIACQAIACAHAIQAEAIAAAIQABANgIAIQgJAIgPAAgABCAUIApAAQAHAAAFgEQAFgFAAgHQAAgGgFgFQgFgFgHAAIgpAAgABCgaIAoAAQAIAAAEgFQADgEAAgGQAAgHgDgEQgEgEgIAAIgoAAgAj5AjIAAhbIg3AAIAABbIgRAAIAAhqIBZAAIAABqg");
	this.shape.setTransform(115.4,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2first, new cjs.Rectangle(-50.1,-74,214.8,88.9), null);


(lib.txt2eight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AikGVQhLgZgvg0QgvgzgBhOQABgzAYgpQAXgqAogfQAogfAygRQgugPglgbQglgagWgmQgWgmAAgzQAAg6AcgrQAcgpAugbQAvgaA4gNQA5gMA6AAQA6AAA5AMQA5ANAuAaQAvAbAcApQAcArAAA6QAAAzgWAmQgWAmgmAaQglAbgvAPQAyARApAfQApAfAXAqQAYApABAzQgBBOgvAzQgvAzhMAaQhLAZhZAAQhYAAhMgZgAg+BSQgkANgbAYQgcAXgBAiQABAvAsAbQArAbBCABQArAAAjgNQAjgMAUgXQAVgWABggQgCgigbgXQgbgYgkgNQgkgNgbgEQgbAEgjANgAhlj8QgmAZgBAtQABAfAYAVQAYAVAgALQAhALAaAEQAbgEAggLQAggLAYgVQAYgVABgfQgBgtgngZQgmgZg+AAQg+AAgnAZg");
	this.shape.setTransform(-0.5,-3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2eight, new cjs.Rectangle(-40,-78.1,80,156.3), null);


(lib.txt2do = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AgTBBIAAgaIhNAAIAAAaIgPAAIAAgnQAIgCAEgHQAFgIACgUIAGgzIBHAAIAABXIAMAAIAAAogAhMgJQgDAZgMAJIA9AAIAAhIIgqAAgAAaAaQgOgPAAgWQAAgWAOgQQAOgPAWAAQAXAAANAPQAOAQAAAWQAAAWgOAPQgNAPgXABQgWgBgOgPgAAlgmQgIALgBAQQABAPAIAMQAKALAPABQAQgBAJgLQAIgMABgPQgBgQgIgLQgJgMgQAAQgPAAgKAMg");
	this.shape.setTransform(-0.8,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2do, new cjs.Rectangle(-14,-14.7,28,29.6), null);


(lib.sheep_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sheep();
	this.instance.parent = this;
	this.instance.setTransform(365,-244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sheep_1, new cjs.Rectangle(365,-244,228,156), null);


(lib.percentSlash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AicDZIEVmxIAkAAIkVGxg");
	this.shape.setTransform(0.7,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percentSlash, new cjs.Rectangle(-15,-22,31.3,43.4), null);


(lib.percent02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhLBNQgcgfAAgtQAAgtAdgfQAdgfAtAAQAuAAAdAfQAdAfAAAtQAAAtgdAfQgdAeguAAQguAAgdgegAgvgzQgSAUAAAgQAAAfASAVQATAVAcAAQAcAAATgVQATgVAAgfQAAgggTgUQgSgWgdAAQgdAAgSAWg");
	this.shape.setTransform(-0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percent02, new cjs.Rectangle(-11,-11,20.9,21.4), null);


(lib.percen01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhLBNQgdgeAAguQAAgtAegfQAdgfAtAAQAuAAAdAfQAeAfAAAtQAAAugeAeQgdAeguAAQguAAgdgegAgugzQgTAVAAAfQAAAfATAVQASAWAcAAQAcAAATgWQATgVAAgfQAAgfgTgVQgSgWgdAAQgcAAgSAWg");
	this.shape.setTransform(-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percen01, new cjs.Rectangle(-11,-11,21,21.4), null);


(lib.LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AgYAZQgLgKAAgPQAAgOALgKQALgLANAAQAPAAAKALQAKAKAAAOQAAAPgKAKQgKALgPAAQgNAAgLgLg");
	this.shape.setTransform(37.7,1.2,0.61,0.61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF3124").s().p("ABGCXIgRg6IhqAAIgSA6Ig+AAIBnkoQASgFANAAQAUAAAQAFIBhEogAAmArIgkiCIgCAAIglCCIBLAAg");
	this.shape_1.setTransform(-34.8,-1.6,0.61,0.61);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF3124").s().p("AAeBsQgTgugKgUQgGgNgEgEQgFgEgLAAIgIAAIAABXIg4AAIAAjTIA4AAIAABQIAJAAQAKAAAFgEQADgCAFgKIANgfQAKgTAFgFQAMgMASgBQAQgBAKACIgCAnQgIgCgFAFQgHAGgLAYQgNAbgSADIAAABQAMADAIAIQAHAGAGAOIAmBQg");
	this.shape_2.setTransform(90,1,0.61,0.61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF3124").s().p("AAgBqIAAhXIg/AAIAABXIg3AAIAAjTIA3AAIAABQIA/AAIAAhQIA3AAIAADTg");
	this.shape_3.setTransform(76.3,1.2,0.61,0.61);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF3124").s().p("AhVBeIAAjLIA4AAIAABGQAUgFAOAAQAnAAAVAUQAVATAAAiQAAAmgXAVQgYAWgrAAQgrAAgmgQgAgdACIAAA9QALADANAAQASAAAIgJQAHgJAAgRQAAgfghAAQgHAAgRACg");
	this.shape_4.setTransform(-6.1,1.3,0.61,0.61);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF3124").s().p("AhIBfQgVgSAAgfQAAgiAWgSQAWgTAqAAQALAAAQAEIAAgLQAAgVgHgGQgHgGgaAAQgNAAgfAEIgJgpQAlgIAjAAQAZAAAQAFQAPAGAIAMQAHAIACALQADAMAAAWIAAA4QAAAWAEANQAEANALAQIgkAZQgEgBgGgFQgHgGgEgGIgUALQgRAHgXAAQgeAAgTgQgAgbAQQgLAHAAAQQAAAcAgAAQANAAAQgFQgDgLAAgXIAAgQQgGgCgLAAQgUAAgKAGg");
	this.shape_5.setTransform(63.6,1.1,0.61,0.61);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EF3124").s().p("AhIBfQgVgSAAgfQAAgiAWgSQAWgTAqAAQALAAAQAEIAAgLQAAgVgHgGQgHgGgaAAQgNAAgfAEIgJgpQAlgIAjAAQAwAAAQAXQAHAIACALQADAMAAAWIAAA4QAAAWAEANQAEANALAQIgkAZQgEgBgGgFQgHgGgEgGIgUALQgRAHgXAAQgeAAgTgQgAgbAQQgLAHAAAQQAAAcAgAAQAOAAAPgFQgDgLAAgXIAAgQQgGgCgLAAQgUAAgKAGg");
	this.shape_6.setTransform(26.2,1.1,0.61,0.61);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF3124").s().p("AhfBOQAMgHAHgRQADgLAAgkIAAhoQAtgNAnAAQApAAAsANIAADMIg4AAIAAimQgSgDgLABQgLgBgSADIAABMQAAAtgOAVQgNASgiAKg");
	this.shape_7.setTransform(-19.8,1.1,0.61,0.61);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EF3124").s().p("AgbC6IAAhNQgQALgdAAQgmAAgWgcQgWgdAAg1QAAhvBcAAQAUAAAPAHIAAhbIA3AAIAABbQAPgHAUAAQBcAAAABuQAAA0gXAeQgXAdgkAAQgdAAgQgLIAABNgAAcgwIAAB0QANAFAPAAQATAAAMgSQALgRAAgdQAAg/gnAAQgSAAgNAGgAhhAKQAAA/AqAAQAPAAANgFIAAh0QgNgGgSAAQgnAAAABAg");
	this.shape_8.setTransform(9.9,0.6,0.61,0.61);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EF3124").s().p("AhjCKIAAkXQAQgEAagEQAbgEAUAAQAwAAAkAIIgBAsQgdgDgkAAQgdAAgSACIAABMQAYgFATAAQAvgBAZAZQAYAWgBApQAAAugbAaQgcAagzAAQgtAAgvgQgAgnASIAABVQAOAEAWABQAUAAALgOQAMgMAAgWQAAgrgrgCIgFAAQgOAAgRADg");
	this.shape_9.setTransform(50.6,-1.4,0.61,0.61);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EF3124").s().p("AkSG7QgEAAgDgDQgCgCAAgEIAAhlQAAgDACgDQADgDAEAAIIlAAQAEAAADADQACADAAADIAABlQAAAEgCACQgDADgEAAgACgCWQgEgBgBgEIgnhsIjnAAIgnBsQgBAEgEABQgDACgDgBIhcgkQgDgBgCgEQgBgDABgDIConLQAPgpAQgSQAYgcAnAAQAoAAAYAbQAQASAPAqICoHLQADAIgIADIhbAkIgDAAIgEgBgAhOhCICdAAIhOjsIgBAAg");
	this.shape_10.setTransform(-77.7,0,0.61,0.61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-95,-27,190.5,54), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-141,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-141,-126,275,54), null);


(lib.buttover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AkWBaIAAiKIAPAAIAAAOQAGgHAJgFQAJgFAKAAQAVAAANAPQAMAOAAAXQAAAYgMAPQgNAOgVAAQgUAAgOgSIAAA2gAj6ggQgIAEgFAIIAAAsQAFAHAIAEQAIAFAKABQAPAAAIgMQAJgKAAgSQAAgQgJgLQgIgLgPAAQgKAAgIAFgAHQAnQgOgOAAgYQAAgVAOgQQAOgPAWAAQAWAAANAPQAOAQAAAWIAAAFIhSAAQABAPAKAKQAKAJAPABQATAAAMgOIAIALQgQAPgZAAQgWABgPgQgAHcgbQgJAKAAANIBCAAQAAgNgJgKQgIgLgRAAQgOAAgJALgAD2AnQgNgPAAgXQAAgVANgQQAOgPAXAAQAXAAAOARIgLAKQgJgNgQAAQgQAAgKALQgJALAAAQQAAASAJAKQAKAMAQAAQAQAAAJgOIALAKQgOARgXAAQgXABgOgQgAppAiQgUgUABgfQgBgfAUgVQAUgVAeAAQAfAAATAVQAUAVgBAfQABAfgUAUQgTAVgfgBQgeABgUgVgApcg6QgOAQAAAZQAAAYAOAQQAOAQAXAAQAYAAAOgQQANgQAAgYQAAgZgNgQQgOgQgYAAQgXAAgOAQgAJQA0IAAhXIgdAAIAAgNIBLAAIAAANIgeAAIAABXgAGYA0IAAgqQgNAIgRgBQgUABgJgJQgJgHAAgRIAAghIAQAAIAAAcQAAAOAGAFQAHAFANgBQAQABAKgFIAAgvIARAAIAABkgABLA0IAAhkIAQAAIAAAnIAlAAQAPAAAJAJQAJAIAAANQAAANgJAJQgJAJgPAAgABbAmIAkAAQAIAAAEgEQAFgGAAgHQAAgIgFgFQgEgEgIgBIgkAAgAAJA0IAAhXIgdAAIAAgNIBKAAIAAANIgeAAIAABXgAg4A0IAAhkIAQAAIAABkgAieA0IAAhkIAQAAIAAAnIAlAAQAPAAAJAJQAJAIAAANQAAANgJAJQgJAJgPAAgAiOAmIAkAAQAIAAAEgEQAFgGAAgHQAAgIgFgFQgEgEgIgBIgkAAgAk9A0IglgtIgRAQIAAAdIgPAAIAAhkIAPAAIAAA1IA2g1IAUAAIgtAuIAtA2gAnFA0IAAhXIgdAAIAAgNIBLAAIAAANIgeAAIAABXg");
	this.shape.setTransform(-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#EF3124").ss(1,1,1).p("AqTjFIUnAAQBkAAAABkIAADDQAABkhkAAI0nAAQhkAAAAhkIAAjDQAAhkBkAAg");
	this.shape_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.buttover, new cjs.Rectangle(-77,-21,154.1,41.6), null);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkWBaIAAiKIAPAAIAAAOQAGgHAJgFQAJgFAKAAQAVAAANAPQAMAOAAAXQAAAYgMAPQgNAOgVAAQgUAAgOgSIAAA2gAj6ggQgIAEgFAIIAAAsQAFAHAIAEQAIAFAKABQAPAAAIgMQAJgKAAgSQAAgQgJgLQgIgLgPAAQgKAAgIAFgAHQAnQgOgOAAgYQAAgVAOgQQAOgPAWAAQAWAAANAPQAOAQAAAWIAAAFIhSAAQABAPAKAKQAKAJAPABQATAAAMgOIAIALQgQAPgZAAQgWABgPgQgAHcgbQgJAKAAANIBCAAQAAgNgJgKQgIgLgRAAQgOAAgJALgAD2AnQgNgPAAgXQAAgVANgQQAOgPAXAAQAXAAAOARIgLAKQgJgNgQAAQgQAAgKALQgJALAAAQQAAASAJAKQAKAMAQAAQAQAAAJgOIALAKQgOARgXAAQgXABgOgQgAppAiQgUgUABgfQgBgfAUgVQAUgVAeAAQAfAAATAVQAUAVgBAfQABAfgUAUQgTAVgfgBQgeABgUgVgApcg6QgOAQAAAZQAAAYAOAQQAOAQAXAAQAYAAAOgQQANgQAAgYQAAgZgNgQQgOgQgYAAQgXAAgOAQgAJQA0IAAhXIgdAAIAAgNIBLAAIAAANIgeAAIAABXgAGYA0IAAgqQgNAIgRgBQgUABgJgJQgJgHAAgRIAAghIAQAAIAAAcQAAAOAGAFQAHAFANgBQAQABAKgFIAAgvIARAAIAABkgABLA0IAAhkIAQAAIAAAnIAlAAQAPAAAJAJQAJAIAAANQAAANgJAJQgJAJgPAAgABbAmIAkAAQAIAAAEgEQAFgGAAgHQAAgIgFgFQgEgEgIgBIgkAAgAAJA0IAAhXIgdAAIAAgNIBKAAIAAANIgeAAIAABXgAg4A0IAAhkIAQAAIAABkgAieA0IAAhkIAQAAIAAAnIAlAAQAPAAAJAJQAJAIAAANQAAANgJAJQgJAJgPAAgAiOAmIAkAAQAIAAAEgEQAFgGAAgHQAAgIgFgFQgEgEgIgBIgkAAgAk9A0IglgtIgRAQIAAAdIgPAAIAAhkIAPAAIAAA1IA2g1IAUAAIgtAuIAtA2gAnFA0IAAhXIgdAAIAAgNIBLAAIAAANIgeAAIAABXg");
	this.shape.setTransform(-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#EF3124").ss(1,1,1).p("AqTjFIUnAAQBkAAAABkIAADDQAABkhkAAI0nAAQhkAAAAhkIAAjDQAAhkBkAAg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF3124").s().p("AqTDGQhkAAAAhkIAAjDQAAhkBkAAIUnAAQBkAAAABkIAADDQAABkhkAAg");
	this.shape_2.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt, new cjs.Rectangle(-77,-21,154.1,41.6), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BCE4F8","#A0D1EE"],[0,1],1,-1.9,0,1,-1.9,815.9).s().p("EhisAspMAAAhZRMDFZAAAMAAABZRg");
	this.shape.setTransform(-224.9,-148);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-856.6,-433.7,1263.5,571.5), null);


(lib.TXT3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt302
	this.instance = new lib.txt302();
	this.instance.parent = this;
	this.instance.setTransform(1,35.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.7,regY:1,x:0.3,y:26.6,alpha:0.412},0).wait(1).to({y:22.1,alpha:0.594},0).wait(1).to({y:19.2,alpha:0.71},0).wait(1).to({y:17.2,alpha:0.791},0).wait(1).to({y:15.7,alpha:0.851},0).wait(1).to({y:14.6,alpha:0.895},0).wait(1).to({y:13.8,alpha:0.928},0).wait(1).to({y:13.2,alpha:0.952},0).wait(1).to({y:12.7,alpha:0.97},0).wait(1).to({y:12.4,alpha:0.983},0).wait(1).to({y:12.2,alpha:0.991},0).wait(1).to({y:12.1,alpha:0.997},0).wait(1).to({y:12,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:1,y:11,alpha:1},0).wait(5));

	// txt301
	this.instance_1 = new lib.txt301();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,-44,1.14,1.14);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-1.1,regY:-0.5,x:0.8,y:-32.6,alpha:0.412},0).wait(1).to({y:-27.3,alpha:0.594},0).wait(1).to({y:-23.9,alpha:0.71},0).wait(1).to({y:-21.6,alpha:0.791},0).wait(1).to({y:-19.8,alpha:0.851},0).wait(1).to({y:-18.5,alpha:0.895},0).wait(1).to({y:-17.6,alpha:0.928},0).wait(1).to({y:-16.9,alpha:0.952},0).wait(1).to({y:-16.4,alpha:0.97},0).wait(1).to({y:-16,alpha:0.983},0).wait(1).to({y:-15.8,alpha:0.991},0).wait(1).to({y:-15.6,alpha:0.997},0).wait(1).to({y:-15.5,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:2,y:-15,alpha:1},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-55.4,120.7,101.4);


(lib.txt2percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// percen01
	this.instance = new lib.percen01();
	this.instance.parent = this;
	this.instance.setTransform(-38,-49,0.25,0.25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({regX:-0.5,regY:-0.3,scaleX:0.53,scaleY:0.53,x:-38.3,y:-49.2,alpha:0.367},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-38.4,alpha:0.559},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:-49.3,alpha:0.686},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.775},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-38.5,alpha:0.84},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.889},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.924},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.951},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.97},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-38,y:-49,alpha:1},0).wait(1));

	// percent02
	this.instance_1 = new lib.percent02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13,-26,0.25,0.25,0,0,0,-0.2,-0.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regX:-0.6,regY:-0.3,scaleX:0.53,scaleY:0.53,x:-13.3,y:-26.4,alpha:0.367},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-13.4,y:-26.7,alpha:0.559},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:-26.9,alpha:0.686},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-13.5,y:-27,alpha:0.775},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.84},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-27.1,alpha:0.889},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:-27.2,alpha:0.924},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-13.6,alpha:0.951},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.97},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({regX:-0.2,regY:-0.4,scaleX:1,scaleY:1,x:-13.2,y:-27.4,alpha:1},0).wait(1));

	// percentSlash
	this.instance_2 = new lib.percentSlash();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-25.9,-38,1,1,-35);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0.7,regY:-0.3,rotation:-18,x:-25.4,y:-38.4,alpha:0.485},0).wait(1).to({rotation:-11.6,x:-25.3,alpha:0.669},0).wait(1).to({rotation:-8,y:-38.3,alpha:0.773},0).wait(1).to({rotation:-5.6,alpha:0.84},0).wait(1).to({rotation:-4,x:-25.2,alpha:0.887},0).wait(1).to({rotation:-2.8,alpha:0.921},0).wait(1).to({rotation:-1.9,y:-38.2,alpha:0.945},0).wait(1).to({rotation:-1.3,alpha:0.964},0).wait(1).to({rotation:-0.8,alpha:0.977},0).wait(1).to({rotation:-0.5,alpha:0.986},0).wait(1).to({rotation:-0.3,alpha:0.993},0).wait(1).to({rotation:-0.1,alpha:0.997},0).wait(1).to({rotation:0,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-26,y:-38,alpha:1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-78.1,104,156.3);


(lib.TXT2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt2month
	this.instance = new lib.txt2month();
	this.instance.parent = this;
	this.instance.setTransform(-27,132);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(1).to({regX:102.1,regY:-65.2,x:75.1,y:24,alpha:0.549},0).wait(1).to({y:8.4,alpha:0.749},0).wait(1).to({y:-0.3,alpha:0.86},0).wait(1).to({y:-5.4,alpha:0.926},0).wait(1).to({y:-8.5,alpha:0.965},0).wait(1).to({y:-10.2,alpha:0.987},0).wait(1).to({y:-11,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:-27,y:54,alpha:1},0).wait(1).to({regX:102.1,regY:-65.2,x:75.1,y:-10.9},0).wait(1).to({y:-9.7},0).wait(1).to({y:-8.5},0).wait(1).to({regX:0,regY:0,x:-27,y:57},0).wait(55).to({regX:102.1,regY:-65.2,x:75.1,y:-7.8},0).wait(1).to({y:-6.4},0).wait(1).to({y:-5.1},0).wait(1).to({regX:0,regY:0,x:-27,y:60.5},0).wait(1).to({regX:102.1,regY:-65.2,x:75.1,y:-4.9,alpha:0.995},0).wait(1).to({y:-5.5,alpha:0.978},0).wait(1).to({y:-6.7,alpha:0.948},0).wait(1).to({y:-8.5,alpha:0.9},0).wait(1).to({y:-11.2,alpha:0.831},0).wait(1).to({y:-15,alpha:0.733},0).wait(1).to({y:-20.4,alpha:0.593},0).wait(1).to({y:-28.5,alpha:0.382},0).wait(1).to({regX:0,regY:0,x:-27,y:22,alpha:0},0).wait(1));

	// txt2first
	this.instance_1 = new lib.txt2first();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27,110);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).wait(1).to({regX:115.3,regY:-66.5,x:88.3,y:0.7,alpha:0.549},0).wait(1).to({y:-14.9,alpha:0.749},0).wait(1).to({y:-23.6,alpha:0.86},0).wait(1).to({y:-28.7,alpha:0.926},0).wait(1).to({y:-31.8,alpha:0.965},0).wait(1).to({y:-33.5,alpha:0.987},0).wait(1).to({y:-34.3,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:-27,y:32,alpha:1},0).wait(1).to({regX:115.3,regY:-66.5,x:88.3,y:-34.2},0).wait(1).to({y:-33},0).wait(1).to({y:-31.8},0).wait(1).to({regX:0,regY:0,x:-27,y:35},0).wait(55).to({regX:115.3,regY:-66.5,x:88.3,y:-31.1},0).wait(1).to({y:-29.7},0).wait(1).to({y:-28.4},0).wait(1).to({regX:0,regY:0,x:-27,y:38.5},0).wait(1).to({regX:115.3,regY:-66.5,x:88.3,y:-28.2,alpha:0.995},0).wait(1).to({y:-28.8,alpha:0.978},0).wait(1).to({y:-30,alpha:0.948},0).wait(1).to({y:-31.8,alpha:0.9},0).wait(1).to({y:-34.5,alpha:0.831},0).wait(1).to({y:-38.3,alpha:0.733},0).wait(1).to({y:-43.7,alpha:0.593},0).wait(1).to({y:-51.8,alpha:0.382},0).wait(1).to({regX:0,regY:0,x:-27,y:0,alpha:0},0).wait(5));

	// txt2percent
	this.instance_2 = new lib.txt2percent("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(25,18,0.705,0.705);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(71).to({startPosition:16},0).wait(1).to({regX:-25.6,regY:-38.6,scaleX:0.71,scaleY:0.71,x:7.1,y:-9.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:7.8,y:-8.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:8.6,y:-8.6},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.74,scaleY:0.74,x:27.7,y:20.1},0).wait(1).to({regX:-25.6,regY:-38.6,scaleX:0.73,scaleY:0.73,x:8.3,y:-8.7,alpha:0.982},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:6.6,y:-9.3,alpha:0.919},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:3.5,y:-10.5,alpha:0.796},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-1.2,y:-12.2,alpha:0.61},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-6.8,y:-14.3,alpha:0.39},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-11.6,y:-16,alpha:0.204},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-14.7,y:-17.1,alpha:0.081},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-16.3,y:-17.7,alpha:0.018},0).wait(1).to({regX:0,regY:0,scaleX:0.25,scaleY:0.25,x:-10.4,y:-8.3,alpha:0},0).wait(5));

	// txt2eight
	this.instance_3 = new lib.txt2eight();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-36,-8.1,0.493,0.493,0,0,0,-0.1,-0.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(1).to({regX:-0.5,regY:-3,scaleX:0.59,scaleY:0.59,x:-36.2,y:-15.3,alpha:0.437},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:-18,alpha:0.632},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-36.3,y:-19.6,alpha:0.752},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:-20.7,alpha:0.832},0).wait(1).to({scaleX:0.68,scaleY:0.68,y:-21.4,alpha:0.888},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:-22,alpha:0.927},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:-22.4,alpha:0.955},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:-22.6,alpha:0.974},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:-22.8,alpha:0.987},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:-22.9,alpha:0.995},0).wait(1).to({scaleX:0.71,scaleY:0.71,alpha:0.999},0).wait(1).to({regX:-0.1,regY:-0.1,x:-36,y:-21,alpha:1},0).wait(68).to({regX:-0.5,regY:-3,scaleX:0.71,scaleY:0.71,x:-36.3,y:-23.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-36.5,y:-23},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-36.6},0).wait(1).to({regX:-0.1,regY:-0.2,scaleX:0.74,scaleY:0.74,x:-36.3,y:-21},0).wait(1).to({regX:-0.5,regY:-3,scaleX:0.73,scaleY:0.73,x:-36.5,y:-23,alpha:0.982},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-36.2,alpha:0.919},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-35.6,y:-22.9,alpha:0.796},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-34.7,alpha:0.61},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-33.7,y:-22.8,alpha:0.39},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-32.8,alpha:0.204},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-32.2,y:-22.7,alpha:0.081},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-31.9,alpha:0.018},0).wait(1).to({regX:-0.2,regY:-0.4,scaleX:0.25,scaleY:0.25,x:-31.8,y:-22,alpha:0},0).wait(5));

	// txt2do
	this.instance_4 = new lib.txt2do();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-72.1,-13.1,0.818,0.818,0,0,0,-0.1,-0.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-0.8,regY:2.5,x:-72.6,y:-4.8,alpha:0.437},0).wait(1).to({y:-2,alpha:0.632},0).wait(1).to({y:-0.3,alpha:0.752},0).wait(1).to({y:0.8,alpha:0.832},0).wait(1).to({y:1.6,alpha:0.888},0).wait(1).to({y:2.1,alpha:0.927},0).wait(1).to({y:2.5,alpha:0.955},0).wait(1).to({y:2.7,alpha:0.974},0).wait(1).to({y:2.9,alpha:0.987},0).wait(1).to({y:3,alpha:0.995},0).wait(1).to({y:3.1,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-72,y:1,alpha:1},0).wait(72).to({regX:-0.8,regY:2.5,scaleX:0.82,scaleY:0.82,x:-72.8,y:3.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-73.7,y:3.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-74.6,y:4.2},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.86,scaleY:0.86,x:-74.2,y:2.2},0).wait(1).to({regX:-0.8,regY:2.5,scaleX:0.85,scaleY:0.85,y:3.9,alpha:0.982},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-72.3,y:2.9,alpha:0.919},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-68.6,y:0.7,alpha:0.796},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-62.9,y:-2.6,alpha:0.61},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-56.3,y:-6.6,alpha:0.39},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-50.7,y:-9.9,alpha:0.204},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-47,y:-12.1,alpha:0.081},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-45.1,y:-13.2,alpha:0.018},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.29,scaleY:0.29,x:-44.4,y:-14.3,alpha:0},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-16.2,18.3,10.6);


(lib.TXT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt102
	this.instance = new lib.txt102();
	this.instance.parent = this;
	this.instance.setTransform(0,168.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({regX:-0.2,regY:5.9,x:-0.2,y:90.3,alpha:0.536},0).wait(1).to({y:59.7,alpha:0.731},0).wait(1).to({y:42.1,alpha:0.843},0).wait(1).to({y:31.1,alpha:0.914},0).wait(1).to({y:24.2,alpha:0.957},0).wait(1).to({y:20.1,alpha:0.983},0).wait(1).to({y:18.1,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:11.6,alpha:1},0).wait(1).to({regX:-0.2,regY:5.9,x:-0.2,y:18},0).wait(1).to({y:19.7},0).wait(1).to({y:21.4},0).wait(1).to({regX:0,regY:0,x:0,y:16},0).wait(55).to({regX:-0.2,regY:5.9,scaleX:1,scaleY:1,x:-0.2,y:22},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:22.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:22.2},0).wait(1).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:0,y:16},0).wait(1).to({regX:-0.2,regY:5.9,scaleX:1.03,scaleY:1.03,x:-0.2,y:22.1,alpha:0.977},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:21.7,alpha:0.894},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-0.1,y:21.1,alpha:0.733},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:20.1,alpha:0.5},0).wait(1).to({scaleX:0.54,scaleY:0.54,y:19.1,alpha:0.267},0).wait(1).to({scaleX:0.42,scaleY:0.42,y:18.5,alpha:0.106},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:0,y:18.1,alpha:0.023},0).wait(1).to({regX:0,regY:0.1,scaleX:0.35,scaleY:0.35,y:16,alpha:0},0).wait(1));

	// txt101
	this.instance_1 = new lib.txt101();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,136.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-23.4,regY:2.1,x:-23.4,y:54.5,alpha:0.536},0).wait(1).to({y:23.9,alpha:0.731},0).wait(1).to({y:6.3,alpha:0.843},0).wait(1).to({y:-4.7,alpha:0.914},0).wait(1).to({y:-11.6,alpha:0.957},0).wait(1).to({y:-15.6,alpha:0.983},0).wait(1).to({y:-17.7,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:-20.4,alpha:1},0).wait(1).to({regX:-23.4,regY:2.1,x:-23.4,y:-17.8},0).wait(1).to({y:-16.1},0).wait(1).to({y:-14.3},0).wait(1).to({regX:0,regY:0,x:0,y:-16},0).wait(57).to({regX:-23.4,regY:2.1,scaleX:1,scaleY:1,x:-23.5,y:-13.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-24,y:-13.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-24.4},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:1.05,scaleY:1.05,x:-0.1,y:-16},0).wait(1).to({regX:-23.4,regY:2.1,scaleX:1.03,scaleY:1.03,x:-24.2,y:-13.8,alpha:0.977},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-22.8,y:-13.9,alpha:0.894},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-20.2,y:-14.1,alpha:0.733},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-16.4,y:-14.5,alpha:0.5},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-12.5,y:-14.8,alpha:0.267},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-9.9,y:-15.1,alpha:0.106},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-8.5,y:-15.2,alpha:0.023},0).wait(1).to({regX:0,regY:-0.1,scaleX:0.35,scaleY:0.35,x:0,y:-16,alpha:0},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,123.5,107.2,30.2);


(lib.legalmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-10);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.5,regY:-99,x:-3.5,y:-104.4,alpha:0.452},0).wait(1).to({y:-102.3,alpha:0.662},0).wait(1).to({y:-101.1,alpha:0.789},0).wait(1).to({y:-100.2,alpha:0.873},0).wait(1).to({y:-99.7,alpha:0.928},0).wait(1).to({y:-99.3,alpha:0.963},0).wait(1).to({y:-99.1,alpha:0.985},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.996},0).to({alpha:1},1).wait(76).to({regX:-3.5,regY:-99,x:-3.5,y:-99,alpha:0.995},0).wait(1).to({y:-98.8,alpha:0.981},0).wait(1).to({y:-98.5,alpha:0.954},0).wait(1).to({y:-98.1,alpha:0.912},0).wait(1).to({y:-97.5,alpha:0.852},0).wait(1).to({y:-96.7,alpha:0.766},0).wait(1).to({y:-95.4,alpha:0.642},0).wait(1).to({y:-93.5,alpha:0.446},0).wait(1).to({regX:0,regY:0,x:0,y:10,alpha:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-136,275,54);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butt();
	this.instance.parent = this;

	this.instance_1 = new lib.buttover();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.95,scaleY:0.95}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-20.5,153.1,40.6);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.LOGO();
	this.instance.parent = this;
	this.instance.setTransform(-5,-155.1,0.92,0.92,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(401));

	// LEGAL
	this.instance_1 = new lib.legalmov("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(449,-54);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(285).to({_off:false},0).wait(116));

	// BUTT
	this.instance_2 = new lib.button();
	this.instance_2.parent = this;
	this.instance_2.setTransform(197,-155,0.35,0.35,0,0,0,0,-0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(198).to({_off:false},0).wait(1).to({regY:-0.2,scaleX:0.37,scaleY:0.37,alpha:0.024},0).wait(1).to({scaleX:0.43,scaleY:0.43,alpha:0.111},0).wait(1).to({scaleX:0.56,scaleY:0.56,alpha:0.293},0).wait(1).to({scaleX:0.75,scaleY:0.75,alpha:0.575},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-155.1,alpha:0.832},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-155,alpha:0.965},0).wait(1).to({regY:0,scaleX:1.05,scaleY:1.05,alpha:1},0).wait(1).to({regY:-0.2,scaleX:1.04,scaleY:1.04,y:-155.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:-155},0).wait(162).to({regY:-0.2,scaleX:1.01,scaleY:1.01,y:-155.2},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({regY:0,scaleX:1.05,scaleY:1.05,y:-155},0).wait(1).to({regY:-0.2,scaleX:1.03,scaleY:1.03,y:-155.2,alpha:0.969},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.857},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:-155.1,alpha:0.64},0).wait(1).to({scaleX:0.6,scaleY:0.6,alpha:0.36},0).wait(1).to({scaleX:0.45,scaleY:0.45,alpha:0.143},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:-155,alpha:0.031},0).wait(1).to({regY:-0.1,scaleX:0.35,scaleY:0.35,alpha:0},0).wait(22));

	// SHEEP
	this.instance_3 = new lib.sheep_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26,131);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:479,regY:-166,x:453,y:-91.1},0).wait(1).to({y:-116.9},0).wait(1).to({y:-132.8},0).wait(1).to({y:-143.4},0).wait(1).to({y:-150.7},0).wait(1).to({y:-155.8},0).wait(1).to({y:-159.4},0).wait(1).to({y:-161.9},0).wait(1).to({y:-163.4},0).wait(1).to({y:-164.4},0).wait(1).to({y:-164.9},0).wait(1).to({regX:0,regY:0,x:-26,y:1},0).wait(72).to({regX:479,regY:-166,scaleX:1,scaleY:1,x:453.2,y:-165},0).wait(1).to({scaleX:1,scaleY:1,x:453.6,y:-164.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:454.6,y:-164.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:455.9,y:-164.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:458.1,y:-164.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:461.1,y:-164.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:465.6,y:-163.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:472,y:-163.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:480.3,y:-162.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:488.2,y:-162},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:493.5,y:-161.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:496.4,y:-161.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:497.8,y:-161.2},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.7,scaleY:0.7,x:163,y:-45},0).wait(176).to({regX:479,regY:-166,x:498.3,y:-161.5},0).wait(1).to({y:-163.1},0).wait(1).to({regX:-0.1,regY:0.1,x:163,y:-47.4},0).wait(1).to({regX:479,regY:-166,x:498.3,y:-163.5,alpha:0.997},0).wait(1).to({y:-162.8,alpha:0.987},0).wait(1).to({y:-161.7,alpha:0.969},0).wait(1).to({y:-159.9,alpha:0.94},0).wait(1).to({y:-157.2,alpha:0.898},0).wait(1).to({x:498.2,y:-153.5,alpha:0.838},0).wait(1).to({y:-148.2,alpha:0.753},0).wait(1).to({y:-140.4,alpha:0.628},0).wait(1).to({x:498.1,y:-127.9,alpha:0.43},0).wait(1).to({regX:-0.7,regY:0.4,x:162.5,y:15.3,alpha:0},0).to({_off:true},1).wait(115));

	// TXT3
	this.instance_4 = new lib.TXT3("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(363,-151,1.08,1.08);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(198).to({_off:false},0).wait(74).to({startPosition:18},0).wait(1).to({regX:0.3,regY:-4.7,scaleX:1.09,scaleY:1.09,x:363.3,y:-156.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-156.3},0).wait(1).to({regX:0,regY:0,scaleX:1.13,scaleY:1.13,x:363,y:-151},0).wait(1).to({regX:0.3,regY:-4.7,scaleX:1.13,scaleY:1.13,x:363.3,y:-156.3,alpha:0.997},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.987},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:-156.2,alpha:0.969},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:-156.1,alpha:0.94},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:-155.9,alpha:0.898},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:-155.7,alpha:0.838},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-155.4,alpha:0.753},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:363.2,y:-155,alpha:0.628},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:-154.3,alpha:0.43},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.38,scaleY:0.38,x:363,y:-151,alpha:0},0).to({_off:true},1).wait(115));

	// TXT2
	this.instance_5 = new lib.TXT2("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(248,-132);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).to({_off:true},115).wait(189));

	// TXT1
	this.instance_6 = new lib.TXT1("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(259,-156);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({_off:true},85).wait(304));

	// BG
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(470,-232);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-224.9,regY:-148,x:245.1,y:-280.6},0).wait(1).to({y:-235},0).wait(1).to({y:-207},0).wait(1).to({y:-188.2},0).wait(1).to({y:-175.2},0).wait(1).to({y:-166.1},0).wait(1).to({y:-159.8},0).wait(1).to({y:-155.5},0).wait(1).to({y:-152.7},0).wait(1).to({y:-151},0).wait(1).to({y:-150.2},0).wait(1).to({regX:0,regY:0,x:470,y:-2},0).wait(72).to({regX:-224.9,regY:-148,scaleX:1,scaleY:1,x:245.2,y:-149.9},0).wait(1).to({scaleX:1,scaleY:1,x:245.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:246.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:248},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:250.1,y:-149.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:253.2,y:-149.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:257.6,y:-149.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:264,y:-149.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:272.3,y:-149},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:280.2,y:-148.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:285.4,y:-148.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:288.3,y:-148.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:289.7,y:-148.4},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.8,scaleY:0.8,x:469.9,y:-30.1},0).wait(275).to({regX:-224.9,regY:-148,x:290.1,y:-146.6},0).wait(1).to({y:-140.8},0).wait(1).to({y:-129.8},0).wait(1).to({y:-112.9},0).wait(1).to({y:-89.8},0).wait(1).to({y:-62.4},0).wait(1).to({y:-35.3},0).wait(1).to({y:-12.7},0).wait(1).to({y:3.7},0).wait(1).to({y:14.3},0).wait(1).to({y:19.9},0).wait(1).to({regX:-0.1,regY:-0.1,x:469.9,y:139.9},0).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-386.6,-665.7,1263.4,708.8);


// stage content:
(lib.alfabank_cut8_sheep_728x90_review = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(97.4,-420.7,1263.4,708.8);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"legal.png", id:"legal"},
		{src:"sheep.png", id:"sheep"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;