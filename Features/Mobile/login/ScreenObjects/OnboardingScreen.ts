import { expect, $ } from "@wdio/globals";

class OnboardingScreen {
  get bienvenidoTitle() {
    return $("//XCUIElementTypeStaticText[@name=\"¡Bienvenido a tu App AZUL!\"]");
  }
  get aprendeComoHacerloButton() {
    return $("//XCUIElementTypeStaticText[@name=\"Aprende cómo hacerlo\"]");
  }
  get saltarDemostracionButton() {
    return $("//XCUIElementTypeStaticText[@name=\"Saltar demostración\"]");
  }
  get chevronButton() {
    return $(
      "//XCUIElementTypeImage[@name=\"right-arrow\"]"
    );
  }
  get comencemosButton() {
    return $("//XCUIElementTypeStaticText[@name=\"¡Comencemos!\"]");
  }
  infoTitles: string[] = [
    "Acepta pagos con tarjetas en tu negocio",
    "¡Vende en redes sociales con Link de Pagos!",
    "¡Recibe pagos al instante con Código QR AZUL!",
    "¡Tus consultas en todo momento!",
  ];
  
  infoTexts: string[] = [
    "Afíliate a AZUL y comienza a aceptar pagos en línea. Si ya eres cliente, solicita nuevos productos para potenciar tus ventas.",
    "Envíalo a tus clientes a través de las aplicaciones de tu móvil y consulta su estado. Puedes cancelarlos, anúlarlos o regenérarlos.",
    "Puedes consultar el QR de tu comercio, mostrarlo a tus clientes, descargarlo o compartirlo a través de tus redes sociales para recibir pagos vía transferencia.",
    "Puedes verificar cuando quieras las transacciones de tus productos al instante y generar estados de ventas segun tu fecha de preferencia.",
  ];

  async verifyOnboardingTexts() {
    for (let i = 0; i < this.infoTexts.length; i++) {
      const elementTitle = $(
        "//*[contains(@name,'" + this.infoTitles[i] + "')]"
      );
      await elementTitle.waitForExist({ timeout: 5000 });
      await expect(elementTitle).toBeExisting();

      const elementText = $("//*[contains(@name,'" + this.infoTexts[i] + "')]");
      await elementText.waitForExist({ timeout: 5000 });
      await expect(elementText).toBeExisting();

      if (i != 3) {
        await this.chevronButton.click();
      }
    }
  }

  async skipOnboardingScreen() {
    await this.saltarDemostracionButton.click();
  }
}

export default new OnboardingScreen();
