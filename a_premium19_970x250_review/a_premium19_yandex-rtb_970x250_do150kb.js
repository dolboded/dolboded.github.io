(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,590,25);


(lib.pozner = function() {
	this.initialize(img.pozner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,893,1992);// helper functions:

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


(lib.txt020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtDAQgNgHgIgNQgIgOAAgSQAAgSAIgNQAIgOANgIQANgHARAAQAPABAKADQAKAEAHAHQAHAHADAHQAEAHAAAHIgiAAIgEgEIgFgGQgFgBgHgBQgHABgGADQgFAEgDAHQgDAGAAAIQAAANAHAIQAGAHALABQAIAAAEgDQAEgCACgCIADgFIAiAAQAAAHgDAHQgEAHgGAGQgHAHgLAEQgKAFgOAAQgRAAgOgIgAiyDAQgOgHgIgNQgHgOgBgSQABgSAHgNQAIgOAOgIQANgHARAAQAPABAKADQALAEAHAHQAGAHAEAHQADAHABAHIgjAAIgDgEIgHgGQgEgBgHgBQgIABgFADQgGAEgDAHQgDAGAAAIQAAANAHAIQAHAHALABQAHAAAFgDQAEgCADgCIADgFIAiAAQgBAHgDAHQgDAHgHAGQgHAHgKAEQgLAFgPAAQgRAAgNgIgAlBDAQgOgIgIgNQgIgNAAgSQAAgSAIgNQAIgNAOgIQAOgIATAAQARAAAPAIQAOAIAIANQAIANAAASQAAASgIANQgIANgOAIQgPAHgRABQgTgBgOgHgAkvBzQgGAEgDAHQgDAGAAAIQAAAIADAHQADAGAGAEQAGAEAJAAQAIAAAFgEQAGgEAEgGQADgHAAgIQAAgIgDgGQgEgHgGgEQgFgDgIgBQgJABgGADgA02DAQgOgHgIgOQgIgPAAgVIAAgOIABgNQACgTAHgOQAHgOAPgJQAOgJAYgDIAsgHIAAAfIgsAHQgNACgIADQgIAEgEAHQgEAHgCALQAGgIAKgEQAKgFAOgBQARABAMAGQAMAIAGALQAHANAAARQAAASgIAMQgIAMgOAIQgOAHgSAAQgTAAgOgIgA0pB+QgHAGAAAMQAAALAHAHQAGAIAOAAQANAAAGgIQAHgHAAgLQAAgMgHgGQgGgIgNAAQgOAAgGAIgAyrDAQgLgHgHgNQgHgOAAgSQAAgTAHgMQAHgOALgHQAMgHAPAAQALAAAIADQAIAEAEAFIAFAGIAAgQIAjAAIAAByIgjAAIAAgRIgFAHQgEAEgIAEQgIAEgMABQgOAAgMgIgAyUBzQgGAEgDAHQgDAGAAAIQAAAIADAHQADAGAGAEQAGAEAIAAQAIAAAGgEQAGgEADgGQADgHAAgIQAAgIgDgGQgDgHgGgEQgGgDgIgBQgIABgGADgAEsDFIA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");
	this.shape.setTransform(16.575,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt020, new cjs.Rectangle(-123.5,-12.1,371.5,60.800000000000004), null);


(lib.txt010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARNC+QgPgIgIgNQgIgOAAgTQAAgTAIgOQAIgOAOgIQAPgHASAAQAUAAAOAHQAOAIAIAOQAIAOAAATIAAAHIhbAAQACAMAHAHQAJAHAMABIAMgDIAIgDIADgEIAlAAQAAAGgEAGQgEAHgIAFQgGAHgMADQgKAFgQAAQgVAAgOgJgASIB4QgDgJgGgFQgIgFgKgBQgKABgHAFQgGAFgDAJIA1AAIAAAAgAPDC+QgOgHgHgOQgJgOAAgTQAAgTAJgOQAHgOAOgIQAOgHASAAQAQAAALAEQALAEAHAIQAHAGAEAHQADAJABAGIglAAIgDgFQgDgCgEgDQgFgCgHAAQgHAAgHAEQgFAEgDAGQgDAIAAAIQAAANAHAIQAGAJANAAQAHAAAEgCQAFgCADgEIADgEIAkAAQAAAGgEAIQgEAIgGAGQgIAIgKAEQgMAEgPABQgTAAgOgJgAJvC+QgPgIgIgNQgIgOAAgTQAAgTAIgOQAIgOAOgIQAPgHATAAQASAAAPAHQAOAIAIAOQAIAOAAATIAAAHIhbAAQACAMAIAHQAIAHAMABIAMgDIAHgDIAEgEIAlAAQAAAGgFAGQgDAHgIAFQgGAHgMADQgLAFgPAAQgVAAgOgJgAKqB4QgDgJgGgFQgIgFgJgBQgLABgHAFQgGAFgDAJIA1AAIAAAAgAHcC+QgPgHgHgPQgJgPAAgXIAAgNIABgPQACgUAHgPQAIgOAPgJQAPgJAZgEIAugGIAAAfIguAHQgOACgIAFQgIADgFAIQgEAGgCAMQAGgIAKgFQAMgEAPgBQAQAAANAIQANAGAGAOQAHAMAAASQAAASgJAOQgIANgOAHQgPAHgTABQgTAAgPgJgAHqB4QgIAIABAMQgBALAIAIQAGAIAOAAQAOAAAGgIQAIgIAAgLQAAgMgIgIQgGgHgOAAQgOAAgGAHgAFMC+QgPgIgIgNQgIgOAAgTQAAgTAIgOQAIgOAOgIQAPgHATAAQASAAAPAHQAOAIAIAOQAIAOAAATIAAAHIhaAAQABAMAIAHQAIAHAMABIAMgDIAHgDIAEgEIAlAAQgBAGgEAGQgDAHgHAFQgIAHgKADQgLAFgQAAQgUAAgPgJgAGHB4QgDgJgGgFQgIgFgJgBQgLABgGAFQgIAFgCAJIA1AAIAAAAgADDC+QgOgHgJgOQgHgOgBgTQABgTAHgOQAJg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");
	this.shape.setTransform(-0.3,13.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt010, new cjs.Rectangle(-123.7,-19.1,358.9,64.1), null);


(lib.pozner_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pozner();
	this.instance.parent = this;
	this.instance.setTransform(169,-915);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pozner_1, new cjs.Rectangle(169,-915,893,1992), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(68,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-106,-149,764,173), null);


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
	this.shape.graphics.f("#EF3124").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(485.0006,125,4.0417,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,970,250), null);


(lib.Alogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjXFIIAAhZIGvAAIAABZgABvB1IgchbIipAAIgfBbIhZAAICGl7QALghAOgNQASgTAgAAQAhAAASATQAOAOAKAgICAF7gAg9gxIB3AAIg5i0IgBAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Alogo, new cjs.Rectangle(-21.5,-32.8,43.1,65.69999999999999), null);


(lib.AlfaLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuBC4IAAgyIDuAAIAAAygAjjCCIAAhBQgmgDgXgaQgYgZAAglQAAglAYgYQAXgZAmgEIAAhBIAtAAIAABBQAmAEAYAZQAXAYAAAlQAAAlgXAaQgYAZgmADIAABBgAi2AXQASgDALgNQALgMAAgVQAAgTgLgNQgLgNgSgDgAkAg6QgLANAAATQAAAVALAMQALANASADIAAhhQgSADgLANgAF5AwQgSgRAAgaQAAgaARgPQAQgOAeAAIAsAAQAAgdgcAAQgZAAgEARIgtAAQABgXATgRQAUgRAiAAQAiAAATATQAUASAAAgIAAA5QAAAOAKAAIAAAnIgOAAQgcAAgIgSQgPAXgiAAQgcAAgRgRgAGVAFQAAAXAcgBQAPABAJgJQAJgIAAgOIAAgLIgjAAQgagBAAAUgAhBAwQgRgRAAgaQAAgaAQgPQARgOAdAAIArAAQAAgdgbAAQgOAAgIAGQgGAFgBAGIgtAAQABgXATgRQAVgRAhAAQAhAAATATQATASAAAgIAAA5QAAAOAMAAIAAAnIgQAAQgbAAgJgSQgPAXggAAQgcAAgRgRgAglAFQAAAXAcgBQAOABAJgJQAJgIAAgOIAAgLIgjAAQgZgBAAAUgANIA8IhBhIIAABIIgtAAIAAirIAtAAIAABEIA9hEIA4AAIhLBSIBRBZgAKMA8IAAhCIg9AAIAABCIgsAAIAAirIAsAAIAABAIA9AAIAAhAIAtAAIAACrgAChA8IAAjxIChAAIAAAtIhzAAIAAAxIAyAAQAoAAAWAUQAWATAAAjQAAAigWAUQgWAUgogBgADPARIAwAAQAmAAAAgeQAAgggmAAIgwAAgAnVA8IAAirIAsAAIAAA0IAgAAQAgAAASAPQAQAPAAAdQAAAZgOAQQgSAUghgBgAmpAXIAdAAQAYAAAAgXQAAgUgYgBIgdAAgAokA8IAAiEIgqAAIgCA7QgBAngMAQQgMASghAAIgHAAIAAgoQAOAAAFgHQAEgIABgXIADhdIB/AAIAACrgArMA8IgQgxIheAAIgQAxIgyAAIBKjPQAHgSAHgIQAKgKASAAQASAAAKAKQAHAIAGASIBGDPgAsrgeIBBAAIgfhjIgBAAg");
	this.shape.setTransform(29.775,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.AlfaLogo, new cjs.Rectangle(-60,-5,179.6,36.8), null);


(lib.TXT02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt010
	this.instance = new lib.txt020();
	this.instance.parent = this;
	this.instance.setTransform(100,35);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:120,alpha:1},25,cjs.Ease.quadOut).wait(76).to({x:100,alpha:0},26,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-1,293.2,93.9);


(lib.TXT01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt010
	this.instance = new lib.txt010();
	this.instance.parent = this;
	this.instance.setTransform(100,35);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:120,alpha:1},31,cjs.Ease.quadOut).wait(30).to({x:100,alpha:0},25,cjs.Ease.cubicIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,0,259.4,92.9);


(lib.LegalMOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal_1();
	this.instance.parent = this;
	this.instance.setTransform(106,44);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:24,alpha:1},25,cjs.Ease.cubicOut).wait(55).to({y:44,alpha:0},26,cjs.Ease.cubicIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(174,-125,590,45);


(lib.AlogoMOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Alogo();
	this.instance.parent = this;
	this.instance.setTransform(0,-20);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},25,cjs.Ease.cubicOut).wait(64).to({y:20,alpha:0},27,cjs.Ease.cubicIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-52.8,43.1,105.69999999999999);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.AlfaLogo();
	this.instance.parent = this;
	this.instance.setTransform(81,30);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(236).to({alpha:0},25).to({_off:true},1).wait(125));

	// A
	this.instance_1 = new lib.AlogoMOV("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(486,102.95,1.67,1.67);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(277).to({_off:false},0).to({_off:true},123).wait(1));

	// LEGAL
	this.instance_2 = new lib.LegalMOV("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(122.5,353,1,1,0,0,0,105.5,24);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(288).to({_off:false},0).to({_off:true},112).wait(1));

	// TXT02
	this.instance_3 = new lib.TXT02("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(174.5,137.25,1.87,1.87,0,0,0,82.1,37.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(146).to({_off:false},0).to({_off:true},130).wait(125));

	// TXT01
	this.instance_4 = new lib.TXT01("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(175.15,150.25,1.8699,1.8699,0,0,0,82.3,37.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({_off:true},109).wait(287));

	// POZDNER
	this.instance_5 = new lib.pozner_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(405.2,-297.95,0.65,0.65,0,0,0,0.3,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({x:285.2,alpha:1},33,cjs.Ease.quadOut).wait(27).to({regX:615.5,regY:81,rotation:0.0003,x:685,y:-245.25},0).wait(1).to({scaleX:0.6501,scaleY:0.6501,rotation:0.0013,y:-245.1},0).wait(1).to({scaleX:0.6502,scaleY:0.6502,rotation:0.003,y:-244.85},0).wait(1).to({scaleX:0.6503,scaleY:0.6503,rotation:0.0055,y:-244.4},0).wait(1).to({scaleX:0.6505,scaleY:0.6505,rotation:0.0086,y:-243.85},0).wait(1).to({scaleX:0.6507,scaleY:0.6507,rotation:0.0125,x:684.95,y:-243.2},0).wait(1).to({scaleX:0.651,scaleY:0.651,rotation:0.0172,y:-242.4},0).wait(1).to({scaleX:0.6514,scaleY:0.6514,rotation:0.0227,x:684.9,y:-241.45},0).wait(1).to({scaleX:0.6517,scaleY:0.6517,rotation:0.0291,x:684.85,y:-240.35},0).wait(1).to({scaleX:0.6522,scaleY:0.6522,rotation:0.0363,x:684.8,y:-239.1},0).wait(1).to({scaleX:0.6527,scaleY:0.6527,rotation:0.0443,x:684.75,y:-237.8},0).wait(1).to({scaleX:0.6532,scaleY:0.6532,rotation:0.0533,x:684.7,y:-236.25},0).wait(1).to({scaleX:0.6538,scaleY:0.6538,rotation:0.0632,x:684.65,y:-234.55},0).wait(1).to({scaleX:0.6545,scaleY:0.6545,rotation:0.0741,x:684.6,y:-232.7},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:0.086,x:684.45,y:-230.7},0).wait(1).to({scaleX:0.656,scaleY:0.656,rotation:0.0989,y:-228.45},0).wait(1).to({scaleX:0.6568,scaleY:0.6568,rotation:0.1129,x:684.35,y:-226.05},0).wait(1).to({scaleX:0.6577,scaleY:0.6577,rotation:0.128,x:684.3,y:-223.45},0).wait(1).to({scaleX:0.6587,scaleY:0.6587,rotation:0.1443,x:684.15,y:-220.75},0).wait(1).to({scaleX:0.6598,scaleY:0.6598,rotation:0.1618,x:684.05,y:-217.7},0).wait(1).to({scaleX:0.6609,scaleY:0.6609,rotation:0.1805,x:683.95,y:-214.5},0).wait(1).to({scaleX:0.6621,scaleY:0.6621,rotation:0.2005,x:683.8,y:-211.15},0).wait(1).to({scaleX:0.6634,scaleY:0.6634,rotation:0.2218,x:683.7,y:-207.45},0).wait(1).to({scaleX:0.6648,scaleY:0.6648,rotation:0.2445,x:683.5,y:-203.6},0).wait(1).to({scaleX:0.6663,scaleY:0.6663,rotation:0.2687,x:683.35,y:-199.5},0).wait(1).to({scaleX:0.6678,scaleY:0.6678,rotation:0.2944,x:683.25,y:-195.1},0).wait(1).to({scaleX:0.6695,scaleY:0.6695,rotation:0.3216,x:683.05,y:-190.4},0).wait(1).to({scaleX:0.6712,scaleY:0.6712,rotation:0.3505,x:682.9,y:-185.5},0).wait(1).to({scaleX:0.6731,scaleY:0.6731,rotation:0.3811,x:682.7,y:-180.25},0).wait(1).to({scaleX:0.6751,scaleY:0.6751,rotation:0.4135,x:682.45,y:-174.7},0).wait(1).to({scaleX:0.6771,scaleY:0.6771,rotation:0.4478,x:682.25,y:-168.85},0).wait(1).to({scaleX:0.6793,scaleY:0.6793,rotation:0.484,x:682.05,y:-162.65},0).wait(1).to({scaleX:0.6816,scaleY:0.6816,rotation:0.5223,x:681.8,y:-156.15},0).wait(1).to({scaleX:0.6841,scaleY:0.6841,rotation:0.5627,x:681.55,y:-149.2},0).wait(1).to({scaleX:0.6867,scaleY:0.6867,rotation:0.6054,x:681.25,y:-141.9},0).wait(1).to({scaleX:0.6894,scaleY:0.6894,rotation:0.6504,x:681,y:-134.2},0).wait(1).to({scaleX:0.6923,scaleY:0.6923,rotation:0.6979,x:680.7,y:-126.05},0).wait(1).to({scaleX:0.6953,scaleY:0.6953,rotation:0.748,x:680.4,y:-117.45},0).wait(1).to({scaleX:0.6985,scaleY:0.6985,rotation:0.8008,x:680.05,y:-108.4},0).wait(1).to({scaleX:0.7019,scaleY:0.7019,rotation:0.8565,x:679.7,y:-98.85},0).wait(1).to({scaleX:0.7054,scaleY:0.7054,rotation:0.9153,x:679.35,y:-88.7},0).wait(1).to({scaleX:0.7092,scaleY:0.7092,rotation:0.9772,x:678.95,y:-78.1},0).wait(1).to({scaleX:0.7132,scaleY:0.7132,rotation:1.0426,x:678.55,y:-66.9},0).wait(1).to({scaleX:0.7173,scaleY:0.7173,rotation:1.1114,x:678.1,y:-55.05},0).wait(1).to({scaleX:0.7218,scaleY:0.7218,rotation:1.184,x:677.65,y:-42.55},0).wait(1).to({scaleX:0.7264,scaleY:0.7264,rotation:1.2605,x:677.1,y:-29.4},0).wait(1).to({scaleX:0.7313,scaleY:0.7313,rotation:1.3411,x:676.6,y:-15.5},0).wait(1).to({scaleX:0.7364,scaleY:0.7364,rotation:1.4261,x:676,y:-0.85},0).wait(1).to({scaleX:0.7418,scaleY:0.7418,rotation:1.5156,x:675.45,y:14.5},0).wait(1).to({scaleX:0.7476,scaleY:0.7476,rotation:1.6098,x:674.9,y:30.8},0).wait(1).to({scaleX:0.7535,scaleY:0.7535,rotation:1.7088,x:674.2,y:47.85},0).wait(1).to({scaleX:0.7599,scaleY:0.7599,rotation:1.8129,x:673.5,y:65.85},0).wait(1).to({scaleX:0.7665,scaleY:0.7665,rotation:1.9222,x:672.75,y:84.7},0).wait(1).to({scaleX:0.7734,scaleY:0.7734,rotation:2.0367,x:672,y:104.5},0).wait(1).to({scaleX:0.7807,scaleY:0.7807,rotation:2.1563,x:671.15,y:125.25},0).wait(1).to({scaleX:0.7882,scaleY:0.7882,rotation:2.281,x:670.3,y:146.85},0).wait(1).to({scaleX:0.7961,scaleY:0.7961,rotation:2.4106,x:669.45,y:169.35},0).wait(1).to({scaleX:0.8042,scaleY:0.8042,rotation:2.5447,x:668.55,y:192.65},0).wait(1).to({scaleX:0.8126,scaleY:0.8126,rotation:2.6827,x:667.55,y:216.6},0).wait(1).to({scaleX:0.8211,scaleY:0.8211,rotation:2.824,x:666.55,y:241.2},0).wait(1).to({scaleX:0.8299,scaleY:0.8299,rotation:2.9677,x:665.55,y:266.25},0).wait(1).to({scaleX:0.8387,scaleY:0.8387,rotation:3.1129,x:664.5,y:291.6},0).wait(1).to({scaleX:0.8475,scaleY:0.8475,rotation:3.2584,x:663.5,y:316.95},0).wait(1).to({scaleX:0.8563,scaleY:0.8563,rotation:3.4031,x:662.5,y:342.25},0).wait(1).to({scaleX:0.8649,scaleY:0.8649,rotation:3.546,x:661.35,y:367.15},0).wait(1).to({scaleX:0.8734,scaleY:0.8734,rotation:3.6858,x:660.4,y:391.7},0).wait(1).to({scaleX:0.8816,scaleY:0.8816,rotation:3.8218,x:659.4,y:415.5},0).wait(1).to({scaleX:0.8896,scaleY:0.8896,rotation:3.9532,x:658.45,y:438.6},0).wait(1).to({scaleX:0.8972,scaleY:0.8972,rotation:4.0793,x:657.45,y:460.75},0).wait(1).to({scaleX:0.9046,scaleY:0.9046,rotation:4.1998,x:656.55,y:481.85},0).wait(1).to({scaleX:0.9115,scaleY:0.9115,rotation:4.3144,x:655.65,y:502.05},0).wait(1).to({scaleX:0.9181,scaleY:0.9181,rotation:4.423,x:654.85,y:521.15},0).wait(1).to({scaleX:0.9243,scaleY:0.9243,rotation:4.5256,x:654,y:539.3},0).wait(1).to({scaleX:0.9301,scaleY:0.9301,rotation:4.6222,x:653.3,y:556.3},0).wait(1).to({scaleX:0.9356,scaleY:0.9356,rotation:4.713,x:652.55,y:572.3},0).wait(1).to({scaleX:0.9408,scaleY:0.9408,rotation:4.7983,x:651.95,y:587.4},0).wait(1).to({scaleX:0.9457,scaleY:0.9457,rotation:4.8782,x:651.3,y:601.45},0).wait(1).to({scaleX:0.9502,scaleY:0.9502,rotation:4.953,x:650.65,y:614.7},0).wait(1).to({scaleX:0.9544,scaleY:0.9544,rotation:5.023,x:650.15,y:627.05},0).wait(1).to({scaleX:0.9584,scaleY:0.9584,rotation:5.0883,x:649.6,y:638.55},0).wait(1).to({scaleX:0.9621,scaleY:0.9621,rotation:5.1492,x:649.1,y:649.4},0).wait(1).to({scaleX:0.9655,scaleY:0.9655,rotation:5.2061,x:648.65,y:659.45},0).wait(1).to({scaleX:0.9687,scaleY:0.9687,rotation:5.259,x:648.25,y:668.85},0).wait(1).to({scaleX:0.9717,scaleY:0.9717,rotation:5.3083,x:647.8,y:677.55},0).wait(1).to({scaleX:0.9745,scaleY:0.9745,rotation:5.3541,x:647.5,y:685.7},0).wait(1).to({scaleX:0.9771,scaleY:0.9771,rotation:5.3966,x:647.1,y:693.25},0).wait(1).to({scaleX:0.9795,scaleY:0.9795,rotation:5.4361,x:646.8,y:700.25},0).wait(1).to({scaleX:0.9817,scaleY:0.9817,rotation:5.4726,x:646.45,y:706.65},0).wait(1).to({scaleX:0.9837,scaleY:0.9837,rotation:5.5063,x:646.25,y:712.65},0).wait(1).to({scaleX:0.9856,scaleY:0.9856,rotation:5.5374,x:645.95,y:718.2},0).wait(1).to({scaleX:0.9873,scaleY:0.9873,rotation:5.566,x:645.75,y:723.3},0).wait(1).to({scaleX:0.9889,scaleY:0.9889,rotation:5.5923,x:645.55,y:727.9},0).wait(1).to({scaleX:0.9904,scaleY:0.9904,rotation:5.6163,x:645.3,y:732.2},0).wait(1).to({scaleX:0.9917,scaleY:0.9917,rotation:5.6382,x:645.15,y:736.1},0).wait(1).to({scaleX:0.9929,scaleY:0.9929,rotation:5.6581,x:644.95,y:739.65},0).wait(1).to({scaleX:0.994,scaleY:0.994,rotation:5.6761,x:644.85,y:742.8},0).wait(1).to({scaleX:0.995,scaleY:0.995,rotation:5.6922,x:644.7,y:745.7},0).wait(1).to({scaleX:0.9959,scaleY:0.9959,rotation:5.7066,x:644.6,y:748.25},0).wait(1).to({scaleX:0.9966,scaleY:0.9966,rotation:5.7193,x:644.45,y:750.45},0).wait(1).to({scaleX:0.9973,scaleY:0.9973,rotation:5.7304,x:644.35,y:752.5},0).wait(1).to({scaleX:0.9979,scaleY:0.9979,rotation:5.74,x:644.25,y:754.15},0).wait(1).to({scaleX:0.9984,scaleY:0.9984,rotation:5.7481,x:644.2,y:755.6},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,rotation:5.7549,y:756.85},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,rotation:5.7603,x:644.15,y:757.75},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:5.7644,x:644.05,y:758.55},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,rotation:5.7673,y:759},0).wait(1).to({regX:0.3,regY:0.1,rotation:5.769,x:40.3,y:617.15},0).wait(79).to({x:90.3,alpha:0},25,cjs.Ease.quadIn).to({_off:true},1).wait(125));

	// BG
	this.instance_6 = new lib.BG();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(401));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-1467.2,1316.1,3270.5);


// stage content:
(lib.a_premium19_yandexrtb_970x250_do150kb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DADADA").ss(2,1,1).p("EhLxgThMCXjAAAMAAAAnDMiXjAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485,125,4.0417,0.625);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_1.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484,124,487,127);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"legal.png", id:"legal"},
		{src:"pozner.jpg", id:"pozner"}
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