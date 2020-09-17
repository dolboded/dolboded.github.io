(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,330);


(lib.can = function() {
	this.initialize(img.can);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,375);


(lib.caviar = function() {
	this.initialize(img.caviar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,219);// helper functions:

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


(lib.txt0203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3E2D").s().p("AkPA5IAOhOIALAAIgBAHQAEgEAFgDQAFgCAGAAQAGAAAEACQAFADAEADQADAEACAFQACAFAAAFQAAAFgCAGQgCAGgEAFQgEAFgGADQgGADgIAAQgHAAgGgDQgFgDgDgEIgFAegAjvgJQgEABgCADQgDADgBADIgBAIIABAHQABADADACIAFADIAGABQAFAAADgBIAGgFQADgDABgDIACgIIgBgGQgBgDgDgCIgFgEIgHgBQgFAAgDACgAFpAiQgFgCgEgEQgEgDgCgFQgCgGAAgGQAAgGACgFQADgGAEgEQAEgFAGgCQAGgDAHAAQAFAAAFACQAFACADADQAEAEACAEQACAFAAAEIgBAFIgBAFIgsAAQABAHAFAEQAFAEAIAAQAFAAAEgCQAEgCAEgDIAFAJQgFAEgGACQgGADgHAAQgGAAgGgDgAFsgIQgFADgCAGIAgAAIAAgBQAAgFgEgEQgEgDgGAAQgHAAgEAEgADCAjQgEgBgDgDQgCgCgCgEQgBgEAAgEIAAgDIABgDIAFggIANAAIgGAfIAAADIAAACQAAAFADADQADACAFAAQAGAAAEgDQAEgDABgGIAGgiIANAAIgKA4IgMAAIABgFQgDADgFACQgEACgFAAQgFAAgDgCgACEAiQgGgCgEgDQgDgEgCgFQgDgFAAgGQAAgHADgEQACgGAEgEQAEgEAGgCQAFgDAHAAQAFAAAFACQAFACADAEQgBgFgCgFQgCgEgFgEQgEgEgHgEQgHgDgJgDIAEgLQAMADAJAEQAJAFAGAGQAFAHADAIQADAIAAAKQAAAHgCAIQgCAHgEAGQgEAGgGAEQgGAEgJAAQgHAAgFgDgACLgIIgGAEIgEAFQgCAEAAAEQAAADACADIADAFQACADADABQADABAEAAQAEAAADgBIAGgEQADgDABgDQACgEAAgEQAAgDgCgDIgDgFIgFgDIgHgBIgHABgABBAiQgFgCgEgEQgEgEgCgFQgCgFAAgGQAAgHACgFQADgFAEgFQAFgEAGgCQAGgDAHAAQAGAAAFACQAGADAEADQAEAEACAGQACAFAAAFQAAAHgCAFQgDAGgFAFQgEAEgGACQgGADgHAAQgGAAgGgDgABIgKIgGAEIgEAGIgCAIQAAAEACADQABADACACQACADAEABQADABAEAAQAEAAADgBQAEgCACgDQADgCACgEQABgDAAgFIgBgGQgBgDgDgCQgCgDgDgBIgHgBQgEAAgEABgAAEAjQgEgBgDgCQgEgDgCgDQgCgEAAgFIAAgDIABgEIACgNQACgJAGgGQAIgFAKAAIAJABQAEABADACQADACACADQACADAAAEQAAAEgCADQgCACgEADQAEABACADQACAEAAAEQAAADgCAEQgBADgEADQgDADgFACQgFACgHAAQgGAAgEgCgAABALIAAACIAAADQAAAFADACQADADAHAAQAIAAADgDQAEgCAAgEQAAgHgLAAIgRAAgAAJgKQgEACgBAGIgBACIAOAAQAFAAADAAQADgCAAgEQAAgDgCgCQgDgBgFAAQgFAAgEACgAg1AkIgHgCIgGgEQgDgCgCgEIAIgHIADADIADADIAFACIAHABQAGAAADgDQADgCAAgEQAAgDgCgCQgCgCgFAAIgMAAIACgKIAMAAQAEAAACAAQADgCAAgDQAAgHgLAAQgGAAgEACIgHAEIgFgIQAEgFAGgCQAGgCAHAAIAIABQAEABAEACIAFAFQACADAAAEQAAAFgDACQgCAEgEACQADACACAEQABADAAADIgBAHQgCAEgDACIgIAEQgFACgGAAIgHgBgAh0AjQgEgBgDgDQgCgCgCgEQgBgEAAgEIAAgDIABgDIAFggIANAAIgGAfIAAADIAAACQAAAFADADQADACAFAAQAGAAAEgDQAEgDABgGIAGgiIANAAIgKA4IgMAAIABgFQgDADgFACQgEACgFAAQgFAAgDgCgAizAiQgGgCgEgEQgEgEgCgFQgCgFAAgGQAAgHADgFQACgFAFgFQAEgEAGgCQAGgDAHAAQAGAAAGACQAFADAEADQAEAEACAGQADAFAAAFQAAAHgDAFQgDAGgEAFQgFAEgGACQgGADgGAAQgHAAgFgDgAisgKIgGAEIgFAGIgBAIQAAAEABADQABADADACQACADADABQADABAEAAQAEAAAEgBQADgCADgDQADgCABgEQACgDAAgFIgCgGQgBgDgCgCQgCgDgEgBIgHgBQgEAAgDABgAn8AiQgGgCgEgEQgEgEgCgFQgCgFAAgGQAAgHADgFQACgFAFgFQAEgEAGgCQAGgDAHAAQAGAAAGACQAFADAEADQAEAEACAGQADAFAAAFQAAAHgDAFQgDAGgEAFQgFAEgGACQgGADgGAAQgHAAgFgDgAn1gKIgGAEIgFAGIgBAIQAAAEABADQABADADACQACADADABQADABAEAAQAEAAAEgBQADgCADgDQADgCABgEQACgDAAgFIgCgGQgBgDgCgCQgCgDgEgBIgHgBQgEAAgDABgAGPAZIAHgDQADgCACgDQACgCABgEIADgJIACgIQACgEADgEQADgDAEgCQAFgCAHAAIAWAAIgKA4IgNAAIAIguIgGAAIgGABQgDABgCADIgDAFIgCAGIgEANQgCAFgEAEQgDADgFADIgNADgAH4AjIADgQIgLAAIgCAAIgCAAIgQAQIgPAAIAUgUQgEgCgCgEQgCgEAAgFQAAgFACgEIAFgHIAIgEQAFgCAGAAIAcAAIgKA5gAHpgIQgDADAAAFQAAADACADQADACAFAAIANAAIADgTIgOAAQgGAAgDADgAE+AjIAGghIAAgCIABgBQAAgFgDgDQgDgDgFAAQgGAAgEADQgEAEgBAFIgGAjIgNAAIAGghIABgCIAAgBQAAgFgDgDQgDgDgFAAQgGAAgEADQgEAEgBAFIgGAjIgMAAIAKg4IALAAIgBAFIAIgFQAEgCAFAAQAGAAAEACQAFADACAEQAEgEAFgCQAFgDAGAAQAKAAAFAGQAFAFAAAJIAAADIAAACIgGAhgAklAjIAGggIAAgDIABgBQAAgFgDgDQgEgDgFAAQgFAAgEADQgFAEgBAFIgGAjIgMAAIAKg4IALAAIgBAFIAIgFQAEgCAFAAQAFAAAEACQADABADADQADACABAEQACADAAAFIgBADIAAACIgGAhgAmAAjIAGghIAAgCIABgBQAAgFgDgDQgDgDgFAAQgGAAgEADQgEAEgBAFIgGAjIgNAAIAGghIABgCIAAgBQAAgFgDgDQgDgDgFAAQgGAAgEADQgEAEgBAFIgGAjIgMAAIAKg4IALAAIgBAFIAIgFQAEgCAFAAQAGAAAEACQAFADACAEQAEgEAFgCQAFgDAGAAQAKAAAFAGQAFAFAAAJIAAADIAAACIgGAhg");
	this.shape.setTransform(54.675,10.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0203, new cjs.Rectangle(0,0,109.9,19.1), null);


(lib.txt0202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3E2D").s().p("AlECvIAAg9IjZAAIAAkbIA6AAIAADnIB3AAIAAjnIA6AAIAADnIAmAAIAABxgAHgByIgQglIh0AAIgQAlIg/AAIB/kgIAUAAIB+EggAFwAZIBLAAIglhbgAC4ByIAAh5Ih+AAIAAB5Ig6AAIAAkbIA6AAIAABtIB+AAIAAhtIA6AAIAAEbgAjrByIAAkbIC+AAIAAA1IiFAAIAAA2IBiAAIAAA1IhiAAIAABHICLAAIAAA0g");
	this.shape.setTransform(59.175,33.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0202, new cjs.Rectangle(0,0,115.5,58.1), null);


(lib.txt0201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3E2D").s().p("AlIBXIAAgfIAOABQAQABAIgMIhAiCIAnAAIAsBcIAohcIAmAAIg7B/QgHAQgHAKQgHAJgKAGQgKAFgPAAQgLAAgJgCgAoOBXIAAgeIAHAAQALAAAGgMQAGgLADgZQADgXABgnIAAgfIB2AAIAACqIgjAAIAAiLIgyAAQAAA2gHAgQgGAfgMANQgLAMgTAAQgIAAgHgCgAHsBWIAAg5IgXAAIgoA5IglAAIAsg/QgRgHgJgOQgKgMAAgRQAAgRAJgNQAIgNAPgIQAPgGATAAIA9AAIAACqgAG8guQgIAHAAAMQAAALAIAHQAIAIANAAIAbAAIAAg0IgbAAQgNAAgIAHgAFcBWIgKgXIhGAAIgKAXIglAAIBMiuIAMAAIBMCugAEYAgIAuAAIgXg3gAgMBWIAAiqIAiAAIAACKIA4AAIAAiKIAjAAIAACKIA4AAIAAiKIAkAAIAACqgAhQBWIAAg/QgQAGgUgBQggABgSgSQgSgQAAghIAAguIAjAAIAAAqQAAAVAJAKQAKAJAUAAQARAAANgFIAAhNIAjAAIAACqg");
	this.shape.setTransform(54.675,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0201, new cjs.Rectangle(0,0,110.9,36.7), null);


(lib.txt0103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3E2D").s().p("AGMBPIAAiaIAfAAIAABcIBZhfIAKAAIAACaIgfAAIAAhdIhZBggAAnBMIAAgaIAMAAQAOAAAHgKIg4hzIAiAAIAnBSIAkhSIAhAAIg0BxQgHAOgGAJQgGAIgJAFQgJAFgNAAQgJAAgIgDgAl7BEQgSgKgLgSQgKgSAAgWQAAgVAKgSQALgSASgLQATgKAWAAQAWAAATAKQASALALASQALASAAAVQAAAWgLASQgLASgSAKQgTALgWAAQgWAAgTgLgAlrgrQgLAGgGAMQgGALAAAOQAAAPAGALQAGAMALAGQALAGAOAAQAOAAALgGQALgGAHgMQAGgLAAgPQAAgOgGgLQgHgMgLgGQgLgHgOAAQgOAAgLAHgACtBMIAAiXIAfAAIAAB7IAyAAIAAh7IAfAAIAAB7IAyAAIAAh7IAfAAIAACXgAhoBMIAAiXIBlAAIAAAcIhGAAIAAAgIAgAAQAPAAALAFQAMAGAFAJQAHAKAAAOQAAAOgHAKQgFALgMAGQgLAGgPAAgAhJAwIAeAAQALAAAFgFQAGgFAAgIQAAgJgGgFQgFgEgLAAIgeAAgAjsBMIAAiXIA5AAQAQAAANAGQAMAGAHALQAHALAAAPQAAAOgHAMQgHAKgMAGQgNAGgQAAIgaAAIAAA2gAjNgFIAaAAQALAAAGgGQAGgGAAgJQAAgJgGgGQgGgGgLAAIgaAAgAoNBMIAAiXIBiAAIAAAcIhDAAIAAB7g");
	this.shape.setTransform(56.575,17.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0103, new cjs.Rectangle(0,0,112.4,32.9), null);


(lib.txt0102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3E2D").s().p("AoPCQIAAkaIA4AAIAACqICjivIASAAIAAEaIg4AAIAAirIijCwgAHUCLIgQgkIhxAAIgQAkIg9AAIB8kaIATAAIB7EagAFmAzIBKAAIglhYgAAsCLIAAkVIBoAAQAdAAAXAMQAXALANAUQAMAUAAAbQAAAbgMAUQgNATgXAMQgXALgdAAIgvAAIAABigABlgJIAvAAQAUAAALgLQALgLAAgRQAAgRgLgLQgLgKgUAAIgvAAgAg4CLIh3iQIAACQIg4AAIAAkVIA4AAIAACBIBqiBIBEAAIhqCDIB3CSg");
	this.shape.setTransform(57.825,30.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0102, new cjs.Rectangle(0,0,113.2,56.8), null);


(lib.txt0101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3E2D").s().p("Ai+AyQgJgEgGgJIALgLQAEAGAGAEQAFADAJAAQAIAAAFgEQAGgEACgKIABgGQgEAEgGACQgEACgHAAQgGAAgFgCQgFgCgDgDQgEgEgCgFQgCgFAAgEIABgJIAIgpIARAAIgIApIAAADIAAADQAAAGADADQAEAEAHAAQAHAAAHgEQAFgEABgHIAIgtIARAAIgNBKQgBAIgEAGQgDAGgGAFQgFAEgGACQgGACgHAAQgLAAgJgFgAhzA1IAThpIAQAAIgDAKQAGgGAHgDQAGgDAIAAQAIAAAHADQAGADAEAFQAFAFADAHQACAHAAAHQAAAIgDAIQgDAGgFAHQgFAGgIAEQgIAEgKAAQgLAAgGgEQgIgEgDgFIgHAogAhIgkQgEADgEAEIgFAJQgCAFABAFQgBAFACAEIAFAGQADADAEABQAEACAEAAQAHAAAEgCQAEgCAEgEQAEgDABgFQACgFAAgFIgBgJQgCgEgCgDQgDgEgEgBQgFgCgFAAQgGAAgFACgAF3AXQgFgDgFgFQgFgFgCgGQgCgGgBgIQABgHACgIQACgIAGgGQAFgGAIgFQAIgEALAAQAKAAAHAEQAGAEAEAFIACgLIARAAIgOBMIgPAAIABgJQgFAFgGADQgIADgHAAQgIAAgHgDgAGFgkQgFACgEAEQgEAEgCAEQgCAFABAGQAAAFABAEQABADAEADIAGAFQAFACAFAAQAGAAAFgDQAFgCADgEQADgDACgFIABgKQAAgFgBgFQgBgEgDgCQgEgDgEgCQgEgBgEAAQgGAAgEACgADLAYQgGgCgFgDQgFgEgDgFQgCgFAAgGIABgHIAIgsIARAAIgFAWIAQAAQANAAAJAGQAJAHgBANQAAAHgCAFQgDAGgFAEQgEAEgGACQgGACgHAAQgHAAgGgCgADIgGIgBAEQAAAGAFAEQAFADAHAAQAHAAAFgEQAEgEAAgGQAAgGgEgEQgEgDgIAAIgPAAgAAKAXQgHgDgDgFQgFgFgCgGQgDgGAAgIQAAgHADgIQADgIAEgGQAFgGAIgFQAIgEAKAAQAKAAAHAEQAHAEAEAFIACgLIARAAIgNBMIgRAAIACgJQgFAFgGADQgIADgHAAQgIAAgGgDgAAWgkQgEACgEAEQgEAEgBAEQgDAFAAAGQAAAFACAEQACADACADIAIAFQAEACAFAAQAGAAAFgDQAFgCADgEQAEgDABgFIACgKQAAgFgCgFQgCgEgDgCQgDgDgEgCQgEgBgFAAQgFAAgFACgAmjAXQgGgDgEgFQgFgFgDgGQgCgGAAgIQAAgHACgIQADgIAGgGQAFgGAHgFQAJgEAKAAQAKAAAHAEQAHAEADAFIADgLIARAAIgOBMIgQAAIABgJQgFAFgGADQgHADgHAAQgIAAgHgDgAmWgkQgFACgEAEQgDAEgCAEQgCAFAAAGQAAAFACAEQABADADADIAHAFQAEACAFAAQAHAAAEgDQAGgCACgEQAEgDACgFIABgKQAAgFgBgFQgCgEgDgCQgDgDgFgCQgEgBgEAAQgFAAgFACgABPAKIAKgDIAGgGIAEgIIAEgNIADgLQADgGADgFQAEgEAGgDQAHgDAJAAIAdAAIgNBMIgRAAIALg9IgJAAQgFAAgEABIgFAFIgEAHIgCAJIgHAQQgCAHgFAFQgEAFgHADQgHADgKABgAH2AYIAEgVIgQAAIgBAAIgDgBIgWAWIgUAAIAbgZQgFgEgDgFQgDgGABgHQgBgGADgGQADgFAEgEQAFgEAGgCQAGgCAJAAIAlAAIgPBMgAHhghQgDAEAAAGQgBAGAEADQADADAIAAIAQAAIAFgaIgTAAQgIAAgFAEgAE7AYIAFghIgjAAIgFAhIgRAAIANhNIARAAIgFAeIAjAAIAFgeIARAAIgOBNgAjwAYIAIgqIAAgEIABgDQAAgGgFgEQgEgEgGAAQgIAAgEAFQgGAEgCAIIgIAuIgRAAIAIgrIAAgDIABgDQAAgGgEgEQgEgEgHAAQgHAAgGAFQgEAEgCAIIgJAuIgQAAIANhMIAQAAIgBAHQAEgEAGgCQAFgDAHAAQAHAAAHAEQAFADAEAFQAEgFAHgDQAHgEAJAAQAMAAAHAIQAIAHAAALIgBAFIAAAEIgIArgAngAYIAGghIgjAAIgGAhIgRAAIAOhNIARAAIgGAeIAjAAIAGgeIARAAIgOBNg");
	this.shape.setTransform(56.25,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0101, new cjs.Rectangle(0,0,120.2,24.1), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.logo_txt02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2000F").s().p("ACxAjIAAgZQAAgQgBgKIAJgBIABADIAAAAQAEgEAHAAQAHAAAEAGQAEAFAAAHQAAAHgEAGQgFAGgIAAQgFAAgDgDIAAAAIAAATgAC6gIIABASQADACADAAQAEAAADgEQACgCAAgGQAAgFgCgCQgCgEgEAAQgFAAgDADgAAYAjIABgZQAAgQgCgKIAJgBIABADIABAAQAEgEAGAAQAHAAAFAGQAEAFAAAHQAAAHgFAGQgEAGgIAAQgHAAgBgDIgBAAIAAATgAAigIIAAASQADACADAAQAFAAADgEQACgCAAgGQAAgFgCgCQgCgEgFAAQgFAAgCADgAktAjIABgZQAAgSgCgIIAJgBIABADIAAAAQAFgEAGAAQAHAAAEAGQAFAEAAAIQAAAHgFAGQgFAGgIAAQgFAAgDgDIAAAAIAAATgAkjgIIAAASQADACADAAQAFAAACgEQADgDAAgFQAAgEgDgDQgCgEgEAAQgFAAgCADgAEPANQgDgFAAgNQAAgHABgFQABgEADgEIAIgFIALgCIAKgCIgBAJIgDAAIgNACIgFACIgDAEIgBAGIABAAQADgFAIAAQAHAAAFAEQAFAFAAAHQAAAJgGAFQgFAFgJAAQgJAAgFgGgAEUgEQAAAIADAEQACAEAFAAQAFAAACgDQACgDAAgFQAAgEgCgDQgDgDgEAAQgGAAgEAFgAE5AQQgDgDAAgEQAAgGAFgDQAFgDALAAIAAgBQAAgEgCgBQgBgBgGAAIgLABIABgHQAHgCAHAAQAHAAAEADQADADAAAHIAAAKIABANIgJAAIAAgDIgBAAQgEAEgHAAQgEAAgDgDgAE/AIQAAAEAFAAQADAAAEgCIAAgJQgMAAAAAHgABEAQQgDgDAAgEQAAgFAFgEQAFgDALAAIAAgBQAAgEgBgBQgCgBgGAAIgKABIAAgHQAHgCAIAAQAGAAAEADQADADAAAHIABAXIgIAAIgBgDIAAAAQgFAEgGAAQgEAAgEgDgABKAIQAAAEAFAAQAEAAAEgCIgBgJQgMAAAAAHgAiSAQQgDgDAAgEQAAgGAFgDQAFgDALAAIABgBQAAgDgCgCQgCgBgFAAIgLABIABgHQAGgCAIAAQAHAAADADQAEADAAAHIgBAKQAAAIACAFIgJAAIgBgDIAAAAQgFAEgGAAQgEAAgEgDgAiMAIQAAAEAFAAQAEAAAEgCIgBgJQgMAAAAAHgAjaANQgFgFAAgHQAAgGAFgHQAGgGAJAAIAIABIgBAIIgIgBQgEAAgDADQgDADAAAEQAAAFADADQADADAGAAIAIgBIAAAHQgEACgFAAQgKAAgFgGgAkBAQQgDgDAAgEQAAgGAFgDQAFgDALAAIAAgBQAAgEgCgBQgBgBgGAAIgLABIABgHQAHgCAHAAQAHAAAEADQADADAAAHIAAAKIABANIgIAAIgBgDIgBAAQgEAEgHAAQgEAAgDgDgAj7AIQAAAEAFAAQADAAAEgCIAAgJQgMAAAAAHgAD7ASIABgSQAAgJgCgHIALgBIAAAjgADbASIABgSQAAgJgCgHIALgBIgBANIAEAAQAQAAAAAKQAAAGgEADQgFADgGAAgADkABIAAALIAFAAQAGAAAAgGQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgBgDAAgACPASIABgWIAAAAIgJALQgHAHAAAEIgIAAIgBgiIALgBIgBAXIAAAAQABgCAIgJQAHgIAAgDIAHgBIAAAjgAAIASIgBgCQgBgIgDgCQgCgDgDAAIgCAAIAAAPIgJAAIAAgRQAAgKgBgHIAKgBIAAAPIACAAQAGAAADgMIABgCIAJAAIgBADQgFAMgFABIAAAAQADAAADAEQADADACAHIABAEgAgfASIABgWIgBAAQAAADgJAIQgHAIAAADIgHAAIAAgSQAAgJgBgHIAKgBIgBAXIABAAQAAgCAIgJQAIgJAAgCIAIgBIAAAjgAhZASIABgOIgFAAQgEAAgBACQgCACgDAKIgKAAIAFgMQACgDADgBIAAgBQgIgBAAgHQAAgFAEgCQADgDAGAAIANABIAGgBIAAAjgAhmgGQAAAFAIAAIAGAAIAAgJIgIgBQgGAAAAAFgAilASIAAgQIgOAAIABAQIgKAAIABgSQAAgJgCgHIALgBIgBAOIAOAAIgBgNIALgBIAAAjgAk9ASIgBgCQgCgIgCgCQgCgDgEAAIgCAAIAAAPIgKAAIAAgiIAKgBIAAAPIACAAQAHAAADgMIABgCIAJAAIgCADQgDAMgGABIAAAAQAEABACADQACADACAHIACAEg");
	this.shape.setTransform(0.1364,-0.1913,1.6694,1.6694);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D9D9").s().p("ACxAjIABgZQAAgSgDgIIAKgBIABADIABAAQAEgEAGAAQAHAAAEAFQAEAGABAHQAAAHgFAGQgFAGgHAAQgHAAgCgDIAAAAIAAATgAC7gIIAAASQADACADAAQAEAAADgEQACgDAAgFQAAgFgCgCQgDgEgDAAQgFAAgCADgAAZAjIAAgZQAAgSgCgIIAKgBIAAADIABAAQAEgEAHAAQAGAAAEAFQAFAGAAAHQAAAHgFAGQgEAGgIAAQgGAAgCgDIgBAAIABATgAAigIIABASQACACADAAQAFAAACgEQADgEAAgEQAAgEgDgDQgCgEgDAAQgGAAgCADgAktAjIABgZQAAgSgCgIIAJgBIABADIAAAAQAFgEAHAAQAHAAAEAFQADAFAAAIQABAHgFAGQgEAGgJAAQgFAAgCgDIgBAAIABATgAkkgIIABASQADACADAAQAFAAACgEQADgEAAgEQAAgEgDgDQgCgEgEAAQgFAAgDADgAEPANQgDgGAAgMIABgMIAEgIIAIgFIAVgEIgBAIIgQADIgFACQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgBAGQAEgFAHAAQAHAAAFAEQAFAFAAAHQAAAJgGAFQgGAFgHAAQgLAAgEgGgAEVgFQAAAJACAEQADAEAEAAQAEAAADgDQACgDABgFQgBgEgCgDQgCgDgEAAQgHAAgDAEgAE5AQQgDgDAAgEQAAgGAFgDQAFgDAMAAIAAgBQAAgDgCgCQgDgCgEAAIgLACIABgHQADgCAKAAQAIAAADADQADADABAHIgBAKQAAAIACAFIgJAAIgBgDIAAAAQgFAEgGAAQgFAAgDgDgAE+AIQABAEAFAAQAEAAAEgCIAAgJQgOAAAAAHgABEAQQgDgDAAgEQAAgGAFgDQAFgDAMAAIAAgBQgBgEgCgBQgBgCgFAAIgMACIABgHQAFgCAJAAQAHAAAEADQAEADAAAHIABAXIgJAAIAAgDIgBAAQgFAEgGAAQgEAAgEgDgABKAIQAAAEAGAAQADAAAEgCIAAgJQgNAAAAAHgAiRAQQgEgDAAgEQAAgFAFgEQAFgDAMAAIAAgBQAAgEgDgBQgBgCgFAAIgLACIABgHQAEgCAKAAQAHAAADADQAEADAAAHIABAXIgJAAIAAgDIgBAAQgFAEgGAAQgEAAgDgDgAiMAIQAAAEAGAAQADAAAEgCIAAgJQgNAAAAAHgAjaANQgFgFAAgHQAAgIAGgFQAFgGAJAAIAIABIgCAIQgCgCgFAAQgEAAgDAEQgCADgBAEQAAAFADADQAEADAFAAIAIgBIAAAHQgDACgHAAQgIAAgGgGgAkBAQQgDgDAAgEQAAgGAEgDQAGgDALAAIAAgBQAAgDgCgCQgBgCgGAAIgLACIABgHQAFgCAKAAQAGAAAEADQAEAEgBAGIAAAKQAAAIABAFIgJAAIAAgDIgBAAQgEAEgHAAQgDAAgEgDgAj7AIQgBAEAHAAQADAAADgCIAAgJQgNAAABAHgAD8ASIAAgSQAAgJgBgHIAKgBIAAAjgADbASIAAgSIgBgQIALgBIgBANIAEAAQAQAAABAKQAAAGgFADQgFADgGAAgADkAMIAFAAQAGAAABgGQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgCgBgDAAIgEAAgACQASIAAgWIAAAAQgBACgIAJQgHAIgBADIgHAAIgBgiIAKgBIAAAWIAAAAIAJgKQAHgJAAgCIAIgBIAAAjgAAJASIgBgCQgDgIgCgCQgCgDgCAAIgDAAIAAAPIgKAAIABgRIgBgRIAKgBIAAAPIADAAQAFAAADgNIABgBIAJAAIgBADQgEALgFACIAAAAQADABACADIAFAKIACAEgAgfASIABgWIgBAAQgCAEgHAHQgGAIAAADIgIAAIAAgSIgBgQIALgBIgBAWIAAAAIAJgKQAHgIAAgDIAIgBIAAAjgAhZASIABgOIgEAAQgFAAgBACIgFAMIgKAAIAGgNQABgDADAAIAAgBQgHgBAAgHQAAgFADgCQADgDAGAAIANABIAGgBIAAAjgAhlgGQgBAFAIAAIAGAAIgBgKIgIAAQgEAAAAAFgAilASIABgQIgPAAIABAQIgKAAIABgSIgBgQIAKgBIgBAOIAPAAQAAgHgCgGIALgBIAAAjgAk8ASIgBgCQgDgIgCgCQgCgDgEAAIgCAAIAAAPIgKAAIABgRQAAgKgCgHIALgBIAAAPIACAAQAHAAADgNIABgBIAJAAIgCADQgDALgGACIAAAAQADAAADAEIAGAOg");
	this.shape_1.setTransform(0.0112,-0.0243,1.6694,1.6694);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D9D9").s().p("ACxAjIABgZQAAgSgDgIIAKgBIABADIABAAQAEgEAGAAQAHAAAEAFQAEAGABAHQAAAHgFAGQgFAGgHAAQgHAAgCgDIAAAAIAAATgAC7gIIAAASQADACADAAQAEAAADgEQACgDAAgFQAAgFgCgCQgDgEgDAAQgFAAgCADgAAZAjIAAgZQAAgSgCgIIAKgBIAAADIABAAQAEgEAHAAQAGAAAEAFQAFAGAAAHQAAAHgFAGQgEAGgIAAQgGAAgCgDIgBAAIABATgAAigIIABASQACACADAAQAFAAACgEQADgEAAgEQAAgEgDgDQgCgEgDAAQgGAAgCADgAktAjIABgZQAAgSgCgIIAJgBIABADIAAAAQAFgEAHAAQAHAAAEAFQADAFAAAIQABAHgFAGQgEAGgJAAQgFAAgCgDIgBAAIABATgAkkgIIABASQADACADAAQAFAAACgEQADgEAAgEQAAgEgDgDQgCgEgEAAQgFAAgDADgAEPANQgDgGAAgMIABgMIAEgIIAIgFIAVgEIgBAIIgQADIgFACQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgBAGQAEgFAHAAQAHAAAFAEQAFAFAAAHQAAAJgGAFQgGAFgHAAQgLAAgEgGgAEVgFQAAAJACAEQADAEAEAAQAEAAADgDQACgDABgFQgBgEgCgDQgCgDgEAAQgHAAgDAEgAE5AQQgDgDAAgEQAAgGAFgDQAFgDAMAAIAAgBQAAgDgCgCQgDgCgEAAIgLACIABgHQADgCAKAAQAIAAADADQADADABAHIgBAKQAAAIACAFIgJAAIgBgDIAAAAQgFAEgGAAQgFAAgDgDgAE+AIQABAEAFAAQAEAAAEgCIAAgJQgOAAAAAHgABEAQQgDgDAAgEQAAgGAFgDQAFgDAMAAIAAgBQgBgEgCgBQgBgCgFAAIgMACIABgHQAFgCAJAAQAHAAAEADQAEADAAAHIABAXIgJAAIAAgDIgBAAQgFAEgGAAQgEAAgEgDgABKAIQAAAEAGAAQADAAAEgCIAAgJQgNAAAAAHgAiRAQQgEgDAAgEQAAgFAFgEQAFgDAMAAIAAgBQAAgEgDgBQgBgCgFAAIgLACIABgHQAEgCAKAAQAHAAADADQAEADAAAHIABAXIgJAAIAAgDIgBAAQgFAEgGAAQgEAAgDgDgAiMAIQAAAEAGAAQADAAAEgCIAAgJQgNAAAAAHgAjaANQgFgFAAgHQAAgIAGgFQAFgGAJAAIAIABIgCAIQgCgCgFAAQgEAAgDAEQgCADgBAEQAAAFADADQAEADAFAAIAIgBIAAAHQgDACgHAAQgIAAgGgGgAkBAQQgDgDAAgEQAAgGAEgDQAGgDALAAIAAgBQAAgDgCgCQgBgCgGAAIgLACIABgHQAFgCAKAAQAGAAAEADQAEAEgBAGIAAAKQAAAIABAFIgJAAIAAgDIgBAAQgEAEgHAAQgDAAgEgDgAj7AIQgBAEAHAAQADAAADgCIAAgJQgNAAABAHgAD8ASIAAgSQAAgJgBgHIAKgBIAAAjgADbASIAAgSIgBgQIALgBIgBANIAEAAQAQAAABAKQAAAGgFADQgFADgGAAgADkAMIAFAAQAGAAABgGQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgCgBgDAAIgEAAgACQASIAAgWIAAAAQgBACgIAJQgHAIgBADIgHAAIgBgiIAKgBIAAAWIAAAAIAJgKQAHgJAAgCIAIgBIAAAjgAAJASIgBgCQgDgIgCgCQgCgDgCAAIgDAAIAAAPIgKAAIABgRIgBgRIAKgBIAAAPIADAAQAFAAADgNIABgBIAJAAIgBADQgEALgFACIAAAAQADABACADIAFAKIACAEgAgfASIABgWIgBAAQgCAEgHAHQgGAIAAADIgIAAIAAgSIgBgQIALgBIgBAWIAAAAIAJgKQAHgIAAgDIAIgBIAAAjgAhZASIABgOIgEAAQgFAAgBACIgFAMIgKAAIAGgNQABgDADAAIAAgBQgHgBAAgHQAAgFADgCQADgDAGAAIANABIAGgBIAAAjgAhlgGQgBAFAIAAIAGAAIgBgKIgIAAQgEAAAAAFgAilASIABgQIgPAAIABAQIgKAAIABgSIgBgQIAKgBIgBAOIAPAAQAAgHgCgGIALgBIAAAjgAk8ASIgBgCQgDgIgCgCQgCgDgEAAIgCAAIAAAPIgKAAIABgRQAAgKgCgHIALgBIAAAPIACAAQAHAAADgNIABgBIAJAAIgCADQgDALgGACIAAAAQADAAADAEIAGAOg");
	this.shape_2.setTransform(0.0112,-0.0243,1.6694,1.6694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_txt02, new cjs.Rectangle(-57,-6,114.1,11.8), null);


(lib.logo_txt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2000F").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEgAgHgHQgEADAAAEQAAAFAEAEQAEADADAAQAFAAADgDQAEgEAAgFQAAgEgEgDQgDgEgFAAQgDAAgEAEgAAEAHIgEgFIgBAAIAAAFIgEAAIAAgOIAHAAIACABIACABIAAACIgBADIgCABIAFAGgAgBAAIABAAIABAAIABgDIAAAAIgBgBIgBAAIAAgBIgBAAg");
	this.shape.setTransform(57.2525,-6.408,1.6694,1.6694);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2000F").s().p("AgLAIIALgPIAMAAIgLAPg");
	this.shape_1.setTransform(25.0742,-9.3712,1.6694,1.6694);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2000F").s().p("AgtAuQgSgTgBgbQABgaASgSQAUgTAZAAQAbAAASATQAUASgBAaQAAAbgTATQgSASgbAAQgZAAgUgSgAgmgmQgRAQAAAWQAAAXARAQQAQAQAWAAQAXAAAQgQQAQgQAAgXQAAgWgQgQQgQgQgXAAQgWAAgQAQgAgdAeQgMgMAAgRQAAgQAMgNQAMgMARAAQARAAAMAMQAMANAAAQQAAARgMAMQgMAMgRAAQgRAAgMgMgAgLgbIAAAAQAPAAALALQALAKgBAOIAAAGQAJgIAAgMQAAgMgIgIQgJgIgLAAQgKAAgHAHg");
	this.shape_2.setTransform(-48.214,-1.2745,1.6694,1.6694);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2000F").s().p("AgaAfQgJgLAAgUQAAgTAKgMQAJgLAQAAQARAAAJALQAKAMAAATQAAAUgKALQgKAMgQAAQgQAAgKgMgAgPgXQgGAJAAAOQAAAPAGAIQAFAIAKAAQALAAAFgIQAGgIAAgPQAAgOgGgJQgFgHgLAAQgKAAgFAHg");
	this.shape_3.setTransform(48.9053,1.3966,1.6694,1.6694);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2000F").s().p("AAQApIgbgmIgHAAIAAAmIgOAAIAAhQIAOAAIAAAjQAFAAAEgCQAEgDACgFIADgJQADgJAGgEQAGgDAIAAIAEAAIAAALIgDAAQgGAAgDACQgDADgBAGQgDAHgCADIgGAFIAhArg");
	this.shape_4.setTransform(36.8854,1.3549,1.6694,1.6694);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2000F").s().p("AgTApIgLgEIAAgPIABAAIADADIANAFIAHABQAKAAAGgIQAGgGABgNIgjgBIAAgJIAjAAQAAgMgIgGQgFgFgJAAIgHAAIgHACIgJAGIgBAAIAAgPIALgDQAHgCAGAAQAGAAAHACQAGACAHAGQAFAFACAHQADAIAAAKQAAAUgKAMQgLAMgRgBQgGAAgGgBg");
	this.shape_5.setTransform(23.9056,1.3549,1.6694,1.6694);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2000F").s().p("AATApIAAglIgkAAIAAAlIgOAAIAAhQIAOAAIAAAhIAkAAIAAghIANAAIAABQg");
	this.shape_6.setTransform(11.2179,1.3549,1.6694,1.6694);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2000F").s().p("AgQApQgGgDgCgDQgCgCgDgGIgCgKQAAgIAEgHQADgFAIgDQAEgCAMgCIATgCIAAgDQAAgEgCgDQgBgEgDgBQgBgBgFgBIgHgBIgLACIgNAEIAAAAIAAgOIAKgCIAOgCQAIAAAFACQAFAAAGAEQAEAEACAFQACAEAAAJIAAA2IgNAAIAAgIIgKAHIgHADIgIABQgGAAgEgCgAAHAAIgLABQgGACgDADQgEAEAAAGQAAAHAEAEQAFADAGAAQAGAAAFgDIAKgHIAAgVg");
	this.shape_7.setTransform(-2.7636,1.3966,1.6694,1.6694);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2000F").s().p("AggAoIgDAAIAAgMIABAAIABABIABAAIAEgBIADgCQADgDACgJIACgYIABgeIA1AAIAABQIgOAAIAAhEIgbAAIgBAVQAAALgBAHQgBAHgCAGIgDAHIgFAFQgCADgDAAQgDACgDAAg");
	this.shape_8.setTransform(-16.453,1.3966,1.6694,1.6694);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2000F").s().p("AghA4IAAhtIAOAAIAAAIIALgIQAGgCAHAAQANAAAIALQAIAKAAATQAAATgJAMQgKAMgPAAIgJgBQgFgBgFgEIAAAigAgJgoQgEACgGAEIAAAtIAJAEIAJABQAJAAAGgIQAGgIAAgOQAAgOgEgHQgGgIgJAAQgEAAgGADg");
	this.shape_9.setTransform(-29.0155,3.6921,1.6694,1.6694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_txt01, new cjs.Rectangle(-59,-12,118.8,25.1), null);


(lib.logo_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCB00").s().p("AgCBwQhdg9gtgsIh5AAQAghLBEgvQBGgwBVAAQBhAABLA+QBLA9AVBcIgGADQhNAqhiBDQgmgWgtgeg");
	this.shape.setTransform(2.2104,-18.683,1.6682,1.6682);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2000F").s().p("AjCBNQhQhQAAhyQAAgYACgPQA6AqBoBHIBNA0Ig5AoIA/AXICnhsIgRgLQARgOAdgSQA3glAzgXIABAWQgBByhQBQQhRBQhyAAQhyAAhQhQg");
	this.shape_1.setTransform(1.0427,19.7693,1.6682,1.6682);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjCDDQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABRBQQBQBRAABxQAAByhQBRQhRBQhyAAQhxAAhRhQg");
	this.shape_2.setTransform(0.9176,0.001,1.6682,1.6682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_round, new cjs.Rectangle(-45,-46,92,92), null);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF3E2D").ss(2,1).p("AoSAAIQlAA");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-54.1,-1,108.2,2), null);


(lib.caviar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.caviar();
	this.instance.parent = this;
	this.instance.setTransform(-211.5,-109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.caviar_1, new cjs.Rectangle(-211.5,-109.5,423,219), null);


(lib.CANS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.can();
	this.instance.parent = this;
	this.instance.setTransform(-250,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CANS, new cjs.Rectangle(-250,-187.5,500,375), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.TXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask 2 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_115 = new cjs.Graphics().p("ArdILIAAiQIW7AAIAACQg");
	var mask_graphics_116 = new cjs.Graphics().p("ArdILIAAiQIW7AAIAACQg");
	var mask_graphics_117 = new cjs.Graphics().p("ArdILIAAiQIW7AAIAACQg");
	var mask_graphics_118 = new cjs.Graphics().p("ArdILIAAiQIW7AAIAACQg");
	var mask_graphics_119 = new cjs.Graphics().p("ArdIKIAAiQIW7AAIAACQg");
	var mask_graphics_120 = new cjs.Graphics().p("ArdIJIAAiQIW7AAIAACQg");
	var mask_graphics_121 = new cjs.Graphics().p("ArdIHIAAiQIW7AAIAACQg");
	var mask_graphics_122 = new cjs.Graphics().p("ArdIEIAAiQIW7AAIAACQg");
	var mask_graphics_123 = new cjs.Graphics().p("ArdIAIAAiQIW7AAIAACQg");
	var mask_graphics_124 = new cjs.Graphics().p("ArdH7IAAiQIW7AAIAACQg");
	var mask_graphics_125 = new cjs.Graphics().p("ArdH2IAAiQIW7AAIAACQg");
	var mask_graphics_126 = new cjs.Graphics().p("ArdHxIAAiQIW7AAIAACQg");
	var mask_graphics_127 = new cjs.Graphics().p("ArdHtIAAiQIW7AAIAACQg");
	var mask_graphics_128 = new cjs.Graphics().p("ArdHqIAAiQIW7AAIAACQg");
	var mask_graphics_129 = new cjs.Graphics().p("ArdHoIAAiPIW7AAIAACPg");
	var mask_graphics_130 = new cjs.Graphics().p("ArdHnIAAiQIW7AAIAACQg");
	var mask_graphics_131 = new cjs.Graphics().p("ArdHmIAAiQIW7AAIAACQg");
	var mask_graphics_132 = new cjs.Graphics().p("ArdHmIAAiQIW7AAIAACQg");
	var mask_graphics_133 = new cjs.Graphics().p("ArdHmIAAiQIW7AAIAACQg");
	var mask_graphics_134 = new cjs.Graphics().p("ArdHmIAAiQIW7AAIAACQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(115).to({graphics:mask_graphics_115,x:53.075,y:52.3257}).wait(1).to({graphics:mask_graphics_116,x:53.075,y:52.3235}).wait(1).to({graphics:mask_graphics_117,x:53.075,y:52.3082}).wait(1).to({graphics:mask_graphics_118,x:53.075,y:52.2667}).wait(1).to({graphics:mask_graphics_119,x:53.075,y:52.1858}).wait(1).to({graphics:mask_graphics_120,x:53.075,y:52.0524}).wait(1).to({graphics:mask_graphics_121,x:53.075,y:51.8534}).wait(1).to({graphics:mask_graphics_122,x:53.075,y:51.5756}).wait(1).to({graphics:mask_graphics_123,x:53.075,y:51.206}).wait(1).to({graphics:mask_graphics_124,x:53.075,y:50.7315}).wait(1).to({graphics:mask_graphics_125,x:53.075,y:50.17}).wait(1).to({graphics:mask_graphics_126,x:53.075,y:49.6954}).wait(1).to({graphics:mask_graphics_127,x:53.075,y:49.3258}).wait(1).to({graphics:mask_graphics_128,x:53.075,y:49.0481}).wait(1).to({graphics:mask_graphics_129,x:53.075,y:48.8491}).wait(1).to({graphics:mask_graphics_130,x:53.075,y:48.7157}).wait(1).to({graphics:mask_graphics_131,x:53.075,y:48.6348}).wait(1).to({graphics:mask_graphics_132,x:53.075,y:48.5932}).wait(1).to({graphics:mask_graphics_133,x:53.075,y:48.5779}).wait(1).to({graphics:mask_graphics_134,x:53.075,y:48.5757}).wait(22));

	// txt0203
	this.instance = new lib.txt0203();
	this.instance.parent = this;
	this.instance.setTransform(54,82.5,1,1,0,0,0,55,9.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).to({y:88.5},19,cjs.Ease.cubicInOut).wait(22));

	// mask 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_115 = new cjs.Graphics().p("ArdDnIAAl+IW7AAIAAF+g");
	var mask_1_graphics_116 = new cjs.Graphics().p("ArdDoIAAl/IW7AAIAAF/g");
	var mask_1_graphics_117 = new cjs.Graphics().p("ArdDoIAAl/IW7AAIAAF/g");
	var mask_1_graphics_118 = new cjs.Graphics().p("ArdDpIAAl/IW7AAIAAF/g");
	var mask_1_graphics_119 = new cjs.Graphics().p("ArdDsIAAl/IW7AAIAAF/g");
	var mask_1_graphics_120 = new cjs.Graphics().p("ArdDwIAAl/IW7AAIAAF/g");
	var mask_1_graphics_121 = new cjs.Graphics().p("ArdD2IAAl/IW7AAIAAF/g");
	var mask_1_graphics_122 = new cjs.Graphics().p("ArdD+IAAl/IW7AAIAAF/g");
	var mask_1_graphics_123 = new cjs.Graphics().p("ArdEJIAAl/IW7AAIAAF/g");
	var mask_1_graphics_124 = new cjs.Graphics().p("ArdEXIAAl/IW7AAIAAF/g");
	var mask_1_graphics_125 = new cjs.Graphics().p("ArdEoIAAl/IW7AAIAAF/g");
	var mask_1_graphics_126 = new cjs.Graphics().p("ArdE2IAAl+IW7AAIAAF+g");
	var mask_1_graphics_127 = new cjs.Graphics().p("ArdFBIAAl+IW7AAIAAF+g");
	var mask_1_graphics_128 = new cjs.Graphics().p("ArdFKIAAl/IW7AAIAAF/g");
	var mask_1_graphics_129 = new cjs.Graphics().p("ArdFQIAAl/IW7AAIAAF/g");
	var mask_1_graphics_130 = new cjs.Graphics().p("ArdFUIAAl/IW7AAIAAF/g");
	var mask_1_graphics_131 = new cjs.Graphics().p("ArdFWIAAl/IW7AAIAAF/g");
	var mask_1_graphics_132 = new cjs.Graphics().p("ArdFXIAAl+IW7AAIAAF+g");
	var mask_1_graphics_133 = new cjs.Graphics().p("ArdFYIAAl/IW7AAIAAF/g");
	var mask_1_graphics_134 = new cjs.Graphics().p("ArdFYIAAl/IW7AAIAAF/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(115).to({graphics:mask_1_graphics_115,x:53.075,y:23.1495}).wait(1).to({graphics:mask_1_graphics_116,x:53.075,y:23.156}).wait(1).to({graphics:mask_1_graphics_117,x:53.075,y:23.2019}).wait(1).to({graphics:mask_1_graphics_118,x:53.075,y:23.3266}).wait(1).to({graphics:mask_1_graphics_119,x:53.075,y:23.5693}).wait(1).to({graphics:mask_1_graphics_120,x:53.075,y:23.9695}).wait(1).to({graphics:mask_1_graphics_121,x:53.075,y:24.5666}).wait(1).to({graphics:mask_1_graphics_122,x:53.075,y:25.3998}).wait(1).to({graphics:mask_1_graphics_123,x:53.075,y:26.5085}).wait(1).to({graphics:mask_1_graphics_124,x:53.075,y:27.9322}).wait(1).to({graphics:mask_1_graphics_125,x:53.075,y:29.6167}).wait(1).to({graphics:mask_1_graphics_126,x:53.075,y:31.0404}).wait(1).to({graphics:mask_1_graphics_127,x:53.075,y:32.1491}).wait(1).to({graphics:mask_1_graphics_128,x:53.075,y:32.9823}).wait(1).to({graphics:mask_1_graphics_129,x:53.075,y:33.5794}).wait(1).to({graphics:mask_1_graphics_130,x:53.075,y:33.9796}).wait(1).to({graphics:mask_1_graphics_131,x:53.075,y:34.2223}).wait(1).to({graphics:mask_1_graphics_132,x:53.075,y:34.347}).wait(1).to({graphics:mask_1_graphics_133,x:53.075,y:34.3929}).wait(1).to({graphics:mask_1_graphics_134,x:53.075,y:34.3995}).wait(22));

	// txt0202
	this.instance_1 = new lib.txt0202();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.7,60,1,1,0,0,0,57.7,29);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).to({y:45},19,cjs.Ease.cubicInOut).wait(22));

	// mask 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_115 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_116 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_117 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_118 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_119 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_120 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_121 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_122 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_123 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_124 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_125 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_126 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_127 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_128 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_129 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_130 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_131 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_132 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_133 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");
	var mask_2_graphics_134 = new cjs.Graphics().p("ArdBmIAAjLIW7AAIAADLg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(115).to({graphics:mask_2_graphics_115,x:53.075,y:0.1031}).wait(1).to({graphics:mask_2_graphics_116,x:53.075,y:0.1084}).wait(1).to({graphics:mask_2_graphics_117,x:53.075,y:0.1451}).wait(1).to({graphics:mask_2_graphics_118,x:53.075,y:0.2449}).wait(1).to({graphics:mask_2_graphics_119,x:53.075,y:0.4391}).wait(1).to({graphics:mask_2_graphics_120,x:53.075,y:0.7592}).wait(1).to({graphics:mask_2_graphics_121,x:53.075,y:1.2368}).wait(1).to({graphics:mask_2_graphics_122,x:53.075,y:1.9034}).wait(1).to({graphics:mask_2_graphics_123,x:53.075,y:2.7904}).wait(1).to({graphics:mask_2_graphics_124,x:53.075,y:3.9294}).wait(1).to({graphics:mask_2_graphics_125,x:53.075,y:5.2769}).wait(1).to({graphics:mask_2_graphics_126,x:53.075,y:6.4159}).wait(1).to({graphics:mask_2_graphics_127,x:53.075,y:7.3029}).wait(1).to({graphics:mask_2_graphics_128,x:53.075,y:7.9694}).wait(1).to({graphics:mask_2_graphics_129,x:53.075,y:8.4471}).wait(1).to({graphics:mask_2_graphics_130,x:53.075,y:8.7672}).wait(1).to({graphics:mask_2_graphics_131,x:53.075,y:8.9614}).wait(1).to({graphics:mask_2_graphics_132,x:53.075,y:9.0612}).wait(1).to({graphics:mask_2_graphics_133,x:53.075,y:9.0979}).wait(1).to({graphics:mask_2_graphics_134,x:53.075,y:9.1031}).wait(22));

	// txt0201
	this.instance_2 = new lib.txt0201();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.4,20.4,1,1,0,0,0,55.4,18.4);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({_off:false},0).to({y:8.4},19,cjs.Ease.cubicInOut).wait(22));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_15 = new cjs.Graphics().p("ArdIaIAAjMIW7AAIAADMg");
	var mask_3_graphics_16 = new cjs.Graphics().p("ArdIaIAAjMIW7AAIAADMg");
	var mask_3_graphics_17 = new cjs.Graphics().p("ArdIaIAAjMIW7AAIAADMg");
	var mask_3_graphics_18 = new cjs.Graphics().p("ArdIZIAAjMIW7AAIAADMg");
	var mask_3_graphics_19 = new cjs.Graphics().p("ArdIYIAAjMIW7AAIAADMg");
	var mask_3_graphics_20 = new cjs.Graphics().p("ArdIWIAAjMIW7AAIAADMg");
	var mask_3_graphics_21 = new cjs.Graphics().p("ArdISIAAjLIW7AAIAADLg");
	var mask_3_graphics_22 = new cjs.Graphics().p("ArdIOIAAjMIW7AAIAADMg");
	var mask_3_graphics_23 = new cjs.Graphics().p("ArdIIIAAjMIW7AAIAADMg");
	var mask_3_graphics_24 = new cjs.Graphics().p("ArdIAIAAjLIW7AAIAADLg");
	var mask_3_graphics_25 = new cjs.Graphics().p("ArdH3IAAjLIW7AAIAADLg");
	var mask_3_graphics_26 = new cjs.Graphics().p("ArdHwIAAjMIW7AAIAADMg");
	var mask_3_graphics_27 = new cjs.Graphics().p("ArdHqIAAjMIW7AAIAADMg");
	var mask_3_graphics_28 = new cjs.Graphics().p("ArdHmIAAjMIW7AAIAADMg");
	var mask_3_graphics_29 = new cjs.Graphics().p("ArdHiIAAjLIW7AAIAADLg");
	var mask_3_graphics_30 = new cjs.Graphics().p("ArdHgIAAjMIW7AAIAADMg");
	var mask_3_graphics_31 = new cjs.Graphics().p("ArdHfIAAjMIW7AAIAADMg");
	var mask_3_graphics_32 = new cjs.Graphics().p("ArdHeIAAjLIW7AAIAADLg");
	var mask_3_graphics_33 = new cjs.Graphics().p("ArdHeIAAjMIW7AAIAADMg");
	var mask_3_graphics_34 = new cjs.Graphics().p("ArdHeIAAjMIW7AAIAADMg");
	var mask_3_graphics_95 = new cjs.Graphics().p("ArdHeIAAjMIW7AAIAADMg");
	var mask_3_graphics_96 = new cjs.Graphics().p("ArdHhIAAjMIW7AAIAADMg");
	var mask_3_graphics_97 = new cjs.Graphics().p("ArdHkIAAjMIW7AAIAADMg");
	var mask_3_graphics_98 = new cjs.Graphics().p("ArdHnIAAjMIW7AAIAADMg");
	var mask_3_graphics_99 = new cjs.Graphics().p("ArdHqIAAjMIW7AAIAADMg");
	var mask_3_graphics_100 = new cjs.Graphics().p("ArdHtIAAjMIW7AAIAADMg");
	var mask_3_graphics_101 = new cjs.Graphics().p("ArdHwIAAjMIW7AAIAADMg");
	var mask_3_graphics_102 = new cjs.Graphics().p("ArdHzIAAjMIW7AAIAADMg");
	var mask_3_graphics_103 = new cjs.Graphics().p("ArdH2IAAjMIW7AAIAADMg");
	var mask_3_graphics_104 = new cjs.Graphics().p("ArdH5IAAjMIW7AAIAADMg");
	var mask_3_graphics_105 = new cjs.Graphics().p("ArdH8IAAjMIW7AAIAADMg");
	var mask_3_graphics_106 = new cjs.Graphics().p("ArdH/IAAjMIW7AAIAADMg");
	var mask_3_graphics_107 = new cjs.Graphics().p("ArdICIAAjMIW7AAIAADMg");
	var mask_3_graphics_108 = new cjs.Graphics().p("ArdIFIAAjMIW7AAIAADMg");
	var mask_3_graphics_109 = new cjs.Graphics().p("ArdIIIAAjMIW7AAIAADMg");
	var mask_3_graphics_110 = new cjs.Graphics().p("ArdILIAAjMIW7AAIAADMg");
	var mask_3_graphics_111 = new cjs.Graphics().p("ArdIOIAAjMIW7AAIAADMg");
	var mask_3_graphics_112 = new cjs.Graphics().p("ArdIRIAAjMIW7AAIAADMg");
	var mask_3_graphics_113 = new cjs.Graphics().p("ArdIUIAAjMIW7AAIAADMg");
	var mask_3_graphics_114 = new cjs.Graphics().p("ArdIXIAAjMIW7AAIAADMg");
	var mask_3_graphics_115 = new cjs.Graphics().p("ArdIaIAAjMIW7AAIAADMg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_3_graphics_15,x:53.075,y:53.7941}).wait(1).to({graphics:mask_3_graphics_16,x:53.075,y:53.7906}).wait(1).to({graphics:mask_3_graphics_17,x:53.075,y:53.7661}).wait(1).to({graphics:mask_3_graphics_18,x:53.075,y:53.6996}).wait(1).to({graphics:mask_3_graphics_19,x:53.075,y:53.5701}).wait(1).to({graphics:mask_3_graphics_20,x:53.075,y:53.3567}).wait(1).to({graphics:mask_3_graphics_21,x:53.075,y:53.0383}).wait(1).to({graphics:mask_3_graphics_22,x:53.075,y:52.5939}).wait(1).to({graphics:mask_3_graphics_23,x:53.075,y:52.0026}).wait(1).to({graphics:mask_3_graphics_24,x:53.075,y:51.2433}).wait(1).to({graphics:mask_3_graphics_25,x:53.075,y:50.3449}).wait(1).to({graphics:mask_3_graphics_26,x:53.075,y:49.5856}).wait(1).to({graphics:mask_3_graphics_27,x:53.075,y:48.9942}).wait(1).to({graphics:mask_3_graphics_28,x:53.075,y:48.5499}).wait(1).to({graphics:mask_3_graphics_29,x:53.075,y:48.2315}).wait(1).to({graphics:mask_3_graphics_30,x:53.075,y:48.018}).wait(1).to({graphics:mask_3_graphics_31,x:53.075,y:47.8885}).wait(1).to({graphics:mask_3_graphics_32,x:53.075,y:47.8221}).wait(1).to({graphics:mask_3_graphics_33,x:53.075,y:47.7976}).wait(1).to({graphics:mask_3_graphics_34,x:53.075,y:47.7941}).wait(61).to({graphics:mask_3_graphics_95,x:53.075,y:47.7941}).wait(1).to({graphics:mask_3_graphics_96,x:53.075,y:48.0941}).wait(1).to({graphics:mask_3_graphics_97,x:53.075,y:48.3941}).wait(1).to({graphics:mask_3_graphics_98,x:53.075,y:48.6941}).wait(1).to({graphics:mask_3_graphics_99,x:53.075,y:48.9941}).wait(1).to({graphics:mask_3_graphics_100,x:53.075,y:49.2941}).wait(1).to({graphics:mask_3_graphics_101,x:53.075,y:49.5941}).wait(1).to({graphics:mask_3_graphics_102,x:53.075,y:49.8941}).wait(1).to({graphics:mask_3_graphics_103,x:53.075,y:50.1941}).wait(1).to({graphics:mask_3_graphics_104,x:53.075,y:50.4941}).wait(1).to({graphics:mask_3_graphics_105,x:53.075,y:50.7941}).wait(1).to({graphics:mask_3_graphics_106,x:53.075,y:51.0941}).wait(1).to({graphics:mask_3_graphics_107,x:53.075,y:51.3941}).wait(1).to({graphics:mask_3_graphics_108,x:53.075,y:51.6941}).wait(1).to({graphics:mask_3_graphics_109,x:53.075,y:51.9941}).wait(1).to({graphics:mask_3_graphics_110,x:53.075,y:52.2941}).wait(1).to({graphics:mask_3_graphics_111,x:53.075,y:52.5941}).wait(1).to({graphics:mask_3_graphics_112,x:53.075,y:52.8941}).wait(1).to({graphics:mask_3_graphics_113,x:53.075,y:53.1941}).wait(1).to({graphics:mask_3_graphics_114,x:53.075,y:53.4941}).wait(1).to({graphics:mask_3_graphics_115,x:53.075,y:53.7941}).wait(41));

	// txt0103
	this.instance_3 = new lib.txt0103();
	this.instance_3.parent = this;
	this.instance_3.setTransform(53.1,75.4,1,1,0,0,0,56.1,16.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({y:84.4},19,cjs.Ease.cubicInOut).wait(61).to({y:75.4},20).wait(41));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_15 = new cjs.Graphics().p("ArdGWIAAk8IW7AAIAAE8g");
	var mask_4_graphics_16 = new cjs.Graphics().p("ArdGWIAAk8IW7AAIAAE8g");
	var mask_4_graphics_17 = new cjs.Graphics().p("ArdGVIAAk7IW7AAIAAE7g");
	var mask_4_graphics_18 = new cjs.Graphics().p("ArdGUIAAk7IW7AAIAAE7g");
	var mask_4_graphics_19 = new cjs.Graphics().p("ArdGTIAAk7IW7AAIAAE7g");
	var mask_4_graphics_20 = new cjs.Graphics().p("ArdGQIAAk7IW7AAIAAE7g");
	var mask_4_graphics_21 = new cjs.Graphics().p("ArdGMIAAk7IW7AAIAAE7g");
	var mask_4_graphics_22 = new cjs.Graphics().p("ArdGHIAAk8IW7AAIAAE8g");
	var mask_4_graphics_23 = new cjs.Graphics().p("ArdF/IAAk7IW7AAIAAE7g");
	var mask_4_graphics_24 = new cjs.Graphics().p("ArdF2IAAk8IW7AAIAAE8g");
	var mask_4_graphics_25 = new cjs.Graphics().p("ArdFqIAAk7IW7AAIAAE7g");
	var mask_4_graphics_26 = new cjs.Graphics().p("ArdFhIAAk7IW7AAIAAE7g");
	var mask_4_graphics_27 = new cjs.Graphics().p("ArdFaIAAk8IW7AAIAAE8g");
	var mask_4_graphics_28 = new cjs.Graphics().p("ArdFUIAAk7IW7AAIAAE7g");
	var mask_4_graphics_29 = new cjs.Graphics().p("ArdFQIAAk7IW7AAIAAE7g");
	var mask_4_graphics_30 = new cjs.Graphics().p("ArdFNIAAk7IW7AAIAAE7g");
	var mask_4_graphics_31 = new cjs.Graphics().p("ArdFMIAAk8IW7AAIAAE8g");
	var mask_4_graphics_32 = new cjs.Graphics().p("ArdFLIAAk7IW7AAIAAE7g");
	var mask_4_graphics_33 = new cjs.Graphics().p("ArdFLIAAk8IW7AAIAAE8g");
	var mask_4_graphics_34 = new cjs.Graphics().p("ArdFLIAAk8IW7AAIAAE8g");
	var mask_4_graphics_95 = new cjs.Graphics().p("ArdFLIAAk8IW7AAIAAE8g");
	var mask_4_graphics_96 = new cjs.Graphics().p("ArdFOIAAk7IW7AAIAAE7g");
	var mask_4_graphics_97 = new cjs.Graphics().p("ArdFSIAAk7IW7AAIAAE7g");
	var mask_4_graphics_98 = new cjs.Graphics().p("ArdFWIAAk7IW7AAIAAE7g");
	var mask_4_graphics_99 = new cjs.Graphics().p("ArdFaIAAk8IW7AAIAAE8g");
	var mask_4_graphics_100 = new cjs.Graphics().p("ArdFdIAAk7IW7AAIAAE7g");
	var mask_4_graphics_101 = new cjs.Graphics().p("ArdFhIAAk7IW7AAIAAE7g");
	var mask_4_graphics_102 = new cjs.Graphics().p("ArdFlIAAk7IW7AAIAAE7g");
	var mask_4_graphics_103 = new cjs.Graphics().p("ArdFpIAAk8IW7AAIAAE8g");
	var mask_4_graphics_104 = new cjs.Graphics().p("ArdFsIAAk7IW7AAIAAE7g");
	var mask_4_graphics_105 = new cjs.Graphics().p("ArdFwIAAk7IW7AAIAAE7g");
	var mask_4_graphics_106 = new cjs.Graphics().p("ArdF0IAAk7IW7AAIAAE7g");
	var mask_4_graphics_107 = new cjs.Graphics().p("ArdF4IAAk8IW7AAIAAE8g");
	var mask_4_graphics_108 = new cjs.Graphics().p("ArdF7IAAk7IW7AAIAAE7g");
	var mask_4_graphics_109 = new cjs.Graphics().p("ArdF/IAAk7IW7AAIAAE7g");
	var mask_4_graphics_110 = new cjs.Graphics().p("ArdGDIAAk7IW7AAIAAE7g");
	var mask_4_graphics_111 = new cjs.Graphics().p("ArdGHIAAk8IW7AAIAAE8g");
	var mask_4_graphics_112 = new cjs.Graphics().p("ArdGKIAAk7IW7AAIAAE7g");
	var mask_4_graphics_113 = new cjs.Graphics().p("ArdGOIAAk7IW7AAIAAE7g");
	var mask_4_graphics_114 = new cjs.Graphics().p("ArdGSIAAk7IW7AAIAAE7g");
	var mask_4_graphics_115 = new cjs.Graphics().p("ArdGWIAAk8IW7AAIAAE8g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_4_graphics_15,x:53.075,y:40.5597}).wait(1).to({graphics:mask_4_graphics_16,x:53.075,y:40.5554}).wait(1).to({graphics:mask_4_graphics_17,x:53.075,y:40.5247}).wait(1).to({graphics:mask_4_graphics_18,x:53.075,y:40.4416}).wait(1).to({graphics:mask_4_graphics_19,x:53.075,y:40.2798}).wait(1).to({graphics:mask_4_graphics_20,x:53.075,y:40.013}).wait(1).to({graphics:mask_4_graphics_21,x:53.075,y:39.615}).wait(1).to({graphics:mask_4_graphics_22,x:53.075,y:39.0595}).wait(1).to({graphics:mask_4_graphics_23,x:53.075,y:38.3203}).wait(1).to({graphics:mask_4_graphics_24,x:53.075,y:37.3712}).wait(1).to({graphics:mask_4_graphics_25,x:53.075,y:36.2483}).wait(1).to({graphics:mask_4_graphics_26,x:53.075,y:35.2991}).wait(1).to({graphics:mask_4_graphics_27,x:53.075,y:34.56}).wait(1).to({graphics:mask_4_graphics_28,x:53.075,y:34.0045}).wait(1).to({graphics:mask_4_graphics_29,x:53.075,y:33.6065}).wait(1).to({graphics:mask_4_graphics_30,x:53.075,y:33.3397}).wait(1).to({graphics:mask_4_graphics_31,x:53.075,y:33.1778}).wait(1).to({graphics:mask_4_graphics_32,x:53.075,y:33.0947}).wait(1).to({graphics:mask_4_graphics_33,x:53.075,y:33.0641}).wait(1).to({graphics:mask_4_graphics_34,x:53.075,y:33.0597}).wait(61).to({graphics:mask_4_graphics_95,x:53.075,y:33.0597}).wait(1).to({graphics:mask_4_graphics_96,x:53.075,y:33.4347}).wait(1).to({graphics:mask_4_graphics_97,x:53.075,y:33.8097}).wait(1).to({graphics:mask_4_graphics_98,x:53.075,y:34.1847}).wait(1).to({graphics:mask_4_graphics_99,x:53.075,y:34.5597}).wait(1).to({graphics:mask_4_graphics_100,x:53.075,y:34.9347}).wait(1).to({graphics:mask_4_graphics_101,x:53.075,y:35.3097}).wait(1).to({graphics:mask_4_graphics_102,x:53.075,y:35.6847}).wait(1).to({graphics:mask_4_graphics_103,x:53.075,y:36.0597}).wait(1).to({graphics:mask_4_graphics_104,x:53.075,y:36.4347}).wait(1).to({graphics:mask_4_graphics_105,x:53.075,y:36.8097}).wait(1).to({graphics:mask_4_graphics_106,x:53.075,y:37.1847}).wait(1).to({graphics:mask_4_graphics_107,x:53.075,y:37.5597}).wait(1).to({graphics:mask_4_graphics_108,x:53.075,y:37.9347}).wait(1).to({graphics:mask_4_graphics_109,x:53.075,y:38.3097}).wait(1).to({graphics:mask_4_graphics_110,x:53.075,y:38.6847}).wait(1).to({graphics:mask_4_graphics_111,x:53.075,y:39.0597}).wait(1).to({graphics:mask_4_graphics_112,x:53.075,y:39.4347}).wait(1).to({graphics:mask_4_graphics_113,x:53.075,y:39.8097}).wait(1).to({graphics:mask_4_graphics_114,x:53.075,y:40.1847}).wait(1).to({graphics:mask_4_graphics_115,x:53.075,y:40.5597}).wait(41));

	// txt0102
	this.instance_4 = new lib.txt0102();
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.6,31.9,1,1,0,0,0,56.6,28.4);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({y:48.4},19,cjs.Ease.cubicInOut).wait(61).to({y:31.9},20).wait(41));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_15 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_16 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_17 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_18 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_19 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_20 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_21 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_22 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_23 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_24 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_25 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_26 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_27 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_28 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_29 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_30 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_31 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_32 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_33 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_34 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_95 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_96 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_97 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_98 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_99 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_100 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_101 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_102 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_103 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_104 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_105 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_106 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_107 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_108 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_109 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_110 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_111 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_112 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_113 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_114 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");
	var mask_5_graphics_115 = new cjs.Graphics().p("ArdBGIAAiLIW7AAIAACLg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_5_graphics_15,x:53.075,y:-1.8478}).wait(1).to({graphics:mask_5_graphics_16,x:53.075,y:-1.8435}).wait(1).to({graphics:mask_5_graphics_17,x:53.075,y:-1.8128}).wait(1).to({graphics:mask_5_graphics_18,x:53.075,y:-1.7297}).wait(1).to({graphics:mask_5_graphics_19,x:53.075,y:-1.5679}).wait(1).to({graphics:mask_5_graphics_20,x:53.075,y:-1.3011}).wait(1).to({graphics:mask_5_graphics_21,x:53.075,y:-0.9031}).wait(1).to({graphics:mask_5_graphics_22,x:53.075,y:-0.3476}).wait(1).to({graphics:mask_5_graphics_23,x:53.075,y:0.3916}).wait(1).to({graphics:mask_5_graphics_24,x:53.075,y:1.3407}).wait(1).to({graphics:mask_5_graphics_25,x:53.075,y:2.4637}).wait(1).to({graphics:mask_5_graphics_26,x:53.075,y:3.4128}).wait(1).to({graphics:mask_5_graphics_27,x:53.075,y:4.152}).wait(1).to({graphics:mask_5_graphics_28,x:53.075,y:4.7074}).wait(1).to({graphics:mask_5_graphics_29,x:53.075,y:5.1054}).wait(1).to({graphics:mask_5_graphics_30,x:53.075,y:5.3722}).wait(1).to({graphics:mask_5_graphics_31,x:53.075,y:5.5341}).wait(1).to({graphics:mask_5_graphics_32,x:53.075,y:5.6172}).wait(1).to({graphics:mask_5_graphics_33,x:53.075,y:5.6478}).wait(1).to({graphics:mask_5_graphics_34,x:53.075,y:5.6522}).wait(61).to({graphics:mask_5_graphics_95,x:53.075,y:5.6522}).wait(1).to({graphics:mask_5_graphics_96,x:53.075,y:5.2772}).wait(1).to({graphics:mask_5_graphics_97,x:53.075,y:4.9022}).wait(1).to({graphics:mask_5_graphics_98,x:53.075,y:4.5272}).wait(1).to({graphics:mask_5_graphics_99,x:53.075,y:4.1522}).wait(1).to({graphics:mask_5_graphics_100,x:53.075,y:3.7772}).wait(1).to({graphics:mask_5_graphics_101,x:53.075,y:3.4022}).wait(1).to({graphics:mask_5_graphics_102,x:53.075,y:3.0272}).wait(1).to({graphics:mask_5_graphics_103,x:53.075,y:2.6522}).wait(1).to({graphics:mask_5_graphics_104,x:53.075,y:2.2772}).wait(1).to({graphics:mask_5_graphics_105,x:53.075,y:1.9022}).wait(1).to({graphics:mask_5_graphics_106,x:53.075,y:1.5272}).wait(1).to({graphics:mask_5_graphics_107,x:53.075,y:1.1522}).wait(1).to({graphics:mask_5_graphics_108,x:53.075,y:0.7772}).wait(1).to({graphics:mask_5_graphics_109,x:53.075,y:0.4022}).wait(1).to({graphics:mask_5_graphics_110,x:53.075,y:0.0272}).wait(1).to({graphics:mask_5_graphics_111,x:53.075,y:-0.3478}).wait(1).to({graphics:mask_5_graphics_112,x:53.075,y:-0.7228}).wait(1).to({graphics:mask_5_graphics_113,x:53.075,y:-1.0978}).wait(1).to({graphics:mask_5_graphics_114,x:53.075,y:-1.4728}).wait(1).to({graphics:mask_5_graphics_115,x:53.075,y:-1.8478}).wait(41));

	// txt0101
	this.instance_5 = new lib.txt0101();
	this.instance_5.parent = this;
	this.instance_5.setTransform(57.1,17.1,1,1,0,0,0,60.1,12.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({y:2.1},19,cjs.Ease.cubicInOut).wait(61).to({y:17.1},20).wait(41));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_5 = new cjs.Graphics().p("Ar6MqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_6 = new cjs.Graphics().p("Ar5MqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_7 = new cjs.Graphics().p("Ar2MqIAA5TIW8AAIAAZTg");
	var mask_6_graphics_8 = new cjs.Graphics().p("ArrMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_9 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_10 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_11 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_12 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_13 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_14 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_15 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_16 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_17 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_18 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_19 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_20 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_21 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");
	var mask_6_graphics_22 = new cjs.Graphics().p("ArdMqIAA5TIW7AAIAAZTg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_6_graphics_5,x:-76.3,y:50.075}).wait(1).to({graphics:mask_6_graphics_6,x:-76.2461,y:50.075}).wait(1).to({graphics:mask_6_graphics_7,x:-75.8688,y:50.075}).wait(1).to({graphics:mask_6_graphics_8,x:-74.8448,y:50.075}).wait(1).to({graphics:mask_6_graphics_9,x:-72.2761,y:50.075}).wait(1).to({graphics:mask_6_graphics_10,x:-65.7005,y:50.075}).wait(1).to({graphics:mask_6_graphics_11,x:-55.8911,y:50.075}).wait(1).to({graphics:mask_6_graphics_12,x:-42.2011,y:50.075}).wait(1).to({graphics:mask_6_graphics_13,x:-23.9836,y:50.075}).wait(1).to({graphics:mask_6_graphics_14,x:-1.9664,y:50.075}).wait(1).to({graphics:mask_6_graphics_15,x:16.2511,y:50.075}).wait(1).to({graphics:mask_6_graphics_16,x:29.9411,y:50.075}).wait(1).to({graphics:mask_6_graphics_17,x:39.7505,y:50.075}).wait(1).to({graphics:mask_6_graphics_18,x:46.3261,y:50.075}).wait(1).to({graphics:mask_6_graphics_19,x:50.3145,y:50.075}).wait(1).to({graphics:mask_6_graphics_20,x:52.3626,y:50.075}).wait(1).to({graphics:mask_6_graphics_21,x:53.1172,y:50.075}).wait(1).to({graphics:mask_6_graphics_22,x:53.225,y:50.075}).wait(1).to({graphics:null,x:0,y:0}).wait(133));

	// line
	this.instance_6 = new lib.line();
	this.instance_6.parent = this;
	this.instance_6.setTransform(53,45);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(4).to({y:21},25,cjs.Ease.quadInOut).wait(73).to({y:75},27,cjs.Ease.quadInOut).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,0,110.5,95.4);


(lib.LOGO_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_txt02
	this.instance = new lib.logo_txt02();
	this.instance.parent = this;
	this.instance.setTransform(-2,47.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({y:58,alpha:1},25,cjs.Ease.quadOut).wait(6));

	// logo_txt01
	this.instance_1 = new lib.logo_txt01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,28.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:39,alpha:1},25,cjs.Ease.quadOut).wait(10));

	// logo_round
	this.instance_2 = new lib.logo_round();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-17,0.2,0.2,0,0,0,0,-0.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:1,regY:0,scaleX:0.2554,scaleY:0.2554,x:0.25,y:-16.95,alpha:0.0693},0).wait(1).to({scaleX:0.3103,scaleY:0.3103,x:0.3,alpha:0.1379},0).wait(1).to({scaleX:0.364,scaleY:0.364,x:0.35,alpha:0.2051},0).wait(1).to({scaleX:0.4161,scaleY:0.4161,x:0.4,alpha:0.2703},0).wait(1).to({scaleX:0.4661,scaleY:0.4661,x:0.45,alpha:0.3327},0).wait(1).to({scaleX:0.5134,scaleY:0.5134,x:0.5,alpha:0.3919},0).wait(1).to({scaleX:0.5579,scaleY:0.5579,x:0.55,alpha:0.4476},0).wait(1).to({scaleX:0.5994,scaleY:0.5994,x:0.6,alpha:0.4994},0).wait(1).to({scaleX:0.6378,scaleY:0.6378,x:0.65,y:-17,alpha:0.5474},0).wait(1).to({scaleX:0.6731,scaleY:0.6731,alpha:0.5916},0).wait(1).to({scaleX:0.7056,scaleY:0.7056,x:0.7,alpha:0.6322},0).wait(1).to({scaleX:0.7352,scaleY:0.7352,x:0.75,alpha:0.6693},0).wait(1).to({scaleX:0.7623,scaleY:0.7623,alpha:0.7032},0).wait(1).to({scaleX:0.787,scaleY:0.787,x:0.8,alpha:0.7341},0).wait(1).to({scaleX:0.8095,scaleY:0.8095,alpha:0.7622},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:0.85,alpha:0.7878},0).wait(1).to({scaleX:0.8486,scaleY:0.8486,alpha:0.8111},0).wait(1).to({scaleX:0.8656,scaleY:0.8656,alpha:0.8323},0).wait(1).to({scaleX:0.881,scaleY:0.881,x:0.9,alpha:0.8515},0).wait(1).to({scaleX:0.895,scaleY:0.895,alpha:0.869},0).wait(1).to({scaleX:0.9077,scaleY:0.9077,alpha:0.8849},0).wait(1).to({scaleX:0.9192,scaleY:0.9192,alpha:0.8994},0).wait(1).to({scaleX:0.9297,scaleY:0.9297,x:0.95,alpha:0.9124},0).wait(1).to({scaleX:0.9391,scaleY:0.9391,alpha:0.9242},0).wait(1).to({scaleX:0.9476,scaleY:0.9476,alpha:0.9349},0).wait(1).to({scaleX:0.9553,scaleY:0.9553,alpha:0.9445},0).wait(1).to({scaleX:0.9622,scaleY:0.9622,alpha:0.9532},0).wait(1).to({scaleX:0.9684,scaleY:0.9684,alpha:0.9609},0).wait(1).to({scaleX:0.9739,scaleY:0.9739,alpha:0.9678},0).wait(1).to({scaleX:0.9788,scaleY:0.9788,x:1,alpha:0.9739},0).wait(1).to({scaleX:0.9831,scaleY:0.9831,alpha:0.9792},0).wait(1).to({scaleX:0.9868,scaleY:0.9868,alpha:0.9839},0).wait(1).to({scaleX:0.9901,scaleY:0.9901,alpha:0.988},0).wait(1).to({scaleX:0.9929,scaleY:0.9929,alpha:0.9914},0).wait(1).to({scaleX:0.9952,scaleY:0.9952,alpha:0.9943},0).wait(1).to({scaleX:0.9971,scaleY:0.9971,alpha:0.9967},0).wait(1).to({scaleX:0.9986,scaleY:0.9986,alpha:0.9986},0).wait(1).to({regX:0,regY:-0.3,scaleX:0.9997,scaleY:0.9997,x:0,y:-17.3,alpha:1},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-63,118.8,126.8);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BG copy
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80,164.95);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,164.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},273).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(273).to({_off:false},0).to({_off:true,alpha:1},14).wait(1));

	// LOGO
	this.instance_2 = new lib.LOGO_mov("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.1,115.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({startPosition:43},0).to({regX:0.3,scaleX:0.6,scaleY:0.6,x:80.2,y:54.05},46,cjs.Ease.quadInOut).wait(173));

	// TXT
	this.instance_3 = new lib.TXT("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(81.3,155,1,1,0,0,0,53.3,47);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(78).to({_off:false},0).wait(210));

	// Layer_9
	this.instance_4 = new lib.CANS();
	this.instance_4.parent = this;
	this.instance_4.setTransform(82,278.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(182).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.36,scaleY:0.36,x:77.95,y:275.55,alpha:1},31,cjs.Ease.quadInOut).wait(75));

	// CAVIAR
	this.instance_5 = new lib.caviar_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(77,373);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:331,alpha:1},44,cjs.Ease.quadInOut).wait(25).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:77.05,y:279.05},46,cjs.Ease.quadInOut).wait(67).to({y:339.05,alpha:0},31,cjs.Ease.quadInOut).wait(75));

	// BG
	this.instance_6 = new lib.BG();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(288));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsfZyMAAAgzjIY/AAMAAAAzjg");
	this.shape.setTransform(80,165);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(288));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-20,500,502.5);


// stage content:
(lib.orlaneco_160x330_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Asf5xIY/AAMAAAAzjI4/AAg");
	this.shape.setTransform(80,165);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,165,0.6667,0.825);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AsfZyMAAAgzjIY/AAMAAAAzjg");
	this.shape_1.setTransform(80,165);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,164,343,318.5);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 160,
	height: 330,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.jpg", id:"BG"},
		{src:"can.png", id:"can"},
		{src:"caviar.png", id:"caviar"}
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