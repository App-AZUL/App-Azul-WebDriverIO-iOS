import { $ } from "@wdio/globals";

class NewAcessScreen {

    get afiliarmeButton() {
        return $("//XCUIElementTypeButton[@name=\"Afiliarme\"]");
    }


    get pressBackButton(){
        return $("//XCUIElementTypeImage[@name=\"left-arrow\"]");
    }
    

}



export default new NewAcessScreen();