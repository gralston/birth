import { StateTranslationEs } from "./stateTranslationTypes";

export const batch1: Record<string, StateTranslationEs> = {
  CA: {
    noIdWorkaround:
      "Si no tiene una identificación con foto emitida por el gobierno, puede presentar una Declaración Jurada notariada con dos formas de identificación secundaria (factura de servicios públicos, estado de cuenta bancario, etc.). Un proveedor de servicios para personas sin hogar también puede verificar su identidad utilizando el formulario de declaración jurada de CDPH.",
    specialNotes: [
      "California mantiene registros a partir del 1 de julio de 1905. Para nacimientos anteriores a esa fecha, comuníquese con la oficina del registro del condado donde ocurrió el nacimiento.",
      "Las copias certificadas incluyen una marca de agua de seguridad y son aceptadas para todos los propósitos legales.",
    ],
    officeHours: "lun–vie 8:00 AM – 4:00 PM PT",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación válida de California",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida",
    ],
    onlineNotes:
      "VitalChek es uno de varios proveedores en línea autorizados. Otros (State Vital Records, Vital Records Online, GoCertificates) cobran tarifas similares.",
    mailNotes:
      "Incluya el formulario VS 111 completado, el pago y una copia de su identificación.",
    mailProcessingTime: "8–16 semanas típicamente",
    inPersonNotes:
      "Servicio sin cita previa disponible en algunas oficinas del registro del condado. Consulte el sitio web de su condado.",
    inPersonLocations:
      "Oficina de Sacramento o algunas oficinas del registro del condado",
    inPersonProcessingTime:
      "El mismo día en oficinas del condado, si el registro está en archivo",
    phoneNotes:
      "Pedidos por teléfono procesados a través de VitalChek con tarifa adicional.",
    requirementsNotes:
      "Se requiere una Declaración Jurada notariada (incluida en el formulario VS 111). Debe incluir una fotocopia legible de su identificación.",
    feeWaivers: [
      {
        eligibility: "Personas en situación de calle",
        howToClaim:
          "Presente una declaración jurada firmada por un proveedor de servicios para personas sin hogar que certifique el estado de indigencia del solicitante. Utilice el formulario de declaración jurada de CDPH para personas sin hogar.",
      },
      {
        eligibility: "Jóvenes actualmente en cuidado de crianza",
        howToClaim:
          "Solicite a través de la agencia de bienestar infantil del condado o el trabajador social.",
      },
    ],
    paymentMethods: ["cheque", "giro postal", "tarjeta de crédito (en línea)"],
  },
  TX: {
    noIdWorkaround:
      "Si no tiene identificación con foto, Texas permite una declaración de 'impedimento razonable' para fines de votación. Para obtener el acta de nacimiento en sí, comuníquese con DSHS al (888) 963-7111 para discutir opciones alternativas de verificación. Un proveedor de servicios para personas sin hogar también puede ayudar.",
    specialNotes: [
      "Las oficinas de los secretarios de condado de Texas pueden emitir actas de nacimiento para nacimientos en su condado — esta es a menudo la opción más rápida.",
      "Para nacimientos anteriores a 1903, comuníquese con el secretario del condado donde ocurrió el nacimiento.",
      "Texas acepta un acta de nacimiento certificada como documento de apoyo para votantes que enfrentan un 'impedimento razonable' para obtener identificación con foto.",
    ],
    officeHours: "lun–vie 8:00 AM – 5:00 PM CT",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación válida de Texas",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida",
      "Licencia de portación de armas",
    ],
    onlineNotes:
      "Texas tiene su propio portal de pedidos en línea (OVRA). No hay recargo de VitalChek al ordenar directamente.",
    mailNotes:
      "Incluya la solicitud completada, el pago y una copia de una identificación con foto válida emitida por el gobierno.",
    mailProcessingTime: "4–6 semanas típicamente",
    inPersonNotes:
      "Comuníquese con la oficina del secretario de su condado para verificar que puedan emitir su certificado.",
    inPersonLocations:
      "Las oficinas de los secretarios de condado en todo Texas pueden emitir actas de nacimiento para nacimientos registrados en su condado",
    inPersonProcessingTime: "El mismo día en la mayoría de los casos",
    phoneNotes:
      "Para asistencia con pedidos; se recomienda ordenar en línea o por correo.",
    requirementsNotes:
      "Se requiere una copia de una identificación con foto válida emitida por el gobierno con todas las solicitudes.",
    feeWaivers: [
      {
        eligibility:
          "Acta de nacimiento gratuita para identificación electoral",
        howToClaim:
          "Texas proporciona un acta de nacimiento gratuita marcada 'Solo para fines de identificación electoral' para obtener un Certificado de Identificación Electoral (EIC). Debe solicitarlo en persona en un registrador local, secretario del condado o la oficina de Estadísticas Vitales en Austin. Solo se puede emitir una vez en la vida.",
      },
      {
        eligibility: "Personas en situación de calle",
        howToClaim:
          "Un refugio o proveedor de servicios para personas sin hogar puede solicitar la exención de tarifa en su nombre.",
      },
      {
        eligibility: "Jóvenes en cuidado de crianza",
        howToClaim:
          "Exento de tarifa cuando lo solicita el Departamento de Servicios de Familia y Protección.",
      },
      {
        eligibility: "Víctimas de violencia familiar o de pareja",
        howToClaim:
          "Comuníquese con DSHS para información sobre la exención de tarifa para víctimas de violencia doméstica.",
      },
      {
        eligibility: "Veteranos (para fines del VA)",
        howToClaim:
          "Los registros para fines de la Administración de Veteranos se proporcionan sin cargo.",
      },
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea)",
      "tarjeta de débito (en línea)",
    ],
  },
  NY: {
    noIdWorkaround:
      "Si no tiene identificación con foto, comuníquese con el registrador local o con Registros Vitales del Estado de Nueva York al (855) 322-1022 para discutir documentación alternativa. Organizaciones de asistencia legal como el Proyecto de Registros Vitales del City Bar Justice Center también pueden ayudar.",
    specialNotes: [
      "El Estado de Nueva York y la Ciudad de Nueva York tienen oficinas de registros vitales SEPARADAS — consulte la opción en persona más arriba para más detalles.",
      "Nueva York proporciona acceso sin restricciones a actas de nacimiento originales para adoptados adultos (desde enero de 2020).",
    ],
    officeHours: "lun–vie 8:30 AM – 4:30 PM ET",
    primaryId: [
      "Licencia de conducir o identificación estatal válida",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida",
    ],
    onlineNotes:
      "Para nacimientos FUERA de la Ciudad de Nueva York. Los nacimientos en NYC deben ordenarse a través de la Oficina de Registros Vitales de NYC. Otros proveedores en línea autorizados también pueden estar disponibles — consulte el sitio web de Registros Vitales del Estado de Nueva York.",
    mailNotes:
      "Use el formulario DOH-4380. Incluya el pago y una copia de su identificación con foto.",
    mailProcessingTime: "6–8 semanas típicamente",
    inPersonNotes:
      "¿Nació en NYC (Manhattan, Brooklyn, Queens, Bronx, Staten Island)? Vaya a la Oficina de Registros Vitales de NYC: 125 Worth Street, Room 133, New York, NY 10013. Teléfono: (212) 788-4520. Tarifa: $15.\n\n¿Nació en otro lugar del Estado de Nueva York? Comuníquese con el secretario de la ciudad o pueblo donde nació — ellos son el registrador local y pueden emitir su acta de nacimiento. La oficina estatal en Albany también puede procesar solicitudes para cualquier nacimiento en NY.",
    inPersonLocations:
      "Depende de dónde nació (no de dónde vive ahora)",
    inPersonProcessingTime: "El mismo día a unos pocos días",
    requirementsNotes:
      "Debe incluir una copia legible de su identificación con todas las solicitudes.",
    feeWaivers: [
      {
        eligibility:
          "Acta de nacimiento gratuita para elegibilidad de votación",
        howToClaim:
          "Sin tarifa cuando se requiere un acta de nacimiento por una junta electoral para determinar la elegibilidad del votante.",
      },
      {
        eligibility:
          "Personas que reciben asistencia pública (indigencia/situación de calle)",
        howToClaim:
          "Sin tarifa para actas de nacimiento que se utilizarán para 'fines de asistencia pública'. Esto cubre a personas que reciben Medicaid, SNAP, TANF, o que están en situación de calle. Comuníquese con su trabajador social o una organización de asistencia legal como la Coalition for the Homeless para solicitar sobre esta base.",
      },
      {
        eligibility: "Personas encarceladas (reinserción)",
        howToClaim:
          "Sin tarifa cuando lo solicita el Departamento de Correcciones y Supervisión Comunitaria o un centro correccional local para una persona encarcelada en anticipación de su liberación.",
      },
      {
        eligibility:
          "Ingreso escolar o certificados de empleo",
        howToClaim:
          "Sin tarifa cuando el registro se necesita para ingreso escolar o un certificado de empleo.",
      },
      {
        eligibility: "Veteranos (para fines del VA)",
        howToClaim:
          "Los registros para fines de la Administración de Veteranos se proporcionan sin cargo.",
      },
    ],
    paymentMethods: ["cheque", "giro postal", "tarjeta de crédito (en línea)"],
  },
  FL: {
    noIdWorkaround:
      "Florida requiere una identificación con foto válida para todas las solicitudes de actas de nacimiento y no publica una lista de alternativas. Si no tiene identificación con foto, llame a la Oficina de Estadísticas Vitales al (904) 359-6900 para preguntar sobre opciones. Un familiar elegible con identificación con foto puede solicitar en su nombre usando una Declaración Jurada notariada para liberar un acta de nacimiento. Organizaciones como Spread the Vote (spreadthevote.org) también pueden ayudar.",
    specialNotes: [
      "Florida tiene algunas de las tarifas de actas de nacimiento más bajas del país ($9 por la primera copia).",
      "Los registros de 1917 hasta el presente están disponibles en la oficina estatal. Para registros anteriores, comuníquese con el secretario del tribunal del condado.",
    ],
    officeHours: "lun–vie 8:00 AM – 5:00 PM ET",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación válida de Florida",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida",
    ],
    onlineNotes:
      "VitalChek es el único proveedor en línea autorizado para registros vitales de Florida. Las tarifas pueden variar por condado al ordenar a través de VitalChek.",
    mailNotes:
      "Incluya el formulario DH 726 completado, el pago y una copia de su identificación.",
    mailProcessingTime: "4–6 semanas",
    inPersonNotes:
      "Algunos departamentos de salud del condado también pueden emitir certificados — comuníquese con su oficina local para verificar.",
    inPersonLocations: "1217 N Pearl St, Jacksonville, FL 32202",
    inPersonProcessingTime: "El mismo día en la oficina de Jacksonville",
    feeWaivers: [
      {
        eligibility:
          "Jóvenes sin hogar no acompañados (mayores de 16 años)",
        howToClaim:
          "Tarifa exenta para jóvenes sin hogar no acompañados certificados bajo la Sección 743.067 por un enlace McKinney-Vento del distrito escolar.",
      },
      {
        eligibility: "Jóvenes que estuvieron en cuidado de crianza",
        howToClaim:
          "Tarifa exenta para adultos jóvenes que están, o estaban a los 18 años, bajo la custodia del Departamento de Niños y Familias.",
      },
      {
        eligibility: "Reclusos (reinserción)",
        howToClaim:
          "Tarifa exenta con el propósito de que un recluso obtenga una tarjeta de identificación estatal antes de su liberación.",
      },
      {
        eligibility: "Menores infractores",
        howToClaim:
          "Tarifa exenta para menores infractores que reciben servicios del Departamento de Justicia Juvenil.",
      },
      {
        eligibility: "Veteranos (para fines del VA)",
        howToClaim:
          "Los registros para fines de la Administración de Veteranos se proporcionan sin cargo.",
      },
    ],
    paymentMethods: ["cheque", "giro postal", "tarjeta de crédito (en línea)"],
  },
  OH: {
    noIdWorkaround:
      "Ohio requiere una fotocopia de una identificación con foto válida (ambos lados) con todas las solicitudes. Si no tiene identificación con foto, visite un departamento de salud local en persona — el personal puede trabajar con usted en verificación alternativa. También puede comunicarse con la Oficina de Estadísticas Vitales al (614) 466-2531 para discutir opciones. Organizaciones como Ohio Legal Help (ohiolegalhelp.org) pueden brindar orientación.",
    specialNotes: [
      "Los registros vitales de Ohio se administran tanto a nivel estatal como local. Su departamento de salud local de la ciudad o condado puede ser más rápido para solicitudes en persona.",
      "Para nacimientos anteriores a 1908, comuníquese con el tribunal testamentario del condado donde ocurrió el nacimiento.",
      "Ohio requiere requisitos estrictos de identificación con foto para la identificación de votantes (a partir de 2024).",
    ],
    officeHours: "lun–vie 7:45 AM – 4:30 PM ET",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación válida de Ohio",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida",
    ],
    onlineNotes:
      "Ohio tiene su propio portal de pedidos en línea. También puede ordenar a través de VitalChek.",
    mailNotes:
      "Incluya la solicitud completada, el pago y una copia de su identificación.",
    mailProcessingTime: "4–6 semanas",
    inPersonNotes:
      "Los departamentos de salud locales pueden tener sus propias tarifas y procesos. La oficina estatal en Columbus acepta visitas sin cita con pago con tarjeta de crédito.",
    inPersonLocations:
      "Oficina estatal en 4200 Surface Road, Columbus, OH (lun–vie 10 AM – 2 PM) y más de 100 departamentos de salud locales de ciudades/condados",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal y en la mayoría de las oficinas locales",
    feeWaivers: [
      {
        eligibility: "Veteranos (para fines del VA)",
        howToClaim:
          "Los registros para fines de la Administración de Veteranos se proporcionan sin cargo.",
      },
    ],
    paymentMethods: ["cheque", "giro postal", "tarjeta de crédito (en línea)"],
  },
  PA: {
    noIdWorkaround:
      "Pennsylvania tiene opciones limitadas para solicitantes sin identificación con foto emitida por el gobierno. Comuníquese con la División de Registros Vitales al (724) 656-3100 para discutir su situación. Las organizaciones de asistencia legal pueden ayudar a obtener documentación alternativa.",
    specialNotes: [
      "Pennsylvania tiene requisitos de identificación más estrictos que muchos estados — generalmente se requiere identificación con foto emitida por el gobierno con alternativas limitadas.",
      "Para nacimientos anteriores a 1906, comuníquese con el Registro de Testamentos del condado donde ocurrió el nacimiento.",
    ],
    officeHours: "lun–vie 8:00 AM – 4:30 PM ET",
    primaryId: [
      "Licencia de conducir o identificación estatal válida de Pensilvania",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida",
    ],
    onlineNotes:
      "Pennsylvania tiene su propio portal de pedidos en línea (mycertificates). También disponible a través de VitalChek.",
    mailNotes:
      "Incluya la solicitud completada, el pago y una fotocopia de su identificación con foto emitida por el gobierno.",
    mailProcessingTime: "4–8 semanas",
    inPersonLocations:
      "Oficina estatal en New Castle, PA. Algunas oficinas de condado pueden asistir.",
    inPersonProcessingTime: "El mismo día si el registro está en archivo",
    requirementsNotes:
      "Pennsylvania requiere identificación con foto emitida por el gobierno para todas las solicitudes. Opciones limitadas de verificación alternativa.",
    feeWaivers: [
      {
        eligibility: "Personas en situación de calle",
        howToClaim:
          "Tarifa exenta con la asistencia de un defensor calificado (personal de refugio, administrador de casos o trabajador social). Un formulario de solicitud dedicado está disponible del Departamento de Salud de PA.",
      },
      {
        eligibility:
          "Jóvenes en cuidado de crianza y justicia juvenil (edades 16–24)",
        howToClaim:
          "Tarifa exenta para personas que están o han estado en cuidado de crianza o en el sistema de justicia juvenil. Formulario dedicado disponible del Departamento de Salud de PA.",
      },
      {
        eligibility:
          "Personas afectadas por trastorno por uso de opioides",
        howToClaim:
          "Tarifa exenta con documentación apropiada de un proveedor de tratamiento.",
      },
      {
        eligibility: "Víctimas de desastres naturales",
        howToClaim:
          "Tarifa exenta para personas afectadas por un desastre natural declarado.",
      },
      {
        eligibility: "Militares activos y veteranos",
        howToClaim:
          "Tarifa exenta para miembros del servicio activo, sus cónyuges y personas dadas de baja en condiciones que no sean deshonrosas.",
      },
    ],
    paymentMethods: ["cheque", "giro postal", "tarjeta de crédito (en línea)"],
  },
  IL: {
    noIdWorkaround:
      "Illinois permite explícitamente solicitudes sin identificación con foto. Presente dos documentos con su nombre, al menos uno que muestre su dirección actual (factura de servicios públicos, tarjeta médica, tarjeta de registro de votante, estado de cuenta bancario, etc.). Si está en situación de calle, una carta de verificación de una agencia de servicios humanos sirve tanto como respaldo de identidad como para eximir la tarifa (hasta 4 certificados por año). Comuníquese al (217) 782-6554 o envíe un correo electrónico a DPH.VITALS@illinois.gov para asistencia.",
    specialNotes: [
      "El procesamiento por correo tarda aproximadamente 12 semanas — planifique con mucha anticipación o use las opciones de VitalChek/en persona.",
      "Los secretarios de condado son a menudo más rápidos y económicos. Para nacimientos en el condado de Cook, comuníquese con el Secretario del Condado de Cook en cookcountyclerkil.gov.",
      "Illinois acepta tarjetas de Matrícula Consular como identificación válida — significativo para comunidades inmigrantes.",
      "Para nacimientos anteriores a 1916, comuníquese con el secretario del condado donde ocurrió el nacimiento — algunos condados tienen registros desde 1877.",
    ],
    officeHours:
      "lun–vie 10:00 AM – 3:00 PM CT (visitas sin cita y teléfono)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU.",
      "Tarjeta FOID (Identificación de Propietario de Armas de Fuego)",
      "Identificación militar en servicio activo",
      "Tarjeta de Matrícula Consular (emitida después de octubre de 2006, no vencida)",
      "Identificación con foto de prisión (con hoja de resumen de ingreso/delincuente con fecha)",
    ],
    onlineNotes:
      "VitalChek es el socio oficial en línea de IDPH. Envío acelerado disponible por $19.50 adicionales.",
    mailNotes:
      "El tiempo de procesamiento es excepcionalmente largo. Incluya el formulario VR 180 completado, copia de identificación con foto válida y cheque/giro postal. Considere VitalChek o en persona para un servicio más rápido.",
    mailProcessingTime: "Aproximadamente 12 semanas",
    inPersonNotes:
      "Para nacimientos en Chicago y el suburbio del condado de Cook, la oficina del Secretario del Condado de Cook tiene múltiples ubicaciones y es a menudo más rápida que IDPH.",
    inPersonLocations:
      "Oficina estatal en 925 E. Ridgely Ave., Springfield, IL. Los secretarios de condado también emiten certificados — a menudo más rápido y económico.",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal y en la mayoría de los secretarios de condado",
    phoneNotes:
      "Línea gratuita de VitalChek para el condado de Cook. Mismas tarifas que en línea. Consultas generales de IDPH: (217) 782-6554.",
    requirementsNotes:
      "Si su identificación con foto venció hace menos de 6 meses, necesita un documento adicional. Si venció hace más de 6 meses o no tiene identificación con foto, necesita dos documentos.",
    feeWaivers: [
      {
        eligibility: "Personas en situación de calle",
        howToClaim:
          "Tarifa exenta para hasta 4 registros de nacimiento por año. Proporcione una carta de verificación de situación de calle de un proveedor de servicios humanos, proveedor de servicios legales o agencia similar financiada por el Estado de Illinois.",
      },
      {
        eligibility:
          "Jóvenes bajo cuidado / ex jóvenes de crianza (menores de 27)",
        howToClaim:
          "Todas las tarifas exentas para jóvenes actualmente bajo cuidado o cualquier persona menor de 27 años que estaba bajo cuidado en o después de su cumpleaños número 18 según lo definido por la Ley de Servicios para Niños y Familias.",
      },
      {
        eligibility: "Víctimas de violencia doméstica",
        howToClaim:
          "No se cobra tarifa a víctimas de violencia doméstica. Debe proporcionar una carta de certificación de un refugio o proveedor de servicios de violencia doméstica.",
      },
      {
        eligibility: "Liberados de encarcelamiento (DOC)",
        howToClaim:
          "Exención de tarifa única al ser liberado bajo libertad condicional, supervisión obligatoria, alta definitiva o indulto. Presente un formulario de verificación del DOC que confirme la fecha de nacimiento y el número de Seguro Social.",
      },
      {
        eligibility: "Liberados de justicia juvenil (DJJ)",
        howToClaim:
          "Exención de tarifa única para personas bajo libertad supervisada posterior o liberadas del Departamento de Justicia Juvenil, con un formulario de verificación del DJJ.",
      },
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en persona/en línea)",
      "tarjeta de débito (en persona)",
      "efectivo (en persona)",
    ],
  },
  GA: {
    noIdWorkaround:
      "Pida a un familiar elegible (padre, hijo adulto, cónyuge, hermano, abuelo) con identificación válida que solicite en su nombre — este es el camino más sencillo. Si está en situación de calle, una agencia contratada por DBHDD puede solicitar su certificado sin identificación con foto y sin tarifa. También puede comunicarse con la Oficina Estatal al (404) 679-4702 para discutir la presentación de documentación secundaria (tarjeta de Seguro Social, registros escolares, declaración jurada notariada de un familiar). Georgia Legal Aid (georgialegalaid.org) puede proporcionar asistencia gratuita.",
    specialNotes: [
      "Los pedidos en línea tardan hasta 10 semanas independientemente del proveedor. El envío acelerado solo acelera la entrega, no el procesamiento.",
      "Los tribunales testamentarios del condado a menudo brindan un servicio en persona más rápido que la oficina estatal.",
      "Para nacimientos en 2004–2006, debe proporcionar el nombre del hospital en su solicitud.",
      "Para nacimientos anteriores a 1919, comuníquese con el condado o los Archivos de Georgia en georgiaarchives.org.",
    ],
    officeHours: "lun–vie 8:00 AM – 4:00 PM ET",
    primaryId: [
      "Licencia de conducir o identificación estatal válida de Georgia",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida o identificación de veterano",
      "Licencia de portación de armas de Georgia (con foto)",
      "Licencia de conducir de otro estado de EE.UU. (no vencida)",
      "Identificación escolar/universitaria vigente (con número de identificación y firma)",
    ],
    onlineNotes:
      "ROVER es el portal estatal de Georgia. GoCertificates y VitalChek también son proveedores autorizados. El procesamiento tarda hasta 10 semanas independientemente del proveedor — el envío acelerado ($16) solo acelera la entrega, no el procesamiento.",
    mailNotes:
      "Incluya el Formulario 3918 completado, copia de identificación con foto válida y giro postal o cheque certificado.",
    mailProcessingTime: "8–10 semanas",
    inPersonNotes:
      "Los tribunales testamentarios del condado son independientes y pueden tener diferentes tarifas y métodos de pago. Muchos pueden procesar solicitudes mientras espera.",
    inPersonLocations:
      "Oficina estatal en Atlanta y 159 tribunales testamentarios de condado en toda Georgia",
    inPersonProcessingTime:
      "El mismo día en muchos tribunales testamentarios del condado",
    phoneNotes:
      "Se aplica tarifa de servicio de VitalChek (~$12.50). Se requiere tarjeta de crédito.",
    feeWaivers: [
      {
        eligibility:
          "Personas en situación de calle (a través de asociación con DBHDD)",
        howToClaim:
          "Si recibe servicios a través de una agencia u hospital contratado por DBHDD, la agencia puede solicitar su acta de nacimiento sin costo y sin identificación con foto. El tiempo de respuesta es aproximadamente 5 días hábiles. Comuníquese con un proveedor local de servicios para personas sin hogar para verificar si participan.",
      },
      {
        eligibility:
          "Jóvenes de crianza que salen del sistema de cuidado",
        howToClaim:
          "Se espera que los trabajadores sociales asistan a los jóvenes que salen del cuidado de crianza con la obtención de su acta de nacimiento, tarjeta de Seguro Social e identificación estatal.",
      },
    ],
    paymentMethods: [
      "giro postal",
      "cheque certificado",
      "tarjeta de crédito (en línea)",
      "efectivo (en persona en oficinas del condado)",
    ],
  },
  NC: {
    noIdWorkaround:
      "Carolina del Norte acepta dos identificaciones secundarias diferentes (sin foto) en lugar de una identificación con foto principal. Si está en situación de calle, una carta de un proveedor de servicios sociales puede ser aceptada como identificación. Si es un votante registrado que necesita un acta de nacimiento para obtener identificación con foto, puede obtener una copia gratuita en la oficina del Registro de Escrituras de su condado firmando una declaración de votante. Visite la oficina del Registro de Escrituras del condado para la asistencia en persona más flexible — directorio en vitalrecords.nc.gov/county.htm.",
    specialNotes: [
      "El procesamiento por correo y en línea actualmente tarda 110–115 días hábiles debido a la demanda de REAL ID. Visite la oficina del Registro de Escrituras de su condado para servicio el mismo día.",
      "La tarifa de búsqueda de $24 no es reembolsable incluso si no se encuentra ningún registro y cubre una ventana de búsqueda de 3 años.",
      "Para nacimientos anteriores a octubre de 1913, comuníquese con la oficina del Registro de Escrituras del condado — pueden tener registros más antiguos.",
      "Desde enero de 2026, los adoptados pueden obtener actas de nacimiento directamente de la oficina del Registro de Escrituras del condado (SB 248).",
    ],
    officeHours:
      "Solo en persona con cita previa (última cita a las 2:30 PM)",
    primaryId: [
      "Licencia de conducir estatal válida o identificación sin licencia",
      "Identificación con foto válida emitida por el gobierno",
    ],
    onlineNotes:
      "Los pedidos en línea se procesan a través de VitalChek. El tiempo de procesamiento actualmente es de 110–115 días hábiles debido a la demanda de REAL ID. La oficina del Registro de Escrituras del condado es mucho más rápida.",
    mailNotes:
      "Tiempo de procesamiento extremadamente largo. Se recomienda encarecidamente visitar la oficina del Registro de Escrituras de su condado para servicio el mismo día.",
    mailProcessingTime:
      "110–115 días hábiles (atraso por REAL ID)",
    inPersonNotes:
      "Se recomienda encarecidamente la oficina del Registro de Escrituras del condado. Pueden emitir copias certificadas de cualquier nacimiento en NC y típicamente procesan el mismo día.",
    inPersonLocations:
      "Oficina estatal en 225 N. McDowell St., Raleigh, NC (con cita). Oficinas del Registro de Escrituras del condado — la opción más rápida.",
    inPersonProcessingTime:
      "El mismo día en la oficina del Registro de Escrituras del condado",
    requirementsNotes:
      "Una identificación con foto principal O dos identificaciones secundarias diferentes requeridas.",
    feeWaivers: [
      {
        eligibility:
          "Acta de nacimiento gratuita para identificación de votante",
        howToClaim:
          "Los votantes registrados que firmen una declaración de que necesitan un acta de nacimiento para obtener identificación con foto y que no tienen una actualmente, pueden obtener una copia certificada gratuita de la oficina del Registro de Escrituras del condado.",
      },
      {
        eligibility:
          "Personas mayores de 62+ (tarifa reducida a nivel de condado)",
        howToClaim:
          "La oficina del Registro de Escrituras del condado puede eximir la tarifa de retención local de $10 para solicitantes de 62 años o más.",
      },
    ],
    paymentMethods: [
      "cheque certificado",
      "cheque comercial",
      "giro postal",
      "tarjeta de crédito (en línea vía VitalChek)",
      "efectivo (en persona)",
    ],
  },
  MI: {
    noIdWorkaround:
      "Michigan tiene una alternativa específica: proporcione 3 documentos fechados de diferentes fuentes que verifiquen su nombre y fecha de nacimiento, con al menos uno fechado dentro del último año. Consulte la lista completa de Documentos Alternativos a la Identificación con Foto en michigan.gov. Si está en situación de calle, una Carta de Verificación de Persona sin Hogar de una agencia de servicio público sirve tanto como respaldo de identidad como para calificar para la exención de tarifa. Comuníquese al (517) 335-8666 o envíe un correo electrónico a VRCustomerService@michigan.gov para ayuda.",
    specialNotes: [
      "Los secretarios de condado son a menudo más rápidos y económicos que la oficina estatal — consulte primero con el secretario de su condado local.",
      "Los registros de nacimiento de más de 100 años son registros públicos; cualquier persona puede solicitarlos sin identificación ni restricciones de elegibilidad.",
      "Las personas mayores (65+) pagan una tarifa reducida de $14 por su propio registro de nacimiento.",
      "El programa 'Free ID for Me' de Michigan proporciona tarjetas de identificación estatal gratuitas para personas sin hogar en las oficinas del Secretario de Estado.",
    ],
    officeHours:
      "Teléfono: lun–vie 10 AM – 12:30 PM y 1 PM – 3:30 PM ET",
    primaryId: [
      "Licencia de conducir o identificación estatal válida de Míchigan",
      "Pasaporte válido de EE.UU.",
      "Identificación con foto del Departamento Correccional (con carta de verificación)",
    ],
    onlineNotes:
      "Pedidos procesados a través de VitalChek. Opción de recogida disponible — ordene en línea, recoja en Lansing dentro de 2–5 días hábiles (solo martes y jueves).",
    mailNotes:
      "Incluya la solicitud completada, fotocopia de identificación válida y pago con cheque o giro postal. Tarifa urgente de $12 disponible para procesamiento más rápido.",
    mailProcessingTime: "4–6 semanas",
    inPersonNotes:
      "Los secretarios de condado en el condado donde ocurrió el nacimiento pueden emitir copias certificadas, a menudo con tarifas más bajas y tiempos de respuesta más rápidos. Buzón de entrega disponible en la oficina estatal de lun–vie 7 AM – 5:30 PM.",
    inPersonLocations:
      "Oficina estatal en 333 S. Grand Ave., Lansing, MI (mar y jue, 10 AM – 2 PM, con cita). Los secretarios de condado también emiten certificados.",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal; varía por condado",
    phoneNotes:
      "Mismas tarifas que pedidos en línea. Se requiere tarjeta de crédito.",
    requirementsNotes:
      "Los registros de más de 100 años no tienen restricciones — cualquier persona puede solicitarlos sin identificación. Las personas mayores (65+) pagan una tarifa reducida de $14.",
    feeWaivers: [
      {
        eligibility:
          "Personas en situación de calle (Categoría 1)",
        howToClaim:
          "Obtenga una Carta de Verificación de Persona sin Hogar en papel oficial de una agencia de servicio público (refugio, servicios sociales, etc.) que certifique que cumple con la definición de persona sin hogar Categoría 1 del HUD. Preséntela con su solicitud.",
      },
      {
        eligibility: "Personas indigentes",
        howToClaim:
          "Presente una declaración jurada de indigencia indicando que recibe asistencia pública o no puede pagar debido a indigencia. Exime los primeros $20 de la tarifa.",
      },
      {
        eligibility: "Veteranos (para fines de beneficios)",
        howToClaim:
          "Una copia certificada gratuita etiquetada 'solo para beneficios de veteranos, no para uso personal'. Presente una solicitud formal indicando su condición de veterano.",
      },
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/teléfono)",
    ],
  },
  MA: {
    noIdWorkaround:
      "Massachusetts acepta dos documentos secundarios en lugar de una identificación con foto: combine dos de los siguientes: identificación con foto del trabajo/escuela, factura de servicios públicos, formulario W-2, talón de pago, tarjeta de biblioteca, identificación militar, identificación emitida por Massachusetts (RMV, SNAP, tarjeta DTA) o identificación de centro correccional. Las identificaciones con foto recientemente vencidas también son aceptadas. La mayoría de los registros de nacimiento en Massachusetts están abiertos al público, por lo que cualquier persona con identificación válida y la tarifa puede solicitar una copia — un familiar o amigo elegible puede obtenerla por usted. Para quienes están en situación de calle, comuníquese con el Homeless ID Project o marque 2-1-1 para ayuda a obtener actas de nacimiento sin costo a través de programas comunitarios. Los secretarios de ciudades/pueblos también pueden cobrar tarifas más bajas que la oficina estatal.",
    specialNotes: [
      "Massachusetts tiene un sistema dual: tanto el RVRS estatal como los 351 secretarios de ciudades/pueblos emiten actas de nacimiento. Los secretarios locales son a menudo más rápidos y económicos.",
      "Las tarifas de los secretarios de ciudades/pueblos se establecen localmente y generalmente son $10–$20 — significativamente menos que la tarifa del RVRS estatal de $20–$54 dependiendo del método.",
      "Cada tarifa del RVRS estatal incluye una búsqueda de registros de 10 años. Si no se encuentra el registro, se emite una Declaración Negativa certificada (misma tarifa).",
      "El RVRS estatal solo tiene registros a partir de 1936. Para registros más antiguos, comuníquese con los Archivos del Estado de Massachusetts al (617) 727-2816 o el secretario de la ciudad/pueblo donde ocurrió el nacimiento.",
      "Los registros anteriores al 1 de enero de 1841 están exentos de restricciones de acceso.",
      "VitalChek es el único proveedor en línea/por teléfono — el estado no tiene su propio portal de pedidos.",
    ],
    officeHours: "lun–vie 8:45 AM – 4:45 PM ET",
    primaryId: [
      "Licencia de conducir válida (se acepta recientemente vencida)",
      "Pasaporte válido de EE.UU.",
      "Otra identificación con foto emitida por el gobierno",
    ],
    onlineNotes:
      "VitalChek es el único proveedor en línea/por teléfono. Procesamiento estándar ~10 días hábiles. Acelerado (siguiente día hábil) disponible por tarifa adicional. Solicitudes de investigación no disponibles en línea.",
    mailNotes:
      "Incluya la Solicitud de Registro Vital completada, fotocopia de identificación con foto emitida por el gobierno (o dos identificaciones alternativas) y cheque/giro postal a nombre de 'The Commonwealth of Massachusetts'. Procesamiento acelerado por correo ($42) tarda ~10 días hábiles. Límite de 5 búsquedas por solicitud. No envíe documentos de identificación originales.",
    mailProcessingTime: "15–20 días hábiles",
    inPersonNotes:
      "Los secretarios de ciudades/pueblos mantienen sus propios registros y son a menudo más rápidos y económicos que la oficina estatal. Visite al secretario de la ciudad/pueblo donde ocurrió el nacimiento para el servicio más rápido.",
    inPersonLocations:
      "Oficina estatal RVRS en 150 Mount Vernon St., Dorchester, MA. También disponible en las 351 oficinas de secretarios de ciudades/pueblos en todo el estado.",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal y en la mayoría de los secretarios de ciudades/pueblos",
    phoneNotes:
      "Mismas tarifas que pedidos en línea. Solicitudes de investigación no disponibles por teléfono.",
    requirementsNotes:
      "La mayoría de los registros de nacimiento de Massachusetts están abiertos al público — cualquier persona con identificación válida y la tarifa puede solicitar una copia. Los registros de nacimientos de padres no casados y registros de adopción están restringidos a la persona nombrada, padres, tutores o por orden judicial del Tribunal de Familia y Sucesiones.",
    feeWaivers: [
      {
        eligibility:
          "Tarifas reducidas en secretarías de ciudades/pueblos",
        howToClaim:
          "MGL c.262 s.34 establece la tarifa base del secretario del pueblo para un acta de nacimiento en $2. Los municipios pueden establecer sus propias tarifas (típicamente $10–$20), que es significativamente menos que la tarifa del RVRS estatal. Consulte con el secretario de su ciudad/pueblo local su tarifa actual.",
      },
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "efectivo (solo en persona)",
      "tarjeta de crédito (en línea/teléfono vía VitalChek)",
    ],
  },
  MD: {
    noIdWorkaround:
      "Si no tiene identificación con foto emitida por el gobierno, Maryland aceptará dos formas de identificación secundaria (por ejemplo, tarjeta de Seguro Social + factura de servicios públicos, o tarjeta de seguro médico + estado de cuenta bancario). Las personas sin hogar pueden presentar una carta de un refugio o agencia de servicios sociales que certifique su identidad y situación — comuníquese con la División de Registros Vitales al (410) 764-3038 para discutir su situación antes de visitar. Los jóvenes que salen del cuidado de crianza deben trabajar con su trabajador social del DSS, quien puede solicitar el certificado en su nombre sin los requisitos estándar de identificación.",
    specialNotes: [
      "Los registros de nacimiento de Maryland de 1898 hasta el presente son mantenidos por la División de Registros Vitales. Para registros anteriores a 1898, comuníquese con los Archivos del Estado de Maryland al (410) 260-6400 o visite msa.maryland.gov.",
      "Los registros de nacimiento de la Ciudad de Baltimore de 1875–1941 están disponibles a través de los Archivos de la Ciudad de Baltimore — comuníquese al (410) 396-4863.",
      "Maryland permite procesamiento acelerado a través de VitalChek por una tarifa adicional; no hay servicio acelerado estatal para pedidos por correo.",
      "La apostilla o autenticación de actas de nacimiento para uso internacional puede solicitarse a través del Secretario de Estado de Maryland al (410) 974-5521.",
      "Maryland emite actas de nacimiento tanto en formato corto (resumen) como en formato largo (copia completa/de bóveda). La mayoría de las agencias requieren la copia certificada en formato largo.",
    ],
    officeHours: "lun–vie 8:00 AM – 4:00 PM ET",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU. (CAC)",
      "Tarjeta de residente permanente válida (green card)",
    ],
    onlineNotes:
      "Pedidos realizados a través de VitalChek, el proveedor en línea exclusivo del estado. Tarifa estatal de $25 más tarifa de servicio de VitalChek. Envío acelerado disponible por costo adicional.",
    mailNotes:
      "Incluya el formulario VR-APPLICATION completado, fotocopia de identificación válida emitida por el gobierno y cheque o giro postal a nombre de 'Division of Vital Records'. Incluya un sobre con estampilla y dirección de retorno para una devolución más rápida.",
    mailProcessingTime: "4–6 semanas desde la recepción",
    inPersonNotes:
      "Servicio sin cita previa disponible en la oficina de Baltimore. Traiga identificación con foto válida. No se requieren citas pero se recomiendan durante períodos de alta demanda.",
    inPersonLocations:
      "Oficina principal en 6764-B Reisterstown Road, Baltimore, MD 21215. También disponible en oficinas de departamentos de salud locales en algunos condados.",
    inPersonProcessingTime: "El mismo día si el registro está en archivo",
    phoneNotes:
      "Pedido telefónico por VitalChek con tarjeta de crédito/débito. Se aplica tarifa estatal más tarifa de servicio de VitalChek.",
    requirementsNotes:
      "Maryland requiere prueba de identidad y prueba de relación. Si no es el registrante, debe mostrar documentación que compruebe su relación (por ejemplo, su propia acta de nacimiento que muestre parentesco compartido, orden judicial de tutela, poder notarial).",
    feeWaivers: [
      {
        eligibility:
          "Personas sin hogar que solicitan un acta de nacimiento para obtener vivienda, empleo o beneficios públicos",
        howToClaim:
          "Presente una declaración escrita de un refugio, agencia de servicios sociales u otra organización que certifique la situación de calle. La tarifa puede ser eximida a discreción del registrador.",
      },
      {
        eligibility:
          "Víctimas de violencia doméstica que buscan registros para establecer una nueva identidad u obtener órdenes de protección",
        howToClaim:
          "Proporcione documentación de situación de violencia doméstica, como una orden de protección o carta de un programa de violencia doméstica. Comuníquese con la División de Registros Vitales al (410) 764-3038 para solicitar la exención de tarifa.",
      },
      {
        eligibility:
          "Jóvenes que salen del cuidado de crianza (edades 17–21) que necesitan actas de nacimiento para identificación o empleo",
        howToClaim:
          "El Departamento de Servicios Humanos de Maryland o el Departamento de Servicios Sociales local debe solicitar el registro en nombre del joven. Comuníquese con el trabajador social del DSS local.",
      },
      {
        eligibility:
          "Personas indigentes que no pueden pagar la tarifa y necesitan el registro para un propósito requerido por el gobierno",
        howToClaim:
          "Presente una solicitud escrita explicando la dificultad financiera y la razón por la que se necesita el certificado. Incluya prueba de asistencia pública (por ejemplo, inscripción en SNAP, Medicaid, TANF) si está disponible.",
      },
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/teléfono)",
      "efectivo (en persona)",
    ],
  },
  NJ: {
    noIdWorkaround:
      "Nueva Jersey acepta dos formas alternativas de identificación (sin foto) en lugar de una identificación con foto. Combine dos de los siguientes: tarjeta de registro de votante, factura de servicios públicos (últimos 90 días), estado de cuenta bancario, W-2/declaración de impuestos, registro de vehículo, identificación escolar o identificación del condado — al menos una debe mostrar la dirección actual. Si está en situación de calle, un trabajador social o coordinador de refugio puede presentar la solicitud en su nombre (sin necesidad de identificación personal) y la tarifa se exime para una copia. Llame al 2-1-1 en NJ para referencias. Si fue liberado recientemente de prisión (más de 90 días), el DOC está obligado a ayudar a obtener su acta de nacimiento antes de la liberación.",
    specialNotes: [
      "Los registradores municipales locales son a menudo mucho más rápidos que la oficina estatal — visite al registrador del municipio donde ocurrió el nacimiento para servicio el mismo día.",
      "Los pedidos por correo al estado tardan 8–14 semanas; los pedidos en línea tardan 6–8 semanas. Planifique con suficiente anticipación antes de las fechas límite.",
      "Llegue antes de las 3:30 PM a la oficina de Trenton para procesamiento el mismo día.",
      "Para registros anteriores a 1901, comuníquese con los Archivos del Estado de NJ o el registrador municipal local.",
      "Marque 2-1-1 en NJ para ayuda a encontrar programas gratuitos de actas de nacimiento y referencias de trabajadores sociales.",
    ],
    officeHours:
      "lun–vie 8:30 AM – 4:00 PM ET (solo entrega sin cita después de las 3:30 PM)",
    primaryId: [
      "Licencia de conducir con foto válida de EE.UU. o identificación sin licencia con foto y dirección actual",
    ],
    onlineNotes:
      "Pedidos procesados a través de VitalChek. Envío acelerado UPS opcional ~$12 adicionales. El procesamiento tarda 6–8 semanas desde la fecha de aprobación.",
    mailNotes:
      "Incluya el formulario REG-27a completado, copia de identificación aceptable y cheque/giro postal. NO envíe documentos de identificación originales.",
    mailProcessingTime: "8–14 semanas",
    inPersonNotes:
      "NJ tiene 565 registradores municipales. Para el servicio más rápido, visite al registrador del municipio donde ocurrió el nacimiento.",
    inPersonLocations:
      "Oficina estatal en 140 East Front Street, Trenton, NJ. Los registradores municipales locales también emiten certificados — a menudo más rápido.",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal (llegue antes de las 3:30 PM) y en la mayoría de los registradores locales",
    phoneNotes:
      "Mismas tarifas que pedidos en línea. Se requiere tarjeta de crédito/débito.",
    requirementsNotes:
      "Tres opciones de identificación: (A) identificación con foto con dirección actual, (B) licencia de conducir sin foto más una identificación alternativa, o (C) dos formas alternativas de identificación.",
    feeWaivers: [
      {
        eligibility: "Personas en situación de calle",
        howToClaim:
          "Una copia certificada gratuita. Un trabajador social o coordinador de refugio de emergencia presenta la solicitud en papel oficial de la agencia, incluyendo el número de identificación de empleador de la agencia y la certificación de situación de calle. La copia se envía por correo a la agencia.",
      },
      {
        eligibility: "Personas encarceladas (reinserción)",
        howToClaim:
          "El Departamento de Correcciones está obligado a proporcionar una copia del acta de nacimiento del recluso al menos 30 días antes de la liberación para aquellos encarcelados más de 90 días que nacieron en NJ.",
      },
      {
        eligibility: "Fines gubernamentales, militares y de pensiones",
        howToClaim:
          "Copias certificadas gratuitas para la prosecución de reclamos de pensiones públicas o fines de alistamiento militar/naval, y para uso administrativo por agencias gubernamentales.",
      },
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/teléfono vía VitalChek)",
    ],
  },
  TN: {
    noIdWorkaround:
      "Tennessee ofrece una opción única: si la solicitud (Formulario PH-1654) está firmada y notariada, no se requieren documentos de identificación adicionales. Alternativamente, presente dos identificaciones secundarias de diferentes tipos (estado de cuenta bancario, factura de servicios públicos, tarjeta de Seguro Social, talón de pago o registro de vehículo). Los menores sin hogar pueden obtener certificados a través de la verificación de un enlace McKinney-Vento escolar o un proveedor de servicios para personas sin hogar. Un representante autorizado con identificación válida también puede solicitar en su nombre.",
    specialNotes: [
      "Cualquier departamento de salud del condado puede emitir cualquier acta de nacimiento o defunción de Tennessee — no necesita ir al condado donde ocurrió el nacimiento.",
      "VitalChek es el único proveedor autorizado de terceros.",
      "No existen registros para 1913 (la ley de registro caducó a finales de 1912; se reanudó en 1914).",
      "Algunas ciudades tienen registros más antiguos: Memphis (1874), Chattanooga (1879), Nashville (1881), Knoxville (1881).",
    ],
    officeHours:
      "lun/mié/vie 8 AM – 4 PM CT; mar/jue 8 AM – 6 PM CT (horario extendido)",
    primaryId: [
      "Licencia de conducir válida de EE.UU. (con fecha de emisión y vencimiento)",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida de EE.UU.",
      "Certificado de ciudadanía o naturalización de EE.UU.",
    ],
    onlineNotes:
      "VitalChek es el único proveedor autorizado. Se aplica una tarifa adicional de $5 por expedición de la agencia. El estado advierte contra sitios de terceros no autorizados.",
    mailNotes:
      "Incluya el Formulario PH-1654 completado, cheque/giro postal y fotocopia de identificación. Si no recibe respuesta en 45 días, comuníquese con la oficina.",
    mailProcessingTime: "2–6 semanas",
    inPersonNotes:
      "Cualquier departamento de salud del condado puede emitir cualquier acta de nacimiento de Tennessee — no necesita ir al condado donde ocurrió el nacimiento.",
    inPersonLocations:
      "Oficina estatal en Nashville y cualquier departamento de salud del condado en todo el estado (no limitado al condado de nacimiento)",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal y en la mayoría de los departamentos de salud del condado",
    phoneNotes:
      "Mismas tarifas que pedidos en línea. Se requiere tarjeta de crédito/débito.",
    feeWaivers: [
      {
        eligibility: "Jóvenes sin hogar (menores de edad)",
        howToClaim:
          "Los niños y jóvenes sin hogar verificados pueden obtener un acta de nacimiento a través de la verificación del director de una agencia de servicios para personas sin hogar, enlace McKinney-Vento escolar, trabajador social/consejero escolar o director del programa TRIO/GEAR UP.",
      },
      {
        eligibility:
          "Jóvenes de crianza que salen del sistema de cuidado",
        howToClaim:
          "El Departamento de Servicios para Niños proporciona actas de nacimiento a los jóvenes que salen del cuidado a los 18 años. Los jóvenes que salieron sin documentos pueden llamar al 844-887-7277.",
      },
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/teléfono vía VitalChek)",
    ],
  },
};
