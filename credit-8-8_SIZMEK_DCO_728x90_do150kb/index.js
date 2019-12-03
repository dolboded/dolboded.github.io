(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[1188,0,162,170],[1432,0,22,16],[1352,0,78,118],[1456,0,6,8],[0,0,1186,142]]}
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



(lib.bag = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BG_SNOW = function() {
	this.initialize(img.BG_SNOW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1906,182);


(lib.DED_arm = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.DED_body = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.DED_hand = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.legal1 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
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


(lib.txt0102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFFgQAXglADgcIgeAAIAAg/IA9AAIAAA4QAAAlgUAjgAk/EqQhnAAg9gyQg7gxgBhSQAAg+AlgrQAdgiAqgOQgmgMgagfQgggoAAg6QAAhOA3gvQA6gxBkAAIAYAAQBmAAA5AxQA4AvAABOQAAA6ghAoQgaAfgmAMQAqAOAeAiQAkArAAA+QAABSg8AxQg+AyhoAAgAmJAmQgfAbAAAqQAAArAfAaQAdAZAwAAIAWAAQAvAAAegZQAfgaAAgrQAAgrgfgaQgegZgvAAIgWAAQgwAAgdAZgAmDjnQgcAYAAAnQAAAoAcAXQAcAYAtAAIARAAQAuAAAcgYQAcgXAAgoQAAgngcgYQgcgYguAAIgRAAQgtAAgcAYgACLElQg4AAgggaQgggZABgqQAAgfASgWQAOgRAVgHQgSgGgOgQQgQgUAAgeQAAgoAegXQAegZA2AAIANAAQA3AAAfAZQAdAXAAAoQAAAdgRAVQgMAQgTAGQAVAHAOARQATAWAAAfQgBAqgfAZQggAag5AAgABtCkQgNALgBATQABASANALQANALATAAIAJAAQAUAAANgLQANgLAAgSQAAgTgNgLQgNgLgUAAIgJAAQgUAAgMALgABvAfQgMAKAAARQAAARAMALQAMAKATAAIAHAAQAUAAAMgKQALgLABgRQgBgRgLgKQgMgKgUAAIgHAAQgTAAgMAKgAHPEVQgPgNAAgUQAAgUAPgNQANgOAVAAQATAAAOAOQAOANAAAUQAAAUgOANQgOAOgTAAQgVAAgNgOgAHjDnQgEAFAAAIQAAAIAEAFQAGAFAIAAQAHAAAFgFQAFgFAAgIQAAgIgFgFQgFgFgHAAQgIAAgGAFgAFhEfIB/itIAiAAIiACtgAFQC/QgOgOAAgUQAAgTAOgOQAOgNAUAAQAUAAAOANQAOAOAAATQAAAUgOAOQgOANgUAAQgUAAgOgNgAFlCRQgEAFAAAHQAAAIAEAFQAFAGAIAAQAIAAAFgGQAEgFABgIQgBgHgEgFQgFgGgIAAQgHAAgGAGg");
	this.shape.setTransform(0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0102, new cjs.Rectangle(-54,-35,108.7,70.5), null);


(lib.TXT02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AE1ChIAAhzIAaAAIAAAMIAEgEQADgEAGgDQAFgDAJAAQALAAAIAFQAJAFAFAKQAFAJAAAOQAAANgFAKQgFAKgJAFQgIAFgLAAQgJAAgFgDQgGgCgDgEIgEgEIAAAsgAFUBIQgFAGAAAJQAAAJAFAGQAFAGAKAAQAJAAAFgGQAFgGAAgJQAAgJgFgGQgFgFgJgBQgKABgFAFgAC5CZIAAgZIg7AAIAAAZIgXAAIAAguIAIAAQAEgFACgJQADgIABgNIAEgaIBGAAIAAA9IAOAAIAAAugACRBJIgCAPIgDALIgEAIIAhAAIAAgoIgXAAgAIIB9QgKgGgGgJQgGgKAAgNQAAgNAGgKQAGgKAKgFQAKgGANABQANgBALAGQAKAFAGAKQAGAKAAANQAAANgGAKQgGAJgKAGQgLAGgNgBQgNABgKgGgAIVBFQgEACgDAFQgCAFAAAGQAAAGACAFQADAEAEADQAFADAFAAQAGAAAFgDQAEgDACgEQADgFAAgGQAAgGgDgFQgCgFgEgCQgFgDgGAAQgFAAgFADgADhB9QgJgFgFgKQgFgKAAgNQAAgOAFgJQAFgKAJgFQAIgFALAAQAIAAAGADQAFADADADIAEAEIAAgLIAaAAIAABSIgaAAIAAgLIgDAEQgDADgGADQgGADgIAAQgLAAgIgFgADxBFQgEACgCAFQgDAFAAAGQAAAGADAFQACAEAEADQAFADAGAAQAFAAAFgDQAEgDACgEQACgFAAgGQAAgGgCgFQgCgFgEgCQgFgDgFAAQgGAAgFADgAAlB9QgLgGgGgJQgFgKgBgNQABgNAFgKQAGgKALgFQAKgGANABQANgBAKAGQAKAFAGAKQAGAKAAANQAAANgGAKQgGAJgKAGQgKAGgNgBQgNABgKgGgAAyBFQgFACgCAFQgDAFAAAGQAAAGADAFQACAEAFADQAEADAGAAQAGAAAEgDQAEgDADgEQACgFAAgGQAAgGgCgFQgDgFgEgCQgEgDgGAAQgGAAgEADgAi1B9QgLgFgFgLQgGgJAAgNQAAgNAGgKQAFgKAKgFQAKgGANABQAOgBAKAGQAKAFAFAKQAGAKAAAOIAAAEIg/AAQABAIAFAFQAFAFAJAAIAIgBIAGgCIACgDIAaAAIgDAIQgDAFgFAEQgFAEgHADQgIACgLAAQgOABgKgGgAiMBMQgCgHgFgDQgFgDgHAAQgHAAgFADQgEAEgCAGIAlAAIAAAAgApiB9QgLgGgGgJQgFgKgBgNQABgNAFgKQAGgKALgFQAKgGANABQANgBAKAGQAKAFAGAKQAGAKAAANQAAANgGAKQgGAJgKAGQgKAGgNgBQgNABgKgGgApVBFQgFACgCAFQgDAFAAAGQAAAGADAFQACAEAFADQAEADAGAAQAGAAAEgDQAEgDADgEQACgFAAgGQAAgGgCgFQgDgFgEgCQgEgDgGAAQgGAAgEADgArBB9QgKgFgGgLQgGgKAAgQIABgKIAAgJQABgOAFgLQAGgJAKgHQALgGARgCIAggGIAAAWIggAGQgJABgGACQgGAEgDAEQgDAGgBAIQAEgHAHgCQAIgEAKAAQAMAAAJAFQAJAFAEAJQAFAJAAAMQAAANgGAJQgGAJgKAGQgKAEgNAAQgOABgKgGgAq4BMQgEAGAAAIQAAAIAEAFQAFAFAKAAQAJAAAFgFQAFgFAAgIQAAgIgFgGQgFgFgJAAQgKAAgFAFgAocCBIAAgYIACAAIAGgBQACgCABgCIACgKIAEgsIBIAAIAABSIgaAAIAAg9IgYAAIgDAaQgBAMgDAIQgDAIgGAEQgGAEgLAAgAKzCAIAAgcIAeAAIAAAcgAJVCAIAAhSIA1AAQANgBAIAHQAIAGAAAJQAAAGgCADIgFAGIgGADIAHAEQAEADACAEQACAEAAAFQAAALgIAGQgIAGgPAAgAJvBuIAWAAQAFAAACgCQADgBAAgFQAAgDgDgCQgCgCgFAAIgWAAgAJvBPIAUAAQAFAAACgDQADgBAAgEQAAgEgDgCQgCgCgFAAIgUAAgAHVCAIgigkIAAAkIgaAAIAAhSIAaAAIAAAiIAhgiIAgAAIgnAnIAqArgAgSCAIAAg9IggAAIAAA9IgaAAIAAhSIBSAAIAABSgAlZCAIAAhSIAaAAIAAA9IAcAAIAAg9IAaAAIAAA9IAcAAIAAg9IAaAAIAABSgAm2CAIAAhSIAaAAIAAAZIAbAAQAMAAAIADQAHAEADAGQADAHAAAIQAAAIgDAHQgDAGgHAFQgIADgLAAgAmcBsIAXAAQAFAAADgBQADgDAAgFQAAgEgDgCQgDgCgFgBIgXAAgAK1BaIAAhLIAaAAIAABLgAOzgOIAOghIgghHIAAALIgfAAIAAA9IgaAAIAAg9IgeAAIAAgWIBwAAIAUAyIAVgyIAaAAIgvBzgAHNgOIAAggIAAhTIAaAAIAAANIADgFQADgDAGgDQAGgEAJAAQAKABAJAFQAJAFAFAKQAFAJAAANQAAAOgFAKQgFAJgJAFQgJAGgKAAQgJgBgGgCQgGgDgDgDIgEgFIAAAsgAHshnQgGAGAAAJQAAAJAGAHQAFAFAJAAQAJAAAFgFQAFgHAAgJQAAgJgFgGQgFgFgJAAQgJAAgFAFgALTgWIAAgYIg7AAIAAAYIgXAAIAAgqIgBACQgCAFgFAEQgFADgIAEQgIACgKAAQgPAAgKgGQgKgFgGgKQgFgKgBgNQABgNAFgJQAGgKAKgFQAKgGANAAQANAAAKAGQAKAFAGAKQAFAJAAAOIAAAFIg/AAQABAHAGAFQAFAFAJABIAIgBIAFgDIADgDIAZAAIAAADIAGAAQAEgEACgJQADgIABgOIAEgaIBGAAIAAA9IAOAAIAAAugAKrhlIgCAOIgDALIgEAIIAhAAIAAgnIgXAAgAJqhiQgCgHgEgDQgFgEgHAAQgHAAgFAEQgFADgBAHIAkAAIAAAAgAEDgyQgKgFgGgJQgGgLAAgNQAAgMAGgKQAGgKAKgFQAKgGANAAQANAAALAGQAKAFAGAKQAGAKAAAMQAAANgGALQgGAJgKAFQgLAGgNAAQgNAAgKgGgAEQhqQgEADgDAFQgCAFAAAFQAAAGACAFQADAFAEACQAFADAFAAQAGAAAFgDQAEgCACgFQADgFAAgGQAAgFgDgFQgCgFgEgDQgFgCgGAAQgFAAgFACgAAegyQgIgFgFgJQgFgKAAgOQAAgNAFgJQAFgKAIgFQAJgFAKgBQAJAAAFAEQAGACADADIAEAFIAAgMIAaAAIAABTIgaAAIAAgMIgEAFQgDADgFADQgGACgJABQgKAAgJgGgAAvhqQgEADgDAFQgCAFAAAFQAAAGACAFQADAFAEACQAEADAGAAQAGAAAEgDQAEgCADgFQACgFAAgGQAAgFgCgFQgDgFgEgDQgEgCgGAAQgGAAgEACgAj+gyQgIgFgFgJQgFgKAAgOQAAgNAFgJQAFgKAIgFQAJgFAKgBQAJAAAFAEQAGACADADIAEAFIAAgMIAaAAIAABTIgaAAIAAgMIgEAFQgDADgFADQgGACgJABQgKAAgJgGgAjthqQgEADgDAFQgCAFAAAFQAAAGACAFQADAFAEACQAEADAGAAQAGAAAEgDQAEgCADgFQACgFAAgGQAAgFgCgFQgDgFgEgDQgEgCgGAAQgGAAgEACgAmpgyQgKgFgFgJQgGgKAAgOQAAgNAGgJQAFgKAKgFQAKgGAMAAQALAAAIADQAHADAFAFQAFAFADAFQACAGABAEIgaAAIgCgDIgFgEQgDgBgFAAQgGAAgEACQgEADgCAFQgCAFAAAFQAAAJAFAHQAFAFAIAAQAFAAADgBQAEgBABgDIADgDIAZAAQgBAEgCAGQgCAFgFAFQgFAFgIADQgIADgLAAQgMAAgKgGgAoigyQgLgFgFgKQgGgKAAgNQAAgNAGgJQAFgKAKgFQAKgGANAAQAOAAAKAGQAKAFAFAKQAGAJAAAOIAAAFIg/AAQABAHAFAFQAFAFAJABIAIgBIAGgDIACgDIAaAAIgDAJQgDAFgFAEQgFADgHAEQgIACgLAAQgOAAgKgGgAn5hiQgCgHgFgDQgFgEgHAAQgHAAgFAEQgEADgCAHIAlAAIAAAAgAvQgyQgLgFgFgKQgGgKAAgNQAAgNAGgJQAFgKAKgFQAKgGANAAQAOAAAKAGQAKAFAFAKQAGAJAAAOIAAAFIg/AAQABAHAFAFQAFAFAJABIAIgBIAGgDIACgDIAaAAIgDAJQgDAFgFAEQgFADgHAEQgIACgLAAQgOAAgKgGgAunhiQgCgHgFgDQgFgEgHAAQgHAAgFAEQgEADgCAHIAlAAIAAAAgAMqguIAAgxIgkAxIgZAAIAAhTIAZAAIAAAxIAkgxIAaAAIAABTgAGrguIgigkIAAAkIgaAAIAAhTIAaAAIAAAiIAhgiIAgAAIgnAoIAqArgADLguIAAg9IggAAIAAA9IgaAAIAAhTIBUAAIAABTgAgRguIgigkIAAAkIgaAAIAAhTIAaAAIAAAiIAhgiIAgAAIgnAoIApArgAipguIAAhTIA0AAQAOAAAHAGQAIAGAAAKQAAAFgCAEIgEAGIgGADIAHADQADADACAEQACAEAAAFQAAALgIAGQgHAHgPAAgAiPhAIAVAAQAFAAADgCQACgCAAgEQAAgEgCgCQgDgBgFgBIgVAAgAiPhgIAUAAQAEAAADgCQACgBAAgFQAAgDgCgCQgDgCgEAAIgUAAgAlLguIAAg9IgeAAIAAgWIBXAAIAAAWIgfAAIAAA9gArGguIAAhTIAaAAIAAA9IAcAAIAAg9IAaAAIAAA9IAcAAIAAg9IAaAAIAABTgAsjguIAAhTIAaAAIAAAZIAbAAQAMAAAIAEQAHADADAHQADAHAAAHQAAAIgDAHQgDAGgHAFQgIAEgLAAgAsJhCIAXAAQAFAAADgCQADgCAAgGQAAgEgDgBQgDgDgFAAIgXAAgAtKguIAAggIgiAAIAAAgIgaAAIAAhTIAaAAIAAAeIAiAAIAAgeIAaAAIAABTgAwLguIAAhWIghBWIgSAAIghhWIAABWIgZAAIAAhyIAoAAIAdBJIAchJIAnAAIAABygAQfhWIAAgRIBaAAIAAARg");
	this.shape.setTransform(0.5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT02, new cjs.Rectangle(-117.3,-23,234.7,46.1), null);


(lib.TXT01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A48CSIAAjmIA0AAIAAAZQABgDAGgGQAGgHAMgFQALgGARgBQAWAAARALQARAKAKATQAKAUABAbQgBAagKATQgKATgRAKQgRALgWAAQgRgBgMgFQgLgFgHgHIgHgJIAABYgA3+gfQgLAMAAATQAAARALAMQAKALASAAQASAAALgLQAKgMAAgRQAAgTgKgMQgLgLgSAAQgSAAgKALgAwhCBIAAgvIh3AAIAAAvIguAAIAAhaIAQAAQAHgLAFgRQAGgPADgaIAGg2ICMAAIAAB7IAcAAIAABagAxygcIgFAdQgCAMgDAJIgHARIBAAAIAAhPIgtAAgAXuBKQgUgKgMgUQgLgUgBgYQABgaALgUQAMgUAUgKQAVgLAaAAQAaAAAVALQAUAKAMAUQAMAUAAAaQAAAYgMAUQgMAUgUAKQgVAMgagBQgaABgVgMgAYJgkQgJAFgFAJQgFAKAAAMQAAAKAFAKQAFAKAJAFQAIAGAMgBQAMABAIgGQAJgFAFgKQAFgKAAgKQAAgMgFgKQgFgJgJgFQgIgGgMAAQgMAAgIAGgA1NBKQgVgLgLgTQgLgUAAgYQAAgbALgTQALgUAUgLQAUgLAaABQAbgBAUALQAUALALAUQALATAAAbIAAAJIh+AAQACAQALAKQALAJARABQAKAAAHgDQAGgCAEgDIAFgFIAzAAQAAAIgGAJQgFAJgKAIQgKAJgPAFQgQAGgVgBQgcABgVgMgAz7gWQgEgNgJgHQgKgIgOAAQgOABgJAHQgKAHgDANIBJAAIAAAAgAk6BKQgRgKgKgTQgKgTAAgaQAAgbAKgUQAKgTARgKQARgLAVAAQASABALAFQALAGAGAGQAGAFABAEIAAgYIA0AAIAACmIgzAAIAAgZQgCADgGAHQgGAHgLAFQgLAFgSABQgVAAgRgLgAkYgkQgJAFgFAJQgEAKAAAMQAAAKAEAKQAFAKAJAFQAIAGAMgBQALABAJgGQAIgFAFgKQAFgKAAgKQAAgMgFgKQgFgJgIgFQgJgGgLAAQgMAAgIAGgAiZBSIAAgvIAEAAQAIAAAFgDQAFgCACgHQACgGABgNIAJhYICOAAIAACmIgzAAIAAh6IgxAAIgEAzQgCAYgGAQQgGAPgNAIQgMAIgWAAgAa/BSIAAh6Ig+AAIAAgsICvAAIAAAsIg+AAIAAB6gAU0BSIAAhiIhIBiIgzAAIAAimIAzAAIAABiIBIhiIAzAAIAACmgARmBSIAAh0IgyB0IgiAAIgyhzIAABzIgwAAIAAimIBIAAIAtBjIAthjIBGAAIAACmgANbBSIAAimIA0AAIAACmgAKYBSIAAimIA0AAIAAAzIA3AAQAYAAAOAIQAPAHAGAMQAHANAAAQQAAAPgHANQgGAOgPAIQgOAIgYABgALMAqIAuAAQALAAAGgEQAGgFAAgKQAAgIgGgFQgGgFgLAAIguAAgAJDBSIAAhAIhDAAIAABAIg0AAIAAimIA0AAIAAA8IBDAAIAAg8IA0AAIAACmgAF3BSIAAg3IgLACQgLABgQAAQgZAAgRgHQgRgHgIgPQgJgPAAgZIAAgtIA0AAIAAAsQgBAOAHAIQAGAGARAAIAYgBIAJgBIAAhGIA0AAIAACmgAC0BSIAAhiIhHBiIgzAAIAAimIAzAAIAABiIBHhiIA0AAIAACmgAmrBSIAAhAIhCAAIAABAIg0AAIAAimIA0AAIAAA8IBCAAIAAg8IA0AAIAACmgArpBSIAAh6Ig+AAIAAgsICwAAIAAAsIg+AAIAAB6gAttBSIAAhiIhHBiIgzAAIAAimIAzAAIAABiIBHhiIA0AAIAACmgA6PBSIhqhmIAABmIg2AAIAAjiIA2AAIAABhIBohhIBHAAIh0BtIB5B1g");
	this.shape.setTransform(-41,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TXT01, new cjs.Rectangle(-230,-26,461.6,53.1), null);


(lib.legal1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.legal1();
	this.instance.parent = this;
	this.instance.setTransform(-298,-161,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AgNANIgBgDQgFgJABgFQACgHAFgDQAEgCAHAAQAGAAAEACIAGAHQAGALgIAHQgCACgIAEIgEABg");
	this.shape.setTransform(156.7,77.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal1_1, new cjs.Rectangle(-300,-169,600.1,338), null);


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
	this.shape.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ALFALOGO_WH, new cjs.Rectangle(-50,-10,99.6,20), null);


(lib.ALFALOGO_RD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AmwBXIAAgYIByAAIAAAYgAhtBAIAAgfQgTgCgLgMQgLgMAAgRQAAgSALgMQALgMATgCIAAgfIAWAAIAAAfQASACALAMQALAMAAASQAAARgLAMQgLAMgSACIAAAfgAhXANQAIgBAFgHQAGgFAAgKQAAgJgGgHQgFgGgIgCgAiBgKQABAKAFAFQAFAHAJABIAAgvQgUAEAAAUgAC2AZQgIgIAAgNQgBgMAJgHQAHgHAOAAIAWAAQAAgOgOAAQgLAAgDAJIgWAAQABgMAJgIQAKgIAQAAQARAAAJAJQAJAJAAAPIAAAbQAAAHAFAAIAAATIgHAAQgNAAgEgJQgIALgQAAQgNAAgIgIgADDAEQAAALAOAAQAHAAAEgEQAFgEAAgHIAAgFIgRAAQgNAAAAAJgAgfAZQgIgIgBgNQAAgMAJgHQAIgHAOAAIAUAAQAAgOgNAAQgMAAgBAJIgXAAQACgMAIgIQAKgIAQAAQAQAAAJAJQAKAJgBAPIAAAbQABAHAFAAIAAATIgHAAQgNAAgFgJQgHALgQAAQgNAAgIgIgAgSAEQAAALAOAAQAPAAAAgPIAAgFIgQAAQgNAAAAAJgAGVAfIgggiIAAAiIgVAAIAAhTIAVAAIAAAhIAeghIAbAAIgkAoIAnArgAE6AfIAAggIgdAAIAAAgIgVAAIAAhTIAVAAIAAAgIAdAAIAAggIAWAAIAABTgABNAfIAAh0IBPAAIAAAWIg4AAIAAAXIAYAAQATAAALAKQALAJAAARQAAAjgpAAgABkAKIAXAAQASAAAAgOQAAgPgSAAIgXAAgAjiAfIAAhTIAWAAIAAAaIAPAAQAPAAAIAHQAJAIAAANQAAAMgHAIQgJAJgQAAgAjMANIANAAQAMAAAAgLQAAgKgMAAIgNAAgAkIAfIAAg/IgUAAIgBAcQgBATgFAHQgGAJgQAAIgDAAIAAgUQAGAAACgDQACgEABgKIACguIA8AAIAABTgAlZAfIgIgYIgtAAIgIAYIgXAAIAjhkQADgIADgEQAGgFAJAAQANAAAGARIAiBkgAmHgMIAgAAIgPgwIgBAAg");
	this.shape.setTransform(0.3,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ALFALOGO_RD, new cjs.Rectangle(-43,-8,86.5,17.4), null);


(lib.alfabank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF3124").s().p("AFyAqQgKgJAAgQIAAgmIAXAAIAAAlQAAAPAOAAQAOAAAAgPIAAglIAXAAIAAAmQAAAQgKAJQgKAKgRAAQgSAAgJgKgAgdApQgKgKAAgRQAAgQAKgKQAJgKAOAAQAPAAAHALIAAgKIAWAAIAABHIgWAAIAAgLQgCAEgEADQgIAFgIAAQgOAAgJgKgAgLABQgFAFAAAIQAAAIAFAFQAEAFAHAAQAHAAAEgFQAFgFAAgIQAAgIgFgFQgEgEgHAAQgHAAgEAEgAhkAuQgFgDgCgDIAAAKIgWAAIAAhlIAWAAIAAApQAJgMAPAAQAOAAAJAKQAKAKAAAQQAAARgKAKQgJAKgOAAQgKAAgHgFgAhmABQgFAFAAAIQAAAIAFAFQAFAFAHAAQAIAAAFgFQAEgFAAgIQAAgIgEgFQgFgEgIAAQgIAAgEAEgAjZApQgJgKAAgRQAAgQAJgKQAJgKAOAAQAKAAAHAFQAEADACADIAAgKIAWAAIAABHIgWAAIAAgLQgHAMgQAAQgOAAgJgKgAjHABQgFAFAAAIQAAAIAFAFQAEAFAIAAQAHAAAFgFQAEgFAAgIQAAgIgEgFQgFgEgHAAQgIAAgEAEgAmnApQgKgKAAgRQAAgQAKgKQAJgKAOAAQAPAAAHALIAAgKIAXAAIAABHIgWAAIAAgLQgHAMgRAAQgNAAgJgKgAmWABQgEAFAAAIQAAAIAEAFQAFAFAHAAQAIAAAEgFQAFgFAAgIQAAgIgFgFQgEgEgIAAQgHAAgFAEgAEfAyIAAhHIAXAAIAAAMQAFgMARAAIAPAAIAAAVIgUAAQgRAAAAAPIAAAjgADyAyIAAgbIAaAAIAAAbgADLAyIgdggIAAAgIgWAAIAAhlIAWAAIAAA5IAdgbIAcAAIgiAgIAkAngABuAyIAAgmQAAgHgEgEQgEgDgHAAQgPAAAAAOIAAAmIgWAAIAAhHIAWAAIAAALQAJgMAOAAQAOAAAIAJQAIAIAAANIAAAqgAkYAyIAAg0IgTAAIAAgTIATAAIAAgJQAAgVAWAAIAgAAIAAARIgXAAQgJAAAAAJIAAAEIAYAAIAAATIgYAAIAAA0gAlPAyIAAhlIAWAAIAABlg");
	this.shape.setTransform(0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.alfabank, new cjs.Rectangle(-43,-5,86.8,10.4), null);


(lib.TXT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.txt0102();
	this.instance.parent = this;
	this.instance.setTransform(174.7,-2.7,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(1).to({regX:0.4,regY:0.2,scaleX:0.86,scaleY:0.86,x:175,y:-2.5,alpha:0.301},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.475},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.594},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.682},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:175.1,alpha:0.749},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.802},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.845},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.879},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.907},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.929},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.947},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.962},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.973},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.983},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:0,regY:0,x:174.7,y:-2.7,alpha:1},0).wait(8));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg0xgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("Eg0ugC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("Eg0ngC0MBEKAAAIAAFpMhEKAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg0ZgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg0EgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgzmgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("Egy/gC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EgyLgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EgxIgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EgvxgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EguDgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Egr2gC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EgpJgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Egl9gC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EgingC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_17 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_19 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_20 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_21 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_22 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_24 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_25 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_26 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_27 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_28 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");
	var mask_graphics_29 = new cjs.Graphics().p("EgiEgC0MBEJAAAIAAFpMhEJAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-337.8,y:2.8}).wait(1).to({graphics:mask_graphics_1,x:-337.5,y:2.8}).wait(1).to({graphics:mask_graphics_2,x:-336.8,y:2.8}).wait(1).to({graphics:mask_graphics_3,x:-335.4,y:2.8}).wait(1).to({graphics:mask_graphics_4,x:-333.3,y:2.8}).wait(1).to({graphics:mask_graphics_5,x:-330.3,y:2.8}).wait(1).to({graphics:mask_graphics_6,x:-326.4,y:2.8}).wait(1).to({graphics:mask_graphics_7,x:-321.2,y:2.8}).wait(1).to({graphics:mask_graphics_8,x:-314.5,y:2.8}).wait(1).to({graphics:mask_graphics_9,x:-305.8,y:2.8}).wait(1).to({graphics:mask_graphics_10,x:-294.8,y:2.8}).wait(1).to({graphics:mask_graphics_11,x:-280.7,y:2.8}).wait(1).to({graphics:mask_graphics_12,x:-263.4,y:2.8}).wait(1).to({graphics:mask_graphics_13,x:-243,y:2.8}).wait(1).to({graphics:mask_graphics_14,x:-221.6,y:2.8}).wait(1).to({graphics:mask_graphics_15,x:-184.9,y:2.8}).wait(1).to({graphics:mask_graphics_16,x:-150.7,y:2.8}).wait(1).to({graphics:mask_graphics_17,x:-122.7,y:2.8}).wait(1).to({graphics:mask_graphics_18,x:-100.1,y:2.8}).wait(1).to({graphics:mask_graphics_19,x:-82,y:2.8}).wait(1).to({graphics:mask_graphics_20,x:-67.4,y:2.8}).wait(1).to({graphics:mask_graphics_21,x:-55.7,y:2.8}).wait(1).to({graphics:mask_graphics_22,x:-46.4,y:2.8}).wait(1).to({graphics:mask_graphics_23,x:-39,y:2.8}).wait(1).to({graphics:mask_graphics_24,x:-33.2,y:2.8}).wait(1).to({graphics:mask_graphics_25,x:-28.9,y:2.8}).wait(1).to({graphics:mask_graphics_26,x:-25.7,y:2.8}).wait(1).to({graphics:mask_graphics_27,x:-23.6,y:2.8}).wait(1).to({graphics:mask_graphics_28,x:-22.4,y:2.8}).wait(1).to({graphics:mask_graphics_29,x:-22,y:2.8}).wait(15));

	// Layer_1
	this.instance_1 = new lib.TXT01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.1,-3.3,0.926,0.926,0,0,0,-0.1,-0.3);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-41,regY:7,x:-58,y:3.5,alpha:0.171},0).wait(1).to({alpha:0.303},0).wait(1).to({alpha:0.408},0).wait(1).to({alpha:0.494},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.624},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.791},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.888},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.935},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:-0.1,regY:-0.3,x:-20.1,y:-3.3},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391,-72,781,124);


