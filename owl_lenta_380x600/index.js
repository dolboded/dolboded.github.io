(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,380,600]]}
];


// symbols:



(lib.owl = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
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


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(117.45,46.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(0,0,282.1,119), null);


(lib.Plashka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgfPBCrMAAAgmvIAAgDMAAAguwIAAgEMAAAgnnQANhrByhNQB0hODtg5QGuhpRDhNQOBg+JwCIQFGBHCXBdMAAACBUg");
	this.shape.setTransform(2,-4.285);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Plashka, new cjs.Rectangle(-198,-431,400,853.5), null);


(lib.OWL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.owl();
	this.instance.parent = this;
	this.instance.setTransform(-35,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.OWL, new cjs.Rectangle(-35,1,380,600), null);


(lib.LOGOmult = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.275,0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGOmult, new cjs.Rectangle(-34,-23.8,67.8,47.7), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlAC3IAAltIKBAAIAAFtg");
	mask.setTransform(32.1,18.275);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlAC3IAAlHQAAgZAPgJQAQgJAVANII3FHQAQAIAEAMQACAEAAAGg");
	this.shape.setTransform(32.1,18.2866);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,64.2,36.6), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlAEYIAAovIKBAAIAAIvg");
	mask.setTransform(32.1,28);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlAjyQAAgZAPgIQAQgJAVAMII3FHQAQAJAEAMQACAEAAAFQAAAGgCAEIp/C5g");
	this.shape.setTransform(32.1,28.0116);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,64.2,56), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlAFtIAAraIKBAAIAALag");
	mask.setTransform(32.1,36.55);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkxFqQgPgJAAgZIAAqPQAAgZAPgJQAQgJAVANII3FIQAQAIAEAMQACAEAAAFQAAAFgCAEQgEAMgQAJIo3FIQgMAHgLAAQgHAAgHgDg");
	this.shape.setTransform(32.1,36.5707);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,64.2,73.1), null);


(lib.Fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150.0005,300,1.3733,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fade, new cjs.Rectangle(-56,0,412,600), null);


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
	this.shape.graphics.f("#FF545C").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150.0495,300,1.4133,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(-61.9,0,424,600), null);


