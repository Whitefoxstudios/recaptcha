(function ($, window, document) {
    Drupal.behaviors.recaptcha = {
        widgets: {},
        attach: function (context, settings) {
            // Check if the reCAPTCHA script is loaded yet. If not, don't worry: the
            // onload callback recaptchaOnLoad() will make sure that this function is
            // called again once grecaptcha is defined.
            if (typeof grecaptcha == 'undefined') {
                return;
            }
            $('.g-recaptcha', context).once('drupal-recaptcha').each(function () {
                //grecaptcha.render(this, $(this).data());
                Drupal.behaviors.recaptcha.widgets[this.id] = grecaptcha.render(this, $(this).data());
            });
        }
    };
})(jQuery, window, document);