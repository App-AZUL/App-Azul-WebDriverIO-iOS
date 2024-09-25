import { $ } from "@wdio/globals";

class NewAcessScreen {

    get afiliarmeButton() {
        return $("//XCUIElementTypeButton[@name=\"Afiliarme\"]");
    }


    get pressBackButton(){
        return $("//XCUIElementTypeImage[@name=\"left-arrow\"]");
    }

    get YaSoyClienteButton(){
        return $('//XCUIElementTypeButton[@name="Ya soy cliente"]');
    }
    

}



export default new NewAcessScreen();