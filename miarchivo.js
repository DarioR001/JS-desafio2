// Simulador interactivo: ¿qué sección de cable necesito para armar un circuito eléctrico?

function simuladorCircuito(consumo,){
    switch(consumo){
        case "muy alto":
            return "Necesitas un cable: Calibre 6 = 16mm";
        case "alto":
            return "Necesitas un cable: Calibre 8 = 10mm";
        case "medio alto":
            return "Necesitas un cable: Calibre 10 = 6mm";
        case "medio":
            return "Necesitas un cable: calibre 12 = 4mm";
        case "medio bajo":
            return "Necesitas un cable: Calibre 14 = 2.5mm";
        case "bajo":
            return "Necesitas un cable: Calibre 16 = 1.5mm";
        case "muy bajo":
            return "Necesitas un cable: Calibre 18 = 1mm";
        default:
            return "Sin resultado\n \nVuelve a intentarlo!";
    }
}

do {
    consumo = prompt ("¿Qué nivel de consumo vas a tener en tu instalación?\n \n muy alto: aires acondicionados centrales, equipos industriales. \n alto: aires acondicionados split, estufas eléctricas. \n medio alto: secadoras de ropa, heladeras. \n medio: microondas, licuadoras, plancas. \n medio bajo: cableado de iluminación, tomas en general. \n bajo: extenciones de bajo consumo. \n muy bajo: termostatos, timbres, cámaras y alarmas.");
    alert(simuladorCircuito(consumo));
    console.log(simuladorCircuito(consumo));
}while (consumo=true)