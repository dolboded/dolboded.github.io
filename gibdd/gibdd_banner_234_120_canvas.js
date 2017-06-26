(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 234,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/logo.png", id:"logo"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,174);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,79);


(lib.txtSkidka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiBTIAAgeIhLAAIAAAeIgZAAIAAg2IANAAQAIgNAEgSQAEgUAAgYIAAgjIBRAAIAABuIAQAAIAAA2gAiQglQAAAUgCARQgDAPgHAOIAqAAIAAhWIgeAAgAIOA0QgFgBgDgEQgEgDgCgFQgDgFAAgGIAAgTQAAgGADgDQACgFAEgDQADgEAFgBQAFgCAGAAQAFAAAFACQAGABADAEQAEADACAFQACADAAAGIAAATQAAAGgCAFQgCAFgEADQgDAEgGABQgFACgFAAQgGAAgFgCgAIPAKIAAARQAAALAKAAQAEAAADgDQADgCAAgGIAAgRQAAgGgDgCQgDgCgEAAQgKAAAAAKgAFaAzQgHgCgGgGQgGgFgDgHQgDgIAAgJIAAg3QAAgKADgIQADgHAGgFQAGgFAHgDQAIgDAIAAQAIAAAIADQAHADAGAFQAFAFAEAHQADAIAAAKIAAA3QAAAJgDAIQgEAHgFAFQgGAGgHACQgIADgIAAQgIAAgIgDgAFeg2QgFAEAAAJIAAA2QAAAJAFAFQAFAFAHAAQAHAAAFgFQAEgFAAgJIAAg2QAAgJgEgEQgFgFgHAAQgHAAgFAFgADxAzQgIgEgEgEQgGgGgCgHIgDgPIAZAAQABAIAEAEQAEAFAHAAQAIAAAEgFQADgDABgFIABgMQAAgKgDgGQgEgGgJAAQgIAAgDADQgEAEgBAEIgXAAIAAhNIBNAAIAAAXIg3AAIAAAdIAIgFQAGgCAHAAQAIAAAHACQAGADAEAEQAIAIACAJQACAJAAAIQAAAMgCAIQgCAIgIAIQgEAEgIAEQgHADgLAAQgKAAgIgDgAoVAyQgKgEgHgHQgFgFgDgGIgEgMIgBgPIAAgOIAAgQIABgOIAEgNQADgGAFgFQAHgHAKgEQAJgEALAAQAJAAAJADQAIADAGAFQAHAGAEAHQAFAIACALIgbAAQgCgIgGgGQgFgFgKAAQgFAAgFACQgEACgDADIgDAFIgCAGIgBALIgBAQIABAOIABALIACAHIADAEQADADAEACQAFACAFAAQAKAAAFgFQAGgGACgIIAbAAQgCALgFAIQgEAIgHAFQgGAGgJACQgIADgJAAQgLAAgJgEgAHEA1IBAiGIAUAAIhACGgABEA1IAAgYIALAAQAFAAAEgCQADgCACgEIAEgKIgshcIAcAAIAcBCIAahCIAbAAIgvBvIgFAJQgDAEgEADQgDADgFACQgFACgGAAgAAVA1IgthFIAABFIgbAAIAAiGIAbAAIAABBIAqhBIAfAAIgtBAIAyBGgAjzA1IAAhVIg0BVIgYAAIAAiGIAaAAIAABVIA1hVIAYAAIAACGgAluA1IgwhFIAABFIgaAAIAAiGIAaAAIAABBIAshBIAgAAIguBAIAyBGgAG4gMIgJgFQgEgEgCgFQgCgEAAgHIAAgTQAAgGACgFQACgFAEgDQAEgDAFgCQAFgCAGAAQAFAAAFACQAFACAEADQAEADACAFQACAFAAAGIAAATQAAAHgCAEQgCAFgEAEIgJAFQgFABgFAAQgGAAgFgBgAG5g3IAAARQAAAGADADQACACAFAAQAEAAADgCQACgDAAgGIAAgRQAAgFgCgDQgDgDgEAAQgKAAAAALg");
	this.shape.setTransform(0.2,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-14.1,119.3,28.3);


(lib.txtShtarf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKHBRIAAgcIhHAAIAAAcIgYAAIAAgzIAMAAQAIgMAEgSQAEgTAAgWIAAghIBNAAIAABoIAPAAIAAAzgAJcghQAAAUgDAOQgCAQgHANIAoAAIAAhRIgcAAgAIIBRIAAgcIhHAAIAAAcIgYAAIAAgzIAMAAQAIgMAEgSQAEgTAAgWIAAghIBNAAIAABoIAPAAIAAAzgAHdghQAAAUgDAOQgCAQgHANIAoAAIAAhRIgcAAgAjRA2IAAgQQgOAAgKgFQgKgDgGgIQgHgGgDgLQgDgHAAgMQAAgyA1gDIAAgNIAZAAIAAANQA1ADAAAyQAAAMgDAHQgDALgHAGQgGAIgKADQgKAFgOAAIAAAQgAi4ARQAPAAAGgJQAHgIAAgOQAAgQgHgHQgGgIgPgBgAjmglQgHAHAAAQQAAAOAHAIQAGAJAQAAIAAg/QgQABgGAIgALLA1IAAgYIAZAAIAAAYgAFAA1IAAh/IBVAAIAAAXIg8AAIAAAaIAbAAQAJAAAIACQAHADAGAGQAFAFADAHQADAFAAAJQAAAJgDAIQgDAHgFAFQgFAGgIACQgIADgKABgAFZAeIAZAAQAJAAAEgEQAFgFAAgJQAAgHgFgFQgEgDgJAAIgZAAgAEJA1IAAhRIgxBRIgXAAIAAh/IAZAAIAABQIAyhQIAWAAIAAB/gABdA1IAAh/IBQAAIAAAXIg3AAIAABogAgCA1IAAh/IAXAAIAAB/gAhsA1IAAh/IAZAAIAAAxIAZAAQAJAAAIACQAIADAFAGQAGAFADAHQADAFAAAJQAAAJgDAIQgDAHgGAFQgFAGgIACQgIADgJABgAhTAeIAXAAQAJAAAFgEQAFgFAAgJQAAgHgFgFQgFgDgJAAIgXAAgAkpA1IgIgXIgtAAIgIAXIgaAAIAvh/IATAAIAvB/gAlXAJIAgAAIgQgtgAniA1IAAh/IAxAAQAKAAAHAEQAIACAGAGQAFAFAEAHQADAHAAAKQAAAIgDAIQgEAGgFAGQgGAFgIACQgHACgKAAIgYAAIAAAxgAnJgQIAXAAQAJAAAFgFQAFgFAAgHQAAgJgFgFQgFgEgJAAIgXAAgAoxA1IAAhoIgiAAIAAgXIBcAAIAAAXIghAAIAABogAr7A1IAAh/IAZAAIAABoIAkAAIAAhoIAZAAIAABoIAlAAIAAhoIAZAAIAAB/gALMAMIAAgFQAAgFABgDIAFgJIAOgRIAEgFIABgHQAAgGgEgFQgEgDgHAAQgHAAgDADQgEAFAAAGIgXAAQAAgIADgGQADgIAFgEQAFgFAHgCQAGgCAIgBQAIABAHACQAHACAFAFQAFAFADAGQADAHAAAIQAAAHgCAGIgGAKIgOAQIgCAEIgBAFIAAADg");
	this.shape.setTransform(0.3,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.6,-13.5,159.3,27);


(lib.txtNeupusti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADHBHQgKgEgIgIQgFgGgEgGQgDgGgBgIIgBgPIAAgSIAAgRIABgPQABgIADgGQAEgGAFgGQAIgIAKgEQAKgEANAAQAKAAAJACQAJADAIAGQAGAGAFAJQAFAJADAMIgeAAQgDgJgFgGQgGgGgLAAQgHAAgEACQgFACgDADIgEAFIgCAIIgBAMIAAAQIAAARIABAMIACAIIAEAFQADADAFACQAEACAHAAQALAAAGgGQAFgGADgJIAeAAQgDAMgFAJQgFAJgGAGQgIAGgJADQgJACgKAAQgNAAgKgEgAH5BKIAAheIg5BeIgbAAIAAiTIAdAAIAABeIA7heIAaAAIAACTgAFKBKIAAh5IgoAAIAAgaIBrAAIAAAaIgmAAIAAB5gAAxBKIAAgaIAMAAQAGAAADgCQAEgDADgEIADgKIgvhmIAeAAIAgBIIAchIIAeAAIg1B6IgFAKIgHAIQgEADgFACQgFACgHAAgAgNBKIAAh5IgyAAIAAB5IgdAAIAAiTIBrAAIAACTgAjXBKIAAgaIAMAAQAGAAADgCQAEgDACgEIAFgKIgwhmIAfAAIAeBIIAdhIIAeAAIg0B6IgGAKIgHAIQgEADgGACQgFACgGAAgAmGBKIAAiTIBjAAIAAAaIhGAAIAAAjIA7AAIAAAYIg7AAIAAAkIBGAAIAAAagAnHBKIAAg+IgyAAIAAA+IgdAAIAAiTIAdAAIAAA9IAyAAIAAg9IAeAAIAACTg");
	this.shape.setTransform(0.1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.4,-15.4,114.8,30.9);


(lib.txtNaShtraf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIUAzIAAgSIguAAIAAASIgPAAIAAggIAIAAQAFgHACgMQACgLAAgOIAAgWIAyAAIAABCIAKAAIAAAggAH4gVQAAANgBAJQgCAJgFAJIAaAAIAAgzIgSAAgAHDAzIAAgSIguAAIAAASIgPAAIAAggIAIAAQAFgHACgMQACgLAAgOIAAgWIAyAAIAABCIAKAAIAAAggAGngVQAAANgBAJQgCAJgFAJIAaAAIAAgzIgSAAgAgOAiIAAgKQgIAAgHgDQgGgCgFgFQgEgEgBgGQgCgEAAgJQAAgfAhgCIAAgIIAOAAIAAAIQAiACAAAfQAAAJgCAEQgCAGgEAEQgEAFgGACQgHADgJAAIAAAKgAAAALQAKgBAEgFQAEgFAAgIQAAgKgEgFQgEgFgKgBgAgbgXQgFAFAAAKQAAAIAFAFQAEAFAJABIAAgoQgJABgEAFgAFDAhIAAhQIA2AAIAAAPIgmAAIAAARIARAAQAGAAAFACQAFABADADQADAEACAEQACAEABAFQgBAFgCAGIgEAIQgEADgFABQgFACgGAAgAFTATIAQAAQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgBgFgBIgQAAgAEgAhIAAgyIgfAyIgPAAIAAhQIAQAAIAAAzIAggzIAOAAIAABQgACyAhIAAhQIA0AAIAAAPIgkAAIAABBgAB0AhIAAhQIAQAAIAABQgAAwAhIAAhQIAQAAIAAAgIARAAQAGAAAEACQAFABAEADQAEAEACAEQACAEAAAFQAAAFgCAGQgCAEgEAEQgEADgFABQgEACgGAAgABAATIAQAAQAFAAADgDQAEgDgBgFQABgFgEgDQgDgBgFgBIgQAAgAhGAhIgEgOIgeAAIgFAOIgQAAIAdhQIANAAIAeBQgAhjAFIAUAAIgKgbgAi8AhIAAhQIAfAAQAGAAAFACQAFADAEADQADADACAFQACAFAAAFQAAAGgCAEQgCAFgDADQgEADgFABQgEABgHABIgPAAIAAAegAisgKIAOAAQAGAAADgDQAEgCAAgGQAAgFgEgDQgDgDgGAAIgOAAgAjvAhIAAhBIgVAAIAAgPIA6AAIAAAPIgVAAIAABBgAlwAhIAAhQIARAAIAABCIAXAAIAAhCIAQAAIAABCIAXAAIAAhCIAQAAIAABQgAmlAhIgEgOIgeAAIgFAOIgQAAIAdhQIANAAIAeBQgAnCAFIAUAAIgKgbgAn3AhIAAghIgbAAIAAAhIgRAAIAAhQIARAAIAAAiIAbAAIAAgiIAQAAIAABQg");
	this.shape.setTransform(0.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-8.6,115.1,17.2);


(lib.txtNadoelo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An7BOIAAgcIhHAAIAAAcIgYAAIAAgzIAMAAQAIgMAEgRQADgTABgXIAAggIBMAAIAABnIAPAAIAAAzgAomgkQAAAUgDAQQgDAOgGANIAoAAIAAhRIgcAAgAhqAlQgEgFgDgGIgEgMIgBgMIAAgJIAAgLIAAgQIACgMQABgGADgEIAGgHQAOgOAVAAQAVAAAOAOQAGAGADAKQADAKAAAQIAAANIAAALQAAAGgBAGIgEALQgDAGgEAFQgOAOgVAAQgVAAgOgOgAhQg1QgEABgDAEQgEAEgCAJIgBAVIAAAGIABARQACAIAEAFQAHAGAJAAQAKAAAGgGIADgFIACgHIABgKIAAgPIAAgNIgBgJIgCgHIgDgEQgGgHgKAAQgFAAgEACgAnHAlQgEgFgDgGIgEgMIAAgMIgBgJIAAgLIABgQIABgMQACgGADgEIAFgHQAPgOAUAAQAWAAANAOQAHAGACAKQAEAKAAAQIAAANIgBALQAAAGgBAGIgDALQgDAGgFAFQgNAOgWAAQgUAAgPgOgAmtg1QgDABgEAEQgEAEgBAJIgBAVIAAAGIABARQABAIAEAFQAHAGAJAAQAKAAAHgGIACgFIACgHIACgKIAAgPIAAgNIgCgJIgCgHIgCgEQgHgHgKAAQgFAAgEACgALhAyIAAh+IAZAAIAAAwIAZAAQAKAAAHADQAIADAGAFQAFAFADAIQADAFAAAJQAAAJgDAHQgDAHgFAGQgGAFgIADQgHADgKAAgAL6AbIAXAAQAJAAAFgEQAFgFAAgIQAAgIgFgDQgFgFgJAAIgXAAgAKSAyIAAhoIgiAAIAAgWIBdAAIAAAWIgiAAIAABogAJDAyIAAhRIgxBRIgXAAIAAh+IAZAAIAABQIAyhQIAWAAIAAB+gAGsAyIAAhoIghAAIAAgWIBbAAIAAAWIghAAIAABogAFqAyIgIgXIguAAIgHAXIgaAAIAvh+IATAAIAvB+gAE8AGIAgAAIgQgtgADqAyIAAhoIgfAAIAAAlQAAASgCAOQgCANgGAIQgFAHgHAEQgHADgLAAIgJAAIAAgXIADAAQAFAAAEgBQAEgCADgFQADgGACgJQABgHAAgPIAAg6IBQAAIAAB+gABuAyIAAhoIgrAAIAABoIgZAAIAAh+IBdAAIAAB+gAipAyIAAhoIgfAAIAAAlQAAASgCAOQgCANgGAIQgFAHgHAEQgHADgLAAIgKAAIAAgXIAEAAQAFAAAEgBQAEgCADgFQADgGACgJQABgHAAgPIAAg6IBQAAIAAB+gAlbAyIAAh+IBVAAIAAAWIg8AAIAAAeIAzAAIAAAWIgzAAIAAAdIA8AAIAAAXgAp3AyIgIgXIguAAIgHAXIgaAAIAuh+IATAAIAvB+gAqmAGIAgAAIgQgtgAr4AyIAAg0IgrAAIAAA0IgZAAIAAh+IAZAAIAAA0IArAAIAAg0IAZAAIAAB+g");
	this.shape.setTransform(0.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.1,-13.5,172.1,27);


(lib.red2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA1414").s().p("Ap0CJIAAkRITpAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-13.7,125.9,27.6);


(lib.plackRED1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA1414").s().p("As3B1IAAjpIZvAAIAADpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-11.8,165,23.6);


(lib.plackBLUE1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEEF").s().p("AtqB1IAAjpIbVAAIAADpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.6,-11.8,175.2,23.6);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(-43,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-39.5,86,79);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyRJYIAAyvMAkjAAAIAASvg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.blue2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AEEF").s().p("ApTB8IAAj3ISnAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-12.4,119.4,24.9);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-140,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-87,280,174);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// msk3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_150 = new cjs.Graphics().p("AoiCdIAAhoIRGAAIAABog");
	var mask_graphics_213 = new cjs.Graphics().p("AoiCdIAAhoIRGAAIAABog");
	var mask_graphics_214 = new cjs.Graphics().p("AoiCdIAAhoIRGAAIAABog");
	var mask_graphics_215 = new cjs.Graphics().p("AoiCeIAAhoIRGAAIAABog");
	var mask_graphics_216 = new cjs.Graphics().p("AoiCfIAAhoIRGAAIAABog");
	var mask_graphics_217 = new cjs.Graphics().p("AoiChIAAhoIRGAAIAABog");
	var mask_graphics_218 = new cjs.Graphics().p("AoiCjIAAhoIRGAAIAABog");
	var mask_graphics_219 = new cjs.Graphics().p("AoiCmIAAhoIRGAAIAABog");
	var mask_graphics_220 = new cjs.Graphics().p("AoiCqIAAhoIRGAAIAABog");
	var mask_graphics_221 = new cjs.Graphics().p("AoiCwIAAhoIRGAAIAABog");
	var mask_graphics_222 = new cjs.Graphics().p("AoiC2IAAhoIRGAAIAABog");
	var mask_graphics_223 = new cjs.Graphics().p("AoiC+IAAhoIRGAAIAABog");
	var mask_graphics_224 = new cjs.Graphics().p("AoiDIIAAhoIRGAAIAABog");
	var mask_graphics_225 = new cjs.Graphics().p("AoiDUIAAhoIRGAAIAABog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(150).to({graphics:mask_graphics_150,x:47,y:15.8}).wait(63).to({graphics:mask_graphics_213,x:47,y:15.8}).wait(1).to({graphics:mask_graphics_214,x:47,y:15.8}).wait(1).to({graphics:mask_graphics_215,x:47,y:15.8}).wait(1).to({graphics:mask_graphics_216,x:47,y:15.9}).wait(1).to({graphics:mask_graphics_217,x:47,y:16.1}).wait(1).to({graphics:mask_graphics_218,x:47,y:16.3}).wait(1).to({graphics:mask_graphics_219,x:47,y:16.7}).wait(1).to({graphics:mask_graphics_220,x:47,y:17.1}).wait(1).to({graphics:mask_graphics_221,x:47,y:17.6}).wait(1).to({graphics:mask_graphics_222,x:47,y:18.3}).wait(1).to({graphics:mask_graphics_223,x:47,y:19.1}).wait(1).to({graphics:mask_graphics_224,x:47,y:20.1}).wait(1).to({graphics:mask_graphics_225,x:47,y:21.3}).wait(1).to({graphics:null,x:0,y:0}).wait(20));

	// shtraf
	this.instance = new lib.txtNaShtraf();
	this.instance.setTransform(46.5,14.9);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({_off:false},0).wait(1).to({regX:0.4,regY:1,x:46.9,y:18.8},0).wait(1).to({y:20.9},0).wait(1).to({y:22.5},0).wait(1).to({y:23.6},0).wait(1).to({y:24.5},0).wait(1).to({y:25.2},0).wait(1).to({y:25.7},0).wait(1).to({y:26},0).wait(1).to({y:26.2},0).wait(1).to({y:26.3},0).wait(1).to({regX:0,regY:0,x:46.5,y:25.4},0).to({_off:true},65).wait(20));

	// msk2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_148 = new cjs.Graphics().p("AozBTIAAilIRnAAIAAClg");
	var mask_1_graphics_209 = new cjs.Graphics().p("AozBTIAAilIRnAAIAAClg");
	var mask_1_graphics_210 = new cjs.Graphics().p("AozBTIAAilIRnAAIAAClg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AozBTIAAilIRnAAIAAClg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AozBTIAAilIRnAAIAAClg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AozBTIAAilIRnAAIAAClg");
	var mask_1_graphics_214 = new cjs.Graphics().p("AozBTIAAilIRnAAIAAClg");
	var mask_1_graphics_215 = new cjs.Graphics().p("AozBTIAAilIRnAAIAAClg");
	var mask_1_graphics_216 = new cjs.Graphics().p("AozBTIAAilIRnAAIAAClg");
	var mask_1_graphics_217 = new cjs.Graphics().p("AozBVIAAilIRnAAIAAClg");
	var mask_1_graphics_218 = new cjs.Graphics().p("AozBfIAAikIRnAAIAACkg");
	var mask_1_graphics_219 = new cjs.Graphics().p("AozBsIAAilIRnAAIAAClg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AozB7IAAikIRnAAIAACkg");
	var mask_1_graphics_221 = new cjs.Graphics().p("AozCOIAAikIRnAAIAACkg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(148).to({graphics:mask_1_graphics_148,x:46.5,y:2.9}).wait(61).to({graphics:mask_1_graphics_209,x:46.5,y:2.9}).wait(1).to({graphics:mask_1_graphics_210,x:46.5,y:3}).wait(1).to({graphics:mask_1_graphics_211,x:46.5,y:3.2}).wait(1).to({graphics:mask_1_graphics_212,x:46.5,y:3.5}).wait(1).to({graphics:mask_1_graphics_213,x:46.5,y:4.1}).wait(1).to({graphics:mask_1_graphics_214,x:46.5,y:4.8}).wait(1).to({graphics:mask_1_graphics_215,x:46.5,y:5.8}).wait(1).to({graphics:mask_1_graphics_216,x:46.5,y:7.1}).wait(1).to({graphics:mask_1_graphics_217,x:46.5,y:8.5}).wait(1).to({graphics:mask_1_graphics_218,x:46.5,y:9.6}).wait(1).to({graphics:mask_1_graphics_219,x:46.5,y:10.8}).wait(1).to({graphics:mask_1_graphics_220,x:46.5,y:12.4}).wait(1).to({graphics:mask_1_graphics_221,x:46.5,y:14.3}).wait(1).to({graphics:null,x:0,y:0}).wait(24));

	// skidka
	this.instance_1 = new lib.txtSkidka();
	this.instance_1.setTransform(46.4,-16.9);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(148).to({_off:false},0).wait(1).to({regX:0.2,regY:2.3,x:46.6,y:-9.7},0).wait(1).to({y:-6.1},0).wait(1).to({y:-3.5},0).wait(1).to({y:-1.6},0).wait(1).to({y:-0.1},0).wait(1).to({y:1},0).wait(1).to({y:1.8},0).wait(1).to({y:2.3},0).wait(1).to({y:2.6},0).wait(1).to({y:2.8},0).wait(1).to({regX:0,regY:0,x:46.4,y:0.6},0).to({_off:true},63).wait(24));

	// msk1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_146 = new cjs.Graphics().p("AoWgCIAAiYIQtAAIAACYg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AoWgCIAAiYIQtAAIAACYg");
	var mask_2_graphics_206 = new cjs.Graphics().p("AoWgCIAAiYIQtAAIAACYg");
	var mask_2_graphics_207 = new cjs.Graphics().p("AoWgBIAAiYIQtAAIAACYg");
	var mask_2_graphics_208 = new cjs.Graphics().p("AoWAAIAAiXIQtAAIAACXg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AoWABIAAiWIQtAAIAACWg");
	var mask_2_graphics_210 = new cjs.Graphics().p("AoWAEIAAiWIQtAAIAACWg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AoWAIIAAiVIQtAAIAACVg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AoWAOIAAiVIQtAAIAACVg");
	var mask_2_graphics_213 = new cjs.Graphics().p("AoWAWIAAiWIQtAAIAACWg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AoWAfIAAiWIQtAAIAACWg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AoWAqIAAiVIQtAAIAACVg");
	var mask_2_graphics_216 = new cjs.Graphics().p("AoWA4IAAiVIQtAAIAACVg");
	var mask_2_graphics_217 = new cjs.Graphics().p("AoWBJIAAiVIQtAAIAACVg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(146).to({graphics:mask_2_graphics_146,x:46.5,y:-15.5}).wait(59).to({graphics:mask_2_graphics_205,x:46.5,y:-15.5}).wait(1).to({graphics:mask_2_graphics_206,x:46.5,y:-15.5}).wait(1).to({graphics:mask_2_graphics_207,x:46.5,y:-15.4}).wait(1).to({graphics:mask_2_graphics_208,x:46.5,y:-15.3}).wait(1).to({graphics:mask_2_graphics_209,x:46.5,y:-15}).wait(1).to({graphics:mask_2_graphics_210,x:46.5,y:-14.7}).wait(1).to({graphics:mask_2_graphics_211,x:46.5,y:-14.3}).wait(1).to({graphics:mask_2_graphics_212,x:46.5,y:-13.7}).wait(1).to({graphics:mask_2_graphics_213,x:46.5,y:-12.9}).wait(1).to({graphics:mask_2_graphics_214,x:46.5,y:-12}).wait(1).to({graphics:mask_2_graphics_215,x:46.5,y:-10.9}).wait(1).to({graphics:mask_2_graphics_216,x:46.5,y:-9.5}).wait(1).to({graphics:mask_2_graphics_217,x:46.5,y:-7.8}).wait(1).to({graphics:null,x:0,y:0}).wait(28));

	// ne upusti
	this.instance_2 = new lib.txtNeupusti();
	this.instance_2.setTransform(46.4,-40.2);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(146).to({_off:false},0).wait(1).to({regX:0.1,regY:0.9,x:46.5,y:-34.9},0).wait(1).to({y:-31.7},0).wait(1).to({y:-29.3},0).wait(1).to({y:-27.6},0).wait(1).to({y:-26.2},0).wait(1).to({y:-25.3},0).wait(1).to({y:-24.5},0).wait(1).to({y:-24.1},0).wait(1).to({y:-23.7},0).wait(1).to({y:-23.6},0).wait(1).to({regX:0,regY:0,x:46.4,y:-24.4},0).to({_off:true},61).wait(28));

	// bluemsk (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_141 = new cjs.Graphics().p("AhAC/IAAj3ISoAAIAAD3g");
	var mask_3_graphics_142 = new cjs.Graphics().p("Ai0C/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_143 = new cjs.Graphics().p("AkXC/IAAj3ISoAAIAAD3g");
	var mask_3_graphics_144 = new cjs.Graphics().p("AlpC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_145 = new cjs.Graphics().p("AmtC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_146 = new cjs.Graphics().p("AnlC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_147 = new cjs.Graphics().p("AoTC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_148 = new cjs.Graphics().p("Ao4C/IAAj3ISoAAIAAD3g");
	var mask_3_graphics_149 = new cjs.Graphics().p("ApTC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_150 = new cjs.Graphics().p("ApTC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_151 = new cjs.Graphics().p("ApTC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_152 = new cjs.Graphics().p("ApTC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_153 = new cjs.Graphics().p("ApTC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_154 = new cjs.Graphics().p("ApTC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_155 = new cjs.Graphics().p("ApTC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_215 = new cjs.Graphics().p("ApTC/IAAj3ISnAAIAAD3g");
	var mask_3_graphics_216 = new cjs.Graphics().p("ApTDAIAAj4ISnAAIAAD4g");
	var mask_3_graphics_217 = new cjs.Graphics().p("ApTDBIAAj3ISnAAIAAD3g");
	var mask_3_graphics_218 = new cjs.Graphics().p("ApTDEIAAj3ISnAAIAAD3g");
	var mask_3_graphics_219 = new cjs.Graphics().p("ApTDIIAAj3ISnAAIAAD3g");
	var mask_3_graphics_220 = new cjs.Graphics().p("ApTDOIAAj3ISnAAIAAD3g");
	var mask_3_graphics_221 = new cjs.Graphics().p("ApTDWIAAj3ISnAAIAAD3g");
	var mask_3_graphics_222 = new cjs.Graphics().p("ApTDgIAAj3ISnAAIAAD3g");
	var mask_3_graphics_223 = new cjs.Graphics().p("ApTDuIAAj4ISnAAIAAD4g");
	var mask_3_graphics_224 = new cjs.Graphics().p("ApTD+IAAj6ISnAAIAAD6g");
	var mask_3_graphics_225 = new cjs.Graphics().p("ApTESIAAj5ISnAAIAAD5g");
	var mask_3_graphics_226 = new cjs.Graphics().p("ApTErIAAj6ISnAAIAAD6g");
	var mask_3_graphics_227 = new cjs.Graphics().p("ApTFJIAAj6ISnAAIAAD6g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(141).to({graphics:mask_3_graphics_141,x:112.8,y:19.2}).wait(1).to({graphics:mask_3_graphics_142,x:101.2,y:19.2}).wait(1).to({graphics:mask_3_graphics_143,x:91.3,y:19.2}).wait(1).to({graphics:mask_3_graphics_144,x:83.1,y:19.2}).wait(1).to({graphics:mask_3_graphics_145,x:76.3,y:19.2}).wait(1).to({graphics:mask_3_graphics_146,x:70.7,y:19.2}).wait(1).to({graphics:mask_3_graphics_147,x:66.1,y:19.2}).wait(1).to({graphics:mask_3_graphics_148,x:62.4,y:19.2}).wait(1).to({graphics:mask_3_graphics_149,x:59.3,y:19.2}).wait(1).to({graphics:mask_3_graphics_150,x:54.8,y:19.2}).wait(1).to({graphics:mask_3_graphics_151,x:51.3,y:19.2}).wait(1).to({graphics:mask_3_graphics_152,x:48.8,y:19.2}).wait(1).to({graphics:mask_3_graphics_153,x:47.2,y:19.2}).wait(1).to({graphics:mask_3_graphics_154,x:46.3,y:19.2}).wait(1).to({graphics:mask_3_graphics_155,x:46,y:19.2}).wait(60).to({graphics:mask_3_graphics_215,x:46,y:19.2}).wait(1).to({graphics:mask_3_graphics_216,x:46,y:19.2}).wait(1).to({graphics:mask_3_graphics_217,x:46,y:19.4}).wait(1).to({graphics:mask_3_graphics_218,x:46,y:19.7}).wait(1).to({graphics:mask_3_graphics_219,x:46,y:20.1}).wait(1).to({graphics:mask_3_graphics_220,x:46,y:20.7}).wait(1).to({graphics:mask_3_graphics_221,x:46,y:21.5}).wait(1).to({graphics:mask_3_graphics_222,x:46,y:22.5}).wait(1).to({graphics:mask_3_graphics_223,x:46,y:23.8}).wait(1).to({graphics:mask_3_graphics_224,x:46,y:25.4}).wait(1).to({graphics:mask_3_graphics_225,x:46,y:27.5}).wait(1).to({graphics:mask_3_graphics_226,x:46,y:29.9}).wait(1).to({graphics:mask_3_graphics_227,x:46,y:32.9}).wait(1).to({graphics:null,x:0,y:0}).wait(18));

	// Blue22
	this.instance_3 = new lib.blue2();
	this.instance_3.setTransform(46,25.9);
	this.instance_3._off = true;

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(141).to({_off:false},0).to({_off:true},87).wait(18));

	// Layer 17 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_136 = new cjs.Graphics().p("ArJCJIAAkRITpAAIAAERg");
	var mask_4_graphics_137 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_138 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_139 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_140 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_141 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_142 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_143 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_144 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_145 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_146 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_147 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_148 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_149 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_150 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_212 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_213 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_214 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_215 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_216 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_217 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_218 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_219 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_220 = new cjs.Graphics().p("Ap0CJIAAkRITpAAIAAERg");
	var mask_4_graphics_221 = new cjs.Graphics().p("Ap0COIAAkSITpAAIAAESg");
	var mask_4_graphics_222 = new cjs.Graphics().p("Ap0CkIAAkSITpAAIAAESg");
	var mask_4_graphics_223 = new cjs.Graphics().p("Ap0C/IAAkSITpAAIAAESg");
	var mask_4_graphics_224 = new cjs.Graphics().p("Ap0DgIAAkSITpAAIAAESg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(136).to({graphics:mask_4_graphics_136,x:-71.4,y:1}).wait(1).to({graphics:mask_4_graphics_137,x:-55.4,y:1}).wait(1).to({graphics:mask_4_graphics_138,x:-34.7,y:1}).wait(1).to({graphics:mask_4_graphics_139,x:-17.4,y:1}).wait(1).to({graphics:mask_4_graphics_140,x:-3.1,y:1}).wait(1).to({graphics:mask_4_graphics_141,x:8.7,y:1}).wait(1).to({graphics:mask_4_graphics_142,x:18.3,y:1}).wait(1).to({graphics:mask_4_graphics_143,x:26,y:1}).wait(1).to({graphics:mask_4_graphics_144,x:32.1,y:1}).wait(1).to({graphics:mask_4_graphics_145,x:36.9,y:1}).wait(1).to({graphics:mask_4_graphics_146,x:40.5,y:1}).wait(1).to({graphics:mask_4_graphics_147,x:43.1,y:1}).wait(1).to({graphics:mask_4_graphics_148,x:44.9,y:1}).wait(1).to({graphics:mask_4_graphics_149,x:45.8,y:1}).wait(1).to({graphics:mask_4_graphics_150,x:46.2,y:1}).wait(62).to({graphics:mask_4_graphics_212,x:46.2,y:1}).wait(1).to({graphics:mask_4_graphics_213,x:46.2,y:1.1}).wait(1).to({graphics:mask_4_graphics_214,x:46.2,y:1.5}).wait(1).to({graphics:mask_4_graphics_215,x:46.2,y:2.1}).wait(1).to({graphics:mask_4_graphics_216,x:46.2,y:3}).wait(1).to({graphics:mask_4_graphics_217,x:46.2,y:4.3}).wait(1).to({graphics:mask_4_graphics_218,x:46.2,y:6}).wait(1).to({graphics:mask_4_graphics_219,x:46.2,y:8.3}).wait(1).to({graphics:mask_4_graphics_220,x:46.2,y:11.1}).wait(1).to({graphics:mask_4_graphics_221,x:46.2,y:14.2}).wait(1).to({graphics:mask_4_graphics_222,x:46.2,y:16.4}).wait(1).to({graphics:mask_4_graphics_223,x:46.2,y:19.1}).wait(1).to({graphics:mask_4_graphics_224,x:46.2,y:22.4}).wait(1).to({graphics:null,x:0,y:0}).wait(21));

	// red
	this.instance_4 = new lib.red2();
	this.instance_4.setTransform(46.2,1);
	this.instance_4._off = true;

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136).to({_off:false},0).to({_off:true},89).wait(21));

	// Layer 16 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_132 = new cjs.Graphics().p("AhABDIAAj3ISoAAIAAD3g");
	var mask_5_graphics_133 = new cjs.Graphics().p("Ai0BDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_134 = new cjs.Graphics().p("AkXBDIAAj3ISoAAIAAD3g");
	var mask_5_graphics_135 = new cjs.Graphics().p("AlpBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_136 = new cjs.Graphics().p("AmtBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_137 = new cjs.Graphics().p("AnlBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_138 = new cjs.Graphics().p("AoTBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_139 = new cjs.Graphics().p("Ao4BDIAAj3ISoAAIAAD3g");
	var mask_5_graphics_140 = new cjs.Graphics().p("ApTBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_141 = new cjs.Graphics().p("ApTBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_142 = new cjs.Graphics().p("ApTBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_143 = new cjs.Graphics().p("ApTBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_144 = new cjs.Graphics().p("ApTBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_145 = new cjs.Graphics().p("ApTBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_146 = new cjs.Graphics().p("ApTBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_208 = new cjs.Graphics().p("ApTBDIAAj3ISnAAIAAD3g");
	var mask_5_graphics_209 = new cjs.Graphics().p("ApTBEIAAj4ISnAAIAAD4g");
	var mask_5_graphics_210 = new cjs.Graphics().p("ApTBFIAAj3ISnAAIAAD3g");
	var mask_5_graphics_211 = new cjs.Graphics().p("ApTBIIAAj3ISnAAIAAD3g");
	var mask_5_graphics_212 = new cjs.Graphics().p("ApTBNIAAj3ISnAAIAAD3g");
	var mask_5_graphics_213 = new cjs.Graphics().p("ApTBUIAAj4ISnAAIAAD4g");
	var mask_5_graphics_214 = new cjs.Graphics().p("ApTBcIAAj3ISnAAIAAD3g");
	var mask_5_graphics_215 = new cjs.Graphics().p("ApTBnIAAj3ISnAAIAAD3g");
	var mask_5_graphics_216 = new cjs.Graphics().p("ApTB2IAAj4ISnAAIAAD4g");
	var mask_5_graphics_217 = new cjs.Graphics().p("ApTB8IAAj3ISnAAIAAD3g");
	var mask_5_graphics_218 = new cjs.Graphics().p("ApTB8IAAj3ISnAAIAAD3g");
	var mask_5_graphics_219 = new cjs.Graphics().p("ApTB8IAAj3ISnAAIAAD3g");
	var mask_5_graphics_220 = new cjs.Graphics().p("ApTB8IAAj3ISnAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(132).to({graphics:mask_5_graphics_132,x:112.8,y:-18.2}).wait(1).to({graphics:mask_5_graphics_133,x:101.2,y:-18.2}).wait(1).to({graphics:mask_5_graphics_134,x:91.3,y:-18.2}).wait(1).to({graphics:mask_5_graphics_135,x:83.1,y:-18.2}).wait(1).to({graphics:mask_5_graphics_136,x:76.3,y:-18.2}).wait(1).to({graphics:mask_5_graphics_137,x:70.7,y:-18.2}).wait(1).to({graphics:mask_5_graphics_138,x:66.1,y:-18.2}).wait(1).to({graphics:mask_5_graphics_139,x:62.4,y:-18.2}).wait(1).to({graphics:mask_5_graphics_140,x:59.3,y:-18.2}).wait(1).to({graphics:mask_5_graphics_141,x:54.8,y:-18.2}).wait(1).to({graphics:mask_5_graphics_142,x:51.3,y:-18.2}).wait(1).to({graphics:mask_5_graphics_143,x:48.8,y:-18.2}).wait(1).to({graphics:mask_5_graphics_144,x:47.2,y:-18.2}).wait(1).to({graphics:mask_5_graphics_145,x:46.3,y:-18.2}).wait(1).to({graphics:mask_5_graphics_146,x:46,y:-18.2}).wait(62).to({graphics:mask_5_graphics_208,x:46,y:-18.2}).wait(1).to({graphics:mask_5_graphics_209,x:46,y:-18.1}).wait(1).to({graphics:mask_5_graphics_210,x:46,y:-18}).wait(1).to({graphics:mask_5_graphics_211,x:46,y:-17.7}).wait(1).to({graphics:mask_5_graphics_212,x:46,y:-17.2}).wait(1).to({graphics:mask_5_graphics_213,x:46,y:-16.5}).wait(1).to({graphics:mask_5_graphics_214,x:46,y:-15.7}).wait(1).to({graphics:mask_5_graphics_215,x:46,y:-14.6}).wait(1).to({graphics:mask_5_graphics_216,x:46,y:-13.1}).wait(1).to({graphics:mask_5_graphics_217,x:46,y:-10.2}).wait(1).to({graphics:mask_5_graphics_218,x:46,y:-5.8}).wait(1).to({graphics:mask_5_graphics_219,x:46,y:-0.4}).wait(1).to({graphics:mask_5_graphics_220,x:46,y:6.1}).wait(1).to({graphics:null,x:0,y:0}).wait(25));

	// Blue21
	this.instance_5 = new lib.blue2();
	this.instance_5.setTransform(46,-23.9);
	this.instance_5._off = true;

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(132).to({_off:false},0).to({_off:true},89).wait(25));

	// logo
	this.instance_6 = new lib.logo_1();
	this.instance_6.setTransform(-161.2,2.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(117).to({_off:false},0).wait(1).to({x:-132,alpha:0.298},0).wait(1).to({x:-117.1,alpha:0.449},0).wait(1).to({x:-105.8,alpha:0.564},0).wait(1).to({x:-96.6,alpha:0.658},0).wait(1).to({x:-89.1,alpha:0.734},0).wait(1).to({x:-82.8,alpha:0.798},0).wait(1).to({x:-77.7,alpha:0.851},0).wait(1).to({x:-73.4,alpha:0.894},0).wait(1).to({x:-70,alpha:0.928},0).wait(1).to({x:-67.4,alpha:0.955},0).wait(1).to({x:-65.4,alpha:0.976},0).wait(1).to({x:-64,alpha:0.989},0).wait(1).to({x:-63.3,alpha:0.997},0).wait(1).to({x:-63,alpha:1},0).wait(90).to({y:2.8,alpha:0.997},0).wait(1).to({y:4,alpha:0.985},0).wait(1).to({y:6,alpha:0.965},0).wait(1).to({y:9.1,alpha:0.934},0).wait(1).to({y:13.4,alpha:0.891},0).wait(1).to({y:19.1,alpha:0.834},0).wait(1).to({y:26.6,alpha:0.759},0).wait(1).to({y:36.2,alpha:0.663},0).wait(1).to({y:48.1,alpha:0.544},0).wait(1).to({y:62.8,alpha:0.397},0).wait(1).to({y:80.8,alpha:0.217},0).wait(1).to({y:102.5,alpha:0},0).to({_off:true},1).wait(13));

	// Layer 9 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_24 = new cjs.Graphics().p("AtTEBIADgcIACnmINPAMQNTAMAAgBIAACzIgaAAIhEAAQg9ABAAgBIAAE4IyIABImEgBg");
	var mask_6_graphics_116 = new cjs.Graphics().p("AtTEBIADgcIACnmINPAMQNTAMAAgBIAACzIgaAAIhEAAQg9ABAAgBIAAE4IyIABImEgBg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_6_graphics_24,x:-15.2,y:20.2}).wait(92).to({graphics:mask_6_graphics_116,x:-15.2,y:20.2}).wait(1).to({graphics:null,x:0,y:0}).wait(129));

	// Shtraf
	this.instance_7 = new lib.txtShtarf();
	this.instance_7.setTransform(-179.2,34.3);
	this.instance_7._off = true;

	this.instance_7.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).wait(1).to({regX:0.3,regY:1.9,x:-148.4,y:36.2},0).wait(1).to({x:-125.1},0).wait(1).to({x:-106.1},0).wait(1).to({x:-90},0).wait(1).to({x:-76.3},0).wait(1).to({x:-64.5},0).wait(1).to({x:-54.4},0).wait(1).to({x:-45.8},0).wait(1).to({x:-38.6},0).wait(1).to({x:-32.7},0).wait(1).to({x:-28.2},0).wait(1).to({x:-24.8},0).wait(1).to({x:-22.8},0).wait(1).to({regX:0,regY:0,x:-22.5,y:34.3},0).wait(39).to({regX:0.3,regY:1.9,x:-21.6,y:36.2},0).wait(1).to({x:-20},0).wait(1).to({x:-17.1},0).wait(1).to({x:-12.8},0).wait(1).to({x:-7},0).wait(1).to({x:0.4},0).wait(1).to({x:9.9},0).wait(1).to({x:21.5},0).wait(1).to({x:35.8},0).wait(1).to({x:53.2},0).wait(1).to({x:74.3},0).wait(1).to({x:100.1},0).wait(1).to({regX:0,regY:0,x:131.8,y:34.3},0).to({_off:true},1).wait(138));

	// Nadoelo
	this.instance_8 = new lib.txtNadoelo();
	this.instance_8.setTransform(-184.9,4.6);
	this.instance_8._off = true;

	this.instance_8.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},0).wait(1).to({regX:0.4,regY:2.2,x:-151.6,y:6.8},0).wait(1).to({x:-126.4},0).wait(1).to({x:-105.9},0).wait(1).to({x:-88.6},0).wait(1).to({x:-73.8},0).wait(1).to({x:-61.2},0).wait(1).to({x:-50.3},0).wait(1).to({x:-41},0).wait(1).to({x:-33.2},0).wait(1).to({x:-26.9},0).wait(1).to({x:-21.9},0).wait(1).to({x:-18.4},0).wait(1).to({x:-16.2},0).wait(1).to({regX:0,regY:0,x:-15.9,y:4.6},0).wait(39).to({regX:0.4,regY:2.2,x:-14.9,y:6.8},0).wait(1).to({x:-13},0).wait(1).to({x:-9.9},0).wait(1).to({x:-5.2},0).wait(1).to({x:1.1},0).wait(1).to({x:9.3},0).wait(1).to({x:19.7},0).wait(1).to({x:32.5},0).wait(1).to({x:48.2},0).wait(1).to({x:67.2},0).wait(1).to({x:90.4},0).wait(1).to({x:118.7},0).wait(1).to({regX:0,regY:0,x:153.4,y:4.6},0).to({_off:true},1).wait(142));

	// Layer 8 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_28 = new cjs.Graphics().p("A1RDtIAAkGIaSAAIAAEGg");
	var mask_7_graphics_29 = new cjs.Graphics().p("A1QDtIAAkGIaSAAIAAEGg");
	var mask_7_graphics_30 = new cjs.Graphics().p("A1NDtIAAkGIaSAAIAAEGg");
	var mask_7_graphics_31 = new cjs.Graphics().p("A1HDtIAAkGIaSAAIAAEGg");
	var mask_7_graphics_32 = new cjs.Graphics().p("A09DtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_33 = new cjs.Graphics().p("A0wDtIAAkGIaSAAIAAEGg");
	var mask_7_graphics_34 = new cjs.Graphics().p("A0dDtIAAkGIaSAAIAAEGg");
	var mask_7_graphics_35 = new cjs.Graphics().p("A0DDtIAAkGIaSAAIAAEGg");
	var mask_7_graphics_36 = new cjs.Graphics().p("AzgDtIAAkGIaSAAIAAEGg");
	var mask_7_graphics_37 = new cjs.Graphics().p("AywDtIAAkGIaSAAIAAEGg");
	var mask_7_graphics_38 = new cjs.Graphics().p("AxtDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_39 = new cjs.Graphics().p("AwRDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_40 = new cjs.Graphics().p("AuRDtIAAkGIaSAAIAAEGg");
	var mask_7_graphics_41 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_42 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_103 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_104 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_105 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_106 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_107 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_108 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_109 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_110 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_111 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_112 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_113 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_114 = new cjs.Graphics().p("AtIDtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_115 = new cjs.Graphics().p("Aq9DtIAAkGIaRAAIAAEGg");
	var mask_7_graphics_116 = new cjs.Graphics().p("AoNDtIAAkGIaRAAIAAEGg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_7_graphics_28,x:-136.2,y:23.8}).wait(1).to({graphics:mask_7_graphics_29,x:-136.2,y:23.8}).wait(1).to({graphics:mask_7_graphics_30,x:-135.8,y:23.8}).wait(1).to({graphics:mask_7_graphics_31,x:-135.2,y:23.8}).wait(1).to({graphics:mask_7_graphics_32,x:-134.3,y:23.8}).wait(1).to({graphics:mask_7_graphics_33,x:-132.9,y:23.8}).wait(1).to({graphics:mask_7_graphics_34,x:-131,y:23.8}).wait(1).to({graphics:mask_7_graphics_35,x:-128.4,y:23.8}).wait(1).to({graphics:mask_7_graphics_36,x:-124.9,y:23.8}).wait(1).to({graphics:mask_7_graphics_37,x:-120.1,y:23.8}).wait(1).to({graphics:mask_7_graphics_38,x:-113.5,y:23.8}).wait(1).to({graphics:mask_7_graphics_39,x:-104.3,y:23.8}).wait(1).to({graphics:mask_7_graphics_40,x:-91.4,y:23.8}).wait(1).to({graphics:mask_7_graphics_41,x:-64.3,y:23.8}).wait(1).to({graphics:mask_7_graphics_42,x:-22.8,y:23.8}).wait(61).to({graphics:mask_7_graphics_103,x:-22.8,y:23.8}).wait(1).to({graphics:mask_7_graphics_104,x:-22.2,y:23.8}).wait(1).to({graphics:mask_7_graphics_105,x:-20.4,y:23.8}).wait(1).to({graphics:mask_7_graphics_106,x:-17.2,y:23.8}).wait(1).to({graphics:mask_7_graphics_107,x:-12.5,y:23.8}).wait(1).to({graphics:mask_7_graphics_108,x:-6.1,y:23.8}).wait(1).to({graphics:mask_7_graphics_109,x:2.1,y:23.8}).wait(1).to({graphics:mask_7_graphics_110,x:12.5,y:23.8}).wait(1).to({graphics:mask_7_graphics_111,x:25.4,y:23.8}).wait(1).to({graphics:mask_7_graphics_112,x:41.1,y:23.8}).wait(1).to({graphics:mask_7_graphics_113,x:60.3,y:23.8}).wait(1).to({graphics:mask_7_graphics_114,x:83.5,y:23.8}).wait(1).to({graphics:mask_7_graphics_115,x:98.1,y:23.8}).wait(1).to({graphics:mask_7_graphics_116,x:115.7,y:23.8}).wait(1).to({graphics:null,x:0,y:0}).wait(129));

	// Red
	this.instance_9 = new lib.plackRED1();
	this.instance_9.setTransform(-21.1,35.8);
	this.instance_9._off = true;

	this.instance_9.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({_off:false},0).to({_off:true},89).wait(129));

	// mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_24 = new cjs.Graphics().p("A2ICfIAAk9Ib+AAIAAE9g");
	var mask_8_graphics_25 = new cjs.Graphics().p("A2HCfIAAk9Ib+AAIAAE9g");
	var mask_8_graphics_26 = new cjs.Graphics().p("A2DCfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_27 = new cjs.Graphics().p("A19CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_28 = new cjs.Graphics().p("A1zCfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_29 = new cjs.Graphics().p("A1lCfIAAk9Ib+AAIAAE9g");
	var mask_8_graphics_30 = new cjs.Graphics().p("A1QCfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_31 = new cjs.Graphics().p("A01CfIAAk9Ib+AAIAAE9g");
	var mask_8_graphics_32 = new cjs.Graphics().p("A0PCfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_33 = new cjs.Graphics().p("AzcCfIAAk9Ib+AAIAAE9g");
	var mask_8_graphics_34 = new cjs.Graphics().p("AyVCfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_35 = new cjs.Graphics().p("AwzCfIAAk9Ib+AAIAAE9g");
	var mask_8_graphics_36 = new cjs.Graphics().p("AuqCfIAAk9Ib+AAIAAE9g");
	var mask_8_graphics_37 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_38 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_100 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_101 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_102 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_103 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_104 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_105 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_106 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_107 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_108 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_109 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_110 = new cjs.Graphics().p("At+CfIAAk9Ib9AAIAAE9g");
	var mask_8_graphics_111 = new cjs.Graphics().p("AthCfIAAk9Ib+AAIAAE9g");
	var mask_8_graphics_112 = new cjs.Graphics().p("ArKCfIAAk9Ib+AAIAAE9g");
	var mask_8_graphics_113 = new cjs.Graphics().p("AoPCfIAAk9Ib+AAIAAE9g");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_8_graphics_24,x:-141.7,y:5.1}).wait(1).to({graphics:mask_8_graphics_25,x:-141.6,y:5.1}).wait(1).to({graphics:mask_8_graphics_26,x:-141.3,y:5.1}).wait(1).to({graphics:mask_8_graphics_27,x:-140.7,y:5.1}).wait(1).to({graphics:mask_8_graphics_28,x:-139.7,y:5.1}).wait(1).to({graphics:mask_8_graphics_29,x:-138.2,y:5.1}).wait(1).to({graphics:mask_8_graphics_30,x:-136.2,y:5.1}).wait(1).to({graphics:mask_8_graphics_31,x:-133.4,y:5.1}).wait(1).to({graphics:mask_8_graphics_32,x:-129.7,y:5.1}).wait(1).to({graphics:mask_8_graphics_33,x:-124.5,y:5.1}).wait(1).to({graphics:mask_8_graphics_34,x:-117.5,y:5.1}).wait(1).to({graphics:mask_8_graphics_35,x:-107.6,y:5.1}).wait(1).to({graphics:mask_8_graphics_36,x:-93.9,y:5.1}).wait(1).to({graphics:mask_8_graphics_37,x:-61.7,y:5.1}).wait(1).to({graphics:mask_8_graphics_38,x:-17.4,y:5.1}).wait(62).to({graphics:mask_8_graphics_100,x:-17.4,y:5.1}).wait(1).to({graphics:mask_8_graphics_101,x:-16.8,y:5.1}).wait(1).to({graphics:mask_8_graphics_102,x:-14.9,y:5.1}).wait(1).to({graphics:mask_8_graphics_103,x:-11.5,y:5.1}).wait(1).to({graphics:mask_8_graphics_104,x:-6.5,y:5.1}).wait(1).to({graphics:mask_8_graphics_105,x:0.3,y:5.1}).wait(1).to({graphics:mask_8_graphics_106,x:9.1,y:5.1}).wait(1).to({graphics:mask_8_graphics_107,x:20.1,y:5.1}).wait(1).to({graphics:mask_8_graphics_108,x:33.8,y:5.1}).wait(1).to({graphics:mask_8_graphics_109,x:50.5,y:5.1}).wait(1).to({graphics:mask_8_graphics_110,x:70.8,y:5.1}).wait(1).to({graphics:mask_8_graphics_111,x:92.5,y:5.1}).wait(1).to({graphics:mask_8_graphics_112,x:107.6,y:5.1}).wait(1).to({graphics:mask_8_graphics_113,x:126.3,y:5.1}).wait(1).to({graphics:null,x:0,y:0}).wait(132));

	// Blue
	this.instance_10 = new lib.plackBLUE1();
	this.instance_10.setTransform(-16,5.6);
	this.instance_10._off = true;

	this.instance_10.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({_off:true},90).wait(132));

	// bg
	this.instance_11 = new lib.bg_1();
	this.instance_11.setTransform(18.8,-24.8);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({y:-9.2,alpha:0.325},0).wait(1).to({y:-4,alpha:0.433},0).wait(1).to({y:-0.4,alpha:0.508},0).wait(1).to({y:2.4,alpha:0.566},0).wait(1).to({y:4.7,alpha:0.614},0).wait(1).to({y:6.6,alpha:0.655},0).wait(1).to({y:8.4,alpha:0.691},0).wait(1).to({y:9.9,alpha:0.723},0).wait(1).to({y:11.3,alpha:0.751},0).wait(1).to({y:12.5,alpha:0.777},0).wait(1).to({y:13.7,alpha:0.801},0).wait(1).to({y:14.7,alpha:0.824},0).wait(1).to({y:15.7,alpha:0.844},0).wait(1).to({y:16.7,alpha:0.864},0).wait(1).to({y:17.5,alpha:0.882},0).wait(1).to({y:18.4,alpha:0.899},0).wait(1).to({y:19.1,alpha:0.916},0).wait(1).to({y:19.9,alpha:0.931},0).wait(1).to({y:20.6,alpha:0.946},0).wait(1).to({y:21.3,alpha:0.96},0).wait(1).to({y:22,alpha:0.974},0).wait(1).to({y:22.6,alpha:0.987},0).wait(1).to({y:23.2,alpha:1},0).wait(210).to({alpha:0.997},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.942},0).wait(1).to({alpha:0.904},0).wait(1).to({alpha:0.854},0).wait(1).to({alpha:0.791},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.612},0).wait(1).to({alpha:0.494},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.2,-111.8,280,174);


// stage content:



(lib.gibdd_banner_234_120_canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AyRpXMAkjAAAIAASvMgkjAAAg");
	this.shape.setTransform(117,60);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.movie();
	this.instance.setTransform(117,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.btn();
	this.instance_1.setTransform(117,60);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyRJXIAAyuMAkjAAAIAASug");
	this.shape_1.setTransform(117,60);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.8,8.2,280,174);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;