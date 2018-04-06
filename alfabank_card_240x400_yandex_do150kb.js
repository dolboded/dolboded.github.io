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
		{src:"alfabank_card_240x400_yandex_do150kb_atlas_.png", id:"alfabank_card_240x400_yandex_do150kb_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"alfabank_card_240x400_yandex_do150kb_atlas_", frames: [[0,402,178,248],[0,0,396,400]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.legal = function() {
	this.spriteSheet = ss["alfabank_card_240x400_yandex_do150kb_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.man_240 = function() {
	this.spriteSheet = ss["alfabank_card_240x400_yandex_do150kb_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-120,-200,240,400);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.t3_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBDQgEgEAAgHQAAgGAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgHAAQgFAAgFgEgAgKAaIgDhgIAcAAIgEBgg");
	this.shape.setTransform(39.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0BHIAAiNIAzAAQAXAAAOAKQANAKAAATQAAALgFAHQgGAIgJAFQALAAAGAJQAGAHABAMQgBAVgNALQgNALgYAAgAgWAvIAXAAQAKAAAHgFQAFgFAAgJQAAgTgUAAIgZAAgAgWgKIAWAAQAUgBAAgRQAAgKgFgEQgHgEgJAAIgVAAg");
	this.shape_1.setTransform(31,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBAQgOgIgHgRQgIgPAAgVIAAgEQAAgVAIgRQAHgPAOgJQANgIARAAQARAAAOAIQAOAJAHAPQAIARAAAVIAAADQAAAWgIAPQgHARgOAIQgNAIgSAAQgQAAgOgIgAgVgkQgJAMAAAVIAAAFQAAAXAJALQAHAMAOAAQAPAAAHgLQAIgMABgWIAAgFQAAgWgJgMQgHgMgPAAQgOAAgHAMg");
	this.shape_2.setTransform(17.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbBDQgNgGgGgIQgGgKAAgMIAdAAQAAAHAHAGQAGAFAKAAQALAAAGgFQAHgGAAgIQAAgLgGgEQgGgGgMAAIgPAAIAAgVIAQAAQAVAAAAgTQAAgHgGgFQgHgFgJAAQgIAAgHAFQgGAFAAAHIgeAAQABgMAGgJQAHgJAMgGQAMgEANAAQAYAAANAKQAOAKAAAUQAAAJgFAIQgGAIgLAGQAMABAGAJQAGAIABAMQgBAUgPALQgOALgYAAQgPAAgMgFg");
	this.shape_3.setTransform(4.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAcBHIAAhdIg3BdIgdAAIAAiNIAdAAIAABdIA3hdIAeAAIAACNg");
	this.shape_4.setTransform(-8.8,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag1BHIAAiNIA1AAQAQABANAFQAMAGAGALQAHALAAANQAAAWgOAKQgOAMgagBIgYAAIAAAzgAgYgBIAYAAQANAAAFgGQAHgFAAgLQAAgKgHgHQgGgGgLAAIgZAAg");
	this.shape_5.setTransform(-21.9,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAcBHIAAh1Ig3AAIAAB1IgdAAIAAiNIBxAAIAACNg");
	this.shape_6.setTransform(-35.7,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-14,89.6,28);


(lib.t3_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbBHIgbgzIgaAzIgiAAIAqhHIgphGIAiAAIAZAxIAagxIAiAAIgqBGIArBHg");
	this.shape.setTransform(32.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcBHIAAhdIg3BdIgeAAIAAiNIAeAAIAABdIA3hdIAeAAIAACNg");
	this.shape_1.setTransform(19.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtBHIAAiNIBbAAIAAAYIg+AAIAAB1g");
	this.shape_2.setTransform(7.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkBHIAAgYIAHABQAHAAADgCQAEgDADgFIADgKIgyhjIAgAAIAdBDIAahDIAgAAIgyB0IgEAIQgJASgXAAg");
	this.shape_3.setTransform(-5.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag1BHIAAiNIA1AAQAQABANAFQAMAGAGALQAHALAAANQAAAWgOAKQgPAMgZgBIgYAAIAAAzgAgYgBIAYAAQANAAAFgGQAGgFABgLQgBgKgGgHQgGgGgLAAIgZAAg");
	this.shape_4.setTransform(-17.6,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAqBYIAAgjIhUAAIAAAjIgbAAIgCg6IALAAQAJgIAEgOQAFgMACgVIAEg+IBbAAIAAB1IARAAIgDA6gAgLgaQgDAkgMAUIA0AAIAAheIgiAAg");
	this.shape_5.setTransform(-31.8,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-14,82.6,28);


(lib.t3_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41C17").s().p("AgwBRQgRgWgBgoIAAgjQAAgpASgWQARgWAfAAQAgAAARAWQARAVABAoIAAAjQAAApgRAWQgRAWghAAQgfAAgRgVgAgTg6QgHALAAAXIAAAuQAAAYAGAMQAHAMANAAQAOAAAHgLQAGgMAAgXIAAgtQAAgZgGgLQgHgMgOAAQgNAAgGALg");
	this.shape.setTransform(-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-18.8,20.3,37.6);


(lib.t3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41C17").s().p("AgwBRQgRgWgBgoIAAgjQAAgpASgWQARgWAfAAQAgAAARAWQARAVABAoIAAAjQAAApgRAWQgRAWghAAQgfAAgRgVgAgTg6QgHALAAAXIAAAuQAAAYAGAMQAHAMANAAQAOAAAHgLQAGgMAAgXIAAgtQAAgZgGgLQgHgMgOAAQgNAAgGALg");
	this.shape.setTransform(-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-18.8,20.3,37.6);


(lib.t3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41C17").s().p("AgxBWQgSgPgBgaIAoAAQAAALAIAHQAIAHAMAAQANAAAIgHQAIgIAAgMQAAgegfAAIgVAAIAAgdIAVAAQANAAAIgHQAHgIAAgMQAAgMgHgHQgIgHgLAAQgKAAgIAHQgIAGAAAKIgoAAQAAgQAJgMQAIgNAQgHQAPgHASAAQAdAAATAQQARAPAAAaQAAAOgIALQgJAMgNAGQARAEAIAMQAIAMAAAQQAAAbgTAQQgTAQgeAAQgeAAgTgQg");
	this.shape.setTransform(-0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-18.8,20.3,37.6);


(lib.t3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbBDQgMgGgHgIQgGgKAAgMIAdAAQAAAHAGAGQAIAFAJAAQALAAAGgFQAHgGAAgIQAAgLgGgEQgGgGgMAAIgPAAIAAgVIAQAAQAVAAAAgTQAAgHgGgFQgHgFgJAAQgJAAgGAFQgGAFAAAHIgeAAQABgMAGgJQAHgJALgGQANgEANAAQAYAAANAKQAOAKAAAUQAAAJgGAIQgFAIgLAGQAMABAGAJQAGAIAAAMQAAAUgPALQgOALgYAAQgPAAgMgFg");
	this.shape.setTransform(6.8,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcBHIAAhdIg3BdIgeAAIAAiNIAeAAIAABdIA3hdIAeAAIAACNg");
	this.shape_1.setTransform(-6.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-14,30.6,28);


(lib.t3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADBjIAAiWIgtAPIAAghIBRgdIAEAAIAADFg");
	this.shape.setTransform(-1.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-18.8,20.3,37.6);


(lib.t3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcBHIAAhdIg3BdIgeAAIAAiNIAeAAIAABdIA3hdIAeAAIAACNg");
	this.shape.setTransform(13.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgBHIAAh1IgkAAIgCAwQgCAagFAPQgEAOgKAGQgKAIgQAAIgIAAIAAgYIAFgBQALgBAFgLQAFgMABgbIAChBIBeAAIAACNg");
	this.shape_1.setTransform(-0.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAcBHIAAhdIg3BdIgdAAIAAiNIAdAAIAABdIA3hdIAeAAIAACNg");
	this.shape_2.setTransform(-14.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-14,46.3,28);


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41C17").s().p("AAYBwIgmhAIgQAQIAAAwIgqAAIAAjfIAqAAIAAB6IAJgKIAmgtIAzAAIg5BAIA+Bcg");
	this.shape.setTransform(56.4,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C41C17").s().p("Ag1A8QgVgWAAgmIAAAAQAAgYAKgSQAJgSARgLQARgKAVAAQAfAAAVAUQAUAUACAhIABAJQAAAlgVAWQgUAWgiAAQghAAgUgWgAgXgiQgIAMAAAXQAAAXAIAMQAJAMAOAAQAPAAAJgMQAIgMAAgYQAAgWgIgMQgJgNgPAAQgOAAgJANg");
	this.shape_1.setTransform(38.9,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C41C17").s().p("Ag1A8QgVgWAAgmIAAAAQAAgYAKgSQAJgSARgLQARgKAVAAQAfAAAVAUQAUAUACAhIABAJQAAAlgVAWQgUAWgiAAQghAAgUgWgAgXgiQgIAMAAAXQAAAXAIAMQAJAMAOAAQAPAAAJgMQAIgMAAgYQAAgWgIgMQgJgNgPAAQgOAAgJANg");
	this.shape_2.setTransform(22,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C41C17").s().p("AhOBqIAAjTIBLAAQAlAAAUAPQAUAPAAAcQAAAQgIAMQgIAMgPAGQARACAJAMQAKANAAASQAAAegUAQQgTAQglAAgAgiBHIAkAAQAPAAAJgHQAJgIAAgNQAAgdgegBIgnAAgAgigQIAhAAQAfAAAAgaQAAgPgIgGQgJgGgQAAIgfAAg");
	this.shape_3.setTransform(4.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C41C17").s().p("AgwA8QgUgWAAgmIAAAAQAAglAUgWQATgWAgAAQAeAAASARQASARAAAcIgoAAQAAgMgHgIQgIgIgMAAQgNAAgHALQgHALgBAYIAAADQABAYAHALQAHALANAAQAMAAAIgHQAHgGAAgLIAoAAQAAAQgJAOQgIANgQAHQgPAIgRAAQggAAgUgWg");
	this.shape_4.setTransform(-13.4,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C41C17").s().p("Ag1BEQgQgNAAgVQAAgZASgLQAUgOAgAAIAUAAIAAgJQAAgLgFgHQgGgGgKAAQgLAAgGAFQgGAFAAAJIgrAAQAAgOAJgMQAIgLAQgHQAQgHARAAQAdAAARAPQARAPAAAaIAABDQABAXAGALIAAADIgrAAQgDgGgBgIQgQARgWAAQgXAAgPgOgAgaAdIAAACQgBAIAGAFQAFAFAKAAQAHAAAIgEQAJgEADgHIAAgbIgPAAQgfAAgBAWg");
	this.shape_5.setTransform(-29.3,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C41C17").s().p("ABEBqIAAg6IAEhjIg6CdIgcAAIg5idIAEBjIAAA6IgsAAIAAjTIA6AAIA1CZIA2iZIA6AAIAADTg");
	this.shape_6.setTransform(-50.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-20,131.4,40);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguBHIAAiNIBdAAIAAAYIhAAAIAAAiIA2AAIAAAVIg2AAIAAAmIBAAAIAAAYg");
	this.shape.setTransform(62.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBHIAAh1IgrAAIAAgYIBxAAIAAAYIgrAAIAAB1g");
	this.shape_1.setTransform(50.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAcBZIAAhcIg3BcIgdAAIAAiMIAdAAIAABdIA3hdIAeAAIAACMgAgXhDQgJgIAAgNIAUAAQAAAGAEADQADAEAFAAQAGAAAEgEQAEgDAAgGIAUAAQAAANgJAIQgKAIgPAAQgNAAgKgIg");
	this.shape_2.setTransform(37.9,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAjBHIgKgeIgxAAIgKAeIgfAAIA1iNIAZAAIA1CNgAgQASIAhAAIgRg0g");
	this.shape_3.setTransform(24.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag1BHIAAiNIA1AAQAQABANAFQAMAGAGALQAHALAAANQAAAWgOAKQgPAMgZgBIgYAAIAAAzgAgYgBIAYAAQANAAAFgGQAHgFAAgLQAAgKgHgHQgGgGgLAAIgZAAg");
	this.shape_4.setTransform(11.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgtBHIAAiNIBbAAIAAAYIg+AAIAAB1g");
	this.shape_5.setTransform(0,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAcBHIAAhdIg3BdIgeAAIAAiNIAeAAIAABdIA3hdIAdAAIAACNg");
	this.shape_6.setTransform(-12.8,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAsBHIAAiNIAeAAIAACNgAhJBHIAAiNIAeAAIAAA0IAXAAQAXAAAOAMQAPAKAAAVQAAAUgOANQgPANgWAAgAgrAvIAXAAQALAAAHgGQAFgHAAgJQAAgKgFgGQgGgFgLgBIgYAAg");
	this.shape_7.setTransform(-28.3,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag0BHIAAiNIAzAAQAYAAANAKQANAKAAATQAAALgFAHQgGAIgJAFQALAAAGAJQAGAHAAAMQABAVgNALQgOALgYAAgAgWAvIAXAAQALAAAFgFQAGgFAAgJQAAgTgUAAIgZAAgAgWgKIAVAAQAVgBAAgRQAAgKgFgEQgHgEgJAAIgVAAg");
	this.shape_8.setTransform(-43,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAcBHIAAhdIg3BdIgdAAIAAiNIAdAAIAABdIA3hdIAdAAIAACNg");
	this.shape_9.setTransform(-61.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-14,140.3,28);


(lib.t2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41C17").s().p("Aj3BMIAAgSQgSAAgNgHQgPgIgHgNQgIgNAAgQQAAgQAIgOQAIgNAOgIQAOgHARAAIAAgTIAcAAIAAATQATAAAOAHQANAIAHANQAIAOAAAPQAAARgIANQgHANgNAIQgOAHgTAAIAAASgAjbAiIABAAQAQAAAIgJQAJgJAAgQQAAgOgJgJQgJgKgQABgAkPgXQgJAJAAAPQAAAPAJAJQAJAJAPAAIAAhCIAAAAQgQgBgIAKgAKmBHIgJgeIg0AAIgKAeIg/AAIglg7IgRAAIAAA7IgcAAIAAiMIAcAAIAAA4IAOAAIAjg4IAkAAIgsBCIAuBGIA0iIIAcAAIA1CMgAJxASIAjAAIgSgzgAGYBHIAAg9Ig5AAIAAA9IgeAAIAAiMIAeAAIAAA5IA5AAIAAg5IAdAAIAACMgAEYBHIgKgeIg0AAIgJAeIggAAIA1iMIAbAAIA1CMgADiASIAkAAIgSgzgABBBHIAAiMIBdAAIAAAXIg/AAIAAAbIAXAAQAZAAAOANQAPAKABAUQAAAVgPANQgPANgYAAgABfAvIAYAAQAKAAAIgGQAGgHAAgKQAAgJgGgGQgHgFgLgBIgYAAgAgyBHIgKgeIg0AAIgJAeIgfAAIA0iMIAcAAIA1CMgAhoASIAkAAIgSgzgAmpBHIAAiMIAeAAIAAAyIAWAAQAaAAAOANQAPAKAAAUQAAAVgOANQgQANgYAAgAmLAvIAXAAQALAAAHgGQAGgHABgKQgBgJgGgGQgHgFgLgBIgXAAgAneBHIAAh1IgmAAIgCAwQgBAZgGAPQgEAPgKAHQgKAGgQABIgHAAIAAgYIAEAAQALgCAFgLQAFgMABgbIAChAIBgAAIAACMgApeBHIgKgeIg0AAIgJAeIgfAAIA1iMIAbAAIA1CMgAqUASIAkAAIgSgzgAgKAVIAAgVIA1AAIAAAVg");
	this.shape.setTransform(-3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-14,146.1,28);


(lib.t2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFzBHIAAgXIAIAAQAGAAAEgCQADgDADgFIADgKIgyhjIAgAAIAfBEIAahEIAgAAIg1B7QgLAUgYgBgAEPBFIAAh0IgrAAIAAgYIB0AAIAAAYIgsAAIAAB0gABuBFIAAiMIA3AAQAQABAMAFQAMAGAHALQAGAKABAOQgBAVgOAKQgOAMgaAAIgZAAIAAAygACLgCIAaAAQAMgBAGgFQAGgGAAgKQAAgKgGgGQgHgHgKAAIgbAAgABDBFIgKgdIgzAAIgIAdIg/AAIglg5IgRAAIAAA5IgdAAIAAiMIAdAAIAAA5IAOAAIAjg5IAkAAIgsBEIAuBGIAyiKIAcAAIA1CMgAAOAQIAjAAIgSgzgAjuBFIgKgdIg0AAIgJAdIgfAAIA1iMIAbAAIA1CMgAkkAQIAkAAIgSgzgAl+BFIAAg9Ig4AAIAAA9IgeAAIAAiMIAeAAIAAA6IA4AAIAAg6IAeAAIAACMg");
	this.shape.setTransform(2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.7,-14,99.5,28);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGhBIIAAgXIAHAAQAHAAADgCQAEgCADgGIADgJIgyhkIAgAAIAfBEIAahEIAgAAIg2B7QgLAUgXgBgAnpBDQgMgFgGgKQgHgIAAgNIAeAAQAAAHAGAGQAHAFAKAAQAMAAAHgGQAHgEAAgJQAAgLgGgFQgGgFgMAAIgRAAIAAgUIASAAQAVgBAAgSQAAgJgHgEQgGgFgLAAQgJAAgGAFQgGAFAAAHIgeAAQAAgLAHgKQAGgJAMgFQAMgGAOAAQAZAAAOALQAOALAAATQAAAJgGAJQgFAHgLAFQAMACAGAJQAGAIAAANQAAATgPALQgPAMgZgBQgPABgNgGgAE9BGIAAh0IgrAAIAAgYIBzAAIAAAYIgrAAIAAB0gADwBGIgKgdIgzAAIgKAdIgfAAIA1iMIAbAAIA1CMgAC7ARIAjAAIgSgzgABhBGIAAh0IgmAAIgCAwQgCAagFAOQgEAPgKAGQgKAIgQgBIgIAAIAAgXIAFAAQALgCAFgLQAFgLABgbIAChCIBgAAIAACMgAgoBGIAAh0Ig5AAIAAB0IgdAAIAAiMIBzAAIAACMgAj+BGIAAiMIA4AAQAQAAAMAGQAMAGAHALQAGALAAAOQAAAUgOAKQgOANgaAAIgZAAIAAAxgAjggBIAaAAQAMgBAGgFQAGgGAAgJQAAgLgGgGQgHgHgKAAIgbAAgAkoBGIgKgdIgzAAIgKAdIgfAAIA1iMIAbAAIA1CMgAldARIAjAAIgSgzg");
	this.shape.setTransform(-2.5,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-14,108,28);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhZBIIgBgXIAIAAQAGAAAEgCQAEgCACgGIAEgJIgyhkIAfAAIAgBEIAahEIAdAAIgzB7QgLAUgXgBgAlhBAQgOgJgHgPQgIgQAAgUIAAgFQAAgWAIgPQAHgRAOgIQAOgJASAAQARAAAOAJQAOAIAIARQAHAPAAAWIAAAEQAAAVgHAQQgIAPgNAJQgOAJgSgBQgSABgOgJgAlYgkQgIAMAAAWIAAAFQAAAWAIALQAIAMAPABQAPAAAIgMQAHgLABgXIAAgFQAAgWgIgMQgIgLgPAAQgPAAgIALgAGbBGIAAiMIAdAAIAAAzIAXAAQAZAAAPANQAPAKAAAUQAAAVgPANQgPAMgYAAgAG4AvIAYAAQALAAAHgGQAGgGAAgLQAAgKgGgFQgHgGgLAAIgYAAgAFEBGIAAh0IgrAAIAAgYIBzAAIAAAYIgrAAIAAB0gAD3BGIgKgdIgzAAIgKAdIgfAAIA1iMIAbAAIA1CMgADCARIAjAAIgSgzgABoBGIAAg2QgNADgPABQgbAAgOgNQgOgJAAgXIAAgtIAdAAIAAAtQAAAMAGAFQAGAGAOAAQAPAAANgDIAAhBIAdAAIAACMgAibBGIAAh0IgmAAIgDAwQgBAagFAOQgFAPgKAGQgJAIgRgBIgHAAIAAgXIAFAAQALgCAEgLQAFgLABgbIADhCIBfAAIAACMgAmvBGIAAh0Ig5AAIAAB0IgdAAIAAiMIB0AAIAACMg");
	this.shape.setTransform(0.8,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-14,109.5,28);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFkBGIAAiMIBfAAIAAAYIhCAAIAAAiIA4AAIAAAUIg4AAIAAAnIBCAAIAAAXgAENBGIAAh0IgrAAIAAgYIBzAAIAAAYIgrAAIAAB0gAC2BGIAAhcIg5BcIgeAAIAAiMIAeAAIAABdIA5hdIAdAAIAACMgAArBGIAAg9Ig3AAIAAA9IgdAAIAAiMIAdAAIAAA6IA3AAIAAg6IAeAAIAACMgAheBGIAAg2QgNADgPAAQgbAAgOgMQgOgJAAgXIAAgtIAdAAIAAAtQAAAMAGAFQAGAGAOAAQAPAAANgDIAAhBIAdAAIAACMgAjcBGIgKgdIg0AAIgJAdIggAAIA1iMIAcAAIA1CMgAkSARIAkAAIgSgzgAlsBGIAAg9Ig5AAIAAA9IgdAAIAAiMIAdAAIAAA6IA5AAIAAg6IAeAAIAACMg");
	this.shape.setTransform(-3.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-14,96.1,28);


(lib.t1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBYQgGgGAAgJQAAgHAGgGQAGgFAHgBQAJABAFAFQAGAFAAAIQAAAJgGAGQgFAFgJAAQgHAAgGgFgAgNAjIgFh/IAlAAIgEB/g");
	this.shape.setTransform(0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-17.6,11.3,35.2);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEIB0IAAguIhvAAIAAAuIgkAAIgChMIAOAAQALgJAGgSQAHgRACgbIAFhRIB5AAIAACYIAWAAIgBAeIBEi2IAjAAIBFC2IgoAAIgNgmIhDAAIgMAmIgoAAIgCAugADBghQgEAvgQAaIBGAAIAAh6IgvAAgAFtACIAuAAIgXhDgAkqAxQgVgYAAgnIAAgMQAAgbAKgUQAJgUARgLQASgLAXAAQAgAAAUARQATASADAfIgmAAQgBgTgJgHQgJgJgRABQgTAAgJANQgKAOAAAcIAAAPQAAAbAJAOQAJAOATAAQASAAAJgIQAJgIABgRIAmAAQgCAegUARQgUARghAAQgjAAgUgYgAgIBGIAAi2IB2AAIAAAeIhSAAIAACYgAiVBGIAAi2IB7AAIAAAeIhVAAIAAAsIBJAAIAAAeIhJAAIAAAwIBWAAIAAAegAnZBGIAAi2IBBAAQAhAAASAMQARANAAAZQAAAOgHAKQgHAKgMAGQAOADAIALQAIAJAAAPQAAAbgRAOQgRANgfAAgAmzAoIAgAAQAOAAAIgHQAHgGAAgLQAAgXgagBIgjAAgAmzgjIAcAAQAdAAAAgXQAAgMgHgGQgIgFgPgBIgbAAg");
	this.shape.setTransform(-13.5,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.2,-17.6,128.5,35.2);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap6BXQgRgGgHgNQgJgMAAgQIAmAAQAAAKAJAHQAIAHAOAAQAPAAAJgHQAJgHAAgKQAAgPgIgGQgIgHgPAAIgXAAIAAgbIAYAAQAbgBAAgYQAAgKgIgHQgIgFgOgBQgMABgIAFQgIAHAAAJIgnAAQAAgPAJgLQAIgNAQgGQAQgIASAAQAgABASAOQASANAAAZQAAAMgHALQgIAKgNAHQAPADAIALQAJALgBAQQAAAZgTAOQgUAQgggBQgUABgQgIgAJ0BcIgNgmIhDAAIgMAmIgpAAIBFi3IAjAAIBFC3gAIuAXIAuAAIgWhDgAGPBcIAAiYIg4AAIAAgfICXAAIAAAfIg5AAIAACYgAEuBcIgNgmIhDAAIgNAmIgoAAIBFi3IAjAAIBFC3gADoAXIAuAAIgWhDgAB2BcIAAiYIgxAAIgDA/QgCAhgGAUQgHASgNAJQgMAJgVAAIgIAAIAAgfIAEAAQAOgCAHgOQAGgQABgjIAEhVIB8AAIAAC3gAg7BcIAAiYIhKAAIAACYIgmAAIAAi3ICXAAIAAC3gAlNBcIAAi3IBIAAQAUAAAQAIQAQAHAJAPQAIAOAAARQAAAcgSAOQgTAPghAAIgiAAIAABBgAkogCIAjAAQAPAAAHgHQAIgHAAgOQAAgNgIgIQgHgJgPAAIgjAAgAmDBcIgMgmIhDAAIgMAmIgpAAIBFi3IAjAAIBFC3gAnIAXIAuAAIgWhDg");
	this.shape.setTransform(-2.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-17.6,143,35.2);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFNBcIgNgmIhDAAIgMAmIgpAAIBFi3IAjAAIBFC3gAEIAXIAuAAIgXhDgAgfBcIAAi3IAkAAIAACZIAzAAIAAiZIAmAAIAACZIAzAAIAAiZIAmAAIAAC3gAhZBcIgNgmIhDAAIgMAmIgpAAIBFi3IAjAAIBFC3gAieAXIAuAAIgXhDgAl0BcIAAi3IBBAAQAhAAASANQARANAAAZQAAAOgHAKQgHAKgMAFQAOABAIALQAIALAAAPQAAAcgRANQgRAOgfAAgAlOA+IAgAAQAOAAAIgHQAHgGAAgMQAAgZgagBIgjAAgAlOgOIAcAAQAdAAAAgWQAAgNgHgFQgIgGgPAAIgbAAg");
	this.shape.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-17.6,80.7,35.2);


(lib.mastercard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313031").s().p("AgNARQgHgIAAgJQAAgMAJgGQAHgGAHAAQAKABAIAFIgFAJQgDgFgKAAQgEAAgFAFQgDAFAAAEQAAAGAEAFQAEAEAEABQAIAAAFgGIAFAKQgHAEgJABQgLgBgHgHg");
	this.shape.setTransform(13.4,30,1.494,1.494);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#313031").s().p("AgQARQgGgIAAgJQAAgJAGgGQAHgJAKAAQAPAAAFAOQADAHgBAGIghAAIACAGQAEAHAGgBQAGABAIgGIAEAIQgKAHgIAAQgLAAgHgIgAANgDQAAgLgMAAIgBAAQgGAAgDAFIgBAGIAXAAIAAAAg");
	this.shape_1.setTransform(0.2,30.1,1.494,1.494);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#313031").s().p("AgIAXIgCgIIAAgWIgJAAIAAgKIAJAAIAAgNIAKAAIAAANIAQAAIAAAKIgQAAIAAAWIABADQABACAGABQADAAAEgEIAFALQgKADgFABQgJAAgEgJg");
	this.shape_2.setTransform(-7,29.1,1.494,1.494);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#313031").s().p("AgOAWIgGgEIAFgHIAGADQAFACAEAAQAKgBAAgFQAAgDgGgBIgEgBQgFgBgEgCQgJgCAAgJQAAgHAGgEQAFgEAIAAQAGAAANAGIgGAIQgJgEgFgBQgHABAAAFQgBAEANADQAQACgBAJQAAAQgUAAQgGAAgIgDg");
	this.shape_3.setTransform(-14.3,30,1.494,1.494);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#313031").s().p("AgRAaQgGgJAAgJQAAgIAGgHQAGgIALAAQAIAAAGAIIAAgaIAKAAIAABBIgKAAIAAgFQgHAHgHAAQgKgBgHgHgAgIAAQgFACAAAGQAAAHAFAFQAEAEAEABQAGgBAFgEQAEgFAAgHQAAgGgEgCQgFgGgGAAQgEAAgEAGg");
	this.shape_4.setTransform(35.7,28.7,1.494,1.494);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#313031").s().p("AgRARQgGgIAAgJQAAgIAGgIQAHgIAKAAQAIAAAGAIIAAgGIAKAAIAAAtIgKAAIAAgEQgHAGgHAAQgKAAgHgIgAgIgJQgFAEAAAFQAAAGAFAFQAEAFAEAAQAHAAAEgFQAEgEAAgHQAAgFgEgEQgEgFgHAAQgEAAgEAFg");
	this.shape_5.setTransform(21.2,30,1.494,1.494);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#313031").s().p("AgRARQgGgIAAgJQAAgIAGgIQAHgIAKAAQAIAAAGAIIAAgGIAKAAIAAAtIgKAAIAAgEQgHAGgHAAQgKAAgHgIgAgIgJQgFAEAAAFQAAAGAFAFQAEAFAEAAQAHAAAEgFQAEgEAAgHQAAgFgEgEQgEgFgHAAQgEAAgEAFg");
	this.shape_6.setTransform(-22.7,30,1.494,1.494);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#313031").s().p("AgOAYIAAguIAKAAIAAAGIAEgDQAFgEADAAIAHABIgEAKQgBgBgDgBQgHAAgCAGIgCAEIABAcg");
	this.shape_7.setTransform(29.2,29.9,1.494,1.494);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#313031").s().p("AgOAYIAAguIAKAAIAAAGIAEgDQAFgEADAAIAHABIgDAKQgCgBgEgBQgGAAgCAGQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIAAAcg");
	this.shape_8.setTransform(7.7,29.9,1.494,1.494);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#313031").s().p("AAbAYIAAgcQAAgJgKAAQgHAAgDAFIgCAEIAAAcIgJAAIAAgcQgBgKgJAAQgMAAAAAKIAAAcIgKAAIAAguIAKAAIAAAGIAFgDQAGgEADAAQAKABAEAIIAEgEQAFgFAHAAQALAAAFAIQADADAAAEIAAAgg");
	this.shape_9.setTransform(-33.5,29.9,1.494,1.494);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2693A").s().p("AgxBQQgSgmgBgqQABgpASgmQATgkAegaQAgAaASAkQASAmABApQgBAqgSAmQgSAlggAZQgegZgTglg");
	this.shape_10.setTransform(0,-6.8,1.494,1.494);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DA333B").s().p("Ah+CAQg1g1AAhLQAAhJA1g1QA1g1BJAAQBKAAA1A1QA1A1AABJQAABLg1A1Qg1A0hKAAQhJAAg1g0g");
	this.shape_11.setTransform(-16.6,-6.8,1.494,1.494);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFA23A").s().p("Ai9C/QhPhPAAhwQAAhuBPhQQBPhPBuAAQBvAABPBPQBPBQAABuQAABwhPBPQhPBOhvAAQhuAAhPhOg");
	this.shape_12.setTransform(16.7,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-33.8,87.2,67.8);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man_240();
	this.instance.setTransform(-198,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,-200,396,400);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41C17").s().dr(-56.35,-0.8,112.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-0.7,112.7,1.6);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal();
	this.instance.setTransform(-89,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-124,178,248);


(lib.l_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41C17").s().p("Ah2BJIAAgeQgHAEgLAAQgPAAgIgLQgJgLAAgWQAAgTAKgMQAJgLARABQAJAAAFADIAAgkIAWAAIAAAkQAGgDAIAAQAkAAAAApQAAAVgJALQgJAMgOAAQgLAAgHgEIAAAegAhggRIAAAsQAFABAGAAQAIABAEgIQAEgGAAgMQAAgXgPAAIgFAAIgHADgAiRADQAAAZAQAAQAGAAAFgBIAAgsQgFgDgHAAQgPAAAAAXgAB2ApIAAhtIARgDIASgBQASAAAQADIgBARIgZgBIgTABIAAAeQAJgCAIAAQATAAAJAKQAKAJAAAOQAAASgLAKQgLAKgVAAQgSABgSgHgACOgEIAAAfQAGACAIAAQAIAAAFgFQAEgFAAgIQAAgQgRAAIgEAAIgKABgAj0ApIAAhOIAWAAIAAAcIAOgCQAPgBAIAIQAJAFAAAPQAAAPgKAHQgJAJgRAAQgRABgPgHgAjeAFIAAAYQAEABAFAAQAIAAADgDQADgEAAgGQAAgOgOAAIgJACgAEFAtIgFgFIgHAFQgIACgIAAQgMAAgIgGQgIgIAAgMQAAgNAJgIQAIgFARAAQAGAAAFABIAAgEQAAgIgDgCQgDgCgLAAIgRABIgDgQQANgDAPAAQAKAAAHACQAFACAEAFQACADABAEIABAOIAAAUQAAAJACAFQABAFAFAGIgOAKIgEgCgADnAKQgEADAAAFQAAAMAMAAQAGAAAGgDIgBgNIAAgGIgHAAQgIgBgEADgAAQAtIgEgFIgIAFQgFACgJAAQgMAAgHgGQgIgIAAgMQAAgNAIgIQAJgFAQAAQAEAAAFABIAAgEQAAgIgCgCQgDgCgJAAIgRABIgDgQQANgDAPAAQAIAAAGACQAGACAEAFIADAHIABAOIAAAUQAAAJACAFIAFALIgOAKIgEgCgAgLAKQgEADAAAFQAAAMAMAAQAEAAAGgDIgBgNIAAgGIgGAAQgHgBgEADgAlRAiQAFgDADgGQABgFAAgOIAAgnQASgGAPABQARgBARAGIAABOIgWAAIAAg/IgMgBIgLABIAAAcQAAASgGAIQgFAHgOAEgAGpAtIgLgaQgCgFgCgCQgCgBgFAAIgDAAIAAAiIgWAAIAAhRIAWAAIAAAfIAEAAQAEAAACgBIADgFIAGgMQADgIADgCQAEgEAIAAIAKAAIgBAPQgDgBgDACQgCADgFAJQgFAJgHABIAAAAQAFABADAEQADACACAGIAPAfgAFRAtIAAgiIgZAAIAAAiIgWAAIAAhRIAWAAIAAAfIAZAAIAAgfIAWAAIAABRgAlwAtIgHgWIgqAAIgHAWIgYAAIAohzQAHgBAGAAQAIAAAGABIAmBzgAl9ADIgOgyIAAAAIgQAyIAeAAgAA/AOQgEgFAAgGQAAgDAEgFQAEgDAGAAQAFAAAFADQAEAFAAADQAAAGgEAFQgFAEgFgBQgGABgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-7.3,90,14.7);


(lib.l_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41C17").s().p("AiQAfQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgBgDIAAgzIABgDQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAIEgAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAABIAAAzQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-3.1,30,6.3);


(lib.l_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41C17").s().p("ABUCcIgCgDIgVg5Ih5AAIgUA5IgDADQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgxgTIgCgCIAAgEIBYjxQAIgVAJgKQAMgOAUAAQAVAAAMAOQAJAJAIAWIBYDxQAAABABAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgxATIgBAAIgCAAgAgoApIBRAAIgph6IAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-15.7,27.9,31.4);


(lib.btnMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Хочу приз!
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVBvIgGgBIACgNIAFACIAGAAQAGABAFgEQAEgDAEgJIAKgWIg1h9IAPAAIAtBsIAuhsIAPAAIhBCXQgFAMgIAGQgIAGgLAAIgHgBgACyBtIAAisIANAAIAAAUQAHgKALgGQAMgHAOAAQARAAAMAIQANAIAHAPQAHAPAAAUQAAASgHAPQgHAPgNAIQgMAIgRAAQgNAAgMgHQgLgGgIgLIAABFgADQgvQgLAGgGAKIAAA8QAGAJALAHQALAGAOABQAOgBAKgHQAJgHAGgMQAFgMAAgNQAAgPgFgNQgGgMgJgHQgKgHgOAAQgOABgLAGgAHZA6QgOgFgJgKIAHgJQAIAJANAFQAMAEAPAAQATAAAMgHQALgGAAgMQAAgJgGgFQgGgGgKgCQgKgCgMAAIgdAAIAAgKIAdAAQALAAAKgCQAJgDAGgFQAGgGAAgIQAAgHgGgFQgFgFgKgDQgJgDgMAAQgOAAgKAEQgLAEgIAIIgIgIQAJgJAMgFQANgGARAAQAQAAAMAEQANAEAHAHQAIAIAAALQAAAJgGAHQgFAHgIADQgIAEgHABQAHAAAJABQAIAEAGAGQAGAHABAKQAAALgHAIQgHAIgMAFQgNAFgSAAQgSAAgOgGgAmaA3QgNgJgIgPQgHgPAAgQQAAgTAHgOQAIgPANgJQAOgJASAAQATAAAOAJQANAJAHAPQAIAOAAATQAAAQgIAPQgHAPgNAJQgOAJgTAAQgSAAgOgJgAmSguQgLAHgFANQgFAMAAAOQAAAMAFAMQAFAMALAIQAKAHAOABQAPgBAKgHQALgIAFgMQAFgMAAgMQAAgOgFgMQgFgNgLgHQgKgHgPgBQgOABgKAHgAJSA8QgDgEAAgEQAAgFADgDQADgDAFgBQAFABADADQAEADAAAFQAAAEgEAEQgDADgFAAQgFAAgDgDgAGYA9IAAhoIhIBoIgNAAIAAh8IAOAAIAABnIBHhnIAOAAIAAB8gAB8A9IAAhwIhHAAIAABwIgOAAIAAh8IBjAAIAAB8gAjJA9IAAg1QgIAEgKACQgLADgLAAQgXAAgLgKQgLgHABgXIAAgoIANAAIAAAlQAAANAEAHQAEAGAHACQAIADALAAQAKAAALgCQAKgDAGgBIAAg+IAOAAIAAB8gAnZA9Ig8hMIg9BMIgTAAIBGhXIhChVIATAAIA5BKIA4hKIATAAIhCBVIBGBXgAJVAPIgDh+IARAAIgDB+g");
	this.shape.setTransform(1.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C41C17").s().p("AtzCaIAAkzIbnAAIAAEzg");
	this.shape_1.setTransform(0,1,1,1.084);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-17.8,177,35.7);


(lib.btn_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Хочу приз!
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C41C17").s().p("AiVBvIgGgBIACgNIAFACIAGAAQAGABAFgEQAEgDAEgJIAKgWIg1h9IAPAAIAtBsIAuhsIAPAAIhBCXQgFAMgIAGQgIAGgLAAIgHgBgACyBtIAAisIANAAIAAAUQAHgKALgGQAMgHAOAAQARAAAMAIQANAIAHAPQAHAPAAAUQAAASgHAPQgHAPgNAIQgMAIgRAAQgNAAgMgHQgLgGgIgLIAABFgADQgvQgLAGgGAKIAAA8QAGAJALAHQALAGAOABQAOgBAKgHQAJgHAGgMQAFgMAAgNQAAgPgFgNQgGgMgJgHQgKgHgOAAQgOABgLAGgAHZA6QgOgFgJgKIAHgJQAIAJANAFQAMAEAPAAQATAAAMgHQALgGAAgMQAAgJgGgFQgGgGgKgCQgKgCgMAAIgdAAIAAgKIAdAAQALAAAKgCQAJgDAGgFQAGgGAAgIQAAgHgGgFQgFgFgKgDQgJgDgMAAQgOAAgKAEQgLAEgIAIIgIgIQAJgJAMgFQANgGARAAQAQAAAMAEQANAEAHAHQAIAIAAALQAAAJgGAHQgFAHgIADQgIAEgHABQAHAAAJABQAIAEAGAGQAGAHABAKQAAALgHAIQgHAIgMAFQgNAFgSAAQgSAAgOgGgAmaA3QgNgJgIgPQgHgPAAgQQAAgTAHgOQAIgPANgJQAOgJASAAQATAAAOAJQANAJAHAPQAIAOAAATQAAAQgIAPQgHAPgNAJQgOAJgTAAQgSAAgOgJgAmSguQgLAHgFANQgFAMAAAOQAAAMAFAMQAFAMALAIQAKAHAOABQAPgBAKgHQALgIAFgMQAFgMAAgMQAAgOgFgMQgFgNgLgHQgKgHgPgBQgOABgKAHgAJSA8QgDgEAAgEQAAgFADgDQADgDAFgBQAFABADADQAEADAAAFQAAAEgEAEQgDADgFAAQgFAAgDgDgAGYA9IAAhoIhIBoIgNAAIAAh8IAOAAIAABnIBHhnIAOAAIAAB8gAB8A9IAAhwIhHAAIAABwIgOAAIAAh8IBjAAIAAB8gAjJA9IAAg1QgIAEgKACQgLADgLAAQgXAAgLgKQgLgHABgXIAAgoIANAAIAAAlQAAANAEAHQAEAGAHACQAIADALAAQAKAAALgCQAKgDAGgBIAAg+IAOAAIAAB8gAnZA9Ig8hMIg9BMIgTAAIBGhXIhChVIATAAIA5BKIA4hKIATAAIhCBVIBGBXgAJVAPIgDh+IARAAIgDB+g");
	this.shape.setTransform(1.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C41C17").ss(2,1,1).p("AtzinIbnAAIAAFPI7nAAg");
	this.shape_1.setTransform(0,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(196,28,23,0)").s().p("AtzCoIAAlPIbnAAIAAFPg");
	this.shape_2.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,-17.8,179,36.7);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2_5
	this.instance = new lib.t2_5();
	this.instance.setTransform(195,24);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1).to({regX:-3,regY:-0.3,x:103.2,y:23.7},0).wait(1).to({x:56.8},0).wait(1).to({x:27.7},0).wait(1).to({x:8.1},0).wait(1).to({x:-5.5},0).wait(1).to({x:-15},0).wait(1).to({x:-21.6},0).wait(1).to({x:-26.2},0).wait(1).to({x:-29.2},0).wait(1).to({x:-31.2},0).wait(1).to({x:-32.3},0).wait(1).to({x:-32.8},0).wait(1).to({regX:0,regY:0,x:-30,y:24},0).wait(51));

	// t2_4
	this.instance_1 = new lib.t2_4();
	this.instance_1.setTransform(279,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({regX:1.9,regY:0.2,x:192.1,y:0.2},0).wait(1).to({x:145.7},0).wait(1).to({x:116.6},0).wait(1).to({x:97},0).wait(1).to({x:83.4},0).wait(1).to({x:73.9},0).wait(1).to({x:67.2},0).wait(1).to({x:62.7},0).wait(1).to({x:59.6},0).wait(1).to({x:57.7},0).wait(1).to({x:56.6},0).wait(1).to({x:56},0).wait(1).to({regX:0,regY:0,x:54,y:0},0).wait(54));

	// t2_3
	this.instance_2 = new lib.t2_3();
	this.instance_2.setTransform(175,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1).to({regX:-2.5,regY:0.3,x:83.7,y:0.3},0).wait(1).to({x:37.3},0).wait(1).to({x:8.2},0).wait(1).to({x:-11.4},0).wait(1).to({x:-25},0).wait(1).to({x:-34.5},0).wait(1).to({x:-41.1},0).wait(1).to({x:-45.7},0).wait(1).to({x:-48.7},0).wait(1).to({x:-50.7},0).wait(1).to({x:-51.8},0).wait(1).to({x:-52.3},0).wait(1).to({regX:0,regY:0,x:-50,y:0},0).wait(55));

	// t2_2
	this.instance_3 = new lib.t2_2();
	this.instance_3.setTransform(272,-23);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:0.8,regY:0.3,x:184,y:-22.7},0).wait(1).to({x:137.6},0).wait(1).to({x:108.5},0).wait(1).to({x:88.9},0).wait(1).to({x:75.3},0).wait(1).to({x:65.8},0).wait(1).to({x:59.1},0).wait(1).to({x:54.6},0).wait(1).to({x:51.5},0).wait(1).to({x:49.6},0).wait(1).to({x:48.5},0).wait(1).to({x:47.9},0).wait(1).to({regX:0,regY:0,x:47,y:-23},0).wait(58));

	// t2_1
	this.instance_4 = new lib.t2_1();
	this.instance_4.setTransform(171,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-3.8,regY:0.1,x:78.4,y:-22.9},0).wait(1).to({x:32},0).wait(1).to({x:2.9},0).wait(1).to({x:-16.7},0).wait(1).to({x:-30.3},0).wait(1).to({x:-39.8},0).wait(1).to({x:-46.4},0).wait(1).to({x:-51},0).wait(1).to({x:-54},0).wait(1).to({x:-56},0).wait(1).to({x:-57.1},0).wait(1).to({x:-57.6},0).wait(1).to({regX:0,regY:0,x:-54,y:-23},0).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122,-30,90.4,14.2);


(lib.text_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_52 = new cjs.Graphics().p("AtxBsIAAjXIbjAAIAADXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_graphics_52,x:1.2,y:42.1}).wait(122));

	// t3_10_GIFTS
	this.instance = new lib.t3_10();
	this.instance.setTransform(42,62);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).wait(1).to({regY:-0.1,y:54.1},0).wait(1).to({y:49.9},0).wait(1).to({y:47.1},0).wait(1).to({y:45.1},0).wait(1).to({y:43.6},0).wait(1).to({y:42.5},0).wait(1).to({y:41.8},0).wait(1).to({y:41.3},0).wait(1).to({y:41},0).wait(1).to({regY:0},0).wait(109));

	// t3_9_OTHER
	this.instance_1 = new lib.t3_9();
	this.instance_1.setTransform(-45,62);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).wait(1).to({regX:-0.1,regY:1.6,x:-45.1,y:55.8},0).wait(1).to({y:51.6},0).wait(1).to({y:48.8},0).wait(1).to({y:46.8},0).wait(1).to({y:45.3},0).wait(1).to({y:44.2},0).wait(1).to({y:43.5},0).wait(1).to({y:43},0).wait(1).to({y:42.7},0).wait(1).to({regX:0,regY:0,x:-45,y:41},0).wait(112));

	// t3_8_0
	this.instance_2 = new lib.t3_8();
	this.instance_2.setTransform(58.4,13.4,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).wait(1).to({regX:-0.1,regY:-0.2,scaleX:0.22,scaleY:0.22,x:58.3,y:13.3},0).wait(1).to({scaleX:0.3,scaleY:0.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:58.2,y:13.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:13.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:58.1,y:13},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:58,y:12.9},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:58.4,y:13.4},0).wait(1).to({regX:-0.1,regY:-0.2,scaleX:1.08,scaleY:1.08,x:58.3,y:13.2},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:58.4,y:13.4},0).wait(123));

	// t3_7_0
	this.instance_3 = new lib.t3_7();
	this.instance_3.setTransform(42.4,13.4,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).wait(1).to({regX:-0.1,regY:-0.2,scaleX:0.22,scaleY:0.22,x:42.3,y:13.3},0).wait(1).to({scaleX:0.3,scaleY:0.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:42.2,y:13.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:13.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:42.1,y:13},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:42,y:12.9},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:42.4,y:13.4},0).wait(1).to({regX:-0.1,regY:-0.2,scaleX:1.08,scaleY:1.08,x:42.3,y:13.2},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:42.4,y:13.4},0).wait(125));

	// t3_6_3
	this.instance_4 = new lib.t3_6();
	this.instance_4.setTransform(26.4,13.4,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).wait(1).to({regX:-0.3,regY:-0.2,scaleX:0.22,scaleY:0.22,x:26.3,y:13.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:26.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:26.1,y:13.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:26,y:13.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:25.9,y:13},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:25.8,y:12.9},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:26.4,y:13.5},0).wait(1).to({regX:-0.3,regY:-0.2,scaleX:1.08,scaleY:1.08,x:26,y:13.2},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:26.4,y:13.4},0).wait(127));

	// t3_4_1
	this.instance_5 = new lib.t3_4();
	this.instance_5.setTransform(-30,13,0.2,0.2,0,0,0,-0.3,0.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).wait(1).to({regX:-1.5,regY:-0.2,scaleX:0.22,scaleY:0.22,x:-30.3,y:12.9},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-30.4},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-30.6,y:12.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-30.8,y:12.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-31.1,y:12.6},0).wait(1).to({scaleX:1,scaleY:1,x:-31.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:12.5},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-30,y:13.1},0).wait(1).to({regX:-1.5,regY:-0.2,scaleX:1.08,scaleY:1.08,x:-31.5,y:12.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-31.4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-30,y:13},0).wait(139));

	// mask copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_21 = new cjs.Graphics().p("AtxBsIAAjXIbjAAIAADXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_1_graphics_21,x:1.2,y:13.3}).wait(153));

	// t3_5_OF
	this.instance_6 = new lib.t3_5();
	this.instance_6.setTransform(-2,37);
	this.instance_6._off = true;

	this.instance_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).wait(1).to({regY:-0.1,y:29.1},0).wait(1).to({y:24.9},0).wait(1).to({y:22.1},0).wait(1).to({y:20.1},0).wait(1).to({y:18.6},0).wait(1).to({y:17.5},0).wait(1).to({y:16.8},0).wait(1).to({y:16.3},0).wait(1).to({y:16},0).wait(1).to({regY:0},0).wait(130));

	// t3_3_OR
	this.instance_7 = new lib.t3_3();
	this.instance_7.setTransform(-63,37);
	this.instance_7._off = true;

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).wait(1).to({regX:-0.2,regY:-0.1,x:-63.2,y:29.1},0).wait(1).to({y:24.9},0).wait(1).to({y:22.1},0).wait(1).to({y:20.1},0).wait(1).to({y:18.6},0).wait(1).to({y:17.5},0).wait(1).to({y:16.8},0).wait(1).to({y:16.3},0).wait(1).to({y:16},0).wait(1).to({regX:0,regY:0,x:-63},0).wait(143));

	// t3_2_MackBook
	this.instance_8 = new lib.t3_2();
	this.instance_8.setTransform(-21,-14,0.2,0.2,0,0,0,-0.3,-0.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).wait(1).to({regX:1,regY:-0.6,scaleX:0.47,scaleY:0.47,x:-20.5,y:-14.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-20.3,y:-14.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-20.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:-14.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-20.1},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-20},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:-14.6},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({regX:-0.3,regY:-0.3,scaleX:1,scaleY:1,x:-21.3,y:-14.3},0).wait(154));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AtxBsIAAjXIbjAAIAADXg");
	mask_2.setTransform(1.2,-41.9);

	// t3_1_WIN
	this.instance_9 = new lib.t3_1();
	this.instance_9.setTransform(-16,-19);

	this.instance_9.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0.4,regY:-2,x:-15.6,y:-29.1},0).wait(1).to({y:-33.5},0).wait(1).to({y:-36.4},0).wait(1).to({y:-38.6},0).wait(1).to({y:-40.1},0).wait(1).to({y:-41.2},0).wait(1).to({y:-42},0).wait(1).to({y:-42.6},0).wait(1).to({y:-42.9},0).wait(1).to({regX:0,regY:0,x:-16,y:-41},0).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.1,-33,140.3,1.9);


(lib.t1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALIBcIAAi3IB7AAIAAAfIhVAAIAAAsIBJAAIAAAbIhJAAIAAAzIBWAAIAAAegAHUBcIAAi3IAmAAIAACZIAzAAIAAiZIAmAAIAACZIAzAAIAAiZIAmAAIAAC3gAGRBcIAAi3IAmAAIAAC3gAD3BcIAAi3IAmAAIAABDIAeAAQAgAAATAQQAUAOAAAaQAAAbgTAQQgTARggAAgAEdA+IAeAAQAPgBAJgHQAIgJAAgNQAAgNgIgHQgIgHgPgBIgfAAgABUBcIAAi3IBIAAQAVAAAQAIQAPAHAJAPQAIAOAAARQAAAbgSAOQgTAQghAAIghAAIAABBgAB6gCIAiAAQAPAAAIgHQAIgHAAgOQAAgNgIgIQgIgJgOAAIgjAAgAg2BcIAAi3IB3AAIAAAfIhRAAIAACYgAh4BcIAAh5IhKB5IgnAAIAAi3IAnAAIAAB5IBKh5IAmAAIAAC3gAkqBcIAAi3IAmAAIAAC3gAnEBcIAAi3IAmAAIAABDIAeAAQAgAAATAQQAUAOAAAaQAAAbgTAQQgTARggAAgAmeA+IAeAAQAPgBAJgHQAIgJAAgNQAAgNgIgHQgIgHgPgBIgfAAgApmBcIAAi3IBBAAQAiAAARANQARANAAAZQAAAOgHAKQgHAKgMAFQAOABAIALQAJALAAAPQAAAcgRANQgRAOggAAgApAA+IAhAAQANAAAIgHQAIgGAAgMQAAgZgbgBIgjAAgApAgOIAdAAQAcAAAAgWQAAgNgHgFQgHgGgQAAIgbAAgAtDBcIAAi3IBBAAQAiAAARANQARANAAAZQAAAOgHAKQgHAKgMAFQAOABAIALQAJALAAAPQAAAcgRANQgRAOggAAgAsdA+IAhAAQANAAAIgHQAIgGAAgMQAAgZgbgBIgjAAgAsdgOIAdAAQAcAAAAgWQAAgNgHgFQgHgGgQAAIgbAAg");
	this.shape.setTransform(-2.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.t1_5();
	this.instance.setTransform(86,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.8,-17.6,179.6,35.2);


(lib.man_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man();
	this.instance.setTransform(-30,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-116},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228,-200,396,400);


(lib.logo_alpha_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// l_1
	this.instance = new lib.l_1();
	this.instance.setTransform(0,-24,0.2,0.2,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,scaleX:0.39,scaleY:0.39},0).wait(1).to({scaleX:0.53,scaleY:0.53},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regY:-0.3,scaleX:1,scaleY:1,y:-24.3},0).wait(26));

	// l_2
	this.instance_1 = new lib.l_2();
	this.instance_1.setTransform(0,4,0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.33},0).wait(1).to({scaleX:0.5},0).wait(1).to({scaleX:0.63},0).wait(1).to({scaleX:0.73},0).wait(1).to({scaleX:0.8},0).wait(1).to({scaleX:0.86},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:1},0).wait(26));

	// l_3
	this.instance_2 = new lib.l_3();
	this.instance_2.setTransform(0,32);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:1},13).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-27.1,5.6,34.3);


(lib.frame_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_3
	this.instance = new lib.text_3("synched",0,false);
	this.instance.setTransform(-18,45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(166));

	// text_2
	this.instance_1 = new lib.text2("synched",0,false);
	this.instance_1.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122,-92,90.4,14.2);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn_up();
	this.instance.setTransform(0,-1);

	this.instance_1 = new lib.btn_over();
	this.instance_1.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-16.8,177,33.6);


(lib.text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1_4
	this.instance = new lib.t1_4();
	this.instance.setTransform(-22,26,2,2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:1,regY:0.3,scaleX:1.99,scaleY:1.99,x:-19.9,y:26.6,alpha:0.008},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:-20,alpha:0.036},0).wait(1).to({scaleX:1.9,scaleY:1.9,y:26.5,alpha:0.095},0).wait(1).to({scaleX:1.79,scaleY:1.79,x:-20.1,alpha:0.197},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:-20.3,alpha:0.353},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:-20.5,y:26.4,alpha:0.555},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-20.7,y:26.3,alpha:0.778},0).wait(1).to({regX:0,regY:0,scaleX:0.95,scaleY:0.95,x:-21.9,y:26,alpha:1},0).wait(1).to({regX:1,regY:0.3,scaleX:0.96,scaleY:0.96,x:-21,y:26.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-20.9},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-22,y:26},0).wait(31));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("Aobh5IQAAAIAADzIwAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:-54,y:2.8}).wait(49));

	// t1_3
	this.instance_1 = new lib.t1_3();
	this.instance_1.setTransform(-48,46);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:-13.5,regY:1.7,x:-61.5,y:29},0).wait(1).to({y:20},0).wait(1).to({y:14.2},0).wait(1).to({y:10.1},0).wait(1).to({y:7.3},0).wait(1).to({y:5.2},0).wait(1).to({y:3.7},0).wait(1).to({y:2.8},0).wait(1).to({y:2.1},0).wait(1).to({y:1.8},0).wait(1).to({regX:0,regY:0,x:-48,y:0},0).wait(38));

	// mask  (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AqxiyIVjAAIAADfI1jAAg");
	mask_1.setTransform(40.5,-18);

	// t1_2
	this.instance_2 = new lib.t1_2();
	this.instance_2.setTransform(41,20);

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-2.1,regY:0.5,x:38.9,y:1.8},0).wait(1).to({y:-7.2},0).wait(1).to({y:-13},0).wait(1).to({y:-17},0).wait(1).to({y:-19.9},0).wait(1).to({y:-22},0).wait(1).to({y:-23.4},0).wait(1).to({y:-24.4},0).wait(1).to({y:-25},0).wait(1).to({y:-25.4},0).wait(1).to({regX:0,regY:0,x:41,y:-26},0).wait(42));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AodiyIMjAAIAADfIsjAAg");
	mask_2.setTransform(-54.2,-18);

	// t1_1
	this.instance_3 = new lib.t1_1();
	this.instance_3.setTransform(-72,20);

	this.instance_3.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0.4,regY:0.3,x:-71.6,y:1.6},0).wait(1).to({y:-7.4},0).wait(1).to({y:-13.2},0).wait(1).to({y:-17.2},0).wait(1).to({y:-20.1},0).wait(1).to({y:-22.2},0).wait(1).to({y:-23.6},0).wait(1).to({y:-24.6},0).wait(1).to({y:-25.2},0).wait(1).to({y:-25.6},0).wait(1).to({regX:0,regY:0,x:-72,y:-26},0).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.frame_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Legal
	this.instance = new lib.legal_1();
	this.instance.setTransform(0,185);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).wait(1).to({y:180.5,alpha:0.279},0).wait(1).to({y:177.7,alpha:0.454},0).wait(1).to({y:175.7,alpha:0.584},0).wait(1).to({y:174,alpha:0.686},0).wait(1).to({y:172.7,alpha:0.769},0).wait(1).to({y:171.6,alpha:0.836},0).wait(1).to({y:170.8,alpha:0.889},0).wait(1).to({y:170.1,alpha:0.931},0).wait(1).to({y:169.6,alpha:0.962},0).wait(1).to({y:169.3,alpha:0.983},0).wait(1).to({y:169.1,alpha:0.996},0).wait(1).to({y:169,alpha:1},0).wait(73).to({y:168.9,alpha:0.994},0).wait(1).to({y:168.4,alpha:0.977},0).wait(1).to({y:167.7,alpha:0.948},0).wait(1).to({y:166.8,alpha:0.908},0).wait(1).to({y:165.5,alpha:0.855},0).wait(1).to({y:163.9,alpha:0.789},0).wait(1).to({y:162,alpha:0.707},0).wait(1).to({y:159.5,alpha:0.605},0).wait(1).to({y:156.4,alpha:0.474},0).wait(1).to({y:152.1,alpha:0.296},0).wait(1).to({y:145,alpha:0},0).wait(124));

	// Button
	this.instance_1 = new lib.btn();
	this.instance_1.setTransform(1,1,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.45,scaleY:0.45,alpha:0.314},0).wait(1).to({scaleX:0.61,scaleY:0.61,alpha:0.51},0).wait(1).to({scaleX:0.71,scaleY:0.71,alpha:0.643},0).wait(1).to({scaleX:0.79,scaleY:0.79,alpha:0.739},0).wait(1).to({scaleX:0.85,scaleY:0.85,alpha:0.81},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.863},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.904},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.935},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.958},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.976},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({regX:0.3,regY:0.3,scaleX:1,scaleY:1,x:1.3,y:1.3,alpha:1},0).wait(144).to({regX:0,regY:0,x:1,y:0.9,alpha:0.994},0).wait(1).to({y:0.4,alpha:0.977},0).wait(1).to({y:-0.3,alpha:0.948},0).wait(1).to({y:-1.2,alpha:0.908},0).wait(1).to({y:-2.5,alpha:0.855},0).wait(1).to({y:-4.1,alpha:0.789},0).wait(1).to({y:-6,alpha:0.707},0).wait(1).to({y:-8.5,alpha:0.605},0).wait(1).to({y:-11.6,alpha:0.474},0).wait(1).to({y:-15.9,alpha:0.296},0).wait(1).to({regX:0.3,regY:0.3,x:1.3,y:-22.7,alpha:0},0).wait(124));

	// line
	this.instance_2 = new lib.line();
	this.instance_2.setTransform(1,190);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},8).wait(67).to({alpha:0},9).to({_off:true},1).wait(219));

	// mastercardlogo
	this.instance_3 = new lib.mastercard();
	this.instance_3.setTransform(0,236);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:238.1,alpha:0.262},0).wait(1).to({y:239.5,alpha:0.439},0).wait(1).to({y:240.6,alpha:0.572},0).wait(1).to({y:241.4,alpha:0.676},0).wait(1).to({y:242.1,alpha:0.758},0).wait(1).to({y:242.6,alpha:0.824},0).wait(1).to({y:243,alpha:0.877},0).wait(1).to({y:243.3,alpha:0.918},0).wait(1).to({y:243.6,alpha:0.949},0).wait(1).to({y:243.8,alpha:0.973},0).wait(1).to({y:243.9,alpha:0.988},0).wait(1).to({y:244,alpha:0.997},0).wait(1).to({alpha:1},0).wait(62).to({y:236,alpha:0},9).to({_off:true},1).wait(219));

	// logo
	this.instance_4 = new lib.logo_alpha_2("synched",0,false);
	this.instance_4.setTransform(1,130,1.2,1.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:-0.2,y:127.7,alpha:0.262,startPosition:1},0).wait(1).to({y:126.2,alpha:0.439,startPosition:2},0).wait(1).to({y:125.2,alpha:0.572,startPosition:3},0).wait(1).to({y:124.3,alpha:0.676,startPosition:4},0).wait(1).to({y:123.7,alpha:0.758,startPosition:5},0).wait(1).to({y:123.2,alpha:0.824,startPosition:6},0).wait(1).to({y:122.7,alpha:0.877,startPosition:7},0).wait(1).to({y:122.4,alpha:0.918,startPosition:8},0).wait(1).to({y:122.2,alpha:0.949,startPosition:9},0).wait(1).to({y:122,alpha:0.973,startPosition:10},0).wait(1).to({y:121.8,alpha:0.988,startPosition:11},0).wait(1).to({alpha:0.997,startPosition:12},0).wait(1).to({regY:0,y:122,alpha:1,startPosition:13},0).wait(62).to({startPosition:39},0).to({y:130,alpha:0},9).to({_off:true},1).wait(219));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.3,97.5,112.7,172.5);


