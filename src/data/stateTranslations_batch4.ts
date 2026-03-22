import { StateTranslationEs } from "./stateTranslationTypes";

export const batch4: Record<string, StateTranslationEs> = {
  HI: {
    officeHours: "lun-vie 7:45 AM - 2:30 PM HST",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida",
    ],
    paymentMethods: [
      "tarjeta de credito (en linea)",
      "efectivo (en persona)",
      "cheque de caja",
      "cheque certificado",
      "giro postal",
    ],
    onlineNotes:
      "Pedidos realizados a traves del portal eHawaii. Se aplica una tarifa administrativa del portal de $2.50 por pedido para hasta cinco copias. Pago con Visa, MasterCard, American Express o Discover. Puede elegir envio por correo o recogida en persona en la oficina de Honolulu.",
    mailNotes:
      "Incluya un formulario de Solicitud de Copia Certificada de Acta de Nacimiento completado, una copia de su identificacion con foto emitida por el gobierno y el pago mediante cheque de caja, cheque certificado o giro postal a nombre del State Department of Health. No se aceptan cheques personales ni efectivo por correo.",
    mailProcessingTime: "4-6 semanas",
    inPersonLocations:
      "Oficina principal de Honolulu (1250 Punchbowl St, Room 103); oficinas de salud de distrito en Maui, Kauai y Hawaii Island",
    inPersonProcessingTime:
      "El mismo dia en la oficina de Honolulu; 14 dias habiles en las oficinas de distrito",
    inPersonNotes:
      "Servicio sin cita previa disponible. Traiga una identificacion con foto valida emitida por el gobierno. Se acepta pago en efectivo, tarjeta de credito, cheque de caja, cheque certificado o giro postal.",
    phoneNotes:
      "La linea telefonica es para consultas y estado de pedidos. Para realizar un pedido, use el portal en linea o envie por correo o en persona.",
    requirementsNotes:
      "Se debe presentar una copia legible de la identificacion con foto emitida por el gobierno del solicitante con todas las solicitudes. Para pedidos en linea, suba la identificacion durante el proceso de pedido.",
    feeWaivers: [
      {
        eligibility: "Personas en situacion de calle",
        howToClaim:
          "Presente una carta de verificacion de un proveedor de servicios para personas sin hogar que corrobore su situacion. Presente la carta con su solicitud de acta de nacimiento.",
      },
      {
        eligibility:
          "Veteranos y sus familiares directos (conyuge, hijos, padres, pariente mas cercano de un veterano fallecido)",
        howToClaim:
          "Presente documentacion que demuestre que la copia certificada es necesaria en relacion con un reclamo basado en el servicio en las fuerzas armadas de los Estados Unidos.",
      },
      {
        eligibility:
          "Personas afectadas por los incendios forestales de Maui de 2023 (con direccion residencial en Lahaina o identificacion de asistencia por desastre de FEMA)",
        howToClaim:
          "Proporcione su numero de identificacion de asistencia por desastre de FEMA o prueba de direccion residencial en Lahaina al solicitar su primera copia de reemplazo.",
      },
    ],
    specialNotes: [
      "Hawaii ha mantenido registros vitales desde 1842, aunque existen pocos registros antes de 1896 y el cumplimiento general no comenzo hasta 1929. Para registros mas antiguos, comuniquese con los Archivos del Estado de Hawaii.",
      "Se agrega una tarifa administrativa del portal eHawaii de $2.50 a los pedidos en linea por cada incremento de hasta cinco copias.",
      "Las copias certificadas incluyen una marca de agua de seguridad y sello en relieve y son aceptadas para todos los propositos legales.",
      "Las oficinas de salud de distrito en Maui, Kauai y Hawaii Island pueden procesar pedidos de actas de nacimiento enviados a traves del portal en linea.",
    ],
    noIdWorkaround:
      "Si no tiene una identificacion con foto emitida por el gobierno, puede hacer que un representante autorizado con identificacion valida solicite el certificado en su nombre utilizando una declaracion de autorizacion notariada. Las personas en situacion de calle pueden obtener una certificacion de nacimiento gratuita con una carta de verificacion de un proveedor de servicios para personas sin hogar (HRS \u00A7 338-14), que luego puede usarse para obtener otras formas de identificacion.",
  },
  ID: {
    officeHours:
      "lun-vie 8:00 AM - 5:00 PM MT (cerrado fines de semana y dias festivos estatales)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU.",
      "Tarjeta de residente permanente (Formulario I-551, Green Card)",
      "Tarjeta de inscripción tribal con foto",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de credito (en linea/telefono a traves de VitalChek)",
      "tarjeta de debito (en linea/telefono a traves de VitalChek)",
      "efectivo (en persona solo en oficinas del condado)",
    ],
    onlineNotes:
      "VitalChek es el unico proveedor en linea autorizado para registros vitales de Idaho. Se aplica la tarifa estatal de $16 mas la tarifa de procesamiento de VitalChek. Se requiere tarjeta de credito o debito. El procesamiento estandar toma de 2 a 4 semanas; opciones de envio acelerado disponibles por un cargo adicional.",
    mailNotes:
      "Incluya el formulario de solicitud completado, pago mediante cheque o giro postal a nombre de 'Idaho Vital Records' y una fotocopia clara de una identificacion con foto valida emitida por el gobierno. Las solicitudes incompletas o sin copia de identificacion causaran retrasos. No envie efectivo.",
    mailProcessingTime: "4-6 semanas",
    inPersonLocations:
      "Idaho Bureau of Vital Records, 450 West State Street, 1er piso, Boise, ID. Tambien disponible en oficinas de distritos de salud locales en todo Idaho.",
    inPersonProcessingTime:
      "El mismo dia en la oficina de Boise (si los registros estan en archivo); varia en las oficinas de distritos de salud locales",
    inPersonNotes:
      "Traiga una identificacion con foto valida emitida por el gobierno, el formulario de solicitud completado y el pago. Las oficinas de distritos de salud locales pueden procesar solicitudes, pero la disponibilidad y los tiempos de espera varian; llame con anticipacion para confirmar. La oficina de Boise acepta solicitudes sin cita durante el horario de atencion.",
    phoneNotes:
      "Los pedidos por telefono se procesan a traves de VitalChek con las mismas tarifas que los pedidos en linea (tarifa estatal mas tarifa de procesamiento de VitalChek). Se requiere tarjeta de credito o debito. El telefono de la oficina estatal (208) 334-5988 es solo para informacion y consultas de estado.",
    requirementsNotes:
      "Idaho restringe el acceso a los registros de nacimiento de menos de 100 anos al registrante, los padres, tutores legales y otros solicitantes elegibles segun lo definido por el Codigo de Idaho \u00A7 39-270. Se requiere una fotocopia de identificacion con foto valida emitida por el gobierno para todas las solicitudes por correo. Para solicitudes en persona, presente la identificacion original.",
    feeWaivers: [
      {
        eligibility:
          "Personas en situacion de calle que necesitan un acta de nacimiento para fines de identificacion",
        howToClaim:
          "Un proveedor verificado de servicios para personas sin hogar, refugio o agencia gubernamental de servicios sociales puede solicitar una exencion de tarifa en nombre de la persona. Comuniquese con el Bureau of Vital Records al (208) 334-5988 para coordinar la solicitud.",
      },
      {
        eligibility:
          "Jovenes en cuidado de crianza temporal o que estan saliendo del sistema de cuidado de crianza",
        howToClaim:
          "El trabajador social de bienestar infantil del Idaho Department of Health and Welfare puede solicitar un acta de nacimiento en nombre de jovenes en cuidado de crianza sin cargo. Los jovenes que salen del sistema deben comunicarse con su trabajador social o el programa Idaho Independent Living para asistencia.",
      },
      {
        eligibility:
          "Agencias gubernamentales que solicitan registros para propositos oficiales",
        howToClaim:
          "Las agencias gubernamentales federales, estatales y locales pueden obtener copias certificadas sin cargo cuando se necesiten para asuntos oficiales presentando una solicitud en papel membretado oficial.",
      },
    ],
    specialNotes: [
      "El registro estatal de nacimientos de Idaho comenzo en 1911. Para nacimientos antes de 1911, comuniquese con el registrador del condado en el condado de nacimiento, ya que algunos condados mantuvieron registros anteriores.",
      "VitalChek es el unico proveedor externo autorizado para pedidos en linea y por telefono en Idaho.",
      "Idaho emite copias certificadas de actas de nacimiento; los extractos de formato corto no estan disponibles. La copia certificada incluye toda la informacion del registro original.",
      "Idaho permite enmiendas a las actas de nacimiento para cambios de marcador de genero. Se requiere una orden judicial segun el Codigo de Idaho \u00A7 39-250.",
      "El pago mediante cheque o giro postal para pedidos por correo debe ser a nombre de 'Idaho Vital Records'. Se aceptan cheques personales, pero pueden retrasar el procesamiento hasta que se cobren.",
      "Los registros de nacimiento de 100 anos o mas se consideran registros publicos y pueden ser solicitados por cualquier persona sin restricciones de elegibilidad.",
    ],
    noIdWorkaround:
      "Si no tiene una identificacion con foto emitida por el gobierno, puede proporcionar dos formas de identificacion secundaria (por ejemplo, tarjeta de Seguro Social mas una factura de servicios publicos con fecha dentro de los ultimos 90 dias). Un familiar elegible que tenga identificacion con foto valida tambien puede presentar la solicitud en su nombre. Para personas en situacion de calle, un proveedor de servicios para personas sin hogar o una agencia gubernamental de servicios sociales puede ayudar a obtener el certificado y puede solicitar una exencion de tarifa. Tambien puede comunicarse con el Bureau of Vital Records al (208) 334-5988 para obtener orientacion sobre opciones alternativas de verificacion de identidad.",
  },
  MP: {
    officeHours: "lun-vie 7:30 AM - 4:30 PM ChST",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación válida emitida por estado o territorio",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU. (CAC)",
      "Tarjeta de residente permanente válida (green card)",
      "Tarjeta de identificación emitida por la CNMI",
    ],
    paymentMethods: [
      "giro postal",
      "cheque de caja bancario",
    ],
    mailNotes:
      "Primero debe solicitar el Formulario de Pedido por Correo de Certificado de Nacimiento NMI enviando un correo electronico a info-hvso@chcc.health. Complete el formulario y devuelvalo con una fotocopia de su identificacion con foto valida emitida por el gobierno y un giro postal o cheque de caja bancario por $25.00 a nombre de 'Commonwealth Healthcare Corporation'. Incluya un giro postal adicional de $5.00 para servicios de envio de devolucion. El correo internacional puede tardar mas.",
    mailProcessingTime: "4-8 semanas desde la recepcion",
    inPersonLocations:
      "Commonwealth Healthcare Corporation, Health and Vital Statistics Office, Commonwealth Health Center, Garapan, Saipan, MP 96950",
    inPersonProcessingTime:
      "El mismo dia a 3 dias habiles, dependiendo de la disponibilidad del registro",
    inPersonNotes:
      "El servicio sin cita previa esta disponible durante el horario de atencion. Traiga una identificacion con foto valida emitida por el gobierno. Solo se acepta pago mediante giro postal o cheque de caja bancario; generalmente no se aceptan efectivo ni tarjetas de credito. Los registros de 1946-1954 pueden requerir tiempo de procesamiento adicional debido a registros incompletos de esa epoca.",
    phoneNotes:
      "La linea telefonica es solo para consultas y verificacion de estado. Tambien puede llamar al (670) 236-8702 para asistencia. No se pueden realizar pedidos por telefono; use correo o visite en persona para realizar pedidos.",
    requirementsNotes:
      "Los solicitantes deben presentar una fotocopia valida de una identificacion emitida por el gobierno con su solicitud. Si solicita en nombre de otra persona, proporcione documentacion que demuestre su relacion (por ejemplo, orden judicial, poder notarial o carta de autorizacion notariada).",
    feeWaivers: [
      {
        eligibility:
          "No existe un programa formal de exencion de tarifas publicado para registros vitales de CNMI. Las personas que experimentan dificultades financieras pueden comunicarse directamente con la HVSO para consultar sobre posibles adaptaciones.",
        howToClaim:
          "Comuniquese con la Health and Vital Statistics Office al (670) 236-8717 o envie un correo electronico a info-hvso@chcc.health para explicar sus circunstancias y solicitar asistencia. Las agencias de servicios sociales en Saipan tambien pueden ayudar a cubrir el costo.",
      },
    ],
    specialNotes: [
      "CNMI Vital Records mantiene registros de nacimiento desde 1946 hasta el presente. Los registros de 1945 y anteriores (periodo de administracion japonesa) no estan disponibles a traves de los registros vitales de CNMI.",
      "Los registros de 1946-1954 estan incompletos debido al periodo de transicion despues de la Segunda Guerra Mundial. Localizar registros de esta epoca puede requerir tiempo e investigacion adicionales.",
      "Las CNMI incluyen las islas de Saipan, Tinian y Rota. La oficina principal de registros vitales esta ubicada en Saipan. Los residentes de Tinian y Rota deben comunicarse con la HVSO para obtener orientacion sobre como obtener registros de forma remota.",
      "Para obtener el formulario de solicitud por correo, debe enviar un correo electronico a info-hvso@chcc.health y solicitar el Formulario de Pedido por Correo de Certificado de Nacimiento NMI. El formulario no esta disponible para descarga directa.",
      "El pago debe realizarse mediante giro postal o cheque de caja bancario a nombre de 'Commonwealth Healthcare Corporation'. Generalmente no se aceptan cheques personales, efectivo por correo ni tarjetas de credito.",
      "Para uso internacional (apostilla o autenticacion), comuniquese con el Tribunal Superior de CNMI o la Oficina de Autenticaciones del Departamento de Estado de los EE. UU.",
    ],
    noIdWorkaround:
      "Si no tiene una identificacion con foto emitida por el gobierno, comuniquese con la Health and Vital Statistics Office al (670) 236-8717 o envie un correo electronico a info-hvso@chcc.health para discutir su situacion antes de presentar una solicitud. Es posible que pueda proporcionar dos formas de identificacion secundaria (por ejemplo, tarjeta de Seguro Social mas una factura de servicios publicos). Las agencias de servicios sociales en Saipan, como el Programa de Defensa de Victimas de la Oficina del Fiscal General de CNMI o programas de asistencia comunitaria, pueden ayudarlo a obtener identificacion o dar fe de su identidad. Si esta en situacion de calle o es victima de violencia domestica, mencionelo al comunicarse con la oficina, ya que pueden estar disponibles adaptaciones adicionales.",
  },
  ND: {
    officeHours: "lun-vie 8:00 AM - 5:00 PM CT; cerrado dias festivos estatales",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida con foto",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU. con foto",
      "Tarjeta de residente permanente (Formulario I-551, Green Card)",
      "Certificado de ciudadanía o naturalización de EE.UU.",
      "Identificación con foto emitida por gobierno tribal",
    ],
    paymentMethods: [
      "cheque personal (a nombre de North Dakota Department of Health and Human Services)",
      "giro postal",
      "tarjeta de credito (pedidos en linea y por telefono a traves de VitalChek)",
      "tarjeta de debito (pedidos en linea y por telefono a traves de VitalChek)",
      "efectivo (solo en persona, se recomienda cambio exacto)",
    ],
    onlineNotes:
      "VitalChek es el unico servicio de pedidos en linea autorizado para registros vitales de Dakota del Norte. Se aplica una tarifa de servicio de aproximadamente $13.25 ademas de la tarifa estatal. Se requiere tarjeta de credito o debito. El procesamiento estandar generalmente toma de 2 a 4 semanas; el envio acelerado esta disponible por un costo adicional.",
    mailNotes:
      "Incluya un formulario de solicitud completado, una fotocopia de su identificacion con foto valida emitida por el gobierno y un cheque o giro postal a nombre de 'ND Department of Health and Human Services'. Todos los campos requeridos en la solicitud deben estar completados o la solicitud sera devuelta. Incluya un sobre con su direccion y estampilla si lo desea.",
    mailProcessingTime: "2-4 semanas",
    inPersonLocations:
      "Oficina central de la Division of Vital Records en 600 East Boulevard Avenue, Bismarck, ND. Algunas unidades locales de salud publica en Dakota del Norte tambien pueden ayudar con el pedido de certificados.",
    inPersonProcessingTime:
      "El mismo dia en la oficina de Bismarck cuando el registro esta en archivo",
    inPersonNotes:
      "El servicio sin cita previa esta disponible en la oficina de Bismarck durante el horario de atencion. Traiga una identificacion con foto valida emitida por el gobierno y el pago. Las unidades locales de salud publica pueden tener horarios y disponibilidad limitados; llame con anticipacion para confirmar.",
    phoneNotes:
      "Se aplica la tarifa de servicio de VitalChek (~$13.25) ademas de la tarifa estatal. Se requiere tarjeta de credito o debito. Disponible las 24 horas del dia, los 7 dias de la semana. Para consultas generales, llame directamente a la Division of Vital Records al (701) 328-2360.",
    requirementsNotes:
      "Los registros vitales de Dakota del Norte no son registros publicos. Los solicitantes deben demostrar un interes directo y tangible en el registro. Se debe incluir una fotocopia de identificacion con foto valida emitida por el gobierno (anverso y reverso) con todas las solicitudes por correo. Las solicitudes de alguien que no sea el registrante requieren prueba de parentesco o autoridad legal.",
    feeWaivers: [
      {
        eligibility:
          "Personas que necesitan un acta de nacimiento unicamente para obtener una identificacion con foto valida para votar",
        howToClaim:
          "Presente una declaracion escrita con su solicitud indicando que el acta de nacimiento es necesaria para obtener identificacion para votar. Segun el Codigo del Siglo de Dakota del Norte, se puede proporcionar una copia certificada sin cargo cuando sea necesaria para fines de identificacion de votante.",
      },
      {
        eligibility:
          "Ninos, jovenes o jovenes no acompanados en situacion de calle segun la definicion de la Ley Federal McKinney-Vento de Asistencia para Personas sin Hogar",
        howToClaim:
          "Un proveedor de servicios para personas sin hogar, un enlace escolar para personas sin hogar o una agencia gubernamental de servicios sociales puede presentar una solicitud en nombre de la persona certificando su condicion de persona sin hogar. Se proporciona una copia certificada sin cargo.",
      },
      {
        eligibility:
          "Veteranos o sus dependientes que solicitan registros para reclamos o beneficios de la Administracion de Veteranos",
        howToClaim:
          "Incluya documentacion de que la solicitud es para propositos de la VA. Las copias certificadas necesarias para reclamos de la Administracion de Veteranos se proporcionan sin cargo.",
      },
      {
        eligibility:
          "Agencias gubernamentales que solicitan registros para propositos oficiales",
        howToClaim:
          "Las agencias gubernamentales federales, estatales y locales pueden obtener copias certificadas sin cargo cuando el registro sea necesario para asuntos oficiales del gobierno. La solicitud debe presentarse en papel membretado oficial de la agencia.",
      },
    ],
    specialNotes: [
      "Dakota del Norte tiene algunos registros de nacimiento que datan de 1870, aunque el registro estatal no se aplico de manera consistente hasta el 1 de julio de 1893, cuando comenzo el registro obligatorio. Los registros de 1870 a 1893 pueden estar incompletos; comuniquese con la Division of Vital Records para asistencia.",
      "Las tarifas de actas de nacimiento de Dakota del Norte estan entre las mas bajas del pais: $7 por la primera copia certificada y $4 por cada copia adicional solicitada al mismo tiempo.",
      "Dakota del Norte es uno de los pocos estados que no requiere una identificacion con foto para votar. Sin embargo, los votantes deben presentar una forma valida de identificacion que muestre nombre, fecha de nacimiento y direccion residencial en las urnas.",
      "Dakota del Norte permite enmiendas a las actas de nacimiento, incluidos cambios de marcador de genero. Se puede requerir una orden judicial dependiendo del tipo de enmienda solicitada.",
      "Las identificaciones con foto emitidas por tribus se aceptan como identificacion primaria valida para solicitar registros vitales, reflejando la significativa poblacion nativoamericana de Dakota del Norte.",
      "Las actas de nacimiento tardias para nacimientos no registrados en su momento pueden presentarse ante la Division of Vital Records con evidencia de apoyo como registros del censo, registros hospitalarios o declaraciones juradas.",
      "VitalChek es el unico proveedor autorizado en linea/telefono para registros vitales de Dakota del Norte. Tenga cuidado con sitios web no oficiales de terceros que cobran tarifas excesivas.",
    ],
    noIdWorkaround:
      "Pida a un familiar elegible (padre, conyuge, hijo adulto, hermano o nieto) que tenga identificacion con foto valida que solicite el certificado en su nombre con prueba de su parentesco con el registrante. Tambien puede proporcionar dos formas de identificacion secundaria que contengan su nombre (por ejemplo, tarjeta de Seguro Social mas una factura de servicios publicos) en lugar de una identificacion con foto; comuniquese con la Division of Vital Records al (701) 328-2360 para discutir su situacion. Si esta en situacion de calle, trabaje con un proveedor de servicios para personas sin hogar, enlace escolar para personas sin hogar o agencia de servicios sociales que pueda presentar la solicitud en su nombre con la tarifa exenta segun la ley federal y estatal. Los miembros de tribus sin identificacion estatal pueden usar una identificacion con foto emitida por el gobierno tribal como identificacion primaria.",
  },
  AK: {
    officeHours: "lun-vie 8:30 AM - 4:30 PM AKT",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida",
      "Tarjeta tribal o BIA con foto",
    ],
    paymentMethods: [
      "cheque personal (preimpreso con nombre, a nombre de Alaska Vital Records)",
      "giro postal (a nombre de Alaska Vital Records)",
      "tarjeta de credito (en persona, correo, fax o pedidos en linea)",
      "efectivo (solo en persona)",
    ],
    onlineNotes:
      "VitalChek es el unico proveedor en linea autorizado para Alaska. Se aplica una tarifa de servicio ademas de la tarifa estatal. Se requiere tarjeta de credito o debito. El procesamiento acelerado solo esta disponible a traves de VitalChek (servicio urgente aproximadamente $41 en total). Espere al menos 2-3 semanas para el procesamiento; los pedidos acelerados se procesan en 3-4 semanas sin incluir el envio.",
    mailNotes:
      "Incluya el formulario de solicitud completado, una fotocopia de su identificacion con foto valida emitida por el gobierno y el pago mediante cheque, giro postal o numero de tarjeta de credito. Los cheques deben estar preimpresos con su nombre y direccion. Hay un cargo de $30 por cheques devueltos sin fondos. Tambien puede enviar solicitudes por fax al (907) 465-3618 (solo pago con tarjeta de credito). Envie su pedido utilizando un solo metodo para evitar cargos duplicados.",
    mailProcessingTime: "2-3 meses",
    inPersonLocations:
      "Oficina de Juneau (5441 Commercial Blvd, Juneau, AK 99801) y oficina de Anchorage (3901 Old Seward Hwy, Suite 101, Anchorage, AK 99503)",
    inPersonProcessingTime:
      "El mismo dia a varios dias habiles dependiendo de la carga de trabajo",
    inPersonNotes:
      "Se aceptan visitas sin cita en ambas oficinas durante el horario de atencion (lun-vie 8:30 AM - 4:30 PM AKT). Traiga una identificacion con foto valida emitida por el gobierno y el pago. Se aceptan efectivo, cheque, giro postal y tarjeta de credito en persona.",
    phoneNotes:
      "Se aplica la tarifa de servicio de VitalChek ademas de la tarifa estatal. Se requiere tarjeta de credito o debito. Disponible las 24 horas del dia, los 7 dias de la semana.",
    requirementsNotes:
      "Las solicitudes que no incluyan la firma del solicitante, una fotocopia de una identificacion con foto valida emitida por el gobierno y el pago no seran procesadas. Si alguien que no sea el registrante esta solicitando, se debe incluir documentacion de su parentesco o autorizacion.",
    feeWaivers: [
      {
        eligibility:
          "Jovenes en cuidado de crianza temporal y personas que estan saliendo del sistema de cuidado de crianza en Alaska",
        howToClaim:
          "Comuniquese con su trabajador social de la Oficina de Servicios para Ninos (OCS) al (907) 465-3191. OCS puede solicitar registros vitales en nombre de jovenes actuales y anteriores en cuidado de crianza sin costo como parte de los servicios de vida independiente y transicion.",
      },
      {
        eligibility:
          "Personas en situacion de calle que necesitan un acta de nacimiento para identificacion o servicios",
        howToClaim:
          "Trabaje con un proveedor de servicios para personas sin hogar, organizacion de asistencia legal o agencia de servicios sociales. Alaska Legal Services Corporation (alsc-law.org o 888-478-2572) puede ayudar a obtener registros vitales. Las agencias pueden presentar solicitudes en su nombre y solicitar una exencion de tarifa a HAVRS caso por caso.",
      },
    ],
    specialNotes: [
      "Alaska comenzo el registro territorial de nacimientos en 1913, pero el cumplimiento no fue generalizado hasta aproximadamente 1945. Para nacimientos antes de 1913, los registros eclesiasticos son la mejor fuente; el Bureau of Vital Statistics ha microfilmado registros de iglesias locales con el proposito de crear actas de nacimiento tardias.",
      "Alaska Vital Records no trabaja con ningun proveedor externo excepto VitalChek.com. Tenga cuidado con sitios web no oficiales que cobran tarifas altas para 'procesar' o 'ayudar a solicitar' certificados.",
      "Certificados de nacimiento conmemorativos (heirloom) estan disponibles por una tarifa separada y pueden solicitarse a traves de HAVRS.",
      "Los cambios de nombre o correcciones requieren una orden judicial y una solicitud de enmienda separada presentada ante HAVRS.",
      "Para nacimientos que no fueron registrados en su momento, se puede presentar un acta de nacimiento tardia con evidencia de apoyo. Comuniquese con HAVRS para instrucciones.",
      "Se aceptan pedidos por fax al (907) 465-3618 solo con pago por tarjeta de credito. El tiempo de procesamiento para pedidos por fax es el mismo que por correo (2-3 meses).",
      "La oficina de Anchorage puede ser contactada directamente al (907) 269-0991.",
    ],
    noIdWorkaround:
      "Pida a un familiar elegible (padre o tutor legal que aparezca en el certificado) con identificacion con foto valida que solicite en su nombre. Si tiene 14 anos o mas, una identificacion escolar puede ser aceptada. Si esta en situacion de calle, comuniquese con Alaska Legal Services Corporation (alsc-law.org o 888-478-2572) para asistencia en la obtencion de registros vitales sin identificacion estandar. Tambien puede comunicarse directamente con HAVRS al (907) 465-3391 o BVSOffice@alaska.gov para discutir opciones alternativas de documentacion para su situacion especifica.",
  },
  AL: {
    officeHours: "lun-vie 8:00 AM - 5:00 PM CT",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida (DD-214 o servicio activo)",
      "Tarjeta de residente permanente (green card)",
    ],
    paymentMethods: [
      "giro postal",
      "cheque certificado",
      "cheque personal (a nombre de State Board of Health)",
      "tarjeta de credito (pedidos en linea o por telefono)",
      "efectivo (en persona en departamentos de salud del condado)",
    ],
    onlineNotes:
      "VitalChek es el unico proveedor en linea autorizado. Se aplica una tarifa de servicio de aproximadamente $12.50 ademas de la tarifa estatal. Se requiere tarjeta de credito o debito. Envio acelerado disponible por un costo adicional.",
    mailNotes:
      "Incluya el formulario de solicitud completado, una copia de su identificacion con foto valida y un giro postal o cheque certificado a nombre de 'State Board of Health'. Se aceptan cheques personales, pero pueden retrasar el procesamiento hasta que se cobren.",
    mailProcessingTime: "4-6 semanas",
    inPersonLocations:
      "Oficina estatal en Montgomery y departamentos de salud del condado en todo Alabama",
    inPersonProcessingTime:
      "El mismo dia a 5 dias habiles en la oficina estatal; varia en las oficinas del condado",
    inPersonNotes:
      "Se aceptan visitas sin cita en la oficina de Montgomery. Los departamentos de salud del condado tambien pueden procesar solicitudes; la disponibilidad y las tarifas pueden variar por condado. Llame con anticipacion para confirmar horarios y metodos de pago aceptados.",
    phoneNotes:
      "Se aplica la tarifa de servicio de VitalChek (~$12.50). Se requiere tarjeta de credito o debito. Disponible las 24 horas del dia, los 7 dias de la semana.",
    requirementsNotes:
      "Alabama requiere una solicitud notariada o una copia de identificacion con foto valida con cada solicitud. Si alguien que no sea el registrante esta solicitando, se debe incluir documentacion de su parentesco (por ejemplo, orden judicial, poder notarial).",
    feeWaivers: [
      {
        eligibility:
          "Personas que necesitan un acta de nacimiento para obtener una identificacion con foto para votar",
        howToClaim:
          "Presente la solicitud con una declaracion firmada indicando que el certificado es necesario para obtener identificacion de votante. La tarifa se exenta bajo la ley de identificacion de votante con foto de Alabama para evitar que el requisito funcione como un impuesto electoral.",
      },
      {
        eligibility:
          "Jovenes en cuidado de crianza temporal y personas que estan saliendo del sistema de cuidado de crianza",
        howToClaim:
          "Comuniquese con su trabajador social del DHR o el Alabama Department of Human Resources. La agencia puede solicitar su acta de nacimiento en su nombre sin costo.",
      },
      {
        eligibility:
          "Personas en situacion de calle que reciben servicios a traves de un programa de asistencia para personas sin hogar",
        howToClaim:
          "Trabaje con un administrador de casos en una agencia de servicios para personas sin hogar financiada por HUD o una oficina de Asistencia Legal, quien puede presentar una solicitud en su nombre y solicitar una exencion de tarifa.",
      },
    ],
    specialNotes: [
      "Alabama comenzo el registro estatal de nacimientos en 1908. Los registros anteriores a esa fecha son fragmentarios; comuniquese con el tribunal testamentario del condado donde ocurrio el nacimiento o el Alabama Department of Archives and History (archives.alabama.gov).",
      "Certificados de nacimiento conmemorativos (heirloom) estan disponibles por $35 y pueden solicitarse en linea o en la oficina estatal.",
      "Los cambios de nombre o correcciones requieren una orden judicial y una solicitud de enmienda separada.",
      "Para nacimientos que no fueron registrados en su momento, se puede presentar un acta de nacimiento tardia a traves del tribunal testamentario con evidencia de apoyo.",
      "Los departamentos de salud del condado pueden cobrar una pequena tarifa local adicional; llame con anticipacion para confirmar los costos totales.",
    ],
    noIdWorkaround:
      "Pida a un familiar elegible (padre, conyuge, hijo adulto o hermano) con identificacion con foto valida que solicite en su nombre. Si necesita un acta de nacimiento especificamente para fines de identificacion de votante, la tarifa se exenta bajo la ley de Alabama; comuniquese con el Center for Health Statistics al (334) 206-5418 para preguntar sobre el proceso de exencion de tarifa para identificacion de votante. Si esta en situacion de calle, un proveedor de servicios para personas sin hogar o Legal Aid of Alabama (legalservicesalabama.org o 866-456-4995) puede ayudarle a obtener su certificado sin identificacion con foto. Tambien puede presentar documentacion secundaria como una tarjeta de Seguro Social, declaracion jurada de identidad notariada y registros escolares; llame a la oficina estatal para discutir su situacion especifica.",
  },
  AR: {
    officeHours:
      "lun-vie 8:00 AM - 4:30 PM CT; excluye dias festivos estatales",
    primaryId: [
      "Licencia de conducir estatal válida con foto",
      "Tarjeta de identificación con foto estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU. con foto",
      "Tarjeta de residente permanente (green card)",
    ],
    paymentMethods: [
      "giro postal",
      "cheque certificado",
      "cheque personal (a nombre de Arkansas Department of Health)",
      "tarjeta de credito (solo pedidos en linea y por telefono)",
      "efectivo (solo en persona, se prefiere cambio exacto)",
    ],
    onlineNotes:
      "VitalChek es el unico proveedor en linea autorizado para registros vitales de Arkansas. Se aplica una tarifa de servicio de aproximadamente $13.75 ademas de la tarifa estatal. Se requiere tarjeta de credito o debito. Envio acelerado disponible por un costo adicional.",
    mailNotes:
      "Incluya un formulario de solicitud completado, una fotocopia de su identificacion con foto valida y un cheque o giro postal a nombre de 'Arkansas Department of Health'. Incluya un sobre con su direccion y estampilla para agilizar la entrega de devolucion. Todos los campos requeridos en la solicitud deben estar completados o la solicitud sera devuelta.",
    mailProcessingTime: "4-6 semanas",
    inPersonLocations:
      "Oficina central de la Division of Vital Records en Little Rock y unidades de salud locales en todo Arkansas",
    inPersonProcessingTime:
      "El mismo dia en la oficina central de Little Rock cuando los registros estan en archivo",
    inPersonNotes:
      "El servicio sin cita previa esta disponible en la oficina de Little Rock. Traiga una identificacion con foto valida y el pago. Las unidades de salud locales tambien pueden procesar solicitudes, pero pueden tener horarios limitados. Llame con anticipacion para confirmar disponibilidad.",
    phoneNotes:
      "Se aplica la tarifa de servicio de VitalChek (~$13.75) ademas de la tarifa estatal. Se requiere tarjeta de credito o debito. Disponible las 24 horas del dia, los 7 dias de la semana.",
    requirementsNotes:
      "Se requiere una identificacion con foto valida emitida por el gobierno para todas las solicitudes. Si alguien que no sea el registrante esta solicitando, se debe proporcionar prueba de parentesco o autoridad legal (orden judicial, poder notarial). La solicitud debe ser notariada si no se presenta una identificacion con foto.",
    feeWaivers: [
      {
        eligibility:
          "Personas que necesitan un acta de nacimiento unicamente para obtener una identificacion con foto para votar",
        howToClaim:
          "Presente una declaracion escrita con su solicitud indicando que el acta de nacimiento es necesaria para obtener una identificacion de votante. Bajo la ley de Arkansas, la tarifa se exenta para evitar que el requisito de identificacion funcione como un impuesto electoral.",
      },
      {
        eligibility:
          "Jovenes en cuidado de crianza actualmente bajo custodia estatal o que estan saliendo del sistema de cuidado de crianza",
        howToClaim:
          "Comuniquese con su trabajador social de DCFS o la Division de Servicios para Ninos y Familias de Arkansas. La agencia puede solicitar su acta de nacimiento en su nombre sin cargo.",
      },
      {
        eligibility:
          "Veteranos que solicitan registros para reclamos o beneficios de la Administracion de Veteranos",
        howToClaim:
          "Incluya documentacion de que la solicitud es para propositos de la VA. Los registros necesarios para reclamos de la Administracion de Veteranos se proporcionan sin cargo bajo la ley federal.",
      },
      {
        eligibility:
          "Personas en situacion de calle que reciben servicios de un programa de asistencia para personas sin hogar",
        howToClaim:
          "Trabaje con un administrador de casos en una organizacion de servicios para personas sin hogar o una oficina de Legal Aid of Arkansas, quien puede ayudar a presentar una solicitud de exencion de tarifa en su nombre.",
      },
    ],
    specialNotes: [
      "Arkansas comenzo el registro estatal de nacimientos el 1 de febrero de 1914. Los registros anteriores a esa fecha estan incompletos; comuniquese con la oficina del secretario del condado en el condado donde ocurrio el nacimiento para registros mas antiguos.",
      "Certificados de nacimiento conmemorativos (heirloom) estan disponibles y pueden solicitarse a traves de VitalChek o la oficina estatal.",
      "La ley de Arkansas restringe el acceso a los registros de nacimiento: los certificados no son registros publicos y solo estan disponibles para solicitantes elegibles segun lo definido por estatuto (Ark. Code Ann. \u00A7 20-18-304).",
      "Los cambios de nombre o correcciones requieren una orden judicial y una solicitud de enmienda separada presentada ante la Division of Vital Records.",
      "Las actas de nacimiento tardias para nacimientos no registrados en su momento pueden presentarse a traves del tribunal de circuito con evidencia de apoyo como registros del censo, registros hospitalarios o declaraciones juradas.",
      "Los tiempos de procesamiento para pedidos por correo pueden ser mas largos durante periodos de alta demanda. Llame al (501) 661-2336 para verificar los tiempos de respuesta actuales.",
    ],
    noIdWorkaround:
      "Pida a un familiar elegible (padre, conyuge, hijo adulto, hermano o nieto) que tenga identificacion con foto valida que solicite el certificado en su nombre. Si necesita un acta de nacimiento especificamente para obtener identificacion de votante, la tarifa se exenta bajo la ley de Arkansas (Ark. Code Ann. \u00A7 7-5-324); comuniquese con la Division of Vital Records al (501) 661-2336 para preguntar sobre el proceso de exencion de tarifa para identificacion de votante. Si esta en situacion de calle, comuniquese con Legal Aid of Arkansas (arlegalaid.org o 1-800-952-9243) o un proveedor local de servicios para personas sin hogar para asistencia en la obtencion de su certificado sin identificacion con foto. Tambien puede proporcionar dos formas de identificacion secundaria (por ejemplo, tarjeta de Seguro Social, factura de servicios publicos, declaracion jurada notariada); llame a la oficina estatal para discutir su situacion.",
  },
  AS: {
    officeHours:
      "lun-vie 8:00 AM - 4:00 PM SST (llame para confirmar; el horario puede variar)",
    primaryId: [
      "Licencia de conducir válida",
      "Tarjeta de identificación estatal o territorial válida",
      "Pasaporte válido de EE.UU.",
    ],
    paymentMethods: [
      "giro postal (a nombre de 'Office of Vital Statistics/ASG')",
      "tarjeta de credito (en linea a traves de VitalChek)",
    ],
    onlineNotes:
      "Samoa Americana se asocia con VitalChek para pedidos en linea. Se requiere tarjeta de credito o debito. Debera proporcionar su numero de Seguro Social, nombres de los padres y cargar una identificacion con foto valida (licencia de conducir, tarjeta de identificacion o pasaporte) para verificacion. Se aplican tarifas adicionales de servicio y envio de VitalChek mas alla de la tarifa base del certificado.",
    mailNotes:
      "Incluya un giro postal a nombre de 'Office of Vital Statistics/ASG'. No se aceptan cheques personales. Incluya una fotocopia de su identificacion con foto valida emitida por el gobierno, una carta notariada autorizando la divulgacion del registro, el nombre completo en el certificado, fecha y lugar de nacimiento, nombres de los padres (incluyendo el apellido de soltera de la madre), su relacion con el registrante, el proposito de la solicitud y un sobre con su direccion y estampilla. Comuniquese con la oficina al (684) 633-1405 para confirmar las tarifas actuales antes de enviar por correo.",
    mailProcessingTime:
      "4-8 semanas (mas tiempo debido a la ubicacion remota y servicio de correo limitado)",
    inPersonLocations:
      "Office of Vital Statistics, Department of Homeland Security, Tafuna, Pago Pago, Samoa Americana",
    inPersonProcessingTime:
      "El mismo dia a varios dias habiles dependiendo de la disponibilidad del registro",
    inPersonNotes:
      "Traiga una identificacion con foto valida emitida por el gobierno. Se requiere identificacion personal para verificacion antes de que se divulgue cualquier registro. Comuniquese con la oficina al (684) 633-1405 para confirmar horarios y disponibilidad antes de visitar.",
    phoneNotes:
      "Llame para consultas, verificaciones de estado y para confirmar tarifas actuales. No se pueden realizar pedidos por telefono; use VitalChek en linea o visite en persona. Numeros alternativos: (684) 633-1406 (Vital Statistics) o (684) 633-4606 (Health Information Office). Correo electronico: vitalrecords@asdhs.as.gov.",
    requirementsNotes:
      "Se requiere identificacion personal para verificacion, y se debe proporcionar una carta notariada antes de que se divulgue el registro. Para pedidos en linea de VitalChek, se deben escanear y cargar dos formas de identificacion. Comuniquese con la oficina al (684) 633-1405 para confirmar los requisitos especificos.",
    feeWaivers: [
      {
        eligibility:
          "No se ha documentado publicamente un programa formal de exencion de tarifas para registros vitales de Samoa Americana. Las personas que experimentan dificultades financieras deben comunicarse directamente con la Office of Vital Statistics para consultar sobre posibles adaptaciones.",
        howToClaim:
          "Llame a la Office of Vital Statistics al (684) 633-1405 o (684) 633-1406 para discutir su situacion y preguntar si hay alguna reduccion o exencion de tarifa disponible.",
      },
    ],
    specialNotes: [
      "Los registros vitales de Samoa Americana datan de 1890 para nacimientos y 1900 para defunciones. Es posible que no existan registros anteriores a estas fechas en el sistema de registro civil.",
      "Samoa Americana es un territorio no incorporado de los EE. UU. en el Pacifico Sur. La entrega de correo puede ser significativamente mas lenta que al territorio continental de los EE. UU.; permita tiempo adicional para solicitudes por correo.",
      "No se aceptan cheques personales. Solo se aceptan giros postales a nombre de 'Office of Vital Statistics/ASG' para solicitudes por correo.",
      "Se requiere una carta notariada para solicitudes por correo para verificar la identidad y autorizacion del solicitante.",
      "Las personas nacidas en Samoa Americana son nacionales de los EE. UU. pero no ciudadanos de los EE. UU. al nacer. Las actas de nacimiento de Samoa Americana reflejan este estatus.",
      "Para enmiendas a actas de nacimiento o defuncion, la tarifa es de $7.00. Comuniquese con la oficina para los procedimientos de enmienda.",
      "La pagina del CDC 'Where to Write' para Samoa Americana fue revisada por ultima vez en noviembre de 2015; las tarifas y procedimientos pueden haber cambiado. Siempre llame para confirmar antes de enviar una solicitud.",
    ],
    noIdWorkaround:
      "Si carece de una identificacion con foto emitida por el gobierno, comuniquese con la Office of Vital Statistics de Samoa Americana al (684) 633-1405 para discutir opciones alternativas de identificacion. Una carta notariada de una persona que pueda verificar su identidad, junto con cualquier identificacion secundaria que tenga (tarjeta de Seguro Social, identificacion de empleo u otros documentos con su nombre), puede ser aceptada a discrecion de la oficina. Debido a que Samoa Americana es un territorio pequeno con lazos comunitarios estrechos, la oficina puede trabajar con usted caso por caso; llame con anticipacion para explicar su situacion antes de visitar o enviar una solicitud por correo.",
  },
  AZ: {
    officeHours:
      "lun-vie 8:00 AM - 5:00 PM MT (cerrado fines de semana y dias festivos estatales)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal de EE.UU. (no temporal)",
      "Pasaporte de EE.UU. (con firma; tarjetas de pasaporte sin firma no aceptadas)",
      "Identificación militar de EE.UU. (debe contener la firma del portador)",
      "Tarjeta de identificación tribal (debe contener la firma del portador)",
      "Licencia de conducir o tarjeta de identificación de territorios de EE.UU.",
      "Tarjeta de residente permanente (emitida después del 11 de mayo de 2010, con firma visible)",
      "Tarjeta de registro de extranjero (Formulario I-551)",
      "Pasaporte extranjero (o visa en pasaporte con firma del portador)",
      "Tarjeta de identificación consular extranjera (solo si el gobierno emisor usa verificación biométrica)",
    ],
    paymentMethods: [
      "giro postal",
      "cheque de caja",
      "tarjeta de credito (en linea/en persona en oficinas del condado)",
      "tarjeta de debito (en linea/en persona en oficinas del condado)",
      "efectivo (solo en persona en oficinas del condado)",
    ],
    onlineNotes:
      "VitalChek es el proveedor en linea autorizado para el Bureau of Vital Records estatal. Los pedidos se envian electronicamente al siguiente dia habil. Espere tarifas de envio adicionales dependiendo de la velocidad de entrega (estandar 7-10 dias habiles, acelerado 3-5 dias habiles). Algunas oficinas del condado (por ejemplo, Maricopa, Pima) tambien ofrecen pedidos en linea a traves de VitalChek.",
    mailNotes:
      "Incluya el formulario de solicitud completado (VS-10), pago mediante giro postal o cheque de caja a nombre de 'Bureau of Vital Records' y una fotocopia clara del anverso y reverso de su identificacion con foto valida emitida por el gobierno (o tenga su firma notariada). La oficina estatal no acepta cheques personales.",
    mailProcessingTime: "4-5 semanas",
    inPersonLocations:
      "Oficinas locales de Registros Vitales del departamento de salud del condado (los 15 condados). El Bureau of Vital Records estatal en Phoenix (150 N. 18th Ave., Ste. 120) ya no ofrece servicio de emision de certificados sin cita previa el mismo dia.",
    inPersonProcessingTime: "El mismo dia en oficinas del condado",
    inPersonNotes:
      "Para servicio el mismo dia, visite la Oficina de Registros Vitales de su departamento de salud del condado local. Llegue antes de las 4:00 PM. Traiga una identificacion con foto valida, pago y documentos que demuestren elegibilidad. La oficina estatal solo procesa solicitudes por correo.",
    phoneNotes:
      "Pedidos por telefono procesados a traves de VitalChek con tarifas de servicio adicionales. El telefono de la oficina estatal (602) 364-1300 o el numero gratuito (888) 816-5907 es solo para informacion, no para pedidos.",
    requirementsNotes:
      "Para solicitudes por correo, proporcione una fotocopia del anverso y reverso de su identificacion con foto valida emitida por el gobierno, O tenga su firma notariada. Para solicitudes en persona, presente su identificacion con foto valida. Las identificaciones temporales marcadas 'Not Valid for ID Purposes' no se aceptan. Las Credenciales de Elector de Mexico, identificaciones escolares, licencias de conducir extranjeras, Tarjetas de Autorizacion de Empleo (Formulario I-766) y Tarjetas de Delincuente Liberado del DOC de Arizona no se aceptan.",
    feeWaivers: [
      {
        eligibility:
          "Department of Economic Security (casos de manutencion infantil y beneficios publicos)",
        howToClaim:
          "El registrador estatal proporciona copias sin cargo al DES o sus abogados para casos de manutencion infantil bajo 42 U.S.C. 651-669 o asuntos de beneficios publicos. Los registros deben usarse solo para propositos oficiales.",
      },
      {
        eligibility:
          "Department of Child Safety (casos de bienestar infantil)",
        howToClaim:
          "El registrador estatal proporciona copias sin cargo al DCS o sus abogados para casos de bienestar infantil. Los registros deben usarse solo para propositos oficiales.",
      },
      {
        eligibility: "Agencias gubernamentales (propositos oficiales)",
        howToClaim:
          "Los registradores estatales y locales pueden eximir a cualquier agencia gubernamental (segun se define en ARS 41-1001) de las tarifas.",
      },
      {
        eligibility:
          "Jovenes de 16 anos o mas que estan en situacion de calle o bajo custodia del DCS",
        howToClaim:
          "Un menor de al menos 16 anos que no tiene direccion de residencia o esta bajo custodia del DCS puede obtener una copia certificada de su acta de nacimiento sin la firma de un padre/tutor. Esto elimina la barrera del consentimiento parental pero no exime explicitamente la tarifa; sin embargo, el DCS o una agencia de servicios para personas sin hogar puede cubrir el costo o solicitar en nombre del joven bajo ARS 36-324(D) o 36-341(F).",
      },
      {
        eligibility: "Veteranos (para propositos de la VA)",
        howToClaim:
          "Los registros solicitados para propositos de la Administracion de Veteranos se proporcionan sin cargo segun los requisitos federales.",
      },
    ],
    specialNotes: [
      "El Bureau of Vital Records estatal de Arizona ya no ofrece servicio de emision de certificados sin cita previa el mismo dia. Para servicio en persona/el mismo dia, visite la Oficina de Registros Vitales de su departamento de salud del condado local.",
      "El registro estatal de nacimientos comenzo en julio de 1909 y se cumplio generalmente para 1926. Para nacimientos antes de 1909, la oficina estatal puede tener extractos de registros presentados ante los condados; comuniquese directamente con el condado de nacimiento.",
      "La Oficina de Registros Vitales e Identificacion de la Nacion Navajo (NOVRI) en Window Rock emite documentos de inscripcion tribal y declaraciones juradas de nacimiento para miembros de la Nacion Navajo. Los nacimientos en Arizona en tierras tribales aun se registran con el estado, pero los miembros tribales tambien pueden necesitar documentos de NOVRI para la inscripcion. Comuniquese con NOVRI al (928) 871-6386.",
      "AZDHS se ha asociado con Colorado, Nuevo Mexico y Utah para organizar eventos de registro de nacimiento tardio en la Nacion Navajo para miembros tribales ancianos que nunca fueron registrados al nacer.",
      "Se cobra un recargo de $1 por cada copia certificada de acta de nacimiento bajo ARS 36-341(B) y esta incluido en la tarifa de $20.",
      "Los formularios de solicitud en espanol estan disponibles como ejemplos de referencia en algunas oficinas del condado (por ejemplo, Condado de Maricopa) pero no son formularios oficiales del estado. La solicitud oficial debe completarse en ingles.",
      "Las oficinas del condado pueden establecer sus propias tarifas segun ARS 36-341(A), por lo que los costos pueden variar ligeramente por condado.",
    ],
    noIdWorkaround:
      "Si no tiene una identificacion con foto emitida por el gobierno, puede hacer que su firma en la solicitud sea notariada por un notario publico; esto cumple con el requisito de verificacion de identidad tanto para solicitudes por correo como en persona. Alternativamente, un familiar elegible que tenga identificacion con foto valida puede presentar la solicitud en su nombre con prueba de parentesco (por ejemplo, su propia acta de nacimiento que muestre parentesco comun, certificado de matrimonio u orden judicial). Para jovenes de 16 anos o mas que estan en situacion de calle o bajo custodia del DCS, ARS 36-324(F) exime el requisito de firma parental. Las agencias gubernamentales y los proveedores de servicios para personas sin hogar tambien pueden solicitar registros en nombre de las personas bajo ARS 36-324(D)-(E).",
  },
  CO: {
    officeHours:
      "lun-vie 8:00 AM - 5:00 PM MT (cerrado fines de semana y dias festivos estatales)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida de EE.UU.",
      "Pasaporte de EE.UU. o tarjeta de pasaporte",
      "Identificación militar de EE.UU. (activo, reserva o retirado)",
      "Tarjeta de residente permanente (Formulario I-551, Green Card)",
      "Pasaporte extranjero con visa válida de EE.UU.",
      "Tarjeta de inscripción tribal con foto",
      "Certificado de ciudadanía o naturalización (Formulario N-550 o N-560)",
    ],
    paymentMethods: [
      "giro postal",
      "cheque personal",
      "cheque de caja",
      "tarjeta de credito (pedidos en linea y por telefono)",
      "tarjeta de debito (pedidos en linea y por telefono)",
      "efectivo (solo en persona en oficinas del condado)",
    ],
    onlineNotes:
      "VitalChek es el proveedor en linea autorizado para la Seccion de Registros Vitales de Colorado. El procesamiento estandar toma de 2 a 4 semanas. Opciones de envio acelerado disponibles por una tarifa adicional. Se requiere tarjeta de credito/debito.",
    mailNotes:
      "Incluya el formulario de solicitud completado, pago mediante cheque o giro postal a nombre de 'Vital Records Section' y una fotocopia clara del anverso y reverso de su identificacion con foto valida emitida por el gobierno. Las solicitudes con informacion incompleta o sin copias de identificacion seran retrasadas o devueltas.",
    mailProcessingTime: "3-6 semanas",
    inPersonLocations:
      "La oficina estatal de Registros Vitales en Denver (4300 Cherry Creek Drive South) y las oficinas locales de departamentos de salud publica del condado en los 64 condados.",
    inPersonProcessingTime:
      "El mismo dia en la mayoria de las oficinas del condado; 5-10 dias habiles en la oficina estatal",
    inPersonNotes:
      "Para servicio el mismo dia, visite una oficina local del departamento de salud publica del condado. Traiga una identificacion con foto valida, pago y el formulario de solicitud completado. No todas las oficinas del condado emiten actas de nacimiento; llame con anticipacion para confirmar. La oficina estatal en Denver acepta solicitudes sin cita, pero puede no proporcionar emision el mismo dia.",
    phoneNotes:
      "Los pedidos por telefono se procesan a traves de VitalChek con tarifas de servicio adicionales. Se requiere tarjeta de credito o debito. El telefono de la oficina estatal (303) 692-2200 es solo para informacion, no para pedidos.",
    requirementsNotes:
      "Los solicitantes deben proporcionar una fotocopia clara del anverso y reverso de una identificacion con foto valida emitida por el gobierno para solicitudes por correo. Para solicitudes en persona, presente la identificacion original. Si no tiene una identificacion con foto primaria, puede proporcionar dos formas de identificacion secundaria, o tener su firma notariada en la solicitud.",
    feeWaivers: [
      {
        eligibility:
          "Personas en situacion de calle que necesitan un acta de nacimiento para fines de identificacion",
        howToClaim:
          "Solicite a traves de un proveedor de servicios para personas sin hogar o agencia gubernamental que pueda presentar la solicitud en su nombre. Los departamentos del condado de servicios humanos/sociales pueden cubrir la tarifa o solicitar una exencion cuando el certificado sea necesario para la inscripcion en beneficios.",
      },
      {
        eligibility:
          "Agencias gubernamentales que solicitan registros para propositos oficiales",
        howToClaim:
          "Los registradores estatales y locales pueden proporcionar copias sin cargo a agencias gubernamentales federales, estatales y locales cuando el registro sea necesario para asuntos oficiales.",
      },
      {
        eligibility:
          "Victimas de violencia domestica o agresion sexual que necesitan documentos de identidad",
        howToClaim:
          "Una organizacion de servicios para victimas o agencia de aplicacion de la ley puede solicitar una exencion de tarifa en nombre de la persona. Proporcione documentacion de la agencia que le asiste.",
      },
      {
        eligibility:
          "Personas bajo custodia del Colorado Department of Corrections",
        howToClaim:
          "El CDOC puede solicitar registros en nombre de personas encarceladas que se preparan para la reintegracion. La solicitud se realiza a traves del departamento de registros o servicios sociales de la instalacion.",
      },
      {
        eligibility:
          "Jovenes que estan saliendo del sistema de cuidado de crianza",
        howToClaim:
          "Los departamentos del condado de servicios humanos pueden solicitar actas de nacimiento sin cargo para jovenes en cuidado de crianza o que estan saliendo del sistema que necesitan documentos de identidad.",
      },
    ],
    specialNotes: [
      "El registro estatal de nacimientos en Colorado comenzo en 1910 y se cumplio generalmente para la decada de 1940. Para nacimientos antes de 1910, comuniquese con el secretario y registrador del condado en el condado de nacimiento, ya que algunos condados mantuvieron registros anteriores.",
      "Colorado permite enmiendas a las actas de nacimiento para cambios de marcador de genero sin requerir cirugia, segun CRS \u00A7 25-2-115(4). Se requiere una orden judicial o una declaracion firmada de un proveedor de atencion medica con licencia.",
      "Un certificado de nacimiento conmemorativo 'heirloom' esta disponible para nacimientos ocurridos en Colorado. Presenta obras de arte y es adecuado para exhibicion, pero puede no ser aceptado para todos los propositos legales.",
      "Colorado emite tanto actas de nacimiento de formato corto (resumen/certificacion) como de formato largo (copia certificada completa). Algunas agencias requieren la version de formato largo, asi que solicite una 'copia certificada' para recibir el documento completo.",
      "Las oficinas del condado pueden cobrar tarifas diferentes a las de la oficina estatal segun la ordenanza local. Llame a la oficina del condado para confirmar sus tarifas actuales antes de visitar.",
      "La tarifa de $13 por copia adicional se aplica solo a copias adicionales solicitadas al mismo tiempo que la primera copia en el mismo pedido.",
    ],
    noIdWorkaround:
      "Si no tiene una identificacion con foto emitida por el gobierno, puede hacer que su firma en la solicitud sea notariada por un notario publico para cumplir con el requisito de verificacion de identidad. Alternativamente, puede proporcionar dos formas de identificacion secundaria (por ejemplo, tarjeta de Seguro Social mas una factura de servicios publicos). Un familiar elegible que tenga identificacion con foto valida tambien puede presentar la solicitud en su nombre con prueba de su parentesco con el registrante. Para personas en situacion de calle, un proveedor de servicios para personas sin hogar o departamento del condado de servicios humanos puede ayudar a obtener el certificado y puede solicitar una exencion de tarifa bajo CRS \u00A7 25-2-117(2)(b).",
  },
  CT: {
    officeHours: "lun-vie 8:30 AM - 4:30 PM ET",
    primaryId: [
      "Licencia de conducir estatal válida",
      "Pasaporte válido de EE.UU.",
      "Tarjeta de identificación con foto estatal válida",
      "Otra identificación con foto emitida por el gobierno",
    ],
    paymentMethods: [
      "giro postal (a nombre de 'Treasurer, State of Connecticut')",
      "tarjeta de credito (en linea/telefono a traves de VitalChek)",
      "efectivo (en persona en oficinas de secretarios municipales)",
      "cheque (aceptado en algunas oficinas de secretarios municipales)",
    ],
    onlineNotes:
      "VitalChek es el unico proveedor externo aprobado por el Departamento de Salud Publica de Connecticut. Se aplican tarifas adicionales de procesamiento y envio mas alla de la tarifa del certificado. Los certificados de secretarios municipales ($20) tambien pueden solicitarse a traves de VitalChek para municipios participantes.",
    mailNotes:
      "Incluya el formulario de solicitud completado, fotocopia de identificacion con foto emitida por el gobierno y giro postal a nombre de 'Treasurer, State of Connecticut'. No se aceptan cheques personales ni tarjetas de credito para pedidos por correo a la oficina estatal. No envie efectivo.",
    mailProcessingTime: "Hasta 12 semanas",
    inPersonLocations:
      "Oficina Estatal de Registros Vitales en 410 Capitol Avenue, 1er piso, Hartford, CT. Tambien disponible en las 169 oficinas de secretarios municipales/de ciudad en todo el estado.",
    inPersonProcessingTime:
      "El mismo dia en la mayoria de las oficinas de secretarios municipales; varia en la oficina estatal",
    inPersonNotes:
      "Las oficinas de secretarios municipales cobran $20 por copia certificada (formato largo) o $15 (formato corto), que es menos que la tarifa de $30 de la oficina estatal. Se requiere identificacion con foto para ingresar al edificio de la oficina estatal. Visite el secretario municipal/de ciudad donde ocurrio el nacimiento para el servicio mas rapido y economico.",
    phoneNotes:
      "Mismas tarifas y cargos adicionales de procesamiento que los pedidos en linea de VitalChek. Se requiere tarjeta de credito/debito.",
    requirementsNotes:
      "Los registros de nacimiento de menos de 100 anos son confidenciales bajo Conn. Gen. Stat. \u00A7 7-51 y no estan disponibles para el publico en general. Debe demostrar su relacion con el registrante. Los registros de 100 anos o mas estan abiertos al publico.",
    feeWaivers: [
      {
        eligibility:
          "Jovenes sin hogar (edades 18-24) y jovenes certificados como personas sin hogar segun lo definido bajo Conn. Gen. Stat. \u00A7 7-36",
        howToClaim:
          "El joven sin hogar y la persona que lo certifica como tal deben presentarse en persona en cualquier oficina del registrador municipal con acceso al sistema electronico de registros vitales o en la Oficina Estatal de Registros Vitales. La persona que certifica debe presentar identificacion suficiente y documentacion del estado de persona sin hogar del joven. No se cobra tarifa por la copia certificada.",
      },
      {
        eligibility:
          "Las oficinas de secretarios municipales cobran tarifas mas bajas que la oficina estatal ($20 para formato largo, $15 para formato corto vs. $30 en la oficina estatal)",
        howToClaim:
          "Solicite su acta de nacimiento al secretario municipal/de ciudad donde ocurrio el nacimiento o cualquier secretario municipal con acceso al sistema electronico ConnVRS. Las tarifas son establecidas por Conn. Gen. Stat. \u00A7 7-74 y son mas bajas que la tarifa de la oficina estatal.",
      },
    ],
    specialNotes: [
      "Connecticut tiene un sistema dual: tanto la Oficina Estatal de Registros Vitales como las 169 oficinas de secretarios municipales/de ciudad pueden emitir actas de nacimiento. Los secretarios municipales son tipicamente mas rapidos y economicos ($20 formato largo vs. $30 en la oficina estatal).",
      "La oficina estatal mantiene registros desde el 1 de julio de 1897 hasta el presente. Para nacimientos antes de esa fecha, comuniquese con el secretario municipal donde ocurrio el nacimiento o la Biblioteca del Estado de Connecticut al (860) 757-6580.",
      "Los registros de nacimiento de menos de 100 anos son confidenciales y estan restringidos a solicitantes elegibles. Los registros de 100 anos o mas estan abiertos al publico.",
      "ConnVRS (Sistema de Registros Vitales de Connecticut) se lanzo en 2016 y permite a los secretarios municipales de todo el estado acceder y emitir certificados electronicamente, por lo que no tiene que visitar el municipio especifico donde ocurrio el nacimiento.",
      "Los pedidos por correo enviados a la Oficina Estatal de Registros Vitales pueden tardar hasta 12 semanas en procesarse. Para un servicio mas rapido, visite una oficina de secretario municipal local o solicite en linea a traves de VitalChek.",
      "La oficina estatal no acepta cheques personales ni tarjetas de credito para pedidos por correo. Solo se aceptan giros postales a nombre de 'Treasurer, State of Connecticut'.",
    ],
    noIdWorkaround:
      "Connecticut requiere una identificacion con foto emitida por el gobierno para obtener un acta de nacimiento. Si no tiene identificacion con foto, comuniquese con la Oficina Estatal de Registros Vitales al (860) 509-7700 para discutir opciones alternativas de identificacion. Los jovenes sin hogar (edades 18-24) pueden obtener una copia certificada gratuita bajo Conn. Gen. Stat. \u00A7 7-51(e) presentandose en persona con una persona que certifique y pueda dar fe de su condicion de persona sin hogar. Organizaciones comunitarias como Connecticut 2-1-1 (marque 2-1-1) pueden conectarlo con programas que ayudan a las personas a obtener actas de nacimiento y documentos de identificacion sin costo. Un abogado de asistencia legal tambien puede ayudarlo a solicitar una prueba alternativa de identidad.",
  },
  DC: {
    officeHours:
      "lun-vie 8:30 AM - 3:30 PM ET (sin cita); pedidos en linea aceptados 24/7",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU. (CAC)",
      "Tarjeta de residente permanente válida (green card)",
      "Tarjeta de identificación emitida por DC",
    ],
    paymentMethods: [
      "tarjeta de credito (en linea)",
      "giro postal",
      "cheque certificado",
      "efectivo (en persona)",
    ],
    onlineNotes:
      "DC Vital Records ofrece pedidos en linea a traves de su propio portal. Debe crear una cuenta en el sistema de Registros Vitales de DC Health. Se requiere tarjeta de credito o debito. El procesamiento estandar es de 5-10 dias habiles; opciones de envio acelerado disponibles al momento del pago.",
    mailNotes:
      "Incluya una Solicitud de Copia Certificada de Acta de Nacimiento completada, una fotocopia de su identificacion con foto valida emitida por el gobierno y un giro postal o cheque certificado a nombre de 'DC Treasurer'. Incluya un sobre con su direccion y estampilla. No envie efectivo por correo.",
    mailProcessingTime: "4-6 semanas desde la recepcion",
    inPersonLocations:
      "DC Vital Records Division, 899 North Capitol Street NE, primer piso, Washington, DC 20002",
    inPersonProcessingTime: "El mismo dia si el registro esta en archivo",
    inPersonNotes:
      "Servicio sin cita disponible de lunes a viernes. Traiga una identificacion con foto valida emitida por el gobierno. Llegue temprano ya que los tiempos de espera pueden ser significativos, especialmente a mediados de mes. Se aceptan efectivo, giros postales y cheques certificados en persona.",
    phoneNotes:
      "La linea telefonica es para consultas y verificacion de estado. No se pueden realizar pedidos por telefono; use el portal en linea o visite en persona para realizar pedidos.",
    requirementsNotes:
      "DC requiere prueba de identidad y prueba de elegibilidad. Si usted no es el registrante, debe proporcionar documentacion que demuestre su relacion (por ejemplo, su propia acta de nacimiento, orden judicial, poder notarial o carta de autorizacion notariada).",
    feeWaivers: [
      {
        eligibility:
          "Personas en situacion de calle que solicitan un acta de nacimiento para obtener vivienda, empleo, beneficios publicos o identificacion",
        howToClaim:
          "Proporcione una carta o referencia de un refugio, agencia de servicios sociales o proveedor de servicios para personas sin hogar (como el DC Department of Human Services Community Partnership for the Prevention of Homelessness) que certifique su condicion de persona sin hogar. Presente la carta en la oficina de Registros Vitales y solicite una exencion de tarifa.",
      },
      {
        eligibility:
          "Victimas de violencia domestica que necesitan un acta de nacimiento para obtener una orden de proteccion, establecer una nueva identidad o acceder a servicios de seguridad",
        howToClaim:
          "Proporcione documentacion de su condicion de victima de violencia domestica, como una orden de proteccion civil, informe policial o carta de un proveedor de servicios contra la violencia domestica. Comuniquese con la Division de Registros Vitales al (202) 442-9009 para solicitar una exencion de tarifa antes de visitar.",
      },
      {
        eligibility:
          "Personas que demuestren dificultades financieras y necesiten el certificado para obtener identificacion requerida por el gobierno o beneficios publicos",
        howToClaim:
          "Presente una solicitud escrita explicando las dificultades financieras y el proposito para el cual se necesita el certificado. Incluya documentacion de inscripcion en programas de asistencia publica (TANF, SNAP, Medicaid o DC Alliance) si esta disponible. El Registrador puede eximir la tarifa a su discrecion.",
      },
      {
        eligibility:
          "Jovenes que estan saliendo del sistema de cuidado de crianza en el Distrito de Columbia que necesitan actas de nacimiento para identificacion, empleo o vivienda",
        howToClaim:
          "La Agencia de Servicios para Ninos y Familias de DC (CFSA) o el trabajador social asignado debe solicitar el certificado en nombre del joven. Comuniquese con CFSA al (202) 442-6100 o directamente con la oficina de Registros Vitales.",
      },
    ],
    specialNotes: [
      "DC Vital Records mantiene registros de nacimiento desde 1874 hasta el presente. Para registros anteriores a 1874, comuniquese con los Archivos de DC al (202) 727-2054.",
      "DC emite copias certificadas generadas por computadora. Copias de formato largo (completo) y formato corto (resumen) estan disponibles; la mayoria de las agencias y solicitudes federales requieren la copia certificada de formato largo.",
      "Las actas de nacimiento para eventos ocurridos en DC solo estan disponibles a traves de DC Vital Records, no a traves de ninguna oficina estatal de registros vitales.",
      "Para uso internacional, las actas de nacimiento pueden necesitar una apostilla o autenticacion del Tribunal Superior de DC o el Departamento de Estado de los EE. UU.",
      "Los cambios de nombre o marcador de genero en las actas de nacimiento de DC pueden solicitarse a traves de la Division de Registros Vitales. DC no requiere cirugia ni orden judicial para cambios de marcador de genero; una declaracion firmada del solicitante es suficiente bajo D.C. Code \u00A7 7-231.18.",
      "El procesamiento acelerado esta disponible solo para pedidos en linea; no hay servicio acelerado estatal para solicitudes por correo.",
    ],
    noIdWorkaround:
      "Si no tiene una identificacion con foto emitida por el gobierno, DC aceptara dos formas de identificacion secundaria (por ejemplo, tarjeta de Seguro Social mas una factura de servicios publicos, o una tarjeta de seguro medico mas un estado de cuenta bancario). Las personas en situacion de calle pueden presentar una carta de un refugio o proveedor de servicios para personas sin hogar que certifique su identidad; comuniquese con la Division de Registros Vitales al (202) 442-9009 antes de visitar para discutir su situacion. Los jovenes que estan saliendo del sistema de cuidado de crianza deben trabajar con su trabajador social de CFSA, quien puede solicitar el certificado en su nombre. DC tambien participa en los servicios coordinados de identificacion del Distrito a traves del Department of Human Services, que puede asistir a personas en situacion de calle o sin identificacion.",
  },
  DE: {
    officeHours: "lun-vie 8:00 AM - 4:30 PM ET",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU. (CAC)",
      "Tarjeta de residente permanente válida (green card)",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de credito (en linea/telefono a traves de VitalChek)",
      "efectivo (en persona)",
    ],
    onlineNotes:
      "Pedidos procesados a traves de VitalChek, el proveedor en linea autorizado por el estado. Tarifa estatal de $25 mas tarifa de servicio de VitalChek. Envio acelerado disponible por un costo adicional.",
    mailNotes:
      "Incluya el formulario de solicitud completado, fotocopia de identificacion valida emitida por el gobierno y cheque o giro postal a nombre de 'Office of Vital Statistics'. No envie efectivo por correo.",
    mailProcessingTime: "4-6 semanas",
    inPersonLocations:
      "Oficina principal en 417 Federal Street, Jesse Cooper Building, Dover, DE 19901. Servicio sin cita disponible durante el horario de atencion.",
    inPersonProcessingTime: "El mismo dia si el registro esta en archivo",
    inPersonNotes:
      "Traiga una identificacion con foto valida. Se aceptan visitas sin cita; no se requiere cita. Pago en efectivo, cheque o giro postal.",
    phoneNotes:
      "Se requiere tarjeta de credito o debito. Se aplica tarifa estatal mas tarifa de servicio de VitalChek. Disponible las 24 horas del dia, los 7 dias de la semana.",
    requirementsNotes:
      "Delaware requiere prueba de identidad para todos los solicitantes. Si usted no es el registrante, debe proporcionar documentacion que demuestre su relacion (por ejemplo, orden judicial, poder notarial). Se requiere una fotocopia de identificacion para solicitudes por correo; se debe presentar la identificacion original para solicitudes en persona.",
    feeWaivers: [
      {
        eligibility:
          "Personas en situacion de calle que necesitan un acta de nacimiento para vivienda, empleo o beneficios publicos",
        howToClaim:
          "Presente una declaracion escrita de un refugio, agencia de servicios sociales o proveedor de servicios para personas sin hogar que certifique su condicion de persona sin hogar. Comuniquese con la Office of Vital Statistics al (302) 744-4549 para solicitar la exencion.",
      },
      {
        eligibility:
          "Victimas de violencia domestica que necesitan documentos de identificacion para seguridad o procedimientos legales",
        howToClaim:
          "Proporcione documentacion como una orden de Proteccion Contra el Abuso o carta de un programa contra la violencia domestica. Comuniquese con la Office of Vital Statistics al (302) 744-4549 para solicitar una exencion de tarifa.",
      },
      {
        eligibility:
          "Jovenes que estan saliendo del sistema de cuidado de crianza (edades 18-21) que necesitan actas de nacimiento para identificacion o empleo",
        howToClaim:
          "La Division de Servicios Familiares de Delaware o el trabajador social del joven debe presentar la solicitud en nombre del joven. Comuniquese con el trabajador social de DFS para iniciar el proceso.",
      },
      {
        eligibility:
          "Personas indigentes que no pueden pagar la tarifa y necesitan el certificado para un proposito requerido por el gobierno",
        howToClaim:
          "Presente una solicitud escrita explicando las dificultades financieras y la razon por la que se necesita el certificado. Incluya prueba de inscripcion en asistencia publica (por ejemplo, Medicaid, SNAP, TANF) si esta disponible. Comuniquese al (302) 744-4549.",
      },
    ],
    specialNotes: [
      "Los registros de nacimiento de Delaware desde 1861 hasta el presente son mantenidos por la Office of Vital Statistics. Para registros anteriores a 1861, comuniquese con los Archivos Publicos de Delaware al (302) 744-5000.",
      "Delaware es un estado pequeno con una sola oficina de registros vitales en Dover; no hay sucursales. Planifique su viaje en consecuencia si solicita en persona.",
      "El procesamiento acelerado esta disponible solo a traves de VitalChek (en linea o por telefono) por una tarifa adicional; la oficina estatal no ofrece su propio servicio acelerado de correo.",
      "La apostilla o autenticacion de actas de nacimiento para uso internacional puede solicitarse a traves del Secretario de Estado de Delaware al (302) 739-4111.",
      "Delaware emite copias certificadas que incluyen un sello en relieve y firma del registrador. No se emiten resumenes de formato corto; todas las copias son copias certificadas completas.",
    ],
    noIdWorkaround:
      "Si no tiene una identificacion con foto emitida por el gobierno, Delaware aceptara dos formas de identificacion secundaria (por ejemplo, tarjeta de Seguro Social mas una factura de servicios publicos, o tarjeta de seguro medico mas un estado de cuenta bancario). Las personas en situacion de calle pueden presentar una carta de un refugio o agencia de servicios sociales que certifique su identidad; comuniquese con la Office of Vital Statistics al (302) 744-4549 para discutir su situacion antes de visitar. Los jovenes que estan saliendo del sistema de cuidado de crianza deben trabajar con su trabajador social de DFS, quien puede solicitar el certificado en su nombre. Tambien puede comunicarse con Delaware 2-1-1 para referencias a organizaciones que ayudan con la obtencion de registros vitales y documentos de identificacion.",
  },
  ME: {
    officeHours: "lun-vie 9:00 AM - 4:00 PM ET",
    primaryId: [
      "Licencia de conducir o identificación con foto estatal válida",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "efectivo (solo en persona)",
      "tarjeta de credito (en linea/telefono a traves de VitalChek)",
    ],
    onlineNotes:
      "VitalChek es el proveedor en linea autorizado para el estado de Maine. El procesamiento generalmente toma de 5 a 7 dias habiles despues de la verificacion. Opciones de envio acelerado disponibles por una tarifa adicional.",
    mailNotes:
      "Incluya el formulario de solicitud VS-18 completado, una fotocopia de su identificacion con foto emitida por el gobierno y un cheque o giro postal a nombre de 'Treasurer, State of Maine'. Incluya un sobre con su direccion y estampilla para una devolucion mas rapida. Todas las solicitudes por correo requieren una copia de identificacion con foto valida.",
    mailProcessingTime: "4-6 semanas",
    inPersonLocations:
      "Oficina estatal de Registros Vitales en 220 Capitol Street, Augusta, ME. Tambien disponible en la oficina del secretario de la ciudad o municipio donde ocurrio el nacimiento.",
    inPersonProcessingTime:
      "El mismo dia en la oficina estatal; varia en secretarios municipales",
    inPersonNotes:
      "Los secretarios municipales (de ciudad/municipio) mantienen registros de nacimiento para eventos ocurridos en su jurisdiccion. Las tarifas en oficinas municipales pueden diferir de las tarifas estatales. Llame con anticipacion para confirmar horarios y disponibilidad.",
    phoneNotes:
      "Se requiere tarjeta de credito o debito. Misma tarifa estatal mas tarifa de procesamiento de VitalChek. Disponible las 24 horas del dia, los 7 dias de la semana a traves del sistema automatizado.",
    requirementsNotes:
      "Los registros de nacimiento de Maine estan restringidos a solicitantes elegibles. Debe demostrar un interes directo y legitimo. Se requiere una fotocopia de una identificacion con foto valida emitida por el gobierno con todas las solicitudes. Si no tiene identificacion con foto, se pueden aceptar dos formas de identificacion secundaria.",
    feeWaivers: [
      {
        eligibility:
          "Personas en situacion de calle que necesitan un acta de nacimiento para obtener vivienda, empleo o servicios sociales",
        howToClaim:
          "Comuniquese con un proveedor local de servicios para personas sin hogar, oficina de Asistencia General o Maine 2-1-1 para solicitar asistencia. Un trabajador social o administrador de casos puede presentar una solicitud en su nombre con documentacion de condicion de persona sin hogar. La tarifa puede ser exenta o cubierta por la agencia que le asiste.",
      },
      {
        eligibility:
          "Veteranos y miembros del servicio militar en activo que solicitan un acta de nacimiento para propositos militares o de la VA",
        howToClaim:
          "Presente una solicitud a traves del Bureau of Veterans' Services de Maine o un Oficial de Servicios para Veteranos (VSO). Incluya prueba de servicio militar (DD-214, identificacion militar o documentacion de la VA).",
      },
      {
        eligibility:
          "Personas que reciben MaineCare (Medicaid), TANF u otra asistencia publica basada en ingresos que necesitan un acta de nacimiento para acceder a beneficios",
        howToClaim:
          "Comuniquese con su trabajador social del DHHS o la oficina local del DHHS para solicitar una exencion de tarifa. El trabajador social puede presentar una solicitud en su nombre o proporcionar documentacion para la oficina de registros vitales.",
      },
    ],
    specialNotes: [
      "Maine tiene un sistema dual: tanto la Oficina estatal de Estadisticas Vitales en Augusta como los secretarios municipales (de ciudad/municipio) pueden emitir actas de nacimiento. Los secretarios municipales mantienen registros de eventos en su jurisdiccion.",
      "Las tarifas de los secretarios municipales pueden ser mas bajas que la tarifa de la oficina estatal. Comuniquese con el secretario del municipio donde ocurrio el nacimiento para conocer sus tarifas actuales.",
      "Los registros desde 1923 hasta el presente estan disponibles en la oficina estatal. Para registros anteriores a 1923, comuniquese con el secretario municipal donde ocurrio el nacimiento o los Archivos del Estado de Maine al (207) 287-5795.",
      "La ley de Maine restringe el acceso a los registros vitales a personas con un 'interes directo y legitimo'. Las copias genealogicas de registros de mas de 75 anos estan disponibles para el publico en general.",
      "Los adoptados en Maine pueden acceder a sus actas de nacimiento originales bajo la ley de derechos de adoptados de Maine (22 MRSA \u00A7 2768-C). Comuniquese con la oficina de Registros Vitales para el proceso especifico.",
      "VitalChek es el unico proveedor autorizado en linea/telefono; Maine no opera su propio portal de pedidos en linea.",
    ],
    noIdWorkaround:
      "Si carece de una identificacion con foto emitida por el gobierno, Maine permite dos formas de identificacion secundaria (por ejemplo, tarjeta de Seguro Social mas una factura de servicios publicos, o una identificacion escolar mas un W-2). Un familiar elegible, como un padre, conyuge, hijo adulto o hermano, que tenga identificacion valida puede solicitar el certificado en su nombre. Para personas en situacion de calle, comuniquese con Maine 2-1-1 o una oficina local de Asistencia General para obtener ayuda para obtener un acta de nacimiento sin costo. Los proveedores de servicios para personas sin hogar y los trabajadores sociales del DHHS pueden presentar solicitudes en nombre de los clientes. Los secretarios municipales tambien pueden ser mas flexibles con los requisitos de identificacion para solicitudes en persona.",
  },
};
