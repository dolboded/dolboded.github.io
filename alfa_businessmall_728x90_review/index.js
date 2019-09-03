(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,244,180],[0,182,349,68],[0,252,340,67]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.card = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.legal1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legal2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
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


(lib.txt0301 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9142B").s().p("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");
	this.shape.setTransform(87.7,-219.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0301, new cjs.Rectangle(-7,-243,189.4,46.3), null);


(lib.txt0201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9142B").s().p("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");
	this.shape.setTransform(142,-26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-62,389.4,123.7);


(lib.txt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9142B").s().p("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");
	this.shape.setTransform(161.3,-149);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-184.4,430.3,363.9);


(lib.shadevect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,44,0,-58.9).s().p("EhWAAOiIAA9DMCsBAAAIAAdDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadevect, new cjs.Rectangle(-550.5,-93,1101,186), null);


(lib.LOGO_alfa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E40521").s().p("ApNB5IAAggICcAAIAAAggAiUBWIAAgrQgagCgPgRQgPgQAAgYQAAgZAPgQQAPgQAagDIAAgqIAcAAIAAAqQAaADAPAQQAPAQAAAZQAAAYgPAQQgPARgaACIAAArgAh4APQAMgCAIgIQAHgIAAgNQAAgNgHgJQgIgIgMgCgAiogmQgHAJAAANQAAANAHAIQAHAIANACIAAg/QgNACgHAIgAD4AgQgLgLAAgSQgBgQAMgKQAKgJAUAAIAdAAQAAgTgTAAQgQAAgDALIgeAAQACgQAMgKQANgMAWAAQAXAAAMANQANAMAAAVIAAAlQAAAJAHAAIAAAaIgKAAQgRAAgGgMQgKAPgXAAQgSAAgLgLgAEKADQABAPASAAQAKAAAGgFQAGgGAAgIIAAgIIgXAAQgRAAgBAMgAgqAgQgMgLAAgSQAAgQALgKQALgJATAAIAcAAQAAgTgRAAQgRAAgDALIgdAAQABgQAMgKQAOgMAWAAQAVAAANANQAMAMAAAVIAAAlQAAAJAIAAIAAAaIgLAAQgRAAgFgMQgLAPgVAAQgSAAgLgLgAgYADQAAAPATAAQAIAAAHgFQAFgGAAgIIAAgIIgWAAQgRAAAAAMgAIpAoIgsgvIAAAvIgcAAIAAhxIAcAAIAAAtIApgtIAlAAIgyA2IA1A7gAGtAoIAAgsIgoAAIAAAsIgeAAIAAhxIAeAAIAAArIAoAAIAAgrIAdAAIAABxgABqAoIAAieIBqAAIAAAdIhLAAIAAAgIAgAAQAaAAAPANQAOANAAAXQAAAXgOANQgOAMgbAAgACJALIAfAAQAaAAAAgTQAAgVgaAAIgfAAgAk0AoIAAhxIAdAAIAAAjIAVAAQAVAAALAKQAMAKAAASQAAAQgKALQgMANgVAAgAkXAPIATAAQAQAAAAgPQAAgNgQAAIgTAAgAloAoIAAhWIgcAAIgBAlQgBAagHALQgIAMgWAAIgEAAIAAgbQAJAAADgEQADgFAAgPIACg+IBUAAIAABxgAnXAoIgKghIg+AAIgKAhIghAAIAxiIQAEgMAFgFQAHgHAMAAQAMAAAGAHQAEAFAFAMIAuCIgAoVgTIArAAIgUhBIgBAAg");
	this.shape.setTransform(-29.2,-12.3,0.64,0.64,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGO_alfa, new cjs.Rectangle(-67,-20,75.5,15.5), null);


(lib.legal2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal2();
	this.instance.parent = this;
	this.instance.setTransform(-4,-171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal2_1, new cjs.Rectangle(-4,-171,340,67), null);


(lib.legal1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal1();
	this.instance.parent = this;
	this.instance.setTransform(-4,-172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal1_1, new cjs.Rectangle(-4,-172,349,68), null);


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(228,-143,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_1, new cjs.Rectangle(228,-143,122,90), null);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E40521").s().p("AhIBJIAAiOIAZAAIAAAQIAGgHQADgEAIgEQAHgDALgBQAMAAAMAHQALAGAGAMQAGAMABAQQgBARgGALQgGALgLAHQgMAGgMAAQgLAAgHgEQgIgDgDgEIgGgHIAAA6gAghgtQgHAEgDAHQgEAGAAAJQAAAJAEAHQADAGAHAEQAGADAIABQAJgBAHgDQAGgEADgGQAEgHAAgJQAAgJgEgGQgDgHgGgEQgHgEgJAAQgIAAgGAEgAmlAaQgNgGgHgMQgHgLAAgQQAAgPAHgMQAHgMANgHQAMgHAQAAQAPAAAMAHQAMAHAIAMQAHAMAAAPQAAAQgHALQgIAMgMAGQgMAHgPAAQgQAAgMgHgAmZgtQgGAEgEAHQgDAHAAAIQAAAJADAHQAEAFAGAEQAHAEAJABQAIgBAGgDQAGgEAFgGQADgHAAgJQAAgJgDgGQgFgHgGgEQgGgEgIAAQgJAAgHAEgAFfAfIAAhkIAZAAIAAAfIAhAAQAOAAAJAFQAJAEAEAIQAEAIAAAKQAAAIgEAIQgEAIgJAFQgJAFgOAAgAF4AKIAdAAQAJAAAEgDQAFgEAAgGQAAgHgFgEQgEgDgJAAIgdAAgAEIAfIAAhPIgoAAIAAgVIBoAAIAAAVIgnAAIAABPgACwAfIAAhkIAZAAIAABkgAA/AfIAAhkIAZAAIAAAfIAgAAQAPAAAJAFQAIAEAEAIQAEAIAAAKQAAAIgEAIQgEAIgIAFQgKAFgOAAgABYAKIAdAAQAIAAAFgDQAFgEAAgGQAAgHgFgEQgFgDgIAAIgdAAgAh7AfIgxgtIAAAtIgZAAIAAhkIAZAAIAAAqIAvgqIAhAAIg1AwIA4A0gAkcAfIAAhPIgnAAIAAgVIBnAAIAAAVIgmAAIAABPg");
	this.shape.setTransform(478.9,-299.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtkC5QhEAAgxgxQgxgwAAhFIAAgmQAAhEAxgxQAxgwBEAAIbJAAQBEAAAyAwQAwAxAABEIAAAmQAABFgwAwQgyAxhEAAgAhEBgIAZAAIAAg6IAGAGQADAFAIADQAHAEALAAQAMgBAMgGQALgGAGgMQAGgLABgRQgBgPgGgMQgGgMgLgGQgMgHgMAAQgLAAgHAEQgIADgDAFIgGAGIAAgQIgZAAgAmhgqQgNAGgHANQgHAMAAAOQAAAPAHANQAHAMANAGQAMAHAQAAQAPAAAMgHQAMgGAIgMQAHgNAAgPQAAgOgHgMQgIgNgMgGQgMgHgPAAQgQAAgMAHgAFjA1IA6AAQAOAAAJgEQAJgFAEgJQAEgIAAgIQAAgLgEgHQgEgHgJgFQgJgEgOAAIghAAIAAggIgZAAgADkgZIAoAAIAABOIAZAAIAAhOIAnAAIAAgWIhoAAgAC0A1IAZAAIAAhkIgZAAgABDA1IA5AAQAOAAAKgEQAIgFAEgJQAEgIAAgIQAAgLgEgHQgEgHgIgFQgJgEgPAAIggAAIAAggIgZAAgAhVA1Ig4g0IA1gwIghAAIgvArIAAgrIgZAAIAABkIAZAAIAAgtIAxAtIAiAAgAk/gZIAnAAIAABOIAaAAIAAhOIAmAAIAAgWIhnAAgAgdAeQgHgEgDgHQgEgIAAgIQAAgIAEgHQADgGAHgEQAGgEAIgBQAJABAGAEQAHAEADAGQAEAHAAAIQAAAIgEAIQgDAHgHAEQgGADgJAAQgIAAgGgDgAmVAdQgGgEgEgGQgDgIAAgIQAAgHADgIQAEgGAGgEQAHgEAJgBQAIABAGAEQAGAEAFAGQADAHAAAIQAAAIgDAIQgFAHgGAEQgGADgIAAQgJAAgHgEgAF8AhIAAgdIAdAAQAJABAEADQAFAEAAAHQAAAHgFAEQgEADgJAAgABcAhIAAgdIAdAAQAIABAFADQAFAEAAAHQAAAHgFAEQgFADgIAAg");
	this.shape_1.setTransform(478.5,-301.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt, new cjs.Rectangle(-103.5,-320,685.5,339.7), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BG_Black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.instance = new lib.shadevect();
	this.instance.parent = this;
	this.instance.setTransform(364,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG_Black, new cjs.Rectangle(-186.5,-91,1101,186), null);


(lib.FR005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legal
	this.instance = new lib.legal2_1();
	this.instance.parent = this;
	this.instance.setTransform(-4,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// BG_Black
	this.instance_1 = new lib.BG_Black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.5,-291,1101,186);


(lib.FR004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// legal
	this.instance = new lib.legal1_1();
	this.instance.parent = this;
	this.instance.setTransform(-4,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// BG_Black
	this.instance_1 = new lib.BG_Black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.5,-291,1101,186);


(lib.FR003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0301
	this.instance = new lib.txt0301();
	this.instance.parent = this;
	this.instance.setTransform(-2,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// card
	this.instance_1 = new lib.card_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// BG_Black
	this.instance_2 = new lib.BG_Black();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.5,-291,1101,192);


(lib.FR002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt0201
	this.instance = new lib.txt0201("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-2,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// BG_Black
	this.instance_1 = new lib.BG_Black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.5,-291,1101,186);


(lib.FR001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt01
	this.instance = new lib.txt01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// BG_Black
	this.instance_1 = new lib.BG_Black();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.5,-291,1101,186);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.LOGO_alfa();
	this.instance.parent = this;
	this.instance.setTransform(80,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(443));

	// BUTT
	this.instance_1 = new lib.butt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121,346);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(443));

	// BG_BL copy
	this.instance_2 = new lib.BG_Black();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,340,1,1,0,0,0,120,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(428).to({_off:false},0).to({y:200},14,cjs.Ease.cubicOut).wait(1));

	// LEGAL copy
	this.instance_3 = new lib.FR005("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,360);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(327).to({_off:false},0).to({y:200},14,cjs.Ease.cubicOut).wait(102));

	// LEGAL
	this.instance_4 = new lib.FR004("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,360);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(244).to({_off:false},0).to({y:200},14,cjs.Ease.cubicOut).wait(59).to({startPosition:0},0).to({y:80},15,cjs.Ease.cubicIn).to({_off:true},1).wait(110));

	// TXT03
	this.instance_5 = new lib.FR003("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,360);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(171).to({_off:false},0).to({y:200},14,cjs.Ease.cubicOut).wait(51).to({startPosition:0},0).to({y:90},13,cjs.Ease.cubicIn).to({_off:true},1).wait(193));

	// TXT02
	this.instance_6 = new lib.FR002("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-236.6,360,1,1,0,0,0,-356.6,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({_off:false},0).to({y:200},14,cjs.Ease.cubicOut).wait(53).to({startPosition:0},0).to({y:90},14,cjs.Ease.cubicIn).to({_off:true},1).wait(266));

	// TXT01
	this.instance_7 = new lib.FR001("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:200},19,cjs.Ease.cubicOut).wait(68).to({startPosition:0},0).to({y:90},13,cjs.Ease.cubicIn).to({_off:true},1).wait(342));

	// BG_BL
	this.instance_8 = new lib.BG_Black();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(443));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.5,-240,1101,495);


// stage content:
(lib.alfa_businessmall_728x90_review = function(mode,startPosition,loop) {
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
	this.instance_1.setTransform(364,45,3.033,0.225);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(177.5,-46,1101,346);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
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