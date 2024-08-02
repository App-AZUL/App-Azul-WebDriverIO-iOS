import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect} from "@wdio/globals";
import NewAccessScreen from "../ScreenObjects/NewAccessScreen.ts";
import AffiliationRequirementsScreen from "../../azul_affiliation/ScreenObjetcts/AffiliationRequirementsScreen.ts";
import LoginScreen from "../ScreenObjects/LoginScreen.ts";

//Verify New Access Screen steps
Given("User is on the New Access Screen", async () => {
    // Write code here that turns the phrase above into concrete actions
    await NewAccessScreen.screenTitle.waitForExist({ timeout: 5000 });
    await expect(NewAccessScreen.screenTitle).toBeExisting();
  });

When('User press on Afiliarme', async () => {
    await NewAccessScreen.AfiliarmeButton.click();
});

Then('User should be on the Affiliation Requirements Screen', async () => {
    (await AffiliationRequirementsScreen.screenTitle).waitForExist({
        timeout: 5000,
    });
    await expect(AffiliationRequirementsScreen.screenTitle).toBeExisting();
});

When('User press back', async () => {
    await NewAccessScreen.PressBackButton.click();
});

When('User press Ya soy cliente', async () => {
    (await NewAccessScreen.YaSoyClienteButton).click();
});

Then('User should be on Login Screen', async () => {
    await LoginScreen.olvidarContrasenaButton.waitForExist({ timeout: 5000 });
    await expect(LoginScreen.olvidarContrasenaButton).toBeExisting();
});

