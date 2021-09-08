$(document).ready(function () {
    
    var b = 1;

    $('.C-carousel-navigation-button--prev').text('Anterior');
    $('.C-carousel-navigation-button--next').text('Siguiente');

    $('.C-carousel-navigation-button--next').click(function () {
        b = b + 1;
        if(b == 2) {

            $('.fecha').text('Domingo 15 de marzo');

            $('.counter-casos').attr('data-count','71');

            $('.counter-fallecidos').attr('data-count','0');

        }

        if(b == 3) {

            $('.fecha').text('Jueves 19 de marzo');

            $('.counter-casos').attr('data-count','234');

            $('.counter-fallecidos').attr('data-count','3');
    
        }

        if(b == 4) {

            $('.fecha').text('Miércoles 8 de abril');

            $('.counter-casos').attr('data-count','4342');

            $('.counter-fallecidos').attr('data-count','121');
    
        }

        if(b == 5) {

            $('.fecha').text('Lunes 13 de abril');

            $('.counter-casos').attr('data-count','9784');

            $('.counter-fallecidos').attr('data-count','216');
    
        }

        if(b == 6) {

            $('.fecha').text('Lunes 4 de mayo');

            $('.counter-casos').attr('data-count','47372');

            $('.counter-fallecidos').attr('data-count','1344');
    
        }

        if(b == 7) {

            $('.fecha').text('Lunes 11 de mayo');

            $('.counter-casos').attr('data-count','68822');

            $('.counter-fallecidos').attr('data-count','1961');
    
        }

        if(b == 8) {

            $('.fecha').text('Jueves 4 de junio');

            $('.counter-casos').attr('data-count','183198');

            $('.counter-fallecidos').attr('data-count','5031');
    
        }

        if(b == 9) {

            $('.fecha').text('Martes 23 de junio');

            $('.counter-casos').attr('data-count','260810');

            $('.counter-fallecidos').attr('data-count','8404');
    
        }

        if(b == 10) {

            $('.fecha').text('Lunes 13 de julio');

            $('.counter-casos').attr('data-count','330123');

            $('.counter-fallecidos').attr('data-count','12054');
    
        }

        if(b == 11) {

            $('.fecha').text('Domingo 19 de julio');

            $('.counter-casos').attr('data-count','353590');

            $('.counter-fallecidos').attr('data-count','13187');
    
        }

        if(b == 12) {

            $('.fecha').text('Miércoles 22 de julio');

            $('.counter-casos').attr('data-count','366550');

            $('.counter-fallecidos').attr('data-count','17455');
    
        }

        if(b == 13) {

            $('.fecha').text('Viernes 21 de agosto');

            $('.counter-casos').attr('data-count','576067');

            $('.counter-fallecidos').attr('data-count','27245');
    
        }

        if(b == 14) {

            $('.fecha').text('Miércoles 26 de agosto');

            $('.counter-casos').attr('data-count','613378');

            $('.counter-fallecidos').attr('data-count','28124');
    
        }

        if(b == 15) {

            $('.fecha').text('Domingo 30 de agosto');

            $('.counter-casos').attr('data-count','647166');

            $('.counter-fallecidos').attr('data-count','28788');
    
        }

        if(b == 16) {

            $('.fecha').text('Martes 15 de setiembre');

            $('.counter-casos').attr('data-count','738020');

            $('.counter-fallecidos').attr('data-count','30927');
    
        }

        if(b == 17) {

            $('.fecha').text('Miércoles 16 de setiembre');

            $('.counter-casos').attr('data-count','744400');

            $('.counter-fallecidos').attr('data-count','31051');
    
        }

        if(b == 18) {

            $('.fecha').text('Miércoles 27 de octubre');

            $('.counter-casos').attr('data-count','892497');

            $('.counter-fallecidos').attr('data-count','34257');
    
        }
        
        if(b == 19) {

            $('.fecha').text('Miércoles 4 de noviembre');

            $('.counter-casos').attr('data-count','911787');

            $('.counter-fallecidos').attr('data-count','34671');
    
        }

        if(b == 20) {

            $('.fecha').text('Sábado 14 de noviembre');

            $('.counter-casos').attr('data-count','934899');

            $('.counter-fallecidos').attr('data-count','35177');
    
        }

        if(b == 21) {

            $('.fecha').text('Domingo 20 de diciembre');

            $('.counter-casos').attr('data-count','997517');

            $('.counter-fallecidos').attr('data-count','37103');
    
        }

        if(b == 22) {

            $('.fecha').text('Martes 22 de diciembre');

            $('.counter-casos').attr('data-count','1000153');

            $('.counter-fallecidos').attr('data-count','37218');
    
        }

        if(b == 23) {

            $('.fecha').text('Sábado 26 de diciembre');

            $('.counter-casos').attr('data-count','1006318');

            $('.counter-fallecidos').attr('data-count','37414');
    
        }

        if(b == 24) {

            $('.año').text('2021');

            $('.fecha').text('Domingo 17 de enero');

            $('.counter-casos').attr('data-count','1064909');

            $('.counter-fallecidos').attr('data-count','38871');
    
        }

        if(b == 25) {

            $('.fecha').text('Domingo 7 de febrero');

            $('.counter-casos').attr('data-count','1186698');

            $('.counter-fallecidos').attr('data-count','42308');
    
        }
        
        if(b == 26) {

            $('.fecha').text('Miércoles 10 de febrero');

            $('.counter-casos').attr('data-count','1203502');

            $('.counter-fallecidos').attr('data-count','42859');
    
        }

        if(b == 27) {

            $('.fecha').text('Martes 16 de febrero');

            $('.counter-casos').attr('data-count','1244729');

            $('.counter-fallecidos').attr('data-count','44056');
    
        }

        if(b == 28) {

            $('.fecha').text('Lunes 8 de marzo');

            $('.counter-casos').attr('data-count','1374467');

            $('.counter-fallecidos').attr('data-count','47973');
    
        }

        if(b == 30) {

            b = 1;

            $('.año').text('2020');

            $('.fecha').text('Viernes 6 de Marzo');

            $('.counter-casos').attr('data-count','1');

            $('.counter-fallecidos').attr('data-count','0');
    
        }

        $('.counter').each(function() {
            var $this = $(this),
            countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                countNum: countTo
            },
            {
                duration: 2000,
                easing:'linear',
                step: function() {
                $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                $this.text(this.countNum);
                //alert('finished');
                }
            });  
        });
    });

    $('.C-carousel-navigation-button--prev').click(function () {
        b = b - 1;

        if(b == 0) {

            b = 29;

            $('.año').text('2021');

            $('.fecha').text('Lunes 8 de marzo');

            $('.counter-casos').attr('data-count','1374467');

            $('.counter-fallecidos').attr('data-count','47973');

        }

        if(b == 1) {

            $('.fecha').text('Viernes 6 de Marzo');

            $('.counter-casos').attr('data-count','1');

            $('.counter-fallecidos').attr('data-count','0');

        }
    
        if(b == 2) {

            $('.fecha').text('Domingo 15 de marzo');

            $('.counter-casos').attr('data-count','71');

            $('.counter-fallecidos').attr('data-count','0');

        }

        if(b == 3) {

            $('.fecha').text('Jueves 19 de marzo');

            $('.counter-casos').attr('data-count','234');

            $('.counter-fallecidos').attr('data-count','3');
    
        }

        if(b == 4) {

            $('.fecha').text('Miércoles 8 de abril');

            $('.counter-casos').attr('data-count','4342');

            $('.counter-fallecidos').attr('data-count','121');
    
        }

        if(b == 5) {

            $('.fecha').text('Lunes 13 de abril');

            $('.counter-casos').attr('data-count','9784');

            $('.counter-fallecidos').attr('data-count','216');
    
        }

        if(b == 6) {

            $('.fecha').text('Lunes 4 de mayo');

            $('.counter-casos').attr('data-count','47372');

            $('.counter-fallecidos').attr('data-count','1344');
    
        }

        if(b == 7) {

            $('.fecha').text('Lunes 11 de mayo');

            $('.counter-casos').attr('data-count','68822');

            $('.counter-fallecidos').attr('data-count','1961');
    
        }

        if(b == 8) {

            $('.fecha').text('Jueves 4 de junio');

            $('.counter-casos').attr('data-count','183198');

            $('.counter-fallecidos').attr('data-count','5031');
    
        }

        if(b == 9) {

            $('.fecha').text('Martes 23 de junio');

            $('.counter-casos').attr('data-count','260810');

            $('.counter-fallecidos').attr('data-count','8404');
    
        }

        if(b == 10) {

            $('.fecha').text('Lunes 13 de julio');

            $('.counter-casos').attr('data-count','330123');

            $('.counter-fallecidos').attr('data-count','12054');
    
        }

        if(b == 11) {

            $('.fecha').text('Domingo 19 de julio');

            $('.counter-casos').attr('data-count','353590');

            $('.counter-fallecidos').attr('data-count','13187');
    
        }

        if(b == 12) {

            $('.fecha').text('Miércoles 22 de julio');

            $('.counter-casos').attr('data-count','366550');

            $('.counter-fallecidos').attr('data-count','17455');
    
        }

        if(b == 13) {

            $('.fecha').text('Viernes 21 de agosto');

            $('.counter-casos').attr('data-count','576067');

            $('.counter-fallecidos').attr('data-count','27245');
    
        }

        if(b == 14) {

            $('.fecha').text('Miércoles 26 de agosto');

            $('.counter-casos').attr('data-count','613378');

            $('.counter-fallecidos').attr('data-count','28124');
    
        }

        if(b == 15) {

            $('.fecha').text('Domingo 30 de agosto');

            $('.counter-casos').attr('data-count','647166');

            $('.counter-fallecidos').attr('data-count','28788');
    
        }

        if(b == 16) {

            $('.fecha').text('Martes 15 de setiembre');

            $('.counter-casos').attr('data-count','738020');

            $('.counter-fallecidos').attr('data-count','30927');
    
        }

        if(b == 17) {

            $('.fecha').text('Miércoles 16 de setiembre');

            $('.counter-casos').attr('data-count','744400');

            $('.counter-fallecidos').attr('data-count','31051');
    
        }

        if(b == 18) {

            $('.fecha').text('Miércoles 27 de octubre');

            $('.counter-casos').attr('data-count','892497');

            $('.counter-fallecidos').attr('data-count','34257');
    
        }
        
        if(b == 19) {

            $('.fecha').text('Miércoles 4 de noviembre');

            $('.counter-casos').attr('data-count','911787');

            $('.counter-fallecidos').attr('data-count','34671');
    
        }

        if(b == 20) {

            $('.fecha').text('Sábado 14 de noviembre');

            $('.counter-casos').attr('data-count','934899');

            $('.counter-fallecidos').attr('data-count','35177');
    
        }

        if(b == 21) {

            $('.fecha').text('Domingo 20 de diciembre');

            $('.counter-casos').attr('data-count','997517');

            $('.counter-fallecidos').attr('data-count','37103');
    
        }

        if(b == 22) {

            $('.fecha').text('Martes 22 de diciembre');

            $('.counter-casos').attr('data-count','1000153');

            $('.counter-fallecidos').attr('data-count','37218');
    
        }

        if(b == 23) {
            $('.año').text('2020');

            $('.fecha').text('Sábado 26 de diciembre');

            $('.counter-casos').attr('data-count','1006318');

            $('.counter-fallecidos').attr('data-count','37414');
    
        }

        if(b == 24) {

            $('.año').text('2021');

            $('.fecha').text('Domingo 17 de enero');

            $('.counter-casos').attr('data-count','1064909');

            $('.counter-fallecidos').attr('data-count','38871');
    
        }

        if(b == 25) {

            $('.fecha').text('Domingo 7 de febrero');

            $('.counter-casos').attr('data-count','1186698');

            $('.counter-fallecidos').attr('data-count','42308');
    
        }
        
        if(b == 26) {

            $('.fecha').text('Miércoles 10 de febrero');

            $('.counter-casos').attr('data-count','1203502');

            $('.counter-fallecidos').attr('data-count','42859');
    
        }

        if(b == 27) {

            $('.fecha').text('Martes 16 de febrero');

            $('.counter-casos').attr('data-count','1244729');

            $('.counter-fallecidos').attr('data-count','44056');
    
        }

        $('.counter').each(function() {
            var $this = $(this),
            countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                countNum: countTo
            },
            {
                duration: 2000,
                easing:'linear',
                step: function() {
                $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                $this.text(this.countNum);
                //alert('finished');
                }
            });  
        });

    });

    

});