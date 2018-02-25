(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.bg01 = function() {
	this.initialize(img.bg01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.bg02 = function() {
	this.initialize(img.bg02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,123);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.lightning01 = function() {
	this.initialize(img.lightning01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,218);


(lib.lightning02 = function() {
	this.initialize(img.lightning02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,103);


(lib.lightning03 = function() {
	this.initialize(img.lightning03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,96);


(lib.lightning04 = function() {
	this.initialize(img.lightning04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,143);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,33);


(lib.txt01 = function() {
	this.initialize(img.txt01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,85);


(lib.txt02 = function() {
	this.initialize(img.txt02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,89);// helper functions:

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


(lib.txt0102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.txt02();
	this.instance.parent = this;
	this.instance.setTransform(-105,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0102, new cjs.Rectangle(-105,-132,210,89), null);


(lib.txt01Creditcard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnSBiIAAgkIhkAAIAAAkIgeAAIAAhAIANAAQAFgEAEgFQADgGACgHQADgJACgJIABgZIADhCIBsAAIAABDIABBAIAOAAIAABAgAoVgeIgBATIgCARIgEAPQgDAIgEAFIBBAAIAAhmIgwAAgAOzA+IgKggIg3AAIgMAgIghAAIA5ifIAfAAIA5CfgAN6ADIAnAAIgTg+IgBAAgAMEA+IAAiCIgqAAIAAgdIB1AAIAAAdIgrAAIAACCgAJkA+IAAifIBIAAQALAAAJAFQAIAFAGAGQAFAIAEAIQADAKAAAIQAAAJgEAJQgDAJgGAHQgGAHgIAEQgJAEgLAAIgnAAIAAA8gAKEgaIAhAAQALAAAFgFQAGgHgBgJQABgJgGgGQgGgGgKAAIghAAgAI3A+IgKggIg4AAIgKAgIgiAAIA5ifIAgAAIA3CfgAH+ADIAnAAIgTg+IgBAAgAGkA+IgNguIgFgKQgDgFgCgCQgEgCgEAAIgJgBIgSAAIAABCIggAAIAAifIAgAAIAABBIARAAIAJgBIAHgDQADgCACgEQAEgFACgGIANgsIAhAAIgPAvQgDAMgGAIQgGAHgHADQAKAEAFAHQAGAJADALIAPAzgADeA+IAAg/IgTAAIgIABQgEAAgDADQgDACgDAEQgDAFgBAGIgMAqIgkAAIAOgsIAGgPQADgHAIgDQgHgCgFgEQgFgFgDgFQgDgGgBgGIgCgNQAAgJADgJQADgIAGgIQAGgGAJgFQAKgEAMAAIBHAAIAACfgACtg/QgGAHAAAJQAAAKAHAFQAFAEALAAIAgAAIAAgoIgfAAQgMAAgGAFgABbA+IgKggIg4AAIgLAgIggAAIA4ifIAgAAIA4CfgAAiADIAnAAIgTg+IgCAAgAg8A+IAAhCIg7AAIAABCIggAAIAAifIAgAAIAABBIA7AAIAAhBIAgAAIAACfgAjtA+IAAiCIgqAAIAAgdIB1AAIAAAdIgqAAIAACCgAlCA+IAAhnIgBAAIgRAYIgHALIgJANIgJAQIgKAPIgJANIgIALIgcAAIAAifIAfAAIAABpIABAAIBEhpIAdAAIAACfgArJA+IAAifIBvAAIAAAdIhOAAIAAAlIBCAAIAAAcIhCAAIAAAlIBOAAIAAAcgAtKA+IAAifIBIAAQAMAAAIAFQAIAFAHAGQAFAIADAIQACAKAAAIQAAAJgCAJQgEAJgFAHQgHAHgJAEQgIAEgLAAIgnAAIAAA8gAsqgaIAgAAQAMAAAFgFQAGgHAAgJQAAgJgGgGQgGgGgLAAIggAAgAt7A+IgNguIgEgKQgEgFgCgCQgEgCgEAAIgJgBIgSAAIAABCIgfAAIAAifIAfAAIAABBIARAAIAJgBIAHgDQADgCACgEQAEgFACgGIANgsIAhAAIgPAvQgDAMgGAIQgGAHgHADQAKAEAGAHQAFAJAEALIAOAzg");
	this.shape.setTransform(-0.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt01Creditcard, new cjs.Rectangle(-99.8,-15.2,199.6,30.5), null);


(lib.txt01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.txt01();
	this.instance.parent = this;
	this.instance.setTransform(-99,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt01_1, new cjs.Rectangle(-99,-136,211,85), null);


(lib.shade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5B2D00","rgba(60,30,0,0)"],[0,1],0,-96.9,0,97).s().p("A02PKIAA+TMAptAAAIAAeTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shade, new cjs.Rectangle(-133.5,-97,267,194), null);


(lib.picture = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE548","#EACC14","rgba(234,204,20,0)"],[0,0.871,0.984],0,-116.5,0,253.5).s().p("EgSvAp9MAAAhT5MAlfAAAMAAABT5g");
	this.shape.setTransform(0,-388.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.bg01();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.picture, new cjs.Rectangle(-120,-657,240,857), null);


(lib.light04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lightning04();
	this.instance.parent = this;
	this.instance.setTransform(-40,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light04, new cjs.Rectangle(-40,-71.5,80,143), null);


(lib.light03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lightning03();
	this.instance.parent = this;
	this.instance.setTransform(-66,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light03, new cjs.Rectangle(-66,-48,132,96), null);


(lib.light02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lightning02();
	this.instance.parent = this;
	this.instance.setTransform(-72,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light02, new cjs.Rectangle(-72,-51.5,144,103), null);


(lib.light01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lightning01();
	this.instance.parent = this;
	this.instance.setTransform(-46,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light01, new cjs.Rectangle(-46,-109,92,218), null);


(lib.legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-120,-200,240,400), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#489343").s().p("AAAJLQigABiSAHIAAg+IAwgGQBdgKAdg5QAUgnAAhhIAAq0QAAhggNgXQgPgcg7AAIgvAAQhpAAg+ArQhIA0goB9IgVBEIhPAAIAglvQBtAAA2ADQCCAFBQABIHBAAQBRgBCAgFQA3gDBsAAIAhFvIhPAAIgVhEQgph9hIg0Qg9grhqAAIgvAAQg7AAgPAcQgMAXAABgIAAK0QAABhATAnQAeA5BcAKIAxAGIAAA+QiTgHiggBg");
	this.shape.setTransform(2550.1,1719);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#489343").s().p("AGyJLQifAAiTAIIAAg+IAwgGQBdgLAeg5QATgmAAhiIAAp1Ip1LHQgCA/AlAdQAeAYBGAGIAxAGIAAA+QiTgIigAAQigAAiTAIIAAg+IAxgGQBcgLAdg5QAUgmAAhiIAAqFQAAhhgUgnQgdg5hcgLIgxgFIAAg/QCPAICkAAQClAACOgIIAAA/IgxAFQhcALgdA5QgUAnAABhIAAJqIJyq8QgBhBgngcQgcgWhBgHIgwgFIAAg/QCOAICkAAQClAACOgIIAAA/IgwAFQhdALgdA5QgTAngBBhIAAKFQABBiATAmQAeA5BcALIAwAGIAAA+QiSgIihAAg");
	this.shape_1.setTransform(2405.8,1719);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#489343").s().p("AJGMNIgNhBQgbiBhPhWQhahhh9gBInrAAQiBABhbBhQhPBVgbCCIgNBBIhHAAIAAnAIBdAAQAqAAA0g0QAngnAjg7QBZiUAtiPQAnh/ARisQAPiVgahEQgihehzAAIgrAAIAAg+QCVAICrAAIG1AAQA2AABcgDICLgFIAAA+IgxAGQhcALgeA5QgTAmAABiIAALSQAABGAPAYQARAZAxAAIB9AAIAAHAgAg6qmQgZAcgPB4IgRCDQgdDvg5CaQglBjhVCRQgZApAAATQgBAZAgAGQALACAqAAIGcAAQAjgBANgNQARgRAAg7IAAtdQAAgqgIgOQgOgZgrAAIh1AAQhFAAgUAXg");
	this.shape_2.setTransform(2256.5,1737.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#489343").s().p("AmkGwQigirAAj3QAAkGC6i6QC9i+ERAAQDXAACTB/QCLB5AMCtIAAAeQgCAPgHAEQgJAFgcABIs7AAQgMA9AABEQAAD7CCCUQB5CKC4ABQBwgBBmhAQBLgxA7hLIA4A9QhrCKiVA5QhkAnhyAAQkyAAizjBgAinnMQhYBfgYCSIHrgIQBLgCAQgNQAMgIAAgoQAAifhghDQhAguhfABQiFAAheBlg");
	this.shape_3.setTransform(2127.8,1718.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#489343").s().p("AjjPYQhpgDhAAAQioAAiLAIIAAg+IAxgFQBdgLAeg+QASgnAAhdIAA0XQAAhngTgzQgkhghrAAIgkAAIAAg3QB3gPB0ggQBFgTBXgfQATBRgCCkQA9hlBcg7QBthFCLAAQETABCtC5QCmCzAAEJQAAEljHCtQiwCZjvAAQhdAAhYgfQhwgphUhVIAAJVQAAB6AnArQAaAdBEAIIBMAIIAAA+IidgFgAizsMQhkBoAAChIAAFQQAACgBSBjQBVBpCOAAQCpAABth6QB/iOAAkPQAAk2iJiHQhchaiFAAQiYAAhkBpg");
	this.shape_4.setTransform(1983.8,1753.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#489343").s().p("AH9OGImSAIIAAg+IBPgGQBCgFAcgMQAqgSAAgpQAAghgggxQghg0hlh5ImEnRIirCzIAAEsQAABkAHAyQAIA+AXAgQAuBDBvAGIBFAGIAAA+QiGgHhmgBIipAAIiqAAQhkABiGAHIAAg+IBDgGQBvgGAvhDQAWggAIg+QAIgyAAhkIAAwZQAAhkgIgyQgIg+gWggQgvhDhvgGIhDgGIAAg+QCGAHBkABIFTAAQBlgBCHgHIAAA+IhFAGQhvAGguBDQgXAggIA+QgHAyAABkIAAKGQECkICXi0QEDkzAAhtQAAg9gxgWQgdgNhmgKIgegDIAAg+QBUAEBnADQB1ADA8gCID9gIIAAA+QhaAAg5AbQg5Acg4BJIi0DkIkZFXIHHIRQA5BCBqCFQBHBZBRBTQA9BAAtAQQAHADA9AHIA3AGIAAA+g");
	this.shape_5.setTransform(1819.1,1687.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE146E").s().p("AlzHMQimikAAkEQAAhwAlhvQAph4BNheQC3jfFBAAQC3AABkA7QBaA0AABPQgBArgXAbQgaAcgrAAQhlAAgih0QgOgugRgTQgggkhHAAQiVAAhrBzQiJCSAAEgQAAE1CQCJQBkBeCVAAQBlAABfg0QBWgtBChOIA5A0Qi1DUkkAAQkNAAinilg");
	this.shape_6.setTransform(1610.5,1719.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE146E").s().p("AGmJKQicAAiYAJIAAg+IAxgFQBdgLAdg6QAUgmAAhhIAAk0IpgAAIAAE0QAABgAUAnQAdA6BcALIAxAFIAAA+QiXgJicAAQicAAiXAJIAAg+IAxgFQBcgLAeg6QATgmAAhhIAAqHQAAhggTgnQgeg5hcgMIgxgEIAAg/QCXAJCcAAQCcAACXgJIAAA/IgxAEQhcAMgdA5QgUAnAABgIAAEOIJgAAIAAkOQAAhggUgnQgdg5hdgMIgxgEIAAg/QCYAJCcAAQCbAACXgJIAAA/IgxAEQhcAMgdA5QgUAnAABgIAAKHQAABgAUAnQAdA6BcALIAxAFIAAA+QiXgJibAAg");
	this.shape_7.setTransform(1470.8,1719.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DE146E").s().p("ADdI9QhEg3gYhbQhsBcheAvQh5A7h6AAQiJAAhRhMQhLhFAAhjQAAizDCh9QBKgvB6g0QBGgfCUg8QBXgkATgVQANgOAAgrIAAgmQAAikgsg9Qg1hIiVAAQh5AAg6AhQg+AjgHBVQgEA0gMAXQgbA1hKAAQgpAAgcgZQgfgcAAgwQAAhoCBhDQCJhHDsAAQEjAABcCHQAmA5ANBdQAJA/AAB9IAAGSQAAB1ANAyQAUBVBBAAQAcAAAagVQAXgRASgeIANgWIA0AeQgwBehFAvQg8AphDAAQhRAAhAg0gABGhNQjNBYhXBDQiOBuAACQQAABKAtAyQAyA3BXAAQBRAABlhAQAygfBEg8IAAnHg");
	this.shape_8.setTransform(1334.9,1719.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DE146E").s().p("AlzHMQimikAAkEQAAhwAlhvQAph4BNheQC4jfFAAAQC3AABkA7QBaA0AABPQAAArgYAbQgZAcgsAAQhlAAgjh0QgMgugRgTQghgkhHAAQiVAAhrBzQiJCSAAEgQAAE1CQCJQBkBeCVAAQBkAABhg0QBWguBBhNIA5A0Qi0DUklAAQkMAAioilg");
	this.shape_9.setTransform(1208.1,1719.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DE146E").s().p("AlzHMQimikAAkEQAAhwAmhvQAoh4BNheQC4jfFAAAQC2AABlA7QBZA0AABPQAAArgXAbQgaAcgrAAQhlAAgjh0QgNgugRgTQgggkhHAAQiVAAhrBzQiJCSAAEgQAAE1CQCJQBkBeCVAAQBlAABfg0QBWgtBChOIA5A0Qi1DUkkAAQkNAAinilg");
	this.shape_10.setTransform(1086.9,1719.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DE146E").s().p("AmkGwQihirAAj3QAAkFC6i7QC+i+ERAAQDXAACTB/QCLB5ANCtIAAAeQgDAPgHAFQgJAFgbAAIs8AAQgLA4AABKQAAD6CCCVQB5CKC3AAQBwAABmhBQBKgwA7hLIA6A9QhrCKiWA5QhjAmhzAAQkxAAi0jBgAinnLQhYBfgYCRIHrgIQBMgCAQgMQAMgIgBgoQABifhhhEQhAguhfAAQiEAAhfBng");
	this.shape_11.setTransform(960.8,1719.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DE146E").s().p("AGlJKQicAAiXAJIAAg+IAxgFQBcgLAeg6QATgmAAhhIAAk0IpfAAIAAE0QAABhATAmQAeA6BcALIAxAFIAAA+QiYgJibAAQicAAiXAJIAAg+IAxgFQBcgLAdg6QAUgmAAhhIAAqHQAAhggUgnQgdg5hcgMIgxgEIAAg/QCXAJCcAAQCbAACYgJIAAA/IgxAEQhcAMgeA5QgTAnAABgIAAEOIJfAAIAAkOQAAhggTgnQgeg5hcgMIgxgEIAAg/QCXAJCcAAQCdAACWgJIAAA/IgxAEQhcAMgdA5QgUAnAABgIAAKHQAABhAUAmQAdA6BcALIAxAFIAAA+QiWgJidAAg");
	this.shape_12.setTransform(817.1,1719.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DE146E").s().p("AmkGwQigirgBj3QABkFC6i7QC+i+EQAAQDYAACSB/QCLB5AMCtIAAAeQgCAPgHAFQgJAFgcAAIs7AAQgLA8AABGQAAD6CCCVQB5CKC3AAQBxAABlhBQBKgwA8hLIA4A9QhrCKiVA5QhkAmhyAAQkxAAi0jBgAinnLQhYBfgXCRIHqgIQBLgCAQgMQAMgIABgoQgBifhghEQhAguhfAAQiEAAhfBng");
	this.shape_13.setTransform(673.9,1719.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DE146E").s().p("AjeOGIi+AAQh6AAi8AJIAAg+IBEgGQA6gFAegKQAngNAWgeQAvhAAAjEIAAwYQAAhlgHgyQgIg9gXggQguhEhwgGIhEgGIAAg/QAtAEBQADQBXACAsAAICgAAIFEgBQDKAFCFAfQFyBaAAFWQAAD0jUCFQi6B1kcAAQgsAAhKgEIhjgGIAAGyQAADQApA/QAvBICkAQIA8AGIAAA+QjQgJiWAAgAiOs9QgiAQAABRIAALKQBWALBZAAQDkAABmiRQBMhsAAizQAAj9itheQhfg1iTAAQhwAAgUAKg");
	this.shape_14.setTransform(536.1,1687.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EjW3gadQAAjABLivQBIiqCDiEQCEiCCphJQCwhKDAAAMGcmAAAQA+AAAsArQAsAtAAA9MAAAA2KQAADHhOC3QhKCviICIQiJCJiwBLQi2BNjHAAMmK9AAAQksAPkSB0QmeCwkAF3g");
	this.shape_15.setTransform(1375.2,1713.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,1449.1,2750.4,528.1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhANAKtIAA1ZMCAbAAAIAAVZg");
	mask.setTransform(411,68.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#70A600").s().p("Eg7rAKtQh4AAhVhVQhVhVAAh3IAAsWQAAh4BVhVQBVhVB4AAMB3YAAAQB3AABVBVQBVBVAAB4IAAMWQAAB3hVBVQhVBVh3AAg");
	this.shape.setTransform(411,68.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,822,137), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg7sAKTQhsAAhNhOQhOhNAAhtIAAsVQAAhtBOhNQBNhOBsAAMB3YAAAQBtAABNBOQBOBNAABtIAAMVQAABthOBNQhNBOhtAAg");
	mask.setTransform(408.4,65.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A7D900","#80BF00","#A8D900","#E0FF80"],[0,0.251,0.749,1],0,64.2,0,-64.2).s().p("Eg/zAKTIAA0lMB/nAAAIAAUlg");
	this.shape.setTransform(408.4,65.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,816.8,131.8), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg7sAJ4QhhAAhGhFQhFhGAAhiIAAsVQAAhiBFhGQBGhFBhAAMB3YAAAQBiAABGBFQBFBGAABiIAAMVQAABihFBGQhGBFhiAAg");
	mask.setTransform(405.7,63.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#78B300","#78B300","#A8D900","#A8D900"],[0,0.149,0.851,1],0,63.2,0,-63.2).s().p("Eg/YAJ4IAAzvMB+xAAAIAATvg");
	this.shape.setTransform(405.7,63.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,811.5,126.5), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bg02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg02();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg02_1, new cjs.Rectangle(-120,-200,240,400), null);


(lib.txt01careditanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AwJlHIAAkEMAgTAAAIAAEEg");
	var mask_graphics_1 = new cjs.Graphics().p("AwJk2IAAkEMAgTAAAIAAEEg");
	var mask_graphics_2 = new cjs.Graphics().p("AwJkqIAAkEMAgTAAAIAAEEg");
	var mask_graphics_3 = new cjs.Graphics().p("AwJkiIAAkDMAgTAAAIAAEDg");
	var mask_graphics_4 = new cjs.Graphics().p("AwJkcIAAkDMAgTAAAIAAEDg");
	var mask_graphics_5 = new cjs.Graphics().p("AwJkXIAAkDMAgTAAAIAAEDg");
	var mask_graphics_6 = new cjs.Graphics().p("AwJkTIAAkEMAgTAAAIAAEEg");
	var mask_graphics_7 = new cjs.Graphics().p("AwJkQIAAkEMAgTAAAIAAEEg");
	var mask_graphics_8 = new cjs.Graphics().p("AwJkOIAAkDMAgTAAAIAAEDg");
	var mask_graphics_9 = new cjs.Graphics().p("AwJkMIAAkEMAgTAAAIAAEEg");
	var mask_graphics_10 = new cjs.Graphics().p("AwJkLIAAkDMAgTAAAIAAEDg");
	var mask_graphics_11 = new cjs.Graphics().p("AwJkKIAAkEMAgTAAAIAAEEg");
	var mask_graphics_12 = new cjs.Graphics().p("AwJkJIAAkEMAgTAAAIAAEEg");
	var mask_graphics_13 = new cjs.Graphics().p("AwJkJIAAkEMAgTAAAIAAEEg");
	var mask_graphics_14 = new cjs.Graphics().p("AwJkJIAAkEMAgTAAAIAAEEg");
	var mask_graphics_242 = new cjs.Graphics().p("AwJkJIAAkEMAgTAAAIAAEEg");
	var mask_graphics_243 = new cjs.Graphics().p("AwJkJIAAkDMAgTAAAIAAEDg");
	var mask_graphics_244 = new cjs.Graphics().p("AwJkIIAAkDMAgTAAAIAAEDg");
	var mask_graphics_245 = new cjs.Graphics().p("AwJkGIAAkEMAgTAAAIAAEEg");
	var mask_graphics_246 = new cjs.Graphics().p("AwJkEIAAkDMAgTAAAIAAEDg");
	var mask_graphics_247 = new cjs.Graphics().p("AwJkBIAAkDMAgTAAAIAAEDg");
	var mask_graphics_248 = new cjs.Graphics().p("AwJj9IAAkDMAgTAAAIAAEDg");
	var mask_graphics_249 = new cjs.Graphics().p("AwJj4IAAkDMAgTAAAIAAEDg");
	var mask_graphics_250 = new cjs.Graphics().p("AwJjyIAAkDMAgTAAAIAAEDg");
	var mask_graphics_251 = new cjs.Graphics().p("AwJjqIAAkDMAgTAAAIAAEDg");
	var mask_graphics_252 = new cjs.Graphics().p("AwJjgIAAkDMAgTAAAIAAEDg");
	var mask_graphics_253 = new cjs.Graphics().p("AwJjSIAAkEMAgTAAAIAAEEg");
	var mask_graphics_254 = new cjs.Graphics().p("AwJi+IAAkDMAgTAAAIAAEDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1.9,y:-58.8}).wait(1).to({graphics:mask_graphics_1,x:1.9,y:-57.1}).wait(1).to({graphics:mask_graphics_2,x:1.9,y:-55.9}).wait(1).to({graphics:mask_graphics_3,x:1.9,y:-55}).wait(1).to({graphics:mask_graphics_4,x:1.9,y:-54.4}).wait(1).to({graphics:mask_graphics_5,x:1.9,y:-53.9}).wait(1).to({graphics:mask_graphics_6,x:1.9,y:-53.5}).wait(1).to({graphics:mask_graphics_7,x:1.9,y:-53.3}).wait(1).to({graphics:mask_graphics_8,x:1.9,y:-53}).wait(1).to({graphics:mask_graphics_9,x:1.9,y:-52.9}).wait(1).to({graphics:mask_graphics_10,x:1.9,y:-52.7}).wait(1).to({graphics:mask_graphics_11,x:1.9,y:-52.7}).wait(1).to({graphics:mask_graphics_12,x:1.9,y:-52.6}).wait(1).to({graphics:mask_graphics_13,x:1.9,y:-52.6}).wait(1).to({graphics:mask_graphics_14,x:1.9,y:-52.5}).wait(228).to({graphics:mask_graphics_242,x:1.9,y:-52.5}).wait(1).to({graphics:mask_graphics_243,x:1.9,y:-52.5}).wait(1).to({graphics:mask_graphics_244,x:1.9,y:-52.4}).wait(1).to({graphics:mask_graphics_245,x:1.9,y:-52.3}).wait(1).to({graphics:mask_graphics_246,x:1.9,y:-52}).wait(1).to({graphics:mask_graphics_247,x:1.9,y:-51.7}).wait(1).to({graphics:mask_graphics_248,x:1.9,y:-51.3}).wait(1).to({graphics:mask_graphics_249,x:1.9,y:-50.8}).wait(1).to({graphics:mask_graphics_250,x:1.9,y:-50.2}).wait(1).to({graphics:mask_graphics_251,x:1.9,y:-49.4}).wait(1).to({graphics:mask_graphics_252,x:1.9,y:-48.4}).wait(1).to({graphics:mask_graphics_253,x:1.9,y:-47.1}).wait(1).to({graphics:mask_graphics_254,x:1.9,y:-45}).wait(1));

	// Layer 1
	this.instance = new lib.txt01Creditcard();
	this.instance.parent = this;
	this.instance.setTransform(2,-83);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.8,regY:1.8,x:1.2,y:-83.4},0).wait(1).to({y:-84.9},0).wait(1).to({y:-86},0).wait(1).to({y:-86.8},0).wait(1).to({y:-87.4},0).wait(1).to({y:-87.9},0).wait(1).to({y:-88.2},0).wait(1).to({y:-88.5},0).wait(1).to({y:-88.7},0).wait(1).to({y:-88.9},0).wait(1).to({y:-89},0).wait(1).to({y:-89.1},0).wait(2).to({regX:0,regY:0,x:2,y:-91},0).wait(229).to({regX:-0.8,regY:1.8,x:1.2,y:-89.2},0).wait(1).to({y:-89.3},0).wait(1).to({y:-89.6},0).wait(1).to({y:-89.9},0).wait(1).to({y:-90.4},0).wait(1).to({y:-91},0).wait(1).to({y:-91.8},0).wait(1).to({y:-92.7},0).wait(1).to({y:-93.9},0).wait(1).to({y:-95.5},0).wait(1).to({y:-97.5},0).wait(1).to({regX:0,regY:0,x:2,y:-102.5},0).wait(1));

	// light04
	this.instance_1 = new lib.light04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90,-49.5);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(109).to({_off:false,scaleX:0.71,scaleY:0.71,x:99.6,y:-54,alpha:0.461},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.238},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(83));

	// light02
	this.instance_2 = new lib.light02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-73.9,-59.4,1,1,15);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(106).to({_off:false,regX:-0.1,regY:0.1,rotation:191,x:-56.2,y:-34.8,alpha:0.461},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.238},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({regX:0,regY:0,x:-56.4,y:-34.7,alpha:0.972},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.025},0).wait(1).to({regX:-0.1,regY:0.1,x:-56.2,y:-34.8,alpha:0},0).to({_off:true},1).wait(91));

	// light03
	this.instance_3 = new lib.light03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5,-17);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(105).to({_off:false,rotation:-15,x:49,alpha:0.461},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.238},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(88));

	// light01
	this.instance_4 = new lib.light01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-82,55,1,1,-9.5);
	this.instance_4.alpha = 0.301;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(103).to({_off:false,rotation:-167.8,x:-78.1,y:43.3,alpha:0.461},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.238},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({x:-78.2,alpha:0.972},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.439},0).wait(1).to({alpha:0.229},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.025},0).wait(1).to({x:-78.1,alpha:0},0).to({_off:true},1).wait(93));

	// txt01Charged
	this.instance_5 = new lib.txt01_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.2,57.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(1).to({regX:6.5,regY:-93.5,x:1.3,y:-36,alpha:0.018},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.59},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.808},0).wait(1).to({alpha:0.884},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.994},0).wait(1).to({regX:0,regY:0,x:-5.2,y:57.5,alpha:1},0).wait(1).to({regX:6.5,regY:-93.5,x:1.3,y:-36,alpha:0.982},0).wait(1).to({alpha:0.903},0).wait(1).to({alpha:0.821},0).wait(1).to({regX:0,regY:0,x:-5.2,y:57.5,alpha:0.801},0).wait(1).to({regX:6.5,regY:-93.5,x:1.3,y:-36,alpha:0.819},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.98},0).wait(1).to({regX:0,regY:0,x:-5.2,y:57.5,alpha:1},0).wait(81).to({regX:6.5,regY:-93.5,x:1.3,y:-36,alpha:0.996},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.742},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.321},0).wait(1).to({regX:0,regY:0,x:-5.2,y:57.5,alpha:0},0).wait(127));

	// Layer 4
	this.instance_6 = new lib.txt0102();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2,52);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(128).to({_off:false},0).wait(1).to({regY:-87.5,y:-35.5,alpha:0.018},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.59},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.808},0).wait(1).to({alpha:0.884},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.994},0).wait(1).to({regY:0,y:52,alpha:1},0).wait(1).to({regY:-87.5,y:-35.5,alpha:0.982},0).wait(1).to({alpha:0.903},0).wait(1).to({alpha:0.821},0).wait(1).to({regY:0,y:52,alpha:0.801},0).wait(1).to({regY:-87.5,y:-35.5,alpha:0.819},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.98},0).wait(1).to({regY:0,y:52,alpha:1},0).wait(81).to({regY:-87.5,y:-35.5,alpha:0.996},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.926},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.742},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.321},0).wait(1).to({regY:0,y:52,alpha:0},0).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo.png
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(9,-33,0.635,0.635);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// <Clip Group>_5
	this.instance_1 = new lib.ClipGroup_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(98.8,-71,0.072,0.072,0,0,0,1374.6,987.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-37.9,197.6,37.9), null);


(lib.Renaissancecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-99,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Renaissancecopy, new cjs.Rectangle(-99,-18.9,197.6,38), null);


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_259 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(259).call(this.frame_259).wait(1));

	// light04
	this.instance = new lib.light04();
	this.instance.parent = this;
	this.instance.setTransform(90,-49.5);
	this.instance.alpha = 0.301;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(37));

	// light02
	this.instance_1 = new lib.light02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-73.9,-59.4,1,1,15);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(42));

	// light03
	this.instance_2 = new lib.light03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5,-17);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.264},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(38));

	// light01
	this.instance_3 = new lib.light01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-82,55,1,1,-9.5);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({x:-82.2,alpha:0.912},0).wait(1).to({x:-82.4,alpha:0.79},0).wait(1).to({x:-82.8,alpha:0.62},0).wait(1).to({x:-83.1,alpha:0.432},0).wait(1).to({x:-83.5,alpha:0.264},0).wait(1).to({x:-83.7,alpha:0.139},0).wait(1).to({x:-83.9,alpha:0.057},0).wait(1).to({x:-84,alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,x:-82,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({x:-82.2,alpha:0.912},0).wait(1).to({x:-82.4,alpha:0.79},0).wait(1).to({x:-82.8,alpha:0.62},0).wait(1).to({x:-83.1,alpha:0.432},0).wait(1).to({x:-83.5,alpha:0.264},0).wait(1).to({x:-83.7,alpha:0.139},0).wait(1).to({x:-83.9,alpha:0.057},0).wait(1).to({x:-84,alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,x:-82,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({x:-82.2,alpha:0.912},0).wait(1).to({x:-82.4,alpha:0.79},0).wait(1).to({x:-82.8,alpha:0.62},0).wait(1).to({x:-83.1,alpha:0.432},0).wait(1).to({x:-83.5,alpha:0.264},0).wait(1).to({x:-83.7,alpha:0.139},0).wait(1).to({x:-83.9,alpha:0.057},0).wait(1).to({x:-84,alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,x:-82,alpha:0.301},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.59},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).wait(1).to({alpha:0.98},0).wait(1).to({x:-82.2,alpha:0.912},0).wait(1).to({x:-82.4,alpha:0.79},0).wait(1).to({x:-82.8,alpha:0.62},0).wait(1).to({x:-83.1,alpha:0.432},0).wait(1).to({x:-83.5,alpha:0.264},0).wait(1).to({x:-83.7,alpha:0.139},0).wait(1).to({x:-83.9,alpha:0.057},0).wait(1).to({x:-84,alpha:0.013},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(41));

	// Layer 1
	this.instance_4 = new lib.card();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-99,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-57,196,123);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ОФОРМИТЬ ЗАЯВКУ copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AK8BAIAAgQIAKAAQAEAAADgCQADgBADgGIABgEIglhhIASAAIAcBNIABAAIAchNIARAAIglBhIgGAOQgEAGgDADQgEADgDACIgJABgADDA/IgLgDIgJgEIgHgFIAIgMIAHAEIAHADIAJACIAHABQAPAAAHgHQAHgGAAgLQAAgKgGgGQgHgFgKAAIgPAAIAAgNIAOAAIAHgBQAEgBAEgDIAFgHQACgEAAgFQAAgJgHgFQgHgEgKAAIgHABIgIACIgHADIgGAEIgJgNQAIgFAIgDQAJgEAOAAQAHAAAHACQAHACAFAEQAGADADAGQADAHAAAIQAAAJgEAIQgFAIgIADQAFACADACIAGAHQADAEABAEIABAJQAAAKgEAHQgDAHgGAFQgGAFgIACQgJACgJAAIgLAAgAn0A8QgIgDgHgFQgGgFgDgIQgDgIAAgKIAAgqQAAgJADgIQADgIAGgFQAHgGAIgDQAJgDAKAAQAKAAAIADQAJADAGAGQAGAFADAIQAEAIAAAJIAAAqQAAAKgEAIQgDAIgGAFQgHAFgIADQgJADgJAAQgKAAgJgDgAntguQgFACgEADQgEAEgCAFQgCAGAAAHIAAAnQAAAHACAGQACAFAEADQAEAEAGABQAFACAGAAQAGAAAFgCQAFgBAEgEQAEgDADgFQACgGAAgHIAAgnQAAgHgCgGQgDgFgEgEQgEgDgFgCQgFgBgGAAQgGAAgGABgArvA8QgIgDgHgFQgGgFgDgIQgDgIAAgKIAAgqQAAgJADgIQADgIAGgFQAHgGAIgDQAJgDAKAAQAKAAAIADQAJADAGAGQAGAFADAIQAEAIAAAJIAAAqQAAAKgEAIQgDAIgGAFQgHAFgIADQgJADgJAAQgKAAgJgDgAroguQgFACgEADQgEAEgCAFQgCAGAAAHIAAAnQAAAHACAGQACAFAEADQAEAEAGABQAFACAGAAQAGAAAFgCQAFgBAEgEQAEgDADgFQACgGAAgHIAAgnQAAgHgCgGQgDgFgEgEQgEgDgFgCQgFgBgGAAQgGAAgGABgAKYA+IgLglIgEgKQgDgEgDgCQgDgCgEgBIgGAAIgVAAIAAA4IgQAAIAAh8IAQAAIAAA2IAUAAIAGAAQADgBADgCIAGgFQADgEACgGIALgkIAQAAIgLAlQgDAJgEAGQgFAGgGACQAIACAEAGQAFAHACAJIAMAogAHlA+IAAh8IA0AAQAIAAAHADQAHADAEAEQAFAFACAGQACAGAAAGQAAAIgDAHQgDAHgJAFQAJAEAEAIQAEAHAAAJQAAAGgCAHQgCAGgFAGQgEAFgHADQgGADgJAAgAH2AvIAiAAQALAAAFgFQAGgGAAgKQAAgFgCgEQgCgEgDgDQgDgDgEgBQgEgCgFAAIghAAgAH2gKIAhAAIAIgBQAEgBADgCQADgDABgDQACgEAAgEQAAgKgGgEQgGgEgKAAIggAAgAHAA+IAAg2IgZAAIgGACQgDAAgDADQgDACgDAEQgCADgCAGIgKAiIgRAAIAKgkIAFgNQADgFAGgDQgLgDgFgHQgFgIAAgLQAAgIADgHQACgHAFgFQAEgFAHgDQAGgDAJAAIA0AAIAAB8gAGPgpQgGAGAAALQAAAKAHAFQAHAEAKAAIAfAAIAAgpIggAAQgLAAgGAFgAFbA+IgKgcIgxAAIgKAcIgRAAIArh8IARAAIAsB8gAElATIAnAAIgTg6IgBAAgAAfA+IAAh8IAQAAIAAA0IAjAAQAIAAAHADQAGADAFAEQAFAGACAGQADAHAAAGQAAAHgCAHQgDAGgEAFQgEAGgHADQgGADgKAAgAAvAvIAgAAQAKAAAGgGQAGgGAAgKQAAgFgBgEQgCgEgDgCIgHgEIgJgCIggAAgAgjA+IAAhsIgkAAIAAgQIBYAAIAAAQIgjAAIAABsgAhlA+IAAhgIgBAAIg+BgIgQAAIAAh8IARAAIAABfIABAAIA9hfIAQAAIAAB8gAjaA+IAAhUIgBAAIggBCIgNAAIghhCIgBAAIAABUIgRAAIAAh8IAQAAIApBTIABAAIAohTIAQAAIAAB8gAmgA+IAAh8IA0AAQAJAAAHAEQAGADAEAFQAFAGACAGQACAHAAAHQAAAGgCAHQgDAHgEAEQgFAFgGAEQgHADgIAAIgjAAIAAAygAmPgCIAfAAQAKAAAGgGQAHgGAAgKQAAgKgHgGQgGgGgKAAIgfAAgApnA+IAAgKQgMAAgKgEQgJgEgHgGQgGgGgDgJQgEgIAAgKIAAgQQAAgJAEgJQADgIAHgGQAGgGAKgEQAJgEAMAAIAAgGIARAAIAAAGQALAAAKAEQAJADAHAHQAGAGAEAIQADAJAAAJIAAAQQAAAJgDAJQgEAIgGAHQgGAGgKAEQgJAEgMAAIAAAKgApWAlQAHgBAGgCQAGgCAFgEQAEgEADgGQACgGAAgIIAAgOQAAgHgCgGQgCgGgFgEQgEgEgHgCQgGgDgHAAgAp1gnQgGACgFAEQgEAEgCAGQgDAGAAAHIAAAOQAAAIADAGQACAGAFAEQAEAEAGACQAGACAIABIAAhPQgIAAgGADg");
	this.shape.setTransform(-0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// <Clip Group>
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0,0.3,0.227,0.227,0,0,0,406.1,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// <Clip Group>_1
	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.3,-0.1,0.227,0.227,0,0,0,408.9,65.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// <Clip Group>_2
	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.8,0.5,0.227,0.227,0,0,0,411.4,68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(-94,-15,186.3,31.1), null);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.Renaissancecopy("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(0,116.8,1,1,0,0,0,0,-57.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(403));

	// butt
	this.instance_1 = new lib.button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,-160,0.12,0.12,0,0,0,0,-0.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(286).to({_off:false},0).wait(1).to({regX:-0.9,regY:0.5,scaleX:0.44,scaleY:0.44,x:0.6,y:-159.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:0.5,y:-159.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:0.4,y:-159.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:0.3,y:-159.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:0.2,y:-159.2},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:0.1,y:-159.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.05,scaleY:1.05,x:1.1,y:-160},0).wait(1).to({regX:-0.9,regY:0.5,scaleX:1.04,scaleY:1.04,x:0,y:-159.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:0.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:1,y:-160},0).wait(102));

	// Legal
	this.instance_2 = new lib.legal_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,31);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(286).to({_off:false},0).wait(1).to({y:30.7,alpha:0.01},0).wait(1).to({y:29.7,alpha:0.044},0).wait(1).to({y:27.7,alpha:0.108},0).wait(1).to({y:24.6,alpha:0.212},0).wait(1).to({y:20.2,alpha:0.359},0).wait(1).to({y:14.8,alpha:0.539},0).wait(1).to({y:9.5,alpha:0.716},0).wait(1).to({y:5.4,alpha:0.853},0).wait(1).to({y:2.8,alpha:0.941},0).wait(1).to({y:1.4,alpha:0.987},0).wait(1).to({y:1,alpha:1},0).wait(106));

	// Layer 9
	this.instance_3 = new lib.bg02_1();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(286).to({_off:false},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0.51},0).wait(1).to({alpha:0.584},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.705},0).wait(1).to({alpha:0.754},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.834},0).wait(1).to({alpha:0.866},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(96));

	// Card
	this.instance_4 = new lib.card_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,-1.1,0.2,0.2,180,0,0,0,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({regX:-13.4,regY:21.2,scaleX:0.41,scaleY:0.41,rotation:132.8,x:-1.4,y:-10.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:97.4,x:-9.7,y:-10.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:71.5,x:-15.3,y:-5.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:52.6,x:-17.8,y:0.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:38.8,x:-18.4,y:5.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:28.6,x:-17.9,y:9.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:20.9,x:-17,y:12.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:15.1,x:-16.1,y:14.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:10.7,x:-15.2,y:16},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:7.4,x:-14.4,y:17.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:5,x:-13.8,y:18.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:3.2,x:-13.3,y:18.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:1.9,x:-13,y:19.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:1,x:-12.7,y:19.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.4,x:-12.5,y:19.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.1,x:-12.4,y:19.8},0).wait(1).to({regX:0,regY:0,rotation:0,x:1,y:-1},0).wait(1).to({regX:-13.4,regY:21.2,x:-12.4,y:20.4},0).wait(1).to({y:20.9},0).wait(1).to({y:21.8},0).wait(1).to({y:23.2},0).wait(1).to({y:25.1},0).wait(1).to({y:27.6},0).wait(1).to({y:30.7},0).wait(1).to({y:34.5},0).wait(1).to({y:39},0).wait(1).to({y:44.3},0).wait(1).to({y:50.2},0).wait(1).to({y:56.5},0).wait(1).to({y:63.1},0).wait(1).to({y:69.5},0).wait(1).to({y:75.5},0).wait(1).to({y:80.9},0).wait(1).to({y:85.5},0).wait(1).to({y:89.5},0).wait(1).to({y:92.6},0).wait(1).to({y:95.2},0).wait(1).to({y:97.1},0).wait(1).to({y:98.5},0).wait(1).to({y:99.5},0).wait(1).to({y:100},0).wait(1).to({regX:0,regY:0,x:1,y:79},0).wait(224).to({regX:-13.4,regY:21.2,x:-12.4,y:100.5,alpha:0.997},0).wait(1).to({y:101.5,alpha:0.987},0).wait(1).to({y:103.2,alpha:0.97},0).wait(1).to({y:105.7,alpha:0.945},0).wait(1).to({y:109.1,alpha:0.911},0).wait(1).to({y:113.7,alpha:0.865},0).wait(1).to({y:119.7,alpha:0.805},0).wait(1).to({y:127.5,alpha:0.727},0).wait(1).to({y:137.5,alpha:0.627},0).wait(1).to({y:150.9,alpha:0.493},0).wait(1).to({y:169.7,alpha:0.305},0).wait(1).to({regX:0,regY:0,x:1,y:179,alpha:0},0).to({_off:true},1).wait(116));

	// TXT01
	this.instance_5 = new lib.txt01careditanim("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1,-87.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({_off:true},274).wait(116));

	// Layer 2
	this.instance_6 = new lib.shade();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.5,-287.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).wait(1).to({y:-286.6},0).wait(1).to({y:-281.6},0).wait(1).to({y:-271.2},0).wait(1).to({y:-251.9},0).wait(1).to({y:-218.3},0).wait(1).to({y:-173.6},0).wait(1).to({y:-140},0).wait(1).to({y:-120.7},0).wait(1).to({y:-110.3},0).wait(1).to({y:-105.3},0).wait(1).to({y:-103.9},0).wait(383));

	// bg01
	this.instance_7 = new lib.picture();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1,390);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({y:360},0).wait(1).to({regY:-228.5,y:130.8},0).wait(1).to({y:128.4},0).wait(1).to({y:124.2},0).wait(1).to({y:118},0).wait(1).to({y:109.5},0).wait(1).to({y:98.4},0).wait(1).to({y:84.4},0).wait(1).to({y:67.3},0).wait(1).to({y:46.9},0).wait(1).to({y:23.2},0).wait(1).to({y:-3.4},0).wait(1).to({y:-32.1},0).wait(1).to({y:-61.6},0).wait(1).to({y:-90.5},0).wait(1).to({y:-117.5},0).wait(1).to({y:-141.7},0).wait(1).to({y:-162.6},0).wait(1).to({y:-180.1},0).wait(1).to({y:-194.5},0).wait(1).to({y:-205.9},0).wait(1).to({y:-214.6},0).wait(1).to({y:-221},0).wait(1).to({y:-225.3},0).wait(1).to({y:-227.7},0).wait(1).to({regY:0,y:0},0).wait(352));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-267,240,857);


// stage content:
(lib.renaissance_electricity_240x400_yandex_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.parent = this;
	this.instance.setTransform(120,200);

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
p.nominalBounds = new cjs.Rectangle(119,133,242,857);
// library properties:
lib.properties = {
	id: '5C7A83627BADBE439DC291ECB4AF34D6',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bg01.jpg", id:"bg01"},
		{src:"bg02.jpg", id:"bg02"},
		{src:"card.png", id:"card"},
		{src:"legal.png", id:"legal"},
		{src:"lightning01.png", id:"lightning01"},
		{src:"lightning02.png", id:"lightning02"},
		{src:"lightning03.png", id:"lightning03"},
		{src:"lightning04.png", id:"lightning04"},
		{src:"logo.png", id:"logo"},
		{src:"txt01.png", id:"txt01"},
		{src:"txt02.png", id:"txt02"}
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
an.compositions['5C7A83627BADBE439DC291ECB4AF34D6'] = {
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