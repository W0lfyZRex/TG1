var iframe1 = document.getElementById("myframe1");
var iframe2 = document.getElementById("myframe2");
var diviframe = document.getElementById("iframe");
var img1 = document.getElementById("myimg1");
var img2 = document.getElementById("myimg2");
var divimg = document.getElementById("img");
var divserver = document.getElementById("server");
var url1 = iframe1.src;
var url2 = iframe2.src;
var page1 = 1;
var page2 = 2;
var nbpage = document.getElementById("nbpage");
var advanced = false;

var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");

function hub() {
    Swal.fire({
        title: "Choisissez un manuel",
        html: `
        <button class="swal2-styled swal2-default-outline" onclick="changerURLOut('https://www.calameo.com/read/003221622c5e0d0b70eac?authid=Mgr3I6549pUc', 'Calameo')"><h1>Histoire</h1></button>
		<button class="swal2-styled swal2-default-outline" onclick="changerURLOut('https://www.calameo.com/read/00322162234bd5e552635?authid=nadWurkhaHUX', 'Calameo')"><h1>Géographie</h1></button>
		<button class="swal2-styled swal2-default-outline" onclick="changerURLOut('https://www.libmanuels.fr/demo/9782210114302/specimen/2/', 'Libmanuels')"><h1>EMC</h1></button>
		<button class="swal2-styled swal2-default-outline" onclick="changerURLOut('https://www.calameo.com/read/004822953b9519a03ed95', 'Calameo')"><h1>Maths Exp.</h1></button>
		<button class="swal2-styled swal2-default-outline" onclick="changerURLOut('https://www.calameo.com/read/0048229533c3f405328b4', 'Calameo')"><h1>Maths Spé.</h1></button>
		<button class="swal2-styled swal2-default-outline" onclick="changerURLOut('https://www.calameo.com/read/003221622c2a061e54fab?authid=8JEKdft78E9d', 'Calameo')"><h1>HGGSP</h1></button>
        `,
        icon: "question",
        confirmButtonColor: "#3085d6",
        confirmButtonText: `Je veux un autre manuel`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Autre manuel",
                text: "Envoyez-moi un message avec le nom de votre manuel et son édition (Magnard, Hachette, etc.)",
                icon: "info",
                confirmButtonColor: "#3085d6",
                confirmButtonText: `D'accord`
            }).then((result) => {
                hub();
            });
        }
    });
}

function changerURLOut(url, site) {
    Swal.fire({
        title: "Site externe",
        html: `
        Vous vous apprêtez à vous rendre sur <b>${site}</b>.
        `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Annuler",
        confirmButtonText: `
        <i class="fa fa-external-link"></i> Continuer
        `
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = url;
        } else {
            hub();
        }
    });
}

function editionchoisie() {
    var editionchoisie = document.getElementsByName("edition")[0].value;
    var slider = document.getElementById("slider");

    if (editionchoisie == 'hachette') {
        console.log("Hachette");
        document.getElementById("editionesthcoisieest").innerHTML = "";
        diviframe.style.display = '';
        slider.style.display = '';
        divimg.style.display = 'none';
        divserver.style.display = 'none';
        document.documentElement.style.setProperty('--iframe-width', '560px');
        document.documentElement.style.setProperty('--iframe-height', '800px');

    }
    else if ((editionchoisie == 'didier-hatier')) {
        console.log("Didier ou Hatier");
        document.getElementById("editionesthcoisieest").innerHTML = "";
        diviframe.style.display = '';
        slider.style.display = '';
        divimg.style.display = 'none';
        divserver.style.display = 'none';
        document.documentElement.style.setProperty('--iframe-width', '1426px');
        document.documentElement.style.setProperty('--iframe-height', '2048px');
    }
    else if (editionchoisie == 'belin') {
        console.log("Belin");
        document.getElementById("editionesthcoisieest").innerHTML = "";
        diviframe.style.display = 'none';
        slider.style.display = '';
        divimg.style.display = '';
        divserver.style.display = 'none';
    }
    else if (editionchoisie == 'LLS') {
        console.log("LLS");
        document.getElementById("editionesthcoisieest").innerHTML = "";
        diviframe.style.display = 'none';
        slider.style.display = '';
        divimg.style.display = '';
        divserver.style.display = 'none';
    }
    else if (editionchoisie == 'sesa') {
        console.log("sesa");
        document.getElementById("editionesthcoisieest").innerHTML = "";
        diviframe.style.display = 'none';
        slider.style.display = '';
        divimg.style.display = '';
        divserver.style.display = 'none';
    }
    else if (editionchoisie == 'magnard') {
        console.log("magnard");
        document.getElementById("editionesthcoisieest").innerHTML = "Le serveur n°1 devrait marcher mais au cas où les autres sont dispos.";
        diviframe.style.display = '';
        slider.style.display = '';
        divimg.style.display = 'none';
        divserver.style.display = '';
        document.documentElement.style.setProperty('--iframe-width', '1540px');
        document.documentElement.style.setProperty('--iframe-height', '2050px');
    }
    else if (editionchoisie == 'delagrave') {
        console.log("delagrave");
        document.getElementById("editionesthcoisieest").innerHTML = "";
        diviframe.style.display = '';
        slider.style.display = '';
        divimg.style.display = 'none';
        divserver.style.display = '';
    }
    else if (editionchoisie == 'nathan') {
        console.log("nathan");
        document.getElementById("editionesthcoisieest").innerHTML = "";
        diviframe.style.display = 'none';
        slider.style.display = '';
        divimg.style.display = '';
        divserver.style.display = 'none';
    }
    else {
        document.getElementById("editionesthcoisieest").innerHTML = "&#9888 Cette édition n'est pas encore supportée &#9888";
        diviframe.style.display = 'none';
        divimg.style.display = 'none';
        slider.style.display = 'none';
        divserver.style.display = 'none';
    }
    if (!advanced) {
        document.querySelectorAll(".advanced").forEach(e => {
            e.style.display = 'none';
        });
    }
}


