class Dialog extends GameObject{

    constructor(container, color, src, x, y, width, height, velX, velY){
        super(container, color, src, x, y, width, height, velX, velY);

        //다이얼로그 메시지 창 디자인 
        this.div.style.border=5+"px solid maroon";
        this.div.style.borderRadius=7+"%";
        this.div.style.opacity=0.9;
        this.div.style.display="none";
        this.div.style.fontSize=27+"px";
        this.div.style.zIndex = 10;
    }
}