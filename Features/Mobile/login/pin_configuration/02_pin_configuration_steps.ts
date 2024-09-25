import { Given, When, Then } from "@wdio/cucumber-framework";
import PinConfigurationScreen from "../ScreenObjects/PinConfigurationScreen";
import OnboardingScreen from "../ScreenObjects/OnboardingScreen";
import NewAccessScreen from "../ScreenObjects/NewAccessScreen";
import Helpers from "../../../../Helpers/Helpers";
import LoginScreen from "../ScreenObjects/LoginScreen";



  Given(`User is at PIN Configuration`, async () => {
    const isUserAtPinConfiguration: boolean = await PinConfigurationScreen.screenTitle.isDisplayed();
    if (!isUserAtPinConfiguration) {
      console.log("PinConfigurationScreen no está presente");
      // Si el elemento screenTitle no existe, entonces hacemos clic en el botón saltarDemostracionButton de OnboardingScreen
      await OnboardingScreen.saltarDemostracionButton.click();
      console.log("se hizo clic en 'saltar demostración'");
      await NewAccessScreen.YaSoyClienteButton.click();
      await LoginScreen.usernameInput.setValue("miguelcasey");
      await Helpers.closeKeyboard();
      await LoginScreen.passwordInput.setValue("prueba1");
      await Helpers.closeKeyboard();
      await LoginScreen.iniciarSesionButton.click();
    }
  
    else {
      // Si el elemento screenTitle de PinConfigurationScreen existe, no hacemos nada
      console.log("PinConfigurationScreen está presente");
    }
    /*await PinConfigurationScreen.screenTitle.waitForExist({
      timeout: 5000,
    });
    await expect(PinConfigurationScreen.screenTitle).toBeExisting();*/
  });

  When(`User types PIN {int}`, async (arg0: number) => {
    await PinConfigurationScreen.typePin(arg0);
  });
  
  When(`User confirms PIN {int}`, async (arg0: number) => {
    await PinConfigurationScreen.typePin(arg0);
  });

  Then(`User should see Incorrect PIN Message`, async () => {
    (await PinConfigurationScreen.screenTitle).waitForExist({
      timeout: 5000,
  });
  await expect(PinConfigurationScreen.screenTitle).toBeExisting();
});

Then(`User should stay in PIN Configuration screen after dismissing the message`,
  async () => {
    await PinConfigurationScreen.screenTitle.waitForExist({
      timeout: 5000,
  });
  await expect(PinConfigurationScreen.screenTitle).toBeExisting();
});

