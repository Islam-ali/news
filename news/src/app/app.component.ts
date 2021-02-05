import { Component } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import * as $ from 'jquery';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    })
    export class AppComponent {
    title = 'news';
    search:string="";

    ngOnInit()
    {



                    /****************LOADING******************* */
                $(window).on( 'load' ,function(){
                    $('body').css({'overflow-y' : 'auto'})
                    $('.bg-sk').fadeOut(500)
                });
                /***************icon*************** */
                const icons = document.querySelectorAll('.icon');
                icons.forEach (icon => {  
                icon.addEventListener('click', (event) => {
                    icon.classList.toggle("open");
                });
                });
                /**************toggle nav*************** */
                $('.icon').click(function(){
                    $('.navbar-nav').toggleClass('show')
                })
                /**********CLOCK**************** */
                showtime();
                function showtime(){
                    var date = new Date();
                    var y = date.getFullYear();
                    var mon = date.toLocaleDateString("ar" , {month:"long"});
                    var d = date.getDate();
                    var w = date.toLocaleDateString("ar", {weekday:"long"})
                    var h = date.getHours();
                    var m = date.getMinutes();
                    var session = "ص";
            
                    if (h >= 12)
                    {
                        session = "م"
                    }
                    if(h == 0 )
                    {
                        h = 12;
                    }
                    if(h > 12)
                    {
                        h = h - 12;
                    }
                    let z:any = "0";
                    if(h < 10)
                    {
                        h =  z + h;
                    }
                    if(m < 10)
                    {
                        m = z + m;
                    }
            
                    $('.h').html(h);
                    $('.m').html(m);
                    $('.AM').html(session);
                    $('.y').html(y);
                    $('.mon').html(mon);
                    $('.d').html(d);
                    $('.w').html(w);
            
                }

            /******************icon-up**************** */
            $('.icon-top').click(function(){
                $('body , html').animate({scrollTop:0},600)
            });
            /********************************************** */
            $(window).scroll(function(){
                if($(window).scrollTop() > 500)
                {
                    $('.icon-top').addClass('d-flex')
                }
                else
                {
                    $('.icon-top').removeClass('d-flex')
                }
            })
    }
}
