import { $ } from "@wdio/globals";

class Common {
    get backButton () {
        return $("//XCUIElementTypeImage[@name=\"left-arrow\"]")
    }
}

export default new Common ();
