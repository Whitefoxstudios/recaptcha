/**
 * @file
 * Invisible reCaptcha behaviors.
 */

/**
 * ID of the form.
 *
 * @type {string}
 */

var submittedFormId = '';
/**
 * reCaptcha data-callback that submits the form.
 *
 * @param token
 *   The validation token.
 */
function onInvisibleSubmit(token) {
  document.getElementById(submittedFormId).submit();
}

(function ($) {
  /**
   * Handles the submission of the form with the invisible reCaptcha.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for the invisible reCaptcha.
   */

  Drupal.behaviors.invisibleRecaptcha = {
    attach: function(context, settings) {
      $('form', context).each(function () {
        var $form = $(this);

        if ($form.find('.g-recaptcha[data-size="invisible"]').length) {
          $form.find('input[type="submit"]').click(function (e) {
            e.preventDefault();
            validateInvisibleCaptcha($form);
          });
        }
      });

      /**
       * Triggers the reCaptcha to validate the form.
       *
       * @param {jQuery} $form
       *   The form object to be validated.
      */
      function validateInvisibleCaptcha($form) {
       submittedFormId = $form.attr('id');
        //grecaptcha.execute();
          grecaptcha.execute(Drupal.behaviors.recaptcha.widgets[$('.g-recaptcha[data-size="invisible"]', $form).attr('id')]);
      }
    }
  };
})(jQuery);