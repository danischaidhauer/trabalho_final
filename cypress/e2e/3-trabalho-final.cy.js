

describe('loja Goya', () => {
    beforeEach(() => {
      cy.visit('https://shop.lm.mentorama.com.br/');
    })
  
    it('cadastrar novo usuario', () => {
      cy.get('a[href="https://shop.lm.mentorama.com.br/?page_id=18"]').click();
      cy.get('.mfp-close').should('be.visible').click();
    })

    it('Logar com e-mail/nome de usuário e senha válidos', () => {
        cy.get('a[href="https://shop.lm.mentorama.com.br/?page_id=18"]').click();
        cy.wait(2000);
        cy.get('#et-login-popup-wrap').should('be.visible');
        cy.get('input[id="username"]').click().type('juanmariodossantos@elconsultoria.com.br');
        cy.get('input[id="password"]').type('EdfPyeiO3G');
        cy.get('.woocommerce-form__label').click();
        cy.get('.woocommerce-button').click();
      })
      
      it('Esqueci minha senha', () => {
        cy.get('a[href="https://shop.lm.mentorama.com.br/?page_id=18"]').click();
        cy.get('.woocommerce-LostPassword > a').click();
        cy.get('.fl-label').type('juanmariodossantos@elconsultoria.com.br');
        cy.get('.woocommerce-Button').click();
      })

      it('Clicar em comprar um item feminino', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4087 > a').click();
        cy.get('.post-3645').click();
        cy.wait(2000);
        cy.get('.variations_form > [data-product_id="3645"] > .variations > tbody > tr > .value > .variable-items-wrapper > .button-variable-item-xp > .variable-item-contents > .variable-item-span').click();
        cy.get('.variations_form > [data-product_id="3645"] > .single_variation_wrap > .woocommerce-variation-add-to-cart > .et-wishlist-div-open > .single_add_to_cart_button').click();
      })

      
      it('Clicar em comprar um item masculino', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4085 > a').click();
        cy.wait(2000);
        cy.get('.post-1517').click();
        cy.get('.et-pro-summary-content > .cart > .et-wishlist-div-open > .single_add_to_cart_button').click();    
       })
       
      it('Clicar em comprar um item em caixas de som', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4086 > a').click();
        cy.wait(2000);
        cy.get('.after_shop_loop_actions').click();
        cy.get('.variations_form > [data-product_id="2030"] > .variations > tbody > tr > .value > .variable-items-wrapper > .color-variable-item-branco > .variable-item-contents > .variable-item-span').click();
        cy.get('.variations_form > [data-product_id="2030"] > .single_variation_wrap > .woocommerce-variation-add-to-cart > .et-wishlist-div-open > .single_add_to_cart_button').click();
      })   

      it('Testar o botão “Buy on amazon”', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4087 > a').click();
        cy.get('.post-3745').click();
        cy.get('.et-pro-summary-content > .cart > .single_add_to_cart_button').click();
      }) 

      it('Verificar se os itens foram adicionados no carrinho', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4087 > a').click();
        cy.get('.post-3749').click();
        cy.get('.et-pro-summary-content > .cart > .et-wishlist-div-open > .single_add_to_cart_button').click();
        cy.get('.header-right-items > .quick_cart > .feather > line').click();
        cy.get('.woocommerce-mini-cart__buttons > [href="https://shop.lm.mentorama.com.br/?page_id=16"]').click();
        cy.get('.cart-items').should('be.visible');

      }) 

      it('Clicar em “Finalização de compra” e pagamento por cheque', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4087 > a').click();
        cy.get('.post-3749').click();
        cy.get('.et-pro-summary-content > .cart > .et-wishlist-div-open > .single_add_to_cart_button').click();
        cy.get('.header-right-items > .quick_cart > .feather > line').click();
        cy.get('.woocommerce-mini-cart__buttons > [href="https://shop.lm.mentorama.com.br/?page_id=16"]').click();
        cy.get('.cart-items').should('be.visible');
        cy.get('.checkout-button').click();
        cy.get('#billing_first_name_field > .fl-label').type('Juan Mário');
        cy.get('#billing_last_name_field > .fl-label').type('dos Santos');
        cy.get('#billing_address_1').type('Avenida dos Imigrantes, 578');
        cy.get('#billing_city_field > .fl-label').type('Araguaia');
        cy.get('#select2-billing_state-container').click();
        cy.get('.select2-search__field').type('Espirito Santo').type('{enter}');
        cy.get('#billing_postcode').type('29258-982');
        cy.get('#billing_phone').type('(27) 99625-2407');
        cy.get('#billing_email_field > .fl-label').type('juanmariodossantos@elconsultoria.com.br');
        cy.get('#terms').check();
        cy.get('#place_order').click();
        cy.get('.col-lg-8 > .page-title').should('be.visible');

      }) 
      it('Clicar em “Finalização de compra” e pagamento na entrega', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4087 > a').click();
        cy.get('.post-3749').click();
        cy.get('.et-pro-summary-content > .cart > .et-wishlist-div-open > .single_add_to_cart_button').click();
        cy.get('.header-right-items > .quick_cart > .feather > line').click();
        cy.get('.woocommerce-mini-cart__buttons > [href="https://shop.lm.mentorama.com.br/?page_id=16"]').click();
        cy.get('.cart-items').should('be.visible');
        cy.get('.checkout-button').click();
        cy.get('#billing_first_name_field > .fl-label').type('Juan Mário');
        cy.get('#billing_last_name_field > .fl-label').type('dos Santos');
        cy.get('#billing_address_1').type('Avenida dos Imigrantes, 578');
        cy.get('#billing_city_field > .fl-label').type('Araguaia');
        cy.get('#select2-billing_state-container').click();
        cy.get('.select2-search__field').type('Espirito Santo').type('{enter}');
        cy.get('#billing_postcode').type('29258-982');
        cy.get('#billing_phone').type('(27) 99625-2407');
        cy.get('#billing_email_field > .fl-label').type('juanmariodossantos@elconsultoria.com.br');
        cy.get('#payment_method_cod').check();
        cy.get('#terms').check();
        cy.get('#place_order').click();
        cy.get('.col-lg-8 > .page-title').should('be.visible');

      }) 

      it('Adicionar um item nos favoritos ', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4087 > a').click();
        cy.get('.post-3745').click();
        cy.wait(2000);
        cy.get('.cart > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist').click();
        cy.wait(2000);
        cy.get('.quick_wishlist > .feather').click();   
        cy.get('div.container > .row > .col-lg-8').should('be.visible');

      }) 
      it('Pesquisar na lupa por um item ', () => {
        cy.get('.quick_search > .feather').click();
        cy.get('#woocommerce-product-search-field-1').type('BOLSA {enter}');

      }) 

      it('Inscrever e-mail incorreto para ganhar desconto de 10%', () => {
        cy.get('.col-12 > .aligncenter').scrollIntoView();
        cy.get('[type="email"]').type('juanmariodossantos2154654654$$$');
        cy.get('.mc4wp-form-fields > [type="submit"]').click();
        cy.get('div[class="footer-middle footer-widgets"]').should('be.visible');
      })

      it('Inscrever e-mail incorreto para ganhar desconto de 10%', () => {
        cy.get('.col-12 > .aligncenter').scrollIntoView();
        cy.get('[type="email"]').type('juanmariodossantos@elconsultoria.com.br');
        cy.get('.mc4wp-form-fields > [type="submit"]').click();
      })

      it('Envio de formulário na tela de Contato', () => {
        cy.get('#nav_menu-1').should('be.visible').scrollIntoView();
        cy.get('#menu-item-131 > a').click();
        cy.get(':nth-child(1) > .no-padding > .vc_col-sm-12 > :nth-child(1) > :nth-child(1) > .vc_row > .wpb_column > .vc_column-inner > :nth-child(1)').should('be.visible');
        cy.get('.header-center-items > .logo-holder > .logolink > .bg--light').click();
        cy.get('#nav_menu-1').should('be.visible').scrollIntoView();
        cy.get('#menu-item-3023 > a').click();
        cy.get('div[id="nf-form-1-cont"]').should('be.visible');
      })

      it('Verificar o funcionamento dos botões de Ajuda', () => {
        cy.get('.footer2').should('be.visible').scrollIntoView();
        cy.get('#menu-item-3112 > a').click();
        cy.get('.title_outer > .page-title').should('be.visible');
        cy.get('.header-center-items > .logo-holder > .logolink > .bg--light').click();
        cy.get('#menu-item-74 > a').click();
        cy.get('.title_outer > .page-title').should('be.visible');
      })

      it('Verificar o funcionamento dos botões de Catálogo', () => {
        cy.get('#menu-item-4084 > [href="https://shop.lm.mentorama.com.br/?page_id=7"]').click();

      })

      it(' Verificar o funcionamento dos ícones de redes sociais', () => {
        cy.get('#et_social_media_widget-1').should('be.visible').scrollIntoView();
        cy.get(':nth-child(1) > a > .et-icon').click();
        cy.get(':nth-child(2) > a > .et-icon').click();
        cy.get('.social-icons > :nth-child(3) > a').click();
      })

      it('Verificar o funcionamento do botão “load more”', () => {
        cy.get('#menu-item-4084 > [href="https://shop.lm.mentorama.com.br/?page_id=7"]').click();
        cy.get('.et-infload-btn').scrollIntoView().click();
      })

      it('Visualizar todas as avaliações no site', () => {
        cy.get(':nth-child(3) > .no-padding').scrollIntoView();
        cy.get('#slick-slide-control11').click();
        
      })

      it('Testar o filtro em catálogo feminino', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4087 > a').click();
        cy.get('#et-shop-filters').click();
        cy.get('a > .name').click();
        cy.get('.wcapf-price-filter-wrapper').click();
        cy.get('header > .et-close').click();
        
      })
    
      it('Testar o filtro em catálogo masculino', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4085 > a').click();
        cy.get('#et-shop-filters').click();
        cy.get('a > .name').click();
        cy.get('[style="left: 0%;"]').click();
        cy.get('header > .et-close').click();
        
      })

      it('Testar o filtro em catálogo de caixas de som', () => {
        cy.get('.header-left-items > .hamburger-menu > .menu-toggle > .bars').click();
        cy.get('#menu-main-2 > .menu-item-type-post_type > .sub-menu > .menu-item-4086 > a').click();
        cy.get('#et-shop-filters').click();
        cy.get('a > .name').click();
        cy.get('header > .et-close').click();
        
      })

      it('Testar filtro de ordenação', () => {
        cy.get('#menu-item-4084 > [href="https://shop.lm.mentorama.com.br/?page_id=7"]').click();
        cy.get('.orderby').select('popularity');
        cy.wait(2000);
      })
})