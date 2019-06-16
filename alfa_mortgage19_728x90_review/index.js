(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,316,61],[0,63,312,59]]}
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



(lib.legal1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.legal2 = function() {
	this.spriteSheet = ss["index_atlas_"];
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


(lib.txt03b02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC9CsQgfgQgRgfQgRgeAAgqIAAhoQABhAAkgjQAlgkBBgBQBCABAkAkQAlAjABBAIAABoQgBBAglAjQgkAjhCABQgrAAgfgQgADehdQgNARAAAbIAABjQAAAbANARQAOARAbAAQAcAAANgRQAOgRAAgbIAAhjQAAgbgOgRQgNgRgcAAQgbAAgOARgAlQCsQgfgQgRgfQgRgeAAgqIAAhoQABhAAkgjQAlgkBBgBQBCABAkAkQAlAjABBAIAABoQgBBAglAjQgkAjhCABQgrAAgfgQgAkvhdQgNARAAAbIAABjQAAAbANARQAOARAbAAQAcAAANgRQAOgRAAgbIAAhjQAAgbgOgRQgNgRgcAAQgbAAgOARgAIXCqQgggQgRgeQgSgdAAgnQAAgcAIgXQAHgWANgWQAOgVASgXIBMhhIBeAAIhoCEQAJgGAMgEQAMgEARAAQAhAAAZAPQAZAPAOAbQAOAZAAAkQAAAmgSAdQgRAeggARQggARgsAAQgtAAgggRgAI5APQgQAQAAAZQAAAZAQAQQAPAPAcABQAbAAAQgQQAPgQAAgZQAAgagPgPQgQgPgbgBQgbABgQAPgAqiCxQgbgLgRgQQgRgRgJgUQgJgTgBgTIBWAAQABAIAHAJQAGAIAMAGQAMAHAUAAQAbAAAPgLQAOgLABgTQgBgUgLgKQgLgKgVAAIhIAAIAAhIIBCAAQATAAAKgJQAKgIAAgRQAAgTgNgKQgNgKgXAAQgSAAgKAGQgLAGgFAIQgFAIgCAHIhUAAQABgaAPgZQAPgYAdgQQAegQAtgBQBBAAAiAcQAjAbABAxQgBAUgHAPQgHAOgLAKQgLAJgKAEQANAEAOAJQANAKAJATQAJASAAAbQAAAhgRAZQgRAZggAOQggANgtAAQglAAgbgKgAguC1IAAhkIBeAAIAABkg");
	this.shape.setTransform(-0.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03b02, new cjs.Rectangle(-79.9,-41.1,159.8,82.3), null);


(lib.txt03b01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVA9IAAgbIhDAAIAAAbIgaAAIAAgzIAJAAQAEgGADgIQADgJACgPIAEgeIBOAAIAABEIAPAAIAAAzgAhCgbIgDARIgDALIgEAJIAkAAIAAgsIgaAAgAAlAeQgLgGgHgLQgHgLAAgNQAAgPAHgLQAHgLALgGQAMgGAOAAQAPAAAMAGQALAGAHALQAGALABAPQgBANgGALQgHALgLAGQgMAGgPABQgOgBgMgGgAA0ggQgFADgDAGQgDAFAAAHQAAAGADAFQADAFAFADQAFADAGAAQAHAAAFgDQAFgDACgFQADgFAAgGQAAgHgDgFQgCgGgFgDQgFgDgHAAQgGAAgFADg");
	this.shape.setTransform(-38.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03b01, new cjs.Rectangle(-52,-15.8,104,31.7), null);


(lib.txt03a04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGaCvQgWgNgNgWQgNgWgBgbQABgcANgWQANgWAWgNQAXgMAcAAQAcAAAWAMQAWANANAWQANAWABAcQgBAbgNAWQgNAWgWANQgWANgcAAQgcAAgXgNgAGyA/QgKALAAARQAAAQAKALQAKAKARABQAQgBAKgKQAKgLABgQQgBgRgKgLQgKgKgQgBQgRABgKAKgACgC1IEKlpIBIAAIkKFpgAizC1IBoiEQgJAGgMAEQgMAEgRAAQgiAAgZgPQgYgPgOgbQgOgZAAgkQAAgmARgeQASgdAfgRQAhgRAsgBQAsABAhARQAeAQASAeQARAdAAAnQAAAcgHAXQgHAWgNAWQgOAVgRAXIhMBhgAiIhgQgPAQgBAZQABAaAPAPQAPAPAcABQAbgBAQgPQAPgQABgZQgBgZgPgQQgQgQgbAAQgcAAgPAQgAoaC1ICZkeIiuAAIAAhLIEUAAIAAA2IihEzgACTgFQgWgMgNgWQgOgWAAgcQAAgcAOgWQANgWAWgMQAWgNAdgBQAcABAWANQAWAMANAWQANAWABAcQgBAcgNAWQgNAWgWAMQgWAMgcAAQgdAAgWgMgACrh0QgKAKgBARQABAQAKALQAKALARAAQAQAAAKgLQAKgLAAgQQAAgRgKgKQgKgLgQAAQgRAAgKALg");
	this.shape.setTransform(0,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03a04, new cjs.Rectangle(-60.3,-41.1,120.7,82.3), null);


(lib.txt03a03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBJQAKgQAJgTQAHgUADgSIgiAAIAAhIIBFAAIAABAQAAAYgHAVQgHAVgJAPg");
	this.shape.setTransform(0.5,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03a03, new cjs.Rectangle(-8.2,-30.4,16.5,60.8), null);


(lib.txt03a02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXFFIC2joQgPAKgUAHQgWAGgeABQg7AAgsgbQgsgagYgvQgYgugBg+QAAhDAgg1QAeg1A4gdQA4geBOgBQBPABA4AdQA4AeAfA0QAfA0AABEQAAAxgNApQgNAogXAmQgXAmghApIiGCqgAhLijQgbAbAAAtQAAAsAbAcQAbAbAwABQAvgBAdgbQAbgcABgtQgBgsgbgbQgcgcgwgBQgwABgbAcg");
	this.shape.setTransform(0.3,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03a02, new cjs.Rectangle(-32,-71,64.2,142.1), null);


(lib.txt03a01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRArQgLgHgHgKQgHgMAAgOQAAgNAHgMQAHgLALgGQAMgGAOAAQAPAAAMAGQALAGAHALQAGAMABANQgBAOgGAMQgHAKgLAHQgMAGgPAAQgOAAgMgGgAhCgTQgFADgDAFQgDAFAAAGQAAAGADAGQADAFAFADQAFADAGAAQAHAAAFgDQAFgDACgFQADgGAAgGQAAgGgDgFQgCgFgFgDQgFgEgHAAQgGAAgFAEgAArAuIAAhEIgjAAIAAgYIBjAAIAAAYIgjAAIAABEg");
	this.shape.setTransform(-38.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03a01, new cjs.Rectangle(-52,-15.8,104,31.7), null);


(lib.percentOm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBxQgXgJgRgRQgRgRgJgVQgKgYAAgZQAAgYAKgYQAJgVARgRQARgRAXgJQAXgJAZAAQAaAAAXAJQAXAJARARQARARAJAVQAKAYAAAYQAAAZgKAYQgJAVgRARQgRARgXAJQgXAJgaAAQgZAAgXgJgAggghQgOANAAAUQAAAVAOANQANAOATAAQAUAAANgOQANgNAAgVQAAgUgNgNQgNgOgUAAQgTAAgNAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percentOm, new cjs.Rectangle(-12.4,-12.2,25,24.5), null);


(lib.percentLinem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjTDkIFMnHIBbAAIlNHHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.percentLinem, new cjs.Rectangle(-21.2,-22.7,42.5,45.6), null);


(lib.legal2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal2();
	this.instance.parent = this;
	this.instance.setTransform(81,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal2_1, new cjs.Rectangle(81,-195,312,59), null);


(lib.legal1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal1();
	this.instance.parent = this;
	this.instance.setTransform(81,-196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal1_1, new cjs.Rectangle(81,-196,316,61), null);


(lib.lampSwitch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwJSQgVgUAAgdQAAgkAegWIAAxNIBPAAIAARNQAeAWAAAkQAAAdgUAUQgVAVgdAAQgcAAgUgVg");
	this.shape.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lampSwitch, new cjs.Rectangle(-1.7,-15.4,3.5,30.8), null);


(lib.lamp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgVUBh4QAAhFCxg8QCrg6EngkICtgVQDdgYDngJMAAAiTjMgh6AAAMAKbgr4MAx+AAAMAKcAr4MghnAAAMAAhCTeIC1AMQDWASC4AaQJIBVA0CNg");
	this.shape.setTransform(0.2,0.4,0.25,0.25,0,0,0,0.8,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lamp, new cjs.Rectangle(-56.6,-156.6,113.3,313.2), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F03024").s().p("EgyDAPEQjEAAi0hLQishKiGiFQiFiFhKitQhLizgBjFQABjDBLi0QBKisCFiGQCGiFCshKQC0hLDEgBMBkHAAAQDEABC0BLQCtBKCFCFQCFCGBKCsQBLC0AADDQAADFhLCzQhKCtiFCFQiFCFitBKQi0BLjEAAg");
	this.shape.setTransform(416.9,96.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,833.7,192.9), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egy1Ag+MAQThB7MBG0AAAMAOkBB7g");
	mask.setTransform(562.5,1046.5);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],18.4,-287.9,18.4,126.7).s().p("EhtSAshMAAAhZBMDalAAAMAAABZBg");
	this.shape.setTransform(549.7,916.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,1141,1201), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhKhALZIAA2xMCVDAAAIAAWxg");
	mask.setTransform(477,72.9);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AneBjIAAjFIO8AAIAADFg");
	this.shape_1.setTransform(47.9,135.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AD5HuIhAjIIl5AAIhEDIIjEAAIEntJQAahJAegfQApgqBIAAQBKAAAoAqQAdAfAYBJIEaNJgACCB9Ih/mOIgEAAIiGGOIEJAAg");
	this.shape_2.setTransform(47.9,49.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkAEyQhHhEAAhtQAAhpBDg6QBEg7B3AAICxAAQAAh1hyAAQg4AAggAaQgYATgGAaIi1AAQAHhhBKhBQBThICHAAQCJAABOBMQBOBLAACBIAADqQAAAdAKAMQAKANAZAAIAAChIg/AAQgzAAglgTQgmgTgSgjQgYAlgrAXQg3AfhJAAQhwAAhGhEgAhtA/QgiAUAAAuQAAAxAiAYQAdAUA1AAQA5AAAkghQAmgjAAg7IAAguIiOAAQguAAgZAOg");
	this.shape_3.setTransform(361.7,63.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZJ0IAAkIQiagNhehkQhfhlAAiYQAAiYBfhkQBehkCagNIAAkEICyAAIAAEEQCbAMBeBkQBfBlAACYQAACZhfBlQheBkibAMIAAEIgABZDDQBLgKAsg1QArg1AAhRQAAhSgrg1Qgsg0hLgLgAjPiJQgrA1AABSQAABRArA1QArA1BLAKIAAmLQhLALgrA0g");
	this.shape_4.setTransform(279.6,64);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkfFeIAAq7ICzAAIAADUICBAAQB/AABGA/QBGA/AABzQAABmg7BCQhHBOiHAAgAhsDEIBzAAQBjAAAAhcQAAgrgbgWQgYgVgwAAIhzAAg");
	this.shape_5.setTransform(201.4,63.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACDFeIAAoYIirAAIgHDnQgGCmguBBQgyBKiEAAIgbAAIAAikQA3AAASgdQASgeADhhIANl7IH/AAIAAK7g");
	this.shape_6.setTransform(128,63.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkNEvQhMhCAAhrQAAhnBGg4QBGg4B9AAIDNAAIAAgBQgBg/gmglQgoglhAAAQg9AAgmAeQgVASgJAWIAAABIizAAIAAgCQADgcARgfQASgnAfgeQBXhVCVAAQCVAABVBLQBUBMAACGIAADnQAAAeALAPQALAOAZADIACABIAACRIg5AAQg7AAgogYQgogYgPgsQgZAmgoAaQg8AnhSAAQh5AAhMhBgAiIA+QgeAYAAApQAAAxAkAdQAkAcA/AAQBCAAAtgjQAsgjABg0IAAhIIiyAAQg1AAgeAXg");
	this.shape_7.setTransform(919.4,63.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AB4FfIAAAAIkmk3IAAE3IiwAAIAAq9ICwAAIAAEnIEUknIDfAAIlAFOIFaFvg");
	this.shape_8.setTransform(851.3,63.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah/FXQhBgbgvg0QgugxgYhFQgYhEAAhOQAAikBdhnQBchlCVAAQCYAABaBkQBbBkAACoIAAAdInoAAQAFBYAuAzQAtAyBJAAQBcAAAvhBIABgCICvAAIgBACQgDAZgNAdQgVAtgnAlQhXBRiXgBQhNABhBgbgACYhZQgNhFgngkQgngkg8AAQg9AAgnAkQgoAlgMBEIEvAAIAAAAg");
	this.shape_9.setTransform(772.4,63.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhZFfIAAokIjmAAIAAiZIJ/AAIAACZIjnAAIAAIkg");
	this.shape_10.setTransform(705.3,63.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Aj4ELQhghoAAijQAAhQAYhDQAYhEAvgzQAvgyBAgaQA/gaBLAAQBLAABAAaQBAAaAvAyQAvAzAYBEQAYBDAABQQAACjhgBoQhhBmiYAAQiYAAhghmgAh5iWQgqA6AABcQAABhAtA5QAsA5BKAAQBNABAsg9QApg6AAhdQAAhdgpg5Qgsg8hNgBQhNABgsA8g");
	this.shape_11.setTransform(637,63.4);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,954,145.8), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3125").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(244,-155,3.033,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(-120,-200,728,90), null);


(lib.TXT03b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt03b02
	this.instance = new lib.txt03b02();
	this.instance.parent = this;
	this.instance.setTransform(27.5,-6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:17,alpha:1},14,cjs.Ease.circOut).wait(94).to({x:6.5,alpha:0},15,cjs.Ease.circIn).wait(1));

	// txt03b01
	this.instance_1 = new lib.txt03b01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.5,9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-42,alpha:1},14,cjs.Ease.circOut).wait(95).to({x:-52.5,alpha:0},15,cjs.Ease.circIn).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,7,23,12.3);


(lib.TXT03a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt03a04
	this.instance = new lib.txt03a04();
	this.instance.parent = this;
	this.instance.setTransform(55.5,6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:45,alpha:1},14,cjs.Ease.circOut).wait(92).to({x:34.5,alpha:0},15,cjs.Ease.circIn).wait(1));

	// txt03a03
	this.instance_1 = new lib.txt03a03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.5,12);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:-24,alpha:1},14,cjs.Ease.circOut).wait(93).to({x:-34.5,alpha:0},15,cjs.Ease.circIn).to({_off:true},1).wait(2));

	// txt03a02
	this.instance_2 = new lib.txt03a02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36.5,-11);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:-47,alpha:1},14,cjs.Ease.circOut).wait(93).to({x:-57.5,alpha:0},15,cjs.Ease.circIn).to({_off:true},1).wait(4));

	// txt03a01
	this.instance_3 = new lib.txt03a01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-40.5,21);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-51,alpha:1},14,cjs.Ease.circOut).wait(95).to({x:-61.5,alpha:0},15,cjs.Ease.circIn).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,19,21.3,9.8);


(lib.PercentO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.percentOm();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9,0.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.circOut).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-11,22.5,22);


