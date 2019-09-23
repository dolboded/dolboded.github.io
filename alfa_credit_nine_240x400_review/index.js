(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
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



(lib.clouds = function() {
	this.initialize(img.clouds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,499,141);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,21);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,433,328);// helper functions:

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


(lib.TXT02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4362E").s().p("AlOP/IAAgkIADAAQAJAAADgEQAEgFABgOIAHhFIBuAAIAAB/IgpAAIAAhdIglAAIgDAnQgCAegKAMQgLANgXAAgAhHP+IAAgwIg0AAIAAAwIgnAAIAAh/IAnAAIAAAuIA0AAIAAguIAnAAIAAB/gAmNP+IAAhZIgnBZIgaAAIgmhYIAABYIglAAIAAh/IA3AAIAjBNIAjhNIA2AAIAAB/gAmxKGQhBhHgkhfQgihXgEhgIEqAAQAGBYAuBBQBEBfCIAAQCQABBOhfQBEhVAAiHIAAgPQAAiFhPhTQhQhViDAAQhqABhIA1QgwAhgXAuIkRAAIAAtjIQRAAIAAEAIr3AAIAAFpQAsg3BQglQBbgsBpAAQBqAABdAmQBdAnBGBHQBHBJAmBkQAoBnAAB9IAAASQAAB5gpBqQgoBrhNBPQhOBRhsAsQhxAtiGAAQkIAAiXimgAnAuDIAAgbIhCAAIAAAbIgaAAIAAg0IAJAAQADgGADgJQAEgJABgPIAEgeIBOAAIAABFIAQAAIAAA0gAntvcIgDAQIgDAMIgEAJIAlAAIAAgsIgbAAgAmEujQgMgFgGgMQgIgLABgOQgBgPAIgKQAGgLAMgHQALgGAOAAQAQAAALAGQALAHAHALQAGAKABAPQgBAOgGALQgHAMgLAFQgLAHgQAAQgOAAgLgHgAl2viQgFADgDAGQgDAFAAAHQAAAGADAGQADAFAFAEQAFACAGAAQAIAAAEgCQAFgEADgFQADgGAAgGQAAgHgDgFQgDgGgFgDQgEgCgIAAQgGAAgFACg");
	this.shape.setTransform(0.3,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-109.7,114.9,219.4);


(lib.TXT01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4362E").s().p("AgNO5QAagrADggIghAAIAAhJIBFAAIAABBQABArgYAogAJ6NiQgZgYAAgjQAAgkAZgYQAXgXAjAAQAkAAAYAXQAYAYAAAkQAAAjgYAYQgYAXgkAAQgjAAgXgXgAKYMKQgKALAAASQAAAQAKAMQAMAMAQAAQARAAAMgMQALgLgBgRQABgSgLgLQgMgMgRAAQgQAAgMAMgAG3N0IDjk7IA0AAIjiE7gACYNuIBch2QgSALgZAAQgtgBgcgdQgcgdAAgxQAAgxAhggQAhggA4AAQA4AAAiAgQAfAfAAAyQAAAjgOAeQgLAWgcAkIhGBcgACwJtQgQAQAAAaQAAAbAQARQARARAdAAQAcAAARgRQARgRAAgbQAAgagRgQQgRgRgcgBQgdABgRARgAnmNuIIMqbQhhA1iMAAQh9AAhrgqQhpgqhNhPQhOhQgphtQgrhyAAiIQAAiCAshwQAshwBThTQBWhVB3gtQB7gvCWgBQCXAAB6AvQB3AsBTBTQBTBSArBwQArBxAACGQgBC5hWCrQg5B0iVDCImjImgAmqpmQhnBrAACpQAACvBnBrQBsBwDAAAQCzAABuhwQBshvAAirQAAinhnhtQhvh0i3AAQi+AAhuB0gAGWLBQgYgYAAgjQAAgjAYgYQAYgYAjAAQAkAAAXAYQAYAYAAAjQAAAjgYAYQgXAYgkAAQgjAAgYgYgAG1JpQgLAMABARQgBASALALQALAMARAAQARAAALgMQALgLAAgSQAAgRgLgMQgLgLgRAAQgRAAgLALg");
	this.shape.setTransform(0.6,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// кредит от copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4362E").s().p("AlqBCIAAiBIAdAAIAAAOIAEgFQADgEAHgDQAGgDAKAAQAMAAAKAGQAKAFAFALQAGALAAAPQAAAPgGAKQgFALgKAGQgKAGgMAAQgKAAgGgEQgHgDgDgDIgFgGIAAAygAlIghQgFAHgBAKQABAKAFAGQAGAGALABQAKgBAGgGQAFgGAAgKQAAgKgFgHQgGgGgKAAQgLAAgGAGgAgsA5IAAgbIhDAAIAAAbIgaAAIAAg0IAJAAQAEgFADgJQADgJACgPIAEgeIBOAAIAABEIAQAAIAAA0gAhZgfIgDAQIgDAMIgEAIIAkAAIAAgrIgaAAgAEkAaQgMgGgGgLQgHgKAAgPQAAgOAHgLQAGgLAMgHQALgGAPAAQAPAAALAGQAMAHAGALQAHALAAAOQAAAPgHAKQgGALgMAGQgLAGgPAAQgPAAgLgGgAEygkQgFADgCAFQgDAFAAAHQAAAHADAFQACAEAFAEQAFADAHAAQAHAAAEgDQAFgEADgEQADgFAAgHQAAgHgDgFQgDgFgFgDQgEgDgHAAQgHAAgFADgAjcAaQgMgHgGgLQgHgKAAgOQAAgPAHgLQAGgLALgGQALgGAPAAQAPAAALAGQAMAGAGALQAGALAAAQIAAAFIhHAAQABAJAGAEQAGAGAKAAQAGAAAEgBIAFgDIADgDIAdAAQAAAEgDAFQgDAGgGAEQgFAFgJADQgJADgMAAQgQAAgLgGgAiugcQgCgHgGgEQgFgFgIAAQgIAAgFAFQgFAEgCAHIApAAIAAAAgAGgAeIAAhEIgiAAIAAgZIBiAAIAAAZIgjAAIAABEgACRAeIAAhEIgjAAIAAgZIBjAAIAAAZIgjAAIAABEgABAAeIAAg3IgpA3IgbAAIAAhdIAbAAIAAA4IApg4IAdAAIAABdgAmbAeIgngoIAAAoIgdAAIAAhdIAdAAIAAAmIAmgmIAkAAIgsAtIAvAwg");
	this.shape_1.setTransform(1,-91.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.6,-112.9,155.8,226.7);


(lib.MAN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man();
	this.instance.parent = this;
	this.instance.setTransform(-217,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MAN, new cjs.Rectangle(-217,-164,433,328), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-102,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-11,203,21);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clouds();
	this.instance.parent = this;
	this.instance.setTransform(-251,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(-251,-71,499,141), null);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIFBBIAPggIgfhCIAOAAIAXAzIAYgzIANAAIgtBigADDAaQgKgKAAgQQAAgPAKgKQAJgKAOAAQASAAAHAOIAAgMIAMAAIAABDIgMAAIAAgLQgJANgQAAQgOAAgJgKgADMgQQgGAHAAAJQAAAKAGAHQAHAIAKAAQAJAAAHgIQAGgHAAgKQAAgJgGgHQgHgHgJAAQgKAAgHAHgAB2AdQgIgHgCgIIANAAQAGAKAPABQASAAAAgKQAAgKgPABIgLAAIAAgKIAMAAQANAAAAgKQAAgJgSAAQgOAAgFAKIgMAAQACgJAIgGQAJgHAMAAQAeAAAAAVQAAALgLADQANACAAANQAAAKgJAGQgIAFgOAAQgOAAgKgHgAkyAaQgKgKAAgQQAAgPAKgKQAJgKAOAAQASAAAHAOIAAgMIAMAAIAABDIgMAAIAAgLQgJANgQAAQgOAAgJgKgAkpgQQgGAHAAAJQAAAKAGAHQAHAIAKAAQAKAAAGgIQAGgHAAgKQAAgJgGgHQgGgHgKAAQgKAAgHAHgAnCAaQgKgLAAgPQAAgNAKgMQAKgJAPgBQAQAAAJAKQAGAGABAIIgNAAQgEgMgPAAQgKAAgGAHQgGAHAAAJQAAAKAGAHQAGAIAKAAQAOAAAGgMIAMAAQgBAHgGAGQgKAKgPAAQgOAAgLgKgAovAWQgPgPAAgUQAAgWAPgOQAOgPAWAAQAWAAAOAPQAOAOAAAWQAAATgOAQQgOAOgWAAQgWAAgOgOgAolgoQgLAKAAARQAAAPALALQAKAKAQAAQAQAAALgKQAJgLAAgPQAAgRgJgKQgLgMgQAAQgQAAgKAMgAHjAiIgmgeIAAAeIgMAAIAAhDIAMAAIAAAeIAkgeIASAAIgoAhIApAigAFjAiIAAhDIAjAAQAYABAAARQAAAMgKADQAMADAAAMQAAATgZAAgAFvAXIAYAAQAMAAAAgJQAAgJgMABIgYAAgAFvgFIAXAAQAMAAAAgIQAAgJgMAAIgXAAgAFBAiIAAgYIgUAAIgQAYIgPAAIASgaQgQgEAAgPQAAgJAGgHQAHgFALgBIAlAAIAABDgAEdgLQAAALANgBIAXAAIAAgUIgXAAQgNAAAAAKgAAKAiIAAhDIAMAAIAAAWIAVAAQAbAAAAAWQAAAKgHAGQgHAHgNAAgAAWAXIAUAAQAPAAAAgMQAAgLgPAAIgUAAgAgqAiIAAg3IgbAAIAAgMIBDAAIAAAMIgbAAIAAA3gAheAiIAAgyIgnAyIgNAAIAAhDIANAAIAAAyIAngyIAMAAIAABDgAjhAiIAAhDIAkAAQAYABAAARQAAAMgLADQANADAAAMQAAAIgIAGQgHAFgLAAgAjUAXIAYAAQAMAAAAgJQAAgJgMABIgYAAgAjUgFIAXAAQALAAAAgIQAAgJgLAAIgXAAgAlpAiIAAg3IgbAAIAAgMIBEAAIAAAMIgcAAIAAA3g");
	this.shape.setTransform(1.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4362E").s().p("ApcCmQhFAAgwgxQgxgwAAhFQAAhDAxgyQAwgwBFAAIS5AAQBEAAAxAwQAxAyAABDQAABFgxAwQgxAxhEAAg");
	this.shape_1.setTransform(0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt, new cjs.Rectangle(-77,-16.6,154.2,33.8), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E2EAF3","#BDD1E5","#A7C1DC","#9EBBD8"],[0,0.231,0.565,0.831,1],0,229.5,0,-229.5).s().p("EgSvAj3MAAAhHtMAlfAAAMAAABHtg");
	this.shape.setTransform(120,229.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,240,459.1), null);


(lib.ALFALOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4362E").s().p("AqOCGIAAgkICtAAIAAAkgAimBfIAAgwQgcgCgRgSQgRgTAAgaQAAgbARgTQARgSAcgCIAAgvIAhAAIAAAvQAbACASASQAQASAAAcQAAAagQATQgSASgbACIAAAwgAiFARQAOgCAHgKQAIgIAAgPQAAgPgIgJQgHgKgOgCgAi7gqQgIAJAAAPQAAAPAIAIQAIAKANACIAAhHQgNACgIAKgAETAjQgMgMAAgUQAAgSALgKQAMgLAXAAIAfAAQAAgVgUAAQgKAAgHAFQgDADgBAFIgiAAQACgSANgLQAPgOAZAAQAYAAAPAOQAOAOAAAXIAAAqQAAAFACACQACACAEAAIAAAdIgLAAQgUAAgGgNQgLARgZAAQgUAAgNgNgAEnADQAAARAWAAQAKAAAHgGQAGgGAAgKIAAgIIgaAAQgTAAAAANgAgwAjQgMgMAAgUQAAgSAMgKQAMgLAWAAIAeAAQAAgVgTAAQgKAAgGAFQgFADAAAFIghAAQACgSANgLQAPgOAYAAQAYAAAOAOQAOAOAAAXIAAAqQAAAFACACQACACAEAAIAAAdIgLAAQgTAAgHgNQgLARgXAAQgVAAgNgNgAgbADQAAARAVAAQAKAAAGgGQAHgGgBgKIAAgIIgYAAQgTAAAAANgAJmAsIgxg0IAAA0IggAAIAAh9IAgAAIAAAyIAtgyIApAAIg2A8IA6BBgAHcAsIAAgwIgtAAIAAAwIggAAIAAh9IAgAAIAAAvIAtAAIAAgvIAgAAIAAB9gAB2AsIAAivIB2AAIAAAgIhVAAIAAAkIAkAAQAeAAAQAOQAQAOAAAZQAAAagQAOQgPAOgfAAgACXAMIAjAAQAcAAAAgWQABgLgIgFQgIgGgNAAIgjAAgAlXAsIAAh9IAhAAIAAAmIAXAAQAXAAAMALQANAMABAUQgBASgKAMQgNAOgYAAgAk2ARIAUAAQATAAgBgRQABgPgTAAIgUAAgAmQAsIAAhgIgfAAIgBAqQgBAdgJAMQgJANgXAAIgGAAIAAgdQALAAADgGQADgFAAgRIAChEIBeAAIAAB9gAoLAsIgMgkIhFAAIgMAkIgjAAIA1iXQAFgNAFgFQAIgIANAAQAOAAAHAIQAFAFAFANIAyCXgApRgVIAxAAIgYhIIgBAAg");
	this.shape.setTransform(0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ALFALOGO, new cjs.Rectangle(-65,-13,131.1,26.9), null);


(lib.CLOUDS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud
	this.instance = new lib.cloud();
	this.instance.parent = this;
	this.instance.setTransform(361,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1},237).wait(1));

	// cloud
	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-359},237).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-71,859,141);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BUTT
	this.instance = new lib.butt();
	this.instance.parent = this;
	this.instance.setTransform(120,336);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(238));

	// LEGAL
	this.instance_1 = new lib.legal_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,383);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(238));

	// LOGO
	this.instance_2 = new lib.ALFALOGO();
	this.instance_2.parent = this;
	this.instance_2.setTransform(83,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(238));

	// MAN
	this.instance_3 = new lib.MAN();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,236);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(238));

	// CLOUD
	this.instance_4 = new lib.CLOUDS("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.5,325.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(238));

	// TXT02
	this.instance_5 = new lib.TXT02("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(327,170);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(118).to({_off:false},0).wait(1).to({regX:0.3,regY:7.3,x:326.9,y:177.3},0).wait(1).to({x:325.8},0).wait(1).to({x:323.7},0).wait(1).to({x:320.3},0).wait(1).to({x:315.5},0).wait(1).to({x:308.4},0).wait(1).to({x:298.4},0).wait(1).to({x:283.7},0).wait(1).to({x:260.9},0).wait(1).to({x:222.3},0).wait(1).to({x:168.7},0).wait(1).to({x:131.2},0).wait(1).to({x:109.5},0).wait(1).to({x:95.8},0).wait(1).to({x:86.8},0).wait(1).to({x:80.7},0).wait(1).to({x:76.6},0).wait(1).to({x:74.1},0).wait(1).to({x:72.7},0).wait(1).to({regX:0,regY:0,x:72,y:170},0).wait(79).to({startPosition:0},0).wait(1).to({regX:0.3,regY:7.3,x:71.9,y:177.3},0).wait(1).to({x:70.6},0).wait(1).to({x:68.3},0).wait(1).to({x:64.5},0).wait(1).to({x:59},0).wait(1).to({x:51.1},0).wait(1).to({x:39.9},0).wait(1).to({x:23.2},0).wait(1).to({x:-2.8},0).wait(1).to({x:-47.3},0).wait(1).to({x:-107.7},0).wait(1).to({x:-148.5},0).wait(1).to({x:-172},0).wait(1).to({x:-186.9},0).wait(1).to({x:-196.8},0).wait(1).to({x:-203.5},0).wait(1).to({x:-207.9},0).wait(1).to({x:-210.7},0).wait(1).to({x:-212.2},0).wait(1).to({regX:0,regY:0,x:-213,y:170},0).wait(1));

	// TXT01
	this.instance_6 = new lib.TXT01("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(320,173);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({x:65},19,cjs.Ease.cubicInOut).wait(80).to({startPosition:0},0).wait(1).to({regX:0.6,regY:7.9,x:65.2,y:180.9},0).wait(1).to({x:63.9},0).wait(1).to({x:61.6},0).wait(1).to({x:57.8},0).wait(1).to({x:52.4},0).wait(1).to({x:44.5},0).wait(1).to({x:33.3},0).wait(1).to({x:16.9},0).wait(1).to({x:-8.6},0).wait(1).to({x:-51.7},0).wait(1).to({x:-111.6},0).wait(1).to({x:-153.5},0).wait(1).to({x:-177.8},0).wait(1).to({x:-193},0).wait(1).to({x:-203.2},0).wait(1).to({x:-210},0).wait(1).to({x:-214.6},0).wait(1).to({x:-217.4},0).wait(1).to({x:-218.9},0).wait(1).to({regX:0,regY:0,x:-220,y:173},0).wait(100));

	// BG
	this.instance_7 = new lib.BG();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,229.5,1,1,0,0,0,120,229.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(238));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268,-13,1028.5,472.1);


// stage content:
(lib.alfa_credit_nine_240x400_review = function(mode,startPosition,loop) {
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
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.5,199,859,460.1);
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
		{src:"clouds.png", id:"clouds"},
		{src:"legal.png", id:"legal"},
		{src:"man.png", id:"man"}
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