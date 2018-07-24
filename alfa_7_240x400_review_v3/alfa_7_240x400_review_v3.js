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
p.nominalBounds = new cjs.Rectangle(0,0,200,220);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,74);// helper functions:

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


(lib.RED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhFsABkQgGAAgEgFQgFgEAAgGIAAipQAAgGAFgEQAEgFAGAAMCLZAAAQAGAAAFAFQAEAEAAAGIAACpQAAAGgEAEQgFAFgGAAg");
	this.shape.setTransform(177.2,139.4,0.34,0.34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBKIAAhlIhEBlIgfAAIAAiTIAgAAIAABiIBDhiIAgAAIAACTg");
	this.shape_1.setTransform(30.9,182.2,0.34,0.34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIAxQAKAAAEgMQAGgMAEgcIAIhHIBxAAIAACSIgfAAIAAh2Ig1AAIgFAuQgFAogNARQgNASgZAAg");
	this.shape_2.setTransform(24.7,182.2,0.34,0.34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzA4QgWgVAAgjQABgfAUgXQAVgWAgAAQAhAAATAWQAVAXgBAiIAAAIIhwAAQABAQANANQANALATAAQALAAAMgEQALgEAIgIIAOAVQgWAVglAAQghAAgWgVgAgcgmQgKAMgBAPIBRAAQAAgQgKgLQgLgMgUAAQgSAAgLAMg");
	this.shape_3.setTransform(19.2,182.2,0.34,0.34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqBcIAAglIhzAAIAAiSIAgAAIAAB2IBDAAIAAh2IAgAAIAAB2IAQAAIAABBg");
	this.shape_4.setTransform(13.6,182.8,0.34,0.34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdBKIgsg9IgVAVIAAAoIggAAIAAiTIAgAAIAABHIBAhHIAoAAIg+BDIA/BQg");
	this.shape_5.setTransform(5.3,182.2,0.34,0.34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2A3QgVgWAAghQAAgfAVgXQAVgWAhAAQAiAAAVAWQAVAXAAAfQAAAggVAXQgUAWgjAAQgiAAgUgWgAgegiQgLAOAAAUQAAAWALANQAMAOASAAQAUAAALgOQAMgOAAgVQAAgTgMgPQgLgOgUAAQgSAAgMAOg");
	this.shape_6.setTransform(-3.4,182.2,0.34,0.34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAyBKIAAhmIgsBmIgLAAIgshmIAABmIghAAIAAiTIAqAAIAoBfIAohfIArAAIAACTg");
	this.shape_7.setTransform(-9.9,182.2,0.34,0.34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkBKIAAg2IgiAAIggA2IglAAIAlg4QgPgCgKgMQgKgLAAgTQAAgTAOgOQANgOAXAAIBSAAIAACTgAgagnQgGAGAAAHQAAAJAGAFQAEAFAKAAIAwAAIAAgmIgwAAQgJABgFAFg");
	this.shape_8.setTransform(-16.4,182.2,0.34,0.34);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHBoIAAjLIAgAAIAAAUQASgXAcAAQAdAAASAUQASAVAAAkQAAAjgSAVQgRAUgeAAQgcAAgSgYIAABNgAgXhEQgJAEgHAKIAAA5QAGAIAKAGQALAGALAAQASAAALgOQALgNAAgVQAAgWgLgOQgLgNgSAAQgLAAgLAGg");
	this.shape_9.setTransform(-22,183,0.34,0.34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA1BmIAAisIhpAAIAACsIgkAAIAAjKICxAAIAADKg");
	this.shape_10.setTransform(-28.9,181.2,0.34,0.34);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AltSEIAAhcQgXANggAAQgugBgaghQgbgjAAhAQAAhEAegjQAcggA1AAQAZAAASAJIAAhvIBDAAIAABvQARgJAaAAQBuAAAACFQAABAgcAkQgbAjgsAAQghAAgVgNIAABcgAkWNiQgJACgLAFIAACOQARAFARAAQAXAAAOgVQANgVAAgkQAAhNguAAIgSABgAnCOwQAABMAyAAQAQAAATgFIAAiOQgLgFgKgCIgRgBQgvAAAABPgAFsQjIAAlTQAUgFAegEQAigFAXAAQA5AAAuALIgBA0QgmgEgoAAQgkAAgXADIAABcQAdgHAYAAQA5AAAeAeQAdAcAAAyQAAA3ghAfQgiAfg/ABQg3gBg4gTgAG0OSIAABnQASAFAZABQAagBAOgPQAOgPAAgaQAAg1g2gDIgFAAQgTAAgTAEgAKPQhQgZgVAAglQAAgqAagWQAbgXAygBQASAAAQAGIAAgNQAAgagIgGQgJgIggAAQgWAAgfAFIgKgyQAngKAvAAQAgAAASAHQATAGAKAPQAIAKADANQADAPAAAaIAABGQAAAZAFAPQAEARAOATIgsAeQgEgBgIgGQgIgIgFgHQgMAJgMAFQgXAJgaAAQglAAgXgVgALGPDQgNAIAAATQAAAiAmAAQASAAASgHQgEgKAAgfIAAgSQgGgCgOgBQgZABgMAHgAheQhQgYgVAAglQAAgqAagWQAbgXAxgBQARAAARAGIAAgNQAAgagJgGQgIgIggAAQgWAAgfAFIgKgyQAogKAvAAQAeAAATAHQASAGAKAPQAIALADAMQADAPAAAaIAABGQAAAZAFAPQAEARAOATIgrAeQgFgBgIgGQgIgIgFgHQgNAKgLAEQgWAJgaAAQglAAgXgVgAgmPDQgNAIAAATQAAAiAmAAQASAAARgHQgDgKAAgfIAAgSQgGgCgNgBQgaABgMAHgArxQjIAAj2IBEAAIAABUQAcgGAPAAQAvAAAZAYQAZAXAAAqQAAAugcAaQgdAag1AAQg0AAgugTgAquO0IAABKQAPAEAPAAQAXAAAKgMQAIgKAAgVQAAgngpAAQgJAAgVAEgAwMQNQAOgJAIgVQAEgNAAgqIAAh/QA0gQAyAAQAyAAA1AQIAAD3IhDAAIAAjJQgZgEgLAAQgKAAgZAEIAABcQAAA3gRAZQgQAWgqAMgAUaQwQgWg4gMgYQgJgQgEgEQgGgFgOAAIgJAAIAABpIhEAAIAAkAIBEAAIAABgIALAAQAMABAGgFQAEgDAFgMIASglQALgXAHgGQANgOAXgCQATAAAMABIgDAuQgJgCgHAHQgIAHgNAdQgJATgJAIQgIAIgLACIAAABQAOADAKALQAHAHAJARIAuBhgAQMQwIAAhpIhNAAIAABpIhDAAIAAkAIBDAAIAABgIBNAAIAAhgIBDAAIAAEAgAxtQwIgUhHIiBAAIgWBHIhLAAIB9lnQAWgGAQgBQAYABAUAGIB1FngAzvOuIBcAAIgsifIgCAAgADCPOQgNgNAAgRQAAgSANgNQANgNARAAQASAAANANQAMANAAASQAAARgMANQgNANgSAAQgRAAgNgNgAm9ErQgGAAgEgDQgEgFAAgGIAAilQAAgGAEgEQAEgFAGABIOJAAQAGgBAEAFQAEAEAAAGIAAClQAAAGgEAFQgEADgGAAgAEOi0QgFgCgDgGIhAizIl8AAIhBCzQgCAGgFACQgGADgGgCIiWg7QgGgCgCgFQgDgHADgFIEUr0QAYhEAagdQAngtBCAAQBDAAAnAsQAZAeAZBEIEUL0QACAFgBAFQgCAHgHACIiWA7IgFAAIgGgBgAhxoMID/AAIh/l+IgCAAg");
	this.shape_11.setTransform(-0.1,132.3,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EF3124").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.RED, new cjs.Rectangle(-120,-200,449.4,400), null);


(lib.mouse_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouse();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouse_1, new cjs.Rectangle(-24.5,-37,49,74), null);


(lib.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3425").s().p("AgNP4QgqAAghACIAA+qQgBgeAXgXQAWgWAfAAIAbAAQAfAAAXAWQAWAWgBAfIAAesQg3gEgvAAg");
	this.shape.setTransform(0,-40.8,0.174,0.174);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE3425").s().p("AlXPLIgcgKQgdgLgNgcQgNgcAKgdIKd8vQBSAjBXAZIqdcwQgLAdgcANQgQAHgQAAQgMAAgNgEg");
	this.shape_1.setTransform(-14.4,41.6,0.174,0.174);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE3425").s().p("ArGLHITz3mQAUgYAfgDQAfgDAXAUIAWATQAYAUADAfQADAfgUAYIz0XnQhBg/hHg1g");
	this.shape_2.setTransform(27,-30.5,0.174,0.174);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE3425").s().p("AtFI3QgegIgQgbIgOgZQgQgaAIgfQAIgeAbgPIaYvOQAqBSAxBII6ZPPQgSAKgTAAQgKAAgKgDg");
	this.shape_3.setTransform(-36.7,22.8,0.174,0.174);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE3425").s().p("Av7BUIealWQAfgFAZARQAaASAFAfIAFAcQAGAfgSAZQgSAagfAFI+bFXQgJhXgVhag");
	this.shape_4.setTransform(41.7,-5.5,0.174,0.174);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE3425").s().p("AuvhPQgfgGgSgZQgRgaAFgeIAFgdQAFgeAagSQAZgSAfAFId/FSQgVBWgLBag");
	this.shape_5.setTransform(-41.9,-5.6,0.174,0.174);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE3425").s().p("AMYI2I6uvbQAvhHAqhUIavPbQAaAQAIAeQAIAegPAbIgPAZQgPAbgeAIQgKADgKAAQgTAAgSgLg");
	this.shape_6.setTransform(36.5,22.7,0.174,0.174);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3425").s().p("AqvqlQgUgXADgfQADgfAXgUIAWgTQAYgUAfADQAfADAUAXIToXZQhKA2hAA8g");
	this.shape_7.setTransform(-27.1,-30.6,0.174,0.174);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE3425").s().p("AEhPOQgcgNgLgeIqg84QBWgaBSglIKgc6QALAdgNAcQgOAdgdAKIgbAKQgNAFgMAAQgQAAgQgHg");
	this.shape_8.setTransform(14.3,41.5,0.174,0.174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lines, new cjs.Rectangle(-59.4,-58.5,118.9,117.1), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-286.4},0).wait(1).to({x:-285.1},0).wait(1).to({x:-282.6},0).wait(1).to({x:-278.9},0).wait(1).to({x:-274.4},0).wait(1).to({x:-269.9},0).wait(1).to({x:-266.5},0).wait(1).to({x:-264.3},0).wait(1).to({x:-263.1},0).wait(1).to({regX:0.1,x:-262.9},0).wait(65).to({regX:0.2},0).wait(1).to({x:-263.4},0).wait(1).to({x:-264.3},0).wait(1).to({x:-265.4},0).wait(1).to({x:-266.8},0).wait(1).to({x:-268.5},0).wait(1).to({x:-270.6},0).wait(1).to({x:-273.2},0).wait(1).to({x:-276.7},0).wait(1).to({regX:0.1,x:-282.9},0).to({_off:true},1).wait(11));

	// txt402
	this.instance_1 = new lib.txt402();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15,-7.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({regX:1.1,regY:-0.7,x:-13.9,y:1.7,alpha:0.413},0).wait(1).to({y:6,alpha:0.6},0).wait(1).to({y:8.9,alpha:0.724},0).wait(1).to({y:10.9,alpha:0.812},0).wait(1).to({y:12.5,alpha:0.878},0).wait(1).to({y:13.6,alpha:0.926},0).wait(1).to({y:14.4,alpha:0.96},0).wait(1).to({y:14.9,alpha:0.983},0).wait(1).to({y:15.2,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:-15,y:16,alpha:1},0).wait(60).to({regX:1.1,regY:-0.7,x:-13.9,y:15.5,alpha:0.995},0).wait(1).to({y:16,alpha:0.978},0).wait(1).to({y:16.9,alpha:0.95},0).wait(1).to({y:18.2,alpha:0.909},0).wait(1).to({y:20,alpha:0.852},0).wait(1).to({y:22.5,alpha:0.776},0).wait(1).to({y:25.6,alpha:0.677},0).wait(1).to({y:29.9,alpha:0.543},0).wait(1).to({y:36,alpha:0.353},0).wait(1).to({regX:0,regY:0,x:-15,y:48,alpha:0},0).to({_off:true},1).wait(11));

	// txt401
	this.instance_2 = new lib.txt401();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-34.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1).to({regX:0.1,regY:-2.9,x:0.1,y:-27.5,alpha:0.413},0).wait(1).to({y:-23.1,alpha:0.6},0).wait(1).to({y:-20.3,alpha:0.724},0).wait(1).to({y:-18.2,alpha:0.812},0).wait(1).to({y:-16.7,alpha:0.878},0).wait(1).to({y:-15.6,alpha:0.926},0).wait(1).to({y:-14.8,alpha:0.96},0).wait(1).to({y:-14.2,alpha:0.983},0).wait(1).to({y:-13.9,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:-11,alpha:1},0).wait(64).to({regX:0.1,regY:-2.9,x:0.1,y:-13.7,alpha:0.995},0).wait(1).to({y:-13.2,alpha:0.978},0).wait(1).to({y:-12.3,alpha:0.95},0).wait(1).to({y:-10.9,alpha:0.909},0).wait(1).to({y:-9.1,alpha:0.852},0).wait(1).to({y:-6.7,alpha:0.776},0).wait(1).to({y:-3.5,alpha:0.677},0).wait(1).to({y:0.7,alpha:0.543},0).wait(1).to({y:6.8,alpha:0.353},0).wait(1).to({regX:0,regY:0,x:0,y:21,alpha:0},0).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-439,-14,304.4,6.8);


(lib.TXT3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.redline();
	this.instance.parent = this;
	this.instance.setTransform(-245.5,-9.6,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-245},0).wait(1).to({x:-243.9},0).wait(1).to({x:-241.7},0).wait(1).to({x:-238.2},0).wait(1).to({x:-233.7},0).wait(1).to({x:-229.6},0).wait(1).to({x:-226.7},0).wait(1).to({x:-224.9},0).wait(1).to({x:-224},0).wait(1).to({regX:0.1,x:-223.9},0).wait(40).to({regX:0.2},0).wait(1).to({x:-224.2},0).wait(1).to({x:-224.8},0).wait(1).to({x:-225.7},0).wait(1).to({x:-226.9},0).wait(1).to({x:-228.4},0).wait(1).to({x:-230.5},0).wait(1).to({x:-233.2},0).wait(1).to({x:-237},0).wait(1).to({regX:0.1,x:-243.9},0).to({_off:true},1).wait(13));

	// txt303
	this.instance_1 = new lib.txt303();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,17.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(1).to({regX:0.7,regY:0.2,x:0.7,y:27.5,alpha:0.387},0).wait(1).to({y:32.3,alpha:0.575},0).wait(1).to({y:35.6,alpha:0.703},0).wait(1).to({y:38,alpha:0.797},0).wait(1).to({y:39.8,alpha:0.867},0).wait(1).to({y:41.1,alpha:0.919},0).wait(1).to({y:42.1,alpha:0.956},0).wait(1).to({y:42.7,alpha:0.981},0).wait(1).to({y:43.1,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0,y:43,alpha:1},0).wait(34).to({regX:0.7,regY:0.2,x:0.7,y:43.4,alpha:0.992},0).wait(1).to({y:44,alpha:0.97},0).wait(1).to({y:45,alpha:0.934},0).wait(1).to({y:46.3,alpha:0.884},0).wait(1).to({y:48.1,alpha:0.82},0).wait(1).to({y:50.3,alpha:0.741},0).wait(1).to({y:53,alpha:0.641},0).wait(1).to({y:56.4,alpha:0.514},0).wait(1).to({y:61.2,alpha:0.34},0).wait(1).to({regX:0,regY:0,x:0,y:70.2,alpha:0},0).to({_off:true},1).wait(13));

	// txt302
	this.instance_2 = new lib.txt302();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-19,-9.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1).to({regX:0.8,regY:-0.7,x:-18.2,y:-0.4,alpha:0.387},0).wait(1).to({y:4.4,alpha:0.575},0).wait(1).to({y:7.7,alpha:0.703},0).wait(1).to({y:10.1,alpha:0.797},0).wait(1).to({y:11.9,alpha:0.867},0).wait(1).to({y:13.2,alpha:0.919},0).wait(1).to({y:14.2,alpha:0.956},0).wait(1).to({y:14.8,alpha:0.981},0).wait(1).to({y:15.2,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:-19,y:16,alpha:1},0).wait(38).to({regX:0.8,regY:-0.7,x:-18.2,y:15.5,alpha:0.992},0).wait(1).to({y:16.1,alpha:0.97},0).wait(1).to({y:17.1,alpha:0.934},0).wait(1).to({y:18.4,alpha:0.884},0).wait(1).to({y:20.2,alpha:0.82},0).wait(1).to({y:22.4,alpha:0.741},0).wait(1).to({y:25.1,alpha:0.641},0).wait(1).to({y:28.5,alpha:0.514},0).wait(1).to({y:33.3,alpha:0.34},0).wait(1).to({regX:0,regY:0,x:-19,y:43.2,alpha:0},0).to({_off:true},1).wait(11));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AliD8IAAn3ILFAAIAAH3g");
	mask.setTransform(-8,-22.6);

	// txt39
	this.instance_3 = new lib.txt39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8,-69.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(1).to({regX:0.3,regY:-1.3,x:-7.7,y:-52.2,alpha:0.387},0).wait(1).to({y:-43,alpha:0.575},0).wait(1).to({y:-36.8,alpha:0.703},0).wait(1).to({y:-32.2,alpha:0.797},0).wait(1).to({y:-28.8,alpha:0.867},0).wait(1).to({y:-26.2,alpha:0.919},0).wait(1).to({y:-24.4,alpha:0.956},0).wait(1).to({y:-23.2,alpha:0.981},0).wait(1).to({y:-22.5,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:-8,y:-21,alpha:1},0).wait(47).to({regX:0.3,regY:-1.3,x:-7.7,y:-21.9,alpha:0.992},0).wait(1).to({y:-20.8,alpha:0.97},0).wait(1).to({y:-19.1,alpha:0.934},0).wait(1).to({y:-16.7,alpha:0.884},0).wait(1).to({y:-13.6,alpha:0.82},0).wait(1).to({y:-9.8,alpha:0.741},0).wait(1).to({y:-5,alpha:0.641},0).wait(1).to({y:1,alpha:0.514},0).wait(1).to({y:9.4,alpha:0.34},0).wait(1).to({regX:0,regY:0,x:-8,y:27,alpha:0},0).to({_off:true},1).wait(4));

	// txt3percent
	this.instance_4 = new lib.txt3percent();
	this.instance_4.parent = this;
	this.instance_4.setTransform(21,-35.6);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0.5,regY:-0.7,x:21.5,y:-26.3,alpha:0.387},0).wait(1).to({y:-21.5,alpha:0.575},0).wait(1).to({y:-18.3,alpha:0.703},0).wait(1).to({y:-15.9,alpha:0.797},0).wait(1).to({y:-14.1,alpha:0.867},0).wait(1).to({y:-12.7,alpha:0.919},0).wait(1).to({y:-11.8,alpha:0.956},0).wait(1).to({y:-11.1,alpha:0.981},0).wait(1).to({y:-10.8,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:21,y:-10,alpha:1},0).wait(44).to({regX:0.5,regY:-0.7,x:21.5,y:-10.4,alpha:0.992},0).wait(1).to({y:-9.8,alpha:0.97},0).wait(1).to({y:-8.8,alpha:0.934},0).wait(1).to({y:-7.5,alpha:0.884},0).wait(1).to({y:-5.8,alpha:0.82},0).wait(1).to({y:-3.6,alpha:0.741},0).wait(1).to({y:-0.9,alpha:0.641},0).wait(1).to({y:2.5,alpha:0.514},0).wait(1).to({y:7.3,alpha:0.34},0).wait(1).to({regX:0,regY:0,x:21,y:17.2,alpha:0},0).to({_off:true},1).wait(9));

	// txt301
	this.instance_5 = new lib.txt301();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-47,-35.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0.1,regY:0.6,x:-46.9,y:-25,alpha:0.387},0).wait(1).to({y:-20.2,alpha:0.575},0).wait(1).to({y:-17,alpha:0.703},0).wait(1).to({y:-14.6,alpha:0.797},0).wait(1).to({y:-12.8,alpha:0.867},0).wait(1).to({y:-11.4,alpha:0.919},0).wait(1).to({y:-10.5,alpha:0.956},0).wait(1).to({y:-9.8,alpha:0.981},0).wait(1).to({y:-9.5,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:-47,y:-10,alpha:1},0).wait(44).to({regX:0.1,regY:0.6,x:-46.9,y:-9.1,alpha:0.992},0).wait(1).to({y:-8.5,alpha:0.97},0).wait(1).to({y:-7.5,alpha:0.934},0).wait(1).to({y:-6.2,alpha:0.884},0).wait(1).to({y:-4.5,alpha:0.82},0).wait(1).to({y:-2.3,alpha:0.741},0).wait(1).to({y:0.4,alpha:0.641},0).wait(1).to({y:3.8,alpha:0.514},0).wait(1).to({y:8.6,alpha:0.34},0).wait(1).to({regX:0,regY:0,x:-47,y:17.2,alpha:0},0).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397.6,-44.6,427.6,38.4);