(lib.frame_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_1
	this.instance = new lib.text_1("synched",0,false);
	this.instance.setTransform(4,-138);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(96));

	// white copy
	this.instance_1 = new lib.white();
	this.instance_1.setTransform(0,400);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86).to({_off:false},0).wait(1).to({y:311.4},0).wait(1).to({y:248.3},0).wait(1).to({y:200.5},0).wait(1).to({y:162.9},0).wait(1).to({y:132.8},0).wait(1).to({y:108.2},0).wait(1).to({y:88},0).wait(1).to({y:71.3},0).wait(1).to({y:57.4},0).wait(1).to({y:45.9},0).wait(1).to({y:36.3},0).wait(1).to({y:28.4},0).wait(1).to({y:21.8},0).wait(1).to({y:16.5},0).wait(1).to({y:12.2},0).wait(1).to({y:8.7},0).wait(1).to({y:6},0).wait(1).to({y:3.9},0).wait(1).to({y:2.3},0).wait(1).to({y:1.2},0).wait(1).to({y:0.5},0).wait(1).to({y:0.1},0).wait(1).to({y:0},0).wait(1));

	// white
	this.instance_2 = new lib.white();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.755},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.623},0).wait(1).to({alpha:0.549},0).wait(1).to({alpha:0.472},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.317},0).wait(1).to({alpha:0.245},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.124},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(86));

	// man
	this.instance_3 = new lib.man_move("synched",0,false);
	this.instance_3.setTransform(79,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-200,396,401);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_alpha_2("synched",0,false);
	this.instance.setTransform(-59,144);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245).to({startPosition:39},0).wait(1).to({regY:-0.2,y:143.5,alpha:0.995},0).wait(1).to({y:142.7,alpha:0.978},0).wait(1).to({y:141.3,alpha:0.951},0).wait(1).to({y:139.4,alpha:0.912},0).wait(1).to({y:136.8,alpha:0.859},0).wait(1).to({y:133.4,alpha:0.792},0).wait(1).to({y:129.2,alpha:0.708},0).wait(1).to({y:123.9,alpha:0.602},0).wait(1).to({y:117.1,alpha:0.466},0).wait(1).to({y:108,alpha:0.285},0).wait(1).to({regY:0,y:94,alpha:0},0).to({_off:true},1).wait(184));

	// frame_3
	this.instance_1 = new lib.frame_3("synched",0);
	this.instance_1.setTransform(1,-135);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(257).to({_off:false},0).wait(184));

	// frame_2
	this.instance_2 = new lib.frame_2("synched",0,false);
	this.instance_2.setTransform(-1,-53);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(114).to({_off:false},0).wait(131).to({startPosition:131},0).wait(1).to({regX:111.9,regY:3,x:110.9,y:-50.2,alpha:0.995,startPosition:132},0).wait(1).to({y:-51,alpha:0.978,startPosition:133},0).wait(1).to({y:-52.4,alpha:0.951,startPosition:134},0).wait(1).to({y:-54.4,alpha:0.912,startPosition:135},0).wait(1).to({y:-57,alpha:0.859,startPosition:136},0).wait(1).to({y:-60.3,alpha:0.792,startPosition:137},0).wait(1).to({y:-64.6,alpha:0.708,startPosition:138},0).wait(1).to({y:-69.9,alpha:0.602,startPosition:139},0).wait(1).to({y:-76.6,alpha:0.466,startPosition:140},0).wait(1).to({y:-85.7,alpha:0.285,startPosition:141},0).wait(1).to({regX:0,regY:0,x:-1,y:-103,alpha:0,startPosition:142},0).to({_off:true},1).wait(184));

	// frame_1
	this.instance_3 = new lib.frame_1("synched",0,false);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},114).wait(327));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-630,-212,1012,426);


// stage content:



(lib.alfabank_card_240x400_yandex_do150kb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.btnMain = new lib.btnMain();
	this.btnMain.setTransform(120,200);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.btnMain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91,199,396,402);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;