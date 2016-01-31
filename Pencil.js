var Text = Shape.extend({
 
    constructor: function() {
        this.base("Text");
    },
    draw: function(canvas) {

        canvas.strokeStyle = this.color;
        canvas.beginPath();
        canvas.moveTo(this.pos.x, this.pos.y);
        canvas.lineTo(this.size.x, this.size.y);
        canvas.stroke();
        canvas.closePath();
        this.base(canvas);
    },
    drawing:function(point) {
        this.size.x = point.x;// - this.pos.x;
        this.size.y = point.y;// - this.pos.y;
    },
    added: function(canvas) {
        if(this.size.x < 0) {
            this.pos.x += this.size.x;
            this.size.x = Math.abs(this.size.x);
        }
        if(this.size.y < 0) {
            this.pos.y += this.size.y;
            this.size.y = Math.abs(this.size.y);S
        }
    }, 
}); 

