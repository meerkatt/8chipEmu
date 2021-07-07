class Renderer {
    constructor(scale){
        this.cols = 64;
        this.rows = 32;
        
        this.scale = scale;

        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        //Scales the Canvas size since 8Chip Base Size is too small
        this.canvas.width = this.cols * this.scale; 
        this.canvas.height = this.rows * this.scale;

        this.display = new Array(this.cols * this.rows);
    }

    setPixel(x,y){

        //handling pixel wraparound for x/y input
        if(x > this.cols){
            x -= this.cols;
        } else if(x < 0) {
            x += this.col;
        }
        if(y > this.rows){
            y -= this.rows;
        } else if(y < 0) {
            y += this.rows;
        }

        //Pixel data stored in 1d array
        let pixelLoc = x + (y * this.cols);

        //Bitwise XOR pixelLoc based on 8chip technical documentation
        this.display[pixelLoc] ^= 1;


        return !this.display[pixelLoc]; 
    }
    
    clear(){
        //clear the display by reinitializing it
        this.display = new Array(this.cols * this.rows);
    }

    render(){
        //Clear the display every render cycle
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        //Loop through to Render entirety of Display Array
        for(let loc_idx = 0; loc_idx < this.cols * this.rows; loc_idx++){
            let x = (loc_idx % this.cols) * this.scale;
            let y = Math.floor(loc_idx / this.cols) * this.scale;

            //Determine whether or not to draw a pixel
            if(this.display[loc_idx] == 1){
                //Set pixel color to black
                this.ctx.fillStyle = '#000';

                //Place a pixel at the coordinates calculated
                this.ctx.fillRect(x, y, this.scale, this.scale);
            }
        }
    }

    testRender() {
        this.setPixel(0, 0);
        this.setPixel(5, 2);
    }
}

export default Renderer;