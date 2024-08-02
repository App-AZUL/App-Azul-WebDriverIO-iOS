import { $ } from "@wdio/globals";

class LoginScreen {

    get olvidarContrasenaButton() {
        return $("//XCUIElementTypeButton[@name=\" ¿Se te olvidó tu contraseña?\"]");
    }
}

export default new LoginScreen();