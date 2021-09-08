var btnSocial = document.querySelectorAll(".btn-Social");

    const rss = nameSocial => {
    var link = null;
    switch (nameSocial) {
        case "facebook":
        link = "https://www.facebook.com/sharer/sharer.php?u=";
        break;
        case "twitter":
        link = "https://twitter.com/share?url=";
        break;
        default:
        break;
    }

    var url = window.location.href;

    var text = document.querySelector('meta[name="description"]').content;

    document
        .getElementsByClassName("btn-wsp")[0]
        .setAttribute(
        "href",
        "https://api.whatsapp.com/send?text=" + text + " " + url
        );

    const popupText = nameSocial == "twitter" ? "&text=" + text : "";

    window.open(
        link + url + popupText,
        nameSocial + "-popup",
        "height=350,width=600"
    );
    };

    Object.keys(btnSocial).map(item => {
    btnSocial[item].onclick = function() {
        var nameSocial = btnSocial[item].getAttribute("data-social");
        rss(nameSocial);
    };
    });