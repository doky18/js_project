class Dd extends GameObject{
    constructor(container, color, src, x, y, width, height, velX, velY,msg,empty){
        super(container, color, src, x, y, width, height, velX, velY);

        this.msg=msg;               //메시지 속성 추가
        this.empty = empty;
    }
}