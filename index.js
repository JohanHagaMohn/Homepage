window.addEventListener("DOMContentLoaded", () => {
    header = document.querySelector("#header").style;
    setTimeout(() => {
        header.opacity = "0";
        setTimeout(() => {
            header.display = "none";
        }, 1950);
    }, 50);

    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    sid = document.querySelector("#sid").style;
    sid.opacity = 0;

    gunnar = document.querySelector("#gunnar").style;
    gunnar.opacity = 0;

    body = document.querySelector("body").style;
    text = document.querySelector("#text");

    sleep(120000).then(() => {
        body.backgroundColor = "#ba0001";
        text.style.color = "#FFF";
        sleep(1000).then(() => {
            text.style.opacity = 0;
            sleep(2000).then(() => {
                text.innerHTML = "Hei Marte";
                text.style.opacity = 1;
                sid.opacity = 1;
                sid.transform = "translate(120%, 20%)";
                sleep(3000).then(() => {
                    sid.opacity = 0;
                    text.style.opacity = 0;
                    sleep(2000).then(() => {
                        text.innerHTML = "Skal vi dele sovepose på Storøyodden i morgen?";
                        gunnar.opacity = 1;
                        gunnar.transform = "translate(-70vw, -10%)";
                        text.style.opacity = 1;
                        sleep(3000).then(() => {
                            text.style.opacity = 0;
                            gunnar.transform = "translate(-60vw, -30%) scale(0.5)";
                            sleep(2000).then(() => {
                                text.innerHTML = "656720656c736b20646567";
                                text.style.opacity = 1;
                                sleep(400).then(() => {
                                    text.style.opacity = 0;
                                    gunnar.opacity = 0;
                                    sleep(2000).then(() => {
                                        text.innerHTML = "Johan Haga Mohn";
                                        text.style.opacity = 1;
                                        body.backgroundColor = "#FFFFFF";
                                        text.style.color = "#999999";
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

});
