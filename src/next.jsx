import $ from 'jquery';

let Next = () => {

    $(function($) {
        $('[data-numeric]').payment('restrictNumeric');
        $('.cc-number').payment('formatCardNumber');
        $('.cc-exp').payment('formatCardExpiry');
        $('.cc-cvc').payment('formatCardCVC');
        $.fn.toggleInputError = function(erred) {
        this.parent('.form-group').toggleClass('has-error', erred);
        return this;
        };
        $('form').submit(function(e) {
        e.preventDefault();
        var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
        $('.cc-brand').text(cardType);
        $('.validation').removeClass('text-danger text-success');
        $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
        });
    });

    return(
        <>
            <div className="container-fluid">
                <div className="row" id="shodowContainer">
                    <div className="col-md-9 col-sm-12">
                        <h3 className="text-light p-3 mt-4">
                            Payment Here!
                        </h3>
                        <div className="container cardBlur p-3 mb-3">
                            <div className="row p-3">
                                <div className="col-md-9 col-sm-12">
                                    <h5>
                                        Credit Card / Debit Card Payment
                                    </h5> 
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <i className="fab fa-cc-visa fa-2x text-primary"></i>&nbsp;&nbsp;
                                    <i className="fab fa-cc-mastercard fa-2x text-danger"></i>&nbsp;&nbsp;
                                    <i className="fab fa-google-pay fa-2x text-warning"></i>
                                </div>
                                <hr />
                                <div class="form-group mb-3"> 
                                    <small><label for="cc-number" class="control-label">Card Number</label></small> 
                                    <input id="cc-number" type="tel" class="input-lg form-control cc-number" autocomplete="cc-number" placeholder="•••• •••• •••• ••••"/> 
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <div class="form-group"> 
                                            <small><label htmlFor="cc-exp" class="control-label">Card Expiry</label></small> 
                                            <input id="cc-exp" type="tel" class="input-lg form-control cc-exp" autocomplete="cc-exp" placeholder="•• / ••••"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <small><label htmlFor="cc-cvc" class="control-label">CVC</label></small>
                                            <input id="cc-cvc" type="tel" class="input-lg form-control cc-cvc" autocomplete="off" placeholder="•••"/> 
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group"> 
                                    <small><label htmlFor="numeric" class="control-label">Card Holder Name</label></small> 
                                    <input type="text" class="input-lg form-control"/>
                                </div>
                                <div class="form-group text-center mt-4"> 
                                    <input value="MAKE PAYMENT" type="button" class="btn btn-primary"/> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">

                    </div>
                </div>
            </div>
        </>
    );
}
export default Next;