(lib.TXT2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Line
	this.instance = new lib.redline();
	this.instance.parent = this;
	this.instance.setTransform(-283.9,2.4,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-283.4},0).wait(1).to({x:-282.1},0).wait(1).to({x:-279.6},0).wait(1).to({x:-275.9},0).wait(1).to({x:-271.4},0).wait(1).to({x:-266.9},0).wait(1).to({x:-263.5},0).wait(1).to({x:-261.3},0).wait(1).to({x:-260.1},0).wait(1).to({regX:0.1,x:-259.9},0).wait(40).to({regX:0.2},0).wait(1).to({x:-260.3},0).wait(1).to({x:-261},0).wait(1).to({x:-262},0).wait(1).to({x:-263.4},0).wait(1).to({x:-265},0).wait(1).to({x:-267.2},0).wait(1).to({x:-269.9},0).wait(1).to({x:-273.5},0).wait(1).to({regX:0.1,x:-279.9},0).to({_off:true},1).wait(11));

	// txt204
	this.instance_1 = new lib.txt204();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,35.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:-51.9,regY:0.6,x:-51.9,y:46.7,alpha:0.471},0).wait(1).to({y:50.9,alpha:0.658},0).wait(1).to({y:53.6,alpha:0.776},0).wait(1).to({y:55.4,alpha:0.858},0).wait(1).to({y:56.7,alpha:0.915},0).wait(1).to({y:57.6,alpha:0.955},0).wait(1).to({y:58.2,alpha:0.981},0).wait(1).to({y:58.5,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0,y:58,alpha:1},0).wait(37).to({regX:-51.9,regY:0.6,x:-51.9,y:58.7,alpha:0.996},0).wait(1).to({y:59.1,alpha:0.982},0).wait(1).to({y:59.8,alpha:0.958},0).wait(1).to({y:60.8,alpha:0.922},0).wait(1).to({y:62.2,alpha:0.871},0).wait(1).to({y:64.2,alpha:0.801},0).wait(1).to({y:66.8,alpha:0.706},0).wait(1).to({y:70.5,alpha:0.574},0).wait(1).to({y:76,alpha:0.38},0).wait(1).to({regX:0,regY:0,x:0,y:86,alpha:0},0).to({_off:true},1).wait(11));

	// txt203
	this.instance_2 = new lib.txt203();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,7.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:-35.5,regY:-0.7,x:-35.5,y:17.4,alpha:0.471},0).wait(1).to({y:21.6,alpha:0.658},0).wait(1).to({y:24.3,alpha:0.776},0).wait(1).to({y:26.1,alpha:0.858},0).wait(1).to({y:27.4,alpha:0.915},0).wait(1).to({y:28.3,alpha:0.955},0).wait(1).to({y:28.9,alpha:0.981},0).wait(1).to({y:29.2,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0,y:30,alpha:1},0).wait(41).to({regX:-35.5,regY:-0.7,x:-35.5,y:29.4,alpha:0.996},0).wait(1).to({y:29.8,alpha:0.982},0).wait(1).to({y:30.5,alpha:0.958},0).wait(1).to({y:31.5,alpha:0.922},0).wait(1).to({y:32.9,alpha:0.871},0).wait(1).to({y:34.9,alpha:0.801},0).wait(1).to({y:37.5,alpha:0.706},0).wait(1).to({y:41.2,alpha:0.574},0).wait(1).to({y:46.7,alpha:0.38},0).wait(1).to({regX:0,regY:0,x:0,y:58,alpha:0},0).to({_off:true},1).wait(9));

	// txt202
	this.instance_3 = new lib.txt202();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-19.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-69,regY:-0.7,x:-69,y:-9.5,alpha:0.471},0).wait(1).to({y:-5.3,alpha:0.658},0).wait(1).to({y:-2.7,alpha:0.776},0).wait(1).to({y:-0.8,alpha:0.858},0).wait(1).to({y:0.4,alpha:0.915},0).wait(1).to({y:1.3,alpha:0.955},0).wait(1).to({y:1.9,alpha:0.981},0).wait(1).to({y:2.2,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0,y:3,alpha:1},0).wait(45).to({regX:-69,regY:-0.7,x:-69,y:2.4,alpha:0.996},0).wait(1).to({y:2.8,alpha:0.982},0).wait(1).to({y:3.5,alpha:0.958},0).wait(1).to({y:4.5,alpha:0.922},0).wait(1).to({y:5.9,alpha:0.871},0).wait(1).to({y:7.9,alpha:0.801},0).wait(1).to({y:10.5,alpha:0.706},0).wait(1).to({y:14.2,alpha:0.574},0).wait(1).to({y:19.7,alpha:0.38},0).wait(1).to({regX:0,regY:0,x:0,y:31,alpha:0},0).to({_off:true},1).wait(7));

	// txt201percent
	this.instance_4 = new lib.txt201percent();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-32,-24);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.7,x:-46.5,y:-24.7,alpha:0.471},0).wait(1).to({x:-52.5,alpha:0.658},0).wait(1).to({x:-56.3,alpha:0.776},0).wait(1).to({x:-58.9,alpha:0.858},0).wait(1).to({x:-60.7,alpha:0.915},0).wait(1).to({x:-62,alpha:0.955},0).wait(1).to({x:-62.8,alpha:0.981},0).wait(1).to({x:-63.3,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:-64,y:-24,alpha:1},0).wait(45).to({regX:0.5,regY:-0.7,x:-63.5,y:-24.4,alpha:0.996},0).wait(1).to({y:-23.8,alpha:0.982},0).wait(1).to({y:-22.6,alpha:0.958},0).wait(1).to({y:-20.9,alpha:0.922},0).wait(1).to({y:-18.4,alpha:0.871},0).wait(1).to({y:-15.1,alpha:0.801},0).wait(1).to({y:-10.5,alpha:0.706},0).wait(1).to({y:-4.2,alpha:0.574},0).wait(1).to({y:5.1,alpha:0.38},0).wait(1).to({regX:0,regY:0,x:-64,y:24,alpha:0},0).to({_off:true},1).wait(5));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AobCkIAAnUIIhAAIAAHUg");
	mask.setTransform(-54,-30.5);

	// txt201
	this.instance_5 = new lib.txt201();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-85,-80.8);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:-2,y:-61.7,alpha:0.471},0).wait(1).to({y:-53.3,alpha:0.658},0).wait(1).to({y:-48,alpha:0.776},0).wait(1).to({y:-44.3,alpha:0.858},0).wait(1).to({y:-41.7,alpha:0.915},0).wait(1).to({y:-40,alpha:0.955},0).wait(1).to({y:-38.8,alpha:0.981},0).wait(1).to({y:-38.2,alpha:0.995},0).wait(1).to({regY:0,y:-36,alpha:1},0).wait(51).to({regY:-2,y:-37.7,alpha:0.996},0).wait(1).to({y:-37.1,alpha:0.982},0).wait(1).to({y:-36,alpha:0.958},0).wait(1).to({y:-34.3,alpha:0.922},0).wait(1).to({y:-31.8,alpha:0.871},0).wait(1).to({y:-28.5,alpha:0.801},0).wait(1).to({y:-24.1,alpha:0.706},0).wait(1).to({y:-17.9,alpha:0.574},0).wait(1).to({y:-8.7,alpha:0.38},0).wait(1).to({regY:0,y:11.2,alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-436,-28.4,398,34.2);


(lib.TXT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Line
	this.instance = new lib.redline();
	this.instance.parent = this;
	this.instance.setTransform(-281.9,-40.6,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-281.4},0).wait(1).to({x:-280.1},0).wait(1).to({x:-277.6},0).wait(1).to({x:-273.9},0).wait(1).to({x:-269.4},0).wait(1).to({x:-264.9},0).wait(1).to({x:-261.5},0).wait(1).to({x:-259.3},0).wait(1).to({x:-258.1},0).wait(1).to({regX:0.1,x:-257.9},0).wait(45).to({regX:0.2},0).wait(1).to({x:-258.3},0).wait(1).to({x:-258.9},0).wait(1).to({x:-259.9},0).wait(1).to({x:-261.1},0).wait(1).to({x:-262.8},0).wait(1).to({x:-264.8},0).wait(1).to({x:-267.6},0).wait(1).to({x:-271.3},0).wait(1).to({regX:0.1,x:-277.9},0).to({_off:true},1).wait(7));

	// txt104
	this.instance_1 = new lib.txt104();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,19.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(1).to({regX:-54.8,regY:-1,x:-54.8,y:26.9,alpha:0.418},0).wait(1).to({y:30.7,alpha:0.603},0).wait(1).to({y:33.3,alpha:0.725},0).wait(1).to({y:35.1,alpha:0.813},0).wait(1).to({y:36.5,alpha:0.878},0).wait(1).to({y:37.4,alpha:0.925},0).wait(1).to({y:38.2,alpha:0.96},0).wait(1).to({y:38.6,alpha:0.983},0).wait(1).to({y:38.9,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:40,alpha:1},0).wait(34).to({regX:-54.8,regY:-1,x:-54.8,y:39.1,alpha:0.997},0).wait(1).to({y:39.3,alpha:0.986},0).wait(1).to({y:39.8,alpha:0.965},0).wait(1).to({y:40.6,alpha:0.932},0).wait(1).to({y:41.8,alpha:0.884},0).wait(1).to({y:43.4,alpha:0.816},0).wait(1).to({y:45.7,alpha:0.72},0).wait(1).to({y:49,alpha:0.583},0).wait(1).to({y:54,alpha:0.375},0).wait(1).to({regX:0,regY:0,x:0,y:64,alpha:0},0).to({_off:true},1).wait(7));

	// txt103
	this.instance_2 = new lib.txt103();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-7.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(1).to({regX:-12.3,regY:-0.9,x:-12.3,y:0,alpha:0.418},0).wait(1).to({y:3.8,alpha:0.603},0).wait(1).to({y:6.4,alpha:0.725},0).wait(1).to({y:8.2,alpha:0.813},0).wait(1).to({y:9.6,alpha:0.878},0).wait(1).to({y:10.5,alpha:0.925},0).wait(1).to({y:11.3,alpha:0.96},0).wait(1).to({y:11.7,alpha:0.983},0).wait(1).to({y:12,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:13,alpha:1},0).wait(38).to({regX:-12.3,regY:-0.9,x:-12.3,y:12.2,alpha:0.997},0).wait(1).to({y:12.4,alpha:0.986},0).wait(1).to({y:12.9,alpha:0.965},0).wait(1).to({y:13.7,alpha:0.932},0).wait(1).to({y:14.9,alpha:0.884},0).wait(1).to({y:16.5,alpha:0.816},0).wait(1).to({y:18.8,alpha:0.72},0).wait(1).to({y:22.1,alpha:0.583},0).wait(1).to({y:27.1,alpha:0.375},0).wait(1).to({regX:0,regY:0,x:0,y:37,alpha:0},0).to({_off:true},1).wait(5));

	// txt102
	this.instance_3 = new lib.txt102();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-33.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(1).to({regX:-11.6,regY:0.8,x:-11.6,y:-24.3,alpha:0.418},0).wait(1).to({y:-20.4,alpha:0.603},0).wait(1).to({y:-17.9,alpha:0.725},0).wait(1).to({y:-16,alpha:0.813},0).wait(1).to({y:-14.7,alpha:0.878},0).wait(1).to({y:-13.7,alpha:0.925},0).wait(1).to({y:-13,alpha:0.96},0).wait(1).to({y:-12.5,alpha:0.983},0).wait(1).to({y:-12.2,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:-13,alpha:1},0).wait(42).to({regX:-11.6,regY:0.8,x:-11.6,y:-12.1,alpha:0.997},0).wait(1).to({y:-11.8,alpha:0.986},0).wait(1).to({y:-11.3,alpha:0.965},0).wait(1).to({y:-10.5,alpha:0.932},0).wait(1).to({y:-9.4,alpha:0.884},0).wait(1).to({y:-7.7,alpha:0.816},0).wait(1).to({y:-5.4,alpha:0.72},0).wait(1).to({y:-2.1,alpha:0.583},0).wait(1).to({y:2.8,alpha:0.375},0).wait(1).to({regX:0,regY:0,x:0,y:11,alpha:0},0).to({_off:true},1).wait(3));

	// txt101
	this.instance_4 = new lib.txt101();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-60.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:-19.9,regY:-0.7,x:-19.9,y:-52.8,alpha:0.418},0).wait(1).to({y:-48.9,alpha:0.603},0).wait(1).to({y:-46.4,alpha:0.725},0).wait(1).to({y:-44.5,alpha:0.813},0).wait(1).to({y:-43.2,alpha:0.878},0).wait(1).to({y:-42.2,alpha:0.925},0).wait(1).to({y:-41.5,alpha:0.96},0).wait(1).to({y:-41,alpha:0.983},0).wait(1).to({y:-40.7,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:-40,alpha:1},0).wait(46).to({regX:-19.9,regY:-0.7,x:-19.9,y:-40.6,alpha:0.997},0).wait(1).to({y:-40.3,alpha:0.986},0).wait(1).to({y:-39.8,alpha:0.965},0).wait(1).to({y:-39,alpha:0.932},0).wait(1).to({y:-37.9,alpha:0.884},0).wait(1).to({y:-36.2,alpha:0.816},0).wait(1).to({y:-33.9,alpha:0.72},0).wait(1).to({y:-30.6,alpha:0.583},0).wait(1).to({y:-25.6,alpha:0.375},0).wait(1).to({regX:0,regY:0,x:0,y:-16,alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434,-44,304.4,6.8);


(lib.linesanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// roundmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhdDfQgrgTgighQghgigSgrQgTgtAAgxQAAgwATgtQASgrAhgiQAighArgTQAtgTAwAAQAxAAAtATQArATAiAhQAhAiATArQASAtAAAwQAAAxgSAtQgTArghAiQgiAhgrATQgtATgxAAQgwAAgtgTgAgphiQgTAIgPAPQgPAPgIATQgIAUAAAVQAAAWAIAUQAIATAPAPQAPAPATAIQAUAIAVAAQAWAAAUgIQATgIAPgPQAPgPAIgTQAIgUAAgWQAAgVgIgUQgIgTgPgPQgPgPgTgIQgUgIgWAAQgVAAgUAIg");
	var mask_graphics_1 = new cjs.Graphics().p("AhhDoQgtgTgjgjQgjgjgTgtQgTgvAAgzQAAgyATgvQATgtAjgjQAjgjAtgTQAvgUAyAAQAzAAAvAUQAtATAjAjQAjAjATAtQATAvAAAyQAAAzgTAvQgTAtgjAjQgjAjgtATQgvAUgzgBQgyABgvgUgAgqhmQgVAJgPAPQgPAPgJAVQgJAUAAAWQAAAXAJAVQAJAUAPAPQAPAPAVAJQAUAJAWAAQAXAAAUgJQAVgJAPgPQAPgPAJgUQAJgVAAgXQAAgWgJgUQgJgVgPgPQgPgPgVgJQgUgJgXAAQgWAAgUAJg");
	var mask_graphics_2 = new cjs.Graphics().p("AhuEGQgzgWgngnQgngngWgzQgWg1AAg6QAAg5AWg1QAWgzAngnQAngnAzgWQA1gWA5AAQA6AAA1AWQAzAWAnAnQAnAnAWAzQAWA1AAA5QAAA6gWA1QgWAzgnAnQgnAngzAWQg1AWg6AAQg5AAg1gWgAgwhzQgXAJgRASQgSARgJAXQgKAXAAAZQAAAaAKAXQAJAXASARQARASAXAJQAXAKAZAAQAaAAAXgKQAXgJARgSQASgRAJgXQAKgXAAgaQAAgZgKgXQgJgXgSgRQgRgSgXgJQgXgKgaAAQgZAAgXAKg");
	var mask_graphics_3 = new cjs.Graphics().p("AiFE9Qg9gagwgwQgwgwgag9QgbhAAAhGQAAhFAbhAQAag9AwgwQAwgwA9gaQBAgbBFAAQBGAABAAbQA9AaAwAwQAwAwAaA9QAbBAAABFQAABGgbBAQgaA9gwAwQgwAwg9AaQhAAbhGAAQhFAAhAgbgAg6iMQgcAMgVAVQgVAVgMAcQgMAcAAAeQAAAfAMAcQAMAcAVAVQAVAVAcAMQAcAMAeAAQAfAAAcgMQAcgMAVgVQAVgVAMgcQAMgcAAgfQAAgegMgcQgMgcgVgVQgVgVgcgMQgcgMgfAAQgeAAgcAMg");
	var mask_graphics_4 = new cjs.Graphics().p("AioGQQhOghg8g8Qg8g8ghhOQgihRAAhYQAAhXAihRQAhhOA8g8QA8g8BOghQBRgiBXAAQBYAABRAiQBOAhA8A8QA8A8AhBOQAiBRAABXQAABYgiBRQghBOg8A8Qg8A8hOAhQhRAihYAAQhXAAhRgigAhKixQgjAPgaAbQgbAagPAjQgPAkAAAmQAAAnAPAkQAPAjAbAaQAaAbAjAPQAkAPAmAAQAnAAAkgPQAjgPAagbQAbgaAPgjQAPgkAAgnQAAgmgPgkQgPgjgbgaQgagbgjgPQgkgPgnAAQgmAAgkAPg");
	var mask_graphics_5 = new cjs.Graphics().p("AjYICQhkgqhNhOQhOhNgqhkQgshnAAhyQAAhwAshoQAqhkBOhNQBNhOBkgqQBogsBwAAQBxAABoAsQBkAqBOBOQBNBNAqBkQAsBnAABxQAABygsBnQgqBkhNBNQhOBOhkAqQhoAshxAAQhwAAhogsgAhfjjQgtASgiAjQgjAigSAtQgUAuAAAxQAAAyAUAvQASAsAjAiQAiAjAtASQAuAUAxAAQAyAAAugUQAtgSAigjQAjgiASgsQAUgvAAgyQAAgxgUguQgSgtgjgiQgigjgtgSQgugUgyAAQgxAAguAUg");
	var mask_graphics_6 = new cjs.Graphics().p("AkTKOQiAg2hihiQhihig2iAQg4iEAAiQQAAiPA4iEQA2iABihiQBihiCAg2QCEg4CPAAQCQAACEA4QCAA2BiBiQBiBiA2CAQA4CEAACPQAACQg4CEQg2CAhiBiQhiBiiAA2QiEA4iQAAQiPAAiEg4gAh6kiQg4AYgsAsQgsAsgYA4QgYA7AAA/QAABAAYA7QAYA4AsAsQAsAsA4AYQA7AZA/AAQBAAAA7gZQA4gYAsgsQAsgsAYg4QAYg7AAhAQAAg/gYg7QgYg4gsgsQgsgsg4gYQg7gYhAAAQg/AAg7AYg");
	var mask_graphics_7 = new cjs.Graphics().p("AlVMpQidhDh5h5Qh6h6hDidQhFijAAizQAAixBFikQBDidB6h6QB5h5CdhDQCkhFCxAAQCzAACjBFQCdBDB6B5QB5B6BDCdQBFCjAACyQAACzhFCjQhDCdh5B6Qh6B5idBDQijBFizAAQixAAikhFgAiXlmQhGAdg2A2Qg2A2gdBGQgfBJAABOQAABPAfBJQAdBGA2A2QA2A2BGAdQBJAfBOAAQBPAABJgfQBGgdA2g2QA2g2AdhGQAfhJAAhPQAAhOgfhJQgdhGg2g2Qg2g2hGgdQhJgfhPAAQhOAAhJAfg");
	var mask_graphics_8 = new cjs.Graphics().p("AmUO+Qi6hPiQiQQiQiPhPi7QhSjBAAjUQAAjSBSjCQBPi6CQiQQCQiQC6hPQDBhSDTAAQDUAADBBSQC6BPCQCQQCQCQBPC6QBSDBAADTQAADUhSDBQhPC7iQCPQiQCQi6BPQjBBSjUAAQjTAAjBhSgAizmpQhTAjhABAQhABAgjBTQgkBWAABdQAABeAkBWQAjBTBABAQBABABTAjQBWAkBdAAQBeAABWgkQBTgjBAhAQBAhAAjhTQAkhWAAheQAAhdgkhWQgjhThAhAQhAhAhTgjQhWgkheAAQhdAAhWAkg");
	var mask_graphics_9 = new cjs.Graphics().p("AnKRAQjUhaikijQijikhajTQhcjcAAjwQAAjvBcjcQBajTCjikQCkijDUhaQDbhdDvAAQDwAADcBdQDTBaCkCjQCjCkBaDTQBcDcAADvQAADwhcDcQhaDTijCkQikCjjTBaQjcBdjwAAQjvAAjbhdgAjLniQheAohJBIQhIBJgoBeQgpBhAABqQAABrApBhQAoBeBIBJQBJBJBeAnQBhApBqAAQBrAABhgpQBegnBJhJQBIhJAoheQAphhAAhrQAAhqgphhQgohehIhJQhJhIhegoQhhgphrAAQhqAAhhApg");
	var mask_graphics_10 = new cjs.Graphics().p("An1SlQjohiiziyQiyizhijoQhmjvAAkHQAAkFBmjwQBijoCyizQCziyDohiQDvhmEGAAQEHAADwBmQDnBiCzCyQCyCzBiDoQBmDvAAEGQAAEHhmDvQhiDoiyCzQizCyjnBiQjwBmkHAAQkGAAjvhmgAjeoPQhnArhPBQQhQBPgrBnQgtBqAAB0QAAB1AtBqQArBnBQBQQBPBPBnArQBqAtB0AAQB1AABqgtQBngrBQhPQBPhQArhnQAthqAAh1QAAh0gthqQgrhnhPhPQhQhQhngrQhqgth1AAQh0AAhqAtg");
	var mask_graphics_11 = new cjs.Graphics().p("AoUTvQj2hoi+i+Qi+i+hoj2Qhrj+AAkXQAAkWBrj+QBoj2C+i+QC+i+D2hoQD+hrEWAAQEXAAD/BrQD1BoC+C+QC+C+BoD2QBrD+AAEWQAAEXhrD+QhoD2i+C+Qi+C+j1BoQj/BrkXAAQkWAAj+hrgAjsowQhtAuhUBVQhVBUguBtQgwBxAAB7QAAB8AwBxQAuBtBVBVQBUBUBtAuQBxAwB7AAQB8AABxgwQBtguBVhUQBUhVAuhtQAwhxAAh8QAAh7gwhxQguhthUhUQhVhVhtguQhxgwh8AAQh7AAhxAwg");
	var mask_graphics_12 = new cjs.Graphics().p("AopUfQj/hsjFjFQjFjFhsj/QhwkJAAkhQAAkgBwkJQBsj/DFjFQDFjFD/hsQEJhwEgAAQEhAAEJBwQD/BsDFDFQDFDFBsD/QBwEJAAEgQAAEhhwEJQhsD/jFDFQjFDFj/BsQkJBwkhAAQkgAAkJhwgAj1pFQhxAwhYBXQhXBYgwBxQgyB2AAB/QAACBAyB1QAwBxBXBYQBYBYBxAvQB1AyCAAAQCBAAB1gyQBxgvBYhYQBXhYAwhxQAyh1AAiBQAAh/gyh2QgwhxhXhYQhYhXhxgwQh1gyiBAAQiAAAh1Ayg");
	var mask_graphics_13 = new cjs.Graphics().p("Ao0U5QkEhujJjJQjJjJhukEQhykOAAknQAAkmBykOQBukEDJjJQDJjJEEhuQEOhyEmAAQEnAAEOByQEEBuDJDJQDJDJBuEEQByEOAAEmQAAEnhyEOQhuEEjJDJQjJDJkEBuQkOByknAAQkmAAkOhygAj6pRQh0AxhZBZQhZBZgxB0QgzB4AACCQAACDAzB4QAxB0BZBZQBZBZB0AxQB4AzCCAAQCDAAB4gzQB0gxBZhZQBZhZAxh0QAzh4AAiDQAAiCgzh4Qgxh0hZhZQhZhZh0gxQh4gziDAAQiCAAh4Azg");
	var mask_graphics_14 = new cjs.Graphics().p("Ao3VBQkGhvjKjKQjKjKhvkGQhzkPAAkpQAAkoBzkPQBvkGDKjKQDKjKEGhvQEPhzEoAAQEpAAEPBzQEGBvDKDKQDKDKBvEGQBzEPAAEoQAAEphzEPQhvEGjKDKQjKDKkGBvQkPBzkpAAQkoAAkPhzgAj8pUQh0AxhaBZQhZBagyB1QgzB4AACDQAACEAzB5QAyB0BZBaQBaBaB0AxQB5AzCDAAQCEAAB5gzQB0gxBahaQBZhaAyh0QAzh5AAiEQAAiDgzh4Qgyh1hZhaQhahZh0gxQh5gziEAAQiDAAh5Azg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.5,y:2}).wait(1).to({graphics:mask_graphics_1,x:-0.5,y:2}).wait(1).to({graphics:mask_graphics_2,x:-0.5,y:2.1}).wait(1).to({graphics:mask_graphics_3,x:-0.5,y:2.2}).wait(1).to({graphics:mask_graphics_4,x:-0.5,y:2.3}).wait(1).to({graphics:mask_graphics_5,x:-0.5,y:2.5}).wait(1).to({graphics:mask_graphics_6,x:-0.5,y:2.7}).wait(1).to({graphics:mask_graphics_7,x:-0.5,y:2.9}).wait(1).to({graphics:mask_graphics_8,x:-0.5,y:3.2}).wait(1).to({graphics:mask_graphics_9,x:-0.5,y:3.4}).wait(1).to({graphics:mask_graphics_10,x:-0.5,y:3.6}).wait(1).to({graphics:mask_graphics_11,x:-0.5,y:3.7}).wait(1).to({graphics:mask_graphics_12,x:-0.5,y:3.8}).wait(1).to({graphics:mask_graphics_13,x:-0.5,y:3.8}).wait(1).to({graphics:mask_graphics_14,x:-0.5,y:2}).wait(31));

	// lines
	this.instance = new lib.lines();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-22.1,48.3,48.3);


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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouse_1();
	this.instance.parent = this;
	this.instance.setTransform(160,163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:159.7,y:163.1},0).wait(1).to({x:158.8,y:161.9},0).wait(1).to({x:157.1,y:159.8},0).wait(1).to({x:154.5,y:156.8},0).wait(1).to({x:150.7,y:152.8},0).wait(1).to({x:145.5,y:147.9},0).wait(1).to({x:138.6,y:142.3},0).wait(1).to({x:129.6,y:135.9},0).wait(1).to({x:117,y:128.3},0).wait(1).to({x:103.3,y:120.8},0).wait(1).to({x:90.2,y:114},0).wait(1).to({x:75.8,y:106.2},0).wait(1).to({x:59.3,y:96.3},0).wait(1).to({x:43.2,y:84.2},0).wait(1).to({x:28.5,y:69.7},0).wait(1).to({x:16.7,y:54.4},0).wait(1).to({x:8,y:40},0).wait(1).to({x:2,y:27.7},0).wait(1).to({x:-1.9,y:17.7},0).wait(1).to({x:-4.5,y:9.7},0).wait(1).to({x:-6.1,y:3.8},0).wait(1).to({x:-7,y:-0.2},0).wait(1).to({x:-7.5,y:-2.4},0).wait(1).to({x:-7.6,y:-3.1},0).wait(6).to({y:1.9},0).to({y:-3.1,alpha:0},19).wait(1));

	// Lines
	this.instance_1 = new lib.linesanimate("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.3,-31.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.5,126.5,49,74);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_391 = new cjs.Graphics().p("A8MfQMAAAg+fMAlgAAAMAAAA+fg");
	var mask_graphics_392 = new cjs.Graphics().p("A7/fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_393 = new cjs.Graphics().p("A7ZfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_394 = new cjs.Graphics().p("A6SfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_395 = new cjs.Graphics().p("A4ofQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_396 = new cjs.Graphics().p("A2TfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_397 = new cjs.Graphics().p("AzSfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_398 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_399 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_400 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_401 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_402 = new cjs.Graphics().p("Ax7fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_403 = new cjs.Graphics().p("Au+fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_404 = new cjs.Graphics().p("AstfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_405 = new cjs.Graphics().p("ArFfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_406 = new cjs.Graphics().p("AqBfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_407 = new cjs.Graphics().p("ApbfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_408 = new cjs.Graphics().p("ApQfQMAAAg+fMAlgAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(391).to({graphics:mask_graphics_391,x:-180.4,y:1}).wait(1).to({graphics:mask_graphics_392,x:-179.2,y:1}).wait(1).to({graphics:mask_graphics_393,x:-175.4,y:1}).wait(1).to({graphics:mask_graphics_394,x:-168.3,y:1}).wait(1).to({graphics:mask_graphics_395,x:-157.7,y:1}).wait(1).to({graphics:mask_graphics_396,x:-142.8,y:1}).wait(1).to({graphics:mask_graphics_397,x:-123.5,y:1}).wait(1).to({graphics:mask_graphics_398,x:-79.5,y:1}).wait(1).to({graphics:mask_graphics_399,x:-25.6,y:1}).wait(1).to({graphics:mask_graphics_400,x:30.5,y:1}).wait(1).to({graphics:mask_graphics_401,x:83.9,y:1}).wait(1).to({graphics:mask_graphics_402,x:125.2,y:1}).wait(1).to({graphics:mask_graphics_403,x:144.1,y:1}).wait(1).to({graphics:mask_graphics_404,x:158.6,y:1}).wait(1).to({graphics:mask_graphics_405,x:169,y:1}).wait(1).to({graphics:mask_graphics_406,x:175.8,y:1}).wait(1).to({graphics:mask_graphics_407,x:179.6,y:1}).wait(1).to({graphics:mask_graphics_408,x:180.8,y:1}).wait(22));

	// RED
	this.instance = new lib.RED();
	this.instance.parent = this;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(391).to({_off:false},0).wait(39));

	// Mouse
	this.instance_1 = new lib.Symbol1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.5,37);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(420));

	// Legal
	this.instance_2 = new lib.legalmovie("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2,-45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(315).to({_off:false},0).to({_off:true},85).wait(30));

	// BUTT
	this.instance_3 = new lib.button();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-29);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(239).to({_off:false},0).wait(1).to({regX:0.3,regY:0.4,x:0.3,y:-19.9,alpha:0.289},0).wait(1).to({y:-14.6,alpha:0.465},0).wait(1).to({y:-10.6,alpha:0.597},0).wait(1).to({y:-7.5,alpha:0.701},0).wait(1).to({y:-5,alpha:0.786},0).wait(1).to({y:-2.9,alpha:0.853},0).wait(1).to({y:-1.3,alpha:0.907},0).wait(1).to({y:-0.1,alpha:0.948},0).wait(1).to({y:0.7,alpha:0.977},0).wait(1).to({y:1.2,alpha:0.994},0).wait(1).to({regX:0,regY:0,x:0,y:1,alpha:1},0).wait(55).to({regX:0.3,regY:0.4,x:0.3,y:1.7,alpha:0.991},0).wait(1).to({y:2.4,alpha:0.965},0).wait(1).to({y:3.7,alpha:0.925},0).wait(1).to({y:5.3,alpha:0.87},0).wait(1).to({y:7.4,alpha:0.801},0).wait(1).to({y:10,alpha:0.715},0).wait(1).to({y:13.1,alpha:0.609},0).wait(1).to({y:17.1,alpha:0.477},0).wait(1).to({y:22.4,alpha:0.301},0).wait(1).to({regX:0,regY:0,x:0,y:31,alpha:0},0).to({_off:true},1).wait(115));

	// TXT4
	this.instance_4 = new lib.TXT4("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.4,-151.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(230).to({_off:false},0).to({_off:true},91).wait(109));

	// TXT3
	this.instance_5 = new lib.TXT3("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-38.3,-126);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(157).to({_off:false},0).to({_off:true},73).wait(200));

	// TXT2
	this.instance_6 = new lib.TXT2("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.7,-112.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(84).to({_off:false},0).to({_off:true},73).wait(273));

	// TXT1
	this.instance_7 = new lib.TXT1("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1,-122);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({_off:true},73).wait(346));

	// Alfalogo
	this.instance_8 = new lib.alfalogoanim("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(141.5,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},400).wait(30));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(430));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1156,-222,1295,439);


// stage content:
(lib.alfa_7_240x400_review_v3 = function(mode,startPosition,loop) {
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
		{src:"legal.png", id:"legal"},
		{src:"mouse.png", id:"mouse"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;