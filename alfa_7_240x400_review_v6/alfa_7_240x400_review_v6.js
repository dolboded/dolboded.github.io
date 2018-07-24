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
p.nominalBounds = new cjs.Rectangle(0,0,200,220);// helper functions:

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


(lib.txt402 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AHOBPQgKgDgGgFIANgbIAKAGQAFACAGAAQAJAAAEgEQAGgEAEgIIg7hzIAmAAIAoBUIAohUIAmAAIhBCAQgFAKgHAHQgGAIgKAEQgLAEgOABQgLgBgJgDgAFQBLQgQgHgKgLIASgXQAFAGAJAEIAQAGQAJACAIAAQAQAAAJgFQAIgGAAgJQAAgKgIgEQgJgEgSAAIghAAIAAgdIAhAAQAPAAAJgFQAIgEABgIQAAgHgFgEQgEgEgHgCQgIgCgJAAQgMAAgMAEQgLAEgJAIIgRgVQALgLAPgHQARgHAVgBQATAAAOAGQAOAFAJAKQAHAJAAAOQAAAKgEAIQgFAHgJAFQgHAFgJABQAIABAIAEQAJAEAGAIQAGAJAAAMQAAANgIALQgJAKgPAGQgOAGgUABQgWgBgSgHgAhmBIQgSgKgMgTQgLgSAAgZQAAgYALgSQAMgTASgKQAUgLAYAAQARAAANAGQANAFAKAJQAIAJAFAKIgdAPQgFgKgJgHQgLgGgMgBQgPAAgLAHQgLAHgHAMQgGAMgBAOQABAPAGAMQAHAMALAGQALAHAPAAQAMAAALgGQAJgHAFgKIAdAOQgGAKgIAJQgIAJgOAGQgNAFgRABQgYgBgUgKgAtQBIQgTgKgLgTQgMgSAAgZQAAgYAMgSQALgTATgKQATgLAYAAQASAAANAGQANAFAJAJQAJAJAGAKIgeAPQgFgKgKgHQgKgGgNgBQgOAAgMAHQgLAHgGAMQgHAMAAAOQAAAPAHAMQAGAMALAGQAMAHAOAAQANAAAKgGQAKgHAFgKIAeAOQgGAKgJAJQgJAJgNAGQgNAFgSABQgYgBgTgKgAKlBQIA5iBIhRAAIAAgeIB5AAIAAAXIg8CIgAESBQIgJgbIhFAAIgKAbIgmAAIA9ifIArAAIA9CfgAD/AXIgZhEIgZBEIAyAAgAAVBQIAAifIBLAAQASAAAMAHQALAHAHALQAGAMAAAOQAAAOgGAMQgHALgLAHQgMAHgSAAIgoAAIAAA5gAA4gGIAkAAQAKAAAHgGQAGgGAAgKQAAgKgGgGQgHgFgKAAIgkAAgAmWBQIAAiBIguAAIAAgeIB/AAIAAAeIguAAIAACBgAo/BQIAAifIBxAAIAAAeIhPAAIAAAiIBNAAIAAAdIhNAAIAAAkIBPAAIAAAegAp6BQIAAg+IgRAEIgSACQgUAAgOgIQgNgHgGgMQgHgOABgRIAAgtIAiAAIAAAtQAAAPAIAHQAHAHAPAAQAIAAAIgCIAOgEIAAhEIAiAAIAACfgAM4BBIAmgsIgmgpIAcAAIAnApIgnAsgAMLBBIAmgsIgmgpIAcAAIAmApIgmAsgAi0BBIgmgsIAmgpIAdAAIgnApIAnAsgAjiBBIgmgsIAmgpIAdAAIgnApIAnAsg");
	this.shape.setTransform(1.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt402, new cjs.Rectangle(-90.9,-16.6,181.8,33.3), null);


(lib.txt401 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ADJBHQAIABAGgFQAGgEAEgLQAEgLACgVIAKhRIByAAIAACgIgjAAIAAiCIgwAAIgHA1QgDAZgFAQQgGAPgIAJQgJAIgKAEQgLACgMAAgAoRBbQgTgLgLgSQgKgTgBgYQABgXAKgUQALgSATgKQATgLAYAAQAYAAATALQATAKALASQAKAUABAXQgBAYgKATQgLASgTALQgTAKgYAAQgYAAgTgKgAoAgaQgLAHgGAMQgFALgBAPQABAOAFANQAGAMALAGQALAHAPAAQAPAAALgHQALgGAGgMQAGgNAAgOQAAgPgGgLQgGgMgLgHQgLgHgPAAQgPAAgLAHgAPlBjIAAhqIhMBqIghAAIAAigIAiAAIAABnIBKhnIAjAAIAACggAM+BjIAAigIAiAAIAACggAKwBjIAAigIAiAAIAAA5IAoAAQASABAMAFQAMAIAGALQAGAMAAAOQAAAOgGAMQgGALgMAIQgMAHgSAAgALSBEIAkAAQAKABAHgGQAGgGAAgKQAAgKgGgGQgHgGgKABIgkAAgAJ2BjIAAhEIhMAAIAABEIgiAAIAAigIAiAAIAAA+IBMAAIAAg+IAiAAIAACggAF6BjIAAigIAiAAIAAA5IApAAQARABAMAFQAMAIAHALQAGAMAAAOQAAAOgGAMQgHALgMAIQgMAHgRAAgAGcBEIAkAAQALABAGgGQAHgGAAgKQAAgKgHgGQgGgGgLABIgkAAgABPBjIAAigIBxAAIAAAeIhPAAIAAAhIBNAAIAAAeIhNAAIAAAkIBPAAIAAAfgAgPBjIAAiCIgvAAIAAgeIB/AAIAAAeIgvAAIAACCgAhuBjIAAhqIhMBqIghAAIAAigIAiAAIAABnIBKhnIAjAAIAACggAkVBjIAAiCIhLAAIAACCIgiAAIAAigICQAAIAACggApjBjIgxhAIgMAOIAAAyIgiAAIAAigIAiAAIAABHIA4hHIAqAAIg/BKIBEBWgArwBjIgKgbIhEAAIgLAbIgmAAIA9igIArAAIA+CggAsDApIgZhDIgZBDIAyAAgAuYBjIAAhEIhMAAIAABEIgiAAIAAigIAiAAIAAA+IBMAAIAAg+IAiAAIAACggAOohJQgLgHgIgJIAOgLQAEAGAIAFQAHADAJAAQAJAAAIgDQAHgFAFgGIANALQgHAJgLAHQgLAFgNAAQgNAAgKgFg");
	this.shape.setTransform(0.1,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt401, new cjs.Rectangle(-106.3,-16.6,212.8,33.3), null);


(lib.txt303 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AnpBPIgqAAIgwhAIgNAOIAAAyIgiAAIAAigIAiAAIAABIIA5hIIAqAAIhABLIBEBUIAAgbQAIABAGgFQAGgEAEgLQAEgLACgVIAKhRIByAAIAACgIgjAAIAAiCIgwAAIgHA1QgDAZgFAQQgGAPgIAJQgJAIgKAEQgLACgMAAgAJQBPIAAhwIgtBwIgPAAIgthwIAABwIgiAAIAAigIAwAAIAnBgIAnhgIAwAAIAACggAGVBPIgJgbIhFAAIgKAbIgnAAIA+igIArAAIA9CggAGCAVIgZhDIgZBDIAyAAgADGBPIAAiCIguAAIAAgeIB/AAIAAAeIguAAIAACCgABmBPIAAhEIhMAAIAABEIghAAIAAigIAhAAIAAA/IBMAAIAAg/IAiAAIAACggAiNBPIAAigIBxAAIAAAeIhPAAIAAAiIBOAAIAAAdIhOAAIAAAkIBPAAIAAAfgAjJBPIAAhqIhMBqIghAAIAAigIAiAAIAABnIBKhnIAjAAIAACgg");
	this.shape.setTransform(0.7,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt303, new cjs.Rectangle(-66,-16.6,132.1,33.3), null);


(lib.txt302 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AjrBIQgSgLgLgSQgLgTAAgYQAAgXALgTQALgTASgKQATgLAYAAQAZAAATALQATAKAKATQALATAAAXQAAAYgLATQgKASgTALQgTAKgZABQgYgBgTgKgAjZgtQgLAHgGAMQgGAMAAAOQAAAPAGAMQAGAMALAGQALAHAOAAQAPAAALgHQALgGAGgMQAGgMAAgPQAAgOgGgMQgGgMgLgHQgLgHgPAAQgOAAgLAHgAGTBQIAAhvIgtBvIgPAAIgthvIAABvIgiAAIAAifIAwAAIAnBfIAnhfIAwAAIAACfgADMBQIAAifIAjAAIAACfgAA+BQIAAifIAiAAIAAA5IApAAQARAAAMAHQAMAHAHAKQAGAMAAAOQAAAOgGAMQgHAMgMAHQgMAHgRAAgABgAyIAkAAQALAAAGgGQAHgGAAgKQAAgKgHgGQgGgFgLAAIgkAAgAhaBQIAAifIBUAAQAPAAAKAGQAKAFAFAJQAFAKAAAKQAAALgDAHQgEAIgGAFQgHAFgHABQAIACAHAEQAHAGAEAIQAEAIABALQAAAMgGAJQgFAKgKAGQgLAGgOAAgAg4AyIAsAAQAKAAAEgFQAGgFAAgIQAAgIgGgFQgEgGgKAAIgsAAgAg4gPIArAAQAJAAAEgFQAEgFABgHQgBgIgEgFQgEgFgJAAIgrAAgAlHBQIAAhDIhMAAIAABDIgiAAIAAifIAiAAIAAA/IBMAAIAAg/IAiAAIAACfg");
	this.shape.setTransform(0.8,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt302, new cjs.Rectangle(-47.1,-16.6,94.3,33.3), null);


(lib.txt301 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AgkBgIAAgdIhkAAIAAAdIgiAAIAAg5QAJAAAFgFQAGgEAEgKQAEgLACgUIAKhSIByAAIAACBIAOAAIAAA8gAhpgJQgCAQgFALQgFAMgIAGIBLAAIAAhjIgxAAgAAsA7QgSgLgMgSQgKgTgBgXQABgYAKgUQAMgSASgKQATgLAYAAQAZAAASALQAUAKAKASQALAUAAAYQAAAXgLATQgKASgUALQgSAKgZAAQgYAAgTgKgAA9g6QgKAHgGAMQgGAMAAAPQAAANAGANQAGAMAKAGQAMAHAOAAQAPAAALgHQALgGAGgMQAGgNAAgNQAAgPgGgMQgGgMgLgHQgLgHgPAAQgOAAgMAHg");
	this.shape.setTransform(0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt301, new cjs.Rectangle(-19.6,-16.6,39.2,33.3), null);


(lib.txt204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AEbBgIAAgdIh7AAIAAigIAhAAIAACBIBMAAIAAiBIAjAAIAACBIAOAAIAAAXIA7iYIAqAAIA+CgIgnAAIgJgbIhFAAIgLAbIgjAAIAAAdgAGnAJIgZhDIgZBDIAyAAgAhxA7QgTgKgLgTQgMgSAAgYQAAgZAMgTQALgSATgKQATgLAYAAQASAAANAFQANAGAJAJQAJAJAFAKIgdAPQgFgKgKgHQgKgGgNgBQgOAAgMAHQgLAHgGAMQgHAMAAAPQAAAOAHAMQAGAMALAGQAMAHAOAAQANAAAKgHQAKgGAFgKIAdAOQgGAKgIAJQgJAJgNAFQgNAGgSAAQgYAAgTgKgABkBDIAAg6IgaAAIgfA6IgnAAIAkg9QgJgCgIgGQgIgFgFgKQgFgKAAgOQAAgPAGgLQAHgMAMgHQAMgGAQgBIBMAAIAACggAAug5QgGAGgBAKQABAKAGAGQAHAFALAAIAkAAIAAgrIgkAAQgLAAgHAGgAkZBDIAAigIBxAAIAAAeIhPAAIAAAiIBOAAIAAAdIhOAAIAAAkIBPAAIAAAfgAlVBDIAAhwIgtBwIgPAAIgthwIAABwIgiAAIAAigIAwAAIAmBgIAnhgIAxAAIAACgg");
	this.shape.setTransform(-51.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt204, new cjs.Rectangle(-103.1,-16.6,206.3,33.3), null);


(lib.txt203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AIGBIQgSgLgLgSQgLgTAAgYQAAgXALgTQALgTASgKQAUgLAXAAQAZAAATALQATAKAKATQALATAAAXQAAAYgLATQgKASgTALQgTAKgZABQgXgBgUgKgAIYgtQgLAHgGAMQgGAMAAAOQAAAPAGAMQAGAMALAGQALAHAOAAQAPAAALgHQALgGAHgMQAFgMABgPQgBgOgFgMQgHgMgLgHQgLgHgPAAQgOAAgLAHgADSBIQgTgLgKgSQgLgTAAgYQAAgXALgTQAKgTATgKQATgLAYAAQAYAAAUALQATAKAKATQALATAAAXQAAAYgLATQgKASgTALQgUAKgYABQgYgBgTgKgADjgtQgKAHgHAMQgFAMgBAOQABAPAFAMQAHAMAKAGQAMAHAOAAQAPAAALgHQALgGAGgMQAGgMAAgPQAAgOgGgMQgGgMgLgHQgLgHgPAAQgOAAgMAHgApaBIQgUgKgLgTQgLgSgBgZQABgYALgSQALgTAUgKQASgLAZAAQARAAAOAGQANAFAIAJQAKAJAFAKIgdAPQgGgKgKgHQgKgGgMgBQgOAAgMAHQgLAHgGAMQgHAMAAAOQAAAPAHAMQAGAMALAGQAMAHAOAAQAMAAAKgGQAKgHAGgKIAdAOQgGAKgJAJQgJAJgMAGQgOAFgRABQgZgBgSgKgAFjBQIAAifIBxAAIAAAeIhPAAIAACBgAAYBQIAAifIBVAAQAPAAAKAGQALAFAEAJQAGAKAAAKQgBALgDAHQgEAIgGAFQgHAFgHABQAIACAIAEQAGAGAFAIQAEAIAAALQAAAMgFAJQgGAKgKAGQgKAGgQAAgAA6AyIAsAAQAKAAAGgFQAFgFAAgIQAAgIgFgFQgGgGgKAAIgsAAgAA6gPIArAAQAJAAAFgFQAEgFABgHQgBgIgEgFQgFgFgJAAIgrAAgAh3BQIAAifIBLAAQASAAALAHQAMAHAGALQAGAMAAAOQAAAOgGAMQgGALgMAHQgLAHgSAAIgpAAIAAA5gAhVgGIAkAAQALAAAGgGQAHgGAAgKQAAgKgHgGQgGgFgLAAIgkAAgAj8BQIAAifIBwAAIAAAeIhPAAIAAAiIBOAAIAAAdIhOAAIAAAkIBPAAIAAAegAk4BQIAAiBIhMAAIAACBIgiAAIAAifICQAAIAACfg");
	this.shape.setTransform(-35.4,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt203, new cjs.Rectangle(-103.1,-16.6,206.3,33.3), null);


(lib.txt202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("Ah6BIQgTgKgLgTQgLgSgBgZQABgYALgSQALgTATgKQATgLAZAAQARAAANAGQANAFAJAJQAJAJAGAKIgeAPQgFgKgKgHQgKgGgMgBQgPAAgLAHQgLAHgHAMQgGAMgBAOQABAPAGAMQAHAMALAGQALAHAPAAQAMAAAKgGQAKgHAFgKIAeAOQgGAKgJAJQgJAJgNAGQgNAFgRABQgZgBgTgKgAETBQIAAhvIgtBvIgPAAIgthvIAABvIgiAAIAAifIAwAAIAnBfIAnhfIAwAAIAACfgAACBQIAAifIBxAAIAAAeIhPAAIAAAiIBOAAIAAAdIhOAAIAAAkIBPAAIAAAegAk1BQIAAifIBUAAQAQAAAKAGQAKAFAFAJQAFAKAAAKQAAALgDAHQgEAIgGAFQgHAFgHABQAIACAHAEQAHAGAEAIQAEAIABALQAAAMgGAJQgFAKgKAGQgLAGgPAAgAkTAyIAsAAQAKAAAFgFQAGgFAAgIQAAgIgGgFQgFgGgKAAIgsAAgAkTgPIArAAQAJAAAFgFQAEgFABgHQgBgIgEgFQgFgFgJAAIgrAAg");
	this.shape.setTransform(-69,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt202, new cjs.Rectangle(-103.1,-16.6,206.3,33.3), null);


(lib.txt201percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AAXBNQgJgFgFgJQgFgJAAgLQAAgLAFgKQAFgJAJgFQAJgFAMAAQAMAAAKAFQAJAFAFAJQAFAKAAALQAAALgFAJQgFAJgJAFQgKAFgMABQgMgBgJgFgAAfAbQgGAGAAAKQAAAKAGAFQAFAGAIAAQAJAAAFgGQAFgFAAgKQAAgKgFgGQgFgFgJAAQgIAAgFAFgAg7BQIBmifIASAAIhmCfgAhAgHQgJgFgFgJQgFgJgBgLQABgMAFgJQAFgJAJgFQAJgGAMAAQAMAAAKAGQAJAFAFAJQAFAJAAAMQAAALgFAJQgFAJgJAFQgKAFgMAAQgMAAgJgFgAg5g5QgFAFAAALQAAAJAFAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgLgFgFQgGgGgIAAQgIAAgGAGg");
	this.shape.setTransform(0.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt201percent, new cjs.Rectangle(-10.9,-16.6,21.8,33.3), null);


(lib.txt201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhbDIICOlEIjIAAIAAhLIErAAIAAA8IiVFTg");
	this.shape.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt201, new cjs.Rectangle(-18.1,-38.5,36.3,77.1), null);


(lib.txt104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AFDBQIAAifIBLAAQARAAAMAHQAMAHAHALQAGAMAAAOQAAAOgGAMQgHALgMAHQgMAHgRAAIgpAAIAAA5gAFlgGIAkAAQALAAAGgGQAHgFAAgLQAAgKgHgGQgGgFgLAAIgkAAgAC9BQIAAifIBxAAIAAAeIhPAAIAAAiIBOAAIAAAdIhOAAIAAAkIBPAAIAAAegACBBQIAAhDIhLAAIAABDIgiAAIAAifIAiAAIAAA/IBLAAIAAg/IAjAAIAACfgAgnBQIAAhDIhMAAIAABDIgiAAIAAifIAiAAIAAA/IBMAAIAAg/IAiAAIAACfgAjFBQIgJgbIhFAAIgKAbIgnAAIA+ifIArAAIA9CfgAjYAXIgZhEIgZBEIAyAAgAnDBQIAAifIB1AAIAAAeIhTAAIAAAcIAqAAQARAAAMAIQALAGAHALQAGALAAAOQAAAOgGALQgGAMgMAHQgMAHgRAAgAmhAyIAlAAQAKAAAGgGQAHgFAAgKQAAgKgHgFQgGgGgKAAIglAAg");
	this.shape.setTransform(-54.8,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt104, new cjs.Rectangle(-103.1,-16.6,206.3,33.3), null);


(lib.txt103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AHTBOQgKgDgFgFIANgbIAJAFQAGADAFAAQAJAAAFgEQAFgEAFgIIg8h0IAnAAIAoBUIAnhUICmAAIAAAeIguAAIAACCIgjAAIAAiCIguAAIAAgdIhCB/QgEAKgIAIQgGAHgKAFQgKAEgOAAQgLAAgKgDgAjFBPIgpAAIgxhAIgNAOIAAAyIgiAAIAAigIAiAAIAABIIA5hIIAqAAIg/BLIBDBUIAAgbQAJABAFgFQAGgEAEgLQAEgLADgVIAJhRIByAAIAACgIgiAAIAAiCIgxAAIgGA1QgDAZgGAQQgGAPgIAJQgJAIgKAEQgKACgNAAgALtBPIAAigIAiAAIAAA5IApAAQARABAMAGQAMAIAGAKQAHAMAAAOQAAAOgHAMQgGALgMAIQgMAHgRAAgAMPAwIAkAAQAKABAHgGQAGgGABgKQgBgKgGgGQgHgGgKABIgkAAgAGXBPIAAhEIhMAAIAABEIgiAAIAAigIAiAAIAAA/IBMAAIAAg/IAiAAIAACggAD2BPIgxhAIgMAOIAAAyIgjAAIAAigIAjAAIAABIIA4hIIAqAAIg/BLIBDBVgABaBPIAAhqIhMBqIggAAIAAigIAhAAIAABnIBKhnIAjAAIAACggAnBBPIAAhwIgtBwIgPAAIgthwIAABwIgiAAIAAigIAvAAIAoBgIAnhgIAvAAIAACggArSBPIAAigIBxAAIAAAeIhPAAIAAAiIBNAAIAAAdIhNAAIAAAkIBPAAIAAAfgAsOBPIAAg+IgQAEIgSACQgVAAgNgIQgNgHgHgNQgGgNAAgSIAAgtIAiAAIAAAtQAAAQAIAGQAIAIANgBQAJABAIgCIAOgEIAAhFIAiAAIAACgg");
	this.shape.setTransform(-12.2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt103, new cjs.Rectangle(-103.1,-16.6,206.3,33.3), null);


(lib.txt102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ANOBXQAHgDAFgHQAFgGACgHIgCABIgCAAQgIAAgEgFQgEgFgBgHQABgIAFgGQAFgFAIgBQAIABAHAGQAGAGAAAMQAAANgGAMQgHALgLAJgAB5AlQAIABAFgEQAHgEADgMQAFgLACgTIAJhSIBzAAIAACfIgjAAIAAiBIgxAAIgGA2QgDAYgFAPQgHAQgIAIQgIAJgLADQgKADgMAAgAnTA5QgSgKgMgTQgLgSAAgYQAAgZALgSQAMgTASgKQAUgLAYAAQARABANAFQANAGAKAIQAJAKAFAKIgeAOQgFgKgJgHQgLgGgMAAQgPAAgLAGQgLAIgHALQgGAMgBAPQABAOAGAMQAHAMALAGQALAIAPgBQAMAAALgGQAJgHAFgJIAeANQgGALgJAIQgIAKgOAFQgNAGgRAAQgYgBgUgKgALLBBIAAifIBxAAIAAAeIhPAAIAAAiIBNAAIAAAeIhNAAIAAAjIBPAAIAAAegAKPBBIAAg+IgRAFIgSABQgUAAgOgIQgNgGgGgNQgHgOAAgRIAAgtIAjAAIAAAtQAAAQAIAGQAHAHAPAAQAIAAAIgBIAOgFIAAhEIAiAAIAACfgAGyBBIAAifIBxAAIAAAeIhPAAIAACBgAEsBBIAAifIBxAAIAAAeIhPAAIAAAiIBOAAIAAAeIhOAAIAAAjIBPAAIAAAegAgVBBIAAiBIguAAIAAgeIB+AAIAAAeIguAAIAACBgAi/BBIAAifIBwAAIAAAeIhOAAIAAAiIBNAAIAAAeIhNAAIAAAjIBOAAIAAAegAj8BBIAAg+IgQAFIgSABQgVAAgNgIQgNgGgHgNQgGgOAAgRIAAgtIAiAAIAAAtQABAQAHAGQAIAHAOAAQAJAAAIgBIANgFIAAhEIAjAAIAACfgApcBBIgJgbIhFAAIgLAbIgmAAIA+ifIAqAAIA+CfgApvAIIgZhEIgZBEIAyAAgAsGBBIAAhCIhLAAIAABCIgiAAIAAifIAiAAIAAA/IBLAAIAAg/IAjAAIAACfg");
	this.shape.setTransform(-11.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt102, new cjs.Rectangle(-103.1,-16.6,206.3,33.3), null);


(lib.txt101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ALjBNQgJgFgFgJQgFgJAAgLQAAgLAFgKQAFgJAJgFQAJgFANAAQAMAAAJAFQAJAFAFAJQAFAKAAALQAAALgFAJQgFAJgJAFQgJAFgMABQgNgBgJgFgALrAbQgGAGABAKQgBAKAGAFQAFAGAJAAQAIAAAFgGQAFgFAAgKQAAgKgFgGQgFgFgIAAQgJAAgFAFgAkbBPQgJgDgHgFIAOgbIAJAGQAGACAGAAQAIAAAFgEQAFgEAEgIIg6hzIAmAAIAoBUIAnhUIAnAAIhCCAQgEAKgHAHQgHAIgKAEQgKAEgOABQgLgBgKgDgAnPA0QAIABAGgEQAGgFAEgLQAEgLACgVIAKhQIByAAIAACfIgjAAIAAiBIgwAAIgHA1QgCAZgGAPQgGAQgIAIQgJAIgKAEQgLADgMAAgApWBIQgTgLgKgSQgLgTgBgYQABgXALgTQAKgTATgKQATgLAYAAQAZAAASALQATAKALATQAKATABAXQgBAYgKATQgLASgTALQgSAKgZABQgYgBgTgKgApEgtQgMAHgFAMQgGAMgBAOQABAPAGAMQAFAMAMAGQALAHAOAAQAPAAALgHQALgGAGgMQAGgMAAgPQAAgOgGgMQgGgMgLgHQgLgHgPAAQgOAAgLAHgAKQBQIBnifIATAAIhoCfgAIRBQIA6iBIhRAAIAAgeIB5AAIAAAXIg8CIgAE9BQIAAifIAiAAIAAA5IApAAQARAAAMAHQAMAHAGAKQAHAMAAAOQAAAOgHAMQgGAMgMAHQgMAHgRAAgAFfAyIAkAAQAKAAAHgGQAGgGAAgKQAAgKgGgGQgHgFgKAAIgkAAgADcBQIAAiBIguAAIAAgeIB/AAIAAAeIguAAIAACBgAB7BQIAAhqIhLBqIgiAAIAAifIAjAAIAABmIBJhmIAkAAIAACfgAgtBQIAAg+IgQAEIgSACQgVAAgNgIQgNgHgGgMQgHgOAAgRIAAgtIAjAAIAAAtQAAAPAIAHQAHAHAOAAQAIAAAJgCIANgEIAAhEIAiAAIAACfgAqyBQIAAiBIhMAAIAACBIgiAAIAAifICQAAIAACfgAKLgHQgJgFgFgJQgFgJAAgLQAAgMAFgJQAFgJAJgFQAJgGAMAAQAMAAAKAGQAJAFAFAJQAFAJAAAMQAAALgFAJQgFAJgJAFQgKAFgMAAQgMAAgJgFgAKTg5QgGAFABALQgBAJAGAGQAFAFAIAAQAJAAAFgFQAFgGAAgJQAAgLgFgFQgFgGgJAAQgIAAgFAGg");
	this.shape.setTransform(-19.9,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt101, new cjs.Rectangle(-103.1,-16.6,206.3,33.3), null);


(lib.txt39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhZDDQgegLgVgTIAmhBQAQAPASAIQAUAIAZAAQAhAAAXgRQAWgPAKgaQAMgaAAgcIAAgJQgPAUgbAPQgcAQghAAQgkAAgegPQgfgPgUgdQgTgcAAgqQAAgoATgfQAUgeAigSQAjgTAtABQA8AAAmAcQAmAbASAvQASAvAAA4QAAA9gWAuQgVAugqAbQgqAag7AAQgkAAgegLgAgrh5QgPAJgJANQgIANAAAOQAAAWALANQALANAQAGQARAHATgBQAVAAAVgJQAVgKAPgSQgCgTgJgSQgIgTgSgNQgRgMgbAAQgXAAgQAJg");
	this.shape.setTransform(0.3,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt39, new cjs.Rectangle(-20,-38.5,40.1,77.1), null);


(lib.txt3percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AAXBNQgJgFgFgJQgFgJAAgLQAAgLAFgKQAFgJAJgFQAJgFAMAAQAMAAAKAFQAJAFAFAJQAFAKAAALQAAALgFAJQgFAJgJAFQgKAFgMABQgMgBgJgFgAAfAbQgGAGAAAKQAAAKAGAFQAFAGAIAAQAJAAAFgGQAFgFAAgKQAAgKgFgGQgFgFgJAAQgIAAgFAFgAg7BQIBmifIASAAIhmCfgAhAgHQgJgFgFgJQgFgJgBgLQABgMAFgJQAFgJAJgFQAJgGAMAAQAMAAAKAGQAJAFAFAJQAFAJAAAMQAAALgFAJQgFAJgJAFQgKAFgMAAQgMAAgJgFgAg5g5QgFAFAAALQAAAJAFAGQAGAFAIAAQAIAAAGgFQAFgGAAgJQAAgLgFgFQgGgGgIAAQgIAAgGAGg");
	this.shape.setTransform(0.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3percent, new cjs.Rectangle(-10.9,-16.6,21.8,33.3), null);


(lib.redline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("EhFsABkQgGAAgEgFQgFgEAAgGIAAipQAAgGAFgEQAEgFAGAAMCLZAAAQAGAAAFAFQAEAEAAAGIAACpQAAAGgEAEQgFAFgGAAg");
	this.shape.setTransform(0.2,-0.6,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redline, new cjs.Rectangle(-152,-4,304.4,6.8), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-100,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-100,-110,200,220), null);


(lib.butt_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ОФОРМИТЬ copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AoRBNQgTgLgKgUQgLgVAAgZQAAgZALgUQAKgUATgMQAUgMAaAAQAZAAAUAMQATAMALAUQALAUAAAZQAAAZgLAVQgLAUgTALQgUAMgZAAQgaAAgUgMgAoFg8QgOAJgIAPQgIARAAATQAAAUAIAQQAIAQAOAJQAOAJAUAAQAUAAAOgJQAOgJAHgQQAJgQgBgUQABgTgJgRQgHgPgOgJQgOgKgUABQgUgBgOAKgAG+BWIAAisIAWAAIAABFIAvAAQASAAAMAHQAMAHAGALQAHAMAAAOQAAAOgHAMQgGAMgMAHQgMAHgSAAgAHUBDIAtAAQAPAAAKgJQAJgJABgPQgBgPgJgIQgKgKgPAAIgtAAgAFVBWIAAiYIg3AAIAAgUICDAAIAAAUIg3AAIAACYgADrBWIAAisIAWAAIAACsgABdBWIAAisIAWAAIAABFIAwAAQARAAAMAHQAMAHAGALQAHAMAAAOQAAAOgHAMQgGAMgMAHQgMAHgRAAgABzBDIAtAAQAPAAAKgJQAJgJAAgPQAAgPgJgIQgKgKgPAAIgtAAgAg7BWIAAisIBFAAQASAAALAIQAMAGAHAMQAGAMAAAPQAAAOgGALQgHALgMAIQgLAGgSAAIgvAAIAABFgAglgBIAtAAQAPAAAJgJQAKgJAAgOQAAgQgKgIQgJgKgPABIgtAAgAhvBWIhBhOIgSAUIAAA6IgVAAIAAisIAVAAIAABZIBNhZIAbAAIhIBTIBOBZgAlBBWIAAiYIg2AAIAAgUICEAAIAAAUIg3AAIAACYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E63428").ss(1,1,1).p("AtUjBIapAAIAAGDI6pAAg");
	this.shape_1.setTransform(0.3,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtTDCIAAmDIaoAAIAAGDg");
	this.shape_2.setTransform(0.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt_over, new cjs.Rectangle(-86,-20,172.5,40.8), null);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ОФОРМИТЬ copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoRBNQgTgLgKgUQgLgVAAgZQAAgZALgUQAKgUATgMQAUgMAaAAQAZAAAUAMQATAMALAUQALAUAAAZQAAAZgLAVQgLAUgTALQgUAMgZAAQgaAAgUgMgAoFg8QgOAJgIAPQgIARAAATQAAAUAIAQQAIAQAOAJQAOAJAUAAQAUAAAOgJQAOgJAHgQQAJgQgBgUQABgTgJgRQgHgPgOgJQgOgKgUABQgUgBgOAKgAG+BWIAAisIAWAAIAABFIAvAAQASAAAMAHQAMAHAGALQAHAMAAAOQAAAOgHAMQgGAMgMAHQgMAHgSAAgAHUBDIAtAAQAPAAAKgJQAJgJABgPQgBgPgJgIQgKgKgPAAIgtAAgAFVBWIAAiYIg3AAIAAgUICDAAIAAAUIg3AAIAACYgADrBWIAAisIAWAAIAACsgABdBWIAAisIAWAAIAABFIAwAAQARAAAMAHQAMAHAGALQAHAMAAAOQAAAOgHAMQgGAMgMAHQgMAHgRAAgABzBDIAtAAQAPAAAKgJQAJgJAAgPQAAgPgJgIQgKgKgPAAIgtAAgAg7BWIAAisIBFAAQASAAALAIQAMAGAHAMQAGAMAAAPQAAAOgGALQgHALgMAIQgLAGgSAAIgvAAIAABFgAglgBIAtAAQAPAAAJgJQAKgJAAgOQAAgQgKgIQgJgKgPABIgtAAgAhvBWIhBhOIgSAUIAAA6IgVAAIAAisIAVAAIAABZIBNhZIAbAAIhIBTIBOBZgAlBBWIAAiYIg2AAIAAgUICEAAIAAAUIg3AAIAACYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E63428").ss(1,1,1).p("AtUjBIapAAIAAGDI6pAAg");
	this.shape_1.setTransform(0.3,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E63428").s().p("AtTDCIAAmDIaoAAIAAGDg");
	this.shape_2.setTransform(0.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt, new cjs.Rectangle(-86,-20,172.5,40.8), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.alfalogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("AAiBKIAAhlIhEBlIgfAAIAAiTIAgAAIAABiIBDhiIAgAAIAACTg");
	this.shape.setTransform(30.9,42.2,0.34,0.34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF2D1E").s().p("AhIAxQAKAAAEgMQAGgMAEgcIAIhHIBxAAIAACSIgfAAIAAh2Ig1AAIgFAuQgFAogNARQgNASgZAAg");
	this.shape_1.setTransform(24.7,42.2,0.34,0.34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF2D1E").s().p("AgzA4QgWgVAAgjQABgfAUgXQAVgWAgAAQAhAAATAWQAVAXgBAiIAAAIIhwAAQABAQANANQANALATAAQALAAAMgEQALgEAIgIIAOAVQgWAVglAAQghAAgWgVgAgcgmQgKAMgBAPIBRAAQAAgQgKgLQgLgMgUAAQgSAAgLAMg");
	this.shape_2.setTransform(19.2,42.2,0.34,0.34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF2D1E").s().p("AAqBcIAAglIhzAAIAAiSIAgAAIAAB2IBDAAIAAh2IAgAAIAAB2IAQAAIAABBg");
	this.shape_3.setTransform(13.6,42.8,0.34,0.34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF2D1E").s().p("AAdBKIgsg9IgVAVIAAAoIggAAIAAiTIAgAAIAABHIBAhHIAoAAIg+BDIA/BQg");
	this.shape_4.setTransform(5.3,42.2,0.34,0.34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF2D1E").s().p("Ag2A3QgVgWAAghQAAgfAVgXQAVgWAhAAQAiAAAVAWQAVAXAAAfQAAAggVAXQgUAWgjAAQgiAAgUgWgAgegiQgLAOAAAUQAAAWALANQAMAOASAAQAUAAALgOQAMgOAAgVQAAgTgMgPQgLgOgUAAQgSAAgMAOg");
	this.shape_5.setTransform(-3.4,42.2,0.34,0.34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF2D1E").s().p("AAyBKIAAhmIgsBmIgLAAIgshmIAABmIghAAIAAiTIAqAAIAoBfIAohfIArAAIAACTg");
	this.shape_6.setTransform(-9.9,42.2,0.34,0.34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF2D1E").s().p("AAkBKIAAg2IgiAAIggA2IglAAIAlg4QgPgCgKgMQgKgLAAgTQAAgTAOgOQANgOAXAAIBSAAIAACTgAgagnQgGAGAAAHQAAAJAGAFQAEAFAKAAIAwAAIAAgmIgwAAQgJABgFAFg");
	this.shape_7.setTransform(-16.4,42.2,0.34,0.34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF2D1E").s().p("AhHBoIAAjLIAgAAIAAAUQASgXAcAAQAdAAASAUQASAVAAAkQAAAjgSAVQgRAUgeAAQgcAAgSgYIAABNgAgXhEQgJAEgHAKIAAA5QAGAIAKAGQALAGALAAQASAAALgOQALgNAAgVQAAgWgLgOQgLgNgSAAQgLAAgLAGg");
	this.shape_8.setTransform(-22,43,0.34,0.34);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF2D1E").s().p("AA1BmIAAisIhpAAIAACsIgkAAIAAjKICxAAIAADKg");
	this.shape_9.setTransform(-28.9,41.2,0.34,0.34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF2D1E").s().p("AltSEIAAhcQgXANggAAQgugBgaghQgbgjAAhAQAAhEAegjQAcggA1AAQAZAAASAJIAAhvIBDAAIAABvQARgJAaAAQBuAAAACFQAABAgcAkQgbAjgsAAQghAAgVgNIAABcgAkWNiQgJACgLAFIAACOQARAFARAAQAXAAAOgVQANgVAAgkQAAhNguAAIgSABgAnCOwQAABMAyAAQAQAAATgFIAAiOQgLgFgKgCIgRgBQgvAAAABPgAFsQjIAAlTQAUgFAegEQAigFAXAAQA5AAAuALIgBA0QgmgEgoAAQgkAAgXADIAABcQAdgHAYAAQA5AAAeAeQAdAcAAAyQAAA3ghAfQgiAfg/ABQg3gBg4gTgAG0OSIAABnQASAFAZABQAagBAOgPQAOgPAAgaQAAg1g2gDIgFAAQgTAAgTAEgAKPQhQgZgVAAglQAAgqAagWQAbgXAygBQASAAAQAGIAAgNQAAgagIgGQgJgIggAAQgWAAgfAFIgKgyQAngKAvAAQAgAAASAHQATAGAKAPQAIAKADANQADAPAAAaIAABGQAAAZAFAPQAEARAOATIgsAeQgEgBgIgGQgIgIgFgHQgMAJgMAFQgXAJgaAAQglAAgXgVgALGPDQgNAIAAATQAAAiAmAAQASAAASgHQgEgKAAgfIAAgSQgGgCgOgBQgZABgMAHgAheQhQgYgVAAglQAAgqAagWQAbgXAxgBQARAAARAGIAAgNQAAgagJgGQgIgIggAAQgWAAgfAFIgKgyQAogKAvAAQAeAAATAHQASAGAKAPQAIALADAMQADAPAAAaIAABGQAAAZAFAPQAEARAOATIgrAeQgFgBgIgGQgIgIgFgHQgNAKgLAEQgWAJgaAAQglAAgXgVgAgmPDQgNAIAAATQAAAiAmAAQASAAARgHQgDgKAAgfIAAgSQgGgCgNgBQgaABgMAHgArxQjIAAj2IBEAAIAABUQAcgGAPAAQAvAAAZAYQAZAXAAAqQAAAugcAaQgdAag1AAQg0AAgugTgAquO0IAABKQAPAEAPAAQAXAAAKgMQAIgKAAgVQAAgngpAAQgJAAgVAEgAwMQNQAOgJAIgVQAEgNAAgqIAAh/QA0gQAyAAQAyAAA1AQIAAD3IhDAAIAAjJQgZgEgLAAQgKAAgZAEIAABcQAAA3gRAZQgQAWgqAMgAUaQwQgWg4gMgYQgJgQgEgEQgGgFgOAAIgJAAIAABpIhEAAIAAkAIBEAAIAABgIALAAQAMABAGgFQAEgDAFgMIASglQALgXAHgGQANgOAXgCQATAAAMABIgDAuQgJgCgHAHQgIAHgNAdQgJATgJAIQgIAIgLACIAAABQAOADAKALQAHAHAJARIAuBhgAQMQwIAAhpIhNAAIAABpIhDAAIAAkAIBDAAIAABgIBNAAIAAhgIBDAAIAAEAgAxtQwIgUhHIiBAAIgWBHIhLAAIB9lnQAWgGAQgBQAYABAUAGIB1FngAzvOuIBcAAIgsifIgCAAgADCPOQgNgNAAgRQAAgSANgNQANgNARAAQASAAANANQAMANAAASQAAARgMANQgNANgSAAQgRAAgNgNgAm9ErQgGAAgEgDQgEgFAAgGIAAilQAAgGAEgEQAEgFAGABIOJAAQAGgBAEAFQAEAEAAAGIAAClQAAAGgEAFQgEADgGAAgAEOi0QgFgCgDgGIhAizIl8AAIhBCzQgCAGgFACQgGADgGgCIiWg7QgGgCgCgFQgDgHADgFIEUr0QAYhEAagdQAngtBCAAQBDAAAnAsQAZAeAZBEIEUL0QACAFgBAFQgCAHgHACIiWA7IgFAAIgGgBgAhxoMID/AAIh/l+IgCAAg");
	this.shape_10.setTransform(-0.1,-7.7,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.alfalogo, new cjs.Rectangle(-47,-47,93.8,93.6), null);


(lib.TXT4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Line
	this.instance = new lib.redline();
	this.instance.parent = this;
	this.instance.setTransform(-286.9,-10.6,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-286.4},0).wait(1).to({x:-285.1},0).wait(1).to({x:-282.6},0).wait(1).to({x:-278.9},0).wait(1).to({x:-274.4},0).wait(1).to({x:-269.9},0).wait(1).to({x:-266.5},0).wait(1).to({x:-264.3},0).wait(1).to({x:-263.1},0).wait(1).to({regX:0.1,x:-262.9},0).wait(84).to({regX:0.2},0).wait(1).to({x:-263.4},0).wait(1).to({x:-264.3},0).wait(1).to({x:-265.4},0).wait(1).to({x:-266.8},0).wait(1).to({x:-268.5},0).wait(1).to({x:-270.6},0).wait(1).to({x:-273.2},0).wait(1).to({x:-276.7},0).wait(1).to({regX:0.1,x:-282.9},0).wait(1));

	// Layer 2 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_13 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_14 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_15 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_16 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_17 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_18 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_19 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_20 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_21 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_22 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_23 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_24 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_25 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_26 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_27 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_28 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_93 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_94 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_95 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_96 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_97 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_98 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_99 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_100 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_101 = new cjs.Graphics().p("AyCCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_102 = new cjs.Graphics().p("AyMCYIAAkSMAkFAAAIAAESg");
	var mask_graphics_103 = new cjs.Graphics().p("AyWCYIAAkSMAkFAAAIAAESg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:102.5,y:15.2}).wait(1).to({graphics:mask_graphics_13,x:57.2,y:15.2}).wait(1).to({graphics:mask_graphics_14,x:39.8,y:15.2}).wait(1).to({graphics:mask_graphics_15,x:30.8,y:15.2}).wait(1).to({graphics:mask_graphics_16,x:25.1,y:15.2}).wait(1).to({graphics:mask_graphics_17,x:21.2,y:15.2}).wait(1).to({graphics:mask_graphics_18,x:18.4,y:15.2}).wait(1).to({graphics:mask_graphics_19,x:16.2,y:15.2}).wait(1).to({graphics:mask_graphics_20,x:14.6,y:15.2}).wait(1).to({graphics:mask_graphics_21,x:13.4,y:15.2}).wait(1).to({graphics:mask_graphics_22,x:12.5,y:15.2}).wait(1).to({graphics:mask_graphics_23,x:11.8,y:15.2}).wait(1).to({graphics:mask_graphics_24,x:11.3,y:15.2}).wait(1).to({graphics:mask_graphics_25,x:10.9,y:15.2}).wait(1).to({graphics:mask_graphics_26,x:10.7,y:15.2}).wait(1).to({graphics:mask_graphics_27,x:10.5,y:15.2}).wait(1).to({graphics:mask_graphics_28,x:10.5,y:15.2}).wait(65).to({graphics:mask_graphics_93,x:10.5,y:15.2}).wait(1).to({graphics:mask_graphics_94,x:8.7,y:15.2}).wait(1).to({graphics:mask_graphics_95,x:2.5,y:15.2}).wait(1).to({graphics:mask_graphics_96,x:-9.4,y:15.2}).wait(1).to({graphics:mask_graphics_97,x:-28.2,y:15.2}).wait(1).to({graphics:mask_graphics_98,x:-53.1,y:15.2}).wait(1).to({graphics:mask_graphics_99,x:-78.5,y:15.2}).wait(1).to({graphics:mask_graphics_100,x:-98.4,y:15.2}).wait(1).to({graphics:mask_graphics_101,x:-111,y:15.2}).wait(1).to({graphics:mask_graphics_102,x:-116.5,y:15.2}).wait(1).to({graphics:mask_graphics_103,x:-117.5,y:15.2}).wait(1));

	// txt402
	this.instance_1 = new lib.txt402();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-195,16);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(1).to({regX:1.1,regY:-0.7,x:-105.2,y:15.3,alpha:0.492},0).wait(1).to({x:-71.3,alpha:0.681},0).wait(1).to({x:-53.6,alpha:0.779},0).wait(1).to({x:-42.5,alpha:0.841},0).wait(1).to({x:-34.8,alpha:0.884},0).wait(1).to({x:-29.2,alpha:0.915},0).wait(1).to({x:-25.1,alpha:0.938},0).wait(1).to({x:-21.9,alpha:0.955},0).wait(1).to({x:-19.5,alpha:0.968},0).wait(1).to({x:-17.7,alpha:0.979},0).wait(1).to({x:-16.4,alpha:0.986},0).wait(1).to({x:-15.3,alpha:0.992},0).wait(1).to({x:-14.6,alpha:0.996},0).wait(1).to({x:-14.2,alpha:0.998},0).wait(1).to({x:-13.9,alpha:1},0).wait(1).to({regX:0,regY:0,x:-15,y:16},0).wait(66).to({regX:1.1,regY:-0.7,x:-12.3,y:15.3,alpha:0.986},0).wait(1).to({x:-7.1,alpha:0.939},0).wait(1).to({x:2.9,alpha:0.847},0).wait(1).to({x:18.9,alpha:0.702},0).wait(1).to({x:39.9,alpha:0.511},0).wait(1).to({x:61.4,alpha:0.315},0).wait(1).to({x:78.2,alpha:0.163},0).wait(1).to({x:88.9,alpha:0.065},0).wait(1).to({x:94.5,alpha:0.015},0).wait(1).to({regX:0,regY:0,x:95,y:16,alpha:0},0).wait(1));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_10 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AyMCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AyWCJIAAkRMAkFAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_1_graphics_10,x:102.5,y:-13.4}).wait(1).to({graphics:mask_1_graphics_11,x:57.2,y:-13.4}).wait(1).to({graphics:mask_1_graphics_12,x:39.8,y:-13.4}).wait(1).to({graphics:mask_1_graphics_13,x:30.8,y:-13.4}).wait(1).to({graphics:mask_1_graphics_14,x:25.1,y:-13.4}).wait(1).to({graphics:mask_1_graphics_15,x:21.2,y:-13.4}).wait(1).to({graphics:mask_1_graphics_16,x:18.4,y:-13.4}).wait(1).to({graphics:mask_1_graphics_17,x:16.2,y:-13.4}).wait(1).to({graphics:mask_1_graphics_18,x:14.6,y:-13.4}).wait(1).to({graphics:mask_1_graphics_19,x:13.4,y:-13.4}).wait(1).to({graphics:mask_1_graphics_20,x:12.5,y:-13.4}).wait(1).to({graphics:mask_1_graphics_21,x:11.8,y:-13.4}).wait(1).to({graphics:mask_1_graphics_22,x:11.3,y:-13.4}).wait(1).to({graphics:mask_1_graphics_23,x:10.9,y:-13.4}).wait(1).to({graphics:mask_1_graphics_24,x:10.7,y:-13.4}).wait(1).to({graphics:mask_1_graphics_25,x:10.5,y:-13.4}).wait(1).to({graphics:mask_1_graphics_26,x:10.5,y:-13.4}).wait(65).to({graphics:mask_1_graphics_91,x:10.5,y:-13.4}).wait(1).to({graphics:mask_1_graphics_92,x:8.7,y:-13.4}).wait(1).to({graphics:mask_1_graphics_93,x:2.5,y:-13.4}).wait(1).to({graphics:mask_1_graphics_94,x:-9.4,y:-13.4}).wait(1).to({graphics:mask_1_graphics_95,x:-28.2,y:-13.4}).wait(1).to({graphics:mask_1_graphics_96,x:-53.1,y:-13.4}).wait(1).to({graphics:mask_1_graphics_97,x:-78.5,y:-13.4}).wait(1).to({graphics:mask_1_graphics_98,x:-98.4,y:-13.4}).wait(1).to({graphics:mask_1_graphics_99,x:-111,y:-13.4}).wait(1).to({graphics:mask_1_graphics_100,x:-116.5,y:-13.4}).wait(1).to({graphics:mask_1_graphics_101,x:-117.5,y:-13.4}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// txt401
	this.instance_2 = new lib.txt401();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-209,-11);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(1).to({regX:0.1,regY:-2.9,x:-105.9,y:-13.9,alpha:0.492},0).wait(1).to({x:-66.5,alpha:0.681},0).wait(1).to({x:-46,alpha:0.779},0).wait(1).to({x:-33.1,alpha:0.841},0).wait(1).to({x:-24.1,alpha:0.884},0).wait(1).to({x:-17.7,alpha:0.915},0).wait(1).to({x:-12.9,alpha:0.938},0).wait(1).to({x:-9.2,alpha:0.955},0).wait(1).to({x:-6.5,alpha:0.968},0).wait(1).to({x:-4.3,alpha:0.979},0).wait(1).to({x:-2.8,alpha:0.986},0).wait(1).to({x:-1.6,alpha:0.992},0).wait(1).to({x:-0.8,alpha:0.996},0).wait(1).to({x:-0.2,alpha:0.998},0).wait(1).to({x:0.1,alpha:1},0).wait(1).to({regX:0,regY:0,x:0,y:-11},0).wait(66).to({regX:0.1,regY:-2.9,x:1.6,y:-13.9,alpha:0.986},0).wait(1).to({x:6.8,alpha:0.939},0).wait(1).to({x:16.9,alpha:0.847},0).wait(1).to({x:32.9,alpha:0.702},0).wait(1).to({x:53.9,alpha:0.511},0).wait(1).to({x:75.4,alpha:0.315},0).wait(1).to({x:92.2,alpha:0.163},0).wait(1).to({x:102.9,alpha:0.065},0).wait(1).to({x:108.5,alpha:0.015},0).wait(1).to({regX:0,regY:0,x:110,y:-11,alpha:0},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-439,-14,304.4,6.8);


(lib.TXT3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.redline();
	this.instance.parent = this;
	this.instance.setTransform(-245.5,-9.6,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-245},0).wait(1).to({x:-243.9},0).wait(1).to({x:-241.7},0).wait(1).to({x:-238.2},0).wait(1).to({x:-233.7},0).wait(1).to({x:-229.6},0).wait(1).to({x:-226.7},0).wait(1).to({x:-224.9},0).wait(1).to({x:-224},0).wait(1).to({regX:0.1,x:-223.9},0).wait(70).to({regX:0.2},0).wait(1).to({x:-224.2},0).wait(1).to({x:-224.8},0).wait(1).to({x:-225.7},0).wait(1).to({x:-226.9},0).wait(1).to({x:-228.4},0).wait(1).to({x:-230.5},0).wait(1).to({x:-233.2},0).wait(1).to({x:-237},0).wait(1).to({regX:0.1,x:-243.9},0).to({_off:true},1).wait(41));

	// mask copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_15 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_16 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_17 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_18 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_19 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_20 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_21 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_22 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_23 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_24 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_25 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_26 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_27 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_28 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_29 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_30 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_83 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_84 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_85 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_86 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_87 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_88 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_89 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_90 = new cjs.Graphics().p("AyCEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_91 = new cjs.Graphics().p("AzJEfIAAkSMAkFAAAIAAESg");
	var mask_graphics_92 = new cjs.Graphics().p("Az5EfIAAkSMAkFAAAIAAESg");
	var mask_graphics_93 = new cjs.Graphics().p("A0HEfIAAkSMAkFAAAIAAESg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:105.9,y:28.7}).wait(1).to({graphics:mask_graphics_15,x:80.6,y:28.7}).wait(1).to({graphics:mask_graphics_16,x:72,y:28.7}).wait(1).to({graphics:mask_graphics_17,x:66.4,y:28.7}).wait(1).to({graphics:mask_graphics_18,x:62.3,y:28.7}).wait(1).to({graphics:mask_graphics_19,x:59.1,y:28.7}).wait(1).to({graphics:mask_graphics_20,x:56.5,y:28.7}).wait(1).to({graphics:mask_graphics_21,x:54.5,y:28.7}).wait(1).to({graphics:mask_graphics_22,x:52.8,y:28.7}).wait(1).to({graphics:mask_graphics_23,x:51.5,y:28.7}).wait(1).to({graphics:mask_graphics_24,x:50.4,y:28.7}).wait(1).to({graphics:mask_graphics_25,x:49.5,y:28.7}).wait(1).to({graphics:mask_graphics_26,x:48.9,y:28.7}).wait(1).to({graphics:mask_graphics_27,x:48.4,y:28.7}).wait(1).to({graphics:mask_graphics_28,x:48.1,y:28.7}).wait(1).to({graphics:mask_graphics_29,x:47.9,y:28.7}).wait(1).to({graphics:mask_graphics_30,x:47.9,y:28.7}).wait(53).to({graphics:mask_graphics_83,x:47.9,y:28.7}).wait(1).to({graphics:mask_graphics_84,x:45.4,y:28.7}).wait(1).to({graphics:mask_graphics_85,x:36.8,y:28.7}).wait(1).to({graphics:mask_graphics_86,x:20.1,y:28.7}).wait(1).to({graphics:mask_graphics_87,x:-6.7,y:28.7}).wait(1).to({graphics:mask_graphics_88,x:-43,y:28.7}).wait(1).to({graphics:mask_graphics_89,x:-80.9,y:28.7}).wait(1).to({graphics:mask_graphics_90,x:-110.8,y:28.7}).wait(1).to({graphics:mask_graphics_91,x:-122.6,y:28.7}).wait(1).to({graphics:mask_graphics_92,x:-127.4,y:28.7}).wait(1).to({graphics:mask_graphics_93,x:-128.8,y:28.7}).wait(1).to({graphics:null,x:0,y:0}).wait(37));

	// txt303
	this.instance_1 = new lib.txt303();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-126,43);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({regX:0.7,regY:0.2,x:-70.3,y:43.2,alpha:0.436},0).wait(1).to({x:-51.8,alpha:0.583},0).wait(1).to({x:-39.6,alpha:0.679},0).wait(1).to({x:-30.7,alpha:0.751},0).wait(1).to({x:-23.7,alpha:0.806},0).wait(1).to({x:-18.1,alpha:0.85},0).wait(1).to({x:-13.7,alpha:0.886},0).wait(1).to({x:-10.1,alpha:0.914},0).wait(1).to({x:-7.1,alpha:0.938},0).wait(1).to({x:-4.8,alpha:0.956},0).wait(1).to({x:-2.9,alpha:0.971},0).wait(1).to({x:-1.5,alpha:0.982},0).wait(1).to({x:-0.5,alpha:0.99},0).wait(1).to({x:0.2,alpha:0.996},0).wait(1).to({x:0.6,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:0,y:43,alpha:1},0).wait(54).to({regX:0.7,regY:0.2,x:1.3,y:43.2,alpha:0.987},0).wait(1).to({x:3.4,alpha:0.942},0).wait(1).to({x:7.4,alpha:0.854},0).wait(1).to({x:13.9,alpha:0.713},0).wait(1).to({x:22.7,alpha:0.522},0).wait(1).to({x:31.9,alpha:0.322},0).wait(1).to({x:39.1,alpha:0.165},0).wait(1).to({x:43.7,alpha:0.066},0).wait(1).to({x:46,alpha:0.015},0).wait(1).to({regX:0,regY:0,y:43,alpha:0},0).to({_off:true},1).wait(37));

	// mask copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_12 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AyCCYIAAkRMAkFAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_1_graphics_12,x:105.9,y:15.2}).wait(1).to({graphics:mask_1_graphics_13,x:80.6,y:15.2}).wait(1).to({graphics:mask_1_graphics_14,x:72,y:15.2}).wait(1).to({graphics:mask_1_graphics_15,x:66.4,y:15.2}).wait(1).to({graphics:mask_1_graphics_16,x:62.3,y:15.2}).wait(1).to({graphics:mask_1_graphics_17,x:59.1,y:15.2}).wait(1).to({graphics:mask_1_graphics_18,x:56.5,y:15.2}).wait(1).to({graphics:mask_1_graphics_19,x:54.5,y:15.2}).wait(1).to({graphics:mask_1_graphics_20,x:52.8,y:15.2}).wait(1).to({graphics:mask_1_graphics_21,x:51.5,y:15.2}).wait(1).to({graphics:mask_1_graphics_22,x:50.4,y:15.2}).wait(1).to({graphics:mask_1_graphics_23,x:49.5,y:15.2}).wait(1).to({graphics:mask_1_graphics_24,x:48.9,y:15.2}).wait(1).to({graphics:mask_1_graphics_25,x:48.4,y:15.2}).wait(1).to({graphics:mask_1_graphics_26,x:48.1,y:15.2}).wait(1).to({graphics:mask_1_graphics_27,x:47.9,y:15.2}).wait(1).to({graphics:mask_1_graphics_28,x:47.9,y:15.2}).wait(53).to({graphics:mask_1_graphics_81,x:47.9,y:15.2}).wait(1).to({graphics:mask_1_graphics_82,x:45.9,y:15.2}).wait(1).to({graphics:mask_1_graphics_83,x:39.1,y:15.2}).wait(1).to({graphics:mask_1_graphics_84,x:26,y:15.2}).wait(1).to({graphics:mask_1_graphics_85,x:4.8,y:15.2}).wait(1).to({graphics:mask_1_graphics_86,x:-23.9,y:15.2}).wait(1).to({graphics:mask_1_graphics_87,x:-53.8,y:15.2}).wait(1).to({graphics:mask_1_graphics_88,x:-77.4,y:15.2}).wait(1).to({graphics:mask_1_graphics_89,x:-92.3,y:15.2}).wait(1).to({graphics:mask_1_graphics_90,x:-99.9,y:15.2}).wait(1).to({graphics:mask_1_graphics_91,x:-102.1,y:15.2}).wait(1).to({graphics:null,x:0,y:0}).wait(39));

	// txt302
	this.instance_2 = new lib.txt302();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-109,16);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(1).to({regX:0.8,regY:-0.7,x:-68.9,y:15.3,alpha:0.436},0).wait(1).to({x:-55.7,alpha:0.583},0).wait(1).to({x:-47,alpha:0.679},0).wait(1).to({x:-40.6,alpha:0.751},0).wait(1).to({x:-35.6,alpha:0.806},0).wait(1).to({x:-31.6,alpha:0.85},0).wait(1).to({x:-28.5,alpha:0.886},0).wait(1).to({x:-25.9,alpha:0.914},0).wait(1).to({x:-23.8,alpha:0.938},0).wait(1).to({x:-22.1,alpha:0.956},0).wait(1).to({x:-20.8,alpha:0.971},0).wait(1).to({x:-19.8,alpha:0.982},0).wait(1).to({x:-19,alpha:0.99},0).wait(1).to({x:-18.5,alpha:0.996},0).wait(1).to({x:-18.2,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-19,y:16,alpha:1},0).wait(54).to({regX:0.8,regY:-0.7,x:-17.1,y:15.3,alpha:0.987},0).wait(1).to({x:-13.5,alpha:0.942},0).wait(1).to({x:-6.5,alpha:0.854},0).wait(1).to({x:4.8,alpha:0.713},0).wait(1).to({x:20,alpha:0.522},0).wait(1).to({x:36,alpha:0.322},0).wait(1).to({x:48.6,alpha:0.165},0).wait(1).to({x:56.5,alpha:0.066},0).wait(1).to({x:60.6,alpha:0.015},0).wait(1).to({regX:0,regY:0,x:61,y:16,alpha:0},0).to({_off:true},1).wait(39));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_10 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_79 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_80 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_81 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_82 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_83 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_85 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_86 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_88 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");
	var mask_2_graphics_89 = new cjs.Graphics().p("AyCD3IAAntMAkFAAAIAAHtg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_2_graphics_10,x:105.9,y:-21.3}).wait(1).to({graphics:mask_2_graphics_11,x:80.6,y:-21.3}).wait(1).to({graphics:mask_2_graphics_12,x:72,y:-21.3}).wait(1).to({graphics:mask_2_graphics_13,x:66.4,y:-21.3}).wait(1).to({graphics:mask_2_graphics_14,x:62.3,y:-21.3}).wait(1).to({graphics:mask_2_graphics_15,x:59.1,y:-21.3}).wait(1).to({graphics:mask_2_graphics_16,x:56.5,y:-21.3}).wait(1).to({graphics:mask_2_graphics_17,x:54.5,y:-21.3}).wait(1).to({graphics:mask_2_graphics_18,x:52.8,y:-21.3}).wait(1).to({graphics:mask_2_graphics_19,x:51.5,y:-21.3}).wait(1).to({graphics:mask_2_graphics_20,x:50.4,y:-21.3}).wait(1).to({graphics:mask_2_graphics_21,x:49.5,y:-21.3}).wait(1).to({graphics:mask_2_graphics_22,x:48.9,y:-21.3}).wait(1).to({graphics:mask_2_graphics_23,x:48.4,y:-21.3}).wait(1).to({graphics:mask_2_graphics_24,x:48.1,y:-21.3}).wait(1).to({graphics:mask_2_graphics_25,x:47.9,y:-21.3}).wait(1).to({graphics:mask_2_graphics_26,x:47.9,y:-21.3}).wait(53).to({graphics:mask_2_graphics_79,x:47.9,y:-21.3}).wait(1).to({graphics:mask_2_graphics_80,x:45.9,y:-21.3}).wait(1).to({graphics:mask_2_graphics_81,x:39.1,y:-21.3}).wait(1).to({graphics:mask_2_graphics_82,x:26,y:-21.3}).wait(1).to({graphics:mask_2_graphics_83,x:4.8,y:-21.3}).wait(1).to({graphics:mask_2_graphics_84,x:-23.9,y:-21.3}).wait(1).to({graphics:mask_2_graphics_85,x:-53.8,y:-21.3}).wait(1).to({graphics:mask_2_graphics_86,x:-77.4,y:-21.3}).wait(1).to({graphics:mask_2_graphics_87,x:-92.3,y:-21.3}).wait(1).to({graphics:mask_2_graphics_88,x:-99.9,y:-21.3}).wait(1).to({graphics:mask_2_graphics_89,x:-102.1,y:-21.3}).wait(1).to({graphics:null,x:0,y:0}).wait(41));

	// txt3percent
	this.instance_3 = new lib.txt3percent();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-69,-10);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.7,x:-29.2,y:-10.7,alpha:0.436},0).wait(1).to({x:-16,alpha:0.583},0).wait(1).to({x:-7.3,alpha:0.679},0).wait(1).to({x:-0.9,alpha:0.751},0).wait(1).to({x:4,alpha:0.806},0).wait(1).to({x:8,alpha:0.85},0).wait(1).to({x:11.2,alpha:0.886},0).wait(1).to({x:13.8,alpha:0.914},0).wait(1).to({x:15.9,alpha:0.938},0).wait(1).to({x:17.6,alpha:0.956},0).wait(1).to({x:18.9,alpha:0.971},0).wait(1).to({x:19.9,alpha:0.982},0).wait(1).to({x:20.6,alpha:0.99},0).wait(1).to({x:21.1,alpha:0.996},0).wait(1).to({x:21.4,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:21,y:-10,alpha:1},0).wait(54).to({regX:0.5,regY:-0.7,x:22.5,y:-10.7,alpha:0.987},0).wait(1).to({x:26.2,alpha:0.942},0).wait(1).to({x:33.2,alpha:0.854},0).wait(1).to({x:44.5,alpha:0.713},0).wait(1).to({x:59.7,alpha:0.522},0).wait(1).to({x:75.7,alpha:0.322},0).wait(1).to({x:88.3,alpha:0.165},0).wait(1).to({x:96.2,alpha:0.066},0).wait(1).to({x:100.3,alpha:0.015},0).wait(1).to({regX:0,regY:0,x:101,y:-10,alpha:0},0).to({_off:true},1).wait(41));

	// txt39
	this.instance_4 = new lib.txt39();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-98,-21);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(1).to({regX:0.3,regY:-1.3,x:-58.4,y:-22.3,alpha:0.436},0).wait(1).to({x:-45.2,alpha:0.583},0).wait(1).to({x:-36.5,alpha:0.679},0).wait(1).to({x:-30.1,alpha:0.751},0).wait(1).to({x:-25.1,alpha:0.806},0).wait(1).to({x:-21.1,alpha:0.85},0).wait(1).to({x:-18,alpha:0.886},0).wait(1).to({x:-15.4,alpha:0.914},0).wait(1).to({x:-13.3,alpha:0.938},0).wait(1).to({x:-11.6,alpha:0.956},0).wait(1).to({x:-10.3,alpha:0.971},0).wait(1).to({x:-9.3,alpha:0.982},0).wait(1).to({x:-8.5,alpha:0.99},0).wait(1).to({x:-8,alpha:0.996},0).wait(1).to({x:-7.7,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-8,y:-21,alpha:1},0).wait(54).to({regX:0.3,regY:-1.3,x:-6.6,y:-22.3,alpha:0.987},0).wait(1).to({x:-3,alpha:0.942},0).wait(1).to({x:4,alpha:0.854},0).wait(1).to({x:15.3,alpha:0.713},0).wait(1).to({x:30.5,alpha:0.522},0).wait(1).to({x:46.5,alpha:0.322},0).wait(1).to({x:59.1,alpha:0.165},0).wait(1).to({x:67,alpha:0.066},0).wait(1).to({x:71.1,alpha:0.015},0).wait(1).to({regX:0,regY:0,x:72,y:-21,alpha:0},0).to({_off:true},1).wait(41));

	// txt301
	this.instance_5 = new lib.txt301();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-137,-10);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(1).to({regX:0.1,regY:0.6,x:-97.6,y:-9.4,alpha:0.436},0).wait(1).to({x:-84.4,alpha:0.583},0).wait(1).to({x:-75.7,alpha:0.679},0).wait(1).to({x:-69.3,alpha:0.751},0).wait(1).to({x:-64.3,alpha:0.806},0).wait(1).to({x:-60.3,alpha:0.85},0).wait(1).to({x:-57.2,alpha:0.886},0).wait(1).to({x:-54.6,alpha:0.914},0).wait(1).to({x:-52.5,alpha:0.938},0).wait(1).to({x:-50.8,alpha:0.956},0).wait(1).to({x:-49.5,alpha:0.971},0).wait(1).to({x:-48.5,alpha:0.982},0).wait(1).to({x:-47.7,alpha:0.99},0).wait(1).to({x:-47.2,alpha:0.996},0).wait(1).to({x:-46.9,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-47,y:-10,alpha:1},0).wait(54).to({regX:0.1,regY:0.6,x:-45.8,y:-9.4,alpha:0.987},0).wait(1).to({x:-42.2,alpha:0.942},0).wait(1).to({x:-35.2,alpha:0.854},0).wait(1).to({x:-23.9,alpha:0.713},0).wait(1).to({x:-8.6,alpha:0.522},0).wait(1).to({x:7.3,alpha:0.322},0).wait(1).to({x:19.9,alpha:0.165},0).wait(1).to({x:27.8,alpha:0.066},0).wait(1).to({x:31.9,alpha:0.015},0).wait(1).to({regX:0,regY:0,x:33,y:-10,alpha:0},0).to({_off:true},1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397.6,-13,304.4,6.8);


(lib.TXT2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Line
	this.instance = new lib.redline();
	this.instance.parent = this;
	this.instance.setTransform(-283.9,2.4,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-283.4},0).wait(1).to({x:-282.1},0).wait(1).to({x:-279.6},0).wait(1).to({x:-275.9},0).wait(1).to({x:-271.4},0).wait(1).to({x:-266.9},0).wait(1).to({x:-263.5},0).wait(1).to({x:-261.3},0).wait(1).to({x:-260.1},0).wait(1).to({regX:0.1,x:-259.9},0).wait(73).to({regX:0.2},0).wait(1).to({x:-260.3},0).wait(1).to({x:-261},0).wait(1).to({x:-262},0).wait(1).to({x:-263.4},0).wait(1).to({x:-265},0).wait(1).to({x:-267.2},0).wait(1).to({x:-269.9},0).wait(1).to({x:-273.5},0).wait(1).to({regX:0.1,x:-279.9},0).wait(11));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_17 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_18 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_19 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_20 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_21 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_22 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_23 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_24 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_25 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_26 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_27 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_28 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_29 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_30 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_31 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_32 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_88 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_89 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_90 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_91 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_92 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_93 = new cjs.Graphics().p("AyCFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_94 = new cjs.Graphics().p("Ay+FqIAAkSMAkFAAAIAAESg");
	var mask_graphics_95 = new cjs.Graphics().p("Az+FqIAAkSMAkFAAAIAAESg");
	var mask_graphics_96 = new cjs.Graphics().p("A0dFqIAAkSMAkFAAAIAAESg");
	var mask_graphics_97 = new cjs.Graphics().p("A0lFqIAAkSMAkFAAAIAAESg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:105.9,y:36.2}).wait(1).to({graphics:mask_graphics_17,x:70.6,y:36.2}).wait(1).to({graphics:mask_graphics_18,x:55.9,y:36.2}).wait(1).to({graphics:mask_graphics_19,x:45.8,y:36.2}).wait(1).to({graphics:mask_graphics_20,x:38.2,y:36.2}).wait(1).to({graphics:mask_graphics_21,x:32.3,y:36.2}).wait(1).to({graphics:mask_graphics_22,x:27.5,y:36.2}).wait(1).to({graphics:mask_graphics_23,x:23.6,y:36.2}).wait(1).to({graphics:mask_graphics_24,x:20.4,y:36.2}).wait(1).to({graphics:mask_graphics_25,x:17.9,y:36.2}).wait(1).to({graphics:mask_graphics_26,x:15.8,y:36.2}).wait(1).to({graphics:mask_graphics_27,x:14.1,y:36.2}).wait(1).to({graphics:mask_graphics_28,x:12.9,y:36.2}).wait(1).to({graphics:mask_graphics_29,x:12,y:36.2}).wait(1).to({graphics:mask_graphics_30,x:11.3,y:36.2}).wait(1).to({graphics:mask_graphics_31,x:11,y:36.2}).wait(1).to({graphics:mask_graphics_32,x:10.9,y:36.2}).wait(56).to({graphics:mask_graphics_88,x:-54.1,y:36.2}).wait(1).to({graphics:mask_graphics_89,x:-55.5,y:36.2}).wait(1).to({graphics:mask_graphics_90,x:-60.1,y:36.2}).wait(1).to({graphics:mask_graphics_91,x:-69.5,y:36.2}).wait(1).to({graphics:mask_graphics_92,x:-85.4,y:36.2}).wait(1).to({graphics:mask_graphics_93,x:-107.2,y:36.2}).wait(1).to({graphics:mask_graphics_94,x:-121.5,y:36.2}).wait(1).to({graphics:mask_graphics_95,x:-127.9,y:36.2}).wait(1).to({graphics:mask_graphics_96,x:-131,y:36.2}).wait(1).to({graphics:mask_graphics_97,x:-131.8,y:36.2}).wait(6));

	// txt204
	this.instance_1 = new lib.txt204();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96.2,58);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(1).to({regX:-51.9,regY:0.6,x:-112.4,y:58.6,alpha:0.371},0).wait(1).to({x:-97.5,alpha:0.526},0).wait(1).to({x:-87.3,alpha:0.632},0).wait(1).to({x:-79.6,alpha:0.712},0).wait(1).to({x:-73.6,alpha:0.774},0).wait(1).to({x:-68.7,alpha:0.825},0).wait(1).to({x:-64.8,alpha:0.866},0).wait(1).to({x:-61.5,alpha:0.899},0).wait(1).to({x:-58.9,alpha:0.926},0).wait(1).to({x:-56.8,alpha:0.948},0).wait(1).to({x:-55.2,alpha:0.965},0).wait(1).to({x:-53.9,alpha:0.979},0).wait(1).to({x:-53,alpha:0.988},0).wait(1).to({x:-52.3,alpha:0.995},0).wait(1).to({x:-52,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:0,y:58,alpha:1},0).wait(57).to({regX:-51.9,regY:0.6,x:-50.9,y:58.6,alpha:0.986},0).wait(1).to({x:-47.5,alpha:0.937},0).wait(1).to({x:-40.5,alpha:0.837},0).wait(1).to({x:-28.6,alpha:0.668},0).wait(1).to({x:-12.4,alpha:0.435},0).wait(1).to({x:2.7,alpha:0.221},0).wait(1).to({x:12.2,alpha:0.084},0).wait(1).to({x:16.8,alpha:0.018},0).wait(1).to({regX:0,regY:0,x:70,y:58,alpha:0},0).wait(6));

	// mask copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_14 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AyCDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AyRDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AztDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A0ZDZIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A0lDZIAAkRMAkFAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_1_graphics_14,x:105.9,y:21.7}).wait(1).to({graphics:mask_1_graphics_15,x:70.6,y:21.7}).wait(1).to({graphics:mask_1_graphics_16,x:55.9,y:21.7}).wait(1).to({graphics:mask_1_graphics_17,x:45.8,y:21.7}).wait(1).to({graphics:mask_1_graphics_18,x:38.2,y:21.7}).wait(1).to({graphics:mask_1_graphics_19,x:32.3,y:21.7}).wait(1).to({graphics:mask_1_graphics_20,x:27.5,y:21.7}).wait(1).to({graphics:mask_1_graphics_21,x:23.6,y:21.7}).wait(1).to({graphics:mask_1_graphics_22,x:20.4,y:21.7}).wait(1).to({graphics:mask_1_graphics_23,x:17.9,y:21.7}).wait(1).to({graphics:mask_1_graphics_24,x:15.8,y:21.7}).wait(1).to({graphics:mask_1_graphics_25,x:14.1,y:21.7}).wait(1).to({graphics:mask_1_graphics_26,x:12.9,y:21.7}).wait(1).to({graphics:mask_1_graphics_27,x:12,y:21.7}).wait(1).to({graphics:mask_1_graphics_28,x:11.3,y:21.7}).wait(1).to({graphics:mask_1_graphics_29,x:11,y:21.7}).wait(1).to({graphics:mask_1_graphics_30,x:10.9,y:21.7}).wait(56).to({graphics:mask_1_graphics_86,x:-14.1,y:21.7}).wait(1).to({graphics:mask_1_graphics_87,x:-16,y:21.7}).wait(1).to({graphics:mask_1_graphics_88,x:-22.6,y:21.7}).wait(1).to({graphics:mask_1_graphics_89,x:-36,y:21.7}).wait(1).to({graphics:mask_1_graphics_90,x:-58.7,y:21.7}).wait(1).to({graphics:mask_1_graphics_91,x:-89.8,y:21.7}).wait(1).to({graphics:mask_1_graphics_92,x:-117,y:21.7}).wait(1).to({graphics:mask_1_graphics_93,x:-126.2,y:21.7}).wait(1).to({graphics:mask_1_graphics_94,x:-130.6,y:21.7}).wait(1).to({graphics:mask_1_graphics_95,x:-131.8,y:21.7}).wait(8));

	// txt203
	this.instance_2 = new lib.txt203();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-129.1,30);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:-35.5,regY:-0.7,x:-116.6,y:29.3,alpha:0.371},0).wait(1).to({x:-96.6,alpha:0.526},0).wait(1).to({x:-83,alpha:0.632},0).wait(1).to({x:-72.7,alpha:0.712},0).wait(1).to({x:-64.6,alpha:0.774},0).wait(1).to({x:-58.1,alpha:0.825},0).wait(1).to({x:-52.8,alpha:0.866},0).wait(1).to({x:-48.5,alpha:0.899},0).wait(1).to({x:-45,alpha:0.926},0).wait(1).to({x:-42.1,alpha:0.948},0).wait(1).to({x:-39.9,alpha:0.965},0).wait(1).to({x:-38.2,alpha:0.979},0).wait(1).to({x:-36.9,alpha:0.988},0).wait(1).to({x:-36.1,alpha:0.995},0).wait(1).to({x:-35.6,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:0,y:30,alpha:1},0).wait(57).to({regX:-35.5,regY:-0.7,x:-34.5,y:29.3,alpha:0.986},0).wait(1).to({x:-31.1,alpha:0.937},0).wait(1).to({x:-24.1,alpha:0.837},0).wait(1).to({x:-12.2,alpha:0.668},0).wait(1).to({x:4,alpha:0.435},0).wait(1).to({x:19.1,alpha:0.221},0).wait(1).to({x:28.6,alpha:0.084},0).wait(1).to({x:33.2,alpha:0.018},0).wait(1).to({regX:0,regY:0,x:70,y:30,alpha:0},0).wait(8));

	// mask copy 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_12 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_85 = new cjs.Graphics().p("AyDCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_86 = new cjs.Graphics().p("AyLCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AybCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_88 = new cjs.Graphics().p("Ay3CJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_89 = new cjs.Graphics().p("AzdCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_90 = new cjs.Graphics().p("A0BCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_91 = new cjs.Graphics().p("A0XCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_92 = new cjs.Graphics().p("A0iCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_93 = new cjs.Graphics().p("A0lCJIAAkRMAkFAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_2_graphics_12,x:105.9,y:1.7}).wait(1).to({graphics:mask_2_graphics_13,x:70.6,y:1.7}).wait(1).to({graphics:mask_2_graphics_14,x:55.9,y:1.7}).wait(1).to({graphics:mask_2_graphics_15,x:45.8,y:1.7}).wait(1).to({graphics:mask_2_graphics_16,x:38.2,y:1.7}).wait(1).to({graphics:mask_2_graphics_17,x:32.3,y:1.7}).wait(1).to({graphics:mask_2_graphics_18,x:27.5,y:1.7}).wait(1).to({graphics:mask_2_graphics_19,x:23.6,y:1.7}).wait(1).to({graphics:mask_2_graphics_20,x:20.4,y:1.7}).wait(1).to({graphics:mask_2_graphics_21,x:17.9,y:1.7}).wait(1).to({graphics:mask_2_graphics_22,x:15.8,y:1.7}).wait(1).to({graphics:mask_2_graphics_23,x:14.1,y:1.7}).wait(1).to({graphics:mask_2_graphics_24,x:12.9,y:1.7}).wait(1).to({graphics:mask_2_graphics_25,x:12,y:1.7}).wait(1).to({graphics:mask_2_graphics_26,x:11.3,y:1.7}).wait(1).to({graphics:mask_2_graphics_27,x:11,y:1.7}).wait(1).to({graphics:mask_2_graphics_28,x:10.9,y:1.7}).wait(56).to({graphics:mask_2_graphics_84,x:-115.1,y:1.7}).wait(1).to({graphics:mask_2_graphics_85,x:-115.6,y:1.7}).wait(1).to({graphics:mask_2_graphics_86,x:-116.4,y:1.7}).wait(1).to({graphics:mask_2_graphics_87,x:-118,y:1.7}).wait(1).to({graphics:mask_2_graphics_88,x:-120.8,y:1.7}).wait(1).to({graphics:mask_2_graphics_89,x:-124.6,y:1.7}).wait(1).to({graphics:mask_2_graphics_90,x:-128.2,y:1.7}).wait(1).to({graphics:mask_2_graphics_91,x:-130.4,y:1.7}).wait(1).to({graphics:mask_2_graphics_92,x:-131.5,y:1.7}).wait(1).to({graphics:mask_2_graphics_93,x:-131.8,y:1.7}).wait(10));

	// txt202
	this.instance_3 = new lib.txt202();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-61.9,3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(1).to({regX:-69,regY:-0.7,x:-107.9,y:2.3,alpha:0.371},0).wait(1).to({x:-98.3,alpha:0.526},0).wait(1).to({x:-91.8,alpha:0.632},0).wait(1).to({x:-86.8,alpha:0.712},0).wait(1).to({x:-82.9,alpha:0.774},0).wait(1).to({x:-79.8,alpha:0.825},0).wait(1).to({x:-77.3,alpha:0.866},0).wait(1).to({x:-75.2,alpha:0.899},0).wait(1).to({x:-73.5,alpha:0.926},0).wait(1).to({x:-72.2,alpha:0.948},0).wait(1).to({x:-71.1,alpha:0.965},0).wait(1).to({x:-70.3,alpha:0.979},0).wait(1).to({x:-69.7,alpha:0.988},0).wait(1).to({x:-69.3,alpha:0.995},0).wait(1).to({x:-69,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:0,y:3,alpha:1},0).wait(57).to({regX:-69,regY:-0.7,x:-68,y:2.3,alpha:0.986},0).wait(1).to({x:-64.6,alpha:0.937},0).wait(1).to({x:-57.6,alpha:0.837},0).wait(1).to({x:-45.7,alpha:0.668},0).wait(1).to({x:-29.5,alpha:0.435},0).wait(1).to({x:-14.4,alpha:0.221},0).wait(1).to({x:-4.9,alpha:0.084},0).wait(1).to({x:-0.3,alpha:0.018},0).wait(1).to({regX:0,regY:0,x:70,y:3,alpha:0},0).wait(10));

	// mask copy 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_10 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_11 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_12 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_13 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_14 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_15 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_16 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_17 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_18 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_19 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_20 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_21 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_22 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_23 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_24 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_25 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_26 = new cjs.Graphics().p("AyCD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_82 = new cjs.Graphics().p("A1DD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_83 = new cjs.Graphics().p("A1DD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_84 = new cjs.Graphics().p("A1BD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_85 = new cjs.Graphics().p("A0+D/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_86 = new cjs.Graphics().p("A05D/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_87 = new cjs.Graphics().p("A0yD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_88 = new cjs.Graphics().p("A0sD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_89 = new cjs.Graphics().p("A0oD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_90 = new cjs.Graphics().p("A0mD/IAAo+MAkFAAAIAAI+g");
	var mask_3_graphics_91 = new cjs.Graphics().p("A0lD/IAAo+MAkFAAAIAAI+g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_3_graphics_10,x:105.9,y:-32}).wait(1).to({graphics:mask_3_graphics_11,x:70.6,y:-32}).wait(1).to({graphics:mask_3_graphics_12,x:55.9,y:-32}).wait(1).to({graphics:mask_3_graphics_13,x:45.8,y:-32}).wait(1).to({graphics:mask_3_graphics_14,x:38.2,y:-32}).wait(1).to({graphics:mask_3_graphics_15,x:32.3,y:-32}).wait(1).to({graphics:mask_3_graphics_16,x:27.5,y:-32}).wait(1).to({graphics:mask_3_graphics_17,x:23.6,y:-32}).wait(1).to({graphics:mask_3_graphics_18,x:20.4,y:-32}).wait(1).to({graphics:mask_3_graphics_19,x:17.9,y:-32}).wait(1).to({graphics:mask_3_graphics_20,x:15.8,y:-32}).wait(1).to({graphics:mask_3_graphics_21,x:14.1,y:-32}).wait(1).to({graphics:mask_3_graphics_22,x:12.9,y:-32}).wait(1).to({graphics:mask_3_graphics_23,x:12,y:-32}).wait(1).to({graphics:mask_3_graphics_24,x:11.3,y:-32}).wait(1).to({graphics:mask_3_graphics_25,x:11,y:-32}).wait(1).to({graphics:mask_3_graphics_26,x:10.9,y:-32}).wait(56).to({graphics:mask_3_graphics_82,x:-134.8,y:-32}).wait(1).to({graphics:mask_3_graphics_83,x:-134.8,y:-32}).wait(1).to({graphics:mask_3_graphics_84,x:-134.6,y:-32}).wait(1).to({graphics:mask_3_graphics_85,x:-134.3,y:-32}).wait(1).to({graphics:mask_3_graphics_86,x:-133.8,y:-32}).wait(1).to({graphics:mask_3_graphics_87,x:-133.1,y:-32}).wait(1).to({graphics:mask_3_graphics_88,x:-132.5,y:-32}).wait(1).to({graphics:mask_3_graphics_89,x:-132.1,y:-32}).wait(1).to({graphics:mask_3_graphics_90,x:-131.9,y:-32}).wait(1).to({graphics:mask_3_graphics_91,x:-131.8,y:-32}).wait(12));

	// txt201percent
	this.instance_4 = new lib.txt201percent();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-108.9,-24);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.7,x:-91.7,y:-24.7,alpha:0.371},0).wait(1).to({x:-84.8,alpha:0.526},0).wait(1).to({x:-80,alpha:0.632},0).wait(1).to({x:-76.4,alpha:0.712},0).wait(1).to({x:-73.6,alpha:0.774},0).wait(1).to({x:-71.3,alpha:0.825},0).wait(1).to({x:-69.5,alpha:0.866},0).wait(1).to({x:-68,alpha:0.899},0).wait(1).to({x:-66.8,alpha:0.926},0).wait(1).to({x:-65.8,alpha:0.948},0).wait(1).to({x:-65,alpha:0.965},0).wait(1).to({x:-64.4,alpha:0.979},0).wait(1).to({x:-64,alpha:0.988},0).wait(1).to({x:-63.7,alpha:0.995},0).wait(1).to({x:-63.5,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-64,y:-24,alpha:1},0).wait(57).to({regX:0.5,regY:-0.7,x:-62.5,y:-24.7,alpha:0.986},0).wait(1).to({x:-59,alpha:0.937},0).wait(1).to({x:-52.1,alpha:0.837},0).wait(1).to({x:-40.2,alpha:0.668},0).wait(1).to({x:-23.9,alpha:0.435},0).wait(1).to({x:-8.9,alpha:0.221},0).wait(1).to({x:0.6,alpha:0.084},0).wait(1).to({x:5.2,alpha:0.018},0).wait(1).to({regX:0,regY:0,x:6,y:-24,alpha:0},0).wait(12));

	// txt201
	this.instance_5 = new lib.txt201();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-128,-36);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(1).to({regY:-2,x:-112,y:-38,alpha:0.371},0).wait(1).to({x:-105.4,alpha:0.526},0).wait(1).to({x:-100.8,alpha:0.632},0).wait(1).to({x:-97.4,alpha:0.712},0).wait(1).to({x:-94.7,alpha:0.774},0).wait(1).to({x:-92.5,alpha:0.825},0).wait(1).to({x:-90.7,alpha:0.866},0).wait(1).to({x:-89.3,alpha:0.899},0).wait(1).to({x:-88.1,alpha:0.926},0).wait(1).to({x:-87.2,alpha:0.948},0).wait(1).to({x:-86.4,alpha:0.965},0).wait(1).to({x:-85.9,alpha:0.979},0).wait(1).to({x:-85.4,alpha:0.988},0).wait(1).to({x:-85.2,alpha:0.995},0).wait(1).to({x:-85,alpha:0.999},0).wait(1).to({regY:0,y:-36,alpha:1},0).wait(57).to({regY:-2,x:-84,y:-38,alpha:0.986},0).wait(1).to({x:-80.5,alpha:0.937},0).wait(1).to({x:-73.6,alpha:0.837},0).wait(1).to({x:-61.7,alpha:0.668},0).wait(1).to({x:-45.4,alpha:0.435},0).wait(1).to({x:-30.4,alpha:0.221},0).wait(1).to({x:-20.9,alpha:0.084},0).wait(1).to({x:-16.2,alpha:0.018},0).wait(1).to({regY:0,x:-15,y:-36,alpha:0},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-436,-1,304.4,6.8);


(lib.TXT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Line
	this.instance = new lib.redline();
	this.instance.parent = this;
	this.instance.setTransform(-281.9,-40.6,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-281.4},0).wait(1).to({x:-280.3},0).wait(1).to({x:-278.2},0).wait(1).to({x:-275.1},0).wait(1).to({x:-271.2},0).wait(1).to({x:-267.4},0).wait(1).to({x:-264.5},0).wait(1).to({x:-262.6},0).wait(1).to({x:-261.5},0).wait(1).to({regX:0.1,x:-261.4},0).wait(85).to({regX:0.2},0).wait(1).to({x:-261.7},0).wait(1).to({x:-262.2},0).wait(1).to({x:-263},0).wait(1).to({x:-264},0).wait(1).to({x:-265.4},0).wait(1).to({x:-267.1},0).wait(1).to({x:-269.3},0).wait(1).to({x:-272.4},0).wait(1).to({regX:0.1,x:-277.9},0).wait(11));

	// mask copy 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_17 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_18 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_19 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_20 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_21 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_22 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_23 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_24 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_25 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_26 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_27 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_28 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_29 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_30 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_31 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_32 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_100 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_101 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_102 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_103 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_104 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_105 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_106 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_107 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_108 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_109 = new cjs.Graphics().p("AyCEQIAAkRMAkFAAAIAAERg");
	var mask_graphics_110 = new cjs.Graphics().p("AzfEQIAAkRMAkFAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:105.9,y:27.2}).wait(1).to({graphics:mask_graphics_17,x:68.9,y:27.2}).wait(1).to({graphics:mask_graphics_18,x:55.1,y:27.2}).wait(1).to({graphics:mask_graphics_19,x:45.8,y:27.2}).wait(1).to({graphics:mask_graphics_20,x:38.8,y:27.2}).wait(1).to({graphics:mask_graphics_21,x:33.3,y:27.2}).wait(1).to({graphics:mask_graphics_22,x:29,y:27.2}).wait(1).to({graphics:mask_graphics_23,x:25.4,y:27.2}).wait(1).to({graphics:mask_graphics_24,x:22.5,y:27.2}).wait(1).to({graphics:mask_graphics_25,x:20.2,y:27.2}).wait(1).to({graphics:mask_graphics_26,x:18.3,y:27.2}).wait(1).to({graphics:mask_graphics_27,x:16.8,y:27.2}).wait(1).to({graphics:mask_graphics_28,x:15.7,y:27.2}).wait(1).to({graphics:mask_graphics_29,x:14.8,y:27.2}).wait(1).to({graphics:mask_graphics_30,x:14.3,y:27.2}).wait(1).to({graphics:mask_graphics_31,x:14,y:27.2}).wait(1).to({graphics:mask_graphics_32,x:13.9,y:27.2}).wait(68).to({graphics:mask_graphics_100,x:-14.1,y:27.2}).wait(1).to({graphics:mask_graphics_101,x:-14.6,y:27.2}).wait(1).to({graphics:mask_graphics_102,x:-16.1,y:27.2}).wait(1).to({graphics:mask_graphics_103,x:-18.8,y:27.2}).wait(1).to({graphics:mask_graphics_104,x:-23,y:27.2}).wait(1).to({graphics:mask_graphics_105,x:-29,y:27.2}).wait(1).to({graphics:mask_graphics_106,x:-37.4,y:27.2}).wait(1).to({graphics:mask_graphics_107,x:-49.1,y:27.2}).wait(1).to({graphics:mask_graphics_108,x:-65.5,y:27.2}).wait(1).to({graphics:mask_graphics_109,x:-90.1,y:27.2}).wait(1).to({graphics:mask_graphics_110,x:-124.8,y:27.2}).wait(5));

	// txt104
	this.instance_1 = new lib.txt104();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62.3,40);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(1).to({regX:-54.8,regY:-1,x:-92.1,y:39,alpha:0.401},0).wait(1).to({x:-82.7,alpha:0.552},0).wait(1).to({x:-76.4,alpha:0.653},0).wait(1).to({x:-71.7,alpha:0.729},0).wait(1).to({x:-68,alpha:0.788},0).wait(1).to({x:-65,alpha:0.836},0).wait(1).to({x:-62.6,alpha:0.874},0).wait(1).to({x:-60.6,alpha:0.906},0).wait(1).to({x:-59,alpha:0.931},0).wait(1).to({x:-57.8,alpha:0.952},0).wait(1).to({x:-56.8,alpha:0.968},0).wait(1).to({x:-56,alpha:0.98},0).wait(1).to({x:-55.4,alpha:0.989},0).wait(1).to({x:-55,alpha:0.995},0).wait(1).to({x:-54.8,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:0,y:40,alpha:1},0).wait(69).to({regX:-54.8,regY:-1,x:-54.4,y:39,alpha:0.996},0).wait(1).to({x:-53.1,alpha:0.984},0).wait(1).to({x:-50.8,alpha:0.961},0).wait(1).to({x:-47.3,alpha:0.926},0).wait(1).to({x:-42.2,alpha:0.876},0).wait(1).to({x:-35,alpha:0.806},0).wait(1).to({x:-25.1,alpha:0.709},0).wait(1).to({x:-11.2,alpha:0.572},0).wait(1).to({x:9.8,alpha:0.367},0).wait(1).to({regX:0,regY:0,x:102,y:40,alpha:0},0).wait(5));

	// mask copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_14 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AzfCJIAAkRMAkFAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_1_graphics_14,x:105.9,y:13.7}).wait(1).to({graphics:mask_1_graphics_15,x:68.9,y:13.7}).wait(1).to({graphics:mask_1_graphics_16,x:55.1,y:13.7}).wait(1).to({graphics:mask_1_graphics_17,x:45.8,y:13.7}).wait(1).to({graphics:mask_1_graphics_18,x:38.8,y:13.7}).wait(1).to({graphics:mask_1_graphics_19,x:33.3,y:13.7}).wait(1).to({graphics:mask_1_graphics_20,x:29,y:13.7}).wait(1).to({graphics:mask_1_graphics_21,x:25.4,y:13.7}).wait(1).to({graphics:mask_1_graphics_22,x:22.5,y:13.7}).wait(1).to({graphics:mask_1_graphics_23,x:20.2,y:13.7}).wait(1).to({graphics:mask_1_graphics_24,x:18.3,y:13.7}).wait(1).to({graphics:mask_1_graphics_25,x:16.8,y:13.7}).wait(1).to({graphics:mask_1_graphics_26,x:15.7,y:13.7}).wait(1).to({graphics:mask_1_graphics_27,x:14.8,y:13.7}).wait(1).to({graphics:mask_1_graphics_28,x:14.3,y:13.7}).wait(1).to({graphics:mask_1_graphics_29,x:14,y:13.7}).wait(1).to({graphics:mask_1_graphics_30,x:13.9,y:13.7}).wait(68).to({graphics:mask_1_graphics_98,x:-14.1,y:13.7}).wait(1).to({graphics:mask_1_graphics_99,x:-14.6,y:13.7}).wait(1).to({graphics:mask_1_graphics_100,x:-16.1,y:13.7}).wait(1).to({graphics:mask_1_graphics_101,x:-18.8,y:13.7}).wait(1).to({graphics:mask_1_graphics_102,x:-23,y:13.7}).wait(1).to({graphics:mask_1_graphics_103,x:-29,y:13.7}).wait(1).to({graphics:mask_1_graphics_104,x:-37.4,y:13.7}).wait(1).to({graphics:mask_1_graphics_105,x:-49.1,y:13.7}).wait(1).to({graphics:mask_1_graphics_106,x:-65.5,y:13.7}).wait(1).to({graphics:mask_1_graphics_107,x:-90.1,y:13.7}).wait(1).to({graphics:mask_1_graphics_108,x:-124.8,y:13.7}).wait(7));

	// txt103
	this.instance_2 = new lib.txt103();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-147.5,13);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:-12.3,regY:-0.9,x:-100.6,y:12.1,alpha:0.401},0).wait(1).to({x:-78.4,alpha:0.552},0).wait(1).to({x:-63.4,alpha:0.653},0).wait(1).to({x:-52.2,alpha:0.729},0).wait(1).to({x:-43.5,alpha:0.788},0).wait(1).to({x:-36.5,alpha:0.836},0).wait(1).to({x:-30.8,alpha:0.874},0).wait(1).to({x:-26.2,alpha:0.906},0).wait(1).to({x:-22.4,alpha:0.931},0).wait(1).to({x:-19.4,alpha:0.952},0).wait(1).to({x:-17,alpha:0.968},0).wait(1).to({x:-15.2,alpha:0.98},0).wait(1).to({x:-13.8,alpha:0.989},0).wait(1).to({x:-12.9,alpha:0.995},0).wait(1).to({x:-12.4,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:0,y:13,alpha:1},0).wait(69).to({regX:-12.3,regY:-0.9,x:-11.9,y:12.1,alpha:0.996},0).wait(1).to({x:-10.6,alpha:0.984},0).wait(1).to({x:-8.3,alpha:0.961},0).wait(1).to({x:-4.8,alpha:0.926},0).wait(1).to({x:0.3,alpha:0.876},0).wait(1).to({x:7.5,alpha:0.806},0).wait(1).to({x:17.4,alpha:0.709},0).wait(1).to({x:31.3,alpha:0.572},0).wait(1).to({x:52.3,alpha:0.367},0).wait(1).to({regX:0,regY:0,x:102,y:13,alpha:0},0).wait(7));

	// mask copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_12 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_99 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_101 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_102 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_103 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_104 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AyCCJIAAkRMAkFAAAIAAERg");
	var mask_2_graphics_106 = new cjs.Graphics().p("AzfCJIAAkRMAkFAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_2_graphics_12,x:105.9,y:-13.3}).wait(1).to({graphics:mask_2_graphics_13,x:68.9,y:-13.3}).wait(1).to({graphics:mask_2_graphics_14,x:55.1,y:-13.3}).wait(1).to({graphics:mask_2_graphics_15,x:45.8,y:-13.3}).wait(1).to({graphics:mask_2_graphics_16,x:38.8,y:-13.3}).wait(1).to({graphics:mask_2_graphics_17,x:33.3,y:-13.3}).wait(1).to({graphics:mask_2_graphics_18,x:29,y:-13.3}).wait(1).to({graphics:mask_2_graphics_19,x:25.4,y:-13.3}).wait(1).to({graphics:mask_2_graphics_20,x:22.5,y:-13.3}).wait(1).to({graphics:mask_2_graphics_21,x:20.2,y:-13.3}).wait(1).to({graphics:mask_2_graphics_22,x:18.3,y:-13.3}).wait(1).to({graphics:mask_2_graphics_23,x:16.8,y:-13.3}).wait(1).to({graphics:mask_2_graphics_24,x:15.7,y:-13.3}).wait(1).to({graphics:mask_2_graphics_25,x:14.8,y:-13.3}).wait(1).to({graphics:mask_2_graphics_26,x:14.3,y:-13.3}).wait(1).to({graphics:mask_2_graphics_27,x:14,y:-13.3}).wait(1).to({graphics:mask_2_graphics_28,x:13.9,y:-13.3}).wait(68).to({graphics:mask_2_graphics_96,x:-14.1,y:-13.3}).wait(1).to({graphics:mask_2_graphics_97,x:-14.6,y:-13.3}).wait(1).to({graphics:mask_2_graphics_98,x:-16.1,y:-13.3}).wait(1).to({graphics:mask_2_graphics_99,x:-18.8,y:-13.3}).wait(1).to({graphics:mask_2_graphics_100,x:-23,y:-13.3}).wait(1).to({graphics:mask_2_graphics_101,x:-29,y:-13.3}).wait(1).to({graphics:mask_2_graphics_102,x:-37.4,y:-13.3}).wait(1).to({graphics:mask_2_graphics_103,x:-49.1,y:-13.3}).wait(1).to({graphics:mask_2_graphics_104,x:-65.5,y:-13.3}).wait(1).to({graphics:mask_2_graphics_105,x:-90.1,y:-13.3}).wait(1).to({graphics:mask_2_graphics_106,x:-124.8,y:-13.3}).wait(9));

	// txt102
	this.instance_3 = new lib.txt102();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-148.9,-13);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(1).to({regX:-11.6,regY:0.8,x:-100.7,y:-12.2,alpha:0.401},0).wait(1).to({x:-78.3,alpha:0.552},0).wait(1).to({x:-63.2,alpha:0.653},0).wait(1).to({x:-51.9,alpha:0.729},0).wait(1).to({x:-43.1,alpha:0.788},0).wait(1).to({x:-36,alpha:0.836},0).wait(1).to({x:-30.3,alpha:0.874},0).wait(1).to({x:-25.6,alpha:0.906},0).wait(1).to({x:-21.8,alpha:0.931},0).wait(1).to({x:-18.8,alpha:0.952},0).wait(1).to({x:-16.4,alpha:0.968},0).wait(1).to({x:-14.5,alpha:0.98},0).wait(1).to({x:-13.2,alpha:0.989},0).wait(1).to({x:-12.2,alpha:0.995},0).wait(1).to({x:-11.7,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:0,y:-13,alpha:1},0).wait(69).to({regX:-11.6,regY:0.8,x:-11.2,y:-12.2,alpha:0.996},0).wait(1).to({x:-9.9,alpha:0.984},0).wait(1).to({x:-7.6,alpha:0.961},0).wait(1).to({x:-4.1,alpha:0.926},0).wait(1).to({x:1,alpha:0.876},0).wait(1).to({x:8.2,alpha:0.806},0).wait(1).to({x:18.1,alpha:0.709},0).wait(1).to({x:32,alpha:0.572},0).wait(1).to({x:53,alpha:0.367},0).wait(1).to({regX:0,regY:0,x:102,y:-13,alpha:0},0).wait(9));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_10 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AyCBJIAAltMAkFAAAIAAFtg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AzfBJIAAltMAkFAAAIAAFtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_3_graphics_10,x:105.9,y:-29.3}).wait(1).to({graphics:mask_3_graphics_11,x:67.7,y:-29.3}).wait(1).to({graphics:mask_3_graphics_12,x:53.4,y:-29.3}).wait(1).to({graphics:mask_3_graphics_13,x:43.8,y:-29.3}).wait(1).to({graphics:mask_3_graphics_14,x:36.6,y:-29.3}).wait(1).to({graphics:mask_3_graphics_15,x:31,y:-29.3}).wait(1).to({graphics:mask_3_graphics_16,x:26.5,y:-29.3}).wait(1).to({graphics:mask_3_graphics_17,x:22.8,y:-29.3}).wait(1).to({graphics:mask_3_graphics_18,x:19.8,y:-29.3}).wait(1).to({graphics:mask_3_graphics_19,x:17.4,y:-29.3}).wait(1).to({graphics:mask_3_graphics_20,x:15.5,y:-29.3}).wait(1).to({graphics:mask_3_graphics_21,x:13.9,y:-29.3}).wait(1).to({graphics:mask_3_graphics_22,x:12.7,y:-29.3}).wait(1).to({graphics:mask_3_graphics_23,x:11.9,y:-29.3}).wait(1).to({graphics:mask_3_graphics_24,x:11.3,y:-29.3}).wait(1).to({graphics:mask_3_graphics_25,x:11,y:-29.3}).wait(1).to({graphics:mask_3_graphics_26,x:10.9,y:-29.3}).wait(68).to({graphics:mask_3_graphics_94,x:-14.1,y:-29.3}).wait(1).to({graphics:mask_3_graphics_95,x:-14.6,y:-29.3}).wait(1).to({graphics:mask_3_graphics_96,x:-16.1,y:-29.3}).wait(1).to({graphics:mask_3_graphics_97,x:-18.8,y:-29.3}).wait(1).to({graphics:mask_3_graphics_98,x:-23,y:-29.3}).wait(1).to({graphics:mask_3_graphics_99,x:-29,y:-29.3}).wait(1).to({graphics:mask_3_graphics_100,x:-37.4,y:-29.3}).wait(1).to({graphics:mask_3_graphics_101,x:-49.1,y:-29.3}).wait(1).to({graphics:mask_3_graphics_102,x:-65.5,y:-29.3}).wait(1).to({graphics:mask_3_graphics_103,x:-90.1,y:-29.3}).wait(1).to({graphics:mask_3_graphics_104,x:-124.8,y:-29.3}).wait(11));

	// txt101
	this.instance_4 = new lib.txt101();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-132.2,-40);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(1).to({regX:-19.9,regY:-0.7,x:-99,y:-40.7,alpha:0.401},0).wait(1).to({x:-79.1,alpha:0.552},0).wait(1).to({x:-65.7,alpha:0.653},0).wait(1).to({x:-55.7,alpha:0.729},0).wait(1).to({x:-47.8,alpha:0.788},0).wait(1).to({x:-41.6,alpha:0.836},0).wait(1).to({x:-36.5,alpha:0.874},0).wait(1).to({x:-32.3,alpha:0.906},0).wait(1).to({x:-29,alpha:0.931},0).wait(1).to({x:-26.3,alpha:0.952},0).wait(1).to({x:-24.1,alpha:0.968},0).wait(1).to({x:-22.5,alpha:0.98},0).wait(1).to({x:-21.3,alpha:0.989},0).wait(1).to({x:-20.5,alpha:0.995},0).wait(1).to({x:-20,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:0,y:-40,alpha:1},0).wait(27).to({regX:-19.9,regY:-0.7,scaleX:1.01,scaleY:1.01,x:-19.3,y:-40.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-16.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-12.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-9.7,y:-40.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:-8.1},0).wait(1).to({regX:0,regY:-0.1,scaleX:1.15,scaleY:1.15,x:15.2,y:-40},0).wait(1).to({regX:-19.9,regY:-0.7,scaleX:1.15,scaleY:1.15,x:-7.9,y:-40.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-8.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-9.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-10.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-12.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-14.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-16.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-17.9,y:-40.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-18.9},0).wait(1).to({scaleX:1,scaleY:1,x:-19.5},0).wait(1).to({scaleX:1,scaleY:1,x:-19.8},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:-40},0).wait(25).to({regX:-19.9,regY:-0.7,x:-19.5,y:-40.7,alpha:0.996},0).wait(1).to({x:-18.2,alpha:0.984},0).wait(1).to({x:-15.9,alpha:0.961},0).wait(1).to({x:-12.4,alpha:0.926},0).wait(1).to({x:-7.3,alpha:0.876},0).wait(1).to({x:-0.1,alpha:0.806},0).wait(1).to({x:9.8,alpha:0.709},0).wait(1).to({x:23.7,alpha:0.572},0).wait(1).to({x:44.7,alpha:0.367},0).wait(1).to({regX:0,regY:0,x:102,y:-40,alpha:0},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434,-44,304.4,6.8);


