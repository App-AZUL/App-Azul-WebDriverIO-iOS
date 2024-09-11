import Common from "../Features/Mobile/common_screen_objects/Commons";

class Helpers {
  async pressAppBackButton() {
    await Common.backButton.click();
  }
  async dismissPopUp() {
    await Common.okButton.click();
  }
  async closeKeyboard() {
    await Common.hideKeyboard.click();
  }
  async clearTextField(){/*
    for (let i = 0; i < 16; i++) {
      (await Common.deleteKey).click();
  }
  */
  }
  
}

  

export default new Helpers();
