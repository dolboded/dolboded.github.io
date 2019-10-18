(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bird1 = function() {
	this.initialize(img.bird1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,45);


(lib.bird2 = function() {
	this.initialize(img.bird2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,63);


(lib.GirlBG = function() {
	this.initialize(img.GirlBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,400);


(lib.GirlNine = function() {
	this.initialize(img.GirlNine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,400);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,192);// helper functions:

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
	this.shape.graphics.f("#EF3124").s().p("AgyUVIAAglIAEAAQAFAAAEgDQAEgCACgEIACgPIAHhGIBuAAIAACCIgoAAIAAhgIgmAAIgDApQgCATgFAMQgEAMgJAGQgKAHgRAAgADZUUIAAgyIg0AAIAAAyIgpAAIAAiCIApAAIAAAuIA0AAIAAguIApAAIAACCgAhyUUIAAhbIgoBbIgaAAIgnhaIAABaIglAAIAAiCIA4AAIAjBOIAjhOIA3AAIAACCgAh9xqIAAglIhcAAIAAAlIglAAIAAhGIANAAQAFgJAEgNQAEgNADgUIAGgqIBtAAIAABhIAVAAIAABGgAi8zlIgDAXIgFAQQgCAHgDAHIAyAAIAAg+IgkAAgAgryUQgQgJgIgQQgKgOAAgVQAAgUAKgPQAIgPAQgJQARgIAUAAQATAAAQAIQARAJAIAPQAKAPAAAUQAAAVgKAOQgIAQgRAJQgQAIgTABQgUgBgRgIgAgWzsQgHAEgEAHQgEAIAAAJQAAAJAEAIQAEAHAHAEQAHAFAJAAQAIAAAHgFQAGgEAEgHQAEgIAAgJQAAgJgEgIQgEgHgGgEQgHgFgIABQgJgBgHAFg");
	this.shape.setTransform(-194.25,56.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF3124").s().p("Ao9NcQhWhfgwh8Qgsh1gGh/IGLAAQAGB1A+BWQBaB/CzAAQDBAABmh+QBahwAAiyIAAgVQAAivhnhuQhrhwivAAQiLAAhgBGQg+AtgfA9IlqAAIAAx8IViAAIAAFSIvtAAIAAHfQA6hJBqgyQB6g5CKAAQCNAAB7AzQB7AyBbBeQBfBhAyCEQA1CJAAClIAAAYQAACgg2CNQg1CMhmBpQhnBsiPA5QiVA9izAAQlcAAjIjcg");
	this.shape_1.setTransform(-148.35,57.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt02_5, new cjs.Rectangle(-224.4,-92.7,151.9,289.2), null);


(lib.txt01_percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("An8EKQANgUAJgXQAKgWACgXIgmAAIAAhUIBRAAIAABLQgBAdgIAYQgHAZgLATgAFNCrQgbgPgQgaQgPgbgBghQABgiAPgaQAQgZAbgPQAbgQAigBQAhABAbAQQAbAPAQAZQAQAaABAiQgBAhgQAbQgQAagbAPQgbAQghAAQgiAAgbgQgAFpAlQgMANAAAUQAAAUAMANQANANAUAAQATAAAMgNQANgNAAgUQAAgUgNgNQgMgNgTAAQgUAAgNANgAAfCyIFBmyIBXAAIlBGygAldCyIB9idQgKAGgPAFQgPAFgUgBQgoABgegTQgegSgRgeQgRghAAgrQAAgtAWgkQAUgkAmgVQAngTA2gBQA1ABAnATQAnAVAUAjQAWAkAAAuQAAAigJAcQgJAbgQAZQgQAagWAcIhbB0gAkoibQgUAUAAAdQAAAfAUATQASAUAhAAQAgAAATgUQATgTABgfQgBgdgTgUQgSgTghAAQghAAgSATgAAQgtQgbgPgPgbQgQgaAAghQAAgiAQgbQAPgaAbgPQAbgQAhAAQAjAAAaAQQAbAPAQAaQAPAbABAiQgBAhgPAaQgQAbgbAPQgaAQgjAAQghAAgbgQgAAti0QgNANgBAVQABATANANQAMANATABQAVgBAMgNQAMgNAAgTQAAgVgMgNQgMgNgVABQgTgBgMANg");
	this.shape.setTransform(-193.65,78.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF3124").s().p("AmkCdQgPgIgJgOQgJgPAAgTQAAgTAJgPQAJgOAPgHQAPgJATAAQATAAAPAJQAPAHAJAOQAJAPAAATQAAATgJAPQgJAOgPAIQgPAIgTAAQgTAAgPgIgAmRBKQgHAEgDAHQgEAIAAAIQAAAJAEAHQADAGAHAFQAGAEAJAAQAJAAAGgEQAGgFAEgGQADgHAAgJQAAgIgDgIQgEgHgGgEQgGgDgJgBQgJABgGADgAkBCiIAAhaIguAAIAAggICBAAIAAAgIgtAAIAABagAklAHIAAioIAmAAIAAATQABgDAEgFQAFgFAIgEQAJgEAMAAQAQAAANAHQAMAIAIAOQAHAPAAATQAAAUgHAOQgIAOgMAIQgNAIgQAAQgNAAgIgFQgJgEgEgFIgGgHIAABAgAj4h6QgIAIAAAOQAAANAIAJQAIAIANABQANgBAIgIQAIgJAAgNQAAgOgIgIQgIgIgNgBQgNABgIAIgAB6gEIAAgjIhXAAIAAAjIgjAAIAAhCIAMAAQAGgJADgLQAEgNADgTIAEgnIBnAAIAABbIAVAAIAABCgAA+h4IgDAWQgCAJgCAHIgFAMIAvAAIAAg7IgiAAgAhsgsQgPgJgIgOQgIgOAAgTQAAgTAIgOQAIgPAPgIQAOgIAUAAQATAAAPAIQAPAIAIAPQAIAOAAAUIAAAGIhdAAQACAMAIAIQAIAHAMAAQAIAAAFgCIAHgDIAEgEIAmAAQgBAFgEAHQgEAHgHAGQgHAGgLAEQgMAEgQAAQgUAAgQgIgAgvh0QgDgJgHgGQgHgFgKAAQgLAAgHAFQgGAGgDAJIA2AAIAAAAgAFygnIAAhaIgtAAIAAggICBAAIAAAgIguAAIAABagAEIgnIAAhJIg1BJIglAAIAAh6IAlAAIAABJIA1hJIAmAAIAAB6gAlmgnIgyg1IAAA1IgnAAIAAh6IAnAAIAAAxIAwgxIAxAAIg7A6IA+BAg");
	this.shape_1.setTransform(-306.625,-109.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt01_percent, new cjs.Rectangle(-354.8,-143.9,212.5,253.7), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-256,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-256,-126,195,192), null);


(lib.GirlBG_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GirlBG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GirlBG_1, new cjs.Rectangle(0,0,350,400), null);


(lib.Girl9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GirlNine();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Girl9, new cjs.Rectangle(0,0,350,400), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHcA6IAMgdIgbg5IAMAAIAVAtIAUgtIALAAIgmBWgAkHA6IAAhWIALAAIAAALIADgFIAIgFQAEgCAGAAQAJAAAHAEQAGADAEAHQAEAHAAAJQAAAKgEAHQgEAHgGAEQgHADgJAAQgGAAgEgCQgFgCgDgDIgDgEIAAAlgAjygQQgFADgCAEQgDAFAAAFQAAAGADAFQACAFAFACQAEADAGAAQAGAAAEgDQAEgCADgFQACgFAAgGQAAgFgCgFQgDgEgEgDQgEgDgGAAQgGAAgEADgAmIA4IAAgYQgKAAgJgEQgHgEgEgHQgFgHAAgJQAAgIAFgHQAEgHAHgEQAJgEAKAAIAAgcIAKAAIAAAcQALAAAIAEQAHAEAFAHQAEAHAAAIQAAAJgEAHQgFAHgHAEQgIAEgLAAIAAAYgAl+AWQAIAAAGgDQAFgDACgEQADgFAAgGQAAgFgDgFQgCgEgFgDQgGgDgIAAgAmVgQQgFADgDAFQgDAEAAAFQAAAGADAFQADAEAFADQAFADAIAAIAAgpQgIAAgFADgADMAcQgGgDgEgHQgEgHAAgKQAAgJAEgHQAEgGAGgEQAHgEAIAAQAGAAAFACQAEACACADIAEAEIAAgKIALAAIAAA7IgLAAIAAgKIgDAEQgDADgEACQgFACgGAAQgIAAgHgEgADSgQQgEADgDAEQgBAFgBAFQABAGABAFQADAFAEACQAFADAGAAQAGAAAEgDQAEgCACgFQADgFAAgGQAAgFgDgFQgCgEgEgDQgEgDgGAAQgGAAgFADgACKAdQgGgDgEgEQgDgEgBgFIAMAAIACAEIAHAEQADABAGAAQAGAAAFgCQAEgCAAgFQAAgEgDgCQgDgBgHAAIgKAAIAAgJIAKAAQAGAAADgCQADgCAAgEQAAgEgEgCQgEgCgHAAQgHAAgEACQgEADgCADIgKAAQAAgEAEgEQADgFAGgCQAGgDAIAAQAMAAAHAFQAHAEAAAIQgBAGgCADQgCADgEAAQAEACADADQADADABAFQgBAGgDAEQgDAFgHACQgGACgHAAQgKAAgGgDgAlDAcQgHgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAJAAQAJAAAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgHAEQgHAEgJAAQgJAAgHgEgAk+gQQgEADgCAEQgDAFAAAFQAAAGADAFQACAEAEADQAFADAGAAQAGAAAFgDQAEgCACgFQADgFAAgGQAAgFgDgFQgCgEgEgDQgFgDgGAAQgGAAgFADgAn3AaQgKgFgGgKQgGgKAAgMQAAgMAGgKQAGgKAKgGQAJgGANAAQANAAAKAGQAKAGAFAKQAHAKgBAMQABAMgHAKQgFAJgKAGQgKAGgNAAQgNAAgJgGgAnygnQgHAEgEAHQgDAIAAAJQAAAKADAGQAEAIAHAEQAHAEAKAAQAKAAAHgEQAHgFAEgHQAFgHAAgJQAAgJgFgIQgEgHgHgEQgHgFgKAAQgKAAgHAFgAiaAfIgXgtIAAAtIgKAAIAAg7IAOAAIAXAuIAYguIAOAAIAAA7IgLAAIAAguIgYAugAG/AfIghgbIAAAbIgKAAIAAg7IAKAAIAAAaIAfgaIAQAAIgjAcIAkAfgAFQAfIAAg7IAgAAQAFAAAFACQAFACACADQADAEAAAFQAAAGgDADQgCADgEAAQAEABAEADQADAEAAAFQAAAIgHAFQgFAFgKAAgAFbAVIAVAAQAFAAACgCQAEgCAAgEQgBgDgCgDQgCgCgGAAIgVAAgAFbgDIAVAAQAEAAACgCQADgCAAgEQAAgDgDgCQgCgCgEAAIgVAAgAE0AfIAAgWIgSAAIgPAWIgMAAIAQgXQgIgCgDgFQgDgDAAgHQAAgFACgEQACgEAFgDQAEgCAIgBIAgAAIAAA7gAEXgQQgDADAAAEQAAAEADADQADACAFAAIAVAAIAAgSIgVAAQgFAAgDACgAAoAfIAAg7IAKAAIAAAUIASAAQAJAAAFACQAGADACADQACAFAAAFQAAAGgCAEQgCAFgGADQgFADgIAAgAAyAVIARAAQAHAAADgDQAEgCAAgGQAAgEgEgDQgDgDgHAAIgRAAgAgEAfIAAgxIgYAAIAAgKIA6AAIAAAKIgYAAIAAAxgAgxAfIAAgsIgjAsIgKAAIAAg7IAKAAIAAAsIAjgsIALAAIAAA7g");
	this.shape.setTransform(-331.45,218.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF3124").s().p("Aq4CvQgyAAAAgyIAAj5QAAgyAyAAIVxAAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_1.setTransform(-332.3,218.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(-407,-11.3,481.6,247.4), null);


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

}).prototype = getMCSymbolPrototype(lib.Bird2, new cjs.Rectangle(-31,-40,47,63), null);


(lib.Bird1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bird1();
	this.instance.parent = this;
	this.instance.setTransform(38,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bird1, new cjs.Rectangle(38,-84,73,45), null);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B1CCD6").s().p("EgqLAV4MAAAgrvMBUXAAAMAAAArvg");
	this.shape.setTransform(119.9995,200.0003,0.4444,1.4286);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,240,400), null);


(lib.ALFALOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AqOCGIAAgkICtAAIAAAkgAimBfIAAgwQgcgCgRgSQgRgTAAgaQAAgbARgTQARgSAcgCIAAgvIAhAAIAAAvQAbACASASQAQASAAAcQAAAagQATQgSASgbACIAAAwgAiFARQAOgCAHgKQAIgIAAgPQAAgPgIgJQgHgKgOgCgAi7gqQgIAJAAAPQAAAPAIAIQAIAKANACIAAhHQgNACgIAKgAETAjQgMgMAAgUQAAgSALgKQAMgLAXAAIAfAAQAAgVgUAAQgKAAgHAFQgDADgBAFIgiAAQACgSANgLQAPgOAZAAQAYAAAPAOQAOAOAAAXIAAAqQAAAFACACQACACAEAAIAAAdIgLAAQgUAAgGgNQgLARgZAAQgUAAgNgNgAEnADQAAARAWAAQAKAAAHgGQAGgGAAgKIAAgIIgaAAQgTAAAAANgAgwAjQgMgMAAgUQAAgSAMgKQAMgLAWAAIAeAAQAAgVgTAAQgKAAgGAFQgFADAAAFIghAAQACgSANgLQAPgOAYAAQAYAAAOAOQAOAOAAAXIAAAqQAAAFACACQACACAEAAIAAAdIgLAAQgTAAgHgNQgLARgXAAQgVAAgNgNgAgbADQAAARAVAAQAKAAAGgGQAHgGgBgKIAAgIIgYAAQgTAAAAANgAJmAsIgxg0IAAA0IggAAIAAh9IAgAAIAAAyIAtgyIApAAIg2A8IA6BBgAHcAsIAAgwIgtAAIAAAwIggAAIAAh9IAgAAIAAAvIAtAAIAAgvIAgAAIAAB9gAB2AsIAAivIB2AAIAAAgIhVAAIAAAkIAkAAQAeAAAQAOQAQAOAAAZQAAAagQAOQgPAOgfAAgACXAMIAjAAQAcAAAAgWQABgLgIgFQgIgGgNAAIgjAAgAlXAsIAAh9IAhAAIAAAmIAXAAQAXAAAMALQANAMABAUQgBASgKAMQgNAOgYAAgAk2ARIAUAAQATAAgBgRQABgPgTAAIgUAAgAmQAsIAAhgIgfAAIgBAqQgBAdgJAMQgJANgXAAIgGAAIAAgdQALAAADgGQADgFAAgRIAChEIBeAAIAAB9gAoLAsIgMgkIhFAAIgMAkIgjAAIA1iXQAFgNAFgFQAIgIANAAQAOAAAHAIQAFAFAFANIAyCXgApRgVIAxAAIgYhIIgBAAg");
	this.shape.setTransform(0.55,0.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ALFALOGO, new cjs.Rectangle(-65,-13,131.1,26.9), null);


(lib.GirlAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("AU6i4IifUQg");
	var mask_graphics_21 = new cjs.Graphics().p("AU6i4IifUQg");
	var mask_graphics_23 = new cjs.Graphics().p("AU6i4IigUQg");
	var mask_graphics_25 = new cjs.Graphics().p("AU6i2Ii2UMg");
	var mask_graphics_27 = new cjs.Graphics().p("AU6iyIjoUEg");
	var mask_graphics_29 = new cjs.Graphics().p("AU6inIlNTug");
	var mask_graphics_31 = new cjs.Graphics().p("AU6iFIhEKTInEIYg");
	var mask_graphics_33 = new cjs.Graphics().p("AU6g0IhcKYIq/Fxg");
	var mask_graphics_34 = new cjs.Graphics().p("AU6AcIgWK7IuyCtg");
	var mask_graphics_35 = new cjs.Graphics().p("ADbMXIRfqdIhZKrg");
	var mask_graphics_36 = new cjs.Graphics().p("AGKMvIjXm9ISHkfIhcL6g");
	var mask_graphics_37 = new cjs.Graphics().p("AGKMvIlqrsIUaAQIhcL6g");
	var mask_graphics_38 = new cjs.Graphics().p("AGKMvIlFytIT1HRIhcL6g");
	var mask_graphics_39 = new cjs.Graphics().p("AFpKvIESz8IK/KvIhhLcg");
	var mask_graphics_40 = new cjs.Graphics().p("AFpK2IIB36IHQOtIhhLcg");
	var mask_graphics_41 = new cjs.Graphics().p("AEbMAICG1JIPtgZIioLHIhxLVg");
	var mask_graphics_42 = new cjs.Graphics().p("AAoMAICG1JIXUAnIqQKHIhxLVg");
	var mask_graphics_43 = new cjs.Graphics().p("AhpL6IAkz2IbPgfIEfEeIzeGDIiAKSg");
	var mask_graphics_44 = new cjs.Graphics().p("AhiL6IAkz2IbOgfIESMPIzQhuIiAKSg");
	var mask_graphics_45 = new cjs.Graphics().p("AiGL1IBH0jIZnAAIFbThIyRpCIhtK9g");
	var mask_graphics_46 = new cjs.Graphics().p("AMNFUIhIHMIsLg5IBG0kIZoAAIDbV5g");
	var mask_graphics_47 = new cjs.Graphics().p("Ai9F0IgLjfIH/s5INTAAILADrIjmVhg");
	var mask_graphics_48 = new cjs.Graphics().p("AlwFhIgNj5II8uYIO0AAIMTEFIkBYCg");
	var mask_graphics_49 = new cjs.Graphics().p("AojFOIgPkTIJ3v5IQYAAINlEiIkcaig");
	var mask_graphics_50 = new cjs.Graphics().p("AsaFSIgRk3ILLx+ISgAAIPWFHIlDeAg");
	var mask_graphics_51 = new cjs.Graphics().p("AxhGGIgUlnIM50tIVTAAIRsF5MgFzAikg");
	var mask_graphics_52 = new cjs.Graphics().p("A1BGpIgVmHIOD2mIXQAAITRGbMgGUAlug");
	var mask_graphics_53 = new cjs.Graphics().p("A6TMHIhAnEIOB7oIa9iXIXCFfMgDhAsag");
	var mask_graphics_54 = new cjs.Graphics().p("EgghAIdIgZnzIR38vIdlAAIYkILMgIDAwAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:133.8,y:111.159}).wait(2).to({graphics:mask_graphics_21,x:133.8,y:111.1587}).wait(2).to({graphics:mask_graphics_23,x:133.8,y:111.1512}).wait(2).to({graphics:mask_graphics_25,x:133.8,y:111.0066}).wait(2).to({graphics:mask_graphics_27,x:133.8,y:110.5916}).wait(2).to({graphics:mask_graphics_29,x:133.8,y:109.4509}).wait(2).to({graphics:mask_graphics_31,x:133.825,y:106.175}).wait(2).to({graphics:mask_graphics_33,x:133.825,y:98.075}).wait(1).to({graphics:mask_graphics_34,x:133.85,y:90.025}).wait(1).to({graphics:mask_graphics_35,x:133.825,y:80.55}).wait(1).to({graphics:mask_graphics_36,x:133.8,y:84.5}).wait(1).to({graphics:mask_graphics_37,x:133.8,y:84.5}).wait(1).to({graphics:mask_graphics_38,x:133.8,y:84.5}).wait(1).to({graphics:mask_graphics_39,x:133.8,y:83}).wait(1).to({graphics:mask_graphics_40,x:133.8,y:82.275}).wait(1).to({graphics:mask_graphics_41,x:142.225,y:82.575}).wait(1).to({graphics:mask_graphics_42,x:166.6,y:82.575}).wait(1).to({graphics:mask_graphics_43,x:196.05,y:79.225}).wait(1).to({graphics:mask_graphics_44,x:195.4,y:79.225}).wait(1).to({graphics:mask_graphics_45,x:192.325,y:81.4}).wait(1).to({graphics:mask_graphics_46,x:185.9,y:82.85}).wait(1).to({graphics:mask_graphics_47,x:186.6228,y:93.6184}).wait(1).to({graphics:mask_graphics_48,x:192.625,y:98.3}).wait(1).to({graphics:mask_graphics_49,x:198.65,y:103}).wait(1).to({graphics:mask_graphics_50,x:206.95,y:106.575}).wait(1).to({graphics:mask_graphics_51,x:217.925,y:106.575}).wait(1).to({graphics:mask_graphics_52,x:225.45,y:106.575}).wait(1).to({graphics:mask_graphics_53,x:234.9,y:93.15}).wait(1).to({graphics:mask_graphics_54,x:250.175,y:106.65}).wait(6));

	// Girl9
	this.instance = new lib.Girl9();
	this.instance.parent = this;
	this.instance.setTransform(391,46,1,1,0,0,0,270,140);
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
	this.instance_1.setTransform(391,46,1,1,0,0,0,270,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-331.4,-455.6,1204.8,1204.3000000000002);


(lib.bird2mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bird2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:30},263).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-40,77,63);


(lib.bird1mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bird1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:86},263).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38,-84,159,45);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.ALFALOGO();
	this.instance.parent = this;
	this.instance.setTransform(80.6,28.4,1,1,0,0,0,0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(408));

	// LEGAL
	this.instance_1 = new lib.legal_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(251,220);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(268).to({_off:false},0).to({x:271,alpha:1},18,cjs.Ease.cubicOut).wait(101).to({x:291,alpha:0},17,cjs.Ease.cubicIn).wait(4));

	// BTN
	this.instance_2 = new lib.button();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453,156);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({y:140,alpha:1},14,cjs.Ease.quadOut).wait(324).to({alpha:0},17,cjs.Ease.cubicIn).wait(4));

	// BIRD2
	this.instance_3 = new lib.bird2mov("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(183,194,0.9,0.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:199,alpha:1,startPosition:24},24).wait(95).to({startPosition:119},0).to({x:219,alpha:0,startPosition:143},24,cjs.Ease.cubicIn).to({_off:true},1).wait(264));

	// BIRD1
	this.instance_4 = new lib.bird1mov("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(40,152,0.9,0.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,x:56,alpha:1,startPosition:24},24).wait(95).to({startPosition:119},0).to({x:76,alpha:0,startPosition:143},24,cjs.Ease.cubicIn).to({_off:true},1).wait(264));

	// 5
	this.instance_5 = new lib.txt02_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(250,134);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(143).to({_off:false},0).to({x:270,alpha:1},24,cjs.Ease.cubicOut).wait(75).to({x:290,alpha:0},24,cjs.Ease.cubicIn).to({_off:true},1).wait(141));

	// Percent
	this.instance_6 = new lib.txt01_percent();
	this.instance_6.parent = this;
	this.instance_6.setTransform(367,236);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).to({y:220,alpha:1},14,cjs.Ease.quadOut).wait(65).to({x:387,alpha:0},24,cjs.Ease.cubicIn).to({_off:true},1).wait(264));

	// GIRL_9
	this.instance_7 = new lib.GirlAnimation("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(60,238,1,1,0,0,0,270,140);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:100,alpha:1,startPosition:24,loop:false},24,cjs.Ease.cubicOut).wait(95).to({mode:"single",startPosition:59},0).to({x:120,alpha:0},24,cjs.Ease.cubicIn).to({_off:true},1).wait(264));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.parent = this;
	this.instance_8.setTransform(270,140,1,1,0,0,0,270,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(408));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-507,-16,1030,434);


// stage content:
(lib.alfa_credit19_nine_girl_240x400_review = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(31,199,230,205);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
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