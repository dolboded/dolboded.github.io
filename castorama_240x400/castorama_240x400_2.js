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
		{src:"_240_1.jpg", id:"_240_1"},
		{src:"_240_2.jpg", id:"_240_2"}
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



(lib._240_1 = function() {
	this.initialize(img._240_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,165);


(lib._240_2 = function() {
	this.initialize(img._240_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,165);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._240_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,165);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._240_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,165);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D7").s().p("AAhBYIghg5IggA5Ig5AAIA5hYIg1hXIA5AAIAcA2IAdg2IA5AAIg1BWIA5BZg");
	this.shape.setTransform(186.6,105.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0078D7").s().p("AAhBYIAAhhIg/BhIgyAAIAAivIAwAAIAABiIA+hiIAzAAIAACvg");
	this.shape_1.setTransform(168.7,105.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0078D7").s().p("AhzBYIAAivIAxAAIAACDIArAAIAAiDIAuAAIAACDIAsAAIAAiDIAwAAIAACvg");
	this.shape_2.setTransform(146.6,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0078D7").s().p("AhLBYIAAivIAyAAIAAA2IAmAAQAdAAARASQARAPgBAaQABAbgRARQgRASgdAAgAgZAsIAgAAQASAAABgSQAAgQgTgBIggAAg");
	this.shape_3.setTransform(126.3,105.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0078D7").s().p("AAnBYIgnh9IglB9Ig4AAIA/ivIA8AAIBACvg");
	this.shape_4.setTransform(108.5,105.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0078D7").s().p("AhCBBQgbgZAAgoQAAgnAbgZQAbgaAnAAQAoAAAbAaQAbAZAAAnQAAAogbAZQgbAZgoAAQgnAAgbgZgAgfggQgMAOAAASQAAAUAMANQANANASAAQATAAANgNQAMgNAAgUQAAgSgMgOQgMgOgUABQgSgBgNAOg");
	this.shape_5.setTransform(90.5,105.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0078D7").s().p("AhKBYIAAivICHAAIAAArIhXAAIAAAYIAnAAQAdAAARAQQAQANAAAYQAAAYgQAPQgRAQgdAAgAgYAvIAhAAIAAgBQASAAAAgOQAAgNgSAAIghAAg");
	this.shape_6.setTransform(72.9,105.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0078D7").s().p("AAaBYIAAg5IgWAAIgXA5Ig2AAIAfg/QgggOAAgmQAAgaAQgQQASgSAhAAIBTAAIAACvgAgTgnQgGAEAAAIQAAAQATAAIAgAAIAAghIggAAQgHABgGAEg");
	this.shape_7.setTransform(48.7,105.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0078D7").s().p("AAnBYIgnh9IgmB9Ig3AAIA+ivIA+AAIA/Cvg");
	this.shape_8.setTransform(31.3,105.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0078D7").s().p("AA6BrIAAgnIhzAAIAAAnIgwAAIAAhUIAYAAIAziCIA9AAIAzCCIAYAAIAABUgAgcAXIA5AAIgdhYg");
	this.shape_9.setTransform(10.6,107.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0078D7").s().p("AAhBXIAAhFIhBAAIAABFIgxAAIAAitIAxAAIAABAIBBAAIAAhAIAxAAIAACtg");
	this.shape_10.setTransform(185.5,130.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0078D7").s().p("Ag+BXIAAitIB+AAIAAArIhPAAIAAAWIA/AAIAAApIg/AAIAAAYIBPAAIAAArg");
	this.shape_11.setTransform(169,130.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0078D7").s().p("AA1BYIAAhoIg0BEIgDAAIgyhEIAABoIgwAAIAAiuIAzAAIAxBGIAzhHIAyABIAACug");
	this.shape_12.setTransform(150,130.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0078D7").s().p("Ag/BXIAAitIB+AAIAAArIhOAAIAAAWIA/AAIAAApIg+AAIAAAYIBOAAIAAArg");
	this.shape_13.setTransform(131.5,130.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0078D7").s().p("AhKBXIAAitIBZAAQAcAAARARQAQARAAAaQAAAagQAOQgRARgcAAIgpAAIAAA4gAgbgKIAiAAIAAgBQASAAAAgQQAAgQgSAAIgiAAg");
	this.shape_14.setTransform(116.4,130.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0078D7").s().p("Ag/BXIAAitIB/AAIAAArIhOAAIAAAWIA+AAIAAApIg+AAIAAAYIBOAAIAAArg");
	this.shape_15.setTransform(100.4,130.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0078D7").s().p("AAgBXIAAiCIg9AAIAACCIgyAAIAAitICfAAIAACtg");
	this.shape_16.setTransform(83.6,130.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0078D7").s().p("ABwCnIAAlNIBcAAIAAFNgAjLCnIAAlNIBcAAIAABnIBPAAQA1AAAhAiQAeAeAAAyQAAAygeAgQggAig2AAgAhvBUIBBAAQARAAAJgIQALgJAAgRQAAgQgLgJQgJgIgRAAIhBAAg");
	this.shape_17.setTransform(174.2,60);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0078D7").s().p("AA/CnIAAiDIh9AAIAACDIhcAAIAAlNIBcAAIAAB5IB9AAIAAh5IBcAAIAAFNg");
	this.shape_18.setTransform(133.3,60);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0078D7").s().p("Ah5CmIAAlLIDyAAIAABRIiVAAIAAArIB5AAIAABQIh5AAIAAAuICVAAIAABRg");
	this.shape_19.setTransform(101.9,59.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0078D7").s().p("ABVDNIAAhMIkDAAIAAlNIBcAAIAAD6IB3AAIAAj6IBcAAIAAD6IAuAAIAACfg");
	this.shape_20.setTransform(69.3,63.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0078D7").s().p("Ah4CnIAAlMIDyAAIAABSIiVAAIAAApIB6AAIAABRIh6AAIAAAuICVAAIAABSg");
	this.shape_21.setTransform(182.7,17.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0078D7").s().p("AA/CnIAAi6Ih4C6IhhAAIAAlMIBcAAIAAC7IB4i7IBhAAIAAFMg");
	this.shape_22.setTransform(150.1,17.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0078D7").s().p("AAoCnIhLh8IgYAhIAABbIhcAAIAAlMIBcAAIAACJIBciJIByAAIh9CaICCCyg");
	this.shape_23.setTransform(118.1,17.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0078D7").s().p("AhUCfQgggLgfgaIAuhFQAtAlAzgBQAaAAAPgJQAOgIAAgNQAAgMgIgEQgKgGgagBIhHAAIAAhMIBHAAQAoAAAAgVQAAgdg1AAQgVAAgXAIQgXAJgSAPIgxhDQA7guBTgBQBCAAAmAbQAkAZAAApQAAA1g2AWQAdAHAQASQAQAUAAAbQAAAsgoAeQgpAehBAAQgxAAglgNg");
	this.shape_24.setTransform(84.7,17.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0078D7").s().p("AA/CnIAAi6Ih5C6IhgAAIAAlMIBcAAIAAC7IB5i7IBgAAIAAFMg");
	this.shape_25.setTransform(51.8,17.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0078D7").s().p("AA/CnIAAiEIh+AAIAACEIhcAAIAAlMIBcAAIAAB4IB+AAIAAh4IBdAAIAAFMg");
	this.shape_26.setTransform(15.9,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.7,139.6);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.adress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A595B").s().p("AHGFOQgKgEgKgKQgKgLgDgKQgFgNAAgNQAAgMAFgNQAFgNAIgJQAIgJAMgEQANgGANAAQASAAAKAHQAIAEALALIgOANQgIgKgHgEQgHgEgKAAQgKAAgIAEQgIAEgFAHQgGAGgDAIQgDAJAAAKQAAALADAIQADAJAGAGQAHAIAGACQAKAFAIAAQALAAAGgFQAJgFAGgHIADACIAEAFIAHAGQgGAJgNAHQgNAGgPAAQgPAAgLgFgAFJFOQgKgEgKgKQgKgLgDgKQgFgNAAgNQAAgMAFgNQAFgNAIgJQAIgJAMgEQANgGANAAQASAAAKAHQAIAEALALIgOANQgIgKgHgEQgHgEgKAAQgKAAgIAEQgIAEgFAHQgFAEgEAKQgDAJAAAKQAAALADAIQADAKAGAFQAHAIAGACQAKAFAIAAQALAAAGgFQAJgFAGgHIADACIAEAFIAHAGQgGAJgNAHQgLAGgRAAQgPAAgLgFgACxFOQgLgFgIgIQgHgKgFgMQgEgKAAgQQAAgPAEgKQAFgMAHgKQAIgIALgFQAMgGANAAIALABIAMAFIAMAIIAKAMIAAgYIAUAAIAAB+IgUAAIAAgVIgBAAQgGAKgEACIgMAIIgMAFIgKAAQgNAAgMgFgAC6DkQgKAHgDAEQgEAFgEAKQgDALAAAIQAAAJADAJQADAIAFAHQAIAIAFACQAHAEALAAQAMAAAGgEQAKgGADgFQAFgEADgLQADgJAAgJQAAgJgDgJQgCgHgGgIQgGgGgHgFQgHgEgLAAQgLAAgHAEgAK2FSIAAh/IBAAAQASAAALAJQALAKAAAOQAAAGgEAJQgEAHgKAFQAOAFAGAKQAGAIAAAKQAAAPgLAKQgLAIgTABgALKFBIAtAAIAAgBQALAAAHgFQAGgFAAgJQAAgJgHgFQgGgGgNAAIgrAAgALLEKIAmAAIAAgCQALAAAHgFQAGgHAAgGQAAgHgFgGQgEgEgMgBIgpAAgAKAFSIAAhfIhJBdIgRAAIAAh9IAUAAIAABdIBJhcIARAAIAAB+gABeFRIAAheIgrA6IgBAAIgsg7IAABeIgSAAIAAh9IARAAIAuA/IAtg/IASAAIAAB+gAOaFQIAAiRIgcAeIgNgNIAsgtIATAAIAACtgAhqCHQgDAAgFgCIAEgSIAGACIAFABQAFAAAFgDQABgBAHgKIAIgRIg1h8IAWAAIAqBjIAqhjIAUAAIgrBqIgMAbIgGAPQgFANgKAGQgJAGgNAAIgIgBgAOaBsIgBAAIAGgIQACgDAAgIIgBgCQgIgEAAgJQAAgGAEgDQAGgEAEAAQAHAAAFAFQAFAFAAAJIgCAMIgGAKIgJAHQgFADgHAAgAC5BUQgLgFgIgJQgHgJgFgMQgEgLAAgPQAAgPAEgJQAFgMAHgJQAIgJALgFQAMgFANAAIALABIAMAEQAFADAHAFQAFAGAFAHIAAgYIAUAAIAAB8IgUAAIAAgWIgBAAQgHAKgDADIgMAIIgMAEIgKABQgLAAgOgFgADDgUQgLAIgCADQgEAFgEAIQgDAHAAAMQAAAJADAJQADAIAFAHQAIAIAFACQAHAEALAAQAMAAAGgEQAKgGADgFQAFgFADgKQADgJAAgJQAAgJgDgJQgCgEgGgJQgGgHgHgEQgIgEgKAAQgKAAgIAEgAlmBTQgRgGgLgMQgLgLgIgRQgHgQAAgUQAAgSAHgRQAIgRALgLQANgMAPgGQATgHAQAAQAXABAQAIQANAIAPARIgSALQgHgKgOgJQgNgGgPgBQgMABgOAFQgLAEgKAJQgKAKgEANQgFANAAANQAAAOAFANQAFANAJAKQAKAJALAEQAOAFAMABQAPgBANgGQAOgJAHgJIAEABIAOAJQgNAPgPAKQgPAKgYAAQgSAAgRgGgApxBUQgKgDgKgLQgJgLgEgKQgFgMAAgNQAAgNAFgLQAFgNAIgJQAIgJAMgEQANgFANgBQARABALAFQAHAEAMANIgOALQgIgJgHgDQgHgFgKAAQgKAAgIAFQgIACgFAIQgGAGgDAGIgCAUQAAAJADAKQAEALAFAEQAHAHAGADQAMAEAGAAQALAAAGgEQAJgFAGgIIADADIALAMQgGAJgNAGQgNAFgQAAQgNAAgNgFgAsDBUQgJgDgLgLQgIgIgFgNQgEgKAAgPQAAgNAEgLQAFgNAIgJQALgKAJgDQANgFANgBQAMABAOAFQAKAEAKAJQAKAMADAKQAEAIAAAQQAAAPgEAKQgEALgJAKQgHAJgNAFQgKAFgQAAQgMAAgOgFgAr7gSQgKAGgDAFQgEAEgEAJQgDAJAAAJQAAAJADAJQADAIAFAHQAIAIAFACQAHAEALAAQALAAAHgEQAHgFAGgFQAEgEAEgLQADgJAAgJQAAgJgDgJQgDgGgFgHQgIgIgFgDQgHgEgLAAQgLAAgHAEgAoOBUQgEgDAAgGQAAgHAEgDQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEADQgEAEgGABQgGgBgDgEgANmBYIAAhdIhJBbIgRAAIAAh7IAUAAIAABbIBJhaIARAAIAAB8gAJZBYIAAh9IAUAAIAAAjIAjAAQANAAAJACQAGACAKAIQADACAHAMQADAFAAANQAAAJgDAIQgDAJgHAFQgEAFgMAFQgNAFgIAAgAJtBFIAiAAIAAgBQAOAAAIgHQAIgIAAgLQAAgLgIgIQgIgIgOAAIgiAAgAGOBYIAAhcIhIBaIgSAAIAAh7IAUAAIAABbIBJhaIARAAIAAB8gABmBYIAAguIgPAFQgKACgIAAQgYAAgNgMQgOgNAAgXIAAgmIAUAAIAAAlQAAAKADAFQAEAHADACQAFAFAGAAIANABQARAAAOgGIAAg8IAUAAIAAB8gALXBXIAAh8IAUAAIAAB8gAIjBXIAAg5IhLAAIAAA4IgUAAIAAh7IAUAAIAAAxIBLAAIAAgxIAUAAIAAB8gAiMBXIgqhjIgqBiIgWAAIA1h8IAWAAIAAABIA1B8gAtYBXIAAhqIhKAAIAABpIgUAAIAAh7IByAAIAAB8gAMzg3QgIgEgDgDQgDgDgEgHQgCgEAAgIIAQAAQAAAHAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgHIAPAAQADAEgEAIQgCAGgFAEQgFAFgGACQgEACgKAAIgOgCgAFcg3QgIgEgDgDQgEgEgDgGQgCgEAAgIIAQAAQAAAHAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgHIAPAAIgBAMQgDAGgEAEQgEAFgHACQgEACgKAAIgOgCgAgshyIAAitIAUAAIAAAYIAKgNIAMgIQACgDAIgCIAKgBQAOAAALAFQAMAGAHAIQAIAKAEALQAEAKAAAQQAAAQgEAKQgFANgHAIQgHAJgMAFQgLAFgOAAIgLgBQgHgCgDgCIgMgIQgFgGgFgHIAABGgAAAkMIgNAKQgFAFgDAKQgDAJAAAJQAAAJADAJQACAIAGAHQAHAIAGADQAFAEALAAQAMAAAGgEQAKgGADgFQAFgEADgLQADgJAAgJQAAgJgDgJQgCgIgGgHQgIgIgFgCQgGgEgMAAQgLAAgFAEgAOaiMIgBAAIAGgIQACgDAAgIIgBgDQgIgCAAgKQAAgGAEgDQAGgEAEAAQAHAAAFAFQAFAFAAAJIgCAMIgGAKIgJAHQgFADgHAAgAIdikQgLgFgIgJQgHgJgFgMQgEgLAAgPQAAgQAEgKQAFgMAHgJQAIgJALgFQAMgFANAAIALABIAMAEIAMAIIAKANIAAgWIAUAAIAAB+IgUAAIAAgYIgBAAQgGAKgEADIgMAIIgMAEIgKABQgLAAgOgFgAImkOQgKAGgDAFQgEAEgEALQgDAJAAAKQAAAJADAJQADAIAFAHQAIAIAFACQAHAEALAAQAMAAAGgEQAKgGADgFQAFgEADgLQADgJAAgJQAAgJgDgJQgCgIgGgHQgIgIgFgDQgGgEgMAAQgLAAgHAEgAEcikQgKgEgKgKQgKgLgDgKQgFgOAAgMQAAgNAFgNQAFgNAIgIQAIgKAMgEQAOgFAMAAQASAAAKAGQAJAGAKAKIgOAMQgIgJgHgEQgGgEgLAAQgKAAgIAEQgHADgGAHQgFAFgEAKQgDAJAAAKQAAAKADAJQADAJAGAGQAHAIAGACQAKAEAIAAQALAAAGgEQAJgFAGgIIADADIAEAEIAHAHQgGAIgNAIQgKAGgSAAQgNAAgNgFgACJikQgJgEgLgKQgHgIgGgNQgEgLAAgPQAAgQAEgKQAGgOAHgHQALgLAJgDQAOgFAMAAQANAAANAFQAKAEAKAKQAJALAEAKQAEAKAAAQQAAAPgEALQgGAOgHAHQgIAKgMAEQgIAFgSAAQgNAAgNgFgACRkNQgKAGgDAFQgFAFgDAKQgDAJAAAJQAAAJADAJQACAIAGAHQAIAIAFACQAIAFAKAAQAMAAAGgEQAIgEAFgGQAFgEADgLQADgJAAgJQAAgJgDgJQgFgMgDgEQgIgIgFgDQgHgEgLAAQgMAAgGAEgAmkikQgMgFgIgJQgIgIgFgNQgFgOAAgNQAAgNAFgNQAGgMAHgHQAJgKALgEQANgFAMAAQAMAAAOAFQALAFAIAJQAIAJAEAMQAEAKAAAQIAAAGIhnAAIAEAQQAEAJAFAEQAHAHAHACQAIADAJAAQAMAAAJgEQALgFAHgHIAKANQgKAMgMADQgKAGgSAAQgNAAgNgFgAmdkNQgHADgFAHQgGAIgCAFQgDAIAAAGIBSAAQAAgGgDgIQgDgJgFgEQgBgDgLgHQgIgEgLAAQgKAAgHAEgArzi/IARgNQAJAMAOAGQAPAHAPAAQAPAAAKgEQAJgEALgIQAGgFAIgOQAGgOAAgKIhgAAIAAgUIBgAAQgBgPgGgJQgIgNgGgFQgKgIgKgEQgIgGgQAAQgRAAgNAGQgPAHgIALIgRgNQAMgQASgHQAUgIAUAAQAVAAAOAHQAQAGAMAMQANAOAFAOQAGAQAAAVQAAAVgHAQQgFAOgNAOQgMAMgPAGQgRAGgSAAQgrAAgbgggAtkikQgEgDAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAHgEACQgEAEgGAAQgHAAgCgEgAMcihIAAh+IAUAAIAAAjIAjAAQANAAAJAEQAGACAKAIQADADAHALQADAFAAAMQAAAJgDAJQgDAJgHAFQgEAEgMAGQgNAEgIAAgAMwizIAiAAIAAgBQAOAAAIgHQAIgIAAgLQAAgLgIgIQgIgIgOAAIgiAAgALzihIgqhlIgqBkIgWAAIA1h+IAWAAIAAABIA1B+gAjfihIgvg6IgTATIAAAnIgUAAIAAh+IAUAAIAAA/IBAg/IAbAAIg5A4IA6BGgAnnihIgqhmIgKAXIgLAbIgLAbIgKAXIgWAAIA1h+IAWAAIAAACIA1B+gAGniiIAAhrIgxAAIAAgSIB2AAIAAASIgxAAIAABrgAiHiiIAAhrIgxAAIAAgSIB2AAIAAASIgxAAIAABrgAuyiiIAAh9IBXAAIAAASIhDAAIAABrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-33.9,190.3,67.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D7").s().p("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");
	this.shape.setTransform(115.8,199.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.adress();
	this.instance.setTransform(119.9,289.9,1.05,1.05);

	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(121,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,240,400);


// stage content:
(lib.castorama_240x400_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_196 = function() {
		if(!this.loopsPlayed) {
		    this.loopsPlayed = 0;
		}
		this.loopsPlayed++; console.log(this.loopsPlayed);
		
		if (this.loopsPlayed >= 2) {
		    this.stop();    
		} else {
		    this.gotoAndPlay(197);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(196).call(this.frame_196).wait(26));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(222));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B181C").s().p("AAVAfIgHgSIgbAAIgHASIgIAAIAag9IAHAAIAZA9gAgKAGIAUAAIgKgbg");
	this.shape_1.setTransform(195,378.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B181C").s().p("AgCAfIAAg2IgVAAIAAgHIAvAAIAAAHIgUAAIAAA2g");
	this.shape_2.setTransform(190.4,378.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B181C").s().p("AASAfIAAgdIgjAAIAAAdIgIAAIAAg9IAIAAIAAAbIAjAAIAAgbIAIAAIAAA9g");
	this.shape_3.setTransform(184.5,378.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B181C").s().p("AgMAdIgKgHQgEgFgCgFQgCgEAAgIIACgLIAGgKIAKgIQAEgCAIAAIANACIAKAIQAEADACAHQACADAAAIQAAAEgCAIIgGAKIgKAHQgFADgIAAQgGAAgGgDgAgJgUQgDABgDADQgEAEgBAEQgCAEAAAEQAAAFACAFQABAFAEADQADAFADABIAJABQADAAAGgBQADgBAEgFQAEgDABgFQACgDAAgHQAAgBgCgHQgBgEgEgEQgEgDgDgBQgGgCgDgBIgJADg");
	this.shape_4.setTransform(177.7,378.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B181C").s().p("AAWAfIAAgzIgWAfIAAAAIgVgfIAAAzIgIAAIAAg9IAJAAIAUAeIAUgeIAKAAIAAA9g");
	this.shape_5.setTransform(170.3,378.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B181C").s().p("AgTAfIAAg9IAnAAIAAAHIgfAAIAAAUIAaAAIAAAFIgaAAIAAAVIAfAAIAAAIg");
	this.shape_6.setTransform(164.1,378.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B181C").s().p("AgVAfIAAg9IAXAAQAFAAADACQAGACABACIADAGIABAHIgBAHIgDAEIgHAEQgDACgFAAIgPAAIAAAZgAgNAAIAOAAQAGAAADgCQADgDAAgGQAAgFgDgDQgCgDgHAAIgOAAg");
	this.shape_7.setTransform(158.7,378.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B181C").s().p("AASAfIAAgwIgiAwIgJAAIAAg9IAJAAIAAAwIAigwIAIAAIAAA9g");
	this.shape_8.setTransform(150.2,378.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B181C").s().p("AAVAfIgHgSIgbAAIgHASIgJAAIAag9IAHAAIAaA9gAgKAGIAVAAIgLgbg");
	this.shape_9.setTransform(141.7,378.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B181C").s().p("AAVAfIAAgzIgVAfIAAAAIgVgfIAAAzIgIAAIAAg9IAJAAIAUAeIAUgeIAKAAIAAA9g");
	this.shape_10.setTransform(135,378.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B181C").s().p("AgMAdQgGgDgEgEQgEgFgCgFQgBgEAAgIQAAgGABgFIAGgKIAKgIQAEgCAIAAQAFAAAIACIAKAIQAEADACAHQABADAAAIIgBAMIgGAKQgGAFgEACQgFADgIAAQgHAAgFgDgAgJgUQgDABgDADQgEAEgBAEQgCAHAAABQAAAFACAFQABAFAEADQACAEAEACIAJABQADAAAGgBQADgBAEgFQAEgDABgFQACgFAAgFQAAgBgCgHQgBgEgEgEQgEgDgDgBQgFgCgEgBIgJADg");
	this.shape_11.setTransform(127.6,378.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B181C").s().p("AAbAlIAAgMIg1AAIAAAMIgIAAIAAgUIAIAAIAXg1IAHAAIAXA1IAIAAIAAAUgAgQARIAjAAIgTgsg");
	this.shape_12.setTransform(120.8,379.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B181C").s().p("AAOAfIAAgZIgMAAIgOAZIgJAAIARgZQgJgCgCgEQgFgCAAgJQAAgEACgDIAFgHIAFgDQAEgCAEAAIAWAAIAAA9gAgIgUQgDAFAAADQAAAFADADQACADAGAAIAPAAIAAgVIgPAAQgFAAgDACg");
	this.shape_13.setTransform(112,378.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B181C").s().p("AgdAgIAag9IAHAAIAAgBIAaA9IgJAAIgVgzIgUA0g");
	this.shape_14.setTransform(106.4,378.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B181C").s().p("AAcAlIAAgMIg2AAIAAAMIgJAAIAAgUIAKAAIAXg1IAHAAIAXA1IAIAAIAAAUgAgRARIAjAAIgSgsg");
	this.shape_15.setTransform(99.7,379.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B181C").s().p("AgCAfIAAg2IgUAAIAAgHIAtAAIAAAHIgTAAIAAA2g");
	this.shape_16.setTransform(91.2,378.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B181C").s().p("AgTAfIAAg9IAnAAIAAAHIgfAAIAAAUIAaAAIAAAFIgaAAIAAAVIAfAAIAAAIg");
	this.shape_17.setTransform(86.2,378.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B181C").s().p("AANAfIgWgcIgFAHIAAAVIgIAAIAAg9IAIAAIAAAeIAZgeIAKAAIgZAeIAbAfg");
	this.shape_18.setTransform(81.1,378.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1B181C").s().p("AgVAfIAAg9IAXAAQAFAAAEACQAFACABACIADAGIABAHIgBAHIgDAEIgGAEQgEACgFAAIgPAAIAAAZgAgLAAIANAAQAGAAAEgCQACgDAAgGQAAgGgCgCQgEgDgGAAIgNAAg");
	this.shape_19.setTransform(75.3,378.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B181C").s().p("AAUAfIgHgSIgaAAIgHASIgJAAIAag9IAHAAIAaA9gAgLAGIAWAAIgLgbg");
	this.shape_20.setTransform(69.4,378.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1B181C").s().p("AAWAfIAAgzIgWAfIAAAAIgWgfIAAAzIgHAAIAAg9IAJAAIAUAeIAUgeIAKAAIAAA9g");
	this.shape_21.setTransform(62.7,378.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B181C").s().p("AgUAfIAAg9IAXAAQAEAAADACQAFACABACIAEAGIABAHIgBAHIgEAEIgGAEQgEACgDAAIgQAAIAAAZgAgMAAIAPAAQAGAAACgCQADgDAAgGQAAgFgDgDQgDgDgFAAIgPAAg");
	this.shape_22.setTransform(56.2,378.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B181C").s().p("AgTAfIAAg9IAnAAIAAAHIgfAAIAAAUIAaAAIAAAFIgaAAIAAAVIAfAAIAAAIg");
	this.shape_23.setTransform(50.8,378.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1B181C").s().p("AARAfIAAg1IghAAIAAA1IgIAAIAAg9IAxAAIAAA9g");
	this.shape_24.setTransform(44.8,378.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1B181C").s().p("AASAfIAAgwIgiAwIgJAAIAAg9IAJAAIAAAwIAigwIAIAAIAAA9g");
	this.shape_25.setTransform(38.3,378.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1B181C").s().p("AgRAfIAAg9IAjAAIAAAHIgbAAIAAA2g");
	this.shape_26.setTransform(32.9,378.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0078D7").s().p("AhJBBIgCgBIAYgmIAQAKQAUALARgBQATABAAgKQAAgGgPgGIgegKQgugPAAgjQAAgcAagQQAVgMAXAAQAjgBAfAVIACABIgWAqQgXgRgXABQgQgBAAAKQAAAGAPAGIAeAKQAvAQAAAhQAAAWgUAQQgWATgggBQgqAAghgbg");
	this.shape_27.setTransform(75.9,362.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0078D7").s().p("AhEBCQgZgbAAgnIAAAAQAAglAZgcQAagbAiAAQAdAAATAXIAAgUIA2AAIAACyIg2AAIAAgUQgSAZgeAAQgjAAgZgcgAgcghQgMAMABAVIAAAAQAAASAMAOQALANAQgBQATAAAMgMQALgMAAgUQAAgTgMgNQgMgNgSAAQgRAAgLAMg");
	this.shape_28.setTransform(188.6,362.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0078D7").s().p("AhEBCQgZgbAAgnIAAAAQAAglAagcQAZgbAiAAQAcAAAUAXIAAgUIA2AAIAACyIg2AAIAAgUQgTAZgdAAQgjAAgZgcgAgcghQgLAMAAAVIAAAAQAAASAMAOQALANARgBQASAAALgMQALgMAAgUQAAgSgLgOQgMgNgRAAQgRAAgMAMg");
	this.shape_29.setTransform(139,362.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0078D7").s().p("AhDBCQgagbAAgnIAAAAQAAglAagcQAZgbAiAAQAcAAAUAXIAAgUIA2AAIAACyIg2AAIAAgUQgSAZgeAAQgjAAgYgcgAgcghQgLAMAAAVIAAAAQAAASALAOQANANAPgBQATAAAMgMQAMgMAAgUQAAgSgMgOQgNgNgSAAQgQAAgMAMg");
	this.shape_30.setTransform(57.3,362.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0078D7").s().p("ABRBbIAAhkQAAghgbAAQgcAAAAAhIAABkIgzAAIAAhkQAAghgbAAQgcAAAAAhIAABkIg3AAIAAiyIA3AAIAAAVQAVgYAdAAQAgAAAQAaQAXgaAhAAQAeAAAQARQAQARgBAgIAABzg");
	this.shape_31.setTransform(164.2,362.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0078D7").s().p("Ag1BbIAAiyIA1AAIAAAbQAPgfAmABIACAAIAAA2IgGAAQgZAAgNAQQgLAPAAAbIAABFg");
	this.shape_32.setTransform(123.4,362.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0078D7").s().p("AhEBCQgcgbAAgnIAAAAQAAgmAcgbQAdgbAnAAQAsAAAZAbQAcAbAAAmIAAAAQAAAngcAbQgdAbgoAAQgnAAgdgbgAgeggQgMAMAAAUIAAAAQAAASAMAOQANANARAAQATAAAMgNQAMgMAAgUQAAgSgMgNQgNgOgSAAQgSAAgMANg");
	this.shape_33.setTransform(106.5,362.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0078D7").s().p("AgWBkQgNgNAAgdIAAhRIgWAAIAAgsIAWAAIAAgtIAzAAIAAAtIApAAIAAAsIgpAAIAABKQAAAPAOAAQAMAAAMgGIAEgDIAAAsIgBABQgPALgaAAQgaAAgMgNg");
	this.shape_34.setTransform(90.1,360.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0078D7").s().p("Ag4BCQgcgcAAgmIAAAAQAAgnAcgZQAcgcAmAAQAtAAAbAeIABACIgiAkIgCgCQgRgTgWAAQgOAAgMANQgMAMABAUIAAAAQgBATAMANQAMANARAAQAUAAATgSIACgCIAhAhIgDACQgPAQgOAHQgTAKgaAAQgnAAgZgbg");
	this.shape_35.setTransform(39.5,362.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFDC00").s().p("Ag1AtQgSAAgOgNQgOgOAAgSQAAgRAOgOQAOgNASAAIBqAAQATAAAOANQAOAOAAARQAAASgOAOQgOANgTAAg");
	this.shape_36.setTransform(213,362.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(222));

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).wait(1).to({regX:121,x:121,alpha:0.007},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.985},0).wait(1).to({regX:120,x:120,alpha:1},0).wait(107).to({alpha:0},16).wait(1));

	// prices
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(123.5,93.8,1,1,0,0,0,97.8,69.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).to({_off:true},175).wait(26));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_33 = new cjs.Graphics().p("AHoV5QgYgYABghQgBghAYgXQAXgYAiAAQAhAAAXAYQAXAXAAAhQAAAhgXAYQgXAXghAAQgiAAgXgXg");
	var mask_graphics_34 = new cjs.Graphics().p("AEcWdQhLhLAAhpQAAhqBLhLQBKhKBqAAQBqAABLBKQBKBLAABqQAABphKBLQhLBLhqAAQhqAAhKhLg");
	var mask_graphics_35 = new cjs.Graphics().p("AB3W6Qh0h0AAikQAAikB0h0QB0h0CkAAQClAABzB0QB0B0AACkQAACkh0B0QhzB0ilAAQikAAh0h0g");
	var mask_graphics_36 = new cjs.Graphics().p("AgWXUQiYiYAAjXQAAjYCYiYQCWiYDXAAQDXAACYCYQCYCYAADYQAADXiYCYQiYCYjXAAQjXAAiWiYg");
	var mask_graphics_37 = new cjs.Graphics().p("AiYXrQi5i5AAkFQAAkFC5i5QC2i4EGAAQEFAAC5C4QC4C5AAEFQAAEFi4C5Qi5C4kFAAQkGAAi2i4g");
	var mask_graphics_38 = new cjs.Graphics().p("AkPYAQjXjWAAkwQAAkwDXjWQDWjXEuAAQEwAADWDXQDWDWAAEwQAAEwjWDWQjWDXkwAAQkuAAjWjXg");
	var mask_graphics_39 = new cjs.Graphics().p("Al+YUQjyjyAAlXQAAlXDyjzQDyjyFVAAQFXAADyDyQDzDzAAFXQAAFXjzDyQjyDylXAAQlVAAjyjyg");
	var mask_graphics_40 = new cjs.Graphics().p("AnlYmQkMkMAAl8QAAl7EMkMQEMkMF6AAQF7AAEMEMQEMEMAAF7QAAF8kMEMQkMEMl7AAQl6AAkMkMg");
	var mask_graphics_41 = new cjs.Graphics().p("ApFY3QkkkkAAmeQAAmeEkkkQEkkiGcAAQGeAAEkEiQEkEkAAGeQAAGekkEkQkkEkmeAAQmcAAkkkkg");
	var mask_graphics_42 = new cjs.Graphics().p("AqfZHQk7k7AAm9QAAm+E7k7QE7k5G7AAQG+AAE7E5QE7E7AAG+QAAG9k7E7Qk7E7m+AAQm7AAk7k7g");
	var mask_graphics_43 = new cjs.Graphics().p("ArzZWQlQlQAAncQAAnbFQlPQFQlPHZAAQHcAAFQFPQFQFPAAHbQAAHclQFQQlQFQncAAQnZAAlQlQg");
	var mask_graphics_44 = new cjs.Graphics().p("AtBZkQlklkAAn3QAAn3FkliQFjljH2AAQH3AAFkFjQFjFiAAH3QAAH3ljFkQlkFjn3AAQn2AAljljg");
	var mask_graphics_45 = new cjs.Graphics().p("AuFZxQl2l2AAoRQAAoRF2l0QF1l1IQAAQIRAAF1F1QF2F0AAIRQAAIRl2F2Ql1F1oRAAQoQAAl1l1g");
	var mask_graphics_46 = new cjs.Graphics().p("AutZ9QmHmHAAooQAAopGHmEQGGmGInAAQIoAAGGGGQGHGEAAIpQAAIomHGHQmGGGooAAQonAAmGmGg");
	var mask_graphics_47 = new cjs.Graphics().p("AvSaHQmVmVAAo+QAAo+GVmTQGWmWI8AAQI9AAGWGWQGVGTAAI+QAAI+mVGVQmWGWo9AAQo8AAmWmWg");
	var mask_graphics_48 = new cjs.Graphics().p("AvyaRQmjmjAApRQAApRGjmgQGjmjJPAAQJQAAGjGjQGjGgAAJRQAAJRmjGjQmjGipQAAQpPAAmjmig");
	var mask_graphics_49 = new cjs.Graphics().p("AwOaZQmumuAApiQAAphGumsQGumuJgAAQJhAAGuGuQGuGsAAJhQAAJimuGuQmuGuphAAQpgAAmumug");
	var mask_graphics_50 = new cjs.Graphics().p("AwlagQm4m4AApvQAApvG4m2QG4m4JtAAQJuAAG4G4QG4G2AAJvQAAJvm4G4Qm4G4puAAQptAAm4m4g");
	var mask_graphics_51 = new cjs.Graphics().p("Aw3alQm/m/AAp6QAAp3G/m/QG/m/J4AAQJ5AAG/G/QG/G/AAJ3QAAJ6m/G/Qm/G/p5AAQp4AAm/m/g");
	var mask_graphics_52 = new cjs.Graphics().p("AxDaoQnEnEAAqAQAAp+HEnEQHEnEJ/AAQKAAAHEHEQHEHEAAJ+QAAKAnEHEQnEHEqAAAQp/AAnEnEg");
	var mask_graphics_53 = new cjs.Graphics().p("AxHaqQnFnGgBqDQABqAHFnGQHGnGKBAAQKCAAHGHGQHGHGAAKAQAAKDnGHGQnGHFqCAAQqBAAnGnFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_graphics_33,x:62.5,y:142.5}).wait(1).to({graphics:mask_graphics_34,x:72,y:151.2}).wait(1).to({graphics:mask_graphics_35,x:79.6,y:158.3}).wait(1).to({graphics:mask_graphics_36,x:86.3,y:164.4}).wait(1).to({graphics:mask_graphics_37,x:92.3,y:170}).wait(1).to({graphics:mask_graphics_38,x:97.8,y:175.1}).wait(1).to({graphics:mask_graphics_39,x:102.9,y:179.8}).wait(1).to({graphics:mask_graphics_40,x:107.7,y:184.3}).wait(1).to({graphics:mask_graphics_41,x:112.2,y:188.4}).wait(1).to({graphics:mask_graphics_42,x:116.3,y:192.2}).wait(1).to({graphics:mask_graphics_43,x:120.2,y:195.9}).wait(1).to({graphics:mask_graphics_44,x:123.9,y:199.2}).wait(1).to({graphics:mask_graphics_45,x:126.8,y:202.3}).wait(1).to({graphics:mask_graphics_46,x:127.2,y:205.1}).wait(1).to({graphics:mask_graphics_47,x:127.6,y:207.7}).wait(1).to({graphics:mask_graphics_48,x:128,y:210}).wait(1).to({graphics:mask_graphics_49,x:128.3,y:212}).wait(1).to({graphics:mask_graphics_50,x:128.6,y:213.6}).wait(1).to({graphics:mask_graphics_51,x:128.8,y:214.9}).wait(1).to({graphics:mask_graphics_52,x:129,y:215.7}).wait(1).to({graphics:mask_graphics_53,x:129,y:216}).wait(143).to({graphics:null,x:0,y:0}).wait(26));

	// 240_2.jpg
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(119.5,256.5,1,1,0,0,0,120,82.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({_off:true},163).wait(26));

	// 240_1.jpg
	this.color_mc = new lib.Symbol3();
	this.color_mc.setTransform(119.5,256.5,1,1,0,0,0,120,82.5);
	this.color_mc.alpha = 0;
	this.color_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_mc).wait(3).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).to({_off:true},181).wait(26));

	// butt
	this.instance_3 = new lib.butt();
	this.instance_3.setTransform(120,200);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.butt(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(222));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119,199,242,402);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;