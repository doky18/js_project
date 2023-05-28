class Home extends GameObject{
    constructor(container, color, src, x, y, width, height, velX, velY, msg){
        super(container, color, src, x, y, width, height, velX, velY);

        this.msg=msg;               //메시지 속성 추가
        console.log(this.msg);
    }
}