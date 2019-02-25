window.onscroll = function () {
    navbarSolid()
};

var navbarSolid = () => {
   
    
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 210) {
        document.getElementById('navbar').style.backgroundColor = 'black';

        document.getElementById('navbar').className += ' solid';

        document.getElementById('navbar').style.position = 'fixed';
       
    } else {
        if (window.innerWidth < 992) {
            // console.log("scroll kecil")
           
            document.getElementById('navbar').style.backgroundColor = 'black';

        } else{
            // console.log("scroll gede")
            document.getElementById('navbar').style.backgroundColor = 'transparent';

        }
        document.getElementById('navbar').style.position = 'relative';
        document.getElementById('navbar').className = 'navbar navbar-expand-lg';
        // document.getElementById('navbar').style.boxShadow='';

    }


}