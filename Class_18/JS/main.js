function window_open_test() {
    let jsWindow = window.open(
        'http://127.0.0.1:5500/Class_17/object_test1.html',
        'about',
        //'height=600,width=800,noopener');
        'height=600,width=800');

    // Lai varētu kontrolēt atvērta loga izmēru utt.,
    // tam jābūt atvērtam viena domēnā ietvaros
    // šajā gadījumā gan tas, kas startē (Class_18/object_test_.html),
    // gan tas, ko startē (Class_17/object_test1.html),
    // atrodas vienā domēnā - 127.0.0.1

    setTimeout(() => {
        if (jsWindow != null)
        jsWindow.resizeTo(600, 300);
    }, 3000);

    setTimeout(() => {
        if (jsWindow != null)
        jsWindow.moveTo(100, 100);
    }, 6000);
    /*
    setTimeout(() => {
        if (jsWindow != null)
        jsWindow.close();
    }, 9000);
    */
}