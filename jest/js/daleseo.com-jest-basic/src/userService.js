const messageService = require("./messageService");

module.exports = {
  register(user) {
    /* DB에 회원 추가 */
    const message = "회원 가입을 환영합니다!";
    messageService.sendEmail(user.email, message);
    messageService.sendSMS(user.phone, message);
  },
  deregister(user) {
    /* DB에 회원 삭제 */
    const message = "탈퇴 처리 되었습니다.";
    messageService.sendEmail(user.email, message);
    messageService.sendSMS(user.phone, message);
  },
};
