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
p.nominalBounds = new cjs.Rectangle(0,0,200,112);


(lib.sheep = function() {
	this.initialize(img.sheep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,400);// helper functions:

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
	this.shape.setTransform(-0.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt101, new cjs.Rectangle(-57.9,-23.3,115.8,46.7), null);


(lib.txt2month = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ADaBBIAAgaIhQAAIAAhlIAPAAIAABXIA1AAIAAhXIAPAAIAABXIAMAAIAAAogAEEAhQgKgKgBgPQAAgPALgJQALgJAOAAQAVABANAOIAAgTQAAgKgIgFQgHgHgLAAQgSAAgNAPIgHgLQAQgRAYAAQASAAAKAJQAMAIAAASIAABEIgQAAIAAgLQgNAOgVAAQgOgBgLgIgAERgHQgHAHAAAIQAAAKAHAGQAHAGALAAQATAAAJgMIAAgSQgJgNgTAAQgLAAgHAGgAhJAbQgNgQAAgWQAAgXANgPQAOgPAXAAQAYAAAMASIgKAKQgJgOgQAAQgQAAgJALQgKALAAARQAAAQAKAMQAJALAQAAQAQgBAJgNIAKAKQgMARgYABQgXAAgOgPgAi+AbQgOgPAAgXQAAgWANgQQAPgPAVAAQAXAAANAPQANAQAAAYIAAADIhSAAQABAOAKAKQAKALAPgBQAUABAMgNIAIAKQgQAPgZABQgXAAgOgPgAizgpQgIAKgBAOIBDAAQgBgNgIgLQgJgKgQAAQgPAAgJAKgABaAnIAAgnIgcAAIgYAnIgTAAIAbgnQgMgCgHgHQgHgJAAgNQAAgNAJgJQAIgJAPAAIA1AAIAABlgAApgrQgFAFAAAHQAAAJAFAEQAEAFAJAAIAkAAIAAgiIgkAAQgIgBgFAFgAj2AnIAAhPIghBPIgGAAIghhPIAABPIgQAAIAAhlIAVAAIAfBLIAehLIAWAAIAABlg");
	this.shape.setTransform(0.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2month, new cjs.Rectangle(-37.1,-14.7,74.3,29.6), null);


(lib.txt2first = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhHBHIAAiLIAPAAIAAAPQAGgIAJgEQAJgFALAAQAUAAAMAOQAMAPAAAYQAAAXgMAPQgMAOgUAAQgWAAgNgSIAAA2gAgrgzQgJAEgEAHIAAAtQAEAHAJAEQAJAFAIAAQAQAAAIgLQAJgKgBgRQABgRgJgLQgIgLgQAAQgIAAgJAFgAGAAUQgOgPAAgWQAAgXAOgPQANgPAXAAQAWAAAOAPQAOAPAAAXQAAAWgOAPQgOAPgWAAQgXAAgNgPgAGLgtQgIAMgBAQQABAQAIALQAJALAQAAQAPAAAKgLQAIgLABgQQgBgQgIgMQgKgLgPAAQgQAAgJALgACsAUQgOgPABgWQgBgXAOgPQAOgPAXAAQAWAAAOAPQANAPAAAXQAAAWgNAPQgOAPgWAAQgXAAgOgPgAC4gtQgJAMAAAQQAAAQAJALQAJALAQAAQAPAAAJgLQAJgLAAgQQAAgQgJgMQgJgLgPAAQgQAAgJALgAi1AUQgOgOAAgXQAAgWAOgQQAOgPAWAAQAWAAANAPQAOAQAAAXIAAAEIhTAAQACAOAKAKQAJAKAQAAQATAAAMgNIAIALQgQAPgZAAQgWAAgPgPgAipgvQgJAKgBAOIBDAAQAAgNgJgLQgIgKgRAAQgOAAgJAKgAnHAUQgOgPAAgWQAAgXAOgPQAOgPAXAAQAXAAAOARIgLAKQgJgNgQAAQgRAAgJALQgKALAAARQAAARAKAKQAJALARAAQAQAAAJgNIALAKQgOARgXAAQgXAAgOgPgAEdAhIAAhlIBGAAIAAAOIg3AAIAABXgAAwAhIAAhlIA4AAQANAAAHAHQAIAIAAALQAAAJgEAGQgGAGgGACQAHACAGAHQAFAIAAAHQAAANgIAHQgHAIgPAAgAA/ATIAnAAQAHAAAFgEQAEgFAAgHQAAgFgEgFQgFgEgHAAIgnAAgAA/gZIAmAAQAHAAAEgEQAEgEAAgGQAAgHgEgEQgEgEgHAAIgmAAgAjtAhIAAhXIg1AAIAABXIgPAAIAAhlIBUAAIAABlg");
	this.shape.setTransform(0,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2first, new cjs.Rectangle(-50.1,-14.7,100.2,29.6), null);


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
	this.instance.setTransform(-149,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sheep_1, new cjs.Rectangle(-149,-200,298,400), null);


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
	this.instance.setTransform(-100,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-100,-57,200,112), null);


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
	this.shape.graphics.rf(["#BCE4F8","#A0D1EE"],[0,1],0,0,0,0,0,284.8).s().p("EhisAspMAAAhZRMDFZAAAMAAABZRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-631.7,-285.7,1263.5,571.5), null);


(lib.TXT3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt302
	this.instance = new lib.txt302();
	this.instance.parent = this;
	this.instance.setTransform(1,10.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.7,regY:1,x:0.3,y:23.6,alpha:0.373},0).wait(1).to({y:29.9,alpha:0.565},0).wait(1).to({y:33.9,alpha:0.69},0).wait(1).to({y:36.8,alpha:0.778},0).wait(1).to({y:38.9,alpha:0.842},0).wait(1).to({y:40.4,alpha:0.889},0).wait(1).to({y:41.6,alpha:0.925},0).wait(1).to({y:42.4,alpha:0.951},0).wait(1).to({y:43,alpha:0.969},0).wait(1).to({y:43.4,alpha:0.982},0).wait(1).to({y:43.7,alpha:0.991},0).wait(1).to({y:43.9,alpha:0.997},0).wait(1).to({y:44,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:1,y:43,alpha:1},0).wait(5));

	// txt301
	this.instance_1 = new lib.txt301();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,-8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-1.1,regY:-0.5,x:-0.1,y:-21.5,alpha:0.373},0).wait(1).to({y:-28.2,alpha:0.565},0).wait(1).to({y:-32.6,alpha:0.69},0).wait(1).to({y:-35.7,alpha:0.778},0).wait(1).to({y:-37.9,alpha:0.842},0).wait(1).to({y:-39.6,alpha:0.889},0).wait(1).to({y:-40.8,alpha:0.925},0).wait(1).to({y:-41.7,alpha:0.951},0).wait(1).to({y:-42.4,alpha:0.969},0).wait(1).to({y:-42.8,alpha:0.982},0).wait(1).to({y:-43.1,alpha:0.991},0).wait(1).to({y:-43.3,alpha:0.997},0).wait(1).to({y:-43.4,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:1,y:-43,alpha:1},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-18,120.7,38.6);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(1).to({regX:0.4,regY:2.5,x:-26.6,y:91.7,alpha:0.549},0).wait(1).to({y:76.1,alpha:0.749},0).wait(1).to({y:67.4,alpha:0.86},0).wait(1).to({y:62.3,alpha:0.926},0).wait(1).to({y:59.2,alpha:0.965},0).wait(1).to({y:57.5,alpha:0.987},0).wait(1).to({y:56.7,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:-27,y:54,alpha:1},0).wait(1).to({regX:0.4,regY:2.5,x:-26.6,y:56.8},0).wait(1).to({y:58},0).wait(1).to({y:59.2},0).wait(1).to({regX:0,regY:0,x:-27,y:57},0).wait(56).to({regX:0.4,regY:2.5,scaleX:1,scaleY:1,x:-26.6,y:59.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:61.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:62.3},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1.05,scaleY:1.05,x:-27.1,y:60.1},0).wait(1).to({regX:0.4,regY:2.5,scaleX:1.05,scaleY:1.05,x:-26.5,y:62.3,alpha:0.993},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:61.4,alpha:0.972},0).wait(1).to({scaleX:1,scaleY:1,y:59.7,alpha:0.934},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:57,alpha:0.873},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:53,alpha:0.782},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-26.4,y:47,alpha:0.649},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-26.3,y:37.7,alpha:0.438},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.35,scaleY:0.35,x:-26.4,y:17.4,alpha:0},0).wait(1));

	// txt2first
	this.instance_1 = new lib.txt2first();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27,110);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).wait(1).to({regY:3.1,y:70.3,alpha:0.549},0).wait(1).to({y:54.7,alpha:0.749},0).wait(1).to({y:46,alpha:0.86},0).wait(1).to({y:40.9,alpha:0.926},0).wait(1).to({y:37.8,alpha:0.965},0).wait(1).to({y:36.1,alpha:0.987},0).wait(1).to({y:35.3,alpha:0.997},0).wait(1).to({regY:0,y:32,alpha:1},0).wait(1).to({regY:3.1,y:35.4},0).wait(1).to({y:36.6},0).wait(1).to({y:37.8},0).wait(1).to({regY:0,y:35},0).wait(60).to({regY:3.1,scaleX:1,scaleY:1,y:38.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:39.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:40},0).wait(1).to({regY:0,scaleX:1.05,scaleY:1.05,y:36.9},0).wait(1).to({regY:3.1,scaleX:1.05,scaleY:1.05,x:-26.9,y:40,alpha:0.993},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:39.3,alpha:0.972},0).wait(1).to({scaleX:1,scaleY:1,y:38.2,alpha:0.934},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:36.4,alpha:0.873},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-26.8,y:33.8,alpha:0.782},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-26.7,y:29.8,alpha:0.649},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-26.6,y:23.6,alpha:0.438},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.35,scaleY:0.35,x:-26.4,y:9.7,alpha:0},0).wait(1));

	// txt2percent
	this.instance_2 = new lib.txt2percent("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(49,28);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(76).to({startPosition:16},0).wait(1).to({regX:-25.6,regY:-38.6,scaleX:1,scaleY:1,x:23.6,y:-10.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:24.6,y:-10.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:25.6,y:-10.9},0).wait(1).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:52.7,y:29.6},0).wait(1).to({regX:-25.6,regY:-38.6,scaleX:1.05,scaleY:1.05,x:25.6,y:-10.9,alpha:0.993},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:24.8,alpha:0.972},0).wait(1).to({scaleX:1,scaleY:1,x:23.5,y:-10.7,alpha:0.934},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:21.4,y:-10.4,alpha:0.873},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:18.3,y:-10,alpha:0.782},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:13.6,y:-9.4,alpha:0.649},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:6.4,y:-8.4,alpha:0.438},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.35,scaleY:0.35,x:0.2,y:7.2,alpha:0},0).wait(1));

	// txt2eight
	this.instance_3 = new lib.txt2eight();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-38,-10.5,0.7,0.7,0,0,0,-0.1,-0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(1).to({regX:-0.5,regY:-3,scaleX:0.83,scaleY:0.83,x:-38.4,y:-20.5,alpha:0.437},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:-24.1,alpha:0.632},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:-26.3,alpha:0.752},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-27.8,alpha:0.832},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-38.5,y:-28.8,alpha:0.888},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-29.5,alpha:0.927},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-30,alpha:0.955},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-30.4,alpha:0.974},0).wait(1).to({scaleX:1,scaleY:1,y:-30.6,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,y:-30.8,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-38,y:-28,alpha:1},0).wait(73).to({regX:-0.5,regY:-3,scaleX:1,scaleY:1,x:-38.5,y:-31.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-38.8,y:-31.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-39,y:-32.2},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:1.05,scaleY:1.05,x:-38.6,y:-29.2},0).wait(1).to({regX:-0.5,regY:-3,scaleX:1.05,scaleY:1.05,x:-38.9,y:-32.1,alpha:0.993},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-38.8,y:-31.7,alpha:0.972},0).wait(1).to({scaleX:1,scaleY:1,x:-38.4,y:-31,alpha:0.934},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-37.9,y:-29.9,alpha:0.873},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-37.1,y:-28.1,alpha:0.782},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-36,y:-25.6,alpha:0.649},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-34.2,y:-21.6,alpha:0.438},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.35,scaleY:0.35,x:-30.2,y:-12.4,alpha:0},0).wait(1));

	// txt2do
	this.instance_4 = new lib.txt2do();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-86,-12.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-0.8,regY:2.5,x:-86.8,y:-2.3,alpha:0.437},0).wait(1).to({y:1.1,alpha:0.632},0).wait(1).to({y:3.2,alpha:0.752},0).wait(1).to({y:4.6,alpha:0.832},0).wait(1).to({y:5.5,alpha:0.888},0).wait(1).to({y:6.2,alpha:0.927},0).wait(1).to({y:6.7,alpha:0.955},0).wait(1).to({y:7,alpha:0.974},0).wait(1).to({y:7.3,alpha:0.987},0).wait(1).to({y:7.4,alpha:0.995},0).wait(1).to({y:7.5,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-86,y:5,alpha:1},0).wait(77).to({regX:-0.8,regY:2.5,scaleX:1,scaleY:1,x:-87.1,y:7.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-88.3,y:7.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-89.5,y:8},0).wait(1).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:-88.9,y:5.4},0).wait(1).to({regX:-0.8,regY:2.5,scaleX:1.05,scaleY:1.05,x:-89.5,y:8,alpha:0.993},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-88.5,y:7.8,alpha:0.972},0).wait(1).to({scaleX:1,scaleY:1,x:-86.9,y:7.5,alpha:0.934},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-84.3,y:7,alpha:0.873},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-80.5,y:6.3,alpha:0.782},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-74.8,y:5.2,alpha:0.649},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-65.9,y:3.5,alpha:0.438},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.35,scaleY:0.35,x:-47,y:-0.8,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-16.5,22.4,13);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.4,regY:2.1,x:-0.4,y:54.5,alpha:0.536},0).wait(1).to({y:23.9,alpha:0.731},0).wait(1).to({y:6.3,alpha:0.843},0).wait(1).to({y:-4.7,alpha:0.914},0).wait(1).to({y:-11.6,alpha:0.957},0).wait(1).to({y:-15.6,alpha:0.983},0).wait(1).to({y:-17.7,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:-20.4,alpha:1},0).wait(1).to({regX:-0.4,regY:2.1,x:-0.4,y:-17.8},0).wait(1).to({y:-16.1},0).wait(1).to({y:-14.3},0).wait(1).to({regX:0,regY:0,x:0,y:-16},0).wait(57).to({regX:-0.4,regY:2.1,scaleX:1,scaleY:1,x:-0.4,y:-13.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-13.8},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:1.05,scaleY:1.05,x:-0.1,y:-16},0).wait(1).to({regX:-0.4,regY:2.1,scaleX:1.03,scaleY:1.03,x:-0.4,y:-13.8,alpha:0.977},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-13.9,alpha:0.894},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-0.3,y:-14.1,alpha:0.733},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:-14.5,alpha:0.5},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-0.2,y:-14.8,alpha:0.267},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-0.1,y:-15.1,alpha:0.106},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:-15.2,alpha:0.023},0).wait(1).to({regX:0,regY:-0.1,scaleX:0.35,scaleY:0.35,x:0,y:-16,alpha:0},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,123.5,107.2,30.2);


