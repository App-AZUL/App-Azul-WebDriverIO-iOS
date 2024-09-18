import { Given, When } from "@wdio/cucumber-framework";
import PinConfigurationScreen from "../ScreenObjects/PinConfigurationScreen";


Given(`User is at PIN Configuration`, async () => {
    await PinConfigurationScreen.screenTitle.waitForExist({
        timeout: 5000,
    });
    await expect(PinConfigurationScreen.screenTitle).toBeExisting();
  });
  
  When(`User types PIN {int}`, async (arg0: number) => {
    await PinConfigurationScreen.typePin(arg0);
  });
  
  When(`User confirms PIN {int}`, async (arg0: number) => {
    await PinConfigurationScreen.typePin(arg0);
  });
