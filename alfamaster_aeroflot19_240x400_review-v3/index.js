(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,253,231,148],[0,0,189,251]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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



(lib.card = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.txt0502 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-14.8,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0502, new cjs.Rectangle(-97.3,-18.7,163.1,37.6), null);


(lib.txt0501 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADUDHIAAgnIADAAQAHAAAEgCQADgCACgFQACgFABgKIAHhIIB0AAIAACGIgqAAIAAhjIgoAAIgEAqQgBAUgFAMQgFANgKAHQgKAGgRAAgAHkDGIAAhQIg6BQIgqAAIAAiGIAqAAIAABPIA6hPIApAAIAACGgACbDGIAAhQIg6BQIgqAAIAAiGIAqAAIAABPIA6hPIAqAAIAACGgAgNDGIAAhfIgoBfIgbAAIgqheIAABeIgmAAIAAiGIA6AAIAlBQIAlhQIA4AAIAACGgAoNDGIAAg8ICSiEQAWgTALgRQAMgSAAgUQAAgVgNgOQgNgNgZgBQgXABgNAPQgNAPAAAXIAAAVIhZAAIAAgXQAAgmAPgdQARgeAfgSQAfgRAsgBQAuAAAgAQQAgAQAQAcQARAdABAmQgBAegKAXQgMAXgSAVQgTAUgYAVIg5AzICgAAIAABQg");
	this.shape.setTransform(-41.4,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0501, new cjs.Rectangle(-99.4,-48.5,113.5,88.5), null);


(lib.txt0402 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkCBqIAXg0IgxhpIAWAAIAmBRIAlhRIAwAAIAyAuIAAguIAUAAIAAAuIAyguIAbAAIg5AzIA9A4IgcAAIg1gwIAAAwIgUAAIAAgwIg1AwIgcAAIA9g3Ig5gzIhICcgAK/A0QgNgIgHgNQgHgNAAgQQAAgQAHgMQAHgNANgHQAMgIAQAAQAQAAANAIQAMAHAHAOQAHANAAAQIhaAAQABALAEAIQAFAIAIAFQAIAFALgBQALAAAHgDQAGgDAEgDIAEgFIAUAAQAAADgDAGQgEAFgGAGQgGAFgKAEQgJAEgOAAQgRAAgNgHgAL8gLQgEgNgIgGQgJgGgMAAQgNgBgJAIQgIAGgEAMIBDAAIAAAAgAEtA1QgMgIgIgMQgHgNAAgSQAAgRAHgMQAIgNAMgHQALgHAPAAQAMAAAIAEQAIAEAFAFIAGAIIAAgSIAUAAIAABrIgUAAIAAgSIgGAIQgFAFgIAEQgIAEgMAAQgPAAgLgGgAE4geQgIAFgFAIQgEAJAAAKQAAALAEAIQAFAKAIAFQAIAEALAAQAKAAAIgEQAIgFAFgKQAEgIAAgLQAAgKgEgJQgFgIgIgFQgIgFgKAAQgLAAgIAFgAnyA0QgMgIgHgNQgIgNAAgQQAAgPAIgNQAHgMAMgIQANgHAPgBQAPAAAKAEQAJAFAGAHQAGAFADAHIADAJIgUAAIgEgHQgEgEgGgEQgHgDgLAAQgKAAgIAFQgHAFgFAIQgEAKAAAJQAAALAEAIQAFAKAIAFQAHAEALAAQAKAAAHgDQAHgEADgEIAEgHIAUAAIgDAJQgDAGgGAHQgFAGgKAEQgKAFgOAAQgQAAgNgHgApzA0QgNgHgHgOQgHgNAAgSIAAgJIABgKIABgNQABgSAGgNQAHgNAMgJQANgJAUgDIAsgIIAAASIgrAIQgOADgJAFQgJAFgEAKQgFAKgBAPQAFgJAKgEQAKgFAPgBQAQABAMAGQANAHAGAMQAHANAAAPQAAAQgHANQgHALgNAIQgMAHgSAAQgRAAgNgHgAppgaQgIAFgEAIQgEAIAAAJQAAALAEAHQAEAJAIAFQAIAEAMAAQAMAAAIgEQAJgFAEgJQAEgHAAgLQAAgJgEgIQgEgIgJgFQgIgFgMAAQgMAAgIAFgAr1A0QgNgIgIgNQgHgNAAgQQAAgPAHgNQAIgNANgHQANgIAQAAQAQAAANAIQANAHAIANQAHANAAAPQAAAQgHANQgIANgNAIQgNAHgQAAQgQAAgNgHgArrgeQgIAFgFAIQgEAKgBAJQABALAEAIQAFAKAIAFQAIAEALAAQALAAAIgEQAIgFAFgKQAEgIAAgLQAAgJgEgKQgFgIgIgFQgIgFgLAAQgLAAgIAFgAmaA6IAAgSIACAAQAIAAAEgDQAEgCACgHQACgIABgMIAGg7IBRAAIAABrIgUAAIAAhZIgtAAIgEAqQgCARgEALQgDAKgHAGQgIAFgLAAgAJ5A4IAAhRIhABRIgUAAIAAhrIAUAAIAABQIBAhQIAUAAIAABrgAHyA4IAAguIg9AAIAAAuIgUAAIAAhrIAUAAIAAAsIA9AAIAAgsIAUAAIAABrgACfA4IAAhrIA5AAQALAAAIADQAIADAFAHQAFAGABAJQgBALgFAFQgEAHgHAAQAIACAGAHQAGAFAAALQAAAOgLAIQgLAKgTgBgACzAnIAmAAQAJAAAFgEQAFgEAAgHQAAgGgFgFQgEgDgKAAIgmAAgACzgHIAlAAQAIAAAFgDQAFgDAAgIQAAgGgFgDQgFgDgIgBIglAAgABsA4IAAhRIhABRIgUAAIAAhrIAUAAIAABQIBAhQIAUAAIAABrg");
	this.shape.setTransform(-14.4,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0402, new cjs.Rectangle(-96.7,-18.7,162.9,37.6), null);


(lib.txt0401 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai2C1QgggQgSggQgTggABgtIAAhvQAAhDAnglQAngmBFgBQBGABAlAmQAnAlAABDIAABvQgBBDgmAmQgmAlhFABQgtAAgigSgAiShiQgOARAAAdIAABpQAAAdAOARQAOASAdABQAdgBAPgSQAOgRAAgdIAAhpQAAgdgOgRQgPgSgdgBQgdABgOASgAB/DAIAAgvIgNAAIAAgSIANAAIAAgSIgNAAIAAgVIANAAIAAhSIA6AAQAZAAANAFQANAFAIAMQAHANAAAPQAAAQgFAKQgGAKgKAGQgJAGgMADQgNACgMAAIghAAIAAASIBLAAIAAASIhLAAIAAAvgACXBYIAhAAIAQgBQAHgCAGgDQAGgEADgGQAEgGAAgKQAAgIgDgGQgDgFgGgEQgFgDgHgCQgIgCgIAAIgjAAg");
	this.shape.setTransform(-67.8,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0401, new cjs.Rectangle(-99.2,-47.7,57,86.9), null);


(lib.txt0302 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AshBQIAAicIAUAAIAAASIAGgIQAEgFAJgEQAIgEAMgBQAPABAMAGQAMAIAHAMQAIANAAASQAAASgIALQgHANgMAHQgMAGgPAAQgMAAgIgDQgIgFgFgEIgGgHIAABCgAr8g4QgJAFgEAJQgFAJAAALQAAAKAFAJQAEAIAJAFQAIAFALAAQALAAAIgFQAIgFAFgIQAEgJAAgKQAAgLgEgJQgFgJgIgFQgIgEgLgBQgLABgIAEgAEJAaQgNgIgHgMQgHgMAAgQQAAgRAHgNQAHgNANgHQAMgHAQgBQAQABANAHQAMAHAHAOQAHANAAASIhaAAQABAKAEAIQAFAIAIAEQAIAFALAAQALAAAHgDQAGgDAEgDIAEgGIAUAAQAAADgDAGQgEAFgGAHQgGAFgKAEQgJADgOAAQgRAAgNgHgAFGglQgEgMgIgHQgJgGgMAAQgNAAgJAHQgIAGgEAMIBDAAIAAAAgAhxAaQgMgIgHgMQgIgMAAgQQAAgRAIgNQAHgMAMgIQANgHAPgBQAPABAKAEQAJAFAGAGQAGAGADAGIADAJIgUAAIgEgGQgEgEgGgEQgHgDgLgBQgKABgIAEQgHAFgFAJQgEAJAAALQAAAKAEAJQAFAIAIAFQAHAFALAAQAKAAAHgDQAHgFADgDIAEgGIAUAAIgDAIQgDAGgGAGQgFAHgKAEQgKAEgOAAQgQAAgNgHgAlsAaQgNgIgHgMQgHgMAAgQQAAgRAHgNQAHgNANgHQAMgHAQgBQAQABANAHQAMAHAHAOQAHANAAASIhaAAQABAKAEAIQAFAIAIAEQAIAFALAAQALAAAHgDQAGgDAEgDIAEgGIAUAAQAAADgDAGQgEAFgGAHQgGAFgKAEQgJADgOAAQgRAAgNgHgAkvglQgEgMgIgHQgJgGgMAAQgNAAgJAHQgIAGgEAMIBDAAIAAAAgAOTAfIgkgoIglAoIgYAAIAxg1Igxg2IAaAAIAjAnIAlgnIAYAAIgxA1IAxA2gAMGAfIAAhrIAUAAIAABrgAKTAfIAAhrIAUAAIAAAjIAhAAQAPgBAKAFQAKAFAEAIQAFAJAAAKQAAAIgFAJQgEAJgKAEQgJAGgPAAgAKnANIAfAAQAMAAAGgFQAHgFAAgIQAAgJgHgFQgGgEgMAAIgfAAgAJYAfIAAgtIg9AAIAAAtIgUAAIAAhrIAUAAIAAAsIA9AAIAAgsIAUAAIAABrgAHLAfIAAgtIg9AAIAAAtIgUAAIAAhrIAUAAIAAAsIA9AAIAAgsIAUAAIAABrgABzAfIAAhrIA5AAQALAAAIACQAIADAFAHQAFAGABAKQgBAKgFAGQgEAGgHACQAIACAGAGQAGAFAAALQAAAOgLAIQgLAJgTAAgACHAOIAmAAQAJAAAFgFQAFgEAAgGQAAgGgFgEQgEgDgKAAIgmAAgACHggIAlAAQAIAAAFgEQAFgDAAgIQAAgFgFgEQgFgDgIAAIglAAgAAaAfIAAhZIgrAAIAAgSIBrAAIAAASIgsAAIAABZgAjdAfIAAhZIgsAAIAAgSIBsAAIAAASIgsAAIAABZgAoCAfIAAhrIA5AAQALAAAIACQAIADAFAHQAFAGABAKQgBAKgFAGQgEAGgHACQAIACAGAGQAGAFAAALQAAAOgLAIQgLAJgTAAgAnuAOIAmAAQAJAAAFgFQAFgEAAgGQAAgGgFgEQgEgDgKAAIgmAAgAnuggIAlAAQAIAAAFgEQAFgDAAgIQAAgFgFgEQgFgDgIAAIglAAgAo9AfIAAhRIhABRIgUAAIAAhrIAUAAIAABQIBAhQIAUAAIAABrgAtcAfIAAhZIg7AAIAABZIgUAAIAAhrIBjAAIAABrg");
	this.shape.setTransform(1,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0302, new cjs.Rectangle(-97.3,-18.7,194.6,37.6), null);


(lib.txt0301 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHCXQgcgOgOgaQgPgbAAgmIAAhbQAAg4AhggQAfgfA6gBQA6ABAgAfQAgAgABA4IAABbQgBA5ggAfQghAfg5ABQgngBgagOgAAWhSQgMAPAAAYIAABXQAAAYAMAPQAMAPAYAAQAYAAAMgPQALgPAAgYIAAhXQAAgYgLgPQgMgPgYAAQgYAAgMAPgAktCXQgcgOgPgaQgOgbAAgmIAAhbQgBg4AhggQAggfA6gBQA6ABAgAfQAgAgABA4IAABbQgBA5ggAfQghAfg5ABQgmgBgbgOgAkQhSQgMAPAAAYIAABXQAAAYAMAPQAMAPAYAAQAYAAAMgPQAMgPAAgYIAAhXQAAgYgMgPQgMgPgYAAQgYAAgMAPgApUCXQgbgOgQgaQgOgbAAgmIAAhbQAAg4AgggQAhgfA5gBQA7ABAfAfQAhAgAAA4IAABbQAAA5ghAfQggAfg6ABQglgBgcgOgAo3hSQgLAPgBAYIAABXQABAYALAPQANAPAXAAQAZAAAMgPQAMgPAAgYIAAhXQAAgYgMgPQgMgPgZAAQgXAAgNAPgAtqCcQgXgJgQgPQgPgPgIgRQgHgRgCgRIBMAAQABAHAGAIQAGAHAKAGQALAFASABQAXgBAOgKQAMgJAAgRQAAgRgKgJQgJgJgTAAIg/AAIAAg/IA5AAQARAAAJgIQAJgIAAgPQAAgQgLgJQgMgJgVAAQgOAAgKAFQgJAFgFAIQgEAHgCAGIhKAAQABgXANgVQAMgWAbgPQAZgOAoAAQA6AAAeAYQAfAYAAAsQABARgHANQgGANgKAIQgJAIgKAEQAMAEAMAIQAMAJAIAQQAIAQAAAXQAAAegPAWQgPAWgdAMQgcAMgnAAQghAAgYgJgAJ5CgIAAgmIACAAQAIAAADgCQAEgCACgFQACgGAAgKIAHhIIB1AAIAACHIgrAAIAAhkIgnAAIgEAqQgBAUgFANQgGANgKAGQgJAGgSAAgAMlCgIAAiHIAqAAIAAApIAtAAQATAAAMAGQAMAGAFAKQAGALAAANQAAANgGAKQgFALgMAHQgMAGgTABgANPCAIAmAAQAIAAAFgEQAFgEAAgIQAAgHgFgDQgFgEgIAAIgmAAgAI/CgIAAhQIg6BQIgqAAIAAiHIAqAAIAABQIA6hQIAqAAIAACHgAGXCgIAAhfIgpBfIgbAAIgpheIAABeIgnAAIAAiHIA7AAIAlBRIAkhRIA5AAIAACHg");
	this.shape.setTransform(1.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0301, new cjs.Rectangle(-97.4,-36.5,194.8,73.1), null);


(lib.txt0203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADKBfIAAi6IArAAIAAAUQAAgCAGgGQAFgEAJgGQAKgEAOAAQARAAAOAIQAOAJAIAPQAIAQAAAVQAAAWgIAQQgIAPgOAIQgOAJgRAAQgOAAgKgFQgJgEgGgFIgFgIIAABHgAD9gvQgJAIABAPQgBAQAJAIQAJAJAOAAQAPAAAJgJQAHgIABgQQgBgPgHgIQgJgKgPAAQgOAAgJAKgAgUBRIAAgmIhgAAIAAAmIgmAAIAAhJIAOAAQAFgIAFgNQADgOADgUIAFgsIBzAAIAABjIAVAAIAABJgAhVguIgEAZIgFARIgGAMIA1AAIAAg/IglAAgAGTAlQgQgIgKgQQgKgQAAgVQAAgUAKgQQAKgQAQgJQARgJAWAAQAUAAARAJQARAJAKAQQAJAQAAAUQAAAVgJAQQgKAQgRAIQgRAJgUAAQgWAAgRgJgAGpg1QgHAEgFAJQgEAHAAAJQAAAKAEAIQAFAGAHAFQAGAFALgBQAJABAHgFQAHgFAEgGQADgIAAgKQAAgJgDgHQgEgJgHgEQgHgFgJABQgLgBgGAFgAkRAlQgRgIgJgQQgKgQAAgVQAAgUAKgQQAJgQARgJQARgJAVAAQAWAAAQAJQARAJAJAQQAKAQAAAUQAAAVgKAQQgJAQgRAIQgQAJgWAAQgVAAgRgJgAj8g1QgGAEgFAJQgDAHAAAJQAAAKADAIQAFAGAGAFQAIAFAJgBQAKABAHgFQAHgFADgGQAFgIAAgKQAAgJgFgHQgDgJgHgEQgHgFgKABQgJgBgIAFgAA3AlQgOgIgJgPQgHgQgBgWQABgVAHgQQAJgPAOgJQAOgIAQAAQAOAAAKAEQAIAFAFAEQAFAFABADIAAgTIAqAAIAACGIgpAAIAAgUIgHAIQgEAGgJAEQgJAFgPAAQgRAAgNgJgABSg1QgIAEgDAJQgEAHAAAJQAAAKAEAIQADAGAIAFQAGAFAKgBQAKABAGgFQAHgFAEgGQADgIABgKQgBgJgDgHQgEgJgHgEQgGgFgKABQgKgBgGAFgAJ9ArIg4g6IAAA6IgqAAIAAiGIAqAAIAAA3IA2g3IA1AAIg/BAIBDBGgAl3ArIAAhiIg0AAIAABiIgrAAIAAiGICJAAIAACGgAqzArIAAiGIBUAAQAXAAANAKQAMAJAAARQAAAIgDAHQgDAGgFADQgFAEgFABQAHACAFAEQAGAEADAGQADAHABAIQgBARgNALQgMAKgZAAgAqJAOIAiAAQAJAAAEgEQAEgDAAgHQAAgDgEgEQgEgDgJAAIgiAAgAqJglIAhAAQAGAAAEgDQAFgEAAgFQAAgHgEgCQgFgEgGABIghAAg");
	this.shape.setTransform(-19.7,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0203, new cjs.Rectangle(-92.9,-21.9,143.9,43.9), null);


(lib.txt0202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArRBfIAWg3Ig8iDIAwAAIAiBRIAhhRIArAAIhOC6gAMiAlQgRgKgJgPQgJgPAAgVQAAgVAJgQQAJgQAQgJQAQgJAWAAQAVAAAQAJQARAJAJAQQAJAQAAAWIAAAHIhnAAQACANAJAHQAJAJAOAAQAIAAAFgCQAGgCADgDIAEgDIApAAQAAAFgFAIQgEAIgIAGQgIAHgMAEQgNAFgRAAQgXgBgRgIgANkgqQgCgKgIgGQgIgGgLAAQgMAAgIAGQgHAGgDAKIA7AAIAAAAgACiAlQgQgIgJgRQgKgOAAgWQAAgVAKgQQAJgQAQgJQAPgJAUAAQASAAAMAGQANAFAIAHQAIAIAEAJQAEAJABAHIgpAAIgEgGQgDgDgFgCQgFgDgJAAQgIAAgHAFQgGAEgEAIQgDAIAAAJQAAAPAHAJQAIAJAOABQAIAAAFgEQAGgCADgDIADgFIApAAQgBAHgEAJQgEAIgIAIQgHAIgNAEQgNAGgRAAQgUAAgQgJgAACAlQgPgKgKgPQgJgPAAgVQAAgVAJgQQAKgQAPgJQAQgJAVAAQAWAAAQAJQAQAJAJAQQAJAQAAAWIAAAHIhmAAQABANAJAHQAJAJAOAAQAIAAAGgCQAFgCADgDIAEgDIAqAAQgBAFgEAIQgEAIgIAGQgJAHgMAEQgNAFgRAAQgXgBgRgIgABFgqQgDgKgIgGQgHgGgMAAQgLAAgIAGQgIAGgCAKIA7AAIAAAAgAmXAlQgRgKgJgPQgJgPAAgVQAAgVAJgQQAJgQAQgJQAQgJAWAAQAVAAAQAJQARAJAJAQQAJAQAAAWIAAAHIhnAAQACANAJAHQAJAJAOAAQAIAAAFgCQAGgCADgDIAEgDIApAAQAAAFgFAIQgEAIgIAGQgIAHgMAEQgNAFgRAAQgXgBgRgIgAlVgqQgCgKgIgGQgIgGgLAAQgMAAgIAGQgHAGgDAKIA7AAIAAAAgAK9AqIAAhOIg6BOIgqAAIAAiFIAqAAIAABPIA6hPIApAAIAACFgAG3AqIAAiFIBVAAQAXAAAMAKQANAJAAAQQAAAJgDAGQgDAGgFADQgFAEgFACQAHABAFAEQAGAFADAGQADAGABAIQgBARgNALQgMAKgZAAgAHiANIAiAAQAJAAAEgDQAEgDAAgHQAAgEgEgDQgEgDgJgBIgiAAgAHigmIAgAAQAHAAAEgDQAFgDAAgGQAAgGgEgDQgFgDgHABIggAAgAFHAqIAAhiIgzAAIAAgjICPAAIAAAjIgyAAIAABigAkTAqIAAiFIArAAIAABjIAtAAIAAhjIAqAAIAABjIAuAAIAAhjIAqAAIAACFgAojAqIAAhiIgzAAIAAgjICPAAIAAAjIgyAAIAABigAswAqIAAhiIgzAAIAABiIgrAAIAAiFICJAAIAACFg");
	this.shape.setTransform(22.1,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0202, new cjs.Rectangle(-72.1,-21.9,187.2,43.9), null);


(lib.txt0201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AojB3IAWg3Ig8iEIAwAAIAiBQIAhhQIArAAIhOC7gAreB2IAAi6IAqAAIAAAUQAAgCAGgGQAFgFAJgFQAJgEAOAAQASAAAOAIQAOAIAIAQQAIAQAAAVQAAAVgIAQQgIAQgOAIQgOAJgSAAQgOgBgJgEQgJgFgGgFIgGgIIAABIgAqsgZQgJAJAAAPQAAAOAJAKQAJAJAOAAQAPAAAJgJQAHgKABgOQgBgPgHgJQgJgJgPgBQgOABgJAJgAM4A8QgRgJgJgQQgJgQAAgUQAAgVAJgQQAJgQAQgIQAQgJAWAAQAVAAAQAJQARAIAJAQQAJAQAAAWIAAAGIhmAAQABANAJAJQAJAIAOAAQAIAAAFgCQAGgCADgCIAEgEIAqAAQgBAGgFAHQgDAIgJAGQgIAHgMAFQgNAEgRAAQgXAAgRgJgAN6gSQgCgLgIgGQgHgGgMAAQgLAAgIAGQgIAGgCALIA6AAIAAAAgAKZA8QgQgJgKgQQgKgQAAgUQAAgVAKgPQAKgQAQgJQARgJAWAAQAUAAARAJQARAJAKAQQAJAPAAAVQAAAUgJAQQgKAQgRAJQgRAJgUAAQgWAAgRgJgAKvgeQgIAEgDAIQgFAIAAAJQAAAJAFAIQADAHAIAFQAGAEALAAQAJAAAHgEQAHgFAEgHQADgIAAgJQAAgJgDgIQgEgIgHgEQgHgFgJAAQgLAAgGAFgADFA8QgQgJgKgQQgJgQAAgUQAAgVAJgQQAKgQAPgIQARgJAVAAQAVAAARAJQAQAIAJAQQAJAQAAAWIAAAGIhnAAQACANAJAJQAJAIAOAAQAIAAAFgCQAGgCADgCIAEgEIApAAQAAAGgEAHQgFAIgIAGQgIAHgMAFQgNAEgRAAQgXAAgRgJgAEIgSQgDgLgIgGQgHgGgMAAQgLAAgJAGQgHAGgDALIA8AAIAAAAgAhrA8QgQgIgJgQQgJgQAAgVQAAgVAJgQQAJgQAQgIQAQgJATAAQASAAANAFQANAFAHAIQAIAHAEAJQAEAJABAHIgpAAIgEgFQgDgDgFgDQgFgDgIAAQgJAAgGAFQgHAEgDAIQgEAIAAAJQAAAOAHAKQAJAJANABQAJAAAEgDQAGgDADgDIADgFIApAAQAAAHgFAJQgDAIgJAIQgHAIgNAFQgNAFgRAAQgUAAgQgJgAkJA8QgRgJgJgQQgKgQAAgUQAAgVAKgPQAJgQARgJQAQgJAWAAQAVAAAQAJQASAJAJAQQAJAPAAAVQAAAUgJAQQgJAQgSAJQgQAJgVAAQgWAAgQgJgAj0geQgHAEgEAIQgEAIAAAJQAAAJAEAIQAEAHAHAFQAHAEAKAAQAJAAAIgEQAGgFAEgHQAEgIAAgJQAAgJgEgIQgEgIgGgEQgIgFgJAAQgKAAgHAFgAI4BCIAAg0Ig2AAIAAA0IgrAAIAAiGIArAAIAAAwIA2AAIAAgwIAqAAIAACGgAFsBCIAAhjIgzAAIAAgjICOAAIAAAjIgxAAIAABjgAANBCIAAiGIBVAAQAXAAAMAKQANAJAAARQAAAIgEAGQgDAGgEAEQgFAEgFABQAGACAGADQAFAEAEAGQADAGAAAKQAAARgNAKQgMAKgZABgAA4AkIAiAAQAJAAAEgDQAEgDAAgHQAAgFgEgDQgEgDgJAAIgiAAgAA4gPIAgAAQAHAAAEgDQAEgDABgGQgBgGgDgDQgFgDgHABIggAAgAmiBCIAAiGIBtAAIAAAjIhCAAIAABjgAsiBCIhWhSIAABSIgsAAIAAi4IAsAAIAABQIBUhQIA6AAIheBZIBiBfg");
	this.shape.setTransform(53.3,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0201, new cjs.Rectangle(-44.4,-21.9,193.1,43.9), null);


(lib.txt0103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJmBZQgRgIgJgQQgKgRAAgVQAAgUAKgPQAJgQARgJQARgJAVAAQAVAAARAJQARAJAJAQQAKAPAAAUQAAAVgKARQgJAQgRAIQgRAJgVAAQgVAAgRgJgAJ7gBQgHADgEAJQgEAHAAAJQAAAKAEAIQAEAHAHAFQAHAFAKgBQAKABAHgFQAHgFADgHQAEgIAAgKQAAgJgEgHQgDgJgHgDQgHgFgKABQgKgBgHAFgAmgBZQgQgIgJgQQgJgQAAgWQAAgUAJgQQAJgPAQgJQAQgJAUAAQARAAANAFQANAFAIAIQAHAIAEAIQAFAIAAAHIgpAAIgEgFQgDgCgFgDQgFgCgIAAQgJgBgGAFQgHADgDAJQgEAHAAAJQAAAQAIAJQAIAJANABQAJAAAFgDQAFgDADgDIAEgFIAoAAQAAAHgEAJQgEAJgIAHQgIAIgNAFQgMAFgSAAQgUAAgQgJgACVBZQgOgIgIgPQgIgRgBgWQABgVAIgPQAIgPAOgJQAOgIARAAQAOAAAKAEQAJAFAFAEQAFAFABADIAAhLIAqAAIAAC+IgpAAIAAgUQgBACgGAGQgFAGgJAEQgKAFgOAAQgRAAgOgJgACqAEQgJAIAAAPQAAAQAJAJQAIAJAPAAQAPAAAIgJQAJgJAAgQQAAgPgJgIQgIgJgPAAQgPAAgIAJgApPBZQgOgIgIgPQgIgRAAgWQAAgVAIgPQAIgPAOgJQAOgIARAAQAOAAAJAEQAJAFAFAEQAFAFABADIAAgTIAqAAIAACGIgqAAIAAgUIgGAIQgEAGgKAEQgJAFgOAAQgRAAgOgJgAo0gBQgHADgDAJQgEAHAAAJQAAAKAEAIQADAHAHAFQAHAFAKgBQAJABAHgFQAHgFAEgHQADgIAAgKQAAgJgDgHQgEgJgHgDQgHgFgJABQgKgBgHAFgANRBfIAAhHQgBgNgHgIQgIgHgMAAQgNAAgIAHQgHAIAAANIAABHIgrAAIAAiGIArAAIAAAVQACgFAGgFQAGgGAJgEQAIgDAMAAQARgBAMAIQAMAIAHANQAHANAAAPIAABQgAH/BfIAAiGIAqAAIAACGgAG7BfQgXAAgMgLQgLgLAAgVIAAg3IgjAAIAAgkIAjAAIAAgyIAqAAIAAAyIAuAAIAAAkIguAAIAAAoQAAALAFAFQAEAFAMAAIAZAAIAAAlgAErBfIAAiGIArAAIAACGgAg9BfIAAi4ICaAAIAAAlIhuAAIAAAhIBBAAIAAAkIhBAAIAAAoIB4AAIAAAmgAjABfIg3g8IAAA8IgrAAIAAi+IArAAIAABsIA1g0IA1AAIhAA+IBEBIgAqxBfIAAi+IAqAAIAAC+gAt6BfIAAi4IBrAAQAeAAAQAOQAQANAAAXQgBAKgDAIQgEAHgGAFQgGAFgGACQAIACAHAGQAHAGAEAJQAEAJAAAMQAAAYgQAOQgQAOggABgAtOA7IA5AAQANAAAHgFQAHgFAAgKQAAgLgHgFQgHgFgNAAIg5AAgAtOgRIA4AAQALABAGgFQAGgEABgKQgBgKgGgDQgGgFgLAAIg4AAgAH+g4IAAgqIAsAAIAAAqgAEqg4IAAgqIAsAAIAAAqg");
	this.shape.setTransform(1.1,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0103, new cjs.Rectangle(-92.9,-21.9,185.9,43.9), null);


(lib.txt0102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABaB6IAAgxQgXgBgRgJQgTgJgJgPQgKgQgBgVQABgTAKgQQAJgQATgIQARgJAXgBIAAg2IArAAIAAA2QAYAAARAJQASAJAJAQQALAQAAATQAAAVgLAQQgJAQgSAJQgSAIgXABIAAAxgACFAlQASgBAJgJQAJgKAAgPQAAgNgJgKQgJgJgSgBgAA/gUQgJAJAAANQAAAPAJAJQAJAKASABIAAhEQgSABgJAKgAk8B6IAAi6IAqAAIAAAUQAAgCAGgGQAFgFAJgFQAJgEAOAAQASAAAOAIQAOAIAIAQQAIAQAAAUQAAAWgIAQQgIAQgOAIQgOAJgSAAQgOgBgJgEQgJgFgGgFIgGgIIAABIgAkKgVQgJAJAAAOQAAAPAJAKQAJAJAOAAQAPAAAJgJQAHgKABgPQgBgOgHgJQgJgJgPgBQgOABgJAJgAGuBAQgRgJgJgQQgKgQAAgVQAAgUAKgPQAJgQARgJQAQgJAWAAQAVAAAQAJQARAJAKAQQAJAPAAAUQAAAVgJAQQgKAQgRAJQgQAJgVAAQgWAAgQgJgAHDgaQgHAEgEAIQgEAIAAAIQAAAKAEAIQAEAHAHAFQAHAEAKAAQAJAAAIgEQAGgFAEgHQAEgIAAgKQAAgIgEgIQgEgIgGgEQgIgFgJAAQgKAAgHAFgAh0BAQgRgJgJgQQgKgQAAgVQAAgUAKgPQAJgQARgJQARgJAVAAQAWAAAQAJQARAJAJAQQAKAPAAAUQAAAVgKAQQgJAQgRAJQgQAJgWAAQgVAAgRgJgAhfgaQgGAEgFAIQgDAIAAAIQAAAKADAIQAFAHAGAFQAIAEAJAAQAKAAAHgEQAHgFADgHQAFgIAAgKQAAgIgFgIQgDgIgHgEQgHgFgKAAQgJAAgIAFgAm7BEQgNgFgIgIQgIgHgEgJQgEgIAAgHIAoAAIAFAGQACAEAFACQAGADAIAAQALAAAHgGQAIgFADgLIgsAAIAAgeIArAAQgCgJgIgGQgHgFgLAAQgIAAgEADQgGACgCAEIgFAGIgpAAQABgHAEgJQAEgIAIgIQAIgHANgFQAMgFASAAQAUAAAQAJQAQAIAJAQQAKAQAAAUQAAAWgKAQQgJAQgRAIQgQAJgUAAQgSAAgMgFgADhBGIAAgmIACAAQAIAAADgCQADgCACgFQACgGABgKIAHhHIB0AAIAACGIgqAAIAAhjIgnAAIgEApQgCAUgEANQgFANgLAGQgKAGgRAAgAJdBGIAAhjIgyAAIAAgjICOAAIAAAjIgyAAIAABjgAoZBGIgNggIhYAAIgNAgIgtAAIBRi4IAuAAIBQC4gAo2ABIgchAIgbBAIA3AAg");
	this.shape.setTransform(-0.3,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0102, new cjs.Rectangle(-72.1,-21.9,144.3,43.9), null);


(lib.txt0101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsB2IAAi5IArAAIAAAUQAAgDAFgFQAEgFAKgFQAJgFAOAAQASAAAOAIQAOAJAIAQQAIAPAAAWQAAAVgIAQQgIAPgOAJQgOAIgSAAQgOAAgJgFQgKgEgFgFIgFgIIAABHgAAGgYQgIAJAAAPQAAAOAIAJQAIAKAPAAQAPAAAIgKQAIgJABgOQgBgPgIgJQgIgKgPAAQgPAAgIAKgAEkA9QgOgJgIgPQgIgQAAgVQAAgWAIgPQAIgQAOgJQAOgIARAAQAOAAAJAEQAJAFAFAFQAFAFABACIAAgSIAqAAIAACFIgqAAIAAgUIgGAIQgEAGgKAEQgJAFgOAAQgRAAgOgIgAE/geQgHAFgDAIQgEAHAAAKQAAAJAEAHQADAIAHAEQAHAFAKAAQAJAAAHgFQAHgEAEgIQADgHAAgJQAAgKgDgHQgEgIgHgFQgHgEgJAAQgKAAgHAEgAi7A9QgOgJgIgPQgIgQAAgVQAAgWAIgPQAIgQAOgJQAOgIARAAQAOAAAJAEQAJAFAFAFQAFAFABACIAAgSIAqAAIAACFIgqAAIAAgUIgGAIQgEAGgKAEQgJAFgOAAQgRAAgOgIgAiggeQgHAFgDAIQgEAHAAAKQAAAJAEAHQADAIAHAEQAHAFAKAAQAJAAAHgFQAHgEAEgIQADgHAAgJQAAgKgDgHQgEgIgHgFQgHgEgJAAQgKAAgHAEgACiBCIAAhiIgzAAIAAgjICPAAIAAAjIgyAAIAABigAkVBCIhWhSIAABSIgsAAIAAi3IAsAAIAABQIBUhQIA6AAIheBZIBiBeg");
	this.shape.setTransform(0.8,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0101, new cjs.Rectangle(-44.4,-21.9,89,43.9), null);


(lib.planes_static = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C110D").s().p("AlFHTQhXgDiCgYQg8gNghgKIjZhOIhFgjIgFAGIgNAeIgJgPIAAgBIACgXIg2gfIgOBbIgXgQIgKhcIgggXQgfgYAGgJQACgDAGAAQAEgCAMAGQAMAEACACIAmAOIBTgnIAaAMIhFA6IA2AdIATgMIASgBIgTAcIgDADQAsAZAaAKQAtAWAQAFID3BMQCCAYBWADQBdAICWgNQCAgPB+gjQCAgoB4g7QBwg7BxhWQBthZBOhZQBahnA4hcQAohCA9h/IAbhBIgZBBQg3B2gvBLQg0BZhcBrQhOBYhtBcQhsBRh2BCQh4A8iCAnQiIAmh1ANQhgAIhIAAQgqAAgigDg");
	this.shape.setTransform(42.1,-27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C110D").s().p("Ag+BeQghgDgQgDIgvgKIgrgNIgngQQgKgDgZgOIgegSQgMgGgjgaQgGgEgKgKIgLgKIAAAAIgCACIgHAIIgCgGIAAAAIADgHIgOgPIgNAbIgGgHIAGgeIgIgMQgHgJADgDIACAAQACAAAHAGIAKAJIAfgFIAHAHIgcALIAOAPQABAAAGgDIAGADIgJAGIAAAAIALAMIAQANQAfAXAPAKIAeARIARAJQAKAGAIACQAdANAKADQAdAKAOADIAuAKIAxAHIAaABIAzAAIAagCIA1gHQASgDAjgHIAagHIAagIIAZgJIAZgKIAxgUIAwgZIgwAaIgwAUQgGADgtAQIgZAHIgbAIQgpAJgLABQgNADgpAFQgMABgOAAIgzAAIgagBgAGsg4IgVAQIgGAEg");
	this.shape_1.setTransform(-23.6,45.5,3.006,3.006,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.planes_static, new cjs.Rectangle(-152.6,-74.3,305.3,148.8), null);


(lib.plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C110D").s().p("Ai3FgIgQgBIAQAAQAyACBJgRQBJgVAsgbQAugXA5g0QAzg0AbgrQAagnAeg/IAUgxIAIgYQAFgOACgJQAMgnAIgvIAKhQIABgjIgCAAIgLABIADgFIAHgEIgBgUIgcAMIAAgJIAYgUIABgNQABgMAEAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIADAKIACAOIAaAQIABAKIgcgKIABAVIAHADIADAFIgMgBIgLB1QgIArgMAqIgkBhQghBEgXAiQgbArg0A1Qg7A0gsAXQgtAahJAVQhAAPgyAAIgJAAgAjyFcQgMgBgQgDIgbgHIgOgDIgmgMQgIgDgPgHIgTgJIATAJQAOAGAJADIAmANIAOADQAqAJANABIAQACg");
	this.shape.setTransform(119.4,106.5,3.05,3.05,0,0,0,-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.plane, new cjs.Rectangle(0,0,239.3,214.8), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-95,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-95,-125,189,251), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApGHFIAAuJISMAAIAAOJg");
	mask.setTransform(58.3,45.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F79E1B").s().p("AAMAHIAAgKIgDAIIgDAAIgEgIIAAAKIgCAAIAAgNIADAAIAEAJIAEgJIAEAAIAAANgAgKAHIAAgLIgEAAIAAgCIAMAAIAAACIgFAAIAAALg");
	this.shape.setTransform(113.9,57.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F79E1B").s().p("AkiEbQBAgyAkhJQAlhLAAhVQAAhUglhKQgkhKhAgyQBihNB8AAQCUAABqBpQBpBqAACUQAACVhpBqQhpBpiVAAQh9AAhhhNg");
	this.shape_1.setTransform(87.4,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB001B").s().p("Ai5D/QhphqAAiVQAAiUBphqQBqhpCUAAQA+AAA6AVQA4ATAuAlQhAAygkBKQglBKAABUQAABUAlBMQAkBJBAAyQguAlg4ATQg6AVg+AAQiUAAhqhpg");
	this.shape_2.setTransform(29.1,36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF5F00").s().p("AidEbIAAo1IE6AAIAAI1g");
	this.shape_3.setTransform(58.3,36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AIVBFIgDgCIgCgDIgBgEIABgEIACgDIADgCIAEAAIAEAAIADACIACADIAAAEIAAAEIgCADIgDACIgEABgAIWA1IgCACIgCACIgBADIABADIACACIACACIADAAIADAAIACgCIACgCIAAgDIAAgDIgCgCIgCgCIgDAAgAGhA1QgOgPAAgVQAAgVAOgPQAOgOAUAAQAUAAAKAOIAAgyIAVAAIAACFIgVAAIAAgLQgKAOgUAAQgUAAgOgOgAGxgEQgIAIAAANQAAANAIAIQAIAJANAAQAMAAAJgIQAIgJAAgNQAAgNgIgIQgJgJgMAAQgNAAgIAJgADgA1QgOgPAAgVQAAgVAOgPQAOgOAUAAQAUAAAKAOIAAgLIAVAAIAABeIgVAAIAAgLQgKAOgUAAQgUAAgOgOgADwgEQgIAIAAANQAAANAIAIQAIAJANAAQAMAAAJgIQAIgJAAgNQAAgNgIgIQgJgJgMAAQgNAAgIAJgACAA1QgOgOAAgWQAAgVAOgOQAPgPAWAAQAUAAAPAMIgKARQgNgJgMAAQgNAAgIAJQgIAHAAAOQAAANAIAJQAIAIANAAQAMAAANgIIAKAQQgOAMgVAAQgWAAgPgOgAg0A1QgOgOAAgWQAAgWAOgOQANgOAVAAQATAAAMAOQANAOAAAWIAAAIIhGAAQAEAXAYAAQAPAAAMgKIAKAPQgPAOgXAAQgVAAgOgOgAgsAIIAxAAQgEgWgUAAQgVAAgEAWgAiKAfIAAgqIgTAAIAAgTIATAAIAAgdIAVAAIAAAdIAiAAIAAATIgiAAIAAAqQAAAQAOAAQAJAAAJgFIAGARQgLAIgPAAQghAAAAgkgAkAA2IAJgQQANAKATAAQAWAAAAgLQAAgIgRgCIgKgCQghgEAAgXQAAgOALgIQALgJASAAQAYAAAPAKIgJARQgNgIgRAAQgSAAAAALQAAAGAQADIAKABQAiAFAAAYQAAAOgMAIQgMAJgUAAQgYAAgRgNgAlpA1QgOgPAAgVQAAgVAOgPQANgOAUAAQAUAAALAOIAAgLIAUAAIAABeIgUAAIAAgLQgLAOgUAAQgUAAgNgOgAlagEQgIAIAAANQAAANAIAIQAIAJANAAQANAAAIgIQAIgJAAgNQAAgNgIgIQgIgJgNAAQgNAAgIAJgAIbBAIgDgDIgBAAIAAADIgCAAIAAgIIAEAAIADAAIABACIgBACIgCABIADADgAIXA8IACAAIACgBIAAgBIgCgBIgCAAgAFRBAIAAheIAUAAIAAALQAKgOAPAAQAJAAAGADIgGAUQgGgDgHAAQgVAAAAAYIAAA1gAAwBAIAAheIAUAAIAAALQAKgOAPAAQAJAAAGADIgGAUQgGgDgHAAQgVAAAAAYIAAA1gAmfBAIAAg1QAAgYgVAAQgLAAgGAHQgGAGAAALIAAA1IgVAAIAAg1QAAgYgVAAQgXAAAAAYIAAA1IgVAAIAAheIAUAAIAAAMQAKgPASAAQAVAAALARQALgRAXAAQARABAKAKQAKAKAAAQIAAA8g");
	this.shape_4.setTransform(60.7,83.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,116.5,90.7), null);


(lib.flare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,0.502,1],-52.2,0,52.5,0).s().p("EgkTATcMAgAgm3MAonAAAMggAAm3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flare, new cjs.Rectangle(-232.4,-124.4,464.9,248.9), null);


(lib.CARD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(-115,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CARD, new cjs.Rectangle(-115,-74,231,148), null);


(lib.buttonn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap/CkQhEAAgwgwQgwgwAAhEQAAhDAwgwQAwgwBEAAIT/AAQBEAAAwAwQAwAwAABDQAABEgwAwQgwAwhEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.buttonn, new cjs.Rectangle(-80.4,-16.4,160.9,32.8), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3224").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,240,400), null);


(lib.AlfaLOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AoHBsIAAgcICJAAIAAAcgAiDBNIAAgmQgWgCgNgOQgNgPAAgUQAAgWANgOQANgPAWgCIAAglIAaAAIAAAlQAXACANAOQANAPAAAWQAAAUgNAPQgNAOgXACIAAAmgAhpAPQALgCAHgHQAFgHABgLQgBgMgFgIQgHgHgLgCgAiTggQgHAIABAMQgBALAHAHQAGAHAKACIAAg4QgKACgGAHgADaAeQgKgKABgQQAAgOAJgIQAKgJARAAIAZAAQAAgQgQAAQgPAAgCAKIgaAAQABgOAKgJQAMgLAUAAQAUAAAKALQAMALAAASIAAAhQgBAIAHAAIAAAXIgJAAQgPAAgFgLQgJANgTAAQgQAAgLgJgADrAEQAAAOAQAAQAJAAAEgFQAGgFAAgIIAAgGIgVAAQgPAAABAKgAglAeQgKgKAAgQQAAgOAJgIQAKgJARAAIAZAAQAAgQgQAAQgOAAgCAKIgaAAQAAgOALgJQAMgLATAAQAUAAALALQALALgBASIAAAhQABAIAGAAIAAAXIgJAAQgQAAgEgLQgKANgSAAQgQAAgKgJgAgVAEQAAAOARAAQAHAAAGgFQAFgFAAgIIAAgGIgUAAQgPAAAAAKgAHnAlIgmgpIAAApIgZAAIAAhjIAZAAIAAAnIAkgnIAfAAIgrAvIAvA0gAF6AlIAAgnIgkAAIAAAnIgZAAIAAhjIAZAAIAAAlIAkAAIAAglIAZAAIAABjgABdAlIAAiLIBeAAIAAAaIhDAAIAAAcIAdAAQAYAAAMALQANALAAAUQAAAUgNAMQgMALgYAAgAB4AMIAcAAQAWAAABgSQgBgSgWAAIgcAAgAkOAlIAAhjIAZAAIAAAeIASAAQATAAAKAJQAKAJAAAQQAAAOgIAKQgLALgTAAgAj1APIAQAAQAPAAAAgNQAAgMgPAAIgQAAgAk9AlIAAhMIgZAAIgBAhQgBAXgGAJQgHALgTAAIgEAAIAAgYQAIAAADgEQACgEABgNIABg2IBJAAIAABjgAmfAlIgJgdIg2AAIgKAdIgcAAIAth/QAGgRAQAAQAQAAAFARIArB/gAnWgPIAmAAIgSg5IAAAAg");
	this.shape.setTransform(0.1,0,1.02,1.02);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.AlfaLOGO, new cjs.Rectangle(-53,-11,106.1,22.1), null);


(lib.TXT05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0202 copy
	this.instance = new lib.txt0502();
	this.instance.parent = this;
	this.instance.setTransform(93,60);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:52,alpha:1},14,cjs.Ease.circOut).wait(25).to({y:44,alpha:0},14,cjs.Ease.circIn).wait(1));

	// txt0201 copy
	this.instance_1 = new lib.txt0501();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93,20);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:12,alpha:1},14,cjs.Ease.circOut).wait(25).to({y:4,alpha:0},14,cjs.Ease.circIn).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-7,158.4,72.2);


(lib.TXT04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0202 copy
	this.instance = new lib.txt0402();
	this.instance.parent = this;
	this.instance.setTransform(93,56);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:52,alpha:1},14,cjs.Ease.circOut).wait(25).to({y:48,alpha:0},14,cjs.Ease.circIn).wait(1));

	// txt0201 copy
	this.instance_1 = new lib.txt0401();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93,16);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:12,alpha:1},14,cjs.Ease.circOut).wait(25).to({y:8,alpha:0},14,cjs.Ease.circIn).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7,157.3,73.2);


(lib.TXT03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0202 copy
	this.instance = new lib.txt0302();
	this.instance.parent = this;
	this.instance.setTransform(93,59);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:52,alpha:1},14,cjs.Ease.circOut).wait(25).to({y:45,alpha:0},14,cjs.Ease.circIn).wait(1));

	// txt0201 copy
	this.instance_1 = new lib.txt0301();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93,19);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:12,alpha:1},14,cjs.Ease.circOut).wait(25).to({y:5,alpha:0},14,cjs.Ease.circIn).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.1,67.1);


(lib.TXT02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0103 copy
	this.instance = new lib.txt0203();
	this.instance.parent = this;
	this.instance.setTransform(90,73.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:65,alpha:1},14,cjs.Ease.circOut).wait(23).to({y:56.5,alpha:0},14,cjs.Ease.circIn).wait(1));

	// txt0102 copy
	this.instance_1 = new lib.txt0202();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70,44.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:36,alpha:1},14,cjs.Ease.circOut).wait(23).to({y:27.5,alpha:0},14,cjs.Ease.circIn).to({_off:true},1).wait(2));

	// txt0101 copy
	this.instance_2 = new lib.txt0201();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42,15.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:7,alpha:1},14,cjs.Ease.circOut).wait(23).to({y:-1.5,alpha:0},14,cjs.Ease.circIn).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,187.6,82);