function urlachanger() {
    var code = document.getElementById("code").value;
    var editionchoisie = document.getElementsByName("edition")[0].value;
    changerURL(code, editionchoisie);
}

function changerEdition(valeur) {
    var selectElement = document.getElementById('edition-select');
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === valeur) {
            selectElement.selectedIndex = i;
            break;
        }
    }
}

function changerURL(code, ec) {
    var server = document.querySelector('select[name="server"]').value;
    console.log(server);
    if (ec == 'hachette') {
        changerEdition('hachette');
        editionchoisie();
        var newUrl1 = "https://exobank.hachette-livre.fr/contents/final/" + code + "-fxl/OEBPS/Page_1.html?interface=postMessage";
        var newUrl2 = "https://exobank.hachette-livre.fr/contents/final/" + code + "-fxl/OEBPS/Page_2.html?interface=postMessage";
        iframe1.src = newUrl1;
        iframe2.src = newUrl2;
        a1.href = newUrl1;
        a2.href = newUrl2;
    }
    else if ((ec == 'didier-hatier')) {
        changerEdition('didier-hatier');
        editionchoisie();
        var newUrl1 = "https://exobank.hachette-livre.fr/contents/final/" + code + "-fxl/OEBPS/page1.xhtml?interface=postMessage";
        var newUrl2 = "https://exobank.hachette-livre.fr/contents/final/" + code + "-fxl/OEBPS/page2.xhtml?interface=postMessage";
        iframe1.src = newUrl1;
        iframe2.src = newUrl2;
        a1.href = newUrl1;
        a2.href = newUrl2;
    }
    // https://nohamr.github.io/Manuelcontent/Belin/1ere/geographie-premiere/page1.jpg
    else if (ec == 'belin') {
        changerEdition('belin');
        editionchoisie();
        var newUrl1 = "https://nohamr.github.io/Manuelcontent/Belin/" + code + "/page1.jpg";
        var newUrl2 = "https://nohamr.github.io/Manuelcontent/Belin/" + code + "/page2.jpg";
        img1.src = newUrl1;
        img2.src = newUrl2;
        a1.href = newUrl1;
        a2.href = newUrl2;
    }
    // https://assets.lls.fr/books/48453088/print/14.jpg
    else if (ec == 'LLS') {
        changerEdition('LLS');
        editionchoisie();
        var newUrl1 = "https://assets.lls.fr/books/" + code + "/print/1.jpg";
        var newUrl2 = "https://assets.lls.fr/books/" + code + "/print/2.jpg";
        img1.src = newUrl1;
        img2.src = newUrl2;
        a1.href = newUrl1;
        a2.href = newUrl2;
    }
    // https://manuel.sesamath.net/imgs_produites/pages/ms6_2013/ms6_2013_page0.gif
    else if (ec == 'sesa') {
        changerEdition('sesa');
        editionchoisie();
        var newUrl1 = "https://raw.githubusercontent.com/NohamR/Manuelcontent/main/Sesamath/" + code + "/page0.gif";
        var newUrl2 = "https://raw.githubusercontent.com/NohamR/Manuelcontent/main/Sesamath/" + code + "/page1.gif";
        img1.src = newUrl1;
        img2.src = newUrl2;
        a1.href = newUrl1;
        a2.href = newUrl2;
    }
    // https://storage.libmanuels.fr/Magnard/specimen/9782210116252/4/OEBPS/images/bg003_01.jpg
    // https://storage.libmanuels.fr/Magnard/specimen/9782210116252/4/OEBPS/page001.xhtml
    // https://storage.libmanuels.fr/Magnard/specimen/9782210113183/9/OEBPS/page005.xhtml
    // https://storage.libmanuels.fr/Magnard/specimen/9782210118201/1/OEBPS/page005.xhtml
    else if (ec == 'magnard') {
        changerEdition('magnard');
        editionchoisie();
        var newUrl1 = "https://storage.libmanuels.fr/Magnard/specimen/" + code + '/' + server + "/OEBPS/page002.xhtml?interface=postMessage";
        var newUrl2 = "https://storage.libmanuels.fr/Magnard/specimen/" + code + '/' + server + "/OEBPS/page003.xhtml?interface=postMessage";
        iframe1.src = newUrl1;
        iframe2.src = newUrl2;
        a1.href = newUrl1;
        a2.href = newUrl2;
    }
    // https://storage.libmanuels.fr/Delagrave/specimen/9782206103983/8/OEBPS/page005.xhtml
    else if (ec == 'delagrave') {
        changerEdition('delagrave');
        editionchoisie();
        var newUrl1 = "https://storage.libmanuels.fr/Delagrave/specimen/" + code + '/' + server + "/OEBPS/page002.xhtml?interface=postMessage";
        var newUrl2 = "https://storage.libmanuels.fr/Delagrave/specimen/" + code + '/' + server + "/OEBPS/page003.xhtml?interface=postMessage";
        iframe1.src = newUrl1;
        iframe2.src = newUrl2;
        a1.href = newUrl1;
        a2.href = newUrl2;
    }
    else if (ec == 'nathan') {
        changerEdition('nathan');
        editionchoisie();
        var newUrl1 = "https://raw.githubusercontent.com/NohamR/Manuelcontent/main/Nathan/" + code + "/page1.jpg";
        var newUrl2 = "https://raw.githubusercontent.com/NohamR/Manuelcontent/main/Nathan/" + code + "/page2.jpg";
        img1.src = newUrl1;
        img2.src = newUrl2;
        a1.href = newUrl1;
        a2.href = newUrl2;
    }
    else {

    }

    url1 = newUrl1;
    url2 = newUrl2;
    page1 = 1;
    page2 = 2;
}

