(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"legal.png", id:"legal"}
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



(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,220);


(lib.txt402 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AHNBPQgKgDgFgFIAMgcIAKAGQAFADAGAAQAJAAAFgEQAFgEAEgJIg7hyIAnAAIAnBTIAphTIAmAAIhBB/QgGAKgHAIQgGAHgKAFQgKAEgOAAQgLAAgKgDgAFQBLQgRgIgJgLIASgWQAFAFAIAFIARAGQAJACAIAAQAPAAAJgGQAJgFgBgKQABgJgJgFQgJgEgRAAIghAAIAAgcIAhAAQAOAAAJgEQAJgEAAgJQAAgGgEgEQgFgFgHgCQgIgCgIAAQgMAAgMAEQgLAFgJAIIgRgWQAKgLAQgHQAQgHAWAAQATAAAOAFQAOAFAIAKQAIAKAAANQAAAKgFAIQgFAIgIAEQgHAFgKACQAJABAIACQAIAFAHAIQAFAIAAAMQAAAOgIAKQgJALgOAGQgPAGgTAAQgWAAgSgHgAhlBIQgTgLgMgSQgKgTgBgYQABgXAKgTQAMgTATgKQATgKAZAAQARAAANAFQANAGAJAJQAHAJAFAKIgbAOQgFgKgKgGQgKgHgMAAQgPAAgLAHQgLAHgHALQgHAMAAAOQAAAPAHALQAHAMALAHQALAHAPAAQAMAAAKgHQAKgGAFgKIAbAOQgFAKgIAJQgIAJgNAFQgNAGgRAAQgZAAgTgKgAtPBIQgUgLgLgSQgLgTgBgYQABgXALgTQALgTAUgKQASgKAZAAQARAAANAFQAOAGAIAJQAJAJAGAKIgdAOQgGgKgKgGQgKgHgMAAQgPAAgLAHQgLAHgGALQgHAMgBAOQABAPAHALQAGAMALAHQALAHAPAAQAMAAAKgHQAKgGAGgKIAdAOQgGAKgJAJQgJAJgNAFQgNAGgRAAQgZAAgSgKgAKkBPIA6iAIhRAAIAAgeIB4AAIAAAYIg8CGgAESBPIgJgbIhFAAIgKAbIgnAAIA9ieIArAAIA+CegAD/AWIgZhDIgZBDIAyAAgAAVBPIAAieIBLAAQARAAAMAHQAMAHAGAMQAHAMAAAOQAAAOgHAMQgGAJgMAHQgMAHgRAAIgpAAIAAA5gAA3gGIAkAAQALAAAGgFQAGgGABgKQgBgKgGgGQgGgGgLAAIgkAAgAmVBPIAAiAIguAAIAAgeIB/AAIAAAeIguAAIAACAgAo/BPIAAieIByAAIAAAeIhPAAIAAAiIBNAAIAAAcIhNAAIAAAkIBPAAIAAAegAp5BPIAAg9IgRAEIgSABQgUAAgOgHQgNgIgGgLQgHgNAAgSIAAgtIAjAAIAAAtQgBAQAJAGQAHAHAOAAQAIAAAIgBIAPgEIAAhFIAhAAIAACegAM4BAIAmgrIgmgpIAcAAIAmApIgmArgAMLBAIAmgrIgmgpIAcAAIAmApIgmArgAi0BAIglgrIAlgpIAdAAIgmApIAmArgAjhBAIgmgrIAmgpIAcAAIgmApIAmArg");
	this.shape.setTransform(1.1,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.9,-16.6,181.8,33.3);


(lib.txt401 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ADIBGQAJABAFgEQAGgEAEgMQAEgLADgUIAJhQIByAAIAACeIgiAAIAAiAIgxAAIgGA0QgDAZgGAPQgGAQgIAIQgIAJgLADQgKADgNAAgAoRBaQgSgLgLgSQgLgTAAgYQAAgWALgTQALgSASgLQATgLAYAAQAZAAATALQATALAKASQALATAAAWQAAAYgLATQgKASgTALQgTALgZAAQgYAAgTgLgAn/gaQgLAIgGALQgGAKAAAPQAAAPAGAMQAGAMALAGQALAIAOgBQAPABALgIQALgGAGgMQAGgMAAgPQAAgPgGgKQgGgLgLgIQgLgGgPAAQgOAAgLAGgAPkBiIAAhpIhMBpIghAAIAAieIAiAAIAABlIBKhlIAjAAIAACegAM9BiIAAieIAjAAIAACegAKvBiIAAieIAiAAIAAA5IApAAQARAAAMAFQAMAHAHAMQAGAMAAAOQAAAOgGALQgHAMgMAHQgMAHgRAAgALRBEIAkAAQALAAAGgGQAHgGAAgJQAAgLgHgFQgGgGgLAAIgkAAgAJ1BiIAAhDIhLAAIAABDIgiAAIAAieIAiAAIAAA9IBLAAIAAg9IAjAAIAACegAF6BiIAAieIAiAAIAAA5IAoAAQASAAAMAFQAMAHAGAMQAGAMAAAOQAAAOgGALQgGAMgMAHQgMAHgSAAgAGcBEIAkAAQAKAAAHgGQAGgGAAgJQAAgLgGgFQgHgGgKAAIgkAAgABOBiIAAieIBxAAIAAAeIhPAAIAAAgIBOAAIAAAeIhOAAIAAAkIBPAAIAAAegAgPBiIAAiAIguAAIAAgeIB9AAIAAAeIguAAIAACAgAhtBiIAAhpIhMBpIghAAIAAieIAiAAIAABlIBKhlIAjAAIAACegAkUBiIAAiAIhMAAIAACAIgiAAIAAieICQAAIAACegApjBiIgwhAIgNAPIAAAxIgiAAIAAieIAiAAIAABFIA5hFIAqAAIhABJIBEBVgArwBiIgJgbIhFAAIgKAbIgnAAIA+ieIArAAIA9CegAsDApIgZhDIgZBDIAyAAgAuYBiIAAhDIhLAAIAABDIgiAAIAAieIAiAAIAAA9IBLAAIAAg9IAjAAIAACegAOnhJQgLgGgHgKIANgLQAFAHAHAEQAHAEAKAAQAJAAAHgEQAHgEAFgHIAOALQgHAKgLAGQgLAGgNAAQgNAAgLgGg");
	this.shape.setTransform(0.1,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.3,-16.6,212.8,33.3);


(lib.txt303 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AnpBOIgpAAIgxhAIgMAPIAAAxIgiAAIAAieIAiAAIAABHIA4hHIAqAAIg/BLIBDBSIAAgbQAJABAFgEQAGgEAEgMQAEgLADgUIAJhQIByAAIAACeIgiAAIAAiAIgxAAIgGA0QgDAZgGAPQgGAQgIAIQgIAJgLADQgKADgNAAgAJQBOIAAhuIgtBuIgPAAIgthuIAABuIgiAAIAAieIAvAAIAnBeIAnheIAwAAIAACegAGVBOIgKgbIhEAAIgLAbIgmAAIA9ieIArAAIA+CegAGCAVIgZhDIgZBDIAyAAgADGBOIAAiAIgvAAIAAgeICAAAIAAAeIgvAAIAACAgABlBOIAAhDIhLAAIAABDIggAAIAAieIAgAAIAAA/IBLAAIAAg/IAjAAIAACegAiMBOIAAieIBxAAIAAAeIhPAAIAAAiIBNAAIAAAcIhNAAIAAAkIBPAAIAAAegAjIBOIAAhpIhMBpIghAAIAAieIAiAAIAABlIBKhlIAjAAIAACeg");
	this.shape.setTransform(0.7,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-16.6,132.1,33.3);


(lib.txt302 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AjqBHQgTgKgLgTQgKgSgBgYQABgXAKgTQALgSATgLQATgKAYAAQAYAAATAKQATALALASQAKATABAXQgBAYgKASQgLATgTAKQgTALgYAAQgYAAgTgLgAjZgsQgLAHgGALQgFAMgBAOQABAOAFAMQAGAMALAHQALAHAPAAQAPAAALgHQALgHAGgMQAGgMAAgOQAAgOgGgMQgGgLgLgHQgLgHgPAAQgPAAgLAHgAGTBPIAAhuIgtBuIgPAAIgthuIAABuIgiAAIAAieIAvAAIAnBfIAnhfIAwAAIAACegADMBPIAAieIAiAAIAACegAA+BPIAAieIAiAAIAAA5IAoAAQASAAAMAHQAMAHAGAKQAGAMAAAOQAAAOgGALQgGAMgMAHQgMAHgSAAgABgAxIAkAAQAKAAAHgFQAGgGAAgKQAAgKgGgGQgHgGgKAAIgkAAgAhZBPIAAieIBUAAQANAAAKAGQALAGAFAJQAFAJAAALQAAAKgEAIQgEAIgGAEQgGAFgIACQAJABAHAEQAHAFAEAIQAEAJAAAKQAAAMgFAKQgFAKgLAFQgKAGgNAAgAg3AyIAsAAQAJAAAEgFQAFgFAAgJQAAgIgFgFQgDgFgKAAIgsAAgAg3gPIAqAAQAJAAAEgFQAEgEAAgIQAAgIgEgFQgEgEgJgBIgqAAgAlHBPIAAhDIhLAAIAABDIgiAAIAAieIAiAAIAAA/IBLAAIAAg/IAjAAIAACeg");
	this.shape.setTransform(0.8,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-16.6,94.3,33.3);


(lib.txt301 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AgkBgIAAgeIhjAAIAAAeIgjAAIAAg6QAJAAAGgEQAFgEAFgLQAEgLACgSIAKhSIBxAAIAACAIAPAAIAAA8gAhpgIQgCAPgEALQgGALgIAHIBLAAIAAhiIgxAAgAAsA6QgTgLgLgSQgLgTAAgWQAAgYALgTQALgSATgLQASgLAZAAQAYAAATALQATALALASQAKATAAAYQAAAWgKATQgLASgTALQgTALgYAAQgZAAgSgLgAA9g6QgLAIgGALQgGAMAAAPQAAANAGAMQAGAMALAGQALAIAPgBQAPABALgIQAKgGAHgMQAFgMAAgNQAAgPgFgMQgHgLgKgIQgLgGgPAAQgPAAgLAGg");
	this.shape.setTransform(0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-16.6,39.2,33.3);


(lib.txt204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AEbBgIAAgeIh8AAIAAieIAiAAIAACAIBLAAIAAiAIAjAAIAACAIAPAAIAAAWIA6iWIArAAIA+CeIgoAAIgJgbIhEAAIgLAbIgjAAIAAAegAGmAJIgYhDIgZBDIAxAAgAhwA6QgUgKgLgTQgLgSgBgXQABgZALgSQALgTAUgKQASgLAZAAQARABAOAFQANAGAIAIQAKAKAFAKIgdAOQgGgKgKgHQgKgGgMAAQgOAAgMAGQgLAIgGALQgHAMAAAPQAAANAHAMQAGAMALAGQAMAIAOgBQAMAAAKgGQAKgHAGgJIAdANQgGALgJAIQgJAKgMAFQgOAGgRAAQgZgBgSgKgABjBCIAAg5IgZAAIggA5IgmAAIAkg9QgKgCgHgEQgJgFgFgKQgEgLAAgOQAAgOAGgMQAHgLAMgIQAMgGAQAAIBLAAIAACegAAug5QgGAGgBAKQABALAGAFQAGAGALAAIAkAAIAAgrIgkAAQgLAAgGAFgAkZBCIAAieIByAAIAAAeIhPAAIAAAiIBNAAIAAAcIhNAAIAAAkIBPAAIAAAegAlVBCIAAhuIgtBuIgOAAIgthuIAABuIgiAAIAAieIAvAAIAnBeIAnheIAwAAIAACeg");
	this.shape.setTransform(-51.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-16.6,206.3,33.3);


(lib.txt203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AIGBHQgTgKgKgTQgLgSgBgYQABgXALgTQAKgSATgLQATgKAYAAQAZAAASAKQATALALASQAKATABAXQgBAYgKASQgLATgTAKQgSALgZAAQgYAAgTgLgAIYgsQgMAHgFALQgGAMgBAOQABAOAGAMQAFAMAMAHQALAHAOAAQAPAAALgHQALgHAGgMQAGgMAAgOQAAgOgGgMQgGgLgLgHQgLgHgPAAQgOAAgLAHgADSBHQgTgKgLgTQgKgSgBgYQABgXAKgTQALgSATgLQATgKAXAAQAZAAATAKQATALAKASQALATABAXQgBAYgLASQgKATgTAKQgTALgZAAQgXAAgTgLgADjgsQgLAHgGALQgGAMAAAOQAAAOAGAMQAGAMALAHQALAHAOAAQAPAAALgHQAMgHAFgMQAHgMAAgOQAAgOgHgMQgFgLgMgHQgLgHgPAAQgOAAgLAHgApaBIQgTgLgLgSQgMgTAAgYQAAgXAMgTQALgTATgKQATgKAYAAQASAAANAFQANAGAJAJQAJAJAFAKIgdAOQgFgKgKgGQgKgHgNAAQgOAAgMAHQgLAHgGALQgHAMAAAOQAAAPAHALQAGAMALAHQAMAHAOAAQANAAAKgHQAKgGAFgKIAdAOQgGAKgIAJQgJAJgNAFQgNAGgSAAQgYAAgTgKgAFjBPIAAieIBwAAIAAAeIhPAAIAACAgAAYBPIAAieIBUAAQAPAAAKAGQALAGAFAJQAFAJAAALQAAAKgEAIQgEAIgFAEQgHAFgIACQAJABAHAEQAHAFAEAIQAEAJABAKQgBAMgFAKQgFAKgLAFQgKAGgPAAgAA6AyIAsAAQAJAAAGgFQAFgFABgJQgBgIgFgFQgFgFgKAAIgsAAgAA6gPIAqAAQAKAAAEgFQAFgEABgIQgBgIgFgFQgEgEgKgBIgqAAgAh2BPIAAieIBKAAQASAAAMAHQAMAHAFAMQAFAMAAAOQAAAOgFAMQgFAJgMAHQgMAHgSAAIgoAAIAAA5gAhUgGIAkAAQALAAAGgFQAHgGgBgKQABgKgHgGQgGgGgLAAIgkAAgAj8BPIAAieIBxAAIAAAeIhPAAIAAAiIBNAAIAAAcIhNAAIAAAkIBPAAIAAAegAk4BPIAAiAIhMAAIAACAIgiAAIAAieICQAAIAACeg");
	this.shape.setTransform(-35.4,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-16.6,206.3,33.3);


(lib.txt202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("Ah5BIQgTgLgMgSQgLgTAAgYQAAgXALgTQAMgTATgKQATgKAYAAQASAAANAFQANAGAJAJQAJAJAFAKIgdAOQgFgKgKgGQgKgHgNAAQgOAAgMAHQgLAHgGALQgHAMAAAOQAAAPAHALQAGAMALAHQAMAHAOAAQANAAAKgHQAKgGAFgKIAdAOQgGAKgJAJQgIAJgNAFQgNAGgSAAQgYAAgTgKgAETBPIAAhuIgtBuIgPAAIgthuIAABuIgiAAIAAieIAvAAIAnBfIAnhfIAwAAIAACegAACBPIAAieIBxAAIAAAeIhPAAIAAAiIBNAAIAAAcIhNAAIAAAkIBPAAIAAAegAk0BPIAAieIBUAAQAPAAAKAGQALAGAFAJQAFAJAAALQAAAKgEAIQgEAIgGAEQgGAFgIACQAJABAHAEQAHAFAEAIQAEAJAAAKQAAAMgFAKQgFAKgLAFQgKAGgPAAgAkSAyIAsAAQAJAAAGgFQAFgFAAgJQAAgIgFgFQgFgFgKAAIgsAAgAkSgPIAqAAQAJAAAFgFQAFgEAAgIQAAgIgFgFQgFgEgJgBIgqAAg");
	this.shape.setTransform(-69,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-16.6,206.3,33.3);


(lib.txt201percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AAWBNQgJgFgFgJQgFgJAAgMQAAgLAFgJQAFgJAJgFQAJgGANAAQAMAAAJAGQAJAFAFAJQAFAJAAALQAAAMgFAJQgFAJgJAFQgJAFgMAAQgNAAgJgFgAAeAbQgFAGAAAKQAAAJAFAGQAFAFAJAAQAIAAAFgFQAGgGAAgJQAAgKgGgGQgFgGgIAAQgJAAgFAGgAg6BPIBkieIATAAIhlCegAhAgHQgJgFgFgJQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFANAAQAMAAAJAFQAJAGAFAJQAFAJAAALQAAALgFAJQgFAJgJAFQgJAFgMABQgNgBgJgFgAg4g5QgFAGAAAKQAAAKAFAFQAFAGAJAAQAIAAAFgGQAFgFAAgKQAAgKgFgGQgFgFgIAAQgJAAgFAFg");
	this.shape.setTransform(0.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-16.6,21.8,33.3);


(lib.txt201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhbDHICOlDIjIAAIAAhKIErAAIAAA7IiVFSg");
	this.shape.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-38.5,36.3,77.1);


(lib.txt104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AFDBQIAAifIBKAAQASAAAMAIQAMAGAGAMQAGAMAAAOQAAAOgGAMQgGAJgMAIQgMAGgSAAIgoAAIAAA6gAFlgGIAkAAQAKAAAHgFQAGgGAAgKQAAgKgGgGQgHgGgKAAIgkAAgAC9BQIAAifIBxAAIAAAeIhPAAIAAAiIBNAAIAAAcIhNAAIAAAkIBPAAIAAAfgACBBQIAAhEIhMAAIAABEIgiAAIAAifIAiAAIAAA/IBMAAIAAg/IAiAAIAACfgAgnBQIAAhEIhLAAIAABEIgiAAIAAifIAiAAIAAA/IBLAAIAAg/IAjAAIAACfgAjEBQIgKgbIhEAAIgLAbIgmAAIA9ifIArAAIA+CfgAjXAWIgZhCIgZBCIAyAAgAnCBQIAAifIB1AAIAAAeIhTAAIAAAdIApAAQARAAAMAHQAMAGAGAKQAGAMAAANQAAAPgGALQgGALgMAIQgMAHgRAAgAmgAxIAlAAQAKABAGgGQAGgFAAgLQAAgJgGgGQgGgFgKAAIglAAg");
	this.shape.setTransform(-54.8,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-16.6,206.3,33.3);


(lib.txt103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AHTBNQgKgCgGgGIANgbIAKAGQAFADAGgBQAJAAAEgDQAGgFAEgIIg7hyIAmAAIAoBTIAohTIClAAIAAAeIguAAIAACAIgjAAIAAiAIguAAIAAgdIhBB+QgFAKgHAIQgGAHgKAEQgLAEgOABQgKgBgKgDgAjEBOIgqAAIgwhAIgNAPIAAAxIgiAAIAAieIAiAAIAABHIA5hHIApAAIg/BLIBEBSIAAgbQAIABAFgEQAGgEAFgMQAEgLACgUIAJhQIByAAIAACeIgiAAIAAiAIgwAAIgHA0QgDAZgGAPQgFAQgIAIQgJAJgLADQgKADgMAAgALsBOIAAieIAjAAIAAA5IAoAAQARAAANAHQAMAHAGAKQAGAMAAAOQAAAOgGALQgGAMgMAHQgNAHgRAAgAMPAwIAkAAQAKAAAHgGQAGgGAAgJQAAgLgGgFQgHgGgKAAIgkAAgAGWBOIAAhDIhLAAIAABDIgiAAIAAieIAiAAIAAA/IBLAAIAAg/IAjAAIAACegAD1BOIgwhAIgNAPIAAAxIgiAAIAAieIAiAAIAABHIA5hHIApAAIg/BLIBEBTgABaBOIAAhpIhMBpIgfAAIAAieIAgAAIAABlIBKhlIAjAAIAACegAnABOIAAhuIgtBuIgQAAIgthuIAABuIgiAAIAAieIAwAAIAnBeIAnheIAwAAIAACegArRBOIAAieIBwAAIAAAeIhPAAIAAAiIBOAAIAAAcIhOAAIAAAkIBPAAIAAAegAsNBOIAAg+IgRAFIgSABQgVAAgNgIQgNgHgHgLQgGgOAAgRIAAgtIAiAAIAAAtQABAQAHAGQAIAHAOAAQAJAAAHgBIAPgFIAAhEIAiAAIAACeg");
	this.shape.setTransform(-12.2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-16.6,206.3,33.3);


(lib.txt102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ANOBWQAGgDAFgHQAGgFACgHIgCABIgDAAQgHAAgFgGQgEgEAAgHQAAgJAFgGQAFgFAJAAQAIAAAGAGQAHAHAAALQAAAOgHALQgHAMgLAIgAB4AlQAJABAFgFQAGgEAEgLQAEgLACgTIAKhSIByAAIAACfIgjAAIAAiBIgwAAIgHA2QgDAXgFAQQgGAPgIAJQgIAIgLAEQgLACgMAAgAnSA5QgTgKgMgTQgKgSgBgXQABgZAKgTQAMgSATgKQATgLAZAAQARAAANAFQANAGAJAJQAJAJAFAKIgdAPQgFgKgKgHQgKgGgMgBQgPAAgLAHQgLAHgHAMQgHAMAAAPQAAANAHAMQAHAMALAGQALAHAPAAQAMAAAKgHQAKgGAFgKIAdAOQgFAKgKAJQgIAJgNAFQgNAGgRAAQgZAAgTgKgALKBBIAAifIByAAIAAAeIhPAAIAAAiIBNAAIAAAeIhNAAIAAAiIBPAAIAAAfgAKOBBIAAg+IgQAEIgSACQgUAAgOgIQgNgFgGgOQgHgNAAgSIAAgtIAjAAIAAAtQgBAQAJAGQAHAIAOgBQAIABAJgCIANgEIAAhFIAiAAIAACfgAGyBBIAAifIBwAAIAAAeIhOAAIAACBgAErBBIAAifIByAAIAAAeIhPAAIAAAiIBNAAIAAAeIhNAAIAAAiIBPAAIAAAfgAgVBBIAAiBIguAAIAAgeIB9AAIAAAeIguAAIAACBgAi/BBIAAifIBxAAIAAAeIhPAAIAAAiIBOAAIAAAeIhOAAIAAAiIBPAAIAAAfgAj7BBIAAg+IgQAEIgSACQgVAAgOgIQgMgFgHgOQgGgNgBgSIAAgtIAjAAIAAAtQAAAQAIAGQAIAIANgBQAJABAIgCIAOgEIAAhFIAiAAIAACfgApcBBIgJgbIhEAAIgLAbIgnAAIA+ifIArAAIA+CfgApvAHIgYhCIgZBCIAxAAgAsFBBIAAhCIhMAAIAABCIgiAAIAAifIAiAAIAAA/IBMAAIAAg/IAiAAIAACfg");
	this.shape.setTransform(-11.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-16.6,206.3,33.3);


(lib.txt101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ALjBNQgKgFgFgJQgEgJAAgMQAAgLAEgJQAFgJAKgFQAJgGAMAAQAMAAAKAGQAIAFAFAJQAGAJAAALQAAAMgGAJQgFAJgIAFQgKAFgMAAQgMAAgJgFgALrAbQgGAGAAAKQAAAJAGAGQAEAFAJAAQAJAAAFgFQAFgGAAgJQAAgKgFgGQgFgGgJAAQgJAAgEAGgAkbBPQgJgDgGgFIANgcIAJAGQAGADAGAAQAJAAAFgEQAEgEAFgJIg7hyIAnAAIAnBTIAohTIAnAAIhCB/QgFAKgHAIQgHAHgKAFQgJAEgOAAQgLAAgLgDgAnPA0QAJAAAGgEQAFgEAEgLQAEgLADgVIAKhQIBxAAIAACeIgiAAIAAiAIgxAAIgGA0QgDAZgFAQQgGAPgJAJQgIAIgKADQgLADgNAAgApWBHQgSgKgLgTQgLgSAAgYQAAgXALgTQALgSASgLQAUgKAXAAQAZAAATAKQATALAKASQALATAAAXQAAAYgLASQgKATgTAKQgTALgZAAQgXAAgUgLgApEgsQgLAHgGALQgGAMAAAOQAAAOAGAMQAGAMALAHQALAHAOAAQAPAAALgHQALgHAHgMQAFgMABgOQgBgOgFgMQgHgLgLgHQgLgHgPAAQgOAAgLAHgAKQBPIBmieIATAAIhnCegAIRBPIA5iAIhRAAIAAgeIB5AAIAAAYIg7CGgAE8BPIAAieIAjAAIAAA5IAoAAQARAAANAHQAMAHAGAKQAGAMAAAOQAAAOgGALQgGAMgMAHQgNAHgRAAgAFfAxIAkAAQAKAAAHgFQAGgGAAgKQAAgKgGgGQgHgGgKAAIgkAAgADbBPIAAiAIguAAIAAgeIB/AAIAAAeIguAAIAACAgAB7BPIAAhpIhMBpIghAAIAAieIAiAAIAABmIBKhmIAjAAIAACegAgsBPIAAg9IgRAEIgSABQgUAAgOgHQgNgIgGgLQgHgNAAgSIAAgtIAjAAIAAAtQAAAQAIAGQAHAHAOAAQAJAAAIgBIAOgEIAAhFIAiAAIAACegAqyBPIAAiAIhLAAIAACAIgiAAIAAieICQAAIAACegAKKgHQgIgFgFgJQgGgJAAgLQAAgLAGgJQAFgJAIgGQAKgFAMAAQAMAAAKAFQAIAGAGAJQAEAJAAALQAAALgEAJQgGAJgIAFQgKAFgMABQgMgBgKgFgAKSg5QgFAGAAAKQAAAKAFAFQAFAGAJAAQAIAAAFgGQAFgFABgKQgBgKgFgGQgFgFgIAAQgJAAgFAFg");
	this.shape.setTransform(-19.9,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-16.6,206.3,33.3);


(lib.txt39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AhYDDQgfgLgUgUIAlhBQAQAPATAJQATAHAaABQAfgBAXgQQAWgQALgaQALgZAAgdIAAgJQgOAUgcAPQgbAQggABQglgBgegPQgfgOgTgeQgTgbgBgqQABgoATgeQATgfAjgSQAigSAuAAQA7ABAlAbQAmAcATAuQASAwAAA3QgBA8gWAvQgVAugqAaQgpAag6ABQgkgBgegKgAgqh5QgQAJgJAOQgIANAAAOQAAAVALAOQALANAQAGQASAGASAAQAVAAAUgJQAVgKAPgSQgCgTgIgTQgIgTgTgMQgQgNgbAAQgXABgPAIg");
	this.shape.setTransform(0.3,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-38.5,40.1,77.1);


(lib.txt3percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AAWBNQgJgFgFgJQgFgJAAgMQAAgLAFgJQAFgJAJgFQAJgGANAAQAMAAAJAGQAJAFAFAJQAFAJAAALQAAAMgFAJQgFAJgJAFQgJAFgMAAQgNAAgJgFgAAeAbQgFAGAAAKQAAAJAFAGQAFAFAJAAQAIAAAFgFQAGgGAAgJQAAgKgGgGQgFgGgIAAQgJAAgFAGgAg6BPIBkieIATAAIhlCegAhAgHQgJgFgFgJQgFgJAAgLQAAgLAFgJQAFgJAJgGQAJgFANAAQAMAAAJAFQAJAGAFAJQAFAJAAALQAAALgFAJQgFAJgJAFQgJAFgMABQgNgBgJgFgAg4g5QgFAGAAAKQAAAKAFAFQAFAGAJAAQAIAAAFgGQAFgFAAgKQAAgKgFgGQgFgFgIAAQgJAAgFAFg");
	this.shape.setTransform(0.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-16.6,21.8,33.3);


(lib.redline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("EhFrABjQgHAAgEgEQgEgEAAgHIAAinQAAgHAEgEQAEgEAHAAMCLYAAAQAGAAAEAEQAEAEAAAHIAACnQAAAHgEAEQgEAEgGAAg");
	this.shape.setTransform(0.2,-0.6,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-4,304.4,6.8);


(lib.RED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhFrABjQgHAAgEgEQgEgEAAgHIAAinQAAgHAEgEQAEgEAHAAMCLYAAAQAGAAAEAEQAEAEAAAHIAACnQAAAHgEAEQgEAEgGAAg");
	this.shape.setTransform(177.2,139.4,0.34,0.34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBJIAAhjIhDBjIgeAAIAAiRIAgAAIAABhIBBhhIAgAAIAACRg");
	this.shape_1.setTransform(30.9,182.2,0.34,0.34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIAxQAKAAAFgMQAGgMADgbIAJhIIBwAAIAACRIggAAIAAh1Ig0AAIgEAuQgFAogNARQgOASgZAAg");
	this.shape_2.setTransform(24.7,182.2,0.34,0.34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzA3QgVgUAAgjQAAgfAVgWQAVgXAfAAQAgAAAUAXQAUAXAAAhIAAAHIhwAAQACARANAMQAMAMATAAQALAAALgFQALgDAIgIIAPAVQgWAVgmAAQggAAgWgWgAgbgmQgLAMgBAQIBRAAQgBgQgKgLQgLgMgTAAQgSAAgKALg");
	this.shape_3.setTransform(19.2,182.2,0.34,0.34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApBcIAAgmIhxAAIAAiRIAgAAIAAB1IBBAAIAAh1IAgAAIAAB1IAQAAIAABCg");
	this.shape_4.setTransform(13.6,182.8,0.34,0.34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBJIgrg9IgUAWIAAAnIghAAIAAiRIAhAAIAABHIA+hHIAoAAIg9BCIA/BPg");
	this.shape_5.setTransform(5.3,182.2,0.34,0.34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1A3QgVgXAAggQAAgfAVgWQAUgXAhAAQAiAAAVAXQAUAXAAAeQAAAggUAXQgVAWgiAAQghAAgUgWgAgeghQgLAOAAATQAAAVALANQAMAPASAAQATAAAMgPQALgOAAgUQAAgTgLgOQgMgOgTAAQgRAAgNAOg");
	this.shape_6.setTransform(-3.4,182.2,0.34,0.34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAyBJIAAhkIgsBkIgLAAIgshkIAABkIggAAIAAiRIApAAIAoBdIAnhdIArAAIAACRg");
	this.shape_7.setTransform(-9.9,182.2,0.34,0.34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAjBJIAAg2IgiAAIgeA2IglAAIAlg3QgQgDgJgMQgKgJAAgTQAAgUANgOQANgNAXAAIBSAAIAACRgAgagnQgGAGAAAIQAAAIAGAFQAFAGAKgBIAuAAIAAglIguAAQgKAAgFAFg");
	this.shape_8.setTransform(-16.4,182.2,0.34,0.34);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHBnIAAjJIAgAAIAAAUQASgYAcAAQAdAAASAVQASAVAAAkQAAAhgSAVQgSAUgdAAQgcABgSgYIAABMgAgWhEQgKAFgHAKIAAA3QAGAJALAGQAKAFALAAQARAAALgNQAMgNAAgUQAAgWgMgOQgLgOgRAAQgLABgKAFg");
	this.shape_9.setTransform(-22,183,0.34,0.34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA0BlIAAiqIhnAAIAACqIgkAAIAAjJICvAAIAADJg");
	this.shape_10.setTransform(-28.9,181.2,0.34,0.34);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AltSEIAAhcQgWAMggAAQgvAAgagiQgagiAAhBQAAhEAdgiQAcghA1AAQAaAAARAJIAAhuIBDAAIAABuQARgJAaAAQBvAAAACFQAABAgcAkQgbAjgsAAQghAAgWgMIAABcgAkWNiQgJABgLAFIAACOQASAFARABQAXAAANgWQANgUAAglQAAhNguABIgSABgAnBOvQAABMAxABQARgBASgFIAAiOQgLgFgJgBIgSgBQguAAAABOgAFsQiIAAlSQATgFAfgFQAhgEAXAAQA6AAAuAKIgCA1QgmgFgoAAQgkAAgXAEIAABbQAegHAYAAQA5AAAeAfQAcAcAAAxQAAA3ghAgQghAfg/AAQg4AAg3gUgAGzOSIAABnQASAFAaAAQAZAAAPgQQAOgOAAgaQAAg2g2gCIgFAAQgUAAgTAEgAKPQhQgZgVAAgmQAAgpAagXQAbgXAyAAQARAAARAFIAAgMQAAgagIgHQgJgIghAAQgWABgfAFIgKgzQAogJAvgBQAgAAASAHQASAGAKAPQAIALADAMQAEAPAAAbIAABFQAAAaAEAPQAFAQANAUIgrAdQgFgBgHgGQgJgHgFgHQgLAIgMAFQgYAKgagBQgkABgXgVgALFPCQgNAJAAASQAAAjAmgBQATAAARgGQgDgLAAgeIAAgSQgGgDgOAAQgaAAgMAHgAhdQhQgZgVAAgmQAAgpAagXQAbgXAyAAQAQAAAQAFIAAgMQAAgagIgHQgJgIgfAAQgVABggAFIgKgzQAogJAvgBQAeAAASAHQASAGALAPQAHALADAMQAEAPAAAbIAABFQAAAaAEAPQAFAQANAUIgrAdQgEgBgIgGQgJgHgEgHQgOAJgKAEQgVAKgbgBQgkABgXgVgAglPCQgNAJAAASQAAAjAmgBQARAAARgGQgEgLAAgeIAAgSQgGgDgMAAQgZAAgMAHgArxQiIABj1IBDAAIAABTQAdgGAOAAQAvAAAaAYQAZAXAAAqQAAAvgcAZQgdAag1AAQg1AAgugTgAqtO0IAABKQAOADAPAAQAXAAAKgMQAJgKAAgUQAAgogqAAQgJAAgUAFgAwMQNQAOgJAJgWQAEgMAAgrIAAh/QA0gQAyAAQAyAAA1AQIAAD4IhEAAIAAjKQgZgEgKABQgLgBgZAEIAABdQAAA2gRAZQgPAXgqALgAUaQwQgXg4gMgYQgIgRgFgEQgGgEgOAAIgJAAIAABpIhDAAIAAkBIBDAAIAABhIAMAAQAMAAAFgFQAEgDAFgLIASglQAMgYAGgGQANgOAYgBQASgBANACIgDAuQgJgCgHAGQgIAHgOAdQgIATgJAIQgJAIgLACIAAABQAPADAJALQAIAHAJASIAtBhgAQLQwIAAhpIhMAAIAABpIhEAAIAAkBIBEAAIAABhIBMAAIAAhhIBEAAIAAEBgAxsQwIgVhHIiBAAIgWBHIhKAAIB8lnQAWgHAQAAQAZAAATAHIB2FngAzvOtIBcAAIgrifIgCAAgADBPOQgMgNAAgSQAAgSAMgMQANgNASAAQASAAAMANQANAMAAASQAAASgNANQgMAMgSAAQgSAAgNgMgAm8ErQgGAAgEgEQgFgFAAgGIAAikQAAgHAFgDQAEgFAGAAIOHAAQAGAAAFAFQAEADAAAHIAACkQAAAGgEAFQgFAEgGAAgAENi0QgFgCgCgGIhBiyIl7AAIhBCyQgCAGgFACQgFADgGgCIiWg6QgGgCgDgGQgCgGACgFIEUr0QAYhEAbgeQAngsBBgBQBCABAnAsQAaAdAZBFIEUL0QACAEgCAGQgCAHgGACIiXA6IgFABIgGgCgAhwoMID+AAIh/l9IgCAAg");
	this.shape_11.setTransform(-0.1,132.3,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EF3124").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,449.4,400);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal();
	this.instance.setTransform(-100,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-110,200,220);


(lib.butt_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ОФОРМИТЬ copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AoQBNQgTgMgLgUQgLgUAAgZQAAgZALgTQALgVATgMQATgLAbAAQAZAAAUALQASAMAMAVQAKATAAAZQAAAZgKAUQgMAUgSAMQgUAMgZAAQgbAAgTgMgAoEg8QgOAKgJAPQgHAQgBATQABATAHARQAJAPAOAKQANAIAVABQATgBAOgIQAPgKAHgPQAIgRAAgTQAAgTgIgQQgHgPgPgKQgOgJgTAAQgVAAgNAJgAG+BWIAAisIAVAAIAABGIAwAAQARgBANAIQAMAGAGALQAHAMAAAOQAAAOgHAMQgGAMgMAHQgNAHgRAAgAHTBCIAtAAQAQAAAJgJQAKgIAAgPQAAgPgKgJQgJgJgQgBIgtAAgAFUBWIAAiYIg3AAIAAgUICEAAIAAAUIg3AAIAACYgADrBWIAAisIAWAAIAACsgABdBWIAAisIAVAAIAABGIAwAAQARgBANAIQAMAGAGALQAHAMgBAOQABAOgHAMQgGAMgMAHQgNAHgRAAgAByBCIAtAAQAQAAAKgJQAJgIAAgPQAAgPgJgJQgKgJgQgBIgtAAgAg6BWIAAisIBDAAQASABAMAHQAMAHAHALQAGAMAAAPQAAAOgGAMQgHAJgMAIQgMAHgSAAIguAAIAABFgAglAAIAsAAQAQgBAJgIQAJgJAAgPQAAgPgJgJQgJgJgQAAIgsAAgAhuBWIhBhOIgSATIAAA7IgWAAIAAisIAWAAIAABYIBMhYIAbAAIhIBTIBPBZgAlABWIAAiYIg2AAIAAgUICDAAIAAAUIg3AAIAACYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E63428").ss(1,1,1).p("AtTjBIanAAIAAGDI6nAAg");
	this.shape_1.setTransform(0.3,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtTDBIAAmBIanAAIAAGBg");
	this.shape_2.setTransform(0.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-20,172.5,40.8);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ОФОРМИТЬ copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoQBNQgTgMgLgUQgLgUAAgZQAAgZALgTQALgVATgMQATgLAbAAQAZAAAUALQASAMAMAVQAKATAAAZQAAAZgKAUQgMAUgSAMQgUAMgZAAQgbAAgTgMgAoEg8QgOAKgJAPQgHAQgBATQABATAHARQAJAPAOAKQANAIAVABQATgBAOgIQAPgKAHgPQAIgRAAgTQAAgTgIgQQgHgPgPgKQgOgJgTAAQgVAAgNAJgAG+BWIAAisIAVAAIAABGIAwAAQARgBANAIQAMAGAGALQAHAMAAAOQAAAOgHAMQgGAMgMAHQgNAHgRAAgAHTBCIAtAAQAQAAAJgJQAKgIAAgPQAAgPgKgJQgJgJgQgBIgtAAgAFUBWIAAiYIg3AAIAAgUICEAAIAAAUIg3AAIAACYgADrBWIAAisIAWAAIAACsgABdBWIAAisIAVAAIAABGIAwAAQARgBANAIQAMAGAGALQAHAMgBAOQABAOgHAMQgGAMgMAHQgNAHgRAAgAByBCIAtAAQAQAAAKgJQAJgIAAgPQAAgPgJgJQgKgJgQgBIgtAAgAg6BWIAAisIBDAAQASABAMAHQAMAHAHALQAGAMAAAPQAAAOgGAMQgHAJgMAIQgMAHgSAAIguAAIAABFgAglAAIAsAAQAQgBAJgIQAJgJAAgPQAAgPgJgJQgJgJgQAAIgsAAgAhuBWIhBhOIgSATIAAA7IgWAAIAAisIAWAAIAABYIBMhYIAbAAIhIBTIBPBZgAlABWIAAiYIg2AAIAAgUICDAAIAAAUIg3AAIAACYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E63428").ss(1,1,1).p("AtTjBIanAAIAAGDI6nAAg");
	this.shape_1.setTransform(0.3,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E63428").s().p("AtTDBIAAmBIanAAIAAGBg");
	this.shape_2.setTransform(0.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-20,172.5,40.8);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.alfalogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("AAhBJIAAhjIhDBjIgeAAIAAiRIAgAAIAABhIBBhhIAgAAIAACRg");
	this.shape.setTransform(30.9,42.2,0.34,0.34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF2D1E").s().p("AhIAxQAKAAAFgMQAGgMADgbIAJhIIBwAAIAACRIggAAIAAh1Ig0AAIgEAuQgFAogNARQgOASgZAAg");
	this.shape_1.setTransform(24.7,42.2,0.34,0.34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF2D1E").s().p("AgzA3QgVgUAAgjQAAgfAVgWQAVgXAfAAQAgAAAUAXQAUAXAAAhIAAAHIhwAAQACARANAMQAMAMATAAQALAAALgFQALgDAIgIIAPAVQgWAVgmAAQggAAgWgWgAgbgmQgLAMgBAQIBRAAQgBgQgKgLQgLgMgTAAQgSAAgKALg");
	this.shape_2.setTransform(19.2,42.2,0.34,0.34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF2D1E").s().p("AApBcIAAgmIhxAAIAAiRIAgAAIAAB1IBBAAIAAh1IAgAAIAAB1IAQAAIAABCg");
	this.shape_3.setTransform(13.6,42.8,0.34,0.34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF2D1E").s().p("AAcBJIgrg9IgUAWIAAAnIghAAIAAiRIAhAAIAABHIA+hHIAoAAIg9BCIA/BPg");
	this.shape_4.setTransform(5.3,42.2,0.34,0.34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF2D1E").s().p("Ag1A3QgVgXAAggQAAgfAVgWQAUgXAhAAQAiAAAVAXQAUAXAAAeQAAAggUAXQgVAWgiAAQghAAgUgWgAgeghQgLAOAAATQAAAVALANQAMAPASAAQATAAAMgPQALgOAAgUQAAgTgLgOQgMgOgTAAQgRAAgNAOg");
	this.shape_5.setTransform(-3.4,42.2,0.34,0.34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF2D1E").s().p("AAyBJIAAhkIgsBkIgLAAIgshkIAABkIggAAIAAiRIApAAIAoBdIAnhdIArAAIAACRg");
	this.shape_6.setTransform(-9.9,42.2,0.34,0.34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF2D1E").s().p("AAjBJIAAg2IgiAAIgeA2IglAAIAlg3QgQgDgJgMQgKgJAAgTQAAgUANgOQANgNAXAAIBSAAIAACRgAgagnQgGAGAAAIQAAAIAGAFQAFAGAKgBIAuAAIAAglIguAAQgKAAgFAFg");
	this.shape_7.setTransform(-16.4,42.2,0.34,0.34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF2D1E").s().p("AhHBnIAAjJIAgAAIAAAUQASgYAcAAQAdAAASAVQASAVAAAkQAAAhgSAVQgSAUgdAAQgcABgSgYIAABMgAgWhEQgKAFgHAKIAAA3QAGAJALAGQAKAFALAAQARAAALgNQAMgNAAgUQAAgWgMgOQgLgOgRAAQgLABgKAFg");
	this.shape_8.setTransform(-22,43,0.34,0.34);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF2D1E").s().p("AA0BlIAAiqIhnAAIAACqIgkAAIAAjJICvAAIAADJg");
	this.shape_9.setTransform(-28.9,41.2,0.34,0.34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF2D1E").s().p("AltSEIAAhcQgWAMggAAQgvAAgagiQgagiAAhBQAAhEAdgiQAcghA1AAQAaAAARAJIAAhuIBDAAIAABuQARgJAaAAQBvAAAACFQAABAgcAkQgbAjgsAAQghAAgWgMIAABcgAkWNiQgJABgLAFIAACOQASAFARABQAXAAANgWQANgUAAglQAAhNguABIgSABgAnBOvQAABMAxABQARgBASgFIAAiOQgLgFgJgBIgSgBQguAAAABOgAFsQiIAAlSQATgFAfgFQAhgEAXAAQA6AAAuAKIgCA1QgmgFgoAAQgkAAgXAEIAABbQAegHAYAAQA5AAAeAfQAcAcAAAxQAAA3ghAgQghAfg/AAQg4AAg3gUgAGzOSIAABnQASAFAaAAQAZAAAPgQQAOgOAAgaQAAg2g2gCIgFAAQgUAAgTAEgAKPQhQgZgVAAgmQAAgpAagXQAbgXAyAAQARAAARAFIAAgMQAAgagIgHQgJgIghAAQgWABgfAFIgKgzQAogJAvgBQAgAAASAHQASAGAKAPQAIALADAMQAEAPAAAbIAABFQAAAaAEAPQAFAQANAUIgrAdQgFgBgHgGQgJgHgFgHQgLAIgMAFQgYAKgagBQgkABgXgVgALFPCQgNAJAAASQAAAjAmgBQATAAARgGQgDgLAAgeIAAgSQgGgDgOAAQgaAAgMAHgAhdQhQgZgVAAgmQAAgpAagXQAbgXAyAAQAQAAAQAFIAAgMQAAgagIgHQgJgIgfAAQgVABggAFIgKgzQAogJAvgBQAeAAASAHQASAGALAPQAHALADAMQAEAPAAAbIAABFQAAAaAEAPQAFAQANAUIgrAdQgEgBgIgGQgJgHgEgHQgOAJgKAEQgVAKgbgBQgkABgXgVgAglPCQgNAJAAASQAAAjAmgBQARAAARgGQgEgLAAgeIAAgSQgGgDgMAAQgZAAgMAHgArxQiIABj1IBDAAIAABTQAdgGAOAAQAvAAAaAYQAZAXAAAqQAAAvgcAZQgdAag1AAQg1AAgugTgAqtO0IAABKQAOADAPAAQAXAAAKgMQAJgKAAgUQAAgogqAAQgJAAgUAFgAwMQNQAOgJAJgWQAEgMAAgrIAAh/QA0gQAyAAQAyAAA1AQIAAD4IhEAAIAAjKQgZgEgKABQgLgBgZAEIAABdQAAA2gRAZQgPAXgqALgAUaQwQgXg4gMgYQgIgRgFgEQgGgEgOAAIgJAAIAABpIhDAAIAAkBIBDAAIAABhIAMAAQAMAAAFgFQAEgDAFgLIASglQAMgYAGgGQANgOAYgBQASgBANACIgDAuQgJgCgHAGQgIAHgOAdQgIATgJAIQgJAIgLACIAAABQAPADAJALQAIAHAJASIAtBhgAQLQwIAAhpIhMAAIAABpIhEAAIAAkBIBEAAIAABhIBMAAIAAhhIBEAAIAAEBgAxsQwIgVhHIiBAAIgWBHIhKAAIB8lnQAWgHAQAAQAZAAATAHIB2FngAzvOtIBcAAIgrifIgCAAgADBPOQgMgNAAgSQAAgSAMgMQANgNASAAQASAAAMANQANAMAAASQAAASgNANQgMAMgSAAQgSAAgNgMgAm8ErQgGAAgEgEQgFgFAAgGIAAikQAAgHAFgDQAEgFAGAAIOHAAQAGAAAFAFQAEADAAAHIAACkQAAAGgEAFQgFAEgGAAgAENi0QgFgCgCgGIhBiyIl7AAIhBCyQgCAGgFACQgFADgGgCIiWg6QgGgCgDgGQgCgGACgFIEUr0QAYhEAbgeQAngsBBgBQBCABAnAsQAaAdAZBFIEUL0QACAEgCAGQgCAHgGACIiXA6IgFABIgGgCgAhwoMID+AAIh/l9IgCAAg");
	this.shape_10.setTransform(-0.1,-7.7,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-47,93.8,93.6);


(lib.TXT4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Line
	this.instance = new lib.redline();
	this.instance.setTransform(-286.9,-10.6,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-286.4},0).wait(1).to({x:-285.1},0).wait(1).to({x:-282.6},0).wait(1).to({x:-278.9},0).wait(1).to({x:-274.4},0).wait(1).to({x:-269.9},0).wait(1).to({x:-266.5},0).wait(1).to({x:-264.3},0).wait(1).to({x:-263.1},0).wait(1).to({regX:0.1,x:-262.9},0).wait(65).to({regX:0.2},0).wait(1).to({x:-263.4},0).wait(1).to({x:-264.3},0).wait(1).to({x:-265.4},0).wait(1).to({x:-266.8},0).wait(1).to({x:-268.5},0).wait(1).to({x:-270.6},0).wait(1).to({x:-273.2},0).wait(1).to({x:-276.7},0).wait(1).to({regX:0.1,x:-282.9},0).to({_off:true},1).wait(11));

	// txt402
	this.instance_1 = new lib.txt402();
	this.instance_1.setTransform(-15,-7.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({regX:1.1,regY:-0.7,x:-13.9,y:1.7,alpha:0.413},0).wait(1).to({y:6,alpha:0.6},0).wait(1).to({y:8.9,alpha:0.724},0).wait(1).to({y:10.9,alpha:0.812},0).wait(1).to({y:12.5,alpha:0.878},0).wait(1).to({y:13.6,alpha:0.926},0).wait(1).to({y:14.4,alpha:0.96},0).wait(1).to({y:14.9,alpha:0.983},0).wait(1).to({y:15.2,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:-15,y:16,alpha:1},0).wait(60).to({regX:1.1,regY:-0.7,x:-13.9,y:15.5,alpha:0.995},0).wait(1).to({y:16,alpha:0.978},0).wait(1).to({y:16.9,alpha:0.95},0).wait(1).to({y:18.2,alpha:0.909},0).wait(1).to({y:20,alpha:0.852},0).wait(1).to({y:22.5,alpha:0.776},0).wait(1).to({y:25.6,alpha:0.677},0).wait(1).to({y:29.9,alpha:0.543},0).wait(1).to({y:36,alpha:0.353},0).wait(1).to({regX:0,regY:0,x:-15,y:48,alpha:0},0).to({_off:true},1).wait(11));

	// txt401
	this.instance_2 = new lib.txt401();
	this.instance_2.setTransform(0,-34.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1).to({regX:0.1,regY:-2.9,x:0.1,y:-27.5,alpha:0.413},0).wait(1).to({y:-23.1,alpha:0.6},0).wait(1).to({y:-20.3,alpha:0.724},0).wait(1).to({y:-18.2,alpha:0.812},0).wait(1).to({y:-16.7,alpha:0.878},0).wait(1).to({y:-15.6,alpha:0.926},0).wait(1).to({y:-14.8,alpha:0.96},0).wait(1).to({y:-14.2,alpha:0.983},0).wait(1).to({y:-13.9,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:-11,alpha:1},0).wait(64).to({regX:0.1,regY:-2.9,x:0.1,y:-13.7,alpha:0.995},0).wait(1).to({y:-13.2,alpha:0.978},0).wait(1).to({y:-12.3,alpha:0.95},0).wait(1).to({y:-10.9,alpha:0.909},0).wait(1).to({y:-9.1,alpha:0.852},0).wait(1).to({y:-6.7,alpha:0.776},0).wait(1).to({y:-3.5,alpha:0.677},0).wait(1).to({y:0.7,alpha:0.543},0).wait(1).to({y:6.8,alpha:0.353},0).wait(1).to({regX:0,regY:0,x:0,y:21,alpha:0},0).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-439,-14,304.4,6.8);


(lib.TXT3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.redline();
	this.instance.setTransform(-245.5,-9.6,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-245},0).wait(1).to({x:-243.9},0).wait(1).to({x:-241.7},0).wait(1).to({x:-238.2},0).wait(1).to({x:-233.7},0).wait(1).to({x:-229.6},0).wait(1).to({x:-226.7},0).wait(1).to({x:-224.9},0).wait(1).to({x:-224},0).wait(1).to({regX:0.1,x:-223.9},0).wait(40).to({regX:0.2},0).wait(1).to({x:-224.2},0).wait(1).to({x:-224.8},0).wait(1).to({x:-225.7},0).wait(1).to({x:-226.9},0).wait(1).to({x:-228.4},0).wait(1).to({x:-230.5},0).wait(1).to({x:-233.2},0).wait(1).to({x:-237},0).wait(1).to({regX:0.1,x:-243.9},0).to({_off:true},1).wait(13));

	// txt303
	this.instance_1 = new lib.txt303();
	this.instance_1.setTransform(0,17.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(1).to({regX:0.7,regY:0.2,x:0.7,y:27.5,alpha:0.387},0).wait(1).to({y:32.3,alpha:0.575},0).wait(1).to({y:35.6,alpha:0.703},0).wait(1).to({y:38,alpha:0.797},0).wait(1).to({y:39.8,alpha:0.867},0).wait(1).to({y:41.1,alpha:0.919},0).wait(1).to({y:42.1,alpha:0.956},0).wait(1).to({y:42.7,alpha:0.981},0).wait(1).to({y:43.1,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0,y:43,alpha:1},0).wait(34).to({regX:0.7,regY:0.2,x:0.7,y:43.4,alpha:0.992},0).wait(1).to({y:44,alpha:0.97},0).wait(1).to({y:45,alpha:0.934},0).wait(1).to({y:46.3,alpha:0.884},0).wait(1).to({y:48.1,alpha:0.82},0).wait(1).to({y:50.3,alpha:0.741},0).wait(1).to({y:53,alpha:0.641},0).wait(1).to({y:56.4,alpha:0.514},0).wait(1).to({y:61.2,alpha:0.34},0).wait(1).to({regX:0,regY:0,x:0,y:70.2,alpha:0},0).to({_off:true},1).wait(13));

	// txt302
	this.instance_2 = new lib.txt302();
	this.instance_2.setTransform(-19,-9.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1).to({regX:0.8,regY:-0.7,x:-18.2,y:-0.4,alpha:0.387},0).wait(1).to({y:4.4,alpha:0.575},0).wait(1).to({y:7.7,alpha:0.703},0).wait(1).to({y:10.1,alpha:0.797},0).wait(1).to({y:11.9,alpha:0.867},0).wait(1).to({y:13.2,alpha:0.919},0).wait(1).to({y:14.2,alpha:0.956},0).wait(1).to({y:14.8,alpha:0.981},0).wait(1).to({y:15.2,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:-19,y:16,alpha:1},0).wait(38).to({regX:0.8,regY:-0.7,x:-18.2,y:15.5,alpha:0.992},0).wait(1).to({y:16.1,alpha:0.97},0).wait(1).to({y:17.1,alpha:0.934},0).wait(1).to({y:18.4,alpha:0.884},0).wait(1).to({y:20.2,alpha:0.82},0).wait(1).to({y:22.4,alpha:0.741},0).wait(1).to({y:25.1,alpha:0.641},0).wait(1).to({y:28.5,alpha:0.514},0).wait(1).to({y:33.3,alpha:0.34},0).wait(1).to({regX:0,regY:0,x:-19,y:43.2,alpha:0},0).to({_off:true},1).wait(11));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlhD8IAAn3ILDAAIAAH3g");
	mask.setTransform(-8,-22.6);

	// txt39
	this.instance_3 = new lib.txt39();
	this.instance_3.setTransform(-8,-69.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(1).to({regX:0.3,regY:-1.3,x:-7.7,y:-52.2,alpha:0.387},0).wait(1).to({y:-43,alpha:0.575},0).wait(1).to({y:-36.8,alpha:0.703},0).wait(1).to({y:-32.2,alpha:0.797},0).wait(1).to({y:-28.8,alpha:0.867},0).wait(1).to({y:-26.2,alpha:0.919},0).wait(1).to({y:-24.4,alpha:0.956},0).wait(1).to({y:-23.2,alpha:0.981},0).wait(1).to({y:-22.5,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:-8,y:-21,alpha:1},0).wait(47).to({regX:0.3,regY:-1.3,x:-7.7,y:-21.9,alpha:0.992},0).wait(1).to({y:-20.8,alpha:0.97},0).wait(1).to({y:-19.1,alpha:0.934},0).wait(1).to({y:-16.7,alpha:0.884},0).wait(1).to({y:-13.6,alpha:0.82},0).wait(1).to({y:-9.8,alpha:0.741},0).wait(1).to({y:-5,alpha:0.641},0).wait(1).to({y:1,alpha:0.514},0).wait(1).to({y:9.4,alpha:0.34},0).wait(1).to({regX:0,regY:0,x:-8,y:27,alpha:0},0).to({_off:true},1).wait(4));

	// txt3percent
	this.instance_4 = new lib.txt3percent();
	this.instance_4.setTransform(21,-35.6);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0.5,regY:-0.7,x:21.5,y:-26.3,alpha:0.387},0).wait(1).to({y:-21.5,alpha:0.575},0).wait(1).to({y:-18.3,alpha:0.703},0).wait(1).to({y:-15.9,alpha:0.797},0).wait(1).to({y:-14.1,alpha:0.867},0).wait(1).to({y:-12.7,alpha:0.919},0).wait(1).to({y:-11.8,alpha:0.956},0).wait(1).to({y:-11.1,alpha:0.981},0).wait(1).to({y:-10.8,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:21,y:-10,alpha:1},0).wait(44).to({regX:0.5,regY:-0.7,x:21.5,y:-10.4,alpha:0.992},0).wait(1).to({y:-9.8,alpha:0.97},0).wait(1).to({y:-8.8,alpha:0.934},0).wait(1).to({y:-7.5,alpha:0.884},0).wait(1).to({y:-5.8,alpha:0.82},0).wait(1).to({y:-3.6,alpha:0.741},0).wait(1).to({y:-0.9,alpha:0.641},0).wait(1).to({y:2.5,alpha:0.514},0).wait(1).to({y:7.3,alpha:0.34},0).wait(1).to({regX:0,regY:0,x:21,y:17.2,alpha:0},0).to({_off:true},1).wait(9));

	// txt301
	this.instance_5 = new lib.txt301();
	this.instance_5.setTransform(-47,-35.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0.1,regY:0.6,x:-46.9,y:-25,alpha:0.387},0).wait(1).to({y:-20.2,alpha:0.575},0).wait(1).to({y:-17,alpha:0.703},0).wait(1).to({y:-14.6,alpha:0.797},0).wait(1).to({y:-12.8,alpha:0.867},0).wait(1).to({y:-11.4,alpha:0.919},0).wait(1).to({y:-10.5,alpha:0.956},0).wait(1).to({y:-9.8,alpha:0.981},0).wait(1).to({y:-9.5,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:-47,y:-10,alpha:1},0).wait(44).to({regX:0.1,regY:0.6,x:-46.9,y:-9.1,alpha:0.992},0).wait(1).to({y:-8.5,alpha:0.97},0).wait(1).to({y:-7.5,alpha:0.934},0).wait(1).to({y:-6.2,alpha:0.884},0).wait(1).to({y:-4.5,alpha:0.82},0).wait(1).to({y:-2.3,alpha:0.741},0).wait(1).to({y:0.4,alpha:0.641},0).wait(1).to({y:3.8,alpha:0.514},0).wait(1).to({y:8.6,alpha:0.34},0).wait(1).to({regX:0,regY:0,x:-47,y:17.2,alpha:0},0).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397.6,-44.6,427.6,38.4);


(lib.TXT2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Line
	this.instance = new lib.redline();
	this.instance.setTransform(-283.9,2.4,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-283.4},0).wait(1).to({x:-282.1},0).wait(1).to({x:-279.6},0).wait(1).to({x:-275.9},0).wait(1).to({x:-271.4},0).wait(1).to({x:-266.9},0).wait(1).to({x:-263.5},0).wait(1).to({x:-261.3},0).wait(1).to({x:-260.1},0).wait(1).to({regX:0.1,x:-259.9},0).wait(40).to({regX:0.2},0).wait(1).to({x:-260.3},0).wait(1).to({x:-261},0).wait(1).to({x:-262},0).wait(1).to({x:-263.4},0).wait(1).to({x:-265},0).wait(1).to({x:-267.2},0).wait(1).to({x:-269.9},0).wait(1).to({x:-273.5},0).wait(1).to({regX:0.1,x:-279.9},0).to({_off:true},1).wait(11));

	// txt204
	this.instance_1 = new lib.txt204();
	this.instance_1.setTransform(0,35.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:-51.9,regY:0.6,x:-51.9,y:46.7,alpha:0.471},0).wait(1).to({y:50.9,alpha:0.658},0).wait(1).to({y:53.6,alpha:0.776},0).wait(1).to({y:55.4,alpha:0.858},0).wait(1).to({y:56.7,alpha:0.915},0).wait(1).to({y:57.6,alpha:0.955},0).wait(1).to({y:58.2,alpha:0.981},0).wait(1).to({y:58.5,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0,y:58,alpha:1},0).wait(37).to({regX:-51.9,regY:0.6,x:-51.9,y:58.7,alpha:0.996},0).wait(1).to({y:59.1,alpha:0.982},0).wait(1).to({y:59.8,alpha:0.958},0).wait(1).to({y:60.8,alpha:0.922},0).wait(1).to({y:62.2,alpha:0.871},0).wait(1).to({y:64.2,alpha:0.801},0).wait(1).to({y:66.8,alpha:0.706},0).wait(1).to({y:70.5,alpha:0.574},0).wait(1).to({y:76,alpha:0.38},0).wait(1).to({regX:0,regY:0,x:0,y:86,alpha:0},0).to({_off:true},1).wait(11));

	// txt203
	this.instance_2 = new lib.txt203();
	this.instance_2.setTransform(0,7.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:-35.5,regY:-0.7,x:-35.5,y:17.4,alpha:0.471},0).wait(1).to({y:21.6,alpha:0.658},0).wait(1).to({y:24.3,alpha:0.776},0).wait(1).to({y:26.1,alpha:0.858},0).wait(1).to({y:27.4,alpha:0.915},0).wait(1).to({y:28.3,alpha:0.955},0).wait(1).to({y:28.9,alpha:0.981},0).wait(1).to({y:29.2,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0,y:30,alpha:1},0).wait(41).to({regX:-35.5,regY:-0.7,x:-35.5,y:29.4,alpha:0.996},0).wait(1).to({y:29.8,alpha:0.982},0).wait(1).to({y:30.5,alpha:0.958},0).wait(1).to({y:31.5,alpha:0.922},0).wait(1).to({y:32.9,alpha:0.871},0).wait(1).to({y:34.9,alpha:0.801},0).wait(1).to({y:37.5,alpha:0.706},0).wait(1).to({y:41.2,alpha:0.574},0).wait(1).to({y:46.7,alpha:0.38},0).wait(1).to({regX:0,regY:0,x:0,y:58,alpha:0},0).to({_off:true},1).wait(9));

	// txt202
	this.instance_3 = new lib.txt202();
	this.instance_3.setTransform(0,-19.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-69,regY:-0.7,x:-69,y:-9.5,alpha:0.471},0).wait(1).to({y:-5.3,alpha:0.658},0).wait(1).to({y:-2.7,alpha:0.776},0).wait(1).to({y:-0.8,alpha:0.858},0).wait(1).to({y:0.4,alpha:0.915},0).wait(1).to({y:1.3,alpha:0.955},0).wait(1).to({y:1.9,alpha:0.981},0).wait(1).to({y:2.2,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0,y:3,alpha:1},0).wait(45).to({regX:-69,regY:-0.7,x:-69,y:2.4,alpha:0.996},0).wait(1).to({y:2.8,alpha:0.982},0).wait(1).to({y:3.5,alpha:0.958},0).wait(1).to({y:4.5,alpha:0.922},0).wait(1).to({y:5.9,alpha:0.871},0).wait(1).to({y:7.9,alpha:0.801},0).wait(1).to({y:10.5,alpha:0.706},0).wait(1).to({y:14.2,alpha:0.574},0).wait(1).to({y:19.7,alpha:0.38},0).wait(1).to({regX:0,regY:0,x:0,y:31,alpha:0},0).to({_off:true},1).wait(7));

	// txt201percent
	this.instance_4 = new lib.txt201percent();
	this.instance_4.setTransform(-32,-24);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.7,x:-46.5,y:-24.7,alpha:0.471},0).wait(1).to({x:-52.5,alpha:0.658},0).wait(1).to({x:-56.3,alpha:0.776},0).wait(1).to({x:-58.9,alpha:0.858},0).wait(1).to({x:-60.7,alpha:0.915},0).wait(1).to({x:-62,alpha:0.955},0).wait(1).to({x:-62.8,alpha:0.981},0).wait(1).to({x:-63.3,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:-64,y:-24,alpha:1},0).wait(45).to({regX:0.5,regY:-0.7,x:-63.5,y:-24.4,alpha:0.996},0).wait(1).to({y:-23.8,alpha:0.982},0).wait(1).to({y:-22.6,alpha:0.958},0).wait(1).to({y:-20.9,alpha:0.922},0).wait(1).to({y:-18.4,alpha:0.871},0).wait(1).to({y:-15.1,alpha:0.801},0).wait(1).to({y:-10.5,alpha:0.706},0).wait(1).to({y:-4.2,alpha:0.574},0).wait(1).to({y:5.1,alpha:0.38},0).wait(1).to({regX:0,regY:0,x:-64,y:24,alpha:0},0).to({_off:true},1).wait(5));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoaCjIAAnSIIgAAIAAHSg");
	mask.setTransform(-54,-30.5);

	// txt201
	this.instance_5 = new lib.txt201();
	this.instance_5.setTransform(-85,-80.8);
	this.instance_5.alpha = 0;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:-2,y:-61.7,alpha:0.471},0).wait(1).to({y:-53.3,alpha:0.658},0).wait(1).to({y:-48,alpha:0.776},0).wait(1).to({y:-44.3,alpha:0.858},0).wait(1).to({y:-41.7,alpha:0.915},0).wait(1).to({y:-40,alpha:0.955},0).wait(1).to({y:-38.8,alpha:0.981},0).wait(1).to({y:-38.2,alpha:0.995},0).wait(1).to({regY:0,y:-36,alpha:1},0).wait(51).to({regY:-2,y:-37.7,alpha:0.996},0).wait(1).to({y:-37.1,alpha:0.982},0).wait(1).to({y:-36,alpha:0.958},0).wait(1).to({y:-34.3,alpha:0.922},0).wait(1).to({y:-31.8,alpha:0.871},0).wait(1).to({y:-28.5,alpha:0.801},0).wait(1).to({y:-24.1,alpha:0.706},0).wait(1).to({y:-17.9,alpha:0.574},0).wait(1).to({y:-8.7,alpha:0.38},0).wait(1).to({regY:0,y:11.2,alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-436,-28.4,398,34.2);


(lib.TXT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Line
	this.instance = new lib.redline();
	this.instance.setTransform(-281.9,-40.6,1,1,0,0,0,0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,x:-281.4},0).wait(1).to({x:-280.1},0).wait(1).to({x:-277.6},0).wait(1).to({x:-273.9},0).wait(1).to({x:-269.4},0).wait(1).to({x:-264.9},0).wait(1).to({x:-261.5},0).wait(1).to({x:-259.3},0).wait(1).to({x:-258.1},0).wait(1).to({regX:0.1,x:-257.9},0).wait(45).to({regX:0.2},0).wait(1).to({x:-258.3},0).wait(1).to({x:-258.9},0).wait(1).to({x:-259.9},0).wait(1).to({x:-261.1},0).wait(1).to({x:-262.8},0).wait(1).to({x:-264.8},0).wait(1).to({x:-267.6},0).wait(1).to({x:-271.3},0).wait(1).to({regX:0.1,x:-277.9},0).to({_off:true},1).wait(7));

	// txt104
	this.instance_1 = new lib.txt104();
	this.instance_1.setTransform(0,19.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(1).to({regX:-54.8,regY:-1,x:-54.8,y:26.9,alpha:0.418},0).wait(1).to({y:30.7,alpha:0.603},0).wait(1).to({y:33.3,alpha:0.725},0).wait(1).to({y:35.1,alpha:0.813},0).wait(1).to({y:36.5,alpha:0.878},0).wait(1).to({y:37.4,alpha:0.925},0).wait(1).to({y:38.2,alpha:0.96},0).wait(1).to({y:38.6,alpha:0.983},0).wait(1).to({y:38.9,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:40,alpha:1},0).wait(34).to({regX:-54.8,regY:-1,x:-54.8,y:39.1,alpha:0.997},0).wait(1).to({y:39.3,alpha:0.986},0).wait(1).to({y:39.8,alpha:0.965},0).wait(1).to({y:40.6,alpha:0.932},0).wait(1).to({y:41.8,alpha:0.884},0).wait(1).to({y:43.4,alpha:0.816},0).wait(1).to({y:45.7,alpha:0.72},0).wait(1).to({y:49,alpha:0.583},0).wait(1).to({y:54,alpha:0.375},0).wait(1).to({regX:0,regY:0,x:0,y:64,alpha:0},0).to({_off:true},1).wait(7));

	// txt103
	this.instance_2 = new lib.txt103();
	this.instance_2.setTransform(0,-7.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(1).to({regX:-12.3,regY:-0.9,x:-12.3,y:0,alpha:0.418},0).wait(1).to({y:3.8,alpha:0.603},0).wait(1).to({y:6.4,alpha:0.725},0).wait(1).to({y:8.2,alpha:0.813},0).wait(1).to({y:9.6,alpha:0.878},0).wait(1).to({y:10.5,alpha:0.925},0).wait(1).to({y:11.3,alpha:0.96},0).wait(1).to({y:11.7,alpha:0.983},0).wait(1).to({y:12,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:13,alpha:1},0).wait(38).to({regX:-12.3,regY:-0.9,x:-12.3,y:12.2,alpha:0.997},0).wait(1).to({y:12.4,alpha:0.986},0).wait(1).to({y:12.9,alpha:0.965},0).wait(1).to({y:13.7,alpha:0.932},0).wait(1).to({y:14.9,alpha:0.884},0).wait(1).to({y:16.5,alpha:0.816},0).wait(1).to({y:18.8,alpha:0.72},0).wait(1).to({y:22.1,alpha:0.583},0).wait(1).to({y:27.1,alpha:0.375},0).wait(1).to({regX:0,regY:0,x:0,y:37,alpha:0},0).to({_off:true},1).wait(5));

	// txt102
	this.instance_3 = new lib.txt102();
	this.instance_3.setTransform(0,-33.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(1).to({regX:-11.6,regY:0.8,x:-11.6,y:-24.3,alpha:0.418},0).wait(1).to({y:-20.4,alpha:0.603},0).wait(1).to({y:-17.9,alpha:0.725},0).wait(1).to({y:-16,alpha:0.813},0).wait(1).to({y:-14.7,alpha:0.878},0).wait(1).to({y:-13.7,alpha:0.925},0).wait(1).to({y:-13,alpha:0.96},0).wait(1).to({y:-12.5,alpha:0.983},0).wait(1).to({y:-12.2,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:-13,alpha:1},0).wait(42).to({regX:-11.6,regY:0.8,x:-11.6,y:-12.1,alpha:0.997},0).wait(1).to({y:-11.8,alpha:0.986},0).wait(1).to({y:-11.3,alpha:0.965},0).wait(1).to({y:-10.5,alpha:0.932},0).wait(1).to({y:-9.4,alpha:0.884},0).wait(1).to({y:-7.7,alpha:0.816},0).wait(1).to({y:-5.4,alpha:0.72},0).wait(1).to({y:-2.1,alpha:0.583},0).wait(1).to({y:2.8,alpha:0.375},0).wait(1).to({regX:0,regY:0,x:0,y:11,alpha:0},0).to({_off:true},1).wait(3));

	// txt101
	this.instance_4 = new lib.txt101();
	this.instance_4.setTransform(0,-60.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:-19.9,regY:-0.7,x:-19.9,y:-52.8,alpha:0.418},0).wait(1).to({y:-48.9,alpha:0.603},0).wait(1).to({y:-46.4,alpha:0.725},0).wait(1).to({y:-44.5,alpha:0.813},0).wait(1).to({y:-43.2,alpha:0.878},0).wait(1).to({y:-42.2,alpha:0.925},0).wait(1).to({y:-41.5,alpha:0.96},0).wait(1).to({y:-41,alpha:0.983},0).wait(1).to({y:-40.7,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0,y:-40,alpha:1},0).wait(46).to({regX:-19.9,regY:-0.7,x:-19.9,y:-40.6,alpha:0.997},0).wait(1).to({y:-40.3,alpha:0.986},0).wait(1).to({y:-39.8,alpha:0.965},0).wait(1).to({y:-39,alpha:0.932},0).wait(1).to({y:-37.9,alpha:0.884},0).wait(1).to({y:-36.2,alpha:0.816},0).wait(1).to({y:-33.9,alpha:0.72},0).wait(1).to({y:-30.6,alpha:0.583},0).wait(1).to({y:-25.6,alpha:0.375},0).wait(1).to({regX:0,regY:0,x:0,y:-16,alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434,-44,304.4,6.8);


(lib.legalmovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_1();
	this.instance.setTransform(0,-16.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-10.6,alpha:0.366},0).wait(1).to({y:-7.6,alpha:0.549},0).wait(1).to({y:-5.4,alpha:0.679},0).wait(1).to({y:-3.7,alpha:0.779},0).wait(1).to({y:-2.4,alpha:0.856},0).wait(1).to({y:-1.4,alpha:0.916},0).wait(1).to({y:-0.7,alpha:0.961},0).wait(1).to({y:-0.2,alpha:0.989},0).wait(1).to({y:0,alpha:1},0).wait(61).to({y:0.3,alpha:0.986},0).wait(1).to({y:0.9,alpha:0.956},0).wait(1).to({y:1.7,alpha:0.913},0).wait(1).to({y:2.9,alpha:0.856},0).wait(1).to({y:4.3,alpha:0.785},0).wait(1).to({y:6,alpha:0.698},0).wait(1).to({y:8.1,alpha:0.593},0).wait(1).to({y:10.8,alpha:0.461},0).wait(1).to({y:14.2,alpha:0.288},0).wait(1).to({y:20,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-126.8,200,220);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butt();

	this.instance_1 = new lib.butt_over();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-19.5,171.5,39.8);


(lib.alfalogoanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("A7eCJIAAkRMAkEAAAIAAERg");
	var mask_graphics_5 = new cjs.Graphics().p("A7WCJIAAkRMAkEAAAIAAERg");
	var mask_graphics_6 = new cjs.Graphics().p("A66CJIAAkRMAkEAAAIAAERg");
	var mask_graphics_7 = new cjs.Graphics().p("A6DCJIAAkRMAkEAAAIAAERg");
	var mask_graphics_8 = new cjs.Graphics().p("A4oCJIAAkRMAkEAAAIAAERg");
	var mask_graphics_9 = new cjs.Graphics().p("A2xCJIAAkRMAkEAAAIAAERg");
	var mask_graphics_10 = new cjs.Graphics().p("A1HCJIAAkRMAkEAAAIAAERg");
	var mask_graphics_11 = new cjs.Graphics().p("A0CCJIAAkRMAkEAAAIAAERg");
	var mask_graphics_12 = new cjs.Graphics().p("AzgCJIAAkRMAkEAAAIAAERg");
	var mask_graphics_13 = new cjs.Graphics().p("AzWCJIAAkRMAkEAAAIAAERg");
	var mask_graphics_19 = new cjs.Graphics().p("AzWCJIAAkRMAkEAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:-175.9,y:-1.6}).wait(1).to({graphics:mask_graphics_5,x:-175.2,y:-1.6}).wait(1).to({graphics:mask_graphics_6,x:-172.4,y:-1.6}).wait(1).to({graphics:mask_graphics_7,x:-166.8,y:-1.6}).wait(1).to({graphics:mask_graphics_8,x:-157.7,y:-1.6}).wait(1).to({graphics:mask_graphics_9,x:-145.9,y:-1.6}).wait(1).to({graphics:mask_graphics_10,x:-135.2,y:-1.6}).wait(1).to({graphics:mask_graphics_11,x:-128.3,y:-1.6}).wait(1).to({graphics:mask_graphics_12,x:-124.9,y:-1.6}).wait(1).to({graphics:mask_graphics_13,x:-123.9,y:-1.6}).wait(6).to({graphics:mask_graphics_19,x:-123.9,y:-1.6}).wait(6));

	// redline
	this.instance = new lib.redline();
	this.instance.setTransform(36,0);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(21));

	// alfalogo
	this.instance_1 = new lib.alfalogo();
	this.instance_1.setTransform(-141,0,0.5,0.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.1,regY:-0.2,scaleX:0.72,scaleY:0.72,y:-0.1,alpha:0.443},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-141.1,alpha:0.652},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:-0.2,alpha:0.781},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.867},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.924},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.961},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-141,y:0,alpha:1},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.5,-23.5,46.9,46.8);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A8LfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_1 = new cjs.Graphics().p("A8GfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_2 = new cjs.Graphics().p("A74fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_3 = new cjs.Graphics().p("A7efPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_4 = new cjs.Graphics().p("A64fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_5 = new cjs.Graphics().p("A6FfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_6 = new cjs.Graphics().p("A5CfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_7 = new cjs.Graphics().p("A3wfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_8 = new cjs.Graphics().p("A2MfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_9 = new cjs.Graphics().p("A0XfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_10 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_11 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_12 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_13 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_14 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_15 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_16 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_17 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_18 = new cjs.Graphics().p("Aw3fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_19 = new cjs.Graphics().p("AvEfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_20 = new cjs.Graphics().p("AtjfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_21 = new cjs.Graphics().p("AsSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_22 = new cjs.Graphics().p("ArSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_23 = new cjs.Graphics().p("AqgfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_24 = new cjs.Graphics().p("Ap7fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_25 = new cjs.Graphics().p("ApifPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_26 = new cjs.Graphics().p("ApUfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_27 = new cjs.Graphics().p("ApPfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_71 = new cjs.Graphics().p("A8LfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_72 = new cjs.Graphics().p("A8GfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_73 = new cjs.Graphics().p("A74fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_74 = new cjs.Graphics().p("A7efPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_75 = new cjs.Graphics().p("A64fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_76 = new cjs.Graphics().p("A6FfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_77 = new cjs.Graphics().p("A5CfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_78 = new cjs.Graphics().p("A3wfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_79 = new cjs.Graphics().p("A2MfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_80 = new cjs.Graphics().p("A0XfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_81 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_82 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_83 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_84 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_85 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_86 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_87 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_88 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_89 = new cjs.Graphics().p("Aw3fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_90 = new cjs.Graphics().p("AvEfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_91 = new cjs.Graphics().p("AtjfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_92 = new cjs.Graphics().p("AsSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_93 = new cjs.Graphics().p("ArSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_94 = new cjs.Graphics().p("AqgfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_95 = new cjs.Graphics().p("Ap7fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_96 = new cjs.Graphics().p("ApifPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_97 = new cjs.Graphics().p("ApUfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_98 = new cjs.Graphics().p("ApPfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_138 = new cjs.Graphics().p("A8LfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_139 = new cjs.Graphics().p("A8GfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_140 = new cjs.Graphics().p("A74fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_141 = new cjs.Graphics().p("A7efPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_142 = new cjs.Graphics().p("A64fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_143 = new cjs.Graphics().p("A6FfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_144 = new cjs.Graphics().p("A5CfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_145 = new cjs.Graphics().p("A3wfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_146 = new cjs.Graphics().p("A2MfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_147 = new cjs.Graphics().p("A0XfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_148 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_149 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_150 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_151 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_152 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_153 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_154 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_155 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_156 = new cjs.Graphics().p("Aw3fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_157 = new cjs.Graphics().p("AvEfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_158 = new cjs.Graphics().p("AtjfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_159 = new cjs.Graphics().p("AsSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_160 = new cjs.Graphics().p("ArSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_161 = new cjs.Graphics().p("AqgfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_162 = new cjs.Graphics().p("Ap7fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_163 = new cjs.Graphics().p("ApifPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_164 = new cjs.Graphics().p("ApUfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_165 = new cjs.Graphics().p("ApPfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_217 = new cjs.Graphics().p("A8LfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_218 = new cjs.Graphics().p("A8GfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_219 = new cjs.Graphics().p("A74fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_220 = new cjs.Graphics().p("A7efPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_221 = new cjs.Graphics().p("A64fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_222 = new cjs.Graphics().p("A6FfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_223 = new cjs.Graphics().p("A5CfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_224 = new cjs.Graphics().p("A3wfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_225 = new cjs.Graphics().p("A2MfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_226 = new cjs.Graphics().p("A0XfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_227 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_228 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_229 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_230 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_231 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_232 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_233 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_234 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_235 = new cjs.Graphics().p("Aw3fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_236 = new cjs.Graphics().p("AvEfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_237 = new cjs.Graphics().p("AtjfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_238 = new cjs.Graphics().p("AsSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_239 = new cjs.Graphics().p("ArSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_240 = new cjs.Graphics().p("AqgfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_241 = new cjs.Graphics().p("Ap7fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_242 = new cjs.Graphics().p("ApifPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_243 = new cjs.Graphics().p("ApUfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_244 = new cjs.Graphics().p("ApPfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_302 = new cjs.Graphics().p("A8LfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_303 = new cjs.Graphics().p("A8GfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_304 = new cjs.Graphics().p("A74fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_305 = new cjs.Graphics().p("A7efPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_306 = new cjs.Graphics().p("A64fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_307 = new cjs.Graphics().p("A6FfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_308 = new cjs.Graphics().p("A5CfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_309 = new cjs.Graphics().p("A3wfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_310 = new cjs.Graphics().p("A2MfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_311 = new cjs.Graphics().p("A0XfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_312 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_313 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_314 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_315 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_316 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_317 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_318 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_319 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_320 = new cjs.Graphics().p("Aw3fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_321 = new cjs.Graphics().p("AvEfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_322 = new cjs.Graphics().p("AtjfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_323 = new cjs.Graphics().p("AsSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_324 = new cjs.Graphics().p("ArSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_325 = new cjs.Graphics().p("AqgfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_326 = new cjs.Graphics().p("Ap7fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_327 = new cjs.Graphics().p("ApifPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_328 = new cjs.Graphics().p("ApUfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_329 = new cjs.Graphics().p("ApPfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_388 = new cjs.Graphics().p("A8LfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_389 = new cjs.Graphics().p("A8GfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_390 = new cjs.Graphics().p("A74fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_391 = new cjs.Graphics().p("A7efPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_392 = new cjs.Graphics().p("A64fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_393 = new cjs.Graphics().p("A6FfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_394 = new cjs.Graphics().p("A5CfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_395 = new cjs.Graphics().p("A3wfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_396 = new cjs.Graphics().p("A2MfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_397 = new cjs.Graphics().p("A0XfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_398 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_399 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_400 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_401 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_402 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_403 = new cjs.Graphics().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	var mask_graphics_404 = new cjs.Graphics().p("AyvfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_405 = new cjs.Graphics().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	var mask_graphics_406 = new cjs.Graphics().p("Aw3fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_407 = new cjs.Graphics().p("AvEfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_408 = new cjs.Graphics().p("AtjfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_409 = new cjs.Graphics().p("AsSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_410 = new cjs.Graphics().p("ArSfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_411 = new cjs.Graphics().p("AqgfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_412 = new cjs.Graphics().p("Ap7fPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_413 = new cjs.Graphics().p("ApifPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_414 = new cjs.Graphics().p("ApUfPMAAAg+dMAleAAAMAAAA+dg");
	var mask_graphics_415 = new cjs.Graphics().p("ApPfPMAAAg+dMAleAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-180.4,y:1}).wait(1).to({graphics:mask_graphics_1,x:-180,y:1}).wait(1).to({graphics:mask_graphics_2,x:-178.5,y:1}).wait(1).to({graphics:mask_graphics_3,x:-175.9,y:1}).wait(1).to({graphics:mask_graphics_4,x:-172.2,y:1}).wait(1).to({graphics:mask_graphics_5,x:-167,y:1}).wait(1).to({graphics:mask_graphics_6,x:-160.4,y:1}).wait(1).to({graphics:mask_graphics_7,x:-152.1,y:1}).wait(1).to({graphics:mask_graphics_8,x:-142.2,y:1}).wait(1).to({graphics:mask_graphics_9,x:-130.4,y:1}).wait(1).to({graphics:mask_graphics_10,x:-113.7,y:1}).wait(1).to({graphics:mask_graphics_11,x:-83.3,y:1}).wait(1).to({graphics:mask_graphics_12,x:-50.2,y:1}).wait(1).to({graphics:mask_graphics_13,x:-15.2,y:1}).wait(1).to({graphics:mask_graphics_14,x:20.2,y:1}).wait(1).to({graphics:mask_graphics_15,x:54.9,y:1}).wait(1).to({graphics:mask_graphics_16,x:87.6,y:1}).wait(1).to({graphics:mask_graphics_17,x:117.5,y:1}).wait(1).to({graphics:mask_graphics_18,x:132,y:1}).wait(1).to({graphics:mask_graphics_19,x:143.5,y:1}).wait(1).to({graphics:mask_graphics_20,x:153.2,y:1}).wait(1).to({graphics:mask_graphics_21,x:161.2,y:1}).wait(1).to({graphics:mask_graphics_22,x:167.7,y:1}).wait(1).to({graphics:mask_graphics_23,x:172.7,y:1}).wait(1).to({graphics:mask_graphics_24,x:176.4,y:1}).wait(1).to({graphics:mask_graphics_25,x:178.9,y:1}).wait(1).to({graphics:mask_graphics_26,x:180.3,y:1}).wait(1).to({graphics:mask_graphics_27,x:180.8,y:1}).wait(44).to({graphics:mask_graphics_71,x:-180.4,y:1}).wait(1).to({graphics:mask_graphics_72,x:-180,y:1}).wait(1).to({graphics:mask_graphics_73,x:-178.5,y:1}).wait(1).to({graphics:mask_graphics_74,x:-175.9,y:1}).wait(1).to({graphics:mask_graphics_75,x:-172.2,y:1}).wait(1).to({graphics:mask_graphics_76,x:-167,y:1}).wait(1).to({graphics:mask_graphics_77,x:-160.4,y:1}).wait(1).to({graphics:mask_graphics_78,x:-152.1,y:1}).wait(1).to({graphics:mask_graphics_79,x:-142.2,y:1}).wait(1).to({graphics:mask_graphics_80,x:-130.4,y:1}).wait(1).to({graphics:mask_graphics_81,x:-113.7,y:1}).wait(1).to({graphics:mask_graphics_82,x:-83.3,y:1}).wait(1).to({graphics:mask_graphics_83,x:-50.2,y:1}).wait(1).to({graphics:mask_graphics_84,x:-15.2,y:1}).wait(1).to({graphics:mask_graphics_85,x:20.2,y:1}).wait(1).to({graphics:mask_graphics_86,x:54.9,y:1}).wait(1).to({graphics:mask_graphics_87,x:87.6,y:1}).wait(1).to({graphics:mask_graphics_88,x:117.5,y:1}).wait(1).to({graphics:mask_graphics_89,x:132,y:1}).wait(1).to({graphics:mask_graphics_90,x:143.5,y:1}).wait(1).to({graphics:mask_graphics_91,x:153.2,y:1}).wait(1).to({graphics:mask_graphics_92,x:161.2,y:1}).wait(1).to({graphics:mask_graphics_93,x:167.7,y:1}).wait(1).to({graphics:mask_graphics_94,x:172.7,y:1}).wait(1).to({graphics:mask_graphics_95,x:176.4,y:1}).wait(1).to({graphics:mask_graphics_96,x:178.9,y:1}).wait(1).to({graphics:mask_graphics_97,x:180.3,y:1}).wait(1).to({graphics:mask_graphics_98,x:180.8,y:1}).wait(40).to({graphics:mask_graphics_138,x:-180.4,y:1}).wait(1).to({graphics:mask_graphics_139,x:-180,y:1}).wait(1).to({graphics:mask_graphics_140,x:-178.5,y:1}).wait(1).to({graphics:mask_graphics_141,x:-175.9,y:1}).wait(1).to({graphics:mask_graphics_142,x:-172.2,y:1}).wait(1).to({graphics:mask_graphics_143,x:-167,y:1}).wait(1).to({graphics:mask_graphics_144,x:-160.4,y:1}).wait(1).to({graphics:mask_graphics_145,x:-152.1,y:1}).wait(1).to({graphics:mask_graphics_146,x:-142.2,y:1}).wait(1).to({graphics:mask_graphics_147,x:-130.4,y:1}).wait(1).to({graphics:mask_graphics_148,x:-113.7,y:1}).wait(1).to({graphics:mask_graphics_149,x:-83.3,y:1}).wait(1).to({graphics:mask_graphics_150,x:-50.2,y:1}).wait(1).to({graphics:mask_graphics_151,x:-15.2,y:1}).wait(1).to({graphics:mask_graphics_152,x:20.2,y:1}).wait(1).to({graphics:mask_graphics_153,x:54.9,y:1}).wait(1).to({graphics:mask_graphics_154,x:87.6,y:1}).wait(1).to({graphics:mask_graphics_155,x:117.5,y:1}).wait(1).to({graphics:mask_graphics_156,x:132,y:1}).wait(1).to({graphics:mask_graphics_157,x:143.5,y:1}).wait(1).to({graphics:mask_graphics_158,x:153.2,y:1}).wait(1).to({graphics:mask_graphics_159,x:161.2,y:1}).wait(1).to({graphics:mask_graphics_160,x:167.7,y:1}).wait(1).to({graphics:mask_graphics_161,x:172.7,y:1}).wait(1).to({graphics:mask_graphics_162,x:176.4,y:1}).wait(1).to({graphics:mask_graphics_163,x:178.9,y:1}).wait(1).to({graphics:mask_graphics_164,x:180.3,y:1}).wait(1).to({graphics:mask_graphics_165,x:180.8,y:1}).wait(52).to({graphics:mask_graphics_217,x:-180.4,y:1}).wait(1).to({graphics:mask_graphics_218,x:-180,y:1}).wait(1).to({graphics:mask_graphics_219,x:-178.5,y:1}).wait(1).to({graphics:mask_graphics_220,x:-175.9,y:1}).wait(1).to({graphics:mask_graphics_221,x:-172.2,y:1}).wait(1).to({graphics:mask_graphics_222,x:-167,y:1}).wait(1).to({graphics:mask_graphics_223,x:-160.4,y:1}).wait(1).to({graphics:mask_graphics_224,x:-152.1,y:1}).wait(1).to({graphics:mask_graphics_225,x:-142.2,y:1}).wait(1).to({graphics:mask_graphics_226,x:-130.4,y:1}).wait(1).to({graphics:mask_graphics_227,x:-113.7,y:1}).wait(1).to({graphics:mask_graphics_228,x:-83.3,y:1}).wait(1).to({graphics:mask_graphics_229,x:-50.2,y:1}).wait(1).to({graphics:mask_graphics_230,x:-15.2,y:1}).wait(1).to({graphics:mask_graphics_231,x:20.2,y:1}).wait(1).to({graphics:mask_graphics_232,x:54.9,y:1}).wait(1).to({graphics:mask_graphics_233,x:87.6,y:1}).wait(1).to({graphics:mask_graphics_234,x:117.5,y:1}).wait(1).to({graphics:mask_graphics_235,x:132,y:1}).wait(1).to({graphics:mask_graphics_236,x:143.5,y:1}).wait(1).to({graphics:mask_graphics_237,x:153.2,y:1}).wait(1).to({graphics:mask_graphics_238,x:161.2,y:1}).wait(1).to({graphics:mask_graphics_239,x:167.7,y:1}).wait(1).to({graphics:mask_graphics_240,x:172.7,y:1}).wait(1).to({graphics:mask_graphics_241,x:176.4,y:1}).wait(1).to({graphics:mask_graphics_242,x:178.9,y:1}).wait(1).to({graphics:mask_graphics_243,x:180.3,y:1}).wait(1).to({graphics:mask_graphics_244,x:180.8,y:1}).wait(58).to({graphics:mask_graphics_302,x:-180.4,y:1}).wait(1).to({graphics:mask_graphics_303,x:-180,y:1}).wait(1).to({graphics:mask_graphics_304,x:-178.5,y:1}).wait(1).to({graphics:mask_graphics_305,x:-175.9,y:1}).wait(1).to({graphics:mask_graphics_306,x:-172.2,y:1}).wait(1).to({graphics:mask_graphics_307,x:-167,y:1}).wait(1).to({graphics:mask_graphics_308,x:-160.4,y:1}).wait(1).to({graphics:mask_graphics_309,x:-152.1,y:1}).wait(1).to({graphics:mask_graphics_310,x:-142.2,y:1}).wait(1).to({graphics:mask_graphics_311,x:-130.4,y:1}).wait(1).to({graphics:mask_graphics_312,x:-113.7,y:1}).wait(1).to({graphics:mask_graphics_313,x:-83.3,y:1}).wait(1).to({graphics:mask_graphics_314,x:-50.2,y:1}).wait(1).to({graphics:mask_graphics_315,x:-15.2,y:1}).wait(1).to({graphics:mask_graphics_316,x:20.2,y:1}).wait(1).to({graphics:mask_graphics_317,x:54.9,y:1}).wait(1).to({graphics:mask_graphics_318,x:87.6,y:1}).wait(1).to({graphics:mask_graphics_319,x:117.5,y:1}).wait(1).to({graphics:mask_graphics_320,x:132,y:1}).wait(1).to({graphics:mask_graphics_321,x:143.5,y:1}).wait(1).to({graphics:mask_graphics_322,x:153.2,y:1}).wait(1).to({graphics:mask_graphics_323,x:161.2,y:1}).wait(1).to({graphics:mask_graphics_324,x:167.7,y:1}).wait(1).to({graphics:mask_graphics_325,x:172.7,y:1}).wait(1).to({graphics:mask_graphics_326,x:176.4,y:1}).wait(1).to({graphics:mask_graphics_327,x:178.9,y:1}).wait(1).to({graphics:mask_graphics_328,x:180.3,y:1}).wait(1).to({graphics:mask_graphics_329,x:180.8,y:1}).wait(59).to({graphics:mask_graphics_388,x:-180.4,y:1}).wait(1).to({graphics:mask_graphics_389,x:-180,y:1}).wait(1).to({graphics:mask_graphics_390,x:-178.5,y:1}).wait(1).to({graphics:mask_graphics_391,x:-175.9,y:1}).wait(1).to({graphics:mask_graphics_392,x:-172.2,y:1}).wait(1).to({graphics:mask_graphics_393,x:-167,y:1}).wait(1).to({graphics:mask_graphics_394,x:-160.4,y:1}).wait(1).to({graphics:mask_graphics_395,x:-152.1,y:1}).wait(1).to({graphics:mask_graphics_396,x:-142.2,y:1}).wait(1).to({graphics:mask_graphics_397,x:-130.4,y:1}).wait(1).to({graphics:mask_graphics_398,x:-113.7,y:1}).wait(1).to({graphics:mask_graphics_399,x:-83.3,y:1}).wait(1).to({graphics:mask_graphics_400,x:-50.2,y:1}).wait(1).to({graphics:mask_graphics_401,x:-15.2,y:1}).wait(1).to({graphics:mask_graphics_402,x:20.2,y:1}).wait(1).to({graphics:mask_graphics_403,x:54.9,y:1}).wait(1).to({graphics:mask_graphics_404,x:87.6,y:1}).wait(1).to({graphics:mask_graphics_405,x:117.5,y:1}).wait(1).to({graphics:mask_graphics_406,x:132,y:1}).wait(1).to({graphics:mask_graphics_407,x:143.5,y:1}).wait(1).to({graphics:mask_graphics_408,x:153.2,y:1}).wait(1).to({graphics:mask_graphics_409,x:161.2,y:1}).wait(1).to({graphics:mask_graphics_410,x:167.7,y:1}).wait(1).to({graphics:mask_graphics_411,x:172.7,y:1}).wait(1).to({graphics:mask_graphics_412,x:176.4,y:1}).wait(1).to({graphics:mask_graphics_413,x:178.9,y:1}).wait(1).to({graphics:mask_graphics_414,x:180.3,y:1}).wait(1).to({graphics:mask_graphics_415,x:180.8,y:1}).wait(15));

	// RED
	this.instance = new lib.RED();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(430));

	// Legal
	this.instance_1 = new lib.legalmovie("synched",0,false);
	this.instance_1.setTransform(-2,-45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(315).to({_off:false},0).to({_off:true},85).wait(30));

	// BUTT
	this.instance_2 = new lib.button();
	this.instance_2.setTransform(0,-29);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(239).to({_off:false},0).wait(1).to({regX:0.3,regY:0.4,x:0.3,y:-19.9,alpha:0.289},0).wait(1).to({y:-14.6,alpha:0.465},0).wait(1).to({y:-10.6,alpha:0.597},0).wait(1).to({y:-7.5,alpha:0.701},0).wait(1).to({y:-5,alpha:0.786},0).wait(1).to({y:-2.9,alpha:0.853},0).wait(1).to({y:-1.3,alpha:0.907},0).wait(1).to({y:-0.1,alpha:0.948},0).wait(1).to({y:0.7,alpha:0.977},0).wait(1).to({y:1.2,alpha:0.994},0).wait(1).to({regX:0,regY:0,x:0,y:1,alpha:1},0).wait(55).to({regX:0.3,regY:0.4,x:0.3,y:1.7,alpha:0.991},0).wait(1).to({y:2.4,alpha:0.965},0).wait(1).to({y:3.7,alpha:0.925},0).wait(1).to({y:5.3,alpha:0.87},0).wait(1).to({y:7.4,alpha:0.801},0).wait(1).to({y:10,alpha:0.715},0).wait(1).to({y:13.1,alpha:0.609},0).wait(1).to({y:17.1,alpha:0.477},0).wait(1).to({y:22.4,alpha:0.301},0).wait(1).to({regX:0,regY:0,x:0,y:31,alpha:0},0).to({_off:true},1).wait(115));

	// TXT4
	this.instance_3 = new lib.TXT4("synched",0,false);
	this.instance_3.setTransform(1.4,-151.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(230).to({_off:false},0).to({_off:true},91).wait(109));

	// TXT3
	this.instance_4 = new lib.TXT3("synched",0,false);
	this.instance_4.setTransform(-38.3,-126);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(157).to({_off:false},0).to({_off:true},73).wait(200));

	// TXT2
	this.instance_5 = new lib.TXT2("synched",0,false);
	this.instance_5.setTransform(-1.7,-112.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).to({_off:true},73).wait(273));

	// TXT1
	this.instance_6 = new lib.TXT1("synched",0,false);
	this.instance_6.setTransform(-1,-122);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({_off:true},73).wait(346));

	// Alfalogo
	this.instance_7 = new lib.alfalogoanim("synched",0,false);
	this.instance_7.setTransform(141.5,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},402).wait(28));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(430));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1156,-222,1295,439);


// stage content:
(lib.alfa_7_240x400_review_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.btn();
	this.instance_1.setTransform(120,200);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AyvfPMAAAg+dMAlfAAAMAAAA+dg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.9,199,690.3,402);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;