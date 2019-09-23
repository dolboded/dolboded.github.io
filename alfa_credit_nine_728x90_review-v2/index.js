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
p.nominalBounds = new cjs.Rectangle(0,0,184,23);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,710,220);


(lib.mnt = function() {
	this.initialize(img.mnt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,886,196);// helper functions:

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

	// flash0.ai copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4362E").s().p("AjvEIQg0g6gEhUIB5AAQADAjASAbQAcAnA3AAQA7AAAegnQAcgiAAg3IAAgGQAAg2ggghQgggig1AAQgrAAgeAVQgTANgJATIhvAAIAAlfIGmAAIAABnIkzAAIAACUQARgXAhgPQAlgRArgBQBXAAA7A8QA8A+AABkIAAAHQAABlhABDQhDBFhsAAQhrAAg+hDgAoCFLIAAgeIhPAAIAAAeIgfAAIAAg6IALAAQALgQADgdIAEgiIBdAAIAABPIATAAIAAA6gAo4DlQgEAfgHANIArAAIAAg0IgfAAgAnHEfQgRgQAAgYQAAgYARgRQARgPAaAAQAaAAARAPQASARAAAYQAAAYgSAQQgRAQgaAAQgaAAgRgQgAmvDkQgHAIAAALQAAAMAHAHQAIAIALAAQAMAAAHgIQAHgHAAgMQAAgLgHgIQgHgIgMAAQgLAAgIAIgAFtEtIAAggIADAAQAIAAADgDQADgEABgMIAFg6IBeAAIAABtIgiAAIAAhRIggAAIgDAiQgCAZgIALQgJALgUAAgAJPEtIAAgrIgsAAIAAArIgiAAIAAhtIAiAAIAAAmIAsAAIAAgmIAiAAIAABtgAE3EtIAAhOIghBOIgWAAIghhNIAABNIggAAIAAhtIAwAAIAdBAIAehAIAuAAIAABtg");
	this.shape.setTransform(559.5,-126.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(497,-160,125.1,67.1);


(lib.TXT01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4362E").s().p("AB8HuQAWgiACgaIgcAAIAAg8IA5AAIAAA1QAAAlgTAegAOBGbQgfgfAAgtQAAgvAfgfQAggfAuAAQAuAAAfAfQAfAfAAAvQAAAtgfAfQgfAgguAAQguAAgggggAOqEoQgOAQAAAXQAAAWAOAPQAPAPAWAAQAWAAAOgPQAOgPAAgWQAAgXgOgQQgOgPgWAAQgWAAgPAPgAKEGzIEombIBFAAIkoGbgAEsGzIB2iXQgYAOgfAAQg5AAgkgmQgkglAAg+QAAg+AqgpQAqgpBHAAQBIAAArApQApAoAAA/QAAAsgTAnQgOAcgjAtIhaB2gAFLBrQgUAWAAAgQAAAjAUAVQAWAWAlAAQAjAAAWgWQAVgVAAgjQAAgggUgWQgWgWgkAAQglAAgWAWgAn/GiQgRgQAAgZQAAgZARgQQAQgQAaAAQAZAAARAQQARAQAAAZQAAAZgRAQQgRAQgZAAQgaAAgQgQgAnoFmQgHAHAAAMQAAAMAHAIQAHAHAMAAQALAAAHgHQAHgIAAgMQAAgMgHgHQgHgIgLAAQgMAAgHAIgAloGvIAAhPIgoAAIAAgdIByAAIAAAdIgoAAIAABPgAjFGuIEIlQQgyAbhFAAQiBgBhQhSQhShTAAiLQAAiGBXhVQBahaCXAAQCXgBBZBYQBUBVAACJQAABegrBXQgdA6hLBhIjUEWgAinlCQg0A2AABUQAABZA0A3QA3A3BhAAQBaAAA4g3QA2g5AAhXQAAhTg0g3Qg4g7hcAAQhgAAg4A7gAuzElIAAiVIAhAAIAAAQQADgFAHgFQALgIAOAAQAVAAAOAPQAPAQAAAZQAAAZgPAQQgNAPgWAAQgPAAgLgHQgHgFgCgFIAAA4gAuLCyQgHAIAAAMQAAAMAHAIQAHAHALAAQAMAAAHgHQAGgIAAgMQAAgMgGgIQgHgHgMAAQgLAAgHAHgApEEbIAAgfIhNAAIAAAfIgeAAIAAg7IALAAQAKgRADgdIAFgiIBaAAIAABQIASAAIAAA7gAp4C0QgEAfgHANIAqAAIAAg0IgeAAgAscDuQgQgPAAgZQAAgZAQgQQAQgQAZAAQAaAAAQAQQAQAQAAAaIAAAFIhSAAQABALAHAGQAIAHAKAAQAPAAAGgIIAiAAQgCAMgMAKQgQANgZAAQgbgBgQgQgAsLC4IAwAAQgFgSgTAAQgTAAgFASgAlmD8IAAhQIgoAAIAAgcIByAAIAAAcIgpAAIAABQgAnDD8IAAhAIgvBAIghAAIAAhsIAhAAIAABAIAvhAIAhAAIAABsgAvsD8IgtgvIAAAvIghAAIAAhsIAhAAIAAAsIAsgsIAqAAIgzAzIA2A5gAJZDKQgggfAAguQAAguAggfQAfgfAuAAQAuAAAfAfQAgAfAAAuQAAAuggAfQgfAfguAAQguAAgfgfgAKCBXQgOAPAAAXQAAAXAOAPQAOAPAWAAQAWAAAPgPQAOgPAAgXQAAgXgOgPQgPgOgWAAQgWAAgOAOg");
	this.shape.setTransform(276.3,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168,-193,216.8,99);


(lib.mnt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mnt();
	this.instance.parent = this;
	this.instance.setTransform(-221.5,-49,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mnt_1, new cjs.Rectangle(-221.5,-49,443,98), null);


(lib.MAN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man();
	this.instance.parent = this;
	this.instance.setTransform(124,-225,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MAN, new cjs.Rectangle(124,-225,355,110), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-103,-224);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-224,184,23);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clouds();
	this.instance.parent = this;
	this.instance.setTransform(248.4,-71,1.001,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(-251,-71,499.4,141), null);


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

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E2EAF3","#BDD1E5","#A7C1DC","#9EBBD8"],[0,0.231,0.565,0.831,1],0,45.2,0,-45.1).s().p("Eg47AHEIAAuHMBx3AAAIAAOHg");
	this.shape.setTransform(365,45.5,1.002,1.007);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,730,91), null);


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

	// cloud copy
	this.instance_2 = new lib.cloud();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-359,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-719},237).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-610,-71,1219.4,141);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BUTT
	this.instance = new lib.butt();
	this.instance.parent = this;
	this.instance.setTransform(617,45,0.9,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(238));

	// LEGAL
	this.instance_1 = new lib.legal_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,283);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(238));

	// LOGO
	this.instance_2 = new lib.ALFALOGO();
	this.instance_2.parent = this;
	this.instance_2.setTransform(99,31,1.246,1.246);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(238));

	// MAN
	this.instance_3 = new lib.MAN();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,236);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(238));

	// CLOUD
	this.instance_4 = new lib.CLOUDS("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(622,131);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(238));

	// MNT
	this.instance_5 = new lib.mnt_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(457,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(238));

	// TXT02 copy
	this.instance_6 = new lib.TXT02("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-213,302.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({_off:false},0).wait(1).to({regX:559.5,regY:-126.9,x:346.5,y:175.7},0).wait(1).to({y:175.1},0).wait(1).to({y:174},0).wait(1).to({y:172.3},0).wait(1).to({y:169.7},0).wait(1).to({y:166},0).wait(1).to({y:160.8},0).wait(1).to({y:153},0).wait(1).to({y:140.9},0).wait(1).to({y:120.2},0).wait(1).to({y:92},0).wait(1).to({y:73},0).wait(1).to({y:62},0).wait(1).to({y:55.1},0).wait(1).to({y:50.5},0).wait(1).to({y:47.4},0).wait(1).to({y:45.3},0).wait(1).to({y:44},0).wait(1).to({y:43.3},0).wait(1).to({regX:0,regY:0,x:-213,y:170},0).wait(80).to({startPosition:0},0).wait(1).to({regX:559.5,regY:-126.9,x:346.5,y:42.6},0).wait(1).to({y:42.1},0).wait(1).to({y:41.7},0).wait(1).to({y:41.1},0).wait(1).to({y:40.5},0).wait(1).to({y:39.8},0).wait(1).to({y:39},0).wait(1).to({y:38},0).wait(1).to({y:36.8},0).wait(1).to({y:35.4},0).wait(1).to({y:33.5},0).wait(1).to({y:31.2},0).wait(1).to({y:28.2},0).wait(1).to({y:24.5},0).wait(1).to({y:19.7},0).wait(1).to({y:13.5},0).wait(1).to({y:5.2},0).wait(1).to({y:-6.3},0).wait(1).to({y:-23.4},0).wait(1).to({regX:0,regY:0,x:-213,y:72.8},0).to({_off:true},1).wait(8));

	// TXT01 copy
	this.instance_7 = new lib.TXT01("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(65,309);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({y:173},19,cjs.Ease.cubicOut).wait(79).to({startPosition:0},0).wait(1).to({regX:276.3,regY:-143.6,x:341.3,y:29.3},0).wait(1).to({y:28.8},0).wait(1).to({y:28.1},0).wait(1).to({y:26.8},0).wait(1).to({y:25},0).wait(1).to({y:22.4},0).wait(1).to({y:18.7},0).wait(1).to({y:13.2},0).wait(1).to({y:4.6},0).wait(1).to({y:-10.1},0).wait(1).to({y:-30},0).wait(1).to({y:-43.4},0).wait(1).to({y:-51.2},0).wait(1).to({y:-56.1},0).wait(1).to({y:-59.4},0).wait(1).to({y:-61.6},0).wait(1).to({y:-63},0).wait(1).to({y:-64},0).wait(1).to({y:-64.5},0).wait(1).to({regX:0,regY:0,x:65,y:79},0).to({_off:true},1).wait(108));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,229.5,1,1,0,0,0,120,229.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(238));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-9,1241.4,214);


// stage content:
(lib.alfa_credit_nine_728x90_reviewv2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,45,3.033,0.225);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,44,1232.4,202);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"clouds.png", id:"clouds"},
		{src:"legal.png", id:"legal"},
		{src:"man.png", id:"man"},
		{src:"mnt.png", id:"mnt"}
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