(lib.legalmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-10);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-1,y:-6.4,alpha:0.452},0).wait(1).to({y:-4.3,alpha:0.662},0).wait(1).to({y:-3.1,alpha:0.79},0).wait(1).to({y:-2.2,alpha:0.873},0).wait(1).to({y:-1.7,alpha:0.928},0).wait(1).to({y:-1.3,alpha:0.964},0).wait(1).to({y:-1.1,alpha:0.986},0).wait(1).to({y:-1,alpha:0.997},0).wait(1).to({regY:0,y:0,alpha:1},0).wait(76).to({regY:-1,y:-0.9,alpha:0.995},0).wait(1).to({y:-0.4,alpha:0.981},0).wait(1).to({y:0.4,alpha:0.954},0).wait(1).to({y:1.6,alpha:0.912},0).wait(1).to({y:3.4,alpha:0.852},0).wait(1).to({y:6,alpha:0.766},0).wait(1).to({y:9.8,alpha:0.642},0).wait(1).to({y:15.6,alpha:0.446},0).wait(1).to({regY:0,y:30,alpha:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-67,200,112);


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
	this.instance.setTransform(0,-158,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(401));

	// Layer 6
	this.instance_1 = new lib.legalmov("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,111);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(285).to({_off:false},0).wait(116));

	// BUTT
	this.instance_2 = new lib.button();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-42,0.35,0.35,0,0,0,0,-0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(198).to({_off:false},0).wait(1).to({regY:-0.2,scaleX:0.37,scaleY:0.37,y:-41.9,alpha:0.024},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:-42,alpha:0.111},0).wait(1).to({scaleX:0.56,scaleY:0.56,alpha:0.293},0).wait(1).to({scaleX:0.75,scaleY:0.75,alpha:0.575},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.832},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.965},0).wait(1).to({regY:0,scaleX:1.05,scaleY:1.05,y:-41.9,alpha:1},0).wait(1).to({regY:-0.2,scaleX:1.04,scaleY:1.04,y:-42.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:-42},0).wait(158).to({regY:-0.2,scaleX:1.01,scaleY:1.01,y:-42.2},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({regY:0,scaleX:1.05,scaleY:1.05,y:-41.9},0).wait(1).to({regY:-0.2,scaleX:1.03,scaleY:1.03,y:-42.1,alpha:0.969},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.857},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.64},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:-42,alpha:0.36},0).wait(1).to({scaleX:0.45,scaleY:0.45,alpha:0.143},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.031},0).wait(1).to({regY:-0.1,scaleX:0.35,scaleY:0.35,alpha:0},0).wait(26));

	// SHEEP
	this.instance_3 = new lib.sheep_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-258,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-157.8},0).wait(1).to({x:-111.8},0).wait(1).to({x:-83.5},0).wait(1).to({x:-64.6},0).wait(1).to({x:-51.5},0).wait(1).to({x:-42.3},0).wait(1).to({x:-36},0).wait(1).to({x:-31.6},0).wait(1).to({x:-28.8},0).wait(1).to({x:-27.1},0).wait(1).to({x:-26.2},0).wait(1).to({x:-26},0).wait(72).to({scaleX:1,scaleY:1,y:1.2},0).wait(1).to({scaleX:1,scaleY:1,y:1.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:3.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:5.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:8.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:12.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:18.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:27.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-26.1,y:39.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:50.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:58.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:62.5},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:64.5},0).wait(1).to({regX:-0.1,scaleX:0.7,scaleY:0.7,x:-26,y:65},0).wait(176).to({regX:0},0).wait(2).to({regX:-0.1,regY:0.1,y:65.1},0).wait(1).to({regX:0,regY:0,y:65.3,alpha:0.994},0).wait(1).to({y:66.3,alpha:0.975},0).wait(1).to({y:67.9,alpha:0.943},0).wait(1).to({y:70.2,alpha:0.897},0).wait(1).to({y:73.2,alpha:0.836},0).wait(1).to({y:77.2,alpha:0.757},0).wait(1).to({y:82.3,alpha:0.655},0).wait(1).to({x:-26.1,y:88.8,alpha:0.524},0).wait(1).to({y:97.9,alpha:0.342},0).wait(1).to({regX:-0.7,regY:0.4,x:-26.2,y:115.2,alpha:0},0).to({_off:true},1).wait(115));

	// TXT3
	this.instance_4 = new lib.TXT3("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,-44);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(212).to({_off:false},0).wait(60).to({startPosition:18},0).wait(1).to({regX:0.3,scaleX:1.01,scaleY:1.01,x:-0.7},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({regX:0,scaleX:1.05,scaleY:1.05,x:-0.9,y:-43.9},0).wait(1).to({regX:0.3,scaleX:1.05,scaleY:1.05,x:-0.6,alpha:0.994},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.975},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.943},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.897},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.836},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-0.7,alpha:0.757},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.655},0).wait(1).to({scaleX:0.72,scaleY:0.72,alpha:0.524},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.342},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.35,scaleY:0.35,x:-1,y:-44,alpha:0},0).to({_off:true},1).wait(115));

	// TXT2
	this.instance_5 = new lib.TXT2("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,-32);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).to({_off:true},115).wait(189));

	// TXT1
	this.instance_6 = new lib.TXT1("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-73);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({_off:true},85).wait(304));

	// BG
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(470,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:267},0).wait(1).to({x:173.8},0).wait(1).to({x:116.5},0).wait(1).to({x:78.2},0).wait(1).to({x:51.7},0).wait(1).to({x:33.1},0).wait(1).to({x:20.2},0).wait(1).to({x:11.4},0).wait(1).to({x:5.7},0).wait(1).to({x:2.2},0).wait(1).to({x:0.5},0).wait(1).to({x:0},0).wait(72).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:-2.1},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.8,scaleY:0.8,x:-0.1},0).wait(274).to({x:-0.6,y:-1.7},0).wait(1).to({regX:0,regY:0,x:-4.5,y:-1.6},0).wait(1).to({x:-17.5},0).wait(1).to({x:-41.8},0).wait(1).to({x:-79.6},0).wait(1).to({x:-131.3},0).wait(1).to({x:-192.3},0).wait(1).to({x:-252.8},0).wait(1).to({x:-303.1},0).wait(1).to({x:-339.7},0).wait(1).to({x:-363.2},0).wait(1).to({x:-375.8},0).wait(1).to({regX:-0.1,regY:-0.1,x:-379.6,y:-1.7},0).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-879,-287.7,1980.8,571.5);


// stage content:
(lib.alfabank_cut8_sheep_240x400_review = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;
	this.instance.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,112.3,1508.8,571.5);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
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