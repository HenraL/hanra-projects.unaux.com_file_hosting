function cookie(key="0",value="0",expires="",path="/"){
    function createMany(string){
        document.cookie = string
    }
    function create(key="0",value="0",expires="",path="/"){ //modifying cookie == create cookie
        document.cookie = key+"="+value+"; expires="+expires+"; path="+path;
    }
    function read(key){ //from https://www.w3schools.com/js/js_cookies.asp
        var name = key + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function remove(key){
        document.cookie = key+"=a; expires=Sat, 1 Jan 1921 00:00:00 UTC;"
    }
}