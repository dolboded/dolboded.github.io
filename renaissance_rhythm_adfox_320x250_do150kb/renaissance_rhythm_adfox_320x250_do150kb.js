(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"renaissance_rhythm_adfox_320x250_do150kb_atlas_P_", frames: [[0,0,387,250],[0,252,246,21],[248,252,124,28]]}
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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,250);


(lib.guy = function() {
	this.spriteSheet = ss["renaissance_rhythm_adfox_320x250_do150kb_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["renaissance_rhythm_adfox_320x250_do150kb_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["renaissance_rhythm_adfox_320x250_do150kb_atlas_P_"];
	this.gotoAndStop(2);
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


(lib.txt0102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323F48").s().p("AHMBlQgOgDgKgFIAAggQALAGAMACQAMADAOAAQAQAAAIgEQAJgEAAgIQAAgHgGgEQgGgDgMAAIgcAAIAAgdIAcAAQAKAAAFgDQAFgDAAgGQAAgMgdAAQgNAAgLACQgLACgKAFIAAgfQAKgFAOgCQAOgDAQAAQAZAAASALQAIAGAFAHQAEAGAAAJQAAAKgFAIQgFAHgKAEQALADAHAIQAHAJABANQAAAUgUANQgJAGgNADQgMADgQAAQgQAAgOgCgAksBiQgOgFgLgKQgLgKgGgNQgGgOAAgQQAAgQAFgNQAFgMALgKQAKgLANgFQANgGAQAAQAPAAANAGQAMAFAJALQAJALAEAMQAFANAAAPIAAALIhkAAQADAOAMAHQANAIASAAQAMAAALgDQALgDALgGIAAAfQgJAHgOAEQgNADgRAAQgRAAgNgFgAj3AQQgBgMgHgHQgIgIgOgBQgNABgIAHQgJAHgBANIA9AAIAAAAgArOBiQgMgGgGgLQgHgKAAgOQAAgMAEgIQAEgJAIgFQAJgGAJgDQAKgDALAAQAMAAAKACQAKACAJAEIAAgEQAAgNgKgGQgJgGgSAAQgMAAgKADQgLADgKAFIAAggQALgGANgDQANgDAPAAQAPAAAMAEQAMAEAJAHQATAPAAAYIAAAwQAAAFACADQADACAFAAIAEAAIAEgBIAAAcQgEADgFACQgGABgHAAQgLAAgIgEQgIgFgEgJQgJAKgMAFQgNAEgOAAQgQAAgLgFgAq5ApQgHAFAAAJQAAAJAHAEQAHAFALAAQAKAAAIgEQAIgDAGgHIAAgOQgGgEgIgCQgHgDgJAAQgMAAgIAFgANRBkIAAhTIg/BTIglAAIAAiLIAnAAIAABRIA/hRIAlAAIAACLgAKnBkIAAg3Ig5AAIAAA3IgoAAIAAiLIAoAAIAAAzIA5AAIAAgzIAnAAIAACLgAFzBkIAAhTIg/BTIglAAIAAiLIAnAAIAABRIA/hRIAlAAIAACLgADRBkIgug8IAAA8IgnAAIAAg8IguA8IgvAAIA8hLIg2hAIAtAAIAqA0IAAg0IAnAAIAAA0IAqg0IAtAAIg2BAIA8BLgAhWBkIAAhTIg/BTIglAAIAAiLIAnAAIAABRIA/hRIAlAAIAACLgAo7BkIAAiLIAnAAIAABqIArAAIAAhqIAmAAIAABqIAsAAIAAhqIAmAAIAACLgAt3BkIAAiLIBPAAQAVAAAMAKQALAKAAAQQAAAJgEAIQgEAHgJAFQANAEAHAJQAHAJAAANQAAASgNAKQgOAKgYABgAtRBIIAiAAQAKAAAFgEQAFgEAAgIQAAgHgFgEQgFgEgKAAIgiAAgAtRAQIAcAAQAJAAAFgEQAFgDAAgIQAAgGgFgDQgFgEgJAAIgcAAgAiPg8QgLgGgGgLQgHgKAAgPIAeAAQAAAJAFAGQAGAFAJAAQAKAAAFgFQAGgGAAgJIAeAAQAAALgEAJQgEAIgHAHQgHAGgJAEQgJADgLAAQgOAAgMgGg");
	this.shape.setTransform(38.8,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0102, new cjs.Rectangle(-53.7,-31.1,185,39.2), null);


(lib.txt0101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323F48").s().p("ABRB+IAAjCIAoAAIAAARQAHgLAMgFQALgGAPAAQAPAAALAGQAMAFAKALQAJAKAFANQAEANAAAQQAAAPgEANQgFANgJAKQgTAWgdAAQgOAAgMgGQgLgEgIgLIAABJgACGggQgJAGgEAJIAAAkQAEAJAJAFQAKAGALAAQAIAAAHgCQAHgEAFgFQAGgFACgIQADgHAAgHQAAgIgDgHQgCgHgGgGQgFgFgHgDQgHgDgIAAQgLAAgKAGgAMLBEQgOgFgLgJQgLgLgGgNQgFgOAAgQQAAgPAFgNQAFgNAKgKQAKgLANgFQANgGARAAQAPAAAMAGQAMAGAJAKQAJALAFANQAEANAAAPIAAAKIhkAAQADAPANAGQAMAIATAAQAMAAALgDQALgDALgGIAAAfQgKAIgNADQgNADgSABQgQAAgOgGgANAgNQAAgMgIgIQgIgIgNAAQgOAAgIAIQgIAHgCANIA9AAIAAAAgAqjBEQgLgGgHgLQgGgKAAgOQAAgLAEgJQAEgHAIgGQAIgGAKgDQAJgDAMAAQAMAAAKACQAKACAIAEIAAgEQAAgNgJgGQgJgHgTAAQgLAAgLADQgKADgKAGIAAghQAKgGANgCQANgDAQgBQAPABAMAEQAMADAJAHQASAPAAAaIAAAuQAAAFADADQACACAFAAIAFAAIADgBIAAAcQgEADgFACQgFACgHAAQgMAAgIgFQgIgFgEgIQgJAJgMAFQgMAEgPABQgPgBgMgFgAqNAMQgHAEAAAJQAAAJAGAFQAHAEALAAQALAAAIgEQAIgDAFgHIAAgOQgGgEgHgCQgHgDgJAAQgNABgHAFgAKhBGIAAhVIgjAqIgPAAIgjgqIAABVIglAAIAAiKIAnAAIApA0IAog0IAnAAIAACKgAHEBGIAAhpIgsAAIAAghICAAAIAAAhIgsAAIAABpgAFiBGIAAhSIg/BSIglAAIAAiKIAmAAIAABQIBAhQIAlAAIAACKgAiJBGIAAiKIBPAAQAVgBAMAKQALALAAAPQAAALgEAHQgEAHgJAFQANADAHAKQAHAIAAANQAAASgNAKQgOALgYAAgAhjAqIAiAAQAKAAAFgDQAFgEAAgIQAAgIgFgEQgFgEgKAAIgiAAgAhjgNIAcAAQAJAAAFgDQAFgEAAgIQAAgGgFgEQgFgDgJAAIgcAAgAkKBGIg3g8IAAA8IgnAAIAAiKIAnAAIAAAzIAwgzIAxAAIg9A/IBGBLgAmvBGIAAg3Ig5AAIAAA3IgnAAIAAiKIAnAAIAAAzIA5AAIAAgzIAoAAIAACKgAtmBGIAAjDICOAAIAAAkIhmAAIAAAfIAsAAQARABAOAEQAOAEAJAJQAKAKAGALQAFAMAAANQAAAOgFALQgFANgKAIQgKAJgOAFQgNAEgSAAgAs+AiIApAAQASABAJgIQAKgHAAgPQAAgNgKgIQgJgHgSgBIgpAAg");
	this.shape.setTransform(56.1,-9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0101, new cjs.Rectangle(-35.6,-32.1,180.9,39.2), null);


(lib.txt04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323F48").s().p("AhOCUIAAjlIAvAAIAAAUQAJgNAOgFQAMgHASAAQARABAOAGQAOAGALANQALAMAFAPQAGAQAAASQAAARgGAQQgFAPgLANQgWAZgiAAQgRAAgNgGQgNgHgKgLIAABVgAgPgmQgKAHgGALIAAAqQAGAKAKAHQALAHANAAQAKAAAIgDQAIgEAGgGQAGgHADgIQADgIAAgJQAAgJgDgJQgDgIgGgHQgGgGgIgEQgIgDgKAAQgNAAgLAHgAj8BQQgOgHgIgMQgHgNgBgRQAAgNAFgJQAFgKAKgGQAJgIAMgDQALgDAOgBQANABAMACQAMACAKAGIAAgFQAAgPgLgJQgLgHgWAAQgNAAgMADQgNAEgLAHIAAgnQAMgHAPgEQAQgDASAAQARABAPAEQAOAEALAIQAVASAAAeIAAA3QAAAGADAEQADADAGAAIAFgBIAEgBIAAAhQgEAEgGACQgGACgJgBQgOABgJgGQgJgFgFgKQgLALgOAFQgOAGgSAAQgSAAgNgHgAjjANQgIAGgBAKQABALAIAGQAIAFANAAQAMAAAJgEQAKgEAGgJIAAgQQgHgGgJgBQgIgDgKAAQgPAAgJAFgAG+BTIAAikIAtAAIAACkgAEVBTIAAikIAvAAIAAAwIAiAAQAfAAASAQQASAPABAaQAAANgEAKQgFAKgJAJQgIAIgMAEQgMAFgQAAgAFEAvIAaAAQAOAAAIgHQAHgFAAgLQAAgMgHgFQgIgGgOAAIgaAAgACgBTIAAh9Ig0AAIAAgnICWAAIAAAnIg0AAIAAB9gAlXBTIhkhqIAABqIgvAAIAAjnIAvAAIAABbIBVhbIA6AAIhhBqIByB9g");
	this.shape.setTransform(0.1,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt04, new cjs.Rectangle(-53.2,-42,106.5,64.8), null);


(lib.txt03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323F48").s().p("AFQCJIAAgqIh3AAIAAAqIgsAAIAAhRIAUAAQAKgPAFgYQAFgVAAghIABggICLAAIAAB9IAbAAIAABRgAD8AQQgEAWgHASIBCAAIAAhWIgzAAQAAAZgEAVgAAOBcQgOgHgGgMQgIgNAAgRQAAgNAEgJQAFgLAJgGQAJgHAMgDQAMgDANgBQAOABAMACQAMACAJAFIAAgEQAAgPgLgJQgLgHgWAAQgNAAgMADQgNAEgLAHIAAgnQAMgHAPgEQAQgDASAAQASABAOAEQAOAEALAIQAVASAAAeIAAA3QABAGADAEQADADAFAAIAFgBIAFgBIAAAhQgFAEgGACQgGACgJgBQgNABgKgGQgJgFgEgKQgLALgPAFQgOAGgRAAQgTAAgNgHgAAoAZQgJAGAAAKQAAALAIAGQAIAFANAAQAMAAAKgEQAJgEAGgJIAAgQQgHgGgIgBQgJgDgKAAQgPAAgIAFgAjTBfQgEgBgDgBIAAgmIAFABIAEAAQAJAAAFgFQAGgFACgLIADgPIABgSIABgXIABgwICOAAIAACkIguAAIAAh9IgzAAIgBAXIgCAdQgBANgEAPQgGAUgNANQgNAMgZABIgKgBgAI8BfIAAikIAtAAIAACkgAGTBfIAAikIAwAAIAAAwIAhAAQAfAAATAQQARAOABAbQAAANgEAKQgEAKgJAJQgJAIgMAEQgMAFgQAAgAHDA7IAZAAQAOAAAIgHQAIgFAAgLQAAgMgIgFQgIgGgOAAIgZAAgAkYBfIhBhHIAABHIguAAIAAikIAuAAIAAA8IA5g8IA5AAIhHBJIBSBbgApoBfIAAjnIBsAAQAVABAQAGQAPAHAKANQAIANAAASQgBASgHAMQgJALgMAFQAKACAHAFQAJAFAHAIQAHAJADAJQAEAKAAANQgBAdgVATQgLAJgPAEQgOAEgSABgAo5A1IA8AAQASABAKgIQAJgIAAgOQAAgPgJgIQgKgHgSAAIg8AAgAo5gtIA1AAQAPAAAJgHQAIgGAAgMQAAgNgIgGQgJgHgPAAIg1AAg");
	this.shape.setTransform(0.8,-28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03, new cjs.Rectangle(-65.8,-42,131.8,64.8), null);


(lib.txt02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323F48").s().p("AnYCUIAAjlIAvAAIAAAUQAJgNAOgFQANgHASAAQARABAOAGQAOAGALANQALAMAFAPQAGAQAAASQAAARgGAQQgFAPgLANQgWAZgiAAQgRAAgOgGQgNgHgKgLIAABVgAmZgmQgKAHgGALIAAAqQAGAKAKAHQALAHAOAAQAKAAAIgDQAIgEAGgGQAGgHADgIQADgIAAgJQAAgJgDgJQgDgIgGgHQgGgGgIgEQgIgDgKAAQgOAAgLAHgAA8B9IAAgqIh2AAIAAAqIgsAAIAAhRIAVAAQAJgPAFgYQAFgVABghIAAggICKAAIAAB9IAbAAIAABRgAgXAEQgDAWgIASIBBAAIAAhWIgyAAQAAAZgEAVgAjeBRQgQgGgNgMQgNgMgHgPQgHgRAAgTQAAgRAGgQQAGgPAMgMQAMgNAPgGQAQgGATgBQASABAOAGQAOAGALANQALAMAFAQQAGAPAAASIAAAMIh3AAQAEARAPAIQAOAJAXAAQANAAANgDQAOgEAMgIIAAAmQgLAJgQAEQgPAEgUAAQgUAAgQgGgAifgQQgBgOgJgKQgJgIgQgBQgQAAgKAJQgKAJgCAPIBJAAIAAAAgAKJBTIAAikIAuAAIAACkgAHhBTIAAikIAvAAIAAAwIAhAAQAfAAATAQQASAPAAAaQAAANgEAKQgEAKgJAJQgJAIgMAEQgMAFgQAAgAIQAvIAaAAQAOAAAHgHQAIgFAAgLQAAgMgIgFQgHgGgOAAIgaAAgAFrBTIAAh9IgzAAIAAgnICWAAIAAAnIg0AAIAAB9gAD2BTIAAhhIhKBhIgsAAIAAikIAuAAIAABgIBKhgIAsAAIAACkgAojBTIhjhqIAABqIgwAAIAAjnIAwAAIAABbIBVhbIA6AAIhiBqIBzB9g");
	this.shape.setTransform(0.5,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt02, new cjs.Rectangle(-73.6,-42,147.2,64.8), null);


(lib.siteTXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIOBEQgKgMAAgVIAAhCIAfAAIAAA7QAAANAGAGQAGAFAJAAQAHAAAHgEQAHgEAEgGIAAhGIAfAAIAABtIgfAAIAAgNQgIAIgJAEQgJAEgLAAQgTAAgLgMgAEiBHQgJgJAAgTIAAgxIgWAAIAAgaIAWAAIAAgeIAfAAIAAAeIAfAAIAAAaIgfAAIAAArQAAAIADAEQAEAEAIgBIAIgBQAEAAAEgDIAAAaQgFADgGACQgHABgIAAQgSAAgJgJgABYBMQgJgEgIgIQgHgJgEgKQgDgKAAgNQAAgXAOgRQAIgIAJgEQAJgEALAAQAMAAAJAEQAJAEAGAIIAAg6IAgAAIAACZIggAAIAAgNQgGAIgJAEQgJAEgMAAQgLAAgJgEgABpgFQgFACgEADQgEAFgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAFAFACQAGACAGAAQAJAAAIgFQAHgEADgHIAAgdQgDgHgHgEQgIgEgJAAQgGAAgGACgAgfBMQgLgEgJgIQgIgIgFgKQgEgLAAgNQAAgMAEgKQAEgKAIgIQAHgIALgEQAKgEANAAQALAAAJAEQAKAEAHAIQAHAJAEAJQADALAAAMIAAAIIhNAAQACALAKAGQAKAGAOAAQAJAAAIgDQAJgCAIgFIAAAZQgHAGgKACQgLADgMAAQgNAAgLgEgAAKALQgBgJgGgGQgFgGgKAAQgLAAgHAGQgGAFgBAKIAvAAIAAAAgAjuBMQgKgEgJgIQgJgIgEgKQgFgLAAgNQAAgNAFgJQAEgLAJgIQAJgHAKgEQALgEAMAAQAJAAAIABQAJACAHAEIAAAaQgHgDgHgCIgOgBQgPAAgKAHQgEAEgDAGQgCAFAAAHQAAAHACAGQADAFAFAEQAFAFAGACQAGACAHAAQAIAAAIgCQAHgCAHgDIAAAaQgIAEgJACQgIACgKAAQgMAAgLgEgAn0BMQgKgEgJgIQgJgIgEgKQgFgLAAgNQAAgMAEgKQAEgKAIgIQAIgIAKgEQALgEAMAAQAMAAAKAEQAJAEAHAIQAIAJADAJQAEALAAAMIAAAIIhPAAQADALAJAGQAKAGAPAAQAJAAAJgDQAJgCAIgFIAAAZQgIAGgKACQgKADgOAAQgNAAgLgEgAnKALQAAgJgGgGQgGgGgLAAQgLAAgGAGQgHAFgBAKIAwAAIAAAAgAFwBKQgGgFAAgJQAAgIAGgFQAFgFAIgBQAIABAGAFQAFAFAAAIQAAAJgFAFQgGAGgIAAQgIAAgFgGgAGpBNIAAhtIAfAAIAAATIAGgIIAJgHIALgFIAMgBIACAAIACAAIAAAeIgFgBIgFAAQgLAAgJAFQgJAFgDAIIAABAgADQBNIAAhtIAfAAIAABtgAiaBNIAAhtIAfAAIAAATIAGgIIAJgHIALgFIAMgBIACAAIACAAIAAAeIgFgBIgFAAQgLAAgJAFQgJAFgDAIIAABAgAlHBNIAAg9QAAgMgGgFQgGgFgJAAQgHAAgHAEQgGADgFAGIAABGIgfAAIAAhtIAfAAIAAAOQAIgIAJgEQAJgEALAAQATAAALAMQAKAMAAAUIAABDgApvBNIAAhtIAfAAIAAATIAHgIIAJgHIALgFIAMgBIACAAIABAAIAAAeIgEgBIgFAAQgMAAgIAFQgJAFgEAIIAABAgADSgvQgFgGgBgIQABgIAFgFQAFgFAIAAQAIAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgIAAQgIAAgFgFg");
	this.shape.setTransform(0.4,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.siteTXT, new cjs.Rectangle(-65.9,-15.8,131.9,31.7), null);


(lib.siteLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#87E873").s().p("ApwAFIAAgJIThAAIAAAJg");
	this.shape.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.siteLine, new cjs.Rectangle(-62,0,125,1), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-80,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#323F48","rgba(50,63,72,0)"],[0,1],-352.9,8.1,-345,-71.3).s().p("Eg1lAKjIAA1FMBrLAAAIAAVFg");
	this.shape.setTransform(49,-237.4,0.499,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-121.9,-304.9,342,135), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-126,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-126,-240,246,21), null);


(lib.guy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.guy();
	this.instance.parent = this;
	this.instance.setTransform(-180,-323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.guy_1, new cjs.Rectangle(-180,-323,387,250), null);


(lib.frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93E773").s().p("AyPHzQgWgMAAgZIAAqIQAAiDBdhdQBdhdCDAAMAgOAAAIAAIcQAACDhdBcQhdBdiDAAI3YAAQiFAAiAAlQh/AlhxBHQgKAGgMAAQgMAAgJgFgAw6mNQhXBYAAB7IAAKIQAAAOAMAFQAEADAHAAQAGAAAFgDQBzhICDgmQCCgmCIABIXYAAQB7gBBXhWQBXhYAAh6IAAoII/6AAQh7AAhXBWg");
	this.shape.setTransform(17,-39.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frame, new cjs.Rectangle(-102,-90,238,100.8), null);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323F48").s().p("A4/TiMAAAgnDMAx/AAAMAAAAnDg");
	this.shape.setTransform(10,-125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fade, new cjs.Rectangle(-150,-250,320,250), null);


(lib.dna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D41367").s().p("AhyDjIAAkSIlzAAQgUAAgTADQAFgrATgnIGCgBIAAiGIBQAAIAACGIFyAAQA1AAAygTQAvgTAngjIAABjQhYA2hlAAIlzAAIAAEdQgnASgqAGIACgjg");
	this.shape.setTransform(-56.8,-22.9,0.117,0.117,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D41367").s().p("AlWNyIAAkUIkrAAIAAhPIEsAAIAAkUQAAh3BIhgQBGhdBvgiQArgNAvgDIDUAAIgeBQIinAAQgRAAgUACQgqAGgoATQhHAhgsBDQgtBFAABSIAAEUIFyAAQBTAABGguQBDgsAjhJQARgnAGgrQACgPAAgUIAApUIAAAAIAAjgQABh3BHhgQBGheBwgiQgNAtgCAuQhIAjgrBDQgsBEAABSIgBM/QgBAugNAtQghBxhfBHQhgBJh5AAIlyAAIAAEeQgmATgsAGQACgQAAgTg");
	this.shape_1.setTransform(-42.4,-13.5,0.117,0.117,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D41367").s().p("AjtCBIAAhQICEAAQBTAABEgtQBEgrAihJQAtgCAugOQgiBxheBHQhhBJh3AAg");
	this.shape_2.setTransform(-53.5,-17.6,0.117,0.117,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D41367").s().p("Ai1CBIAAhQIAUAAQBTAABFgtQBCgrAjhJQAtgCAtgOQghBxhfBHQhfBJh4AAg");
	this.shape_3.setTransform(-37,-0.5,0.117,0.117,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#87E873").s().p("AgnBDIAAiFIBPAAIAACFg");
	this.shape_4.setTransform(-58.8,-25.2,0.117,0.117,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#87E873").s().p("Aj2B1IClAAQAUAAATgDQAqgGAngSQBIgjArhCQAshEAAhTIAAghIBQAAIAAAhQAAB3hIBfQhHBehuAjQgtAOgtABIjUAAg");
	this.shape_5.setTransform(-56,-21.2,0.117,0.117,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#87E873").s().p("Ai+JpQBHgiAshEQAshFAAhRIAAs/QACguANgtQAYhVBAhBICGAAQgsAWgiAiQgiAjgUAsQgTAngFArQgCATAAAQIAAM0QAAB3hHBgQhGBehwAiQANgsACgvg");
	this.shape_6.setTransform(-50.1,-17.7,0.117,0.117,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#87E873").s().p("AikEUIAAiiIifAAIAAhPICfAAIAAkeQAogSAqgGQgCAPAAAUIAAESIFxAAQASAAAVgCQgGArgRAnImCAAIAACig");
	this.shape_7.setTransform(-43.1,-10.6,0.117,0.117,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#87E873").s().p("Ahug3QBghJB4AAICEAAIAABQIiEAAQhTAAhEAtQhEArgiBJQgwADgqANQAhhxBehHg");
	this.shape_8.setTransform(-44.2,-16.1,0.117,0.117,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#87E873").s().p("AiVgaQBOgpBYABICFAAIAABOIiFAAQhcAAhKA4g");
	this.shape_9.setTransform(-36.7,-9.4,0.117,0.117,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#87E873").s().p("Aj3B1ICnAAQATAAATgDQArgGAmgTQBIgiArhCQAthFAAhSIAAgiIBPAAIAAAiQAAB4hIBeQhGBfhwAhQgsAOgtACIjUAAg");
	this.shape_10.setTransform(-38.9,-4.1,0.117,0.117,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dna, new cjs.Rectangle(-130.4,-52.7,103,106), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-184,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-184,-250,387,250), null);


(lib.siteMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApxCiIAAlEITjAAIAAFEg");
	mask.setTransform(-0.4,5.7);

	// siteLine
	this.instance = new lib.siteLine();
	this.instance.parent = this;
	this.instance.setTransform(-126.4,9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1},14,cjs.Ease.circInOut).wait(56).to({x:124.6},15).wait(1).to({x:-126.4},0).to({x:-1},14,cjs.Ease.circInOut).wait(59).to({x:124.6},15).wait(1));

	// mask copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApxCjIAAlEITjAAIAAFEg");
	mask_1.setTransform(-0.4,-9.3);

	// siteTXT
	this.instance_1 = new lib.siteTXT();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,23);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({y:-3},14,cjs.Ease.circOut).wait(115).to({y:23},14,cjs.Ease.circIn).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.FrameMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt04
	this.instance = new lib.txt04();
	this.instance.parent = this;
	this.instance.setTransform(-23,-61);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(237).to({_off:false},0).to({y:-19,alpha:1},8,cjs.Ease.circOut).wait(61).to({y:11,alpha:0},9,cjs.Ease.circIn).wait(1));

	// txt03
	this.instance_1 = new lib.txt03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11,-61);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(163).to({_off:false},0).to({y:-19,alpha:1},8,cjs.Ease.circOut).wait(61).to({y:21,alpha:0},9,cjs.Ease.circIn).to({_off:true},1).wait(74));

	// txt02
	this.instance_2 = new lib.txt02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3,-61);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({y:-19,alpha:1},8,cjs.Ease.circOut).wait(61).to({y:21,alpha:0},9,cjs.Ease.circIn).to({_off:true},1).wait(148));

	// txt0102
	this.instance_3 = new lib.txt0102();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-22,-62);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({y:-25,alpha:1},8,cjs.Ease.circOut).wait(63).to({y:10,alpha:0},9,cjs.Ease.circIn).to({_off:true},1).wait(226));

	// txt0101
	this.instance_4 = new lib.txt0101();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-40,-88);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({y:-51,alpha:1},8,cjs.Ease.circOut).wait(67).to({y:-11,alpha:0},9,cjs.Ease.circIn).wait(225));

	// frame
	this.instance_5 = new lib.frame();
	this.instance_5.parent = this;
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},7).wait(299).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-90,238,100.8);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_10
	this.instance = new lib.legal_1();
	this.instance.parent = this;
	this.instance.setTransform(151,398);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(337).to({_off:false},0).to({alpha:1},11).wait(118).to({alpha:0},13).wait(25));

	// SITE
	this.instance_1 = new lib.siteMov("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(107.6,116.5,1.35,1.35,0,0,0,-0.3,3.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(319).to({_off:false},0).wait(185));

	// DNA
	this.instance_2 = new lib.dna();
	this.instance_2.parent = this;
	this.instance_2.setTransform(458.1,98,3.94,3.94,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(348).to({_off:false},0).to({y:103,alpha:1},9).wait(122).to({y:106,alpha:0},13).wait(12));

	// LOGO
	this.instance_3 = new lib.logo_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(104,464);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(504));

	// FADE
	this.instance_4 = new lib.fade();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},14).wait(300).to({alpha:1},9).wait(181));

	// GUY
	this.instance_5 = new lib.guy_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(164,323);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:194},323).to({_off:true},1).wait(180));

	// Frame
	this.instance_6 = new lib.FrameMov("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(125,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},324).wait(180));

	// BG
	this.instance_7 = new lib.bg_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(182,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:120},323).to({_off:true},1).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1375,-23,1760,317.1);


// stage content:
(lib.renaissance_rhythm_adfox_320x250_do150kb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A4/zhMAx/AAAMAAAAnDMgx/AAAg");
	this.shape.setTransform(160,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160,125,1.333,0.625);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A4/TiMAAAgnDMAx/AAAMAAAAnDg");
	this.shape_1.setTransform(160,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.1,124,403,295.1);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 320,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/renaissance_rhythm_adfox_320x250_do150kb_atlas_P_.png", id:"renaissance_rhythm_adfox_320x250_do150kb_atlas_P_"}
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