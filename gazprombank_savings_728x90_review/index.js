(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,514,227],[516,0,104,104],[0,304,524,73],[0,229,524,73]]}
];


// symbols:



(lib.bg = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.insurance = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legal1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.legal2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
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


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(-146.9875,-150.002,0.375,1.82);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(-192,-514,90,728), null);


(lib.txt0201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00ADEF").s().p("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");
	this.shape.setTransform(170.875,2.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#113D70").s().p("AKCBrIAHgeQADgOACgNIAlgDIgKAeIgMAdIgNAZIgXACIAJgagAg2BCIAHgDIAHgFQAJgJAEgVQADgWAAgjIAAhlIBqAAIAADeIgkAAIAAi+IgmAAIAABCQAAAagCAXQgCAYgFARQgHASgNAKQgFAEgHADQgGACgIAAgAIEBQQgPgPgHgZQgHgaAAghQAAghAIgZQAIgaAPgPQAQgOAWAAQAYAAAOAQQAOAPAHAYQAHAZgBAfQAAApgJAaQgIAZgQAMQgPALgUAAQgWAAgPgOgAIZhaQgHALgEATQgDASAAAYQAAAXADATQAEASAHALQAHALALAAQALAAAHgMQAGgMADgTQADgTAAgWQAAgUgDgTQgCgSgHgMQgHgMgLgBQgMABgGALgAoVBQQgPgPgHgZQgHgaAAghQAAghAIgZQAIgaAPgPQAQgOAWAAQAYAAAOAQQAOAPAHAYQAHAZgBAfQAAApgJAaQgIAZgQAMQgPALgUAAQgWAAgPgOgAoAhaQgHALgEATQgDASAAAYQAAAXADATQAEASAHALQAHALALAAQALAAAHgMQAGgMADgTQADgTAAgWQAAgUgDgTQgCgSgHgMQgHgMgLgBQgMABgGALgAG7BcQgEgMgDgNIgGgcQgCgOgEgKQgEgJgGgGQgHgFgKAAIgEAAIAABhIgiAAIAAjeIAiAAIAABjIAEAAIAphjIAnAAIg1BoQANAEAHAIQAIAIAEAKQAEAMADAOIAHAfQADAQAFAPgADxBcIAAjeIBgAAIAAAgIg8AAIAAC+gAB3BcIAAjeIBcAAIAAAgIg4AAIAAA8IA0AAIAAAeIg0AAIAABFIA8AAIAAAfgAiWBcIAAg+IABg6IACgrIgBAAQgFARgHATIgMAhIglBeIghAAIAAjeIAgAAIAAA/IgBA3IgDAuIABAAIAIgXIAJgYIAJgWIAkhfIAgAAIAADegAk6BcIAAi+IgzAAIAAC+IgkAAIAAjeIB6AAIAADegApeBcQgEgMgDgNIgGgcQgCgOgEgKQgEgJgGgGQgHgFgKAAIgEAAIAABhIgiAAIAAjeIAiAAIAABjIAEAAIAphjIAnAAIg1BoQANAEAHAIQAIAIAEAKQAEAMADAOIAHAfQADAQAFAPg");
	this.shape_1.setTransform(2.125,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0201, new cjs.Rectangle(-70.9,-21.7,381,43.5), null);


(lib.txt0101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00ADEF").s().p("AgRBvIAAi9IgoAAIAAggIBzAAIAAAgIgpAAIAAC9g");
	this.shape.setTransform(155.775,0.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADEF").s().p("AgvBvIAAjdIBbAAIAAAfIg3AAIAAA9IAzAAIAAAcIgzAAIAABHIA7AAIAAAeg");
	this.shape_1.setTransform(143.875,0.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00ADEF").s().p("AAZBwIAAhcIgCAAQgHADgIACQgIACgIAAQgZgBgMgOQgNgPAAgcIAAhRIAjAAIAABMQAAAPAGAJQAGAKAOAAIALgBQAGgBAEgDIAAhpIAjAAIAADgg");
	this.shape_2.setTransform(129.3,0.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADEF").s().p("AgTBkQgSgNgKgZQgJgZAAgiQAAgfAIgWQAHgWANgOQAMgOAPgGQAOgGAPAAIASACQAHABAEADIgHAdIgIgDIgNgBQgMAAgLAIQgKAIgHASQgIATAAAdQAAAdAHASQAHASAKAIQALAIANAAIANgBIAJgDIAFAeQgFACgJACQgIABgLAAQgZAAgRgNg");
	this.shape_3.setTransform(115.575,0.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#113D70").s().p("AAeCFIAAg+IABg7IACgrIgBAAQgFASgGARIgNAiIgkBfIghAAIAAjeIAgAAIAAA/IgBA2IgDAvIABAAIAIgXIAKgZIAIgXIAjhdIAgAAIAADegAgbhpQgLgIgBgTIAXAAQABAIAEAGQADAFAIAAQAHAAAFgFQADgGABgIIAYAAQgCATgLAIQgKAIgRAAQgRAAgKgIg");
	this.shape_4.setTransform(95.65,-1.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#113D70").s().p("AhFBvIgQgBIAAjdIAjAAIAABWIAIgBIAIgBQAUABAOAIQAPAIAIANQAJAQAAAUQAAAQgEAMQgFAMgIAKQgLALgPAGQgRAGgWAAIgTgBgAgyACIAABRIAFAAIAFABQALAAAJgGQAIgGAEgJQAFgJAAgMQAAgSgKgMQgKgKgQgBIgFAAIgGABgAAzBuIAAjdIAjAAIAADdg");
	this.shape_5.setTransform(77.025,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#113D70").s().p("AAaBvIAAhiIgzAAIAABiIgkAAIAAjdIAkAAIAABcIAzAAIAAhcIAkAAIAADdg");
	this.shape_6.setTransform(58.375,0.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#113D70").s().p("AgrBvIgQgBIAAjdIAjAAIAABVIAHAAIAKgBQAfABARARQATARAAAfQAAARgEAMQgFALgIAKQgKALgSAGQgPAGgWAAIgVgBgAgYACIAABRIAFAAIAFABQAMAAAIgGQAJgGAFgJQAEgJAAgMQgBgSgJgMQgKgKgRgBIgFAAIgGABg");
	this.shape_7.setTransform(43.4,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#113D70").s().p("AhDBTIAHgCIAGgFQAKgJADgVQAEgWgBgjIAAhlIBqAAIAADeIgjAAIAAi/IgmAAIAABCQAAAagCAYQgCAXgGASQgGASgNAKQgGAEgGACQgHADgHAAg");
	this.shape_8.setTransform(26.625,0.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#113D70").s().p("AgvBvIAAjdIBbAAIAAAfIg3AAIAAA9IAzAAIAAAcIgzAAIAABHIA7AAIAAAeg");
	this.shape_9.setTransform(14.375,0.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#113D70").s().p("AgRBvIAAi9IgoAAIAAggIBzAAIAAAgIgpAAIAAC9g");
	this.shape_10.setTransform(1.475,0.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#113D70").s().p("AAeBvIAAg+IABg6IACgrIgBAAQgFASgHASIgMAhIgkBeIggAAIAAjdIAfAAIAAA/IgBA2IgDAvIABAAIAIgYIAJgYIAJgWIAjheIAhAAIAADdg");
	this.shape_11.setTransform(-12.85,0.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#113D70").s().p("AAaBvIAAi+IgzAAIAAC+IgjAAIAAjdIB5AAIAADdg");
	this.shape_12.setTransform(-29,0.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#113D70").s().p("AglBjQgPgOgHgaQgHgaAAghQAAghAIgZQAIgaAPgOQAQgOAVgBQAYABAOAPQAOAPAHAZQAHAZgBAeQAAApgJAaQgIAZgQAMQgPAMgTAAQgWAAgPgPgAgQhHQgHALgEATQgDATAAAWQAAAZADASQAEATAHAKQAHALAKAAQALAAAHgMQAGgLADgTQADgUAAgVQAAgVgDgSQgCgTgHgMQgHgMgLAAQgLAAgGALg");
	this.shape_13.setTransform(-44.7233,0.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#113D70").s().p("AAZBvQgEgLgDgOIgGgcQgDgNgDgKQgEgKgGgGQgGgGgLAAIgDAAIAABiIgjAAIAAjdIAjAAIAABjIADAAIAphjIAmAAIg0BnQAMAEAIAHQAHAIAFAMQAEALADAOIAHAfQADAQAFAPg");
	this.shape_14.setTransform(-58.475,0.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#113D70").s().p("AAiBvIgMg6IgrAAIgMA6IgiAAIAxjdIApAAIAtDdgAASAaIgJgyIgEgZIgEgaIgBAAIgDAaIgEAZIgKAyIAjAAg");
	this.shape_15.setTransform(-73.9,0.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#113D70").s().p("AAaBvIAAhiIgzAAIAABiIgkAAIAAjdIAkAAIAABcIAzAAIAAhcIAkAAIAADdg");
	this.shape_16.setTransform(-89.325,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0101, new cjs.Rectangle(-99.4,-21.7,263.6,43.5), null);


(lib.percentZero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113D70").s().p("AgWA6QgKgJgFgPQgFgPAAgTQABgSAFgPQAFgPAKgJQAJgJANAAIAAAAQAPAAAJAKQAJAJAEAPQAFAPAAARQAAAXgGAOQgGAQgKAHQgKAHgLAAQgMAAgKgJgAgJgnQgEAGgBAKQgCALAAAMQAAANABALQACALAEAFQAEAHAFAAQAHAAAEgHQAEgGABgKQACgLAAgNQAAgLgCgLQgBgKgEgHQgEgGgHAAQgFAAgEAGg");
	this.shape.setTransform(0.275,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percentZero, new cjs.Rectangle(-4,-6,8.6,13.4), null);


(lib.percentText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113D70").s().p("AF2BnIAFgCIAFgEIAFgFIAFgHIABgCIAAgCIAAgBIgBgCIgXg5IAMAAIAOAlIACAHIACAFIACgFIACgHIAMglIANAAIgRAtIgIASIgHAMIgHAJQgEAEgEABIgGADgAEOBRQgGgEgEgIQgEgHAAgJQAAgKAEgHQADgIAHgEQAHgFAIAAQAIAAAFADQAFADADAFQADAEABAGIABAJIAAADIAAACIgsAAQAAAIADAFQADAEAFADQAEACAHAAIAKgBIAHgDIACAJIgJADIgMABQgKgBgHgDgAEsAuIgBgIQgBgEgEgDQgDgDgHgBQgFABgEADQgDACgCAFIgDAIIAhAAIAAAAgACSBQQgIgDgDgIQgEgGAAgLQAAgJAEgIQAFgHAHgFQAHgDAKAAIAKABIAHACIgDAJIgFgCIgJgBQgHAAgEADQgFADgDAFQgCAGAAAGQAAAHADAGQACAFAFADQAFACAGABIAJgBIAGgDIACAJIgIADIgLABQgJAAgHgFgAAvBRQgHgEgEgHQgEgIAAgKQAAgKAEgIQAFgHAGgEQAIgEAIAAQAJABAHADQAHAFAEAGQADAIAAAJQAAAMgEAHQgFAIgHADQgHAEgIAAQgJAAgGgEgAA0AgQgEADgCAGQgCAFAAAGQAAAHACAGQADAFAEADQAEADAGABQAFgBAFgDQAEgDACgFQACgGABgHIgCgLQgCgGgEgDQgEgEgHAAQgHAAgEAEgAh4BSQgEgCgCgEQgCgFAAgEQAAgMAKgFQAKgHASAAIAAgBIgBgGQgBgDgDgDQgDgCgHgBQgEAAgEACQgFABgDACIgCgHQADgDAGgBIALgCQAKAAAFAEQAGAEACAFQABAGAAAHIAAAXIABAJIAAAHIgKAAIgBgIIAAAAQgDAEgFACQgFADgGAAQgHAAgFgDgAhnA0QgGABgEAEQgDACAAAHQAAAFACADQAEACAFABQAFgBAEgDQAEgDACgEIAAgCIAAgCIAAgLIgEAAIgJABgAk2BSQgEgCgCgEQgCgFAAgEQAAgMAKgFQAKgHASAAIAAgBIgBgGQgBgDgDgDQgDgCgGgBQgFAAgEACQgEABgEACIgCgHQAEgDAFgBIALgCQAKAAAFAEQAFAEADAFQABAGAAAHIAAAXIABAJIAAAHIgKAAIgBgIIAAAAQgDAEgFACQgFADgHAAQgGAAgFgD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");
	this.shape.setTransform(-92,54.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percentText, new cjs.Rectangle(-138,35.6,93.5,32.800000000000004), null);


(lib.percentLineVert = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113D70").s().p("Aj+AIIAAgPIH9AAIAAAPg");
	this.shape.setTransform(-50.7149,32.8,1.7394,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percentLineVert, new cjs.Rectangle(-95,32,88.6,1.6000000000000014), null);


(lib.percentLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113D70").s().p("AhEBxIB1jhIAUAAIh1Dhg");
	this.shape.setTransform(-0.125,0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percentLine, new cjs.Rectangle(-7,-11,13.8,22.7), null);


(lib.percent62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#113D70").s().p("AgNBZIBEgGQggBqggA2IgrAFQAchMALhTgAkJB/QgdgtAAhNQAAhzA7hJQAlguA8gNIAjgFIAAA4IgeAEQhMATgUBsIADAAQAYgkAnAAQAoAAAYAiQAZAjAAA5QAAA8gbAoQgcAsg0AAQg1AAgfgvgAjhgLQgEAIAAAWQABAxAOAdQAMAbAVAAQAqAAAAhcQAAgjgLgVQgMgWgWAAQgbAAgOAjgABZCoIAAgsIAkgyQAyhEASgfQAfg4AAgsQAAhAg2AAQgaAAggAVIgNg0QAjgbAwAAQA3AAAcAkQAYAeAAAzQAAAzgeA6QgUAlguA7IgZAhIAAABIB/AAIAAA7g");
	this.shape.setTransform(0.525,0.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percent62, new cjs.Rectangle(-29.5,-24.7,59.6,50.3), null);


(lib.legal2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal2();
	this.instance.parent = this;
	this.instance.setTransform(62,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal2_1, new cjs.Rectangle(62,-164,524,73), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal1();
	this.instance.parent = this;
	this.instance.setTransform(62,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(62,-164,524,73), null);


(lib.insurance_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.insurance();
	this.instance.parent = this;
	this.instance.setTransform(-30,-25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.insurance_1, new cjs.Rectangle(-30,-25,52,52), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvDDLIAAmWIeHAAIAAGWg");
	mask.setTransform(96.375,20.35);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00467C").s().p("AAUBZIgGgfIgcAAIgEAfIgqAAIAjixIAzAAIAkCxgAAIATIgIg1IgHA1IAPAAg");
	this.shape.setTransform(159.05,20.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00467C").s().p("AhBBZIAAixIAjAAIAeAqIAfgqIAjAAIAACxIgpAAIAAhsIgZAfIgYgfIAABsg");
	this.shape_1.setTransform(132.2,20.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00467C").s().p("AgqBZIAAixIBVAAIAAAsIgrAAIAACFg");
	this.shape_2.setTransform(56.4,20.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00467C").s().p("AAMBZIgVhIIgKAAIAABIIgpAAIAAixIApAAIAABAIAJAAIAWhAIAsAAIgfBVIAkBcg");
	this.shape_3.setTransform(186.7,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00467C").s().p("AAOBZIAAhHIgbAAIAABHIgpAAIAAixIApAAIAABAIAbAAIAAhAIApAAIAACxg");
	this.shape_4.setTransform(172.45,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00467C").s().p("Ag0BZIAAixIBfAAIAAArIg2AAIAAAYIAIAAQAVgBAPAKQATANAAAeQAAAjgYAPQgNAIgRAAgAgLA1IAGAAQAFAAAFgDQAHgGAAgMQAAgTgRAAIgGAAg");
	this.shape_5.setTransform(146.85,20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00467C").s().p("AgyA/QgOgZAAgmQAAgmAOgYQARgdAhABQAigBARAdQAOAYAAAmQAAAmgOAZQgRAdgigBQghABgRgdgAgVAAQAAAwAVAAQAWAAAAgwQAAgvgWAAQgVAAAAAvg");
	this.shape_6.setTransform(117.05,20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00467C").s().p("Ag2BZIAAixIA3AAQAaAAAPAVQANARAAAWQAAAVgMAQQgOAVgcAAIgNAAIAAA7gAgMgIIAKAAQAOAAAAgUQAAgVgOABIgKAAg");
	this.shape_7.setTransform(103.95,20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00467C").s().p("Ag3BZIAAixIBvAAIAACxIgpAAIAAiGIgdAAIAACGg");
	this.shape_8.setTransform(90.525,20.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00467C").s().p("AgtBTIAAglQANAGAPgBQAJABAFgGQADgFAAgHQAAgQgTAAIgRAAIAAgmIASAAQAGABAGgEQAGgFAAgJQAAgQgRAAQgMAAgLAEIgBgmQASgFATAAQAWAAAOAPQAMANAAATQAAAQgJAMQgHAJgKAEIAAACQALADAIAJQAJAMAAASQAAAYgPAPQgPAOgWAAQgWAAgRgKg");
	this.shape_9.setTransform(78.325,20.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00467C").s().p("AATBZIgEgeIgcAAIgGAeIgqAAIAkixIAzAAIAjCxgAAIATIgIg1IgHA1IAPAAg");
	this.shape_10.setTransform(66.3,20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00467C").s().p("AgICWQg1gDgjghQgHgGgDgMQgQgJgIgMQgDgFACgLIABgEQgLgJgCgDQgFgJAGgNQgFgFgBgFQgCgFABgGQAAgJAJgLQAQgRAogOQAOgEAugLIAngHQAYgEAPgFQg1gJgxAJQg0AJgrAdIAEgLQArgcArgJQA1gMBDAMQAIgEACgIQgjgMgxAAQgZABghAIQglAJgVAMIAJgLQARgKAhgJQAkgKAcAAQAVgBAPACQAQADAZAGQgDgGgRgHQgagMgnABQgqABgkAQIAVgMQAhgPArABQAVAAAVAHQAWAIAOAOQAFAGABAFQAWAMAIAMQADAHgBAIQAIAFAFAGQADAFABAHQABAKgFAGQAEACADAFIADAHQAEAPgTAQQgTARgmAKQgYAGghAFIgvAJQAdAHAdAAQAmAAAqgOQAVgIANgHIgCAHQgbAQgpAJQgjAIgXgBQgmgCgggKIgUAHQAmARAwAEQAXABAggFQAhgFAegLIgFAHQgPAIgcAHQgbAHgRAAQgnACgggGQgWgEgggOQgEAEgBAFQAxAZAxADQAvADA3gSIgGAHQhiAohZgsIgFgCQAFAIAWAMQAcAPAbACQATACAYgDQAWgDAQgGIgMAGQgeANggAAIgJAAgAhqBQIAEgHIgMgHQgBAGAJAIgAhsA2IARAKIANgHIgVgJgAB8gQQgNALgoALQgcAHgpAHQgqAHgTAFQgOADgKAFIAZALQAZgIAZgEQAkgGAXgFQAlgIAWgLQAdgNgKgQgAh6AsIAFgFIgLgHQgDAHAJAFgABjgpQgNAHggAIQg5AKgsAKQgzAKgUARIAOAIQAQgJASgFQAhgIAmgGQA6gIAlgNQAOgFAHgHIgKgFIgIgEIAAAAgAAUg3QgvAGgxANQhIAWARAXQACgEAIgFQAQgJAZgIQAagHAygJQA1gKAYgHQgRgEgJgBIgLgBIgQABgABxgyIAOAIQAEgIgJgIQgFAGgEACgAA6hDQALACAXAHQACABAFgEIAGgGQgQgHgNgDQgJAGgJAEgABWhXIAXAHQgCgJgOgIQAAADgHAHg");
	this.shape_11.setTransform(20.3362,20.3416);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00467C").s().p("AiPCQQg7g8AAhUQAAhTA7g8QA8g7BTgBQBUABA8A7QA7A8AABTQAABUg7A8Qg8A8hUgBQhTABg8g8gAiKiKQg5A5AABRQAABRA5A6QA6A5BQAAQBRAAA6g5QA5g6AAhRQAAhRg5g5Qg6g6hRABQhQgBg6A6g");
	this.shape_12.setTransform(20.325,20.35);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,192.8,40.7), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00ACED","#4EC4EC"],[0,1],-178.1,18.1,-126.2,18.1).s().p("EgcegroMA48gKtMAAABh/Mg48AKtg");
	this.shape.setTransform(35.25,-195.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blue, new cjs.Rectangle(-147,-543,364.5,695.7), null);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-128,-65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(-128,-65,257,113.5), null);


(lib.TXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6NCdIAAk5MA0cAAAIAAE5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:69.1,y:-15.175}).wait(85).to({graphics:null,x:0,y:0}).wait(24));

	// txt0201
	this.instance = new lib.txt0201();
	this.instance.parent = this;
	this.instance.setTransform(-366.75,-17);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:99,regY:2.6,x:-266.55,y:-14.4,alpha:0.5018},0).wait(1).to({x:-262.45,alpha:0.5078},0).wait(1).to({x:-254.55,alpha:0.5196},0).wait(1).to({x:-241.1,alpha:0.5395},0).wait(1).to({x:-219.15,alpha:0.5721},0).wait(1).to({x:-182.75,alpha:0.6262},0).wait(1).to({x:-121.85,alpha:0.7166},0).wait(1).to({x:-46.25,alpha:0.8288},0).wait(1).to({x:5.8,alpha:0.9061},0).wait(1).to({x:35.6,alpha:0.9504},0).wait(1).to({x:52.9,alpha:0.976},0).wait(1).to({x:62.7,alpha:0.9906},0).wait(1).to({x:67.6,alpha:0.9979},0).wait(1).to({regX:0,regY:0,x:-30,y:-17,alpha:1},0).wait(1).to({regX:99,regY:2.6,x:69,y:-14.4},0).wait(1).to({x:68.8},0).wait(1).to({x:68.3},0).wait(1).to({x:68.05},0).wait(1).to({regX:0,regY:0,x:-31,y:-17},0).wait(50).to({regX:99,regY:2.6,x:68,y:-14.4,alpha:0.9972},0).wait(1).to({alpha:0.9887},0).wait(1).to({alpha:0.9738},0).wait(1).to({alpha:0.9522},0).wait(1).to({alpha:0.9229},0).wait(1).to({alpha:0.8849},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.7771},0).wait(1).to({alpha:0.7023},0).wait(1).to({alpha:0.6078},0).wait(1).to({alpha:0.4847},0).wait(1).to({alpha:0.3123},0).wait(1).to({regX:0,regY:0,x:-31,y:-17,alpha:0},0).to({_off:true},1).wait(24));

	// txt0101
	this.instance_1 = new lib.txt0101();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18,-17);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).wait(1).to({regX:33,regY:-1.6,x:20.85,y:-18.6,alpha:0.389},0).wait(1).to({x:23.4,alpha:0.5594},0).wait(1).to({x:25,alpha:0.6653},0).wait(1).to({x:26.1,alpha:0.7392},0).wait(1).to({x:26.95,alpha:0.7939},0).wait(1).to({x:27.55,alpha:0.8359},0).wait(1).to({x:28.05,alpha:0.8688},0).wait(1).to({x:28.45,alpha:0.8951},0).wait(1).to({x:28.75,alpha:0.9164},0).wait(1).to({x:29.05,alpha:0.9336},0).wait(1).to({x:29.25,alpha:0.9477},0).wait(1).to({x:29.4,alpha:0.9592},0).wait(1).to({x:29.55,alpha:0.9686},0).wait(1).to({x:29.65,alpha:0.9762},0).wait(1).to({x:29.75,alpha:0.9824},0).wait(1).to({x:29.85,alpha:0.9873},0).wait(1).to({x:29.9,alpha:0.9912},0).wait(1).to({x:29.95,alpha:0.9943},0).wait(1).to({alpha:0.9965},0).wait(1).to({x:30,alpha:0.9982},0).wait(1).to({alpha:0.9992},0).wait(1).to({alpha:0.9998},0).wait(1).to({regX:0,regY:0,x:-3,y:-17,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-38.7,352.4,71);


(lib.SLIDE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_1 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_2 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_3 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_4 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_5 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_6 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_7 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_8 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_9 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_10 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_11 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_12 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_13 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_14 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_15 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_16 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_17 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_18 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_graphics_19 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-12,y:75}).wait(1).to({graphics:mask_graphics_1,x:-12,y:75.4911}).wait(1).to({graphics:mask_graphics_2,x:-12,y:77.0992}).wait(1).to({graphics:mask_graphics_3,x:-12,y:80.0806}).wait(1).to({graphics:mask_graphics_4,x:-12,y:84.7943}).wait(1).to({graphics:mask_graphics_5,x:-12,y:91.7644}).wait(1).to({graphics:mask_graphics_6,x:-12,y:101.7947}).wait(1).to({graphics:mask_graphics_7,x:-12,y:116.1873}).wait(1).to({graphics:mask_graphics_8,x:-12,y:137.1411}).wait(1).to({graphics:mask_graphics_9,x:-12,y:168.0643}).wait(1).to({graphics:mask_graphics_10,x:-12,y:210.2071}).wait(1).to({graphics:mask_graphics_11,x:-12,y:251.9868}).wait(1).to({graphics:mask_graphics_12,x:-12,y:282.0223}).wait(1).to({graphics:mask_graphics_13,x:-12,y:301.8795}).wait(1).to({graphics:mask_graphics_14,x:-12,y:315.125}).wait(1).to({graphics:mask_graphics_15,x:-12,y:324.0141}).wait(1).to({graphics:mask_graphics_16,x:-12,y:329.8674}).wait(1).to({graphics:mask_graphics_17,x:-12,y:333.4943}).wait(1).to({graphics:mask_graphics_18,x:-12,y:335.4192}).wait(1).to({graphics:mask_graphics_19,x:-12,y:336}).wait(159).to({graphics:null,x:0,y:0}).wait(14));

	// blue
	this.instance = new lib.blue();
	this.instance.parent = this;
	this.instance.setTransform(63,876);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(1).to({regX:35.3,regY:-195.2,x:98.3,y:678.65},0).wait(1).to({y:671.75},0).wait(1).to({y:658.95},0).wait(1).to({y:638.75},0).wait(1).to({y:608.85},0).wait(1).to({y:565.8},0).wait(1).to({y:504.05},0).wait(1).to({y:414.1},0).wait(1).to({y:281.4},0).wait(1).to({y:100.6},0).wait(1).to({y:-78.7},0).wait(1).to({y:-207.55},0).wait(1).to({y:-292.75},0).wait(1).to({y:-349.6},0).wait(1).to({y:-387.75},0).wait(1).to({y:-412.85},0).wait(1).to({y:-428.4},0).wait(1).to({y:-436.7},0).wait(1).to({regX:0,regY:0,x:63,y:-244},0).wait(139).to({regX:35.3,regY:-195.2,x:98.3,y:-439.5},0).wait(1).to({y:-440.85},0).wait(1).to({y:-444.15},0).wait(1).to({y:-452.15},0).wait(1).to({y:-462.6},0).wait(1).to({y:-467.05},0).wait(1).to({y:-468.75},0).wait(1).to({regX:0,regY:0,x:63,y:-274},0).to({_off:true},1).wait(14));

	// MASK copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_169 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_170 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_171 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_172 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_173 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_174 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_176 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_177 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_178 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_179 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_180 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_181 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_182 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_183 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_184 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_185 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_187 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");
	var mask_1_graphics_191 = new cjs.Graphics().p("EgpwhAAMBThgPtMAAACPuMhThAPtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-12,y:75}).wait(1).to({graphics:mask_1_graphics_1,x:-12,y:75.4911}).wait(1).to({graphics:mask_1_graphics_2,x:-12,y:77.0992}).wait(1).to({graphics:mask_1_graphics_3,x:-12,y:80.0806}).wait(1).to({graphics:mask_1_graphics_4,x:-12,y:84.7943}).wait(1).to({graphics:mask_1_graphics_5,x:-12,y:91.7644}).wait(1).to({graphics:mask_1_graphics_6,x:-12,y:101.7947}).wait(1).to({graphics:mask_1_graphics_7,x:-12,y:116.1873}).wait(1).to({graphics:mask_1_graphics_8,x:-12,y:137.1411}).wait(1).to({graphics:mask_1_graphics_9,x:-12,y:168.0643}).wait(1).to({graphics:mask_1_graphics_10,x:-12,y:210.2071}).wait(1).to({graphics:mask_1_graphics_11,x:-12,y:251.9868}).wait(1).to({graphics:mask_1_graphics_12,x:-12,y:282.0223}).wait(1).to({graphics:mask_1_graphics_13,x:-12,y:301.8795}).wait(1).to({graphics:mask_1_graphics_14,x:-12,y:315.125}).wait(1).to({graphics:mask_1_graphics_15,x:-12,y:324.0141}).wait(1).to({graphics:mask_1_graphics_16,x:-12,y:329.8674}).wait(1).to({graphics:mask_1_graphics_17,x:-12,y:333.4942}).wait(1).to({graphics:mask_1_graphics_18,x:-12,y:335.4192}).wait(1).to({graphics:mask_1_graphics_19,x:-12,y:336}).wait(150).to({graphics:mask_1_graphics_169,x:-12,y:335}).wait(1).to({graphics:mask_1_graphics_170,x:-12,y:334.6382}).wait(1).to({graphics:mask_1_graphics_171,x:-12,y:333.4691}).wait(1).to({graphics:mask_1_graphics_172,x:-12,y:331.3392}).wait(1).to({graphics:mask_1_graphics_173,x:-12,y:328.045}).wait(1).to({graphics:mask_1_graphics_174,x:-12,y:323.3089}).wait(1).to({graphics:mask_1_graphics_175,x:-12,y:316.7396}).wait(1).to({graphics:mask_1_graphics_176,x:-12,y:307.763}).wait(1).to({graphics:mask_1_graphics_177,x:-12,y:295.5025}).wait(1).to({graphics:mask_1_graphics_178,x:-12,y:278.5748}).wait(1).to({graphics:mask_1_graphics_179,x:-12,y:254.8761}).wait(1).to({graphics:mask_1_graphics_180,x:-12,y:222.3587}).wait(1).to({graphics:mask_1_graphics_181,x:-12,y:184.1914}).wait(1).to({graphics:mask_1_graphics_182,x:-12,y:150.7994}).wait(1).to({graphics:mask_1_graphics_183,x:-12,y:126.6151}).wait(1).to({graphics:mask_1_graphics_184,x:-12,y:109.7241}).wait(1).to({graphics:mask_1_graphics_185,x:-12,y:97.821}).wait(1).to({graphics:mask_1_graphics_186,x:-12,y:89.3799}).wait(1).to({graphics:mask_1_graphics_187,x:-12,y:83.4445}).wait(1).to({graphics:mask_1_graphics_188,x:-12,y:79.3974}).wait(1).to({graphics:mask_1_graphics_189,x:-12,y:76.8224}).wait(1).to({graphics:mask_1_graphics_190,x:-12,y:75.4274}).wait(1).to({graphics:mask_1_graphics_191,x:-12,y:75}).wait(1));

	// white
	this.instance_1 = new lib.white();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63,164);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129,-350,384.3,1196.2);


(lib.percentMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am4HMIAAn0INxAAIAAH0g");
	mask.setTransform(-1.025,46);

	// text
	this.instance = new lib.percentText();
	this.instance.parent = this;
	this.instance.setTransform(18.5,2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(1).to({regX:-92,regY:54.3,x:-35.25,y:56.3},0).wait(1).to({x:-22.2},0).wait(1).to({x:-14.95},0).wait(1).to({x:-10.35},0).wait(1).to({x:-7.3},0).wait(1).to({x:-5.2},0).wait(1).to({x:-3.7},0).wait(1).to({x:-2.65},0).wait(1).to({x:-1.95},0).wait(1).to({x:-1.5},0).wait(1).to({x:-1.2},0).wait(1).to({x:-1.05},0).wait(1).to({regX:0,regY:0,x:91,y:2},0).wait(22));

	// Layer_8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Am1D/IAAn9INrAAIAAH9g");
	mask_1.setTransform(-1.375,14.75);

	// Line
	this.instance_1 = new lib.percentLineVert();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-39.8,3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-50.7,regY:32.8,x:-90.1,y:35.8},0).wait(1).to({x:-88.85},0).wait(1).to({x:-86.35},0).wait(1).to({x:-81.95},0).wait(1).to({x:-74.55},0).wait(1).to({x:-61.6},0).wait(1).to({x:-41},0).wait(1).to({x:-22.8},0).wait(1).to({x:-12.5},0).wait(1).to({x:-6.8},0).wait(1).to({x:-3.7},0).wait(1).to({x:-2.15},0).wait(1).to({regX:0,regY:0,x:49,y:3},0).wait(43));

	// percentZero
	this.instance_2 = new lib.percentZero();
	this.instance_2.parent = this;
	this.instance_2.setTransform(31,-7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(1).to({regX:0.3,regY:0.7,x:28.15,y:-8.05,alpha:0.4466},0).wait(1).to({x:26.9,y:-8.75,alpha:0.6234},0).wait(1).to({x:26.2,y:-9.2,alpha:0.7285},0).wait(1).to({x:25.7,y:-9.45,alpha:0.7991},0).wait(1).to({x:25.35,y:-9.65,alpha:0.8496},0).wait(1).to({x:25.05,y:-9.8,alpha:0.887},0).wait(1).to({x:24.85,y:-9.95,alpha:0.9153},0).wait(1).to({x:24.7,y:-10,alpha:0.937},0).wait(1).to({x:24.6,y:-10.1,alpha:0.9537},0).wait(1).to({x:24.5,y:-10.15,alpha:0.9666},0).wait(1).to({x:24.45,y:-10.2,alpha:0.9766},0).wait(1).to({x:24.4,alpha:0.9842},0).wait(1).to({x:24.35,y:-10.25,alpha:0.9898},0).wait(1).to({x:24.3,alpha:0.994},0).wait(1).to({alpha:0.9969},0).wait(1).to({alpha:0.9987},0).wait(1).to({alpha:0.9997},0).wait(1).to({regX:0,regY:0,x:24,y:-11,alpha:1},0).wait(25));

	// percentZero
	this.instance_3 = new lib.percentZero();
	this.instance_3.parent = this;
	this.instance_3.setTransform(31,-7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({regX:0.3,regY:0.7,x:33.95,y:-4.05,alpha:0.4466},0).wait(1).to({x:35,y:-3.15,alpha:0.6234},0).wait(1).to({x:35.65,y:-2.65,alpha:0.7285},0).wait(1).to({x:36.05,y:-2.3,alpha:0.7991},0).wait(1).to({x:36.35,y:-2.05,alpha:0.8496},0).wait(1).to({x:36.6,y:-1.85,alpha:0.887},0).wait(1).to({x:36.75,y:-1.7,alpha:0.9153},0).wait(1).to({x:36.9,y:-1.6,alpha:0.937},0).wait(1).to({x:37,y:-1.5,alpha:0.9537},0).wait(1).to({x:37.05,y:-1.45,alpha:0.9666},0).wait(1).to({x:37.15,y:-1.4,alpha:0.9766},0).wait(1).to({x:37.2,y:-1.35,alpha:0.9842},0).wait(1).to({alpha:0.9898},0).wait(1).to({x:37.25,y:-1.3,alpha:0.994},0).wait(1).to({alpha:0.9969},0).wait(1).to({alpha:0.9987},0).wait(1).to({alpha:0.9997},0).wait(1).to({regX:0,regY:0,x:37,y:-2,alpha:1},0).wait(25));

	// Layer_6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiCB0IAAjnIEFAAIAADng");
	mask_2.setTransform(29.375,-5.675);

	// percentLine
	this.instance_4 = new lib.percentLine();
	this.instance_4.parent = this;
	this.instance_4.setTransform(43,-30);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-0.1,regY:0.3,x:42.85,y:-29.6},0).wait(1).to({x:42.65,y:-29.25},0).wait(1).to({x:42.3,y:-28.55},0).wait(1).to({x:41.75,y:-27.4},0).wait(1).to({x:40.7,y:-25.35},0).wait(1).to({x:38.95,y:-21.85},0).wait(1).to({x:36.2,y:-16.3},0).wait(1).to({x:33.7,y:-11.35},0).wait(1).to({x:32.35,y:-8.6},0).wait(1).to({x:31.55,y:-7.05},0).wait(1).to({x:31.15,y:-6.2},0).wait(1).to({x:30.95,y:-5.8},0).wait(1).to({regX:0,regY:0,x:31,y:-6},0).wait(43));

	// percent62
	this.instance_5 = new lib.percent62();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16,6,1.5,1.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({regX:0.5,regY:0.8,scaleX:1.2767,scaleY:1.2767,x:-15.35,y:7,alpha:0.4466},0).wait(1).to({scaleX:1.1883,scaleY:1.1883,x:-15.4,y:6.95,alpha:0.6234},0).wait(1).to({scaleX:1.1358,scaleY:1.1358,x:-15.45,y:6.9,alpha:0.7285},0).wait(1).to({scaleX:1.1004,scaleY:1.1004,alpha:0.7991},0).wait(1).to({scaleX:1.0752,scaleY:1.0752,y:6.85,alpha:0.8496},0).wait(1).to({scaleX:1.0565,scaleY:1.0565,alpha:0.887},0).wait(1).to({scaleX:1.0424,scaleY:1.0424,x:-15.5,alpha:0.9153},0).wait(1).to({scaleX:1.0315,scaleY:1.0315,alpha:0.937},0).wait(1).to({scaleX:1.0231,scaleY:1.0231,y:6.8,alpha:0.9537},0).wait(1).to({scaleX:1.0167,scaleY:1.0167,alpha:0.9666},0).wait(1).to({scaleX:1.0117,scaleY:1.0117,alpha:0.9766},0).wait(1).to({scaleX:1.0079,scaleY:1.0079,alpha:0.9842},0).wait(1).to({scaleX:1.0051,scaleY:1.0051,alpha:0.9898},0).wait(1).to({scaleX:1.003,scaleY:1.003,alpha:0.994},0).wait(1).to({scaleX:1.0016,scaleY:1.0016,alpha:0.9969},0).wait(1).to({scaleX:1.0007,scaleY:1.0007,alpha:0.9987},0).wait(1).to({scaleX:1.0002,scaleY:1.0002,alpha:0.9997},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-16,y:6,alpha:1},0).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-30,102,97.5);


(lib.LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(2.3,-4.7,0.75,0.75,0,0,0,96.4,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-70,-20,144.6,32.9), null);


(lib.LastFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legal copy
	this.instance = new lib.legal2_1();
	this.instance.parent = this;
	this.instance.setTransform(1,-28);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).wait(1).to({regX:324,regY:-127.5,x:325,y:-155.5,alpha:0.4336},0).wait(1).to({alpha:0.6092},0).wait(1).to({alpha:0.7147},0).wait(1).to({alpha:0.7862},0).wait(1).to({alpha:0.8378},0).wait(1).to({alpha:0.8763},0).wait(1).to({alpha:0.9057},0).wait(1).to({alpha:0.9285},0).wait(1).to({alpha:0.9463},0).wait(1).to({alpha:0.9603},0).wait(1).to({alpha:0.9712},0).wait(1).to({alpha:0.9796},0).wait(1).to({alpha:0.9861},0).wait(1).to({alpha:0.9911},0).wait(1).to({alpha:0.9947},0).wait(1).to({alpha:0.9972},0).wait(1).to({alpha:0.9988},0).wait(1).to({alpha:0.9997},0).wait(1).to({regX:0,regY:0,x:1,y:-28,alpha:1},0).wait(61).to({regX:324,regY:-127.5,x:325,y:-155.5,alpha:0.9982},0).wait(1).to({alpha:0.9926},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.9691},0).wait(1).to({alpha:0.9506},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.8978},0).wait(1).to({alpha:0.8623},0).wait(1).to({alpha:0.8197},0).wait(1).to({alpha:0.7686},0).wait(1).to({alpha:0.7075},0).wait(1).to({alpha:0.6337},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.4277},0).wait(1).to({alpha:0.2704},0).wait(1).to({regX:0,regY:0,x:1,y:-28,alpha:0},0).wait(1));

	// legal
	this.instance_1 = new lib.legal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,-28);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:324,regY:-127.5,x:325,y:-155.5,alpha:0.4336},0).wait(1).to({alpha:0.6092},0).wait(1).to({alpha:0.7147},0).wait(1).to({alpha:0.7862},0).wait(1).to({alpha:0.8378},0).wait(1).to({alpha:0.8763},0).wait(1).to({alpha:0.9057},0).wait(1).to({alpha:0.9285},0).wait(1).to({alpha:0.9463},0).wait(1).to({alpha:0.9603},0).wait(1).to({alpha:0.9712},0).wait(1).to({alpha:0.9796},0).wait(1).to({alpha:0.9861},0).wait(1).to({alpha:0.9911},0).wait(1).to({alpha:0.9947},0).wait(1).to({alpha:0.9972},0).wait(1).to({alpha:0.9988},0).wait(1).to({alpha:0.9997},0).wait(1).to({regX:0,regY:0,x:1,y:-28,alpha:1},0).wait(61).to({regX:324,regY:-127.5,x:325,y:-155.5,alpha:0.9982},0).wait(1).to({alpha:0.9926},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.9691},0).wait(1).to({alpha:0.9506},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.8978},0).wait(1).to({alpha:0.8623},0).wait(1).to({alpha:0.8197},0).wait(1).to({alpha:0.7686},0).wait(1).to({alpha:0.7075},0).wait(1).to({alpha:0.6337},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.4277},0).wait(1).to({alpha:0.2704},0).wait(1).to({regX:0,regY:0,x:1,y:-28,alpha:0},0).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-192,683,369.7);


(lib.InsuranceMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.insurance_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3,0.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-4,regY:1,scaleX:0.3072,scaleY:0.3072,x:-1.25,y:0.3,alpha:0.009},0).wait(1).to({scaleX:0.3341,scaleY:0.3341,x:-1.35,y:0.35,alpha:0.0426},0).wait(1).to({scaleX:0.3951,scaleY:0.3951,x:-1.6,y:0.4,alpha:0.1189},0).wait(1).to({scaleX:0.5281,scaleY:0.5281,x:-2.1,y:0.55,alpha:0.2852},0).wait(1).to({scaleX:0.7891,scaleY:0.7891,x:-3.15,y:0.8,alpha:0.6114},0).wait(1).to({scaleX:0.9778,scaleY:0.9778,x:-3.9,y:1,alpha:0.8473},0).wait(1).to({scaleX:1.0581,scaleY:1.0581,x:-4.25,y:1.05,alpha:0.9477},0).wait(1).to({scaleX:1.0913,scaleY:1.0913,x:-4.35,y:1.1,alpha:0.9892},0).wait(1).to({regX:0,regY:0,scaleX:1.0999,scaleY:1.0999,x:0,y:0,alpha:1},0).wait(1).to({regX:-4,regY:1,scaleX:1.0977,scaleY:1.0977,x:-4.4,y:1.1},0).wait(1).to({scaleX:1.0881,scaleY:1.0881,x:-4.35},0).wait(1).to({scaleX:1.0566,scaleY:1.0566,x:-4.25,y:1.05},0).wait(1).to({scaleX:1.0153,scaleY:1.0153,x:-4.05,y:1},0).wait(1).to({scaleX:1.0027,scaleY:1.0027,x:-4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-27.5,57.2,57.2);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.LOGO();
	this.instance.parent = this;
	this.instance.setTransform(82,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(390));

	// LEGAL
	this.instance_1 = new lib.LastFrame("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,201);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({_off:false},0).wait(202));

	// 6.2%
	this.instance_2 = new lib.percentMov("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,24,0.81,0.81);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(149).to({startPosition:55},0).wait(1).to({regX:-8.5,regY:18.8,x:393.1,y:39.25,alpha:0.9972},0).wait(1).to({alpha:0.9887},0).wait(1).to({alpha:0.9738},0).wait(1).to({alpha:0.9522},0).wait(1).to({alpha:0.9229},0).wait(1).to({alpha:0.8849},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.7771},0).wait(1).to({alpha:0.7023},0).wait(1).to({alpha:0.6078},0).wait(1).to({alpha:0.4847},0).wait(1).to({alpha:0.3123},0).wait(1).to({regX:0,regY:0,x:400,y:24,alpha:0},0).wait(203));

	// TXT
	this.instance_3 = new lib.TXT("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(136,82,0.87,0.87);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).wait(149).to({startPosition:108},0).wait(1).to({regX:60.7,regY:-16.4,x:188.8,y:67.75,alpha:0.9972},0).wait(1).to({alpha:0.9887},0).wait(1).to({alpha:0.9738},0).wait(1).to({alpha:0.9522},0).wait(1).to({alpha:0.9229},0).wait(1).to({alpha:0.8849},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.7771},0).wait(1).to({alpha:0.7023},0).wait(1).to({alpha:0.6078},0).wait(1).to({alpha:0.4847},0).wait(1).to({alpha:0.3123},0).wait(1).to({regX:0,regY:0,x:136,y:82,alpha:0},0).wait(203));

	// SLIDER
	this.instance_4 = new lib.SLIDE("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(378,129,1,1,89.9948);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(390));

	// INSURANCE
	this.instance_5 = new lib.InsuranceMov("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(686,50);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({_off:true},172).wait(201));

	// BG
	this.instance_6 = new lib.BG();
	this.instance_6.parent = this;
	this.instance_6.setTransform(602,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},189).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-468.2,-212,1213.2,596.4);


// stage content:
(lib.gazprombank_savings_728x90_review = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(156.8,-105.4,656.4000000000001,489.70000000000005);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 728,
	height: 90,
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