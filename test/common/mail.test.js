var mail = require('../../common/mail');

describe('test/common/mail.test.js', function () {
  describe('sendActiveMail', function () {
    it('should ok', function () {
      mail.sendActiveMail('tangxm90@gmail.com', 'token', 'jacksontian');
    });
  });

  describe('sendResetPassMail', function () {
    it('should ok', function () {
      mail.sendResetPassMail('tangxm90@gmail.com', 'token', 'jacksontian');
    });
  });

});
