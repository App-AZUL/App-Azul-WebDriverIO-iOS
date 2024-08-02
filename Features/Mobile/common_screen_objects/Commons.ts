import { $ } from "@wdio/globals";

class Commons {
    get backButton () {
        return $("//XCUIElementTypeImage[@name=\"left-arrow\"]")
    }
    get okButton() {
        return $(
          "UPDATE XPATH"
        );
      }
}

export default new Commons ();
