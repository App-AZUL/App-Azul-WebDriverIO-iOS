import { $ } from "@wdio/globals";

class AffiliationRequirementsScreen {
    get screenTitle() {
        return $("//XCUIElementTypeStaticText[@name=\"Requisitos de afiliación\"]");
    }
}

export default new AffiliationRequirementsScreen();