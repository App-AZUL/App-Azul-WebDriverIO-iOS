import { $ } from "@wdio/globals";

class PinConfigurationScreen {
  get screenTitle() {
    return $(
      '//XCUIElementTypeStaticText[@name="Configura tu PIN de seguridad"]'
    );
  }
}

export default new PinConfigurationScreen();