(lib.legalmovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-16.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-10.6,alpha:0.366},0).wait(1).to({y:-7.6,alpha:0.549},0).wait(1).to({y:-5.4,alpha:0.679},0).wait(1).to({y:-3.7,alpha:0.779},0).wait(1).to({y:-2.4,alpha:0.856},0).wait(1).to({y:-1.4,alpha:0.916},0).wait(1).to({y:-0.7,alpha:0.961},0).wait(1).to({y:-0.2,alpha:0.989},0).wait(1).to({y:0,alpha:1},0).wait(61).to({y:0.3,alpha:0.986},0).wait(1).to({y:0.9,alpha:0.956},0).wait(1).to({y:1.7,alpha:0.913},0).wait(1).to({y:2.9,alpha:0.856},0).wait(1).to({y:4.3,alpha:0.785},0).wait(1).to({y:6,alpha:0.698},0).wait(1).to({y:8.1,alpha:0.593},0).wait(1).to({y:10.8,alpha:0.461},0).wait(1).to({y:14.2,alpha:0.288},0).wait(1).to({y:20,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-126.8,200,220);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butt();
	this.instance.parent = this;

	this.instance_1 = new lib.butt_over();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-19.5,171.5,39.8);


(lib.alfalogoanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("A7fCJIAAkRMAkGAAAIAAERg");
	var mask_graphics_5 = new cjs.Graphics().p("A7XCJIAAkRMAkFAAAIAAERg");
	var mask_graphics_6 = new cjs.Graphics().p("A67CJIAAkRMAkFAAAIAAERg");
	var mask_graphics_7 = new cjs.Graphics().p("A6DCJIAAkRMAkFAAAIAAERg");
	var mask_graphics_8 = new cjs.Graphics().p("A4oCJIAAkRMAkFAAAIAAERg");
	var mask_graphics_9 = new cjs.Graphics().p("A2yCJIAAkRMAkFAAAIAAERg");
	var mask_graphics_10 = new cjs.Graphics().p("A1HCJIAAkRMAkFAAAIAAERg");
	var mask_graphics_11 = new cjs.Graphics().p("A0CCJIAAkRMAkFAAAIAAERg");
	var mask_graphics_12 = new cjs.Graphics().p("AzgCJIAAkRMAkFAAAIAAERg");
	var mask_graphics_13 = new cjs.Graphics().p("AzWCJIAAkRMAkEAAAIAAERg");
	var mask_graphics_19 = new cjs.Graphics().p("AzWCJIAAkRMAkEAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:-175.9,y:-1.6}).wait(1).to({graphics:mask_graphics_5,x:-175.2,y:-1.6}).wait(1).to({graphics:mask_graphics_6,x:-172.4,y:-1.6}).wait(1).to({graphics:mask_graphics_7,x:-166.8,y:-1.6}).wait(1).to({graphics:mask_graphics_8,x:-157.7,y:-1.6}).wait(1).to({graphics:mask_graphics_9,x:-145.9,y:-1.6}).wait(1).to({graphics:mask_graphics_10,x:-135.2,y:-1.6}).wait(1).to({graphics:mask_graphics_11,x:-128.3,y:-1.6}).wait(1).to({graphics:mask_graphics_12,x:-124.9,y:-1.6}).wait(1).to({graphics:mask_graphics_13,x:-123.9,y:-1.6}).wait(6).to({graphics:mask_graphics_19,x:-123.9,y:-1.6}).wait(6));

	// redline
	this.instance = new lib.redline();
	this.instance.parent = this;
	this.instance.setTransform(36,0);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(21));

	// alfalogo
	this.instance_1 = new lib.alfalogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-141,0,0.5,0.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.1,regY:-0.2,scaleX:0.72,scaleY:0.72,y:-0.1,alpha:0.443},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-141.1,alpha:0.652},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:-0.2,alpha:0.781},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.867},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.924},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.961},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-141,y:0,alpha:1},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.5,-23.5,46.9,46.8);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Legal
	this.instance = new lib.legalmovie("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-2,-45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(420).to({_off:false},0).to({_off:true},78).wait(24));

	// BUTT
	this.instance_1 = new lib.button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-6,0.2,0.2,0,0,0,0,-0.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(331).to({_off:false},0).wait(1).to({regX:0.3,regY:0.4,scaleX:0.49,scaleY:0.49,x:0.2,y:-5.6,alpha:0.357},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:-5.5,alpha:0.547},0).wait(1).to({scaleX:0.74,scaleY:0.74,alpha:0.679},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:0.3,y:-5.4,alpha:0.777},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.852},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.909},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:-5.3,alpha:0.95},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.978},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.995},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:-6,alpha:1},0).wait(66).to({regX:0.3,regY:0.4,scaleX:1,scaleY:1,x:0.3,y:-5.6,alpha:0.994},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-5.5,alpha:0.976},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.945},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-5.6,alpha:0.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,alpha:0.838},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.758},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:0.2,alpha:0.653},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:-5.7,alpha:0.516},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.325},0).wait(1).to({regX:0,regY:-0.3,scaleX:0.2,scaleY:0.2,x:0,y:-6,alpha:0},0).to({_off:true},1).wait(105));

	// TXT4
	this.instance_2 = new lib.TXT4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.4,-151.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(322).to({_off:false},0).to({_off:true},98).wait(102));

	// TXT3
	this.instance_3 = new lib.TXT3("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-38.3,-126);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(227).to({_off:false},0).to({_off:true},95).wait(200));

	// TXT2
	this.instance_4 = new lib.TXT2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.7,-112.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(129).to({_off:false},0).to({_off:true},98).wait(295));

	// TXT1
	this.instance_5 = new lib.TXT1("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1,-122);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({_off:true},118).wait(393));

	// Alfalogo
	this.instance_6 = new lib.alfalogoanim("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(141.5,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(487).to({startPosition:24},0).wait(1).to({regX:-94,regY:-0.2,x:47.5,y:140.3,alpha:0.993},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.678},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.316},0).wait(1).to({regX:0,regY:0,x:141.5,y:140.5,alpha:0},0).to({_off:true},2).wait(24));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(522));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1156,-222,1295,439);


// stage content:
(lib.alfa_7_240x400_review_v6 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(119,199,242,402);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"legal.png", id:"legal"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;