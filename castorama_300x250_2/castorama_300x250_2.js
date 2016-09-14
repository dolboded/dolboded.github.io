(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"gurl.png", id:"gurl"},
		{src:"wall.jpg", id:"wall"}
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



(lib.gurl = function() {
	this.initialize(img.gurl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,289);


(lib.wall = function() {
	this.initialize(img.wall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,343);


(lib.wall_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wall();
	this.instance.setTransform(599,-172,1,1,0,0,180);

	this.instance_1 = new lib.wall();
	this.instance_1.setTransform(-200,-172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-172,799,343);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D7").s().p("Au9BIIAAgaIhOAAIAAAaIggAAIAAg4IAQAAIAihVIArAAIAhBVIAQAAIAAA4gAv4AQIAnAAIgTg5gAn/AfQgRgRAAgZQAAgaARgRQATgRAbAAQAbAAARARQASARAAAaQAAAZgSARQgRARgbAAQgbAAgTgRgAnnghQgIAJAAANQAAAMAIAIQAJAKANAAQAMAAAJgKQAJgIAAgMQAAgNgJgJQgIgIgNAAQgNAAgJAIgAQLAvIAAgvIgsAAIAAAvIghAAIAAh0IAhAAIAAArIAsAAIAAgrIAhAAIAAB0gAMsAvIAAhFIghAtIgFAAIgggtIAABFIghAAIAAh0IAiAAIAjAvIAhgvIAhAAIAAB0gAH3AvIAAh0IA9AAQAUAAAKAMQAKALAAASQAAARgKAKQgKAKgUAAIgcAAIAAAmgAIXgRIAYAAIAAgBQANAAAAgLQAAgKgNAAIgYAAgAFmAvIAAhXIgrAAIAABXIggAAIAAh0IBqAAIAAB0gAp5AvIAAh0IBbAAIAAAdIg7AAIAAAQIAbAAQAUAAAMALQAKAKAAAMQAAARgKAKQgMALgUAAgApYAUIAYAAIAAgBQAMAAAAgKQAAgIgMAAIgYAAgANdAuIAAhzIBVAAIAAAdIg2AAIAAAPIAsAAIAAAaIgsAAIAAARIA2AAIAAAcgAJjAuIAAhzIBVAAIAAAdIg0AAIAAAPIAqAAIAAAaIgpAAIAAARIA1AAIAAAcgAGVAuIAAhzIBVAAIAAAdIg1AAIAAAPIArAAIAAAaIgrAAIAAARIA1AAIAAAcgADCAuIgXgmIgWAmIgmAAIAmg6Igjg5IAlAAIAUAkIAUgkIAmAAIgkA4IAnA7gABKAuIAAg/IgrA/IgfAAIAAhzIAeAAIAABDIAqhDIAiAAIAABzgAiqAuIAAhzIAgAAIAABXIAdAAIAAhXIAgAAIAABXIAdAAIAAhXIAgAAIAABzgAkWAuIAAhzIAgAAIAAAkIAcAAQASAAAMAMQALALAAAQQAAARgLALQgMAMgSAAgAj2ASIAWAAQANAAAAgMQAAgKgNAAIgWAAgAlBAuIgZhSIgaBSIglAAIAqhzIAqAAIApBzgArWAuIAAgmIgOAAIgRAmIgkAAIAVgpQgVgIAAgaQgBgSAMgKQALgMAXAAIA4AAIAABzgAr0glQgEADgBAEQAAALAOAAIAVAAIAAgVIgVAAQgFAAgEADgAtBAuIgahSIgaBSIglAAIAphzIAsAAIApBzg");
	this.shape.setTransform(116.5,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0078D7").s().p("AksCIIAAgyIitAAIAAjdIA9AAIAAClIBQAAIAAilIA9AAIAAClIAfAAIAABqgAGdBVIAAjcIA9AAIAADcgADJBVIAAjcIA+AAIAABEIA1AAQAkAAAVAXQAVAVAAAgQAAAggVAVQgVAXgkAAgAEHAeIArAAQALAAAHgFQAHgGAAgLQAAgJgHgFQgHgGgLAAIgrAAgABtBVIAAhVIhVAAIAABVIg6AAIAAjcIA6AAIAABRIBVAAIAAhRIA9AAIAADcgAjdBVIAAjcICiAAIAAA2IhlAAIAAAdIBTAAIAAA0IhTAAIAAAeIBlAAIAAA3g");
	this.shape_1.setTransform(175.4,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0078D7").s().p("AiNBpQgVgHgVgSIAfgsQAeAYAiAAQASAAALgHQAIgFAAgJQAAgIgGgDQgGgEgQAAIgxAAIAAgzIAwAAQAbAAAAgNQAAgTglAAQgOAAgPAFQgPAGgMAKIghgsQAoggA4AAQAsAAAZASQAWARAAAbQAAAkgiAOQATAEAJAMQALANAAARQAAAegZAUQgbAUgrABQgiAAgZgKgAHkBuIAAjbICiAAIAAA2IhkAAIAAAcIBSAAIAAA0IhSAAIAAAfIBkAAIAAA2gAGHBuIAAh6IhRB6IhAAAIAAjbIA9AAIAAB8IBQh8IBBAAIAADbgACiBuIgyhSIgQAWIAAA8Ig9AAIAAjbIA9AAIAABbIA+hbIBMAAIhTBmIBWB1gAkEBuIAAh6IhSB6IhAAAIAAjbIA9AAIAAB8IBSh8IBAAAIAADbgAnzBuIAAhWIhVAAIAABWIg9AAIAAjbIA9AAIAABQIBVAAIAAhQIA+AAIAADbg");
	this.shape_2.setTransform(54.3,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-26.2,233.6,51.4);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B181C").s().p("AAVAfIgHgSIgbAAIgHASIgIAAIAag9IAHAAIAZA9gAgKAGIAUAAIgKgbg");
	this.shape.setTransform(68,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B181C").s().p("AgCAfIAAg2IgVAAIAAgHIAvAAIAAAHIgUAAIAAA2g");
	this.shape_1.setTransform(63.4,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B181C").s().p("AASAfIAAgdIgjAAIAAAdIgIAAIAAg9IAIAAIAAAbIAjAAIAAgbIAIAAIAAA9g");
	this.shape_2.setTransform(57.5,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B181C").s().p("AgMAdIgKgHQgEgFgCgFQgCgEAAgIIACgLIAGgKIAKgIQAEgCAIAAIANACIAKAIQAEADACAHQACADAAAIQAAAEgCAIIgGAKIgKAHQgFADgIAAQgGAAgGgDgAgJgUQgDABgDADQgEAEgBAEQgCAEAAAEQAAAFACAFQABAFAEADQADAFADABIAJABQADAAAGgBQADgBAEgFQAEgDABgFQACgDAAgHQAAgBgCgHQgBgEgEgEQgEgDgDgBQgGgCgDgBIgJADg");
	this.shape_3.setTransform(50.7,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B181C").s().p("AAWAfIAAgzIgWAfIAAAAIgVgfIAAAzIgIAAIAAg9IAJAAIAUAeIAUgeIAKAAIAAA9g");
	this.shape_4.setTransform(43.3,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B181C").s().p("AgTAfIAAg9IAnAAIAAAHIgfAAIAAAUIAaAAIAAAFIgaAAIAAAVIAfAAIAAAIg");
	this.shape_5.setTransform(37.1,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B181C").s().p("AgVAfIAAg9IAXAAQAFAAADACQAGACABACIADAGIABAHIgBAHIgDAEIgHAEQgDACgFAAIgPAAIAAAZgAgNAAIAOAAQAGAAADgCQADgDAAgGQAAgFgDgDQgCgDgHAAIgOAAg");
	this.shape_6.setTransform(31.7,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B181C").s().p("AASAfIAAgwIgiAwIgJAAIAAg9IAJAAIAAAwIAigwIAIAAIAAA9g");
	this.shape_7.setTransform(23.2,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B181C").s().p("AAVAfIgHgSIgbAAIgHASIgJAAIAag9IAHAAIAaA9gAgKAGIAVAAIgLgbg");
	this.shape_8.setTransform(14.7,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B181C").s().p("AAVAfIAAgzIgVAfIAAAAIgVgfIAAAzIgIAAIAAg9IAJAAIAUAeIAUgeIAKAAIAAA9g");
	this.shape_9.setTransform(8,12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B181C").s().p("AgMAdQgGgDgEgEQgEgFgCgFQgBgEAAgIQAAgGABgFIAGgKIAKgIQAEgCAIAAQAFAAAIACIAKAIQAEADACAHQABADAAAIIgBAMIgGAKQgGAFgEACQgFADgIAAQgHAAgFgDgAgJgUQgDABgDADQgEAEgBAEQgCAHAAABQAAAFACAFQABAFAEADQACAEAEACIAJABQADAAAGgBQADgBAEgFQAEgDABgFQACgFAAgFQAAgBgCgHQgBgEgEgEQgEgDgDgBQgFgCgEgBIgJADg");
	this.shape_10.setTransform(0.6,12.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B181C").s().p("AAbAlIAAgMIg1AAIAAAMIgIAAIAAgUIAIAAIAXg1IAHAAIAXA1IAIAAIAAAUgAgQARIAjAAIgTgsg");
	this.shape_11.setTransform(-6.2,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B181C").s().p("AAOAfIAAgZIgMAAIgOAZIgJAAIARgZQgJgCgCgEQgFgCAAgJQAAgEACgDIAFgHIAFgDQAEgCAEAAIAWAAIAAA9gAgIgUQgDAFAAADQAAAFADADQACADAGAAIAPAAIAAgVIgPAAQgFAAgDACg");
	this.shape_12.setTransform(-15,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B181C").s().p("AgdAgIAag9IAHAAIAAgBIAaA9IgJAAIgVgzIgUA0g");
	this.shape_13.setTransform(-20.6,12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B181C").s().p("AAcAlIAAgMIg2AAIAAAMIgJAAIAAgUIAKAAIAXg1IAHAAIAXA1IAIAAIAAAUgAgRARIAjAAIgSgsg");
	this.shape_14.setTransform(-27.3,13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B181C").s().p("AgCAfIAAg2IgUAAIAAgHIAtAAIAAAHIgTAAIAAA2g");
	this.shape_15.setTransform(-35.8,12.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B181C").s().p("AgTAfIAAg9IAnAAIAAAHIgfAAIAAAUIAaAAIAAAFIgaAAIAAAVIAfAAIAAAIg");
	this.shape_16.setTransform(-40.8,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B181C").s().p("AANAfIgWgcIgFAHIAAAVIgIAAIAAg9IAIAAIAAAeIAZgeIAKAAIgZAeIAbAfg");
	this.shape_17.setTransform(-45.9,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B181C").s().p("AgVAfIAAg9IAXAAQAFAAAEACQAFACABACIADAGIABAHIgBAHIgDAEIgGAEQgEACgFAAIgPAAIAAAZgAgLAAIANAAQAGAAAEgCQACgDAAgGQAAgGgCgCQgEgDgGAAIgNAAg");
	this.shape_18.setTransform(-51.7,12.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1B181C").s().p("AAUAfIgHgSIgaAAIgHASIgJAAIAag9IAHAAIAaA9gAgLAGIAWAAIgLgbg");
	this.shape_19.setTransform(-57.6,12.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B181C").s().p("AAWAfIAAgzIgWAfIAAAAIgWgfIAAAzIgHAAIAAg9IAJAAIAUAeIAUgeIAKAAIAAA9g");
	this.shape_20.setTransform(-64.3,12.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1B181C").s().p("AgUAfIAAg9IAXAAQAEAAADACQAFACABACIAEAGIABAHIgBAHIgEAEIgGAEQgEACgDAAIgQAAIAAAZgAgMAAIAPAAQAGAAACgCQADgDAAgGQAAgFgDgDQgDgDgFAAIgPAAg");
	this.shape_21.setTransform(-70.8,12.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B181C").s().p("AgTAfIAAg9IAnAAIAAAHIgfAAIAAAUIAaAAIAAAFIgaAAIAAAVIAfAAIAAAIg");
	this.shape_22.setTransform(-76.2,12.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B181C").s().p("AARAfIAAg1IghAAIAAA1IgIAAIAAg9IAxAAIAAA9g");
	this.shape_23.setTransform(-82.2,12.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1B181C").s().p("AASAfIAAgwIgiAwIgJAAIAAg9IAJAAIAAAwIAigwIAIAAIAAA9g");
	this.shape_24.setTransform(-88.7,12.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1B181C").s().p("AgRAfIAAg9IAjAAIAAAHIgbAAIAAA2g");
	this.shape_25.setTransform(-94.1,12.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0078D7").s().p("AhJBBIgCgBIAYgmIAQAKQAUALARgBQATABAAgKQAAgGgPgGIgegKQgugPAAgjQAAgcAagQQAVgMAXAAQAjgBAfAVIACABIgWAqQgXgRgXABQgQgBAAAKQAAAGAPAGIAeAKQAvAQAAAhQAAAWgUAQQgWATgggBQgqAAghgbg");
	this.shape_26.setTransform(-51.1,-3.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0078D7").s().p("AhEBCQgZgbAAgnIAAAAQAAglAZgcQAagbAiAAQAdAAATAXIAAgUIA2AAIAACyIg2AAIAAgUQgSAZgeAAQgjAAgZgcgAgcghQgMAMABAVIAAAAQAAASAMAOQALANAQgBQATAAAMgMQALgMAAgUQAAgTgMgNQgMgNgSAAQgRAAgLAMg");
	this.shape_27.setTransform(61.6,-3.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0078D7").s().p("AhEBCQgZgbAAgnIAAAAQAAglAagcQAZgbAiAAQAcAAAUAXIAAgUIA2AAIAACyIg2AAIAAgUQgTAZgdAAQgjAAgZgcgAgcghQgLAMAAAVIAAAAQAAASAMAOQALANARgBQASAAALgMQALgMAAgUQAAgSgLgOQgMgNgRAAQgRAAgMAMg");
	this.shape_28.setTransform(12,-3.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0078D7").s().p("AhDBCQgagbAAgnIAAAAQAAglAagcQAZgbAiAAQAcAAAUAXIAAgUIA2AAIAACyIg2AAIAAgUQgSAZgeAAQgjAAgYgcgAgcghQgLAMAAAVIAAAAQAAASALAOQANANAPgBQATAAAMgMQAMgMAAgUQAAgSgMgOQgNgNgSAAQgQAAgMAMg");
	this.shape_29.setTransform(-69.7,-3.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0078D7").s().p("ABRBbIAAhkQAAghgbAAQgcAAAAAhIAABkIgzAAIAAhkQAAghgbAAQgcAAAAAhIAABkIg3AAIAAiyIA3AAIAAAVQAVgYAdAAQAgAAAQAaQAXgaAhAAQAeAAAQARQAQARgBAgIAABzg");
	this.shape_30.setTransform(37.2,-3.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0078D7").s().p("Ag1BbIAAiyIA1AAIAAAbQAPgfAmABIACAAIAAA2IgGAAQgZAAgNAQQgLAPAAAbIAABFg");
	this.shape_31.setTransform(-3.6,-3.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0078D7").s().p("AhEBCQgcgbAAgnIAAAAQAAgmAcgbQAdgbAnAAQAsAAAZAbQAcAbAAAmIAAAAQAAAngcAbQgdAbgoAAQgnAAgdgbgAgeggQgMAMAAAUIAAAAQAAASAMAOQANANARAAQATAAAMgNQAMgMAAgUQAAgSgMgNQgNgOgSAAQgSAAgMANg");
	this.shape_32.setTransform(-20.5,-3.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0078D7").s().p("AgWBkQgNgNAAgdIAAhRIgWAAIAAgsIAWAAIAAgtIAzAAIAAAtIApAAIAAAsIgpAAIAABKQAAAPAOAAQAMAAAMgGIAEgDIAAAsIgBABQgPALgaAAQgaAAgMgNg");
	this.shape_33.setTransform(-36.9,-5.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0078D7").s().p("Ag4BCQgcgcAAgmIAAAAQAAgnAcgZQAcgcAmAAQAtAAAbAeIABACIgiAkIgCgCQgRgTgWAAQgOAAgMANQgMAMABAUIAAAAQgBATAMANQAMANARAAQAUAAATgSIACgCIAhAhIgDACQgPAQgOAHQgTAKgaAAQgnAAgZgbg");
	this.shape_34.setTransform(-87.5,-3.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFDC00").s().p("Ag1AtQgSAAgOgNQgOgOAAgSQAAgRAOgOQAOgNASAAIBqAAQATAAAOANQAOAOAAARQAAASgOAOQgOANgTAAg");
	this.shape_35.setTransform(86,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-17.1,192,34.3);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gurl();
	this.instance.setTransform(-87.5,-144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-144.5,175,289);


(lib.butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.bath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBDC1C").s().p("EAcdAqqQhDhCAAhdQAAgOACgOIACgMIgJgJQgwg4gRhGIgGgWMg2HAAAIgGAWQgQBFgxA5IgJAKIACAMQADALAAAQQAABdhDBCQhCBChcAAQhdAAhDhCQhBhCAAhdQAAgRACgKIABgMIgJgKQgjgqgUg0QgSgzAAg2QAAg1AQgvIAHgUIgQgMQiriDhTjOQiqmmj/q6IgHgTIhjAAQhMAAg2g2Qg2g3AAhMQAAhMA2g2QA2g2BMAAIHAAAIAAiQQgaAAgTgQQgTgRAAgWQAAgXATgQQATgQAbAAIBsAAQAbAAAUAQQATAQAAAXQgBAXgSAPQgSAQgbABIAACQICqAAMAAAgqlQgCg2AIg4QAViDBJhPQArgtA5gYQBAgbBPAAQCVAABXBZQBJBKAXCBQANBHgCBqIAAALQBRAQBIA3QBCAzAjBCQA5AXAiAqQAhAqAAAyQAABKhEA0QhEA0hjgBImTAAQhjABhFg0QhDg0AAhKQgBgzAjgqQAigrA7gWQAkhEBEgzQBKg3BSgOIAAgLQABhZgJg5QgRhpg0g0Qg4g4hmAAQhpAAg7A9QguAzgRBZQgKAxADAyIAAABIAAACMAAAAqpICzAAIAAiQQgbgBgRgQQgTgPAAgXQAAgXATgQQAUgQAaAAIBtAAQAaAAAUAQQASAQAAAXQAAAWgSARQgUAQgaAAIAACQMBRXAAAQBMAAA2A2QA2A2AABMQAABMg2A3Qg2A2hMAAIiJAAImRQfIgBAEQhPCyhMBiQhQBqhqA/IgSALIAEAWQAJAjAAAkQABA3gUAzQgTA0gkApIgJAKIACANQACAOAAAMQAABdhCBCQhCBChdAAQhcAAhChCgEAczAiKQg4A5AABQQAAAqASAnQATAnAhAbIAdAaIgMAlQgIAUAAASQAAAvAiAhQAgAhAvAAQAwAAAgghQAighgBgvQABgTgIgTIgNglIAegaQAhgcATgmQARgnABgqQAAhQg4g5Qg5g4hQAAQhPAAg5A4gEgitAiKQg5A5AABQQAAAqASAnQATAnAhAbIAeAaIgNAlQgIATAAATQAAAvAiAhQAgAhAwAAQAuAAAighQAhghAAgvQAAgTgIgUIgNgkIAegaQAhgcATgmQASgnAAgqQAAhQg4g5Qg5g4hPAAQhQAAg4A4gEgduAghQBSA+AbBhIAGAWMA2LAAAIAHgWQAchhBRg+QBSg+BlAAQBDAAA+AcQA8AcArA0IAQATIAWgOQBfg7BIhpQA9hVBAiRIGFv/Mhb2AAAIANAmQDlJ3CtGtQBHCuCLBsIATAPIASgQQApgkA0gUQAzgTA5AAQBmAABRA+gEgySAHgQgVAUgBAeQABAfAVAVQAVAVAeAAMBi/AAAQAeAAAVgVQAVgVABgfQAAgegWgUQgVgWgeAAMhi/AAAQgeAAgVAWgEghQgfJQgJAMAAALQgBAZAlAUQAmAXAzAAIGTAAQAzAAAmgXQAkgUAAgZQAAgYgjgVIgGAAIo8AAIgFAAQgQAKgKAMgEgZfghNQgjglgsgWQgxgagzAAQgxAAgyAaQgrAWgjAlIFkAAIAAAAg");
	this.shape.setTransform(0,0,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBDC1C").s().p("AgkBdQgPgPAAgWIAAhvQAAgWAPgPQAQgQAUAAQAWAAAOAQQAQAPAAAWIAABvQAAAWgQAPQgOAQgWAAQgUAAgQgQg");
	this.shape_1.setTransform(-78.9,-76.5,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBDC1C").s().p("AgkBdQgPgPAAgWIAAhvQAAgWAPgPQAQgQAUAAQAWAAAOAQQAQAPAAAWIAABvQAAAWgQAPQgOAQgWAAQgUAAgQgQg");
	this.shape_2.setTransform(-78.9,-56.7,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBDC1C").s().p("AgkBdQgPgPAAgWIAAhvQAAgWAPgPQAQgQAUAAQAWAAAOAQQAQAPAAAWIAABvQAAAWgQAPQgOAQgWAAQgUAAgQgQg");
	this.shape_3.setTransform(-78.9,-36.8,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBDC1C").s().p("AgkBdQgPgPAAgWIAAhvQAAgWAPgPQAQgQAUAAQAVAAAPAQQAQAPAAAWIAABvQAAAWgQAPQgPAQgVAAQgUAAgQgQg");
	this.shape_4.setTransform(-90.6,-76.5,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBDC1C").s().p("AgkBdQgPgPAAgWIAAhvQAAgWAPgPQAQgQAUAAQAVAAAPAQQAQAPAAAWIAABvQAAAWgQAPQgPAQgVAAQgUAAgQgQg");
	this.shape_5.setTransform(-90.6,-56.7,0.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBDC1C").s().p("AgkBdQgPgPAAgWIAAhvQAAgWAPgPQAQgQAUAAQAVAAAPAQQAQAPAAAWIAABvQAAAWgQAPQgPAQgVAAQgUAAgQgQg");
	this.shape_6.setTransform(-90.6,-36.8,0.5,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBDC1C").s().p("AgjBdQgQgPAAgWIAAhvQAAgWAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAWIAABvQAAAWgPAPQgQAQgVAAQgUAAgPgQg");
	this.shape_7.setTransform(-102.3,-56.7,0.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBDC1C").s().p("AgjBdQgQgPAAgWIAAhvQAAgWAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAWIAABvQAAAWgPAPQgQAQgVAAQgUAAgPgQg");
	this.shape_8.setTransform(-102.3,-76.5,0.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBDC1C").s().p("AgjBdQgQgPAAgWIAAhvQAAgWAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAWIAABvQAAAWgPAPQgQAQgVAAQgUAAgPgQg");
	this.shape_9.setTransform(-102.3,-36.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.6,-139.8,335.3,279.7);


(lib.adress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A595B").s().p("AHGFOQgKgEgKgKQgKgLgDgKQgFgNAAgNQAAgMAFgNQAFgNAIgJQAIgJAMgEQANgGANAAQASAAAKAHQAIAEALALIgOANQgIgKgHgEQgHgEgKAAQgKAAgIAEQgIAEgFAHQgGAGgDAIQgDAJAAAKQAAALADAIQADAJAGAGQAHAIAGACQAKAFAIAAQALAAAGgFQAJgFAGgHIADACIAEAFIAHAGQgGAJgNAHQgNAGgPAAQgPAAgLgFgAFJFOQgKgEgKgKQgKgLgDgKQgFgNAAgNQAAgMAFgNQAFgNAIgJQAIgJAMgEQANgGANAAQASAAAKAHQAIAEALALIgOANQgIgKgHgEQgHgEgKAAQgKAAgIAEQgIAEgFAHQgFAEgEAKQgDAJAAAKQAAALADAIQADAKAGAFQAHAIAGACQAKAFAIAAQALAAAGgFQAJgFAGgHIADACIAEAFIAHAGQgGAJgNAHQgLAGgRAAQgPAAgLgFgACxFOQgLgFgIgIQgHgKgFgMQgEgKAAgQQAAgPAEgKQAFgMAHgKQAIgIALgFQAMgGANAAIALABIAMAFIAMAIIAKAMIAAgYIAUAAIAAB+IgUAAIAAgVIgBAAQgGAKgEACIgMAIIgMAFIgKAAQgNAAgMgFgAC6DkQgKAHgDAEQgEAFgEAKQgDALAAAIQAAAJADAJQADAIAFAHQAIAIAFACQAHAEALAAQAMAAAGgEQAKgGADgFQAFgEADgLQADgJAAgJQAAgJgDgJQgCgHgGgIQgGgGgHgFQgHgEgLAAQgLAAgHAEgAK2FSIAAh/IBAAAQASAAALAJQALAKAAAOQAAAGgEAJQgEAHgKAFQAOAFAGAKQAGAIAAAKQAAAPgLAKQgLAIgTABgALKFBIAtAAIAAgBQALAAAHgFQAGgFAAgJQAAgJgHgFQgGgGgNAAIgrAAgALLEKIAmAAIAAgCQALAAAHgFQAGgHAAgGQAAgHgFgGQgEgEgMgBIgpAAgAKAFSIAAhfIhJBdIgRAAIAAh9IAUAAIAABdIBJhcIARAAIAAB+gABeFRIAAheIgrA6IgBAAIgsg7IAABeIgSAAIAAh9IARAAIAuA/IAtg/IASAAIAAB+gAOaFQIAAiRIgcAeIgNgNIAsgtIATAAIAACtgAhqCHQgDAAgFgCIAEgSIAGACIAFABQAFAAAFgDQABgBAHgKIAIgRIg1h8IAWAAIAqBjIAqhjIAUAAIgrBqIgMAbIgGAPQgFANgKAGQgJAGgNAAIgIgBgAOaBsIgBAAIAGgIQACgDAAgIIgBgCQgIgEAAgJQAAgGAEgDQAGgEAEAAQAHAAAFAFQAFAFAAAJIgCAMIgGAKIgJAHQgFADgHAAgAC5BUQgLgFgIgJQgHgJgFgMQgEgLAAgPQAAgPAEgJQAFgMAHgJQAIgJALgFQAMgFANAAIALABIAMAEQAFADAHAFQAFAGAFAHIAAgYIAUAAIAAB8IgUAAIAAgWIgBAAQgHAKgDADIgMAIIgMAEIgKABQgLAAgOgFgADDgUQgLAIgCADQgEAFgEAIQgDAHAAAMQAAAJADAJQADAIAFAHQAIAIAFACQAHAEALAAQAMAAAGgEQAKgGADgFQAFgFADgKQADgJAAgJQAAgJgDgJQgCgEgGgJQgGgHgHgEQgIgEgKAAQgKAAgIAEgAlmBTQgRgGgLgMQgLgLgIgRQgHgQAAgUQAAgSAHgRQAIgRALgLQANgMAPgGQATgHAQAAQAXABAQAIQANAIAPARIgSALQgHgKgOgJQgNgGgPgBQgMABgOAFQgLAEgKAJQgKAKgEANQgFANAAANQAAAOAFANQAFANAJAKQAKAJALAEQAOAFAMABQAPgBANgGQAOgJAHgJIAEABIAOAJQgNAPgPAKQgPAKgYAAQgSAAgRgGgApxBUQgKgDgKgLQgJgLgEgKQgFgMAAgNQAAgNAFgLQAFgNAIgJQAIgJAMgEQANgFANgBQARABALAFQAHAEAMANIgOALQgIgJgHgDQgHgFgKAAQgKAAgIAFQgIACgFAIQgGAGgDAGIgCAUQAAAJADAKQAEALAFAEQAHAHAGADQAMAEAGAAQALAAAGgEQAJgFAGgIIADADIALAMQgGAJgNAGQgNAFgQAAQgNAAgNgFgAsDBUQgJgDgLgLQgIgIgFgNQgEgKAAgPQAAgNAEgLQAFgNAIgJQALgKAJgDQANgFANgBQAMABAOAFQAKAEAKAJQAKAMADAKQAEAIAAAQQAAAPgEAKQgEALgJAKQgHAJgNAFQgKAFgQAAQgMAAgOgFgAr7gSQgKAGgDAFQgEAEgEAJQgDAJAAAJQAAAJADAJQADAIAFAHQAIAIAFACQAHAEALAAQALAAAHgEQAHgFAGgFQAEgEAEgLQADgJAAgJQAAgJgDgJQgDgGgFgHQgIgIgFgDQgHgEgLAAQgLAAgHAEgAoOBUQgEgDAAgGQAAgHAEgDQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEADQgEAEgGABQgGgBgDgEgANmBYIAAhdIhJBbIgRAAIAAh7IAUAAIAABbIBJhaIARAAIAAB8gAJZBYIAAh9IAUAAIAAAjIAjAAQANAAAJACQAGACAKAIQADACAHAMQADAFAAANQAAAJgDAIQgDAJgHAFQgEAFgMAFQgNAFgIAAgAJtBFIAiAAIAAgBQAOAAAIgHQAIgIAAgLQAAgLgIgIQgIgIgOAAIgiAAgAGOBYIAAhcIhIBaIgSAAIAAh7IAUAAIAABbIBJhaIARAAIAAB8gABmBYIAAguIgPAFQgKACgIAAQgYAAgNgMQgOgNAAgXIAAgmIAUAAIAAAlQAAAKADAFQAEAHADACQAFAFAGAAIANABQARAAAOgGIAAg8IAUAAIAAB8gALXBXIAAh8IAUAAIAAB8gAIjBXIAAg5IhLAAIAAA4IgUAAIAAh7IAUAAIAAAxIBLAAIAAgxIAUAAIAAB8gAiMBXIgqhjIgqBiIgWAAIA1h8IAWAAIAAABIA1B8gAtYBXIAAhqIhKAAIAABpIgUAAIAAh7IByAAIAAB8gAMzg3QgIgEgDgDQgDgDgEgHQgCgEAAgIIAQAAQAAAHAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgHIAPAAQADAEgEAIQgCAGgFAEQgFAFgGACQgEACgKAAIgOgCgAFcg3QgIgEgDgDQgEgEgDgGQgCgEAAgIIAQAAQAAAHAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgHIAPAAIgBAMQgDAGgEAEQgEAFgHACQgEACgKAAIgOgCgAgshyIAAitIAUAAIAAAYIAKgNIAMgIQACgDAIgCIAKgBQAOAAALAFQAMAGAHAIQAIAKAEALQAEAKAAAQQAAAQgEAKQgFANgHAIQgHAJgMAFQgLAFgOAAIgLgBQgHgCgDgCIgMgIQgFgGgFgHIAABGgAAAkMIgNAKQgFAFgDAKQgDAJAAAJQAAAJADAJQACAIAGAHQAHAIAGADQAFAEALAAQAMAAAGgEQAKgGADgFQAFgEADgLQADgJAAgJQAAgJgDgJQgCgIgGgHQgIgIgFgCQgGgEgMAAQgLAAgFAEgAOaiMIgBAAIAGgIQACgDAAgIIgBgDQgIgCAAgKQAAgGAEgDQAGgEAEAAQAHAAAFAFQAFAFAAAJIgCAMIgGAKIgJAHQgFADgHAAgAIdikQgLgFgIgJQgHgJgFgMQgEgLAAgPQAAgQAEgKQAFgMAHgJQAIgJALgFQAMgFANAAIALABIAMAEIAMAIIAKANIAAgWIAUAAIAAB+IgUAAIAAgYIgBAAQgGAKgEADIgMAIIgMAEIgKABQgLAAgOgFgAImkOQgKAGgDAFQgEAEgEALQgDAJAAAKQAAAJADAJQADAIAFAHQAIAIAFACQAHAEALAAQAMAAAGgEQAKgGADgFQAFgEADgLQADgJAAgJQAAgJgDgJQgCgIgGgHQgIgIgFgDQgGgEgMAAQgLAAgHAEgAEcikQgKgEgKgKQgKgLgDgKQgFgOAAgMQAAgNAFgNQAFgNAIgIQAIgKAMgEQAOgFAMAAQASAAAKAGQAJAGAKAKIgOAMQgIgJgHgEQgGgEgLAAQgKAAgIAEQgHADgGAHQgFAFgEAKQgDAJAAAKQAAAKADAJQADAJAGAGQAHAIAGACQAKAEAIAAQALAAAGgEQAJgFAGgIIADADIAEAEIAHAHQgGAIgNAIQgKAGgSAAQgNAAgNgFgACJikQgJgEgLgKQgHgIgGgNQgEgLAAgPQAAgQAEgKQAGgOAHgHQALgLAJgDQAOgFAMAAQANAAANAFQAKAEAKAKQAJALAEAKQAEAKAAAQQAAAPgEALQgGAOgHAHQgIAKgMAEQgIAFgSAAQgNAAgNgFgACRkNQgKAGgDAFQgFAFgDAKQgDAJAAAJQAAAJADAJQACAIAGAHQAIAIAFACQAIAFAKAAQAMAAAGgEQAIgEAFgGQAFgEADgLQADgJAAgJQAAgJgDgJQgFgMgDgEQgIgIgFgDQgHgEgLAAQgMAAgGAEgAmkikQgMgFgIgJQgIgIgFgNQgFgOAAgNQAAgNAFgNQAGgMAHgHQAJgKALgEQANgFAMAAQAMAAAOAFQALAFAIAJQAIAJAEAMQAEAKAAAQIAAAGIhnAAIAEAQQAEAJAFAEQAHAHAHACQAIADAJAAQAMAAAJgEQALgFAHgHIAKANQgKAMgMADQgKAGgSAAQgNAAgNgFgAmdkNQgHADgFAHQgGAIgCAFQgDAIAAAGIBSAAQAAgGgDgIQgDgJgFgEQgBgDgLgHQgIgEgLAAQgKAAgHAEgArzi/IARgNQAJAMAOAGQAPAHAPAAQAPAAAKgEQAJgEALgIQAGgFAIgOQAGgOAAgKIhgAAIAAgUIBgAAQgBgPgGgJQgIgNgGgFQgKgIgKgEQgIgGgQAAQgRAAgNAGQgPAHgIALIgRgNQAMgQASgHQAUgIAUAAQAVAAAOAHQAQAGAMAMQANAOAFAOQAGAQAAAVQAAAVgHAQQgFAOgNAOQgMAMgPAGQgRAGgSAAQgrAAgbgggAtkikQgEgDAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAHgEACQgEAEgGAAQgHAAgCgEgAMcihIAAh+IAUAAIAAAjIAjAAQANAAAJAEQAGACAKAIQADADAHALQADAFAAAMQAAAJgDAJQgDAJgHAFQgEAEgMAGQgNAEgIAAgAMwizIAiAAIAAgBQAOAAAIgHQAIgIAAgLQAAgLgIgIQgIgIgOAAIgiAAgALzihIgqhlIgqBkIgWAAIA1h+IAWAAIAAABIA1B+gAjfihIgvg6IgTATIAAAnIgUAAIAAh+IAUAAIAAA/IBAg/IAbAAIg5A4IA6BGgAnnihIgqhmIgKAXIgLAbIgLAbIgKAXIgWAAIA1h+IAWAAIAAACIA1B+gAGniiIAAhrIgxAAIAAgSIB2AAIAAASIgxAAIAABrgAiHiiIAAhrIgxAAIAAgSIB2AAIAAASIgxAAIAABrgAuyiiIAAh9IBXAAIAAASIhDAAIAABrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-33.9,190.3,67.9);


(lib.last = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// newtext
	this.instance = new lib.adress();
	this.instance.setTransform(41.6,-60.6,0.926,0.926,0,0,0,0.1,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D7").s().p("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");
	this.shape.setTransform(38,-140.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// bg
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(14.1,-88.4,1.117,0.558,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,268,223.2);


// stage content:
(lib.castorama_300x250_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_196 = function() {
		if(!this.loopsPlayed) {
		    this.loopsPlayed = 0;
		}
		this.loopsPlayed++; console.log(this.loopsPlayed);
		
		if (this.loopsPlayed >= 2) {
		    this.stop();    
		} else {
		    this.gotoAndPlay(197);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(196).call(this.frame_196).wait(26));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(222));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(191.8,227.5,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(222));

	// last
	this.instance_1 = new lib.last();
	this.instance_1.setTransform(133.9,223.2,1.116,1.116);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({_off:false},0).wait(1).to({regX:14,regY:-88.4,x:149.5,y:124.6,alpha:0.007},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.985},0).wait(1).to({regX:0,regY:0,x:133.9,y:223.2,alpha:1},0).wait(107).to({alpha:0},16).wait(1));

	// text
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(137.9,126.1,1.116,1.116,0,0,0,97.9,69.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).to({_off:true},77).wait(124));

	// WHITE!!!
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bThIAAm0MAu2AAAIAAG0gA3blnIAAt5MAu2AAAIAAN5g");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},98).wait(124));

	// girl
	this.instance_3 = new lib.girl();
	this.instance_3.setTransform(258.8,180.9,0.615,0.615,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).to({_off:true},83).wait(124));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_33 = new cjs.Graphics().p("AJNN6QgVgVAAgeQAAgeAVgVQAWgWAdAAQAeAAAWAWQAVAVAAAeQAAAegVAVQgWAVgeAAQgdAAgWgVg");
	var mask_graphics_34 = new cjs.Graphics().p("AGVOaQhEhEAAhfQAAhgBEhDQBDhEBgAAQBfAABEBEQBDBDAABgQAABfhDBEQhEBDhfAAQhgAAhDhDg");
	var mask_graphics_35 = new cjs.Graphics().p("AEAO0QhphpAAiUQAAiVBphpQBphoCUAAQCUAABpBoQBpBpAACVQAACUhpBpQhpBpiUAAQiUAAhphpg");
	var mask_graphics_36 = new cjs.Graphics().p("AB+PKQiIiJAAjDQAAjCCIiKQCJiJDDAAQDCAACKCJQCJCKAADCQAADDiJCJQiKCKjCAAQjDAAiJiKg");
	var mask_graphics_37 = new cjs.Graphics().p("AAIPfQilinAAjsQAAjtClimQCninDsAAQDtAACmCnQCnCmAADtQAADsinCnQimCnjtAAQjsAAining");
	var mask_graphics_38 = new cjs.Graphics().p("AhiPxQjBjBAAkTQAAkTDBjBQDAjAETAAQESAADCDAQDCDBAAETQAAETjCDBQjCDCkSAAQkTAAjAjCg");
	var mask_graphics_39 = new cjs.Graphics().p("AjGQDQjbjbAAk2QAAk2DbjZQDZjbE2AAQE2AADbDbQDbDZAAE2QAAE2jbDbQjbDbk2AAQk2AAjZjbg");
	var mask_graphics_40 = new cjs.Graphics().p("AkjQTQjyjyAAlYQAAlXDyjwQDyjyFWAAQFXAADyDyQDyDwAAFXQAAFYjyDyQjyDylXAAQlWAAjyjyg");
	var mask_graphics_41 = new cjs.Graphics().p("Al6QiQkIkIAAl2QAAl2EIkHQEIkIF0AAQF2AAEIEIQEJEHAAF2QAAF2kJEIQkIEIl2AAQl0AAkIkIg");
	var mask_graphics_42 = new cjs.Graphics().p("AnMQwQkckcAAmTQAAmREckdQEdkdGRAAQGTAAEdEdQEcEdAAGRQAAGTkcEcQkdEdmTAAQmRAAkdkdg");
	var mask_graphics_43 = new cjs.Graphics().p("AoYQ9QkvkvAAmuQAAmsEvkwQEwkwGsAAQGuAAEwEwQEvEwAAGsQAAGukvEvQkwEwmuAAQmsAAkwkwg");
	var mask_graphics_44 = new cjs.Graphics().p("ApeRKQlClCAAnHQAAnFFClBQFBlCHFAAQHHAAFCFCQFBFBAAHFQAAHHlBFCQlCFBnHAAQnFAAlBlBg");
	var mask_graphics_45 = new cjs.Graphics().p("AqgRVQlRlSAAneQAAncFRlSQFSlSHcAAQHfAAFSFSQFRFSAAHcQAAHelRFSQlSFSnfAAQncAAlSlSg");
	var mask_graphics_46 = new cjs.Graphics().p("ArcRfQlglgAAn0QAAnyFglgQFhlhHyAAQHzAAFhFhQFhFgAAHyQAAH0lhFgQlhFhnzAAQnyAAlhlhg");
	var mask_graphics_47 = new cjs.Graphics().p("AsSRpQlulvAAoGQAAoFFulvQFvluIEAAQIHAAFvFuQFuFvAAIFQAAIGluFvQlvFuoHAAQoEAAlvlug");
	var mask_graphics_48 = new cjs.Graphics().p("AtCRxQl6l6AAoYQAAoWF6l7QF7l6IVAAQIYAAF7F6QF6F7AAIWQAAIYl6F6Ql7F7oYAAQoVAAl7l7g");
	var mask_graphics_49 = new cjs.Graphics().p("AtsR4QmFmFAAomQAAolGFmFQGFmFIlAAQInAAGFGFQGFGFAAIlQAAImmFGFQmFGFonAAQolAAmFmFg");
	var mask_graphics_50 = new cjs.Graphics().p("AuOR+QmOmNAAozQAAoxGOmOQGNmOIxAAQIzAAGOGOQGOGOAAIxQAAIzmOGNQmOGOozAAQoxAAmNmOg");
	var mask_graphics_51 = new cjs.Graphics().p("AupSDQmUmUAAo9QAAo6GUmVQGUmUI7AAQI8AAGVGUQGUGVAAI6QAAI9mUGUQmVGUo8AAQo7AAmUmUg");
	var mask_graphics_52 = new cjs.Graphics().p("Au6SGQmZmZAApCQAApBGZmYQGYmZJBAAQJDAAGYGZQGZGYAAJBQAAJCmZGZQmYGZpDAAQpBAAmYmZg");
	var mask_graphics_53 = new cjs.Graphics().p("Au/SNQmamaAApFQAApDGamaQGamaJDAAQJFAAGaGaQGaGaAAJDQAAJFmaGaQmaGapFAAQpDAAmamag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_graphics_33,x:71.3,y:91.2}).wait(1).to({graphics:mask_graphics_34,x:79.9,y:99}).wait(1).to({graphics:mask_graphics_35,x:86.7,y:105.3}).wait(1).to({graphics:mask_graphics_36,x:92.8,y:110.8}).wait(1).to({graphics:mask_graphics_37,x:98.2,y:115.8}).wait(1).to({graphics:mask_graphics_38,x:103.2,y:120.4}).wait(1).to({graphics:mask_graphics_39,x:107.8,y:124.6}).wait(1).to({graphics:mask_graphics_40,x:112.1,y:128.6}).wait(1).to({graphics:mask_graphics_41,x:116.1,y:132.3}).wait(1).to({graphics:mask_graphics_42,x:119.9,y:135.7}).wait(1).to({graphics:mask_graphics_43,x:123.4,y:139}).wait(1).to({graphics:mask_graphics_44,x:126.7,y:142}).wait(1).to({graphics:mask_graphics_45,x:129.7,y:144.7}).wait(1).to({graphics:mask_graphics_46,x:132.4,y:147.3}).wait(1).to({graphics:mask_graphics_47,x:135,y:149.6}).wait(1).to({graphics:mask_graphics_48,x:137.2,y:151.6}).wait(1).to({graphics:mask_graphics_49,x:139.1,y:153.4}).wait(1).to({graphics:mask_graphics_50,x:140.7,y:154.8}).wait(1).to({graphics:mask_graphics_51,x:141.9,y:156}).wait(1).to({graphics:mask_graphics_52,x:142.7,y:156.7}).wait(1).to({graphics:mask_graphics_53,x:143.2,y:157.6}).wait(45).to({graphics:null,x:0,y:0}).wait(124));

	// bath
	this.instance_4 = new lib.bath();
	this.instance_4.setTransform(167.4,170.7,0.545,0.545,0,0,0,0.1,0.2);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).to({_off:true},65).wait(124));

	// wall
	this.instance_5 = new lib.wall_1();
	this.instance_5.setTransform(124.4,190.6,0.622,0.622,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).to({_off:true},83).wait(124));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(222));

	// butt
	this.instance_6 = new lib.butt();
	this.instance_6.setTransform(150,125);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.butt(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(222));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,302,252);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;