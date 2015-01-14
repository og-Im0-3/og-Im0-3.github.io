var start_a = {},
    start_b = {},
    start_c = {},
    triangle_height,
    triangle_length,
    w_width,
    w_height,
    center_x,
    center_y,
    repeat = 9      ;

function triangle(){
    if(w_width > w_height){
        start_b.x = center_x - center_y + 40;
        start_c.x = center_x + center_y - 40;
    }else{
        start_b.x = 40;
        start_c.x = w_width - 40;
    }

    triangle_length = start_c.x - start_b.x;
    triangle_height = sqrt(3) * triangle_length / 2;
    start_b.y = (w_height - triangle_height) / 2 + triangle_height;
    start_c.y = start_b.y;

    start_a.x = triangle_length / 2 + start_b.x;
    start_a.y = start_b.y - triangle_height;
}

function gasket(a, b, c ,n){
    var count = n,
    d = {},
    e = {},
    f = {};
    stroke(255, 255, 255);
    noFill();
    triangle(a.x, a.y, b.x, b.y, c.x, c.y);

    d.x = (a.x + b.x)/2;
    d.y = (a.y + b.y)/2;
    e.x = (b.x + c.x)/2;
    e.y = (b.y + c.y)/2;
    f.x = (c.x + a.x)/2;
    f.y = (c.y + a.y)/2;

    if(count > 1){
        return setTimeout(function(){
                gasket(a, d, f ,count - 1);
                gasket(b, d, e ,count - 1);
                gasket(c, e, f ,count - 1);
            },500);
    }
}

function setup(){
    w_width = windowWidth;
    w_height = windowHeight;
    center_x = w_width / 2;
    center_y = w_height / 2;
    createCanvas(w_width, w_height);
    background(0,0);

    if(w_width > w_height){
        start_b.x = center_x - center_y + 40;
        start_c.x = center_x + center_y - 40;
    }else{
        start_b.x = 40;
        start_c.x = w_width - 40;
    }

    triangle_length = start_c.x - start_b.x;
    triangle_height = sqrt(3) * triangle_length / 2;
    start_b.y = (w_height - triangle_height) / 2 + triangle_height;
    start_c.y = start_b.y;

    start_a.x = triangle_length / 2 + start_b.x;
    start_a.y = start_b.y - triangle_height;

    triangle();
    gasket(start_a, start_b, start_c, repeat);
}



