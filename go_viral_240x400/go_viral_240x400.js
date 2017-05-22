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
	manifest: []
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



(lib.txtmay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjuA2IgCgBIAAgCIAAgOIguAAIAAAOIAAACIgCABIgLAAIgCgBIAAgCIAAgYIAAgDIACAAIAIAAIAMgpQABgGADgCIAGgEIAGgBIAGABIAGAEQADACACAGIAMApIAHAAIACAAIAAADIAAAYIAAACIgCABgAj6AYIgLglIAAgCIgCAAIgBAAIgBACIgKAlIAZAAgACdAlQgEgCgDgFQgDgEAAgIIAAAAQgBgLAHgFQAHgDAQgBIAHAAIAAgEQAAgHgCgBQgDgCgFAAIgLAAIgJABIAAAAIgCAAIAAgDIAAgHQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIACgBIAIgBIAMgBQANABAGAFQAHAGAAAMIAAAoIgBADIgBAAIgKAAIgCAAIgBgDIAAgCIgIAFQgEABgFAAIgKgBgACoAJQgDABgCACIgBAGIAAAAQAAAEADACQACABAEAAIAHgBIAFgCIAAgPIgHAAQgGAAgCACgAgbAiQgHgEgEgJQgEgJAAgNIAAgJQAAgPAEgJQAEgJAHgEQAHgEAKAAQAJAAAFAEQAHAEAEAJQAEAJAAAPIAAAJQAAANgEAJQgEAJgHAEQgFAEgJAAQgKAAgHgEgAgSgjQgDACgCAGQgCAGAAALIAAAJQAAAJACAFQACAGADADQADACAFAAQAEAAADgCQADgDAAgGQACgFAAgJIAAgJQAAgLgCgGQAAgGgDgCQgDgCgEgBQgFABgDACgAhlAlIgKgCIgCgBIgBgCIAAgHIABgCIABAAIABAAIANABIAKABQAHAAADgEQADgCAAgHIAAgCIgBgGIgDgEQgCgBgFAAIgVAAIgCgBIgBgBIAAgIIABgBIACgBIAVAAQAFAAACgBQACgCABgDIABgFIAAgDIgBgFIgEgFQgDgBgFAAIgIAAIgHABIgIABIgBAAIgBgBIgBgCIAAgHIABgCIACAAIAKgCIANgBQAIAAAHACQAHADAEAFQAEAGAAAIIAAADQAAAGgDAEQgDAFgFACQAFADADAEQADADAAAHIAAACQAAAJgEAGQgEAGgHACQgHADgIAAIgNgBgAjMAiQgHgEgDgHQgDgGAAgJIAAgIQAAgIADgHQADgGAHgEQAGgFAKAAQAJAAAGAFQAHAEADAGQADAHAAAIIAAAIQAAAJgDAGQgDAHgHAEQgGAEgJAAQgKAAgGgEgAjGgMQgDAFAAAHIAAAIQAAAIADAEQADAEAHAAQAGAAADgEQAEgEAAgIIAAgIQAAgHgEgFQgDgEgGAAQgHAAgDAEgAEhAmIgCgBIgBgCIAAgOIABgBIACgBIAKAAIACABIABABIAAAOIgBACIgCABgAEAAlIgBAAIgBgCIAAgYIgEABIgEAAIgCAAIgQAXIAAACIgCAAIgOAAIgBAAIAAgBIAAAAIAAgBIASgZQgHgDgEgEQgEgDAAgHIAAgCQAAgIAEgFQAFgEAHgCQAHgCAJAAIALABIAJAAIADABIABADIAAA8IgBACIgBAAgADqgPQgFACAAAEIAAACQAAAFAEACQAFAAAIAAIADAAIADAAIACAAIAAgRIgEAAIgEgBQgIABgEACgAB3AlIgBAAIAAgCIAAgoIgBgBIAAABIgKAPIgBABIgCABIgLAAIgCgBIgCgBIgJgPIAAgBIgBAAIAAApIAAACIgCAAIgLAAIgBAAIgBgBIAAg9QAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIADgBIAJAAIACABIACABIAPAbIABABIAAAAIABAAIAQgcIACgBIACgBIAJAAIADABIABADIAAA9IAAABIgCAAgAEiAMIgBgBIgBgCIgCg7IABgBIABgBIAMAAIACABIAAABIgCA7IAAACIgCABg");
	this.shape.setTransform(-0.4,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-9.3,65.7,18.6);


(lib.txtJune = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEQBNQgLgHgGgLQgGgLgBgPIgcAAIAAAsIgBADQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgUAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgBgDIAAhxIABgEIAEgBIAUAAIADABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAArIAcAAQABgNAGgLQAGgMALgGQAMgHAQAAQASAAALAHQAMAHAGANQAGAMAAAOIAAASQAAAQgGAMQgGAMgMAHQgLAHgSAAQgQAAgMgGgAEbgJQgGAIAAAMIAAASQAAANAGAIQAGAIALAAQAMAAAGgIQAGgIAAgNIAAgSQAAgMgGgIQgGgIgMAAQgLAAgGAIgAnDBMQgNgHgIgPQgHgPgBgYIAAgXQAAgbAHgQQAHgQAOgIQANgHAUAAQAPAAAKACIAQACIAEACQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAANQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAAIgLgBIgPgBIgPgBQgLAAgGAEQgHAEgDAIQgDAJgBAPIAOgBIARgBQAOAAANAEQAMAFAHALQAIAIAAASIAAACQAAARgHAMQgGAMgNAHQgNAHgSAAIgCAAQgPAAgMgHgAm6ABIgIABIAAANQAAASAEAKQAEAJAGAEQAGADAIAAQAIAAAGgCQAGgDADgHQAEgHAAgMIAAgCQAAgKgEgGQgEgFgHgDQgHgCgIAAIgIAAIgJABgAhNBTQgPAAgNgFQgNgFgHgLQgIgLAAgRIAAgCQAAgLAFgJQAGgKAJgEQgKgGgFgJQgFgJABgKIAAgBQAAgQAHgKQAIgKAMgFQANgEAPAAIACAAQAPAAANAEQANAFAHAKQAIAKAAAQIAAABQAAAKgFAJQgEAJgKAGQAJAEAFAKQAGAJAAALIAAACQgBARgHALQgIALgNAFQgNAFgPAAgAheAMQgFAEgDAFQgCAGAAAFIAAACQAAALAHAIQAHAHANAAIACAAQAOAAAGgHQAHgIAAgLIAAgCQAAgFgCgGQgCgFgGgEQgFgEgIAAIgJAAQgJAAgFAEgAhig1QgGAGAAALIAAABQAAAJAFAHQAGAGANAAIAJAAQAMAAAGgGQAGgHAAgJIAAgBQAAgLgHgGQgGgGgPgBIgCAAQgOABgHAGgAJHBRIgDgBIgBgCIAAgsIgIABIgGAAIgEAAIgdArIgCACIgCABIgZAAIgCAAIgBgCIAAAAIAAgBIAhgwQgNgEgHgIQgIgIAAgMIAAgCQAAgPAJgIQAIgJANgDQAOgDAQAAIAUAAIARACIAFABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABIAABxIgBACIgDABgAIdgRQgHAEAAAJIAAACQAAAIAHAEQAIAEAQgBIAEAAIAGAAIAEAAIAAggIgHgBIgHAAQgQAAgIADgAHHBRQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgBgDIAAgxIgrAAIAAAxIgCADIgDABIgUAAIgDgBIgBgDIAAhxIABgDIADgCIAUAAIADACIACADIAAAqIArAAIAAgqIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAABxIgBADQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgACKBRQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgBgDIAAhDIgrBDIgEADQgBABgEAAIgQAAIgDgBIgBgDIAAhxIABgDIADgCIAUAAIADACIACADIAABAIArhAIADgDQABgCAFAAIAQAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAABxIgBADQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAj/BRQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgBgDIAAgRIABgDIAEgBIAdAAIAAhqIgdAJIgBAAIgBAAIgCAAIgBgCIAAgVIABgCIABAAIAngNIACgBIADAAIAOAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABADIAACEIAeAAIADABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAARQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAgApbBRQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBgDIAAgRIABgDIADgBIAeAAIAAhqIgdAJIgCAAIgBAAIgCAAIAAgCIAAgVIAAgCIABAAIAngNIACgBIADAAIAPAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAIABADIAACEIAdAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAARQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAgAlUAZQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAIgBgCIAAgOIABgDIAEgBIArAAIADABIABADIAAAOIgBACQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape.setTransform(0.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-15.4,130,30.8);


(lib.txtHurry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD8A6IgCgBIAAgBIAAhSQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIADgBIAMgCIAMgBQAOAAAHAIQAIAIAAAOIAAAHQAAAOgIAIQgHAIgOAAIgFAAIgHgBIAAAWIAAABIgCABgAEJgSIAAAnIAGABIAGAAQAFAAADgCQADgCABgEIABgJIAAgHIgBgJQgBgEgDgCQgDgCgFAAIgHAAIgFABgABwA6IgCgBIAAgBIAAhSQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIADgBIAMgCIAMgBQAOAAAHAIQAIAIAAAOIAAAHQAAAOgIAIQgHAIgOAAIgFAAIgHgBIAAAWIAAABIgCABgAB9gSIAAAnIAGABIAGAAQAFAAADgCQADgCABgEIABgJIAAgHIgBgJQgBgEgDgCQgDgCgFAAIgHAAIgFABgAkJA6IgBgBIgBgBIAAhSQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIAMgCIAMgBQAPAAAHAIQAHAIAAAOIAAAHQAAAOgHAIQgHAIgPAAIgFAAIgGgBIAAAWIgBABIgCABgAj7gSIAAAnIAGABIAFAAQAGAAACgCQADgCABgEIABgJIAAgHIgBgJQgBgEgDgCQgCgCgGAAIgGAAIgFABgAKXAgQgGgDgEgHQgDgGAAgKIAAgJQAAgKADgGQAEgHAGgDQAGgDAIAAIAJAAIAGABIACABIABACIAAAIIgBACIgBAAIgBAAIgEAAIgFgBIgGAAIgGABQgCACgCADIgCAKIAAAJIACAKQACADACABIAGACIAGAAIAFgBIAEAAIABAAIABAAIABACIAAAIIgBACIgCABIgGABIgJAAQgIAAgGgDgAHRAiQgFgCgDgEQgDgFAAgIIAAAAQAAgLAHgEQAHgEAPAAIAIAAIAAgFQAAgGgDgCQgCgCgGAAIgLAAIgIABIgBAAIgBAAIgBgCIAAgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABgBIAJgCIALAAQANAAAHAFQAHAGAAAMIAAApIgBACIgCAAIgKAAIgCAAIAAgCIAAgCIgJAEQgEABgEAAIgKgBgAHbAGQgDABgBACIgBAGIAAAAQAAAEACACQACACAFAAIAGgBIAGgDIAAgPIgIAAQgFAAgDACgAGQAjIgHgBIgEgBIgBgEIAAg4IABgDQAAAAABAAQAAgBAAAAQABAAAAAAQABAAABAAIAGgBIALAAQAKAAAIABQAHACAEAEQAFAEAAAIIAAABIgBAFIgDAFQgDACgDAAQAFABADAEQACAEAAAGIAAAAQAAAIgEAEQgEAFgHABQgIACgKAAIgLAAgAGTAXIAEAAIAEAAQAKAAAEgCQAEgCAAgFIAAgBIgBgFQgBgCgEgBIgJgBIgLAAgAGTgEIALAAIAJgBQADgBABgCIABgEIAAgBIgBgFQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAQgDgBgHABIgEAAIgDAAIgDAAgAFJAfQgGgEgDgGQgEgHAAgJIAAgHQAAgJAEgHQADgGAGgEQAHgEAJAAQAKAAAGAEQAGAEAEAGQADAHAAAJIAAAHQAAAJgDAHQgEAGgGAEQgGAEgKAAQgJAAgHgEgAFQgOQgEAEAAAIIAAAHQAAAIAEAEQADAEAGABQAGgBAEgEQADgEAAgIIAAgHQAAgIgDgEQgEgFgGAAQgGAAgDAFgAAAAgQgFgDgDgHQgEgGAAgKIAAgJQAAgKAEgGQADgHAFgDQAGgDAIAAIAJAAIAGABIACABIAAACIAAAIIAAACIgCAAIAAAAIgEAAIgFgBIgGAAIgGABQgDACgBADIgCAKIAAAJIACAKQABADADABIAGACIAGAAIAFgBIAEAAIAAAAIACAAIAAACIAAAIIAAACIgCABIgGABIgJAAQgIAAgGgDgAi1AiQgFgCgEgDQgEgDgDgGQgDgGAAgJIAAgHQAAgJADgHQAEgHAGgDQAHgEAJAAQAJAAAGAEQAHAEADAGQADAHAAAJIAAAFIAAACIgCABIgnAAIAAAAIABAHQABAEADACQAEACAFABIANgBIAJgBIABAAIABABIABABIAAAIIgBACIgCABIgHABIgHABIgJAAIgKgBgAi0gPQgEAEAAAHIAAABIAZAAIAAgBQAAgHgDgEQgDgEgGAAQgGAAgDAEgAlFAiQgEgCgDgEQgDgFAAgIIAAAAQgBgLAHgEQAHgEAQAAIAHAAIAAgFQAAgGgCgCQgDgCgFAAIgLAAIgJABIAAAAIgCAAIAAgCIAAgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACgBIAIgCIAMAAQANAAAGAFQAHAGAAAMIAAApIgBACIgBAAIgKAAIgCAAIgBgCIAAgCIgIAEQgEABgFAAIgKgBgAk6AGQgDABgCACIgBAGIAAAAQAAAEADACQACACAEAAIAHgBIAFgDIAAgPIgHAAQgGAAgCACgAmAAjIgJgCIgBgBIgBgBIAAgIIABgBIABgBIALABIAJAAQAGABACgCQADgCAAgEIAAgBQAAgEgCgCQgCgCgFAAIgSAAIgCgBIAAgBIAAgGIAAgCIACAAIASAAQAFAAACgCQACgCAAgEIAAgBIgBgEIgDgCIgHgBIgHAAIgFABIgIABIgBgBIgBgBIAAgIIABgBIABgBIAJgCIALAAQAHAAAGABQAGACAEAEQAEAEAAAIIAAABQAAAEgDAEQgCADgEABIAFADIADAFIABAGIAAABQAAAIgEAEQgEAFgGABQgGACgHAAIgLAAgAohAiQgFgCgEgDQgFgDgDgGQgCgGgBgJIAAgHQAAgJAEgHQADgHAHgDQAGgEAJAAQAKAAAGAEQAGAEAEAGQADAHAAAJIAAAFIgBACIgCABIgnAAIAAAAIABAHQACAEADACQADACAGABIAMgBIAKgBIAAAAIACABIAAABIAAAIIAAACIgCABIgHABIgHABIgJAAIgKgBgAohgPQgDAEgBAHIAAABIAaAAIAAgBQAAgHgEgEQgDgEgGAAQgFAAgEAEgAqnAgQgGgDgDgHQgEgGAAgKIAAgJQAAgKAEgGQADgHAGgDQAHgDAIAAIAJAAIAGABIACABIAAACIAAAIIAAACIgCAAIAAAAIgEAAIgFgBIgGAAIgGABQgDACgBADQgCAEAAAGIAAAJQAAAGACAEQABADADABIAGACIAGAAIAFgBIAEAAIAAAAIACAAIAAACIAAAIIAAACIgCABIgGABIgJAAQgIAAgHgDgAruAjIgFgBIgDAAIgCgBIgBgBIAAgIIABgCIACAAIAEAAIAFAAIAEAAQAEABADgCQACgCABgEIABgCIgCAAIgEgBQgCAAgCgDIgDgGIgPg1IAAgCIACgBIAMAAIACABIAAABIAMAxIABACIABAAIABAAIANgzIABgBIABgBIANAAIABABQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgUBCQgCAHgCAEQgDAEgFACQgEACgJAAIgEAAgALtAiIgBAAIgBgCIAAgYIgEABIgEAAIgCAAIgQAXIAAACIgCAAIgOAAIgBAAIAAgBIAAAAIAAgBIASgZQgHgDgEgEQgEgDAAgHIAAgBQAAgIAEgFQAFgFAHgBQAHgCAJAAIALAAIAJABIADABIABACIAAA8IgBACIgBAAgALXgSQgFACAAAFIAAABQAAAFAEACQAFACAIAAIADAAIADAAIACAAIAAgTIgEAAIgEAAQgIAAgEACgAJbAiIgIAAIgGgBIgBgBIgBgCIAAg7IABgCIABAAIALAAIACAAIABACIAAASIAIAAQAJAAAHADQAHACAEAFQAEADAAAJIAAAAQAAAJgEAFQgEAFgHACQgHACgJAAIgIAAgAJbAVIAEAAIAEAAQAIAAADgCQAEgDAAgFIAAAAQAAgGgEgCQgDgDgIAAIgDAAIgDAAIgCAAgAIeAiIgCgBIgBgBIAAgyIgSAAIgCgBIgBgCIAAgIIABgCIACAAIA1AAIABAAIABACIAAAIIgBACIgBABIgTAAIAAAyIgBABIgBABgADdAiIgCgBIgBgBIAAgjIgYAjIgBACIgDAAIgJAAIgCgBIAAgBIAAg9IAAgCIACAAIALAAIACAAIAAACIAAAiIAYgiIACgCIADAAIAJAAIABAAIABACIAAA9IgBABIgBABgABAAiIgCgBIgBgBIAAgyIgSAAIgCgBIgBgCIAAgIIABgCIACAAIA1AAIABAAIABACIAAAIIgBACIgBABIgTAAIAAAyIgBABIgBABgAgmAiIgCgBIgBgBIAAgjIgYAjIgBACIgDAAIgJAAIgCgBIAAgBIAAg9IAAgCIACAAIALAAIACAAIAAACIAAAiIAYgiIACgCIADAAIAJAAIABAAIABACIAAA9IgBABIgBABgAh/AiIgBAAIgBgCIAAgrQAAgLAFgFQAFgEAMAAIAOAAIACAAIAAACIAAAJIAAACIgCABIgOAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBACAAADIAAArIgBACIgCAAgAnDAiIgCgBIgBgBIAAgjIgYAjIgBACIgDAAIgJAAIgCgBIAAgBIAAg9IAAgCIACAAIALAAIACAAIAAACIAAAiIAYgiIACgCIADAAIAJAAIABAAIABACIAAA9IgBABIgBABgApPAiIgCgBIgBgBIAAguIgBgEIgDAAIgQAAIgDAAIgBAEIAAAuIAAABIgCABIgLAAIgCgBIAAgBIAAguQAAgIACgEQADgDAEgBQAFgCAFABIAQAAQAGgBAEACQAFABACADQADAEAAAIIAAAuIgBABIgBABgAncgpQgFgCgDgEQgCgEgBgFIAAgBIACAAIAIAAIABAAIABABQABAEADACQACACADAAQAEAAACgCQADgCABgEIABgBIABAAIAIAAIACAAIAAABQgBAFgCAEQgDAEgEACQgFACgHAAQgGAAgEgCg");
	this.shape.setTransform(-0.3,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-9.3,158.2,18.6);


(lib.txtGoviral = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABVQgCAAgHgBQgFgCgGgFQgFgEgDgKIgkiIIAAgBIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAYAAIACABQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAgCCIABADIAAAAIADAAIABgDIAgiCIABgDIADgBIAXAAIAEABIABADIAAABIglCIQgCAKgGAEQgFAFgGACIgJABIgDAAgAD0BSQgIgDgGgIQgFgIgBgPIAAgBQAAgSANgKQANgKAcAAIAOAAIAAgJQAAgJgFgEQgFgDgJAAIgVAAIgPACIgCAAIgDgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgOIABgDIADgCIAQgCIAWgBQAXAAANAKQALALABATIAABPIgBADIgEABIgTAAIgCgBIgCgDIAAgEQgHAFgIACQgIADgIAAIgDAAQgHAAgIgDgAEGAfQgFACgCAEQgCAEAAAGIAAABQAAAIAEADQAEADAIAAQAHAAAFgCIALgEIAAgbIgOAAQgKAAgGACgAlTBSQgKgEgJgHQgJgIgFgNQgGgNgBgUIAAgdQABgUAGgNQAFgNAIgIQAKgHAKgEQALgDAKAAIATABIARABIALACQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAAOIAAAEIgDABIgBAAIgTgBIgbgBQgJAAgGAEQgHAEgDAJQgEAJgBAQIAAAdQAAAQAFAJQAEAJAGAEQAHAEAHAAIALAAIAKgBIAAg4IABgCIADAAIAXAAIACAAIABACIAABKIgBADIgCACIgUADIgcABIgDAAQgIAAgJgDgAjZBOQgLgHgHgNQgFgMgBgQIAAgSQABgNAFgNQAHgMALgHQAMgHARAAQARAAAMAHQAMAHAGAMQAFANAAANIAAASQAAAQgFAMQgGANgMAHQgMAHgRAAQgRAAgMgHgAjOgHQgFAHAAAMIAAASQAAAOAFAIQAHAIALAAQAMAAAFgIQAHgIAAgOIAAgSQAAgMgHgHQgFgIgMAAQgLAAgHAIgAFjBTQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgDIAAidQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAIAUAAIADABIABADIAACdIgBADIgDABgACWBTIgCgBIgBgDIAAhxIABgEIACgBIAUAAIADABIABAEIAAAEQAJgGAHgCQAJgCAGAAIADABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAAQQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgIAAgIACIgNAGIAABXIgCADIgDABgABdBTQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgDIAAhxIABgEIAEgBIAUAAIACABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAABxIgCADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAgABcg3QAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBgBIAAgDIAAgTIAAgDIAEgCIAVAAIADACIABADIAAATIgBADQAAABAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape.setTransform(-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-15.4,83,30.8);


(lib.txtFest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABlA6IgCgBIgBgBIAAgWIgFABIgEAAQgPAAgHgIQgHgIAAgOIAAgHQAAgOAHgIQAHgIAPAAIAFAAIAEABIAAgWIABgBIACgBIALAAIABABIABABIAAAVIAFAAIAFAAQAOAAAHAIQAHAIAAAOIAAAHQAAAOgHAIQgHAIgOAAIgFAAIgFgBIAAAWIgBABIgBABgABygSIAAAnIAFABIAFAAQAFAAADgCQACgCABgEIABgJIAAgHIgBgJQgBgEgCgCQgDgCgFAAIgGAAIgEABgABRgRQgDACgBAEIgBAJIAAAHIABAJQABAEADACQADACAFAAIAEAAIAFgBIAAgnIgEgBIgFAAQgFAAgDACgAH4AiQgFgCgDgEQgDgFAAgIIAAAAQAAgLAHgEQAHgEAPAAIAIAAIAAgFQAAgGgDgCQgCgCgGAAIgLAAIgIABIgBAAIgBAAIgBgCIAAgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIABgBIAJgCIALAAQANAAAHAFQAHAGAAAMIAAApIgBACIgCAAIgKAAIgCAAIAAgCIAAgCIgJAEQgEABgEAAIgKgBgAICAGQgDABgBACIgBAGIAAAAQAAAEACACQACACAFAAIAGgBIAGgDIAAgPIgIAAQgFAAgDACgAG3AjIgHgBIgEgBIgBgEIAAg4IABgDQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAGgBIALAAQAKAAAIABQAHACAEAEQAFAEAAAIIAAABIgBAFIgDAFQgDACgDAAQAFABADAEQACAEAAAGIAAAAQAAAIgEAEQgEAFgHABQgIACgKAAIgLAAgAG6AXIAEAAIAEAAQAKAAAEgCQAEgCAAgFIAAgBIgBgFQgBgCgEgBIgJgBIgLAAgAG6gEIALAAIAJgBQABgBAAAAQABAAABAAQAAgBAAAAQABgBAAAAIABgEIAAgBIgBgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgDgBgHABIgEAAIgDAAIgDAAgAD1AgQgGgDgDgHQgEgGAAgKIAAgJQAAgKAEgGQADgHAGgDQAHgDAIAAIAJAAIAGABIACABIAAACIAAAIIAAACIgCAAIAAAAIgEAAIgFgBIgGAAIgGABQgDACgBADIgCAKIAAAJIACAKQABADADABIAGACIAGAAIAFgBIAEAAIAAAAIACAAIAAACIAAAIIAAACIgCABIgGABIgJAAQgIAAgHgDgAC3AiQgFgCgEgDQgFgDgDgGQgCgGgBgJIAAgHQAAgJAEgHQADgHAHgDQAGgEAJAAQAKAAAGAEQAGAEAEAGQADAHAAAJIAAAFIgBACIgCABIgnAAIAAAAIABAHQACAEADACQADACAGABIAMgBIAKgBIAAAAIACABIAAABIAAAIIAAACIgCABIgHABIgHABIgJAAIgKgBgAC3gPQgDAEgBAHIAAABIAaAAIAAgBQAAgHgEgEQgDgEgGAAQgFAAgEAEgAmMAiQgFgCgDgEQgDgFAAgIIAAAAQAAgLAHgEQAHgEAPAAIAIAAIAAgFQAAgGgDgCQgCgCgGAAIgLAAIgIABIgBAAIgBAAIgBgCIAAgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIABgBIAJgCIALAAQANAAAHAFQAHAGAAAMIAAApIgBACIgCAAIgKAAIgCAAIAAgCIAAgCIgJAEQgEABgEAAIgKgBgAmCAGQgDABgBACIgBAGIAAAAQAAAEACACQACACAFAAIAGgBIAGgDIAAgPIgIAAQgFAAgDACgAqhAjIgFgBIgDAAIgCgBIgBgBIAAgIIABgCIACAAIAEAAIAFAAIAEAAQAEABADgCQACgCABgEIABgCIgCAAIgEgBQgCAAgCgDIgDgGIgPg1IAAgCIACgBIAMAAIACABIAAABIAMAxIABACIABAAIABAAIANgzIABgBIABgBIANAAIABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABIgUBCQgCAHgCAEQgDAEgFACQgEACgJAAIgEAAgAKIAiIgIAAIgGgBIgBgBIgBgCIAAg7IABgCIABAAIALAAIACAAIABACIAAASIAIAAQAJAAAHADQAHACAEAFQAEADAAAJIAAAAQAAAJgEAFQgEAFgHACQgHACgJAAIgIAAgAKIAVIAEAAIAEAAQAIAAADgCQAEgDAAgFIAAAAQAAgGgEgCQgDgDgIAAIgDAAIgDAAIgCAAgAJeAiIgBAAIgBgCIgMgwIgBgCIgCgBIgBABIgBACIgMAwIgBACIgBAAIgMAAIgCAAIAAgCIAAAAIAOg0QABgGADgCQADgDAEgBIAFAAIAGAAQAEABADADQADACABAGIAOA0IAAAAIAAACIgCAAgAGOAiIgCgBIgBgBIAAgjIgYAjIgBACIgDAAIgJAAIgCgBIAAgBIAAg9IAAgCIACAAIALAAIACAAIAAACIAAAiIAYgiIACgCIADAAIAJAAIABAAIABACIAAA9IgBABIgBABgAE2AiIgCgBIgBgBIAAgyIgSAAIgCgBIgBgCIAAgIIABgCIACAAIA1AAIABAAIABACIAAAIIgBACIgBABIgTAAIAAAyIgBABIgBABgAAEAiIgCgBIgBgBIAAgjIgWAjIgBACIgDAAIgJAAIgCgBIAAgBIAAg9IAAgCIACAAIALAAIACAAIAAACIAAAiIAWgiIACgCIADAAIAJAAIABAAIABACIAAA9IgBABIgBABgAhBAiIgBgBIgBgBIAAg9IABgCIABAAIALAAIACAAIABACIAAA9IgBABIgCABgAh0AiIgIAAIgGgBIgCgBIgBgCIAAg7IABgCIACAAIALAAIACAAIAAACIAAASIAIAAQAJAAAHADQAHACAEAFQAEADAAAJIAAAAQAAAJgEAFQgEAFgHACQgHACgJAAIgHAAgAh1AVIAFAAIADAAQAIAAAEgCQADgDAAgFIAAAAQAAgGgDgCQgEgDgIAAIgCAAIgDAAIgDAAgAihAiIgCgBIAAgBIAAgbIgYAAIAAAbIgBABIgCABIgLAAIgBgBIgBgBIAAg9IABgCIABAAIALAAIACAAIABACIAAAYIAYAAIAAgYIAAgCIACAAIALAAIACAAIAAACIAAA9IAAABIgCABgAj8AiIgIAAIgGgBIgBgBIgBgCIAAg7IABgCIABAAIALAAIACAAIABACIAAASIAIAAQAJAAAHADQAHACAEAFQAEADAAAJIAAAAQAAAJgEAFQgEAFgHACQgHACgJAAIgIAAgAj8AVIAEAAIAEAAQAIAAADgCQAEgDAAgFIAAAAQAAgGgEgCQgDgDgIAAIgDAAIgDAAIgCAAgAkmAiIgBAAIgBgCIgMgwIgBgCIgCgBIgBABIgBACIgMAwIgBACIgBAAIgMAAIgCAAIAAgCIAAAAIAOg0QABgGADgCQADgDAEgBIAFAAIAGAAQAEABADADQADACABAGIAOA0IAAAAIAAACIgCAAgAmwAiIgCgBIgCgBIgTgcIAAAcIAAABIgCABIgLAAIgCgBIAAgBIAAg9IAAgCIACAAIALAAIACAAIAAACIAAAaIAVgbIABgBIACAAIANAAIABAAIABABIAAAAIgBABIgYAdIAZAgIAAABIAAABIgCAAgAnzAiIgCgBIgBgBIAAgjIgYAjIgBACIgDAAIgJAAIgCgBIAAgBIAAg9IAAgCIACAAIALAAIACAAIAAACIAAAiIAYgiIACgCIADAAIAJAAIABAAIABACIAAA9IgBABIgBABgAo6AiIgCgBIgBgBIAAgbIgYAAIAAAbIAAABIgCABIgLAAIgCgBIAAgBIAAg9IAAgCIACAAIALAAIACAAIAAACIAAAYIAYAAIAAgYIABgCIACAAIALAAIABAAIABACIAAA9IgBABIgBABgAgTgpQgFgCgDgEQgCgEgBgFIAAgBIACAAIAIAAIABAAIABABQABAEADACQACACADAAQAEAAACgCQADgCAAgEIAAgBIABAAIAIAAIACAAIAAABQgBAFgCAEQgDAEgEACQgDACgHAAQgGAAgEgCg");
	this.shape.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.1,-9.3,142.3,18.6);


(lib.txtAlmaty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAsQgFgCgDgFQgDgEAAgIIAAAAQAAgLAHgFQAHgFAPgBIAIAAIAAgDQAAgGgDgBQgCgCgGAAIgLAAIgIABIgBAAIgBAAIgBgDIAAgHQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBIABgBIAJgBIALgBQANABAHAFQAHAGAAALIAAApIgBADIgCAAIgKAAIgCAAIAAgDIAAgCIgJAFQgEABgEAAIgKgBgAAgAQQgDABgBACIgBAGIAAAAQAAAEACACQACABAFAAIAGgBIAGgCIAAgPIgIAAQgFAAgDACgADUAsIgCgBIgBgCIAAg9IABgBIACgBIALAAIABABIABABIAAA9IgBACIgBABgACgAsIgIAAIgGgBIgBgCIgBgBIAAg7IABgCIABgBIALAAIACABIABACIAAASIAIAAQAJAAAHABQAHABAEAGQAEAEAAAJIAAABQAAAIgEAGQgEAFgHACQgHACgJAAIgIAAgACgAeIAEAAIAEAAQAIABADgDQAEgCAAgFIAAgBQAAgFgEgDQgDgCgIAAIgDAAIgDAAIgCAAgABjAsIgCgBIgBgCIAAgxIgSAAIgCgBIgBgCIAAgJIABgBIACgBIA1AAIABABIABABIAAAJIgBACIgBABIgTAAIAAAxIgBACIgBABgAgOAsIgBAAIgBgCIAAgqIAAAAIgBAAIgJARIgCABIgBABIgMAAIgCgBIgBgBIgKgRIAAAAIAAAAIAAAqIgBACIgBAAIgLAAIgCAAIAAgBIAAg9QAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBIADgBIAJAAIADABIABABIAQAbIAAABIABAAIABAAIAPgcIACgBIADgBIAJAAIADABIABADIAAA9IgBABIgBAAgAhhAsIgBAAIgBgCIgMgwIgBgCIgCgBIgBABIgBACIgMAwIgBACIgBAAIgMAAIgCAAIAAgCIAAgBIAOgzQABgGADgCQADgDAEgBIAFgBIAGABQAEABADADQADACABAGIAOAzIAAABIAAACIgCAAgAimAsIgCAAIgBgCIgFgXIgcAAIgFAXIgBACIgCAAIgMAAIgCAAIAAgCIAAgBIAThJQACgGADgCQADgDADAAIAGgBIAGABQADAAADADQADACACAGIATBJIAAABIAAACIgCAAgAixAFIgJghIgBgCIgBAAIgBAAIgBACIgJAhIAWAAg");
	this.shape.setTransform(-0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-9.3,50.3,18.6);


(lib.ptR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.8,1,1).p("AgcgnIA5AnIg5Aog");
	this.shape.setTransform(1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AhFhTICLAAQALAAAJAIQAIAJAAALIAABvQAAAMgIAIQgJAIgLAAIiLAAQgLAAgJgIQgIgIAAgMIAAhvQAAgLAIgJQAIgIAMAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-9.4,21.7,18.9);


(lib.ptQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,1,1).p("AigAAIFBAA");
	this.shape.setTransform(6.2,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAhCIATAvIA0AEIgoAgIAMAyIgrgbIgqAbIAMgyIgnggIAygEg");
	this.shape_1.setTransform(18.5,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAhCIATAvIAzAEIgnAgIAMAyIgrgbIgrAbIAMgyIgnggIA0gEg");
	this.shape_2.setTransform(0,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAhCIATAvIA0AEIgnAgIAMAyIgsgbIgqAbIAMgyIgnggIAzgEg");
	this.shape_3.setTransform(-18.4,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAAOgPQAPgPAAgWQAAgUgPgQQgOgPgWAA");
	this.shape_4.setTransform(18.5,-32.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAAOgPQAPgQAAgVQAAgUgPgQQgOgPgWAA");
	this.shape_5.setTransform(18.5,-11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAAOgPQAPgQAAgVQAAgUgPgQQgOgPgWAA");
	this.shape_6.setTransform(18.5,-22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAAOgPQAPgQAAgVQAAgVgPgPQgOgQgWAA");
	this.shape_7.setTransform(18.5,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E02148").ss(1.7,1,1).p("ABVAAIAaAAAgsAAIAhAAAhuAAIAmAAAANAAIAqAA");
	this.shape_8.setTransform(11.9,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-39.2,53.1,78.4);


(lib.ptP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,0,1).p("AhDAAIBDhDIBEBDIhEBEg");
	this.shape.setTransform(18.3,-0.6,1,1,0,0,0,0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAhCIAUAvIAzAEIgnAgIAMAyIgsgbIgqAbIAMgyIgnggIAzgEg");
	this.shape_1.setTransform(1.4,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAhCIAUAvIAzAEIgnAgIAMAyIgsgbIgqAbIAMgyIgnggIAzgEg");
	this.shape_2.setTransform(-17.9,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("Ag0AaQAAgVAQgPQAQgPAUAAQAVAAAQAPQAQAOAAAW");
	this.shape_3.setTransform(19.7,-22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgOQAQgPAUAAQAVAAAQAPQAPAOAAAW");
	this.shape_4.setTransform(9.1,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-25.9,52,51.9);


(lib.ptO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgOQAQgPAUAAQAVAAAQAPQAPAOAAAW");
	this.shape.setTransform(6.2,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,1,1).p("Ag0AaQAAgVAQgPQAQgPAUAAQAVAAAQAPQAQAOAAAW");
	this.shape_1.setTransform(-15.1,-16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("Ag0AaQAAgWAQgOQAPgPAVAAQAVAAAQAPQAPAPAAAV");
	this.shape_2.setTransform(-4.4,-16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgOQAQgPAUAAQAVAAAQAPQAPAOAAAW");
	this.shape_3.setTransform(-25.7,-16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,0,1).p("AhTAAIBThTIBUBTIhUBUg");
	this.shape_4.setTransform(-2.8,10.2,1,1,0,0,0,0.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(2.6,1,0,22.9).p("AhGAAICMAA");
	this.shape_5.setTransform(23.9,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(2.6,1,0,22.9).p("AAAhFIAACM");
	this.shape_6.setTransform(23.9,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-19.6,64.3,39.3);


(lib.ptN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,1,1).p("AhYAAICxAA");
	this.shape.setTransform(17.9,43.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,1,1).p("AiOAAIEdAA");
	this.shape_1.setTransform(-12.4,37.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("AiOAAIEdAA");
	this.shape_2.setTransform(-12.4,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AgaAwQgMgHAEgQQACgHAGgMQAEgGAGgKQAIgOgCgLQgGgOACgBQAEgCALALQAKAHAIAKQAKAMAEAMQAFAOgCAOQgCAOgIAGQgIAFgIgEQgEgBgDgHQgBgGABgHQABgNAAgBQgBgBgDABQAAACgBAFQgCASgEAGQgDAEgGABQgFABgFgDg");
	this.shape_3.setTransform(-22.9,-38.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(4.9,0,0,22.9).p("AggARIBCAAQABAAAAgCIAAgdQAAgBgBAAIhCAAQgCAAAAABIAAAdQAAACACAAg");
	this.shape_4.setTransform(-23,-28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AgOguIAdAAQABAAAAACIAABZQAAABgBAAIgdAAQgBAAAAgBIAAhZQAAgCABAAg");
	this.shape_5.setTransform(-22.9,-21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.7,1,1).p("Ah+goID9AAQAGAAAFAFQADAEAAAGIAAAzQAAAGgDAFQgFAEgGAAIj9AAQgGAAgEgEQgEgFAAgGIAAgzQAAgGAEgEQAEgFAGAAg");
	this.shape_6.setTransform(-6.6,24.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AAHgQIgNAh");
	this.shape_7.setTransform(-12.2,-12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AAAAXIAAgt");
	this.shape_8.setTransform(-6.1,-28.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AgKATIAUgl");
	this.shape_9.setTransform(-2.4,-27);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AAKATIgUgl");
	this.shape_10.setTransform(-9.7,-27);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AgNALIAbgU");
	this.shape_11.setTransform(-0.3,-24.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AAOALIgbgU");
	this.shape_12.setTransform(-11.9,-24.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E02148").ss(1.7,1,1).p("AgohWIAnBkIAXgOIATAoIhHAv");
	this.shape_13.setTransform(6.4,-3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E02148").ss(1.7,1,1).p("AAKiiIgTFF");
	this.shape_14.setTransform(0,3.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E02148").ss(1.7,1,1).p("AA7imIh1FN");
	this.shape_15.setTransform(-6.3,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#E02148").ss(1.7,1,1).p("ABBheIiBC9");
	this.shape_16.setTransform(-7.6,-4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E02148").ss(1.7,1,1).p("Agmi5IAwBBIAcBSIgWDg");
	this.shape_17.setTransform(-17.4,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E02148").ss(1.7,1,1).p("Ah7jUIBhBYIBmAAIAdAUIATE9");
	this.shape_18.setTransform(-8.5,-1.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAA1QAUAAAPgPQAOgQAAgWQAAgUgOgQQgPgQgUAAQgTAAgPAQQgOAQAAAUQAAAWAOAQQAPAPATAAg");
	this.shape_19.setTransform(-6.2,-20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-56.3,65.9,100.9);


(lib.ptM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAA5QAYAAARgRQARgRAAgXQAAgWgRgRQgRgRgYAAQgWAAgRARQgRARAAAWQAAAXARARQARARAWAAg");
	this.shape.setTransform(-25.1,-18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.8,1,1).p("AgcgnIA5AnIg5Aog");
	this.shape_1.setTransform(-14.2,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AhFhTICLAAQAMAAAIAIQAIAJAAALIAABvQAAALgIAJQgIAIgMAAIiLAAQgMAAgIgIQgIgJAAgLIAAhvQAAgLAIgJQAIgIAMAAg");
	this.shape_2.setTransform(-15.2,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgNQAQgQAUAAQAVAAAQAQQAPANAAAW");
	this.shape_3.setTransform(25.7,-16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgNQAQgQAUAAQAVAAAQAQQAPANAAAW");
	this.shape_4.setTransform(4.5,-16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgVAPgOQAQgQAUAAQAWAAAPAQQAQANAAAW");
	this.shape_5.setTransform(15.1,-16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgNQAQgQAUAAQAWAAAPAQQAQAOAAAV");
	this.shape_6.setTransform(-6.1,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-25,64,50);


(lib.ptL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,0,1).p("AhDAAIBDhDIBEBDIhEBEg");
	this.shape.setTransform(15.5,-1.5,1,1,0,0,0,0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgNQAQgQAUAAQAWAAAPAQQAQANAAAW");
	this.shape_1.setTransform(11.1,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgNQAQgQAUAAQAWAAAPAQQAQANAAAW");
	this.shape_2.setTransform(-10.2,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgNQAQgQAUAAQAWAAAPAQQAPANAAAW");
	this.shape_3.setTransform(0.4,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,1,1).p("Ag0AaQAAgWAQgNQAQgQAUAAQAVAAAQAQQAQANAAAW");
	this.shape_4.setTransform(-20.8,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,0,1).p("AhVAAIBVhWIBWBWIhWBXg");
	this.shape_5.setTransform(17.6,-14.9,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-24.6,54.3,49.3);


(lib.ptK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,1,1).p("AhPBQICfif");
	this.shape.setTransform(-2.9,-31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,1,1).p("AhPBQICfif");
	this.shape_1.setTransform(-5.5,-33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("ABQBQIifif");
	this.shape_2.setTransform(-5.5,-31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("ABQBQIifif");
	this.shape_3.setTransform(-2.9,-33);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAB2QAwAAAjgjQAjgjAAgwQAAgwgjgiQgjgjgwAAQgvAAgjAjQgjAjAAAvQAAAwAjAjQAiAjAwAAg");
	this.shape_4.setTransform(-4.2,-32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAeQAGAAAFgJQAFgJAAgMQAAgLgFgJQgFgJgGAAQgFAAgFAJQgFAJAAALQAAAMAFAJQAFAJAFAAg");
	this.shape_5.setTransform(10,-9.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AADiSIAFEjIgHgBIgBAAQgCAAgEABIAEkjIACAAIABAAg");
	this.shape_6.setTransform(10,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAPQAGAAAEgFQAFgEAAgGQAAgFgFgEQgEgFgGAAQgFAAgEAFQgFAEAAAFQAAAGAFAEQAEAFAFAAg");
	this.shape_7.setTransform(10.1,33.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAhoQAVAAATAhQARAfAFAoQAFAsgOAcQgQAhglAAQgkAAgQghQgOgcAFgsQAEgoASgfQATghAUAAg");
	this.shape_8.setTransform(10.1,33.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAhCIATAvIAzAFIgnAfIAMAyIgrgaIgrAaIAMgyIgngfIAzgFg");
	this.shape_9.setTransform(-9.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-54.2,35,112.1);


(lib.ptJ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,0,1).p("AAAhzIAbAfIAogJIAEAqIAmARIgVAiIAVAkIgmARIgEApIgogIIgbAfIgagfIgpAIIgEgpIglgRIAUgkIgUgiIAlgRIAEgqIApAJg");
	this.shape.setTransform(-3.2,17.1,1,1,0,0,0,0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAsQASAAANgNQANgNAAgSQAAgRgNgNQgNgNgSAAQgRAAgNANQgNANAAARQAAASANANQANANARAAg");
	this.shape_1.setTransform(-3.2,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("AiOAAIEdAA");
	this.shape_2.setTransform(-18.8,-12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("AivAAIFfAA");
	this.shape_3.setTransform(-15.5,-5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgOQAQgPAUAAQAVAAAQAPQAPAOAAAW");
	this.shape_4.setTransform(27.9,-26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,1,1).p("Ag0AaQAAgVAQgPQAQgPAUAAQAVAAAQAPQAQAOAAAW");
	this.shape_5.setTransform(6.7,-26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgVAPgPQAQgPAUAAQAWAAAPAPQAQAPAAAV");
	this.shape_6.setTransform(17.3,-26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E02148").ss(1.7,1,1).p("AgzAaQAAgWAPgOQAQgPAUAAQAVAAAQAPQAPAOAAAW");
	this.shape_7.setTransform(-4,-26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-29.7,68.4,59.5);


(lib.ptI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,1,1).p("AjbAAIG3AA");
	this.shape.setTransform(14.4,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,1,1).p("AizhSIFlAAQACAAAAADIAACRQAAAHgFAFQgFAFgHAAIlEAAQgIAAgFgFQgFgFAAgHg");
	this.shape_1.setTransform(22.2,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("AgXg5IAvAAQAGAAAEAEQAEAEAAAGIAABYQAAAFgEAEQgEAEgGAAIgvAAQgGAAgEgEQgEgEAAgFIAAhYQAAgGAEgEQAEgEAGAAg");
	this.shape_2.setTransform(22.2,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAgUQAaAAAgAOQgIALgQAIQgPAIgTAAQgRAAgQgIQgPgIgJgLQAhgOAYAAg");
	this.shape_3.setTransform(22.2,-22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAhEQAwAAA5ApQA9AqALA2IlhAAQALg2A9gqQA5gpAvAAg");
	this.shape_4.setTransform(22.2,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-25.7,49.9,41.2);


(lib.ptH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E02148").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(3.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E02148").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_1.setTransform(-1.7,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E02148").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(-7.1,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAnQAQAAAMgLQAMgMAAgQQAAgPgMgLQgMgMgQAAQgPAAgMAMQgMALAAAPQAAAQAMAMQAMALAPAAg");
	this.shape_3.setTransform(-8.1,-23.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAoQAQAAAMgMQAMgMAAgQQAAgPgMgMQgMgMgQAAQgPAAgMAMQgMAMAAAPQAAAQAMAMQAMAMAPAAg");
	this.shape_4.setTransform(0.1,-9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAoQAQAAAMgMQAMgMAAgQQAAgPgMgMQgMgMgQAAQgPAAgMAMQgMAMAAAPQAAAQAMAMQAMAMAPAAg");
	this.shape_5.setTransform(-16.4,-9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.2,1,1).p("AgUAoIAphP");
	this.shape_6.setTransform(-12.1,-16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E02148").ss(1.2,1,1).p("AAVAoIgphP");
	this.shape_7.setTransform(-4.2,-16.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E02148").ss(0.5,1,1).p("AgsAAIBZAA");
	this.shape_8.setTransform(-8,-9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E02148").ss(1.7,1,1).p("AhnhsIDPAAQAMAAAIAIQAIAJAAALIAABvQAAAMgIAIQgIAIgMAAIglAAIAAAxIg0gxIh2AAQgMAAgIgIQgIgIAAgMIAAhvQAAgLAIgJQAIgIAMAAg");
	this.shape_9.setTransform(-1.8,19.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAANgPQAQgQAAgVQAAgUgQgQQgNgQgWAA");
	this.shape_10.setTransform(17.7,-25.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAANgPQAQgQAAgVQAAgUgQgQQgNgPgWAA");
	this.shape_11.setTransform(17.7,-3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA1QAWAAANgQQAQgQAAgVQAAgVgQgPQgNgQgWAA");
	this.shape_12.setTransform(17.7,-14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-31.4,42.8,62.8);


(lib.ptG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAA5QAXAAARgRQARgRAAgXQAAgWgRgRQgRgRgXAAQgWAAgRARQgRARAAAWQAAAXARARQARARAWAAg");
	this.shape.setTransform(-15.7,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,1,1).p("AhhAAIDDAA");
	this.shape_1.setTransform(11.6,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AhFhTICLAAQALAAAJAIQAIAJAAALIAABvQAAAMgIAIQgJAIgLAAIiLAAQgMAAgIgIQgIgIAAgMIAAhvQAAgLAIgJQAIgIAMAAg");
	this.shape_2.setTransform(-2.3,-8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AhFhTICLAAQALAAAJAIQAIAJAAALIAABvQAAAMgIAIQgJAIgLAAIiLAAQgLAAgJgIQgIgIAAgMIAAhvQAAgLAIgJQAJgIALAAg");
	this.shape_3.setTransform(-9.6,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-24.4,44.9,48.8);


(lib.ptF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.8,1,1).p("AAjghIhFBD");
	this.shape.setTransform(19.7,-14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.8,1,1).p("AAjAiIhFhD");
	this.shape_1.setTransform(19.7,-21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.8,1,1).p("AiIAAIERAA");
	this.shape_2.setTransform(8,-17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAyQAUAAAPgPQAPgPAAgUQAAgTgPgPQgPgPgUAAQgTAAgPAPQgPAPAAATQAAAUAPAPQAPAPATAAg");
	this.shape_3.setTransform(12.3,19.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(2.6,1,0,22.9).p("ABGAAIiMAA");
	this.shape_4.setTransform(25.5,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(2.6,1,0,22.9).p("AAAhGIAACM");
	this.shape_5.setTransform(25.5,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAoQAQAAAMgMQAMgMAAgQQAAgPgMgLQgMgNgQAAQgPAAgLANQgNALAAAPQAAAQANAMQALAMAPAAg");
	this.shape_6.setTransform(-10.7,20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAnQAQAAAMgLQAMgMAAgQQAAgPgMgLQgMgMgQAAQgPAAgLAMQgNALAAAPQAAAQANAMQALALAPAAg");
	this.shape_7.setTransform(-2.5,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAnQAQAAAMgLQAMgMAAgQQAAgPgMgLQgMgMgQAAQgPAAgLAMQgNALAAAPQAAAQANAMQALALAPAAg");
	this.shape_8.setTransform(-19,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E02148").ss(1.2,1,1).p("AgUgnIApBP");
	this.shape_9.setTransform(-14.7,13.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E02148").ss(1.2,1,1).p("AAVgnIgpBP");
	this.shape_10.setTransform(-6.8,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E02148").ss(0.5,1,1).p("AgsAAIBZAA");
	this.shape_11.setTransform(-10.6,6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E02148").ss(1.7,1,1).p("AifAAIE/AA");
	this.shape_12.setTransform(-16.5,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-25.6,67.5,51.3);


(lib.ptE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,0,1).p("AhDAAIBDhDIBEBDIhEBEg");
	this.shape.setTransform(4.5,-29.3,1,1,0,0,0,0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.8,1,1).p("AgcgnIA5AnIg5Aog");
	this.shape_1.setTransform(24.8,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AhFhTICLAAQALAAAJAIQAIAJAAALIAABvQAAAMgIAIQgJAIgLAAIiLAAQgLAAgJgIQgIgIAAgMIAAhvQAAgLAIgJQAIgIAMAAg");
	this.shape_2.setTransform(23.8,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AgaAwQgMgHAEgQQABgHAHgLQADgGAHgKQAIgPgCgLQgBgDgCgHQgCgEABgBQADgCAMALQAKAIAIAKQAJALAEAMQAFAOgBAPQgCAOgJAGQgHAFgIgEQgFgDgCgGQgBgGAAgGQACgOgBAAQgBgCgCACQAAACgBAEQgCASgEAGQgDAFgGABQgFAAgFgDg");
	this.shape_3.setTransform(-29.9,-31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(4.9,0,0,22.9).p("AghARIBCAAQACAAAAgCIAAgdQAAgBgCAAIhCAAQgBAAAAABIAAAdQAAACABAAg");
	this.shape_4.setTransform(-30,-20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AgOgtIAdAAQACAAAAABIAABZQAAABgCAAIgdAAQgCAAAAgBIAAhZQAAgBACAAg");
	this.shape_5.setTransform(-30,-14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.7,1,1).p("Ah+goID9AAQAGAAAEAFQAEAEAAAGIAAAzQAAAGgEAFQgEAEgGAAIj9AAQgGAAgEgEQgEgFAAgGIAAgzQAAgGAEgEQAEgFAGAAg");
	this.shape_6.setTransform(-13.7,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AAHgQIgNAh");
	this.shape_7.setTransform(-19.3,-5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AAAAXIAAgu");
	this.shape_8.setTransform(-13.2,-20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AgJATIAUgl");
	this.shape_9.setTransform(-9.5,-19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AALATIgUgl");
	this.shape_10.setTransform(-16.8,-19.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AgNALIAbgU");
	this.shape_11.setTransform(-7.4,-16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E02148").ss(1.7,1,0,22.9).p("AAOALIgbgU");
	this.shape_12.setTransform(-18.9,-16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E02148").ss(1.7,1,1).p("AgohWIAnBkIAXgOIATAoIhHAv");
	this.shape_13.setTransform(-0.7,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E02148").ss(1.7,1,1).p("AAKiiIgTFE");
	this.shape_14.setTransform(-7.1,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E02148").ss(1.7,1,1).p("AA7imIh1FN");
	this.shape_15.setTransform(-13.4,10.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#E02148").ss(1.7,1,1).p("ABBhdIiBC8");
	this.shape_16.setTransform(-14.7,2.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E02148").ss(1.7,1,1).p("Agmi5IAwBAIAdBTIgXDg");
	this.shape_17.setTransform(-24.5,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E02148").ss(1.7,1,1).p("Ah7jUIBhBYIBmAAIAdAUIATE9");
	this.shape_18.setTransform(-15.6,5.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAA1QAUAAAPgPQAOgRAAgVQAAgUgOgRQgPgPgUAAQgTAAgPAPQgOARAAAUQAAAVAOARQAPAPATAAg");
	this.shape_19.setTransform(-13.2,-13);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAhCIATAvIAzAEIgnAgIAMAyIgrgbIgrAbIANgyIgnggIAygEg");
	this.shape_20.setTransform(20.4,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-53.6,72.8,90.8);


(lib.ptD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,1,1).p("AC0hSIlkAAQgDAAAAADIAACRQAAAHAFAFQAFAFAIAAIFEAAQAHAAAFgFQAFgFAAgHg");
	this.shape.setTransform(16.4,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,1,1).p("AAYg5IgvAAQgGAAgEAEQgEAEAAAFIAABZQAAAFAEAEQAEAEAGAAIAvAAQAGAAAEgEQAEgEAAgFIAAhZQAAgFgEgEQgEgEgGAAg");
	this.shape_1.setTransform(16.4,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAgVQgZAAggAPQAJALAPAJQAQAIARAAQATAAAPgIQAQgJAIgLQgfgPgbAAg");
	this.shape_2.setTransform(16.4,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("AAAhFQgvAAg5AqQg9AqgLA3IFhAAQgLg2g9grQg5gqgwAAg");
	this.shape_3.setTransform(16.4,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AhFhTICLAAQALAAAJAIQAIAJAAALIAABvQAAALgIAJQgJAIgLAAIiLAAQgMAAgIgIQgIgJAAgLIAAhvQAAgLAIgJQAIgIAMAAg");
	this.shape_4.setTransform(-17.3,-13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AhFhTICLAAQALAAAJAIQAIAJAAALIAABvQAAALgIAJQgJAIgLAAIiLAAQgMAAgIgIQgIgJAAgLIAAhvQAAgLAIgJQAIgIAMAAg");
	this.shape_5.setTransform(-24.6,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-29.1,71,58.4);


(lib.ptC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,1,1).p("AhPBQICfif");
	this.shape.setTransform(-8.3,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,1,1).p("AhPBQICfif");
	this.shape_1.setTransform(-10.9,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("ABQBQIifif");
	this.shape_2.setTransform(-10.9,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("ABQBQIifif");
	this.shape_3.setTransform(-8.3,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAB2QAwAAAjgjQAjgiAAgxQAAgvgjgjQgjgjgwAAQgwAAgiAjQgjAjAAAvQAAAxAjAiQAjAjAvAAg");
	this.shape_4.setTransform(-9.6,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,1,1).p("Ah7AAID3AA");
	this.shape_5.setTransform(-0.6,-20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAANgPQAQgQAAgVQAAgVgQgPQgNgQgWAA");
	this.shape_6.setTransform(18.8,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA1QAWAAANgQQAQgPAAgWQAAgUgQgQQgNgPgWAA");
	this.shape_7.setTransform(18.8,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAANgPQAQgQAAgVQAAgUgQgQQgNgPgWAA");
	this.shape_8.setTransform(18.8,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-21.5,54.3,51.7);


(lib.ptB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E02148").ss(1.7,0,1).p("AAAh0IAbAgIAogKIAEArIAmAQIgVAjIAVAkIgmAQIgEAqIgogJIgbAgIgaggIgpAJIgEgqIglgQIAUgkIgUgjIAlgQIAEgrIApAKg");
	this.shape.setTransform(18.8,25.6,1,1,0,0,0,0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAsQASAAANgNQANgNAAgSQAAgRgNgNQgNgNgSAAQgRAAgNANQgNANAAARQAAASANANQANANARAAg");
	this.shape_1.setTransform(18.8,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E02148").ss(1.7,1,1).p("AhWAAICtAA");
	this.shape_2.setTransform(-21,28.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("AiOAAIEdAA");
	this.shape_3.setTransform(-15.4,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAeQAGAAAFgJQAFgJAAgMQAAgLgFgJQgFgJgGAAQgFAAgFAJQgFAJAAALQAAAMAFAJQAFAJAFAAg");
	this.shape_4.setTransform(-9.1,-34.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AADiRIAFEjIgHgBIgBAAIgGABIAEkjIACAAIABAAg");
	this.shape_5.setTransform(-9.1,-16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAAPQAGAAAEgFQAFgEAAgGQAAgFgFgEQgEgFgGAAQgFAAgEAFQgFAEAAAFQAAAGAFAEQAEAFAFAAg");
	this.shape_6.setTransform(-9,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E02148").ss(1.7,0,0,22.9).p("AAAhoQAVAAATAhQARAfAFAoQAFAsgOAcQgQAhglAAQgkAAgQghQgOgcAFgsQAEgoASgfQATghAUAAg");
	this.shape_7.setTransform(-9,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-38.1,61.5,76.4);


(lib.ptA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E02148").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape.setTransform(5.3,-34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E02148").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_1.setTransform(0,-34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E02148").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(-5.4,-34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E02148").ss(1.7,1,1).p("AhnhrIDPAAQAMAAAIAIQAIAIAAAMIAABvQAAALgIAJQgIAIgMAAIglAAIAAAxIg0gxIh2AAQgMAAgIgIQgIgJAAgLIAAhvQAAgMAIgIQAIgIAMAAg");
	this.shape_3.setTransform(0,-31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAANgPQAQgQAAgVQAAgVgQgPQgNgPgWAA");
	this.shape_4.setTransform(-10.6,-5.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA1QAWAAANgQQAQgPAAgWQAAgUgQgQQgNgPgWAA");
	this.shape_5.setTransform(-10.6,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAANgPQAQgPAAgWQAAgUgQgQQgNgPgWAA");
	this.shape_6.setTransform(-10.6,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAANgPQAQgQAAgVQAAgVgQgPQgNgQgWAA");
	this.shape_7.setTransform(-10.6,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E02148").ss(1.7,1,1).p("AgZA0QAWAAANgPQAQgPAAgWQAAgVgQgPQgNgPgWAA");
	this.shape_8.setTransform(-10.6,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-43.4,28.6,86.9);


(lib.logo_media = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnAvIgCgBIgBgCIAAhIIgeBJIAAABIAAABIgBAAQgCABgDAAQgEAAgCgBIAAAAIAAgBIgBgBIgdhJIAABIIAAACQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgGABIgEgBIgDgBIAAgCIAAhUIAAgDIACgCIADgCIABAAIAJAAIACAAIACAAIAEACIACADIAaBDIAag/IAFgHIADgCIADAAIAIAAIABAAIACAAIADADIABAEIAABUIAAACIgCABIgGABg");
	this.shape.setTransform(-16.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAwIgCgBIgCgBIgCgCIAAgCIAAhTIAAgCIACgCIACgBIACgBIArAAIABABIAAAAIABABIABAAIAAABIAAAIIgBABIgBABIAAAAIgjAAIAAAbIAdAAIABAAIABABIABADIAAADIgBADIgBABIgBAAIgdAAIAAAeIAiAAIACABIABABIABABIAAABIAAACIAAACIAAACIAAABIgBACIgBAAIgBABg");
	this.shape_1.setTransform(-5.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAwIgCgBIgCgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBgCIAAhTIABgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIACgBIACgBIAeABIAKACIAIAFIAHAFIAFAHIAEAIIADATQAAALgDAJIgFAIIgFAHIgGAGIgJAEIgTADgAgXAiIAOAAQAJAAAEgBQANgGAEgPQADgMgEgOQgGgTgXgBIgOAAg");
	this.shape_2.setTransform(3.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBAwIgBAAIgBAAIgCgBIAAgBIgBgBIAAhaIABgBIAAAAIACgBIAHAAIACABIAAAAIABABIAABaIgBABIAAABIgCABIgBAAIgCAAg");
	this.shape_3.setTransform(10.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeAwIgBAAIgBAAIgBgBIgBgBIAAAAQgDgGgFgRIgkAAIgHAWIAAAAIgBABIAAABIgCABIgCAAIgBAAIgEAAIgCAAIgBAAIgCgCIAAgDIAghXIABgCIACgBIABAAIAJAAIABAAIABABIACABIAAABIAgBXIAAADIgBABIAAAAIgBABIgBAAIgCAAgAgNAKIAaAAIgNgng");
	this.shape_4.setTransform(18,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-4.9,44.3,9.8);


(lib.logo_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E02148").s().p("AgMHFInHnFQgRgRAAgYIAAiaQAAgZARgQIDXjYQARgRAZAAQAYAAARARIDEDGICPiPQARgRAYAAQAZAAARARIDXDXQARARAAAXIAACZQABAYgSASImQGQQgRARgYAAQgYAAgPgRgAgGGnIAKAMQAJAJAOAAQANAAAKgJIAKgKIAAh4QgPALgTgBQgTAAgNgLgABWF6IAAAVIFslsQAKgLAAgMIAAgIgAnLgpQAAANAKAKIGiGgIAAh2ImsmqgABWFIIAAAZIF2l0IAAgZgABWEZIAAAVIF2l0IAAgVgAjqmyIjXDXQgKAKAAAOQAAANAKAKIHFHEQAKAJANAAQANABAKgKIGQmOQAKgJAAgOQAAgNgKgKIjXjXQgKgKgOAAQgNAAgKAKIihChIjWjYQgKgJgNAAQgOAAgKAJgAhOEvIgTANIAAABIgBgBIAHgWIgSgNIAAgBIAAAAIAXAAIAHgWIABgBIAAABIAHAWIAYAAIAAABIgTANIAHAWIAAAAIgBABgAiGD4IgSANIgBAAIAAgBIAHgVIgTgOIAAAAIABgBIAXAAIAHgWIAAAAIABAAIAHAWIAXAAIAAABIgSAOIAHAVIAAABIgBAAgAirDOIgSgOIgTAOIAAAAIgBgBIAIgWIgTgNIAAgBIAAAAIAXAAIAHgWIABAAIAAAAIAHAWIAYAAIAAABIgTANIAHAWIAAABgAjiCWIgTgNIgSANIgBAAIAAAAIAHgWIgSgOIgBAAIABgBIAXAAIAHgVIAAgBIABABIAHAVIAXAAIAAABIAAAAIgSAOIAHAWIAAAAgAkaBfIgSgOIgSAOIgBAAIAAgBIAHgWIgTgNIAAgBIAAAAIAXAAIAHgWIABAAIABAAIAHAWIAWAAIABAAIAAABIgTANIAHAWIAAABIAAAAIgBAAgAlRAnIgSgNIgTANIgBAAIAAAAIAHgWIgSgNIgBgBIABgBIAXAAIAHgTIAAgBIABABIAHATIAXAAIABABIgBABIgSANIAHAWIAAAAIAAABIgBgBgAmugPIAHgVIgTgOIAAAAIABgBIAWAAIAHgWIABAAIABAAIAHAWIAXAAIAAAAIAAABIgTAOIAIAVIgBABIAAAAIgTgOIgSAOIgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBJQgEgCgIgJQgJgJgBgEIACgFIA3huIAFgGQADgCAEAEQAJAJADAGQABACgCAEIguBbIBaguQAEgDACABQAHADAIAJQADAEgCADIgGAEIhvA4IgDAAIgEAAg");
	this.shape_1.setTransform(-23.1,-25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmA3QgCgBgHgGQgFgFgCgEQgCgDADgCIBXhYQACgCADACIAJAHQAFAGACADQACADgDACIhXBXIgCACIgDgBg");
	this.shape_2.setTransform(-17.2,-16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBQQgEgCgGgGQgGgGgCgEQgBgCACgDIALgbQAIgTgDgHQgDgEgHgFIgjAhQgCACgDgCQgJgEgHgLQgCgEACgCIBUhTQAHgHAGAGIAjAkQAKANAAANQAAAPgLAJQgMAKgOAAQgHAAgJgDQABAFAAAGQgBAFgGASQgHATgEAHQgCAFgBAAIgCgBgAAAgVIAKAKQAGAFAGABQAHACAGgEQAHgFABgHQABgGgHgJIgMgMg");
	this.shape_3.setTransform(-10.6,-9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AABBCQgFgHgBgDQgCgCACgDIAKgZIggggIgYAKQgDACgDgBQgFgDgJgJQgFgGAKgEIBvg3QAFgDAIAGIAKAKQAHAHgBAEIgBAEIg2BuQgFAIgCAAQgDAAgIgIgAgGgRIAWAWIAZgvg");
	this.shape_4.setTransform(-1.8,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBGIgrgqQgGgHAGgHIBUhTQACgCAEABQADACAFAFQAGAGABADQADADgDACIhJBJIAbAeQACACgCACQgBAEgEAEQgDAEgCABIgDABIgDgCg");
	this.shape_5.setTransform(7.3,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBHQgWgJgRgUQgSgVAAgVQAAgbAXgWQAYgWAYAAQAUAAASAMQASANALAUQAFAIAAAIQAAADgEAFQgFADgDACQgGAEgCgFIgBgCQgEgTgMgLQgPgOgRABQgPABgOAOQgPAQgBAOQgBAMAIALQAIALALAEIATgVIgPgRQgEgCAIgIQAIgIACAEIAgAeQAGAFgHAIIgjAlQgEAEgEAAIgEgBg");
	this.shape_6.setTransform(17.6,-20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFBFQgXAAgUgUQgVgTgCgXIAAgEQABgWAZgYQAXgYAYgBQAYgBAXAVQAXAVgBAZQAAAKgHAMQgLAUgTAOQgUAPgSAAIgBAAgAAEgoQgMADgPAPQgPAPgDALQgDAPANANQANAMAPgDQAMgDAPgPQAPgPADgLQADgQgNgMQgKgKgLAAIgHABg");
	this.shape_7.setTransform(27.8,-10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-47,97.1,94.1);


(lib.logo_fest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E02148").s().p("AgPAhIgBgBIgBgCIAAg7IABgBIABgBIABgBIABAAIAdAAIABAAIABAFIgBAEIgBABIgVAAIAAASIASAAIADABQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAIAAACIgBACIgDABIgSAAIAAAZIgBABIAAABIgEABg");
	this.shape.setTransform(-18.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E02148").s().p("AgNAhIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAg3QAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAdAAIABAAIAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIgBAEIAAAAIgBABIgCAAIgVAAIAAARIASAAIAAAAIABAAIABABIAAABIABADIgBACIAAABIgCAAIgSAAIAAAUIAWAAIAAAAIABAAIABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIgBAEIgBABg");
	this.shape_1.setTransform(-13.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E02148").s().p("AgRAeIgCgCIgBgBIAAgBIAAgEQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAIACABIABAAIAGADIAFABQADABADgBIAEgDQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgDgDgBIgEgDIgIgEIgEgBQgGgEgBgJQgBgHAFgGIAAgCIACgBQADgCACgBIAGgBIAEAAIAFABIAFABIAEACIABAFIgBAEIgCABIgCAAIgDgCIgFgCIgFAAIgDABIgDAFIABAEIAAACIABAAIAHAGIAGACQAHADACACQADAFAAAGQAAAHgDAEQgDAGgGACQgHADgDAAQgJgBgHgEg");
	this.shape_2.setTransform(-8.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E02148").s().p("AgRAdIgCgDQgCgHAEAAIADABQAFADAFABQAIABAEgFQACgDgBgFQgBgEgHgEIgEgCIgHgDQgGgEgBgIQgCgHAFgGIACgCQAFgEAGgBIAIABIAJAEQACADgCAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBgBIgIgDQgFgCgEACQgCACgBADQgBAEACACIABACIAKAHIADABQAMAEAAALQAAAOgOAFQgFACgDAAQgIAAgHgFg");
	this.shape_3.setTransform(-8.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E02148").s().p("AgDAgIgBgBIgBgBIAAg0IgRAAIgBgBIgBAAIAAgEIAAgEIABgBIABAAIAtAAIABAAIABAFIgBAEIgBABIgSAAIAAA1IgBABIgEABg");
	this.shape_4.setTransform(-2.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E02148").s().p("AgEAeIAAg7QAAgEAEAAQAFAAAAAEIAAA7QAAAEgFAAQgEAAAAgEg");
	this.shape_5.setTransform(1.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E02148").s().p("AgDAhIgBAAIgBgBIgQgqIgGgRIAAgCIAAgCQAAgCAFAAIAFABIAAAAIABABIAAAAIABACIABABIAOAuIAQgwIABgBIAAgBIAGgBQADAAACACIAAACIAAACIgWA7IgBABIgEABg");
	this.shape_6.setTransform(6.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E02148").s().p("AgMAiQgFAAAAgGIAAg5QAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQAEgCAFACIABADIAAA0IAUAAIACABIABAEIgBAFIgCABg");
	this.shape_7.setTransform(18.9,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E02148").s().p("AgMAhIgDgBIgBgCIAAg8IABgBIABAAIAAAAIABgBIAEAAIABABIABAAIABABIAAA1IAUAAIABABIAAAAIACABIAAAAIAAABIAAAEIAAABIAAAAIgCACg");
	this.shape_8.setTransform(18.9,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E02148").s().p("AASAhIgBgBIgGgPIgWAAQgDANgDACIgBABQgEABgDgBQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBABgBIAVg7IACgCQAEgBAFABIACACIAVA6IABACQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBABIgIgBgAgIAGIAQAAIgIgXg");
	this.shape_9.setTransform(12.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-3.5,41.3,7);


(lib.logo_cult = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAuIgIgEIgGgFIgEgHIgEgJIgDgUIADgUIAEgIIAFgIIAGgFIAIgFIAIgCIAHgBIAIABIAKADIADABIAFADIAAABIABABIAAABIABAAIAAACIAAABIAAACIAAACIAAACIgBAAIgBACIgBABIgBAAIgEgCIgCgBIgCgCIgHgDIgEgBIgLAAIgDACIgFADIgDAEIgGALIgCAIIAAAGIAAAIIACAHIACAHIAEAEIADAEIAFADIADACIAGAAIAFAAIAIgCIADgCIADgCIACgBIACgBIACgBIABAAIABABIAAAAIABACIAAAHIAAABIgBACIAAAAIgBABIgGAEIgDACIgIACIgKABQgJAAgGgDg");
	this.shape.setTransform(-26.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAwIgHgCIgGgDIgFgEIgFgFQgCgDgBgDIgBgHIgBgJIAAg4IAAgBIABgBIAAgBIABAAIABAAIABgBIAHAAIABABIABAAIAAAAIABAAIAAABIABABIAAA4IACALIACAEIACADIADADIAEACIAHABIAEAAIAFgBIADgCIAEgDIAEgHIAAgFIABgGIAAg3IAAgCIACgBIABAAIACgBIAGAAIABABIABAAIABAAIABABIAAABIABABIAAA3IgBAJIgCAHIgEAGQgBAEgDACIgFAEIgHADIgHACIgHABg");
	this.shape_1.setTransform(-16.6,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAwIgCgCIgCgBIAAhYIAAgCIABgBIABAAIABAAIABgBIAGAAIACABIABAAIABAAIAAABIABABIAABPIAfAAIABAAIABABIABABIAAABIAAACIAAABIAAADIAAABIgBACIgBAAIgBABg");
	this.shape_2.setTransform(-7.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAwIgBAAIgBAAIgCgCIAAhPIgZAAIgBgBIgCgCIAAAAIAAgBIAAgBIgBgBIAAgCIABgCIAAgBIABgCIABgBIAAAAIBBAAIACABIABABIAAABIAAABIAAAFIAAABIAAABIgCACIgBAAIgBABIgZAAIAABNIAAACIgBAAIAAABIgBABIgBAAIgBAAg");
	this.shape_3.setTransform(-1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAwIgHgCIgGgDIgGgEIgEgFQgCgDgBgDIgCgHIAAhCIAAgBIABgBIABAAIABAAIABgBIAGAAIACABIABAAIABAAIAAABIABABIAAA4IABALIACAEIADADIADADIADACIAIABIAEAAIAEgBIAEgCIADgDIAEgHIABgFIABgGIAAg3IAAgCIABgBIABAAIABAAIABgBIAHAAIABABIABAAIABAAIAAABIABABIAAABIAAA3IgBAJIgCAHIgDAGQgBAEgDACIgFAEIgHADIgHACIgHABIgHgBg");
	this.shape_4.setTransform(8.4,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAwIgCgCIgBgCIgBgDIAAhRIABgDIABgCIACgBIACgBIArAAIADABIAAABIAAABIABABIAAAFIgBABIAAABIAAABIgDABIgiAAIAAAbIAdAAIABABIABABIABABIAAABIAAABIAAACIAAAAIAAABIgBABIgBABIAAAAIAAABIgeAAIAAAfIAiAAIACAAIABABIABAAIAAABIAAABIAAAHIgBACIgCABg");
	this.shape_5.setTransform(27.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAvQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIgJgXIgGgKIgCgEQgEgDgFAAIgHAAIAAAnIAAACQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgFABgEgBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAIAAgCIAAhVIAAgDQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIACAAIAUAAQAIAAAGACQAHABAEAGIAFAHIACAFQABAIgCAGQgCAGgFAEIgJADQAFACADAFQADAFABAFIAJAXQACAFgDABIgFABIgGgBgAgQgEIAKAAQAGAAACgBQAGgDADgFQADgFgCgHQgBgIgJgCIgJgBIgJAAg");
	this.shape_6.setTransform(18.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-4.9,59.6,10);


(lib.logo_business = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAwIgCgBIgCgBIgCgCIAAgDIAAhSIAAgCIACgCIACgCIACAAIAVAAIAGAAIAHACIAFACIAEACIADAFIADADIACAGIAAAFIgBAHIgBADIgCADIgEAFIgCABIAAABIAEACIAEAAIAEAGIACAEIABAEIABAFIgBAFIgCAHIgCAEIgCADIgGAFIgDACIgIACIgIABgAgQAkIAQAAIAGgBQADgBACgCIAFgFQABgDAAgEQAAgEgBgDQgCgDgDgCQgCgCgEgCQgDgBgFAAIgNAAgAgQgGIANAAIAFAAQAHgDABgGQACgFgCgHIgCgFIgGgCIgHgBIgLAAg");
	this.shape.setTransform(-28.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAwIgHgBIgGgDIgFgEIgFgGIgDgGIgCgHIAAhCIAAgBIABAAIACgBIABAAIABgBIAEAAIABABIACAAIACABIAAAAIABABIAAA4IABALIACAEIADADIADADIADACIAIABIAEAAIAFgBIADgCIADgDIADgDIABgEIACgLIAAg3IAAgCIADgBIABAAIACgBIADAAIACABIABAAIADABIAAABIAAABIAAA3IgCAQIgEAHIgEAFIgFAEQgDADgEAAIgHACIgHABIgHgBg");
	this.shape_1.setTransform(-19.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAxIgIgCIgHgEIgCgBIgBgCIgBgDIAAgEIABgBIAAgBIAAgBIABgBIAAgBIABAAIABAAIACAAIACABIAEADIAEABIADACIAEABIAHAAIAGgCIADgCIABgCIACgCIABgDIAAgDIAAgEIgCgCIgBgDIgDgCIgUgLIgHgEIgDgEIgCgEIgCgEIAAgGIAAgGIACgFIADgFIADgDQAEgEAGgBIAGgCIAEAAIAJABIAIADIACABIACABIAAABIABABIAAAAIAAACIABABIAAAFIgBABIAAABIAAAAIgBABIgBABIgCAAIgGgEIgJgDIgFAAIgGACIgDADIgCAEIAAADIABADIABADIACACIAFAEIACACIAMAGIALAFIADAEIACAEIACAKIgBAHIgCAGIgDAFIgEAEIgFADIgFACQgDACgEAAIgJAAg");
	this.shape_2.setTransform(-10.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAwIgCgBIAAAAIgBgCIAAhYIABgDIABAAIABgBIACAAIABAAIABAAIACAAIABAAIABABIABAAIABABIAAABIAABaIAAABIgBAAIgBABIgBAAg");
	this.shape_3.setTransform(-3.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAwIgDgBIgBgBIgCgBIgDgFIgihBIAABHIgBAAIAAAAIgBABIAAAAIgBABIgJAAIgCgBIgBgBIAAAAIAAgBIAAhVIABgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIACgCIACAAIAIAAIAEABIADACIACADIABACIAYAvIAIAPIAAhCIABgCIAAgBIABgBIABAAIACAAIAGAAIABAAIACAAIABABIAAABIABABIAABXIgBABIgBACIAAAAIgCABIgCABg");
	this.shape_4.setTransform(3.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAwIgCgBIgCgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgDIAAhSIAAgCIACgCIACgCIACAAIAsAAIAAAAIABABIABACIAAABIAAABIAAADIAAABIAAACIgBAAIAAABIgBABIAAAAIAAAAIgBABIgiAAIAAAaIAdAAIACABIABABIAAABIAAABIAAADIAAABIAAABIgCABIgBAAIgBABIgcAAIAAAfIAiAAIACAAIAAABIACACIAAAGIgBABIAAABIAAAAIgBAAIAAABIgBAAIgBABg");
	this.shape_5.setTransform(13.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAxIgHgCIgJgFIgBgCIAAgBIAAgCIgBgCIAAgCIABgBIAAgBIAAgBIAAgBIABgBIABAAIABAAIACAAIACABIAEADIAEABIADACIAEABIAGAAIAHgCIAFgEIACgFIAAgDIAAgEIgBgCIgFgFIgDgCIgRgJIgIgEIgFgIIgBgEIgBgGIABgGIACgFIADgFIADgDQAEgEAFgBIAHgCIAEAAIAJABIAJADIADACIAAABIAAABIABAAIAAACIAAAGIAAABIAAABIgBAAIAAABIgBABIgCAAIgCgBIgCgBIgCgCIgJgDIgGAAIgFACIgDADIgCAEIAAADIAAADIABADIACACIAGAEIARAKIAIADIACAEIADAEIACAFIAAAFIgBAHIgCAGIgDAFIgEAEIgFADIgGACQgDACgDAAIgFAAg");
	this.shape_6.setTransform(21.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAxIgIgCIgHgEIgCgBIgBgCIgBgDIAAgFIABgBIAAgBIABgCIABAAIABAAIACAAIACABIAEADIALAEIAHAAIAGgCIACgCIACgCIACgCIABgDIAAgHIgCgCIgCgDIgCgCIgDgCIgRgJIgHgEIgDgEIgCgEIgCgEIAAgGIAAgGIACgFIADgFIADgDQADgDAHgCIAFgCIAFAAIAJABIAIADIACABIACABIAAABIABABIAAAAIAAADIABABIAAACIgBACIAAACIAAAAIgBABIAAAAIgBABIgCAAIgCgBIgEgDIgJgDIgFAAIgGACIgCACIgBABIgBACIgBACIAAADIABADIABADIACACIACACIAFAEIAQAIIAHADIADAEIACAEIABAFIABAFIgBAHIgCAGIgDAFIgEAEIgFADIgFACQgDACgEAAIgJAAg");
	this.shape_7.setTransform(29,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-5,64,10);


(lib.logo_almaty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E02148").s().p("AgQAjQgDAAAAgFQAAgGADAAIAMAAIAAgrIgLAHIgDAAIgCgEIABgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAPgKIAEAAQAEAAAAADIABA2IAKAAQAEAAAAAGQAAAFgEAAg");
	this.shape.setTransform(24.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E02148").s().p("AgOAgIABgCIAVg0IgcAAQgCgBAAgFQAAgEACgBIABgBIAlAAIACABQAFACgEAJIgWA2IgCACIgHAAIgEgCg");
	this.shape_1.setTransform(30.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E02148").s().p("AgNAjQgEgBgBgFIAAg7QAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAFgBAEABQAAABABAAQAAAAAAAAQAAABABAAQAAABAAAAIAAA1IAUAAIACACQAAAAABAAQAAABAAAAQAAABAAABQABAAAAABQAAADgCACIgCABg");
	this.shape_2.setTransform(-23.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E02148").s().p("AgEAhIgBgBIgTgwIAAAvIgBADQgHABgDgCQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAg7IAAgCQACgEADAAIAIAAQAFACACADIAQAsIASgrIABgBQACgFAFAAIAHAAQAEACAAADIAAA8IgBADQgDABgGgBIgCgDIAAgvIgUAwIgBABQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgCg");
	this.shape_3.setTransform(-16.4,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E02148").s().p("AgaAiQgBAAgBAAQAAgBgBAAQAAgBAAgBQAAAAABgBIAWg9QAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAEgCAFACIACACIAWA8IABACQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgIgBIgCgBIgFgQIgXAAQgEANgCADIgCABIgDABIgEgBgAgIAHIAQAAIgIgYg");
	this.shape_4.setTransform(-29.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E02148").s().p("AgaAiQgDAAABgEIAWg9IACgCQAEgCAFACIACACIAXA8IAAACQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBABIgIgBIgBgBIgGgQIgXAAQgEAOgCACIgCABIgDABIgEgBgAgIAHIAQAAIgIgYg");
	this.shape_5.setTransform(-8.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E02148").s().p("AgDAiIgCgDIAAg1IgQAAIgDgBQgDgFADgEIADgCIAsAAIADADQABADgBADQgBABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgRAAIAAA1IgCADIgEABIgDgBg");
	this.shape_6.setTransform(-2.7,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E02148").s().p("AgEAhIgBgCIAAgYIgSgjIgBgDQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABAAQAIgBACADIALAbIAMgbIADgCQAGgCADACQACACgCADIgSAjIAAAYIgBADIgFABQgDAAgBgCg");
	this.shape_7.setTransform(3.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E02148").s().p("AgQAjIgDgBIgCgEQAAgEADgDIANgOQAFgIAEgFQAFgKgFgGQgEgFgJAEIgFADIgDABIgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgHAGgCIAIgDQAPgDAHALQADADAAAIQAAANgPAOIgIALIAWAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAABIgDABg");
	this.shape_8.setTransform(12.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E02148").s().p("AgVASQgCgIAAgKQAAgLADgIQAEgKAJgEQAHgDAJADQALAEACAMQACAGAAAIQABAmgZAAQgRAAgEgRgAgFgVQgEAEgCARIACAQQACAHAFABQAIACAEgJQACgGAAgLQAAgSgHgEIgFgBQgDAAgCACg");
	this.shape_9.setTransform(18.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-3.6,65.3,7.2);


(lib.bigbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("A4/XcMAAAgu3MAx/AAAMAAAAu3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.TXTtwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Al7BfIAAi9IL3AAIAAC9g");
	var mask_graphics_1 = new cjs.Graphics().p("Al7BfIAAi9IL3AAIAAC9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.1,y:7.3}).wait(1).to({graphics:mask_graphics_1,x:0.1,y:7.3}).wait(16));

	// txtGoviral
	this.instance = new lib.txtGoviral();
	this.instance.setTransform(0.3,8.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2).to({_off:false,y:25.5,alpha:0.5},0).wait(1).to({regX:-0.3,regY:0.2,x:0,y:18.9,alpha:0.678},0).wait(1).to({y:15.5,alpha:0.767},0).wait(1).to({y:13.1,alpha:0.83},0).wait(1).to({y:11.3,alpha:0.878},0).wait(1).to({y:9.9,alpha:0.915},0).wait(1).to({y:8.7,alpha:0.945},0).wait(1).to({y:7.9,alpha:0.968},0).wait(1).to({y:7.2,alpha:0.985},0).wait(1).to({y:6.8,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0.3,y:6.5,alpha:1},0).wait(1).to({regX:-0.3,regY:0.2,x:0,y:7.1},0).wait(1).to({y:7.9},0).wait(1).to({regX:0,regY:0,x:0.3,y:8.1},0).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ArUAsIAAiIIWpAAIAACIg");
	var mask_1_graphics_1 = new cjs.Graphics().p("ArUAsIAAiIIWpAAIAACIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:0,y:-9.3}).wait(1).to({graphics:mask_1_graphics_1,x:0,y:-9.3}).wait(16));

	// txtFest
	this.instance_1 = new lib.txtFest();
	this.instance_1.setTransform(0.1,-12.2);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-0.2,alpha:0.5},0).wait(1).to({regY:1.2,y:-3.9,alpha:0.678},0).wait(1).to({y:-6.3,alpha:0.767},0).wait(1).to({y:-8,alpha:0.83},0).wait(1).to({y:-9.3,alpha:0.878},0).wait(1).to({y:-10.3,alpha:0.915},0).wait(1).to({y:-11.2,alpha:0.945},0).wait(1).to({y:-11.8,alpha:0.968},0).wait(1).to({y:-12.2,alpha:0.985},0).wait(1).to({y:-12.5,alpha:0.996},0).wait(1).to({regY:0,y:-13.9,alpha:1},0).wait(1).to({regY:1.2,y:-12.2},0).wait(1).to({y:-11.4},0).wait(1).to({regY:0,y:-12.2},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-16.9,137.5,33.8);


(lib.TXTOne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("ApfBrIAAjVIS/AAIAADVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0.1,y:-5.3}).wait(16));

	// txtJune
	this.instance = new lib.txtJune();
	this.instance.setTransform(-0.3,-8.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2).to({_off:false,y:-24.6,alpha:0.5},0).wait(1).to({regX:0.3,regY:0.4,x:0,y:-18,alpha:0.672},0).wait(1).to({y:-14.9,alpha:0.756},0).wait(1).to({y:-12.7,alpha:0.817},0).wait(1).to({y:-11,alpha:0.866},0).wait(1).to({y:-9.6,alpha:0.905},0).wait(1).to({y:-8.4,alpha:0.937},0).wait(1).to({y:-7.5,alpha:0.963},0).wait(1).to({y:-6.8,alpha:0.982},0).wait(1).to({y:-6.3,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:-0.3,y:-6.6,alpha:1},0).wait(1).to({regX:0.3,regY:0.4,x:0,y:-6.5},0).wait(1).to({y:-7.3},0).wait(1).to({regX:0,regY:0,x:-0.3,y:-8.1},0).wait(1));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("AjgBiIAAh+IHBAAIAAB+g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-0.2,y:9.9}).wait(16));

	// txtAlmaty
	this.instance_1 = new lib.txtAlmaty();
	this.instance_1.setTransform(0.2,11.2);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:2.2,alpha:0.5},0).wait(1).to({regX:-0.3,regY:0.3,x:-0.1,y:6.1,alpha:0.672},0).wait(1).to({y:7.9,alpha:0.756},0).wait(1).to({y:9.2,alpha:0.817},0).wait(1).to({y:10.2,alpha:0.866},0).wait(1).to({y:11,alpha:0.905},0).wait(1).to({y:11.7,alpha:0.937},0).wait(1).to({y:12.2,alpha:0.963},0).wait(1).to({y:12.6,alpha:0.982},0).wait(1).to({y:12.9,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0.2,y:12.7,alpha:1},0).wait(1).to({regX:-0.3,regY:0.3,x:-0.1,y:12.6},0).wait(1).to({y:11.9},0).wait(1).to({regX:0,regY:0,x:0.2,y:11.2},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,-16,121.8,32);


(lib.pattern = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));

	// ptr
	this.instance = new lib.ptR();
	this.instance.setTransform(178.1,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(17).to({_off:false,regY:0.5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regY:0,scaleX:0.15,scaleY:0.15,y:11.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,y:11.2},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:11.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:11},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:10.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:10.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:11.4},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// ptQ
	this.instance_1 = new lib.ptQ();
	this.instance_1.setTransform(188,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(16).to({_off:false,regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regX:0,regY:0,scaleX:0.15,scaleY:0.15,x:187.9,y:20.3},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:187.8,y:20.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:187.7,y:20.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:187.6,y:20},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:187.5,y:19.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:188,y:20.4},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

	// ptP
	this.instance_2 = new lib.ptP();
	this.instance_2.setTransform(185.4,-33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(15).to({_off:false,regX:0.5,regY:-0.5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regX:0,regY:0,scaleX:0.15,scaleY:0.15,x:185.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:185.2,y:-33.8},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:185.1,y:-33.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:185},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:-33.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:184.9,y:-33.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:184.8,y:-33.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:185.4,y:-33.9},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1},0).wait(3));

	// ptO
	this.instance_3 = new lib.ptO();
	this.instance_3.setTransform(154.9,-40.3,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(14).to({_off:false,regX:0.5,regY:-0.5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regX:0.2,regY:0,scaleX:0.15,scaleY:0.15,x:154.8,y:-40.2},0).wait(1).to({scaleX:0.27,scaleY:0.27,y:-40.1},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:154.7,y:-40},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:154.6,y:-39.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-39.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:-39.7},0).wait(1).to({regX:0.3,regY:-0.1,scaleX:1.05,scaleY:1.05,x:154.9,y:-40.3},0).wait(1).to({regX:0.2,regY:0,scaleX:1.04,scaleY:1.04,x:154.8,y:-40.2},0).wait(1).to({regX:0.3,regY:-0.1,scaleX:1,scaleY:1,x:154.9,y:-40.3},0).wait(4));

	// ptN
	this.instance_4 = new lib.ptN();
	this.instance_4.setTransform(137.3,9.1,1,1,0,0,0,-5.2,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(13).to({_off:false,regX:-5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regX:-0.7,regY:0,scaleX:0.15,scaleY:0.15,x:137.9,y:9.9},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:138.4,y:10.7},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:139.1,y:11.6},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:139.9,y:12.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:140.5,y:13.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:141.2,y:14.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:141.6,y:15.1},0).wait(1).to({regX:-5.2,regY:-6,scaleX:1.05,scaleY:1.05,x:137.3,y:9.1},0).wait(1).to({regX:-0.7,regY:0,scaleX:1.04,scaleY:1.04,x:141.9,y:15.3},0).wait(1).to({regX:-5.2,regY:-6,scaleX:1,scaleY:1,x:137.3,y:9.1},0).wait(5));

	// ptM
	this.instance_5 = new lib.ptM();
	this.instance_5.setTransform(110.9,-26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(12).to({_off:false,regX:0.5,regY:-0.5,scaleX:0.1,scaleY:0.1,y:-26.3},0).wait(1).to({regX:0,regY:0,scaleX:0.15,scaleY:0.15,x:110.8,y:-26.2},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:110.7},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:110.6,y:-26.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:-26},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:110.5,y:-25.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:110.4,y:-25.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:110.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:110.8,y:-26.2},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1,x:110.9},0).wait(6));

	// ptL
	this.instance_6 = new lib.ptL();
	this.instance_6.setTransform(82.4,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(11).to({_off:false,regX:0.5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regX:0,scaleX:0.15,scaleY:0.15,x:82.3},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:82.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:82.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:82},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:81.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:82.4},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1},0).wait(7));

	// ptK
	this.instance_7 = new lib.ptK();
	this.instance_7.setTransform(62.6,1.2,1,1,0,0,0,0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(10).to({_off:false,regY:1.5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regY:0,scaleX:0.15,scaleY:0.15,y:0.9},0).wait(1).to({scaleX:0.27,scaleY:0.27,y:0.7},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:0.5},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:0.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:0},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-0.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:-0.4},0).wait(1).to({regX:0.1,regY:1.7,scaleX:1.05,scaleY:1.05,y:1.2},0).wait(1).to({regX:0,regY:0,scaleX:1.04,scaleY:1.04,x:62.5,y:-0.6},0).wait(1).to({regY:1.8,scaleX:1,scaleY:1,x:62.6,y:1.2},0).wait(8));

	// ptJ
	this.instance_8 = new lib.ptJ();
	this.instance_8.setTransform(32.4,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(9).to({_off:false,regX:0.5,scaleX:0.1,scaleY:0.1,y:-30.2},0).wait(1).to({regX:0,scaleX:0.15,scaleY:0.15,x:32.3},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:32.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:32.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:32},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:31.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:32.4,y:-30.1},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1},0).wait(9));

	// ptI
	this.instance_9 = new lib.ptI();
	this.instance_9.setTransform(10.5,34.8,1,1,0,0,0,0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(8).to({_off:false,regX:0.5,regY:0,scaleX:0.1,scaleY:0.1},0).wait(1).to({regX:16.3,regY:-5.2,scaleX:0.15,scaleY:0.15,x:12.8,y:34},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:14.7,y:33.4},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:17.2,y:32.6},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:20,y:31.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:22.6,y:30.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:24.9,y:30},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:26.5,y:29.5},0).wait(1).to({regX:0.4,regY:-0.4,scaleX:1.05,scaleY:1.05,x:10.5,y:34.8},0).wait(1).to({regX:16.3,regY:-5.2,scaleX:1.04,scaleY:1.04,x:27,y:29.8},0).wait(1).to({regX:0.4,regY:-0.4,scaleX:1,scaleY:1,x:10.5,y:34.8},0).wait(10));

	// ptH
	this.instance_10 = new lib.ptH();
	this.instance_10.setTransform(-14.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(7).to({_off:false,regX:-0.5,scaleX:0.1,scaleY:0.1,x:-14.3},0).wait(1).to({regX:0,scaleX:0.15,scaleY:0.15,x:-14.2},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-14.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-14},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-13.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-13.8},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-14.2,y:15.5},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1,y:15.6},0).wait(11));

	// ptG
	this.instance_11 = new lib.ptG();
	this.instance_11.setTransform(-27,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(6).to({_off:false,regY:-0.5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regY:0,scaleX:0.15,scaleY:0.15,y:-35.4},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:-35.3},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:-35.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:-35.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-35},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:-35.5},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1},0).wait(12));

	// ptF
	this.instance_12 = new lib.ptF();
	this.instance_12.setTransform(-70.1,32.7,1,1,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},1).wait(5).to({_off:false,regX:0,regY:0,scaleX:0.1,scaleY:0.1,y:32.8},0).wait(1).to({regX:0.2,scaleX:0.15,scaleY:0.15,x:-70},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.43,scaleY:0.43},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-69.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-70.1},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({regY:-0.1,scaleX:1,scaleY:1,y:32.7},0).wait(13));

	// ptE
	this.instance_13 = new lib.ptE();
	this.instance_13.setTransform(-94.3,-31,1,1,0,0,0,-1.9,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},1).wait(4).to({_off:false,regX:-2.5,regY:-8.5,scaleX:0.1,scaleY:0.1,y:-31.1},0).wait(1).to({regX:-0.8,regY:0,scaleX:0.15,scaleY:0.15,x:-94,y:-29.8},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-93.8,y:-28.8},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-93.6,y:-27.4},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-93.3,y:-25.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-93,y:-24.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-92.8,y:-23.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-92.6,y:-22.5},0).wait(1).to({regX:-1.9,regY:-8.4,scaleX:1.05,scaleY:1.05,x:-94.3,y:-31.1},0).wait(1).to({regX:-0.8,regY:0,scaleX:1.04,scaleY:1.04,x:-93.2,y:-22.3},0).wait(1).to({regX:-1.9,regY:-8.3,scaleX:1,scaleY:1,x:-94.3,y:-31},0).wait(14));

	// ptD
	this.instance_14 = new lib.ptD();
	this.instance_14.setTransform(-139.3,29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},1).wait(3).to({_off:false,regX:-0.5,scaleX:0.1,scaleY:0.1,x:-139.4},0).wait(1).to({regX:0,scaleX:0.15,scaleY:0.15,x:-139.3},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-139.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-139.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-139},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-138.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-139.3},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1},0).wait(15));

	// ptC
	this.instance_15 = new lib.ptC();
	this.instance_15.setTransform(-163.3,-30.4,1,1,0,0,0,-4.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},1).wait(2).to({_off:false,regX:-5.5,regY:0.5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regX:0,regY:4.2,scaleX:0.15,scaleY:0.15,x:-162.4,y:-29.9},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-161.8,y:-29.4},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-160.9,y:-28.8},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-159.9,y:-28.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-159,y:-27.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-158.2,y:-27},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-157.7,y:-26.7},0).wait(1).to({regX:-4.8,regY:0.6,scaleX:1.05,scaleY:1.05,x:-163.3,y:-30.4},0).wait(1).to({regX:0,regY:4.2,scaleX:1.04,scaleY:1.04,x:-158.3,y:-26.7},0).wait(1).to({regX:-4.8,regY:0.6,scaleX:1,scaleY:1,x:-163.3,y:-30.4},0).wait(16));

	// ptB
	this.instance_16 = new lib.ptB();
	this.instance_16.setTransform(-183.8,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},1).wait(1).to({_off:false,regX:-0.5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regX:0,scaleX:0.15,scaleY:0.15},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-183.7},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-183.6},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-183.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-183.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-183.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-183.8,y:22.5},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1,y:22.6},0).wait(17));

	// ptA
	this.instance_17 = new lib.ptA();
	this.instance_17.setTransform(-200.3,-16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:-0.5,regY:-0.5,scaleX:0.1,scaleY:0.1},0).wait(1).to({regX:0,regY:0,scaleX:0.15,scaleY:0.15},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-200.2,y:-16.3},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-200.1,y:-16.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:-16.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-200},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-199.9,y:-16},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-199.8,y:-15.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-200.3,y:-16.4},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1,scaleY:1},0).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.4,-76.3,428.8,136.9);


(lib.LogoBIG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_26 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(1));

	// Layer 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("Ag7FHIAAhoIOxAAIAABog");
	var mask_graphics_19 = new cjs.Graphics().p("AiIFHIAAhoIOxAAIAABog");
	var mask_graphics_20 = new cjs.Graphics().p("Ai7FHIAAhoIOxAAIAABog");
	var mask_graphics_21 = new cjs.Graphics().p("AjhFHIAAhoIOxAAIAABog");
	var mask_graphics_22 = new cjs.Graphics().p("Aj+FHIAAhoIOxAAIAABog");
	var mask_graphics_23 = new cjs.Graphics().p("AkUFHIAAhoIOxAAIAABog");
	var mask_graphics_24 = new cjs.Graphics().p("AkkFHIAAhoIOxAAIAABog");
	var mask_graphics_25 = new cjs.Graphics().p("AkvFHIAAhoIOxAAIAABog");
	var mask_graphics_26 = new cjs.Graphics().p("AkyFHIAAhoIOxAAIAABog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:88.7,y:32.8}).wait(1).to({graphics:mask_graphics_19,x:81,y:32.8}).wait(1).to({graphics:mask_graphics_20,x:75.9,y:32.8}).wait(1).to({graphics:mask_graphics_21,x:72.1,y:32.8}).wait(1).to({graphics:mask_graphics_22,x:69.2,y:32.8}).wait(1).to({graphics:mask_graphics_23,x:66.9,y:32.8}).wait(1).to({graphics:mask_graphics_24,x:65.3,y:32.8}).wait(1).to({graphics:mask_graphics_25,x:64.3,y:32.8}).wait(1).to({graphics:mask_graphics_26,x:63.9,y:32.8}).wait(1));

	// logo_almaty
	this.instance = new lib.logo_almaty();
	this.instance.setTransform(79.9,60.2,1.451,1.451,0,0,0,-0.4,-0.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(17).to({_off:false,x:34.4},0).wait(1).to({regX:0,regY:0,x:49.1,y:60.4},0).wait(1).to({x:58.5},0).wait(1).to({x:65.4},0).wait(1).to({x:70.8},0).wait(1).to({x:74.9},0).wait(1).to({x:77.9},0).wait(1).to({x:79.8},0).wait(1).to({regX:-0.4,regY:-0.1,x:79.9,y:60.2},0).wait(1));

	// Layer 13 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_16 = new cjs.Graphics().p("AAXDiIAAhmIJYAAIAABmg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AgYDiIAAhmIJWAAIAABmg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ag5DiIAAhmIJWAAIAABmg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AhRDiIAAhmIJWAAIAABmg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AhjDiIAAhmIJWAAIAABmg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AhyDiIAAhmIJWAAIAABmg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Ah8DiIAAhmIJWAAIAABmg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AiCDiIAAhmIJWAAIAABmg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AiFDiIAAhmIJWAAIAABmg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_1_graphics_16,x:62.3,y:22.7}).wait(1).to({graphics:mask_1_graphics_17,x:57.4,y:22.7}).wait(1).to({graphics:mask_1_graphics_18,x:54.2,y:22.7}).wait(1).to({graphics:mask_1_graphics_19,x:51.8,y:22.7}).wait(1).to({graphics:mask_1_graphics_20,x:49.9,y:22.7}).wait(1).to({graphics:mask_1_graphics_21,x:48.5,y:22.7}).wait(1).to({graphics:mask_1_graphics_22,x:47.5,y:22.7}).wait(1).to({graphics:mask_1_graphics_23,x:46.8,y:22.7}).wait(1).to({graphics:mask_1_graphics_24,x:46.6,y:22.7}).wait(3));

	// logo_fest
	this.instance_1 = new lib.logo_fest();
	this.instance_1.setTransform(62.5,40.1,1.451,1.451,0,0,0,-0.4,-0.1);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(15).to({_off:false,x:33.5},0).wait(1).to({regX:0,regY:0,x:43.1,y:40.2},0).wait(1).to({x:49.1},0).wait(1).to({x:53.5},0).wait(1).to({x:57},0).wait(1).to({x:59.6},0).wait(1).to({x:61.5},0).wait(1).to({x:62.7},0).wait(1).to({regX:-0.4,regY:-0.1,x:62.5,y:40.1},0).wait(3));

	// Layer 12 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_14 = new cjs.Graphics().p("AgvBaIAAiOINiAAIAACOg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AhzBaIAAiOINiAAIAACOg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AigBaIAAiOINhAAIAACOg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AjCBaIAAiOINiAAIAACOg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AjcBaIAAiOINiAAIAACOg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AjwBaIAAiOINiAAIAACOg");
	var mask_2_graphics_20 = new cjs.Graphics().p("Aj+BaIAAiOINhAAIAACOg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AkHBaIAAiOINhAAIAACOg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AkLBaIAAiOINiAAIAACOg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_2_graphics_14,x:82,y:9.1}).wait(1).to({graphics:mask_2_graphics_15,x:75.1,y:9.1}).wait(1).to({graphics:mask_2_graphics_16,x:70.6,y:9.1}).wait(1).to({graphics:mask_2_graphics_17,x:67.2,y:9.1}).wait(1).to({graphics:mask_2_graphics_18,x:64.6,y:9.1}).wait(1).to({graphics:mask_2_graphics_19,x:62.6,y:9.1}).wait(1).to({graphics:mask_2_graphics_20,x:61.2,y:9.1}).wait(1).to({graphics:mask_2_graphics_21,x:60.3,y:9.1}).wait(1).to({graphics:mask_2_graphics_22,x:60,y:9.1}).wait(5));

	// logo_cult
	this.instance_2 = new lib.logo_cult();
	this.instance_2.setTransform(75.7,10.8,1.451,1.451,0,0,0,-0.4,-0.1);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(13).to({_off:false,x:33},0).wait(1).to({regX:0,regY:0,x:46.8,y:11},0).wait(1).to({x:55.6},0).wait(1).to({x:62.2},0).wait(1).to({x:67.2},0).wait(1).to({x:71.1},0).wait(1).to({x:73.9},0).wait(1).to({x:75.7},0).wait(1).to({regX:-0.4,regY:-0.1,y:10.8},0).wait(5));

	// Layer 11 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_12 = new cjs.Graphics().p("Ag/AhIAAiPIOfAAIAACPg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AiIAhIAAiPIOfAAIAACPg");
	var mask_3_graphics_14 = new cjs.Graphics().p("Ai4AhIAAiPIOfAAIAACPg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AjcAhIAAiPIOfAAIAACPg");
	var mask_3_graphics_16 = new cjs.Graphics().p("Aj4AhIAAiPIOfAAIAACPg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AkNAhIAAiPIOfAAIAACPg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AkcAhIAAiPIOfAAIAACPg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AkmAhIAAiPIOfAAIAACPg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AkpAhIAAiPIOfAAIAACPg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_3_graphics_12,x:86.4,y:-11.1}).wait(1).to({graphics:mask_3_graphics_13,x:79.1,y:-11.1}).wait(1).to({graphics:mask_3_graphics_14,x:74.3,y:-11.1}).wait(1).to({graphics:mask_3_graphics_15,x:70.7,y:-11.1}).wait(1).to({graphics:mask_3_graphics_16,x:68,y:-11.1}).wait(1).to({graphics:mask_3_graphics_17,x:65.9,y:-11.1}).wait(1).to({graphics:mask_3_graphics_18,x:64.3,y:-11.1}).wait(1).to({graphics:mask_3_graphics_19,x:63.4,y:-11.1}).wait(1).to({graphics:mask_3_graphics_20,x:63,y:-11.1}).wait(7));

	// logo_business
	this.instance_3 = new lib.logo_business();
	this.instance_3.setTransform(79,-15.2,1.451,1.451,0,0,0,-0.4,-0.1);

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(11).to({_off:false,x:32.5},0).wait(1).to({regX:0,regY:0,x:47.6,y:-15},0).wait(1).to({x:57.1},0).wait(1).to({x:64.3},0).wait(1).to({x:69.8},0).wait(1).to({x:73.9},0).wait(1).to({x:77},0).wait(1).to({x:78.9},0).wait(1).to({regX:-0.4,regY:-0.1,x:79,y:-15.2},0).wait(7));

	// Layer 10 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_10 = new cjs.Graphics().p("AAQhiIAAiNIKBAAIAACNg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AgkhiIAAiNIKAAAIAACNg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AhHhiIAAiNIKAAAIAACNg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AhhhiIAAiNIKAAAIAACNg");
	var mask_4_graphics_14 = new cjs.Graphics().p("Ah1hiIAAiNIKAAAIAACNg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AiFhiIAAiNIKAAAIAACNg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AiQhiIAAiNIKAAAIAACNg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AiXhiIAAiNIKAAAIAACNg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AiahiIAAiNIKAAAIAACNg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_4_graphics_10,x:65.8,y:-24.1}).wait(1).to({graphics:mask_4_graphics_11,x:60.5,y:-24.1}).wait(1).to({graphics:mask_4_graphics_12,x:56.9,y:-24.1}).wait(1).to({graphics:mask_4_graphics_13,x:54.3,y:-24.1}).wait(1).to({graphics:mask_4_graphics_14,x:52.3,y:-24.1}).wait(1).to({graphics:mask_4_graphics_15,x:50.8,y:-24.1}).wait(1).to({graphics:mask_4_graphics_16,x:49.6,y:-24.1}).wait(1).to({graphics:mask_4_graphics_17,x:48.9,y:-24.1}).wait(1).to({graphics:mask_4_graphics_18,x:48.7,y:-24.1}).wait(9));

	// logo_media
	this.instance_4 = new lib.logo_media();
	this.instance_4.setTransform(64.6,-41.2,1.451,1.451,0,0,0,-0.4,-0.1);

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(9).to({_off:false,x:34.4},0).wait(1).to({regX:0,regY:0,x:44.4,y:-41},0).wait(1).to({x:50.6},0).wait(1).to({x:55.2},0).wait(1).to({x:58.8},0).wait(1).to({x:61.5},0).wait(1).to({x:63.5},0).wait(1).to({x:64.7},0).wait(1).to({regX:-0.4,regY:-0.1,x:64.6,y:-41.2},0).wait(9));

	// logo_main
	this.instance_5 = new lib.logo_main();
	this.instance_5.setTransform(-61.2,8.2,1.451,1.451,0,0,0,-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({y:164.2,alpha:0},0).wait(1).to({regX:0,regY:0,x:-60.5,y:71.2,alpha:0.597},0).wait(1).to({y:51.4,alpha:0.724},0).wait(1).to({y:39.5,alpha:0.8},0).wait(1).to({y:31.2,alpha:0.853},0).wait(1).to({y:25.1,alpha:0.892},0).wait(1).to({y:20.5,alpha:0.922},0).wait(1).to({y:17,alpha:0.945},0).wait(1).to({y:14.3,alpha:0.962},0).wait(1).to({y:12.2,alpha:0.975},0).wait(1).to({y:10.7,alpha:0.985},0).wait(1).to({y:9.6,alpha:0.992},0).wait(1).to({y:8.9,alpha:0.997},0).wait(1).to({y:8.5,alpha:0.999},0).wait(1).to({regX:-0.5,regY:-0.1,x:-61.2,y:8.2,alpha:1},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.9,-59.9,258.8,136.5);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AlkGKIAAsTIO2AAIAAMTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:59.4,y:0.2}).wait(20));

	// logo_almaty
	this.instance = new lib.logo_almaty();
	this.instance.setTransform(56.4,35.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(13).to({_off:false,x:-9.3},0).wait(1).to({x:32.6},0).wait(1).to({x:44.1},0).wait(1).to({x:50.4},0).wait(1).to({x:54},0).wait(1).to({x:55.8},0).wait(1).to({x:56.4},0).wait(1));

	// logo_fest
	this.instance_1 = new lib.logo_fest();
	this.instance_1.setTransform(44.8,22);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(12).to({_off:false,x:-20.9},0).wait(1).to({x:21.1},0).wait(1).to({x:32.6},0).wait(1).to({x:38.9},0).wait(1).to({x:42.5},0).wait(1).to({x:44.3},0).wait(1).to({x:44.8},0).wait(2));

	// logo_cult
	this.instance_2 = new lib.logo_cult();
	this.instance_2.setTransform(53.9,1.9);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(10).to({_off:false,x:-11.8},0).wait(1).to({x:30.1},0).wait(1).to({x:41.6},0).wait(1).to({x:47.9},0).wait(1).to({x:51.5},0).wait(1).to({x:53.3},0).wait(1).to({x:53.9},0).wait(4));

	// logo_business
	this.instance_3 = new lib.logo_business();
	this.instance_3.setTransform(56.7,-16.2);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(8).to({_off:false,x:-9},0).wait(1).to({x:32.9},0).wait(1).to({x:44.4},0).wait(1).to({x:50.7},0).wait(1).to({x:54.3},0).wait(1).to({x:56.1},0).wait(1).to({x:56.7},0).wait(6));

	// logo_media
	this.instance_4 = new lib.logo_media();
	this.instance_4.setTransform(46.8,-34.3);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(6).to({_off:false,x:-18.9},0).wait(1).to({x:23},0).wait(1).to({x:34.5},0).wait(1).to({x:40.8},0).wait(1).to({x:44.4},0).wait(1).to({x:46.2},0).wait(1).to({x:46.8},0).wait(8));

	// logo_main
	this.instance_5 = new lib.logo_main();
	this.instance_5.setTransform(-40.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({y:-80.7,alpha:0},0).wait(1).to({y:-36.7,alpha:0.545},0).wait(1).to({y:-23.3,alpha:0.711},0).wait(1).to({y:-15,alpha:0.814},0).wait(1).to({y:-9.4,alpha:0.883},0).wait(1).to({y:-5.5,alpha:0.932},0).wait(1).to({y:-2.9,alpha:0.964},0).wait(1).to({y:-1.2,alpha:0.985},0).wait(1).to({y:-0.3,alpha:0.996},0).wait(1).to({y:0,alpha:1},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-47,178,94.1);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(251));

	// 30may
	this.instance = new lib.txtmay();
	this.instance.setTransform(1,143.8,1.17,1.17,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(170).to({_off:false,scaleX:1.4,scaleY:1.4,x:0.8,y:206.3,alpha:0},0).wait(1).to({regX:-0.4,regY:0.9,x:0.4,y:193.3,alpha:0.417},0).wait(1).to({y:186.2,alpha:0.627},0).wait(1).to({y:181.4,alpha:0.769},0).wait(1).to({y:178,alpha:0.87},0).wait(1).to({y:175.7,alpha:0.939},0).wait(1).to({y:174.2,alpha:0.982},0).wait(1).to({regX:-0.1,regY:0.1,x:0.8,y:172.6,alpha:1},0).wait(52).to({regX:-0.4,regY:0.9,x:-1.3,y:173.7},0).wait(1).to({x:-4.5},0).wait(1).to({regX:0,regY:0,x:-5.8,y:172.5},0).wait(1).to({regX:-0.4,regY:0.9,x:-3.8,y:173.7,alpha:0.989},0).wait(1).to({x:2.8,alpha:0.961},0).wait(1).to({x:12.8,alpha:0.917},0).wait(1).to({x:25.9,alpha:0.86},0).wait(1).to({x:42.2,alpha:0.79},0).wait(1).to({x:62,alpha:0.705},0).wait(1).to({x:86,alpha:0.601},0).wait(1).to({x:116,alpha:0.471},0).wait(1).to({x:155.8,alpha:0.299},0).wait(1).to({regX:0,regY:0,x:225.4,y:172.5,alpha:0},0).wait(9));

	// Regist
	this.instance_1 = new lib.txtHurry();
	this.instance_1.setTransform(1.5,126,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(168).to({_off:false,regX:-0.1,regY:0.1,scaleX:1.4,scaleY:1.4,x:1.3,y:185,alpha:0},0).wait(1).to({regX:-0.3,regY:1.2,x:1.1,y:172.5,alpha:0.417},0).wait(1).to({y:165.4,alpha:0.627},0).wait(1).to({y:160.6,alpha:0.769},0).wait(1).to({y:157.2,alpha:0.87},0).wait(1).to({y:154.8,alpha:0.939},0).wait(1).to({y:153.4,alpha:0.982},0).wait(1).to({regX:-0.1,regY:0.1,x:1.3,y:151.3,alpha:1},0).wait(54).to({regX:-0.3,regY:1.2,x:-0.6,y:152.9},0).wait(1).to({x:-3.8},0).wait(1).to({regX:0,regY:0,x:-5.3,y:151.2},0).wait(1).to({regX:-0.3,regY:1.2,x:-3.1,y:152.9,alpha:0.989},0).wait(1).to({x:3.4,alpha:0.961},0).wait(1).to({x:13.4,alpha:0.917},0).wait(1).to({x:26.6,alpha:0.86},0).wait(1).to({x:42.9,alpha:0.79},0).wait(1).to({x:62.6,alpha:0.705},0).wait(1).to({x:86.7,alpha:0.601},0).wait(1).to({x:116.6,alpha:0.471},0).wait(1).to({x:156.5,alpha:0.299},0).wait(1).to({regX:0.1,regY:0.1,x:226,y:151.3,alpha:0},0).wait(9));

	// 16-18
	this.instance_2 = new lib.TXTOne();
	this.instance_2.setTransform(1.4,-35.9,1.138,1.138);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(85).to({_off:false,regX:-0.1,regY:-0.1,scaleX:1.37,scaleY:1.37,x:0.3,y:-33.9},0).wait(78).to({regX:0,regY:0.8,x:0.4,y:-30.9},0).wait(1).to({y:-27.8},0).wait(1).to({regX:-0.1,regY:-0.1,x:0.3,y:-27.3},0).wait(1).to({regX:0,regY:0.8,x:0.4,y:-26.6},0).wait(1).to({y:-27.9},0).wait(1).to({y:-30},0).wait(1).to({y:-32.5},0).wait(1).to({y:-35.3},0).wait(1).to({y:-38.1},0).wait(1).to({y:-40.6},0).wait(1).to({y:-42.7},0).wait(1).to({y:-44.1},0).wait(1).to({regX:-0.1,regY:-0.2,x:0.3,y:-46},0).wait(60).to({regX:0,regY:0.8,x:-1.3,y:-44.6},0).wait(1).to({x:-4.4},0).wait(1).to({regX:-0.1,regY:-0.2,x:-6.2,y:-46},0).wait(1).to({regX:0,regY:0.8,x:-3.6,y:-44.6,alpha:0.989},0).wait(1).to({x:2.8,alpha:0.961},0).wait(1).to({x:12.5,alpha:0.917},0).wait(1).to({x:25.3,alpha:0.86},0).wait(1).to({x:41.1,alpha:0.79},0).wait(1).to({x:60.4,alpha:0.705},0).wait(1).to({x:83.8,alpha:0.601},0).wait(1).to({x:112.9,alpha:0.471},0).wait(1).to({x:151.7,alpha:0.299},0).wait(1).to({regY:-0.2,x:218.8,y:-46,alpha:0},0).wait(3));

	// Go Viral
	this.instance_3 = new lib.TXTtwo();
	this.instance_3.setTransform(1.5,15.2,1.138,1.138);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(99).to({_off:false,scaleX:1.37,scaleY:1.37,x:0.5,y:38.4},0).wait(63).to({regY:-0.8,y:38.9},0).wait(1).to({y:42.1},0).wait(1).to({regX:-0.1,regY:0.1,x:0.3,y:45.1},0).wait(1).to({regX:0,regY:-0.8,x:0.5,y:43},0).wait(1).to({y:40.8},0).wait(1).to({y:37.5},0).wait(1).to({y:33.5},0).wait(1).to({y:29.1},0).wait(1).to({y:24.7},0).wait(1).to({y:20.7},0).wait(1).to({y:17.3},0).wait(1).to({y:15.1},0).wait(1).to({regX:-0.1,regY:-0.1,x:0.3,y:15.5},0).wait(59).to({regX:0,regY:-0.8,x:-1.2,y:14.5},0).wait(1).to({x:-4.4},0).wait(1).to({regX:-0.1,regY:-0.1,x:-6.2,y:15.5},0).wait(1).to({regX:0,regY:-0.8,x:-3.6,y:14.5,alpha:0.989},0).wait(1).to({x:2.8,alpha:0.961},0).wait(1).to({x:12.6,alpha:0.917},0).wait(1).to({x:25.3,alpha:0.86},0).wait(1).to({x:41.2,alpha:0.79},0).wait(1).to({x:60.4,alpha:0.705},0).wait(1).to({x:83.9,alpha:0.601},0).wait(1).to({x:113,alpha:0.471},0).wait(1).to({x:151.8,alpha:0.299},0).wait(1).to({regX:0.1,regY:-0.1,x:219,y:15.5,alpha:0},0).wait(5));

	// pattern
	this.instance_4 = new lib.pattern();
	this.instance_4.setTransform(2.4,75,0.495,0.495,0,0,0,0.5,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(69).to({_off:false,regX:0.7,regY:-7.3,scaleX:0.5,scaleY:0.5,x:0.6,y:125.5},0).wait(92).to({regX:-0.1,regY:0.3,x:0.2,y:131},0).wait(1).to({y:134.1},0).wait(1).to({regX:0.7,regY:-7.3,x:0.6,y:132},0).wait(1).to({regX:-0.1,regY:0.3,x:0.2,y:134.5},0).wait(1).to({y:131.1},0).wait(1).to({y:126},0).wait(1).to({y:119.8},0).wait(1).to({y:113},0).wait(1).to({y:106.1},0).wait(1).to({y:99.8},0).wait(1).to({y:94.7},0).wait(1).to({y:91.1},0).wait(1).to({regX:0.7,regY:-7.3,x:0.6,y:86},0).wait(58).to({regX:-0.1,regY:0.3,x:-0.7,y:89.9},0).wait(1).to({x:-2.4},0).wait(1).to({regX:0.2,regY:-7.3,x:-3,y:86},0).wait(1).to({regX:-0.1,regY:0.3,x:-1.8,y:89.9,alpha:0.989},0).wait(1).to({x:1.6,alpha:0.961},0).wait(1).to({x:6.8,alpha:0.917},0).wait(1).to({x:13.7,alpha:0.86},0).wait(1).to({x:22.2,alpha:0.79},0).wait(1).to({x:32.5,alpha:0.705},0).wait(1).to({x:45,alpha:0.601},0).wait(1).to({x:60.7,alpha:0.471},0).wait(1).to({x:81.5,alpha:0.299},0).wait(1).to({regX:0.7,regY:-7.3,x:117.7,y:86,alpha:0},0).wait(7));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.setTransform(1.1,-95.5,0.664,0.664,0,0,0,-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(66).to({_off:false,regX:-0.3,scaleX:0.8,scaleY:0.8,x:0.9,y:-128},0).wait(171).to({regX:0,regY:-40.4,x:-0.7,y:-160},0).wait(1).to({x:-4.3},0).wait(1).to({regX:-0.4,regY:-0.3,x:-6.4,y:-128},0).wait(1).to({regX:0,regY:-40.4,x:-3.3,y:-160,alpha:0.989},0).wait(1).to({x:3.9,alpha:0.961},0).wait(1).to({x:14.8,alpha:0.917},0).wait(1).to({x:29.1,alpha:0.86},0).wait(1).to({x:46.9,alpha:0.79},0).wait(1).to({x:68.5,alpha:0.705},0).wait(1).to({x:94.7,alpha:0.601},0).wait(1).to({x:127.4,alpha:0.471},0).wait(1).to({x:170.9,alpha:0.299},0).wait(1).to({regX:0.1,regY:-0.3,x:246.1,y:-128,alpha:0},0).wait(1));

	// Layer 16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AzjMuIAA5bMAnHAAAIAAZbg");
	var mask_graphics_59 = new cjs.Graphics().p("AzjMuIAA5bMAnHAAAIAAZbg");
	var mask_graphics_60 = new cjs.Graphics().p("AzjMuIAA5bMAnHAAAIAAZbg");
	var mask_graphics_61 = new cjs.Graphics().p("AzjMuIAA5bMAnHAAAIAAZbg");
	var mask_graphics_62 = new cjs.Graphics().p("AzjOfIAA5cMAnHAAAIAAZcg");
	var mask_graphics_63 = new cjs.Graphics().p("AzjQQIAA5cMAnHAAAIAAZcg");
	var mask_graphics_64 = new cjs.Graphics().p("AzjSBIAA5cMAnHAAAIAAZcg");
	var mask_graphics_65 = new cjs.Graphics().p("AzjTyIAA5cMAnHAAAIAAZcg");
	var mask_graphics_66 = new cjs.Graphics().p("AzjViIAA5cMAnHAAAIAAZcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0.6,y:36.2}).wait(58).to({graphics:mask_graphics_59,x:0.6,y:36.2}).wait(1).to({graphics:mask_graphics_60,x:0.6,y:58.8}).wait(1).to({graphics:mask_graphics_61,x:0.6,y:81.4}).wait(1).to({graphics:mask_graphics_62,x:0.6,y:92.7}).wait(1).to({graphics:mask_graphics_63,x:0.6,y:104}).wait(1).to({graphics:mask_graphics_64,x:0.6,y:115.3}).wait(1).to({graphics:mask_graphics_65,x:0.6,y:126.6}).wait(1).to({graphics:mask_graphics_66,x:0.6,y:137.8}).wait(1).to({graphics:null,x:0,y:0}).wait(184));

	// BIGlogo
	this.instance_6 = new lib.LogoBIG();
	this.instance_6.setTransform(0.6,2.8,0.706,0.706,0,0,0,0.2,0);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(55).to({alpha:0},10).to({_off:true},1).wait(184));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.8,-126.5,212,277.7);


// stage content:



(lib.go_viral_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.bigbtn();
	this.instance.setTransform(120,200.2,0.75,1.333,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.bigbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance_1 = new lib.movie();
	this.instance_1.setTransform(120.3,189,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#012A70").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119,199,242,402);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;