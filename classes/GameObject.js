class GameObject {
    constructor(container, color, src, x, y, width, height, velX, velY) {
        this.container = container; //이 주인공의 div가 붙을 부모요소
        this.div = document.createElement("div");
        this.color=color;
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        //style
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.backgroundColor="black";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";

        //이미지가 없으면 div에 색상으로 대체 
        if (this.src == "" || this.src.length < 1) {
            this.div.style.background = this.color;
        } else {
            this.useImage();
        }

        //화면에 부착 
        this.container.appendChild(this.div);
    }
    useImage() {
        this.div.style.backgroundImage = "url(" + this.src + ")";
        this.div.style.backgroundSize = this.width + "px " + this.height + "px";
    }

    //비행기의 속성값을 어떻게 변경할지를 처리하는 메서드 
    tick() {
        this.x += this.velX;
        this.y += this.velY;
    }

    //그래픽 처리 : 비행기가 화면에 어떻게 그려질지를 처리하는 메서드
    render() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}