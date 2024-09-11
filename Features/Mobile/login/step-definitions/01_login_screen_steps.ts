import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import OnboardingScreen from "../ScreenObjects/OnboardingScreen.ts";
import NewAccessScreen from "../ScreenObjects/NewAccessScreen.ts";
import LoginScreen from "../ScreenObjects/LoginScreen.ts";
import PinConfigurationScreen from "../ScreenObjects/PinConfigurationScreen.ts";
import AffiliationRequirementsScreen from "../../azul_affiliation/ScreenObjects/AffiliationRequirementsScreen.ts";
import Helpers from "../../../../Helpers/Helpers.ts";


/*  Verify Onboarding Screen steps  */
Given("User started the app by first time", async () => {
  await OnboardingScreen.bienvenidoTitle.waitForExist({ timeout: 5000 });
  await expect(OnboardingScreen.bienvenidoTitle).toBeExisting();
});

When(
  "User checks the elements in the screen matches with the provided design",
  async () => {
    await OnboardingScreen.aprendeComoHacerloButton.waitForExist({
      timeout: 5000,
    });
    await expect(OnboardingScreen.aprendeComoHacerloButton).toBeExisting();

    await OnboardingScreen.saltarDemostracionButton.waitForExist({
      timeout: 5000,
    });
    await expect(OnboardingScreen.saltarDemostracionButton).toBeExisting();

    await OnboardingScreen.aprendeComoHacerloButton.click();
    await OnboardingScreen.verifyOnboardingTexts();
  }
);

Then("User can continue to New Access Screen", async () => {
  await OnboardingScreen.comencemosButton.click();
});

//----------------------------------------------------------------------------

/*  Verify New Access screen steps  */
Given(`User is on the New Access Screen`, async () => {
  //await NewAccessScreen.screenTitle.waitForExist({ timeout: 5000 });
  //await expect(NewAccessScreen.screenTitle).toBeExisting();
});

When(`User press on Afiliarme`, async () => {
  await NewAccessScreen.afiliarmeButton.click();
});

Then(`User should be on the Affiliation Requirements Screen`, async () => {
  await AffiliationRequirementsScreen.screenTitle.waitForExist({
    timeout: 5000,
  });
  await expect(AffiliationRequirementsScreen.screenTitle).toBeExisting();
});

When(`User press back`, async () => {
  await Helpers.pressAppBackButton();
});



Then(`User should be on Login Screen`, async () => {
  //await LoginScreen.verifyLoginScreenElements();
  await LoginScreen.screenTitle.waitForExist({
    timeout: 5000,
  });
  await expect(LoginScreen.screenTitle).toBeExisting();
});

//----------------------------------------------------------------------------

/*  Verify Reset Password  */

Given(`User is on Login screen`, async () => {
  await LoginScreen.verifyLoginScreenElements();
});

When(`User clicks Reset password button`, async () => {
  await LoginScreen.resetPasswordButton.click();
});

Then(`User should be redirected to AZUL reset password portal`, async () => {
  await LoginScreen.resetPasswordWebTitle.waitForExist({ timeout: 5000 });
  await expect(LoginScreen.resetPasswordWebTitle).toBeExisting();
});

Then(`User should be able to go back to login screen`, async () => {
  Helpers.pressAppBackButton();
  await LoginScreen.verifyLoginScreenElements();
});

//----------------------------------------------------------------------------

/*  Login only with invalid password  */

When(`User only types an invalid password on password textfield`, async () => {
  await LoginScreen.passwordInput.setValue("wrong password");
  await Helpers.closeKeyboard();
  
});

When(`User clicks on Iniciar sesion button`, async () => {
  await LoginScreen.iniciarSesionButton.click();
});

Then(`User should stay in Login screen`, async () => {
  await LoginScreen.screenTitle.waitForExist({
    timeout: 5000,
  });
  await expect(LoginScreen.screenTitle).toBeExisting();
});