(lib.TXT_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(138.1,52.5,1,1,0,0,0,141.1,59.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228.9,78.5);


(lib.LOGO_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.LOGOmult();
	this.instance.parent = this;
	this.instance.setTransform(34,24);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,67.5,47.6);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(32.1,36.6,1,1,0,0,0,32.1,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,64.2,73.1), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(32.1,18.3,1,1,0,0,0,32.1,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,64.2,36.6), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(32.1,28,1,1,0,0,0,32.1,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,64.2,56), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlAEYIAAovIKBAAIAAIvg");
	mask.setTransform(32.1,28);

	// Layer_3
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(32.1,28,1,1,0,0,0,32.1,28);
	this.instance.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,64.2,56), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(32.1,28,1,1,0,0,0,32.1,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,64.2,56), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx/AJKIAAyTMBj/AAAIAASTg");
	mask.setTransform(320,58.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak/gGIAAiGQAAgZAQgIQAPgJAWAMII3FHQAPAJAEAMg");
	this.shape.setTransform(67.85,39.8616);

	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(67.95,40.35,1,1,0,0,0,32.1,18.3);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.95,50.05,1,1,0,0,0,32.1,28);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.95,58.65,1,1,0,0,0,32.1,36.6);
	this.instance_2.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAj2AFtQgQAAgLgIQgIgHgIgNIiGj3IiPAAIAAD6QAAAKgHAIQgHAHgMAAIhgAAQgKAAgIgHQgHgHAAgLIAAqmQAAgMAHgHQAHgHALAAIEOAAQCBAABIA7QBJA7AABuQAABNglAzQglAzhBAXICXEKQADAGAAAFQAAAKgGAGQgIAGgHAAgAe2gcICRAAQA+AAAggcQAfgbAAg2QAAg2gfgcQgggdg+AAIiRAAgARzFtQgKAAgHgHQgIgIAAgKIAAqmQAAgLAHgIQAHgHALAAIHNAAQALAAAHAHQAIAHAAAMIAABGQAAALgIAHQgHAHgLAAIlXAAIAAC2IFAAAQAMAAAGAIQAIAHAAALIAABBQAAAMgIAGQgHAHgLAAIlAAAIAAC9IFfAAQAMAAAHAHQAHAHAAALIAABHQAAAMgHAGQgIAHgLAAgAL7FtQgKAAgIgHQgHgIAAgKIAAqnQAAgMAHgHQAHgGALAAIBkAAQAMAAAHAGQAGAHAAAMIAAKnQAAALgGAHQgHAHgMAAgAGNFtQgKAAgIgHQgHgIAAgKIAAnAIiRETQgLAXgYAAIgrAAQgWAAgOgXIiQkTIAAHAQAAAKgHAIQgGAHgMAAIhaAAQgKAAgHgHQgIgIAAgKIAAqmQAAgLAHgIQAHgHALAAIBVAAQATAAAMATIDJF1IDJl1QAMgTATAAIBUAAQALAAAIAHQAHAIAAALIAAKmQAAALgHAHQgIAHgLAAgAtaFtQgLAAgHgHQgHgIAAgKIAAqmQAAgMAGgHQAHgHAMAAIHMAAQALAAAIAHQAHAHAAAMIAABGQAAALgHAHQgIAHgLAAIlWAAIAAC2IE/AAQALAAAIAIQAHAHAAALIAABBQAAAMgHAGQgIAHgLAAIk/AAIAAC9IFeAAQAMAAAHAHQAHAHAAALIAABHQAAAMgHAGQgHAHgMAAgAyiFtQgRAAgJgIQgJgHgIgNIiGj3IiPAAIAAD6QAAAKgHAIQgHAHgMAAIhgAAQgKAAgHgHQgIgIAAgKIAAqmQAAgMAHgHQAHgHALAAIEPAAQCBAABHA7QBJA8AABtQAABMglA0QgkAzhCAXICYEKQADAGAAAFQAAAKgHAGQgIAGgHAAgA3igcICRAAQA/AAAfgcQAggbAAg2QAAg1gggdQgfgdg/AAIiRAAgEglRAFtQgLAAgHgHQgHgIAAgKIAAqmQAAgLAHgIQAHgHALAAIEYAAQB+AABIA7QBIA8AABxQAABxhIA5QhIA6h+AAIiaAAIAAD0QAAAMgHAGQgIAHgLAAgEgjVgAUICWAAQA9AAAggdQAggdAAg3QAAg2gfgeQgfgfg/AAIiWAAg");
	this.shape_1.setTransform(363.075,58.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgwSAJKQgtAAggggQggggAAgtIAAu5QAAgtAgggQAgggAtAAMBgkAAAQAuAAAgAgQAgAgAAAtIAAO5QAAAtggAgQggAgguAAgEgxEgIOQgVAVAAAdIAAO5QAAAdAVAVQAVAVAdAAMBgkAAAQAeAAAUgVQAWgVgBgdIAAu5QABgdgWgVQgUgVgeAAMhgkAAAQgdAAgVAVg");
	this.shape_2.setTransform(320,58.6);

	var maskedShapeInstanceList = [this.shape,this.instance,this.instance_1,this.instance_2,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,640,117.2), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx/AJKIAAyTMBj/AAAIAASTg");
	mask.setTransform(320,58.6);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(320,58.6,1,1,0,0,0,320,58.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,640,117.2), null);


(lib.LOGOpremier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-0.25,0.1,0.19,0.19,0,0,0,319.8,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGOpremier, new cjs.Rectangle(-61,-19,567,30.8), null);


(lib.PREMIER_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.LOGOpremier();
	this.instance.parent = this;
	this.instance.setTransform(61,11);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.6,22.3);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(1));

	// FADE
	this.instance = new lib.Fade();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).wait(20));

	// TXT
	this.instance_1 = new lib.TXT_mov("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(157.2,174.45,1.4877,1.4877,0,0,0,114.4,39.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(20));

	// LOGO_premier
	this.instance_2 = new lib.PREMIER_mov("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(266.8,31.1,1,1,0,0,0,60.8,11.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(20));

	// LOGO_mult
	this.instance_3 = new lib.LOGO_mov("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(21.7,43.8,1,1,0,0,0,33.7,23.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(20));

	// OWL
	this.instance_4 = new lib.OWL();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34));

	// PLASHKA
	this.instance_5 = new lib.Plashka();
	this.instance_5.parent = this;
	this.instance_5.setTransform(155,717.95,1,1,0,0,0,0.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34));

	// BG
	this.instance_6 = new lib.BG();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,-10,424,1149.7);


// stage content:
(lib.tnt_szmltflm_owl_lenta_380x600_do150kb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (typeof(this.initialized) == "undefined") {
		    this.button_main.addEventListener("click", function(event) {
		        if(event.nativeEvent.button === 0){
		          window.click();
		        }
		    });
		    this.initialized = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// button
	this.button_main = new lib.btn();
	this.button_main.name = "button_main";
	this.button_main.parent = this;
	this.button_main.setTransform(190,300,1.5833,1.5);
	new cjs.ButtonHelper(this.button_main, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_main).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Egdrgu3MA7XAAAMAAABdvMg7XAAAg");
	this.shape.setTransform(190,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;
	this.instance.setTransform(156,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgdrAu4MAAAhdvMA7XAAAMAAABdvg");
	this.shape_1.setTransform(190,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.1,299,234.00000000000003,840.7);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 380,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;