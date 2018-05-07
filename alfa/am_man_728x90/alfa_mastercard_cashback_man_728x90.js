(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bgman.jpg", id:"bgman"},
		{src:"card.png", id:"card"},
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



(lib.bgman = function() {
	this.initialize(img.bgman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,443,90);


(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,70);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,60);


(lib.txt0205 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AgtBHIBJiNIAPAAIhJCNgAAYA6QgIgJAAgTQAAgRAIgKQAJgIAPAAQAPAAAHAHQAIAJAAASQAAATgIAJQgIALgPgBQgPAAgIgJgAAkAMQgDAGAAANQAAAMADAGQAEAHAHAAQAHgBADgFQADgDABgHIAAgLIgBgKQAAgGgDgDQgDgFgHAAQgHAAgEAHgAhFgCQgIgKAAgSQAAgSAIgKQAIgJAPAAQAPAAAIAJQAIAJAAASQAAATgIAJQgIAJgPgBQgPAAgIgHgAg5gxQgDAHAAANQAAANADAFQADAHAIAAQAGgBAEgEQADgEAAgHIABgLIgBgKQgBgGgDgEQgDgEgGAAQgHAAgEAGg");
	this.shape.setTransform(-19.1,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-14.2,36.6,35.6);


(lib.txt0204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AALBwQgYgmAAhKQAAhIAXgmQAagnAyAAQAyAAAaAmQAaAmgBBKQAABJgZAmQgZAmgyAAQgyAAgagmgAA4hhQgLALgFARQgEARgCATIgBAkQAAA4ANAZQANAaAcAAQATgBALgLQALgMAFgRQAEgRACgTIAAggIAAggQgCgSgEgSQgFgSgLgLQgLgMgUgBQgUABgKALgAhyCQIAAjIIhJAAIAAgjQAQAAASgEQASgDAPgNQAOgMAFgZIAmAAIAAEkg");
	this.shape.setTransform(-24.2,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-43.2,117.6,86.5);


(lib.txt0203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AiqBKQgRgKgKgUQgKgTAAgZQAAgXAKgTQAJgTASgMQASgLAZAAQAUAAAQAHQAPAIAJANQAKANABARIgjAAQgDgNgJgIQgKgHgOAAQgQAAgKAIQgJAIgFANQgEAMAAANQAAAQAFANQAGAMAJAHQAKAHANAAQARAAAJgKQAJgJADgSIAjAAQgBAUgJAPQgJAPgQAJQgPAIgXAAQgYAAgSgLgAmIBKQgRgKgKgUQgKgTAAgZQAAgXAKgTQAJgTASgMQASgLAZAAQAUAAAQAHQAPAIAJANQAKANABARIgjAAQgDgNgJgIQgKgHgOAAQgQAAgKAIQgJAIgFANQgEAMAAANQAAAQAFANQAGAMAJAHQAKAHANAAQARAAAJgKQAJgJADgSIAjAAQgBAUgJAPQgJAPgQAJQgPAIgXAAQgYAAgSgLgAouBGQgTgQAAgcIAjAAQABALAEAHQAFAHAIADQAIADAKAAQAMAAAIgHQAIgHAAgMQAAgJgFgFQgEgFgHgCQgHgCgIAAIgMAAIAAgWIAFAAIAEAAQAPAAAIgGQAHgGAAgKQAAgKgHgFQgGgFgMAAQgNAAgIAGQgIAGgBAMIgiAAQABgSAIgLQAJgMAPgFQAOgGASAAQAQAAANAGQAOAFAHALQAIAKAAANQAAANgHAJQgHAJgLACQAOADAIAIQAJAKAAAQQAAAQgJAMQgIAMgOAHQgPAHgSAAQgiAAgSgPgAK9BRIAAihIAkAAIAAChgAIwBRIAAihIAjAAIAAA6IAeAAQARAAANAGQANAGAIAKQAHALAAASQAAASgHALQgIAMgNAGQgOAFgSAAgAJTA0IAaAAQANAAAHgFQAHgGAAgNQAAgNgIgFQgHgFgNAAIgZAAgAHyBRIAAhGIhDAAIAABGIgkAAIAAihIAkAAIAAA9IBDAAIAAg9IAkAAIAAChgAFeBRIgNgkIg9AAIgOAkIgkAAIA+ihIAlAAIA+ChgAFIASIgWg6IgWA6IAsAAgABgBRIAAihIBHAAQASAAANAFQAOAGAHALQAIAMAAASQAAASgIAKQgHALgNAGQgOAFgQAAIglAAIAAA7gACEgEIAgAAQAMAAAIgFQAIgFAAgNQAAgNgIgGQgIgFgMAAIggAAgAAABRIAAiDIgxAAIAAgeICEAAIAAAeIgxAAIAACDgApkBRIgNgkIg9AAIgNAkIglAAIA+ihIAmAAIA+ChgAp6ASIgVg6IgWA6IArAAg");
	this.shape.setTransform(103.7,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.6,21,259,45.9);


(lib.txt0202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ABOBKQgRgKgKgUQgKgTAAgZQAAgXAKgTQAJgTASgMQASgLAZAAQAUAAAQAHQAPAIAJANQAKANABARIgjAAQgDgNgJgIQgKgHgOAAQgQAAgKAIQgJAIgFANQgEAMAAANQAAAQAFANQAGAMAJAHQAKAHANAAQARAAAJgKQAJgJADgSIAjAAQgBAUgJAPQgJAPgQAJQgPAIgXAAQgYAAgSgLgAHOBRIgkg5IgkA5IgpAAIA6hTIg2hOIAqAAIAhA0IAhg0IAnAAIg0BOIA5BTgADaBRIAAihIB6AAIAAAdIhXAAIAAAkIBQAAIAAAaIhQAAIAAAoIBZAAIAAAegAhxBRIAAihIBNAAQAPAAAMAEQAKAEAGAJQAHAJABAPQgBAMgFAIQgHAJgIAFQALADAJAIQAIAKAAARQAAAPgHALQgIALgKAGQgNAFgPAAgAhOA1IAkAAQAIAAAHgCQAHgBAEgFQAEgFAAgKQAAgJgEgFQgFgFgHgCIgQgBIgiAAgAhOgOIAgAAIANgBQAHgCAEgEQAEgEAAgIQAAgJgEgEQgEgEgGgBQgGgCgIAAIggAAgAjkBRIgNgkIg9AAIgNAkIglAAIA+ihIAmAAIA+ChgAj6ASIgVg6IgWA6IArAAgAmSBRIAAhGIhCAAIAABGIgkAAIAAihIAkAAIAAA9IBCAAIAAg9IAkAAIAAChg");
	this.shape.setTransform(-29.4,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,31.9,151.2,29.7);


(lib.txt0201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ADwBNQgPgHgJgOQgKgOgCgSIAkAAQADAPAJAIQAJAIAPAAQASAAALgMQALgMADgVIg8AAIAAgaIA6AAQgBgLgGgIQgFgJgIgFQgJgFgMAAQgOAAgJAGQgJAHgDAMIgkAAQACgQAJgNQAKgMAPgHQAPgHATAAQAZAAASALQASAMAKATQAKATgBAXQAAAZgKATQgJAUgSAKQgSALgXAAQgWAAgPgIgAlSBNQgPgHgJgOQgJgOgDgSIAkAAQADAPAKAIQAJAIAOAAQATAAAKgMQAMgMACgVIg8AAIAAgaIA7AAQgCgLgFgIQgFgJgJgFQgJgFgMAAQgOAAgIAGQgKAHgDAMIgkAAQACgQAKgNQAKgMAOgHQAPgHATAAQAaAAASALQARAMAKATQAKATAAAXQAAAZgKATQgJAUgSAKQgSALgYAAQgWAAgPgIgAHoBRIgyhJIgVAUIAAA1IgjAAIAAihIAjAAIAABEIBAhEIAuAAIhABAIBGBhgAAxBRIAAihIB6AAIAAAdIhWAAIAAAdIArAAQAQAAANAGQAOAGAHAKQAIALAAASQAAASgHALQgJAMgNAGQgNAFgSAAgABVA0IAmAAQANAAAIgFQAHgGAAgNQAAgNgIgFQgHgFgNAAIgmAAgAjEBRIAAihIAjAAIAACDIA3AAIAAiDIAkAAIAACDIA2AAIAAiDIAiAAIAAChgAmqBRIgyhJIgUAUIAAA1IgkAAIAAihIAkAAIAABEIBAhEIAtAAIhABAIBGBhg");
	this.shape.setTransform(-26.6,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,31.8,151.2,30.9);


(lib.txt0104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AC5BgQgTgIgLgPQgLgQAAgYIAiAAQAAAPAHAKQAHAJAMAFQALAEAPAAQATAAAKgJQAKgJAAgRQAAgQgKgIQgKgIgRAAIgZAAIAAgZIAZAAQANAAAJgJQAJgIABgOQgBgNgJgIQgJgHgRAAQgSAAgMAIQgLAIgCATIgiAAQACgWAKgOQAJgOARgGQAQgHAVAAQAUAAAQAGQAQAGAKAMQAKAMAAASQAAALgFAJQgFAJgHAGQgHAGgIACIAAABQARADAKALQALANAAAUQAAAJgEALQgEAKgJAKQgJAJgPAGQgOAGgVABQgYAAgTgIgALlBjIAAjFICQAAIAAAdIhtAAIAAA1IBlAAIAAAbIhlAAIAAA6IBuAAIAAAegAKZBjIAAhZIhbAAIAABZIgjAAIAAjFIAjAAIAABPIBbAAIAAhPIAjAAIAADFgAHPBjIAAiXIhWCXIgoAAIAAjFIAjAAIAACXIBViXIApAAIAADFgABPBjIAAhZIhZAAIAABZIgjAAIAAjFIAjAAIAABPIBZAAIAAhPIAjAAIAADFgAjdBjIAAjFICQAAIAAAdIhtAAIAAA1IBlAAIAAAbIhlAAIAAA6IBuAAIAAAegAmhBjIAAjFICSAAIAAAeIhvAAIAAAuIA7AAQAhAAASAQQARAOAAAdQAAAegRAQQgSAQghAAgAl+BHIA6AAQARAAAJgJQAIgIAAgQQAAgQgJgIQgJgJgRAAIg5AAgAooBjIgTg1IhPAAIgUA1IgkAAIBNjFIAlAAIBNDFgApEAUIgehSIgfBSIA9AAgAr3BjIAAhZIhbAAIAABZIgjAAIAAjFIAjAAIAABPIBbAAIAAhPIAjAAIAADFg");
	this.shape.setTransform(122.7,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.3,-66,303.7,83.6);


(lib.txt0103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AmEB8IAAgyIiBAAIAAAyIgiAAIAAhPIATAAQAIgPAGgVQAGgUADgbQADgaAAgcIAAgfICCAAIAACoIAXAAIAABPgAnXhQQAAAYgEAZQgDAYgFASQgFAUgHAOIBUAAIAAiKIg8AAgAIFBKIAAiXIhWCXIgoAAIAAjFIAjAAIAACXIBViXIApAAIAADFgADqBKIAAjFICHAAIAAAeIhkAAIAACngAAwBKIAAjFIAjAAIAABMIA0AAQAhAAASAQQARAQAAAbQAAAegRAQQgSAQghAAgABTAuIAzAAQARAAAJgIQAIgJAAgQQAAgNgJgJQgJgJgRAAIgyAAgAgcBKIAAhXIhbAAIAABXIgjAAIAAjFIAjAAIAABQIBbAAIAAhQIAiAAIAADFgAlJBKIAAjFICPAAIAAAdIhtAAIAAA1IBlAAIAAAdIhlAAIAAA5IBvAAIAAAdg");
	this.shape.setTransform(-0.7,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-36,116.9,53.6);


(lib.txt0102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AjgBkIgKgDIglAAIgTg0IhPAAIgUA0IgkAAIBOjFIAlAAIBMDFIAAgbQAEACAEAAIAHABQAGAAAGgFQAGgEAEgNQAEgNABgZIADhxICDAAIAADFIgjAAIAAimIg+AAIgEBcQgBAcgHARQgIARgMAJQgLAHgOAAIgMgBgAkrASIgehSIgfBSIA9AAgAJsBhIAAjFICQAAIAAAeIhtAAIAAA0IBlAAIAAAbIhlAAIAAA6IBuAAIAAAegAIgBhIAAjFIAjAAIAADFgAFyBhIAAjFIAjAAIAABNIAwAAQAggBARARQASANAAAeQAAAdgSARQgRAPggAAgAGVBFIAuAAQARAAAIgJQAJgHAAgQQAAgRgJgIQgJgJgRAAIgtAAgAElBhIAAhZIhbAAIAABZIgjAAIAAjFIAjAAIAABPIBbAAIAAhPIAjAAIAADFgAgRBhIAAjFIAhAAIAABNIA1AAQAhgBASARQARANAAAeQAAAdgSARQgRAPghAAgAAQBFIA0AAQAQAAAKgJQAIgHAAgQQAAgRgJgIQgJgJgRAAIgzAAgApCBhIAAjFICQAAIAAAeIhtAAIAAA0IBkAAIAAAbIhkAAIAAA6IBuAAIAAAegAr9BhIAAjFIBXAAQAVAAAQAGQAPAHAJANQAIAOABAVQAAAcgRAPQgSAQgeABIg5AAIAABMgAragFIAyAAQAQAAALgIQAKgIABgSQAAgMgHgHQgFgHgJgDQgKgDgLABIguAAg");
	this.shape.setTransform(120.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.3,-39,277.5,56.6);


(lib.txt0101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AmCB8IAAgxIiBAAIAAAxIgiAAIAAhQIATAAQAIgNAFgXQAGgTAEgbQADgbAAgbIAAgfICCAAIAACnIAWAAIAABQgAnWhRQAAAZgDAZQgDAYgFATQgFATgHANIBUAAIAAiIIg9AAgAihBNIgJgCIAAgbQADABAEAAIAHABQAHAAAGgFQAFgEAEgNQAEgNABgXIAEhzICAAAIAADGIghAAIAAinIg+AAIgEBcQgBAcgHARQgHASgMAHQgMAIgOAAIgMgBgAHEBLIAAinIhAAAIAAgfICiAAIAAAfIg/AAIAACngADnBLIAAjGICPAAIAAAeIhtAAIAAA1IBlAAIAAAcIhlAAIAAA4IBvAAIAAAfgACuBLIgTg1IhPAAIgTA1IgkAAIBNjGIAlAAIBNDGgACSgDIgehUIgfBUIA9AAgAlIBLIAAjGICQAAIAAAeIhtAAIAAA1IBlAAIAAAcIhlAAIAAA4IBuAAIAAAfg");
	this.shape.setTransform(0.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-17.6,114.7,35.2);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],10.3,-154.2,0,10.3,-154.2,182.8).s().p("EgjmAbMMAAAg2XMBHNAAAMAAAA2Xg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.9,-174.1,455.9,348.2);


(lib.redline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("ApeAZIAAgxIS9AAIAAAxg");
	this.shape.setTransform(-41,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.7,7.9,121.5,5.1);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],38.6,99,105.7,118.6).s().p("A4/X+MAAAgv7MAx/AAAMAAAAv7g");
	this.shape.setTransform(165,-234.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.bgman();
	this.instance.setTransform(186,-229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-388,624,307);


(lib.logo_mastercard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAYQgKgKAAgOQAAgNAKgLQAKgKAOAAQAOAAALAKQAKALAAANQAAANgKALQgKAKgPABQgOgBgKgKgAgSgSQgIAJAAAJQAAALAIAIQAIAIAKAAQALAAAIgIQAIgIAAgLQAAgKgIgIQgHgHgMgBQgLABgHAHgAAHAQIgIgNIgDAAIAAANIgHAAIAAgfIANAAQAGAAADADQAEADAAAEQAAAEgDABQgCADgGAAIALANgAgEAAIAGAAIAEgBQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgGAAg");
	this.shape.setTransform(55.4,23.2,0.165,0.165,0,0,0,-0.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhpB9Qgzg2AAhHQAAhfBBgxQAzgmBFAAQArAAAuAUQAYAJAPAKIgnBFQgGgJgOgJQgdgTgqAAQguAAgdAkQgbAhAAArQAAAwAdAhQAeAjAsAAQAfAAAhgTIAbgTIAiBFQgNAJgVAJQgrARgmAAQhXAAg4g6g");
	this.shape_1.setTransform(32,20.5,0.165,0.165,0,0,0,-0.3,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah+B9Qgrg0gBhJQAAhHAtg1QAzg9BSAAQBxAAAjBpQASA0gFAyIj9AAIACAOQAEASAJAPQAbAuA5AAQAeAAAngTQAUgKANgJIAiA7QgUANgbAMQg1AZgkAAQhZAAg0g9gABfgfQAAgVgLgWQgWgqg4AAIgHAAQg3ADgTApQgKAVABAUICzAAIAAAAg");
	this.shape_2.setTransform(21.2,20.5,0.165,0.165,0,0,0,-0.6,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCCvQgJgTgDgWIgBjAIhBAAIAAhKIBBAAIAAhlIBPAAIAABlIB5AAIAABKIh5AAIAACtIAGATQAOAUAlAAQAUABAVgLIASgMIAdBMQhFAagjAAQhOAAgdg7g");
	this.shape_3.setTransform(15.5,19.8,0.165,0.165,0,0,0,-0.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrChIgtgXIAggyIAoAPQAtAQAeAAQAbAAAYgJQAegLAAgVQABgVgsgNIgqgJQghAAgggOQhCgaAAhEQAAgyArgfQAqgeA+AAQAfAAA5AVQAdALAXALIglA5QhGgdglgBQgYgBgUALQgXAMAAATQAAAZAiAIQAVAGA1AFQBtAQAABSQAAB0ieAAQgwAAg2gYg");
	this.shape_4.setTransform(9.6,20.5,0.165,0.165,0,0,0,-0.3,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiFC8Qgvg4AAhFQABhEArg2QAyg8BOgBQApAAApAbQAVAOAMANIAAi2IBKAAIAAHmIhKAAIAAgkQgNAMgUAMQgqAXglgBQhMABg0g9gAhGgOQggAgAAAwQAAAwAgAiQAfAjArgBQAuABAfgjQAggiAAgwQAAgwggggQgfgjguAAQgrAAgfAjg");
	this.shape_5.setTransform(49.8,19.4,0.165,0.165,0,0,0,-0.6,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiEB8Qgwg4ABhEQAAhFAsg2QAxg8BOgBQApAAApAbQAUAOANANIAAgsIBKAAIAAFcIhKAAIAAgkQgNAMgVAMQgpAXglgBQhMABgzg9gAhGhOQggAiAAAuQAAAwAgAiQAfAjAsgBQAtABAggjQAggiAAgwQAAgugggiQgggjgtAAQgsAAgfAjg");
	this.shape_6.setTransform(38.2,20.5,0.165,0.165,0,0,0,-0.4,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiFB8Qgvg4AAhEQABhFArg2QAxg8BPgBQApAAApAbQAVAOAMANIAAgsIBKAAIAAFcIhKAAIAAgkIgiAYQgpAXglgBQhMABg0g9gAhHhOQggAiAAAuQAAAwAgAiQAgAjArgBQAtABAggjQAggiAAgwQAAgugggiQgggjgtAAQgrAAggAjg");
	this.shape_7.setTransform(2.8,20.5,0.165,0.165,0,0,0,-0.2,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhwCzIAAlcIBJAAIAAArIAlgaQAogaAZAAQAZABAYAKIgXBEIAAABQgSgKgWAAQg1AAgWAjIgNAjIACDZg");
	this.shape_8.setTransform(44.7,20.4,0.165,0.165,0,0,0,-0.3,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhwCzIAAlcIBKAAIAAArQAQgNAVgNQAogaAXAAQAZABAaAKIgZBEIAAABQgQgKgXAAQg1AAgWAjQgMARAAASIABDZg");
	this.shape_9.setTransform(27.3,20.4,0.165,0.165,0,0,0,-0.3,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkSCzIAAlcIBJAAIAAArQARgNAVgNQAqgaAYAAQAuABApAgQATAQAKAQQAKgQASgQQAnghAyAAQBMAAAnA4QATAbAEAcIAAD0IhIAAIAAjXQABgRgKgQQgTghgxAAQgyAAgYAhQgMAQgCARIAADXIhJAAIAAjZQgBgRgLgRQgVgjgqAAQg3AAgWAkQgMARgBASIACDZg");
	this.shape_10.setTransform(-5.9,20.4,0.165,0.165,0,0,0,-0.3,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F79F1A").s().p("AAqAXIAAgiIgNAdIgJAAIgOgcIAAAhIgHAAIAAgtIALAAIAOAeIAPgeIALAAIAAAtgAgiAXIAAglIgPAAIAAgIIAnAAIAAAIIgQAAIAAAlg");
	this.shape_11.setTransform(55.4,1.9,0.165,0.165,0,0,0,-0.4,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF5F01").s().p("AlvJLQiJkUAAk3QAAk2CJkUQCFkMDqi5QDrC5CFEMQCJEUAAE2QAAE3iJEUQiFEMjrC5Qjqi5iFkMg");
	this.shape_12.setTransform(21.1,-9.2,0.165,0.165,0,0,0,-0.5,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA001B").s().p("AoATBQjthki2i3Qi3i3hkjtQhnj2AAkMQAAkLBnj2QBkjtC3i3QC2i3DthkQD1hoELAAQEMAAD1BoQDsBkC3C3QC2C3BlDtQBnD2AAELQAAEMhnD2QhlDti2C3Qi3C3jsBkQj1BokMAAQkLAAj1hog");
	this.shape_13.setTransform(7.7,-9.2,0.165,0.165,0,0,0,-0.4,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F79F1A").s().p("AoATBQjshki3i3Qi2i3hljtQhnj2AAkMQAAkLBnj2QBljtC2i3QC3i3DshkQD1hoELAAQEMAAD1BoQDsBkC3C3QC2C3BlDtQBnD2AAELQAAEMhnD2QhlDti2C3Qi3C3jsBkQj1BokMAAQkLAAj1hog");
	this.shape_14.setTransform(34.5,-9.2,0.165,0.165,0,0,0,-0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-31,70.4,54.8);


(lib.logo_alfa_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("AhiA8IAAgYQgFADgJAAQgNAAgHgJQgHgJAAgSQAAgQAIgJQAHgJAPAAQAHAAAEACIAAgeIASAAIAAAeQAFgCAHAAQAeAAAAAiQAAARgHAKQgIAJgLAAQgKAAgGgDIAAAYgAhKgQIgGACIAAAkIAKACQAGAAAEgGQAEgGAAgJQAAgTgNAAIgFAAgAh4ADQAAAVANAAQAFAAAEgCIAAgkIgFgCIgEAAQgNAAAAATgABiAiIAAhZIANgDIAPgBQAQAAAMADIAAAOQgKgBgLAAIgQABIAAAZQAIgCAHAAQAPAAAIAIQAIAHAAAMQAAAPgJAIQgKAJgRAAQgOAAgPgGgAB1gDIAAAaIAMABQAHAAAEgEQADgEAAgHQAAgMgOgBIgMABgADYAlIgEgEIgGAEQgGACgIAAQgJAAgGgFQgIgGABgKQgBgLAIgGQAHgFANAAIAJACIAAgEQAAgGgBgCQgDgCgJAAIgOABIgDgOQALgCAMAAQAJAAAFACQAFABADAEIADAHIABALIAAAQQAAAHABAEQABAFAEAFIgMAIIgDgCgAC/AIQgDADAAAFQAAAJAKAAQAFAAAEgCIgBgLIAAgFIgFgBQgHAAgDACgAANAlIgEgEIgGAEQgEACgHAAQgKAAgGgFQgHgGAAgKQAAgLAHgGQAHgFAOAAIAHACIAAgEQAAgGgCgCQgCgCgIAAIgOABIgCgOQAKgCANAAQAHAAAEACQAGABACAEIADAHIACALIAAAQIABALQAAAFAEAFIgLAIIgEgCgAgJAIQgEADAAAFQAAAJALAAQADAAAFgCIgBgLIAAgFIgFgBQgGAAgDACgAjKAiIAAhAIASAAIAAAXIAMgCQAMAAAIAGQAGAFAAALQAAANgHAGQgJAHgOAAQgOAAgMgFgAi4AEIAAAUIAIABQAGAAADgDQADgDAAgFQAAgLgMAAIgIABgAkWAcQADgCADgGQABgDAAgMIAAggQAOgEANAAQAOAAAOAEIAABBIgSAAIAAg1IgKgBIgJABIAAAXQAAAPgFAHQgFAGgLADgAFgAmIgKgWIgDgFQgCgCgDAAIgCAAIAAAdIgTAAIAAhDIATAAIAAAaIACAAIAFgBIADgFIAFgKIAEgHQAEgEAGgBIAIABIAAAMQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgDACgDAIQgEAHgGABIAAAAQAEABADADIAEAHIAMAagAEXAmIAAgcIgUAAIAAAcIgSAAIAAhDIASAAIAAAaIAUAAIAAgaIASAAIAABDgAkxAmIgGgTIgiAAIgGATIgUAAIAhhfIALgCQAGAAAGACIAfBfgAk7ADIgLgpIgCAAIgMApIAZAAgAA0ALQgEgDAAgFQAAgDAEgDQADgEAFAAQAFAAAEAEQACADAAADQAAAFgCADQgEAEgFAAQgFAAgDgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-6,74.5,12.1);


(lib.logo_alfa_forward = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("AjFAiIAAg0IAIAAIAAAFIAGgFQADgBAEAAQAFAAAEACQAEADADAFQACAEAAAFQAAAGgCAFQgDAEgEADQgEACgFAAQgEAAgDgBIgGgFIAAAUgAi4gKQgDABgCADIAAAOIAFADQADACADAAQADAAADgCQACgBABgDQACgEAAgDQAAgCgCgDQgBgDgCgCQgDgBgDAAIgGABgAByAdIAAgKIgfAAIAAglIAIAAIAAAeIATAAIAAgeIAIAAIAAAeIAFAAIAAARgACrAOQADAAABgEQACgDABgHIACgSIAfAAIAAAlIgJAAIAAgdIgOAAIgCAKQgBALgDAFQgEAEgHAAgACJASQgFgDgCgFQgDgEAAgGQAAgEACgFQADgFAFgDQAEgCAGAAQAGAAAEACQAFAEACAEQADAFAAAEIAAACIgfAAIACAGQABADADABQADACAEAAIAGgBIAFgEIAEAGQgDADgEABIgJABQgGAAgFgCgACegBIgBgGQgBgCgDgBQgCgCgEAAQgEAAgCACIgEADIgBAGIAWAAIAAAAgAgpARQgFgCgCgFQgDgFAAgFQAAgEADgFQACgFAFgDQAEgCAHAAQAGAAAFACQAEADADAFQACAFAAAEQAAAFgCAFQgDAFgEACQgFADgGAAQgHAAgEgDgAgkgJQgDABgBADQgCADAAACQAAADACADQABADADACQACACAEAAQADAAADgCQADgCABgDQABgDAAgDQAAgCgBgDQgBgDgDgBQgDgCgDAAQgEAAgCACgAD5ATIAAgZIgTAZIgIAAIAAglIAIAAIAAAZIATgZIAIAAIAAAlgAAtATIgNgQIgFAGIAAAKIgJAAIAAglIAJAAIAAASIARgSIALAAIgQASIAQATgAhEATIAAgZIgMAZIgDAAIgMgZIAAAZIgJAAIAAglIAMAAIALAYIAKgYIAMAAIAAAlgAh7ATIAAgOIgJAAIgJAOIgKAAIAKgOQgEgBgDgEQgCAAgBgGQAAgDACgDIAEgFQADgBAFAAIAWAAIAAAlgAiMgJQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQAAAAAAAAQABAAABAAQAAABABAAIANAAIAAgKIgNAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAgAjaATIAAgsIgdAAIAAAsIgJAAIAAg1IAvAAIAAA1g");
	this.shape.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-5.5,53.9,11.1);


(lib.logo_alfa_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("Ah5DEIgDgBIgBgDIAAgtIABgCQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAgBIDzAAQAAABAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAACIAAAtIAAADIgDABgABHBCIgCgCIgSgwIhlAAIgSAwIgCACIgCAAIgpgPIgDgDIAAgDIBLjKQAGgSAIgIQALgMAQAAQARAAALAMQAHAIAHASIBKDKIAAADIgCADIgpAPIgBABIgBgBgAgfgZIBDAAIgjhnIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-19.6,25.2,39.3);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal();
	this.instance.setTransform(108,-169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108,-169,292,60);


(lib.divider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D1E").s().p("AgEFTIAAqlIAJAAIAAKlg");
	this.shape.setTransform(7.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-34,1,68);


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.card();
	this.instance.setTransform(-91,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-39,110,70);


(lib.butt_inverse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AAkBGQgRgPgBgbIAAAAIAPAAQABAOAGALQAGAKAMAEQALAFAQAAQAOAAAKgFQAKgGAFgIQAFgJAAgKQAAgKgFgHQgFgIgIgDQgIgEgLAAIgaAAIAAgLIAaAAQAJAAAHgEQAIgDAEgHQAFgFAAgKQAAgMgFgHQgGgHgJgEQgJgDgLAAQgNAAgKAEQgKAEgGAJQgGAIgBAMIgPAAQABgQAIgMQAHgLAOgGQANgFASAAQAPAAANAFQAMAEAIALQAHAJABAPQgBAJgDAHQgEAHgFAFQgFAFgHACIAAABQAOAEAHAHQAIAKAAARQAAAHgDAJQgDAJgHAHQgIAIgLAGQgMAEgRABQgfgBgRgOgAoiBGQgRgPgBgbIAAAAIAPAAQABAOAGALQAGAKAMAEQALAFAQAAQAOAAAKgFQAKgGAFgIQAFgJAAgKQAAgKgFgHQgFgIgIgDQgIgEgLAAIgaAAIAAgLIAaAAQAJAAAHgEQAIgDAEgHQAFgFAAgKQAAgMgFgHQgGgHgJgEQgJgDgLAAQgNAAgKAEQgKAEgGAJQgGAIgBAMIgPAAQABgQAIgMQAHgLAOgGQANgFASAAQAPAAANAFQAMAEAIALQAHAJABAPQgBAJgDAHQgEAHgFAFQgFAFgHACIAAABQAOAEAHAHQAIAKAAARQAAAHgDAJQgDAJgHAHQgIAIgLAGQgMAEgRABQgfgBgRgOgAG7BSIAAiiIAQAAIAABEIA5AAQAXABANALQANAMAAAWQAAAWgNANQgNANgXAAgAHLBEIA2AAQARAAAKgJQAJgJAAgQQAAgQgJgJQgKgJgRAAIg2AAgAFjBSIAAiVIg5AAIAAgNICDAAIAAANIg6AAIAACVgAEcBSIgUg0IhLAAIgUA0IgRAAIBCiiIASAAIBBCigAEDASIgghUIghBUIBBAAgAgEBSIgUg0IhLAAIgUA0IggAAIhFhVIgfAbIAAA6IgPAAIAAiiIAPAAIAABWIBfhWIAVAAIhKBCIBLBcIBAieIASAAIA/CigAgdASIgghUIghBUIBBAAgAkqBSIgUg0IhLAAIgUA0IgRAAIBCiiIASAAIBBCigAlDASIgghUIghBUIBBAAg");
	this.shape.setTransform(3,-1.2,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#EF3124").ss(2,1,1).p("AtqjHIbVAAIAAGPI7VAAg");
	this.shape_1.setTransform(0.5,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-23.2,177,42);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBRQgUgSAAgeIAAgBIASAAQAAARAHAMQAIALANAGQANAFARAAQARAAALgGQAMgGAFgKQAHgKgBgMQAAgLgFgIQgGgJgJgEQgJgFgNAAIgeAAIAAgNIAeAAQAKAAAIgEQAJgEAGgHQAEgHAAgLQABgNgGgJQgGgIgLgEQgKgEgNAAQgPAAgMAFQgLAFgIAJQgGAKgCAOIgQAAQABgTAJgNQAJgNAPgGQAQgHATAAQATAAAOAFQAOAGAJAMQAJALAAARQgBAKgDAIQgEAIgHAGQgGAGgHACIAAABQAPAEAJAJQAIAMAAATQAAAIgDALQgDAKgJAJQgIAJgNAGQgOAFgUABQgjgBgUgQgAp1BRQgTgSgBgeIAAgBIASAAQABARAGAMQAIALANAGQANAFASAAQAQAAAMgGQALgGAGgKQAGgKAAgMQAAgLgFgIQgHgJgJgEQgJgFgMAAIgfAAIAAgNIAfAAQAJAAAJgEQAIgEAGgHQAFgHAAgLQAAgNgGgJQgGgIgLgEQgKgEgMAAQgPAAgMAFQgMAFgHAJQgHAKgBAOIgRAAQABgTAJgNQAJgNAQgGQAPgHAUAAQASAAAOAFQAPAGAIAMQAJALABARQgBAKgEAIQgEAIgHAGQgFAGgIACIAAABQAQAEAIAJQAJAMAAATQAAAIgEALQgDAKgIAJQgIAJgOAGQgNAFgUABQgkgBgUgQgAH+BeIAAi6IARAAIAABPIBDAAQAaAAAPANQAPAOAAAZQAAAagPAOQgPAPgaAAgAIPBOIA/AAQAUAAALgKQALgKAAgTQAAgSgLgKQgLgLgUAAIg/AAgAGZBeIAAirIhCAAIAAgPICWAAIAAAPIhCAAIAACrgAFHBeIgYg7IhVAAIgYA7IgTAAIBMi7IAUAAIBMC7gAEqAUIgkhgIgnBgIBLAAgAgFBeIgXg7IhVAAIgYA7IglAAIhPhhIgkAfIAABCIgSAAIAAi6IASAAIAABjIBthjIAZAAIhVBMIBVBqIBKi3IAVAAIBJC7gAghAUIglhgIgnBgIBMAAgAlXBeIgXg7IhWAAIgXA7IgUAAIBNi7IATAAIBMC7gAl0AUIgkhgIgmBgIBKAAg");
	this.shape.setTransform(3,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF3124").s().p("AtqDIIAAmOIbVAAIAAGOg");
	this.shape_1.setTransform(0.5,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-22,175,40);


(lib.btnMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(244,-154,3.033,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-199,728,90);


(lib.TXT02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0205
	this.instance = new lib.txt0205();
	this.instance.setTransform(94.5,18);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({regX:-19.1,regY:14.2,x:70.5,y:32.2,alpha:0.391},0).wait(1).to({x:68.6,alpha:0.542},0).wait(1).to({x:67.3,alpha:0.646},0).wait(1).to({x:66.3,alpha:0.726},0).wait(1).to({x:65.5,alpha:0.789},0).wait(1).to({x:64.9,alpha:0.84},0).wait(1).to({x:64.4,alpha:0.882},0).wait(1).to({x:64,alpha:0.916},0).wait(1).to({x:63.6,alpha:0.943},0).wait(1).to({x:63.3,alpha:0.964},0).wait(1).to({x:63.1,alpha:0.98},0).wait(1).to({x:63,alpha:0.991},0).wait(1).to({x:62.9,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:82,y:18,alpha:1},0).wait(72).to({regX:-19.1,regY:14.2,x:62.9,y:32.2,alpha:0.996},0).wait(1).to({y:32.3,alpha:0.984},0).wait(1).to({y:32.5,alpha:0.963},0).wait(1).to({y:32.7,alpha:0.934},0).wait(1).to({y:33,alpha:0.894},0).wait(1).to({y:33.4,alpha:0.843},0).wait(1).to({y:33.9,alpha:0.779},0).wait(1).to({y:34.4,alpha:0.7},0).wait(1).to({y:35.2,alpha:0.601},0).wait(1).to({y:36.1,alpha:0.473},0).wait(1).to({y:37.5,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:82,y:25.5,alpha:0},0).to({_off:true},1).wait(97));

	// txt0204
	this.instance_1 = new lib.txt0204();
	this.instance_1.setTransform(69.5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regX:-24.2,regY:24,x:40.4,y:24,alpha:0.391},0).wait(1).to({x:38.5,alpha:0.542},0).wait(1).to({x:37.2,alpha:0.646},0).wait(1).to({x:36.2,alpha:0.726},0).wait(1).to({x:35.4,alpha:0.789},0).wait(1).to({x:34.8,alpha:0.84},0).wait(1).to({x:34.3,alpha:0.882},0).wait(1).to({x:33.9,alpha:0.916},0).wait(1).to({x:33.5,alpha:0.943},0).wait(1).to({x:33.2,alpha:0.964},0).wait(1).to({x:33,alpha:0.98},0).wait(1).to({x:32.9,alpha:0.991},0).wait(1).to({x:32.8,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:57,y:0,alpha:1},0).wait(75).to({regX:-24.2,regY:24,x:32.8,y:24,alpha:0.996},0).wait(1).to({y:24.1,alpha:0.984},0).wait(1).to({y:24.3,alpha:0.963},0).wait(1).to({y:24.5,alpha:0.934},0).wait(1).to({y:24.8,alpha:0.894},0).wait(1).to({y:25.2,alpha:0.843},0).wait(1).to({y:25.7,alpha:0.779},0).wait(1).to({y:26.2,alpha:0.7},0).wait(1).to({y:27,alpha:0.601},0).wait(1).to({y:27.9,alpha:0.473},0).wait(1).to({y:29.3,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:57,y:7.5,alpha:0},0).to({_off:true},1).wait(97));

	// txt0203
	this.instance_2 = new lib.txt0203();
	this.instance_2.setTransform(-22,14.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(1).to({regX:103.7,regY:29.6,x:81.7,y:47.8,alpha:0.391},0).wait(1).to({y:49.2,alpha:0.542},0).wait(1).to({y:50.2,alpha:0.646},0).wait(1).to({y:51,alpha:0.726},0).wait(1).to({y:51.6,alpha:0.789},0).wait(1).to({y:52.1,alpha:0.84},0).wait(1).to({y:52.5,alpha:0.882},0).wait(1).to({y:52.8,alpha:0.916},0).wait(1).to({y:53.1,alpha:0.943},0).wait(1).to({y:53.3,alpha:0.964},0).wait(1).to({y:53.4,alpha:0.98},0).wait(1).to({y:53.5,alpha:0.991},0).wait(1).to({y:53.6,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:-22,y:24,alpha:1},0).wait(66).to({regX:103.7,regY:29.6,x:81.7,y:53.6,alpha:0.996},0).wait(1).to({y:53.7,alpha:0.984},0).wait(1).to({y:53.9,alpha:0.963},0).wait(1).to({y:54.1,alpha:0.934},0).wait(1).to({y:54.4,alpha:0.894},0).wait(1).to({y:54.8,alpha:0.843},0).wait(1).to({y:55.3,alpha:0.779},0).wait(1).to({y:55.8,alpha:0.7},0).wait(1).to({y:56.6,alpha:0.601},0).wait(1).to({y:57.5,alpha:0.473},0).wait(1).to({y:58.9,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:-22,y:31.5,alpha:0},0).to({_off:true},1).wait(103));

	// txt0202
	this.instance_3 = new lib.txt0202();
	this.instance_3.setTransform(-22,-2.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({regX:-29.4,regY:46.6,x:-51.4,y:47.8,alpha:0.391},0).wait(1).to({y:49.2,alpha:0.542},0).wait(1).to({y:50.2,alpha:0.646},0).wait(1).to({y:51,alpha:0.726},0).wait(1).to({y:51.6,alpha:0.789},0).wait(1).to({y:52.1,alpha:0.84},0).wait(1).to({y:52.5,alpha:0.882},0).wait(1).to({y:52.8,alpha:0.916},0).wait(1).to({y:53.1,alpha:0.943},0).wait(1).to({y:53.3,alpha:0.964},0).wait(1).to({y:53.4,alpha:0.98},0).wait(1).to({y:53.5,alpha:0.991},0).wait(1).to({y:53.6,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:-22,y:7,alpha:1},0).wait(68).to({regX:-29.4,regY:46.6,x:-51.4,y:53.6,alpha:0.996},0).wait(1).to({y:53.7,alpha:0.984},0).wait(1).to({y:53.9,alpha:0.963},0).wait(1).to({y:54.1,alpha:0.934},0).wait(1).to({y:54.4,alpha:0.894},0).wait(1).to({y:54.8,alpha:0.843},0).wait(1).to({y:55.3,alpha:0.779},0).wait(1).to({y:55.8,alpha:0.7},0).wait(1).to({y:56.6,alpha:0.601},0).wait(1).to({y:57.5,alpha:0.473},0).wait(1).to({y:58.9,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:-22,y:14.5,alpha:0},0).to({_off:true},1).wait(101));

	// txt0201
	this.instance_4 = new lib.txt0201();
	this.instance_4.setTransform(-22,-25.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-26.6,regY:46.6,x:-48.6,y:24.9,alpha:0.391},0).wait(1).to({y:26.3,alpha:0.542},0).wait(1).to({y:27.3,alpha:0.646},0).wait(1).to({y:28,alpha:0.726},0).wait(1).to({y:28.6,alpha:0.789},0).wait(1).to({y:29.1,alpha:0.84},0).wait(1).to({y:29.5,alpha:0.882},0).wait(1).to({y:29.9,alpha:0.916},0).wait(1).to({y:30.1,alpha:0.943},0).wait(1).to({y:30.3,alpha:0.964},0).wait(1).to({y:30.5,alpha:0.98},0).wait(1).to({y:30.6,alpha:0.991},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:0,regY:0,x:-22,y:-16,alpha:1},0).wait(75).to({regX:-26.6,regY:46.6,x:-48.6,y:30.7,alpha:0.996},0).wait(1).to({y:30.8,alpha:0.984},0).wait(1).to({y:30.9,alpha:0.963},0).wait(1).to({y:31.1,alpha:0.934},0).wait(1).to({y:31.4,alpha:0.894},0).wait(1).to({y:31.8,alpha:0.843},0).wait(1).to({y:32.3,alpha:0.779},0).wait(1).to({y:32.9,alpha:0.7},0).wait(1).to({y:33.6,alpha:0.601},0).wait(1).to({y:34.6,alpha:0.473},0).wait(1).to({y:35.9,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:-22,y:-8.5,alpha:0},0).to({_off:true},1).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,12.5,106.7,17.2);


(lib.txt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0104
	this.instance = new lib.txt0104();
	this.instance.setTransform(0,28);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:122.7,regY:-55.6,x:122.7,y:-20.8,alpha:0.487},0).wait(1).to({y:-18.7,alpha:0.639},0).wait(1).to({y:-17.3,alpha:0.737},0).wait(1).to({y:-16.3,alpha:0.806},0).wait(1).to({y:-15.6,alpha:0.858},0).wait(1).to({y:-15,alpha:0.898},0).wait(1).to({y:-14.6,alpha:0.928},0).wait(1).to({y:-14.3,alpha:0.951},0).wait(1).to({y:-14,alpha:0.969},0).wait(1).to({y:-13.9,alpha:0.981},0).wait(1).to({y:-13.7,alpha:0.99},0).wait(1).to({alpha:0.996},0).wait(1).to({y:-13.6,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:0,y:42,alpha:1},0).wait(68).to({regX:122.7,regY:-55.6,x:122.7,y:-13.6,alpha:0.998},0).wait(1).to({y:-13.5,alpha:0.991},0).wait(1).to({y:-13.4,alpha:0.978},0).wait(1).to({y:-13.3,alpha:0.959},0).wait(1).to({y:-13.1,alpha:0.933},0).wait(1).to({y:-12.8,alpha:0.898},0).wait(1).to({y:-12.4,alpha:0.851},0).wait(1).to({y:-11.9,alpha:0.791},0).wait(1).to({y:-11.3,alpha:0.714},0).wait(1).to({y:-10.5,alpha:0.613},0).wait(1).to({y:-9.4,alpha:0.479},0).wait(1).to({y:-7.9,alpha:0.291},0).wait(1).to({regX:0,regY:0,x:0,y:50,alpha:0},0).to({_off:true},1).wait(132));

	// txt0103
	this.instance_1 = new lib.txt0103();
	this.instance_1.setTransform(-34,-1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:-0.8,regY:-23.6,x:-34.8,y:-17.8,alpha:0.487},0).wait(1).to({y:-15.7,alpha:0.639},0).wait(1).to({y:-14.3,alpha:0.737},0).wait(1).to({y:-13.3,alpha:0.806},0).wait(1).to({y:-12.6,alpha:0.858},0).wait(1).to({y:-12,alpha:0.898},0).wait(1).to({y:-11.6,alpha:0.928},0).wait(1).to({y:-11.3,alpha:0.951},0).wait(1).to({y:-11,alpha:0.969},0).wait(1).to({y:-10.9,alpha:0.981},0).wait(1).to({y:-10.7,alpha:0.99},0).wait(1).to({alpha:0.996},0).wait(1).to({y:-10.6,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-34,y:13,alpha:1},0).wait(68).to({regX:-0.8,regY:-23.6,x:-34.8,y:-10.6,alpha:0.998},0).wait(1).to({y:-10.5,alpha:0.991},0).wait(1).to({y:-10.4,alpha:0.978},0).wait(1).to({y:-10.3,alpha:0.959},0).wait(1).to({y:-10.1,alpha:0.933},0).wait(1).to({y:-9.8,alpha:0.898},0).wait(1).to({y:-9.4,alpha:0.851},0).wait(1).to({y:-8.9,alpha:0.791},0).wait(1).to({y:-8.3,alpha:0.714},0).wait(1).to({y:-7.5,alpha:0.613},0).wait(1).to({y:-6.4,alpha:0.479},0).wait(1).to({y:-4.9,alpha:0.291},0).wait(1).to({regX:0,regY:0,x:-34,y:21,alpha:0},0).to({_off:true},1).wait(132));

	// txt0102
	this.instance_2 = new lib.txt0102();
	this.instance_2.setTransform(-12,-27);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:120.6,regY:-28.9,x:108.6,y:-49,alpha:0.487},0).wait(1).to({y:-46.9,alpha:0.639},0).wait(1).to({y:-45.5,alpha:0.737},0).wait(1).to({y:-44.6,alpha:0.806},0).wait(1).to({y:-43.8,alpha:0.858},0).wait(1).to({y:-43.3,alpha:0.898},0).wait(1).to({y:-42.9,alpha:0.928},0).wait(1).to({y:-42.5,alpha:0.951},0).wait(1).to({y:-42.3,alpha:0.969},0).wait(1).to({y:-42.1,alpha:0.981},0).wait(1).to({y:-42,alpha:0.99},0).wait(1).to({y:-41.9,alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-12,y:-13,alpha:1},0).wait(75).to({regX:120.6,regY:-28.9,x:108.6,y:-41.8,alpha:0.998},0).wait(1).to({alpha:0.991},0).wait(1).to({y:-41.7,alpha:0.978},0).wait(1).to({y:-41.5,alpha:0.959},0).wait(1).to({y:-41.3,alpha:0.933},0).wait(1).to({y:-41,alpha:0.898},0).wait(1).to({y:-40.7,alpha:0.851},0).wait(1).to({y:-40.2,alpha:0.791},0).wait(1).to({y:-39.6,alpha:0.714},0).wait(1).to({y:-38.8,alpha:0.613},0).wait(1).to({y:-37.7,alpha:0.479},0).wait(1).to({y:-36.2,alpha:0.291},0).wait(1).to({regX:0,regY:0,x:-12,y:-5,alpha:0},0).to({_off:true},1).wait(128));

	// txt0101
	this.instance_3 = new lib.txt0101();
	this.instance_3.setTransform(-35,-56);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0.1,regY:2.5,x:-34.9,y:-46.6,alpha:0.487},0).wait(1).to({y:-44.5,alpha:0.639},0).wait(1).to({y:-43.1,alpha:0.737},0).wait(1).to({y:-42.2,alpha:0.806},0).wait(1).to({y:-41.4,alpha:0.858},0).wait(1).to({y:-40.9,alpha:0.898},0).wait(1).to({y:-40.5,alpha:0.928},0).wait(1).to({y:-40.1,alpha:0.951},0).wait(1).to({y:-39.9,alpha:0.969},0).wait(1).to({y:-39.7,alpha:0.981},0).wait(1).to({y:-39.6,alpha:0.99},0).wait(1).to({y:-39.5,alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-35,y:-42,alpha:1},0).wait(75).to({regX:0.1,regY:2.5,x:-34.9,y:-39.4,alpha:0.998},0).wait(1).to({alpha:0.991},0).wait(1).to({y:-39.3,alpha:0.978},0).wait(1).to({y:-39.1,alpha:0.959},0).wait(1).to({y:-38.9,alpha:0.933},0).wait(1).to({y:-38.6,alpha:0.898},0).wait(1).to({y:-38.3,alpha:0.851},0).wait(1).to({y:-37.8,alpha:0.791},0).wait(1).to({y:-37.2,alpha:0.714},0).wait(1).to({y:-36.4,alpha:0.613},0).wait(1).to({y:-35.3,alpha:0.479},0).wait(1).to({y:-33.8,alpha:0.291},0).wait(1).to({regX:0,regY:0,x:-35,y:-34,alpha:0},0).to({_off:true},1).wait(128));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-66,275.2,24.9);


(lib.TXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.TXT02("synched",0);
	this.instance.setTransform(-10,38);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({_off:false},0).to({_off:true},103).wait(222));

	// TXT01
	this.instance_1 = new lib.txt01("synched",0);
	this.instance_1.setTransform(-36.1,97.1,0.85,0.85,0,0,0,-0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},210).wait(222));

	// 1Redline
	this.instance_2 = new lib.redline();
	this.instance_2.setTransform(-156,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-41,regY:10.4,x:-192,y:60.4},0).wait(1).to({x:-188.9},0).wait(1).to({x:-186.6},0).wait(1).to({x:-184.6},0).wait(1).to({x:-183},0).wait(1).to({x:-181.7},0).wait(1).to({x:-180.5},0).wait(1).to({x:-179.5},0).wait(1).to({x:-178.7},0).wait(1).to({x:-178.1},0).wait(1).to({x:-177.6},0).wait(1).to({x:-177.2},0).wait(1).to({x:-177},0).wait(1).to({regX:0,regY:0,x:-136,y:50},0).wait(91).to({regX:-41,regY:10.4,x:-177,y:60.4,alpha:0.997},0).wait(1).to({y:60.6,alpha:0.988},0).wait(1).to({y:60.8,alpha:0.971},0).wait(1).to({y:61.1,alpha:0.946},0).wait(1).to({y:61.6,alpha:0.911},0).wait(1).to({y:62.2,alpha:0.863},0).wait(1).to({y:63,alpha:0.801},0).wait(1).to({y:64,alpha:0.723},0).wait(1).to({y:65.2,alpha:0.628},0).wait(1).to({y:66.6,alpha:0.52},0).wait(1).to({y:68.1,alpha:0.406},0).wait(1).to({y:69.5,alpha:0.299},0).wait(1).to({y:70.7,alpha:0.207},0).wait(1).to({y:71.7,alpha:0.134},0).wait(1).to({y:72.4,alpha:0.08},0).wait(1).to({y:72.9,alpha:0.042},0).wait(1).to({y:73.2,alpha:0.017},0).wait(1).to({y:73.3,alpha:0.004},0).wait(1).to({regX:0,regY:0,x:-136,y:63,alpha:0},0).to({_off:true},1).wait(317));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.7,57.9,121.5,5);


(lib.sunflare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sun();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},49).to({alpha:0},51).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.9,-174.1,455.9,348.2);


(lib.logo_mastercard_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1819").s().p("AFCAnQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAAAAAQgBABAAAAIgFADIgDgDgAFDAgIgCADQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIACABIAEgBQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgCABgAgiAfQgIgJAAgMQAAgKAIgJQAIgKAOAAQAQAAAGARQADAHAAAIIgpAAIABADIACAFQAEAIAKAAQAFAAAGgDIAEgEIAFAKIgHAFQgHADgGAAQgPAAgIgJgAgaAAQgCABAAADIAcAAIAAgFQgDgHgJAAIgCAAQgJABgDAHgAhTAfIgCgHIgBgeIgKAAIAAgMIAKAAIAAgRIAOAAIAAARIAUAAIAAAMIgUAAIAAAbIABADQADADAGABQADAAADgCIADgCIAFANQgLADgGAAQgNAAgFgJgAD4AdQgIgJAAgLQAAgKAIgJQAIgKANAAQAHAAAHAFIAFAEIAAgeIAMAAIAABPIgMAAIAAgGIgFADQgHAEgHAAQgMAAgJgKgAECgCQgFADAAAIQAAAIAFAGQAGAFAHAAQAIAAAFgFQAFgGAAgIQAAgIgFgDQgFgGgIAAQgHAAgGAGgACDAdQgHgJAAgLQAAgKAHgJQAIgKANAAQAHAAAHAFIAFAEIAAgHIANAAIAAA4IgNAAIAAgGIgFADQgHAEgGAAQgNAAgJgKgACOgCQgGADAAAIQAAAIAGAGQAFAFAHAAQAIAAAFgFQAGgGAAgIQAAgIgGgDQgFgGgIAAQgHAAgFAGgABKAeQgJgJAAgMQAAgOALgIQAJgGALAAQAHAAAIADIAGADIgGALIgDgCQgFgEgHAAQgIAAgFAGQgEAEAAAIQAAAHAEAGQAFAFAIAAQAFAAAGgCIAEgEIAFALIgFAEQgHACgGAAQgPAAgJgJgAiVAjIgHgDIAGgJIAGADQAHACAFAAIAJgBQAFgCAAgDQAAgEgHgCIgHgBQgGAAgFgDQgLgEAAgKQAAgIAHgFQAHgFAKAAQAFAAAKAEIAJADIgGAKQgMgFgGAAQgEAAgEABQgEADAAACQAAADAGABQAEABAJABQASACAAAOQAAATgbAAQgIAAgJgEgAjdAdQgIgJAAgLQAAgKAIgJQAIgKANAAQAHAAAGAFQAEACACACIAAgHIAMAAIAAA4IgMAAIAAgGIgGADQgGAEgHAAQgNAAgIgKgAjSgCQgGADAAAIQAAAIAGAGQAFAFAHAAQAHAAAGgFQAFgGAAgIQAAgIgFgDQgGgGgHAAQgHAAgFAGgAFHAmIgCgCIAAAAIAAACIgBAAIAAgFIACAAIACAAIAAABIAAABIgBABIABACgAFFAjIACAAIAAgBIAAAAIgCAAgADIAmIAAg4IAMAAIAAAHIAGgEQAHgFAEAAQAEAAAEACIgEALQgDgBgEAAQgIAAgEAGIgCADIAAAlgAAaAmIAAg4IAMAAIAAAHIAGgEQAHgFAEAAQAEAAAEACIgEALQgCgBgEAAQgKAAgDAGQgCACAAABIAAAlgAlLAmIAAg4IAMAAIAAAHQACgCAEgCQAHgFAEAAQAHABAIAFIAFAFIAFgFQAGgGAIAAQAMAAAHAKQADAEABAEIAAAnIgMAAIAAgkIgCgDQgDgGgIAAQgIAAgEAGIgDADIAAAkIgMAAIAAgkIgCgEQgDgFgHAAQgJAAgEAGIgCADIAAAlg");
	this.shape.setTransform(23.2,19.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90).to({_off:false},0).wait(510));

	// Layer 1
	this.instance = new lib.logo_mastercard();
	this.instance.setTransform(-7,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:21.2,regY:-3.6,x:16.1,y:-3.6,alpha:0.258},0).wait(1).to({x:17.2,alpha:0.423},0).wait(1).to({x:18.1,alpha:0.547},0).wait(1).to({x:18.8,alpha:0.645},0).wait(1).to({x:19.3,alpha:0.725},0).wait(1).to({x:19.8,alpha:0.791},0).wait(1).to({x:20.2,alpha:0.845},0).wait(1).to({x:20.5,alpha:0.889},0).wait(1).to({x:20.7,alpha:0.925},0).wait(1).to({x:20.9,alpha:0.953},0).wait(1).to({x:21.1,alpha:0.974},0).wait(1).to({x:21.2,alpha:0.989},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:1},0).wait(586));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-31,70.4,54.8);


(lib.logo_alfa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_alfa_forward
	this.instance = new lib.logo_alfa_forward();
	this.instance.setTransform(0,28.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1).to({regY:0.5,y:30.1,alpha:0.325},0).wait(1).to({y:30.7,alpha:0.489},0).wait(1).to({y:31.1,alpha:0.605},0).wait(1).to({y:31.4,alpha:0.693},0).wait(1).to({y:31.7,alpha:0.764},0).wait(1).to({y:31.9,alpha:0.822},0).wait(1).to({y:32,alpha:0.868},0).wait(1).to({y:32.2,alpha:0.906},0).wait(1).to({y:32.3,alpha:0.937},0).wait(1).to({y:32.4,alpha:0.96},0).wait(1).to({alpha:0.978},0).wait(1).to({y:32.5,alpha:0.99},0).wait(1).to({alpha:0.998},0).wait(1).to({regY:0,y:32,alpha:1},0).wait(378));

	// logo_alfa_text
	this.instance_1 = new lib.logo_alfa_text();
	this.instance_1.setTransform(0,14.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(1).to({y:15.6,alpha:0.325},0).wait(1).to({y:16.2,alpha:0.489},0).wait(1).to({y:16.6,alpha:0.605},0).wait(1).to({y:16.9,alpha:0.693},0).wait(1).to({y:17.2,alpha:0.764},0).wait(1).to({y:17.4,alpha:0.822},0).wait(1).to({y:17.5,alpha:0.868},0).wait(1).to({y:17.7,alpha:0.906},0).wait(1).to({y:17.8,alpha:0.937},0).wait(1).to({y:17.9,alpha:0.96},0).wait(1).to({alpha:0.978},0).wait(1).to({y:18,alpha:0.99},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(380));

	// logo_alfa_a
	this.instance_2 = new lib.logo_alfa_a();
	this.instance_2.setTransform(-7,-18);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-4.7,alpha:0.325},0).wait(1).to({x:-3.6,alpha:0.489},0).wait(1).to({x:-2.8,alpha:0.605},0).wait(1).to({x:-2.1,alpha:0.693},0).wait(1).to({x:-1.7,alpha:0.764},0).wait(1).to({x:-1.2,alpha:0.822},0).wait(1).to({x:-0.9,alpha:0.868},0).wait(1).to({x:-0.7,alpha:0.906},0).wait(1).to({x:-0.4,alpha:0.937},0).wait(1).to({x:-0.3,alpha:0.96},0).wait(1).to({x:-0.2,alpha:0.978},0).wait(1).to({x:-0.1,alpha:0.99},0).wait(1).to({x:0,alpha:0.998},0).wait(1).to({alpha:1},0).wait(386));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-37.6,25.2,39.3);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butt();

	this.instance_1 = new lib.butt_inverse();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-22,175,40);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man();
	this.instance.setTransform(38,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:317,regY:-234.5,x:354.3,y:-234.5},0).wait(1).to({x:353.6},0).wait(1).to({x:352.9},0).wait(1).to({x:352.3},0).wait(1).to({x:351.6},0).wait(1).to({x:350.9},0).wait(1).to({x:350.2},0).wait(1).to({x:349.5},0).wait(1).to({x:348.8},0).wait(1).to({x:348.2},0).wait(1).to({x:347.5},0).wait(1).to({x:346.8},0).wait(1).to({x:346.1},0).wait(1).to({x:345.4},0).wait(1).to({x:344.7},0).wait(1).to({x:344},0).wait(1).to({x:343.4},0).wait(1).to({x:342.7},0).wait(1).to({x:342},0).wait(1).to({x:341.3},0).wait(1).to({x:340.6},0).wait(1).to({x:339.9},0).wait(1).to({x:339.3},0).wait(1).to({x:338.6},0).wait(1).to({x:337.9},0).wait(1).to({x:337.2},0).wait(1).to({x:336.5},0).wait(1).to({x:335.8},0).wait(1).to({x:335.1},0).wait(1).to({x:334.5},0).wait(1).to({x:333.8},0).wait(1).to({x:333.1},0).wait(1).to({x:332.4},0).wait(1).to({x:331.7},0).wait(1).to({x:331},0).wait(1).to({x:330.4},0).wait(1).to({x:329.7},0).wait(1).to({x:329},0).wait(1).to({x:328.3},0).wait(1).to({x:327.6},0).wait(1).to({x:326.9},0).wait(1).to({x:326.2},0).wait(1).to({x:325.6},0).wait(1).to({x:324.9},0).wait(1).to({x:324.2},0).wait(1).to({x:323.5},0).wait(1).to({x:322.8},0).wait(1).to({x:322.1},0).wait(1).to({x:321.5},0).wait(1).to({x:320.8},0).wait(1).to({x:320.1},0).wait(1).to({x:319.4},0).wait(1).to({x:318.7},0).wait(1).to({x:318},0).wait(1).to({x:317.3},0).wait(1).to({x:316.7},0).wait(1).to({x:316},0).wait(1).to({x:315.3},0).wait(1).to({x:314.7},0).wait(1).to({x:314},0).wait(1).to({x:313.3},0).wait(1).to({x:312.6},0).wait(1).to({x:311.9},0).wait(1).to({x:311.2},0).wait(1).to({x:310.6},0).wait(1).to({x:309.9},0).wait(1).to({x:309.2},0).wait(1).to({x:308.5},0).wait(1).to({x:307.8},0).wait(1).to({x:307.1},0).wait(1).to({x:306.4},0).wait(1).to({x:305.8},0).wait(1).to({x:305.1},0).wait(1).to({x:304.4},0).wait(1).to({x:303.7},0).wait(1).to({x:303},0).wait(1).to({x:302.3},0).wait(1).to({x:301.7},0).wait(1).to({x:301},0).wait(1).to({x:300.3},0).wait(1).to({x:299.6},0).wait(1).to({x:298.9},0).wait(1).to({x:298.2},0).wait(1).to({x:297.5},0).wait(1).to({x:296.9},0).wait(1).to({x:296.2},0).wait(1).to({x:295.5},0).wait(1).to({x:294.8},0).wait(1).to({x:294.1},0).wait(1).to({x:293.4},0).wait(1).to({x:292.8},0).wait(1).to({x:292.1},0).wait(1).to({x:291.4},0).wait(1).to({x:290.7},0).wait(1).to({x:290},0).wait(1).to({x:289.3},0).wait(1).to({x:288.6},0).wait(1).to({x:288},0).wait(1).to({x:287.3},0).wait(1).to({x:286.6},0).wait(1).to({x:285.9},0).wait(1).to({x:285.2},0).wait(1).to({x:284.5},0).wait(1).to({x:283.9},0).wait(1).to({x:283.2},0).wait(1).to({x:282.5},0).wait(1).to({x:281.8},0).wait(1).to({x:281.1},0).wait(1).to({x:280.4},0).wait(1).to({x:279.7},0).wait(1).to({x:279.1},0).wait(1).to({x:278.4},0).wait(1).to({x:277.7},0).wait(1).to({x:277},0).wait(1).to({x:276.3},0).wait(1).to({x:275.6},0).wait(1).to({x:275},0).wait(1).to({x:274.3},0).wait(1).to({x:273.6},0).wait(1).to({x:272.9},0).wait(1).to({x:272.2},0).wait(1).to({x:271.5},0).wait(1).to({x:270.8},0).wait(1).to({x:270.2},0).wait(1).to({x:269.5},0).wait(1).to({x:268.8},0).wait(1).to({x:268.1},0).wait(1).to({x:267.4},0).wait(1).to({x:266.7},0).wait(1).to({x:266.1},0).wait(1).to({x:265.4},0).wait(1).to({x:264.7},0).wait(1).to({x:264},0).wait(1).to({x:263.3},0).wait(1).to({x:262.6},0).wait(1).to({x:261.9},0).wait(1).to({x:261.3},0).wait(1).to({x:260.6},0).wait(1).to({x:259.9},0).wait(1).to({x:259.2},0).wait(1).to({x:258.5},0).wait(1).to({x:257.8},0).wait(1).to({x:257.2},0).wait(1).to({x:256.5},0).wait(1).to({x:255.8},0).wait(1).to({x:255.1},0).wait(1).to({x:254.4},0).wait(1).to({x:253.7},0).wait(1).to({regX:0,regY:0,x:-64,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43,-388,624,307);


(lib.Logo_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_mastercard_move
	this.instance = new lib.logo_mastercard_move("synched",0);
	this.instance.setTransform(-113,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(680));

	// divider
	this.instance_1 = new lib.divider();
	this.instance_1.setTransform(-52,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},10).wait(670));

	// logo_alfa
	this.instance_2 = new lib.logo_alfa("synched",0);
	this.instance_2.setTransform(4,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(680));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_9 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_10 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_11 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_12 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_13 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_14 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_15 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_16 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_17 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_18 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_19 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_20 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_21 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");
	var mask_graphics_22 = new cjs.Graphics().p("AnkBcIAAi3IPJAAIAAC3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_8,x:-25.3,y:0.7}).wait(1).to({graphics:mask_graphics_9,x:-8.3,y:0.7}).wait(1).to({graphics:mask_graphics_10,x:0.9,y:0.7}).wait(1).to({graphics:mask_graphics_11,x:7.5,y:0.7}).wait(1).to({graphics:mask_graphics_12,x:12.6,y:0.7}).wait(1).to({graphics:mask_graphics_13,x:16.7,y:0.7}).wait(1).to({graphics:mask_graphics_14,x:20.1,y:0.7}).wait(1).to({graphics:mask_graphics_15,x:22.9,y:0.7}).wait(1).to({graphics:mask_graphics_16,x:25.1,y:0.7}).wait(1).to({graphics:mask_graphics_17,x:26.9,y:0.7}).wait(1).to({graphics:mask_graphics_18,x:28.3,y:0.7}).wait(1).to({graphics:mask_graphics_19,x:29.4,y:0.7}).wait(1).to({graphics:mask_graphics_20,x:30.2,y:0.7}).wait(1).to({graphics:mask_graphics_21,x:30.6,y:0.7}).wait(1).to({graphics:mask_graphics_22,x:30.7,y:0.7}).wait(658));

	// redline
	this.instance_3 = new lib.redline();
	this.instance_3.setTransform(127,-9.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(672));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-35.6,143.6,69.6);


(lib.bgman_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.sunflare("synched",0,false);
	this.instance.setTransform(199.9,-96.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// Layer 1
	this.instance_1 = new lib.bg("synched",0,false);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#393939").ss(1,1,1).p("AwArjMAgBAAAIAAXGMggBAAAg");
	this.shape.setTransform(556.5,-181.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010005").s().p("AwALkIAA3HMAgAAAAIAAXHg");
	this.shape_1.setTransform(556.5,-181.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-388,695.1,465.3);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logoGroup
	this.instance = new lib.Logo_group("synched",0);
	this.instance.setTransform(557,-156);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(326).to({startPosition:326},0).wait(1).to({regX:-27.4,regY:1.2,x:529.6,y:-154.5,alpha:0.994,startPosition:327},0).wait(1).to({y:-153.7,alpha:0.977,startPosition:328},0).wait(1).to({y:-152.5,alpha:0.95,startPosition:329},0).wait(1).to({y:-150.7,alpha:0.912,startPosition:330},0).wait(1).to({y:-148.5,alpha:0.863,startPosition:331},0).wait(1).to({y:-145.7,alpha:0.801,startPosition:332},0).wait(1).to({y:-142.2,alpha:0.726,startPosition:333},0).wait(1).to({y:-138,alpha:0.632,startPosition:334},0).wait(1).to({y:-132.5,alpha:0.512,startPosition:335},0).wait(1).to({y:-124.9,alpha:0.346,startPosition:336},0).wait(1).to({regX:0,regY:0,x:557,y:-110.4,alpha:0,startPosition:337},0).wait(12));

	// Legal
	this.instance_1 = new lib.legal_1();
	this.instance_1.setTransform(0,-34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(239).to({_off:false},0).wait(1).to({regX:254,regY:-139,x:254,y:-165.1,alpha:0.39},0).wait(1).to({y:-161.9,alpha:0.552},0).wait(1).to({y:-159.7,alpha:0.662},0).wait(1).to({y:-158,alpha:0.746},0).wait(1).to({y:-156.7,alpha:0.811},0).wait(1).to({y:-155.7,alpha:0.863},0).wait(1).to({y:-154.9,alpha:0.903},0).wait(1).to({y:-154.2,alpha:0.936},0).wait(1).to({y:-153.7,alpha:0.96},0).wait(1).to({y:-153.4,alpha:0.978},0).wait(1).to({y:-153.1,alpha:0.991},0).wait(1).to({y:-153,alpha:0.998},0).wait(1).to({regX:0,regY:0,x:0,y:-14,alpha:1},0).wait(85).to({regX:254,regY:-139,x:254,y:-152.7,alpha:0.994},0).wait(1).to({y:-151.9,alpha:0.977},0).wait(1).to({y:-150.7,alpha:0.95},0).wait(1).to({y:-149.1,alpha:0.912},0).wait(1).to({y:-146.9,alpha:0.863},0).wait(1).to({y:-144.2,alpha:0.801},0).wait(1).to({y:-140.9,alpha:0.726},0).wait(1).to({y:-136.8,alpha:0.632},0).wait(1).to({y:-131.5,alpha:0.512},0).wait(1).to({y:-124.2,alpha:0.346},0).wait(1).to({regX:0,regY:0,x:0,y:30,alpha:0},0).wait(12));

	// button
	this.instance_2 = new lib.button();
	this.instance_2.setTransform(-3.1,-153.2,0.174,0.174,0,0,0,0,-0.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(239).to({_off:false},0).wait(1).to({regX:0.5,regY:-2.2,scaleX:0.44,scaleY:0.44,x:-2.8,y:-154,alpha:0.375},0).wait(1).to({scaleX:0.54,scaleY:0.54,y:-154.2,alpha:0.532},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-2.7,y:-154.4,alpha:0.641},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-2.6,y:-154.5,alpha:0.724},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-154.6,alpha:0.789},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:-154.7,alpha:0.842},0).wait(1).to({scaleX:0.79,scaleY:0.79,alpha:0.885},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:-154.8,alpha:0.919},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.946},0).wait(1).to({scaleX:0.85,scaleY:0.85,alpha:0.967},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-2.5,y:-154.9,alpha:0.983},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.994},0).wait(1).to({regX:0,regY:-0.6,scaleX:0.87,scaleY:0.87,x:-3,y:-153.5,alpha:1},0).wait(84).to({regY:-0.1,scaleX:0.87,scaleY:0.87,y:-153.1},0).wait(1).to({regX:0.5,regY:-2.2,x:-2.5,y:-154.7,alpha:0.994},0).wait(1).to({y:-154.1,alpha:0.977},0).wait(1).to({y:-153.2,alpha:0.95},0).wait(1).to({y:-151.9,alpha:0.912},0).wait(1).to({y:-150.3,alpha:0.863},0).wait(1).to({y:-148.2,alpha:0.801},0).wait(1).to({y:-145.7,alpha:0.726},0).wait(1).to({x:-2.6,y:-142.6,alpha:0.632},0).wait(1).to({y:-138.6,alpha:0.512},0).wait(1).to({y:-133.1,alpha:0.346},0).wait(1).to({regX:0,regY:-0.1,x:-3.1,y:-119.8,alpha:0},0).wait(12));

	// CARD
	this.instance_3 = new lib.card_1();
	this.instance_3.setTransform(339,-198);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).wait(1).to({regX:-36,regY:-4,x:303,y:-181.7,alpha:0.422},0).wait(1).to({y:-172.4,alpha:0.616},0).wait(1).to({y:-166.4,alpha:0.741},0).wait(1).to({y:-162.2,alpha:0.828},0).wait(1).to({y:-159.2,alpha:0.89},0).wait(1).to({y:-157.1,alpha:0.935},0).wait(1).to({y:-155.6,alpha:0.966},0).wait(1).to({y:-154.6,alpha:0.986},0).wait(1).to({y:-154.1,alpha:0.997},0).wait(1).to({regX:0,regY:0,x:339,y:-150,alpha:1},0).wait(102).to({regX:-36,regY:-4,x:303,y:-153.8,alpha:0.996},0).wait(1).to({y:-153.3,alpha:0.983},0).wait(1).to({y:-152.4,alpha:0.961},0).wait(1).to({y:-151.1,alpha:0.928},0).wait(1).to({y:-149.3,alpha:0.883},0).wait(1).to({y:-146.9,alpha:0.824},0).wait(1).to({y:-143.8,alpha:0.747},0).wait(1).to({y:-139.8,alpha:0.647},0).wait(1).to({y:-134.5,alpha:0.514},0).wait(1).to({y:-127,alpha:0.327},0).wait(1).to({regX:0,regY:0,x:339,y:-110,alpha:0},0).to({_off:true},6).wait(122));

	// TXT
	this.instance_4 = new lib.TXT("synched",0);
	this.instance_4.setTransform(34,-229);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).wait(315).to({x:13,y:-220.9,startPosition:315},0).wait(1).to({regX:-56.1,regY:74.3,x:-43.1,y:-146.5,alpha:0.996,startPosition:316},0).wait(1).to({y:-146.3,alpha:0.984,startPosition:317},0).wait(1).to({y:-145.9,alpha:0.963,startPosition:318},0).wait(1).to({y:-145.2,alpha:0.931,startPosition:319},0).wait(1).to({y:-144.4,alpha:0.888,startPosition:320},0).wait(1).to({y:-143.2,alpha:0.83,startPosition:321},0).wait(1).to({y:-141.7,alpha:0.754,startPosition:322},0).wait(1).to({y:-139.7,alpha:0.656,startPosition:323},0).wait(1).to({y:-137.1,alpha:0.524,startPosition:324},0).wait(1).to({y:-133.3,alpha:0.336,startPosition:325},0).wait(1).to({regX:0,regY:0,x:13,y:-200.9,alpha:0,startPosition:326},0).wait(12));

	// White
	this.instance_5 = new lib.blank();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:244,regY:-154,x:248.3,y:-154},0).wait(1).to({x:261.3},0).wait(1).to({x:283.3},0).wait(1).to({x:315},0).wait(1).to({x:357.7},0).wait(1).to({x:413.3},0).wait(1).to({x:485.6},0).wait(1).to({x:581.4},0).wait(1).to({x:717.7},0).wait(1).to({regX:0,regY:0,x:730.8,y:0},0).to({_off:true},1).wait(88).to({_off:false,x:-241},0).wait(1).to({regX:244,regY:-154,x:87.7,y:-154},0).wait(1).to({x:136.1},0).wait(1).to({x:169.4},0).wait(1).to({x:193.5},0).wait(1).to({x:211.3},0).wait(1).to({x:224.3},0).wait(1).to({x:233.5},0).wait(1).to({x:239.6},0).wait(1).to({x:243},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(250));

	// BG
	this.instance_6 = new lib.bgman_1("synched",0,false);
	this.instance_6.setTransform(13,30);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({_off:true},109).wait(249));

	// White
	this.instance_7 = new lib.blank();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(359));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-449,769,703);


// stage content:
(lib.alfa_mastercard_cashback_man_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.btnMain = new lib.btnMain();
	this.btnMain.setTransform(364,45,3.033,0.225);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.btnMain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg42AHCIAAuDMBxuAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,44,730,92);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;