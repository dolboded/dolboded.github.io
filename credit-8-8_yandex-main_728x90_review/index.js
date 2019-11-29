(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,184,162,170],[0,0,1906,182],[244,184,22,16],[164,184,78,118],[244,202,6,8]]}
];


// symbols:



(lib.bag = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BG_SNOW = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.DED_arm = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.DED_body = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.DED_hand = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
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


(lib.TXT02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AE1ChIAAhzIAaAAIAAAMIAEgEQADgEAGgDQAFgDAJAAQALAAAIAFQAJAFAFAKQAFAJAAAOQAAANgFAKQgFAKgJAFQgIAFgLAAQgJAAgFgDQgGgCgDgEIgEgEIAAAsgAFUBIQgFAGAAAJQAAAJAFAGQAFAGAKAAQAJAAAFgGQAFgGAAgJQAAgJgFgGQgFgFgJgBQgKABgFAFgAC5CZIAAgZIg7AAIAAAZIgXAAIAAguIAIAAQAEgFACgJQADgIABgNIAEgaIBGAAIAAA9IAOAAIAAAugACRBJIgCAPIgDALIgEAIIAhAAIAAgoIgXAAgAIIB9QgKgGgGgJQgGgKAAgNQAAgNAGgKQAGgKAKgFQAKgGANABQANgBALAGQAKAFAGAKQAGAKAAANQAAANgGAKQgGAJgKAGQgLAGgNgBQgNABgKgGgAIVBFQgEACgDAFQgCAFAAAGQAAAGACAFQADAEAEADQAFADAFAAQAGAAAFgDQAEgDACgEQADgFAAgGQAAgGgDgFQgCgFgEgCQgFgDgGAAQgFAAgFADgADhB9QgJgFgFgKQgFgKAAgNQAAgOAFgJQAFgKAJgFQAIgFALAAQAIAAAGADQAFADADADIAEAEIAAgLIAaAAIAABSIgaAAIAAgLIgDAEQgDADgGADQgGADgIAAQgLAAgIgFgADxBFQgEACgCAFQgDAFAAAGQAAAGADAFQACAEAEADQAFADAGAAQAFAAAFgDQAEgDACgEQACgFAAgGQAAgGgCgFQgCgFgEgCQgFgDgFAAQgGAAgFADgAAlB9QgLgGgGgJQgFgKgBgNQABgNAFgKQAGgKALgFQAKgGANABQANgBAKAGQAKAFAGAKQAGAKAAANQAAANgGAKQgGAJgKAGQgKAGgNgBQgNABgKgGgAAyBFQgFACgCAFQgDAFAAAGQAAAGADAFQACAEAFADQAEADAGAAQAGAAAEgDQAEgDADgEQACgFAAgGQAAgGgCgFQgDgFgEgCQgEgDgGAAQgGAAgEADgAi1B9QgLgFgFgLQgGgJAAgNQAAgNAGgKQAFgKAKgFQAKgGANABQAOgBAKAGQAKAFAFAKQAGAKAAAOIAAAEIg/AAQABAIAFAFQAFAFAJAAIAIgBIAGgCIACgDIAaAAIgDAIQgDAFgFAEQgFAEgHADQgIACgLAAQgOABgKgGgAiMBMQgCgHgFg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");
	this.shape.setTransform(0.475,3.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT02, new cjs.Rectangle(-117.3,-23,234.7,46.1), null);


(lib.TXT01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(2.275,6.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT01, new cjs.Rectangle(-230,-26,461.6,53.1), null);


(lib.legal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("(http://alfabank.ru/). Банк имеет право изменить срок действия предложения или отказать в предоставлении кредита. \nАО «АЛЬФА-БАНК», ген. лицензия ЦБ РФ \n№ 1326 от 16.01.2015", "17px 'Arial'", "#808080");
	this.text.lineHeight = 15;
	this.text.lineWidth = 596;
	this.text.parent = this;
	this.text.setTransform(-298,-167);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal2, new cjs.Rectangle(-300,-169,600.1,338), null);


(lib.legal1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("*Ставка по кредиту наличными от 8,8% до 24,49% годовых, определяется \nиндивидуально и действительна на весь срок кредита. Предложение \nдействует с 25.11.2020 до 02.03.2020. Неустойка за просрочку платежа — \n0.1% за каждый день просрочки. Кредитный лимит — от 50 000 \nдо 5 000 000 руб., срок кредита от 1 до 5 лет. Подробнее на alfabank.ru", "17px 'Arial'", "#808080");
	this.text.lineHeight = 15;
	this.text.lineWidth = 596;
	this.text.parent = this;
	this.text.setTransform(-298,-167);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal1, new cjs.Rectangle(-300,-169,600.1,338), null);


(lib.DED_HAND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DED_hand();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.DED_HAND, new cjs.Rectangle(-1.5,-2,3,4), null);


(lib.DED_BODY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DED_body();
	this.instance.parent = this;
	this.instance.setTransform(-19.5,-29.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.DED_BODY, new cjs.Rectangle(-19.5,-29.5,39,59), null);


(lib.DED_ARM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DED_arm();
	this.instance.parent = this;
	this.instance.setTransform(-5.5,-4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.DED_ARM, new cjs.Rectangle(-5.5,-4,11,8), null);


(lib.butt_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHZA7IAKgbIgag/IASAAIARAqIAQgqIAQAAIgiBagAC1AeQgGgEgEgHQgDgIAAgKQAAgKADgHQAEgIAGgEQAGgEAHAAQAGAAAEACIAGAFIADADIAAgJIAQAAIAAA/IgQAAIAAgJIgDAEIgGAFQgEACgGAAQgHAAgGgEgAC8gNQgEAGAAAIQAAAIAEAFQAEAGAGAAQAIAAADgGQAEgFAAgIQAAgIgEgGQgDgEgIgBQgGABgEAEgABwAfQgHgEgDgFQgEgFgBgFIAQAAIACAEIAGAEQACABAFABQAGgBADgBQADgCAAgFQAAgEgCgBQgCgCgFAAIgKAAIAAgLIAKAAQADAAADgBQACgCAAgEQAAgEgCgBQgDgDgFAAQgGAAgDADQgEADgCADIgQAAQABgGAEgEQAEgFAGgDQAHgDAJAAQAMAAAIAFQAGAFAAAJQAAAEgCADIgDAEIgEACQAEAAADAEQAEAEAAAFQgBAKgHAGQgHAFgOAAQgKAAgGgDgAkYAeQgFgEgEgHQgEgIABgKQgBgKAEgHQAEgIAFgEQAHgEAHAAQAGAAAEACIAFAFIAEADIAAgJIAQAAIAAA/IgQAAIAAgJIgEAEIgFAFQgEACgGAAQgHAAgHgEgAkRgNQgDAGAAAIQAAAIADAFQAEAGAHAAQAHAAADgGQAFgFAAgIQAAgIgFgGQgDgEgHgBQgHABgEAEgAmdAeQgGgEgEgIQgEgIAAgJQAAgJAEgIQAEgIAGgEQAIgEAIAAQAHAAAGACQAGADADADQADAEABAEIACAGIgPAAIgCgDIgEgDQgCgCgFAAQgEAAgDADQgDACgCAFQgBAEAAAFQAAAFABAFQACAEADADQADACAEAAQAFAAACgBIAEgEIACgDIAPAAIgCAGQgBAEgDADQgDAEgFACQgGADgIAAQgIAAgIgEgAn3AcQgJgFgGgLQgFgKAAgOQAAgNAFgLQAGgKAJgGQAJgGANAAQAMAAAJAGQAKAGAFAKQAGALgBANQABAOgGAKQgFALgKAFQgJAGgMAAQgNAAgJgGgAnvgnQgFAFgDAGQgCAIgBAIQABAJACAHQADAHAFADQAGAFAIAAQAHAAAGgFQAFgDADgHQADgHAAgJQAAgIgDgIQgDgGgFgFQgGgDgHAAQgIAAgGADgAG1AgIgcgcIAAAcIgQAAIAAg/IAQAAIAAAbIAagbIAUAAIgdAfIAfAggAFAAgIAAg/IAjAAQAGABAFABQAFACADAEQACAEAAAFQABAEgCADIgEAFIgFACQADAAADACQADACABADQACADAAAEQAAAIgGAGQgGAEgLAAgAFRAUIAPAAQAFAAACgCQADgCAAgEQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQgCgCgFAAIgPAAgAFRgFIAOAAQAEAAADgBQACgCAAgEQAAgDgCgCQgDgCgEAAIgOAAgAEeAgIAAgVIgLAAIgOAVIgSAAIAQgXQgIgDgDgEQgDgFAAgHQAAgFADgFQACgFAFgDQAGgDAHAAIAiAAIAAA/gAEIgPQgDABAAAEQAAAFADABQACACAGAAIAOAAIAAgPIgOAAQgGAAgCACgAADAgIAAg/IAQAAIAAAUIAOAAQAKABAFACQAGADADAFQACAEAAAGQAAAGgCAFQgDAFgGAEQgFACgKAAgAATAUIAMAAQAGgBADgCQACgCAAgFQAAgEgCgCQgDgCgGAAIgMAAgAgvAgIAAgxIgUAAIAAgOIA6AAIAAAOIgVAAIAAAxgAhgAgIAAgoIgdAoIgPAAIAAg/IAPAAIAAApIAdgpIAPAAIAAA/gAjUAgIAAg/IAhAAQAHABAFABQAFACADAEQADAEAAAFQgBAEgBADIgEAFIgEACQADAAACACQADACACADQABADAAAEQAAAIgHAGQgFAEgMAAgAjFAUIAQAAQAFAAACgCQADgCgBgEQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQgCgCgFAAIgQAAgAjFgFIAPAAQAEAAADgBQADgCgBgEQABgDgDgCQgDgCgEAAIgPAAgAlTAgIAAgxIgWAAIAAgOIA7AAIAAAOIgWAAIAAAxg");
	this.shape.setTransform(0.4,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt_txt, new cjs.Rectangle(-52,-3,104.8,11.8), null);


(lib.butt_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AqVCTQgPAAgKgLQgLgLAAgOIAAjdQAAgOALgLQAKgLAPAAIUrAAQAPAAALALQAKALAAAOIAADdQAAAOgKALQgLALgPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt_base, new cjs.Rectangle(-69.7,-14.6,139.5,29.299999999999997), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.BG_WH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG_WH, new cjs.Rectangle(0,0,728,90), null);


(lib.BG_RED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG_RED, new cjs.Rectangle(0,0,728,90), null);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BG_SNOW();
	this.instance.parent = this;
	this.instance.setTransform(-8,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(-8,0,953,91), null);


(lib.BAG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bag();
	this.instance.parent = this;
	this.instance.setTransform(-41,-43,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BAG, new cjs.Rectangle(-41,-43,81,85), null);


(lib.ALFALOGO_WH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnxBkIAAgbICEAAIAAAbgAh9BKIAAgkQgVgCgNgNQgNgOAAgVQAAgUANgPQANgNAVgCIAAgjIAYAAIAAAjQAVACANANQANAPAAAUQAAAVgNAOQgNANgVACIAAAkgAhlAOQAWgCAAgYQAAgLgGgHQgGgIgKgBgAiNgeQgGAHAAALQAAALAGAHQAGAHAKABIAAg1QgKABgGAIgADRAdQgJgJAAgQQAAgNAJgJQAJgHAQAAIAZAAQAAgRgQABQgNgBgDALIgZAAQABgOAKgJQAMgJASgBQATABALAJQAKALAAASIAAAfQAAAHAHABIAAAVIgJAAQgPAAgFgKQgIANgTAAQgPAAgKgJgADhAEQAAANAQAAQAIAAAFgEQAFgFAAgIIAAgFIgUAAQgOgBAAAKgAgkAdQgJgJAAgQQAAgNAJgJQAJgHARAAIAXAAQAAgRgPABQgOgBgCALIgZAAQABgOAKgJQAMgJASgBQASABALAJQALALAAASIAAAfQAAAHAGABIAAAVIgJAAQgOAAgGgKQgIANgSAAQgPAAgKgJgAgUAEQAAANAQAAQARAAAAgRIAAgFIgTAAQgOgBAAAKgAHSAjIgkgnIAAAnIgZAAIAAheIAZAAIAAAlIAiglIAfAAIgqAtIAtAxgAFqAjIAAglIgiAAIAAAlIgZAAIAAheIAZAAIAAAkIAiAAIAAgkIAYAAIAABegABaAjIAAiEIBZAAIAAAYIhAAAIAAAbIAcAAQAWAAAMALQAMALAAATQAAATgMALQgMALgWgBgABzAMIAbAAQAVAAAAgRQAAgRgVAAIgbAAgAkEAjIAAheIAZAAIAAAcIASAAQARABAKAIQAJAJAAAPQAAAOgIAIQgKALgSAAgAjrAOIAQAAQANABAAgNQAAgLgNAAIgQAAgAkvAjIAAhIIgYAAIgBAgQgBAVgGAJQgHAKgSAAIgEAAIAAgWQAIAAADgEQACgEAAgMIACg0IBGAAIAABegAmNAjIgJgbIgzAAIgKAbIgbAAIAphyQADgKAEgFQAGgFAKAAQAKAAAGAGQAEAEADAKIAnBygAnCgOIAlAAIgRg3IgBAAg");
	this.shape.setTransform(-0.225,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ALFALOGO_WH, new cjs.Rectangle(-50,-10,99.6,20), null);


(lib.ALFALOGO_RD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AmwBXIAAgYIByAAIAAAYgAhtBAIAAgfQgTgCgLgMQgLgMAAgRQAAgSALgMQALgMATgCIAAgfIAWAAIAAAfQASACALAMQALAMAAASQAAARgLAMQgLAMgSACIAAAfgAhXANQAIgBAFgHQAGgFAAgKQAAgJgGgHQgFgGgIgCgAiBgKQABAKAFAFQAFAHAJABIAAgvQgUAEAAAUgAC2AZQgIgIAAgNQgBgMAJgHQAHgHAOAAIAWAAQAAgOgOAAQgLAAgDAJIgWAAQABgMAJgIQAKgIAQAAQARAAAJAJQAJAJAAAPIAAAbQAAAHAFAAIAAATIgHAAQgNAAgEgJQgIALgQAAQgNAAgIgIgADDAEQAAALAOAAQAHAAAEgEQAFgEAAgHIAAgFIgRAAQgNAAAAAJgAgfAZQgIgIgBgNQAAgMAJgHQAIgHAOAAIAUAAQAAgOgNAAQgMAAgBAJIgXAAQACgMAIgIQAKgIAQAAQAQAAAJAJQAKAJgBAPIAAAbQABAHAFAAIAAATIgHAAQgNAAgFgJQgHALgQAAQgNAAgIgIgAgSAEQAAALAOAAQAPAAAAgPIAAgFIgQAAQgNAAAAAJgAGVAfIgggiIAAAiIgVAAIAAhTIAVAAIAAAhIAeghIAbAAIgkAoIAnArgAE6AfIAAggIgdAAIAAAgIgVAAIAAhTIAVAAIAAAgIAdAAIAAggIAWAAIAABTgABNAfIAAh0IBPAAIAAAWIg4AAIAAAXIAYAAQATAAALAKQALAJAAARQAAAjgpAAgABkAKIAXAAQASAAAAgOQAAgPgSAAIgXAAgAjiAfIAAhTIAWAAIAAAaIAPAAQAPAAAIAHQAJAIAAANQAAAMgHAIQgJAJgQAAgAjMANIANAAQAMAAAAgLQAAgKgMAAIgNAAgAkIAfIAAg/IgUAAIgBAcQgBATgFAHQgGAJgQAAIgDAAIAAgUQAGAAACgDQACgEABgKIACguIA8AAIAABTgAlZAfIgIgYIgtAAIgIAYIgXAAIAjhkQADgIADgEQAGgFAJAAQANAAAGARIAiBkgAmHgMIAgAAIgPgwIgBAAg");
	this.shape.setTransform(0.25,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ALFALOGO_RD, new cjs.Rectangle(-43,-8,86.5,17.4), null);


(lib.alfabank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AFyAqQgKgJAAgQIAAgmIAXAAIAAAlQAAAPAOAAQAOAAAAgPIAAglIAXAAIAAAmQAAAQgKAJQgKAKgRAAQgSAAgJgKgAgdApQgKgKAAgRQAAgQAKgKQAJgKAOAAQAPAAAHALIAAgKIAWAAIAABHIgWAAIAAgLQgCAEgEADQgIAFgIAAQgOAAgJgKgAgLABQgFAFAAAIQAAAIAFAFQAEAFAHAAQAHAAAEgFQAFgFAAgIQAAgIgFgFQgEgEgHAAQgHAAgEAEgAhkAuQgFgDgCgDIAAAKIgWAAIAAhlIAWAAIAAApQAJgMAPAAQAOAAAJAKQAKAKAAAQQAAARgKAKQgJAKgOAAQgKAAgHgFgAhmABQgFAFAAAIQAAAIAFAFQAFAFAHAAQAIAAAFgFQAEgFAAgIQAAgIgEgFQgFgEgIAAQgIAAgEAEgAjZApQgJgKAAgRQAAgQAJgKQAJgKAOAAQAKAAAHAFQAEADACADIAAgKIAWAAIAABHIgWAAIAAgLQgHAMgQAAQgOAAgJgKgAjHABQgFAFAAAIQAAAIAFAFQAEAFAIAAQAHAAAFgFQAEgFAAgIQAAgIgEgFQgFgEgHAAQgIAAgEAEgAmnApQgKgKAAgRQAAgQAKgKQAJgKAOAAQAPAAAHALIAAgKIAXAAIAABHIgWAAIAAgLQgHAMgRAAQgNAAgJgKgAmWABQgEAFAAAIQAAAIAEAFQAFAFAHAAQAIAAAEgFQAFgFAAgIQAAgIgFgFQgEgEgIAAQgHAAgFAEgAEfAyIAAhHIAXAAIAAAMQAFgMARAAIAPAAIAAAVIgUAAQgRAAAAAPIAAAjgADyAyIAAgbIAaAAIAAAbgADLAyIgdggIAAAgIgWAAIAAhlIAWAAIAAA5IAdgbIAcAAIgiAgIAkAngABuAyIAAgmQAAgHgEgEQgEgDgHAAQgPAAAAAOIAAAmIgWAAIAAhHIAWAAIAAALQAJgMAOAAQAOAAAIAJQAIAIAAANIAAAqgAkYAyIAAg0IgTAAIAAgTIATAAIAAgJQAAgVAWAAIAgAAIAAARIgXAAQgJAAAAAJIAAAEIAYAAIAAATIgYAAIAAA0gAlPAyIAAhlIAWAAIAABlg");
	this.shape.setTransform(0.375,0.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.alfabank, new cjs.Rectangle(-43,-5,86.8,10.4), null);


(lib.TXT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg3YgDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg3XgDCMBJkAAAIAAGFMhJkAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg3VgDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg3NgDCMBJkAAAIAAGFMhJkAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg2/gDCMBJkAAAIAAGFMhJkAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg2ogDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg2EgDCMBJkAAAIAAGFMhJkAAAg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg1UgDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg0SgDCMBJkAAAIAAGFMhJkAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Egy/gDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EgxWgDCMBJkAAAIAAGFMhJkAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EgvXgDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Egs+gDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EgqJgDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("Egm2gDCMBJkAAAIAAGFMhJkAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_17 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_19 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_20 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_21 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_22 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_24 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_25 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_26 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_27 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_28 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");
	var mask_graphics_29 = new cjs.Graphics().p("EgkygDCMBJlAAAIAAGFMhJlAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-354.475,y:-0.45}).wait(1).to({graphics:mask_graphics_1,x:-354.4365,y:-0.45}).wait(1).to({graphics:mask_graphics_2,x:-354.1667,y:-0.45}).wait(1).to({graphics:mask_graphics_3,x:-353.4344,y:-0.45}).wait(1).to({graphics:mask_graphics_4,x:-352.0083,y:-0.45}).wait(1).to({graphics:mask_graphics_5,x:-349.6572,y:-0.45}).wait(1).to({graphics:mask_graphics_6,x:-346.1499,y:-0.45}).wait(1).to({graphics:mask_graphics_7,x:-341.2551,y:-0.45}).wait(1).to({graphics:mask_graphics_8,x:-334.7415,y:-0.45}).wait(1).to({graphics:mask_graphics_9,x:-326.3779,y:-0.45}).wait(1).to({graphics:mask_graphics_10,x:-315.933,y:-0.45}).wait(1).to({graphics:mask_graphics_11,x:-303.1756,y:-0.45}).wait(1).to({graphics:mask_graphics_12,x:-287.8745,y:-0.45}).wait(1).to({graphics:mask_graphics_13,x:-269.7983,y:-0.45}).wait(1).to({graphics:mask_graphics_14,x:-248.7158,y:-0.45}).wait(1).to({graphics:mask_graphics_15,x:-214.9933,y:-0.45}).wait(1).to({graphics:mask_graphics_16,x:-172.8284,y:-0.45}).wait(1).to({graphics:mask_graphics_17,x:-136.676,y:-0.45}).wait(1).to({graphics:mask_graphics_18,x:-106.0737,y:-0.45}).wait(1).to({graphics:mask_graphics_19,x:-80.5589,y:-0.45}).wait(1).to({graphics:mask_graphics_20,x:-59.6692,y:-0.45}).wait(1).to({graphics:mask_graphics_21,x:-42.942,y:-0.45}).wait(1).to({graphics:mask_graphics_22,x:-29.9148,y:-0.45}).wait(1).to({graphics:mask_graphics_23,x:-20.1251,y:-0.45}).wait(1).to({graphics:mask_graphics_24,x:-13.1105,y:-0.45}).wait(1).to({graphics:mask_graphics_25,x:-8.4084,y:-0.45}).wait(1).to({graphics:mask_graphics_26,x:-5.5563,y:-0.45}).wait(1).to({graphics:mask_graphics_27,x:-4.0917,y:-0.45}).wait(1).to({graphics:mask_graphics_28,x:-3.5521,y:-0.45}).wait(1).to({graphics:mask_graphics_29,x:-3.475,y:-0.45}).wait(1));

	// Layer_1
	this.instance = new lib.TXT01();
	this.instance.parent = this;
	this.instance.setTransform(-2,-7);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227,-15,454.6,29.5);


(lib.HAND_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DED_HAND();
	this.instance.parent = this;
	this.instance.setTransform(0,2.05,1,1,-14.9992,0,0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,rotation:14.9994,x:0.1,y:2.1},23,cjs.Ease.quartOut).to({regX:0,rotation:-14.9992,x:0,y:2.05},24,cjs.Ease.cubicIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.2,4.9,4.800000000000001);


(lib.HAND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DED_ARM
	this.instance = new lib.DED_ARM();
	this.instance.parent = this;
	this.instance.setTransform(5.5,1.4,1,1,0,0,0,5.5,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// DED_HAND
	this.instance_1 = new lib.HAND_mov();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-6.2,11.9,12.2);


(lib.DED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DED_BODY
	this.instance = new lib.DED_BODY();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

	// DED_ARM
	this.instance_1 = new lib.HAND("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.5,-9.75,1,1,-18.7004,0,0,5.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:19.0341,x:-8.55,y:-9.7},23,cjs.Ease.quadInOut).to({rotation:-18.7004,x:-8.5,y:-9.75},24,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:19.0341,x:-8.55,y:-9.7},23,cjs.Ease.quadInOut).to({rotation:-18.7004,x:-8.5,y:-9.75},24,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-29.5,41.4,59);


(lib.BUT_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgJjCIATAAIAAGFIgTAAg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah3jCIDvAAIAAGFIjvAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AjZjCIGzAAIAAGFImzAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AkwjCIJhAAIAAGFIphAAg");
	var mask_graphics_4 = new cjs.Graphics().p("Al9jCIL7AAIAAGFIr7AAg");
	var mask_graphics_5 = new cjs.Graphics().p("AnBjCIODAAIAAGFIuDAAg");
	var mask_graphics_6 = new cjs.Graphics().p("An7jCIP3AAIAAGFIv3AAg");
	var mask_graphics_7 = new cjs.Graphics().p("AotjCIRbAAIAAGFIxbAAg");
	var mask_graphics_8 = new cjs.Graphics().p("ApYjCISxAAIAAGFIyxAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Ap7jCIT3AAIAAGFIz3AAg");
	var mask_graphics_10 = new cjs.Graphics().p("AqYjCIUxAAIAAGFI0xAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AqvjCIVfAAIAAGFI1fAAg");
	var mask_graphics_12 = new cjs.Graphics().p("ArBjCIWDAAIAAGFI2DAAg");
	var mask_graphics_13 = new cjs.Graphics().p("ArPjCIWfAAIAAGFI2fAAg");
	var mask_graphics_14 = new cjs.Graphics().p("ArZjCIWzAAIAAGFI2zAAg");
	var mask_graphics_15 = new cjs.Graphics().p("ArfjCIW/AAIAAGFI2/AAg");
	var mask_graphics_16 = new cjs.Graphics().p("ArjjCIXHAAIAAGFI3HAAg");
	var mask_graphics_17 = new cjs.Graphics().p("ArljCIXLAAIAAGFI3LAAg");
	var mask_graphics_18 = new cjs.Graphics().p("ArmjCIXNAAIAAGFI3NAAg");
	var mask_graphics_19 = new cjs.Graphics().p("ArmjCIXNAAIAAGFI3NAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.0001,y:0}).wait(1).to({graphics:mask_graphics_1,x:-0.0084,y:0}).wait(1).to({graphics:mask_graphics_2,x:-0.0157,y:0}).wait(1).to({graphics:mask_graphics_3,x:-0.0223,y:0}).wait(1).to({graphics:mask_graphics_4,x:-0.0281,y:0}).wait(1).to({graphics:mask_graphics_5,x:-0.0332,y:0}).wait(1).to({graphics:mask_graphics_6,x:-0.0376,y:0}).wait(1).to({graphics:mask_graphics_7,x:-0.0413,y:0}).wait(1).to({graphics:mask_graphics_8,x:-0.0445,y:0}).wait(1).to({graphics:mask_graphics_9,x:-0.0472,y:0}).wait(1).to({graphics:mask_graphics_10,x:-0.0494,y:0}).wait(1).to({graphics:mask_graphics_11,x:-0.0511,y:0}).wait(1).to({graphics:mask_graphics_12,x:-0.0525,y:0}).wait(1).to({graphics:mask_graphics_13,x:-0.0535,y:0}).wait(1).to({graphics:mask_graphics_14,x:-0.0542,y:0}).wait(1).to({graphics:mask_graphics_15,x:-0.0547,y:0}).wait(1).to({graphics:mask_graphics_16,x:-0.055,y:0}).wait(1).to({graphics:mask_graphics_17,x:-0.0552,y:0}).wait(1).to({graphics:mask_graphics_18,x:-0.0552,y:0}).wait(1).to({graphics:mask_graphics_19,x:-0.0079,y:0}).wait(11));

	// Оставить заявку
	this.instance = new lib.butt_txt();
	this.instance.parent = this;
	this.instance.setTransform(-1.05,-1.05,0.4,0.4,0,0,0,-0.1,-0.1);
	this.instance.alpha = 0.6016;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({regX:0.4,regY:2.9,scaleX:0.5122,scaleY:0.5122,x:-0.8,y:0.15,alpha:0.6761},0).wait(1).to({scaleX:0.616,scaleY:0.616,x:-0.75,y:0.1,alpha:0.745},0).wait(1).to({scaleX:0.705,scaleY:0.705,x:-0.7,y:0.05,alpha:0.8041},0).wait(1).to({scaleX:0.7771,scaleY:0.7771,y:0,alpha:0.852},0).wait(1).to({scaleX:0.8337,scaleY:0.8337,x:-0.65,alpha:0.8897},0).wait(1).to({scaleX:0.8777,scaleY:0.8777,alpha:0.9189},0).wait(1).to({scaleX:0.9117,scaleY:0.9117,y:-0.05,alpha:0.9415},0).wait(1).to({scaleX:0.9379,scaleY:0.9379,x:-0.6,alpha:0.9589},0).wait(1).to({scaleX:0.9579,scaleY:0.9579,alpha:0.9721},0).wait(1).to({scaleX:0.9729,scaleY:0.9729,y:-0.1,alpha:0.9822},0).wait(1).to({scaleX:0.984,scaleY:0.984,y:-0.05,alpha:0.9895},0).wait(1).to({scaleX:0.9919,scaleY:0.9919,alpha:0.9947},0).wait(1).to({scaleX:0.997,scaleY:0.997,alpha:0.9981},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.9998,scaleY:0.9998,x:-1.1,y:-3.1,alpha:1},0).wait(9));

	// Layer_4
	this.instance_1 = new lib.butt_base();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.6016;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19,cjs.Ease.cubicOut).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,-14.6,139.5,29.299999999999997);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_44 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_45 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_46 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_47 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_48 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_49 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_50 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_51 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_52 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_53 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_54 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_55 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_56 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_57 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_58 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_59 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_60 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_61 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_62 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_63 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_64 = new cjs.Graphics().p("Eg43gHCMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_65 = new cjs.Graphics().p("Eg43gHTMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_66 = new cjs.Graphics().p("Eg43gHfMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_67 = new cjs.Graphics().p("Eg43gHnMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_68 = new cjs.Graphics().p("Eg43gHtMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_69 = new cjs.Graphics().p("Eg43gHwMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_70 = new cjs.Graphics().p("Eg43gHyMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_71 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_72 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_73 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_74 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_388 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1882 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1883 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1884 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1885 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1886 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1887 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1888 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1889 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1890 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1891 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1892 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1893 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1894 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1895 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1896 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1897 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1898 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1899 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1900 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1901 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1902 = new cjs.Graphics().p("Eg43gHCMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1903 = new cjs.Graphics().p("Eg43gHTMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1904 = new cjs.Graphics().p("Eg43gHfMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1905 = new cjs.Graphics().p("Eg43gHnMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1906 = new cjs.Graphics().p("Eg43gHtMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1907 = new cjs.Graphics().p("Eg43gHwMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1908 = new cjs.Graphics().p("Eg43gHyMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1909 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1910 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1911 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_1912 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:364.0051,y:45}).wait(44).to({graphics:mask_graphics_44,x:364.0051,y:45}).wait(1).to({graphics:mask_graphics_45,x:364.0051,y:44.999}).wait(1).to({graphics:mask_graphics_46,x:364.0051,y:44.9842}).wait(1).to({graphics:mask_graphics_47,x:364.0051,y:44.92}).wait(1).to({graphics:mask_graphics_48,x:364.0051,y:44.7472}).wait(1).to({graphics:mask_graphics_49,x:364.0051,y:44.3827}).wait(1).to({graphics:mask_graphics_50,x:364.0051,y:43.72}).wait(1).to({graphics:mask_graphics_51,x:364.0051,y:42.6286}).wait(1).to({graphics:mask_graphics_52,x:364.0051,y:40.9546}).wait(1).to({graphics:mask_graphics_53,x:364.0051,y:38.52}).wait(1).to({graphics:mask_graphics_54,x:364.0051,y:35.1235}).wait(1).to({graphics:mask_graphics_55,x:364.0051,y:30.5398}).wait(1).to({graphics:mask_graphics_56,x:364.0051,y:24.52}).wait(1).to({graphics:mask_graphics_57,x:364.0051,y:16.7916}).wait(1).to({graphics:mask_graphics_58,x:364.0051,y:7.0583}).wait(1).to({graphics:mask_graphics_59,x:364.0051,y:-5}).wait(1).to({graphics:mask_graphics_60,x:364.0051,y:-17.0583}).wait(1).to({graphics:mask_graphics_61,x:364.0051,y:-26.7916}).wait(1).to({graphics:mask_graphics_62,x:364.0051,y:-34.52}).wait(1).to({graphics:mask_graphics_63,x:364.0051,y:-40.5398}).wait(1).to({graphics:mask_graphics_64,x:364.0051,y:-45.0617}).wait(1).to({graphics:mask_graphics_65,x:364.0051,y:-46.76}).wait(1).to({graphics:mask_graphics_66,x:364.0051,y:-47.9773}).wait(1).to({graphics:mask_graphics_67,x:364.0051,y:-48.8143}).wait(1).to({graphics:mask_graphics_68,x:364.0051,y:-49.36}).wait(1).to({graphics:mask_graphics_69,x:364.0051,y:-49.6914}).wait(1).to({graphics:mask_graphics_70,x:364.0051,y:-49.8736}).wait(1).to({graphics:mask_graphics_71,x:364.0051,y:-49.96}).wait(1).to({graphics:mask_graphics_72,x:364.0051,y:-49.9921}).wait(1).to({graphics:mask_graphics_73,x:364.0051,y:-49.9995}).wait(1).to({graphics:mask_graphics_74,x:364.0051,y:-50}).wait(1).to({graphics:null,x:0,y:0}).wait(313).to({graphics:mask_graphics_388,x:364.0051,y:45}).wait(1494).to({graphics:mask_graphics_1882,x:364.0051,y:45}).wait(1).to({graphics:mask_graphics_1883,x:364.0051,y:44.999}).wait(1).to({graphics:mask_graphics_1884,x:364.0051,y:44.9842}).wait(1).to({graphics:mask_graphics_1885,x:364.0051,y:44.92}).wait(1).to({graphics:mask_graphics_1886,x:364.0051,y:44.7472}).wait(1).to({graphics:mask_graphics_1887,x:364.0051,y:44.3827}).wait(1).to({graphics:mask_graphics_1888,x:364.0051,y:43.72}).wait(1).to({graphics:mask_graphics_1889,x:364.0051,y:42.6286}).wait(1).to({graphics:mask_graphics_1890,x:364.0051,y:40.9546}).wait(1).to({graphics:mask_graphics_1891,x:364.0051,y:38.52}).wait(1).to({graphics:mask_graphics_1892,x:364.0051,y:35.1235}).wait(1).to({graphics:mask_graphics_1893,x:364.0051,y:30.5398}).wait(1).to({graphics:mask_graphics_1894,x:364.0051,y:24.52}).wait(1).to({graphics:mask_graphics_1895,x:364.0051,y:16.7916}).wait(1).to({graphics:mask_graphics_1896,x:364.0051,y:7.0583}).wait(1).to({graphics:mask_graphics_1897,x:364.0051,y:-5}).wait(1).to({graphics:mask_graphics_1898,x:364.0051,y:-17.0583}).wait(1).to({graphics:mask_graphics_1899,x:364.0051,y:-26.7916}).wait(1).to({graphics:mask_graphics_1900,x:364.0051,y:-34.52}).wait(1).to({graphics:mask_graphics_1901,x:364.0051,y:-40.5398}).wait(1).to({graphics:mask_graphics_1902,x:364.0051,y:-45.0617}).wait(1).to({graphics:mask_graphics_1903,x:364.0051,y:-46.76}).wait(1).to({graphics:mask_graphics_1904,x:364.0051,y:-47.9773}).wait(1).to({graphics:mask_graphics_1905,x:364.0051,y:-48.8143}).wait(1).to({graphics:mask_graphics_1906,x:364.0051,y:-49.36}).wait(1).to({graphics:mask_graphics_1907,x:364.0051,y:-49.6914}).wait(1).to({graphics:mask_graphics_1908,x:364.0051,y:-49.8736}).wait(1).to({graphics:mask_graphics_1909,x:364.0051,y:-49.96}).wait(1).to({graphics:mask_graphics_1910,x:364.0051,y:-49.9921}).wait(1).to({graphics:mask_graphics_1911,x:364.0051,y:-49.9995}).wait(1).to({graphics:mask_graphics_1912,x:364.0051,y:-50}).wait(1).to({graphics:null,x:0,y:0}).wait(340));

	// TXT01
	this.instance = new lib.TXT1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(365,48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},75).wait(313).to({_off:false},0).to({_off:true},1525).wait(340));

	// LOGO_WH
	this.instance_1 = new lib.ALFALOGO_WH();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65,23);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},75).wait(313).to({_off:false},0).to({_off:true},1525).wait(340));

	// BG_RED
	this.instance_2 = new lib.BG_RED();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364,45,1,1,0,0,0,364,45);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},75).wait(313).to({_off:false},0).to({_off:true},1525).wait(340));

	// MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_1_graphics_231 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_1_graphics_232 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_233 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_234 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_235 = new cjs.Graphics().p("Eg43gHAMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_236 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_237 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_238 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_239 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_240 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_241 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_242 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_243 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_244 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_245 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_246 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_247 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_248 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_249 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_250 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_251 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_252 = new cjs.Graphics().p("Eg43gHLMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_253 = new cjs.Graphics().p("Eg43gHXMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_254 = new cjs.Graphics().p("Eg43gHgMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_255 = new cjs.Graphics().p("Eg43gHlMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_256 = new cjs.Graphics().p("Eg43gHoMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_257 = new cjs.Graphics().p("Eg43gHqMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_258 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_259 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_260 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_261 = new cjs.Graphics().p("Eg43gHsMBxvAAAIAAOEMhxvAAAg");
	var mask_1_graphics_1882 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_1_graphics_2069 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_1_graphics_2070 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2071 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2072 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2073 = new cjs.Graphics().p("Eg43gHAMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2074 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2075 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2076 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2077 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2078 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2079 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2080 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2081 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2082 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2083 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2084 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2085 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2086 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2087 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2088 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2089 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2090 = new cjs.Graphics().p("Eg43gHLMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2091 = new cjs.Graphics().p("Eg43gHXMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2092 = new cjs.Graphics().p("Eg43gHgMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2093 = new cjs.Graphics().p("Eg43gHlMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2094 = new cjs.Graphics().p("Eg43gHoMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2095 = new cjs.Graphics().p("Eg43gHqMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2096 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2097 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2098 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_2099 = new cjs.Graphics().p("Eg43gHsMBxvAAAIAAOEMhxvAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:364.0051,y:45.25}).wait(187).to({graphics:mask_1_graphics_231,x:364.0051,y:45.25}).wait(1).to({graphics:mask_1_graphics_232,x:364.0051,y:45.2495}).wait(1).to({graphics:mask_1_graphics_233,x:364.0051,y:45.2422}).wait(1).to({graphics:mask_1_graphics_234,x:364.0051,y:45.2104}).wait(1).to({graphics:mask_1_graphics_235,x:364.0051,y:45.1249}).wait(1).to({graphics:mask_1_graphics_236,x:364.0051,y:44.8889}).wait(1).to({graphics:mask_1_graphics_237,x:364.0051,y:44.2328}).wait(1).to({graphics:mask_1_graphics_238,x:364.0051,y:43.1524}).wait(1).to({graphics:mask_1_graphics_239,x:364.0051,y:41.495}).wait(1).to({graphics:mask_1_graphics_240,x:364.0051,y:39.0848}).wait(1).to({graphics:mask_1_graphics_241,x:364.0051,y:35.7222}).wait(1).to({graphics:mask_1_graphics_242,x:364.0051,y:31.1844}).wait(1).to({graphics:mask_1_graphics_243,x:364.0051,y:25.2248}).wait(1).to({graphics:mask_1_graphics_244,x:364.0051,y:17.5737}).wait(1).to({graphics:mask_1_graphics_245,x:364.0051,y:7.9377}).wait(1).to({graphics:mask_1_graphics_246,x:364.0051,y:-4}).wait(1).to({graphics:mask_1_graphics_247,x:364.0051,y:-15.9377}).wait(1).to({graphics:mask_1_graphics_248,x:364.0051,y:-25.5737}).wait(1).to({graphics:mask_1_graphics_249,x:364.0051,y:-33.2248}).wait(1).to({graphics:mask_1_graphics_250,x:364.0051,y:-39.1844}).wait(1).to({graphics:mask_1_graphics_251,x:364.0051,y:-43.7222}).wait(1).to({graphics:mask_1_graphics_252,x:364.0051,y:-46.0424}).wait(1).to({graphics:mask_1_graphics_253,x:364.0051,y:-47.2475}).wait(1).to({graphics:mask_1_graphics_254,x:364.0051,y:-48.0762}).wait(1).to({graphics:mask_1_graphics_255,x:364.0051,y:-48.6164}).wait(1).to({graphics:mask_1_graphics_256,x:364.0051,y:-48.9445}).wait(1).to({graphics:mask_1_graphics_257,x:364.0051,y:-49.1249}).wait(1).to({graphics:mask_1_graphics_258,x:364.0051,y:-49.2104}).wait(1).to({graphics:mask_1_graphics_259,x:364.0051,y:-49.2422}).wait(1).to({graphics:mask_1_graphics_260,x:364.0051,y:-49.2495}).wait(1).to({graphics:mask_1_graphics_261,x:364.0051,y:-49.25}).wait(1).to({graphics:null,x:0,y:0}).wait(1620).to({graphics:mask_1_graphics_1882,x:364.0051,y:45.25}).wait(187).to({graphics:mask_1_graphics_2069,x:364.0051,y:45.25}).wait(1).to({graphics:mask_1_graphics_2070,x:364.0051,y:45.2495}).wait(1).to({graphics:mask_1_graphics_2071,x:364.0051,y:45.2422}).wait(1).to({graphics:mask_1_graphics_2072,x:364.0051,y:45.2104}).wait(1).to({graphics:mask_1_graphics_2073,x:364.0051,y:45.1249}).wait(1).to({graphics:mask_1_graphics_2074,x:364.0051,y:44.8889}).wait(1).to({graphics:mask_1_graphics_2075,x:364.0051,y:44.2328}).wait(1).to({graphics:mask_1_graphics_2076,x:364.0051,y:43.1524}).wait(1).to({graphics:mask_1_graphics_2077,x:364.0051,y:41.495}).wait(1).to({graphics:mask_1_graphics_2078,x:364.0051,y:39.0848}).wait(1).to({graphics:mask_1_graphics_2079,x:364.0051,y:35.7222}).wait(1).to({graphics:mask_1_graphics_2080,x:364.0051,y:31.1844}).wait(1).to({graphics:mask_1_graphics_2081,x:364.0051,y:25.2248}).wait(1).to({graphics:mask_1_graphics_2082,x:364.0051,y:17.5737}).wait(1).to({graphics:mask_1_graphics_2083,x:364.0051,y:7.9377}).wait(1).to({graphics:mask_1_graphics_2084,x:364.0051,y:-4}).wait(1).to({graphics:mask_1_graphics_2085,x:364.0051,y:-15.9377}).wait(1).to({graphics:mask_1_graphics_2086,x:364.0051,y:-25.5737}).wait(1).to({graphics:mask_1_graphics_2087,x:364.0051,y:-33.2248}).wait(1).to({graphics:mask_1_graphics_2088,x:364.0051,y:-39.1844}).wait(1).to({graphics:mask_1_graphics_2089,x:364.0051,y:-43.7222}).wait(1).to({graphics:mask_1_graphics_2090,x:364.0051,y:-46.0424}).wait(1).to({graphics:mask_1_graphics_2091,x:364.0051,y:-47.2475}).wait(1).to({graphics:mask_1_graphics_2092,x:364.0051,y:-48.0762}).wait(1).to({graphics:mask_1_graphics_2093,x:364.0051,y:-48.6164}).wait(1).to({graphics:mask_1_graphics_2094,x:364.0051,y:-48.9445}).wait(1).to({graphics:mask_1_graphics_2095,x:364.0051,y:-49.1249}).wait(1).to({graphics:mask_1_graphics_2096,x:364.0051,y:-49.2104}).wait(1).to({graphics:mask_1_graphics_2097,x:364.0051,y:-49.2422}).wait(1).to({graphics:mask_1_graphics_2098,x:364.0051,y:-49.2495}).wait(1).to({graphics:mask_1_graphics_2099,x:364.0051,y:-49.25}).wait(1).to({graphics:null,x:0,y:0}).wait(153));

	// LOGO_RED
	this.instance_3 = new lib.ALFALOGO_RD();
	this.instance_3.parent = this;
	this.instance_3.setTransform(58,21);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({_off:true},218).wait(1620).to({_off:false},0).to({_off:true},218).wait(153));

	// alfabank.ru
	this.instance_4 = new lib.alfabank();
	this.instance_4.parent = this;
	this.instance_4.setTransform(671,71);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(174).to({_off:false},0).to({alpha:1},19).to({_off:true},69).wait(1750).to({_off:false,alpha:0},0).to({alpha:1},19).to({_off:true},69).wait(153));

	// BUTT
	this.instance_5 = new lib.BUT_mov("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(462.75,44.65);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).to({_off:true},88).wait(1750).to({_off:false},0).to({_off:true},88).wait(153));

	// TXT02
	this.instance_6 = new lib.TXT02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(462.95,41.95,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},20,cjs.Ease.cubicOut).wait(34).to({regX:0.3,regY:0.3,scaleX:0.2,scaleY:0.2,alpha:0},21,cjs.Ease.cubicIn).to({_off:true},88).wait(1675).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},20,cjs.Ease.cubicOut).wait(34).to({regX:0.3,regY:0.3,scaleX:0.2,scaleY:0.2,alpha:0},21,cjs.Ease.cubicIn).to({_off:true},88).wait(153));

	// DED
	this.instance_7 = new lib.DED("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(437.5,59.5,2,2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,x:400,y:57.5},45,cjs.Ease.cubicInOut).to({x:277,startPosition:30},30,cjs.Ease.cubicInOut).to({_off:true},143).wait(1620).to({_off:false,scaleX:2,scaleY:2,x:437.5,y:59.5,startPosition:0},0).to({scaleX:1,scaleY:1,x:400,y:57.5},45,cjs.Ease.cubicInOut).to({x:277,startPosition:30},30,cjs.Ease.cubicInOut).to({_off:true},143).wait(153));

	// BAG
	this.instance_8 = new lib.BAG();
	this.instance_8.parent = this;
	this.instance_8.setTransform(317.5,36.5,2,2);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,x:340,y:46},45,cjs.Ease.cubicInOut).to({x:217},30,cjs.Ease.cubicInOut).to({_off:true},143).wait(1620).to({_off:false,scaleX:2,scaleY:2,x:317.5,y:36.5},0).to({scaleX:1,scaleY:1,x:340,y:46},45,cjs.Ease.cubicInOut).to({x:217},30,cjs.Ease.cubicInOut).to({_off:true},143).wait(153));

	// BG_SNOW
	this.instance_9 = new lib.BG();
	this.instance_9.parent = this;
	this.instance_9.setTransform(602.5,35.5,2,2,0,0,0,476.5,45.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,x:482.5,y:45.5},45,cjs.Ease.cubicInOut).to({x:359.5},30,cjs.Ease.cubicInOut).to({_off:true},143).wait(1620).to({_off:false,scaleX:2,scaleY:2,x:602.5,y:35.5},0).to({scaleX:1,scaleY:1,x:482.5,y:45.5},45,cjs.Ease.cubicInOut).to({x:359.5},30,cjs.Ease.cubicInOut).to({_off:true},143).wait(153));

	// MASK copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_231 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_2_graphics_356 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_2_graphics_357 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_358 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_359 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_360 = new cjs.Graphics().p("Eg43gHAMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_361 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_362 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_363 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_364 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_365 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_366 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_367 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_368 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_369 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_370 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_371 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_372 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_373 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_374 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_375 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_376 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_377 = new cjs.Graphics().p("Eg43gHLMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_378 = new cjs.Graphics().p("Eg43gHXMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_379 = new cjs.Graphics().p("Eg43gHgMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_380 = new cjs.Graphics().p("Eg43gHlMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_381 = new cjs.Graphics().p("Eg43gHoMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_382 = new cjs.Graphics().p("Eg43gHqMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_383 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_384 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_385 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_386 = new cjs.Graphics().p("Eg43gHsMBxvAAAIAAOEMhxvAAAg");
	var mask_2_graphics_2069 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_2_graphics_2212 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_2_graphics_2213 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2214 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2215 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2216 = new cjs.Graphics().p("Eg43gHAMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2217 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2218 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2219 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2220 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2221 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2222 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2223 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2224 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2225 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2226 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2227 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2228 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2229 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2230 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2231 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2232 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2233 = new cjs.Graphics().p("Eg43gHLMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2234 = new cjs.Graphics().p("Eg43gHXMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2235 = new cjs.Graphics().p("Eg43gHgMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2236 = new cjs.Graphics().p("Eg43gHlMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2237 = new cjs.Graphics().p("Eg43gHoMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2238 = new cjs.Graphics().p("Eg43gHqMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2239 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2240 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2241 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_2242 = new cjs.Graphics().p("Eg43gHsMBxvAAAIAAOEMhxvAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(231).to({graphics:mask_2_graphics_231,x:364.0051,y:45.25}).wait(125).to({graphics:mask_2_graphics_356,x:364.0051,y:45.25}).wait(1).to({graphics:mask_2_graphics_357,x:364.0051,y:45.2495}).wait(1).to({graphics:mask_2_graphics_358,x:364.0051,y:45.2422}).wait(1).to({graphics:mask_2_graphics_359,x:364.0051,y:45.2104}).wait(1).to({graphics:mask_2_graphics_360,x:364.0051,y:45.1249}).wait(1).to({graphics:mask_2_graphics_361,x:364.0051,y:44.8889}).wait(1).to({graphics:mask_2_graphics_362,x:364.0051,y:44.2328}).wait(1).to({graphics:mask_2_graphics_363,x:364.0051,y:43.1524}).wait(1).to({graphics:mask_2_graphics_364,x:364.0051,y:41.495}).wait(1).to({graphics:mask_2_graphics_365,x:364.0051,y:39.0848}).wait(1).to({graphics:mask_2_graphics_366,x:364.0051,y:35.7222}).wait(1).to({graphics:mask_2_graphics_367,x:364.0051,y:31.1844}).wait(1).to({graphics:mask_2_graphics_368,x:364.0051,y:25.2248}).wait(1).to({graphics:mask_2_graphics_369,x:364.0051,y:17.5737}).wait(1).to({graphics:mask_2_graphics_370,x:364.0051,y:7.9377}).wait(1).to({graphics:mask_2_graphics_371,x:364.0051,y:-4}).wait(1).to({graphics:mask_2_graphics_372,x:364.0051,y:-15.9377}).wait(1).to({graphics:mask_2_graphics_373,x:364.0051,y:-25.5737}).wait(1).to({graphics:mask_2_graphics_374,x:364.0051,y:-33.2248}).wait(1).to({graphics:mask_2_graphics_375,x:364.0051,y:-39.1844}).wait(1).to({graphics:mask_2_graphics_376,x:364.0051,y:-43.7222}).wait(1).to({graphics:mask_2_graphics_377,x:364.0051,y:-46.0424}).wait(1).to({graphics:mask_2_graphics_378,x:364.0051,y:-47.2475}).wait(1).to({graphics:mask_2_graphics_379,x:364.0051,y:-48.0762}).wait(1).to({graphics:mask_2_graphics_380,x:364.0051,y:-48.6164}).wait(1).to({graphics:mask_2_graphics_381,x:364.0051,y:-48.9445}).wait(1).to({graphics:mask_2_graphics_382,x:364.0051,y:-49.1249}).wait(1).to({graphics:mask_2_graphics_383,x:364.0051,y:-49.2104}).wait(1).to({graphics:mask_2_graphics_384,x:364.0051,y:-49.2422}).wait(1).to({graphics:mask_2_graphics_385,x:364.0051,y:-49.2495}).wait(1).to({graphics:mask_2_graphics_386,x:364.0051,y:-49.25}).wait(1).to({graphics:null,x:0,y:0}).wait(1682).to({graphics:mask_2_graphics_2069,x:364.0051,y:45.25}).wait(143).to({graphics:mask_2_graphics_2212,x:364.0051,y:45.25}).wait(1).to({graphics:mask_2_graphics_2213,x:364.0051,y:45.2495}).wait(1).to({graphics:mask_2_graphics_2214,x:364.0051,y:45.2422}).wait(1).to({graphics:mask_2_graphics_2215,x:364.0051,y:45.2104}).wait(1).to({graphics:mask_2_graphics_2216,x:364.0051,y:45.1249}).wait(1).to({graphics:mask_2_graphics_2217,x:364.0051,y:44.8889}).wait(1).to({graphics:mask_2_graphics_2218,x:364.0051,y:44.2328}).wait(1).to({graphics:mask_2_graphics_2219,x:364.0051,y:43.1524}).wait(1).to({graphics:mask_2_graphics_2220,x:364.0051,y:41.495}).wait(1).to({graphics:mask_2_graphics_2221,x:364.0051,y:39.0848}).wait(1).to({graphics:mask_2_graphics_2222,x:364.0051,y:35.7222}).wait(1).to({graphics:mask_2_graphics_2223,x:364.0051,y:31.1844}).wait(1).to({graphics:mask_2_graphics_2224,x:364.0051,y:25.2248}).wait(1).to({graphics:mask_2_graphics_2225,x:364.0051,y:17.5737}).wait(1).to({graphics:mask_2_graphics_2226,x:364.0051,y:7.9377}).wait(1).to({graphics:mask_2_graphics_2227,x:364.0051,y:-4}).wait(1).to({graphics:mask_2_graphics_2228,x:364.0051,y:-15.9377}).wait(1).to({graphics:mask_2_graphics_2229,x:364.0051,y:-25.5737}).wait(1).to({graphics:mask_2_graphics_2230,x:364.0051,y:-33.2248}).wait(1).to({graphics:mask_2_graphics_2231,x:364.0051,y:-39.1844}).wait(1).to({graphics:mask_2_graphics_2232,x:364.0051,y:-43.7222}).wait(1).to({graphics:mask_2_graphics_2233,x:364.0051,y:-46.0424}).wait(1).to({graphics:mask_2_graphics_2234,x:364.0051,y:-47.2475}).wait(1).to({graphics:mask_2_graphics_2235,x:364.0051,y:-48.0762}).wait(1).to({graphics:mask_2_graphics_2236,x:364.0051,y:-48.6164}).wait(1).to({graphics:mask_2_graphics_2237,x:364.0051,y:-48.9445}).wait(1).to({graphics:mask_2_graphics_2238,x:364.0051,y:-49.1249}).wait(1).to({graphics:mask_2_graphics_2239,x:364.0051,y:-49.2104}).wait(1).to({graphics:mask_2_graphics_2240,x:364.0051,y:-49.2422}).wait(1).to({graphics:mask_2_graphics_2241,x:364.0051,y:-49.2495}).wait(1).to({graphics:mask_2_graphics_2242,x:364.0051,y:-49.25}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// LOGO_RED copy
	this.instance_10 = new lib.ALFALOGO_RD();
	this.instance_10.parent = this;
	this.instance_10.setTransform(58,21);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(231).to({_off:false},0).to({_off:true},156).wait(1682).to({_off:false},0).to({_off:true},174).wait(10));

	// Legal2
	this.instance_11 = new lib.legal2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(412.95,174);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(309).to({_off:false},0).to({alpha:1},15).to({_off:true},63).wait(1769).to({_off:false,alpha:0},0).to({alpha:1},15).to({_off:true},72).wait(10));

	// Legal1
	this.instance_12 = new lib.legal1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(412.95,174);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(255).to({_off:false},0).to({alpha:1},13).wait(32).to({alpha:0},15).to({_off:true},1).wait(1777).to({_off:false},0).to({alpha:1},13).wait(41).to({alpha:0},15).to({_off:true},1).wait(90));

	// BG_WH
	this.instance_13 = new lib.BG_WH();
	this.instance_13.parent = this;
	this.instance_13.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(231).to({_off:false},0).to({_off:true},155).wait(1683).to({_off:false},0).to({_off:true},174).wait(10));

	// LOGO_WH copy
	this.instance_14 = new lib.ALFALOGO_WH();
	this.instance_14.parent = this;
	this.instance_14.setTransform(65,23);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(356).to({_off:false},0).to({_off:true},32).wait(1824).to({_off:false},0).wait(41));

	// BG_RED copy
	this.instance_15 = new lib.BG_RED();
	this.instance_15.parent = this;
	this.instance_15.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(356).to({_off:false},0).to({_off:true},32).wait(1824).to({_off:false},0).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-113,756,534);


// stage content:
(lib.credit88_yandexmain_728x90_do150kb = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(20.1,44,708.9,47);
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