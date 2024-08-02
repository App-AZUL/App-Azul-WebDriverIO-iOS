import { $ } from "@wdio/globals";

class NewAcessScreen {
    get screenTitle() {
        return $("//XCUIElementTypeStaticText[@name=\"Requisitos de afiliación\"]");
    }

    get afiliarmeButton() {
        return $("//XCUIElementTypeButton[@name=\"Afiliarme\"]");
    }


    get yaSoyClienteButton() {
        return $("//XCUIElementTypeButton[@name=\"Ya soy cliente\"]");
    }

    get pressBackButton(){
        return $("//XCUIElementTypeImage[@name=\"left-arrow\"]");
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

}



export default new NewAcessScreen();