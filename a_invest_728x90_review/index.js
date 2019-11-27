(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.BALL01 = function() {
	this.initialize(img.BALL01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,126);


(lib.BALL03 = function() {
	this.initialize(img.BALL03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,196);


(lib.BALL_RED = function() {
	this.initialize(img.BALL_RED);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,121);// helper functions:

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
	this.shape.setTransform(271.9519,-77.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt04, new cjs.Rectangle(54,-106.7,520,48.5), null);


(lib.txt03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(291.8269,-76.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03, new cjs.Rectangle(58,-106.5,559,48.5), null);


(lib.txt02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// v copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("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");
	this.shape.setTransform(287.75,-78.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt02, new cjs.Rectangle(50.6,-107.2,516.8,48.5), null);


(lib.txt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ACsDXQAAg7gigeQghgdhBAAIjYAAIAAjbIDHAAQA4AAAfgbQAfgbAAgyQAAg3gogfQgngfhFAAQhHAAgpAlQgfAcgJApIj9AAQAFiBBihbQBwhpC+AAQDAAABqBTQBqBSAACUQAABTgvA9QgmAxg4AXQBIAWAuA5QA6BIAABwQAACXhxBaQh0BcjIAAQjNAAh4hyQhjhdgJiDIEBAAQAJArAmAfQAxAoBOAAQBRAAAtgiQAtghAAg5g");
	this.shape.setTransform(92.1311,-74.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtOAVIAAgpIadAAIAAApg");
	this.shape_1.setTransform(439.675,-62.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// инвестиции в три шага copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(341.975,-75.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt01, new cjs.Rectangle(48,-132.1,557,114.69999999999999), null);


(lib.LOGOWHITE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhqCjIAAgvIDVAAIAAAvgAA4BDIgOgvIhUAAIgPAvIgsAAIBCjEQAGgQAGgIQAJgJAQAAQAQAAAJAJQAHAIAFAQIA/DEgAgdgTIA6AAIgchcIgBAAg");
	this.shape.setTransform(9.725,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGOWHITE, new cjs.Rectangle(-1,-11,130.4,41.6), null);


(lib.LOGORED2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhqCjIAAgvIDVAAIAAAvgAA4BDIgOgvIhUAAIgPAvIgsAAIBCjDQAGgRAGgIQAJgJAQAAQAQAAAJAJQAHAIAFARIA/DDgAgdgTIA6AAIgchcIgBAAg");
	this.shape.setTransform(9.725,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGORED2, new cjs.Rectangle(-1,-11,130.4,41.6), null);


(lib.BUTTWH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Консультация copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhuA2IAKgZIgZg6IARAAIAPAmIAPgmIAQAAIghBTgAECAwIAAgSIgyAAIAAg7IAPAAIAAAuIAYAAIAAguIAOAAIAAAuIALAAIAAAfgACTAbQgGgDgDgHQgEgHAAgKQAAgJAEgHQADgHAGgEQAFgEAHAAQAGAAAEACIAFAFIADADIAAgIIAOAAIAAA7IgOAAIAAgJIgDAEIgFAEQgEACgGAAQgHAAgFgEgACZgMQgDAFAAAHQAAAIADAFQAEAFAGAAQAHAAADgFQAEgFAAgIQAAgHgEgFQgDgFgHAAQgGAAgEAFgAiqAbQgGgEgEgHQgDgHgBgJQABgIADgIQAEgHAGgEQAGgEAJAAQAHAAAFACQAFADADADQADADABAEIACAGIgOAAIgCgDQgBgCgDgBIgGgBQgEAAgDACQgDACgCAFQgBADAAAFQAAAFABAEQACAEADADQADACAEAAIAGgBIAEgEIACgCIAOAAIgCAGQgBADgDADQgDAEgFACQgFACgHAAQgJAAgGgEgAk1AbQgGgEgEgHQgEgHAAgJQAAgIAEgIQAEgHAGgEQAHgEAIAAQAJAAAHAEQAHAEADAHQAEAIAAAIQAAAJgEAHQgDAHgHAEQgHAEgJAAQgIAAgHgEgAktgPQgDACgCAFQgBADAAAFQAAAFABAEQACAEADADQADACAEAAQAFAAADgCQAEgDABgEQACgEAAgFQAAgFgCgDQgBgFgEgCQgDgCgFAAQgEAAgDACgAg8AeIAAgNIABAAQAEAAACgCQACgBABgDIABgJIADgfIAtAAIAAA7IgPAAIAAguIgSAAIgBAUQgBAJgCAGQgCAGgEACQgFADgHAAgAGEAeIAAgUIgKAAIgNAUIgRAAIAPgXQgHgCgDgEQgDgEAAgGQAAgGACgEQADgFAEgCQAFgDAIAAIAfAAIAAA7gAFwgPQgDACAAAEQAAADADACQACACAFAAIANAAIAAgPIgNAAQgFAAgCACgAFCAeIAAgmIgbAmIgOAAIAAg7IAOAAIAAAmIAbgmIAOAAIAAA7gABcAeIAAguIgUAAIAAgNIA2AAIAAANIgTAAIAAAugAAOAeIAAg7IAPAAIAAASIAOAAQAJABAFACQAFADACAEQADAEAAAGQAAAFgDAFQgCAFgFADQgFADgJAAgAAdASIAMAAQAFAAADgDQADgCAAgEQAAgEgDgCQgDgCgFAAIgMAAgAjTAeIAAgYIgZAAIAAAYIgPAAIAAg7IAPAAIAAAXIAZAAIAAgXIAPAAIAAA7gAlcAeIgmglIAAAlIgQAAIAAhTIAQAAIAAAlIAlglIAUAAIgoAoIAqArg");
	this.shape.setTransform(607.325,-267.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApECJQgHAAgGgGQgGgFABgHIAAjtQgBgHAGgFQAGgGAHAAISJAAQAIAAAFAGQAGAFAAAHIAADtQAAAHgGAFQgFAGgIAAg");
	this.shape_1.setTransform(605.95,-268.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.BUTTWH, new cjs.Rectangle(27.7,-282,638.1999999999999,315.5), null);


(lib.BUTTRED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Консультация copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuA2IAKgZIgZg6IARAAIAPAmIAPgmIAQAAIghBTgAECAwIAAgSIgyAAIAAg7IAPAAIAAAuIAYAAIAAguIAOAAIAAAuIALAAIAAAfgACTAbQgGgDgDgHQgEgHAAgKQAAgJAEgHQADgHAGgEQAFgEAHAAQAGAAAEACIAFAFIADADIAAgIIAOAAIAAA7IgOAAIAAgJIgDAEIgFAEQgEACgGAAQgHAAgFgEgACZgMQgDAFAAAHQAAAIADAFQAEAFAGAAQAHAAADgFQAEgFAAgIQAAgHgEgFQgDgFgHAAQgGAAgEAFgAiqAbQgGgEgEgHQgDgHgBgJQABgIADgIQAEgHAGgEQAGgEAJAAQAHAAAFACQAFADADADQADADABAEIACAGIgOAAIgCgDQgBgCgDgBIgGgBQgEAAgDACQgDACgCAFQgBADAAAFQAAAFABAEQACAEADADQADACAEAAIAGgBIAEgEIACgCIAOAAIgCAGQgBADgDADQgDAEgFACQgFACgHAAQgJAAgGgEgAk1AbQgGgEgEgHQgEgHAAgJQAAgIAEgIQAEgHAGgEQAHgEAIAAQAJAAAHAEQAHAEADAHQAEAIAAAIQAAAJgEAHQgDAHgHAEQgHAEgJAAQgIAAgHgEgAktgPQgDACgCAFQgBADAAAFQAAAFABAEQACAEADADQADACAEAAQAFAAADgCQAEgDABgEQACgEAAgFQAAgFgCgDQgBgFgEgCQgDgCgFAAQgEAAgDACgAg8AeIAAgNIABAAQAEAAACgCQACgBABgDIABgJIADgfIAtAAIAAA7IgPAAIAAguIgSAAIgBAUQgBAJgCAGQgCAGgEACQgFADgHAAgAGEAeIAAgUIgKAAIgNAUIgRAAIAPgXQgHgCgDgEQgDgEAAgGQAAgGACgEQADgFAEgCQAFgDAIAAIAfAAIAAA7gAFwgPQgDACAAAEQAAADADACQACACAFAAIANAAIAAgPIgNAAQgFAAgCACgAFCAeIAAgmIgbAmIgOAAIAAg7IAOAAIAAAmIAbgmIAOAAIAAA7gABcAeIAAguIgUAAIAAgNIA2AAIAAANIgTAAIAAAugAAOAeIAAg7IAPAAIAAASIAOAAQAJABAFACQAFADACAEQADAEAAAGQAAAFgDAFQgCAFgFADQgFADgJAAgAAdASIAMAAQAFAAADgDQADgCAAgEQAAgEgDgCQgDgCgFAAIgMAAgAjTAeIAAgYIgZAAIAAAYIgPAAIAAg7IAPAAIAAAXIAZAAIAAgXIAPAAIAAA7gAlcAeIgmglIAAAlIgQAAIAAhTIAQAAIAAAlIAlglIAUAAIgoAoIAqArg");
	this.shape.setTransform(607.325,-267.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF3124").s().p("ApECJQgHAAgGgGQgGgFABgHIAAjtQgBgHAGgFQAGgGAHAAISJAAQAIAAAFAGQAGAFAAAHIAADtQAAAHgGAFQgFAGgIAAg");
	this.shape_1.setTransform(605.95,-268.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.BUTTRED, new cjs.Rectangle(27.7,-282,638.1999999999999,315.5), null);


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
	this.shape.setTransform(364.0009,45.0012,3.0333,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BGWHITE, new cjs.Rectangle(0,0,728,90), null);


(lib.BGRED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(364.0009,45.0012,3.0333,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BGRED, new cjs.Rectangle(0,0,728,90), null);


(lib.BALLRED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BALL_RED();
	this.instance.parent = this;
	this.instance.setTransform(409,-298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BALLRED, new cjs.Rectangle(409,-298,131,121), null);


(lib.BALL03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BALL03();
	this.instance.parent = this;
	this.instance.setTransform(427,-292);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BALL03_1, new cjs.Rectangle(427,-292,120,196), null);


(lib.BALL01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BALL01();
	this.instance.parent = this;
	this.instance.setTransform(435,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BALL01_1, new cjs.Rectangle(435,-280,110,126), null);


(lib.TXT4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt04();
	this.instance.parent = this;
	this.instance.setTransform(92.5,-71.1,1,1,0,0,0,95.5,52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:37.9},29,cjs.Ease.quadOut).wait(40).to({y:129.9},30,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-214,487.9,291);


(lib.TXT3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt03();
	this.instance.parent = this;
	this.instance.setTransform(92.5,-72.1,1,1,0,0,0,95.5,52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:37.9},29,cjs.Ease.quadOut).wait(40).to({y:147.9},30,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59,-215,459.70000000000005,247.3);


(lib.TXT2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt02();
	this.instance.parent = this;
	this.instance.setTransform(92.5,-72.1,1,1,0,0,0,95.5,52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:37.9},29,cjs.Ease.quadOut).wait(40).to({y:147.9},30,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51,-217,467.5,247.5);


(lib.TXT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt01();
	this.instance.parent = this;
	this.instance.setTransform(94,-89.9,1,1,0,0,0,98,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:18.1},29,cjs.Ease.quadOut).wait(40).to({y:128.1},30,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44,-261.5,476.4,331.6);


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
	var mask_graphics_256 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_257 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_258 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_259 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_260 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_261 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_262 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_263 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_264 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_265 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_266 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_267 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_268 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_269 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_270 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_271 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_272 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_273 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_274 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_275 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_276 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_277 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_278 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_279 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_280 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_281 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_282 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_283 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_284 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_285 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_325 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_graphics_326 = new cjs.Graphics().p("Eg43AHDIAAuEMBxvAAAIAAOEg");
	var mask_graphics_327 = new cjs.Graphics().p("Eg43AHEIAAuDMBxvAAAIAAODg");
	var mask_graphics_328 = new cjs.Graphics().p("Eg43AHHIAAuEMBxvAAAIAAOEg");
	var mask_graphics_329 = new cjs.Graphics().p("Eg43AHKIAAuDMBxvAAAIAAODg");
	var mask_graphics_330 = new cjs.Graphics().p("Eg43AHPIAAuEMBxvAAAIAAOEg");
	var mask_graphics_331 = new cjs.Graphics().p("Eg43AHUIAAuDMBxvAAAIAAODg");
	var mask_graphics_332 = new cjs.Graphics().p("Eg43AHbIAAuEMBxvAAAIAAOEg");
	var mask_graphics_333 = new cjs.Graphics().p("Eg43AHiIAAuDMBxvAAAIAAODg");
	var mask_graphics_334 = new cjs.Graphics().p("Eg43AHrIAAuEMBxvAAAIAAOEg");
	var mask_graphics_335 = new cjs.Graphics().p("Eg43AH0IAAuDMBxvAAAIAAODg");
	var mask_graphics_336 = new cjs.Graphics().p("Eg43AH/IAAuEMBxvAAAIAAOEg");
	var mask_graphics_337 = new cjs.Graphics().p("Eg43AIKIAAuDMBxvAAAIAAODg");
	var mask_graphics_338 = new cjs.Graphics().p("Eg43AIXIAAuEMBxvAAAIAAOEg");
	var mask_graphics_339 = new cjs.Graphics().p("Eg43AIkIAAuDMBxvAAAIAAODg");
	var mask_graphics_340 = new cjs.Graphics().p("Eg43AIzIAAuEMBxvAAAIAAOEg");
	var mask_graphics_341 = new cjs.Graphics().p("Eg43AJCIAAuDMBxvAAAIAAODg");
	var mask_graphics_342 = new cjs.Graphics().p("Eg43AJTIAAuEMBxvAAAIAAOEg");
	var mask_graphics_343 = new cjs.Graphics().p("Eg43AJkIAAuDMBxvAAAIAAODg");
	var mask_graphics_344 = new cjs.Graphics().p("Eg43AJ3IAAuEMBxvAAAIAAOEg");
	var mask_graphics_345 = new cjs.Graphics().p("Eg43AKKIAAuDMBxvAAAIAAODg");
	var mask_graphics_346 = new cjs.Graphics().p("Eg43AKfIAAuEMBxvAAAIAAOEg");
	var mask_graphics_347 = new cjs.Graphics().p("Eg43AK0IAAuDMBxvAAAIAAODg");
	var mask_graphics_348 = new cjs.Graphics().p("Eg43ALLIAAuEMBxvAAAIAAOEg");
	var mask_graphics_349 = new cjs.Graphics().p("Eg43ALiIAAuDMBxvAAAIAAODg");
	var mask_graphics_350 = new cjs.Graphics().p("Eg43AL7IAAuEMBxvAAAIAAOEg");
	var mask_graphics_351 = new cjs.Graphics().p("Eg43AMUIAAuDMBxvAAAIAAODg");
	var mask_graphics_352 = new cjs.Graphics().p("Eg43AMvIAAuEMBxvAAAIAAOEg");
	var mask_graphics_353 = new cjs.Graphics().p("Eg43ANKIAAuDMBxvAAAIAAODg");
	var mask_graphics_354 = new cjs.Graphics().p("Eg43ANnIAAuEMBxvAAAIAAOEg");
	var mask_graphics_355 = new cjs.Graphics().p("Eg43AOEIAAuEMBxvAAAIAAOEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(256).to({graphics:mask_graphics_256,x:364.0009,y:-44.9988}).wait(1).to({graphics:mask_graphics_257,x:364.0009,y:-38.8989}).wait(1).to({graphics:mask_graphics_258,x:364.0009,y:-33.013}).wait(1).to({graphics:mask_graphics_259,x:364.0009,y:-27.3412}).wait(1).to({graphics:mask_graphics_260,x:364.0009,y:-21.8834}).wait(1).to({graphics:mask_graphics_261,x:364.0009,y:-16.6397}).wait(1).to({graphics:mask_graphics_262,x:364.0009,y:-11.61}).wait(1).to({graphics:mask_graphics_263,x:364.0009,y:-6.7943}).wait(1).to({graphics:mask_graphics_264,x:364.0009,y:-2.1926}).wait(1).to({graphics:mask_graphics_265,x:364.0009,y:2.195}).wait(1).to({graphics:mask_graphics_266,x:364.0009,y:6.3686}).wait(1).to({graphics:mask_graphics_267,x:364.0009,y:10.3282}).wait(1).to({graphics:mask_graphics_268,x:364.0009,y:14.0738}).wait(1).to({graphics:mask_graphics_269,x:364.0009,y:17.6053}).wait(1).to({graphics:mask_graphics_270,x:364.0009,y:20.9227}).wait(1).to({graphics:mask_graphics_271,x:364.0009,y:24.0262}).wait(1).to({graphics:mask_graphics_272,x:364.0009,y:26.9156}).wait(1).to({graphics:mask_graphics_273,x:364.0009,y:29.591}).wait(1).to({graphics:mask_graphics_274,x:364.0009,y:32.0524}).wait(1).to({graphics:mask_graphics_275,x:364.0009,y:34.2997}).wait(1).to({graphics:mask_graphics_276,x:364.0009,y:36.333}).wait(1).to({graphics:mask_graphics_277,x:364.0009,y:38.1522}).wait(1).to({graphics:mask_graphics_278,x:364.0009,y:39.7575}).wait(1).to({graphics:mask_graphics_279,x:364.0009,y:41.1487}).wait(1).to({graphics:mask_graphics_280,x:364.0009,y:42.3258}).wait(1).to({graphics:mask_graphics_281,x:364.0009,y:43.289}).wait(1).to({graphics:mask_graphics_282,x:364.0009,y:44.0381}).wait(1).to({graphics:mask_graphics_283,x:364.0009,y:44.5732}).wait(1).to({graphics:mask_graphics_284,x:364.0009,y:44.8942}).wait(1).to({graphics:mask_graphics_285,x:364.0009,y:45.0012}).wait(40).to({graphics:mask_graphics_325,x:364.0009,y:45.0012}).wait(1).to({graphics:mask_graphics_326,x:364.0009,y:45.0512}).wait(1).to({graphics:mask_graphics_327,x:364.0009,y:45.2012}).wait(1).to({graphics:mask_graphics_328,x:364.0009,y:45.4512}).wait(1).to({graphics:mask_graphics_329,x:364.0009,y:45.8012}).wait(1).to({graphics:mask_graphics_330,x:364.0009,y:46.2512}).wait(1).to({graphics:mask_graphics_331,x:364.0009,y:46.8012}).wait(1).to({graphics:mask_graphics_332,x:364.0009,y:47.4512}).wait(1).to({graphics:mask_graphics_333,x:364.0009,y:48.2012}).wait(1).to({graphics:mask_graphics_334,x:364.0009,y:49.0512}).wait(1).to({graphics:mask_graphics_335,x:364.0009,y:50.0012}).wait(1).to({graphics:mask_graphics_336,x:364.0009,y:51.0512}).wait(1).to({graphics:mask_graphics_337,x:364.0009,y:52.2012}).wait(1).to({graphics:mask_graphics_338,x:364.0009,y:53.4512}).wait(1).to({graphics:mask_graphics_339,x:364.0009,y:54.8012}).wait(1).to({graphics:mask_graphics_340,x:364.0009,y:56.2512}).wait(1).to({graphics:mask_graphics_341,x:364.0009,y:57.8012}).wait(1).to({graphics:mask_graphics_342,x:364.0009,y:59.4512}).wait(1).to({graphics:mask_graphics_343,x:364.0009,y:61.2012}).wait(1).to({graphics:mask_graphics_344,x:364.0009,y:63.0512}).wait(1).to({graphics:mask_graphics_345,x:364.0009,y:65.0012}).wait(1).to({graphics:mask_graphics_346,x:364.0009,y:67.0512}).wait(1).to({graphics:mask_graphics_347,x:364.0009,y:69.2012}).wait(1).to({graphics:mask_graphics_348,x:364.0009,y:71.4512}).wait(1).to({graphics:mask_graphics_349,x:364.0009,y:73.8012}).wait(1).to({graphics:mask_graphics_350,x:364.0009,y:76.2512}).wait(1).to({graphics:mask_graphics_351,x:364.0009,y:78.8012}).wait(1).to({graphics:mask_graphics_352,x:364.0009,y:81.4512}).wait(1).to({graphics:mask_graphics_353,x:364.0009,y:84.2012}).wait(1).to({graphics:mask_graphics_354,x:364.0009,y:87.0512}).wait(1).to({graphics:mask_graphics_355,x:364.0009,y:90.0012}).wait(22).to({graphics:null,x:0,y:0}).wait(2));

	// BUT_RED copy
	this.instance_1 = new lib.BUTTRED();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.8,334.8,1,1,0,0,0,90.8,20.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(256).to({_off:false},0).wait(69).to({y:424.8},30,cjs.Ease.quadIn).to({_off:true},1).wait(23));

	// LOGO_RED copy
	this.instance_2 = new lib.LOGORED2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.4,49.4,1,1,0,0,0,13.4,20.4);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(256).to({_off:false},0).wait(69).to({y:145.4},30,cjs.Ease.quadIn).to({_off:true},1).wait(23));

	// BALL03
	this.instance_3 = new lib.BALL03_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(182,172);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(256).to({_off:false},0).to({y:212},29,cjs.Ease.quadOut).wait(40).to({y:262},51,cjs.Ease.quadInOut).to({_off:true},1).wait(2));

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
	var mask_1_graphics_171 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_172 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_173 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_174 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_175 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_176 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_177 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_178 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_179 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_180 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_181 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_182 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_183 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_184 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_185 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_186 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_187 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_188 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_189 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_190 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_191 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_192 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_193 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_194 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_195 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_196 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_197 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_198 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_199 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_1_graphics_200 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(171).to({graphics:mask_1_graphics_171,x:364.0009,y:-44.9988}).wait(1).to({graphics:mask_1_graphics_172,x:364.0009,y:-38.8989}).wait(1).to({graphics:mask_1_graphics_173,x:364.0009,y:-33.013}).wait(1).to({graphics:mask_1_graphics_174,x:364.0009,y:-27.3412}).wait(1).to({graphics:mask_1_graphics_175,x:364.0009,y:-21.8834}).wait(1).to({graphics:mask_1_graphics_176,x:364.0009,y:-16.6397}).wait(1).to({graphics:mask_1_graphics_177,x:364.0009,y:-11.61}).wait(1).to({graphics:mask_1_graphics_178,x:364.0009,y:-6.7943}).wait(1).to({graphics:mask_1_graphics_179,x:364.0009,y:-2.1926}).wait(1).to({graphics:mask_1_graphics_180,x:364.0009,y:2.195}).wait(1).to({graphics:mask_1_graphics_181,x:364.0009,y:6.3686}).wait(1).to({graphics:mask_1_graphics_182,x:364.0009,y:10.3282}).wait(1).to({graphics:mask_1_graphics_183,x:364.0009,y:14.0738}).wait(1).to({graphics:mask_1_graphics_184,x:364.0009,y:17.6053}).wait(1).to({graphics:mask_1_graphics_185,x:364.0009,y:20.9227}).wait(1).to({graphics:mask_1_graphics_186,x:364.0009,y:24.0262}).wait(1).to({graphics:mask_1_graphics_187,x:364.0009,y:26.9156}).wait(1).to({graphics:mask_1_graphics_188,x:364.0009,y:29.591}).wait(1).to({graphics:mask_1_graphics_189,x:364.0009,y:32.0524}).wait(1).to({graphics:mask_1_graphics_190,x:364.0009,y:34.2997}).wait(1).to({graphics:mask_1_graphics_191,x:364.0009,y:36.333}).wait(1).to({graphics:mask_1_graphics_192,x:364.0009,y:38.1522}).wait(1).to({graphics:mask_1_graphics_193,x:364.0009,y:39.7575}).wait(1).to({graphics:mask_1_graphics_194,x:364.0009,y:41.1487}).wait(1).to({graphics:mask_1_graphics_195,x:364.0009,y:42.3258}).wait(1).to({graphics:mask_1_graphics_196,x:364.0009,y:43.289}).wait(1).to({graphics:mask_1_graphics_197,x:364.0009,y:44.0381}).wait(1).to({graphics:mask_1_graphics_198,x:364.0009,y:44.5732}).wait(1).to({graphics:mask_1_graphics_199,x:364.0009,y:44.8942}).wait(1).to({graphics:mask_1_graphics_200,x:364.0009,y:45.0012}).wait(101).to({graphics:null,x:0,y:0}).wait(78));

	// BUT_WH copy
	this.instance_6 = new lib.BUTTWH();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120.8,334.8,1,1,0,0,0,90.8,20.8);
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
	this.instance_8.setTransform(191,244);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(171).to({_off:false},0).to({y:284},29,cjs.Ease.quadOut).wait(40).to({y:388,alpha:0},59,cjs.Ease.quadInOut).to({_off:true},1).wait(79));

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
	var mask_2_graphics_86 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_87 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_88 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_89 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_90 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_91 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_92 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_93 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_94 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_95 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_96 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_97 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_98 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_99 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_100 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_101 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_102 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_103 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_104 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_105 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_106 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_107 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_108 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_109 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_110 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_111 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_112 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_113 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_114 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	var mask_2_graphics_115 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_2_graphics_86,x:364.0009,y:-44.9988}).wait(1).to({graphics:mask_2_graphics_87,x:364.0009,y:-38.8989}).wait(1).to({graphics:mask_2_graphics_88,x:364.0009,y:-33.013}).wait(1).to({graphics:mask_2_graphics_89,x:364.0009,y:-27.3412}).wait(1).to({graphics:mask_2_graphics_90,x:364.0009,y:-21.8834}).wait(1).to({graphics:mask_2_graphics_91,x:364.0009,y:-16.6397}).wait(1).to({graphics:mask_2_graphics_92,x:364.0009,y:-11.61}).wait(1).to({graphics:mask_2_graphics_93,x:364.0009,y:-6.7943}).wait(1).to({graphics:mask_2_graphics_94,x:364.0009,y:-2.1926}).wait(1).to({graphics:mask_2_graphics_95,x:364.0009,y:2.195}).wait(1).to({graphics:mask_2_graphics_96,x:364.0009,y:6.3686}).wait(1).to({graphics:mask_2_graphics_97,x:364.0009,y:10.3282}).wait(1).to({graphics:mask_2_graphics_98,x:364.0009,y:14.0738}).wait(1).to({graphics:mask_2_graphics_99,x:364.0009,y:17.6053}).wait(1).to({graphics:mask_2_graphics_100,x:364.0009,y:20.9227}).wait(1).to({graphics:mask_2_graphics_101,x:364.0009,y:24.0262}).wait(1).to({graphics:mask_2_graphics_102,x:364.0009,y:26.9156}).wait(1).to({graphics:mask_2_graphics_103,x:364.0009,y:29.591}).wait(1).to({graphics:mask_2_graphics_104,x:364.0009,y:32.0524}).wait(1).to({graphics:mask_2_graphics_105,x:364.0009,y:34.2997}).wait(1).to({graphics:mask_2_graphics_106,x:364.0009,y:36.333}).wait(1).to({graphics:mask_2_graphics_107,x:364.0009,y:38.1522}).wait(1).to({graphics:mask_2_graphics_108,x:364.0009,y:39.7575}).wait(1).to({graphics:mask_2_graphics_109,x:364.0009,y:41.1487}).wait(1).to({graphics:mask_2_graphics_110,x:364.0009,y:42.3258}).wait(1).to({graphics:mask_2_graphics_111,x:364.0009,y:43.289}).wait(1).to({graphics:mask_2_graphics_112,x:364.0009,y:44.0381}).wait(1).to({graphics:mask_2_graphics_113,x:364.0009,y:44.5732}).wait(1).to({graphics:mask_2_graphics_114,x:364.0009,y:44.8942}).wait(1).to({graphics:mask_2_graphics_115,x:364.0009,y:45.0012}).wait(99).to({graphics:null,x:0,y:0}).wait(165));

	// BUT_RED
	this.instance_11 = new lib.BUTTRED();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120.8,334.8,1,1,0,0,0,90.8,20.8);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(86).to({_off:false},0).to({_off:true},128).wait(165));

	// LOGO_RED
	this.instance_12 = new lib.LOGORED2();
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
	this.instance_13.setTransform(187,225.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(86).to({_off:false},0).to({y:263},29,cjs.Ease.quadOut).wait(40).to({y:363,alpha:0},58,cjs.Ease.quadInOut).to({_off:true},1).wait(165));

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
	this.instance_16 = new lib.BUTTWH();
	this.instance_16.parent = this;
	this.instance_16.setTransform(120.8,223.6,1,1,0,0,0,90.8,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:334.8},29,cjs.Ease.quadOut).to({_off:true},99).wait(251));

	// LOGO_WH
	this.instance_17 = new lib.LOGOWHITE();
	this.instance_17.parent = this;
	this.instance_17.setTransform(39.4,-58.6,1,1,0,0,0,13.4,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:49.4},29,cjs.Ease.quadOut).to({_off:true},99).wait(251));

	// BG_RED
	this.instance_18 = new lib.BGRED();
	this.instance_18.parent = this;
	this.instance_18.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(379));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-864,-119,3259,332.6);


// stage content:
(lib.a_invest_728x90_review = function(mode,startPosition,loop) {
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
	this.instance_1.setTransform(364,45,3.0333,0.225);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,-73.5,366,164.5);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BALL01.png", id:"BALL01"},
		{src:"BALL03.png", id:"BALL03"},
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