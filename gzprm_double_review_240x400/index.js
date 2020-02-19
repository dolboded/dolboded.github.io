(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.COIN = function() {
	this.initialize(img.COIN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,101);


(lib.INSURANCE = function() {
	this.initialize(img.INSURANCE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,98);


(lib.LEGAL = function() {
	this.initialize(img.LEGAL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,435);// helper functions:

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


(lib.txt0303 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC2A0IAAgXIg2AAIAAAXIgUAAIAAgpIAIAAQAFgFACgJQACgKABgQIAAgUIBAAAIAAA8IAMAAIAAApgACRgaQAAANgCAJQgCAJgDAGIAeAAIAAgqIgWAAgADnAZQgJgFgGgJQgFgKgBgKQABgMAFgJQAGgKAJgFQAKgGAMAAQAMAAAJAGQAKAFAGAKQAFAJABAMQgBAKgFAKQgGAJgKAFQgJAGgMAAQgMAAgKgGgADugZQgGAGAAAKQAAAJAGAFQAFAGAKAAQAIAAAGgGQAGgFAAgJQAAgKgGgGQgGgGgIAAQgKAAgFAGgAAnAZQgJgFgGgJQgFgKAAgKQAAgMAFgJQAGgKAJgFQAKgGAMAAQAMAAAKAGQAKAFAFAKQAGAJAAAMQAAAKgGAKQgFAJgKAFQgKAGgMAAQgMAAgKgGgAAvgZQgGAGgBAKQABAJAGAFQAFAGAJAAQAJAAAGgGQAFgFABgJQgBgKgFgGQgGgGgJAAQgJAAgFAGgAigAcQgHgDgDgFQgEgGAAgGQABgKAIgGQAIgGAOgBIAUAAIAAgDQgBgHgDgDQgEgEgHAAQgHAAgFADQgEADgFAFIgLgNQAGgJAJgEQAJgEAKAAQAKAAAIAEQAIAEAEAHQAEAIAAALIAAAuIgUAAIAAgHQgEAEgGADQgGACgIAAQgJAAgFgDgAiVABQgCACAAAEQAAAEACACQAEACAFAAQAHAAAEgEQAGgEAAgHIAAAAIgSAAQgFAAgDABgAmfAcQgGgDgEgFQgDgGAAgGQAAgKAIgGQAJgGANgBIAUAAIAAgDQAAgHgEgDQgDgEgIAAQgGAAgFADQgFADgEAFIgMgNQAHgJAIgEQAJgEAKAAQALAAAHAEQAIAEAFAHQADAIAAALIAAAuIgTAAIAAgHQgFAEgFADQgHACgIAAQgIAAgGgDgAmTABQgDACAAAEQAAAEADACQAEACAFAAQAGAAAFgEQAFgEAAgHIAAAAIgRAAQgFAAgDABgAoyAaQgJgGgFgJQgGgKAAgKQAAgMAGgKQAFgJAJgFQAKgGAMAAQAMAAAJAGQAJAFAEAJIgOALQgEgFgEgDQgFgDgGAAQgHAAgFADQgEADgCAEQgEAFAAAHQABAJAFAFQAGAGAKAAQAGAAAFgDQAEgDAEgFIAOAMQgEAJgJAFQgJAFgMAAQgMAAgKgFgAIvAdIgRgZIgRAZIgYAAIAdgoIgbgmIAYAAIAPAXIAPgXIAYAAIgbAmIAdAogAHXAdIAAhOIAVAAIAABOgAGJAdIAAhOIAWAAIAAAXIAOAAQAKAAAHADQAHADAFAHQAEAGAAAIQAAAJgEAGQgFAHgHADQgHADgKAAgAGfALIANAAQAGAAADgCQADgDAAgFQAAgEgDgCQgDgDgGAAIgNAAgAE1AdIAAhOIAkAAQAJAAAGADQAGACAEAFQADAFAAAHQAAAFgCADQgBAEgDADQAFACAEAFQADAEABAGQgBAHgEAGQgDAFgHADQgGADgIAAgAFJANIATAAQAGAAACgCQAEgDAAgEQAAgEgEgBQgCgCgGAAIgTAAgAFJgSIAPAAQAFAAADgCQACgCAAgDQAAgEgCgCQgDgCgFAAIgPAAgAgrAdIAAhOIA4AAIAAASIgkAAIAAA8gAjKAdIgfgpIAAApIgWAAIAAhOIAWAAIAAAlIAdglIAZAAIgeAkIAgAqgAlTAdIAAhOIAkAAQAJAAAGADQAGACAEAFQADAFAAAHQAAAFgBADQgCAEgDADQAFACAEAFQADAEABAGQgBAHgEAGQgDAFgHADQgGADgIAAgAk/ANIATAAQAGAAACgCQADgDABgEQgBgEgDgBQgCgCgGAAIgTAAgAk/gSIAPAAQAFAAADgCQACgCAAgDQAAgEgCgCQgDgCgFAAIgPAAgAndAdIAAg8IgYAAIAAgSIBGAAIAAASIgZAAIAAA8g");
	this.shape.setTransform(-1.7,65.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0303, new cjs.Rectangle(-62.5,49.8,192.1,24.10000000000001), null);


(lib.txt0302 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkZHAIFbraIluAAIAAilIJaAAIAAAyImINNg");
	this.shape.setTransform(-65.85,34.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABbEGQgdgRgSgfQgSgeAAgnQAAgnASgeQASgeAdgRQAegSAlAAQAlAAAeASQAeARASAeQASAeAAAnQAAAngSAeQgSAfgeARQgeASglAAQglAAgegSgAB5BnQgOAQgBAaQABAaAOAQQAOAQAYAAQAWAAAOgQQAPgQAAgaQAAgagPgQQgOgQgWAAQgYAAgOAQgAi8EPIElocIBVAAIkmIcgAjhgbQgegSgRgeQgSgfAAgnQAAgmASgeQARgfAegRQAegSAmAAQAkAAAeASQAeARASAfQARAeABAmQgBAngRAfQgSAegeASQgeARgkABQgmgBgegRgAjCi7QgOARgBAaQABAbAOAPQAOAQAYABQAVgBAPgQQANgQAAgbQAAgZgNgRQgPgQgVAAQgYAAgOAQg");
	this.shape_1.setTransform(-11.9,52.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0302, new cjs.Rectangle(-102.9,-56,198.9,167.4), null);


(lib.txt0301 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBkIAAgrIhpAAIAAArIgoAAIAAhPIARAAQAJgJAEgTQAFgTABggIABgmIB7AAIAAB1IAZAAIAABPgAhvg0QgBAagEASQgDARgGAMIA6AAIAAhRIgsAAgAA9AxQgSgKgLgSQgLgSAAgWQAAgXALgSQALgSASgKQATgLAXAAQAXAAATALQASAKALASQALASABAXQgBAVgLATQgLASgSAKQgTALgXAAQgXAAgTgLgABLgxQgLALgBATQABATALAKQAKALASABQARgBALgLQALgLABgSQgBgSgLgMQgLgMgRAAQgSAAgKAMg");
	this.shape.setTransform(-31.425,-19.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0301, new cjs.Rectangle(-52,-47.1,104,42.9), null);


(lib.txt0202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG+BmQgJgIAAgNQAAgOAJgJQAIgIAOgBQANABAJAIQAIAJAAAOQAAANgIAIQgJAIgNABQgOgBgIgIgAEoBkQgUgMgLgTQgMgTAAgYQAAgZAMgSQAKgTAUgMQATgLAZAAQAWAAARAKQASAKAJARQAKARAAAVIgBAOIgCAKIhzAAQAFAQAMAJQALAHASABQAOAAALgFQALgEAKgIIASAeQgOANgQAFQgQAHgTAAQgaAAgUgLgAF0AJQAAgKgFgHQgFgHgIgEQgIgEgJAAQgOAAgLAJQgKAJgFAOIBLAAIAAAAgACEBkQgTgMgMgTQgMgUAAgYQAAgYAMgSQAMgUATgLQAUgLAZAAQAYAAASALQASALALASIggAXQgGgKgKgGQgKgHgNABQgNAAgKAFQgJAHgFAIQgGALAAAMQABAUALAMQAMANATAAQANAAAKgGQAKgHAGgKIAgAYQgLASgSALQgSALgYAAQgZAAgUgLgAgoBlQgSgIgLgQQgMgPgDgVIgWAAIAABCIgtAAIAAijIAtAAIAAA7IAXAAQAFgRALgPQAMgOAQgIQAQgIAVAAQAXAAATALQATAMALATQALASAAAYQAAAZgLASQgLAUgTALQgTALgXAAQgWABgQgKgAghgGQgLAMgBAUQABATALAMQALANATAAQARgBALgMQALgMAAgTQAAgNgEgLQgGgIgJgHQgKgFgKAAQgSAAgMAMgAlOBtIgHgCIAAgkIADAAIAEAAQAJAAAGgJQAFgJACgUQADgTABgeIAAgoICBAAIAACjIgsAAIAAh9IgsAAIAAAMQgBAogFAaQgHAagLAMQgNAMgUAAIgKgBgAmLBrIAAh9Ig5AAIAAB9IgtAAIAAijICTAAIAACjgAHBAbIgJiJIA1AAIgICJg");
	this.shape.setTransform(-45.2,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0202, new cjs.Rectangle(-99.4,-22.7,198.9,45.5), null);


(lib.txt0201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlwCOIAAgsIhpAAIAAAsIgoAAIAAhQIAQAAQAKgJAEgTQAEgUABgfIABgmIB7AAIAAB1IAZAAIAABQgAm4gKQgBAYgDASQgEATgGALIA7AAIAAhRIgsAAgAAyBmIAAidIAqAAIAABTIBVhWIAOAAIAACcIgqAAIAAhTIhVBXgAG4BaQgTgKgLgSQgKgSgBgXQABgWAKgSQALgRATgLQASgKAYgBQAXABASAKQATALALARQALASAAAWQAAAWgLATQgLASgTAKQgSALgYAAQgXAAgSgLgAHFgIQgLALAAATQAAASALAMQALALASAAQARAAALgMQALgMAAgRQAAgTgLgLQgLgMgRAAQgSAAgLAMgAhnBaQgSgKgLgSQgLgSAAgXQAAgWALgSQALgRASgLQATgKAXgBQAXABATAKQASALAKARQALASABAWQgBAWgLATQgKASgSAKQgTALgXAAQgXAAgTgLgAhZgIQgLALgBATQABASALAMQAKALASAAQARAAALgMQALgMABgRQgBgTgLgLQgLgMgRAAQgSAAgKAMgALTBiIAAhKIglAqIgOAAIglgpIAABJIgpAAIAAicIANAAIBIBQIBJhQIANAAIAACcgAFJBiIAAg+Ig5AAIAAA+IgpAAIAAiZIApAAIAAA3IA5AAIAAg3IApAAIAACZgAktBiIAAiZIBHAAQAQAAAMAGQAMAFAHAJQAHAKAAAOQAAAIgDAHQgDAGgGAGQALAFAGAIQAHAJAAANQAAAOgIALQgGAKgNAGQgMAGgRAAgAkFBDIAlAAQAKAAAGgFQAFgEAAgIQAAgIgFgEQgGgEgKAAIglAAgAkFAFIAdAAQAJAAAFgFQAEgCAAgHQAAgHgEgEQgFgDgJAAIgdAAgAr8BiIAAjMIBJAAQATABAOAGQAPAIAIAMQAJANAAASQAAALgEAJQgEAJgHAIQAQAFAKAMQAKANAAATQAAARgJAOQgIAOgPAHQgQAIgUAAgArTA+IAvAAQAOAAAIgHQAHgHABgMQgBgLgHgIQgIgGgOgBIgvAAgArTgXIAdAAQANAAAGgGQAHgHAAgKQAAgLgHgHQgGgFgNgBIgdAAgABghVQgMgGgHgNQgGgMgBgQIAAgJIAiAAIAAAIQAAANAFAFQAFAHAKAAQAKAAAFgHQAFgFAAgNIAAgIIAhAAIAAAJQAAAYgOAPQgPAOgYABQgQAAgMgHg");
	this.shape.setTransform(28.475,-18.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0201, new cjs.Rectangle(-52,-41.9,206.7,83.9), null);


(lib.txt0103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFABrIAAgvIhwAAIAAAvIgrAAIAAhUIASAAQAKgKAEgUQAFgVABgiIABgoICDAAIAAB9IAbAAIAABUgAD0g3QgBAbgEATQgEASgHAOIA/AAIAAhYIgvAAgAmBBrIAAgvIhwAAIAAAvIgqAAIAAhUIARAAQALgKAEgUQAEgVACgiIABgoICDAAIAAB9IAbAAIAABUgAnNg3QgBAbgEATQgDASgHAOIA+AAIAAhYIgvAAgAAmA0QgUgLgLgTQgLgTAAgYQAAgYALgTQALgTAUgLQAUgMAZAAQAYAAAUAMQAUALAMATQALATAAAYQAAAXgLAUQgMATgUALQgUAMgZAAQgYAAgUgMgAA0g1QgLANgBAUQABATALAMQAMAMATAAQASAAAMgNQAMgLAAgTQAAgUgMgNQgMgMgSAAQgTAAgMAMgAkoA0QgUgLgLgTQgMgTAAgYQAAgYAMgTQALgTAUgLQAUgMAZAAQAYAAAUAMQAUALAMATQALATAAAYQAAAXgLAUQgMATgUALQgUAMgZAAQgYAAgUgMgAkag1QgLANgBAUQABATALAMQAMAMATAAQASAAAMgNQAMgLAAgTQAAgUgMgNQgMgMgSAAQgTAAgMAMgAgwA8Igjg0IgkA0IgyAAIA8hTIg4hPIAyAAIAgAvIAfgvIAxAAIg4BPIA7BTgAG/AVIAtgyIgtgyIAdgZIBABGIAAALIhABEgAFrAVIAsgyIgsgyIAcgZIBABGIAAALIhABEg");
	this.shape.setTransform(-5.975,6.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0103, new cjs.Rectangle(-62.5,-22.7,125.1,45.5), null);


(lib.txt0102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlvCXIAAgvIiIAAIAAAvIgsAAIAAhUIgaAWIhAhFIAAgLIBAhFIAcAZIgtAxIAsAyIAQAAQAOgMAGgjQAGgiABg8IAAgkICXAAIAACxIAdAAIAABXgAnTAKQgFAigKAUIBWAAIAAiIIhCAAQAAAxgFAhgAI9BsIAAimIAtAAIAABYIBbhcIAOAAIAACmIgsAAIAAhYIhbBcgAAkBsIAAimIAtAAIAABYIBbhcIAOAAIAACmIgtAAIAAhYIhbBcgAGoBgQgUgLgMgTQgLgTAAgZQAAgXALgTQAMgTAUgLQAUgMAZAAQAYAAAUAMQAUALALATQAMATAAAXQAAAYgMAUQgMATgTALQgUAMgZAAQgZAAgTgMgAG2gJQgLAMgBAUQABATALANQALAMAUAAQASAAALgNQAMgMAAgTQAAgUgMgMQgLgMgSAAQgUAAgLAMgAhxBgQgTgLgMgTQgMgTAAgZQAAgXAMgTQAMgTATgLQAUgMAZAAQAYAAAUAMQAUALALATQAMATAAAXQAAAYgMAUQgLATgUALQgTAMgaAAQgYAAgUgMgAhigJQgMAMgBAUQABATAMANQALAMATAAQASAAAMgNQAMgMAAgTQAAgUgMgMQgMgMgSAAQgTAAgLAMgAE/BoIAAhBIg8AAIAABBIgsAAIAAiiIAsAAIAAA7IA8AAIAAg7IAsAAIAACigAk2BoIAAiiIBMAAQAQAAAOAFQAMAGAIAKQAHAKAAAPQAAAJgDAHQgEAHgGAGQAMAFAHAJQAHAKgBANQABAPgIALQgIAMgNAGQgNAGgRAAgAkLBHIAnAAQALAAAFgFQAHgFAAgIQAAgIgHgFQgFgEgLAAIgnAAgAkLAFIAeAAQAKAAAFgEQAFgDAAgIQAAgIgFgDQgFgEgKAAIgeAAgArTAUIAAgLIBBhFIAdAZIgtAxIAtAzIgdAYgAJvhbQgNgHgHgNQgIgNABgRIAAgJIAjAAIAAAJQAAANAFAGQAGAHAKAAQALAAAGgHQAFgGAAgNIAAgJIAjAAIAAAJQAAAagPAQQgQAPgaABQgQAAgNgIgABVhbQgMgHgIgNQgHgNAAgRIAAgJIAjAAIAAAJQABANAFAGQAGAHAKAAQAKAAAGgHQAFgGABgNIAAgJIAjAAIAAAJQAAAagQAQQgQAPgZABQgRAAgNgIg");
	this.shape.setTransform(-23.65,2.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0102, new cjs.Rectangle(-99.4,-22.7,198.9,45.5), null);


(lib.txt0101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGQB8IAAgrIhpAAIAAArIgoAAIAAhPIARAAQAJgJAEgUQAFgSABggIABgmIB7AAIAAB1IAYAAIAABPgAFIgcQgBAZgDASQgDASgHAMIA7AAIAAhRIgsAAgAB3BOQgMgGgGgKQgGgKAAgOQAAgVAQgLQAOgLAbAAIAnAAIAAgHQAAgNgHgHQgHgHgOAAQgNAAgJAFQgKAGgJAKIgWgaQAOgQARgIQAQgHAUgBQAUAAAPAIQAPAHAHAPQAJAOAAAXIAABaIgnAAIAAgQQgHAJgMAGQgNAEgOAAQgRAAgMgGgACOAaQgFADAAAIQAAAIAGAEQAGAEAKABQAOAAAJgJQAJgIAAgOIAAgCIghAAQgKAAgGAFgAhTBSIgHgBIAAgjIADAAIADAAQAJABAGgJQAFgIACgTQACgRABgdIAAglIB4AAIAACZIgpAAIAAh1IgoAAIgBALQAAAlgGAYQgEAZgMALQgLALgUAAIgJgBgAiSBRIg8hRIAABRIgpAAIAAiZIApAAIAABIIA6hIIAvAAIg6BGIA/BTgAm2BRIAAjMIBIAAQATAAAOAHQAQAIAHAMQAJANAAARQAAALgEAKQgEAJgHAHQAQAGAKANQAKAMAAASQAAASgJAOQgIANgPAIQgQAHgTABgAmOAtIAvAAQAOAAAIgIQAIgGAAgNQAAgLgIgHQgIgGgOAAIgvAAgAmOgpIAdAAQANABAHgHQAGgGAAgLQAAgLgGgGQgHgGgNAAIgdAAg");
	this.shape.setTransform(-4.05,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0101, new cjs.Rectangle(-52,-41.9,104,83.9), null);


(lib.LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(74.05,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(0,0,148.1,31), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.LEGAL();
	this.instance.parent = this;
	this.instance.setTransform(107,109,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(107,109,213,217.5), null);


(lib.INSURE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.INSURANCE();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.INSURE, new cjs.Rectangle(-25,-25,49,49), null);


(lib.COIN_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.COIN();
	this.instance.parent = this;
	this.instance.setTransform(-49,-26,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.COIN_1, new cjs.Rectangle(-49,-26,98,50.5), null);


(lib.bttn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C59A6").s().p("AlqBWIAAiHIAZAAIAAAMQAFgHAIgDQAJgFAKAAQAOABALAGQALAHAGALQAGANABAOQgBAOgGAMQgGAMgLAHQgLAHgOAAQgJAAgIgDQgIgDgFgGIAAAugAlCgYQgGADgEAGQgDAGgBAJQABAJADAGQAEAHAFACQAHADAGAAQAHAAAGgDQAGgEADgFQADgHABgIQgBgIgDgGQgDgGgGgEQgGgDgHAAQgHAAgFADgALEBOIAAgcIhDAAIAAAcIgaAAIAAg0IAKAAQAHgFACgNQADgMAAgVIABgYIBQAAIAABLIARAAIAAA0gAKWgUQAAAQgCALQgDAMgEAHIAmAAIAAg1IgdAAgAIPAwQgIgEgEgHQgEgGgBgJQABgOAKgHQAKgHARAAIAZAAIAAgEQAAgJgEgEQgFgFgJAAQgIAAgGAEQgGAEgHAGIgNgRQAIgLALgEQALgFANgBQANABAJAFQAKAEAFAJQAFAKAAAOIAAA7IgZAAIAAgKQgFAGgHADQgIADgKAAQgLAAgHgEgAIeAOQgEACAAAFQAAAFAEADQAEADAHAAQAIAAAGgGQAGgFAAgJIAAgBIgVAAQgGAAgEADgAq6ArQgRgJgIgQQgKgPAAgTQAAgUAKgQQAIgOARgKQAQgJATAAQAUAAAQAJQAQAKAJAOQAKAQAAAUQAAATgKAPQgJAQgQAJQgQAJgUAAQgTAAgQgJgAqtg2QgKAFgFALQgFAJAAANQAAANAFAJQAFAKAKAFQAKAFANABQALgBAKgFQAKgFAGgKQAFgJAAgNQAAgNgFgJQgGgLgKgFQgKgGgLAAQgNAAgKAGgAGKAzIgEgBIAAgXIACAAIACAAQAFABAEgGQADgFACgMQABgLABgUIAAgXIBPAAIAABjIgbAAIAAhNIgbAAIAAAIQgBAYgDAQQgDAPgIAIQgHAHgMABIgHgBgAFiAyIgog0IAngvIAeAAIglAuIAoA1gAEfAyIAAhjIAbAAIAAAvIAAA0gACwAyIAAhjIAuAAQALAAAHADQAJAEAEAGQAEAGAAAJQAAAGgBAEQgDAFgEADQAIADADAFQAFAGAAAIQAAAJgFAHQgFAGgHAEQgJAFgKAAgADKAdIAYAAQAGAAAFgDQADgDAAgFQAAgFgDgDQgFgCgGAAIgYAAgADKgKIATAAQAGAAADgCQADgDAAgEQAAgFgDgDQgDgCgGAAIgTAAgAALAyIAAhjIAbAAIAAAdIASAAQAMAAAJADQAKAFAFAIQAGAGgBAMQABALgGAIQgFAIgKAEQgJAFgMAAgAAmAaIASAAQAGAAAEgCQAEgDAAgGQAAgHgEgDQgEgEgGAAIgSAAgAg/AyIAAhNIgeAAIAAgWIBYAAIAAAWIgfAAIAABNgAiJAyIAAhjIAbAAIAABjgAjrAyIAAhjIAbAAIAAAdIASAAQAMAAAKADQAJAFAFAIQAFAGABAMQgBAMgFAHQgFAIgJAEQgKAFgMAAgAjQAaIARAAQAIAAADgCQAEgDAAgGQAAgHgEgDQgEgEgHAAIgRAAgAmZAyIgog0IAmgvIAeAAIglAuIApA1gAncAyIAAhjIAbAAIAAAvIAAA0gAonAyIAAhNIgeAAIAAgWIBYAAIAAAWIgfAAIAABNgAnBgCg");
	this.shape.setTransform(-0.55,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtFDWQgQAAgLgMQgMgNAAgSIAAlVQAAgSAMgNQALgMAQAAIaLAAQAQAAALAMQAMANAAASIAAFVQAAASgMANQgLAMgQAAg");
	this.shape_1.setTransform(0.675,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bttn, new cjs.Rectangle(-87.6,-21.4,176,43.3), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B58A5").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,240,400), null);


(lib.TXT03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0103
	this.instance = new lib.txt0303();
	this.instance.parent = this;
	this.instance.setTransform(220,79);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:60,alpha:1},13,cjs.Ease.cubicOut).wait(30).to({x:-90,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(1));

	// txt0102
	this.instance_1 = new lib.txt0302();
	this.instance_1.parent = this;
	this.instance_1.setTransform(257,44);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:97,alpha:1},13,cjs.Ease.cubicOut).wait(30).to({x:-53,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(4));

	// txt0101
	this.instance_2 = new lib.txt0301();
	this.instance_2.parent = this;
	this.instance_2.setTransform(209,30);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:49,alpha:1},13,cjs.Ease.cubicOut).wait(30).to({x:-101,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,0,427.6,149.4);


(lib.TXT02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0102
	this.instance = new lib.txt0202();
	this.instance.parent = this;
	this.instance.setTransform(257,44);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:97,alpha:1},13,cjs.Ease.cubicOut).wait(30).to({x:-53,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(4));

	// txt0101
	this.instance_1 = new lib.txt0201();
	this.instance_1.parent = this;
	this.instance_1.setTransform(209,30);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:49,alpha:1},13,cjs.Ease.cubicOut).wait(30).to({x:-101,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-3,463,60.2);


(lib.TXT01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0103
	this.instance = new lib.txt0103();
	this.instance.parent = this;
	this.instance.setTransform(220,79);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:60,alpha:1},13,cjs.Ease.cubicOut).wait(30).to({x:-90,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(1));

	// txt0102
	this.instance_1 = new lib.txt0102();
	this.instance_1.parent = this;
	this.instance_1.setTransform(257,44);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:97,alpha:1},13,cjs.Ease.cubicOut).wait(30).to({x:-53,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(4));

	// txt0101
	this.instance_2 = new lib.txt0101();
	this.instance_2.parent = this;
	this.instance_2.setTransform(209,30);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:49,alpha:1},13,cjs.Ease.cubicOut).wait(30).to({x:-101,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,0,455.7,96.4);


(lib.legalMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(106,108.5,1,1,0,0,0,213,217.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(65).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,217.5);


(lib.InsureMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.INSURE();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(5).to({alpha:0},13).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,49,49);


(lib.COINFALL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// COIN1
	this.instance = new lib.COIN_1();
	this.instance.parent = this;
	this.instance.setTransform(-3,-413,1,1,-58.9995);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.3,rotation:10.0002,x:-3.05,y:-40.5},14,cjs.Ease.quadIn).to({rotation:-10.0003,x:-6.55,y:-49.2},4,cjs.Ease.cubicOut).to({y:-40.8},3,cjs.Ease.quadInOut).to({regX:0,regY:-0.4,rotation:2.9994,x:-4.75,y:-36.95},2,cjs.Ease.quadInOut).to({regY:0,rotation:0,x:-3,y:-36},1,cjs.Ease.cubicInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.1,-468.4,110.80000000000001,460.9);


(lib.BTTNmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bttn();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4,0.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.cubicOut).wait(5).to({scaleX:0.4,scaleY:0.4,alpha:0},15,cjs.Ease.cubicIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-21,175.4,42.9);


(lib.COINmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// COIN3
	this.instance = new lib.COINFALL("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-3,-18);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).wait(56));

	// COIN2
	this.instance_1 = new lib.COINFALL("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(116));

	// COIN1
	this.instance_2 = new lib.COINFALL("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(170));

	// COIN0
	this.instance_3 = new lib.COIN_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-486.3,113.80000000000001,510.8);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.LOGO();
	this.instance.parent = this;
	this.instance.setTransform(100,31.5,1,1,0,0,0,74,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(276));

	// LEGAL
	this.instance_1 = new lib.legalMov("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.5,278.8,1,1,0,0,0,106.5,108.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({_off:true},95).wait(1));

	// BUTT
	this.instance_2 = new lib.BTTNmov("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.05,109.45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180).to({_off:false},0).wait(15).to({mode:"single",startPosition:15},0).wait(64).to({mode:"synched",startPosition:19,loop:false},0).to({_off:true},16).wait(1));

	// FADE
	this.instance_3 = new lib.BG();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},11).to({_off:true},1).wait(160).to({_off:false},0).to({alpha:1},10).wait(94));

	// COINS
	this.instance_4 = new lib.COINmov("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(173,347);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},182).wait(94));

	// TXT03
	this.instance_5 = new lib.TXT03("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(99.8,156.1,1,1,0,0,0,72.8,48.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(116).to({_off:false},0).to({_off:true},64).wait(96));

	// TXT02
	this.instance_6 = new lib.TXT02("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(99.8,156.1,1,1,0,0,0,72.8,48.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({_off:false},0).to({_off:true},64).wait(154));

	// TXT01
	this.instance_7 = new lib.TXT01("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(99.8,156.1,1,1,0,0,0,72.8,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},64).wait(212));

	// INSURANCE
	this.instance_8 = new lib.InsureMov("single",14);
	this.instance_8.parent = this;
	this.instance_8.setTransform(52,351);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},182).wait(94));

	// BG
	this.instance_9 = new lib.BG();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},182).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-523,-139.3,1042,557.3);


// stage content:
(lib.gzprm_double_review_240x400v2 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(119,96.6,156.89999999999998,304.4);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"COIN.png", id:"COIN"},
		{src:"INSURANCE.png", id:"INSURANCE"},
		{src:"LEGAL.png", id:"LEGAL"}
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