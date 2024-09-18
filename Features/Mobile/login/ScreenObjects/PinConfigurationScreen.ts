import { $ } from "@wdio/globals";

class PinConfigurationScreen {
  get screenTitle() {
    return $(
      '//XCUIElementTypeStaticText[@name="Configura tu PIN de seguridad"]'
    );
  }
  get incorrectPinConfirmationTitle() {
    return $(
      '//XCUIElementTypeStaticText[@name="Los dígitos no coinciden"]'
    );
  }
  get incorrectPinConfirmationMessage() {
    return $(
      '//XCUIElementTypeStaticText[@name="Por favor inténtalo de nuevo"]'
    );
  }

  get equalPinConfirmationMessage() {
    return $(
      '//XCUIElementTypeStaticText[@name="Utiliza un PIN diferente al anterior"]'
    );

  }
  async typePin(arg0: number) {
    let pinString = arg0.toString();
    for (let i = 0; i < pinString.length; i++) {
      let buttonDigitNumber = pinString[i];
      let buttonXpath =
        '//XCUIElementTypeStaticText[@name="' +
        buttonDigitNumber +
        '"]';
      let buttonDigitElement = driver.$(buttonXpath);
      await buttonDigitElement.click();
    }
  }
}

export default new PinConfigurationScreen();