(lib.TXT01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0103 copy
	this.instance = new lib.txt0103();
	this.instance.parent = this;
	this.instance.setTransform(90,72);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:65,alpha:1},14,cjs.Ease.circOut).wait(23).to({y:58,alpha:0},14,cjs.Ease.circIn).wait(1));

	// txt0102 copy
	this.instance_1 = new lib.txt0102();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70,43);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:36,alpha:1},14,cjs.Ease.circOut).wait(23).to({y:29,alpha:0},14,cjs.Ease.circIn).to({_off:true},1).wait(2));

	// txt0101 copy
	this.instance_2 = new lib.txt0101();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42,14);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:7,alpha:1},14,cjs.Ease.circOut).wait(23).to({y:0,alpha:0},14,cjs.Ease.circIn).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.2,77.7);


(lib.planeMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.plane();
	this.instance.parent = this;
	this.instance.setTransform(-118.1,-110.2,1,1,96,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.2,rotation:-29,x:-118},399).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356.7,-132.6,238.6,260.5);


(lib.MasterLOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-0.1,0.33,0.33,0,0,0,58.5,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MasterLOGO, new cjs.Rectangle(-19,-15,38.5,29.9), null);


(lib.LogoGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AlfaLOGO
	this.instance = new lib.AlfaLOGO();
	this.instance.parent = this;
	this.instance.setTransform(-40,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// MasterLOGO
	this.instance_1 = new lib.MasterLOGO();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// White
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0eF3IAArtMAo9AAAIAALtg");
	this.shape.setTransform(0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LogoGroup, new cjs.Rectangle(-131,-37,262.2,75), null);


(lib.LegalMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal_1();
	this.instance.parent = this;
	this.instance.setTransform(0,10);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},14,cjs.Ease.circOut).wait(65).to({y:-10,alpha:0},14,cjs.Ease.circIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-115,189,251);


(lib.CardMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtEJOQhkAAAAhkIAAvTQAAhkBkAAIaJAAQBkAAAABkIAAPTQAABkhkAAg");
	mask.setTransform(-3.8,-14.4);

	// flare
	this.instance = new lib.flare();
	this.instance.parent = this;
	this.instance.setTransform(-250,6);
	this.instance.alpha = 0.621;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({x:222,alpha:0},55,cjs.Ease.cubicInOut).wait(76));

	// card
	this.instance_1 = new lib.CARD();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-74,231,148);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Заказать copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABvAsQgHgEgFgIQgEgHAAgLQAAgKAEgHQAFgHAHgEQAHgFAIAAQAIABAEACQAFACADADQACADABACIAAgLIAMAAIAAA/IgMAAIAAgLIgDAFIgHAFQgGADgHAAQgIAAgHgEgAB1gFQgFADgCAFQgCAFgBAGQABAHACAFQACAFAFADQAFADAHAAQAGAAAFgDQAEgDADgFQACgFABgHQgBgGgCgFQgDgFgEgDQgFgDgGAAQgHAAgFADgAAnAtQgHgDgFgFQgDgFgBgFIAMAAIAEAEQACADAEABQAEACAGAAQAIAAAEgCQAFgCgBgGQABgEgEgCQgDgCgHAAIgKAAIAAgKIALAAQAFAAAEgDQACgCAAgEQAAgEgDgCQgFgCgIAAQgIAAgEADQgEACgCADIgMAAQABgEAFgEQADgFAHgDQAGgDAIAAQAOAAAHAFQAIAFAAAJQgBAFgDAEQgDADgEABQAFACADADQAEAEAAAFQAAAHgEAEQgDAFgHACQgGADgJAAQgKAAgGgDgAgoAsQgHgEgEgIQgEgHgBgLQABgKAEgHQAEgHAHgEQAHgFAJAAQAHABAFACQAEACADADQADADAAACIAAgLIALAAIAAA/IgLAAIAAgLIgCAFIgIAFQgFADgHAAQgJAAgHgEgAghgFQgFADgCAFQgDAFgBAGQABAHADAFQACAFAFADQAEADAHAAQAGAAAFgDQAFgDADgFQACgFAAgHQAAgGgCgFQgDgFgFgDQgFgDgGAAQgHAAgEADgAjAAsQgIgEgDgIQgFgHAAgLQAAgKAFgHQADgHAIgEQAHgFAJAAQAGABAFACQAFACADADQADADAAACIAAgLIAMAAIAAA/IgMAAIAAgLIgDAFIgIAFQgEADgHAAQgJAAgHgEgAi5gFQgFADgDAFQgDAFAAAGQAAAHADAFQADAFAFADQAEADAHAAQAGAAAEgDQAFgDADgFQADgFgBgHQABgGgDgFQgDgFgFgDQgEgDgGAAQgHAAgEADgAkWAtQgIgCgFgEIgIgJQgDgFAAgFIAMAAQACAEAEADQADAEAGACQAGADAJAAQANAAAIgFQAGgEAAgIQAAgHgFgDQgHgEgLAAIgOAAIAAgKIAOAAQALgBAFgDQAFgEAAgIQAAgGgGgEQgGgEgOAAQgHAAgGACQgGADgDADQgFAEgBADIgNAAQABgEACgEQADgFAFgEQAFgEAHgDQAIgDAKAAQAOAAAIAEQAJADADAFQAFAGAAAIQAAAFgCAFQgCAEgDADIgIAEQAFAAAEACIAGAHQACAEAAAGQAAANgKAIQgKAIgUAAQgKAAgIgDgAD3AuIAAg/IALAAIAAAUIAUAAQAJAAAGADQAFACADAFQADAFgBAGQABAGgDAFQgDAFgFADQgGADgJAAgAECAkIATAAQAHAAADgDQAEgDAAgGQAAgFgEgDQgDgDgHAAIgTAAgADGAuIAAg0IgaAAIAAgLIBAAAIAAALIgaAAIAAA0gAhMAuIgjgdIAAAdIgMAAIAAg/IAMAAIAAAbIAhgbIARAAIgmAeIAoAhg");
	this.shape.setTransform(0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Buttton
	this.instance = new lib.buttonn();
	this.instance.parent = this;
	this.instance.setTransform(0.4,0.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.298)",0,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt, new cjs.Rectangle(-85,-17,174,46), null);


(lib.Planes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plane 2
	this.instance = new lib.planeMov("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-75.3,-49.9,1,1,53);
	this.instance.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(500));

	// plane 1
	this.instance_1 = new lib.planeMov("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.7,13.4);
	this.instance_1.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(500));

	// static planes
	this.instance_2 = new lib.planes_static();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-90.1,61.6,1,1,10,0,0,-0.1,0.1);
	this.instance_2.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(500));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.9,-381.9,486.8,534.8);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGOGROUP
	this.instance = new lib.LogoGroup();
	this.instance.parent = this;
	this.instance.setTransform(120,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(387));

	// BUTT
	this.instance_1 = new lib.butt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,355,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({regX:0.4,regY:2.4,scaleX:0.65,scaleY:0.65,x:120.2,y:356.5,alpha:0.416},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:356.7,alpha:0.606},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:356.9,alpha:0.723},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:357,alpha:0.803},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:357.1,alpha:0.86},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:120.3,alpha:0.901},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:357.2,alpha:0.932},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.955},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.971},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:357.3,alpha:0.983},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:120,y:355,alpha:1},0).wait(324).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0},13,cjs.Ease.circIn).to({_off:true},1).wait(26));

	// LEGAL
	this.instance_2 = new lib.LegalMov("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(121,199);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(276).to({_off:false},0).wait(111));

	// TXT05
	this.instance_3 = new lib.TXT05("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(122.5,129.5,1,1,0,0,0,94.5,33.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(220).to({_off:false},0).to({_off:true},56).wait(111));

	// TXT04
	this.instance_4 = new lib.TXT04("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(122.5,129.5,1,1,0,0,0,94.5,33.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(165).to({_off:false},0).to({_off:true},56).wait(166));

	// TXT03
	this.instance_5 = new lib.TXT03("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(122.5,129.5,1,1,0,0,0,94.5,33.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110).to({_off:false},0).to({_off:true},56).wait(221));

	// TXT02
	this.instance_6 = new lib.TXT02("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(120.5,120.5,1,1,0,0,0,94.5,33.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55).to({_off:false},0).to({_off:true},56).wait(276));

	// TXT01
	this.instance_7 = new lib.TXT01("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(116,125.7,1,1,0,0,0,90,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},56).wait(331));

	// CARD
	this.instance_8 = new lib.CardMov("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(125,285);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:265,alpha:1,startPosition:14},14,cjs.Ease.circOut).wait(250).to({startPosition:99},0).to({y:255,alpha:0,startPosition:110},11,cjs.Ease.circIn).wait(112));

	// Planes
	this.instance_9 = new lib.Planes("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(74,180,1,1,-32);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({alpha:0.5,startPosition:9},9).wait(343).to({startPosition:439},0).to({alpha:0,startPosition:449},10).to({_off:true},1).wait(15));

	// BG
	this.instance_10 = new lib.BG();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(387));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-13,263.2,421);


// stage content:
(lib.alfamaster_aeroflot19_240x400_reviewv3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

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
	this.shape_1.setTransform(1,1,1,1,0,0,0,-119,-199);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109,187,262.2,414);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F66FE7A2AC3D5941AE55BF9D2D3ACE18'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;