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



(lib.bird1 = function() {
	this.initialize(img.bird1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,54);


(lib.bird2 = function() {
	this.initialize(img.bird2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,79);


(lib.GirlBG = function() {
	this.initialize(img.GirlBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,280);


(lib.GirlNine = function() {
	this.initialize(img.GirlNine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,280);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,155);// helper functions:

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


(lib.txt02_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F50800").s().p("AgoCBIAAg5IiNAAIAAA5Ig3AAIAAhrIATAAQAJgNAGgTQAGgTAEggIAIg/IClAAIAACSIAhAAIAABrgAiIg5IgFAjQgDAOgEAKQgEALgEAJIBMAAIAAheIg3AAgABKBAQgZgNgOgXQgNgXAAgeQAAgeANgYQAOgXAZgNQAYgNAgAAQAeAAAZANQAYANAOAXQAOAYAAAeQAAAegOAXQgOAXgYANQgZANgeABQgggBgYgNgABphEQgLAHgFALQgGALAAAOQAAAOAGALQAFAKALAHQAKAGAPABQAOgBAJgGQALgHAFgKQAHgLAAgOQAAgOgHgLQgFgLgLgHQgJgGgOgBQgPABgKAGg");
	this.shape.setTransform(-104.3,115.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F50800").s().p("AhNBjIAAg4IAFAAQAJAAAGgDQAGgDACgIQADgIAAgOIALhpICpAAIAADEIg+AAIAAiQIg5AAIgGA8QgCAdgHATQgGATgPAJQgPAJgaAAgAFABiIAAhLIhQAAIAABLIg9AAIAAjEIA9AAIAABHIBQAAIAAhHIA+AAIAADEgAilBiIAAiKIg7CKIgoAAIg8iIIAACIIg5AAIAAjEIBWAAIA2B1IA0h1IBVAAIAADEg");
	this.shape_1.setTransform(115.1,114.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F50800").s().p("AgFgHIALAAIAAAPIgLgPg");
	this.shape_2.setTransform(-51.6,91.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F50800").s().p("AqTPcQgbgdgYghIAAgQIgMAAQg3hPgkhfQgziFgGiSIHFAAQAICGBHBjQBnCSDPgBQDcABB2iRQBoiAAAjOIAAgXQAAjKh3h/Qh7h/jIAAQihgBhuBRQhIAzgjBGImgAAIAA0nIYwAAIAAGFIyDAAIAAIlQBDhTB5g5QCMhCCgAAQCgAACOA6QCOA6BpBsQBtBwA5CXQA9CfAAC9IAAAbQAAC5g9ChQg+Chh1B5Qh3B7ikBDQisBFjMAAQmRAAjmj9g");
	this.shape_3.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt02_5, new cjs.Rectangle(-150.1,-124.1,307.4,262.5), null);


(lib.txt01_percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F50800").s().p("AE8D9QgZgNgOgXQgNgXgBgfQABgfANgXQAOgXAZgNQAYgNAfAAQAfAAAYANQAZANAOAXQAOAXAAAfQAAAfgOAXQgOAXgZANQgYANgfABQgfgBgYgNgAFbB4QgLAHgFAKQgGAMAAAOQAAAOAGAMQAFALALAGQAKAHAOAAQAOAAAKgHQALgGAFgLQAGgMAAgOQAAgOgGgMQgFgKgLgHQgKgHgOAAQgOAAgKAHgAI5EFIAAiRIhKAAIAAg0IDRAAIAAA0IhKAAIAACRgAnRALIAAkQIA+AAIAAAdQABgDAHgIQAIgIANgHQAOgGAUAAQAaAAAUAMQAVAMAMAXQAMAXAAAgQAAAfgMAXQgMAYgVAMQgUAMgaAAQgUgBgOgGQgOgGgHgIQgIgIgBgDIAABngAmHjGQgNAOAAAWQAAAWANANQAMAOAWAAQAVAAAMgOQAMgNABgWQgBgWgMgOQgMgOgVgBQgWABgMAOgAC5gIIAAg4IiMAAIAAA4Ig2AAIAAhrIASAAQAIgMAHgUQAGgUADgfIAIg/ICmAAIAACSIAhAAIAABrgABajDIgGAjIgGAZQgEAMgFAIIBNAAIAAheIg3AAgAivhIQgZgNgNgYQgOgXAAgeQAAgfAOgYQANgXAYgNQAXgNAfAAQAgAAAYANQAXANANAXQAOAXAAAhIAAAKIiWAAQACAUANAMQANALAVABQAMAAAIgDQAIgDAEgEIAGgGIA9AAQgBAKgGALQgHAKgLAKQgMAKgTAHQgSAFgZABQgiAAgYgNgAhOi9QgEgOgMgKQgLgIgRAAQgQAAgMAJQgLAJgEAOIBXAAIAAAAgAI3hAIAAiRIhKAAIAAg0IDRAAIAAA0IhKAAIAACRgAGVhAIAAh0IhVB0Ig8AAIAAjFIA8AAIAAB1IBVh1IA9AAIAADFgAowhAIhRhWIAABWIg+AAIAAjFIA+AAIAABRIBPhRIBNAAIheBdIBkBog");
	this.shape.setTransform(-269.6,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F50800").s().p("Aq/FvQASgbANgfQANgfAEgfIg2AAIAAh2IBwAAIAABoQAAApgLAiQgLAhgPAagAHNDtQglgVgXgkQgVglgBguQABguAVgmQAXgjAlgVQAlgVAugBQAwABAkAVQAmAVAWAjQAVAmABAuQgBAugVAlQgWAkgmAVQgkAVgwABQgugBglgVgAH0AzQgRASAAAcQAAAbARASQARASAbABQAcgBAQgSQARgSABgbQgBgcgRgSQgQgRgcgBQgbABgRARgAAsD3IG6pbIB5AAIm7JbgAniD3ICsjbQgOAKgVAGQgTAHgcgBQg4AAgqgYQgqgZgWgsQgYgsAAg8QAAg/AegxQAcgxA1gdQA2gcBKgBQBKABA1AcQA2AcAcAxQAdAxAABAQAAAvgLAnQgMAmgXAiQgWAkgfAnIh+ChgAmajWQgbAaAAApQAAArAbAaQAZAbAuABQAtgBAagbQAagbABgqQgBgpgZgaQgagbguAAQguAAgZAbgAAVg/QgjgVgWglQgWgkAAguQAAgvAWgkQAWglAjgVQAmgWAvAAQAvAAAlAWQAlAVAVAlQAXAkAAAvQAAAugXAkQgVAlglAVQglAWgvAAQgvAAgmgWgAA9j5QgRASAAAcQAAAbARASQARASAcAAQAcAAAQgSQARgSAAgbQAAgcgRgSQgQgSgcAAQgcAAgRASg");
	this.shape_1.setTransform(19,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt01_percent, new cjs.Rectangle(-344.5,-67.2,434.5,134.5), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-244,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-244,-140,333,155), null);


(lib.GirlBG_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GirlBG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GirlBG_1, new cjs.Rectangle(0,0,540,280), null);


(lib.Girl9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GirlNine();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Girl9, new cjs.Rectangle(0,0,540,280), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHbA6IANgdIgag5IALAAIAVAtIAUgtIALAAIgmBWgAkHA6IAAhWIALAAIAAALIAEgFIAHgFQAEgCAHAAQAHAAAIAEQAGADAEAHQADAHABAJQgBAKgDAHQgEAHgGAEQgIADgHAAQgHAAgEgCQgFgCgCgDIgEgEIAAAlgAjygQQgFADgCAEQgDAFAAAFQAAAGADAFQACAFAFACQAEADAGAAQAGAAAFgDQADgCADgFQACgFABgGQgBgFgCgFQgDgEgDgDQgFgDgGAAQgGAAgEADgAmIA4IAAgYQgLAAgHgEQgIgEgEgHQgFgHAAgJQAAgIAFgHQAEgHAIgEQAHgEALAAIAAgcIAKAAIAAAcQALAAAIAEQAHAEAFAHQAEAHAAAIQAAAJgEAHQgFAHgHAEQgIAEgLAAIAAAYgAl+AWQAIAAAGgDQAFgDACgEQADgFAAgGQAAgFgDgFQgCgEgFgDQgGgDgIAAgAmVgQQgFADgDAFQgDAEAAAFQAAAGADAFQADAEAFADQAFADAIAAIAAgpQgIAAgFADgADMAcQgGgDgEgHQgEgHAAgKQAAgJAEgHQAEgGAGgEQAHgEAIAAQAGAAAFACQAEACADADIADAEIAAgKIALAAIAAA7IgLAAIAAgKIgDAEQgDADgEACQgFACgGAAQgIAAgHgEgADTgQQgFADgDAEQgCAFAAAFQAAAGACAFQADAFAFACQAEADAGAAQAFAAAFgDQAEgCACgFQADgFAAgGQAAgFgDgFQgCgEgEgDQgFgDgFAAQgGAAgEADgACKAdQgGgDgDgEQgEgEgBgFIAMAAIACAEIAHAEQADABAGAAQAGAAAFgCQAEgCAAgFQAAgEgDgCQgDgBgHAAIgJAAIAAgJIAJAAQAGAAADgCQADgCAAgEQAAgEgEgCQgEgCgHAAQgHAAgEACQgEADgCADIgKAAQAAgEAEgEQADgFAGgCQAGgDAIAAQAMAAAHAFQAHAEAAAIQAAAGgDADQgDADgEAAQAFACADADQAEADAAAFQAAAGgEAEQgDAFgHACQgGACgHAAQgJAAgHgDgAlDAcQgHgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAJAAQAJAAAHAEQAHAEAEAHQAEAHABAIQgBAJgEAHQgEAHgHAEQgHAEgJAAQgJAAgHgEgAk+gQQgEADgDAEQgCAFAAAFQAAAGACAFQADAEAEADQAFADAGAAQAGAAAFgDQAEgCACgFQADgFAAgGQAAgFgDgFQgCgEgEgDQgFgDgGAAQgGAAgFADgAn3AaQgKgFgGgKQgFgKgBgMQABgMAFgKQAGgKAKgGQAJgGANAAQANAAAKAGQAKAGAFAKQAHAKgBAMQABAMgHAKQgFAJgKAGQgKAGgNAAQgNAAgJgGgAnygnQgGAEgFAHQgDAIAAAJQAAAKADAGQAFAIAGAEQAHAEAKAAQAKAAAHgEQAIgFADgHQAFgHAAgJQAAgJgFgIQgDgHgIgEQgHgFgKAAQgKAAgHAFgAiaAfIgXgtIAAAtIgKAAIAAg7IAOAAIAYAuIAXguIAOAAIAAA7IgKAAIAAguIgZAugAG/AfIghgbIAAAbIgLAAIAAg7IALAAIAAAaIAfgaIAQAAIgjAcIAkAfgAFRAfIAAg7IAeAAQAGAAAFACQAEACADADQADAEAAAFQAAAGgDADQgDADgDAAQAFABADADQACAEABAFQAAAIgHAFQgFAFgLAAgAFbAVIAUAAQAGAAACgCQAEgCAAgEQAAgDgDgDQgDgCgFAAIgVAAgAFbgDIAUAAQAFAAACgCQADgCAAgEQAAgDgDgCQgCgCgFAAIgUAAgAE0AfIAAgWIgSAAIgPAWIgMAAIAQgXQgIgCgDgFQgDgDAAgHQAAgFACgEQACgEAFgDQAEgCAIgBIAgAAIAAA7gAEXgQQgDADAAAEQAAAEADADQADACAFAAIAVAAIAAgSIgVAAQgFAAgDACgAAoAfIAAg7IAKAAIAAAUIASAAQAJAAAFACQAGADACADQACAFABAFQgBAGgCAEQgCAFgGADQgFADgIAAgAAyAVIARAAQAHAAADgDQAEgCAAgGQAAgEgEgDQgDgDgHAAIgRAAgAgEAfIAAgxIgYAAIAAgKIA6AAIAAAKIgYAAIAAAxgAgxAfIAAgsIgjAsIgKAAIAAg7IAKAAIAAAsIAjgsIALAAIAAA7g");
	this.shape.setTransform(0.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F50800").s().p("Aq4CvQgyAAAAgyIAAj5QAAgyAyAAIVxAAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_1.setTransform(-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(-75,-18,149.6,35.1), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Bird2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bird2();
	this.instance.parent = this;
	this.instance.setTransform(-31,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bird2, new cjs.Rectangle(-31,-40,61,79), null);


(lib.Bird1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bird1();
	this.instance.parent = this;
	this.instance.setTransform(-43,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bird1, new cjs.Rectangle(-43,-27,86,54), null);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0CBD7").s().p("EgqLAV4MAAAgrvMBUXAAAMAAAArvg");
	this.shape.setTransform(270,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,540,280), null);


(lib.ALFALOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4362E").s().p("AqOCGIAAgkICtAAIAAAkgAimBfIAAgwQgcgCgRgSQgRgTAAgaQAAgbARgTQARgSAcgCIAAgvIAhAAIAAAvQAbACASASQAQASAAAcQAAAagQATQgSASgbACIAAAwgAiFARQAOgCAHgKQAIgIAAgPQAAgPgIgJQgHgKgOgCgAi7gqQgIAJAAAPQAAAPAIAIQAIAKANACIAAhHQgNACgIAKgAETAjQgMgMAAgUQAAgSALgKQAMgLAXAAIAfAAQAAgVgUAAQgKAAgHAFQgDADgBAFIgiAAQACgSANgLQAPgOAZAAQAYAAAPAOQAOAOAAAXIAAAqQAAAFACACQACACAEAAIAAAdIgLAAQgUAAgGgNQgLARgZAAQgUAAgNgNgAEnADQAAARAWAAQAKAAAHgGQAGgGAAgKIAAgIIgaAAQgTAAAAANgAgwAjQgMgMAAgUQAAgSAMgKQAMgLAWAAIAeAAQAAgVgTAAQgKAAgGAFQgFADAAAFIghAAQACgSANgLQAPgOAYAAQAYAAAOAOQAOAOAAAXIAAAqQAAAFACACQACACAEAAIAAAdIgLAAQgTAAgHgNQgLARgXAAQgVAAgNgNgAgbADQAAARAVAAQAKAAAGgGQAHgGgBgKIAAgIIgYAAQgTAAAAANgAJmAsIgxg0IAAA0IggAAIAAh9IAgAAIAAAyIAtgyIApAAIg2A8IA6BBgAHcAsIAAgwIgtAAIAAAwIggAAIAAh9IAgAAIAAAvIAtAAIAAgvIAgAAIAAB9gAB2AsIAAivIB2AAIAAAgIhVAAIAAAkIAkAAQAeAAAQAOQAQAOAAAZQAAAagQAOQgPAOgfAAgACXAMIAjAAQAcAAAAgWQABgLgIgFQgIgGgNAAIgjAAgAlXAsIAAh9IAhAAIAAAmIAXAAQAXAAAMALQANAMABAUQgBASgKAMQgNAOgYAAgAk2ARIAUAAQATAAgBgRQABgPgTAAIgUAAgAmQAsIAAhgIgfAAIgBAqQgBAdgJAMQgJANgXAAIgGAAIAAgdQALAAADgGQADgFAAgRIAChEIBeAAIAAB9gAoLAsIgMgkIhFAAIgMAkIgjAAIA1iXQAFgNAFgFQAIgIANAAQAOAAAHAIQAFAFAFANIAyCXgApRgVIAxAAIgYhIIgBAAg");
	this.shape.setTransform(0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ALFALOGO, new cjs.Rectangle(-65,-13,131.1,26.9), null);


(lib.GirlAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("AVGmNIjWbRg");
	var mask_graphics_21 = new cjs.Graphics().p("AVGmMIjWbQg");
	var mask_graphics_23 = new cjs.Graphics().p("AVGmMIjYbQg");
	var mask_graphics_25 = new cjs.Graphics().p("AVGmKIj1bMg");
	var mask_graphics_27 = new cjs.Graphics().p("AVGmFIk5bBg");
	var mask_graphics_29 = new cjs.Graphics().p("AVGl2InBajg");
	var mask_graphics_31 = new cjs.Graphics().p("AFfslIhcN4IphLSg");
	var mask_graphics_33 = new cjs.Graphics().p("AIXq3Ih8N/IuxHwg");
	var mask_graphics_34 = new cjs.Graphics().p("AKMpKIgdOsIz7Dpg");
	var mask_graphics_35 = new cjs.Graphics().p("ArxG5IXjuEIh4OXg");
	var mask_graphics_36 = new cjs.Graphics().p("AnpHYIkipVIYXmDIh7QCg");
	var mask_graphics_37 = new cjs.Graphics().p("AmGHjInovuIbdAVIh7QCg");
	var mask_graphics_38 = new cjs.Graphics().p("AmeMSIm35MIasJ0Ih8QCg");
	var mask_graphics_39 = new cjs.Graphics().p("AqQL7IFw62IOyOdIiEPag");
	var mask_graphics_40 = new cjs.Graphics().p("AqQOnMAKyggNIJwTzIiEPag");
	var mask_graphics_41 = new cjs.Graphics().p("Ar+N6IC18eIVIgjIjjO/IiYPPg");
	var mask_graphics_42 = new cjs.Graphics().p("AxGNoIC08dIfZA1ItzNnIiYPPg");
	var mask_graphics_43 = new cjs.Graphics().p("A1uNYIAx6vMAkqgApIGCGBI6LIKIitN2g");
	var mask_graphics_44 = new cjs.Graphics().p("A1mNYIAx6vMAkqgApIFyQfI57iUIisN2g");
	var mask_graphics_45 = new cjs.Graphics().p("A1pNQIBg7sMAifAAAIHUaSI4msJIiTOwg");
	var mask_graphics_46 = new cjs.Graphics().p("AiYEdIhhJsIwZhNIBg7rMAifAAAIEmdfg");
	var mask_graphics_47 = new cjs.Graphics().p("A03E9IgQkkIKfw3IRWAAIOaEzIkucKg");
	var mask_graphics_48 = new cjs.Graphics().p("A4AFtIgSlQIMFzZIT8AAIQjFhMgFaAgYg");
	var mask_graphics_49 = new cjs.Graphics().p("A6gGTIgUlzINU1bIWCAAISTGHMgGAAjvg");
	var mask_graphics_50 = new cjs.Graphics().p("A99HHIgWmjIPD4NIY6AAIUqG5MgGxAoag");
	var mask_graphics_51 = new cjs.Graphics().p("EgihAINIganjIRW75IctAAIX0H7MgH0Aukg");
	var mask_graphics_52 = new cjs.Graphics().p("EglpAI8IgdoOIS7+cIfTAAIZ/IqMgIhAyzg");
	var mask_graphics_53 = new cjs.Graphics().p("EgpvAQTIhXpgMAS4glOMAkUgDLIfAHaMgEuA7zg");
	var mask_graphics_54 = new cjs.Graphics().p("Egv7ALYIgkqfMAYFgmtMAn2AAAMAhEALAMgK2BApg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:135,y:134.8}).wait(2).to({graphics:mask_graphics_21,x:135,y:134.8}).wait(2).to({graphics:mask_graphics_23,x:135,y:134.8}).wait(2).to({graphics:mask_graphics_25,x:135,y:134.6}).wait(2).to({graphics:mask_graphics_27,x:135,y:134}).wait(2).to({graphics:mask_graphics_29,x:135,y:132.5}).wait(2).to({graphics:mask_graphics_31,x:235,y:175.6}).wait(2).to({graphics:mask_graphics_33,x:216.5,y:164.7}).wait(1).to({graphics:mask_graphics_34,x:204.9,y:153.9}).wait(1).to({graphics:mask_graphics_35,x:194.6,y:141.2}).wait(1).to({graphics:mask_graphics_36,x:191.9,y:146.5}).wait(1).to({graphics:mask_graphics_37,x:182,y:145.4}).wait(1).to({graphics:mask_graphics_38,x:184.5,y:115.1}).wait(1).to({graphics:mask_graphics_39,x:204.2,y:98.1}).wait(1).to({graphics:mask_graphics_40,x:204.2,y:81}).wait(1).to({graphics:mask_graphics_41,x:215.9,y:95.8}).wait(1).to({graphics:mask_graphics_42,x:248.8,y:97.5}).wait(1).to({graphics:mask_graphics_43,x:298.5,y:93.9}).wait(1).to({graphics:mask_graphics_44,x:297.6,y:93.9}).wait(1).to({graphics:mask_graphics_45,x:289,y:97}).wait(1).to({graphics:mask_graphics_46,x:280.3,y:98.9}).wait(1).to({graphics:mask_graphics_47,x:272.9,y:113.7}).wait(1).to({graphics:mask_graphics_48,x:272.9,y:113.7}).wait(1).to({graphics:mask_graphics_49,x:272.9,y:113.7}).wait(1).to({graphics:mask_graphics_50,x:273,y:113.7}).wait(1).to({graphics:mask_graphics_51,x:272.9,y:113.7}).wait(1).to({graphics:mask_graphics_52,x:272.9,y:113.7}).wait(1).to({graphics:mask_graphics_53,x:266.4,y:95.6}).wait(1).to({graphics:mask_graphics_54,x:273,y:113.8}).wait(6));

	// Girl9
	this.instance = new lib.Girl9();
	this.instance.parent = this;
	this.instance.setTransform(270,140,1,1,0,0,0,270,140);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:1},40,cjs.Ease.cubicInOut).wait(1));

	// GirlBG
	this.instance_1 = new lib.GirlBG_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270,140,1,1,0,0,0,270,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540,280);


(lib.bird2mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bird2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:30},263).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-40,61,79);


(lib.bird1mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bird1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:86},263).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-27,86,54);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.ALFALOGO();
	this.instance.parent = this;
	this.instance.setTransform(92.6,25.4,1,1,0,0,0,0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(408));

	// LEGAL
	this.instance_1 = new lib.legal_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(271,240);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(268).to({_off:false},0).to({y:220,alpha:1},18,cjs.Ease.cubicOut).wait(101).to({y:200,alpha:0},17,cjs.Ease.cubicIn).wait(4));

	// BTN
	this.instance_2 = new lib.button();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453,156);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({y:140,alpha:1},14,cjs.Ease.quadOut).wait(355).to({y:120,alpha:0},17,cjs.Ease.cubicIn).wait(4));

	// BIRD2
	this.instance_3 = new lib.bird2mov("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(421,58,0.9,0.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:437,alpha:1,startPosition:24},24).wait(215).to({startPosition:239},0).to({alpha:0,startPosition:263},24,cjs.Ease.cubicIn).to({_off:true},1).wait(144));

	// BIRD1
	this.instance_4 = new lib.bird1mov("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(20,152,0.9,0.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,x:36,alpha:1,startPosition:24},24).wait(215).to({startPosition:239},0).to({alpha:0,startPosition:263},24,cjs.Ease.cubicIn).to({_off:true},1).wait(144));

	// 5
	this.instance_5 = new lib.txt02_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(270,150);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(143).to({_off:false},0).to({y:134,alpha:1},24,cjs.Ease.cubicOut).wait(75).to({y:110,alpha:0},24,cjs.Ease.cubicIn).to({_off:true},1).wait(141));

	// Percent
	this.instance_6 = new lib.txt01_percent();
	this.instance_6.parent = this;
	this.instance_6.setTransform(367,236);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({y:220,alpha:1},14,cjs.Ease.quadOut).wait(81).to({y:200,alpha:0},24,cjs.Ease.cubicIn).to({_off:true},1).wait(264));

	// GIRL_9
	this.instance_7 = new lib.GirlAnimation("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(230,140,1,1,0,0,0,270,140);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:270,alpha:1,startPosition:24,loop:false},24,cjs.Ease.cubicOut).wait(95).to({mode:"single",startPosition:59},0).to({y:120,alpha:0},24,cjs.Ease.cubicIn).to({_off:true},1).wait(264));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.parent = this;
	this.instance_8.setTransform(270,140,1,1,0,0,0,270,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(408));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-649,612,1260);


// stage content:
(lib.alfa_credit19_nine_girl_540x280_reviewv3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgqLgV3MBUXAAAMAAAArvMhUXAAAg");
	this.shape.setTransform(270,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270,140,2.25,0.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgqLAV4MAAAgrvMBUXAAAMAAAArvg");
	this.shape_1.setTransform(270,140);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(230,139,581,282);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 540,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bird1.png", id:"bird1"},
		{src:"bird2.png", id:"bird2"},
		{src:"GirlBG.jpg", id:"GirlBG"},
		{src:"GirlNine.png", id:"GirlNine"},
		{src:"legal.png", id:"legal"}
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