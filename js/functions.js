function headerBackgroundoTvarkymas(){
    if ($(document).scrollTop() >= 150) {
        $('header').addClass('fixed-header');
     }
     else {
        $('header').removeClass('fixed-header');
     }
     return;
}

function menuAktiviKlase() {
    var nuorodu_skaicius = $('#main_nav > a').length,
        href_verte = '';

    for ( var i=0; i<nuorodu_skaicius; i++ ) {
        href_verte = $('#main_nav > a').eq(i).attr('href');

        if ( scrollY >= $(href_verte).offset().top &&
            scrollY < $(href_verte).offset().top + $(href_verte).height() ) {
            $('#main_nav > a').removeClass('active');
            $('#main_nav > a[href="'+href_verte+'"]').addClass('active');
        } 
    }return;
}

function renderServiceBlock(data){
    var html = '';
    for ( var i=0; i<3; i++) {
        html += renderOneServiceBlock( data[i] );
    }
    $('#services > div > #service_block').html(html);
    return;
}

function renderOneServiceBlock( duomenys ) {
    var html = ' <div class="service-box">\
                    <div class="icon-box">\
                        <i class="fa fa-'+duomenys.ikona+'"></i>\
                    </div>\
                    <h4>'+duomenys.pavadinimai+'</h4>\
                    <p>'+duomenys.tekstai+'</p>\
                </div>\ '
    return html;
}

function renderPortfolioGallery( data ) {
    var html ='';
    html += renderPortfolioGalleryFilter( data );
    html += renderPortfolioGalleryContent( data );
    $('#portfolio_gallery').html(html);
    return;
}

function renderPortfolioGalleryFilter( data ) {
    var unikalus_tagai = [],
        ar_unikalus = 0,
        ka_itraukti = '';
    for (var i=0; i<data.length; i++) {
        ar_unikalus = 0;
        ka_itraukti = data[i].tagas;
        if ( ka_itraukti !== '' &&
             typeof(ka_itraukti) === 'string' ) {
            for ( var e=0; e<unikalus_tagai.length; e++ ) {
                if ( ka_itraukti.toLowerCase() === unikalus_tagai[e].toLowerCase() ) {
                    ar_unikalus++;
                }
            }
            if ( ar_unikalus === 0 ) {
                unikalus_tagai.push( ka_itraukti.toLowerCase() );
            }
        } else {
            console.log('Sorry, bet davei ne teksta, arba jis tuscias.');
        }
    }

    var html = '<div id="portfolio_filter">\
                    <div class="active2">ALL</div>';
        for (var i=0; i<unikalus_tagai.length; i++) {
            html += '<div>'+unikalus_tagai[i]+'</div>';
        }
        html += '</div>';
    return html;
}

function renderPortfolioGalleryContent( data ) {
    var html = '<div id="portfolio_content">';
        for ( var i=0; i<data.length; i++ ) {
            html += renderOnePortfolioElement( data[i] );
        }
        html += '</div>';
    return html;
}

function renderOnePortfolioElement( data ) {
    var HTML = '';
    if ( data.tagas !== '' &&
         typeof(data.tagas) === 'string' &&
         data.nuotrauka !== '' ) {
        HTML = '<div class="portfolio-item" style="background-image:url(img/'+ data.nuotrauka +');">\
                        <div class="black-layer"></div>\
                        <div class="tekstines-vertes">\
                            <div class="title-2">'+ data.pavadinimas +'</div>\
                            <div class="tag">'+ data.tagas.toLowerCase() +'</div>\
                        </div>\
                    </div>';
    }
    return HTML;
}

function renderBlogGallery( data ){
    var html = '';
    for ( var i=0; i<3; i++) {
        html += renderOneBlogElement( data[i] );
    }
    $('#blog_gallery').html(html);
    return;
}

function renderOneBlogElement( duomenys ) {
    var html = ' <div class="blog-box">\
                    <div class="image12">\
                        <img src="'+duomenys.nuotrauka+'">\
                    </div>\
                    <h4><a href="#">'+duomenys.pavadinimas+'</a></h4>\
                    <h5>'+duomenys.data+'</h5>\
                    <p>'+duomenys.tekstas+'</p>\
                    <div class="btn-mr"><button class="btn">READ MORE</button></div>\
                </div>\ '
    return html;
}

function filterAction(){
    $('#portfolio_gallery').on('click', '#portfolio_filter > div', function(){
        var tag = $(this).text(),
            kiekis = $('#portfolio_content > .portfolio-item').length,
            element;
        if ( tag === 'ALL' ) {
            for ( var i=0; i<kiekis; i++ ) {
                element = $('#portfolio_content > .portfolio-item').eq(i);
                element.css('display', 'block');
            }
        } else {
            for ( var i=0; i<kiekis; i++ ) {
                element = $('#portfolio_content > .portfolio-item').eq(i);
                if ( tag === element.find('.tag').text() ) {
                    element.css('display', 'block');
                } else {
                    element.css('display', 'none');
                }
            }
        }
    })
}

function onclick(){
    document.getElementById("onclick").onclick = function () {
        location.href = "#contact";
    };
}

function responsiveNAV(){
    $('.menu-toggle').click(function(){
        $('#main_nav').toggleClass('active');
    })
}