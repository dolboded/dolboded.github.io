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



(lib.bgman = function() {
	this.initialize(img.bgman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,362);


(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,115);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,147);// helper functions:

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


(lib.txt0205 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("Ag0BTIBWilIAQAAIhVClgAAdBEQgKgLABgVQgBgVAKgLQAJgKASAAQARAAAJAJQAKALgBAUQABAWgKAMQgJALgRAAQgSAAgJgLgAArAOQgEAIAAAPQAAAOAEAHQAEAHAJAAQAHAAADgFQAFgFABgHIAAgNIgBgNQgBgGgEgEQgDgFgHAAQgJAAgEAHgAhRgDQgJgLAAgVQAAgVAJgLQAKgLARgBQASABAJAKQAIALABAUQgBAWgIAMQgKAKgRAAQgSAAgJgKgAhDg5QgEAIAAAPQAAAOAEAHQAEAHAJAAQAHAAAEgFQAEgFAAgHIACgOIgCgMQgBgGgDgFQgEgEgHAAQgJAAgEAHg");
	this.shape.setTransform(3.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0205, new cjs.Rectangle(-9.6,-14.2,21.9,28.5), null);


(lib.txt0204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AAUDHQgthCAAiEQABiDArhDQAuhEBXAAQBbAAAtBDQAtBEAACFQAACBgtBDQguBDhXAAQhaAAgthDgABkiuQgUATgIAeQgJAfgBAjQgCAiAAAfQAABjAWAtQAXAuAxAAQAjgBATgUQAUgVAHgfQAKgeABghQACghAAgYQAAgZgCgiQgCghgIgfQgJgggTgVQgUgUgjgBQgiABgTATgAjMEAIAAllIiAAAIAAg+QAcABAhgIQAfgGAZgWQAagVAIgsIBEAAIAAIHg");
	this.shape.setTransform(-17.7,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0204, new cjs.Rectangle(-58.8,-43.2,117.6,86.5), null);


(lib.txt0203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhuAxQgLgHgGgNQgGgMAAgRQAAgLADgJQAEgKAGgIQAHgIAJgEQAJgEAMAAQALAAAKADQAKAFAGAIQAGAIACAMIgSAAQgDgKgGgGQgHgEgLAAQgIAAgGACQgGAEgEAGQgDAGgCAGQgCAIAAAGQAAAHACAIQABAHAEAFQADAGAGADQAHAEAIAAQAJAAAGgEQAFgDAEgGQACgGABgIIATAAQgBANgGAKQgGAJgJAGQgLAFgNAAQgQAAgLgHgAkEAxQgLgHgGgNQgGgMAAgRQAAgLADgJQADgKAHgIQAGgIAKgEQAKgEALAAQAMAAAJADQAKAFAGAIQAGAIACAMIgSAAQgDgKgGgGQgHgEgLAAQgIAAgGACQgGAEgEAGQgEAGgCAGQgBAIAAAGQAAAHABAIQACAHAEAFQADAGAHADQAFAEAJAAQAJAAAFgEQAGgDADgGQADgGABgIIAUAAQgCANgGAKQgFAJgLAGQgKAFgNAAQgPAAgMgHgAloA0QgKgFgFgIQgHgIABgNIASAAQAAAIADAGQAEAEAGACQAGADAIAAQALAAAFgFQAGgFgBgIQABgKgGgEQgFgEgKAAIgMAAIAAgOIAMAAQAIAAAEgEQAGgFgBgHQABgHgGgEQgEgEgJAAQgKAAgHAEQgFAFgCAKIgSAAQABgMAFgIQAFgHAKgEQAIgDAMAAQAKAAAJADQAJADAEAGQAGAHAAAKQAAAGgCAEQgDAGgEACQgEAEgEABIAAABQAJABAGAHQAFAGAAALQAAAEgCAHQgCAFgFAFQgFAGgIADQgIADgKAAQgNAAgLgEgAHWA1IAAhqIATAAIAABqgAF4A1IAAhqIATAAIAAAqIAZAAQASgBAJAJQAKAIAAAPQAAARgKAIQgJAIgSAAgAGLAmIAZAAQAJAAAFgEQAEgEAAgJQAAgJgEgEQgFgFgJAAIgZAAgAFPA1IAAgvIgxAAIAAAvIgTAAIAAhqIATAAIAAArIAxAAIAAgrIATAAIAABqgADuA1IgKgcIgrAAIgKAcIgTAAIAohqIAUAAIAqBqgADeALIgQgsIgQAsIAgAAgABEA1IAAhqIAuAAQALABAJADQAIAEAFAHQAFAHgBALQABAQgKAHQgIAJgRAAIgeAAIAAApgABXgBIAaAAQAJgBAGgEQAFgEAAgJQAAgHgCgEQgEgEgFgBQgEgCgGABIgZAAgAADA1IAAhZIghAAIAAgRIBWAAIAAARIgiAAIAABZgAmWA1IgKgcIgqAAIgLAcIgTAAIAqhqIAUAAIApBqgAmkALIgQgsIgRAsIAhAAg");
	this.shape.setTransform(-24.1,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0203, new cjs.Rectangle(-75.6,-13.7,151.1,27.4), null);


(lib.txt0202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AA0AxQgLgHgHgNQgFgMgBgRQABgLADgKQADgKAHgHQAGgIAKgEQAJgFAMAAQALAAAJAEQAKAEAGAIQAHAIACANIgTAAQgCgKgHgGQgHgFgKAAQgIAAgHADQgFAEgFAGQgDAFgCAHQgCAHAAAHQAAAHACAHQABAIAEAFQAEAGAGADQAGAEAIAAQAKAAAFgEQAGgDADgGQADgGABgIIATAAQgBANgHAJQgFAKgKAFQgLAGgNAAQgPAAgLgHgAEsA1IgbgpIgbApIgWAAIAmg2Igjg0IAWAAIAZAmIAZgmIAVAAIgjA0IAlA2gACNA1IAAhqIBOAAIAAAQIg7AAIAAAdIA2AAIAAAOIg2AAIAAAfIA8AAIAAAQgAhIA1IAAhqIAyAAQALABAIADQAGADAEAGQAEAGAAAIQAAAIgFAGQgEAGgFADQAIACAFAGQAGAGAAALQAAAJgEAHQgFAHgHAEQgHAEgKAAgAg1AmIAcAAQAGAAAGgBQAFgCADgDQADgEAAgHQAAgHgDgEQgDgDgGgBQgFgCgHAAIgbAAgAg1gIIAZAAQALAAAFgDQAGgEgBgIQAAgGgDgDQgDgEgEgBIgKAAIgaAAgAiPA1IgKgcIgrAAIgKAcIgTAAIAphqIAUAAIAqBqgAieALIgQgsIgRAsIAhAAgAj+A1IAAgwIgxAAIAAAwIgTAAIAAhqIATAAIAAArIAxAAIAAgrIATAAIAABqg");
	this.shape.setTransform(-39.7,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0202, new cjs.Rectangle(-75.6,-13.7,151.1,27.4), null);


(lib.txt0201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ADcBIQgNgHgIgMQgJgMgDgQIAaAAQAEAOAJAIQAIAJARAAQAOAAAJgHQAJgHAGgKQAEgLABgNIhAAAIAAgUIBAAAQgCgMgFgJQgFgKgJgGQgJgGgNAAQgOAAgKAHQgJAHgDAMIgbAAQADgQAJgLQAJgLANgFQANgFAPAAQARAAAOAGQAMAGAKALQAJALAFAOQAEAOAAAPQAAAYgJARQgIASgPAJQgQAKgVAAQgSAAgOgGgAkvBIQgOgHgJgMQgIgMgDgQIAaAAQAEAOAIAIQAKAJAQAAQAOAAAKgHQAJgHAEgKQAGgLAAgNIhAAAIAAgUIBAAAQgCgMgFgJQgFgKgJgGQgJgGgOAAQgNAAgKAHQgKAHgDAMIgaAAQADgQAKgLQAIgLANgFQAOgFAOAAQARAAAOAGQANAGAJALQAJALAFAOQAEAOAAAPQAAAYgJARQgIASgQAJQgPAKgWAAQgRAAgNgGgAG6BLIgxhIIgWAWIAAAyIgaAAIAAiVIAaAAIAABEIBDhEIAhAAIg8A8IBABZgAAvBLIAAiVIBtAAIAAAXIhTAAIAAAiIAtAAQAYAAANAMQANALAAAWQAAAXgNAMQgNAMgYAAgABJA1IAsAAQANAAAGgGQAHgGAAgMQgBgMgGgHQgIgGgMAAIgrAAgAiyBLIAAiVIAaAAIAAB+IA5AAIAAh+IAbAAIAAB+IA6AAIAAh+IAZAAIAACVgAl5BLIgyhIIgVAWIAAAyIgaAAIAAiVIAaAAIAABEIBChEIAiAAIg9A8IBABZg");
	this.shape.setTransform(-24.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0201, new cjs.Rectangle(-75.6,-13.7,151.1,27.4), null);


(lib.txt0104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AC5BgQgTgHgLgQQgLgPAAgYIAjAAQAAAPAHAJQAHAKALAEQAMAFAOgBQATAAAKgJQAKgJAAgQQAAgQgKgIQgKgIgRAAIgYAAIAAgbIAYAAQAOAAAJgIQAJgIAAgPQAAgNgJgHQgJgHgRAAQgTgBgLAJQgMAIgCASIghAAQABgWAKgOQAKgNARgHQAQgGAUAAQAVAAAQAGQAQAFAKAMQAJAMAAATQAAAKgEAJQgFAJgHAGQgIAHgHACIAAAAQAQAEALAMQAKANAAATQAAAJgEALQgEALgJAJQgJAKgOAGQgPAGgVAAQgYAAgTgIgALmBkIAAjHICPAAIAAAeIhtAAIAAA1IBlAAIAAAbIhlAAIAAA7IBvAAIAAAegAKZBkIAAhaIhbAAIAABaIgjAAIAAjHIAjAAIAABQIBbAAIAAhQIAjAAIAADHgAHPBkIAAiYIhVCYIgpAAIAAjHIAjAAIAACYIBWiYIAoAAIAADHgABQBkIAAhaIhaAAIAABaIgjAAIAAjHIAjAAIAABQIBaAAIAAhQIAjAAIAADHgAjdBkIAAjHICPAAIAAAeIhtAAIAAA1IBlAAIAAAbIhlAAIAAA7IBvAAIAAAegAmiBkIAAjHICTAAIAAAfIhwAAIAAAuIA8AAQAhAAARAQQASAOAAAeQAAAegSAQQgRAQghAAgAl/BHIA6AAQASAAAIgIQAJgIAAgQQAAgQgKgJQgJgJgQAAIg6AAgAopBkIgTg1IhPAAIgTA1IgkAAIBNjHIAlAAIBNDHgApFAUIgehSIgfBSIA9AAgAr4BkIAAhaIhbAAIAABaIgjAAIAAjHIAjAAIAABQIBbAAIAAhQIAjAAIAADHg");
	this.shape.setTransform(0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0104, new cjs.Rectangle(-92.3,-17.6,184.6,35.2), null);


(lib.txt0103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AmEB9IAAgyIiCAAIAAAyIgiAAIAAhQIAUAAQAHgOAGgWQAGgVADgbQAEgaAAgcIAAgfICCAAIAACpIAWAAIAABQgAnYhRQAAAZgDAYQgDAYgGAUQgEAUgHANIBTAAIAAiKIg8AAgAIFBLIAAiYIhVCYIgpAAIAAjHIAjAAIAACYIBWiYIAoAAIAADHgADrBLIAAjHICHAAIAAAfIhkAAIAACogAAwBLIAAjHIAjAAIAABNIA1AAQAhAAASAQQARAQAAAcQAAAegSAQQgRAQghAAgABTAuIA0AAQAQAAAKgIQAIgIAAgQQAAgPgJgIQgKgJgQAAIgzAAgAgcBLIAAhZIhbAAIAABZIgjAAIAAjHIAjAAIAABQIBbAAIAAhQIAiAAIAADHgAlKBLIAAjHICPAAIAAAeIhsAAIAAA1IBkAAIAAAcIhkAAIAAA6IBuAAIAAAeg");
	this.shape.setTransform(-0.7,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0103, new cjs.Rectangle(-58.4,-17.6,116.9,35.2), null);


(lib.txt0102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AjhBkIgJgCIAAgbQADABAEAAIAHABQAHABAGgFQAFgEAEgNQAEgNABgZIAEhzICCAAIAADHIgjAAIAAioIg+AAIgDBeQgBAbgIASQgHARgMAIQgMAIgOAAIgMgCgAJtBiIAAjHICPAAIAAAeIhtAAIAAA1IBmAAIAAAbIhmAAIAAA7IBvAAIAAAegAIgBiIAAjHIAkAAIAADHgAFzBiIAAjHIAjAAIAABNIAvAAQAhAAARAQQARAPABAdQgBAegRAQQgRAQghAAgAGWBGIAuAAQAQgBAJgIQAJgIAAgQQAAgQgKgIQgIgJgRAAIgtAAgAElBiIAAhaIhbAAIAABaIgjAAIAAjHIAjAAIAABQIBbAAIAAhQIAjAAIAADHgAgSBiIAAjHIAiAAIAABNIA1AAQAiAAARAQQASAPAAAdQgBAegRAQQgSAQghAAgAAQBGIA0AAQARgBAJgIQAJgIAAgQQAAgQgKgIQgJgJgRAAIgzAAgAkQBiIgTg1IhPAAIgTA1IgkAAIBNjHIAlAAIBNDHgAksASIgdhSIggBSIA9AAgApDBiIAAjHICQAAIAAAeIhtAAIAAA1IBlAAIAAAbIhlAAIAAA7IBuAAIAAAegAr9BiIAAjHIBWAAQAVABAQAGQAQAHAIANQAJANAAAWQAAAcgRAQQgRAQgeABIg5AAIAABMgAragGIAxAAQARAAALgHQAKgIAAgSQAAgNgGgGQgGgIgIgCQgKgEgLABIguAAg");
	this.shape.setTransform(0.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0102, new cjs.Rectangle(-80.3,-17.6,160.6,35.2), null);


(lib.txt0101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AmCB9IAAgyIiCAAIAAAyIgiAAIAAhQIATAAQAIgOAGgWQAGgVADgbQAEgaAAgcIAAgeICBAAIAACoIAXAAIAABQgAnWhRQAAAZgDAYQgDAYgGAUQgFAUgGANIBTAAIAAiKIg8AAgAihBNIgKgCIAAgbQAEACAEgBIAGABQAHABAGgFQAGgEAEgNQADgNABgYIAEhzICBAAIAADGIgiAAIAAioIg9AAIgEBeQgBAcgIARQgHARgMAIQgLAIgPgBIgLgBgAHEBLIAAioIg/AAIAAgeICiAAIAAAeIhAAAIAACogADnBLIAAjGICQAAIAAAdIhtAAIAAA1IBlAAIAAAcIhlAAIAAA6IBuAAIAAAegACvBLIgTg1IhPAAIgUA1IgkAAIBNjGIAlAAIBNDGgACTgEIgehTIgfBTIA9AAgAlIBLIAAjGICPAAIAAAdIhtAAIAAA1IBlAAIAAAcIhlAAIAAA6IBvAAIAAAeg");
	this.shape.setTransform(0.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0101, new cjs.Rectangle(-57.3,-17.6,114.7,35.2), null);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],10.3,-154.2,0,10.3,-154.2,182.8).s().p("EgjnAbNMAAAg2ZMBHPAAAMAAAA2Zg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sun, new cjs.Rectangle(-227.9,-174.1,455.9,348.2), null);


(lib.redline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("AjsAZIAAgxIHZAAIAAAxg");
	this.shape.setTransform(-37,0,2.562,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redline, new cjs.Rectangle(-97.7,-2.5,121.5,5.1), null);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-2.9,72.5,-2.9,142.5).s().p("A4/X/MAAAgv9MAx/AAAMAAAAv9g");
	this.shape.setTransform(0,-208.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.bgman();
	this.instance.parent = this;
	this.instance.setTransform(-144,-181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man, new cjs.Rectangle(-160,-361.9,320,543), null);


(lib.logo_mastercard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1819").s().p("AElAkQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIABAEQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgFACIgDgCgAEmAeIgBADIABADIACABIAEgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIgEgBIgCABgAgfAcQgHgIAAgLQgBgKAIgIQAHgJANAAQAPAAAGAQQACAHAAAIIgmAAIABACIACAFQAEAHAIAAQAFAAAGgDIAEgDIAFAJIgHAEQgHADgGAAQgNAAgHgJgAgYgBIgCAFIAaAAIAAgFQgDgGgIAAIgCAAQgIAAgDAGgAhMAdIgBgHIgBgcIgKAAIAAgLIAKAAIAAgPIANAAIAAAPIASAAIAAALIgSAAIAAAaIAAACQADADAFABQADAAADgCIADgCIAEAMQgKADgFAAQgMAAgFgIgADiAbQgHgIAAgLQAAgJAHgIQAHgJAMAAQAGAAAHAEIAEAEIAAgbIAMAAIAABIIgMAAIAAgGIgEAEQgHADgFAAQgMAAgIgJgADrgCQgEAEAAAHQAAAHAEAFQAGAFAGAAQAHAAAEgFQAFgFABgHQgBgHgFgEQgEgGgHAAQgGAAgGAGgAB4AbQgHgIAAgLQAAgJAHgIQAHgJAMAAQAHAAAFAEIAGAEIAAgHIALAAIAAA0IgLAAIAAgGIgGAEQgGADgFAAQgMAAgIgJgACCgCQgGAEAAAHQAAAHAGAFQAEAFAHAAQAHAAAEgFQAGgFAAgHQAAgHgGgEQgEgGgHAAQgHAAgEAGgABEAcQgIgIAAgLQAAgOAKgHQAHgGALAAQAGAAAIADIAFADIgFAKIgEgCQgEgDgHAAQgGAAgFAFQgEAEAAAHQAAAHAFAFQAEAFAHAAQAFAAAEgCIAFgDIAEAKIgEADQgHACgGAAQgNAAgIgIgAiIAhIgGgEIAFgHIAGACQAGACAFAAIAIgBQAFgCgBgDQAAgDgGgCIgGgBQgGAAgEgCQgKgEAAgKQgBgHAHgFQAGgEAKAAQAEAAAKADIAHADIgFAJQgLgFgGAAQgEAAgDACQgDACAAACQAAADAFABIAMACQAQACAAANQAAARgYAAQgHAAgJgDgAjJAbQgHgIAAgLQAAgJAHgIQAHgJAMAAQAGAAAGAEIAFAEIAAgHIALAAIAAA0IgLAAIAAgGIgFAEQgGADgGAAQgLAAgIgJgAi/gCQgFAEgBAHQABAHAFAFQAEAFAHAAQAGAAAFgFQAFgFAAgHQAAgHgFgEQgFgGgGAAQgHAAgEAGgAEqAjIgCgCIAAAAIAAACIgBAAIAAgFIACAAIABABIABABIgBABIgBAAIACACgAEoAgIABAAIABAAIgBgBIgBAAgAC2AjIAAg0IALAAIAAAHIAFgEQAHgEADAAQAFAAADACIgDAKQgDgCgEAAQgHAAgEAGIgCAEIABAhgAAYAjIAAg0IALAAIAAAHIAGgEQAGgEAEAAQADAAAEACIgEAKQgCgCgDAAQgJAAgDAGQgCACAAACIAAAhgAktAjIAAg0IALAAIAAAHIAGgEQAGgEADAAQAHAAAGAFIAFAFIAEgFQAGgFAIAAQALAAAFAIQAEAEABAEIAAAkIgLAAIAAggIgCgEQgDgFgHAAQgIAAgEAFIgBAEIAAAgIgLAAIAAggIgDgFQgDgFgGAAQgIAAgEAGIgBAEIAAAhg");
	this.shape.setTransform(1.5,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgLgLAAgOQAAgOALgKQAKgKAOAAQAPAAALAKQAKALAAANQAAAOgKALQgLAKgPAAQgOAAgKgKgAgSgTQgIAJAAAKQAAALAIAIQAIAIAKAAQALAAAIgIQAIgHAAgMQAAgLgIgIQgHgHgMgBQgLABgHAHgAAHAQIgJgMIgDAAIAAAMIgHAAIAAggIAOAAQAHAAADADQADADAAAFQAAAEgCABQgDADgFABIALAMgAgFgBIAHAAIAFgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgHAAg");
	this.shape_1.setTransform(31.2,24.2,0.15,0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhpB9Qgzg1AAhIQAAhfBBgxQAzgnBFAAQArAAAvAUQAXAKAPAKIgmBEQgGgJgOgJQgdgSgrAAQgvAAgdAkQgaAhAAAsQAAAwAcAhQAeAiAtAAQAfAAAigSIAbgTIAiBEQgOAJgVAJQgqASgmAAQhZAAg3g7g");
	this.shape_2.setTransform(9.9,21.8,0.15,0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah+B+Qgsg0AAhKQgBhIAtg1QAzg8BUAAQBwAAAkBoQASA0gFAzIj/AAIADAPQAEARAIAPQAbAvA7AAQAdAAAogTQATgKAOgKIAiA8QgUAMgbANQg2AYgjAAQhbAAgzg8gABgggQAAgVgLgVQgWgrg4AAIgIAAQg3ADgUAqQgKAUABAUIC1AAIAAAAg");
	this.shape_3.setTransform(0.1,21.9,0.15,0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDCwQgJgUgDgWIgBjAIhBAAIAAhKIBBAAIAAhmIBQAAIAABmIB6AAIAABKIh6AAIAACtIAHATQAOAUAlABQATABAWgMIARgMIAeBMQhFAagkAAQhOAAgeg6g");
	this.shape_4.setTransform(-5.2,21.2,0.15,0.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhsCiIgsgYIAggxIAnAPQAtAPAeAAQAdABAXgKQAegLABgUQAAgVgrgNIgrgJQghgBghgOQhCgbAAhDQAAgzAsgeQApgfBAAAQAeABA6AVQAdALAWAKIgkA5QhGgcglgCQgZgBgVALQgWANAAATQAAAYAiAIQAUAGA2AGQBtAPAABUQAABzifABQgwAAg2gYg");
	this.shape_5.setTransform(-10.5,21.8,0.15,0.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiFC8Qgvg3AAhGQAAhFAsg1QAxg9BPAAQAqAAApAbQAUANAMAOIAAi2IBKAAIAAHnIhJAAIAAgkQgNALgVAMQgpAXgmAAQhNAAgzg9gAhHgOQggAgAAAxQAAAwAgAiQAgAiAsAAQAtAAAggiQAggiAAgwQAAgxggggQgggjgtAAQgsAAggAjg");
	this.shape_6.setTransform(26.1,20.9,0.15,0.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiFB8Qgvg3AAhFQAAhGAsg1QAxg9BPAAQAqAAApAbQAUANAMAOIAAgsIBKAAIAAFdIhJAAIAAgkQgNALgVAMQgpAXgmAAQhMAAg0g9gAhHhOQggAhAAAwQAAAwAgAiQAfAiAtAAQAtAAAggiQAggiAAgwQAAgwggghQgggjgtAAQgtAAgfAjg");
	this.shape_7.setTransform(15.5,21.8,0.15,0.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiFB8Qgwg3ABhFQAAhGAsg1QAxg9BOAAQAqAAApAbQAVANAMAOIAAgsIBKAAIAAFdIhKAAIAAgkIghAXQgpAXgmAAQhNAAgzg9gAhHhOQggAhAAAwQAAAwAgAiQAgAiAsAAQAtAAAggiQAggiAAgwQAAgwggghQgggjgtAAQgsAAggAjg");
	this.shape_8.setTransform(-16.7,21.8,0.15,0.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhwCzIAAlcIBJAAIAAAqIAlgaQApgaAYABQAZAAAZALIgYBEIAAAAQgSgKgVAAQg2AAgXAjIgMAjIACDag");
	this.shape_9.setTransform(21.4,21.8,0.15,0.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhwCzIAAlcIBJAAIAAAqQAQgNAVgNQApgaAYABQAYAAAaALIgYBEIAAAAQgRgKgWAAQg2AAgXAjQgLASgBARIACDag");
	this.shape_10.setTransform(5.6,21.8,0.15,0.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkSCzIAAlcIBJAAIAAAqQAQgNAVgNQAqgaAYABQAuABApAgQAUAQALAQQAJgQATgRQAmggAzAAQBMAAAmA3QATAcAFAbIAAD2IhIAAIAAjZQAAgQgJgRQgUghgxAAQgyAAgYAhQgLARgCAQIAADZIhLAAIAAjaQgBgRgKgSQgVgigqAAQg3AAgXAjQgMASAAARIABDag");
	this.shape_11.setTransform(-24.6,21.8,0.15,0.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F79F1A").s().p("AArAYIAAgjIgOAeIgJAAIgNgeIAAAjIgIAAIAAgvIALAAIAPAgIAOggIAMAAIAAAvgAgiAYIAAgnIgQAAIAAgHIAoAAIAAAHIgQAAIAAAng");
	this.shape_12.setTransform(31.2,5,0.15,0.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF5F01").s().p("AlvJMQiJkVAAk3QAAk2CJkVQCFkLDqi5QDrC5CFELQCJEVAAE2QAAE3iJEVQiFELjrC5Qjqi5iFkLg");
	this.shape_13.setTransform(0,-5.2,0.15,0.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA001B").s().p("AoBTBQjshki3i3Qi2i3hkjtQhoj1AAkNQAAkMBoj1QBkjtC2i3QC3i3DshkQD1hoEMAAQEMAAD1BoQDtBkC2C3QC3C3BkDtQBoD1AAEMQAAENhoD1QhkDti3C3Qi2C3jtBkQj1BokMAAQkMAAj1hog");
	this.shape_14.setTransform(-12.2,-5.2,0.15,0.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F79F1A").s().p("AoATBQjthki2i3Qi3i3hkjtQhoj1AAkNQAAkMBoj1QBkjtC3i3QC2i3DthkQD1hoELAAQEMAAD1BoQDtBkC2C3QC3C3BkDtQBoD1AAEMQAAENhoD1QhkDti3C3Qi2C3jtBkQj1BokMAAQkLAAj1hog");
	this.shape_15.setTransform(12.2,-5.2,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_mastercard, new cjs.Rectangle(-32,-25,64,49.8), null);


(lib.logo_alfa_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("AhiA9IAAgZQgFAEgJAAQgOAAgGgKQgIgJABgRQgBgSAJgJQAHgJAOAAQAIAAAEADIAAgeIASAAIAAAeQAFgDAHAAQAdAAAAAjQAAARgHAKQgHAKgMAAQgJAAgGgEIAAAZgAhLgQIgFABIAAAmIAKABQAFAAAFgFQADgGAAgKQAAgUgMAAIgGABgAh5AEQAAAUANAAQAGAAAEgBIAAgmIgFgBIgFgBQgNAAAAAVgABiAjIAAhbIAOgCIAPgCQAPAAANADIAAAPQgLgCgLAAIgPABIAAAZQAHgCAHAAQAPAAAJAIQAHAIABAMQgBAPgIAJQgKAIgRAAQgPAAgPgFgAB2gDIAAAbIAMABQAGAAAEgEQAEgEAAgHQAAgOgOAAIgMABgADYAmIgEgEIgGADQgGADgHAAQgKAAgGgGQgHgFAAgKQAAgMAHgGQAHgFAOAAIAJABIAAgDQAAgHgCgCQgCgCgJAAIgPABIgDgNQALgDANAAQAJAAAEACQAGACACAEIADAGIABALIAAASQAAAHACAEQAAAEAEAGIgLAIIgEgCgADAAJQgEACAAAFQAAAJALAAQAFAAAEgBIgBgLIAAgFIgFgBQgHAAgDACgAAOAmIgEgEIgGADQgFADgIAAQgJAAgGgGQgIgFABgKQgBgMAIgGQAHgFANAAIAIABIAAgDQAAgHgBgCQgDgCgIAAIgOABIgCgNQAKgDAMAAQAIAAAFACQAFACADAEIADAGIABALIAAASIABALQABAEAEAGIgMAIIgDgCgAgKAJQgDACAAAFQAAAJAKAAQAEAAAFgBIgBgLIAAgFIgFgBQgGAAgEACgAjKAjIAAhCIASAAIAAAXIALgCQANAAAHAHQAGAFAAALQAAANgHAHQgIAHgOAAQgOAAgMgFgAi4AFIAAAUIAIABQAGAAADgDQACgDAAgGQAAgKgLAAIgIABgAkXAdQAEgDACgFQABgEAAgLIAAgiQAOgEANAAQAOAAAOAEIAABCIgSAAIAAg1IgKgBIgJABIAAAYQAAAPgEAGQgFAHgLADgAFhAmIgKgVIgEgGQgBgBgDAAIgDAAIAAAcIgTAAIAAhEIATAAIAAAaIADAAIAEgBIAEgEIAEgKIAFgIQADgEAHAAIAIAAIAAANQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgCABgEAJQgEAHgGABIAAABQAEABADACIAEAHIANAagAEYAmIAAgcIgVAAIAAAcIgSAAIAAhEIASAAIAAAaIAVAAIAAgaIASAAIAABEgAkxAmIgGgTIgjAAIgGATIgUAAIAihgIAKgBQAHAAAFABIAgBggAk8ADIgLgqIgBAAIgMAqIAYAAgAA0AMQgDgEAAgEQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAEgDAEQgEADgFAAQgEAAgEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_alfa_text, new cjs.Rectangle(-37.2,-6,74.5,12.1), null);


(lib.logo_alfa_forward = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("AjGAjIAAg2IAJAAIAAAFIAFgEQAEgCAEAAQAFAAAEADQAEADACAEQACAFAAAFQAAAHgCAFQgCAEgEADQgEACgFAAQgEAAgDgBIgGgGIAAAVgAi5gLQgDACgBADIAAAOIAEAEQADABADAAQAEAAACgBQADgCABgDQABgDAAgEQAAgCgBgDQgBgEgDgCQgCgBgEAAIgGABgABzAeIAAgKIggAAIAAgnIAJAAIAAAfIASAAIAAgfIAJAAIAAAfIAEAAIAAASgACsAOQACAAACgDQABgDABgIIADgTIAeAAIAAAnIgIAAIAAgfIgPAAIgBAMQgBAKgEAFQgEAFgGAAgACJATQgEgDgDgFQgDgEAAgHQAAgEADgGQADgEAEgDQAFgDAGAAQAGAAAEADQAEADADAFQACAEAAAGIAAACIgfAAIACAGQACACADABQACACAEAAIAGgBIAFgDIAEAFQgDADgEACIgJABQgGAAgFgCgACfgCIgCgFQgBgCgCgCQgDgBgDgBQgEABgDABIgDAEIgCAFIAXAAIAAAAgAgqASQgEgDgDgEQgCgFAAgGQAAgEACgGQADgEAEgDQAFgDAGAAQAHAAAEADQAFADACAEQADAGAAAEQAAAGgDAFQgCAEgFADQgEADgHAAQgGAAgFgDgAglgKQgDACgBADQgBADAAACQAAADABADQABAEADACQADABADAAQAEAAADgBQACgCABgEQACgDAAgDQAAgCgCgDQgBgDgCgCQgDgCgEAAQgDAAgDACgAD5AUIAAgaIgSAaIgJAAIAAgnIAJAAIAAAaIASgaIAJAAIAAAngAAtAUIgMgRIgGAHIAAAKIgIAAIAAgnIAIAAIAAATIASgTIALAAIgRASIARAVgAhEAUIAAgaIgMAaIgEAAIgMgaIAAAaIgIAAIAAgnIALAAIALAZIALgZIALAAIAAAngAh8AUIAAgPIgJAAIgJAPIgKAAIAKgPQgEgBgCgDQgDgCAAgFQAAgEABgDIAFgEQADgCAEAAIAXAAIAAAngAiNgKQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQABAAAAAAIANAAIAAgKIgNAAQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAjbAUIAAgtIgcAAIAAAtIgKAAIAAg2IAwAAIAAA2g");
	this.shape.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_alfa_forward, new cjs.Rectangle(-26.9,-5.5,53.9,11.1), null);


(lib.logo_alfa_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("Ah5DEIgDgBIgBgCIAAgtIABgCQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIDzAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIABACIAAAtIgBACIgDABgABHBDIgCgCIgSgxIhlAAIgSAxIgCACIgDAAIgogQIgDgCIAAgDIBLjLQAGgSAHgJQALgLARAAQASAAALALQAGAJAHASIBKDLIAAADIgCACIgoAQIgBAAIgCAAgAgfgZIBEAAIgjhoIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_alfa_a, new cjs.Rectangle(-12.6,-19.6,25.2,39.3), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-104,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-104,-74,207,147), null);


(lib.divider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("AgEGyIAAtjIAJAAIAANjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.divider, new cjs.Rectangle(-0.5,-43.3,1,86.8), null);


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(-91,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_1, new cjs.Rectangle(-91,-39,181,115), null);


(lib.butt_inverse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE3222").s().p("Ag1CDIAAjKIAQAAIAAAXQAIgLANgIQAOgHAPAAQAUAAAOAJQAPAKAJARQAIARAAAXQAAAXgIARQgJASgPAJQgOAKgUAAQgOAAgOgIQgNgHgJgNIAABQgAgRg0QgNAHgHALIAABIQAHALANAHQANAIAOABQARgBALgIQAMgIAGgOQAGgPAAgRQAAgRgGgOQgGgPgMgIQgLgIgRAAQgOAAgNAIgAlvCDIAAhPQgGAMgLAHQgKAIgNAAQgPAAgMgKQgLgJgIgRQgGgRAAgYQAAgXAGgRQAIgRALgKQAMgJAPAAQAMAAAKAHQALAHAHANIAAhQIAQAAIAABPQAGgLALgIQAKgHANAAQAPAAAMAJQAMAKAGARQAHARAAAXQAAAXgHARQgGASgMAJQgMAKgPAAQgMAAgKgIQgLgHgHgNIAABQgAlQg0QgKAHgFALIAABIQAFALAKAHQAKAIAMABQAMgBAJgIQAIgIAFgOQAFgPAAgRQAAgRgFgOQgFgPgIgIQgJgIgMAAQgMAAgKAIgAmpg0QgJAJgEAOQgFAOABARQgBASAFAOQAEAOAJAIQAJAIANABQALgBAKgHQAKgIAFgLIAAhHQgFgLgKgIQgKgIgLAAQgNAAgJAIgAjFBEQgQgKgJgRQgJgSAAgVQAAgVAJgRQAJgSAQgKQAPgKAWAAQAWAAAQAKQAQAKAJASQAIARABAVQgBAVgIASQgJARgQAKQgQALgWAAQgWAAgPgLgAi9gzQgLAJgHAOQgGAOgBAQQABAQAGAPQAHAOALAIQAMAJARABQASgBALgJQAMgIAHgOQAGgPAAgQQAAgQgGgOQgHgOgMgJQgLgJgSAAQgRAAgMAJgAqABBQgWgOgMgXQgMgYgBgdQABgeAMgYQAMgXAWgOQAXgOAdAAQAeAAAWAOQAXAOALAXQANAYAAAeQAAAdgNAYQgLAXgXAOQgWAOgeAAQgdAAgXgOgAp2hnQgTAMgJAUQgKAUAAAaQAAAZAKAUQAJAUATALQASAMAYAAQAZAAASgMQASgLAJgUQAKgUAAgZQAAgagKgUQgJgUgSgMQgSgLgZAAQgYAAgSALgAI5BLIAAiSIARAAIAAA8IA4AAQAPAAALAGQAJAFAGAKQAEAKAAAMQAAAMgEAJQgGAKgJAGQgLAGgPAAgAJKA9IA3AAQAPAAAIgIQAHgIAAgNQAAgNgHgJQgIgIgPAAIg3AAgAHiBLIAAiEIgrAAIAAgOIBnAAIAAAOIgsAAIAACEgAGMBLIAAh7IhUB7IgPAAIAAiSIAQAAIAAB6IBUh6IAPAAIAACSgADsBLIAAh8IgyB8IgFAAIg0h8IAAB8IgQAAIAAiSIAWAAIAwB3IAvh3IAXAAIAACSg");
	this.shape.setTransform(0.8,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FE3222").ss(2,1,1).p("AtqjHIbVAAIAAGPI7VAAg");
	this.shape_1.setTransform(0.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt_inverse, new cjs.Rectangle(-88,-20.9,177,43), null);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1CDIAAjKIAQAAIAAAXQAIgLANgIQAOgHAPAAQAUAAAOAJQAPAKAJARQAIARAAAXQAAAXgIARQgJASgPAJQgOAKgUAAQgOAAgOgIQgNgHgJgNIAABQgAgRg0QgNAHgHALIAABIQAHALANAHQANAIAOABQARgBALgIQAMgIAGgOQAGgPAAgRQAAgRgGgOQgGgPgMgIQgLgIgRAAQgOAAgNAIgAlvCDIAAhPQgGAMgLAHQgKAIgNAAQgPAAgMgKQgLgJgIgRQgGgRAAgYQAAgXAGgRQAIgRALgKQAMgJAPAAQAMAAAKAHQALAHAHANIAAhQIAQAAIAABPQAGgLALgIQAKgHANAAQAPAAAMAJQAMAKAGARQAHARAAAXQAAAXgHARQgGASgMAJQgMAKgPAAQgMAAgKgIQgLgHgHgNIAABQgAlQg0QgKAHgFALIAABIQAFALAKAHQAKAIAMABQAMgBAJgIQAIgIAFgOQAFgPAAgRQAAgRgFgOQgFgPgIgIQgJgIgMAAQgMAAgKAIgAmpg0QgJAJgEAOQgFAOABARQgBASAFAOQAEAOAJAIQAJAIANABQALgBAKgHQAKgIAFgLIAAhHQgFgLgKgIQgKgIgLAAQgNAAgJAIgAjFBEQgQgKgJgRQgJgSAAgVQAAgVAJgRQAJgSAQgKQAPgKAWAAQAWAAAQAKQAQAKAJASQAIARABAVQgBAVgIASQgJARgQAKQgQALgWAAQgWAAgPgLgAi9gzQgLAJgHAOQgGAOgBAQQABAQAGAPQAHAOALAIQAMAJARABQASgBALgJQAMgIAHgOQAGgPAAgQQAAgQgGgOQgHgOgMgJQgLgJgSAAQgRAAgMAJgAqABBQgWgOgMgXQgMgYgBgdQABgeAMgYQAMgXAWgOQAXgOAdAAQAeAAAWAOQAXAOALAXQANAYAAAeQAAAdgNAYQgLAXgXAOQgWAOgeAAQgdAAgXgOgAp2hnQgTAMgJAUQgKAUAAAaQAAAZAKAUQAJAUATALQASAMAYAAQAZAAASgMQASgLAJgUQAKgUAAgZQAAgagKgUQgJgUgSgMQgSgLgZAAQgYAAgSALgAI5BLIAAiSIARAAIAAA8IA4AAQAPAAALAGQAJAFAGAKQAEAKAAAMQAAAMgEAJQgGAKgJAGQgLAGgPAAgAJKA9IA3AAQAPAAAIgIQAHgIAAgNQAAgNgHgJQgIgIgPAAIg3AAgAHiBLIAAiEIgrAAIAAgOIBnAAIAAAOIgsAAIAACEgAGMBLIAAh7IhUB7IgPAAIAAiSIAQAAIAAB6IBUh6IAPAAIAACSgADsBLIAAh8IgyB8IgFAAIg0h8IAAB8IgQAAIAAiSIAWAAIAwB3IAvh3IAXAAIAACSg");
	this.shape.setTransform(0.8,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF3124").s().p("AtqDIIAAmPIbVAAIAAGPg");
	this.shape_1.setTransform(0.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt, new cjs.Rectangle(-87,-20.9,175,42), null);


(lib.btnMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AigGmIAAtLIFBAAIAANLg");
	this.shape.setTransform(0.7,0,7.465,4.739);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(-119.2,-199.9,240,400), null);


(lib.TXT02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0205
	this.instance = new lib.txt0205();
	this.instance.parent = this;
	this.instance.setTransform(94.5,18);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(1).to({regX:3.1,regY:0.3,x:92.7,y:18.3,alpha:0.391},0).wait(1).to({x:90.8,alpha:0.542},0).wait(1).to({x:89.5,alpha:0.646},0).wait(1).to({x:88.5,alpha:0.726},0).wait(1).to({x:87.7,alpha:0.789},0).wait(1).to({x:87.1,alpha:0.84},0).wait(1).to({x:86.6,alpha:0.882},0).wait(1).to({x:86.2,alpha:0.916},0).wait(1).to({x:85.8,alpha:0.943},0).wait(1).to({x:85.5,alpha:0.964},0).wait(1).to({x:85.3,alpha:0.98},0).wait(1).to({x:85.2,alpha:0.991},0).wait(1).to({x:85.1,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:82,y:18,alpha:1},0).wait(59).to({regX:3.1,regY:0.3,x:85.1,y:18.3,alpha:0.996},0).wait(1).to({y:18.4,alpha:0.984},0).wait(1).to({y:18.6,alpha:0.963},0).wait(1).to({y:18.8,alpha:0.934},0).wait(1).to({y:19.1,alpha:0.894},0).wait(1).to({y:19.5,alpha:0.843},0).wait(1).to({y:20,alpha:0.779},0).wait(1).to({y:20.5,alpha:0.7},0).wait(1).to({y:21.3,alpha:0.601},0).wait(1).to({y:22.2,alpha:0.473},0).wait(1).to({y:23.6,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:82,y:25.5,alpha:0},0).to({_off:true},1).wait(103));

	// txt0204
	this.instance_1 = new lib.txt0204();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({regX:-17.7,regY:-0.4,x:46.9,y:-0.4,alpha:0.391},0).wait(1).to({x:45,alpha:0.542},0).wait(1).to({x:43.7,alpha:0.646},0).wait(1).to({x:42.7,alpha:0.726},0).wait(1).to({x:41.9,alpha:0.789},0).wait(1).to({x:41.3,alpha:0.84},0).wait(1).to({x:40.8,alpha:0.882},0).wait(1).to({x:40.4,alpha:0.916},0).wait(1).to({x:40,alpha:0.943},0).wait(1).to({x:39.7,alpha:0.964},0).wait(1).to({x:39.5,alpha:0.98},0).wait(1).to({x:39.4,alpha:0.991},0).wait(1).to({x:39.3,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:57,y:0,alpha:1},0).wait(62).to({regX:-17.7,regY:-0.4,x:39.3,y:-0.4,alpha:0.996},0).wait(1).to({y:-0.3,alpha:0.984},0).wait(1).to({y:-0.1,alpha:0.963},0).wait(1).to({y:0.1,alpha:0.934},0).wait(1).to({y:0.4,alpha:0.894},0).wait(1).to({y:0.8,alpha:0.843},0).wait(1).to({y:1.3,alpha:0.779},0).wait(1).to({y:1.8,alpha:0.7},0).wait(1).to({y:2.6,alpha:0.601},0).wait(1).to({y:3.5,alpha:0.473},0).wait(1).to({y:4.9,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:57,y:7.5,alpha:0},0).to({_off:true},1).wait(103));

	// txt0203
	this.instance_2 = new lib.txt0203();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-22,14.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1).to({regX:-24.1,regY:-3.4,x:-46.1,y:14.8,alpha:0.391},0).wait(1).to({y:16.2,alpha:0.542},0).wait(1).to({y:17.2,alpha:0.646},0).wait(1).to({y:18,alpha:0.726},0).wait(1).to({y:18.6,alpha:0.789},0).wait(1).to({y:19.1,alpha:0.84},0).wait(1).to({y:19.5,alpha:0.882},0).wait(1).to({y:19.8,alpha:0.916},0).wait(1).to({y:20.1,alpha:0.943},0).wait(1).to({y:20.3,alpha:0.964},0).wait(1).to({y:20.4,alpha:0.98},0).wait(1).to({y:20.5,alpha:0.991},0).wait(1).to({y:20.6,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:-22,y:24,alpha:1},0).wait(67).to({regX:-24.1,regY:-3.4,x:-46.1,y:20.6,alpha:0.996},0).wait(1).to({y:20.7,alpha:0.984},0).wait(1).to({y:20.9,alpha:0.963},0).wait(1).to({y:21.1,alpha:0.934},0).wait(1).to({y:21.4,alpha:0.894},0).wait(1).to({y:21.8,alpha:0.843},0).wait(1).to({y:22.3,alpha:0.779},0).wait(1).to({y:22.8,alpha:0.7},0).wait(1).to({y:23.6,alpha:0.601},0).wait(1).to({y:24.5,alpha:0.473},0).wait(1).to({y:25.9,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:-22,y:31.5,alpha:0},0).to({_off:true},1).wait(103));

	// txt0202
	this.instance_3 = new lib.txt0202();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-22,-2.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(1).to({regX:-39.8,regY:-3.4,x:-61.8,y:-2.2,alpha:0.391},0).wait(1).to({y:-0.8,alpha:0.542},0).wait(1).to({y:0.2,alpha:0.646},0).wait(1).to({y:1,alpha:0.726},0).wait(1).to({y:1.6,alpha:0.789},0).wait(1).to({y:2.1,alpha:0.84},0).wait(1).to({y:2.5,alpha:0.882},0).wait(1).to({y:2.8,alpha:0.916},0).wait(1).to({y:3.1,alpha:0.943},0).wait(1).to({y:3.3,alpha:0.964},0).wait(1).to({y:3.4,alpha:0.98},0).wait(1).to({y:3.5,alpha:0.991},0).wait(1).to({y:3.6,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:-22,y:7,alpha:1},0).wait(71).to({regX:-39.8,regY:-3.4,x:-61.8,y:3.6,alpha:0.996},0).wait(1).to({y:3.7,alpha:0.984},0).wait(1).to({y:3.9,alpha:0.963},0).wait(1).to({y:4.1,alpha:0.934},0).wait(1).to({y:4.4,alpha:0.894},0).wait(1).to({y:4.8,alpha:0.843},0).wait(1).to({y:5.3,alpha:0.779},0).wait(1).to({y:5.8,alpha:0.7},0).wait(1).to({y:6.6,alpha:0.601},0).wait(1).to({y:7.5,alpha:0.473},0).wait(1).to({y:8.9,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:-22,y:14.5,alpha:0},0).to({_off:true},1).wait(101));

	// txt0201
	this.instance_4 = new lib.txt0201();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-22,-25.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-24.5,regY:-0.2,x:-46.5,y:-21.9,alpha:0.391},0).wait(1).to({y:-20.5,alpha:0.542},0).wait(1).to({y:-19.5,alpha:0.646},0).wait(1).to({y:-18.8,alpha:0.726},0).wait(1).to({y:-18.2,alpha:0.789},0).wait(1).to({y:-17.7,alpha:0.84},0).wait(1).to({y:-17.3,alpha:0.882},0).wait(1).to({y:-16.9,alpha:0.916},0).wait(1).to({y:-16.7,alpha:0.943},0).wait(1).to({y:-16.5,alpha:0.964},0).wait(1).to({y:-16.3,alpha:0.98},0).wait(1).to({y:-16.2,alpha:0.991},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:0,regY:0,x:-22,y:-16,alpha:1},0).wait(75).to({regX:-24.5,regY:-0.2,x:-46.5,y:-16.1,alpha:0.996},0).wait(1).to({y:-16,alpha:0.984},0).wait(1).to({y:-15.9,alpha:0.963},0).wait(1).to({y:-15.7,alpha:0.934},0).wait(1).to({y:-15.4,alpha:0.894},0).wait(1).to({y:-15,alpha:0.843},0).wait(1).to({y:-14.5,alpha:0.779},0).wait(1).to({y:-13.9,alpha:0.7},0).wait(1).to({y:-13.2,alpha:0.601},0).wait(1).to({y:-12.2,alpha:0.473},0).wait(1).to({y:-10.9,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:-22,y:-8.5,alpha:0},0).to({_off:true},1).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-33.5,95,15.7);


(lib.txt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0104
	this.instance = new lib.txt0104();
	this.instance.parent = this;
	this.instance.setTransform(0,28);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({regX:0.7,regY:0.4,x:0.7,y:35.2,alpha:0.487},0).wait(1).to({y:37.3,alpha:0.639},0).wait(1).to({y:38.7,alpha:0.737},0).wait(1).to({y:39.7,alpha:0.806},0).wait(1).to({y:40.4,alpha:0.858},0).wait(1).to({y:41,alpha:0.898},0).wait(1).to({y:41.4,alpha:0.928},0).wait(1).to({y:41.7,alpha:0.951},0).wait(1).to({y:42,alpha:0.969},0).wait(1).to({y:42.1,alpha:0.981},0).wait(1).to({y:42.3,alpha:0.99},0).wait(1).to({alpha:0.996},0).wait(1).to({y:42.4,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:0,y:42,alpha:1},0).wait(66).to({regX:0.7,regY:0.4,x:0.7,y:42.4,alpha:0.998},0).wait(1).to({y:42.5,alpha:0.991},0).wait(1).to({y:42.6,alpha:0.978},0).wait(1).to({y:42.7,alpha:0.959},0).wait(1).to({y:42.9,alpha:0.933},0).wait(1).to({y:43.2,alpha:0.898},0).wait(1).to({y:43.6,alpha:0.851},0).wait(1).to({y:44.1,alpha:0.791},0).wait(1).to({y:44.7,alpha:0.714},0).wait(1).to({y:45.5,alpha:0.613},0).wait(1).to({y:46.6,alpha:0.479},0).wait(1).to({y:48.1,alpha:0.291},0).wait(1).to({regX:0,regY:0,x:0,y:50,alpha:0},0).to({_off:true},1).wait(132));

	// txt0103
	this.instance_1 = new lib.txt0103();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34,-1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:-0.8,regY:2.5,x:-34.8,y:8.3,alpha:0.487},0).wait(1).to({y:10.4,alpha:0.639},0).wait(1).to({y:11.8,alpha:0.737},0).wait(1).to({y:12.8,alpha:0.806},0).wait(1).to({y:13.5,alpha:0.858},0).wait(1).to({y:14.1,alpha:0.898},0).wait(1).to({y:14.5,alpha:0.928},0).wait(1).to({y:14.8,alpha:0.951},0).wait(1).to({y:15.1,alpha:0.969},0).wait(1).to({y:15.2,alpha:0.981},0).wait(1).to({y:15.4,alpha:0.99},0).wait(1).to({alpha:0.996},0).wait(1).to({y:15.5,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-34,y:13,alpha:1},0).wait(70).to({regX:-0.8,regY:2.5,x:-34.8,y:15.5,alpha:0.998},0).wait(1).to({y:15.6,alpha:0.991},0).wait(1).to({y:15.7,alpha:0.978},0).wait(1).to({y:15.8,alpha:0.959},0).wait(1).to({y:16,alpha:0.933},0).wait(1).to({y:16.3,alpha:0.898},0).wait(1).to({y:16.7,alpha:0.851},0).wait(1).to({y:17.2,alpha:0.791},0).wait(1).to({y:17.8,alpha:0.714},0).wait(1).to({y:18.6,alpha:0.613},0).wait(1).to({y:19.7,alpha:0.479},0).wait(1).to({y:21.2,alpha:0.291},0).wait(1).to({regX:0,regY:0,x:-34,y:21,alpha:0},0).to({_off:true},1).wait(130));

	// txt0102
	this.instance_2 = new lib.txt0102();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12,-27);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:0.6,regY:0.1,x:-11.4,y:-20,alpha:0.487},0).wait(1).to({y:-17.9,alpha:0.639},0).wait(1).to({y:-16.5,alpha:0.737},0).wait(1).to({y:-15.6,alpha:0.806},0).wait(1).to({y:-14.8,alpha:0.858},0).wait(1).to({y:-14.3,alpha:0.898},0).wait(1).to({y:-13.9,alpha:0.928},0).wait(1).to({y:-13.5,alpha:0.951},0).wait(1).to({y:-13.3,alpha:0.969},0).wait(1).to({y:-13.1,alpha:0.981},0).wait(1).to({y:-13,alpha:0.99},0).wait(1).to({y:-12.9,alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-12,y:-13,alpha:1},0).wait(74).to({regX:0.6,regY:0.1,x:-11.4,y:-12.8,alpha:0.998},0).wait(1).to({alpha:0.991},0).wait(1).to({y:-12.7,alpha:0.978},0).wait(1).to({y:-12.5,alpha:0.959},0).wait(1).to({y:-12.3,alpha:0.933},0).wait(1).to({y:-12,alpha:0.898},0).wait(1).to({y:-11.7,alpha:0.851},0).wait(1).to({y:-11.2,alpha:0.791},0).wait(1).to({y:-10.6,alpha:0.714},0).wait(1).to({y:-9.8,alpha:0.613},0).wait(1).to({y:-8.7,alpha:0.479},0).wait(1).to({y:-7.2,alpha:0.291},0).wait(1).to({regX:0,regY:0,x:-12,y:-5,alpha:0},0).to({_off:true},1).wait(128));

	// txt0101
	this.instance_3 = new lib.txt0101();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-35,-56);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0.1,regY:2.5,x:-34.9,y:-46.6,alpha:0.487},0).wait(1).to({y:-44.5,alpha:0.639},0).wait(1).to({y:-43.1,alpha:0.737},0).wait(1).to({y:-42.2,alpha:0.806},0).wait(1).to({y:-41.4,alpha:0.858},0).wait(1).to({y:-40.9,alpha:0.898},0).wait(1).to({y:-40.5,alpha:0.928},0).wait(1).to({y:-40.1,alpha:0.951},0).wait(1).to({y:-39.9,alpha:0.969},0).wait(1).to({y:-39.7,alpha:0.981},0).wait(1).to({y:-39.6,alpha:0.99},0).wait(1).to({y:-39.5,alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-35,y:-42,alpha:1},0).wait(77).to({regX:0.1,regY:2.5,x:-34.9,y:-39.4,alpha:0.998},0).wait(1).to({alpha:0.991},0).wait(1).to({y:-39.3,alpha:0.978},0).wait(1).to({y:-39.1,alpha:0.959},0).wait(1).to({y:-38.9,alpha:0.933},0).wait(1).to({y:-38.6,alpha:0.898},0).wait(1).to({y:-38.3,alpha:0.851},0).wait(1).to({y:-37.8,alpha:0.791},0).wait(1).to({y:-37.2,alpha:0.714},0).wait(1).to({y:-36.4,alpha:0.613},0).wait(1).to({y:-35.3,alpha:0.479},0).wait(1).to({y:-33.8,alpha:0.291},0).wait(1).to({regX:0,regY:0,x:-35,y:-34,alpha:0},0).to({_off:true},1).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-66,110.2,24.9);


(lib.TXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.TXT02("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-10.2,79.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({_off:false},0).to({_off:true},103).wait(222));

	// TXT01
	this.instance_1 = new lib.txt01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,88);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},210).wait(222));

	// 1Redline
	this.instance_2 = new lib.redline();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-156,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-37,x:-188},0).wait(1).to({x:-184.9},0).wait(1).to({x:-182.6},0).wait(1).to({x:-180.6},0).wait(1).to({x:-179},0).wait(1).to({x:-177.7},0).wait(1).to({x:-176.5},0).wait(1).to({x:-175.5},0).wait(1).to({x:-174.7},0).wait(1).to({x:-174.1},0).wait(1).to({x:-173.6},0).wait(1).to({x:-173.2},0).wait(1).to({x:-173},0).wait(1).to({regX:0,x:-136},0).wait(91).to({regX:-37,x:-173},0).wait(1).to({y:50.2},0).wait(1).to({y:50.4},0).wait(1).to({y:50.7},0).wait(1).to({y:51.2},0).wait(1).to({y:51.8},0).wait(1).to({y:52.6},0).wait(1).to({y:53.6},0).wait(1).to({y:54.8},0).wait(1).to({y:56.2},0).wait(1).to({y:57.7},0).wait(1).to({y:59.1},0).wait(1).to({y:60.3},0).wait(1).to({y:61.3},0).wait(1).to({y:62},0).wait(1).to({y:62.5},0).wait(1).to({y:62.8},0).wait(1).to({y:62.9},0).wait(1).to({regX:0,x:-136,y:63},0).to({_off:true},215).wait(103));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.7,47.5,121.5,5);


(lib.sunflare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sun();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},49).to({alpha:0},51).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.9,-174.1,455.9,348.2);


(lib.logo_mastercard_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_mastercard();
	this.instance.parent = this;
	this.instance.setTransform(-7,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-5.2,alpha:0.258},0).wait(1).to({x:-4,alpha:0.423},0).wait(1).to({x:-3.2,alpha:0.547},0).wait(1).to({x:-2.5,alpha:0.645},0).wait(1).to({x:-1.9,alpha:0.725},0).wait(1).to({x:-1.5,alpha:0.791},0).wait(1).to({x:-1.1,alpha:0.845},0).wait(1).to({x:-0.8,alpha:0.889},0).wait(1).to({x:-0.5,alpha:0.925},0).wait(1).to({x:-0.3,alpha:0.953},0).wait(1).to({x:-0.2,alpha:0.974},0).wait(1).to({x:-0.1,alpha:0.989},0).wait(1).to({x:0,alpha:0.997},0).wait(1).to({alpha:1},0).wait(586));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-25,64,49.8);


(lib.logo_alfa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_alfa_forward
	this.instance = new lib.logo_alfa_forward();
	this.instance.parent = this;
	this.instance.setTransform(0,28.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1).to({regY:0.5,y:30.1,alpha:0.325},0).wait(1).to({y:30.7,alpha:0.489},0).wait(1).to({y:31.1,alpha:0.605},0).wait(1).to({y:31.4,alpha:0.693},0).wait(1).to({y:31.7,alpha:0.764},0).wait(1).to({y:31.9,alpha:0.822},0).wait(1).to({y:32,alpha:0.868},0).wait(1).to({y:32.2,alpha:0.906},0).wait(1).to({y:32.3,alpha:0.937},0).wait(1).to({y:32.4,alpha:0.96},0).wait(1).to({alpha:0.978},0).wait(1).to({y:32.5,alpha:0.99},0).wait(1).to({alpha:0.998},0).wait(1).to({regY:0,y:32,alpha:1},0).wait(378));

	// logo_alfa_text
	this.instance_1 = new lib.logo_alfa_text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,14.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(1).to({y:15.6,alpha:0.325},0).wait(1).to({y:16.2,alpha:0.489},0).wait(1).to({y:16.6,alpha:0.605},0).wait(1).to({y:16.9,alpha:0.693},0).wait(1).to({y:17.2,alpha:0.764},0).wait(1).to({y:17.4,alpha:0.822},0).wait(1).to({y:17.5,alpha:0.868},0).wait(1).to({y:17.7,alpha:0.906},0).wait(1).to({y:17.8,alpha:0.937},0).wait(1).to({y:17.9,alpha:0.96},0).wait(1).to({alpha:0.978},0).wait(1).to({y:18,alpha:0.99},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(380));

	// logo_alfa_a
	this.instance_2 = new lib.logo_alfa_a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7,-18);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-4.7,alpha:0.325},0).wait(1).to({x:-3.6,alpha:0.489},0).wait(1).to({x:-2.8,alpha:0.605},0).wait(1).to({x:-2.1,alpha:0.693},0).wait(1).to({x:-1.7,alpha:0.764},0).wait(1).to({x:-1.2,alpha:0.822},0).wait(1).to({x:-0.9,alpha:0.868},0).wait(1).to({x:-0.7,alpha:0.906},0).wait(1).to({x:-0.4,alpha:0.937},0).wait(1).to({x:-0.3,alpha:0.96},0).wait(1).to({x:-0.2,alpha:0.978},0).wait(1).to({x:-0.1,alpha:0.99},0).wait(1).to({x:0,alpha:0.998},0).wait(1).to({alpha:1},0).wait(386));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-37.6,25.2,39.3);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butt();
	this.instance.parent = this;

	this.instance_1 = new lib.butt_inverse();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-19,175,40);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man();
	this.instance.parent = this;
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-34},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-361.9,320,543);


