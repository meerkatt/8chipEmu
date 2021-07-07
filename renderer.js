class Renderer {
    constructor(scale){
        this.col = 64;
        this.row = 32;
        
        this.scale = scale;

        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');


        this.canvas.width = this.cols * this.scale;
        this.canvas.height = this.rows * this.scale;
    }
}

export default Renderer;