function pageachanger(delta) {
    // console.log("pageachanger");
    var editionchoisie = document.getElementsByName("edition")[0].value;
    changerPage(delta, editionchoisie);
}

function changerPage(delta, editionchoisie) {
    if (document.getElementById("changepagebuttondesktop").children[0].disabled) return;
    document.getElementById("changepagebuttondesktop").children[0].disabled = true;
    document.getElementById("changepagebuttondesktop").children[1].disabled = true;
    document.getElementById("changepagebuttonmobile").children[0].disabled = true;
    document.getElementById("changepagebuttonmobile").children[1].disabled = true;
    setTimeout(() => {
        document.getElementById("changepagebuttondesktop").children[0].disabled = false;
        document.getElementById("changepagebuttondesktop").children[1].disabled = false;
        document.getElementById("changepagebuttonmobile").children[0].disabled = false;
        document.getElementById("changepagebuttonmobile").children[1].disabled = false;
    }, 700);
    if (editionchoisie == 'hachette') {
        // console.log("hachette");
        page1 += delta;
        page2 += delta;
        if (page1 < 1) {
            page1 = 1;
        } else if (page1 > 700) {
            page1 = 700;
        }
        if (page2 < 1) {
            page2 = 2;
        } else if (page2 > 700) {
            page2 = 700;
        }
        iframe1.src = url1.replace(/Page_\d+/, "Page_" + page1);
        iframe2.src = url2.replace(/Page_\d+/, "Page_" + page2);
        nbpage.value = page1;
    }
    // page1.jpg
    else if ((editionchoisie == 'didier-hatier')) {
        console.log("hatier ou didier ou belin");
        page1 += delta;
        page2 += delta;
        if (page1 < 1) {
            page1 = 1;
        } else if (page1 > 700) {
            page1 = 700;
        }
        if (page2 < 1) {
            page2 = 2;
        } else if (page2 > 700) {
            page2 = 700;
        }
        iframe1.src = url1.replace(/page\d+/, "page" + page1);
        iframe2.src = url2.replace(/page\d+/, "page" + page2);
        nbpage.value = page1;
    }
    else if (editionchoisie == 'belin') {
        console.log("belin");
        page1 += delta;
        page2 += delta;
        if (page1 < 1) {
            page1 = 1;
        } else if (page1 > 700) {
            page1 = 700;
        }
        if (page2 < 1) {
            page2 = 2;
        } else if (page2 > 700) {
            page2 = 700;
        }
        img1.src = url1.replace(/page\d+/, "page" + page1);
        img2.src = url2.replace(/page\d+/, "page" + page2);
        nbpage.value = page1;
    }
    // print/14.jpg
    else if (editionchoisie == 'LLS') {
        // console.log("LLS");
        page1 += delta;
        page2 += delta;
        if (page1 < 1) {
            page1 = 1;
        } else if (page1 > 700) {
            page1 = 700;
        }
        if (page2 < 1) {
            page2 = 2;
        } else if (page2 > 700) {
            page2 = 700;
        }
        img1.src = url1.replace(/\d+(?=\.jpg)/, page1);
        img2.src = url2.replace(/\d+(?=\.jpg)/, page2);
        // console.log(img1.src);
        // console.log(img2.src);
        nbpage.value = page1;
    }
    // /ms6_2013_page1.gif
    else if (editionchoisie == 'sesa') {
        // console.log("sesa");
        page1 += delta;
        page2 += delta;
        if (page1 < 1) {
            page1 = 1;
        } else if (page1 > 700) {
            page1 = 700;
        }
        if (page2 < 1) {
            page2 = 2;
        } else if (page2 > 700) {
            page2 = 700;
        }
        img1.src = url1.replace(/\d+(?=\.gif)/, page1);
        img2.src = url2.replace(/\d+(?=\.gif)/, page2);
        console.log(img1.src);
        console.log(img2.src);
        nbpage.value = page1;
    }
    // /page003.xhtml?interface=postMessage"
    else if ((editionchoisie == 'magnard') || (editionchoisie == 'delagrave')) {
        // console.log("magnard");
        page1 += delta;
        page2 += delta;
        if (page1 < 1) {
            page1 = 1;
        } else if (page1 > 700) {
            page1 = 700;
        }
        if (page2 < 1) {
            page2 = 2;
        } else if (page2 > 700) {
            page2 = 700;
        }
        iframe1.src = url1.replace(/(\/page)\d{3}(\.xhtml\?interface=postMessage)/, "$1" + ("000" + page1).slice(-3) + "$2");
        iframe2.src = url2.replace(/(\/page)\d{3}(\.xhtml\?interface=postMessage)/, "$1" + ("000" + page2).slice(-3) + "$2");
        console.log(img1.src);
        console.log(img2.src);
        nbpage.value = page1;
    }
    else if (editionchoisie == 'nathan') {
        // console.log("nathan");
        page1 += delta;
        page2 += delta;
        if (page1 < 1) {
            page1 = 1;
        } else if (page1 > 700) {
            page1 = 700;
        }
        if (page2 < 1) {
            page2 = 2;
        } else if (page2 > 700) {
            page2 = 700;
        }
        img1.src = url1.replace(/\d+(?=\.jpg)/, page1);
        img2.src = url2.replace(/\d+(?=\.jpg)/, page2);
        console.log(img1.src);
        console.log(img2.src);
        nbpage.value = page1;
    }
}

function changerNBpage() {
    var nbtochange = 0;
    var nbpage = document.getElementById("nbpage").value;
    var editionchoisie = document.getElementsByName("edition")[0].value;
    // console.log('nbpage', nbpage);
    nbtochange = nbpage - page1;
    // console.log('nbtochange', nbtochange);
    changerPage(nbtochange, editionchoisie);
}
function taille() {
    var entree = document.getElementById("slider");
    document.documentElement.style.setProperty('--scalenb', entree.value / 100);
}
document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            pageachanger(-2);
            break;
        case 39:
            pageachanger(2);
            break;
        case 70:
            toggleFullScreen();
            break;
        case 192:
            toggleAdvanced();
            break;
    }
};

function toggleAdvanced() {
    advanced = !advanced;
    if (advanced) {
        document.querySelectorAll(".advanced").forEach(e => {
            e.style.display = '';
        });
    }
    else {
        document.querySelectorAll(".advanced").forEach(e => {
            e.style.display = 'none';
        });
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

function checkCookie() {
    document.documentElement.style.setProperty('--color-scheme', 'light');
    document.documentElement.style.setProperty('--ecriture', '#262626');
    document.documentElement.style.setProperty('--background', '#f1f1f1');
}