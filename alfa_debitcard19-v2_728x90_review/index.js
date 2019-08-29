(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[760,0,246,165],[0,1969,329,60],[331,1969,343,47],[0,0,758,1967]]}
];


// symbols:



(lib.card = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.legal1 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legal2 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shade = function() {
	this.initialize(ss["index_atlas_P_"]);
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


(lib.txtAlfaCard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHnCEIAojJIAsAAIgDAVQADgGAGgFQAGgGAJgDQAIgEAMgBQARABANAHQANAJAIAPQAIAPgBAVQAAAZgKASQgKATgRAKQgRALgUgBQgOABgKgEQgKgFgGgFQgGgGgDgGIgPBQgAI/gcQgIAGgFAJQgFAJAAAKQAAAPAIAJQAJAJANAAQAMAAAJgGQAJgGAEgJQAFgKAAgKQAAgOgJgJQgHgJgOAAQgMAAgJAGgAlvCDIALg1QgWAAgQgJQgPgHgKgPQgIgOgBgUQAAgXAMgTQALgUAWgLQAXgMAhgBIAMg5IAtAAIgLA5QAWABAQAHQAQAJAJAOQAJAPAAATQAAAXgMATQgLATgXANQgWALgiABIgKA1gAkvAoQAQgCAKgGQALgFAFgLQAGgKgBgKQAAgNgIgJQgIgHgQgCgAlogcQgLAHgFAKQgGAKAAAKQAAANAJAJQAIAHAQACIAPhLQgPACgLAFgANlBFQgMgHgHgPQgHgPAAgUQAAgaAKgTQAKgTARgKQARgKAVgBQANABAJAEQAJADAHAGQAFAFADAGIAEgVIAtAAIgdCQIgsAAIAFgWQgEAGgGAGQgGAFgKAEQgJADgLAAQgRABgNgJgAOJgcQgIAGgEAKQgFAJAAAKQAAAOAIAJQAIAJAOAAQALAAAJgGQAIgGAEgKQAEgJABgKQgBgOgHgJQgIgJgOAAQgLAAgJAGgAFiBFQgMgHgIgPQgHgPAAgUQABgaAJgTQALgTAQgKQASgKAVgBQAMABAKAEQAJADAGAGQAGAFADAGIADgVIAtAAIgcCQIgsAAIAEgWQgEAGgGAGQgGAFgJAEQgJADgMAAQgQABgNgJgAGFgcQgHAGgFAKQgEAJgBAKQABAOAHAJQAJAJAOAAQAKAAAJgGQAIgGAEgKQAFgJAAgKQAAgOgHgJQgJgJgOAAQgLAAgJAGgAinBFQgMgHgIgPQgHgPAAgUQABgaAJgTQALgTAQgKQASgKAVgBQAMABAJAEQAKADAGAGQAGAFADAGIADgVIAtAAIgcCQIgsAAIAEgWQgEAGgGAGQgGAFgJAEQgJADgMAAQgQABgNgJgAiEgcQgHAGgFAKQgEAJgBAKQABAOAHAJQAJAJAOAAQAKAAAJgGQAIgGAEgKQAFgJAAgKQAAgOgHgJQgJgJgOAAQgLAAgJAGgAsWBLIAJgqIADAAQAHABAFgCQAEgDADgGQAEgFACgLIAXhMIB9AAIgdCQIgtAAIAWhqIgqAAIgNAtQgHAWgHAOQgIANgMAGQgMAGgUAAgALPBLIAVhqIg2AAIAHgmICaAAIgIAmIg2AAIgVBqgAD+BLIhPhZIgRBZIgvAAIAmjGIAwAAIgRBVIBohVIBAAAIh5BjIBXBjgApbBLIAciQIAtAAIgIArIAmAAQAdAAAOANQAOAMAAAVQAAAPgIAMQgIANgQAHQgOAIgWAAgAooAoIAnAAQALAAAHgGQAFgEAAgIQABgGgFgEQgEgEgJAAIgnAAgAtIBLIgJgjIhdAAIgUAjIgyAAIB5jIIAwAAIAzDIgAtbAAIgShFIgpBFIA7AAgAgHALIAIgpIBdAAIgIApg");
	this.shape.setTransform(-34.7,4.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtAlfaCard, new cjs.Rectangle(-137,-24.6,205.3,47), null);


(lib.txt03_7percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHjIXQgvgrAAhHQAAghANgfQANgfAXgZQAYgZAggOQAjgPAnAAQBKAAAuArQAvAsAABGQAAAigNAfQgMAggYAYQg0A2hOAAQhJAAgvgsgAIzFxQgTAVAAAfQAAAZAQAQQARARAaAAQAgAAAUgXQATgUAAgeQAAgagQgQQgQgRgbAAQggAAgUAWgArLI6IH1uOIo3AAIAAjuIOBAAIAACtIoJPPgAAuI2IJEpoICCAAIpEJogABADjQgvgsAAhGQAAghANgfQANggAXgXQAZgaAggOQAigPAnAAQBKAAAuArQAwAsAABFQAAAhgNAgQgNAfgXAZQg0A3hOAAQhKgBgvgrgACRA9QgTAVAAAeQAAAZAQAQQAQAQAbAAQAfABAUgWQATgVAAgfQAAgZgQgPQgQgRgbAAQgfAAgUAWg");
	this.shape.setTransform(0.225,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03_7percent, new cjs.Rectangle(-78.2,-58,156.7,115.9), null);


(lib.txt01_3percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJQIrQgvgsAAhHQAAggAMggQANgfAYgYQAYgaAggOQAigPAoAAQBJAAAvArQAvAsAABHQAAAhgNAfQgNAggXAYQg0A3hOAAQhKAAgugsgAKgGEQgTAVAAAfQAAAZAQAQQAQARAbAAQAfAAAUgWQAUgVAAgeQAAgagQgQQgRgRgaAAQggAAgUAWgAsVHXQgygxgahCQgXg6gChBIEbAAQACATAKAUQALAWAUARQAxArBVAAQBiAAA0grQAwgoAAhCQAAg2gkgcQgigbhDAAIjXAAIAvjlIDdAAQBEAAAmgiQAkggAAg2QAAg3gngeQgngehGAAQhMAAgxAoQglAfgNAqIkOAAQAIg/Aeg7QAgg+A2gwQA7g0BPgcQBWgfBpAAQDHAABxBRQBxBSAACUQAABuhLBJQgeAegnAUQgiARgiAHQA9AcAlA0QArBAAABbQAABMgeBEQgdBGg6A0Qg9A4hWAeQhcAghyAAQjtAAh6h2gACbJJIJDpoICDAAIpFJogACtD2QgvgsAAhGQAAghANgfQANggAXgYQAYgZAggOQAjgOAnAAQBKAAAuAqQAvAsAABGQAAAhgNAfQgMAggYAYQgzA3hPAAQhJAAgvgsgAD+BQQgUAVAAAeQAAAaAQAQQARAQAaAAQAgAAAUgWQATgVAAgeQAAgZgQgQQgQgRgbAAQgfAAgUAWg");
	this.shape.setTransform(0.075,-0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt01_3percent, new cjs.Rectangle(-89.1,-60,178.3,119.9), null);


(lib.logoVISA_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBaIAJgqQAZAMAaAAQAMAAAIgFQAKgFAAgJQAAgHgFgFQgGgFgPgHQgtgWABgeQAAgdAYgSQAYgSAlAAQAZAAAWAJIgJApQgagMgXADQgLACgFAFQgGAEAAAGQAAAIAkAUQAjATAAAdQAAAfgYASQgYASgoAAQghAAgWgLgAEKBiIgGgdIhBAAIgLAdIg1AAIBMi0QAGgOAPAAIAsAAIAoDCgADRAdIAqAAIgPhJgAheBiIAqjCIAyAAIgqDCgAjRBiIgoibQgDgMgJgFQgSgJgggIIABgFIBWAAQAIAAAHAFQAGAFACAJIAVBwIA1iDIA1AAIhSDCg");
	this.shape.setTransform(0.225,0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoVISA_white, new cjs.Rectangle(-31,-10,62.5,20.2), null);


(lib.logoA_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheCXIAAgnIC9AAIAAAngAAwA0IgMgpIhHAAIgNApIgqAAIA9i1QAEgMAMgGQALgGAMAEQAPAGAEAOIA9C1gAgagVIA0AAIgZhQIgBAAg");
	this.shape.setTransform(0.525,0.12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoA_white, new cjs.Rectangle(-9,-15,19.1,30.3), null);


(lib.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg5eAAVIAAgpMBy9AAAIAAApg");
	this.shape.setTransform(209.475,-176.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lines, new cjs.Rectangle(-158.4,-178.3,735.8,4.300000000000011), null);


(lib.legal2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal2();
	this.instance.parent = this;
	this.instance.setTransform(-55,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal2_1, new cjs.Rectangle(-55,-163,343,47), null);


(lib.legal1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal1();
	this.instance.parent = this;
	this.instance.setTransform(-55,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal1_1, new cjs.Rectangle(-55,-170,329,60), null);


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(-51,-37,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_1, new cjs.Rectangle(-51,-37,123,82.5), null);


(lib.butt_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtHC0QgkABgigOQgggOgZgaQgZgYgOghQgOghAAglQAAgjAOgjQAOgfAZgaQAZgYAggOQAigOAkgBIaPAAQAkABAiAOQAgAOAZAYQAZAaAOAfQAOAjAAAjQAAAlgOAhQgOAhgZAYQgZAaggAOQgiAOgkgBgACGgRQgLAMAAARQAAATALAMQALALAPgBQAMABAHgHQAGgEACgEIAAANIATAAIAAhPIgUAAIAAAMQgBgEgGgDQgIgGgLAAQgPAAgLALgAAlAsQAMAKASgBQASABAKgIQAKgGAAgMQABgHgFgEQgEgFgGgBQAFgBAEgEQADgGAAgFQAAgLgJgGQgJgGgSAAQgRAAgLAIQgKAHgBALIATAAQAFgKAPAAQAHAAAFACQAEACABAFQAAAHgOABIgMAAIAAAOIANAAQAOAAAAAIQAAAGgFACQgEACgJAAQgJAAgGgDQgFgDgBgFIgUAAQABALAKAHgAhDgRQgLAMABARQgBATALAMQALALAQgBQAKABAIgHQAGgEACgEIAAANIATAAIAAhPIgTAAIAAAMQgCgEgGgDQgIgGgKAAQgQAAgLALgAkMgRQgMAMAAARQAAATAMAMQAKALAQgBQALABAIgHQAGgEABgEIAAANIAVAAIAAhPIgVAAIAAAMQgCgEgFgDQgJgGgKAAQgQAAgKALgAmEAqQAPAMAZgBQAXAAAOgJQANgJAAgRQAAgJgGgHQgGgFgJgCQAIgCAEgGQAGgHAAgJQAAgOgLgJQgNgIgXAAQgYAAgPALQgLAJgCANIAVAAQADgGAHgEQAIgEANAAQAaAAAAAOQgBAPgVAAIgRAAIAAAQIARAAQAYAAABANQgBAJgHAEQgIAEgNAAQgOABgIgGQgHgEgDgHIgVAAQABAOAMAKgAFGA0IAtAAQAPAAAIgJQAIgHAAgMQAAgMgIgHQgHgHgQAAIgaAAIAAgZIgTAAgADigKIAeAAIAAA+IAUAAIAAg+IAfAAIAAgRIhRAAgAhVA0IgsgqIArglIgaAAIglAhIAAghIgUAAIAABPIAUAAIAAgkIAmAkIAaAAgACVAdQgFgHgBgKQABgKAFgGQAHgGAKAAQAJAAAGAGQAGAGAAAKQAAAKgGAHQgGAHgJAAQgKAAgHgHgAgzAdQgHgHAAgKQAAgKAHgGQAGgGAJAAQALAAAFAGQAHAGAAAKQAAAKgHAHQgFAHgLAAQgJAAgGgHgAj9AdQgGgHAAgKQAAgKAGgGQAGgGAKAAQAJAAAHAGQAGAGgBAKQABAKgGAHQgHAHgJAAQgKAAgGgHgAFZAjIAAgVIAWAAQAIAAADADQADACABAFQgBALgOAAg");
	this.shape.setTransform(0,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt_white, new cjs.Rectangle(-102.2,-20.4,204.7,41.2), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.BG_white_First = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF2424").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shade
	this.instance = new lib.shade();
	this.instance.parent = this;
	this.instance.setTransform(788.8,-77,0.4769,0.4397,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG_white_First, new cjs.Rectangle(-76,-77,864.8,361.5), null);


(lib.BG_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// butt
	this.instance = new lib.butt_white();
	this.instance.parent = this;
	this.instance.setTransform(552.15,44.15,0.8,0.8,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// VISA-LOGO White
	this.instance_1 = new lib.logoVISA_white();
	this.instance_1.parent = this;
	this.instance_1.setTransform(694.05,75.05,0.6,0.6,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// A-LOGO White
	this.instance_2 = new lib.logoA_white();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25,20,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF2E24").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(364.0009,45.0012,3.0333,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shade
	this.instance_3 = new lib.shade();
	this.instance_3.parent = this;
	this.instance_3.setTransform(795.8,-77,0.4769,0.4397,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG_red, new cjs.Rectangle(-69,-77,864.8,361.5), null);


(lib.Frame005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txtAlfaCard
	this.instance = new lib.txtAlfaCard();
	this.instance.parent = this;
	this.instance.setTransform(84,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-203,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(195));

	// card
	this.instance_1 = new lib.card_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(235,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-204,alpha:0},14,cjs.Ease.cubicIn).to({_off:true},1).wait(195));

	// Legal copy
	this.instance_2 = new lib.legal2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3,-10);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({y:-20,alpha:1},14,cjs.Ease.cubicOut).wait(68).to({_off:true},1).wait(23));

	// Legal
	this.instance_3 = new lib.legal1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3,-10);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:-20,alpha:1},14,cjs.Ease.cubicOut).wait(71).to({y:-30,alpha:0},14,cjs.Ease.cubicIn).wait(77).to({_off:true},1).wait(23));

	// BG_red
	this.instance_4 = new lib.BG_red();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2,-5,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(186).to({_off:true},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-282,864.8,361.5);


(lib.Frame004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TXT copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(45.9417,-163.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ar+m2IAAloIX9AAIAAFog");
	mask.setTransform(15.9627,-79.925);

	// lines
	this.instance = new lib.lines();
	this.instance.parent = this;
	this.instance.setTransform(-664,42);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:620.5},84,cjs.Ease.quadInOut).wait(1));

	// BG_white
	this.instance_1 = new lib.BG_red();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,-5,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},83).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196,-282,864.8,361.5);


(lib.Frame003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt03_7percent();
	this.instance.parent = this;
	this.instance.setTransform(234.95,-159.95,0.64,0.64,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TXT copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(32.925,-155.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// BG_red
	this.instance_1 = new lib.BG_red();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,-5,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-282,864.8,361.5);


(lib.Frame002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt01_3percent
	this.instance = new lib.txt01_3percent();
	this.instance.parent = this;
	this.instance.setTransform(222.5,-161.65,0.64,0.64,0,0,0,0.8,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TXT copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG1ECIAIgpIhnAAIgIApIgpAAIAQhPIAOAAQAIgJAHgOQAHgPAIgWIAOgvIB7AAIgVBrIAYAAIgPBPgAGKB5QgHAWgGAOQgGANgHAJIA4AAIAOhFIgpAAgAIdDUQgRgJgKgQQgJgQAAgWQAAgXALgSQALgSASgLQATgLAXAAQAWAAARAJQARAJAKAQQAJAQAAAWQAAAXgLATQgLASgSAKQgTAKgXAAQgWAAgRgIgAI3BxQgJAHgEAJQgFAJAAALQAAAPAJAJQAIAIAOABQAMgBAIgGQAJgFAEgKQAFgJAAgLQAAgPgIgIQgIgJgPgBQgMABgIAFgAB/DUQgRgJgJgQQgJgPAAgVQABgYAKgSQALgTASgLQATgLAYAAQAYAAARAJQASAKAIASQAIASgEAZIgBAFIhtAAQAAAPAIAIQAJAJAPAAQAIABAGgDQAGgCADgDIAFgEIAsAAQgBAHgFAHQgFAJgJAGQgJAIgNAFQgNAEgRAAQgZAAgQgIgADNB9QgCgMgIgGQgIgGgMAAQgMAAgJAGQgJAHgEALIBAAAIAAAAgAgfDUQgRgIgJgQQgJgPAAgWQAAgYALgTQAKgSASgLQATgLAWAAQATABANAFQAOAFAIAIQAIAJADAJQAEAKABAIIgsAAIgEgGQgDgDgFgDQgGgDgIgBQgLABgHAFQgIAGgEAKQgFAJAAALQAAAPAIAJQAHAIAMABQAIAAAGgEQAGgCADgDIAEgGIAsAAQgCAIgFAJQgFAJgIAJQgJAIgMAFQgNAFgRAAQgVAAgQgIgAnDDUQgNgHgHgPQgHgPAAgVQAAgbAKgSQAKgUARgKQARgJAVgBQANABAJADQAKADAGAGQAGAGACAFIAEgVIAtAAIgcCRIgsAAIAEgVQgEAGgGAFQgGAFgJAFQgJADgMAAQgQAAgNgIgAmgBxQgIAHgEAJQgFAJAAALQABAOAHAKQAIAIAOABQALgBAJgGQAIgGAEgJQAFgJAAgMQAAgNgIgKQgIgIgOgBQgLABgJAFgAjyDZIAciRIBaAAQAVAAAMAJQAMAJAAARQAAAOgIAJQgIAJgMADQAIADAGAGQAGAIAAAKQgBAWgQANQgRAMgdABgAi/C5IAmAAQAKAAAFgEQAGgEAAgHQAAgFgEgDQgFgDgHAAIgmAAgAi0CBIAjAAQAKAAAFgEQAFgDAAgIQAAgEgEgEQgEgDgHAAIgjAAgAouDZIALg4Ig7AAIgKA4IgtAAIAciRIAtAAIgKA0IA6AAIAKg0IAtAAIgcCRgADAA1IAIgsIAsAAIgJAsgACAA1IAIgsIAsAAIgIAsgACYgzQgNgGgIgIQgJgIgDgJQgEgJgBgJIAsAAQABAEADADQADAEAGAEQAGACAJAAQAMAAAIgFQAIgHAEgLIgyAAIAHghIAuAAQgDgMgHgFQgHgGgKAAQgJABgGADQgGADgEADIgFAHIgrAAQACgIAEgKQAGgIAIgJQAJgHANgGQANgFASAAQAWAAAQAIQARAJAJAPQAJAPAAAWQgBAYgKAUQgLASgSAKQgSALgXAAQgUAAgOgFgAgSg3QgRgIgJgQQgKgQAAgXIACgVIAEgZQAFgZALgRQALgRAVgLQAUgKAhgFIA6gIIgFAmIg3AIQgTADgNAFQgMAFgHAIQgGAIgDAPQAHgKAMgGQAMgEAQAAQAUgBAPAJQAOAJAIAOQAIAPAAAUQgBAWgKAQQgLARgTAKQgSAKgYAAQgVAAgRgJgAAHiUQgHAFgFAIQgEAJAAAIQAAAPAIAJQAHAIAPABQAMAAAIgFQAIgGAFgHQAEgJAAgJQAAgOgIgJQgJgJgOgBQgMAAgIAGgAnCgzQgNgGgIgIQgJgIgDgJQgEgJgBgJIAsAAQABAEADADQADAEAGAEQAGACAJAAQAMAAAIgFQAIgHAEgLIgyAAIAHghIAuAAQgDgMgHgFQgHgGgKAAQgJABgGADQgGADgEADIgFAHIgrAAQACgIAEgKQAGgIAIgJQAJgHANgGQANgFASAAQAWAAAQAIQARAJAJAPQAJAPAAAWQgBAYgKAUQgLASgSAKQgSALgXAAQgUAAgOgFgAGBgxIgzhBIgNBBIgtAAIAciRIAuAAIgLA4IBBg4IA7AAIhUBGIA8BLgAlGgxIAciRIAtAAIgVBrIAyAAIAVhrIAtAAIgVBrIAxAAIAVhrIAtAAIgcCRgAopgxIgzhBIgMBBIgtAAIAciRIAtAAIgLA4IBCg4IA6AAIhTBGIA8BLg");
	this.shape.setTransform(6.225,-160.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// BG_white
	this.instance_1 = new lib.BG_red();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,-5,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Frame002, new cjs.Rectangle(-196,-282,864.8,361.5), null);


(lib.Frame001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TXT copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(96.55,-159.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3PC0IAAlnMAufAAAIAAFng");
	mask.setTransform(97,-141.825);

	// lines
	this.instance = new lib.lines();
	this.instance.parent = this;
	this.instance.setTransform(-634,42);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:620.5},84,cjs.Ease.quadInOut).wait(1));

	// BG_red
	this.instance_1 = new lib.BG_red();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,-5,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-282,864.8,361.5);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// F000 copy
	this.instance = new lib.BG_white_First();
	this.instance.parent = this;
	this.instance.setTransform(120,310,1,1,0,0,0,120,200);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(499).to({_off:false},0).to({y:200},14,cjs.Ease.cubicOut).wait(1));

	// F005
	this.instance_1 = new lib.Frame005("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(118,305);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(288).to({_off:false},0).to({y:205},14,cjs.Ease.cubicOut).wait(25).to({mode:"synched",loop:false},0).wait(187));

	// F004
	this.instance_2 = new lib.Frame004("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(127,305);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(216).to({_off:false},0).to({y:205,startPosition:14},14,cjs.Ease.cubicOut).to({_off:true},72).wait(212));

	// F003
	this.instance_3 = new lib.Frame003("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(118,305);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144).to({_off:false},0).to({y:205},14,cjs.Ease.cubicOut).to({_off:true},72).wait(284));

	// F002
	this.instance_4 = new lib.Frame002("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(127,305);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).to({y:205},14,cjs.Ease.cubicOut).to({_off:true},72).wait(356));

	// F001
	this.instance_5 = new lib.Frame001("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(118,305);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:205,mode:"synched",loop:false},14,cjs.Ease.cubicOut).to({_off:true},72).wait(428));

	// F000
	this.instance_6 = new lib.BG_white_First();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},14).wait(500));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-456,871.8,850.5);


// stage content:
(lib.alfa_debitcard19v2_728x90_review = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DADADA").ss(2,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
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
p.nominalBounds = new cjs.Rectangle(-310.5,-32,1106.3,416.5);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"index_atlas_P_.png", id:"index_atlas_P_"}
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