(lib.HAND_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DED_HAND();
	this.instance.parent = this;
	this.instance.setTransform(0,2.1,1,1,-15,0,0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,rotation:15,x:0.1},23,cjs.Ease.quartOut).to({regX:0,rotation:-15,x:0},24,cjs.Ease.cubicIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.2,3.9,4.7);


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
p.nominalBounds = new cjs.Rectangle(-6.4,-6.2,12,12.3);


(lib.DED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// DED_BODY
	this.instance = new lib.DED_BODY();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

	// DED_ARM
	this.instance_1 = new lib.HAND("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.5,-9.7,1,1,-18.7,0,0,5.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:19},23,cjs.Ease.quadInOut).to({rotation:-18.7},24,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({rotation:19},23,cjs.Ease.quadInOut).to({rotation:-18.7},24,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-29.5,41.4,59);


(lib.BUT_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgJjCIATAAIAAGFIgTAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AjKjCIGVAAIAAGFImVAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AkrjCIJXAAIAAGFIpXAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AlzjCILnAAIAAGFIrnAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AmtjCINbAAIAAGFItbAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AndjCIO7AAIAAGFIu7AAg");
	var mask_graphics_6 = new cjs.Graphics().p("AoHjCIQPAAIAAGFIwPAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AosjCIRZAAIAAGFIxZAAg");
	var mask_graphics_8 = new cjs.Graphics().p("ApMjCISZAAIAAGFIyZAAg");
	var mask_graphics_9 = new cjs.Graphics().p("ApojCITRAAIAAGFIzRAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AqBjCIUDAAIAAGFI0DAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AqXjCIUvAAIAAGFI0vAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AqpjCIVTAAIAAGFI1TAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Aq6jCIV1AAIAAGFI11AAg");
	var mask_graphics_14 = new cjs.Graphics().p("ArHjCIWPAAIAAGFI2PAAg");
	var mask_graphics_15 = new cjs.Graphics().p("ArSjCIWlAAIAAGFI2lAAg");
	var mask_graphics_16 = new cjs.Graphics().p("ArbjCIW3AAIAAGFI23AAg");
	var mask_graphics_17 = new cjs.Graphics().p("ArhjCIXDAAIAAGFI3DAAg");
	var mask_graphics_18 = new cjs.Graphics().p("ArljCIXLAAIAAGFI3LAAg");
	var mask_graphics_19 = new cjs.Graphics().p("ArmjCIXNAAIAAGFI3NAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:0,y:0}).wait(1).to({graphics:mask_graphics_3,x:0,y:0}).wait(1).to({graphics:mask_graphics_4,x:0,y:0}).wait(1).to({graphics:mask_graphics_5,x:0,y:0}).wait(1).to({graphics:mask_graphics_6,x:0,y:0}).wait(1).to({graphics:mask_graphics_7,x:0,y:0}).wait(1).to({graphics:mask_graphics_8,x:0,y:0}).wait(1).to({graphics:mask_graphics_9,x:0,y:0}).wait(1).to({graphics:mask_graphics_10,x:0,y:0}).wait(1).to({graphics:mask_graphics_11,x:0,y:0}).wait(1).to({graphics:mask_graphics_12,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_13,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_14,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_15,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_16,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_17,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_18,x:-0.1,y:0}).wait(1).to({graphics:mask_graphics_19,x:0,y:0}).wait(11));

	// Оставить заявку
	this.instance = new lib.butt_txt();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1,0.4,0.4,0,0,0,-0.1,-0.1);
	this.instance.alpha = 0.602;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({regX:0.4,regY:2.9,scaleX:0.51,scaleY:0.51,x:-0.8,y:0.2,alpha:0.676},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-0.7,y:0.1,alpha:0.745},0).wait(1).to({scaleX:0.71,scaleY:0.71,alpha:0.804},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:0,alpha:0.852},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-0.6,alpha:0.89},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.919},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.941},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.959},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.972},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:-0.1,alpha:0.982},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:0,alpha:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,x:-1.1,y:-3.1,alpha:1},0).wait(9));

	// Layer_4
	this.instance_1 = new lib.butt_base();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.602;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.899},0).wait(1).to({alpha:0.916},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.945},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-14.6,2,29.3);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_405 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(405).call(this.frame_405).wait(334));

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
	var mask_graphics_64 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_65 = new cjs.Graphics().p("Eg43gHMMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_66 = new cjs.Graphics().p("Eg43gHWMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_67 = new cjs.Graphics().p("Eg43gHeMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_68 = new cjs.Graphics().p("Eg43gHlMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_69 = new cjs.Graphics().p("Eg43gHqMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_70 = new cjs.Graphics().p("Eg43gHtMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_71 = new cjs.Graphics().p("Eg43gHwMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_72 = new cjs.Graphics().p("Eg43gHyMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_73 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_74 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_368 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_412 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_413 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_414 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_415 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_416 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_417 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_418 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_419 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_420 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_421 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_422 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_423 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_424 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_425 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_426 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_427 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_428 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_429 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_430 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_431 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_432 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_433 = new cjs.Graphics().p("Eg43gHMMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_434 = new cjs.Graphics().p("Eg43gHWMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_435 = new cjs.Graphics().p("Eg43gHeMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_436 = new cjs.Graphics().p("Eg43gHlMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_437 = new cjs.Graphics().p("Eg43gHqMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_438 = new cjs.Graphics().p("Eg43gHtMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_439 = new cjs.Graphics().p("Eg43gHwMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_440 = new cjs.Graphics().p("Eg43gHyMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_441 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");
	var mask_graphics_442 = new cjs.Graphics().p("Eg43gHzMBxvAAAIAAODMhxvAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:364,y:45}).wait(44).to({graphics:mask_graphics_44,x:364,y:45}).wait(1).to({graphics:mask_graphics_45,x:364,y:44.9}).wait(1).to({graphics:mask_graphics_46,x:364,y:44.7}).wait(1).to({graphics:mask_graphics_47,x:364,y:44.3}).wait(1).to({graphics:mask_graphics_48,x:364,y:43.6}).wait(1).to({graphics:mask_graphics_49,x:364,y:42.7}).wait(1).to({graphics:mask_graphics_50,x:364,y:41.5}).wait(1).to({graphics:mask_graphics_51,x:364,y:39.9}).wait(1).to({graphics:mask_graphics_52,x:364,y:37.9}).wait(1).to({graphics:mask_graphics_53,x:364,y:35.2}).wait(1).to({graphics:mask_graphics_54,x:364,y:31.7}).wait(1).to({graphics:mask_graphics_55,x:364,y:27.1}).wait(1).to({graphics:mask_graphics_56,x:364,y:20.8}).wait(1).to({graphics:mask_graphics_57,x:364,y:11.9}).wait(1).to({graphics:mask_graphics_58,x:364,y:0}).wait(1).to({graphics:mask_graphics_59,x:364,y:-13.1}).wait(1).to({graphics:mask_graphics_60,x:364,y:-23.7}).wait(1).to({graphics:mask_graphics_61,x:364,y:-31.4}).wait(1).to({graphics:mask_graphics_62,x:364,y:-37}).wait(1).to({graphics:mask_graphics_63,x:364,y:-41.3}).wait(1).to({graphics:mask_graphics_64,x:364,y:-44.6}).wait(1).to({graphics:mask_graphics_65,x:364,y:-46.1}).wait(1).to({graphics:mask_graphics_66,x:364,y:-47.1}).wait(1).to({graphics:mask_graphics_67,x:364,y:-47.9}).wait(1).to({graphics:mask_graphics_68,x:364,y:-48.6}).wait(1).to({graphics:mask_graphics_69,x:364,y:-49.1}).wait(1).to({graphics:mask_graphics_70,x:364,y:-49.4}).wait(1).to({graphics:mask_graphics_71,x:364,y:-49.7}).wait(1).to({graphics:mask_graphics_72,x:364,y:-49.9}).wait(1).to({graphics:mask_graphics_73,x:364,y:-50}).wait(1).to({graphics:mask_graphics_74,x:364,y:-50}).wait(1).to({graphics:null,x:0,y:0}).wait(293).to({graphics:mask_graphics_368,x:364,y:45}).wait(44).to({graphics:mask_graphics_412,x:364,y:45}).wait(1).to({graphics:mask_graphics_413,x:364,y:44.9}).wait(1).to({graphics:mask_graphics_414,x:364,y:44.7}).wait(1).to({graphics:mask_graphics_415,x:364,y:44.3}).wait(1).to({graphics:mask_graphics_416,x:364,y:43.6}).wait(1).to({graphics:mask_graphics_417,x:364,y:42.7}).wait(1).to({graphics:mask_graphics_418,x:364,y:41.5}).wait(1).to({graphics:mask_graphics_419,x:364,y:39.9}).wait(1).to({graphics:mask_graphics_420,x:364,y:37.9}).wait(1).to({graphics:mask_graphics_421,x:364,y:35.2}).wait(1).to({graphics:mask_graphics_422,x:364,y:31.7}).wait(1).to({graphics:mask_graphics_423,x:364,y:27.1}).wait(1).to({graphics:mask_graphics_424,x:364,y:20.8}).wait(1).to({graphics:mask_graphics_425,x:364,y:11.9}).wait(1).to({graphics:mask_graphics_426,x:364,y:0}).wait(1).to({graphics:mask_graphics_427,x:364,y:-13.1}).wait(1).to({graphics:mask_graphics_428,x:364,y:-23.7}).wait(1).to({graphics:mask_graphics_429,x:364,y:-31.4}).wait(1).to({graphics:mask_graphics_430,x:364,y:-37}).wait(1).to({graphics:mask_graphics_431,x:364,y:-41.3}).wait(1).to({graphics:mask_graphics_432,x:364,y:-44.6}).wait(1).to({graphics:mask_graphics_433,x:364,y:-46.1}).wait(1).to({graphics:mask_graphics_434,x:364,y:-47.1}).wait(1).to({graphics:mask_graphics_435,x:364,y:-47.9}).wait(1).to({graphics:mask_graphics_436,x:364,y:-48.6}).wait(1).to({graphics:mask_graphics_437,x:364,y:-49.1}).wait(1).to({graphics:mask_graphics_438,x:364,y:-49.4}).wait(1).to({graphics:mask_graphics_439,x:364,y:-49.7}).wait(1).to({graphics:mask_graphics_440,x:364,y:-49.9}).wait(1).to({graphics:mask_graphics_441,x:364,y:-50}).wait(1).to({graphics:mask_graphics_442,x:364,y:-50}).wait(1).to({graphics:null,x:0,y:0}).wait(296));

	// TXT01
	this.instance = new lib.TXT1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(365,48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},75).wait(293).to({_off:false},0).to({_off:true},75).wait(296));

	// LOGO_WH
	this.instance_1 = new lib.ALFALOGO_WH();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65,23);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},75).wait(293).to({_off:false},0).to({_off:true},75).wait(296));

	// BG_RED
	this.instance_2 = new lib.BG_RED();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364,45,1,1,0,0,0,364,45);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},75).wait(293).to({_off:false},0).to({_off:true},75).wait(296));

	// MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_1_graphics_231 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_1_graphics_232 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_233 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_234 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_235 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
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
	var mask_1_graphics_252 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_253 = new cjs.Graphics().p("Eg43gHHMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_254 = new cjs.Graphics().p("Eg43gHRMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_255 = new cjs.Graphics().p("Eg43gHZMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_256 = new cjs.Graphics().p("Eg43gHfMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_257 = new cjs.Graphics().p("Eg43gHkMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_258 = new cjs.Graphics().p("Eg43gHnMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_259 = new cjs.Graphics().p("Eg43gHqMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_260 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_261 = new cjs.Graphics().p("Eg43gHsMBxvAAAIAAOEMhxvAAAg");
	var mask_1_graphics_412 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_1_graphics_599 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_1_graphics_600 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_601 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_602 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_603 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_604 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_605 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_606 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_607 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_608 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_609 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_610 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_611 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_612 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_613 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_614 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_615 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_616 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_617 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_618 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_619 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_620 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_621 = new cjs.Graphics().p("Eg43gHHMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_622 = new cjs.Graphics().p("Eg43gHRMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_623 = new cjs.Graphics().p("Eg43gHZMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_624 = new cjs.Graphics().p("Eg43gHfMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_625 = new cjs.Graphics().p("Eg43gHkMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_626 = new cjs.Graphics().p("Eg43gHnMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_627 = new cjs.Graphics().p("Eg43gHqMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_628 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_1_graphics_629 = new cjs.Graphics().p("Eg43gHsMBxvAAAIAAOEMhxvAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:364,y:45.3}).wait(187).to({graphics:mask_1_graphics_231,x:364,y:45.3}).wait(1).to({graphics:mask_1_graphics_232,x:364,y:45.2}).wait(1).to({graphics:mask_1_graphics_233,x:364,y:45}).wait(1).to({graphics:mask_1_graphics_234,x:364,y:44.4}).wait(1).to({graphics:mask_1_graphics_235,x:364,y:43.5}).wait(1).to({graphics:mask_1_graphics_236,x:364,y:42.3}).wait(1).to({graphics:mask_1_graphics_237,x:364,y:40.5}).wait(1).to({graphics:mask_1_graphics_238,x:364,y:38.3}).wait(1).to({graphics:mask_1_graphics_239,x:364,y:35.5}).wait(1).to({graphics:mask_1_graphics_240,x:364,y:31.8}).wait(1).to({graphics:mask_1_graphics_241,x:364,y:27.3}).wait(1).to({graphics:mask_1_graphics_242,x:364,y:21.5}).wait(1).to({graphics:mask_1_graphics_243,x:364,y:14.5}).wait(1).to({graphics:mask_1_graphics_244,x:364,y:6.2}).wait(1).to({graphics:mask_1_graphics_245,x:364,y:-2.9}).wait(1).to({graphics:mask_1_graphics_246,x:364,y:-11.8}).wait(1).to({graphics:mask_1_graphics_247,x:364,y:-19.9}).wait(1).to({graphics:mask_1_graphics_248,x:364,y:-26.7}).wait(1).to({graphics:mask_1_graphics_249,x:364,y:-32.3}).wait(1).to({graphics:mask_1_graphics_250,x:364,y:-37}).wait(1).to({graphics:mask_1_graphics_251,x:364,y:-40.7}).wait(1).to({graphics:mask_1_graphics_252,x:364,y:-43.8}).wait(1).to({graphics:mask_1_graphics_253,x:364,y:-45.6}).wait(1).to({graphics:mask_1_graphics_254,x:364,y:-46.6}).wait(1).to({graphics:mask_1_graphics_255,x:364,y:-47.4}).wait(1).to({graphics:mask_1_graphics_256,x:364,y:-48}).wait(1).to({graphics:mask_1_graphics_257,x:364,y:-48.5}).wait(1).to({graphics:mask_1_graphics_258,x:364,y:-48.8}).wait(1).to({graphics:mask_1_graphics_259,x:364,y:-49.1}).wait(1).to({graphics:mask_1_graphics_260,x:364,y:-49.2}).wait(1).to({graphics:mask_1_graphics_261,x:364,y:-49.3}).wait(1).to({graphics:null,x:0,y:0}).wait(150).to({graphics:mask_1_graphics_412,x:364,y:45.3}).wait(187).to({graphics:mask_1_graphics_599,x:364,y:45.3}).wait(1).to({graphics:mask_1_graphics_600,x:364,y:45.2}).wait(1).to({graphics:mask_1_graphics_601,x:364,y:45}).wait(1).to({graphics:mask_1_graphics_602,x:364,y:44.4}).wait(1).to({graphics:mask_1_graphics_603,x:364,y:43.5}).wait(1).to({graphics:mask_1_graphics_604,x:364,y:42.3}).wait(1).to({graphics:mask_1_graphics_605,x:364,y:40.5}).wait(1).to({graphics:mask_1_graphics_606,x:364,y:38.3}).wait(1).to({graphics:mask_1_graphics_607,x:364,y:35.5}).wait(1).to({graphics:mask_1_graphics_608,x:364,y:31.8}).wait(1).to({graphics:mask_1_graphics_609,x:364,y:27.3}).wait(1).to({graphics:mask_1_graphics_610,x:364,y:21.5}).wait(1).to({graphics:mask_1_graphics_611,x:364,y:14.5}).wait(1).to({graphics:mask_1_graphics_612,x:364,y:6.2}).wait(1).to({graphics:mask_1_graphics_613,x:364,y:-2.9}).wait(1).to({graphics:mask_1_graphics_614,x:364,y:-11.8}).wait(1).to({graphics:mask_1_graphics_615,x:364,y:-19.9}).wait(1).to({graphics:mask_1_graphics_616,x:364,y:-26.7}).wait(1).to({graphics:mask_1_graphics_617,x:364,y:-32.3}).wait(1).to({graphics:mask_1_graphics_618,x:364,y:-37}).wait(1).to({graphics:mask_1_graphics_619,x:364,y:-40.7}).wait(1).to({graphics:mask_1_graphics_620,x:364,y:-43.8}).wait(1).to({graphics:mask_1_graphics_621,x:364,y:-45.6}).wait(1).to({graphics:mask_1_graphics_622,x:364,y:-46.6}).wait(1).to({graphics:mask_1_graphics_623,x:364,y:-47.4}).wait(1).to({graphics:mask_1_graphics_624,x:364,y:-48}).wait(1).to({graphics:mask_1_graphics_625,x:364,y:-48.5}).wait(1).to({graphics:mask_1_graphics_626,x:364,y:-48.8}).wait(1).to({graphics:mask_1_graphics_627,x:364,y:-49.1}).wait(1).to({graphics:mask_1_graphics_628,x:364,y:-49.2}).wait(1).to({graphics:mask_1_graphics_629,x:364,y:-49.3}).wait(1).to({graphics:null,x:0,y:0}).wait(109));

	// LOGO_RED
	this.instance_3 = new lib.ALFALOGO_RD();
	this.instance_3.parent = this;
	this.instance_3.setTransform(58,21);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({_off:true},218).wait(150).to({_off:false},0).to({_off:true},218).wait(109));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(174).to({_off:false},0).to({alpha:1},19).to({_off:true},69).wait(280).to({_off:false,alpha:0},0).to({alpha:1},19).to({_off:true},69).wait(109));

	// BUTT
	this.instance_5 = new lib.BUT_mov("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(462.8,44.7);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).to({_off:true},88).wait(280).to({_off:false},0).to({_off:true},88).wait(109));

	// TXT02
	this.instance_6 = new lib.TXT02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(463,42,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},0).wait(1).to({regX:0.5,regY:3,scaleX:0.38,scaleY:0.38,x:463.1,y:43,alpha:0.221},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:43.3,alpha:0.369},0).wait(1).to({scaleX:0.59,scaleY:0.59,y:43.6,alpha:0.481},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:43.7,alpha:0.57},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:43.9,alpha:0.644},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:463.2,y:44.1,alpha:0.706},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:463.1,alpha:0.758},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:44.3,alpha:0.803},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:463.2,alpha:0.841},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:44.4,alpha:0.873},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:44.5,alpha:0.901},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.924},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:44.6,alpha:0.944},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:44.7,alpha:0.973},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:463,y:42,alpha:1},0).wait(35).to({regX:0.5,regY:3,scaleX:1,scaleY:1,x:463.5,y:45,alpha:0.999},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:463.4,y:44.9,alpha:0.991},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.984},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.974},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:44.8,alpha:0.961},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.945},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:44.7,alpha:0.926},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.903},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:44.6,alpha:0.875},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:44.5,alpha:0.843},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:463.3,alpha:0.806},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:44.4,alpha:0.763},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:44.2,alpha:0.712},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:44.1,alpha:0.654},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:43.9,alpha:0.586},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:463.2,y:43.7,alpha:0.506},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:43.5,alpha:0.412},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:463.1,y:43.2,alpha:0.3},0).wait(1).to({scaleX:0.33,scaleY:0.33,y:42.9,alpha:0.165},0).wait(1).to({regX:0.3,regY:0.3,scaleX:0.2,scaleY:0.2,x:463,y:42,alpha:0},0).to({_off:true},88).wait(205).to({_off:false},0).wait(1).to({regX:0.5,regY:3,scaleX:0.38,scaleY:0.38,x:463.1,y:43,alpha:0.221},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:43.3,alpha:0.369},0).wait(1).to({scaleX:0.59,scaleY:0.59,y:43.6,alpha:0.481},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:43.7,alpha:0.57},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:43.9,alpha:0.644},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:463.2,y:44.1,alpha:0.706},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:463.1,alpha:0.758},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:44.3,alpha:0.803},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:463.2,alpha:0.841},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:44.4,alpha:0.873},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:44.5,alpha:0.901},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.924},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:44.6,alpha:0.944},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:44.7,alpha:0.973},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.983},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:463,y:42,alpha:1},0).wait(35).to({regX:0.5,regY:3,scaleX:1,scaleY:1,x:463.5,y:45,alpha:0.999},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.996},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:463.4,y:44.9,alpha:0.991},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.984},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.974},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:44.8,alpha:0.961},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.945},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:44.7,alpha:0.926},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.903},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:44.6,alpha:0.875},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:44.5,alpha:0.843},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:463.3,alpha:0.806},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:44.4,alpha:0.763},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:44.2,alpha:0.712},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:44.1,alpha:0.654},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:43.9,alpha:0.586},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:463.2,y:43.7,alpha:0.506},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:43.5,alpha:0.412},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:463.1,y:43.2,alpha:0.3},0).wait(1).to({scaleX:0.33,scaleY:0.33,y:42.9,alpha:0.165},0).wait(1).to({regX:0.3,regY:0.3,scaleX:0.2,scaleY:0.2,x:463,y:42,alpha:0},0).to({_off:true},88).wait(109));

	// DED
	this.instance_7 = new lib.DED("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(437,60,2,2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).wait(1).to({regX:-1.4,x:434.2,startPosition:1},0).wait(1).to({scaleX:2,scaleY:2,x:434.1,startPosition:2},0).wait(1).to({scaleX:2,scaleY:2,x:434,startPosition:3},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:433.9,startPosition:4},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:433.7,startPosition:5},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:433.6,y:59.9,startPosition:6},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:433.3,startPosition:7},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:432.9,startPosition:8},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:432.5,startPosition:9},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:432.1,y:59.8,startPosition:10},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:431.5,startPosition:11},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:430.9,y:59.7,startPosition:12},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:430.1,startPosition:13},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:429.2,y:59.6,startPosition:14},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:428.2,y:59.5,startPosition:15},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:426.9,y:59.4,startPosition:16},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:425.5,y:59.3,startPosition:17},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:423.9,y:59.1,startPosition:18},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:422.1,y:59,startPosition:19},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:420.1,y:58.8,startPosition:20},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:417.9,y:58.6,startPosition:21},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:415.7,y:58.4,startPosition:22},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:413.5,y:58.3,startPosition:23},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:411.5,y:58.1,startPosition:24},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:409.7,y:57.9,startPosition:25},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:408.1,y:57.8,startPosition:26},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:406.7,y:57.7,startPosition:27},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:405.5,y:57.6,startPosition:28},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:404.4,y:57.5,startPosition:29},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:403.4,y:57.4,startPosition:30},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:402.7,y:57.3,startPosition:31},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:401.9,startPosition:32},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:401.3,y:57.2,startPosition:33},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:400.8,startPosition:34},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:400.4,y:57.1,startPosition:35},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:400,startPosition:36},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:399.6,startPosition:37},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:399.4,startPosition:38},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:399.2,y:57,startPosition:39},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:399,startPosition:40},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:398.8,startPosition:41},0).wait(1).to({scaleX:1,scaleY:1,x:398.7,startPosition:42},0).wait(1).to({scaleX:1,scaleY:1,startPosition:43},0).wait(1).to({scaleX:1,scaleY:1,x:398.6,startPosition:44},0).wait(1).to({regX:0,x:400,startPosition:0},0).wait(1).to({regX:-1.4,x:398.5,startPosition:1},0).wait(1).to({x:398.1,startPosition:2},0).wait(1).to({x:397.4,startPosition:3},0).wait(1).to({x:396.3,startPosition:4},0).wait(1).to({x:394.8,startPosition:5},0).wait(1).to({x:392.9,startPosition:6},0).wait(1).to({x:390.3,startPosition:7},0).wait(1).to({x:387,startPosition:8},0).wait(1).to({x:382.9,y:57.1,startPosition:9},0).wait(1).to({x:377.7,startPosition:10},0).wait(1).to({x:371.1,startPosition:11},0).wait(1).to({x:363,startPosition:12},0).wait(1).to({x:353.3,y:57.2,startPosition:13},0).wait(1).to({x:342.3,startPosition:14},0).wait(1).to({x:330.9,y:57.3,startPosition:15},0).wait(1).to({x:320.3,startPosition:16},0).wait(1).to({x:311.1,y:57.4,startPosition:17},0).wait(1).to({x:303.5,startPosition:18},0).wait(1).to({x:297.4,startPosition:19},0).wait(1).to({x:292.4,startPosition:20},0).wait(1).to({x:288.3,startPosition:21},0).wait(1).to({x:285.1,y:57.5,startPosition:22},0).wait(1).to({x:282.4,startPosition:23},0).wait(1).to({x:280.4,startPosition:24},0).wait(1).to({x:278.8,startPosition:25},0).wait(1).to({x:277.5,startPosition:26},0).wait(1).to({x:276.6,startPosition:27},0).wait(1).to({x:276,startPosition:28},0).wait(1).to({x:275.7,startPosition:29},0).wait(1).to({regX:0,x:277,startPosition:30},0).to({_off:true},143).wait(150).to({_off:false,scaleX:2,scaleY:2,x:437,y:60,startPosition:0},0).wait(1).to({regX:-1.4,x:434.2,startPosition:1},0).wait(1).to({scaleX:2,scaleY:2,x:434.1,startPosition:2},0).wait(1).to({scaleX:2,scaleY:2,x:434,startPosition:3},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:433.9,startPosition:4},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:433.7,startPosition:5},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:433.6,y:59.9,startPosition:6},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:433.3,startPosition:7},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:432.9,startPosition:8},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:432.5,startPosition:9},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:432.1,y:59.8,startPosition:10},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:431.5,startPosition:11},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:430.9,y:59.7,startPosition:12},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:430.1,startPosition:13},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:429.2,y:59.6,startPosition:14},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:428.2,y:59.5,startPosition:15},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:426.9,y:59.4,startPosition:16},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:425.5,y:59.3,startPosition:17},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:423.9,y:59.1,startPosition:18},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:422.1,y:59,startPosition:19},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:420.1,y:58.8,startPosition:20},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:417.9,y:58.6,startPosition:21},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:415.7,y:58.4,startPosition:22},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:413.5,y:58.3,startPosition:23},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:411.5,y:58.1,startPosition:24},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:409.7,y:57.9,startPosition:25},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:408.1,y:57.8,startPosition:26},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:406.7,y:57.7,startPosition:27},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:405.5,y:57.6,startPosition:28},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:404.4,y:57.5,startPosition:29},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:403.4,y:57.4,startPosition:30},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:402.7,y:57.3,startPosition:31},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:401.9,startPosition:32},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:401.3,y:57.2,startPosition:33},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:400.8,startPosition:34},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:400.4,y:57.1,startPosition:35},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:400,startPosition:36},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:399.6,startPosition:37},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:399.4,startPosition:38},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:399.2,y:57,startPosition:39},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:399,startPosition:40},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:398.8,startPosition:41},0).wait(1).to({scaleX:1,scaleY:1,x:398.7,startPosition:42},0).wait(1).to({scaleX:1,scaleY:1,startPosition:43},0).wait(1).to({scaleX:1,scaleY:1,x:398.6,startPosition:44},0).wait(1).to({regX:0,x:400,startPosition:0},0).wait(1).to({regX:-1.4,x:398.5,startPosition:1},0).wait(1).to({x:398.1,startPosition:2},0).wait(1).to({x:397.4,startPosition:3},0).wait(1).to({x:396.3,startPosition:4},0).wait(1).to({x:394.8,startPosition:5},0).wait(1).to({x:392.9,startPosition:6},0).wait(1).to({x:390.3,startPosition:7},0).wait(1).to({x:387,startPosition:8},0).wait(1).to({x:382.9,y:57.1,startPosition:9},0).wait(1).to({x:377.7,startPosition:10},0).wait(1).to({x:371.1,startPosition:11},0).wait(1).to({x:363,startPosition:12},0).wait(1).to({x:353.3,y:57.2,startPosition:13},0).wait(1).to({x:342.3,startPosition:14},0).wait(1).to({x:330.9,y:57.3,startPosition:15},0).wait(1).to({x:320.3,startPosition:16},0).wait(1).to({x:311.1,y:57.4,startPosition:17},0).wait(1).to({x:303.5,startPosition:18},0).wait(1).to({x:297.4,startPosition:19},0).wait(1).to({x:292.4,startPosition:20},0).wait(1).to({x:288.3,startPosition:21},0).wait(1).to({x:285.1,y:57.5,startPosition:22},0).wait(1).to({x:282.4,startPosition:23},0).wait(1).to({x:280.4,startPosition:24},0).wait(1).to({x:278.8,startPosition:25},0).wait(1).to({x:277.5,startPosition:26},0).wait(1).to({x:276.6,startPosition:27},0).wait(1).to({x:276,startPosition:28},0).wait(1).to({x:275.7,startPosition:29},0).wait(1).to({regX:0,x:277,startPosition:30},0).to({_off:true},143).wait(109));

	// BAG
	this.instance_8 = new lib.BAG();
	this.instance_8.parent = this;
	this.instance_8.setTransform(317,36,2,2);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).wait(1).to({regX:-0.5,regY:-0.5,x:316,y:35},0).wait(1).to({scaleX:2,scaleY:2},0).wait(1).to({scaleX:2,scaleY:2,x:316.1},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:316.2,y:35.1},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:316.3},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:316.4,y:35.2},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:316.6,y:35.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:316.8,y:35.4},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:317.1,y:35.5},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:317.4,y:35.6},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:317.8,y:35.8},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:318.2,y:36},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:318.7,y:36.2},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:319.3,y:36.5},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:320,y:36.8},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:320.8,y:37.1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:321.7,y:37.5},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:322.8,y:38},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:324,y:38.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:325.3,y:39.2},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:326.8,y:39.8},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:328.2,y:40.5},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:329.7,y:41.1},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:330.9,y:41.7},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:332.2,y:42.2},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:333.2,y:42.7},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:334.2,y:43.1},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:335,y:43.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:335.7,y:43.8},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:336.3,y:44.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:336.8,y:44.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:337.3,y:44.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:337.7,y:44.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:338,y:44.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:338.4,y:45},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:338.6,y:45.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:338.8,y:45.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:339,y:45.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:339.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:339.3,y:45.4},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1,x:339.4,y:45.5},0).wait(1).to({scaleX:1,scaleY:1,x:339.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:0,regY:0,x:340,y:46},0).wait(1).to({regX:-0.5,regY:-0.5,x:339.4,y:45.5},0).wait(1).to({x:339},0).wait(1).to({x:338.3},0).wait(1).to({x:337.2},0).wait(1).to({x:335.7},0).wait(1).to({x:333.8},0).wait(1).to({x:331.2},0).wait(1).to({x:327.9},0).wait(1).to({x:323.8},0).wait(1).to({x:318.6},0).wait(1).to({x:312},0).wait(1).to({x:303.9},0).wait(1).to({x:294.2},0).wait(1).to({x:283.2},0).wait(1).to({x:271.8},0).wait(1).to({x:261.2},0).wait(1).to({x:252},0).wait(1).to({x:244.4},0).wait(1).to({x:238.3},0).wait(1).to({x:233.3},0).wait(1).to({x:229.2},0).wait(1).to({x:226},0).wait(1).to({x:223.3},0).wait(1).to({x:221.3},0).wait(1).to({x:219.7},0).wait(1).to({x:218.4},0).wait(1).to({x:217.5},0).wait(1).to({x:216.9},0).wait(1).to({x:216.6},0).wait(1).to({regX:0,regY:0,x:217,y:46},0).to({_off:true},143).wait(150).to({_off:false,scaleX:2,scaleY:2,x:317,y:36},0).wait(1).to({regX:-0.5,regY:-0.5,x:316,y:35},0).wait(1).to({scaleX:2,scaleY:2},0).wait(1).to({scaleX:2,scaleY:2,x:316.1},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:316.2,y:35.1},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:316.3},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:316.4,y:35.2},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:316.6,y:35.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:316.8,y:35.4},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:317.1,y:35.5},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:317.4,y:35.6},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:317.8,y:35.8},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:318.2,y:36},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:318.7,y:36.2},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:319.3,y:36.5},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:320,y:36.8},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:320.8,y:37.1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:321.7,y:37.5},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:322.8,y:38},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:324,y:38.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:325.3,y:39.2},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:326.8,y:39.8},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:328.2,y:40.5},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:329.7,y:41.1},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:330.9,y:41.7},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:332.2,y:42.2},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:333.2,y:42.7},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:334.2,y:43.1},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:335,y:43.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:335.7,y:43.8},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:336.3,y:44.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:336.8,y:44.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:337.3,y:44.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:337.7,y:44.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:338,y:44.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:338.4,y:45},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:338.6,y:45.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:338.8,y:45.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:339,y:45.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:339.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:339.3,y:45.4},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1,x:339.4,y:45.5},0).wait(1).to({scaleX:1,scaleY:1,x:339.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:0,regY:0,x:340,y:46},0).wait(1).to({regX:-0.5,regY:-0.5,x:339.4,y:45.5},0).wait(1).to({x:339},0).wait(1).to({x:338.3},0).wait(1).to({x:337.2},0).wait(1).to({x:335.7},0).wait(1).to({x:333.8},0).wait(1).to({x:331.2},0).wait(1).to({x:327.9},0).wait(1).to({x:323.8},0).wait(1).to({x:318.6},0).wait(1).to({x:312},0).wait(1).to({x:303.9},0).wait(1).to({x:294.2},0).wait(1).to({x:283.2},0).wait(1).to({x:271.8},0).wait(1).to({x:261.2},0).wait(1).to({x:252},0).wait(1).to({x:244.4},0).wait(1).to({x:238.3},0).wait(1).to({x:233.3},0).wait(1).to({x:229.2},0).wait(1).to({x:226},0).wait(1).to({x:223.3},0).wait(1).to({x:221.3},0).wait(1).to({x:219.7},0).wait(1).to({x:218.4},0).wait(1).to({x:217.5},0).wait(1).to({x:216.9},0).wait(1).to({x:216.6},0).wait(1).to({regX:0,regY:0,x:217,y:46},0).to({_off:true},143).wait(109));

	// BG_SNOW
	this.instance_9 = new lib.BG();
	this.instance_9.parent = this;
	this.instance_9.setTransform(603,36,2,2,0,0,0,476.5,45.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).wait(1).to({regX:468.5,x:587,y:36.1},0).wait(1).to({scaleX:2,scaleY:2,x:586.8},0).wait(1).to({scaleX:2,scaleY:2,x:586.6},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:586.2},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:585.6,y:36.2},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:585},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:584.1,y:36.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:583,y:36.4},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:581.8,y:36.5},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:580.3,y:36.6},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:578.5,y:36.8},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:576.5,y:36.9},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:574,y:37.2},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:571.2,y:37.4},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:567.9,y:37.7},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:564.1,y:38},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:559.6,y:38.4},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:554.5,y:38.8},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:548.7,y:39.3},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:542.4,y:39.8},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:535.5,y:40.4},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:528.5,y:41},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:521.8,y:41.6},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:515.4,y:42.1},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:509.6,y:42.6},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:504.5,y:43},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:500.1,y:43.4},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:496.2,y:43.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:492.8,y:44},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:489.8,y:44.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:487.3,y:44.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:485.1,y:44.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:483.2,y:44.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:481.6,y:45},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:480.1,y:45.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:478.9,y:45.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:477.9,y:45.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:477},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:476.3,y:45.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:475.7,y:45.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:475.2},0).wait(1).to({scaleX:1,scaleY:1,x:474.9},0).wait(1).to({scaleX:1,scaleY:1,x:474.7},0).wait(1).to({scaleX:1,scaleY:1,x:474.5},0).wait(1).to({regX:476.5,x:482.5},0).wait(1).to({regX:468.5,x:474.4},0).wait(1).to({x:474},0).wait(1).to({x:473.3},0).wait(1).to({x:472.2},0).wait(1).to({x:470.7},0).wait(1).to({x:468.8},0).wait(1).to({x:466.2},0).wait(1).to({x:463},0).wait(1).to({x:458.8},0).wait(1).to({x:453.6},0).wait(1).to({x:447.1},0).wait(1).to({x:439},0).wait(1).to({x:429.3},0).wait(1).to({x:418.2},0).wait(1).to({x:406.8},0).wait(1).to({x:396.2},0).wait(1).to({x:387.1},0).wait(1).to({x:379.5},0).wait(1).to({x:373.3},0).wait(1).to({x:368.3},0).wait(1).to({x:364.3},0).wait(1).to({x:361},0).wait(1).to({x:358.4},0).wait(1).to({x:356.3},0).wait(1).to({x:354.7},0).wait(1).to({x:353.5},0).wait(1).to({x:352.6},0).wait(1).to({x:352},0).wait(1).to({x:351.7},0).wait(1).to({regX:476.5,x:359.5},0).to({_off:true},143).wait(150).to({_off:false,scaleX:2,scaleY:2,x:603,y:36},0).wait(1).to({regX:468.5,x:587,y:36.1},0).wait(1).to({scaleX:2,scaleY:2,x:586.8},0).wait(1).to({scaleX:2,scaleY:2,x:586.6},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:586.2},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:585.6,y:36.2},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:585},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:584.1,y:36.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:583,y:36.4},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:581.8,y:36.5},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:580.3,y:36.6},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:578.5,y:36.8},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:576.5,y:36.9},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:574,y:37.2},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:571.2,y:37.4},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:567.9,y:37.7},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:564.1,y:38},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:559.6,y:38.4},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:554.5,y:38.8},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:548.7,y:39.3},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:542.4,y:39.8},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:535.5,y:40.4},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:528.5,y:41},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:521.8,y:41.6},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:515.4,y:42.1},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:509.6,y:42.6},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:504.5,y:43},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:500.1,y:43.4},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:496.2,y:43.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:492.8,y:44},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:489.8,y:44.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:487.3,y:44.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:485.1,y:44.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:483.2,y:44.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:481.6,y:45},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:480.1,y:45.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:478.9,y:45.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:477.9,y:45.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:477},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:476.3,y:45.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:475.7,y:45.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:475.2},0).wait(1).to({scaleX:1,scaleY:1,x:474.9},0).wait(1).to({scaleX:1,scaleY:1,x:474.7},0).wait(1).to({scaleX:1,scaleY:1,x:474.5},0).wait(1).to({regX:476.5,x:482.5},0).wait(1).to({regX:468.5,x:474.4},0).wait(1).to({x:474},0).wait(1).to({x:473.3},0).wait(1).to({x:472.2},0).wait(1).to({x:470.7},0).wait(1).to({x:468.8},0).wait(1).to({x:466.2},0).wait(1).to({x:463},0).wait(1).to({x:458.8},0).wait(1).to({x:453.6},0).wait(1).to({x:447.1},0).wait(1).to({x:439},0).wait(1).to({x:429.3},0).wait(1).to({x:418.2},0).wait(1).to({x:406.8},0).wait(1).to({x:396.2},0).wait(1).to({x:387.1},0).wait(1).to({x:379.5},0).wait(1).to({x:373.3},0).wait(1).to({x:368.3},0).wait(1).to({x:364.3},0).wait(1).to({x:361},0).wait(1).to({x:358.4},0).wait(1).to({x:356.3},0).wait(1).to({x:354.7},0).wait(1).to({x:353.5},0).wait(1).to({x:352.6},0).wait(1).to({x:352},0).wait(1).to({x:351.7},0).wait(1).to({regX:476.5,x:359.5},0).to({_off:true},143).wait(109));

	// MASK copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_231 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_2_graphics_336 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_2_graphics_337 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_338 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_339 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_340 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_341 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_342 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_343 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_344 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_345 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_346 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_347 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_348 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_349 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_350 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_351 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_352 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_353 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_354 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_355 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_356 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_357 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_358 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_359 = new cjs.Graphics().p("Eg43gHMMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_360 = new cjs.Graphics().p("Eg43gHVMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_361 = new cjs.Graphics().p("Eg43gHdMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_362 = new cjs.Graphics().p("Eg43gHjMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_363 = new cjs.Graphics().p("Eg43gHnMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_364 = new cjs.Graphics().p("Eg43gHpMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_365 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_366 = new cjs.Graphics().p("Eg43gHsMBxvAAAIAAOEMhxvAAAg");
	var mask_2_graphics_599 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_2_graphics_707 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAOEMhxvAAAg");
	var mask_2_graphics_708 = new cjs.Graphics().p("Eg43gG/MBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_709 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_710 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_711 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_712 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_713 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_714 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_715 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_716 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_717 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_718 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_719 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_720 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_721 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_722 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_723 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_724 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_725 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_726 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_727 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_728 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_729 = new cjs.Graphics().p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_730 = new cjs.Graphics().p("Eg43gHMMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_731 = new cjs.Graphics().p("Eg43gHVMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_732 = new cjs.Graphics().p("Eg43gHdMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_733 = new cjs.Graphics().p("Eg43gHjMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_734 = new cjs.Graphics().p("Eg43gHnMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_735 = new cjs.Graphics().p("Eg43gHpMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_736 = new cjs.Graphics().p("Eg43gHrMBxvAAAIAAODMhxvAAAg");
	var mask_2_graphics_737 = new cjs.Graphics().p("Eg43gHsMBxvAAAIAAOEMhxvAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(231).to({graphics:mask_2_graphics_231,x:364,y:45.3}).wait(105).to({graphics:mask_2_graphics_336,x:364,y:45.3}).wait(1).to({graphics:mask_2_graphics_337,x:364,y:45.2}).wait(1).to({graphics:mask_2_graphics_338,x:364,y:45}).wait(1).to({graphics:mask_2_graphics_339,x:364,y:44.5}).wait(1).to({graphics:mask_2_graphics_340,x:364,y:43.6}).wait(1).to({graphics:mask_2_graphics_341,x:364,y:42.3}).wait(1).to({graphics:mask_2_graphics_342,x:364,y:40.7}).wait(1).to({graphics:mask_2_graphics_343,x:364,y:38.6}).wait(1).to({graphics:mask_2_graphics_344,x:364,y:35.9}).wait(1).to({graphics:mask_2_graphics_345,x:364,y:32.6}).wait(1).to({graphics:mask_2_graphics_346,x:364,y:28.5}).wait(1).to({graphics:mask_2_graphics_347,x:364,y:23.5}).wait(1).to({graphics:mask_2_graphics_348,x:364,y:17.5}).wait(1).to({graphics:mask_2_graphics_349,x:364,y:10.3}).wait(1).to({graphics:mask_2_graphics_350,x:364,y:2.3}).wait(1).to({graphics:mask_2_graphics_351,x:364,y:-6.1}).wait(1).to({graphics:mask_2_graphics_352,x:364,y:-14.3}).wait(1).to({graphics:mask_2_graphics_353,x:364,y:-21.8}).wait(1).to({graphics:mask_2_graphics_354,x:364,y:-28.3}).wait(1).to({graphics:mask_2_graphics_355,x:364,y:-33.7}).wait(1).to({graphics:mask_2_graphics_356,x:364,y:-38.2}).wait(1).to({graphics:mask_2_graphics_357,x:364,y:-41.8}).wait(1).to({graphics:mask_2_graphics_358,x:364,y:-44.8}).wait(1).to({graphics:mask_2_graphics_359,x:364,y:-46.1}).wait(1).to({graphics:mask_2_graphics_360,x:364,y:-47}).wait(1).to({graphics:mask_2_graphics_361,x:364,y:-47.8}).wait(1).to({graphics:mask_2_graphics_362,x:364,y:-48.4}).wait(1).to({graphics:mask_2_graphics_363,x:364,y:-48.8}).wait(1).to({graphics:mask_2_graphics_364,x:364,y:-49}).wait(1).to({graphics:mask_2_graphics_365,x:364,y:-49.2}).wait(1).to({graphics:mask_2_graphics_366,x:364,y:-49.3}).wait(1).to({graphics:null,x:0,y:0}).wait(232).to({graphics:mask_2_graphics_599,x:364,y:45.3}).wait(108).to({graphics:mask_2_graphics_707,x:364,y:45.3}).wait(1).to({graphics:mask_2_graphics_708,x:364,y:45.2}).wait(1).to({graphics:mask_2_graphics_709,x:364,y:45}).wait(1).to({graphics:mask_2_graphics_710,x:364,y:44.5}).wait(1).to({graphics:mask_2_graphics_711,x:364,y:43.6}).wait(1).to({graphics:mask_2_graphics_712,x:364,y:42.3}).wait(1).to({graphics:mask_2_graphics_713,x:364,y:40.7}).wait(1).to({graphics:mask_2_graphics_714,x:364,y:38.6}).wait(1).to({graphics:mask_2_graphics_715,x:364,y:35.9}).wait(1).to({graphics:mask_2_graphics_716,x:364,y:32.6}).wait(1).to({graphics:mask_2_graphics_717,x:364,y:28.5}).wait(1).to({graphics:mask_2_graphics_718,x:364,y:23.5}).wait(1).to({graphics:mask_2_graphics_719,x:364,y:17.5}).wait(1).to({graphics:mask_2_graphics_720,x:364,y:10.3}).wait(1).to({graphics:mask_2_graphics_721,x:364,y:2.3}).wait(1).to({graphics:mask_2_graphics_722,x:364,y:-6.1}).wait(1).to({graphics:mask_2_graphics_723,x:364,y:-14.3}).wait(1).to({graphics:mask_2_graphics_724,x:364,y:-21.8}).wait(1).to({graphics:mask_2_graphics_725,x:364,y:-28.3}).wait(1).to({graphics:mask_2_graphics_726,x:364,y:-33.7}).wait(1).to({graphics:mask_2_graphics_727,x:364,y:-38.2}).wait(1).to({graphics:mask_2_graphics_728,x:364,y:-41.8}).wait(1).to({graphics:mask_2_graphics_729,x:364,y:-44.8}).wait(1).to({graphics:mask_2_graphics_730,x:364,y:-46.1}).wait(1).to({graphics:mask_2_graphics_731,x:364,y:-47}).wait(1).to({graphics:mask_2_graphics_732,x:364,y:-47.8}).wait(1).to({graphics:mask_2_graphics_733,x:364,y:-48.4}).wait(1).to({graphics:mask_2_graphics_734,x:364,y:-48.8}).wait(1).to({graphics:mask_2_graphics_735,x:364,y:-49}).wait(1).to({graphics:mask_2_graphics_736,x:364,y:-49.2}).wait(1).to({graphics:mask_2_graphics_737,x:364,y:-49.3}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// LOGO_RED copy
	this.instance_10 = new lib.ALFALOGO_RD();
	this.instance_10.parent = this;
	this.instance_10.setTransform(58,21);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(231).to({_off:false},0).to({_off:true},136).wait(232).to({_off:false},0).to({_off:true},139).wait(1));

	// Legal1
	this.instance_11 = new lib.legal1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(413,174);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(255).to({_off:false},0).to({alpha:1},13).wait(82).to({alpha:0},15).to({_off:true},1).wait(257).to({_off:false},0).to({alpha:1},13).wait(85).to({alpha:0},15).to({_off:true},1).wait(2));

	// BG_WH
	this.instance_12 = new lib.BG_WH();
	this.instance_12.parent = this;
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(231).to({_off:false},0).to({_off:true},135).wait(233).to({_off:false},0).to({_off:true},138).wait(2));

	// LOGO_WH copy
	this.instance_13 = new lib.ALFALOGO_WH();
	this.instance_13.parent = this;
	this.instance_13.setTransform(65,23);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(336).to({_off:false},0).to({_off:true},32).wait(339).to({_off:false},0).wait(32));

	// BG_RED copy
	this.instance_14 = new lib.BG_RED();
	this.instance_14.parent = this;
	this.instance_14.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(336).to({_off:false},0).to({_off:true},32).wait(339).to({_off:false},0).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-113,756,534);


// stage content:
(lib.credit88_SIZMEK_DCO_728x90_do150kb = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(53.4,44,1039.6,92);
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
		{src:"BG_SNOW.jpg", id:"BG_SNOW"},
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