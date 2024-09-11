import { $ } from "@wdio/globals";

class Commons {
    get backButton () {
        return $('//*[XCUIElementTypeImage[@name="left-arrow"]]/XCUIElementTypeButton')
    }
    get okButton() {
        return $(
          "//XCUIElementTypeButton[@name=\"Continuar\"]"
        );
      }

    get hideKeyboard() {
        return $(
          "//XCUIElementTypeButton[@name='Done']"
        );
    }

    get deleteKey() {
      return $(
        "//XCUIElementTypeKey[@name='delete']"
      );
    }
}

export default new Commons ();
