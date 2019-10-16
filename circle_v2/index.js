(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[488,645,86,54],[488,564,61,79],[0,282,540,280],[0,0,540,280],[0,564,486,82]]}
];


// symbols:



(lib.bird1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bird2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.GirlBG = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.GirlNine = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
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


(lib.txt02_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F50800").s().p("A0eCBIAAg5IiMAAIAAA5Ig3AAIAAhsIATAAQAIgMAHgSQAGgUADggIAIg/ICmAAIAACRIAhAAIAABsgA19g5IgGAjQgDAOgDAKQgEALgFAIIBNAAIAAhdIg3AAgAQXBRIAAg4IAFAAQAJAAAGgDQAFgCADgJQACgHABgOIALhqICqAAIAADEIg+AAIAAiQIg5AAIgGA+QgCAcgHASQgIATgOAJQgPAJgaAAgAWlBQIAAhLIhQAAIAABLIg9AAIAAjEIA9AAIAABHIBQAAIAAhHIA9AAIAADEgAO/BQIAAiJIg7CJIgoAAIg8iIIAACIIg5AAIAAjEIBWAAIA2B1IA0h1IBUAAIAADEgAyqBAQgZgNgOgXQgNgXgBgeQABgfANgXQAOgXAZgNQAYgNAfAAQAfAAAYANQAZANAOAXQAOAXAAAfQAAAegOAXQgOAXgZANQgYANgfABQgfgBgYgNgAyLhEQgLAHgFAKQgGAMAAAOQAAAOAGALQAFALALAGQAKAHAOAAQAOAAAKgHQALgGAFgLQAGgLAAgOQAAgOgGgMQgFgKgLgHQgKgHgOAAQgOAAgKAHg");
	this.shape.setTransform(2.625,115.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F50800").s().p("AqTPcQhjhsg3iQQgziFgGiSIHFAAQAICGBHBjQBnCSDPgBQDcABB2iRQBoiAAAjOIAAgXQAAjKh3h/Qh7h/jIAAQihgBhuBRQhIAzgjBGImgAAIAA0nIYwAAIAAGFIyDAAIAAIlQBDhTB5g5QCMhCCgAAQCgAACOA6QCOA6BpBsQBtBwA5CXQA9CfAAC9IAAAbQAAC5g9ChQg+Chh1B5Qh3B7ikBDQisBFjMAAQmRAAjmj9g");
	this.shape_1.setTransform(0.125,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt02_5, new cjs.Rectangle(-150.1,-124.1,307.4,262.5), null);


(lib.txt01_percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F50800").s().p("AE8D9QgZgNgOgXQgNgXgBgfQABgfANgXQAOgXAZgNQAYgNAfAAQAfAAAYANQAZANAOAXQAOAXAAAfQAAAfgOAXQgOAXgZANQgYANgfABQgfgBgYgNgAFbB4QgLAHgFAKQgGAMAAAOQAAAOAGAMQAFALALAGQAKAHAOAAQAOAAAKgHQALgGAFgLQAGgMAAgOQAAgOgGgMQgFgKgLgHQgKgHgOAAQgOAAgKAHgAI5EFIAAiRIhKAAIAAg0IDRAAIAAA0IhKAAIAACRgAnRALIAAkQIA+AAIAAAdQABgDAHgIQAIgIANgHQAOgGAUAAQAaAAAUAMQAVAMAMAXQAMAXAAAgQAAAfgMAXQgMAYgVAMQgUAMgaAAQgUgBgOgGQgOgGgHgIQgIgIgBgDIAABngAmHjGQgNAOAAAWQAAAWANANQAMAOAWAAQAVAAAMgOQAMgNABgWQgBgWgMgOQgMgOgVgBQgWABgMAOgAC5gIIAAg4IiMAAIAAA4Ig2AAIAAhrIASAAQAIgMAHgUQAGgUADgfIAIg/ICmAAIAACSIAhAAIAABrgABajDIgGAjIgGAZQgEAMgFAIIBNAAIAAheIg3AAgAivhIQgZgNgNgYQgOgXAAgeQAAgfAOgYQANgXAYgNQAXgNAfAAQAgAAAYANQAXANANAXQAOAXAAAhIAAAKIiWAAQACAUANAMQANALAVABQAMAAAIgDQAIgDAEgEIAGgGIA9AAQgBAKgGALQgHAKgLAKQgMAKgTAHQgSAFgZABQgiAAgYgNgAhOi9QgEgOgMgKQgLgIgRAAQgQAAgMAJQgLAJgEAOIBXAAIAAAAgAI3hAIAAiRIhKAAIAAg0IDRAAIAAA0IhKAAIAACRgAGVhAIAAh0IhVB0Ig8AAIAAjFIA8AAIAAB1IBVh1IA9AAIAADFgAowhAIhRhWIAABWIg+AAIAAjFIA+AAIAABRIBPhRIBNAAIheBdIBkBog");
	this.shape.setTransform(-269.625,12.65);

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
	this.instance.setTransform(-243,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-243,-41,486,82), null);


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
	this.shape.setTransform(0.55,-0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F50800").s().p("Aq4CvQgyAAAAgyIAAj5QAAgyAyAAIVxAAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_1.setTransform(-0.3,-0.475);

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
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


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
	this.shape.setTransform(0.55,0.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ALFALOGO, new cjs.Rectangle(-65,-13,131.1,26.9), null);


(lib.GirlAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// circle_mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("EgT7A0GIgZgOQhWgyhUg0IgVgMIgCgBIgagUIiUhrMAz2hNRIAPgSIABgBIABAAMgtdBR1IAAACIgigTgEgTZA0XQiIhMiFhVIgJgFIAJAFQCFBVCIBMIAAAAg");
	var mask_graphics_20 = new cjs.Graphics().p("EgPsA0GIgZgOQhWgyhUg0IgVgMIgCgBIrCoCIgHgGIgDgCMA8jhHYIABgBIABAAMgtdBR3IgigTg");
	var mask_graphics_21 = new cjs.Graphics().p("EgJTA0GIgZgOQhWgyhVg0IgUgMIgCgBIrDoCIgHgGIgtgoIoxoqIjLjyIgGgIIgFgFMBJWg6KIABAAMgtdBR3IgigTg");
	var mask_graphics_22 = new cjs.Graphics().p("EgEWA0GIgZgOQhWgyhVg0QgMgGgKgHIrDoCIgHgGIgtgoIoyoqIjLjyIgFgIIgIgJIgKgNIgFgHIgJgKIgbgjIgEgGIn7sKIgaguIgrheMBTOgqoIABgBIACAAMgtdBR3IgigTg");
	var mask_graphics_23 = new cjs.Graphics().p("EgA9A0GIgZgOQhWgyhVg0QgMgGgKgHIp8nLIhHg3IgHgGIgtgoIoxoqIjLjyIgGgIIgIgJIgKgNIgFgHIgfgoIgIgLIn8sKIgaguIkxqdQhgj+hMkIMBaDgZkMgtdBR3IgigTg");
	var mask_graphics_24 = new cjs.Graphics().p("EAAqA0GIgZgOQhVgyhUg0QgMgGgLgHIpgm1IhihNIgIgGIgtgoIoxoqIjLjyIgGgIIgIgJIgKgNIgFgHIgfgoIgIgLIn8sKIgaguIlHrPIiHmUIgDgKIgKggIg3jKIibvUMBdTgHcMgteBR3IgigTg");
	var mask_graphics_25 = new cjs.Graphics().p("EAAxA0GIgagOQhUgyhVg0QgMgGgLgHIqPnXIgzgrIgHgGIgtgoIoyoqIjLjyIgGgIIgHgJIgLgNIgFgHIgfgoIgIgLIn8sKIgaguIlGrPIiHmUIgEgKIgKggIg2jKIilwOQgBgjgCgjIAcwEIACgVMBdBAK9MgtdBR3IgigTg");
	var mask_graphics_26 = new cjs.Graphics().p("EAAxA29IgagOQhUgyhVg0QmGjvlakmIgtgoIoyoqIjLjyIgGgIIgHgJIg1hDIn+sOQk0ovi3psQjDqXglqnIAcwFQANh2ASh2IC+tAIAahTMBZMAcoMgtdBR3IgigTg");
	var mask_graphics_27 = new cjs.Graphics().p("EAAxA/XIgagOQhUgxhVg0QmGjvlakmIgtgoIoyoqIjLjyIgGgIIgHgJIg1hEIn+sNQk0owi3psQjDqWglqoIAcwEQANh2ASh2IC+tBIAlh1IAohwIFBrxIBiixMBR2AtdMgtdBR2IgigTg");
	var mask_graphics_28 = new cjs.Graphics().p("EAAxBGzIgagOQhUgyhVg0QmGjvlaklIgtgpIoyoqIjLjxIgGgIIgHgJIg1hEIn+sOQk0ovi3ptQjDqWglqnIAcwEQANh2ASh2IC+tBIAlh2IAohvIFBrxICiknIAagqIE7ncIDgkfQANgNANgQMBHnA8UMgtdBR3IgigTg");
	var mask_graphics_29 = new cjs.Graphics().p("EAAxBNNIgagNQhUgyhVg0QmGjvlakmIgtgoIoyoqIjLjyIgGgIIgHgJIg1hEIn+sNQk0owi3psQjDqXglqnIAcwEQANh2ASh2IC+tAIAlh2IAohwIFBrwICikoIAagqIE7nbIDgkfIAignIAfglIH2oHIEAjdIAigaIAMgIMA6bBJHIABACMgtdBR2IgigTg");
	var mask_graphics_30 = new cjs.Graphics().p("EAAxBSNQoPkonBmIIoyoqIjLjyIgGgIIgHgJIg1hEIn+sNQk0owi3psQjDqXglqnIAcwEQANh2ASh2IC+tAIAlh2IAohwIFBrwICikoIAagqIE7nbIDgkfIAignIAfglIH2oHIEAjdIAigaIIClzIGXjtQAmgVAogUMArBBTJMgtdBR4IgigUg");
	var mask_graphics_31 = new cjs.Graphics().p("EAAxBVnQv5o+rauWQrbuXlKxgQjDqWglqoIAcwDQANh2ASh2IC+tBIAlh2QDSp7FTo2IE7ncIDgkfIAignIAfglIH2oGIEAjdIAigaIIClzIG2kAIAPgHIAPgJIBpg0IOLlqQAygNAygOMAZ6BZ7MgtdBR4IgigTg");
	var mask_graphics_32 = new cjs.Graphics().p("EAAxBXRQv5o9rauXQrbuXlKxfQjDqXglqoIAcwDQANh2ASh2IC+tAIAlh2QFsxVL2t+QL2t/QIoeQQvoxS/hlMAHzBdQMgtdBR3IgigTg");
	var mask_graphics_33 = new cjs.Graphics().p("EgEdBXdQv5o+rauWQrbuXlKxgQlVyICJy5QCKy9JTwcQI9v5OWrYQOXrbRflIQSIlWS8CLMgKnBc/MgtdBR4IgigTg");
	var mask_graphics_34 = new cjs.Graphics().p("EgcgBM8Qt2r6oZwUQoZwUhpyMQhty0F0yIQF1yKMUuVQL7t1QToYQQUoYSLhpQS2hsSJF1MgcmBZLMgteBR7QoUkmnTmSg");
	var mask_graphics_35 = new cjs.Graphics().p("EgxsA/sQrQualExpQlDxpB8yKQCCyzJQwqQJRwrO5rqQOZrQRqlBQRolDSLB9QS0CCQrJRMhbACj3QwspRrqu6g");
	var mask_graphics_36 = new cjs.Graphics().p("Eg5OA/tQrQuZlDxpQlExqB8yJQCBy0JRwqQJQwrO5rqQOZrQRqlCQRolDSLB9QS0CBQrJRIgBACQH+EcHJGDMg8jBHWMgthBSBQwspRrru5g");
	var mask_graphics_37 = new cjs.Graphics().p("Eg/SBAGIAGgFQrHuAlJw3IgriRQk4xmCIyMQCFyOIwwAIBJiDQI1vQOBrGQN/rGQ3lKICRgoQRmk4SNCHQSOCGQAIwIAjAUQQQJALpOsMhJVA6HMgtgBR/QwbpIrjulg");
	var mask_graphics_38 = new cjs.Graphics().p("EhEpA/oQllnIkDn7IAKgFQjznbianxQgsiOgmiRQiAn4gnoPQggm0AemtQAKiQARiOQBEo6C0otQC0ovEVn2IBGh9QD+mxFImHQGEnRHRlyQA5guA8gtQGfk5Hbj0QHajzHyiaICPgqQI7igJcgtQGzggGvAeQCPALCOARQI6BFIvC0QI1C1H8EaQHxEUG6FyQOfMIItQ9MhTSAqnMgtgBSAQwspRrqu6g");
	var mask_graphics_39 = new cjs.Graphics().p("EhIAA/oQrQuYlDxqIAEgOQi7qUgjqcQgboHBBoMQB9v1HFuPQBBiCBHh/QI7wAOOrbQFhkcGBjfQKDl2LdjQQJLinJQgtQJQguJYBLQSCCPP9I4IAIAEQQBI9LbONQL1OtFNSVMhaAAZgMgtgBR/QwspRrqu6g");
	var mask_graphics_40 = new cjs.Graphics().p("EhJqA/oQrQuZlDxpQinpHgxpPIALAAQgqoUAxoGQAOiUAUiTQBLoCCmn2QChnlDtm7QAhg/Akg/QEanzF8m/QF8m+HBlmQBwhZB1hUQFdj8GEjKQHWjzHwicICZgtQI2iiJbgwQITgpIHAwICTAQQJOBHI+C/QHYCcGvDjIB7BDQIFEfHLGIQN9L4IbQLQIuQwBhS/MhdRAHZMgthBR/QwspRrqu5g");
	var mask_graphics_41 = new cjs.Graphics().p("EhJwA/pQrQuYlDxqQlFxpB8yKIAQg8QCFxvIWviQAjhCAmhCQJBv3OYrWQOZrXRilFQBIgVBKgTQRCkgRvCGQQKB6OWHGQCDBACABIIAzAdQP3JBLYOZQLXOZFGRhQFTSJiPS5Mhc/gK/MgtgBSAQwspRrqu6g");
	var mask_graphics_42 = new cjs.Graphics().p("EhJyA/rQrQuZlDxpQlFxpB8yKQBDpwDApMIAEACQCln8D1nMQBGiDBMiAQELm/FamQQFOmDGGk+QA4gvA4gsQHFliIKkJQILkLIpieQInieJGgyQIPguIHAvQBJAGBLAJQJPBEJEC9QIwC2H3EWQIcErHZGaQN0L9IVQVQIWQXBkSLQBpS0l4SIMhZIgc9MgtfBR+QwspRrqu5g");
	var mask_graphics_43 = new cjs.Graphics().p("EhJ0A/tQrQuZlDxpQlFxpB8yKQCCyzJQwrIABgCIgBAAQJRwqO5rqQOarQRplCQRqlCSJB9QS0CBQsJRQQrJRLpO6QLROaFCRoQFERph8SJQiCS0pQQpMhR9gtiMgtgBR+QwspRrqu5g");
	var mask_graphics_44 = new cjs.Graphics().p("EhJxA/qQrQuZlDxpQlFxqB8yJQCBy0JRwqQFLpTG6nwIAFAEQFkmOGZlCQIQmeJnkiQGNi7Gbh+QCKgoCLgjQIuiOJKggQG2gYGuAnQBIAGBIAIQKCBIJuDWQG6CYGYDXIB1A+QJEFDH7HGQOOMuIERFQHyQiBBSSQBBSTl6RRQmIR5stOLMhF1g+fMgtfBR9QwspRrqu5g");
	var mask_graphics_45 = new cjs.Graphics().p("EhJwA/pQrQuZlDxpQlFxqB8yJQCCy0JQwqQJRwrO4rqQBwhXBzhSIAFAHQLqoRNSkWQEchcEnhBQPljcPyB7QCRASCQAYQO5CjNLG8IBwA+QB6BDB5BKQQDJ9LDPiQLCPiEFSdQD7RzjESEQjESEplPhQp8QEvhLBMg2OhMXMgtfBR9QwspRrqu5g");
	var mask_graphics_46 = new cjs.Graphics().p("AAFDiMgteBR9QwspRrru6QrQuYlDxqQlExpB8yKQCByzJRwrQJQwrO5rpQKPoBL5k3IAFAKQEah0EfhWQCPgrCRgkQLTiyLzAIQEkADEeAdICQASQMQBnLoE2QEQBzECCJIBJAoQLPGNJOJJQNcNRHQRoQHPRngLS3QgLSPnEQ6QnDQ6s0M9QtTNaxnHQg");
	var mask_graphics_47 = new cjs.Graphics().p("AAFArMgtfBR9QwspSrqu5QrQuYlDxqQlExpB7yKQCCyzJRwrQJQwrO5rpQOZrQRqlCQFGhdFJg5IAAAKQLxh+LjA+QBLAGBKAJQFyApFvBWQLECpJ8FHQBcAvBZAyQEiCiEUDFQO8KoJzPYQKJP8DLSyQDKSykXSWQkPRwqoO6QqoO7vYJzQv8KIyzDJg");
	var mask_graphics_48 = new cjs.Graphics().p("EgFiBdhMAFmhdbMgteBR8QwspRrqu6QrQuYlDxqQlFxpB8yKQCCyzJQwrQJRwrO4rpQOarQRqlCQRplDSJB8QS0CCQsJRIgCAFQN6HvKtMEQMLNuGFRMQGTR0hJS/QhJTCoZQ6QoHQXtuMIQtuMKxNGFQvEFTv6AAQi6AAi8gLg");
	var mask_graphics_49 = new cjs.Graphics().p("EgaLBZ8MAaMhZ3MgteBR6QwspRrqu5QrQuZlDxpQlExqB7yJQCCy0JRwqQJQwrO5rqQOZrQRqlCQRplDSKB9QIVA5H5CUIgCAGQJlCyIlEmIBJAoQHMEAGfFSQOKLjI1QFQI0QFCJSJQCMSwlVSTQlWSSr8OpQriOKwFIzQwFI0yJCHQldAplaAAQtOAAs/jzg");
	var mask_graphics_50 = new cjs.Graphics().p("EgKABdOQyziBwrpRIgBAAIgBAAQwqpRrru5QrQuYlDxqQlExpB7yJQCCy0JRwqQJQwsO5rpQOZrQRqlCQRplDSKB9QS0CBQrJRIgLAUIAMgUQQrJRLqO6QLROZFDRpQFERph9SKQiBSzpQQqQpQQru7LqQuYLQxqFBQsuDps/AAQlBAAlFgjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:104.3261,y:335.2733}).wait(1).to({graphics:mask_graphics_20,x:77.2062,y:335.2733}).wait(1).to({graphics:mask_graphics_21,x:36.3464,y:335.2733}).wait(1).to({graphics:mask_graphics_22,x:4.6572,y:335.2733}).wait(1).to({graphics:mask_graphics_23,x:-17.0524,y:335.2733}).wait(1).to({graphics:mask_graphics_24,x:-27.4812,y:335.2733}).wait(1).to({graphics:mask_graphics_25,x:-28.1163,y:335.2733}).wait(1).to({graphics:mask_graphics_26,x:-28.1163,y:316.9749}).wait(1).to({graphics:mask_graphics_27,x:-28.1163,y:263.1121}).wait(1).to({graphics:mask_graphics_28,x:-28.1163,y:215.5347}).wait(1).to({graphics:mask_graphics_29,x:-28.1163,y:174.4978}).wait(1).to({graphics:mask_graphics_30,x:-28.1163,y:142.4935}).wait(1).to({graphics:mask_graphics_31,x:-28.1163,y:120.738}).wait(1).to({graphics:mask_graphics_32,x:-28.1163,y:110.104}).wait(1).to({graphics:mask_graphics_33,x:5.3008,y:108.9323}).wait(1).to({graphics:mask_graphics_34,x:62.5859,y:108.8505}).wait(1).to({graphics:mask_graphics_35,x:116.5087,y:108.8197}).wait(1).to({graphics:mask_graphics_36,x:164.7104,y:108.819}).wait(1).to({graphics:mask_graphics_37,x:205.9429,y:109.2197}).wait(1).to({graphics:mask_graphics_38,x:237.84,y:109.2471}).wait(1).to({graphics:mask_graphics_39,x:259.3855,y:109.2476}).wait(1).to({graphics:mask_graphics_40,x:269.931,y:109.2943}).wait(1).to({graphics:mask_graphics_41,x:270.5836,y:109.1413}).wait(1).to({graphics:mask_graphics_42,x:270.7785,y:108.967}).wait(1).to({graphics:mask_graphics_43,x:270.9714,y:108.7889}).wait(1).to({graphics:mask_graphics_44,x:270.6855,y:109.1144}).wait(1).to({graphics:mask_graphics_45,x:270.5569,y:109.2148}).wait(1).to({graphics:mask_graphics_46,x:270.5103,y:124.0441}).wait(1).to({graphics:mask_graphics_47,x:270.5184,y:142.36}).wait(1).to({graphics:mask_graphics_48,x:270.5442,y:146.1428}).wait(1).to({graphics:mask_graphics_49,x:270.8192,y:146.422}).wait(1).to({graphics:mask_graphics_50,x:271.0176,y:146.6287}).wait(1).to({graphics:null,x:0,y:0}).wait(9));

	// Layer_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_19 = new cjs.Graphics().p("AVGmNIjWbRg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AVGmMIjWbQg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AVGmMIjYbQg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AVGmKIj1bMg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AVGmFIk5bBg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AVGl2InBajg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AFfslIhcN4IphLSg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AIXq3Ih8N/IuxHwg");
	var mask_1_graphics_35 = new cjs.Graphics().p("ArxG5IXjuEIh4OXg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AmGHjInovuIbdAVIh7QCg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AqQL7IFw62IOyOdIiEPag");
	var mask_1_graphics_41 = new cjs.Graphics().p("Ar+N6IC18eIVIgjIjjO/IiYPPg");
	var mask_1_graphics_43 = new cjs.Graphics().p("A1uNYIAx6vMAkqgApIGCGBI6LIKIitN2g");
	var mask_1_graphics_45 = new cjs.Graphics().p("A1pNQIBg7sMAifAAAIHUaSI4msJIiTOwg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AhFjhIhyOLIskAAIjn4ZIR9kpIUIFsImYfFg");
	var mask_1_graphics_49 = new cjs.Graphics().p("A03E9IgQkkIKfw3IRWAAIOaEzIkucKg");
	var mask_1_graphics_51 = new cjs.Graphics().p("A7IGcIgVl7INp17IWjAAISvGPMgGJAkmg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EgiOAIIIganfIRM7qIceAAIXnH4MgHvAuLg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EglpAI8IgdoOIS7+cIfTAAIZ/IqMgIhAyzg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EgpwAJ7IggpJMAU/ghvMAiuAAAIc0JmMgJdA4Vg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Egv7ALYIgkqfMAYFgmtMAn2AAAMAhEALAMgK2BApg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_1_graphics_19,x:135,y:134.8}).wait(2).to({graphics:mask_1_graphics_21,x:135,y:134.7995}).wait(2).to({graphics:mask_1_graphics_23,x:135,y:134.7894}).wait(2).to({graphics:mask_1_graphics_25,x:135,y:134.5933}).wait(2).to({graphics:mask_1_graphics_27,x:135,y:134.036}).wait(2).to({graphics:mask_1_graphics_29,x:135,y:132.5006}).wait(2).to({graphics:mask_1_graphics_31,x:234.95,y:175.6}).wait(2).to({graphics:mask_1_graphics_33,x:216.475,y:164.7}).wait(2).to({graphics:mask_1_graphics_35,x:194.625,y:141.15}).wait(2).to({graphics:mask_1_graphics_37,x:182,y:145.4}).wait(2).to({graphics:mask_1_graphics_39,x:204.15,y:98.1375}).wait(2).to({graphics:mask_1_graphics_41,x:215.9375,y:95.8}).wait(2).to({graphics:mask_1_graphics_43,x:298.475,y:93.85}).wait(2).to({graphics:mask_1_graphics_45,x:288.975,y:96.975}).wait(2).to({graphics:mask_1_graphics_47,x:277.025,y:117.675}).wait(2).to({graphics:mask_1_graphics_49,x:272.925,y:113.675}).wait(2).to({graphics:mask_1_graphics_51,x:272.95,y:113.675}).wait(2).to({graphics:mask_1_graphics_53,x:272.95,y:113.675}).wait(2).to({graphics:mask_1_graphics_55,x:272.925,y:113.675}).wait(2).to({graphics:mask_1_graphics_57,x:272.975,y:113.725}).wait(2).to({graphics:mask_1_graphics_59,x:273.025,y:113.8}).wait(1));

	// Girl9
	this.instance = new lib.Girl9();
	this.instance.parent = this;
	this.instance.setTransform(270,140,1,1,0,0,0,270,140);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
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
	this.instance.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.5},263).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-39.5,131,79);


(lib.bird1mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bird1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:56},263).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-27,142,54);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({y:140,alpha:1},14,cjs.Ease.quadOut).wait(204).to({x:483,alpha:0},24,cjs.Ease.cubicIn).to({_off:true},1).wait(3).to({_off:false,x:271,y:160},0).to({y:140,alpha:1},18,cjs.Ease.cubicOut).wait(101).to({y:120,alpha:0},17,cjs.Ease.cubicIn).wait(8));

	// BIRD2
	this.instance_3 = new lib.bird2mov("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(381,58,0.9,0.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:397,alpha:1,startPosition:24},24).wait(215).to({startPosition:239},0).to({alpha:0,startPosition:263},24,cjs.Ease.cubicIn).to({_off:true},1).wait(144));

	// BIRD1
	this.instance_4 = new lib.bird1mov("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(50,152,0.9,0.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,x:66,alpha:1,startPosition:24},24).wait(215).to({startPosition:239},0).to({alpha:0,startPosition:263},24,cjs.Ease.cubicIn).to({_off:true},1).wait(144));

	// 5
	this.instance_5 = new lib.txt02_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(238.75,134.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(141).to({_off:false},0).to({x:270.75,alpha:1},24,cjs.Ease.cubicOut).wait(77).to({x:300.75,alpha:0},24,cjs.Ease.cubicIn).to({_off:true},1).wait(141));

	// Percent
	this.instance_6 = new lib.txt01_percent();
	this.instance_6.parent = this;
	this.instance_6.setTransform(367,236);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({y:220,alpha:1},14,cjs.Ease.quadOut).wait(81).to({x:391,alpha:0},24,cjs.Ease.cubicIn).to({_off:true},1).wait(264));

	// GIRL_9
	this.instance_7 = new lib.GirlAnimation("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(230,140,1,1,0,0,0,270,140);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:270,alpha:1,startPosition:24,loop:false},24,cjs.Ease.cubicOut).wait(95).to({startPosition:59},0).to({x:294,alpha:0,startPosition:23},24,cjs.Ease.cubicIn).to({_off:true},1).wait(264));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.parent = this;
	this.instance_8.setTransform(270,140,1,1,0,0,0,270,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(408));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-649,612,1260);


// stage content:
(lib.alfa_credit19_nine_girl_540x280_review = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(230,139,311,142);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 540,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
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