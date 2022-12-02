var mode = 'more';
        const more = () => {
            if (mode === 'more') {
                mode = 'less';
                document.getElementById("tool").style.display = 'grid';
                document.getElementById("mode").innerHTML = 'Less <i class="fa fa-arrow-up"></i>';
            }
            else {
                mode = 'more';
                document.getElementById("tool").style.display = 'none';
                document.getElementById("mode").innerHTML = 'More <i class="fa fa-arrow-down"></i>';
            }
        }

        var countDownDate = new Date("Dec 3, 2022 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval( ()=> {

            // Get today's date and time
            var now = new Date().getTime();
            // console.log(now);

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);