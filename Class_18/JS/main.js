let jsWindow = window.open(
    'http://127.0.0.1:5500/Class_17/object_test1.html',
    'about',
    'height=600,width=800');

var a = 1;


//while (1) {
    setTimeout(() => {
        if (a == 1) {
            jsWindow.resizeTo(600, 300);
            a = 2;
        }
        else {
            jsWindow.resizeTo(300, 600);
            a = 1
        }
    }, 5000);
//}