"use strict";
$(document).ready(function(){

    headerBackgroundoTvarkymas();

    renderServiceBlock(service_data);
    renderPortfolioGallery( portfolio_gallery );
    renderBlogGallery( blog_gallery );
    filterAction();
    onclick();
    responsiveNAV();

    menuAktiviKlase();

// on scroll - update header background
$(document).scroll(function(){
    headerBackgroundoTvarkymas();
    menuAktiviKlase();

});

});