(lib.PercentLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlFFrIAAnmIKLAAIAAHmg");
	var mask_graphics_1 = new cjs.Graphics().p("AlFFNIAAnmIKLAAIAAHmg");
	var mask_graphics_2 = new cjs.Graphics().p("AlFEvIAAnmIKLAAIAAHmg");
	var mask_graphics_3 = new cjs.Graphics().p("AlFERIAAnmIKLAAIAAHmg");
	var mask_graphics_4 = new cjs.Graphics().p("AlFD0IAAnnIKLAAIAAHng");
	var mask_graphics_5 = new cjs.Graphics().p("AlFD0IAAnmIKLAAIAAHmg");
	var mask_graphics_6 = new cjs.Graphics().p("AlFDzIAAnmIKLAAIAAHmg");
	var mask_graphics_7 = new cjs.Graphics().p("AlFD0IAAnnIKLAAIAAHng");
	var mask_graphics_8 = new cjs.Graphics().p("AlFD0IAAnmIKLAAIAAHmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-2.6,y:36.3}).wait(1).to({graphics:mask_graphics_1,x:-2.6,y:33.3}).wait(1).to({graphics:mask_graphics_2,x:-2.6,y:30.3}).wait(1).to({graphics:mask_graphics_3,x:-2.6,y:27.3}).wait(1).to({graphics:mask_graphics_4,x:-2.6,y:24.3}).wait(1).to({graphics:mask_graphics_5,x:-2.6,y:18.3}).wait(1).to({graphics:mask_graphics_6,x:-2.6,y:12.3}).wait(1).to({graphics:mask_graphics_7,x:-2.6,y:6.3}).wait(1).to({graphics:mask_graphics_8,x:-2.6,y:0.3}).wait(7));

	// Layer_1
	this.instance = new lib.percentLinem();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PercentLine
	this.instance = new lib.PercentLine("synched",0,false);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(23));

	// Percent2
	this.instance_1 = new lib.PercentO("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,11);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(32));

	// Percent1
	this.instance_2 = new lib.PercentO("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-22,22.5,22);


(lib.LOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.2,0.14,0.14,0,0,0,478.3,74.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACHFfIAAokIkMAAIAAIkIizAAIAAq9IJyAAIAAK9g");
	this.shape.setTransform(11.8,-1.3,0.14,0.14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AD0HtIAArHInnLHIi9AAIAAvZIC9AAIAALHIHorHIC7AAIAAPZg");
	this.shape_1.setTransform(-0.8,-3.3,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-66.7,-10.2,133.6,20.4), null);


(lib.LegalMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.legal2_1();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({alpha:1},14,cjs.Ease.circOut).wait(65).to({alpha:0},16,cjs.Ease.circIn).wait(6));

	// Layer_1
	this.instance_1 = new lib.legal1_1();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.circOut).wait(65).to({alpha:0},16,cjs.Ease.circIn).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(81,-196,316,61);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(570.5,628.8,1,1,0,0,0,570.5,628.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(-149.8,631.3,1399,626.3), null);


(lib.btnBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.205,0.205,0,0,0,417.2,96.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnBase, new cjs.Rectangle(-85.4,-19.7,170.9,39.6), null);


(lib.PercentMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// percent 62
	this.instance = new lib.Percent("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(59.4,264.9,1,1,0,0,0,-2.6,24.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(18).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 53
	this.instance_1 = new lib.Percent("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.4,216.9,1,1,0,0,0,-2.6,24.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(6).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 5
	this.instance_2 = new lib.Percent("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.6,216.9,1,1,0,0,0,-2.6,24.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(9).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 43
	this.instance_3 = new lib.Percent("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(121.4,168.9,1,1,0,0,0,-2.6,24.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(15).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 42
	this.instance_4 = new lib.Percent("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(59.4,168.9,1,1,0,0,0,-2.6,24.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(6).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 4
	this.instance_5 = new lib.Percent("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2.6,168.9,1,1,0,0,0,-2.6,24.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(18).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 32
	this.instance_6 = new lib.Percent("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(59.4,120.9,1,1,0,0,0,-2.6,24.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(15).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 23
	this.instance_7 = new lib.Percent("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(121.4,72.9,1,1,0,0,0,-2.6,24.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(9).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 2
	this.instance_8 = new lib.Percent("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-2.6,72.9,1,1,0,0,0,-2.6,24.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(6).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 13
	this.instance_9 = new lib.Percent("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(121.4,24.9,1,1,0,0,0,-2.6,24.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(9).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 12
	this.instance_10 = new lib.Percent("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(59.4,24.9,1,1,0,0,0,-2.6,24.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(12).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 22
	this.instance_11 = new lib.Percent("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(59.4,72.9,1,1,0,0,0,-2.6,24.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(12).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 6
	this.instance_12 = new lib.Percent("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-2.6,264.9,1,1,0,0,0,-2.6,24.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(15).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 52
	this.instance_13 = new lib.Percent("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(59.4,216.9,1,1,0,0,0,-2.6,24.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(12).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(9).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 33
	this.instance_14 = new lib.Percent("synched",0,false);
	this.instance_14.parent = this;
	this.instance_14.setTransform(121.4,120.9,1,1,0,0,0,-2.6,24.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(12).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 3
	this.instance_15 = new lib.Percent("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-2.6,120.9,1,1,0,0,0,-2.6,24.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(15).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 63
	this.instance_16 = new lib.Percent("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(121.4,264.9,1,1,0,0,0,-2.6,24.9);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({_off:false},0).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(18).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

	// percent 1
	this.instance_17 = new lib.Percent("synched",0,false);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-2.6,24.9,1,1,0,0,0,-2.6,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({mode:"single",startPosition:7},0).wait(2).to({mode:"synched",startPosition:8,loop:false},0).wait(7).to({mode:"single",startPosition:15},0).wait(21).to({mode:"synched",startPosition:17,loop:false},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-22,22.5,22);


(lib.LampLight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(2.5,-88,0.245,0.245,0,0,0,570.2,628.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LampLight, new cjs.Rectangle(-173.9,-87.3,342.8,153.5), null);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ОФОРМИТЬ copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiaAmQgKgGgGgKQgGgJAAgNQAAgMAGgKQAGgKAKgFQAKgGANAAQAMAAAKAGQAKAFAGAKQAGAKAAAMQAAANgGAJQgGAKgKAGQgKAGgMAAQgNAAgKgGgAiSgZQgGAEgEAHQgDAHAAAHQAAAIADAHQADAGAHAFQAGADAJAAQAIAAAGgDQAHgFADgGQAEgHAAgIQAAgHgEgHQgDgHgHgEQgGgDgIAAQgJAAgGADgAmDAmQgKgGgGgKQgGgJAAgNQAAgMAGgKQAGgKAKgFQAKgGANAAQAMAAAKAGQAKAFAGAKQAGAKAAAMQAAANgGAJQgGAKgKAGQgKAGgMAAQgNAAgKgGgAl7gZQgGAEgEAHQgDAHAAAHQAAAIADAHQADAGAHAFQAGADAJAAQAIAAAGgDQAHgFADgGQAEgHAAgIQAAgHgEgHQgDgHgHgEQgGgDgIAAQgJAAgGADgAkAAsIAAgQIgTAAQgRAAgIgIQgIgHgBgNQABgPAIgHQAIgIAQAAIAUAAIAAgNIAQAAIAAANIAUAAQAQAAAIAIQAIAHAAAPQAAANgIAHQgIAIgQAAIgUAAIAAAQgAjwAOIATAAQAIgBAFgDQAEgEAAgGQAAgHgEgEQgFgEgIAAIgTAAgAkggLQgEAEAAAHQAAAGAEAEQAFADAIABIATAAIAAgdIgTAAQgIAAgFAEgABBArIgchFIAABFIgPAAIAAhVIAYAAIAaA+IAZg+IAXAAIAABVIgPAAIAAhFIgdBFgAFOArIAAhVIAQAAIAAAeIAdAAQAPAAAIAHQAIAHAAANQAAANgIAIQgIAGgPABgAFeAcIAcAAQAIAAAEgDQAEgEAAgGQAAgGgEgEQgEgDgIgBIgcAAgAEOArIAAhGIgiAAIAAgPIBTAAIAAAPIghAAIAABGgADOArIAAg/IgwA/IgQAAIAAhVIAQAAIAAA/IAwg/IAQAAIAABVgAhGArIAAhVIAvAAQAOABAIAGQAHAHAAAMQAAANgHAGQgIAGgOABIgfAAIAAAhgAg2gEIAeAAQAHABAEgEQADgDAAgGQAAgFgDgDQgEgEgHABIgeAAg");
	this.shape.setTransform(1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// btnBase
	this.instance = new lib.btnBase();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.butt, new cjs.Rectangle(-96.4,-30.7,196,64), null);


(lib.lampMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lamp
	this.instance = new lib.lamp();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// switch
	this.instance_1 = new lib.lampSwitch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({y:-80},5,cjs.Ease.quintInOut).to({y:-90},5,cjs.Ease.quintInOut).wait(24));

	// light
	this.instance_2 = new lib.LampLight();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.1,-139,1,1,0,0,0,1.9,-88);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({alpha:1},7).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,-156.6,113.3,313.2);


(lib.TXT03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 0302
	this.instance = new lib.TXT03b("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(141.5,11.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(138));

	// Layer 8
	this.instance_1 = new lib.lampMov("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.6,-0.3,0.24,0.24,0,0,0,-4.4,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({x:9.6,alpha:1,mode:"single",startPosition:13},13,cjs.Ease.circOut).wait(20).to({mode:"synched",loop:false},0).wait(77).to({startPosition:47},0).to({x:-4.4,alpha:0},12,cjs.Ease.circIn).to({_off:true},1).wait(28));

	// 0301
	this.instance_2 = new lib.TXT03a("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-133,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.5,19,21.3,9.8);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LOGO
	this.instance = new lib.LOGO();
	this.instance.parent = this;
	this.instance.setTransform(82,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(420));

	// LEGAL
	this.instance_1 = new lib.LegalMov("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(118,211);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229).to({_off:false},0).wait(191));

	// BTN
	this.instance_2 = new lib.butt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(637.2,45.2,0.7,0.7,0,0,0,0.2,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229).to({_off:false},0).to({regX:0,regY:0,scaleX:0.88,scaleY:0.88,x:637,y:45,alpha:1},10,cjs.Ease.sineOut).wait(165).to({regX:0.3,regY:0.1,scaleX:0.4,scaleY:0.4,x:637.1,y:45.1,alpha:0},11,cjs.Ease.circIn).wait(5));

	// Layer_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_158 = new cjs.Graphics().p("A19GaIAArfMBKfAAAIAALfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(158).to({graphics:mask_graphics_158,x:336.2,y:41}).wait(71).to({graphics:null,x:0,y:0}).wait(191));

	// PERCENTS copy 3
	this.instance_3 = new lib.PercentMov("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(646.3,9.6,0.77,0.77,0,0,0,-2.2,25.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(158).to({_off:false},0).wait(62).to({startPosition:52},0).to({alpha:0},8).to({_off:true},1).wait(191));

	// PERCENTS copy 2
	this.instance_4 = new lib.PercentMov("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(504.3,-101.4,0.77,0.77,0,0,0,-2.2,25.4);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(158).to({_off:false},0).wait(62).to({startPosition:52},0).to({alpha:0},8).to({_off:true},1).wait(191));

	// PERCENTS copy
	this.instance_5 = new lib.PercentMov("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(361.3,-27.4,0.77,0.77,0,0,0,-2.2,25.4);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(158).to({_off:false},0).wait(62).to({startPosition:52},0).to({alpha:0},8).to({_off:true},1).wait(191));

	// PERCENTS
	this.instance_6 = new lib.PercentMov("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(218.3,46.6,0.77,0.77,0,0,0,-2.2,25.4);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(158).to({_off:false},0).wait(62).to({startPosition:52},0).to({alpha:0},8).to({_off:true},1).wait(191));

	// TXT03
	this.instance_7 = new lib.TXT03("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(432.7,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},158).wait(262));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(420));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-211,758,356.6);


// stage content:
(lib.alfa_mortgage19_728x90_review = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(363,44,730,92);
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