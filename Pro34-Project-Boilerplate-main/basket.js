class basket {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.basket_image = loadImage("basket.png");
    }

    display(){
        imageMode(CENTER);
        image(this.basket_image, 1100, 500, this.width, this.height);
    }
}


