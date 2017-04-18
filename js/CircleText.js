/**
 * Created by hc on 2017/3/20.
 */
function CircleText(options){
    this._init(options);
}

CircleText.prototype = {
  _init:function(options){
     this.x = options.x ||0;
     this.y = options.y ||0;
     this.innerRadius = options.innerRadius;
     this.outerRadius = options.outerRadius;
     this.text = options.text || "Konvas";
     this.innerStyle = options.innerStyle || "red";
     this.outerStyle = options.outerStyle || "#ccc";
     this.opacity = options.opacity || 1;

      //创建一个组
      this.group = new Konva.Group({
         x:this.x,
         y:this.y
      });

      //创建内圆
      var innerCircle = new Konva.Circle({
         x:0,
         y:0,
         radius:this.innerRadius,
         fill:this.innerStyle
      });

      this.group.add(innerCircle);

      //创建环
      var ring = new Konva.Ring({
         x:0,
         y:0,
         innerRadius:this.innerRadius,
         outerRadius:this.outerRadius,
         fill:this.outerStyle,
         opacity:.6
      });
      this.group.add(ring);

      //创建文字
      var text = new Konva.Text({
         x:0-this.outerRadius,
         y:-7,
         text:this.text,
         fill:"#fff",
         align:"center",
         fontSize:17,
         fontFamily:"微软雅黑",
         width:this.outerRadius*2,
      });
      this.group.add(text);

  },
  addToLayerOrStage: function (layer) {
      layer.add(this.group);
  }
};