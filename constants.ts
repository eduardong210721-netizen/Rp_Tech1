
import { Product } from './types';

export const WHATSAPP_NUMBER = "51935423395";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Audífonos Deportivos Romax",
    price: 42.90,
    description: "Diseño de cuello (neckband), magnéticos, extra bajos y 40 horas de batería.",
    idealFor: "Deportistas, corredores y personas activas.",
    longDescription: "Estos audífonos están diseñados para que te muevas con libertad sin que se caigan. Tienen un diseño de cuello flexible (neckband) súper cómodo. Lo mejor es su batería de larga duración: te ofrecen hasta 40 horas de reproducción continua, así que puedes usarlos varios días sin cargarlos. Cuentan con sonido Super Bass para graves profundos que motivan al entrenar y un sistema magnético para llevarlos colgados seguramente cuando no los usas.",
    category: "Audio",
    imageAlt: "Caja de audífonos Romax color negro con azul",
    imageUrl: "images/romax-neckband.jpg",
    isOffer: true
  },
  {
    id: 2,
    name: "Audífonos Inalámbricos EWTTO (T25S)",
    price: 44.90,
    description: "Inalámbricos, cancelación de ruido y estuche con pantalla digital. Edición navideña.",
    idealFor: "Quienes buscan silencio y calidad de sonido superior.",
    longDescription: "Este es un modelo premium compacto. Su principal ventaja es que cuenta con doble cancelación de ruido (ANC + ENC), lo que significa que aísla el ruido exterior para que escuches tu música limpia y tus llamadas sean claras. El estuche viene con una pantalla digital que te indica el porcentaje exacto de batería, y su diseño es ergonómico para usar por horas sin molestias.",
    category: "Audio",
    imageAlt: "Caja roja navideña de audífonos Ewtto",
    imageUrl: "images/ewtto-navidad.jpg",
    isNew: true
  },
  {
    id: 3,
    name: "Auriculares Inalámbricos Dexbo (Diadema)",
    price: 46.90,
    description: "Bluetooth V5.3, almohadillas acolchadas, sonido Estéreo Bass y 40h de uso.",
    idealFor: "Home office, viajes largos o amantes del confort.",
    longDescription: "Si prefieres los audífonos de casco (over-ear), estos son muy cómodos gracias a sus almohadillas acolchadas que cubren la oreja y aíslan el ruido externo. Tienen la última tecnología Bluetooth V5.3 para una conexión estable y sin cortes. Además, su batería es impresionante: 40 horas de uso. Tienen un sonido estéreo con bajos potentes, perfectos para ver películas o trabajar concentrado.",
    category: "Audio",
    imageAlt: "Caja de auriculares Dexbo color gris oscuro",
    imageUrl: "images/dexbo-headset.jpg",
    isOffer: true
  },
  {
    id: 4,
    name: "Audífonos Gamer M28",
    price: 24.90,
    description: "Luces RGB, modo juego de baja latencia y estuche con pantalla espejo.",
    idealFor: "Jugadores de celular (Free Fire, COD Mobile) y estilo futurista.",
    longDescription: "Estos audífonos destacan por su estética gaming con luces LED. Tienen un 'Modo Juego' de baja latencia, lo que significa que el sonido de los disparos o pasos se escucha al instante, sin retraso. El estuche es espectacular: tiene un acabado tipo espejo con una pantalla digital gigante que muestra la carga de cada audífono por separado. Son muy llamativos y cómodos.",
    category: "Audio",
    imageAlt: "Audífonos gamer con luces RGB",
    imageUrl: "images/m28-gamer.jpg",
    isOffer: true
  },
  {
    id: 5,
    name: "Audífonos de Cable REDD",
    price: 14.90,
    description: "Conector Jack 3.5mm, sonido HiFi estéreo y micrófono integrado.",
    idealFor: "Uso diario, oficina y como respaldo confiable.",
    longDescription: "Son los clásicos audífonos que nunca fallan. Al ser de cable (Jack 3.5mm), no necesitas cargarlos nunca; solo conectas y listo. Ofrecen sonido HiFi Estéreo de alta fidelidad. Vienen con un control en el cable para subir/bajar volumen y contestar llamadas gracias a su micrófono incorporado. Son resistentes y perfectos para llevar siempre en la mochila.",
    category: "Audio",
    imageAlt: "Caja azul de audífonos Redd con cable",
    imageUrl: "images/redd-wired.jpg"
  },
  {
    id: 6,
    name: "Power Bank Ewtto (15,000 mAh)",
    price: 34.90,
    description: "15,000 mAh, cables integrados (multisalida) y pantalla LED de porcentaje exacto.",
    idealFor: "Viajeros y personas que usan mucho el celular en la calle.",
    longDescription: "Esta batería portátil es una solución 'todo en uno'. Tiene una gran capacidad de 15,000 mAh, lo que te permite cargar un celular promedio entre 3 a 4 veces. Lo mejor es que ya trae los cables incorporados (Tipo C, Lightning para iPhone y Micro USB), así que no tienes que cargar cables extra. Su pantalla LED frontal te dice exactamente cuánta energía le queda.",
    category: "Carga",
    imageAlt: "Caja verde de Power Bank Ewtto",
    imageUrl: "images/ewtto-powerbank.jpg",
    isNew: true
  },
  {
    id: 7,
    name: "Cargador Dado REDD + Cable Tipo C",
    price: 21.90,
    description: "Kit de carga completo. Cargador con puerto USB-C, de 6.2A para carga rápida.",
    idealFor: "Reemplazo de cargador original o para tener uno extra en el trabajo.",
    longDescription: "Este es un kit completo listo para usar. Incluye el cabezal de pared (cubo) de la marca REDD, que es compacto y seguro contra sobrecalentamientos, junto con un cable USB a Tipo C. Es ideal si perdiste tu cargador original y buscas una opción económica pero de buena calidad que cuide la batería de tu teléfono.",
    category: "Carga",
    imageAlt: "Cargador de pared blanco Redd con cable",
    imageUrl: "images/redd-charger.jpg"
  },
  {
    id: 8,
    name: "Cable de Carga Rápida Tipo C (Genérico)",
    price: 11.90,
    description: "Carga rápida y transferencia de datos. Trenzado y reforzado.",
    idealFor: "Transferencia de datos y carga eficiente.",
    longDescription: "Es un cable diseñado para soportar el uso rudo diario. A diferencia de los cables básicos, este permite el paso de corriente para carga rápida, lo que reduce el tiempo que tu celular pasa conectado a la pared. También funciona perfectamente para pasar fotos y archivos de tu celular a la computadora a buena velocidad.",
    category: "Carga",
    imageAlt: "Caja negra de cable Romax 66W",
    imageUrl: "images/romax-cable-66w.jpg"
  },
  {
    id: 9,
    name: "Cable Romax Tipo C (66W - Reforzado)",
    price: 11.90,
    description: "Carga rápida de 45W hasta 66W y 6A. Cable de alta potencia.",
    idealFor: "Celulares de gama media-alta con carga Turbo/Super Charge.",
    longDescription: "Este es un cable de alto rendimiento. Soporta una potencia de hasta 66W (6 Amperios), lo que lo hace compatible con los sistemas de carga súper rápida de marcas como Huawei, Xiaomi o Samsung. Además, su cable es trenzado y reforzado, lo que evita que se pele o se rompa en las puntas, garantizando mucha más durabilidad que un cable de goma normal.",
    category: "Carga",
    imageAlt: "Caja blanca de cable Romax 45W",
    imageUrl: "images/romax-cable-45w.jpg"
  },
  {
    id: 10,
    name: "Soporte de Celular para Auto 2 en 1",
    price: 24.90,
    description: "Brazo telescópico + adaptador para rejilla. Giro 360° y botón de liberación.",
    idealFor: "Taxistas, conductores de aplicativo (Uber/Indriver), repartidores y viajeros que usan GPS.",
    longDescription: "Este es el soporte definitivo para manejar seguro. Lo llamamos '2 en 1' porque te da la libertad de elegir dónde colocarlo: incluye una base con ventosa de ultra succión (con pegamento de gel lavable) para fijarlo firmemente en el tablero o parabrisas, y también viene con un clip adaptador adicional para colocarlo en las rejillas del aire acondicionado si prefieres mantener el tablero libre.\n\nCuenta con un brazo telescópico extensible que puedes alargar y ajustar en ángulo para acercar el celular a tu vista sin perder atención en la pista. El cabezal gira 360° (para ver mapas en vertical u horizontal) y tiene un botón de liberación rápida que abre las abrazaderas automáticamente.",
    category: "Accesorios",
    imageAlt: "Soporte de celular para auto negro con brazo extensible",
    imageUrl: "images/soporte-auto.jpg",
    isNew: true
  }
];
