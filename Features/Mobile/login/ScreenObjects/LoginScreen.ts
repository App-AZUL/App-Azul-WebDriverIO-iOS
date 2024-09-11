import { $ } from "@wdio/globals";
import AffiliationRequirementsScreen from "../../azul_affiliation/ScreenObjects/AffiliationRequirementsScreen.ts";


class LoginScreen {
  get screenTitle() {
    return $(
      "//XCUIElementTypeStaticText[@name='Afíliate aquí']"
    );
  }
      get usernameInput() {
        return $('//XCUIElementTypeOther[XCUIElementTypeImage[@name="User"]]/XCUIElementTypeTextField');
      }
      get passwordInput() {
        return $(
          '//XCUIElementTypeOther[XCUIElementTypeImage[@name="Password"]]/XCUIElementTypeSecureTextField'
        );
      }
      get iniciarSesionButton() {
        return $("//XCUIElementTypeButton[@name='Iniciar sesión']");
      }
      get resetPasswordButton() {
        return $("//XCUIElementTypeButton[@name=' ¿Se te olvidó tu contraseña?']");
      }
      get afiliateAquiButton() {
        return $("//XCUIElementTypeButton[@name='Afíliate aquí']");
      }
      get appVersionLabel() {
        return $("//XCUIElementTypeStaticText[@name='Version 10.0.2 (5)']");
      }
      get informativeText() {
        return $("//XCUIElementTypeStaticText[@name='¿Aún no eres cliente de AZUL o  no has completado tu afiliación?']");
      }
      get resetPasswordWebTitle() {
        return $("//XCUIElementTypeStaticText[@name='¡Hola! Para poder recuperar tu contraseña, por favor, responde la información que a continuación te solicitamos:']");
      }
    
      /* Pop up messages */

    
    /* Functions */
  async verifyLoginScreenElements() {

    //Verify user input
    await this.usernameInput.waitForExist({
      timeout: 5000,
    });
    await expect(this.usernameInput).toBeExisting();

    //Verify password input
    await this.passwordInput.waitForExist({
      timeout: 5000,
    });
    await expect(this.passwordInput).toBeExisting();

    //verify reset passwordd button
    await this.resetPasswordButton.waitForExist({
      timeout: 5000,
    });
    await expect(this.resetPasswordButton).toBeExisting();

    //verify afiliate aqui button
    await this.afiliateAquiButton.waitForExist({
      timeout: 5000,
    });
    await expect(this.afiliateAquiButton).toBeExisting();

    //verify version label
    await this.appVersionLabel.waitForExist({
      timeout: 5000,
    });
    await expect(this.appVersionLabel).toBeExisting();
  }
  async verifyResetPassword() {
    await this.resetPasswordButton.click();
    driver.back();

    await this.screenTitle.waitForExist({
      timeout: 5000,
    });
    await expect(this.screenTitle).toBeExisting();
  }

  async verifyAfiliateAquiButton() {
    await this.afiliateAquiButton.click();
    await AffiliationRequirementsScreen.screenTitle.waitForExist({
      timeout: 5000,
    });
    await expect(AffiliationRequirementsScreen.screenTitle).toBeExisting();
  }
}

export default new LoginScreen();