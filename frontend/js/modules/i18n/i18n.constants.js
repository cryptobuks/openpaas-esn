(function() {
  'use strict';

  angular.module('esn.i18n')
    .constant('ESN_I18N_AVAILABLE_LANGUAGE', ['en', 'fr', 'vi'])
    .constant('ESN_I18N_AVAILABLE_LANGUAGE_KEYS', {
      'en_*': 'en',
      'fr_*': 'fr',
      'vi_*': 'vi'
    });
})();