Then(`User on Login screen`, async () => {
  await LoginScreen.screenTitle.waitForExist({
      timeout: 5000,
    });
    await expect(LoginScreen.screenTitle).toBeExisting();
  }
);
Then(`User cleared password textfield`, async () => {
  await LoginScreen.passwordInput.clearValue();
  await Helpers.closeKeyboard();
});

//----------------------------------------------------------------------------

/*  Login only with invalid user  */

When(`User only types an invalid username on username textfield`, async () => {
  (await LoginScreen.usernameInput).setValue("wrong username");
  await Helpers.closeKeyboard();
});

Then(`User cleared username textfield`, async () => {
  await LoginScreen.usernameInput.clearValue();
  await Helpers.closeKeyboard();

});

//----------------------------------------------------------------------------

/*  Login only with valid password  */

When(`User only types a valid password on password textfield`, async () => {
  (await LoginScreen.passwordInput).setValue("prueba1");
  await Helpers.closeKeyboard();
});

Then(`after dismissing the message User still being on login screen`, async () => {
  await LoginScreen.screenTitle.waitForExist({
    timeout: 5000,
  });
  await expect(LoginScreen.screenTitle).toBeExisting();
  await LoginScreen.passwordInput.clearValue();
  await Helpers.closeKeyboard();
});




//----------------------------------------------------------------------------

/*  Login only with valid username  */

When(`User only types a valid username on username textfield`, async () => {
  (await LoginScreen.usernameInput).setValue("miguelcasey");
  await Helpers.closeKeyboard();
});

Then(`User should see a message asking for typing the password`, async () => {
  await LoginScreen.screenTitle.waitForExist({
    timeout: 5000,
  });
  await expect(LoginScreen.screenTitle).toBeExisting();
  await LoginScreen.usernameInput.clearValue();
  await Helpers.closeKeyboard();
});


//----------------------------------------------------------------------------

/*  Login with invalid user and valid password  */ 

When(`User types an invalid username on username textfield`, async () => {
  (await LoginScreen.usernameInput).setValue("wrong username");
  await Helpers.closeKeyboard();
});

Then(`User types a valid password on password textfield`, async () => {
  (await LoginScreen.passwordInput).setValue("prueba1");
  await Helpers.closeKeyboard();
  await LoginScreen.iniciarSesionButton.click();
});

Then(`User should see a message saying incorrect credentials`, async () => {
  await LoginScreen.screenTitle.waitForExist({
    timeout: 5000,
  });
  await expect(LoginScreen.screenTitle).toBeExisting();
});

/*  Login with valid user and invalid password  */

When(`User types a valid username on username textfield`, async () => {
  (await LoginScreen.usernameInput).setValue("miguelcasey");
  await Helpers.closeKeyboard();
});

When(`User types an invalid password on password textfield`, async () => {
  await LoginScreen.passwordInput.setValue("wrong password");
  await Helpers.closeKeyboard();
  await LoginScreen.iniciarSesionButton.click();
});

//----------------------------------------------------------------------------

/*  Login empty credentials  */
When(`User should see a message asking for credentials`, async () => {
  await LoginScreen.screenTitle.waitForExist({
    timeout: 5000,
  });
  await expect(LoginScreen.screenTitle).toBeExisting();
});

//----------------------------------------------------------------------------

/*  Login with valid credentials  */
When(`User a valid username on username textfield`, async () => {
  (await LoginScreen.usernameInput).setValue("miguelcasey");
  await Helpers.closeKeyboard();
});

Then(`User a valid password on password textfield`, async () => {
  (await LoginScreen.passwordInput).setValue("prueba1");
  await Helpers.closeKeyboard();
});

Then(`User clicks Iniciar sesion button`, async () => {
  await LoginScreen.iniciarSesionButton.click();
});

Then(`User should be redirected to PIN Configuration screen`, async () => {
  await PinConfigurationScreen.screenTitle.click();
});