(lib.Logo_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_mastercard_move
	this.instance = new lib.logo_mastercard_move("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-113,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(680));

	// divider
	this.instance_1 = new lib.divider();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},10).wait(670));

	// logo_alfa
	this.instance_2 = new lib.logo_alfa("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(4,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(680));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_9 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_10 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_11 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_12 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_13 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_14 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_15 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_16 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_17 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_18 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_19 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_20 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_21 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");
	var mask_graphics_22 = new cjs.Graphics().p("AnkBdIAAi5IPJAAIAAC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_8,x:-25.3,y:0.7}).wait(1).to({graphics:mask_graphics_9,x:-8.3,y:0.7}).wait(1).to({graphics:mask_graphics_10,x:0.9,y:0.7}).wait(1).to({graphics:mask_graphics_11,x:7.5,y:0.7}).wait(1).to({graphics:mask_graphics_12,x:12.6,y:0.7}).wait(1).to({graphics:mask_graphics_13,x:16.7,y:0.7}).wait(1).to({graphics:mask_graphics_14,x:20.1,y:0.7}).wait(1).to({graphics:mask_graphics_15,x:22.9,y:0.7}).wait(1).to({graphics:mask_graphics_16,x:25.1,y:0.7}).wait(1).to({graphics:mask_graphics_17,x:26.9,y:0.7}).wait(1).to({graphics:mask_graphics_18,x:28.3,y:0.7}).wait(1).to({graphics:mask_graphics_19,x:29.4,y:0.7}).wait(1).to({graphics:mask_graphics_20,x:30.2,y:0.7}).wait(1).to({graphics:mask_graphics_21,x:30.6,y:0.7}).wait(1).to({graphics:mask_graphics_22,x:30.7,y:0.7}).wait(658));

	// redline
	this.instance_3 = new lib.redline();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122,1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(672));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-43.3,161.6,86.8);


