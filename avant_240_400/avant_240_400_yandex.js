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
		{src:"bath.jpg", id:"bath"},
		{src:"disclamer.png", id:"disclamer"},
		{src:"disclamerWhite.png", id:"disclamerWhite"},
		{src:"legal240400.png", id:"legal240400"},
		{src:"room.jpg", id:"room"}
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



(lib.bath = function() {
	this.initialize(img.bath);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,149);


(lib.disclamer = function() {
	this.initialize(img.disclamer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,12);


(lib.disclamerWhite = function() {
	this.initialize(img.disclamerWhite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,12);


(lib.legal240400 = function() {
	this.initialize(img.legal240400);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,45);


(lib.room = function() {
	this.initialize(img.room);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,193);


(lib.Zamer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90E19").s().p("ABVIrQhIgDhqADQgWABgIgIQgJgIADgVIABgPQgBg1AJgJQAJgJA0AAIAegBQAVgDgBgPQgCgQgUgBQgrgCgWACQgUACgHgIQgIgIACgUQABgGAAgJIAAgPIgDgyQgBgdAIgOQAKgRAdACQAsAEAFgBIARgCQAJgDAAgKQAAgMgJgEQgFgCgPAAIguACQgbABgJgJQgNgOADgeIADg0IAAgKQAAgzAIgJQAJgIAyAAIAFAAQAJgCAUACQAQgBAAgOQAAgPgQgBQgUADgIgBQgPgDgUADQgXADgKgJQgJgKADgXIABgWIAAgXIgDgyQgCgdAJgOQAKgRAdADIAxADIARgCQAJgDABgKQAAgNgKgDIgUgCQhDgFgLgMQgLgMAAhDIAAgPQAAg0AIgIQAJgJAyAAIAZgBQAMAAAFgCQAJgEAAgKQABgKgIgFQgFgCgMgBQghgDgRACQgbAEgKgMQgIgJgBgeQgCgjANgMQAMgMAiADQBEAFBagFQAcgCAKAKQAKAJgBAdQgBBVAAGnQAAGYACBlQAAAdgKAKQgIAIgWAAIgIgBg");
	this.shape.setTransform(22.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90E19").s().p("Ag9BrQgPAAgEgCQgHgEAFgPIBRjAIBWDVg");
	this.shape_1.setTransform(-24.9,-36.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90E19").s().p("AAAFwQgQgBAAgOIACgZQgBlIABlJQgCgQAAgJQABgOAPABQAQAAABAOQAAAJgCAQIAAFIIAAFJIACAZQgBAOgQAAIAAAAg");
	this.shape_2.setTransform(-34.1,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C90E19").s().p("AgSFkIABgbIAAlMIAAlFQgCgSABgJQACgOASABQAQACABAOQABAIgDAQQABFIgBFJIACAZQgBAOgQABIgCAAQgQAAgCgNg");
	this.shape_3.setTransform(-16.3,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C90E19").s().p("AgdFtQgLgIABgXQABg5AAkYIAAilQAAhhgBhEQgBgXALgIQAHgFAWAAQAXAAAHAFQALAIgBAXQgCFNACFOQABAXgLAIQgHAFgXAAQgWAAgHgFg");
	this.shape_4.setTransform(-25.5,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACJJxQh1gDibADQgiAAgPgNQgPgOAAgiQABn4gBp0QAAgeANgOQANgNAfABQCPACCQgCQAfgBAMAOQAMANAAAfIAAI3IgBEYIABEYQABAkgOAOQgNAPghAAIgEAAg");
	this.shape_5.setTransform(22.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AidJVQgOgNAAghQABkAgBoAQAAgcAJgUIB9kwQAHgUAGgHQAKgNAPABQAQAAAJANQAEAGAJAVQBcDiAdBFQALAaAAAqIAAF1QAAErABBWQAAAfgMAMQgNAOgfgBQhygDhyADIgEAAQgdAAgMgMg");
	this.shape_6.setTransform(-25.3,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-62.5,85.2,125.1);


(lib.tritritwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B62E2E").s().p("EgAKAkwUgADgAGgEmgkoUgEEggggAggDtIgFgfQgGgLS/ANIAAAAMgEyAkvUgEvAkpgAGAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-235.2,121.1,470.5);


(lib.Tile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD2127").s().p("AhFhPQBRBKA6BVQhRhDg6hcg");
	this.shape.setTransform(14.7,8,0.288,0.288);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD2127").s().p("AAjgnQgIAZgUAUQgLANgeAVQASgnAzgog");
	this.shape_1.setTransform(-16.3,-11.8,0.288,0.288);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD2127").s().p("AgFAGQgVgUgIgZQAzAoASAnQgegWgKgMg");
	this.shape_2.setTransform(-21.7,-12.1,0.288,0.288);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CD2127").s().p("AgFAGQgVgUgHgZQAaAWALAOQAVAUAKAXQgegWgKgMg");
	this.shape_3.setTransform(-21.5,10.1,0.288,0.288);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B181A").s().p("AERChQgXgVgGgDIhHhQQgqgvgcggQgngxgVgYQgigngLAAQgMAAgiAnIgSAXQgrAng9BGQhOBagXAYIgOATQgKALgOgDQgFgNAIgMIARgRIEAkkQASgUAFgDQAMgGARATIETE7QAEAEAEAJIAKATQgVgBgSgTg");
	this.shape_4.setTransform(9.7,6.4,0.288,0.288);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8B181A").s().p("Ak0CcQABgDAKgMIEJkwQAOgQAKgDQALgEAPARIEdFGQABABACAHIAEASQgjgWgqgyQgtg1gYgRIiLigQgPgTgNAAQgPAAgQATIkHEvQgOgQADgMg");
	this.shape_5.setTransform(-9.4,6.5,0.288,0.288);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8C181A").s().p("Ak6CwQgHgIAIgKQANgMAFgFID8kgQAdgiAMgBQAJAAAeAiQBTBdCkC6IAPAVIAUAcQgdgHgZgaQgdgfgKgFIjDjhQgSgVgNgBQgQAAgTAWQg3BDhxCAQgKASgYAXQgcAbgJANQgDAAgQAPQgGAGgFAAQgFAAgFgHg");
	this.shape_6.setTransform(-9.4,-15.4,0.288,0.288);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8C181A").s().p("AkyCzQgMgNANgOQAIgIARgOQBPhdCgi0QAhgmAJAAQAMAAAiAmQBxB/B/CRIASAUQAJANgBAQQgUgEgUgWQgXgZgKgFQiEiXhBhOQgVgZgUABQgQAAgVAZIjgECQgHACgSATQgJAJgGAAQgEAAgDgDg");
	this.shape_7.setTransform(9.5,-15.4,0.288,0.288);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E22026").s().p("ABVECIgSgWIhShfQg0g7gigjQgcgdALgeQAVgjAHgSQA6hMBPhTQAKgEAWgYQASgUAMAIQAOAHgBAbQgBAPgDAeQABDIgBDKQAAAJACAUQAAAQgMAEIgGABQgJAAgIgJg");
	this.shape_8.setTransform(24.2,12,0.288,0.288);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E22026").s().p("ABcEFIgNgRIixjJQgVgXgCgUQgBgUAXgVQASgQAEgWQA9hPBMhQIANgIQAGgDALgMQAKgJAKAFQAKAFACANQABAIgCAPIAAHEIAAAXQgBANgLADIgFABQgHAAgFgHg");
	this.shape_9.setTransform(24.1,-9.8,0.288,0.288);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E22026").s().p("AhyEUQgJgEgBgMIABgUIAAnZQABgcABgDQAFgPAYAEQBLBLA+BUQAKARAZAYQAbAaAJANIgBAAQANAXgFATQgEASgUAWQgmApg2A/IhZBqIgOAQQgFAFgGAAIgHgBg");
	this.shape_10.setTransform(-24.1,-9.9,0.288,0.288);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E22026").s().p("Ah1ESQgIgEAAgMIABgVIAAnYQAAgbAFgIQAJgMAbAQQBMBOA9BRQAJARAZAYQAbAaAJAOQAIAggWAZQhCBJh+CVIgOASQgGAFgHAAQgDAAgFgCg");
	this.shape_11.setTransform(-24,12,0.288,0.288);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E22026").s().p("AgpEnQgrgvhChMIhsh8QgRgTAHgTQAEgJATgUQA0g9Bqh3IASgVQAIgMADgNQgCgXARgUQAJgMAWgVQALgLALAHQADABARAPQAWAUAaAfIAuA1QAOAWA1A5QAsAwAQAkIAAAIQAaAigIAgQgGAagiAiQglAmgzA9IhVBlQggAkgRABIgBAAQgQAAgfgig");
	this.shape_12.setTransform(9.5,11.4,0.288,0.288);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E22026").s().p("AgYE8IjrkPQgOgQACgQQACgMAOgPQATgTAIgKQAQgRADgSQgGgSAMgQIAWgYQBYhjBChMQANgPAKgDQALgEAMAMQA7A9AUAXQArAxAdAqQAFAGgFAMQAKAcAbAfIAvAzQARASABASQABARgQATIjlEGQgNAPgOAAQgMAAgNgPg");
	this.shape_13.setTransform(-9.5,11.5,0.288,0.288);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E22026").s().p("AgYE9QiFiVhrh7QgKgLAAgQIAFgcIgBgHQATgtAognIBahnQA4g/AhgqQAPgSAMgEQAOgFARATQB2CCBQBgQAHAJABAFQADAJgFAIIANAbQAhAsgBAPQgBAQgmAsIjIDkQgRATgQAAQgNAAgOgQg");
	this.shape_14.setTransform(-9.5,-10.3,0.288,0.288);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E22026").s().p("AgoEtIhth8Ihth7QgQgSACgVQABgLAKgbQgHgNAIgMQAEgGAMgMIBqh8QA/hHAvgyQAPgPALgDQALgEANAOQBkBjB0CVQADAEgBAFIgCAJIADAKIAEAJQAeAugBAOQgBAPglAqQhYBjhjBzQgcAhgRABIgCAAQgPAAgbgeg");
	this.shape_15.setTransform(9.6,-10.3,0.288,0.288);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C22126").s().p("AgSAYQAHgbAegUQAAAEgIATQgGANAEALg");
	this.shape_16.setTransform(2.9,31.2,0.288,0.288);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#981C1E").s().p("AgigQIBFgBQgcAjgHAAQgIAAgagig");
	this.shape_17.setTransform(19.2,32.5,0.288,0.288);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#941B1D").s().p("AgigQIBFgCQgdAkgHAAIAAAAQgJABgYgjg");
	this.shape_18.setTransform(0.1,32.5,0.288,0.288);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#911A1C").s().p("AgigPIBFgDQgdAkgHABIAAAAQgJAAgYgig");
	this.shape_19.setTransform(-18.9,32.5,0.288,0.288);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8B181A").s().p("ABcCZQhDhZgjgrQg+hHg9gqIAAg9IELEzg");
	this.shape_20.setTransform(-24.1,27.5,0.288,0.288);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8E191B").s().p("AgBAAQBMhaA6g7IAAA0QgWAGgSAWIgeAnIhNBUQgvAzgVArIgyACICDiWg");
	this.shape_21.setTransform(24,27.6,0.288,0.288);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8F191B").s().p("ACQipIABA0QgYAHgSAUQgOAPgOAbQAGATgNASQgPAWgfAiQgnArgJAMQgLAPgZgGQgKAFgcAdQgWAWgWAFQCDitCdimg");
	this.shape_22.setTransform(23.7,-15.3,0.288,0.288);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8F191B").s().p("AiTCmIEmlWIABA+QgaAIgWAXQgOAQgSAgQAGASgMARQgQAXgfAiQglAqgLAOQgMAPgYgHQgLAHgVAWQgTAVgPAGg");
	this.shape_23.setTransform(23.6,6.5,0.288,0.288);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8E191B").s().p("AB2CpQgOgMgIgDIgHAAQgagFgWgRQgQgNgVgZQgMgZgWgbIgqguIgegiQgPgWAFgXQgKgggdgHIgBgzIExFZQgIACgIAAQgLAAgIgFg");
	this.shape_24.setTransform(-23.5,-15.4,0.288,0.288);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8F191B").s().p("ACACyIgRgLIgHAAQgagFgWgRQgQgNgVgZQgOgZgUgbQgNgQgdggIgeghQgOgVAFgYQgSgogggIIgBg9IEVFDIAOAPQAHAJgGAIQgEAGgFAAQgEAAgEgDg");
	this.shape_25.setTransform(-23.7,6.4,0.288,0.288);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8B181A").s().p("AgZiPQAOgQALgBQANgBANAQIEIExIgqAAQgYgqg0g5QhEhKgOgRIgeghQgsgygOgBQgNgBgqAxQghAmhDBHQg7BCgiAzIgrABIEIkwg");
	this.shape_26.setTransform(-9.5,27.3,0.288,0.288);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8D191B").s().p("AD0CfQgNgdgdghQgigjgQgTIg4g+QgkgqgTgXQgVgbgTgBQgSgCgXAbQgnAviGCXQgZAhgPAPIgoACQCxjJBXhmQARgUAMACQAMABARATQBXBmCyDIIgygDg");
	this.shape_27.setTransform(9.6,27.3,0.288,0.288);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DE2026").s().p("ABPCAIi3gCQgMgMAGgMQABgDANgQQAfglA2g7IBUhiQAKgNAHgCQAKgEALALIACDUQAAAUgHAIQgHAHgQAAIgEAAg");
	this.shape_28.setTransform(24.7,28.3,0.288,0.288);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DE2026").s().p("AhuB4QgHgHABgUQABgvAAilQAOgNAMAHIATATQAkAkAzA+QBDBLAUAWQAKALADAFQADALgKAKIjAACIgDAAQgSAAgHgIg");
	this.shape_29.setTransform(-24.6,28.3,0.288,0.288);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E12026").s().p("ABgCJIgMgNQhvh8hOhaQgXgaALgYIDuABIAAD3IAAARQgBAKgIAEQgDACgDAAQgFAAgFgEg");
	this.shape_30.setTransform(24.2,-27.8,0.288,0.288);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E12026").s().p("AhyCQQgKgEAAgOIABgXIAAj3ID4gBQAEAfgYAbQgfAdgMAPQgbAlgpAtIhJBSIgPASQgHAHgHAAIgGgCg");
	this.shape_31.setTransform(-24.1,-27.7,0.288,0.288);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E12026").s().p("AjkCSQgWgMAGgQQAMgTADgKIBfhrQA6hEAngoQAlgmAgAnQAhAoBFBOQBEBMAhAoQAKALABAHQACAJgJAKg");
	this.shape_32.setTransform(9.8,27.7,0.288,0.288);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E12026").s().p("Aj5CTQgIgLAFgLQACgGAKgLIBph2QBBhLAqgrQAUgUAPACQAPACAPATQBeBzBtB0QALALADAHQAEAMgMALg");
	this.shape_33.setTransform(-9.5,27.7,0.288,0.288);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E22026").s().p("AgeCTIjtkKQgSgUANgaIIkAAQAFAPgHAOQgEAKgMAOIjkEFQgOARgPAAQgOAAgRgTg");
	this.shape_34.setTransform(-9.4,-27.1,0.288,0.288);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E22026").s().p("AAACmQgOgBgPgQQh3iGh2iGQgTgVAMgZIIkAAQAHANgGAOQgDAIgMAOIjoEKQgOAQgPAAIAAAAg");
	this.shape_35.setTransform(9.6,-27.1,0.288,0.288);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CD2127").s().p("AghRPIgIgDQgVgIgTgUQg/hGiXivQgSgUgNgCQgPgBgSAUQiPCdg9BMQgWAbglARQgeAZgqgWIgHgDQgegNgeghQgfgngQgTQhThfgsguQgKgLgKgVIgQghQgQgTAGgcIALgwQgChuAAicIABkLIABhGQARgFALAEIgBgBQgJgKgHgTQgIgXgEgHQgPgSAHgZIAJgtQgBh/AAiyIABkwQAPgHAKADIAVAYIAGANQgTAqAAAiIAAGFIABASQACAKALAHIBYhgQAxg4AiguQAGgJADgTQACgVAFgIQANgVgLgUIgagdQgngrg3g/IhGhSQgGgLgFgGQgEgFgGgCIgBgBQgGgHgHgQQgHgRgFgGQgQgSAHgbQAKgpAAgEQgDhMACi7IgCgYQAAgOAMgHQAQALAFATQADAKAAAbIAABUQgBA0AFAlQAngmBJhUQBEhQApgmIBuAAQAsA2BHBQIB1CFQAVAZARAAQARAAAYgZQBFhLBwiCQAWgaAkgkIBsAAQApAxBMBWQBTBeAiApQAlAqAmgqQApgrA5hCIBghvIAZgYQAPgOAHgMIBuAAIBmByQA7BDAuAvQAHgjABgvIAAhQQABgaACgKQAFgTARgLQALAHAAAOQABAIgDAQIABDzIAAAkQABAVALAOQAKAMgJAOIgPAWQgEARgNAQIgYAcIgBACQATgPAYAEQABHEgBCXQAAAQAGAgQAEAagLATQgBAXgQAWIgaAdQAVgQAXAEIABJCIAAAlQABAUAMAPQAJAMgJANIgPAXQgFAWgSAXIghAmQh/COgfAlQgJALgQALIgdARIAAAAQghAYgmgXQgqgXgsgzQgwg8gagbQgkgnhEhRQgPgRgPAAQgOABgQAQQgoAog4BDIheBtQgXAZgLALQgUASgVAKQgRANgSAAQgPAAgTgMgAuZB0IAMAWQgeArACBGIAAE6IAAAcQABASAJASIBuh3QA+hGAbg+QAKgYgOgXIgfghIhahoIhEhOIgIgPQgFgGgIgDIAVAYgAL0FUQANAQgIAMQgRAeAKAbQAHAUAaAdICECTQALgLABgPIAAgZIABlOQAAgegEgIQgIgPgdAIQgEABgHgJQADgVAKgQIAVgYIAHgHIgJAHQgLALgIANIhMBZQg6BGgiAjQAHgHAIAAQAIAAAIAHgAL9mtQAKAMgDANQgCAJgKAPQgZAkAfAlIB9CPIAMANQAHAHAJgDQAJgCACgKIABgRQgBjqACh0QAAgVgRgPQgZgUgDgFQAGgTAIgOIhJBVQg4BDgjAlQAEgDAGgBIACAAQAIAAAIAGg");
	this.shape_36.setTransform(0.1,0.2,0.288,0.288);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#020303").s().p("AwdSnQgGgHAAgYQAB4KgBsHQAAgXAHgHQAIgIAXAAQRAACO5gDQAbAAAHAKQAGAHAAAaIAASKIAASIQAAAWgHAGQgGAIgWgBQxEgBu7ACQgZAAgGgKg");
	this.shape_37.setTransform(0,0,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-34.6,61.2,69.2);


(lib.TextTwoPrice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF100").s().p("AA1BxIAGglQAPAHALgEQAKgEAHgOIAJgTIhJiCIAAgGIAwAAIAwBdIABAAIArhdIAvAAIAAAFIhOCdQgIAQgIALQgIALgLAHQgLAHgPgBQgOAAgTgGgAG9BuQgHgFAAgLQAAgKAHgGQAHgHALAAQAKAAAHAHQAHAGAAAKQAAALgHAFQgHAHgKAAQgLAAgHgHgAl9BiQgWgUAAghIAAhHQAAggAWgTQAWgUAhAAQAhAAAWAUQAWATAAAgIAABHQAAAhgWAUQgWASghABQghgBgWgSgAlegzQgKAGgBAPIgBAQIAAAvIABARQABANAKAIQAJAGAPABQAOgBAKgGQAJgIACgNIABgRIAAgvIgBgQQgCgPgJgGQgKgHgOAAQgPAAgJAHgAo9BhQgVgVAAgcQAAgQAIgPQAJgOAPgHQgSgPgBgVQAAgXARgRQASgRAeAAQAfAAARARQASAQAAAWQAAAXgTAQQAfAQABAjQAAAcgVAVQgVASglABQgkgBgVgSgAodAYQgKAJAAAOQAAAOAKAJQAKAJAPAAQAQAAAKgJQAKgJAAgPQAAgOgKgIQgJgKgRAAQgPAAgKAKgAoWg3QgIAGAAAJQAAALAIAGQAHAHALgBQAMABAHgHQAIgGAAgLQAAgJgIgGQgHgHgMAAQgLAAgHAHgALzBxIAAhxIg0BBIgGAAIg0hBIAABxIgsAAIAAjPIAQAAIBTBhIBUhhIAQAAIAADPgAD5BxIAAjPICRAAIAAAoIhmAAIAAAlIAtAAQAkABATAQQATARAAAcQAAAdgTATQgTAUgkAAgAEkBJIAtAAQAPABAIgJQAIgHAAgNQAAgLgIgIQgIgIgPAAIgtAAgAiEBxIAAjPIBZAAQAiAAASAXQATAWAAAfQAAAdgTAVQgSAVgiAAIgtAAIAAA8gAhZAQIAuAAQANAAAJgLQAJgJAAgPQAAgPgIgKQgJgLgOAAIguAAgAroBxIAxhPQgFADgGAAQghABgUgSQgTgSAAgeQAAgIABgHQAEgXAQgOQASgPAZgDIAOAAQAjAAAWASQAVARAAAjQAAAXgOAVIg8BhgArKg7QgGACgGAEQgEAEgCAGQgCAGAAAJQAAAPAIAJQAKAHAQAAQAQAAAJgHQAKgJAAgPQAAgRgJgIQgKgIgQAAQgHAAgHACgAuOBxIAAgjIAjAAIAAiJIgfAAIAAgjIBKAAIAACsIAkAAIAAAjgANAAFIAAgFIAsg9QAIgMABgHQAAgIgEgEQgEgEgGAAQgGAAgFAEQgEADAAAJIgWAAQAAgSAKgKQAEgEAFgDQAIgDALAAQAKAAAIADQAFADAEAEQAJAJAAARQgBAQgMAPQAAACgEAFIgJALIgLAQIAoAAIAAAWg");
	this.shape.setTransform(14.2,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbApQgQgPAAgaQAAgYAQgPQARgPAWAAQAXAAARAPQAPAOAAAZQAAAagPAPQgRAOgWAAQgXAAgRgOgAhGgTQgHAHAAAMQAAANAHAIQAIAIAKAAQALAAAHgIQAJgIAAgNQgBgMgHgHQgIgIgKAAQgKAAgJAIgAAvA1IAAhNIgfAAIAAgbIBcAAIAAAbIgfAAIAABNg");
	this.shape_1.setTransform(-94.6,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF100").s().p("AAIAYIAAgBIgIgQIgGAQIgBABIgBABIgBAAIgBgBIgIgFIgBgBIAAgBIAAgBIABgCIANgMIgSgCIgBAAIgBAAIAAAAIAAgBIADgKIABgBIABgBIABAAIAAABIAQAIIgDgRIAAgBIAAgBIABgBIACAAIAHAAIACAAIABABIAAABIAAABIgDARIAQgIIAAgBIABAAIACABIAAABIADAJIAAABIAAABIgBAAIgBAAIgSACIANAMIABACIAAABIAAABIgBABIgHAFIgCABIgBAAIgBgBg");
	this.shape_2.setTransform(109.4,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-15.4,217.6,30.9);


(lib.TextTwoKvart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADaBOIAAiZIAhAAIAABWIBWhWIAKAAIAACYIggAAIAAhWIhYBXgAF/BNIAAiYIBCAAQAaAAAOARQAPAQAAAXQAAAVgPAQQgPAPgZAAIghAAIAAAsgAGgAFIAhAAQAKAAAHgFQAGgIAAgMQAAgLgGgIQgGgHgLAAIghAAgAB7BNIAAh7IgpAAIAAgdIByAAIAAAdIgpAAIAAB7gAguBNIAAiYIBAAAQAZAAAPARQAOAQAAAXQAAAVgOAQQgPAPgZAAIgfAAIAAAsgAgOAFIAgAAQAKAAAGgFQAHgIAAgMQAAgLgGgIQgHgHgKAAIggAAgAhhBNIgMgZIhAAAIgMAZIgjAAIAAgEIBHiVIAPAAIBHCVIAAAEgAijAYIArAAIgVgxgAlcBNIAAiYIBBAAQAWAAANANQAOAMAAAVQAAAJgFAHQgEAIgHAEQAWAIAAAZQAAAUgNANQgNAMgXAAgAk7AxIAkAAQAIAAAFgFQAFgEABgIQAAgKgHgFQgFgEgIAAIgjAAgAk7gLIAeAAQAIAAAFgFQAFgEAAgIQAAgIgFgFQgFgFgIAAIgeAAgAmXBNIgng/QgGABgSAAIAAA+IghAAIAAiYIAhAAIAABAQAVAAAFgDQAGgDADgIQADgHAEgQQAKgjAqAIIAAAXQgJgBgFADQgFAEgDAIQgHAdgMAKIAvBHIAAAFg");
	this.shape.setTransform(0.7,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.7,-15.4,107.4,30.9);


(lib.TextThreeTwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlaBJIAAgSIhKAAIAAASIgaAAIAAgqIAFAAQAHAAADgDQADgFABgJIAKhTIBSAAIAABkIAOAAIAAAqgAmQAPQgCAMgHAFIAwAAIAAhOIghAAgAgTAuQgOgMAAgVIAAgqQAAgTAOgMQANgMATABQAUgBANAMQANAMAAATIAAAqQAAAVgNAMQgNALgUAAQgTAAgNgLgAAAgsQgGAEgBAJIAAAKIAAAbIAAALQABAHAGAFQAEAFAJgBQAIABAGgFQAGgFABgHIAAgLIAAgbIAAgKQgBgJgGgEQgGgEgIAAQgJAAgEAEgAkhAnQgSgRAAgcQAAgVAJgPQAJgPAPgIQAOgGARAAQANgBALAFQAMAEAJAIQAJAIAFANQAFAMAAAQQAAAbgRASQgSARgdAAQgbAAgTgRgAkNgkQgLAKAAAUQAAARALAKQAKALAQAAQAQAAALgLQALgKAAgRQAAgUgLgKQgLgLgQAAQgPAAgLALgAB2A2IABgTQAKABAEgEQAEgEABgKIAKhXIBUAAIAAB8IgaAAIAAhlIgjAAIgGBBQgCAYgKAHQgHAFgOAAIgOgBgAGDA3IAAhlIghAAIAAgXIBdAAIAAAXIgiAAIAABlgAEGA3IAAh8IBNAAIAAAXIgyAAIAAAZIAvAAIAAAWIgvAAIAAAdIA0AAIAAAZgAh2A3IAAgVIAVAAIAAhTIgTAAIAAgUIAtAAIAABnIAWAAIAAAVg");
	this.shape.setTransform(0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-13,94.3,26);


(lib.TextThreeOne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKJAvQgTgRAAgeQAAgTAKgPQAJgPAOgIQAPgGARAAQANgBALAFQALAEAJAIQAJAIAGANQAFAMAAAOQAAAdgSASQgSARgdAAQgaAAgTgRgAKcgcQgLAKAAASQAAATALAKQALALAQAAQAQAAAKgLQALgKAAgTQAAgSgLgKQgKgLgQAAQgQAAgLALgAlIA/IAAh8IAbAAIAABFIBHhGIAIAAIAAB9IgbAAIAAhGIhHBGgAPlA/IAAh8IAbAAIAAB8gANxA/IAAh8IAaAAIAAAnIAbAAQAXAAAMAPQAMAMgCAUQgCAQgMALQgMAKgTABgAOLAnIALAAIAMAAQAVAAACgSQABgIgFgGQgGgHgJAAIgbAAgAMkA/IAAhlIgiAAIAAgXIBdAAIAAAXIghAAIAABlgAIGA/IAAh8IBYAAIAAAXIg9AAIAAAXIAbAAQAWAAALALQAMAJAAARQAAARgMAMQgLAMgWAAgAIhAnIAbAAQAJAAAFgFQAEgFAAgHQAAgHgEgFQgFgEgJAAIgbAAgAHdA/IgKgWIg1AAIgJAWIgcAAIAAgEIA6h5IAMAAIA6B5IAAAEgAGnATIAjAAIgRgogAETA/IAAh8IA1AAQAVAAAMANQAMANAAAUQAAAQgMAMQgMANgVABIgbAAIAAAkgAEtADIAbAAQAJAAAFgDQAFgHAAgJQAAgKgFgGQgFgGgJAAIgbAAgAC9A/IgKgWIg1AAIgJAWIgcAAIAAgEIA6h5IAMAAIA6B5IAAAEgACHATIAjAAIgRgogAAwA/IAAg2IgwAAIAAA2IgZAAIAAh8IAZAAIAAAvIAwAAIAAgvIAbAAIAAB8gAh9A/IAAgqIgWAAIgaAqIgdAAIAAgFIAdgpQgLgGgGgJQgGgJAAgLQAAgTAMgMQAMgMAVAAIA1AAIAAB8gAilghQgFAGAAAIQAAAJAFAFQAFAFAJAAIAbAAIAAgmIgbAAQgJAAgFAFgAmVA/IAAhlIgiAAIAAgXIBdAAIAAAXIghAAIAABlgAnkA/IAAg2IgwAAIAAA2IgbAAIAAh8IAbAAIAAAvIAwAAIAAgvIAbAAIAAB8gApYA/IgKgWIg1AAIgJAWIgcAAIAAgEIA6h5IAMAAIA6B5IAAAEgAqOATIAjAAIgRgogAsiA/IAAh8IA1AAQAVAAAMANQAMANAAAUQAAAQgMAMQgMANgVABIgbAAIAAAkgAsIADIAbAAQAJAAAFgDQAFgHAAgJQAAgKgFgGQgFgGgJAAIgbAAgAtMA/IgKgWIg1AAIgJAWIgcAAIAAgEIA6h5IAMAAIA6B5IAAAEgAuCATIAjAAIgRgogAv/A/IAAh8IBNAAIAAAYIgyAAIAABkg");
	this.shape.setTransform(0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-13,212,26);


(lib.TextFive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF4BJQgNgLAAgVIAZAAQAAAKAGAFQAGAFAJAAQAJAAAGgFQAGgFAAgIQAAgIgGgFQgGgFgJAAIgKAAIAAgWIAKAAQAHAAAFgDQAEgDAAgGQAAgHgFgEQgFgEgGAAQgHAAgFADQgFADAAAGIgYAAQAAgQALgJQAMgIASAAQATAAALAKQALAKAAAPQAAAIgDAEQgEAHgHAEQAVAKAAAWQAAARgNALQgMALgXAAQgVAAgMgLgAq9BOQgLgEgJgIQgJgIgGgMQgFgMAAgQQAAgcATgRQATgRAaAAQAVAAARALQAQAMAEAVIgaAAQgIgUgYAAQgQAAgLALQgKAJAAASQAAARAKAMQALALAQAAQAMAAAJgGQAJgFADgMIAaAAQgEAYgRAMQgQALgWAAQgMAAgMgEgAneBRIABgUQAKABAEgDQAEgEABgLIAKhXIBUAAIAAB8IgaAAIAAhkIgjAAIgGBAQgCAZgKAHQgHAFgOAAIgOgBgADBBSIAAh9IAbAAIAABGIBHhGIAIAAIAAB8IgbAAIAAhIIhHBJgANbBRIAAh8IA1AAQAVAAAMAOQAMANAAARQAAATgMAMQgMANgVAAIgbAAIAAAkgAN1AWIAbAAQAJAAAFgGQAFgGAAgKQAAgHgFgGQgFgGgJAAIgbAAgALzBRIAAh8IBOAAIAAAYIgzAAIAAAXIAvAAIAAAYIgvAAIAAAdIA0AAIAAAYgAK7BRIAAhEIggAoIgDAAIgggoIAABEIgbAAIAAh8IAKAAIAzA6IAyg6IAKAAIAAB8gAI0BRIgKgVIg1AAIgJAVIgcAAIAAgDIA6h6IAMAAIA6B6IAAADgAH+AmIAjAAIgRgogACJBRIAAh8IAaAAIAAB8gAAUBRIAAh8IAbAAIAAAoIAbAAQAWAAAMAMQAMAPgCATQgCARgMAKQgMALgSAAgAAvA6IALAAIALAAQAWAAABgSQABgIgFgHQgFgHgJAAIgbAAgAgiBRIAAg1IgwAAIAAA1IgbAAIAAh8IAbAAIAAAuIAwAAIAAguIAbAAIAAB8gAi6BRIAAhkIghAAIAAgYIBdAAIAAAYIgiAAIAABkgAj6BRIgKgVIg0AAIgKAVIgcAAIAAgDIA6h6IANAAIA5B6IAAADgAkvAmIAjAAIgSgogAoKBRIAAhjIgwAAIAABjIgbAAIAAh8IBmAAIAAB8gAtFBRIAAh8IBNAAIAAAYIgyAAIAAAXIAvAAIAAAYIgvAAIAAAdIA0AAIAAAYgAu8BRIAAh8IBYAAIAAAYIg+AAIAAAVIAcAAQAVAAAMALQALALAAARQAAARgLAMQgMALgVAAgAuiA6IAbAAQAJAAAFgFQAFgFAAgHQAAgHgFgFQgFgEgJAAIgbAAgADlg7QgJgIgBgOIATgCQABALAMAAQAMAAACgLIASACQgBAOgIAIQgIAIgPAAQgOAAgIgIg");
	this.shape.setTransform(0.6,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.8,-13,197.6,26);


(lib.TextBathTwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADdA6QgXgVAAglQAAgYAMgSQALgSASgJQASgJAUAAQAQAAAOAFQAOAFALALQALAJAGAPQAHAQAAARQAAAigWAXQgWAWgjAAQghAAgXgVgAD1gjQgNANAAAWQAAAYANAMQANANATAAQAUAAANgNQANgMAAgYQAAgWgNgNQgNgNgUABQgTgBgNANgAOMBNIAAh8IgpAAIAAgcIByAAIAAAcIgpAAIAAB8gAM+BNIgMgaIhAAAIgMAaIgiAAIAAgFIBHiVIAPAAIBGCVIAAAFgAL9AXIArAAIgWgxgAKSBNIAAhBIg7AAIAABBIggAAIAAiYIAgAAIAAA6IA7AAIAAg6IAhAAIAACYgAHyBNIAAhSIgnAvIgEAAIgngvIAABSIghAAIAAiZIAMAAIA+BKIA+hKIAMAAIAACZgACUBNIgmhAQgGABgTABIAAA+IggAAIAAiYIAgAAIAAA/QAVAAAGgDQAFgDAEgIQADgGADgQQAKgkArAJIAAAWQgJAAgGACQgFAEgCAJQgIAcgMAKIAvBHIAAAGgAg2BNIgkg7IgBAAIglA7IgjAAIAAgFIA0hLIguhEIAAgEIAkAAIAeA1IABAAIAeg1IAjAAIAAAEIguBEIA0BLIAAAFgAjXBNIAAiYIAgAAIAACYgAllBNIAAiYIAgAAIAAAvIAhAAQAbABAPARQAPARgDAYQgCATgPANQgOANgXABgAlFAwIANAAIAOAAQAaAAADgWQABgKgHgIQgGgIgLAAIghAAgAmqBNIAAhBIg7AAIAABBIghAAIAAiYIAhAAIAAA6IA7AAIAAg6IAhAAIAACYgApLBNIAAhBIg7AAIAABBIggAAIAAiYIAgAAIAAA6IA7AAIAAg6IAhAAIAACYgArZBNIgMgaIhAAAIgMAaIgjAAIAAgFIBHiVIAPAAIBHCVIAAAFgAsbAXIArAAIgVgxgAvUBNIAAiYIBBAAQAWAAANAMQAOAMAAAVQAAAJgFAIQgEAIgHAEQAWAHAAAZQAAAVgNAMQgNANgXAAgAuzAwIAkAAQAIAAAFgFQAFgEABgIQAAgKgHgFQgFgEgIABIgjAAgAuzgMIAeAAQAIAAAFgFQAFgEAAgHQAAgJgFgFQgFgFgIAAIgeAAg");
	this.shape.setTransform(0.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.4,-15.4,202.8,30.9);


(lib.TextBathThree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAYIAAgvIAaAAIgEAvgAgfAYIAAgvIAbAAIgEAvg");
	this.shape.setTransform(67.2,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBNIAAg3QgqAFgUgSQgUgPAAguIAAgXIAhAAIAAAXQAAAeALAKQALAJAbgEIAAhEIAhAAIAACYg");
	this.shape_1.setTransform(54.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBPQgcAAgWgSQgWgSgEgfIgWAAIAABAIghAAIAAiYIAhAAIAAA8IAXAAQAGgeAVgQQAVgRAbABQAVAAARAJQASAJALASQALATAAAXQAAAYgLATQgLATgSAJQgQAIgUAAIgCAAgAgEgiQgNANAAAVQAAAWAOANQALANATAAQATAAANgNQANgNAAgWQAAgVgNgNQgNgNgTAAQgTAAgMANg");
	this.shape_2.setTransform(36.7,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEBMIAAgYQAOABAEgEQAFgFABgNIAMhrIBlAAIAACYIggAAIAAh6IgoAAIgIBOQgDAegMAJQgIAGgRAAIgRgBg");
	this.shape_3.setTransform(15.6,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBNIglg/QgGABgSAAIAAA+IghAAIAAiYIAhAAIAABAQAVAAAFgDQAGgDABgIQADgHAEgQQAKgjAqAIIAAAXQgJgBgFADQgFAEgDAIQgHAdgMAKIAvBHIAAAFg");
	this.shape_4.setTransform(1.2,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBXIAAgVIhZAAIAAAVIgfAAIAAgxIAFAAQAJgBAEgFQADgEACgMIAMhmIBiAAIAAB8IAQAAIAAAxgAgTARQgBAQgJAFIA4AAIAAhgIgmAAg");
	this.shape_5.setTransform(-21,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2A6QgXgVAAglQAAgYALgSQAMgSARgJQASgJATAAQAPAAAOAFQAOAFALALQALAJAHAPQAGAQAAARQAAAigWAXQgWAWgiAAQgfAAgXgVgAgfgjQgNANAAAWQAAAYANAMQANANASAAQATAAANgNQANgMAAgYQAAgWgNgNQgNgNgTABQgRgBgOANg");
	this.shape_6.setTransform(-37.9,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBNIAAh7Ig5AAIAAB7IghAAIAAiYIB7AAIAACYg");
	this.shape_7.setTransform(-54.7,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAGAYIAAgvIAaAAIgEAvgAgfAYIAAgvIAbAAIgEAvg");
	this.shape_8.setTransform(-67.2,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.9,-15.4,147.9,30.9);


(lib.textBathOne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWA6QgWgVAAglQAAgYALgSQALgSARgJQASgJAVAAQAQAAAOAFQAOAFAKALQALAJAHAPQAGAQAAARQAAAigVAXQgWAWgkAAQggAAgXgVgAAugjQgOANAAAWQAAAYAOAMQAMANAUAAQATAAANgNQANgMAAgYQAAgWgNgNQgNgNgTABQgTgBgNANgAFzBNIAAh8IgpAAIAAgcIByAAIAAAcIgoAAIAAB8gAETBNIAAhBIg6AAIAABBIghAAIAAiYIAhAAIAAA6IA6AAIAAg6IAiAAIAACYgAg7BNIAAhSIgnAvIgEAAIgmgvIAABSIgiAAIAAiZIANAAIA9BKIA+hKIAMAAIAACZgAksBNIAAiYIBfAAIAAAdIg9AAIAAAeIA5AAIAAAcIg5AAIAAAiIA/AAIAAAfgAm8BNIAAiZIBDAAQAZAAAOARQAPAQAAAYQAAAUgPAQQgPAQgYAAIghAAIAAAsgAmbAFIAiAAQAJAAAHgGQAGgIAAgLQABgMgHgHQgGgIgKAAIgiAAg");
	this.shape.setTransform(0.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-15.4,95.4,30.9);


(lib.TextBathFour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF100").ss(2,0,1).p("AhFAYIAeAAIAfAAIBOAAAgngXIAbAAAhEgWIAdAA");
	this.shape.setTransform(64.9,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF100").s().p("ADGBjQgagWABglIAAhOQgBgkAagVQAYgWAlAAQAlAAAYAWQAYAVAAAkIAABOQAAAlgYAWQgYAVglAAQglAAgYgVgADohCQgLAHgBAQIgBATIAAAzIABATQABAPALAIQALAHAQAAQAPAAALgHQALgIABgPQABgJABgKIAAgzQgBgKgBgJQgBgQgLgHQgLgIgPAAQgQAAgLAIgAgQBjQgYgWgBglIAAhOQABgkAYgVQAXgWAlAAQAkAAAZAWQAYAVAAAkIAABOQAAAlgYAWQgZAVgkAAQglAAgXgVgAARhCQgLAHgCAQIAAATIAAAzIAAATQACAPALAIQAKAHARAAQAPAAALgHQAKgIACgPQACgJgBgKIAAgzQABgKgCgJQgCgQgKgHQgLgIgPAAQgRAAgKAIgAmgBkQgVgUgBggIAqAAQABAOAKAIQAIAHAPAAQARAAAJgKQAKgJAAgRQAAgRgLgKQgJgKgQgBQgOgBgPACIAAgEIArhKIhRAAIAAgnICSAAIAAAHIgyBQQAbAFANATQAOARAAAaQAAAggXAYQgVAXglAAQgiAAgWgUgAHbBzIAAg7IAAgwIAAgBIAAh8IBZAAQAlAAAVATQAWAUgBAfQABAggWARQgVAUglAAIg6AAIAAAiIgfAAIAfAAIAAA7gAH3AHIgcAAgAH6gCIA6AAQAYAAAMgMQAMgNAAgUQAAgTgMgNQgMgNgYAAIg6AAgAjVBzIA2hXQgGADgGAAQglACgWgUQgVgSAAgkQAAgmAYgUQAXgUAnAAQAoAAAXAUQAYAUABAmQAAAbgQAVIhDBsgAjBhEQgKAJAAASQAAASAKAJQAKAKASAAQATAAAJgKQALgJAAgSQAAgSgKgJQgKgJgTAAQgSAAgKAJgAoYBzIAAgtIhrAAIAAgWIBlihIAzAAIAACPIAVAAIAAAoIgVAAIAAAtgApLAfIA2AAIAEhaIgBAAg");
	this.shape_1.setTransform(13.3,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbApQgRgPAAgaQAAgYARgPQARgPAWAAQAXAAARAPQAPAOAAAZQAAAagOAPQgRAOgXAAQgXAAgRgOgAhGgTQgHAHAAAMQAAANAHAIQAIAIAKAAQALAAAHgIQAJgIgBgNQAAgMgHgHQgIgIgKAAQgKAAgJAIgAAwA1IAAhNIggAAIAAgbIBcAAIAAAbIgfAAIAABNg");
	this.shape_2.setTransform(-67.3,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Star
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF100").s().p("AAIAYIAAgBIgIgQIgGAQIgBABIgBABIgBAAIgBgBIgIgFIgBgBIAAgBIAAgBIABgCIANgMIgSgCIgBAAIgBAAIAAAAIAAgBIADgKIABgBIABgBIABAAIAAABIAQAIIgDgRIAAgBIAAgBIABgBIACAAIAHAAIACAAIABABIAAABIAAABIgDARIAQgIIAAgBIABAAIACABIAAABIADAJIAAABIAAABIgBAAIgBAAIgSACIANAMIABACIAAABIAAABIgBABIgHAFIgCABIgBAAIgBgBg");
	this.shape_3.setTransform(81.4,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-15.4,162.3,31.9);


(lib.rtirtione = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B62E2E").s().p("EgRLAjwMAMvgkZUAMugkZAAHAAHUAAGAAGAEUAk1UAEUAk1AAFAAGQACABgeAAQjcAA+fhMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-236.4,220.2,472.9);


(lib.Round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C90E19").ss(5,0,0,3).p("AJEAAQAADxiqCpQiqCqjwAAQjwAAiqiqQipipAAjxQAAjvCpirQCqipDwAAQDwAACqCpQCqCrAADvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmaGaQipipAAjxQAAjvCpirQCripDvAAQDwAACqCpQCqCrAADvQAADxiqCpQiqCqjwAAQjvAAiriqg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-60.5,121.1,121.1);


(lib.room_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.room();
	this.instance.setTransform(-120,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-96.5,240,193);


(lib.Redsquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90E19").s().p("EgcWAs9MAAAhZ5MA4tAAAMAAABZ5g");
	this.shape.setTransform(-19.4,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201,-312.6,363.1,575.5);


(lib.redmaskup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90E19").s().p("A3dHSIAAAAIAAAAIAAAAgAgoAAIWynRQgDABAtCTQAtCSgDACUgAGAADgu1AJ4IW1nSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.2,-46.6,300.6,93.3);


(lib.redmaskdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90E19").s().p("A2JD7QABACWIlqQWJlsABACQAAAC1dHVQ1bHWAAACIAAAAQgBAAhajdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.8,-47.2,283.7,94.6);


(lib.logotext17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA2BEIgVgvIhBAAIgVAvIgLAAIA/iHIADAAIA/CHgAAdAMIgdg+IgcA+IA5AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-6.8,13.2,13.8);


(lib.logotext16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEBEIAAh+IgzAAIAAgJIBvAAIAAAJIgzAAIAAB+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-6.8,11.3,13.7);


(lib.logotext15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtBEIAAhBIhZAAIAABBIgKAAIAAiHIAKAAIAAA/IBZAAIAAg/IAKAAIAACHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-6.8,11.2,13.7);


(lib.logotext14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjA8QgQgJgKgQQgJgQgBgTQABgSAJgQQAKgQAQgJQAQgJATgBQAUABAQAJQARAJAJAQQAKAQAAASQAAATgKAQQgJAQgRAJQgQAJgUABQgTgBgQgJgAgdgzQgOAIgIAOQgIANAAAQQAAARAIANQAIAOAOAIQAOAIAPAAQARAAAOgIQANgIAIgOQAIgNAAgRQAAgQgIgNQgIgOgNgIQgOgIgRAAQgPAAgOAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7,14.5,14.1);


(lib.logotext13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA0BEIAAh3IgBAAIgzA+Igyg+IgBAAIAAB3IgKAAIAAiHIAKAAIAzBAIA0hAIAKAAIAACHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-6.8,12.5,13.7);


(lib.logotext12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBEIAAiHIBIAAIAAAJIg+AAIAAA3IA9AAIAAAHIg9AAIAAA3IA/AAIAAAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-6.8,7.6,13.7);


(lib.logotext11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgoBEIAAiHIAmAAQAOAAAKAFQAKAFAEAIQAFAIAAAKQAAAJgEAJQgFAIgJAFQgKAEgQAAIgaAAIAABAgAgdgDIAZAAQALAAAIgEQAHgDAEgGQADgHAAgHQAAgIgDgGQgEgGgHgEQgHgEgKAAIgbAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-6.8,8.3,13.7);


(lib.logotext10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBEIAAiHIBIAAIAAAJIg+AAIAAA3IA9AAIAAAHIg9AAIAAA3IA/AAIAAAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-6.8,7.6,13.7);


(lib.logotext09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA/BTIAAgeIh9AAIAAAeIgKAAIAAgnIAPAAIA4h+IADAAIA4B+IAPAAIAAAngAAvAsIgvhtIguBtIBdAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-8.4,14.8,16.8);


(lib.logotext08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgoBEIAAiHIAmAAQAOAAAKAFQAKAFAEAIQAFAIAAAKQAAAJgEAJQgFAIgJAFQgKAEgQAAIgaAAIAABAgAgdgDIAZAAQALAAAIgEQAHgDAEgGQADgHAAgHQAAgIgDgGQgEgGgHgEQgHgEgKAAIgbAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-6.8,8.3,13.7);


(lib.logotext07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA2BEIgVgvIhBAAIgVAvIgLAAIA/iHIADAAIA/CHgAAdAMIgdg+IgcA+IA5AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.8,13.2,13.8);


(lib.logotext06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBEIAAiHIBJAAIAAAJIg+AAIAAB+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-6.8,7.5,13.7);


(lib.logotext05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtBEIAAhBIhZAAIAABBIgKAAIAAiHIAKAAIAAA/IBZAAIAAg/IAKAAIAACHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-6.8,11.2,13.7);


(lib.logotext04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA2BEIgVgvIhBAAIgVAvIgLAAIA/iHIADAAIA/CHgAAdAMIgdg+IgcA+IA5AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.8,13.2,13.8);


(lib.logotext03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqBEIAAiHIAdAAQAQABAKAFQAKAFAEAIQADAIAAAJQAAAKgEAHQgFAHgLAGQAQABAJAJQAHAJABAOQAAALgHAIQgFAIgKAEQgKAFgMAAgAgfA7IAdAAQAMAAAHgEQAIgFADgGQADgGAAgHQAAgHgDgGQgEgGgIgEQgJgFgPAAIgXAAgAgfgDIAOAAQAPAAAFgEQAJgDAEgGQADgHAAgIQAAgKgFgGQgFgGgJgCQgGgDgLAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-6.8,8.6,13.7);


(lib.logotext02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA2BEIgVgvIhBAAIgVAvIgLAAIA/iHIADAAIA/CHgAAdAMIgdg+IgcA+IA5AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.8,13.2,13.8);


(lib.logotext01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqBEIAAiHIAdAAQAQABAKAFQAKAFAEAIQADAIAAAJQAAAKgEAHQgFAHgLAGQAQABAJAJQAHAJABAOQAAALgHAIQgFAIgKAEQgKAFgMAAgAgfA7IAdAAQAMAAAHgEQAIgFADgGQADgGAAgHQAAgHgDgGQgEgGgIgEQgJgFgPAAIgXAAgAgfgDIAOAAQAPAAAFgEQAJgDAEgGQADgHAAgIQAAgKgFgGQgFgGgJgCQgGgDgLAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-6.8,8.6,13.7);


(lib.Legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal240400();
	this.instance.setTransform(-106,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-22.5,212,45);


(lib.Gift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90E19").s().p("AAQA1Igjg2IAggzIAZAAIgkAyIAoA3gAgoA1IAAhpIAVAAIAAAzIAAA2g");
	this.shape.setTransform(30.4,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90E19").s().p("AgbAqQgEgEgCgFIgEgKIgBgKIAAgJIAAgHIABgOQAAgFABgFIADgIIAGgGQALgMAQAAQARAAALAMQAGAFACAJQADAIAAANIAAAJIAAALIgBAKQgBAFgDAEQgCAFgEAEQgLAMgRAAQgQAAgLgMgAgGghIgGAEQgEAEAAAIIgBARIAAADIABAQQAAAHAEADQAGAGAGAAQAIAAAFgGIADgEIABgFIABgJIAAgMIAAgLIgBgHIgCgGIgCgEQgFgFgIAAQgDAAgDABg");
	this.shape_1.setTransform(20.1,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90E19").s().p("AglA1IAAhpIAoAAQAHAAAHACQAGADAFAFQAFAEACAGQADAGAAAIQAAAHgDAGQgCAFgFADQgFAFgGACQgHADgHAAIgTAAIAAAogAgQgEIASAAQAHAAAEgEQAEgEAAgGQAAgIgEgDQgEgEgHAAIgSAAg");
	this.shape_2.setTransform(10.9,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C90E19").s().p("AAZA1IgGgTIgkAAIgHATIgWAAIAnhpIAPAAIAnBpgAgLARIAYAAIgNgmg");
	this.shape_3.setTransform(1.1,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C90E19").s().p("AAdBBIAAgYIg5AAIAAAYIgUAAIAAgqIAKAAQAHgLADgOQADgQAAgSIAAgcIA+AAIAABXIAMAAIAAAqgAgFgdQAAAPgCAOQgCALgGAMIAfAAIAAhEIgVAAg");
	this.shape_4.setTransform(-9.1,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C90E19").s().p("AgbAqQgEgEgCgFIgEgKIgBgKIAAgJIAAgHIABgOQAAgFABgFIADgIIAGgGQALgMAQAAQARAAALAMQAGAFACAJQADAIAAANIAAAJIAAALIgBAKQgBAFgDAEQgCAFgEAEQgLAMgRAAQgQAAgLgMgAgGghIgGAEQgEAEAAAIIgBARIAAADIABAQQAAAHAEADQAGAGAGAAQAIAAAFgGIADgEIABgFIABgJIAAgMIAAgLIgBgHIgCgGIgCgEQgFgFgIAAQgDAAgDABg");
	this.shape_5.setTransform(-19.1,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C90E19").s().p("AASA1IAAhWIgiAAIAABWIgWAAIAAhpIBMAAIAABpg");
	this.shape_6.setTransform(-29.1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-11.5,73,23.2);


(lib.Garant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsCbIhsgBQAngwARgNQAhgaAtADQA2AEASgQQARgRgFg1QgEgsAbgjQAJgMA2gzIABBxQAAA8gBApQgCAmgcAbQgcAcglABIhHABIgeAAg");
	this.shape.setTransform(15.6,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxCaIgLgLIi1i2QgKgHgDgFQgGgIAJgIQAUgTAmgpQAjgfAmACQA0AABAA9QA/A9ACAxQACAcgiAzQgiAzgaALQgFABgDAAQgFAAgFgDg");
	this.shape_1.setTransform(34.7,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkRHvQgGgFgKgOQgVgagPgJQgWgOgcAEQgQACgIgKQgJgKABgRQABgQAKgGQAHgEAQgBIAfgBQAPgFAAgXQgBgUgPgEIgdgBQgRgBgGgDQgLgFAAgQQgBgSAKgHQAIgGARAAQAZAAAGgCQAOgGAAgWQAAgYgQgDQgVABgKgBQgQgBgHgEQgJgHAAgPQgBgiAjABIAPAAQAOAAAHgDQAIgFABgPQAAgQgIgGQgHgGgQABQgZABgIgEQgQgGABgYQAAgUAPgFQAFgCAXAAQATAAAHgDQALgGgBgTQAAgPgKgHQgIgFgSAAQgYAAgEgBQgPgFAAgUQgBgXAPgFQAEgBAbgBQARAAAHgEQAJgGABgQQAAgSgLgGQgHgEgTAAQgXAAgFgCQgOgFAAgVQAAgUANgGQAHgCAWAAQATABAJgGQAKgIgBgUQAAgTgNgEQgDgBgXAAQgVAAgHgDQgMgHgBgUQAAgUAMgGQAIgEAVAAIAZgBQANgEABgTQAAgTgMgFQgFgCgUAAQgWABgJgGQgMgIAAgWQABgUAOgFQAIgDAUABQAVABANgIQANgIAKgUQAWguBHAAQEvACDMgCQBPgBAbBDQAcBIg7ArQgHAGgNAMIgbAbIAAhXQgBg4g3AAInAAAQg6AAAABBIAAMoIABAXQAAANgJAFQgFACgFAAQgHAAgHgFg");
	this.shape_2.setTransform(-9.8,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AksEvQgQgQgEhkQgCgzAQgmQAPglAlgjQBKhDBchdIChilQARgSAMgBQANAAARASQBEBJBoBkQARAQABALQABAMgRAQQjLDBisCwQgWAWgjAAIg1AAQhnAAgSgQg");
	this.shape_3.setTransform(3.7,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-50.7,101.3,101.4);


(lib.Every = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90E19").s().p("AgeA1IAAgSIAJAAQAEAAACgDQADgBACgDIADgIIgjhIIAXAAIATA0IAVg0IAWAAIgmBXIgEAHIgDAFIgGAFQgEABgFAAg");
	this.shape.setTransform(33,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90E19").s().p("AAbA1IAAg8IgUAmIgMAAIgVgmIAAA8IgVAAIAAhpIAVAAIAaA4IAbg4IAVAAIAABpg");
	this.shape_1.setTransform(22.5,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90E19").s().p("AgbAqQgEgEgCgFIgEgKIgBgKIAAgJIAAgHIABgOQAAgFABgFIADgIIAGgGQALgMAQAAQARAAALAMQAGAFACAJQADAIAAANIAAAJIAAALIgBAKQgBAFgDAEQgCAFgEAEQgLAMgRAAQgQAAgLgMgAgGghIgGAEQgEAEAAAIIgBARIAAADIABAQQAAAHAEADQAGAGAGAAQAIAAAFgGIADgEIABgFIABgJIAAgMIAAgLIgBgHIgCgGIgCgEQgFgFgIAAQgDAAgDABg");
	this.shape_2.setTransform(11.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C90E19").s().p("AAdBBIAAgYIg5AAIAAAYIgUAAIAAgqIAKAAQAHgLADgOQADgQAAgSIAAgcIA+AAIAABXIAMAAIAAAqgAgFgdQAAAPgCAOQgCALgGAMIAfAAIAAhEIgVAAg");
	this.shape_3.setTransform(1.4,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C90E19").s().p("AAuA1Igkg2IAAA2IgTAAIAAg2IAAgzIATAAIAAAzIAhgzIAYAAIgjAyIAnA3gAhGA1IAng3IgjgyIAZAAIAgAzIgjA2g");
	this.shape_4.setTransform(-10.9,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C90E19").s().p("AAZA1IgGgTIgkAAIgHATIgWAAIAnhpIAPAAIAnBpgAgLARIAYAAIgNgmg");
	this.shape_5.setTransform(-22.7,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C90E19").s().p("AAQA1Igjg2IAggzIAZAAIgkAyIAoA3gAgpA1IAAhpIAWAAIAAAzIAAA2g");
	this.shape_6.setTransform(-31.6,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-11.5,78.6,23.2);


(lib.DiscWhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.disclamerWhite();
	this.instance.setTransform(-106.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-6,213,12);


(lib.discBlack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.disclamer();
	this.instance.setTransform(-106.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-6,213,12);


(lib.Customer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90E19").s().p("AgeA1IAAgSIAIAAQAFAAADgDQACgBABgDIAEgIIgihIIAVAAIAVA0IAUg0IAVAAIglBXIgEAHIgDAFIgHAFQgEABgEAAg");
	this.shape.setTransform(29.3,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90E19").s().p("AgJA1IAAhWIgcAAIAAgTIBLAAIAAATIgcAAIAABWg");
	this.shape_1.setTransform(20.7,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90E19").s().p("AASA1IAAgsIgjAAIAAAsIgUAAIAAhpIAUAAIAAAsIAjAAIAAgsIAUAAIAABpg");
	this.shape_2.setTransform(11.3,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C90E19").s().p("AgiA1IAAhpIBFAAIAAATIgwAAIAAAZIAoAAIAAARIgoAAIAAAaIAwAAIAAASg");
	this.shape_3.setTransform(1.8,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C90E19").s().p("AATA1IAAhDIgoBDIgSAAIAAhpIAVAAIAABCIAnhCIATAAIAABpg");
	this.shape_4.setTransform(-8.3,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C90E19").s().p("AAXA1IAAhWIgYAAIAAAfQAAAPgCAKQgCALgEAHQgEAGgGADQgHADgIAAIgJAAIAAgSIAEAAQAEAAADgCQADgBACgFQADgEABgIQACgIAAgLIAAgwIBAAAIAABpg");
	this.shape_5.setTransform(-19.2,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C90E19").s().p("AAQA1Igkg2IAhgzIAZAAIgkAyIAnA3gAgoA1IAAhpIAUAAIAAAzIAAA2g");
	this.shape_6.setTransform(-28,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-11.5,71.4,23.2);


(lib.buttonHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90E19").s().p("AJ4AzQgHgDgGgGQgEgEgCgFIgDgJIgBgMIAAgMIAAgMIABgLIADgKQACgEAEgEQAGgGAHgDQAHgDAJAAQAHAAAHACQAGACAGAFQAFAEADAGQAEAGABAJIgVAAQgCgHgEgEQgEgEgIAAQgEAAgEABQgDACgCACIgDAEIgBAFIgBAJIgBALIABAMIABAJIABAFIADADQACADADACQAEABAEAAQAIAAAEgEQAEgFACgGIAVAAQgBAIgEAHQgDAGgFAEQgGAEgGADQgHACgHAAQgJAAgHgDgAILAqQgEgEgCgFIgEgKIgBgKIAAgJIAAgHIABgOQAAgFABgFIADgIIAGgGQALgMASAAQARAAALAMQAGAFACAJQADAIAAANIAAAJIAAALIgBAKQgBAFgDAEQgCAFgEAEQgLAMgRAAQgSAAgLgMgAIgghIgGAEQgEAEAAAIIgBARIAAADIABAQQAAAHAEADQAGAGAIAAQAIAAAFgGIADgEIABgFIABgJIAAgMIAAgLIgBgHIgCgGIgCgEQgFgFgIAAQgFAAgDABgADHAqQgEgEgCgFIgEgKIgBgKIAAgJIAAgHIABgOQAAgFABgFIADgIIAGgGQALgMASAAQARAAALAMQAGAFACAJQADAIAAANIAAAJIAAALIgBAKQgBAFgDAEQgCAFgEAEQgLAMgRAAQgSAAgLgMgADcghIgGAEQgEAEAAAIIgBARIAAADIABAQQAAAHAEADQAGAGAIAAQAIAAAFgGIADgEIABgFIABgJIAAgMIAAgLIgBgHIgCgGIgCgEQgFgFgIAAQgFAAgDABgAAhAzQgHgDgGgGQgEgEgCgFIgDgJIgBgMIAAgMIAAgMIABgLIADgKQACgEAEgEQAGgGAHgDQAHgDAJAAQAHAAAHACQAGACAGAFQAFAEADAGQAEAGABAJIgVAAQgCgHgEgEQgEgEgIAAQgEAAgEABQgDACgCACIgDAEIgBAFIgBAJIgBALIABAMIABAJIABAFIADADQACADADACQAEABAEAAQAIAAAEgEQAEgFACgGIAVAAQgBAIgEAHQgDAGgFAEQgGAEgGADQgHACgHAAQgJAAgHgDgAqRAzQgHgDgGgGIgGgJIgDgJIgBgMIAAgMIAAgMIABgLIADgKIAGgIQAGgGAHgDQAHgDAJAAQAHAAAHACQAGACAGAFQAFAEADAGQAEAGABAJIgVAAQgCgHgEgEQgEgEgIAAQgEAAgEABQgDACgCACIgDAEIgBAFIgBAJIgBALIABAMIABAJIABAFIADADQACADADACQAEABAEAAQAIAAAEgEQAEgFACgGIAVAAQgBAIgEAHQgDAGgFAEQgGAEgGADQgHACgHAAQgJAAgHgDgAMXA1IAAhpIAVAAIAAAoIAVAAQAIAAAGADQAGACAFAFQAEACADAGQACAGAAAHQAAAIgCAGQgDAGgEAEQgFAFgGACQgGADgIAAgAMsAiIATAAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgHAAIgTAAgALVA1IAAhWIgcAAIAAgTIBNAAIAAATIgcAAIAABWgAHWA1IAAg9IgUAnIgOAAIgVgnIAAA9IgVAAIAAhpIAVAAIAcA4IAbg4IAVAAIAABpgAFcA1IAAhDIgpBDIgTAAIAAhpIAVAAIAABCIAqhCIASAAIAABpgAB+A1IAAhWIgcAAIAAgTIBNAAIAAATIgcAAIAABWgAhyA1IAAhpIAVAAIAAAoIAVAAQAIAAAGADQAHACAEAFQAFACACAGQADAGAAAHQAAAIgDAGQgCAGgFAEQgEAFgHACQgGADgIAAgAhdAiIAUAAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgHAAIgUAAgAizA1IAAhWIgcAAIAAgTIBMAAIAAATIgcAAIAABWgAjqA1IgGgTIgmAAIgHATIgWAAIAnhpIARAAIAnBpgAkQAQIAaAAIgNglgAloA1IAAhWIgcAAIAAgTIBMAAIAAATIgcAAIAABWgAmqA1IAAhDIgqBDIgSAAIAAhpIAVAAIAABCIAphCIATAAIAABpgAoUA1IAAgoIgMACIgPABIgKgCIgJgFQgEgDgCgFQgDgDAAgGIAAgsIAVAAIAAAmQAAAHAEADQAEADAGAAIAFAAIAFgBIAGgBIAEAAIAAgxIAUAAIAABpgArIA1IgGgTIgmAAIgGATIgWAAIAnhpIAQAAIAnBpgAruAQIAbAAIgNglgAtiA1IAAhpIApAAQAIAAAGACQAHADAEAEQAFAFADAGQACAGAAAHQAAAIgCAGQgDAFgFADQgEAFgHACQgGADgIAAIgUAAIAAAogAtNgEIATAAQAHAAAEgEQAFgEAAgHQAAgHgFgDQgEgEgHAAIgTAAg");
	this.shape.setTransform(0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C90E19").ss(3,0,0,3).p("AvWkFIetAAIAAILI+tAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AvWEGIAAoLIetAAIAAILg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,-27.8,199.8,55.6);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ4AzQgHgDgGgGQgEgEgCgFIgDgJIgBgMIAAgMIAAgMIABgLIADgKQACgEAEgEQAGgGAHgDQAHgDAJAAQAHAAAHACQAGACAGAFQAFAEADAGQAEAGABAJIgVAAQgCgHgEgEQgEgEgIAAQgEAAgEABQgDACgCACIgDAEIgBAFIgBAJIgBALIABAMIABAJIABAFIADADQACADADACQAEABAEAAQAIAAAEgEQAEgFACgGIAVAAQgBAIgEAHQgDAGgFAEQgGAEgGADQgHACgHAAQgJAAgHgDgAILAqQgEgEgCgFIgEgKIgBgKIAAgJIAAgHIABgOQAAgFABgFIADgIIAGgGQALgMASAAQARAAALAMQAGAFACAJQADAIAAANIAAAJIAAALIgBAKQgBAFgDAEQgCAFgEAEQgLAMgRAAQgSAAgLgMgAIgghIgGAEQgEAEAAAIIgBARIAAADIABAQQAAAHAEADQAGAGAIAAQAIAAAFgGIADgEIABgFIABgJIAAgMIAAgLIgBgHIgCgGIgCgEQgFgFgIAAQgFAAgDABgADHAqQgEgEgCgFIgEgKIgBgKIAAgJIAAgHIABgOQAAgFABgFIADgIIAGgGQALgMASAAQARAAALAMQAGAFACAJQADAIAAANIAAAJIAAALIgBAKQgBAFgDAEQgCAFgEAEQgLAMgRAAQgSAAgLgMgADcghIgGAEQgEAEAAAIIgBARIAAADIABAQQAAAHAEADQAGAGAIAAQAIAAAFgGIADgEIABgFIABgJIAAgMIAAgLIgBgHIgCgGIgCgEQgFgFgIAAQgFAAgDABgAAhAzQgHgDgGgGQgEgEgCgFIgDgJIgBgMIAAgMIAAgMIABgLIADgKQACgEAEgEQAGgGAHgDQAHgDAJAAQAHAAAHACQAGACAGAFQAFAEADAGQAEAGABAJIgVAAQgCgHgEgEQgEgEgIAAQgEAAgEABQgDACgCACIgDAEIgBAFIgBAJIgBALIABAMIABAJIABAFIADADQACADADACQAEABAEAAQAIAAAEgEQAEgFACgGIAVAAQgBAIgEAHQgDAGgFAEQgGAEgGADQgHACgHAAQgJAAgHgDgAqRAzQgHgDgGgGIgGgJIgDgJIgBgMIAAgMIAAgMIABgLIADgKIAGgIQAGgGAHgDQAHgDAJAAQAHAAAHACQAGACAGAFQAFAEADAGQAEAGABAJIgVAAQgCgHgEgEQgEgEgIAAQgEAAgEABQgDACgCACIgDAEIgBAFIgBAJIgBALIABAMIABAJIABAFIADADQACADADACQAEABAEAAQAIAAAEgEQAEgFACgGIAVAAQgBAIgEAHQgDAGgFAEQgGAEgGADQgHACgHAAQgJAAgHgDgAMXA1IAAhpIAVAAIAAAoIAVAAQAIAAAGADQAGACAFAFQAEACADAGQACAGAAAHQAAAIgCAGQgDAGgEAEQgFAFgGACQgGADgIAAgAMsAiIATAAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgHAAIgTAAgALVA1IAAhWIgcAAIAAgTIBNAAIAAATIgcAAIAABWgAHWA1IAAg9IgUAnIgOAAIgVgnIAAA9IgVAAIAAhpIAVAAIAcA4IAbg4IAVAAIAABpgAFcA1IAAhDIgpBDIgTAAIAAhpIAVAAIAABCIAqhCIASAAIAABpgAB+A1IAAhWIgcAAIAAgTIBNAAIAAATIgcAAIAABWgAhyA1IAAhpIAVAAIAAAoIAVAAQAIAAAGADQAHACAEAFQAFACACAGQADAGAAAHQAAAIgDAGQgCAGgFAEQgEAFgHACQgGADgIAAgAhdAiIAUAAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgHAAIgUAAgAizA1IAAhWIgcAAIAAgTIBMAAIAAATIgcAAIAABWgAjqA1IgGgTIgmAAIgHATIgWAAIAnhpIARAAIAnBpgAkQAQIAaAAIgNglgAloA1IAAhWIgcAAIAAgTIBMAAIAAATIgcAAIAABWgAmqA1IAAhDIgqBDIgSAAIAAhpIAVAAIAABCIAphCIATAAIAABpgAoUA1IAAgoIgMACIgPABIgKgCIgJgFQgEgDgCgFQgDgDAAgGIAAgsIAVAAIAAAmQAAAHAEADQAEADAGAAIAFAAIAFgBIAGgBIAEAAIAAgxIAUAAIAABpgArIA1IgGgTIgmAAIgGATIgWAAIAnhpIAQAAIAnBpgAruAQIAbAAIgNglgAtiA1IAAhpIApAAQAIAAAGACQAHADAEAEQAFAFADAGQACAGAAAHQAAAIgCAGQgDAFgFADQgEAFgHACQgGADgIAAIgUAAIAAAogAtNgEIATAAQAHAAAEgEQAFgEAAgHQAAgHgFgDQgEgEgHAAIgTAAg");
	this.shape.setTransform(0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,0,0,3).p("AvWkFIetAAIAAILI+tAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90E19").s().p("AvWEGIAAoLIetAAIAAILg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,-27.8,199.8,55.6);


(lib.btt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.blik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.478,1],-24.8,-10,24.9,10.1).s().p("AsgNlMAM7ggBIMFE4MgM6AgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.1,-118.2,160.2,236.4);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.bath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bath();
	this.instance.setTransform(-120,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-61,240,149);


(lib.AvantV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAEDdIh+mBIgBgEQgIgYgMgMQgMgMgSABIAAgFIB7AAIAAAFQgPACgJAFQgKAFAAAUQAAAFAEARIABADIABADIBgEsIABAAIBWkYQAIgdABgPQAAgXgJgFQgJgHgQgBIAAgFIBeAAIAAAFQgOACgKAJQgJAJgHAPQgHAOgIAYQgBACgCAFIhsFkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-22.1,34.9,44.3);


(lib.AvantT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6DiIAAgEQARgBAMgLQALgKAAgaIAAlpIhKAAQgcAAgTANQgSAMgDArIgEAAIAAhqIAEAAIAHALQADAEAFACQAFACAGABIAQABIDyAAQAYABANgWIAEAAIAABqIgEAAQgDgrgSgMQgTgNgbAAIhLAAIAAFpQAAAuApACIAAAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-22.6,33.1,45.3);


(lib.AvantN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACgDdIkelwIAAEHQAAAhACARQACAQAFAHQAJAPAXABIAAAFIheAAIAAgFQAQgBAJgHQAJgHAEgSQADgSAAglIAAkYIgMgQQgRgVgKgGQgKgGgPgDIAAgFIBHAAIEaFsIAAkVQAAgfgCgQQgCgPgJgKQgKgJgUgBIAAgFIBfAAIAAAFQgOACgJAFQgIAEgFAMQgEANAAAXIAAF5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-22.1,40.7,44.3);


(lib.AvantA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAyDaIAAgEQATgBAKgEQAKgEABgSQAAgKgGgQIgBgEIghhzIiAAAIgeBrQgGAVAAANQAAATAHAFQAJAHAOAAIAAAEIhYAAIAAgEQATgCALgPQALgPAJgdIBqlyIAZAAIBxFwQAJAcAIANQAIAOAHADQAIADALACIAAAEgAhKAbIB2AAIg8jLIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-21.8,34.7,43.7);


(lib.A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABLEcIAAgGQAcgBAQgFQAPgGAAgXQAAgNgHgWIgCgEIgyiVIjAAAIgtCKQgJAcAAARQAAAYAMAIQAMAHAWABIAAAGIiEAAIAAgGQAcgEARgSQARgTAMgnICfnhIAnAAICoHgQANAlAMARQAMAQALAEQALAFAQACIAAAGgAhvAjICxAAIhZkJIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-28.4,51.8,56.8);


(lib.redtriangltwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tritritwo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:0.1},0).wait(1).to({y:0.4},0).wait(1).to({y:0.8},0).wait(1).to({y:1.4},0).wait(1).to({y:2.2},0).wait(1).to({y:3.1},0).wait(1).to({y:4.2},0).wait(1).to({y:5.3},0).wait(1).to({y:6.6},0).wait(1).to({y:8.1},0).wait(1).to({y:9.6},0).wait(1).to({y:11.2},0).wait(1).to({y:13},0).wait(1).to({y:14.8},0).wait(1).to({y:16.7},0).wait(1).to({y:18.7},0).wait(1).to({y:20.7},0).wait(1).to({y:22.8},0).wait(1).to({y:25},0).wait(1).to({y:27.2},0).wait(1).to({y:29.4},0).wait(1).to({y:31.7},0).wait(1).to({y:34},0).wait(1).to({y:36.3},0).wait(1).to({y:38.6},0).wait(1).to({y:40.9},0).wait(1).to({y:43.3},0).wait(1).to({y:45.6},0).wait(1).to({y:47.9},0).wait(1).to({y:50.2},0).wait(1).to({y:52.4},0).wait(1).to({y:54.6},0).wait(1).to({y:56.8},0).wait(1).to({y:58.9},0).wait(1).to({y:60.9},0).wait(1).to({y:62.9},0).wait(1).to({y:64.8},0).wait(1).to({y:66.6},0).wait(1).to({y:68.3},0).wait(1).to({y:69.9},0).wait(1).to({y:71.3},0).wait(1).to({y:72.7},0).wait(1).to({y:73.9},0).wait(1).to({y:74.9},0).wait(1).to({y:75.8},0).wait(1).to({y:76.5},0).wait(1).to({y:77.1},0).wait(1).to({y:77.4},0).wait(1).to({y:77.5},0).wait(1).to({y:77.4},0).wait(1).to({y:77.1},0).wait(1).to({y:76.7},0).wait(1).to({y:76.1},0).wait(1).to({y:75.4},0).wait(1).to({y:74.5},0).wait(1).to({y:73.5},0).wait(1).to({y:72.4},0).wait(1).to({y:71.1},0).wait(1).to({y:69.7},0).wait(1).to({y:68.2},0).wait(1).to({y:66.7},0).wait(1).to({y:65},0).wait(1).to({y:63.2},0).wait(1).to({y:61.4},0).wait(1).to({y:59.5},0).wait(1).to({y:57.5},0).wait(1).to({y:55.5},0).wait(1).to({y:53.4},0).wait(1).to({y:51.2},0).wait(1).to({y:49},0).wait(1).to({y:46.8},0).wait(1).to({y:44.6},0).wait(1).to({y:42.3},0).wait(1).to({y:40.1},0).wait(1).to({y:37.8},0).wait(1).to({y:35.5},0).wait(1).to({y:33.2},0).wait(1).to({y:30.9},0).wait(1).to({y:28.7},0).wait(1).to({y:26.5},0).wait(1).to({y:24.3},0).wait(1).to({y:22.1},0).wait(1).to({y:20},0).wait(1).to({y:18},0).wait(1).to({y:16},0).wait(1).to({y:14.1},0).wait(1).to({y:12.3},0).wait(1).to({y:10.5},0).wait(1).to({y:8.9},0).wait(1).to({y:7.4},0).wait(1).to({y:5.9},0).wait(1).to({y:4.6},0).wait(1).to({y:3.5},0).wait(1).to({y:2.5},0).wait(1).to({y:1.6},0).wait(1).to({y:0.9},0).wait(1).to({y:0.4},0).wait(1).to({y:0.1},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-235.2,121.1,470.5);


(lib.redtrianglone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rtirtione();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-0.1},0).wait(1).to({y:-0.5},0).wait(1).to({y:-1.1},0).wait(1).to({y:-1.9},0).wait(1).to({y:-2.9},0).wait(1).to({y:-4.1},0).wait(1).to({y:-5.5},0).wait(1).to({y:-7},0).wait(1).to({y:-8.7},0).wait(1).to({y:-10.5},0).wait(1).to({y:-12.4},0).wait(1).to({y:-14.5},0).wait(1).to({y:-16.7},0).wait(1).to({y:-19},0).wait(1).to({y:-21.3},0).wait(1).to({y:-23.8},0).wait(1).to({y:-26.3},0).wait(1).to({y:-28.8},0).wait(1).to({y:-31.5},0).wait(1).to({y:-34.1},0).wait(1).to({y:-36.8},0).wait(1).to({y:-39.6},0).wait(1).to({y:-42.3},0).wait(1).to({y:-45.1},0).wait(1).to({y:-47.9},0).wait(1).to({y:-50.7},0).wait(1).to({y:-53.4},0).wait(1).to({y:-56.2},0).wait(1).to({y:-58.9},0).wait(1).to({y:-61.5},0).wait(1).to({y:-64.2},0).wait(1).to({y:-66.7},0).wait(1).to({y:-69.2},0).wait(1).to({y:-71.7},0).wait(1).to({y:-74},0).wait(1).to({y:-76.3},0).wait(1).to({y:-78.5},0).wait(1).to({y:-80.6},0).wait(1).to({y:-82.5},0).wait(1).to({y:-84.3},0).wait(1).to({y:-86},0).wait(1).to({y:-87.5},0).wait(1).to({y:-88.9},0).wait(1).to({y:-90.1},0).wait(1).to({y:-91.1},0).wait(1).to({y:-91.9},0).wait(1).to({y:-92.5},0).wait(1).to({y:-92.9},0).wait(1).to({y:-93},0).wait(1).to({y:-92.9},0).wait(1).to({y:-92.5},0).wait(1).to({y:-91.9},0).wait(1).to({y:-91.2},0).wait(1).to({y:-90.2},0).wait(1).to({y:-89},0).wait(1).to({y:-87.7},0).wait(1).to({y:-86.3},0).wait(1).to({y:-84.6},0).wait(1).to({y:-82.9},0).wait(1).to({y:-81},0).wait(1).to({y:-79},0).wait(1).to({y:-76.9},0).wait(1).to({y:-74.7},0).wait(1).to({y:-72.4},0).wait(1).to({y:-70},0).wait(1).to({y:-67.6},0).wait(1).to({y:-65.1},0).wait(1).to({y:-62.5},0).wait(1).to({y:-59.9},0).wait(1).to({y:-57.3},0).wait(1).to({y:-54.6},0).wait(1).to({y:-51.9},0).wait(1).to({y:-49.2},0).wait(1).to({y:-46.5},0).wait(1).to({y:-43.8},0).wait(1).to({y:-41.1},0).wait(1).to({y:-38.4},0).wait(1).to({y:-35.7},0).wait(1).to({y:-33.1},0).wait(1).to({y:-30.5},0).wait(1).to({y:-27.9},0).wait(1).to({y:-25.4},0).wait(1).to({y:-23},0).wait(1).to({y:-20.6},0).wait(1).to({y:-18.3},0).wait(1).to({y:-16.1},0).wait(1).to({y:-14},0).wait(1).to({y:-12},0).wait(1).to({y:-10.1},0).wait(1).to({y:-8.4},0).wait(1).to({y:-6.7},0).wait(1).to({y:-5.3},0).wait(1).to({y:-4},0).wait(1).to({y:-2.8},0).wait(1).to({y:-1.8},0).wait(1).to({y:-1.1},0).wait(1).to({y:-0.5},0).wait(1).to({y:-0.1},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-236.4,220.2,472.9);


(lib.redBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A35XdIAAAAIAAAAIAAAAgEghHgHWUAADAAEAppgIHUApqgIGAAEAADQADAEBPPEQBOPBADAEUAAEAADgmcAITUgmIAIOgAPAAIQABgOpP+lg");
	var mask_graphics_1 = new cjs.Graphics().p("AZ0BQIAAAAIAAAAIAAAAgAY5hzIELg0IELgzIAIBhIAJBgIj2A0Ij2A1Ig7jDg");
	var mask_graphics_2 = new cjs.Graphics().p("ATIFLIAAAAIAAAAIAAAAgARGhnQABABJNhyQJNhzABABIASDWIASDTQAAABofB1QobB0gEACQABgDiDmvg");
	var mask_graphics_3 = new cjs.Graphics().p("AM4H1IAAAAIAAAAIAAAAgAJzicQABABN7itQN6itABABQACABAaFCQAaFAABABQABABs1CyQswCvgFADQAAgFjFqMg");
	var mask_graphics_4 = new cjs.Graphics().p("AHBKUIAAAAIAAAAIAAAAgAC9jOQABACSWjlQSVjkACACQABABAjGpQAiGmACABQABACw6DpQwzDogGADQAAgGkEtcg");
	var mask_graphics_5 = new cjs.Graphics().p("ABhMpIAAAAIAAAAIAAAAgAjcj9QACACWdkXQWekYACACQACACAqIIQAqIFACACQACAC0vEeQ0lEcgIAEQAAgHk9wfg");
	var mask_graphics_6 = new cjs.Graphics().p("AjkO0IAAAAIAAAAIAAAAgApakoQADACaTlIQaVlHACACQACACAyJhQAxJfACACQACAC4SFQQ4FFNgJAEQAAgJl2zTg");
	var mask_graphics_7 = new cjs.Graphics().p("AoTQ0IAAAAIAAAAIAAAAgAu6lRQACADd3l0Qd5l0ACADQADACA4K0QA4KxADACQACAD7lF8Q7VF6gLAFQABgKmo17g");
	var mask_graphics_8 = new cjs.Graphics().p("AsnSpIAAAAIAAAAIAAAAgAz8l1UAADAADAhGgGdUAhJgGcAADAADQACACA/L/QA+L8ADADQACAD+kGmQ+UGjgMAFQABgLnW4Tg");
	var mask_graphics_9 = new cjs.Graphics().p("AwdUSIAAAAIAAAAIAAAAgA4cmWUAADAADAkAgHBUAkDgHAAADAADQADADBENCQBDM/ADADUAADAADghQAHLUgg+AHIgAMAAGQAAgMn/6cg");
	var mask_graphics_10 = new cjs.Graphics().p("Az0VtIAAAAIAAAAIAAAAgA8XmzUAADAAEAmjgHgUAmkgHgAADAADQAEADBIN8QBIN6AEAEUAADAADgjlAHrUgjTAHngANAAHQAAgNoj8Tg");
	var mask_graphics_11 = new cjs.Graphics().p("A2nW5IAAAAIAAAAIAAAAgA/onLUAAEAAEAopgH6UAorgH7AAEAAEQADADBNOtQBMOrADADUAAEAAEgliAIGUglOAICgAOAAHQAAgOpB92g");
	var mask_graphics_12 = new cjs.Graphics().p("A4xX0IAAAAIAAAAIAAAAgEgiJgHdUAAEAAEAqRgIPUAqTgIOAAEAADQADAEBQPTQBPPQAEADUAADAAEgnBAIbUgmuAIWgAOAAIQAAgPpY/Cg");
	var mask_graphics_13 = new cjs.Graphics().p("A6LYaIAAAAIAAAAIAAAAgEgjygHpUAAEAAEArVgIcUArXgIcAAEAAEQADAEBSPrQBRPpAEADUAADAAEgoAAIoUgnrAIkgAPAAIQAAgPpn/0g");
	var mask_graphics_14 = new cjs.Graphics().p("A6qYoIABAAIgBAAIAAAAgEgkWgHtUAAEAADArugIgUArwgIgAADAADQAEAEBSP0QBSPyAEADUAAEAAEgoXAItUgoCAIpgAPAAIUAAAgAPgJtggGg");
	var mask_graphics_15 = new cjs.Graphics().p("A6ZYhIAAAAIAAAAIAAAAgEgkCgHrUAAEAAEArhgIeUArjgIeAAEAADQADAEBSPwQBSPtADADUAAEAAEgoLAIqUgn2AIngAQAAIQABgPpq/9g");
	var mask_graphics_16 = new cjs.Graphics().p("A5tYOIAAAAIAAAAIAAAAgEgjPgHlUAADAADArBgIXUArCgIYAAEAAEQADADBRPkQBRPhAEAEUAADAAEgntAIkUgnYAIggAPAAHQAAgOpi/lg");
	var mask_graphics_17 = new cjs.Graphics().p("A44X3IAAAAIAAABIAAgBgEgiRgHeUAAEAADAqYgIPUAqagIQAADAADQAEAEBQPVQBPPTAEADUAADAAEgnIAIcUgmzAIYgAPAAHQABgOpa/Hg");
	var mask_graphics_18 = new cjs.Graphics().p("A4LXkIAAAAIAAAAIAAAAgEghcgHYUAADAADAp2gIJUAp4gIJAAEAAEQADADBPPJQBPPGADAEUAAEAADgmpAIWUgmUAIRgAPAAHQABgOpS+ug");
	var mask_graphics_19 = new cjs.Graphics().p("A35XdIAAAAIAAAAIAAAAgEghHgHWUAADAAEAppgIHUApqgIGAAEAADQADAEBPPEQBOPBADAEUAAEAADgmcAITUgmIAIOgAPAAIQABgOpP+lg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:338.3,y:-28.9}).wait(1).to({graphics:mask_graphics_1,x:214.4,y:-22}).wait(1).to({graphics:mask_graphics_2,x:231,y:-28.8}).wait(1).to({graphics:mask_graphics_3,x:246.5,y:-28.8}).wait(1).to({graphics:mask_graphics_4,x:261.1,y:-28.7}).wait(1).to({graphics:mask_graphics_5,x:274.8,y:-28.7}).wait(1).to({graphics:mask_graphics_6,x:287.5,y:-28.7}).wait(1).to({graphics:mask_graphics_7,x:299.2,y:-28.6}).wait(1).to({graphics:mask_graphics_8,x:309.9,y:-28.6}).wait(1).to({graphics:mask_graphics_9,x:319.5,y:-28.5}).wait(1).to({graphics:mask_graphics_10,x:327.8,y:-28.5}).wait(1).to({graphics:mask_graphics_11,x:334.8,y:-28.5}).wait(1).to({graphics:mask_graphics_12,x:340.1,y:-28.5}).wait(1).to({graphics:mask_graphics_13,x:343.6,y:-28.5}).wait(1).to({graphics:mask_graphics_14,x:345.2,y:-28.9}).wait(1).to({graphics:mask_graphics_15,x:344.5,y:-28.9}).wait(1).to({graphics:mask_graphics_16,x:342.8,y:-28.9}).wait(1).to({graphics:mask_graphics_17,x:340.7,y:-28.9}).wait(1).to({graphics:mask_graphics_18,x:339,y:-28.9}).wait(1).to({graphics:mask_graphics_19,x:338.3,y:-28.9}).wait(11));

	// redtriangltwo
	this.instance = new lib.redtriangltwo();
	this.instance.setTransform(346.6,-77.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0},0).to({alpha:1},18).wait(11));

	// ещзredtrianglone
	this.instance_1 = new lib.redtrianglone();
	this.instance_1.setTransform(538.7,24.6);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0},0).to({alpha:1},18).wait(11));

	// Redsquare
	this.instance_2 = new lib.Redsquare();
	this.instance_2.setTransform(486.7,0.4);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0},0).to({alpha:1},18).wait(11));

	// topTri
	this.instance_3 = new lib.redmaskup();
	this.instance_3.setTransform(574.9,-184.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(18).to({_off:false,y:-138.1},0).wait(1).to({y:-149.3},0).wait(1).to({y:-159.2},0).wait(1).to({y:-168},0).wait(1).to({y:-175.6},0).wait(1).to({y:-181.7},0).wait(1).to({y:-186},0).wait(1).to({y:-187.7},0).wait(1).to({y:-186.9},0).wait(1).to({y:-185.5},0).wait(1).to({y:-184.6},0).wait(1));

	// botTri
	this.instance_4 = new lib.redmaskdown();
	this.instance_4.setTransform(328.9,108.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(18).to({_off:false,y:61.8},0).wait(1).to({y:72.9},0).wait(1).to({y:82.8},0).wait(1).to({y:91.6},0).wait(1).to({y:99.2},0).wait(1).to({y:105.3},0).wait(1).to({y:109.6},0).wait(1).to({y:111.4},0).wait(1).to({y:110.5},0).wait(1).to({y:109.1},0).wait(1).to({y:108.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.1,-231.3,538.2,386.9);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAZHDIAAgeIh9AAIAAAeIgLAAIAAgnIAQAAIA3iBIAGAAIA1CBIAQAAIAAAngAhUGcIBdAAIguhwgAI4GdQgQgJgKgQQgJgQgBgUQABgTAJgRQAKgPAQgKQAQgIAUgBQAVABAQAIQARAKAJAPQAKARAAATQAAAUgKAQQgJAQgRAJQgQAJgVABQgUgBgQgJgAI+EsQgNAIgJAOQgHANgBARQABARAHAOQAJANANAJQAOAHARABQARgBAOgHQANgJAIgNQAJgOAAgRQAAgRgJgNQgIgOgNgIQgOgIgRAAQgRAAgOAIgAQfGlIgVgwIhDAAIgVAwIgLAAIA/iKIAFAAIA/CKgAPLFsIA6AAIgdhAgANrGlIAAiAIgzAAIAAgJIBxAAIAAAJIg0AAIAACAgAMhGlIAAhBIhbAAIAABBIgLAAIAAiJIALAAIAAA/IBbAAIAAg/IAKAAIAACJgAH1GlIAAh6IgBAAIgzBAIg0hAIAAAAIAAB6IgLAAIAAiJIALAAIA0BAIA0hAIAKAAIAACJgAEkGlIAAiJIBLAAIAAAJIhAAAIAAA3IA/AAIAAAJIg/AAIAAA3IBCAAIAAAJgADCGlIAAiJIAmAAQAQAAAKAFQAJAFAFAIQAFAIAAAKQAAAJgFAIQgEAJgJAFQgLAGgRAAIgaAAIAABAgADNFcIAZAAQANAAAIgEQAHgEAEgGQADgGAAgHQAAgIgDgHQgEgFgHgEQgHgEgMAAIgbAAgAAxGlIAAiJIBLAAIAAAJIhAAAIAAA3IA+AAIAAAJIg+AAIAAA3IBBAAIAAAJgAjDGlIAAiJIAlAAQAQAAAKAFQALAFAEAIQAFAIgBAKQAAAJgDAIQgFAJgKAFQgKAGgSAAIgZAAIAABAgAi4FcIAZAAQANAAAHgEQAIgEAEgGQADgGAAgHQAAgIgDgHQgEgFgHgEQgIgEgMAAIgaAAgAjbGlIgVgwIhCAAIgWAwIgLAAIA/iKIAGAAIA/CKgAkvFsIA7AAIgehAgAmcGlIAAiJIBLAAIAAAJIhAAAIAACAgAnBGlIAAhBIhbAAIAABBIgLAAIAAiJIALAAIAAA/IBbAAIAAg/IAKAAIAACJgAo/GlIgWgwIhCAAIgVAwIgMAAIA/iKIAGAAIA/CKgAqTFsIA6AAIgdhAgAsOGlIAAiJIAcAAQASABAKAEQALAGADAIQAEAIAAAIQAAAKgFAIQgEAHgLAGQAQADAIAJQAIAIAAAPQAAAKgGAJQgFAHgLAFQgKAFgOAAgAsEGcIAdAAQAOAAAIgFQAIgEADgGQACgGAAgHQAAgHgCgGQgEgHgJgEQgIgEgRAAIgYAAgAsEFcIAPAAQAOAAAIgEQAIgEAEgGQADgGABgIQAAgKgGgGQgEgGgJgCQgIgDgLAAIgPAAgAsmGlIgVgwIhDAAIgWAwIgKAAIA/iKIAFAAIA/CKgAt6FsIA6AAIgdhAgAwpGlIAAiJIAdAAQASABAKAEQAKAGADAIQAFAIAAAIQgBAKgFAIQgEAHgLAGQARADAHAJQAJAIgBAPQABAKgHAJQgFAHgKAFQgLAFgNAAgAweGcIAdAAQANAAAIgFQAIgEADgGQADgGAAgHQAAgHgDgGQgEgHgIgEQgJgEgRAAIgXAAgAweFcIAOAAQAOAAAJgEQAIgEADgGQAEgGAAgIQAAgKgFgGQgFgGgJgCQgIgDgLAAIgOAAgAwnDtQgCgCAAgHIAAqbQAAgHADgCQACgCAGAAIJNAAQAIAAACADQABACAAAHIAAFPIAAFMQAAAHgBACQgCACgHAAIpOAAQgHAAgCgDgAjcC9IiAmBIgBgDQgHgZgMgLQgMgMgTAAIAAgEIB8AAIAAAEQgPACgKAFQgKAFAAAVQAAAFAFAQIABAEIAAACIBjEtIABAAIBVkZQAJgdAAgOQAAgXgIgGQgKgHgQgBIAAgEIBeAAIAAAEQgOACgJAKQgKAIgGAPQgHAPgJAXQgBACgBAFIhtFkgAKFC9IkglwIAAEHQAAAiACAQQACAQAFAHQAIAPAYABIAAAFIheAAIAAgFQAQAAAJgIQAJgGAEgSQADgTAAglIAAkYIgMgQQgRgVgKgGQgKgFgPgEIAAgEIBHAAIEcFrIAAkVQAAgfgCgQQgCgPgKgKQgJgIgUgCIAAgEIBeAAIAAAEQgOACgIAFQgIAEgFANQgEAMAAAYIAAF4gAM7C4IAAgEQARgBALgKQALgLAAgZIAAlpIhKAAQgbAAgTANQgSAMgEAqIgDAAIAAhqIADAAIAHALQADAEAFACQAFADAHABIAPABID0AAQAYAAANgWIAFAAIAABqIgFAAQgCgqgTgMQgSgNgbAAIhLAAIAAFpQAAAtAoACIAAAEgACJC3IAAgEQAUAAAJgFQALgEAAgRQAAgKgFgRIgBgDIgihzIiBAAIgdBqQgFAVAAANQAAATAHAGQAIAGAMAAIAAAEIhWAAIAAgEQAUgCALgOQALgPAJgeIBolxIAbAAIBwFwQAKAcAHANQAJANAHADQAHAEAMABIAAAEgAALgGIB5AAIg+jNIgBAAg");
	mask.setTransform(0.8,5.3);

	// Layer 29
	this.instance = new lib.blik();
	this.instance.setTransform(-172.1,-16.3);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({x:182.9},13).to({_off:true},1).wait(2));

	// logotext17 copy
	this.instance_1 = new lib.logotext17();
	this.instance_1.setTransform(100.9,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(16).to({_off:false,x:112.9,alpha:0},0).wait(1).to({x:105.5,alpha:0.613},0).wait(1).to({x:102.8,alpha:0.837},0).wait(1).to({x:101.5,alpha:0.943},0).wait(1).to({x:100.9,alpha:1},0).wait(23));

	// logotext16 copy
	this.instance_2 = new lib.logotext16();
	this.instance_2.setTransform(88.9,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(15).to({_off:false,x:100.9,alpha:0},0).wait(1).to({x:93.5,alpha:0.613},0).wait(1).to({x:90.9,alpha:0.837},0).wait(1).to({x:89.6,alpha:0.943},0).wait(1).to({x:88.9,alpha:1},0).wait(24));

	// logotext15 copy
	this.instance_3 = new lib.logotext15();
	this.instance_3.setTransform(76.4,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(14).to({_off:false,x:88.4,alpha:0},0).wait(1).to({x:81,alpha:0.613},0).wait(1).to({x:78.3,alpha:0.837},0).wait(1).to({x:77,alpha:0.943},0).wait(1).to({x:76.4,alpha:1},0).wait(25));

	// logotext14 copy
	this.instance_4 = new lib.logotext14();
	this.instance_4.setTransform(61.3,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(13).to({_off:false,x:73.3,alpha:0},0).wait(1).to({x:65.9,alpha:0.613},0).wait(1).to({x:63.3,alpha:0.837},0).wait(1).to({x:62,alpha:0.943},0).wait(1).to({x:61.3,alpha:1},0).wait(26));

	// logotext13 copy
	this.instance_5 = new lib.logotext13();
	this.instance_5.setTransform(45.7,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(12).to({_off:false,x:57.7,alpha:0},0).wait(1).to({x:50.3,alpha:0.613},0).wait(1).to({x:47.7,alpha:0.837},0).wait(1).to({x:46.4,alpha:0.943},0).wait(1).to({x:45.7,alpha:1},0).wait(27));

	// logotext12 copy
	this.instance_6 = new lib.logotext12();
	this.instance_6.setTransform(33.9,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(11).to({_off:false,x:45.9,alpha:0},0).wait(1).to({x:38.5,alpha:0.613},0).wait(1).to({x:35.9,alpha:0.837},0).wait(1).to({x:34.6,alpha:0.943},0).wait(1).to({x:33.9,alpha:1},0).wait(28));

	// logotext11 copy
	this.instance_7 = new lib.logotext11();
	this.instance_7.setTransform(24.4,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(10).to({_off:false,x:36.4,alpha:0},0).wait(1).to({x:29,alpha:0.613},0).wait(1).to({x:26.3,alpha:0.837},0).wait(1).to({x:25,alpha:0.943},0).wait(1).to({x:24.4,alpha:1},0).wait(29));

	// logotext10 copy
	this.instance_8 = new lib.logotext10();
	this.instance_8.setTransform(9.6,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(9).to({_off:false,x:21.6,alpha:0},0).wait(1).to({x:14.2,alpha:0.613},0).wait(1).to({x:11.5,alpha:0.837},0).wait(1).to({x:10.2,alpha:0.943},0).wait(1).to({x:9.6,alpha:1},0).wait(30));

	// logotext09 copy
	this.instance_9 = new lib.logotext09();
	this.instance_9.setTransform(-3,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(8).to({_off:false,x:9,alpha:0},0).wait(1).to({x:1.6,alpha:0.613},0).wait(1).to({x:-1,alpha:0.837},0).wait(1).to({x:-2.3,alpha:0.943},0).wait(1).to({x:-3,alpha:1},0).wait(31));

	// logotext08 copy
	this.instance_10 = new lib.logotext08();
	this.instance_10.setTransform(-14.7,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(7).to({_off:false,x:-2.7,alpha:0},0).wait(1).to({x:-10.1,alpha:0.613},0).wait(1).to({x:-12.7,alpha:0.837},0).wait(1).to({x:-14,alpha:0.943},0).wait(1).to({x:-14.7,alpha:1},0).wait(32));

	// logotext07 copy
	this.instance_11 = new lib.logotext07();
	this.instance_11.setTransform(-26.6,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(6).to({_off:false,x:-14.6,alpha:0},0).wait(1).to({x:-22,alpha:0.613},0).wait(1).to({x:-24.7,alpha:0.837},0).wait(1).to({x:-26,alpha:0.943},0).wait(1).to({x:-26.6,alpha:1},0).wait(33));

	// logotext06 copy
	this.instance_12 = new lib.logotext06();
	this.instance_12.setTransform(-36.7,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},1).wait(5).to({_off:false,x:-24.7,alpha:0},0).wait(1).to({x:-32.1,alpha:0.613},0).wait(1).to({x:-34.8,alpha:0.837},0).wait(1).to({x:-36.1,alpha:0.943},0).wait(1).to({x:-36.7,alpha:1},0).wait(34));

	// logotext05 copy
	this.instance_13 = new lib.logotext05();
	this.instance_13.setTransform(-48.8,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},1).wait(4).to({_off:false,x:-36.8,alpha:0},0).wait(1).to({x:-44.2,alpha:0.613},0).wait(1).to({x:-46.9,alpha:0.837},0).wait(1).to({x:-48.2,alpha:0.943},0).wait(1).to({x:-48.8,alpha:1},0).wait(35));

	// logotext04 copy
	this.instance_14 = new lib.logotext04();
	this.instance_14.setTransform(-62.3,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},1).wait(3).to({_off:false,x:-50.3,alpha:0},0).wait(1).to({x:-57.7,alpha:0.613},0).wait(1).to({x:-60.3,alpha:0.837},0).wait(1).to({x:-61.6,alpha:0.943},0).wait(1).to({x:-62.3,alpha:1},0).wait(36));

	// logotext03 copy
	this.instance_15 = new lib.logotext03();
	this.instance_15.setTransform(-73.2,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},1).wait(2).to({_off:false,x:-61.2,alpha:0},0).wait(1).to({x:-68.6,alpha:0.613},0).wait(1).to({x:-71.3,alpha:0.837},0).wait(1).to({x:-72.6,alpha:0.943},0).wait(1).to({x:-73.2,alpha:1},0).wait(37));

	// logotext02 copy
	this.instance_16 = new lib.logotext02();
	this.instance_16.setTransform(-85.4,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},1).wait(1).to({_off:false,x:-73.4,alpha:0},0).wait(1).to({x:-80.8,alpha:0.613},0).wait(1).to({x:-83.4,alpha:0.837},0).wait(1).to({x:-84.7,alpha:0.943},0).wait(1).to({x:-85.4,alpha:1},0).wait(38));

	// logotext01 copy
	this.instance_17 = new lib.logotext01();
	this.instance_17.setTransform(-101.5,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({x:-89.5,alpha:0},0).wait(1).to({x:-96.9,alpha:0.613},0).wait(1).to({x:-99.5,alpha:0.837},0).wait(1).to({x:-100.8,alpha:0.943},0).wait(1).to({x:-101.5,alpha:1},0).wait(39));

	// A copy 2
	this.instance_18 = new lib.A();
	this.instance_18.setTransform(-75,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({x:153,alpha:0.199},0).wait(1).to({x:109.2,alpha:0.353},0).wait(1).to({x:74.8,alpha:0.474},0).wait(1).to({x:47.2,alpha:0.57},0).wait(1).to({x:24.9,alpha:0.649},0).wait(1).to({x:6.5,alpha:0.714},0).wait(1).to({x:-8.8,alpha:0.767},0).wait(1).to({x:-21.6,alpha:0.812},0).wait(1).to({x:-32.3,alpha:0.85},0).wait(1).to({x:-41.4,alpha:0.882},0).wait(1).to({x:-49,alpha:0.908},0).wait(1).to({x:-55.3,alpha:0.931},0).wait(1).to({x:-60.6,alpha:0.949},0).wait(1).to({x:-65,alpha:0.965},0).wait(1).to({x:-68.5,alpha:0.977},0).wait(1).to({x:-71.3,alpha:0.987},0).wait(1).to({x:-73.5,alpha:0.995},0).wait(1).to({x:-75,alpha:1},0).wait(26));

	// Tile copy
	this.instance_19 = new lib.Tile();
	this.instance_19.setTransform(-75.2,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:152.8},0).wait(1).to({x:109},0).wait(1).to({x:74.6},0).wait(1).to({x:47},0).wait(1).to({x:24.7},0).wait(1).to({x:6.3},0).wait(1).to({x:-9},0).wait(1).to({x:-21.8},0).wait(1).to({x:-32.5},0).wait(1).to({x:-41.6},0).wait(1).to({x:-49.2},0).wait(1).to({x:-55.5},0).wait(1).to({x:-60.8},0).wait(1).to({x:-65.2},0).wait(1).to({x:-68.7},0).wait(1).to({x:-71.5},0).wait(1).to({x:-73.7},0).wait(1).to({x:-75.2},0).wait(26));

	// AvantT copy
	this.instance_20 = new lib.AvantT();
	this.instance_20.setTransform(89.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({x:33.5,alpha:0},0).wait(1).to({x:55.7,alpha:0.398},0).wait(1).to({x:68.8,alpha:0.632},0).wait(1).to({x:77.1,alpha:0.78},0).wait(1).to({x:82.5,alpha:0.877},0).wait(1).to({x:86.1,alpha:0.94},0).wait(1).to({x:88.3,alpha:0.979},0).wait(1).to({x:89.5,alpha:1},0).wait(36));

	// AvantN copy
	this.instance_21 = new lib.AvantN();
	this.instance_21.setTransform(49.3,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},1).wait(3).to({_off:false,x:-6.7,alpha:0},0).wait(1).to({x:15.5,alpha:0.398},0).wait(1).to({x:28.6,alpha:0.632},0).wait(1).to({x:36.9,alpha:0.78},0).wait(1).to({x:42.3,alpha:0.877},0).wait(1).to({x:45.9,alpha:0.94},0).wait(1).to({x:48.1,alpha:0.979},0).wait(1).to({x:49.3,alpha:1},0).wait(33));

	// AvantA copy
	this.instance_22 = new lib.AvantA();
	this.instance_22.setTransform(9.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true},1).wait(6).to({_off:false,x:-46.4,alpha:0},0).wait(1).to({x:-24.2,alpha:0.398},0).wait(1).to({x:-11.1,alpha:0.632},0).wait(1).to({x:-2.8,alpha:0.78},0).wait(1).to({x:2.6,alpha:0.877},0).wait(1).to({x:6.2,alpha:0.94},0).wait(1).to({x:8.4,alpha:0.979},0).wait(1).to({x:9.6,alpha:1},0).wait(30));

	// AvantV copy
	this.instance_23 = new lib.AvantV();
	this.instance_23.setTransform(-21.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:true},1).wait(9).to({_off:false,x:-77.7,alpha:0},0).wait(1).to({x:-55.5,alpha:0.398},0).wait(1).to({x:-42.4,alpha:0.632},0).wait(1).to({x:-34.1,alpha:0.78},0).wait(1).to({x:-28.7,alpha:0.877},0).wait(1).to({x:-25.1,alpha:0.94},0).wait(1).to({x:-22.9,alpha:0.979},0).wait(1).to({x:-21.7,alpha:1},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,-54,218.8,108);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btn = new lib.button();

	this.instance = new lib.buttonHit();
	this.instance.setTransform(0,0,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.btn,p:{scaleX:1.08,scaleY:1.08}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.btn,p:{scaleX:1,scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,-27.8,199.8,55.6);


(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_393 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.btn.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://apt.avantrem.ru/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(393).call(this.frame_393).wait(151));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_426 = new cjs.Graphics().p("AmGKRQiiiiAAjlQAAjmCiigQCiiiDkAAQDlAACiCiQCiCgAADmQAADliiCiQiiCijlAAQjkAAiiiig");
	var mask_graphics_505 = new cjs.Graphics().p("AmGKRQiiiiAAjlQAAjmCiigQCiiiDkAAQDlAACiCiQCiCgAADmQAADliiCiQiiCijlAAQjkAAiiiig");
	var mask_graphics_506 = new cjs.Graphics().p("AmLKTQikikAAjpQAAjoCkiiQCkilDnAAQDoAACkClQCkCiAADoQAADpikCkQikCkjoAAQjnAAikikg");
	var mask_graphics_507 = new cjs.Graphics().p("AmUKWQioioAAjuQAAjuCoimQCoioDsAAQDuAACnCoQCoCmAADuQAADuioCoQinCojuAAQjsAAioiog");
	var mask_graphics_508 = new cjs.Graphics().p("AmaKXQiqiqAAjxQAAjxCqioQCrirDvAAQDwAACrCrQCqCoAADxQAADxiqCqQirCqjwAAQjvAAiriqg");
	var mask_graphics_509 = new cjs.Graphics().p("AmYKWQipipAAjwQAAjwCpinQCqiqDuAAQDvAACqCqQCpCnAADwQAADwipCpQiqCqjvAAQjuAAiqiqg");
	var mask_graphics_510 = new cjs.Graphics().p("AmRKUQimimAAjsQAAjsCmikQCninDqAAQDrAACnCnQCmCkAADsQAADsimCmQinCnjrAAQjqAAining");
	var mask_graphics_511 = new cjs.Graphics().p("AmCKQQigigAAjkQAAjjCgieQCgigDiAAQDjAACgCgQCgCeAADjQAADkigCgQigCgjjAAQjiAAigigg");
	var mask_graphics_512 = new cjs.Graphics().p("AlnKIQiWiVAAjUQAAjTCWiUQCViVDSAAQDTAACVCVQCWCUAADTQAADUiWCVQiVCVjTAAQjSAAiViVg");
	var mask_graphics_513 = new cjs.Graphics().p("Ak7J7QiDiDAAi5QAAi6CDiDQCDiAC4AAQC5AACDCAQCDCDAAC6QAAC5iDCDQiDCDi5AAQi4AAiDiDg");
	var mask_graphics_514 = new cjs.Graphics().p("AjAJkQhjhiAAiMQAAiLBjhjQBihiCKAAQCLAABjBiQBiBjAACLQAACMhiBiQhjBjiLAAQiKAAhihjg");
	var mask_graphics_515 = new cjs.Graphics().p("ACRIqQgQgQAAgXQAAgXAQgQQAQgRAXAAQAXAAAQARQAQAQAAAXQAAAXgQAQQgQAQgXAAQgXAAgQgQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(426).to({graphics:mask_graphics_426,x:42.5,y:82}).wait(79).to({graphics:mask_graphics_505,x:42.5,y:82}).wait(1).to({graphics:mask_graphics_506,x:42.5,y:82.3}).wait(1).to({graphics:mask_graphics_507,x:42.5,y:83}).wait(1).to({graphics:mask_graphics_508,x:42.5,y:83.3}).wait(1).to({graphics:mask_graphics_509,x:42.5,y:83.2}).wait(1).to({graphics:mask_graphics_510,x:42.5,y:82.7}).wait(1).to({graphics:mask_graphics_511,x:42.5,y:81.7}).wait(1).to({graphics:mask_graphics_512,x:42.5,y:79.8}).wait(1).to({graphics:mask_graphics_513,x:42.5,y:76.6}).wait(1).to({graphics:mask_graphics_514,x:38.1,y:71.1}).wait(1).to({graphics:mask_graphics_515,x:24,y:57.1}).wait(1).to({graphics:null,x:0,y:0}).wait(28));

	// Custom
	this.instance = new lib.Customer();
	this.instance.setTransform(137.8,129.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(432).to({_off:false},0).wait(1).to({regX:0.7,regY:0.7,x:99.5,y:130.5,alpha:0.406},0).wait(1).to({x:77.4,alpha:0.637},0).wait(1).to({x:64.2,alpha:0.774},0).wait(1).to({x:55.7,alpha:0.862},0).wait(1).to({x:50.1,alpha:0.921},0).wait(1).to({x:46.4,alpha:0.96},0).wait(1).to({x:44.1,alpha:0.983},0).wait(1).to({x:42.9,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:41.9,y:129.8,alpha:1},0).wait(65).to({regX:0.7,regY:0.7,scaleX:1.01,scaleY:1.01,x:42.6,y:130.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:131.3},0).wait(1).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:41.8,y:130.8},0).wait(1).to({regX:0.7,regY:0.7,scaleX:1.05,scaleY:1.05,x:42.6,y:131.5,alpha:0.995},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:42.5,y:131,alpha:0.976},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:130.2,alpha:0.936},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:128.7,alpha:0.865},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:126.2,alpha:0.745},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:42.6,y:121.9,alpha:0.535},0).wait(1).to({regX:0.5,regY:0.5,scaleX:0.1,scaleY:0.1,x:42.5,y:110.8,alpha:0},0).to({_off:true},1).wait(28));

	// Every
	this.instance_1 = new lib.Every();
	this.instance_1.setTransform(138.1,110.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(430).to({_off:false},0).wait(1).to({regX:0.7,regY:1.9,x:99.9,y:112.8,alpha:0.406},0).wait(1).to({x:77.7,alpha:0.637},0).wait(1).to({x:64.6,alpha:0.774},0).wait(1).to({x:56.1,alpha:0.862},0).wait(1).to({x:50.5,alpha:0.921},0).wait(1).to({x:46.8,alpha:0.96},0).wait(1).to({x:44.5,alpha:0.983},0).wait(1).to({x:43.3,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:42.2,y:110.9,alpha:1},0).wait(67).to({regX:0.7,regY:1.9,scaleX:1.01,scaleY:1.01,x:42.9,y:112.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:43,y:112.9},0).wait(1).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:42.2,y:111},0).wait(1).to({regX:0.7,regY:1.9,scaleX:1.05,scaleY:1.05,x:43,y:112.9,alpha:0.995},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:42.9,alpha:0.976},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:112.7,alpha:0.936},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:112.4,alpha:0.865},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:42.8,y:112,alpha:0.745},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:111.1,alpha:0.535},0).wait(1).to({regX:0,regY:0.5,scaleX:0.1,scaleY:0.1,x:42.5,y:108.9,alpha:0},0).to({_off:true},1).wait(28));

	// Gift
	this.instance_2 = new lib.Gift();
	this.instance_2.setTransform(137.7,91.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(428).to({_off:false},0).wait(1).to({regX:0.8,regY:1.9,x:99.6,y:93.6,alpha:0.406},0).wait(1).to({x:77.4,alpha:0.637},0).wait(1).to({x:64.3,alpha:0.774},0).wait(1).to({x:55.8,alpha:0.862},0).wait(1).to({x:50.2,alpha:0.921},0).wait(1).to({x:46.5,alpha:0.96},0).wait(1).to({x:44.2,alpha:0.983},0).wait(1).to({x:43,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:41.8,y:91.7,alpha:1},0).wait(69).to({regX:0.8,regY:1.9,scaleX:1.01,scaleY:1.01,x:42.6,y:93.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:42.7,y:93},0).wait(1).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:41.8,y:90.8},0).wait(1).to({regX:0.8,regY:1.9,scaleX:1.05,scaleY:1.05,x:42.6,y:92.8,alpha:0.995},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:93.1,alpha:0.976},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:93.7,alpha:0.936},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:94.7,alpha:0.865},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:96.4,alpha:0.745},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:99.4,alpha:0.535},0).wait(1).to({regX:0.5,regY:0,scaleX:0.1,scaleY:0.1,x:42.5,y:106.9,alpha:0},0).to({_off:true},1).wait(28));

	// Round
	this.instance_3 = new lib.Round();
	this.instance_3.setTransform(42.5,108.6,3.22,3.22);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(416).to({_off:false},0).to({scaleX:0.95,scaleY:0.95,alpha:1},7).to({scaleX:1,scaleY:1},3).wait(80).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.995},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.976},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.936},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.865},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.745},0).wait(1).to({scaleX:0.61,scaleY:0.61,alpha:0.535},0).wait(1).to({regX:0.5,scaleX:0.1,scaleY:0.1,alpha:0},0).to({_off:true},1).wait(28));

	// Button
	this.btn = new lib.btn();
	this.btn.setTransform(0.2,-7.2,0.1,0.1);
	this.btn.alpha = 0;
	this.btn._off = true;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(393).to({_off:false},0).wait(1).to({scaleX:0.15,scaleY:0.15,alpha:0.057},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.202},0).wait(1).to({scaleX:0.48,scaleY:0.48,alpha:0.397},0).wait(1).to({scaleX:0.68,scaleY:0.68,alpha:0.609},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.803},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.945},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:-7.1,alpha:1},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(103).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:-7.2,alpha:0.995},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.976},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.936},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.865},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.745},0).wait(1).to({scaleX:0.61,scaleY:0.61,alpha:0.535},0).wait(1).to({scaleX:0.1,scaleY:0.1,alpha:0},0).to({_off:true},1).wait(28));

	// Zamer
	this.instance_4 = new lib.Zamer();
	this.instance_4.setTransform(-0.2,-31.5,0.1,0.1,0,0,0,-0.5,-0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(323).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.14,scaleY:0.14,x:-0.1,alpha:0.074},0).wait(1).to({scaleX:0.25,scaleY:0.25,y:-31.4,alpha:0.259},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:0,y:-31.3,alpha:0.5},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:0.1,alpha:0.741},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:-31.2,alpha:0.926},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-0.2,y:-31.5,alpha:1},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.63,scaleY:0.63},0).wait(51).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.68,scaleY:0.68},0).wait(1).to({scaleX:0.67,scaleY:0.67,alpha:0.99},0).wait(1).to({scaleX:0.66,scaleY:0.66,alpha:0.957},0).wait(1).to({scaleX:0.62,scaleY:0.62,alpha:0.889},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.77},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.555},0).wait(1).to({regX:-0.5,regY:-0.5,scaleX:0.1,scaleY:0.1,alpha:0},0).to({_off:true},1).wait(152));

	// free
	this.instance_5 = new lib.TextFive();
	this.instance_5.setTransform(119.4,40.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(327).to({_off:false},0).wait(1).to({regX:0.6,regY:-2.1,x:82.6,y:38.5,alpha:0.315},0).wait(1).to({x:54.8,alpha:0.548},0).wait(1).to({x:36.6,alpha:0.701},0).wait(1).to({x:24.2,alpha:0.805},0).wait(1).to({x:15.6,alpha:0.878},0).wait(1).to({x:9.5,alpha:0.928},0).wait(1).to({x:5.4,alpha:0.963},0).wait(1).to({x:2.8,alpha:0.985},0).wait(1).to({x:1.4,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0.4,y:40.6,alpha:1},0).wait(48).to({regX:0.6,regY:-2.1,x:0.5,y:38.5,alpha:0.996},0).wait(1).to({x:-1.2,alpha:0.983},0).wait(1).to({x:-4.3,alpha:0.96},0).wait(1).to({x:-9.2,alpha:0.923},0).wait(1).to({x:-16.5,alpha:0.868},0).wait(1).to({x:-27,alpha:0.789},0).wait(1).to({x:-42.5,alpha:0.673},0).wait(1).to({x:-67.4,alpha:0.485},0).wait(1).to({regX:0,regY:0,x:-132.6,y:40.6,alpha:0},0).to({_off:true},1).wait(150));

	// do10let
	this.instance_6 = new lib.TextThreeTwo();
	this.instance_6.setTransform(119.7,48.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(261).to({_off:false},0).wait(1).to({regX:0.1,regY:0.6,x:82.4,y:49.2,alpha:0.315},0).wait(1).to({x:54.6,alpha:0.548},0).wait(1).to({x:36.4,alpha:0.701},0).wait(1).to({x:24,alpha:0.805},0).wait(1).to({x:15.4,alpha:0.878},0).wait(1).to({x:9.3,alpha:0.928},0).wait(1).to({x:5.2,alpha:0.963},0).wait(1).to({x:2.6,alpha:0.985},0).wait(1).to({x:1.2,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0.7,y:48.6,alpha:1},0).wait(48).to({regX:0.1,regY:0.6,x:0.3,y:49.2,alpha:0.996},0).wait(1).to({x:-1.4,alpha:0.983},0).wait(1).to({x:-4.5,alpha:0.96},0).wait(1).to({x:-9.4,alpha:0.923},0).wait(1).to({x:-16.7,alpha:0.868},0).wait(1).to({x:-27.2,alpha:0.789},0).wait(1).to({x:-42.7,alpha:0.673},0).wait(1).to({x:-67.6,alpha:0.485},0).wait(1).to({regX:0,regY:0,x:-132.3,y:48.6,alpha:0},0).to({_off:true},1).wait(216));

	// na raboty
	this.instance_7 = new lib.TextThreeOne();
	this.instance_7.setTransform(119.6,26.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(258).to({_off:false},0).wait(1).to({regX:0.1,regY:-0.2,x:82.3,y:26.5,alpha:0.315},0).wait(1).to({x:54.5,alpha:0.548},0).wait(1).to({x:36.3,alpha:0.701},0).wait(1).to({x:23.9,alpha:0.805},0).wait(1).to({x:15.3,alpha:0.878},0).wait(1).to({x:9.2,alpha:0.928},0).wait(1).to({x:5.1,alpha:0.963},0).wait(1).to({x:2.5,alpha:0.985},0).wait(1).to({x:1.1,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0.6,y:26.7,alpha:1},0).wait(48).to({regX:0.1,regY:-0.2,x:0.2,y:26.5,alpha:0.996},0).wait(1).to({x:-1.5,alpha:0.983},0).wait(1).to({x:-4.6,alpha:0.96},0).wait(1).to({x:-9.5,alpha:0.923},0).wait(1).to({x:-16.8,alpha:0.868},0).wait(1).to({x:-27.3,alpha:0.789},0).wait(1).to({x:-42.8,alpha:0.673},0).wait(1).to({x:-67.7,alpha:0.485},0).wait(1).to({regX:0,regY:0,x:-132.4,y:26.7,alpha:0},0).to({_off:true},1).wait(219));

	// Garant
	this.instance_8 = new lib.Garant();
	this.instance_8.setTransform(5.8,-30.8,0.1,0.1,0,0,0,0.5,-0.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(256).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.14,scaleY:0.14,x:5.7,y:-30.7,alpha:0.074},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:5.6,alpha:0.259},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:-30.6,alpha:0.5},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:5.5,y:-30.5,alpha:0.741},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.926},0).wait(1).to({regY:-0.1,scaleX:0.63,scaleY:0.63,x:5.8,y:-30.7,alpha:1},0).wait(1).to({regY:0,scaleX:0.62,scaleY:0.62},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({regY:-0.1,scaleX:0.58,scaleY:0.58,y:-30.8},0).wait(48).to({scaleX:0.63,scaleY:0.63,y:-30.7},3).wait(1).to({regY:0,scaleX:0.62,scaleY:0.62,x:5.7,alpha:0.983},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.932},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.843},0).wait(1).to({scaleX:0.48,scaleY:0.48,alpha:0.707},0).wait(1).to({scaleX:0.36,scaleY:0.36,alpha:0.493},0).wait(1).to({regX:0.5,regY:-0.5,scaleX:0.1,scaleY:0.1,x:5.8,y:-30.8,alpha:0},0).to({_off:true},1).wait(221));

	// 1980
	this.instance_9 = new lib.TextTwoPrice();
	this.instance_9.setTransform(119.5,20.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(191).to({_off:false},0).wait(1).to({regX:3.3,regY:-0.9,x:85.3,y:19.3,alpha:0.313},0).wait(1).to({x:57.6,alpha:0.545},0).wait(1).to({x:39.4,alpha:0.698},0).wait(1).to({x:27,alpha:0.802},0).wait(1).to({x:18.3,alpha:0.874},0).wait(1).to({x:12.3,alpha:0.924},0).wait(1).to({x:8.2,alpha:0.959},0).wait(1).to({regX:0,regY:0,x:2.3,y:20.2,alpha:0.98},0).wait(1).to({regX:3.3,regY:-0.9,x:4.2,y:19.3,alpha:0.995},0).wait(1).to({regX:0,regY:0,x:0.5,y:20.2,alpha:1},0).wait(49).to({regX:3.3,regY:-0.9,x:3.3,y:19.3,alpha:0.996},0).wait(1).to({x:1.6,alpha:0.983},0).wait(1).to({x:-1.5,alpha:0.96},0).wait(1).to({x:-6.5,alpha:0.923},0).wait(1).to({x:-13.7,alpha:0.868},0).wait(1).to({x:-24.2,alpha:0.789},0).wait(1).to({x:-39.7,alpha:0.673},0).wait(1).to({x:-64.7,alpha:0.485},0).wait(1).to({regX:0,regY:0,x:-132.5,y:20.2,alpha:0},0).to({_off:true},1).wait(285));

	// Kvart
	this.instance_10 = new lib.TextTwoKvart();
	this.instance_10.setTransform(119.3,-6.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(189).to({_off:false},0).wait(1).to({regX:0.7,regY:-0.3,x:82.5,y:-6.6,alpha:0.315},0).wait(1).to({x:54.8,alpha:0.548},0).wait(1).to({x:36.6,alpha:0.701},0).wait(1).to({x:24.1,alpha:0.805},0).wait(1).to({x:15.5,alpha:0.878},0).wait(1).to({x:9.5,alpha:0.928},0).wait(1).to({x:5.4,alpha:0.963},0).wait(1).to({x:2.8,alpha:0.985},0).wait(1).to({x:1.4,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0.3,y:-6.3,alpha:1},0).wait(48).to({regX:0.7,regY:-0.3,x:0.5,y:-6.6,alpha:0.996},0).wait(1).to({x:-1.2,alpha:0.983},0).wait(1).to({x:-4.3,alpha:0.96},0).wait(1).to({x:-9.3,alpha:0.923},0).wait(1).to({x:-16.5,alpha:0.868},0).wait(1).to({x:-27,alpha:0.789},0).wait(1).to({x:-42.5,alpha:0.673},0).wait(1).to({x:-67.5,alpha:0.485},0).wait(1).to({regX:0,regY:0,x:-132.7,y:-6.3,alpha:0},0).to({_off:true},1).wait(288));

	// 43900
	this.instance_11 = new lib.TextBathFour();
	this.instance_11.setTransform(134.8,46.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(123).to({_off:false},0).wait(1).to({regX:2.9,regY:2.6,x:95.4,y:48.7,alpha:0.315},0).wait(1).to({x:64.1,alpha:0.548},0).wait(1).to({x:43.5,alpha:0.701},0).wait(1).to({x:29.4,alpha:0.805},0).wait(1).to({x:19.7,alpha:0.878},0).wait(1).to({x:12.9,alpha:0.928},0).wait(1).to({x:8.3,alpha:0.963},0).wait(1).to({x:5.3,alpha:0.985},0).wait(1).to({x:3.7,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:0.4,y:46.1,alpha:1},0).wait(48).to({regX:2.9,regY:2.6,x:2.8,y:48.7,alpha:0.996},0).wait(1).to({x:1.1,alpha:0.983},0).wait(1).to({x:-2,alpha:0.96},0).wait(1).to({x:-7,alpha:0.923},0).wait(1).to({x:-14.2,alpha:0.868},0).wait(1).to({x:-24.7,alpha:0.789},0).wait(1).to({x:-40.2,alpha:0.673},0).wait(1).to({x:-65.2,alpha:0.485},0).wait(1).to({regX:0,regY:0,x:-132.6,y:46.1,alpha:0},0).to({_off:true},1).wait(354));

	// Key
	this.instance_12 = new lib.TextBathThree();
	this.instance_12.setTransform(134.9,20.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(119).to({_off:false},0).wait(1).to({regY:0.7,x:92.6,y:20.8,alpha:0.315},0).wait(1).to({x:61.3,alpha:0.548},0).wait(1).to({x:40.7,alpha:0.701},0).wait(1).to({x:26.6,alpha:0.805},0).wait(1).to({x:16.9,alpha:0.878},0).wait(1).to({x:10.1,alpha:0.928},0).wait(1).to({x:5.5,alpha:0.963},0).wait(1).to({x:2.5,alpha:0.985},0).wait(1).to({x:0.9,alpha:0.996},0).wait(1).to({regY:0,x:0.5,y:20.1,alpha:1},0).wait(48).to({regY:0.7,x:0,y:20.8,alpha:0.996},0).wait(1).to({x:-1.7,alpha:0.983},0).wait(1).to({x:-4.8,alpha:0.96},0).wait(1).to({x:-9.8,alpha:0.923},0).wait(1).to({x:-17,alpha:0.868},0).wait(1).to({x:-27.5,alpha:0.789},0).wait(1).to({x:-43,alpha:0.673},0).wait(1).to({x:-68,alpha:0.485},0).wait(1).to({regY:0,x:-132.5,y:20.1,alpha:0},0).to({_off:true},1).wait(358));

	// Vann
	this.instance_13 = new lib.TextBathTwo();
	this.instance_13.setTransform(134.2,-7.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(115).to({_off:false},0).wait(1).to({regX:0.6,regY:-0.2,x:92.5,y:-7.5,alpha:0.315},0).wait(1).to({x:61.2,alpha:0.548},0).wait(1).to({x:40.6,alpha:0.701},0).wait(1).to({x:26.6,alpha:0.805},0).wait(1).to({x:16.8,alpha:0.878},0).wait(1).to({x:10,alpha:0.928},0).wait(1).to({x:5.4,alpha:0.963},0).wait(1).to({x:2.5,alpha:0.985},0).wait(1).to({x:0.9,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:-0.2,y:-7.3,alpha:1},0).wait(48).to({regX:0.6,regY:-0.2,x:-0.1,y:-7.5,alpha:0.996},0).wait(1).to({x:-1.8,alpha:0.983},0).wait(1).to({x:-4.9,alpha:0.96},0).wait(1).to({x:-9.8,alpha:0.923},0).wait(1).to({x:-17.1,alpha:0.868},0).wait(1).to({x:-27.6,alpha:0.789},0).wait(1).to({x:-43.1,alpha:0.673},0).wait(1).to({x:-68,alpha:0.485},0).wait(1).to({regX:0,regY:0,x:-133.2,y:-7.3,alpha:0},0).to({_off:true},1).wait(362));

	// Remont
	this.instance_14 = new lib.textBathOne();
	this.instance_14.setTransform(133.9,-33.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(112).to({_off:false},0).wait(1).to({regX:0.6,regY:-0.2,x:92.2,y:-33.3,alpha:0.315},0).wait(1).to({x:60.9,alpha:0.548},0).wait(1).to({x:40.3,alpha:0.701},0).wait(1).to({x:26.3,alpha:0.805},0).wait(1).to({x:16.5,alpha:0.878},0).wait(1).to({x:9.7,alpha:0.928},0).wait(1).to({x:5.1,alpha:0.963},0).wait(1).to({x:2.2,alpha:0.985},0).wait(1).to({x:0.6,alpha:0.996},0).wait(1).to({regX:0,regY:0,x:-0.5,y:-33.1,alpha:1},0).wait(122).to({regX:0.6,regY:-0.2,x:-0.4,y:-33.3,alpha:0.996},0).wait(1).to({x:-2.1,alpha:0.983},0).wait(1).to({x:-5.2,alpha:0.96},0).wait(1).to({x:-10.1,alpha:0.923},0).wait(1).to({x:-17.4,alpha:0.868},0).wait(1).to({x:-27.9,alpha:0.789},0).wait(1).to({x:-43.4,alpha:0.673},0).wait(1).to({x:-68.3,alpha:0.485},0).wait(1).to({regX:0,regY:0,x:-133.5,y:-33.1,alpha:0},0).to({_off:true},1).wait(291));

	// redBG
	this.instance_15 = new lib.redBG();
	this.instance_15.setTransform(-436.8,29.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(75).to({_off:false},0).wait(451).to({regX:456.1,regY:-37.9,x:19.3,y:-9.3},0).wait(1).to({y:-10.6},0).wait(1).to({y:-12.3},0).wait(1).to({y:-14},0).wait(1).to({y:-15.3},0).wait(1).to({regX:0,regY:0,x:-436.8,y:22.1},0).wait(1).to({regX:456.1,regY:-37.9,x:19.3,y:-15.6},0).wait(1).to({y:-14.3},0).wait(1).to({y:-11.1},0).wait(1).to({y:-5.3},0).wait(1).to({y:4},0).wait(1).to({y:17.6},0).wait(1).to({y:37},0).wait(1).to({y:63.8},0).wait(1).to({y:101.1},0).wait(1).to({y:153.9},0).wait(1).to({y:233.9},0).wait(1).to({regX:0,regY:0,x:-436.8,y:421.1},0).wait(1));

	// Disclamer2
	this.instance_16 = new lib.DiscWhite();
	this.instance_16.setTransform(0.5,182);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(189).to({_off:false},0).to({alpha:1},12).wait(59).to({alpha:0},11).to({_off:true},1).wait(272));

	// Disclamer
	this.instance_17 = new lib.discBlack();
	this.instance_17.setTransform(0.5,182);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(122).to({_off:false},0).to({alpha:1},8).wait(59).to({alpha:0},12).to({_off:true},1).wait(342));

	// room
	this.instance_18 = new lib.room_1();
	this.instance_18.setTransform(-0.7,103);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(189).to({_off:false},0).to({alpha:1},12).to({y:154},323).wait(2).to({y:153.3},0).wait(1).to({y:151.4},0).wait(1).to({y:149},0).wait(1).to({y:146.6},0).wait(1).to({y:144.7},0).wait(1).to({y:144},0).wait(1).to({y:144.2},0).wait(1).to({y:145.5},0).wait(1).to({y:148.7},0).wait(1).to({y:154.5},0).wait(1).to({y:163.7},0).wait(1).to({y:177.4},0).wait(1).to({y:196.7},0).wait(1).to({y:223.4},0).wait(1).to({y:260.6},0).wait(1).to({y:313.3},0).wait(1).to({y:393.1},0).wait(1).to({y:542},0).wait(1));

	// Bath
	this.instance_19 = new lib.bath_1();
	this.instance_19.setTransform(-0.7,125);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(101).to({_off:false},0).to({alpha:1},11).wait(89).to({_off:true},1).wait(342));

	// logo
	this.instance_20 = new lib.Logo();
	this.instance_20.setTransform(0,-32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},1).wait(9).to({_off:false},0).wait(56).to({regX:38.7,regY:5.3,scaleX:0.99,scaleY:0.99,x:38.4,y:-29.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:37.8,y:-35.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:36.7,y:-45.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:35.4,y:-58.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:34,y:-72},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:32.5,y:-86.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:31,y:-99.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:29.7,y:-112.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:28.6,y:-123.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:27.6,y:-132.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:26.8,y:-140.6},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:26.1,y:-146.7},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:25.7,y:-151.4},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:25.3,y:-154.6},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.65,scaleY:0.65,x:-0.1,y:-159.9},0).wait(13).to({regX:38.7,regY:5.3,x:23.9,y:-156.4},0).wait(1).to({x:20.8},0).wait(1).to({x:16.4},0).wait(1).to({x:11.3},0).wait(1).to({x:5.9},0).wait(1).to({x:0.7},0).wait(1).to({x:-4},0).wait(1).to({x:-7.8},0).wait(1).to({x:-10.3},0).wait(1).to({regX:-0.1,regY:0,x:-36.5,y:-159.9},0).wait(424).to({regX:38.7,regY:5.3,x:-11.3,y:-156.9},0).wait(1).to({y:-158.2},0).wait(1).to({y:-159.9},0).wait(1).to({y:-161.6},0).wait(1).to({y:-162.9},0).wait(1).to({regX:-0.1,regY:0,x:-36.5,y:-166.9},0).wait(1).to({regX:38.7,regY:5.3,x:-11.3,y:-163.2},0).wait(1).to({y:-161.9},0).wait(1).to({y:-158.7},0).wait(1).to({y:-152.9},0).wait(1).to({y:-143.6},0).wait(1).to({y:-130},0).wait(1).to({y:-110.6},0).wait(1).to({y:-83.8},0).wait(1).to({y:-46.5},0).wait(1).to({y:6.3},0).wait(1).to({y:86.2},0).wait(1).to({regX:-0.1,regY:0,x:-36.5,y:232.1},0).wait(1));

	// Legal
	this.instance_21 = new lib.Legal();
	this.instance_21.setTransform(1,172.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({y:212.5,alpha:0},0).wait(1).to({y:196.1,alpha:0.411},0).wait(1).to({y:186.6,alpha:0.648},0).wait(1).to({y:180,alpha:0.812},0).wait(1).to({y:175.5,alpha:0.926},0).wait(1).to({y:172.5,alpha:1},0).wait(99).to({alpha:0},7).to({_off:true},1).wait(431));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.9,-72.1,213.3,267.1);


// stage content:



(lib.avant_240_400_yandex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://apt.avantrem.ru/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// movie
	this.instance = new lib.movie();
	this.instance.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.btn = new lib.btt();
	this.btn.setTransform(120,200);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btt(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// bg
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119,199,242,402);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;