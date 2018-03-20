/**
 * Created by jo on 16/7/14.
 */
module.exports=function (canvas,percent,bgColor) {

    function Circle() {
        this.radius = 214;    // 圆环半径
        this.lineWidth = 12;  // 圆环边的宽度
        this.strokeStyle = '#ccc'; //边的颜色
        this.fillStyle = bgColor;  //填充色
        this.lineCap = 'round';
    }

    Circle.prototype.draw = function(ctx) {
        ctx.beginPath();
        ctx.arc(220, 220, this.radius, 0, Math.PI*2, true);  // 坐标为250的圆，这里起始角度是0，结束角度是Math.PI*2
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();  // 这里用stroke画一个空心圆，想填充颜色的童鞋可以用fill方法
    }

    function Ring(startAngle, percent) {
        Circle.call(this);
        this.startAngle = startAngle; //弧起始角度
        this.percent = percent;  //弧占的比例
    }

    Ring.prototype = Object.create(Circle.prototype);

    Ring.prototype.drawRing = function(ctx) {
        this.draw(ctx);  // 调用Circle的draw方法画圈圈

        // angle
        ctx.beginPath();
        var anglePerSec = 2 * Math.PI*(this.percent /100 ); // 蓝色的弧度
        ctx.arc(220, 220, this.radius, this.startAngle ,anglePerSec, false); //这里的圆心坐标要和cirle的保持一致
        ctx.font="56px PingFang";
        ctx.fillStyle=bgColor;
        ctx.fillText(this.percent+"%",140,250);
        ctx.strokeStyle = this.fillStyle;
        ctx.lineCap = this.lineCap;
        ctx.stroke();
        ctx.closePath();
    };

    var ctx =  canvas.getContext('2d');
    var ring = new Ring(0, percent);  // 从2*Math.PI/3弧度开始，进度为50%的环
    ring.drawRing(ctx);


}
