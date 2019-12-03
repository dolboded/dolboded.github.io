(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,0,400,667],[0,669,438,239]]}
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



(lib.DED = function() {
	this.initialize(img.DED);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,667);


(lib.eyes = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
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


(lib.txt03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AgTBKIAAglIAmAAIAAAlgAgQAZIAAhiIAhAAIAABig");
	this.shape.setTransform(95.6,77.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF3124").s().p("Ag2A2IAAhsIBEAAQARABALAHQAKAIAAAOQAAAGgCAFQgDAFgDADQgEADgFABQAFABAFADQAEADADAFQADAGAAAHQAAANgKAJQgLAJgTgBgAgUAfIAbAAQAHAAADgDQADgCAAgFQAAgFgDgCQgDgDgGAAIgcAAgAgUgLIAaAAQAFAAAEgBQADgDAAgFQAAgFgDgCQgEgCgFAAIgaAAg");
	this.shape_1.setTransform(86.5,79.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF3124").s().p("AgeAyQgNgIgIgMQgIgNABgRQgBgQAIgNQAIgNANgHQANgHARAAQARAAAOAHQANAHAIANQAIANAAAQQAAARgIANQgIAMgNAIQgOAHgRAAQgRAAgNgHgAgMgXQgHAEgCAGQgDAGgBAHQABAIADAGQACAGAHAEQAFADAHAAQAHAAAHgDQAFgEADgGQADgGAAgIQAAgHgDgGQgDgGgFgEQgHgEgHAAQgHAAgFAEg");
	this.shape_2.setTransform(73.6,79.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF3124").s().p("AARA2IgsgvIAAAvIgiAAIAAhsIAiAAIAAAtIArgtIArAAIg0A0IA3A4g");
	this.shape_3.setTransform(61.8,79.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF3124").s().p("Ag7BMIAAiWIAiAAIAAARIAFgGQAEgEAIgEQAHgEALgBQAOAAALAIQALAGAHANQAGAMABASQgBASgGAMQgHAMgLAHQgLAHgOAAQgLgBgHgDQgIgDgEgFIgFgGIAAA5gAgSgnQgHAIAAAMQAAAMAHAHQAHAHALAAQAMAAAGgHQAHgHAAgMQAAgMgHgIQgGgHgMgBQgLABgHAHg");
	this.shape_4.setTransform(48.2,81.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF3124").s().p("AgiAyQgKgHgHgNQgHgMAAgSQAAgRAHgMQAHgNAKgHQALgHAOAAQAKABAIADQAHADAEAFIAFAGIAAgQIAiAAIAABsIgiAAIAAgQIgFAHQgEAEgHAEQgHADgLABQgOAAgLgHgAgLgXQgHAEgCAGQgDAGgBAHQABAIADAGQACAGAHAEQAFADAGAAQAIAAAGgDQAFgEAEgGQACgGAAgIQAAgHgCgGQgEgGgFgEQgGgEgIAAQgGAAgFAEg");
	this.shape_5.setTransform(34.4,79.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EF3124").s().p("AAnBGIAAgfIhNAAIAAAfIgeAAIAAg8IALAAQAEgGAEgKQADgLACgRIAEgjIBbAAIAABPIASAAIAAA8gAgNghIgDAUIgEANIgEAKIApAAIAAgzIgdAAg");
	this.shape_6.setTransform(21.5,81.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF3124").s().p("AgeAyQgNgIgIgMQgHgNAAgRQAAgQAHgNQAIgNANgHQAOgHAQAAQARAAANAHQAOAHAHANQAJANgBAQQABARgJANQgHAMgOAIQgNAHgRAAQgQAAgOgHgAgNgXQgFAEgEAGQgCAGAAAHQAAAIACAGQAEAGAFAEQAGADAHAAQAIAAAFgDQAGgEADgGQADgGAAgIQAAgHgDgGQgDgGgGgEQgFgEgIAAQgHAAgGAEg");
	this.shape_7.setTransform(8.7,79.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EF3124").s().p("AAVA2IAAhPIgpAAIAABPIgiAAIAAhsIBtAAIAABsg");
	this.shape_8.setTransform(-4.2,79.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EF3124").s().p("AgdAyQgOgIgGgNQgIgMAAgRQAAgQAIgNQAGgNANgHQAOgHAQAAQARAAAOAHQAMAHAIANQAHANAAARIAAAFIhRAAQABALAHAGQAHAHALAAQAGAAAEgBIAHgEIADgDIAiAAQgBAFgDAGQgEAGgGAFQgHAGgKADQgJAEgOAAQgSAAgOgHgAAYgNQgDgJgGgFQgGgEgJAAQgJAAgFAEQgGAFgDAJIAvAAIAAAAg");
	this.shape_9.setTransform(-21.1,79.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EF3124").s().p("AhXA2IAAhsIAiAAIAABQIAlAAIAAhQIAhAAIAABQIAlAAIAAhQIAiAAIAABsg");
	this.shape_10.setTransform(-37.1,79.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EF3124").s().p("Ag4A2IAAhsIAiAAIAAAiIAkAAQAPgBAKAGQAJAEAFAJQAEAHAAALQAAAKgEAJQgFAIgJAGQgKAGgPgBgAgWAdIAeAAQAHgBAEgDQAEgDAAgGQAAgGgEgDQgEgCgHAAIgeAAg");
	this.shape_11.setTransform(-52.8,79.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EF3124").s().p("Ag5A3IAAgfIACAAQAGAAACgCQADgCACgEQABgEABgIIAGg6IBdAAIAABsIgjAAIAAhPIgeAAIgEAhQgBAQgDAKQgFALgIAFQgIAFgOAAg");
	this.shape_12.setTransform(-66.3,79.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EF3124").s().p("AgeAyQgNgIgIgMQgIgNABgRQgBgQAIgNQAIgNANgHQANgHARAAQARAAAOAHQANAHAIANQAHANABAQQgBARgHANQgIAMgNAIQgOAHgRAAQgRAAgNgHgAgMgXQgHAEgCAGQgEAGAAAHQAAAIAEAGQACAGAHAEQAFADAHAAQAHAAAHgDQAFgEADgGQADgGAAgIQAAgHgDgGQgDgGgFgEQgHgEgHAAQgHAAgFAEg");
	this.shape_13.setTransform(-78.6,79.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EF3124").s().p("AgeBIQgOgHgHgOQgIgNAAgVIABgNIABgLQABgTAHgNQAGgNAPgJQANgIAWgDIArgHIAAAdIgrAHQgLACgIADQgHAEgFAHQgEAGgBALQAGgIAJgFQAKgEAMAAQAQAAALAHQAMAGAGAMQAHALAAAQQgBAQgHANQgIALgOAHQgNAHgRABQgRgBgNgHgAgSAIQgGAHAAALQAAALAGAGQAHAHALABQAMgBAHgHQAGgGAAgLQAAgLgGgHQgHgGgMgBQgLABgHAGg");
	this.shape_14.setTransform(-91.3,77.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EF3124").s().p("Ag6AMIAAgXIB1AAIAAAXg");
	this.shape_15.setTransform(61.8,53.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EF3124").s().p("AggBMIASgsIgxhrIAnAAIAaBCIAchCIAiAAIg/CXg");
	this.shape_16.setTransform(44.6,56.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EF3124").s().p("AgQA3IAAhQIgpAAIAAgcIBzAAIAAAcIgpAAIAABQg");
	this.shape_17.setTransform(32.8,54.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EF3124").s().p("AAXA3IAAhAIguBAIghAAIAAhsIAhAAIAAA/IAug/IAiAAIAABsg");
	this.shape_18.setTransform(20.3,54.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EF3124").s().p("AAnBGIAAgfIhNAAIAAAfIgeAAIAAg8IALAAQAEgGAEgKQADgLACgRIAEgjIBbAAIAABPIASAAIAAA8gAgNghIgDAUIgEANIgEAKIApAAIAAgzIgdAAg");
	this.shape_19.setTransform(7,55.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EF3124").s().p("AgdAyQgNgIgIgNQgHgMAAgRQAAgQAHgNQAIgNAMgHQANgHARAAQASAAAMAHQANAHAIANQAHANAAARIAAAFIhSAAQACALAHAGQAHAHAKAAQAHAAAEgBIAHgEIADgDIAiAAQgBAFgDAGQgEAGgGAFQgHAGgJADQgLAEgOAAQgRAAgOgHgAAYgNQgCgJgHgFQgGgEgJAAQgIAAgHAEQgFAFgDAJIAvAAIAAAAg");
	this.shape_20.setTransform(-5.6,54.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EF3124").s().p("Ag7BNIAAiWIAiAAIAAAQIAFgGQAEgFAIgEQAHgDALAAQAOAAALAGQALAIAHAMQAGANABARQgBASgGALQgHANgLAHQgLAHgOAAQgLgBgHgDQgIgDgEgFIgFgGIAAA6gAgSgmQgHAHAAAMQAAAMAHAHQAHAIALAAQAMAAAGgIQAHgHAAgMQAAgMgHgHQgGgIgMAAQgLAAgHAIg");
	this.shape_21.setTransform(-18.2,56.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EF3124").s().p("AARA3IgsgwIAAAwIgiAAIAAhsIAiAAIAAAsIArgsIArAAIg0A0IA3A4g");
	this.shape_22.setTransform(-30.7,54.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EF3124").s().p("AgeAyQgNgIgIgMQgHgNgBgRQABgQAHgNQAIgNANgHQAOgHAQAAQARAAANAHQAOAHAHANQAJANgBAQQABARgJANQgHAMgOAIQgNAHgRAAQgQAAgOgHgAgNgXQgFAEgEAGQgCAGAAAHQAAAIACAGQAEAGAFAEQAGADAHAAQAIAAAFgDQAGgEADgGQADgGAAgIQAAgHgDgGQgDgGgGgEQgFgEgIAAQgHAAgGAEg");
	this.shape_23.setTransform(-48.5,54.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EF3124").s().p("AAVA3IAAhQIgpAAIAABQIgiAAIAAhsIBtAAIAABsg");
	this.shape_24.setTransform(-61.3,54.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EF3124").s().p("AgiAyQgLgHgGgNQgHgMAAgSQAAgRAHgMQAGgNALgHQAMgHAOAAQAKABAHADQAHADAEAFIAFAGIAAgQIAiAAIAABsIghAAIAAgQIgGAHQgDAEgIAEQgHADgKABQgOAAgMgHgAgMgXQgFAEgEAGQgDAGAAAHQAAAIADAGQAEAGAFAEQAGADAHAAQAHAAAFgDQAHgEACgGQAEgGAAgIQAAgHgEgGQgCgGgHgEQgFgEgHAAQgHAAgGAEg");
	this.shape_25.setTransform(76.8,29.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EF3124").s().p("AARA2IgsgvIAAAvIgiAAIAAhsIAiAAIAAAtIArgtIArAAIg0A0IA3A4g");
	this.shape_26.setTransform(65,29.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EF3124").s().p("Ag2A2IAAhsIBEAAQASABAKAHQAKAIAAANQAAAIgCAEQgDAFgDADQgFADgEABQAFABAFADQAEADADAFQADAFAAAIQAAANgLAJQgKAJgTgBgAgUAfIAbAAQAHAAADgDQADgCAAgFQAAgFgDgCQgDgDgHAAIgbAAgAgUgLIAaAAQAFAAAEgBQADgDAAgFQAAgFgDgCQgDgDgGABIgaAAg");
	this.shape_27.setTransform(51.9,29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EF3124").s().p("AgiAyQgKgHgHgNQgHgMAAgSQAAgRAHgMQAHgNAKgHQALgHAOAAQAKABAIADQAHADAEAFIAFAGIAAgQIAiAAIAABsIgiAAIAAgQIgEAHQgFAEgHAEQgHADgLABQgOAAgLgHgAgLgXQgHAEgCAGQgDAGAAAHQAAAIADAGQACAGAHAEQAFADAGAAQAIAAAGgDQAGgEADgGQACgGAAgIQAAgHgCgGQgDgGgGgEQgGgEgIAAQgGAAgFAEg");
	this.shape_28.setTransform(38.5,29.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EF3124").s().p("AgQA2IAAhPIgpAAIAAgdIBzAAIAAAdIgpAAIAABPg");
	this.shape_29.setTransform(26.4,29.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EF3124").s().p("AgbAyQgMgHgIgNQgHgNAAgRQAAgQAHgNQAIgNAMgHQANgHAPAAQAOAAALAEQAKAEAGAGQAGAHAEAGQADAHAAAGIghAAIgDgEQgCgCgFgCQgEgDgGAAQgGAAgFAEQgGAEgCAGQgDAGAAAHQgBAMAHAIQAGAHAKABQAHgBAEgCQAEgCADgDIACgEIAhAAQAAAGgDAHQgDAHgHAGQgGAHgKAEQgKAEgPAAQgPAAgNgHg");
	this.shape_30.setTransform(14.8,29.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EF3124").s().p("AgdAyQgNgIgIgNQgHgMAAgRQAAgQAHgNQAIgNAMgHQANgHARAAQASAAAMAHQANAHAIANQAHANAAARIAAAFIhSAAQACALAHAGQAHAHAKAAQAHAAAEgBIAHgEIADgDIAiAAQAAAFgEAGQgEAGgGAFQgHAGgJADQgLAEgOAAQgRAAgOgHgAAYgNQgCgJgHgFQgGgEgJAAQgIAAgHAEQgFAFgDAJIAvAAIAAAAg");
	this.shape_31.setTransform(-1.6,29.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EF3124").s().p("AhXA2IAAhsIAiAAIAABQIAlAAIAAhQIAhAAIAABQIAlAAIAAhQIAiAAIAABsg");
	this.shape_32.setTransform(-17.6,29.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EF3124").s().p("Ag4A2IAAhsIAiAAIAAAiIAkAAQAPAAAKAEQAJAGAFAIQAEAIAAAKQAAAKgEAJQgFAIgJAGQgKAGgPgBgAgWAcIAeAAQAHAAAEgDQAEgDAAgGQAAgGgEgDQgEgCgHAAIgeAAg");
	this.shape_33.setTransform(-33.2,29.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EF3124").s().p("AAWA2IAAgpIgrAAIAAApIgiAAIAAhsIAiAAIAAAoIArAAIAAgoIAiAAIAABsg");
	this.shape_34.setTransform(-46.5,29.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EF3124").s().p("AgdAyQgOgIgGgNQgIgMAAgRQAAgQAIgNQAGgNAOgHQAMgHARAAQASAAANAHQANAHAHANQAHANAAARIAAAFIhSAAQACALAHAGQAHAHAKAAQAHAAAFgBIAGgEIAEgDIAhAAQAAAFgEAGQgEAGgGAFQgGAGgLADQgKAEgOAAQgRAAgOgHgAAYgNQgDgJgFgFQgHgEgJAAQgIAAgHAEQgGAFgCAJIAvAAIAAAAg");
	this.shape_35.setTransform(-59.2,29.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EF3124").s().p("AArA2IAAhLIghBLIgVAAIghhKIAABKIgfAAIAAhsIAvAAIAcBBIAehBIAvAAIAABsg");
	this.shape_36.setTransform(-74.1,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1 copy 2
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EF3124").s().p("ABRH0QAhg1ADgnIgpAAIAAhaIBWAAIAABQQAAA2gcAwgAkRGnQiTAAhXhHQhUhGAAhzQAAhZAzg9QAqgxA8gTQg1gRgmgtQgug4AAhSQAAhvBPhDQBRhGCQAAIAhAAQCRAABSBGQBNBDAABvQAABRgvA5QgjAtg2ARQA7ATApAxQA0A+AABYQABBzhVBGQhXBHiWAAgAl7A3QgsAlAAA9QAAA9AsAkQArAkBDAAIAeAAQBEAAArgkQAqgkABg9QgBg+gqglQgrgkhEAAIgeAAQhDAAgrAlgAlylJQgnAiAAA4QAAA5AnAhQAnAiBBAAIAYAAQBCAAAngiQAnghAAg5QAAg4gngiQgnghhCAAIgYAAQhBAAgnAhgAF6GgQhPAAgvgkQgsgjAAg8QAAgtAagfQAVgYAdgKQgbgJgRgWQgYgdAAgqQAAg6AqghQAsgiBNAAIASAAQBOAAAsAiQApAhAAA6QAAAqgXAdQgTAWgaAJQAdAKAVAYQAaAfgBAtQAAA8gsAjQguAkhQAAgAFPDpQgTAQAAAaQAAAbATAQQASAPAdAAIAMAAQAdAAARgPQAUgQgBgbQABgagUgQQgRgQgdAAIgMAAQgdAAgSAQgAFTAsQgRAOAAAZQAAAYARAPQAQAOAcAAIAKAAQAbAAARgOQARgPAAgYQAAgZgRgOQgRgOgbAAIgKAAQgcAAgQAOgANGGKQgUgTAAgcQAAgcAUgUQATgTAdAAQAcAAAUATQATAUAAAcQAAAcgTATQgUATgcAAQgdAAgTgTgANkFIQgIAIABALQgBALAIAIQAHAHALAAQAKAAAIgHQAHgIAAgLQAAgLgHgIQgIgHgKAAQgLAAgHAHgAulGIQgTgUAAgfQAAghATgTQAUgTAeAAQAeAAATATQAUATAAAhQAAAfgUAUQgTAUgeAAQgeAAgUgUgAuHE8QgHAJAAAQQAAAPAHAKQAHAKANAAQAMAAAHgKQAHgJAAgQQAAgQgHgJQgHgKgMAAQgNAAgHAKgAKpGYIC1j2IAxAAIi1D2gAsGGYIAAhkIgrAAIAAgjICAAAIAAAjIgqAAIAABkgAKSEPQgTgTAAgcQAAgcATgTQAUgTAcAAQAdAAAUATQASATAAAcQAAAcgSATQgUAUgdAAQgcAAgUgUgAKwDOQgHAHAAALQAAALAHAHQAIAIAKAAQALAAAIgIQAGgHAAgLQAAgLgGgHQgIgIgLAAQgKAAgIAIg");
	this.shape_37.setTransform(-0.3,-33.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03, new cjs.Rectangle(-100.3,-83.6,200.6,177.3), null);


(lib.txt02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtXBMIAAiUIAhAAIAAAPIAEgGQAEgEAGgEQAHgDAKgBQANAAAKAHQAKAGAFANQAHAMAAASQAAASgHAMQgFAMgKAHQgKAGgNABQgKgBgHgDQgGgEgDgDIgFgGIAAA4gAsxgmQgGAHAAAMQAAANAGAGQAGAIAKAAQAJAAAGgIQAFgGAAgNQAAgMgFgHQgGgIgJAAQgKAAgGAIgAoNBBIAAgfIhFAAIAAAfIgeAAIAAg7IALAAQADgGADgKQADgLACgRIACgiIBYAAIAABOIASAAIAAA7gAo8gkIgCATIgDAOQgCAFgDAEIAjAAIAAgyIgZAAgAg9AeQgKgHgHgMQgFgMAAgSQAAgRAFgNQAHgMAKgHQAJgGANAAQAKAAAGADQAGADADAEQADADABACIAAgNIAgAAIAABqIgfAAIAAgOIgFAGIgJAHQgGADgKABQgNgBgJgGgAgsgmQgFAHgBAMQABANAFAGQAGAIAJAAQAJAAAFgIQAFgGABgNQgBgMgFgHQgFgIgJAAQgJAAgGAIgArFAeQgMgHgHgNQgGgMgBgRQABgRAGgMQAHgNAMgHQAMgHAPAAQARAAALAHQAMAHAHAMQAGANABARIAAAGIhJAAQAAALAGAGQAFAGAKAAQAGAAADgBIAGgEIACgDIAiAAQgBAFgDAGQgCAGgHAGQgGAFgIADQgKAEgOAAQgRAAgMgHgAqXghQAAgIgGgFQgEgFgJAAQgIAAgFAFQgFAFgBAIIAmAAIAAAAgAAlAjIAAgfIACAAQAFAAADgCQADgBACgDQABgFABgIIADg5IBYAAIAABqIgiAAIAAhOIgZAAIgCAhQgBAPgDAKQgFALgIAFQgIAFgOAAgAOwAiIAAg7IgoA7IggAAIAAhqIAgAAIAAA8IAog8IAgAAIAABqgAMxAiIAAhLIgbBLIgWAAIgbhKIAABKIgeAAIAAhqIAxAAIAVA4IAUg4IAwAAIAABqgAKOAiIAAhqIAhAAIAABqgAIeAiIAAhqIAhAAIAAAgIAZAAQAPAAAKAFQAJAFAFAIQAEAJAAAKQAAAJgEAJQgFAIgJAGQgKAFgPAAgAI/AIIAUAAQAGAAAEgDQAEgCAAgGQAAgFgEgDQgEgDgGAAIgUAAgAHlAiIAAgoIgkAAIAAAoIgiAAIAAhqIAiAAIAAAmIAkAAIAAgmIAhAAIAABqgAFnAiIAAgiIgGAAIgQABQgPAAgJgEQgLgEgEgKQgGgKAAgQIAAgdIAhAAIAAAcQAAAJAEAFQAEAEAKAAIALgBIAFAAIAAgtIAiAAIAABqgADvAiIAAg7IgnA7IghAAIAAhqIAhAAIAAA8IAng8IAhAAIAABqgAiGAiIAAgoIgkAAIAAAoIgiAAIAAhqIAiAAIAAAmIAkAAIAAgmIAiAAIAABqgAlLAiIAAhOIgjAAIAAgcIBmAAIAAAcIgiAAIAABOgAmdAiIAAg7IgnA7IghAAIAAhqIAhAAIAAA8IAng8IAhAAIAABqgAuIAiIgmgtIAAAtIgiAAIAAhqIAiAAIAAArIAjgrIApAAIgqAzIAuA3g");
	this.shape.setTransform(0.7,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt02, new cjs.Rectangle(-99.2,-16.3,198.5,32.8), null);


(lib.txt01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABDGbQAagsADgfIgiAAIAAhLIBHAAIAABCQAAAsgXAogAjhFcQh5AAhHg7QhFg5AAhfQAAhJAqgyQAjgpAxgPQgtgOgeglQgmguABhEQAAhaBAg4QBDg6B2ABIAcAAQB3gBBDA6QA/A4AABaQAABEgmAuQgdAkgtAPQAyAQAhAoQAqAzABBIQgBBfhFA5QhHA7h7AAgAk3AtQgkAfAAAxQAAAyAkAeQAiAeA4AAIAZAAQA4AAAjgeQAjgeAAgyQAAgygjgfQgjgdg4AAIgZAAQg4AAgiAegAkwkOQghAbAAAvQAAAuAhAcQAgAbA1AAIAUAAQA2AAAggbQAhgcgBguQABgvghgbQgggcg2AAIgUAAQg1AAggAcgAE2FWQhBAAglgeQglgdAAgxQAAglAWgZQAQgUAYgJQgWgHgPgSQgTgYAAgjQAAguAigbQAkgdBAAAIAPAAQBAAAAkAdQAjAbAAAuQgBAjgTAYQgPASgWAIQAZAIAQAUQAVAZAAAlQAAAxglAdQgmAehBAAgAETDAQgPANAAAVQAAAVAPANQAPANAXABIAKAAQAYgBAPgNQAPgNAAgVQAAgVgPgNQgPgOgYAAIgKAAQgXAAgPAOgAEWAjQgOANAAAUQAAAUAOAMQAOAMAWAAIAIAAQAXAAAOgMQAOgMAAgUQAAgUgOgNQgOgLgXAAIgIAAQgWAAgOALgAKwFDQgPgPgBgXQABgYAPgPQAQgQAYAAQAYAAAQAQQAQAPAAAYQAAAXgQAPQgQARgYgBQgYABgQgRgALJENQgGAHAAAJQAAAJAGAGQAGAHAJAAQAJAAAGgHQAFgGABgJQgBgJgFgHQgGgFgJAAQgJAAgGAFgAr/FCQgPgQgBgaQABgbAPgPQAPgQAagBQAZABAPAQQAQAPAAAbQAAAagQAQQgPAQgZAAQgZAAgQgQgArmEDQgGAIAAANQAAAMAGAJQAFAIALAAQAKAAAGgIQAFgIAAgNQAAgNgFgIQgGgIgKAAQgLAAgFAIgAIwFQICUjMIApAAIiVDMgAp8FQIAAhTIgjAAIAAgdIBpAAIAAAdIgjAAIAABTgAIdDeQgQgPAAgXQAAgXAQgQQAQgPAXAAQAYAAAQAPQAQAQAAAXQAAAXgQAPQgQAQgYABQgXgBgQgQgAI1CoQgFAHAAAJQAAAJAFAGQAGAGAJAAQAJAAAHgGQAFgGAAgJQAAgJgFgHQgHgFgJAAQgJAAgGAFg");
	this.shape.setTransform(-0.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt01, new cjs.Rectangle(-79,-41.1,157.4,82.4), null);


(lib.LOGO_WH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApHB1IAAggICaAAIAAAggAiTBXIAAgrQgZgCgPgQQgQgQAAgYQAAgYAQgQQAPgQAZgDIAAgpIAcAAIAAApQAZACAQARQAPAQAAAYQAAAYgPAQQgQAQgZACIAAArgAh3ARQAMgCAHgIQAHgIAAgNQAAgNgHgIQgHgJgMgBgAimgjQgHAIAAANQAAANAHAIQAHAIAMACIAAg+QgMABgHAJgAD1AiQgLgLAAgSQAAgQALgJQAKgKAUAAIAcAAQAAgSgSAAQgJAAgFAEQgEADgBAEIgdAAQABgQAMgKQANgMAWAAQAWAAANAMQAMANAAAUIAAAlQAAAFACACQABACAEAAIAAAaIgKAAQgIAAgGgDQgGgDgDgGQgEAGgHAEQgJAFgMAAQgSAAgLgLgAEHAFQAAAPATAAQAJAAAGgFQAGgGAAgJIAAgHIgXAAQgRAAAAAMgAgqAiQgLgLAAgSQAAgQAKgJQALgKATAAIAcAAQAAgSgRAAQgKAAgFAEQgDADgBAEIgeAAQABgQAMgKQAOgMAWAAQAVAAAMAMQANANAAAUIAAAlQAAAFABACQACACAEAAIAAAaIgKAAQgIAAgGgDQgGgDgDgGQgEAGgHAEQgIAFgMAAQgSAAgLgLgAgYAFQAAAPATAAQAIAAAGgFQAGgGAAgJIAAgHIgWAAQgRAAAAAMgAIjAqIgrgvIAAAvIgdAAIAAhwIAdAAIAAAtIAogtIAkAAIgxA2IA1A6gAGoAqIAAgsIgoAAIAAAsIgcAAIAAhwIAcAAIAAAqIAoAAIAAgqIAdAAIAABwgABpAqIAAicIBpAAIAAAcIhLAAIAAAgIAgAAQAaAAAPANQAOAMAAAXQAAAXgOAMQgPANgaAAgACHANIAfAAQAMAAAHgFQAGgFAAgJQAAgKgGgFQgHgFgMAAIgfAAgAkxAqIAAhwIAdAAIAAAiIAUAAQAVAAALAKQAMALAAARQAAAQgKALQgLANgWAAgAkUARIASAAQAQAAAAgPQAAgGgEgDQgEgEgIAAIgSAAgAlkAqIAAhWIgcAAIgBAmQgBAZgHALQgIAMgVAAIgFAAIAAgbQAJAAADgEQADgFAAgPIACg9IBTAAIAABwgAnSAqIgKggIg9AAIgLAgIggAAIAwiHQAEgMAFgEQAHgHALAAQAMAAAHAHQAEAEAEAMIAuCHgAoQgRIArAAIgUhAIgBAAg");
	this.shape.setTransform(58.4,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGO_WH, new cjs.Rectangle(0,0,116.8,23.5), null);


(lib.LOGO_RED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ApHB1IAAggICaAAIAAAggAiTBXIAAgrQgZgCgPgQQgQgQAAgYQAAgYAQgQQAPgQAZgDIAAgpIAcAAIAAApQAZACAQARQAPAQAAAYQAAAYgPAQQgQAQgZACIAAArgAh3ARQAMgCAHgIQAHgIAAgNQAAgNgHgIQgHgJgMgBgAimgjQgHAIAAANQAAANAHAIQAHAIAMACIAAg+QgMABgHAJgAD1AiQgLgLAAgSQAAgQALgJQAKgKAUAAIAcAAQAAgSgSAAQgJAAgFAEQgEADgBAEIgdAAQABgQAMgKQANgMAWAAQAWAAANAMQAMANAAAUIAAAlQAAAFACACQABACAEAAIAAAaIgKAAQgIAAgGgDQgGgDgDgGQgEAGgHAEQgJAFgMAAQgSAAgLgLgAEHAFQAAAPATAAQAJAAAGgFQAGgGAAgJIAAgHIgXAAQgRAAAAAMgAgqAiQgLgLAAgSQAAgQAKgJQALgKATAAIAcAAQAAgSgRAAQgKAAgFAEQgDADgBAEIgeAAQABgQAMgKQAOgMAWAAQAVAAAMAMQANANAAAUIAAAlQAAAFABACQACACAEAAIAAAaIgKAAQgIAAgGgDQgGgDgDgGQgEAGgHAEQgIAFgMAAQgSAAgLgLgAgYAFQAAAPATAAQAIAAAGgFQAGgGAAgJIAAgHIgWAAQgRAAAAAMgAIjAqIgrgvIAAAvIgdAAIAAhwIAdAAIAAAtIAogtIAkAAIgxA2IA1A6gAGoAqIAAgsIgoAAIAAAsIgcAAIAAhwIAcAAIAAAqIAoAAIAAgqIAdAAIAABwgABpAqIAAicIBpAAIAAAcIhLAAIAAAgIAgAAQAaAAAPANQAOAMAAAXQAAAXgOAMQgPANgaAAgACHANIAfAAQAMAAAHgFQAGgFAAgJQAAgKgGgFQgHgFgMAAIgfAAgAkxAqIAAhwIAdAAIAAAiIAUAAQAVAAALAKQAMALAAARQAAAQgKALQgLANgWAAgAkUARIASAAQAQAAAAgPQAAgGgEgDQgEgEgIAAIgSAAgAlkAqIAAhWIgcAAIgBAmQgBAZgHALQgIAMgVAAIgFAAIAAgbQAJAAADgEQADgFAAgPIACg9IBTAAIAABwgAnSAqIgKggIg9AAIgLAgIggAAIAwiHQAEgMAFgEQAHgHALAAQAMAAAHAHQAEAEAEAMIAuCHgAoQgRIArAAIgUhAIgBAAg");
	this.shape.setTransform(58.4,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGO_RED, new cjs.Rectangle(0,0,116.8,23.5), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-110,-60,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-110,-60,219,119.5), null);


(lib.EYES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.eyes();
	this.instance.parent = this;
	this.instance.setTransform(-200,-333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.EYES, new cjs.Rectangle(-200,-333.5,400,667), null);


(lib.DED_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DED();
	this.instance.parent = this;
	this.instance.setTransform(-200,-333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.DED_1, new cjs.Rectangle(-200,-333.5,400,667), null);


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

}).prototype = getMCSymbolPrototype(lib.butt_base, new cjs.Rectangle(-69.7,-14.6,139.5,29.3), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BG_WH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-120,-200,240,400);
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG_WH, new cjs.Rectangle(0,0,240,400), null);


(lib.BG_RED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().dr(-120,-200,240,400);
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG_RED, new cjs.Rectangle(0,0,240,400), null);


(lib.alfabank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("ALTBTQgSgTAAgeIAAhLIArAAIAABIQAAAOAIAHQAHAJANAAQAOAAAHgJQAHgHAAgOIAAhIIAsAAIAABLQAAAegSATQgTASgiAAQgjAAgTgSgAg5BSQgTgVAAghQAAggATgUQASgUAbAAQARAAAOAKQAJAFADAHIAAgTIAsAAIAACLIgrAAIAAgVQgEAIgJAGQgOAKgRAAQgbAAgSgTgAgXADQgJAKAAAPQAAAPAJAKQAKAKANAAQAOAAAJgKQAJgKAAgPQAAgPgJgKQgJgJgOAAQgNAAgKAJgAjEBbQgKgGgDgHIAAAUIgrAAIAAjGIArAAIAABPQAEgGAJgGQAOgLATAAQAbAAASAUQATAUAAAgQAAAhgTAVQgSATgbAAQgTAAgOgKgAjIADQgJAKAAAPQAAAPAJAKQAJAKAPAAQAPAAAJgKQAJgKAAgPQAAgPgJgKQgJgJgPAAQgPAAgJAJgAmpBSQgSgVAAghQAAggATgUQARgUAcAAQASAAAOAKQAIAFAEAHIAAgTIAsAAIAACLIgrAAIAAgVQgEAIgJAGQgOAKgTAAQgbAAgSgTgAmGADQgJAKAAAPQAAAPAJAKQAJAKAPAAQAOAAAJgKQAJgKAAgPQAAgPgJgKQgJgJgOAAQgPAAgJAJgAs9BSQgSgVAAghQAAggASgUQASgUAcAAQASAAAOAKQAIAFAEAHIAAgTIArAAIAACLIgrAAIAAgVQgEAIgIAGQgOAKgTAAQgbAAgSgTgAsaADQgJAKAAAPQAAAPAJAKQAJAKAOAAQAPAAAJgKQAIgKAAgPQAAgPgIgKQgJgJgPAAQgOAAgJAJgAIzBiIAAiLIArAAIAAAWQAEgIAIgFQAMgKATABIAeAAIAAAqIgnAAQgSAAgIAHQgIAGAAAQIAABEgAHZBiIAAg1IAzAAIAAA1gAGOBiIg5g/IAAA/IgsAAIAAjGIAsAAIAABxIA4g2IA3AAIhDBAIBGBLgADYBiIAAhKQAAgNgIgJQgIgHgNAAQgNAAgIAHQgIAJAAANIAABKIgsAAIAAiLIAsAAIAAAVQAFgIAKgHQAOgJAQAAQAaAAAPARQAQAQAAAaIAABTgAolBiIAAhnIgkAAIAAgkIAkAAIAAgTQAAgTALgKQALgLAWAAIA/AAIAAAhIgtAAQgKAAgEAEQgEAFAAAJIAAAIIAuAAIAAAkIguAAIAABngAqQBiIAAjGIAsAAIAADGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.alfabank, new cjs.Rectangle(-84.8,-10.1,169.6,20.2), null);


(lib.TXT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("A3+BAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("A38BAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("A32BAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_17 = new cjs.Graphics().p("A3qBAMAgKAAAIAADZMggKAAAg");
	var mask_graphics_18 = new cjs.Graphics().p("A3YBAMAgKAAAIAADZMggKAAAg");
	var mask_graphics_19 = new cjs.Graphics().p("A29BAMAgKAAAIAADZMggKAAAg");
	var mask_graphics_20 = new cjs.Graphics().p("A2VBAMAgKAAAIAADZMggKAAAg");
	var mask_graphics_21 = new cjs.Graphics().p("A1cBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_22 = new cjs.Graphics().p("A0GBAMAgKAAAIAADZMggKAAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AyJBAMAgKAAAIAADZMggKAAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AwFBAMAgLAAAIAADZMggLAAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AwFhrMAgLAAAIAADXMggLAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:-153.4,y:28.1}).wait(1).to({graphics:mask_graphics_15,x:-153.3,y:28.1}).wait(1).to({graphics:mask_graphics_16,x:-152.7,y:28.1}).wait(1).to({graphics:mask_graphics_17,x:-151.5,y:28.1}).wait(1).to({graphics:mask_graphics_18,x:-149.7,y:28.1}).wait(1).to({graphics:mask_graphics_19,x:-147,y:28.1}).wait(1).to({graphics:mask_graphics_20,x:-143,y:28.1}).wait(1).to({graphics:mask_graphics_21,x:-137.3,y:28.1}).wait(1).to({graphics:mask_graphics_22,x:-128.7,y:28.1}).wait(1).to({graphics:mask_graphics_23,x:-116.2,y:28.1}).wait(1).to({graphics:mask_graphics_24,x:-98.6,y:28.1}).wait(1).to({graphics:mask_graphics_25,x:-71.1,y:28.1}).wait(1).to({graphics:mask_graphics_26,x:-51,y:28.1}).wait(1).to({graphics:mask_graphics_27,x:-36.7,y:28.1}).wait(1).to({graphics:mask_graphics_28,x:-26.4,y:28.1}).wait(1).to({graphics:mask_graphics_29,x:-18.7,y:28.1}).wait(1).to({graphics:mask_graphics_30,x:-13,y:28.1}).wait(1).to({graphics:mask_graphics_31,x:-8.7,y:28.1}).wait(1).to({graphics:mask_graphics_32,x:-5.6,y:28.1}).wait(1).to({graphics:mask_graphics_33,x:-3.4,y:28.1}).wait(1).to({graphics:mask_graphics_34,x:-2,y:28.1}).wait(1).to({graphics:mask_graphics_35,x:-1.2,y:28.1}).wait(1).to({graphics:mask_graphics_36,x:-0.9,y:45.3}).wait(1));

	// txt02
	this.instance = new lib.txt02();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,41.5);
	this.instance.alpha = 0.602;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1},22).wait(1));

	// txt01
	this.instance_1 = new lib.txt01();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},8).wait(4).to({regX:-0.7,regY:0.1,x:-0.7,y:0.1},0).wait(1).to({y:0},0).wait(1).to({y:-0.1},0).wait(1).to({y:-0.3},0).wait(1).to({y:-0.6},0).wait(1).to({y:-1.1},0).wait(1).to({y:-1.7},0).wait(1).to({y:-2.5},0).wait(1).to({y:-3.5},0).wait(1).to({y:-4.8},0).wait(1).to({y:-6.3},0).wait(1).to({y:-8},0).wait(1).to({y:-9.5},0).wait(1).to({y:-10.7},0).wait(1).to({y:-11.7},0).wait(1).to({y:-12.4},0).wait(1).to({y:-12.9},0).wait(1).to({y:-13.3},0).wait(1).to({y:-13.6},0).wait(1).to({y:-13.7},0).wait(1).to({y:-13.8},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-41,156.7,82.3);


(lib.DEDMOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("AurMXMAgLAAAIAADZMggLAAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AurMlMAgLAAAIAADZMggLAAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AurMzMAgLAAAIAADZMggLAAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AurNBMAgLAAAIAADZMggLAAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AurNPMAgLAAAIAADZMggLAAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AurNdMAgLAAAIAADZMggLAAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AurNPMAgLAAAIAADZMggLAAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AurNBMAgLAAAIAADZMggLAAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AurMzMAgLAAAIAADZMggLAAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AurMlMAgLAAAIAADZMggLAAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AurMXMAgLAAAIAADZMggLAAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AurMXMAgLAAAIAADZMggLAAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AurMlMAgLAAAIAADZMggLAAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AurMzMAgLAAAIAADZMggLAAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AurNBMAgLAAAIAADZMggLAAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AurNPMAgLAAAIAADZMggLAAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AurNdMAgLAAAIAADZMggLAAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AurNPMAgLAAAIAADZMggLAAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AurNBMAgLAAAIAADZMggLAAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AurMzMAgLAAAIAADZMggLAAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AurMlMAgLAAAIAADZMggLAAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AurMXMAgLAAAIAADZMggLAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:112,y:100.8}).wait(1).to({graphics:mask_graphics_25,x:112,y:102.2}).wait(1).to({graphics:mask_graphics_26,x:112,y:103.6}).wait(1).to({graphics:mask_graphics_27,x:112,y:105}).wait(1).to({graphics:mask_graphics_28,x:112,y:106.4}).wait(1).to({graphics:mask_graphics_29,x:112,y:107.8}).wait(1).to({graphics:mask_graphics_30,x:112,y:106.4}).wait(1).to({graphics:mask_graphics_31,x:112,y:105}).wait(1).to({graphics:mask_graphics_32,x:112,y:103.6}).wait(1).to({graphics:mask_graphics_33,x:112,y:102.2}).wait(1).to({graphics:mask_graphics_34,x:112,y:100.8}).wait(4).to({graphics:mask_graphics_38,x:112,y:100.8}).wait(1).to({graphics:mask_graphics_39,x:112,y:102.2}).wait(1).to({graphics:mask_graphics_40,x:112,y:103.6}).wait(1).to({graphics:mask_graphics_41,x:112,y:105}).wait(1).to({graphics:mask_graphics_42,x:112,y:106.4}).wait(1).to({graphics:mask_graphics_43,x:112,y:107.8}).wait(1).to({graphics:mask_graphics_44,x:112,y:106.4}).wait(1).to({graphics:mask_graphics_45,x:112,y:105}).wait(1).to({graphics:mask_graphics_46,x:112,y:103.6}).wait(1).to({graphics:mask_graphics_47,x:112,y:102.2}).wait(1).to({graphics:mask_graphics_48,x:112,y:100.8}).wait(52));

	// EYES
	this.instance = new lib.EYES();
	this.instance.parent = this;
	this.instance.setTransform(120,215,0.62,0.62,0,0,0,0.1,0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(76));

	// DED
	this.instance_1 = new lib.DED_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,215);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.1,scaleX:0.62,scaleY:0.62},24,cjs.Ease.cubicInOut).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-118.5,400,667);


(lib.BUT_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.alfabank();
	this.instance.parent = this;
	this.instance.setTransform(0,-43,0.8,0.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.287},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.446},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.557},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.642},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.71},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.765},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.811},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.849},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.881},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.907},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.93},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.948},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.963},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.985},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.992},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({alpha:1},0).wait(11));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgJjCIATAAIAAGFIgTAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AkTjCIInAAIAAGFIonAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AmPjCIMfAAIAAGFIsfAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AnfjCIO/AAIAAGFIu/AAg");
	var mask_graphics_4 = new cjs.Graphics().p("AoYjCIQxAAIAAGFIwxAAg");
	var mask_graphics_5 = new cjs.Graphics().p("ApDjCISHAAIAAGFIyHAAg");
	var mask_graphics_6 = new cjs.Graphics().p("ApljCITLAAIAAGFIzLAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AqAjCIUBAAIAAGFI0BAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AqWjCIUtAAIAAGFI0tAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AqojCIVRAAIAAGFI1RAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Aq3jCIVvAAIAAGFI1vAAg");
	var mask_graphics_11 = new cjs.Graphics().p("ArCjCIWFAAIAAGFI2FAAg");
	var mask_graphics_12 = new cjs.Graphics().p("ArMjCIWZAAIAAGFI2ZAAg");
	var mask_graphics_13 = new cjs.Graphics().p("ArUjCIWpAAIAAGFI2pAAg");
	var mask_graphics_14 = new cjs.Graphics().p("ArajCIW1AAIAAGFI21AAg");
	var mask_graphics_15 = new cjs.Graphics().p("ArfjCIW/AAIAAGFI2/AAg");
	var mask_graphics_16 = new cjs.Graphics().p("ArijCIXFAAIAAGFI3FAAg");
	var mask_graphics_17 = new cjs.Graphics().p("ArkjCIXJAAIAAGFI3JAAg");
	var mask_graphics_18 = new cjs.Graphics().p("ArmjCIXNAAIAAGFI3NAAg");
	var mask_graphics_19 = new cjs.Graphics().p("ArmjCIXNAAIAAGFI3NAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:0,y:0}).wait(1).to({graphics:mask_graphics_3,x:0,y:0}).wait(1).to({graphics:mask_graphics_4,x:0,y:0}).wait(1).to({graphics:mask_graphics_5,x:0,y:0}).wait(1).to({graphics:mask_graphics_6,x:0,y:0}).wait(1).to({graphics:mask_graphics_7,x:0,y:0}).wait(1).to({graphics:mask_graphics_8,x:0,y:0}).wait(1).to({graphics:mask_graphics_9,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_10,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_11,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_12,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_13,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_14,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_15,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_16,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_17,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_18,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_19,x:0,y:0}).wait(11));

	// Оставить заявку
	this.instance_1 = new lib.butt_txt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-1,0.4,0.4,0,0,0,-0.1,-0.1);
	this.instance_1.alpha = 0.602;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(1).to({regX:0.4,regY:2.9,scaleX:0.51,scaleY:0.51,x:-0.8,y:0.2,alpha:0.676},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-0.7,y:0.1,alpha:0.745},0).wait(1).to({scaleX:0.71,scaleY:0.71,alpha:0.804},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:0,alpha:0.852},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-0.6,alpha:0.89},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.919},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.941},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.959},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.972},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:-0.1,alpha:0.982},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:0,alpha:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,x:-1.1,y:-3.1,alpha:1},0).wait(9));

	// Layer_4
	this.instance_2 = new lib.butt_base();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0.602;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.746},0).wait(1).to({alpha:0.814},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.888},0).wait(1).to({alpha:0.911},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-51.1,135.8,65.8);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_408 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(408).call(this.frame_408).wait(331));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_82 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_83 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_84 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_85 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_86 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_87 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_88 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_89 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_90 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_91 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_92 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_93 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_94 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_95 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_96 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_97 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_98 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_99 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_100 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_101 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_102 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_103 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_104 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_105 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_106 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_107 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_347 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_420 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_421 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_422 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_423 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_424 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_425 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_426 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_427 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_428 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_429 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_430 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_431 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_432 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_433 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_434 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_435 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_436 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_437 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_438 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_439 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_440 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_441 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_442 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_443 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_444 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_445 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_graphics_669 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:120,y:200}).wait(82).to({graphics:mask_graphics_82,x:120,y:200}).wait(1).to({graphics:mask_graphics_83,x:119.5,y:200}).wait(1).to({graphics:mask_graphics_84,x:118,y:200}).wait(1).to({graphics:mask_graphics_85,x:115.4,y:200}).wait(1).to({graphics:mask_graphics_86,x:111.4,y:200}).wait(1).to({graphics:mask_graphics_87,x:105.9,y:200}).wait(1).to({graphics:mask_graphics_88,x:98.8,y:200}).wait(1).to({graphics:mask_graphics_89,x:89.7,y:200}).wait(1).to({graphics:mask_graphics_90,x:78.5,y:200}).wait(1).to({graphics:mask_graphics_91,x:65.1,y:200}).wait(1).to({graphics:mask_graphics_92,x:49.3,y:200}).wait(1).to({graphics:mask_graphics_93,x:31.4,y:200}).wait(1).to({graphics:mask_graphics_94,x:12,y:200}).wait(1).to({graphics:mask_graphics_95,x:-8.2,y:200}).wait(1).to({graphics:mask_graphics_96,x:-28,y:200}).wait(1).to({graphics:mask_graphics_97,x:-46.3,y:200}).wait(1).to({graphics:mask_graphics_98,x:-62.7,y:200}).wait(1).to({graphics:mask_graphics_99,x:-76.7,y:200}).wait(1).to({graphics:mask_graphics_100,x:-88.4,y:200}).wait(1).to({graphics:mask_graphics_101,x:-97.8,y:200}).wait(1).to({graphics:mask_graphics_102,x:-105.3,y:200}).wait(1).to({graphics:mask_graphics_103,x:-111,y:200}).wait(1).to({graphics:mask_graphics_104,x:-115.2,y:200}).wait(1).to({graphics:mask_graphics_105,x:-117.9,y:200}).wait(1).to({graphics:mask_graphics_106,x:-119.5,y:200}).wait(1).to({graphics:mask_graphics_107,x:-120,y:200}).wait(1).to({graphics:null,x:0,y:0}).wait(239).to({graphics:mask_graphics_347,x:120,y:200}).wait(73).to({graphics:mask_graphics_420,x:120,y:200}).wait(1).to({graphics:mask_graphics_421,x:119.5,y:200}).wait(1).to({graphics:mask_graphics_422,x:118,y:200}).wait(1).to({graphics:mask_graphics_423,x:115.4,y:200}).wait(1).to({graphics:mask_graphics_424,x:111.4,y:200}).wait(1).to({graphics:mask_graphics_425,x:105.9,y:200}).wait(1).to({graphics:mask_graphics_426,x:98.8,y:200}).wait(1).to({graphics:mask_graphics_427,x:89.7,y:200}).wait(1).to({graphics:mask_graphics_428,x:78.5,y:200}).wait(1).to({graphics:mask_graphics_429,x:65.1,y:200}).wait(1).to({graphics:mask_graphics_430,x:49.3,y:200}).wait(1).to({graphics:mask_graphics_431,x:31.4,y:200}).wait(1).to({graphics:mask_graphics_432,x:12,y:200}).wait(1).to({graphics:mask_graphics_433,x:-8.2,y:200}).wait(1).to({graphics:mask_graphics_434,x:-28,y:200}).wait(1).to({graphics:mask_graphics_435,x:-46.3,y:200}).wait(1).to({graphics:mask_graphics_436,x:-62.7,y:200}).wait(1).to({graphics:mask_graphics_437,x:-76.7,y:200}).wait(1).to({graphics:mask_graphics_438,x:-88.4,y:200}).wait(1).to({graphics:mask_graphics_439,x:-97.8,y:200}).wait(1).to({graphics:mask_graphics_440,x:-105.3,y:200}).wait(1).to({graphics:mask_graphics_441,x:-111,y:200}).wait(1).to({graphics:mask_graphics_442,x:-115.2,y:200}).wait(1).to({graphics:mask_graphics_443,x:-117.9,y:200}).wait(1).to({graphics:mask_graphics_444,x:-119.5,y:200}).wait(1).to({graphics:mask_graphics_445,x:-120,y:200}).wait(1).to({graphics:null,x:0,y:0}).wait(223).to({graphics:mask_graphics_669,x:120,y:200}).wait(70));

	// txt0102
	this.instance = new lib.TXT1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(120.7,193.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},108).wait(239).to({_off:false},0).to({_off:true},99).wait(223).to({_off:false},0).wait(70));

	// LOGO_WH
	this.instance_1 = new lib.LOGO_WH();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.4,26.7,1,1,0,0,0,58.4,11.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},108).wait(239).to({_off:false},0).to({_off:true},99).wait(223).to({_off:false},0).wait(70));

	// BG_RED
	this.instance_2 = new lib.BG_RED();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,200,1,1,0,0,0,120,200);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},108).wait(239).to({_off:false},0).to({_off:true},99).wait(223).to({_off:false},0).wait(70));

	// Layer_8 copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_82 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_147 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_148 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_149 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_150 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_151 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_152 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_153 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_154 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_155 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_156 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_157 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_158 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_159 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_160 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_161 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_162 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_163 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_164 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_165 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_166 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_167 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_168 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_169 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_170 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_171 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_172 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_420 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_485 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_486 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_487 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_488 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_489 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_490 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_491 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_492 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_493 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_494 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_495 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_496 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_497 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_498 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_499 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_500 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_501 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_502 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_503 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_504 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_505 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_506 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_507 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_508 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_509 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_1_graphics_510 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(82).to({graphics:mask_1_graphics_82,x:120,y:200}).wait(65).to({graphics:mask_1_graphics_147,x:120,y:200}).wait(1).to({graphics:mask_1_graphics_148,x:119.6,y:200}).wait(1).to({graphics:mask_1_graphics_149,x:118.2,y:200}).wait(1).to({graphics:mask_1_graphics_150,x:115.8,y:200}).wait(1).to({graphics:mask_1_graphics_151,x:112,y:200}).wait(1).to({graphics:mask_1_graphics_152,x:106.7,y:200}).wait(1).to({graphics:mask_1_graphics_153,x:99.6,y:200}).wait(1).to({graphics:mask_1_graphics_154,x:90.2,y:200}).wait(1).to({graphics:mask_1_graphics_155,x:78.1,y:200}).wait(1).to({graphics:mask_1_graphics_156,x:62.9,y:200}).wait(1).to({graphics:mask_1_graphics_157,x:44.2,y:200}).wait(1).to({graphics:mask_1_graphics_158,x:22.5,y:200}).wait(1).to({graphics:mask_1_graphics_159,x:-0.8,y:200}).wait(1).to({graphics:mask_1_graphics_160,x:-23.7,y:200}).wait(1).to({graphics:mask_1_graphics_161,x:-44.3,y:200}).wait(1).to({graphics:mask_1_graphics_162,x:-61.7,y:200}).wait(1).to({graphics:mask_1_graphics_163,x:-76,y:200}).wait(1).to({graphics:mask_1_graphics_164,x:-87.5,y:200}).wait(1).to({graphics:mask_1_graphics_165,x:-96.7,y:200}).wait(1).to({graphics:mask_1_graphics_166,x:-103.9,y:200}).wait(1).to({graphics:mask_1_graphics_167,x:-109.4,y:200}).wait(1).to({graphics:mask_1_graphics_168,x:-113.6,y:200}).wait(1).to({graphics:mask_1_graphics_169,x:-116.6,y:200}).wait(1).to({graphics:mask_1_graphics_170,x:-118.5,y:200}).wait(1).to({graphics:mask_1_graphics_171,x:-119.7,y:200}).wait(1).to({graphics:mask_1_graphics_172,x:-120,y:200}).wait(1).to({graphics:null,x:0,y:0}).wait(247).to({graphics:mask_1_graphics_420,x:120,y:200}).wait(65).to({graphics:mask_1_graphics_485,x:120,y:200}).wait(1).to({graphics:mask_1_graphics_486,x:119.6,y:200}).wait(1).to({graphics:mask_1_graphics_487,x:118.2,y:200}).wait(1).to({graphics:mask_1_graphics_488,x:115.8,y:200}).wait(1).to({graphics:mask_1_graphics_489,x:112,y:200}).wait(1).to({graphics:mask_1_graphics_490,x:106.7,y:200}).wait(1).to({graphics:mask_1_graphics_491,x:99.6,y:200}).wait(1).to({graphics:mask_1_graphics_492,x:90.2,y:200}).wait(1).to({graphics:mask_1_graphics_493,x:78.1,y:200}).wait(1).to({graphics:mask_1_graphics_494,x:62.9,y:200}).wait(1).to({graphics:mask_1_graphics_495,x:44.2,y:200}).wait(1).to({graphics:mask_1_graphics_496,x:22.5,y:200}).wait(1).to({graphics:mask_1_graphics_497,x:-0.8,y:200}).wait(1).to({graphics:mask_1_graphics_498,x:-23.7,y:200}).wait(1).to({graphics:mask_1_graphics_499,x:-44.3,y:200}).wait(1).to({graphics:mask_1_graphics_500,x:-61.7,y:200}).wait(1).to({graphics:mask_1_graphics_501,x:-76,y:200}).wait(1).to({graphics:mask_1_graphics_502,x:-87.5,y:200}).wait(1).to({graphics:mask_1_graphics_503,x:-96.7,y:200}).wait(1).to({graphics:mask_1_graphics_504,x:-103.9,y:200}).wait(1).to({graphics:mask_1_graphics_505,x:-109.4,y:200}).wait(1).to({graphics:mask_1_graphics_506,x:-113.6,y:200}).wait(1).to({graphics:mask_1_graphics_507,x:-116.6,y:200}).wait(1).to({graphics:mask_1_graphics_508,x:-118.5,y:200}).wait(1).to({graphics:mask_1_graphics_509,x:-119.7,y:200}).wait(1).to({graphics:mask_1_graphics_510,x:-120,y:200}).wait(1).to({graphics:null,x:0,y:0}).wait(228));

	// LOGO_RED
	this.instance_3 = new lib.LOGO_RED();
	this.instance_3.parent = this;
	this.instance_3.setTransform(70.4,26.7,1,1,0,0,0,58.4,11.7);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).to({_off:true},91).wait(247).to({_off:false},0).to({_off:true},91).wait(228));

	// DED
	this.instance_4 = new lib.DEDMOV("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-10.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({_off:false},0).to({_off:true},91).wait(247).to({_off:false},0).to({_off:true},91).wait(228));

	// Layer_8 copy 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_147 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_321 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_322 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_323 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_324 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_325 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_326 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_327 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_328 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_329 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_330 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_331 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_332 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_333 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_334 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_335 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_336 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_337 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_338 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_339 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_340 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_341 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_342 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_343 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_344 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_345 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_346 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_485 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_643 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_644 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_645 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_646 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_647 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_648 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_649 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_650 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_651 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_652 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_653 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_654 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_655 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_656 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_657 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_658 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_659 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_660 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_661 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_662 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_663 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_664 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_665 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_666 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_667 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	var mask_2_graphics_668 = new cjs.Graphics().p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_2_graphics_147,x:120,y:200}).wait(174).to({graphics:mask_2_graphics_321,x:120,y:200}).wait(1).to({graphics:mask_2_graphics_322,x:119.6,y:200}).wait(1).to({graphics:mask_2_graphics_323,x:118.1,y:200}).wait(1).to({graphics:mask_2_graphics_324,x:115.6,y:200}).wait(1).to({graphics:mask_2_graphics_325,x:111.7,y:200}).wait(1).to({graphics:mask_2_graphics_326,x:106.2,y:200}).wait(1).to({graphics:mask_2_graphics_327,x:98.9,y:200}).wait(1).to({graphics:mask_2_graphics_328,x:89.4,y:200}).wait(1).to({graphics:mask_2_graphics_329,x:77.3,y:200}).wait(1).to({graphics:mask_2_graphics_330,x:62.2,y:200}).wait(1).to({graphics:mask_2_graphics_331,x:44,y:200}).wait(1).to({graphics:mask_2_graphics_332,x:23.1,y:200}).wait(1).to({graphics:mask_2_graphics_333,x:0.7,y:200}).wait(1).to({graphics:mask_2_graphics_334,x:-21.5,y:200}).wait(1).to({graphics:mask_2_graphics_335,x:-41.7,y:200}).wait(1).to({graphics:mask_2_graphics_336,x:-59.3,y:200}).wait(1).to({graphics:mask_2_graphics_337,x:-73.9,y:200}).wait(1).to({graphics:mask_2_graphics_338,x:-85.8,y:200}).wait(1).to({graphics:mask_2_graphics_339,x:-95.4,y:200}).wait(1).to({graphics:mask_2_graphics_340,x:-102.9,y:200}).wait(1).to({graphics:mask_2_graphics_341,x:-108.8,y:200}).wait(1).to({graphics:mask_2_graphics_342,x:-113.2,y:200}).wait(1).to({graphics:mask_2_graphics_343,x:-116.3,y:200}).wait(1).to({graphics:mask_2_graphics_344,x:-118.5,y:200}).wait(1).to({graphics:mask_2_graphics_345,x:-119.6,y:200}).wait(1).to({graphics:mask_2_graphics_346,x:-120,y:200}).wait(1).to({graphics:null,x:0,y:0}).wait(138).to({graphics:mask_2_graphics_485,x:120,y:200}).wait(158).to({graphics:mask_2_graphics_643,x:120,y:200}).wait(1).to({graphics:mask_2_graphics_644,x:119.6,y:200}).wait(1).to({graphics:mask_2_graphics_645,x:118.1,y:200}).wait(1).to({graphics:mask_2_graphics_646,x:115.6,y:200}).wait(1).to({graphics:mask_2_graphics_647,x:111.7,y:200}).wait(1).to({graphics:mask_2_graphics_648,x:106.2,y:200}).wait(1).to({graphics:mask_2_graphics_649,x:98.9,y:200}).wait(1).to({graphics:mask_2_graphics_650,x:89.4,y:200}).wait(1).to({graphics:mask_2_graphics_651,x:77.3,y:200}).wait(1).to({graphics:mask_2_graphics_652,x:62.2,y:200}).wait(1).to({graphics:mask_2_graphics_653,x:44,y:200}).wait(1).to({graphics:mask_2_graphics_654,x:23.1,y:200}).wait(1).to({graphics:mask_2_graphics_655,x:0.7,y:200}).wait(1).to({graphics:mask_2_graphics_656,x:-21.5,y:200}).wait(1).to({graphics:mask_2_graphics_657,x:-41.7,y:200}).wait(1).to({graphics:mask_2_graphics_658,x:-59.3,y:200}).wait(1).to({graphics:mask_2_graphics_659,x:-73.9,y:200}).wait(1).to({graphics:mask_2_graphics_660,x:-85.8,y:200}).wait(1).to({graphics:mask_2_graphics_661,x:-95.4,y:200}).wait(1).to({graphics:mask_2_graphics_662,x:-102.9,y:200}).wait(1).to({graphics:mask_2_graphics_663,x:-108.8,y:200}).wait(1).to({graphics:mask_2_graphics_664,x:-113.2,y:200}).wait(1).to({graphics:mask_2_graphics_665,x:-116.3,y:200}).wait(1).to({graphics:mask_2_graphics_666,x:-118.5,y:200}).wait(1).to({graphics:mask_2_graphics_667,x:-119.6,y:200}).wait(1).to({graphics:mask_2_graphics_668,x:-120,y:200}).wait(1).to({graphics:null,x:0,y:0}).wait(70));

	// LOGO_RED copy
	this.instance_5 = new lib.LOGO_RED();
	this.instance_5.parent = this;
	this.instance_5.setTransform(70.4,26.7,1,1,0,0,0,58.4,11.7);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(147).to({_off:false},0).to({_off:true},200).wait(138).to({_off:false},0).to({_off:true},184).wait(70));

	// BUTT
	this.instance_6 = new lib.BUT_mov("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(121,182.7);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(236).to({_off:false},0).to({_off:true},111).wait(227).to({_off:false},0).to({_off:true},95).wait(70));

	// TXT02
	this.instance_7 = new lib.txt03();
	this.instance_7.parent = this;
	this.instance_7.setTransform(360,207);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(147).to({_off:false},0).wait(1).to({regX:0.1,regY:2.8,x:359.7,y:209.8},0).wait(1).to({x:358.3},0).wait(1).to({x:355.9},0).wait(1).to({x:352.1},0).wait(1).to({x:346.8},0).wait(1).to({x:339.7},0).wait(1).to({x:330.3},0).wait(1).to({x:318.2},0).wait(1).to({x:303},0).wait(1).to({x:284.3},0).wait(1).to({x:262.6},0).wait(1).to({x:239.3},0).wait(1).to({x:216.4},0).wait(1).to({x:195.8},0).wait(1).to({x:178.4},0).wait(1).to({x:164.1},0).wait(1).to({x:152.6},0).wait(1).to({x:143.4},0).wait(1).to({x:136.2},0).wait(1).to({x:130.7},0).wait(1).to({x:126.5},0).wait(1).to({x:123.5},0).wait(1).to({x:121.6},0).wait(1).to({x:120.4},0).wait(1).to({regX:0,regY:0,x:120,y:207},0).wait(38).to({regX:0.1,regY:2.8,x:120.1,y:209.8,alpha:0.999},0).wait(1).to({alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.99},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.976},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.966},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.954},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.939},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.921},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.874},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:209.7,alpha:0.845},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.811},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.771},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.724},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:209.6,alpha:0.67},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.606},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.53},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:209.5,alpha:0.439},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:209.4,alpha:0.327},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.187},0).wait(1).to({regX:0.2,regY:0.2,scaleX:0.8,scaleY:0.8,x:120,y:207,alpha:0},0).to({_off:true},115).wait(138).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,x:360,alpha:1},0).wait(1).to({regX:0.1,regY:2.8,x:359.7,y:209.8},0).wait(1).to({x:358.3},0).wait(1).to({x:355.9},0).wait(1).to({x:352.1},0).wait(1).to({x:346.8},0).wait(1).to({x:339.7},0).wait(1).to({x:330.3},0).wait(1).to({x:318.2},0).wait(1).to({x:303},0).wait(1).to({x:284.3},0).wait(1).to({x:262.6},0).wait(1).to({x:239.3},0).wait(1).to({x:216.4},0).wait(1).to({x:195.8},0).wait(1).to({x:178.4},0).wait(1).to({x:164.1},0).wait(1).to({x:152.6},0).wait(1).to({x:143.4},0).wait(1).to({x:136.2},0).wait(1).to({x:130.7},0).wait(1).to({x:126.5},0).wait(1).to({x:123.5},0).wait(1).to({x:121.6},0).wait(1).to({x:120.4},0).wait(1).to({regX:0,regY:0,x:120,y:207},0).wait(38).to({regX:0.1,regY:2.8,x:120.1,y:209.8,alpha:0.999},0).wait(1).to({alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.99},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.976},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.966},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.954},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.939},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.921},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.874},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:209.7,alpha:0.845},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.811},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.771},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.724},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:209.6,alpha:0.67},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.606},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.53},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:209.5,alpha:0.439},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:209.4,alpha:0.327},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.187},0).wait(1).to({regX:0.2,regY:0.2,scaleX:0.8,scaleY:0.8,x:120,y:207,alpha:0},0).to({_off:true},99).wait(70));

	// legal
	this.instance_8 = new lib.legal_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(121,328);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(236).to({_off:false},0).to({alpha:1},20,cjs.Ease.none).to({_off:true},91).wait(227).to({_off:false,alpha:0},0).to({alpha:1},20,cjs.Ease.none).to({_off:true},75).wait(70));

	// BG_WH
	this.instance_9 = new lib.BG_WH();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(147).to({_off:false},0).to({_off:true},200).wait(138).to({_off:false},0).to({_off:true},184).wait(70));

	// LOGO_WH copy
	this.instance_10 = new lib.LOGO_WH();
	this.instance_10.parent = this;
	this.instance_10.setTransform(70.4,26.7,1,1,0,0,0,58.4,11.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(321).to({_off:false},0).to({_off:true},26).wait(296).to({_off:false},0).to({_off:true},26).wait(70));

	// BG_RED copy
	this.instance_11 = new lib.BG_RED();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(321).to({_off:false},0).to({_off:true},26).wait(296).to({_off:false},0).to({_off:true},26).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-766,-13,1012.7,450.8);


// stage content:
(lib.credit88_SIZMEK_DCO_240x400_do150kbм2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119,199,242,402);
// library properties:
lib.properties = {
	id: 'F66FE7A2AC3D5941AE55BF9D2D3ACE18',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"DED.jpg", id:"DED"},
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