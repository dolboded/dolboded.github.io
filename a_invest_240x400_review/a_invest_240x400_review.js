(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.BALL01 = function() {
	this.initialize(img.BALL01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,317);


(lib.BALL02 = function() {
	this.initialize(img.BALL02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,435);


(lib.BALL_RED = function() {
	this.initialize(img.BALL_RED);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,242);// helper functions:

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


(lib.txt04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("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");
	this.shape.setTransform(80.025,57.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt04, new cjs.Rectangle(0,0,157.7,105.7), null);


(lib.txt03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(90.125,57.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03, new cjs.Rectangle(0,0,180.2,105.7), null);


(lib.txt02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("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");
	this.shape.setTransform(95.5,57.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt02, new cjs.Rectangle(0,0,191.2,105.7), null);


(lib.txt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// инвестиции в три шага copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(98.075,47.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtOAVIAAgpIadAAIAAApg");
	this.shape_1.setTransform(88.675,76.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt01, new cjs.Rectangle(0,0,196,80.1), null);


(lib.LOGOWHITE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFDMIAAg6IELAAIAAA6gABFBTIgRg6IhpAAIgTA6Ig3AAIBTj0QAHgVAIgJQALgMAVAAQAUAAALAMQAIAJAHAVIBPD0gAglgXIBJAAIgjh0IgBAAg");
	this.shape.setTransform(13.4,20.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGOWHITE, new cjs.Rectangle(0,0,26.8,40.8), null);


(lib.LOGORED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AiFDMIAAg6IELAAIAAA6gABFBTIgRg6IhpAAIgTA6Ig3AAIBTj0QAHgVAIgJQALgMAVAAQAUAAALAMQAIAJAHAVIBPD0gAglgXIBJAAIgjh0IgBAAg");
	this.shape.setTransform(13.4,20.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGORED, new cjs.Rectangle(0,0,26.8,40.8), null);


(lib.BUTTWH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Консультация copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AioBSIAQgmIgmhZIAaAAIAXA7IAXg7IAXAAIgxB/gAGHBIIAAgbIhMAAIAAhaIAXAAIAABHIAjAAIAAhHIAXAAIAABHIAQAAIAAAugAkCApQgKgGgFgKQgGgLAAgOQAAgNAFgLQAHgLAJgGQAJgGANAAQAKAAAIADQAIAEAFAFQAEAFADAFIACAJIgWAAIgDgEQgBgDgEgCQgEgCgFAAQgHAAgEAEQgEADgDAHQgDAGAAAHQAAAIADAGQADAGAEAEQAEADAHAAQAGAAADgCQAEgCABgDIADgEIAWAAIgCAJQgCAFgFAFQgFAGgHADQgIADgLABQgNgBgJgGgAnUApQgKgGgGgKQgGgLAAgOQAAgNAGgLQAGgLAKgGQAJgGANAAQAOAAAKAGQALAGAFALQAGALgBANQABAOgGALQgFAKgLAGQgKAGgOABQgNgBgJgGgAnJgXQgFADgCAHQgDAGABAHQgBAIADAGQACAGAFAEQAFADAGAAQAHAAAGgDQAEgEACgGQADgGAAgIQAAgHgDgGQgCgHgEgDQgGgEgHAAQgGAAgFAEgADeAqQgJgGgFgLQgEgKgBgPQABgOAEgLQAFgKAJgGQAJgGALAAQAIAAAFADQAGADACAEIAFAFIAAgNIAWAAIAABaIgWAAIAAgNIgFAGQgCADgGADQgFADgIAAQgLAAgJgFgADogTQgFAIAAALQAAAMAFAIQAGAHAJAAQAKAAAFgHQAFgIABgMQgBgLgFgIQgFgHgKgBQgJABgGAHgAhbAuIAAgVIACAAQAFAAADgCQADgBABgFIACgNIAFgxIBDAAIAABaIgWAAIAAhGIgbAAIgCAfQgBAOgEAJQgDAJgGAEQgHAEgLAAgAJMAtIAAgeIgQAAIgTAeIgaAAIAXgiQgKgDgFgHQgFgGAAgKQAAgIADgHQAEgGAHgEQAIgFALAAIAwAAIAABagAItgXQgEACAAAGQAAAGAEADQADADAIAAIAUAAIAAgXIgUAAQgIAAgDADgAHnAtIAAg6IgnA6IgXAAIAAhaIAXAAIAAA6IAng6IAWAAIAABagACKAtIAAhGIgdAAIAAgUIBSAAIAAAUIgdAAIAABGgAAVAtIAAhaIAYAAIAAAcIAUAAQANABAIAEQAIAEAEAHQAEAGgBAJQABAIgEAHQgEAHgIAFQgIAEgNAAgAAtAbIARAAQAHAAAEgEQAFgDAAgGQAAgGgFgDQgEgEgHAAIgRAAgAlBAtIAAgkIglAAIAAAkIgXAAIAAhaIAXAAIAAAjIAlAAIAAgjIAXAAIAABagAoRAtIg5g5IAAA5IgYAAIAAh+IAYAAIAAA4IA4g4IAfAAIg+A9IBCBBg");
	this.shape.setTransform(92.1,22.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF3124").s().p("AtvDPQgMABgIgJQgIgIAAgLIAAlnQAAgLAIgIQAIgIAMgBIbgAAQALABAJAIQAHAIAAALIAAFnQAAALgHAIQgJAJgLgBg");
	this.shape_1.setTransform(90.825,20.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.BUTTWH, new cjs.Rectangle(0,0,181.7,41.5), null);


(lib.BUTTRED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Консультация copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AioBSIAQgmIgmhZIAaAAIAXA7IAXg7IAXAAIgxB/gAGHBIIAAgbIhMAAIAAhaIAXAAIAABHIAjAAIAAhHIAXAAIAABHIAQAAIAAAugAkCApQgKgGgFgKQgGgLAAgOQAAgNAFgLQAHgLAJgGQAJgGANAAQAKAAAIADQAIAEAFAFQAEAFADAFIACAJIgWAAIgDgEQgBgDgEgCQgEgCgFAAQgHAAgEAEQgEADgDAHQgDAGAAAHQAAAIADAGQADAGAEAEQAEADAHAAQAGAAADgCQAEgCABgDIADgEIAWAAIgCAJQgCAFgFAFQgFAGgHADQgIADgLABQgNgBgJgGgAnUApQgKgGgGgKQgGgLAAgOQAAgNAGgLQAGgLAKgGQAJgGANAAQAOAAAKAGQALAGAFALQAGALgBANQABAOgGALQgFAKgLAGQgKAGgOABQgNgBgJgGgAnJgXQgFADgCAHQgDAGABAHQgBAIADAGQACAGAFAEQAFADAGAAQAHAAAGgDQAEgEACgGQADgGAAgIQAAgHgDgGQgCgHgEgDQgGgEgHAAQgGAAgFAEgADeAqQgJgGgFgLQgEgKgBgPQABgOAEgLQAFgKAJgGQAJgGALAAQAIAAAFADQAGADACAEIAFAFIAAgNIAWAAIAABaIgWAAIAAgNIgFAGQgCADgGADQgFADgIAAQgLAAgJgFgADogTQgFAIAAALQAAAMAFAIQAGAHAJAAQAKAAAFgHQAFgIABgMQgBgLgFgIQgFgHgKgBQgJABgGAHgAhbAuIAAgVIACAAQAFAAADgCQADgBABgFIACgNIAFgxIBDAAIAABaIgWAAIAAhGIgbAAIgCAfQgBAOgEAJQgDAJgGAEQgHAEgLAAgAJMAtIAAgeIgQAAIgTAeIgaAAIAXgiQgKgDgFgHQgFgGAAgKQAAgIADgHQAEgGAHgEQAIgFALAAIAwAAIAABagAItgXQgEACAAAGQAAAGAEADQADADAIAAIAUAAIAAgXIgUAAQgIAAgDADgAHnAtIAAg6IgnA6IgXAAIAAhaIAXAAIAAA6IAng6IAWAAIAABagACKAtIAAhGIgdAAIAAgUIBSAAIAAAUIgdAAIAABGgAAVAtIAAhaIAYAAIAAAcIAUAAQANABAIAEQAIAEAEAHQAEAGgBAJQABAIgEAHQgEAHgIAFQgIAEgNAAgAAtAbIARAAQAHAAAEgEQAFgDAAgGQAAgGgFgDQgEgEgHAAIgRAAgAlBAtIAAgkIglAAIAAAkIgXAAIAAhaIAXAAIAAAjIAlAAIAAgjIAXAAIAABagAoRAtIg5g5IAAA5IgYAAIAAh+IAYAAIAAA4IA4g4IAfAAIg+A9IBCBBg");
	this.shape.setTransform(92.1,22.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtvDPQgMABgIgJQgIgIAAgLIAAlnQAAgLAIgIQAIgIAMgBIbgAAQALABAJAIQAHAIAAALIAAFnQAAALgHAIQgJAJgLgBg");
	this.shape_1.setTransform(90.825,20.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.BUTTRED, new cjs.Rectangle(0,0,181.7,41.5), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.BGWHITE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BGWHITE, new cjs.Rectangle(0,0,240,400), null);


(lib.BGRED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BGRED, new cjs.Rectangle(0,0,240,400), null);


(lib.BALLRED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BALL_RED();
	this.instance.parent = this;
	this.instance.setTransform(-132,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BALLRED, new cjs.Rectangle(-132,-121,263,242), null);


(lib.BALL03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BALL02();
	this.instance.parent = this;
	this.instance.setTransform(-127,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BALL03, new cjs.Rectangle(-127,-218,254,435), null);


(lib.BALL01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BALL01();
	this.instance.parent = this;
	this.instance.setTransform(-139,-159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BALL01_1, new cjs.Rectangle(-139,-159,277,317), null);


(lib.TXT4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt04();
	this.instance.parent = this;
	this.instance.setTransform(332.5,37.9,1,1,0,0,0,95.5,52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:92.5},29,cjs.Ease.quadOut).wait(40).to({x:-144.5},30,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,0,631.1,84.5);


(lib.TXT3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt03();
	this.instance.parent = this;
	this.instance.setTransform(332.5,37.9,1,1,0,0,0,95.5,52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:92.5},29,cjs.Ease.quadOut).wait(40).to({x:-133.5},30,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,0,640.3,85.8);


(lib.TXT2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt02();
	this.instance.parent = this;
	this.instance.setTransform(332.5,37.9,1,1,0,0,0,95.5,52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:92.5},29,cjs.Ease.quadOut).wait(40).to({x:-144.5},30,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,0,662,85.7);


(lib.TXT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt01();
	this.instance.parent = this;
	this.instance.setTransform(334,18.1,1,1,0,0,0,98,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:94},29,cjs.Ease.quadOut).wait(40).to({x:-146},30,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,0,668.2,56.2);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt04
	this.instance = new lib.TXT4("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(102,180.2,1,1,0,0,0,77,42.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(256).to({_off:false},0).to({_off:true},100).wait(23));

	// WHITE copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_256 = new cjs.Graphics().p("AAAfQMAAAg+fMAlgAAAMAAAA+fg");
	var mask_graphics_257 = new cjs.Graphics().p("AhQfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_258 = new cjs.Graphics().p("AiffQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_259 = new cjs.Graphics().p("AjqfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_260 = new cjs.Graphics().p("AkzfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_261 = new cjs.Graphics().p("Al5fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_262 = new cjs.Graphics().p("Am8fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_263 = new cjs.Graphics().p("An8fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_264 = new cjs.Graphics().p("Ao6fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_265 = new cjs.Graphics().p("Ap0fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_266 = new cjs.Graphics().p("AqsfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_267 = new cjs.Graphics().p("ArhfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_268 = new cjs.Graphics().p("AsTfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_269 = new cjs.Graphics().p("AtCfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_270 = new cjs.Graphics().p("AtufQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_271 = new cjs.Graphics().p("AuXfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_272 = new cjs.Graphics().p("Au+fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_273 = new cjs.Graphics().p("AvifQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_274 = new cjs.Graphics().p("AwCfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_275 = new cjs.Graphics().p("AwgfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_276 = new cjs.Graphics().p("Aw7fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_277 = new cjs.Graphics().p("AxUfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_278 = new cjs.Graphics().p("AxpfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_279 = new cjs.Graphics().p("Ax8fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_280 = new cjs.Graphics().p("AyLfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_281 = new cjs.Graphics().p("AyYfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_282 = new cjs.Graphics().p("AyifQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_283 = new cjs.Graphics().p("AypfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_284 = new cjs.Graphics().p("AyufQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_285 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_325 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_326 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_327 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_328 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_329 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_330 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_331 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_332 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_333 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_334 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_335 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_336 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_337 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_338 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_339 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_340 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_341 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_342 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_343 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_344 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_345 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_346 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_347 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_348 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_349 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_350 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_351 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_352 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_353 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_354 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_355 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_graphics_376 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(256).to({graphics:mask_graphics_256,x:240,y:200}).wait(1).to({graphics:mask_graphics_257,x:231.8668,y:200}).wait(1).to({graphics:mask_graphics_258,x:224.019,y:200}).wait(1).to({graphics:mask_graphics_259,x:216.4566,y:200}).wait(1).to({graphics:mask_graphics_260,x:209.1795,y:200}).wait(1).to({graphics:mask_graphics_261,x:202.1879,y:200}).wait(1).to({graphics:mask_graphics_262,x:195.4816,y:200}).wait(1).to({graphics:mask_graphics_263,x:189.0606,y:200}).wait(1).to({graphics:mask_graphics_264,x:182.9251,y:200}).wait(1).to({graphics:mask_graphics_265,x:177.0749,y:200}).wait(1).to({graphics:mask_graphics_266,x:171.5101,y:200}).wait(1).to({graphics:mask_graphics_267,x:166.2307,y:200}).wait(1).to({graphics:mask_graphics_268,x:161.2366,y:200}).wait(1).to({graphics:mask_graphics_269,x:156.5279,y:200}).wait(1).to({graphics:mask_graphics_270,x:152.1046,y:200}).wait(1).to({graphics:mask_graphics_271,x:147.9667,y:200}).wait(1).to({graphics:mask_graphics_272,x:144.1141,y:200}).wait(1).to({graphics:mask_graphics_273,x:140.547,y:200}).wait(1).to({graphics:mask_graphics_274,x:137.2652,y:200}).wait(1).to({graphics:mask_graphics_275,x:134.2687,y:200}).wait(1).to({graphics:mask_graphics_276,x:131.5577,y:200}).wait(1).to({graphics:mask_graphics_277,x:129.132,y:200}).wait(1).to({graphics:mask_graphics_278,x:126.9917,y:200}).wait(1).to({graphics:mask_graphics_279,x:125.1367,y:200}).wait(1).to({graphics:mask_graphics_280,x:123.5672,y:200}).wait(1).to({graphics:mask_graphics_281,x:122.283,y:200}).wait(1).to({graphics:mask_graphics_282,x:121.2842,y:200}).wait(1).to({graphics:mask_graphics_283,x:120.5707,y:200}).wait(1).to({graphics:mask_graphics_284,x:120.1427,y:200}).wait(1).to({graphics:mask_graphics_285,x:120,y:200}).wait(40).to({graphics:mask_graphics_325,x:120,y:200}).wait(1).to({graphics:mask_graphics_326,x:119.7333,y:200}).wait(1).to({graphics:mask_graphics_327,x:118.9333,y:200}).wait(1).to({graphics:mask_graphics_328,x:117.6,y:200}).wait(1).to({graphics:mask_graphics_329,x:115.7333,y:200}).wait(1).to({graphics:mask_graphics_330,x:113.3333,y:200}).wait(1).to({graphics:mask_graphics_331,x:110.4,y:200}).wait(1).to({graphics:mask_graphics_332,x:106.9333,y:200}).wait(1).to({graphics:mask_graphics_333,x:102.9333,y:200}).wait(1).to({graphics:mask_graphics_334,x:98.4,y:200}).wait(1).to({graphics:mask_graphics_335,x:93.3333,y:200}).wait(1).to({graphics:mask_graphics_336,x:87.7333,y:200}).wait(1).to({graphics:mask_graphics_337,x:81.6,y:200}).wait(1).to({graphics:mask_graphics_338,x:74.9333,y:200}).wait(1).to({graphics:mask_graphics_339,x:67.7333,y:200}).wait(1).to({graphics:mask_graphics_340,x:60,y:200}).wait(1).to({graphics:mask_graphics_341,x:51.7333,y:200}).wait(1).to({graphics:mask_graphics_342,x:42.9333,y:200}).wait(1).to({graphics:mask_graphics_343,x:33.6,y:200}).wait(1).to({graphics:mask_graphics_344,x:23.7333,y:200}).wait(1).to({graphics:mask_graphics_345,x:13.3333,y:200}).wait(1).to({graphics:mask_graphics_346,x:2.4,y:200}).wait(1).to({graphics:mask_graphics_347,x:-9.0667,y:200}).wait(1).to({graphics:mask_graphics_348,x:-21.0667,y:200}).wait(1).to({graphics:mask_graphics_349,x:-33.6,y:200}).wait(1).to({graphics:mask_graphics_350,x:-46.6667,y:200}).wait(1).to({graphics:mask_graphics_351,x:-60.2667,y:200}).wait(1).to({graphics:mask_graphics_352,x:-74.4,y:200}).wait(1).to({graphics:mask_graphics_353,x:-89.0667,y:200}).wait(1).to({graphics:mask_graphics_354,x:-104.2667,y:200}).wait(1).to({graphics:mask_graphics_355,x:-120,y:200}).wait(21).to({graphics:mask_graphics_376,x:-120,y:200}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// BUT_RED copy
	this.instance_1 = new lib.BUTTWH();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.5,334.55,1,1,0,0,0,90.8,20.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(256).to({_off:false},0).wait(69).to({x:-119.5},30,cjs.Ease.quadIn).to({_off:true},1).wait(23));

	// LOGO_RED copy
	this.instance_2 = new lib.LOGORED();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.4,49.4,1,1,0,0,0,13.4,20.4);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(256).to({_off:false},0).wait(69).to({x:-200.6},30,cjs.Ease.quadIn).to({_off:true},1).wait(23));

	// BALL03
	this.instance_3 = new lib.BALL03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(255,212);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(256).to({_off:false},0).to({x:182},29,cjs.Ease.quadOut).wait(40).to({x:36},51,cjs.Ease.quadInOut).to({_off:true},1).wait(2));

	// BG_WHITE copy
	this.instance_4 = new lib.BGWHITE();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(256).to({_off:false},0).to({_off:true},100).wait(23));

	// txt03
	this.instance_5 = new lib.TXT3("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(112.1,180.9,1,1,0,0,0,87.1,42.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(171).to({_off:false},0).to({_off:true},100).wait(108));

	// RED (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_171 = new cjs.Graphics().p("AAAfQMAAAg+fMAlgAAAMAAAA+fg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AhQfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_173 = new cjs.Graphics().p("AiffQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AjqfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AkzfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_176 = new cjs.Graphics().p("Al5fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_177 = new cjs.Graphics().p("Am8fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_178 = new cjs.Graphics().p("An8fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_179 = new cjs.Graphics().p("Ao6fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_180 = new cjs.Graphics().p("Ap0fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_181 = new cjs.Graphics().p("AqsfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_182 = new cjs.Graphics().p("ArhfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AsTfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_184 = new cjs.Graphics().p("AtCfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AtufQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_186 = new cjs.Graphics().p("AuXfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_187 = new cjs.Graphics().p("Au+fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AvifQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AwCfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AwgfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_191 = new cjs.Graphics().p("Aw7fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AxUfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AxpfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_194 = new cjs.Graphics().p("Ax8fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AyLfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AyYfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AyifQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AypfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AyufQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(171).to({graphics:mask_1_graphics_171,x:240,y:200}).wait(1).to({graphics:mask_1_graphics_172,x:231.8668,y:200}).wait(1).to({graphics:mask_1_graphics_173,x:224.019,y:200}).wait(1).to({graphics:mask_1_graphics_174,x:216.4566,y:200}).wait(1).to({graphics:mask_1_graphics_175,x:209.1795,y:200}).wait(1).to({graphics:mask_1_graphics_176,x:202.1879,y:200}).wait(1).to({graphics:mask_1_graphics_177,x:195.4816,y:200}).wait(1).to({graphics:mask_1_graphics_178,x:189.0606,y:200}).wait(1).to({graphics:mask_1_graphics_179,x:182.9251,y:200}).wait(1).to({graphics:mask_1_graphics_180,x:177.0749,y:200}).wait(1).to({graphics:mask_1_graphics_181,x:171.5101,y:200}).wait(1).to({graphics:mask_1_graphics_182,x:166.2307,y:200}).wait(1).to({graphics:mask_1_graphics_183,x:161.2366,y:200}).wait(1).to({graphics:mask_1_graphics_184,x:156.5279,y:200}).wait(1).to({graphics:mask_1_graphics_185,x:152.1046,y:200}).wait(1).to({graphics:mask_1_graphics_186,x:147.9667,y:200}).wait(1).to({graphics:mask_1_graphics_187,x:144.1141,y:200}).wait(1).to({graphics:mask_1_graphics_188,x:140.547,y:200}).wait(1).to({graphics:mask_1_graphics_189,x:137.2652,y:200}).wait(1).to({graphics:mask_1_graphics_190,x:134.2687,y:200}).wait(1).to({graphics:mask_1_graphics_191,x:131.5577,y:200}).wait(1).to({graphics:mask_1_graphics_192,x:129.132,y:200}).wait(1).to({graphics:mask_1_graphics_193,x:126.9917,y:200}).wait(1).to({graphics:mask_1_graphics_194,x:125.1367,y:200}).wait(1).to({graphics:mask_1_graphics_195,x:123.5672,y:200}).wait(1).to({graphics:mask_1_graphics_196,x:122.283,y:200}).wait(1).to({graphics:mask_1_graphics_197,x:121.2842,y:200}).wait(1).to({graphics:mask_1_graphics_198,x:120.5707,y:200}).wait(1).to({graphics:mask_1_graphics_199,x:120.1427,y:200}).wait(1).to({graphics:mask_1_graphics_200,x:120,y:200}).wait(101).to({graphics:null,x:0,y:0}).wait(78));

	// BUT_WH copy
	this.instance_6 = new lib.BUTTRED();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120.5,334.55,1,1,0,0,0,90.8,20.8);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(171).to({_off:false},0).to({_off:true},130).wait(78));

	// LOGO_WH copy
	this.instance_7 = new lib.LOGOWHITE();
	this.instance_7.parent = this;
	this.instance_7.setTransform(39.4,49.4,1,1,0,0,0,13.4,20.4);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(171).to({_off:false},0).to({_off:true},130).wait(78));

	// BALLRED
	this.instance_8 = new lib.BALLRED();
	this.instance_8.parent = this;
	this.instance_8.setTransform(264,284);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(171).to({_off:false},0).to({x:191},29,cjs.Ease.quadOut).wait(40).to({x:5},59,cjs.Ease.quadInOut).to({_off:true},1).wait(79));

	// BG_RED copy
	this.instance_9 = new lib.BGRED();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(171).to({_off:false},0).to({_off:true},130).wait(78));

	// txt02
	this.instance_10 = new lib.TXT2("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(117.5,180.8,1,1,0,0,0,92.5,42.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(86).to({_off:false},0).to({_off:true},100).wait(193));

	// WHITE (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_86 = new cjs.Graphics().p("AAAfQMAAAg+fMAlgAAAMAAAA+fg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AhQfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_88 = new cjs.Graphics().p("AiffQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_89 = new cjs.Graphics().p("AjqfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_90 = new cjs.Graphics().p("AkzfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_91 = new cjs.Graphics().p("Al5fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_92 = new cjs.Graphics().p("Am8fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_93 = new cjs.Graphics().p("An8fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_94 = new cjs.Graphics().p("Ao6fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_95 = new cjs.Graphics().p("Ap0fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AqsfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_97 = new cjs.Graphics().p("ArhfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AsTfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_99 = new cjs.Graphics().p("AtCfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AtufQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_101 = new cjs.Graphics().p("AuXfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_102 = new cjs.Graphics().p("Au+fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_103 = new cjs.Graphics().p("AvifQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_104 = new cjs.Graphics().p("AwCfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AwgfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_106 = new cjs.Graphics().p("Aw7fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_107 = new cjs.Graphics().p("AxUfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_108 = new cjs.Graphics().p("AxpfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_109 = new cjs.Graphics().p("Ax8fQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_110 = new cjs.Graphics().p("AyLfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AyYfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AyifQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_113 = new cjs.Graphics().p("AypfQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_114 = new cjs.Graphics().p("AyufQMAAAg+fMAlfAAAMAAAA+fg");
	var mask_2_graphics_115 = new cjs.Graphics().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_2_graphics_86,x:240,y:200}).wait(1).to({graphics:mask_2_graphics_87,x:231.8668,y:200}).wait(1).to({graphics:mask_2_graphics_88,x:224.019,y:200}).wait(1).to({graphics:mask_2_graphics_89,x:216.4566,y:200}).wait(1).to({graphics:mask_2_graphics_90,x:209.1795,y:200}).wait(1).to({graphics:mask_2_graphics_91,x:202.1879,y:200}).wait(1).to({graphics:mask_2_graphics_92,x:195.4816,y:200}).wait(1).to({graphics:mask_2_graphics_93,x:189.0606,y:200}).wait(1).to({graphics:mask_2_graphics_94,x:182.9251,y:200}).wait(1).to({graphics:mask_2_graphics_95,x:177.0749,y:200}).wait(1).to({graphics:mask_2_graphics_96,x:171.5101,y:200}).wait(1).to({graphics:mask_2_graphics_97,x:166.2307,y:200}).wait(1).to({graphics:mask_2_graphics_98,x:161.2366,y:200}).wait(1).to({graphics:mask_2_graphics_99,x:156.5279,y:200}).wait(1).to({graphics:mask_2_graphics_100,x:152.1046,y:200}).wait(1).to({graphics:mask_2_graphics_101,x:147.9667,y:200}).wait(1).to({graphics:mask_2_graphics_102,x:144.1141,y:200}).wait(1).to({graphics:mask_2_graphics_103,x:140.547,y:200}).wait(1).to({graphics:mask_2_graphics_104,x:137.2652,y:200}).wait(1).to({graphics:mask_2_graphics_105,x:134.2687,y:200}).wait(1).to({graphics:mask_2_graphics_106,x:131.5577,y:200}).wait(1).to({graphics:mask_2_graphics_107,x:129.132,y:200}).wait(1).to({graphics:mask_2_graphics_108,x:126.9917,y:200}).wait(1).to({graphics:mask_2_graphics_109,x:125.1367,y:200}).wait(1).to({graphics:mask_2_graphics_110,x:123.5672,y:200}).wait(1).to({graphics:mask_2_graphics_111,x:122.283,y:200}).wait(1).to({graphics:mask_2_graphics_112,x:121.2842,y:200}).wait(1).to({graphics:mask_2_graphics_113,x:120.5707,y:200}).wait(1).to({graphics:mask_2_graphics_114,x:120.1427,y:200}).wait(1).to({graphics:mask_2_graphics_115,x:120,y:200}).wait(99).to({graphics:null,x:0,y:0}).wait(165));

	// BUT_RED
	this.instance_11 = new lib.BUTTWH();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120.5,334.55,1,1,0,0,0,90.8,20.8);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(86).to({_off:false},0).to({_off:true},128).wait(165));

	// LOGO_RED
	this.instance_12 = new lib.LOGORED();
	this.instance_12.parent = this;
	this.instance_12.setTransform(39.4,49.4,1,1,0,0,0,13.4,20.4);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(86).to({_off:false},0).to({_off:true},128).wait(165));

	// BALL01
	this.instance_13 = new lib.BALL01_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(257,263);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(86).to({_off:false},0).to({x:187},29,cjs.Ease.quadOut).wait(40).to({x:7},58,cjs.Ease.quadInOut).to({_off:true},1).wait(165));

	// BG_WHITE
	this.instance_14 = new lib.BGWHITE();
	this.instance_14.parent = this;
	this.instance_14.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(86).to({_off:false},0).to({_off:true},128).wait(165));

	// txt01
	this.instance_15 = new lib.TXT1("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(119,171.1,1,1,0,0,0,94,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},100).wait(279));

	// BUT_WH
	this.instance_16 = new lib.BUTTRED();
	this.instance_16.parent = this;
	this.instance_16.setTransform(360.5,334.55,1,1,0,0,0,90.8,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:120.5},29,cjs.Ease.quadOut).to({_off:true},99).wait(251));

	// LOGO_WH
	this.instance_17 = new lib.LOGOWHITE();
	this.instance_17.parent = this;
	this.instance_17.setTransform(279.4,49.4,1,1,0,0,0,13.4,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:39.4},29,cjs.Ease.quadOut).to({_off:true},99).wait(251));

	// BG_RED
	this.instance_18 = new lib.BGRED();
	this.instance_18.parent = this;
	this.instance_18.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(379));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-8,1040,424);


// stage content:
(lib.a_invest_240x400_review = function(mode,startPosition,loop) {
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
	this.shape_1.setTransform(120,199.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119,199,334.2,202);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BALL01.png", id:"BALL01"},
		{src:"BALL02.png", id:"BALL02"},
		{src:"BALL_RED.png", id:"BALL_RED"}
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