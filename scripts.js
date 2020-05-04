
//nav menu code
// in default (mobile) setting, clicking the bars icon changes class of nav items to "topnav responsive" so that they display appropriately 
function expandMenu() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

//this function is for a button requiring username and password entry while there's nothing in the back end
dummyFunction()