(lib.bgman_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.sunflare("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-65.7,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(441));

	// Layer 1
	this.instance_1 = new lib.bg("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(441));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293.6,-361.9,461.7,543);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logoGroup
	this.instance = new lib.Logo_group("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(49.8,142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(336).to({startPosition:326},0).wait(1).to({regX:-36.4,x:13.4,y:142.1,alpha:0.996,startPosition:327},0).wait(1).to({y:142.3,alpha:0.984,startPosition:328},0).wait(1).to({y:142.7,alpha:0.963,startPosition:329},0).wait(1).to({y:143.4,alpha:0.931,startPosition:330},0).wait(1).to({y:144.2,alpha:0.888,startPosition:331},0).wait(1).to({y:145.4,alpha:0.83,startPosition:332},0).wait(1).to({y:146.9,alpha:0.754,startPosition:333},0).wait(1).to({y:148.9,alpha:0.656,startPosition:334},0).wait(1).to({y:151.5,alpha:0.524,startPosition:335},0).wait(1).to({y:155.3,alpha:0.336,startPosition:336},0).wait(1).to({regX:0,x:49.8,y:162,alpha:0,startPosition:337},0).wait(12));

	// Legal
	this.instance_1 = new lib.legal_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(239).to({_off:false},0).wait(1).to({regX:-0.5,regY:-0.5,x:-0.5,y:-2.3,alpha:0.39},0).wait(1).to({y:-5.5,alpha:0.552},0).wait(1).to({y:-7.7,alpha:0.662},0).wait(1).to({y:-9.4,alpha:0.746},0).wait(1).to({y:-10.7,alpha:0.811},0).wait(1).to({y:-11.7,alpha:0.863},0).wait(1).to({y:-12.5,alpha:0.903},0).wait(1).to({y:-13.2,alpha:0.936},0).wait(1).to({y:-13.7,alpha:0.96},0).wait(1).to({y:-14,alpha:0.978},0).wait(1).to({y:-14.3,alpha:0.991},0).wait(1).to({y:-14.4,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:0,y:-14,alpha:1},0).wait(85).to({regX:-0.5,regY:-0.5,x:-0.5,y:-14.4,alpha:0.996},0).wait(1).to({y:-14.1,alpha:0.984},0).wait(1).to({y:-13.7,alpha:0.963},0).wait(1).to({y:-13.1,alpha:0.931},0).wait(1).to({y:-12.2,alpha:0.888},0).wait(1).to({y:-11,alpha:0.83},0).wait(1).to({y:-9.5,alpha:0.754},0).wait(1).to({y:-7.6,alpha:0.656},0).wait(1).to({y:-4.9,alpha:0.524},0).wait(1).to({y:-1.2,alpha:0.336},0).wait(1).to({regX:0,regY:0,x:0,y:6,alpha:0},0).wait(12));

	// button
	this.instance_2 = new lib.button();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-147,0.2,0.2,0,0,0,0,-0.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(239).to({_off:false},0).wait(1).to({regX:0.5,regY:1,scaleX:0.51,scaleY:0.51,x:0.3,y:-146.4,alpha:0.39},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:-146.2,alpha:0.552},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:0.4,y:-146.1,alpha:0.662},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:-146,alpha:0.746},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:-145.9,alpha:0.811},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:0.5,alpha:0.863},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.903},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:-145.8,alpha:0.936},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.978},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:-147,alpha:1},0).wait(85).to({regX:0.5,regY:1,x:0.5,y:-145.9,alpha:0.996},0).wait(1).to({y:-145.6,alpha:0.984},0).wait(1).to({y:-145.2,alpha:0.963},0).wait(1).to({y:-144.6,alpha:0.931},0).wait(1).to({y:-143.7,alpha:0.888},0).wait(1).to({y:-142.5,alpha:0.83},0).wait(1).to({y:-141,alpha:0.754},0).wait(1).to({y:-139.1,alpha:0.656},0).wait(1).to({y:-136.4,alpha:0.524},0).wait(1).to({y:-132.7,alpha:0.336},0).wait(1).to({regX:0,regY:0,x:0,y:-127,alpha:0},0).wait(12));

	// CARD
	this.instance_3 = new lib.card_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-119,-5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).wait(1).to({regX:-0.5,regY:18.5,x:-78.1,y:13.5,alpha:0.348},0).wait(1).to({x:-56.4,alpha:0.53},0).wait(1).to({x:-41.5,alpha:0.655},0).wait(1).to({x:-30.4,alpha:0.748},0).wait(1).to({x:-21.9,alpha:0.82},0).wait(1).to({x:-15.4,alpha:0.875},0).wait(1).to({x:-10.3,alpha:0.917},0).wait(1).to({x:-6.5,alpha:0.949},0).wait(1).to({x:-3.7,alpha:0.973},0).wait(1).to({x:-1.8,alpha:0.988},0).wait(1).to({x:-0.8,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:0,y:-5,alpha:1},0).wait(173).to({regX:-0.5,regY:18.5,y:13.5,alpha:0.996},0).wait(1).to({x:1.5,alpha:0.983},0).wait(1).to({x:4.2,alpha:0.961},0).wait(1).to({x:8.1,alpha:0.928},0).wait(1).to({x:13.5,alpha:0.883},0).wait(1).to({x:20.6,alpha:0.824},0).wait(1).to({x:29.9,alpha:0.747},0).wait(1).to({x:41.9,alpha:0.647},0).wait(1).to({x:57.8,alpha:0.514},0).wait(1).to({x:80.3,alpha:0.327},0).wait(1).to({regX:0,regY:0,x:120,y:-5,alpha:0},0).to({_off:true},1).wait(122));

	// TXT
	this.instance_4 = new lib.TXT("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(13,-210);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).wait(315).to({startPosition:315},0).wait(1).to({regX:-78.6,regY:85.4,x:-65.6,y:-124.5,alpha:0.996,startPosition:316},0).wait(1).to({y:-124.4,alpha:0.984,startPosition:317},0).wait(1).to({y:-124.2,alpha:0.963,startPosition:318},0).wait(1).to({y:-123.9,alpha:0.931,startPosition:319},0).wait(1).to({y:-123.5,alpha:0.888,startPosition:320},0).wait(1).to({y:-123,alpha:0.83,startPosition:321},0).wait(1).to({y:-122.3,alpha:0.754,startPosition:322},0).wait(1).to({y:-121.4,alpha:0.656,startPosition:323},0).wait(1).to({y:-120.2,alpha:0.524,startPosition:324},0).wait(1).to({y:-118.5,alpha:0.336,startPosition:325},0).wait(1).to({regX:0,regY:0,x:13,y:-200.9,alpha:0,startPosition:326},0).wait(12));

	// White
	this.instance_5 = new lib.blank();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(359));

	// BG
	this.instance_6 = new lib.bgman_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(13,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},110).wait(249));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399,-644,811,862);


// stage content:
(lib.alfa_mastercard_cashback_card_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
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
	this.btnMain = new lib.btnMain();
	this.btnMain.parent = this;
	this.btnMain.setTransform(120,200);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.btnMain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,68.1,461.7,543);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bgman.jpg", id:"bgman"},
		{src:"card.png", id:"card"},
		{src:"legal.png", id:"legal"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;