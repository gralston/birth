import { StateTranslationEs } from "./stateTranslationTypes";

export const batch2: Record<string, StateTranslationEs> = {
  VA: {
    officeHours:
      "lun–vie 8:00 AM – 4:30 PM ET (vestíbulo sin cita 7:00 AM – 4:00 PM)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación con foto válida de EE.UU. (o vencida menos de 1 año)",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida de EE.UU.",
      "Documentos de inmigración",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/en persona)",
      "efectivo (en persona)",
    ],
    onlineNotes:
      "Virginia tiene su propio portal en línea (sin cargo de terceros). El procesamiento tarda aproximadamente 5 días hábiles. VitalChek también está disponible con un cargo de servicio de $12.70 para pedidos acelerados.",
    mailNotes:
      "Incluya el formulario VS6B completado, una fotocopia de su identificación y un cheque/giro postal a nombre de 'State Health Department.'",
    mailProcessingTime: "8 días hábiles desde la recepción",
    inPersonLocations:
      "Oficina principal en 8701 Park Central Dr., Suite 100, Richmond, VA. También disponible en todas las oficinas del DMV en todo el estado ($14 de cargo) y oficinas locales del departamento de salud.",
    inPersonProcessingTime:
      "El mismo día en la oficina principal; varía en oficinas del DMV/locales",
    inPersonNotes:
      "Virginia es inusual: todos los Centros de Servicio al Cliente del DMV en todo el estado pueden emitir actas de nacimiento ($14 = $12 + $2 cargo administrativo). No se necesita cita en la oficina principal.",
    phoneNotes:
      "Presione la opción 2. Se aplica cargo de servicio. La línea telefónica del VDH es solo para consultas, no para pedidos.",
    requirementsNotes:
      "Virginia tiene elegibilidad estricta — solo los familiares inmediatos pueden solicitarla. Tíos, primos y parientes políticos NO son elegibles.",
    feeWaivers: [
      {
        eligibility: "Jóvenes sin hogar",
        howToClaim:
          "Sin cargo por cualquier registro vital. Presente una 'Declaración Jurada de Virginia Certificando el Estado de Joven Sin Hogar' completada (Formulario DMV DL-60), válida por 90 días, firmada por un enlace escolar, director de refugio u otro certificador.",
      },
      {
        eligibility: "Jóvenes saliendo del cuidado de crianza temporal",
        howToClaim:
          "Cuando un niño sale del cuidado de crianza temporal a los 18 años (después de más de 6 meses en cuidado), el departamento local del DSS está obligado a obtener su acta de nacimiento.",
      },
      {
        eligibility:
          "Corrección de designación racial de Indígena Americano / Nativo Americano",
        howToClaim:
          "Una copia certificada gratuita para cualquier Indígena Americano/Nativo Americano cuyo registro de nacimiento presentado antes del 1 de julio de 1960 contenga una designación racial incorrecta (legado de la Ley de Integridad Racial de 1924).",
      },
    ],
    specialNotes: [
      "Todas las oficinas del DMV de Virginia pueden emitir actas de nacimiento ($14) — no tiene que ir al departamento de salud.",
      "El portal en línea de Virginia no tiene cargo de terceros — más económico que VitalChek.",
      "Solo los familiares inmediatos pueden solicitar (no tíos, primos ni parientes políticos).",
      "Para nacimientos antes de 1912, consulte la Biblioteca de Virginia para registros de 1853–1896 (incompletos) en lva-virginia.libguides.com/bmd.",
    ],
    noIdWorkaround:
      "Virginia acepta dos documentos secundarios en lugar de una identificación con foto (por ejemplo, tarjeta de seguro médico + expediente académico, o DD-214 + póliza de seguro de vida). Los jóvenes sin hogar pueden usar la declaración jurada DL-60 firmada por un enlace escolar o director de refugio — no se necesita identificación con foto estándar, y el cargo se exime. Los jóvenes que salen del cuidado de crianza temporal a los 18 años deben hacer que su DSS local obtenga el certificado. Comuníquese con el VDH al (804) 662-6200 para discutir su situación específica.",
  },
  WA: {
    officeHours:
      "lun–vie 9:00 AM – 2:00 PM PT (teléfono); mostrador 9 AM – 4 PM con cita",
    primaryId: [
      "Licencia de conducir válida de Washington, EDL o identificación estatal",
      "Licencia de conducir válida de otro estado o REAL ID",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Tarjeta consular",
      "Identificación militar válida de EE.UU.",
      "Identificación tribal de membresía/inscripción (tribu reconocida federalmente)",
      "Pasaporte extranjero, licencia de conducir o tarjeta de identificación",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/teléfono a través de VitalChek)",
    ],
    onlineNotes:
      "VitalChek es el único proveedor externo aprobado. El cargo de servicio incluye $6 de cargo de la agencia + $11.50 de manejo. El estado advierte contra sitios de terceros no autorizados.",
    mailNotes:
      "Incluya el formulario DOH 422-182 completado, una fotocopia de su identificación y un cheque/giro postal a nombre de 'Department of Health.'",
    mailProcessingTime: "8–10 semanas",
    inPersonLocations:
      "Oficina estatal en 111 Israel Road SE, Tumwater, WA (solo con cita). Los departamentos de salud del condado locales también ofrecen servicio en persona.",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal y en la mayoría de las oficinas locales",
    inPersonNotes:
      "La oficina estatal requiere cita — no se aceptan visitas sin cita. Los departamentos de salud del condado locales pueden ser más convenientes.",
    phoneNotes:
      "Mismos cargos que en línea. Soporte en español: llame al (360) 236-4300, opción 8.",
    feeWaivers: [
      {
        eligibility: "Personas en situación de calle",
        howToClaim:
          "Sin cargo para personas sin hogar que viven en Washington. La solicitud debe ser presentada por una agencia gubernamental o un proveedor de servicios para personas sin hogar en su nombre con una carta en papel oficial afirmando que usted cumple con la definición de persona sin hogar del HUD.",
      },
      {
        eligibility:
          "Beneficiarios de SNAP que inscriben a un niño en la escuela",
        howToClaim:
          "Sin cargo para un padre/tutor que inscribe a un niño en un programa de aprendizaje temprano o escuela pública K-12, si el niño está en un hogar que recibe beneficios de SNAP o asistencia alimentaria de WA. Presente documentación de beneficios con la solicitud.",
      },
      {
        eligibility:
          "Veteranos (para propósitos de reclamaciones ante el VA)",
        howToClaim:
          "Sin cargo por un registro vital para uso en conexión con una reclamación de compensación o pensión pendiente ante la Administración de Veteranos. Presente documentación del VA con la solicitud.",
      },
    ],
    specialNotes: [
      "VitalChek es el ÚNICO proveedor externo aprobado — el estado advierte contra sitios no autorizados.",
      "El cargo de $25 no es reembolsable incluso si no se encuentra ningún registro.",
      "La oficina estatal requiere cita — no se aceptan visitas sin cita.",
      "Para nacimientos antes del 1 de julio de 1907, comuníquese con el auditor del condado o el departamento de salud local donde ocurrió el nacimiento.",
      "Soporte telefónico en español: llame al (360) 236-4300, opción 8.",
    ],
    noIdWorkaround:
      "Washington acepta dos documentos secundarios en lugar de una identificación con foto (tarjeta de Seguro Social, factura de servicios, estado de cuenta bancario, formularios W-2/1099, o carta de un centro de vivienda alternativa). Si está en situación de calle, una agencia gubernamental o un proveedor de servicios para personas sin hogar puede presentar la solicitud en su nombre — no se necesita identificación personal y el cargo se exime. Cualquier persona puede solicitar una 'copia informativa' no certificada ($25) sin restricciones de identificación, que puede servir como primer paso para obtener otros documentos. Comuníquese al (360) 236-4300 para asistencia.",
  },
  WI: {
    officeHours:
      "lun–vie 7:45 AM – 4:30 PM CT (sin cita); horario telefónico lun–vie 8:00 AM – 4:00 PM CT",
    primaryId: [
      "Licencia de conducir o identificación estatal válida de Wisconsin",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU.",
      "Identificación tribal emitida por una tribu reconocida federalmente",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/teléfono)",
      "efectivo (en persona)",
    ],
    onlineNotes:
      "Wisconsin ofrece pedidos directos en línea a través de su propio portal en vitalrecords.wi.gov. VitalChek también está disponible como alternativa en www.vitalchek.com. Los pedidos en línea requieren una tarjeta de crédito o débito válida.",
    mailNotes:
      "Incluya el formulario F-05291 de solicitud completado, una fotocopia de identificación válida, y un cheque o giro postal a nombre de 'Wisconsin Vital Records.' Escriba el nombre del registrante en la línea de memo.",
    mailProcessingTime: "2–4 semanas",
    inPersonLocations:
      "Oficina Estatal de Registros Vitales en 1 West Wilson Street, Sala 158, Madison, WI. Las oficinas locales del Registro de Escrituras en cada condado también pueden emitir copias certificadas para nacimientos registrados en su condado.",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal; varía por condado (a menudo el mismo día)",
    inPersonNotes:
      "Las oficinas del Registro de Escrituras del condado suelen ser más convenientes y pueden tener tiempos de espera más cortos. Llame con anticipación para confirmar horarios y disponibilidad.",
    phoneNotes:
      "Llame para solicitar por teléfono con tarjeta de crédito. Pedidos telefónicos de VitalChek también disponibles al 1-877-817-5832.",
    requirementsNotes:
      "Si no tiene una identificación con foto emitida por el gobierno, debe proporcionar dos documentos secundarios que juntos verifiquen su identidad y dirección. Todas las fotocopias de identificación deben ser legibles.",
    feeWaivers: [
      {
        eligibility: "Personas en situación de calle",
        howToClaim:
          "Cargo exento por una copia certificada de acta de nacimiento por año. Proporcione una declaración escrita de un refugio, agencia de servicios sociales o trabajador de alcance comunitario que verifique su situación de calle.",
      },
      {
        eligibility:
          "Víctimas de agresión sexual, abuso doméstico o trata de personas",
        howToClaim:
          "Cargo exento por una copia certificada necesaria para propósitos relacionados con el abuso o la trata. Proporcione documentación de las fuerzas del orden, un fiscal de distrito o una agencia de servicios a víctimas.",
      },
      {
        eligibility:
          "Veteranos (para propósitos de beneficios del VA)",
        howToClaim:
          "Una copia certificada gratuita cuando se necesita para reclamaciones de beneficios de veteranos. Indique en la solicitud que el registro se necesita para beneficios del VA y proporcione prueba del estatus de veterano (DD-214 o carta del VA).",
      },
    ],
    specialNotes: [
      "Las oficinas del Registro de Escrituras del condado pueden emitir copias certificadas y suelen ser más rápidas y convenientes que la oficina estatal — consulte primero el Registro de Escrituras de su condado.",
      "Para nacimientos antes del 1 de octubre de 1907, comuníquese con el Registro de Escrituras del condado donde ocurrió el nacimiento, ya que la oficina estatal puede no tener esos registros.",
      "Wisconsin acepta identificaciones tribales de tribus reconocidas federalmente como identificación primaria válida.",
      "Las actas de nacimiento de reliquia (decorativas) están disponibles por un cargo adicional de $40 — son artículos de recuerdo y no deben confundirse con copias certificadas estándar.",
      "El portal en línea de Wisconsin (vitalrecords.wi.gov) es un sistema administrado por el estado, no un proveedor externo, lo que lo convierte en una opción conveniente y segura.",
    ],
    noIdWorkaround:
      "Si no tiene una identificación con foto emitida por el gobierno, Wisconsin le permite presentar dos formas de identificación secundaria (como una tarjeta de Seguro Social más una factura de servicios o estado de cuenta bancario). Si está en situación de calle, una carta de verificación de un refugio o agencia de servicios sociales apoya su identidad y lo califica para una exención de cargo bajo Wis. Stat. § 69.22(1m). También puede comunicarse con la Oficina de Registros Vitales al (608) 266-1373 para discutir su situación — el personal puede asesorar sobre documentos alternativos aceptables. Las oficinas del Registro de Escrituras del condado también pueden ser más flexibles para solicitudes en persona.",
  },
  MN: {
    officeHours:
      "lun–vie 8:00 AM – 4:30 PM CT (mesa de ayuda cerrada de 12:30 – 1:30 PM para almuerzo)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU.",
      "Identificación tribal emitida por una tribu reconocida federalmente",
    ],
    paymentMethods: [
      "tarjeta de crédito (Visa, MasterCard, Discover)",
      "cheque",
      "giro postal",
    ],
    onlineNotes:
      "Minnesota está desarrollando un portal de pedidos en línea administrado por el estado. Actualmente, los pedidos en línea son limitados. Para la mayoría de los pedidos, envíe por correo o fax, o visite una oficina de registros vitales del condado para un servicio más rápido.",
    mailNotes:
      "Incluya la solicitud de acta de nacimiento completada, una fotocopia de identificación válida (se requiere firma notariada) y el pago mediante cheque, giro postal o tarjeta de crédito. Escriba 'Expedite' en el sobre para procesamiento acelerado (cargo adicional de $20). También se aceptan pedidos por fax al (866) 416-1357.",
    mailProcessingTime:
      "4–6 semanas (estándar); 1–2 semanas (acelerado)",
    inPersonLocations:
      "Oficinas de registros vitales del condado en todo Minnesota. La Oficina Estatal de Registros Vitales en St. Paul no ofrece servicio en persona — visite su oficina del condado local en su lugar.",
    inPersonProcessingTime:
      "El mismo día en la mayoría de las oficinas del condado",
    inPersonNotes:
      "Para el servicio más rápido, visite una oficina de registros vitales del condado en persona. La mayoría de las oficinas del condado pueden emitir copias certificadas mientras espera. Debe presentar identificación válida y firmar el formulario de solicitud frente al personal del condado.",
    phoneNotes:
      "Llame a la mesa de ayuda para preguntas y asistencia con pedidos. Horario telefónico lun–vie 8:00 AM – 4:30 PM CT (cerrado de 12:30 – 1:30 PM). Se requiere tarjeta de crédito para pagos por teléfono.",
    requirementsNotes:
      "Todos los solicitantes deben proporcionar identificación y firmar el formulario de solicitud frente a un notario público (para pedidos por correo/fax) o personal de registros vitales del condado (para pedidos en persona), atestiguando su elegibilidad. Si no tiene identificación aceptable, un testigo que lo haya conocido por dos o más años puede completar un formulario de Declaración para Identificar.",
    feeWaivers: [
      {
        eligibility:
          "Jóvenes sin hogar (24 años o menores, no acompañados por un padre o tutor, y sin refugio)",
        howToClaim:
          "Presente una solicitud de acta de nacimiento completada con una declaración firmada de que usted es un joven sin hogar. Una declaración de verificación de una persona autorizada (trabajador de refugio, proveedor de servicios sociales, trabajador de alcance comunitario) puede sustituir la identificación estándar. El acta de nacimiento certificada se emite sin costo pero vence seis meses después de la fecha de emisión.",
      },
      {
        eligibility:
          "Veteranos y sus familias (para propósitos de beneficios del VA)",
        howToClaim:
          "Se emite una copia certificada de un registro de nacimiento sin cargo a cualquier veterano, el cónyuge sobreviviente o familiar más cercano de un veterano, oficiales de servicio de cualquier organización de veteranos autorizada por el Congreso, o el Departamento de Asuntos de Veteranos, cuando el registro se necesita para presentar reclamaciones al VA o para propósitos de organizaciones de veteranos.",
      },
    ],
    specialNotes: [
      "La Oficina Estatal de Registros Vitales no ofrece servicio en persona — para certificados el mismo día, visite una oficina de registros vitales del condado.",
      "Para nacimientos antes de 1900, comuníquese directamente con el condado donde ocurrió el nacimiento, ya que la oficina estatal no tiene registros anteriores a 1900.",
      "Los pedidos por correo y fax requieren una firma notariada que atestigüe su identidad y elegibilidad. Los pedidos en persona en el condado requieren firmar frente al personal del condado.",
      "El procesamiento acelerado agrega $20 al cargo — escriba 'Expedite' en el sobre al enviar su solicitud por correo.",
      "Minnesota ofrece actas de nacimiento sin costo para jóvenes sin hogar (24 años o menores) a través de la oficina estatal o cualquier oficina de registros vitales del condado.",
      "Los pedidos por fax se pueden enviar al (866) 416-1357 con pago por tarjeta de crédito.",
    ],
    noIdWorkaround:
      "Si no tiene una identificación con foto emitida por el gobierno, Minnesota permite que un testigo que lo haya conocido por dos o más años complete un formulario de 'Declaración para Identificar' (disponible en oficinas del condado o en línea) para jurar su identidad. Si es un joven sin hogar (24 años o menor), puede obtener un acta de nacimiento sin costo bajo Minn. Stat. § 144.2255 presentando una declaración firmada de situación de calle junto con verificación de un trabajador de refugio, proveedor de servicios sociales o trabajador de alcance comunitario — no se requiere identificación estándar. Comuníquese con la Oficina de Registros Vitales al (651) 201-5970 o envíe un correo electrónico a health.vitalrecords@state.mn.us para orientación sobre su situación específica.",
  },
  IN: {
    officeHours: "lun–vie 8:00 AM – 5:00 PM ET",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida de Indiana",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida (DD-214 o servicio activo)",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/teléfono)",
      "efectivo (en persona en oficinas locales)",
    ],
    onlineNotes:
      "VitalChek es el único proveedor en línea autorizado para registros vitales de Indiana. Se requiere tarjeta de crédito o débito. Opciones de envío acelerado disponibles con cargo adicional.",
    mailNotes:
      "Incluya el formulario de solicitud estatal completado (49666), una fotocopia de identificación con foto válida, y un cheque o giro postal a nombre de 'Indiana State Department of Health.' No envíe efectivo.",
    mailProcessingTime: "4–8 semanas",
    inPersonLocations:
      "Oficinas de los departamentos de salud locales en todo Indiana. La oficina estatal de registros vitales en Indianápolis no ofrece servicio de mostrador sin cita — use su departamento de salud local en su lugar.",
    inPersonProcessingTime:
      "El mismo día en la mayoría de los departamentos de salud locales",
    inPersonNotes:
      "Los departamentos de salud locales son la opción principal para solicitudes en persona. Los cargos y métodos de pago aceptados pueden variar por condado. Comuníquese con su oficina local antes de visitarla.",
    phoneNotes:
      "Línea gratuita de VitalChek. Mismo cargo estatal más cargo de procesamiento de VitalChek. Se requiere tarjeta de crédito o débito.",
    requirementsNotes:
      "Todos los solicitantes deben proporcionar una fotocopia de una identificación con foto válida emitida por el gobierno. Si no tiene una identificación con foto primaria, proporcione dos formas de identificación secundaria.",
    feeWaivers: [
      {
        eligibility: "Personas en situación de calle",
        howToClaim:
          "Cargo exento para personas certificadas como sin hogar. Proporcione una carta de un refugio, agencia de servicios sociales u otra organización calificada que verifique su situación de calle. Presente con su solicitud.",
      },
      {
        eligibility:
          "Víctimas de violencia doméstica, violencia en citas, agresión sexual, acoso o trata de personas",
        howToClaim:
          "Cargo exento al proporcionar documentación del estatus de víctima de una agencia de las fuerzas del orden, fiscal o proveedor de servicios a víctimas como un refugio de violencia doméstica.",
      },
      {
        eligibility:
          "Veteranos (para propósitos de beneficios del VA)",
        howToClaim:
          "Una copia certificada proporcionada sin cargo cuando se necesita para reclamaciones de beneficios de la Administración de Veteranos. Indique el propósito del VA en la solicitud y proporcione prueba del estatus de veterano (DD-214 o carta del VA).",
      },
      {
        eligibility:
          "Personas liberadas de encarcelamiento (Departamento de Correcciones de Indiana)",
        howToClaim:
          "Cargo exento por una copia certificada al ser liberado del Departamento de Correcciones de Indiana. El DOC coordina directamente con Registros Vitales antes de la liberación.",
      },
    ],
    specialNotes: [
      "Las actas de nacimiento de Indiana se emiten principalmente a través de los departamentos de salud locales para solicitudes en persona — la oficina estatal en Indianápolis no ofrece servicio de mostrador sin cita.",
      "Para nacimientos antes de 1907, comuníquese con el departamento de salud del condado local o el secretario del condado donde ocurrió el nacimiento.",
      "Indiana usa un sistema electrónico estatal de registros vitales (DRIVE), por lo que los departamentos de salud locales pueden acceder a registros de cualquier condado de Indiana.",
      "Las actas de nacimiento enmendadas están disponibles para cambios de marcador de género bajo IC 16-37-2-10 con una orden judicial.",
      "Los tiempos de procesamiento para pedidos por correo pueden ser significativos — considere usar VitalChek en línea o visitar un departamento de salud local para un servicio más rápido.",
    ],
    noIdWorkaround:
      "Si no tiene una identificación con foto emitida por el gobierno, Indiana le permite presentar dos formas de identificación secundaria (por ejemplo, tarjeta de Seguro Social más una factura de servicios o estado de cuenta bancario). Visite un departamento de salud local en persona, ya que el personal puede ayudar a verificar su identidad por medios alternativos. Si está en situación de calle, una carta de verificación de un refugio o agencia de servicios sociales apoya su identidad y lo califica para una exención de cargo bajo IC 16-37-1-11.5. Para asistencia adicional, comuníquese con la Oficina de Registros Vitales de Indiana al (317) 233-2700 o Indiana Legal Services al (317) 631-9410.",
  },
  KS: {
    officeHours:
      "lun–vie 8:00 AM – 5:00 PM CT (cerrado en días feriados estatales)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar de EE.UU. (servicio activo, reserva o retirado)",
      "Tarjeta de residente permanente (Formulario I-551, Green Card)",
      "Certificado de ciudadanía o naturalización de EE.UU.",
    ],
    paymentMethods: [
      "cheque personal",
      "giro postal",
      "cheque de caja",
      "tarjeta de crédito (en línea/teléfono a través de VitalChek)",
      "tarjeta de débito (en línea/teléfono a través de VitalChek)",
    ],
    onlineNotes:
      "VitalChek es el único servicio de pedidos en línea autorizado para registros vitales de Kansas. Se requiere tarjeta de crédito o débito. El procesamiento estándar tarda de 2 a 4 semanas. El envío acelerado está disponible por un cargo adicional.",
    mailNotes:
      "Incluya el formulario de solicitud VS 230 completado, una fotocopia clara de su identificación con foto válida (anverso y reverso), y el pago mediante cheque o giro postal a nombre de 'Office of Vital Statistics.' Las solicitudes incompletas serán devueltas y causarán demoras.",
    mailProcessingTime: "4 a 6 semanas",
    inPersonLocations:
      "Oficina de Estadísticas Vitales en 1000 SW Jackson Street, Suite 120, Topeka, KS. También disponible en algunos departamentos de salud del condado locales y tribunales de distrito en todo Kansas.",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal (si se localiza el registro); varía en oficinas locales",
    inPersonNotes:
      "Traiga identificación con foto válida y el formulario de solicitud completado. Se aceptan visitas sin cita en la oficina estatal durante el horario de atención. No todas las oficinas locales emiten actas de nacimiento — llame con anticipación para confirmar disponibilidad y cargos.",
    phoneNotes:
      "Los pedidos por teléfono se procesan a través de VitalChek con cargos de servicio adicionales. Se requiere tarjeta de crédito o débito. Para consultas generales, llame a la Oficina de Estadísticas Vitales al (785) 296-1400.",
    requirementsNotes:
      "Los registros vitales de Kansas son registros restringidos. Los solicitantes deben demostrar un interés directo y tangible en el registro. Una fotocopia clara de identificación con foto válida (anverso y reverso) debe acompañar todas las solicitudes por correo.",
    feeWaivers: [
      {
        eligibility:
          "Niños, jóvenes sin hogar o jóvenes no acompañados según la definición de la Ley Federal de Asistencia para Personas Sin Hogar McKinney-Vento (42 U.S.C. 11434a)",
        howToClaim:
          "Un proveedor de servicios para personas sin hogar, enlace escolar de personas sin hogar del distrito o agencia gubernamental puede presentar una solicitud en nombre de la persona certificando su situación de calle. Se proporciona una copia certificada sin cargo.",
      },
      {
        eligibility:
          "Víctimas de violencia doméstica, agresión sexual, trata de personas o acoso que necesitan documentos de identidad",
        howToClaim:
          "Proporcione documentación de una organización de servicios a víctimas, agencia de las fuerzas del orden o proveedor de servicios legales que verifique el estatus de víctima. Presente con la solicitud a la Oficina de Estadísticas Vitales. Una copia certificada exenta de cargo por solicitud.",
      },
      {
        eligibility:
          "Agencias gubernamentales que solicitan registros para propósitos oficiales",
        howToClaim:
          "Las agencias gubernamentales federales, estatales y locales pueden obtener copias certificadas sin cargo cuando el registro se requiere para asuntos oficiales del gobierno. La solicitud debe presentarse en papel oficial de la agencia.",
      },
    ],
    specialNotes: [
      "El registro estatal de nacimientos de Kansas comenzó el 1 de julio de 1911. Para nacimientos antes de 1911, comuníquese con el secretario del condado en el condado de nacimiento, ya que algunos condados mantuvieron registros anteriores.",
      "Cada copia certificada cuesta $15 independientemente de si se ordenan copias adicionales al mismo tiempo.",
      "Kansas permite enmiendas a las actas de nacimiento para cambios de marcador de género. Se puede requerir una orden judicial o declaración jurada de un médico o psicólogo con licencia según el tipo de enmienda.",
      "La ley de Kansas restringe quién puede obtener un acta de nacimiento certificada. El solicitante debe tener un interés directo y tangible en el registro según K.S.A. 65-2422d.",
      "VitalChek es el único proveedor autorizado en línea/teléfono para registros vitales de Kansas. Tenga cuidado con sitios web de terceros no oficiales que cobran cargos excesivos por el mismo servicio.",
      "Los tribunales de distrito en el condado de nacimiento también pueden tener registros de nacimiento y pueden emitir copias certificadas en algunos casos. Comuníquese con el secretario del tribunal de distrito para verificar disponibilidad.",
    ],
    noIdWorkaround:
      "Si no tiene una identificación con foto emitida por el gobierno, puede proporcionar dos formas de identificación secundaria que contengan su nombre (por ejemplo, tarjeta de Seguro Social más una factura de servicios). Un familiar elegible que tenga identificación con foto válida puede presentar la solicitud en su nombre con prueba de su parentesco con el registrante. VitalChek también puede verificar la identidad a través de registros electrónicos sin requerir identificación física. Para personas en situación de calle, un proveedor de servicios para personas sin hogar o enlace escolar puede presentar la solicitud en su nombre y el cargo se eximirá bajo K.S.A. 65-2418(a)(4). Comuníquese con la Oficina de Estadísticas Vitales al (785) 296-1400 para orientación.",
  },
  KY: {
    officeHours:
      "lun–vie 8:00 AM – 4:30 PM ET (excluyendo días feriados estatales; servicio el mismo día no garantizado después de las 3:45 PM)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU.",
      "Identificación militar válida de EE.UU.",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/teléfono a través de VitalChek)",
    ],
    onlineNotes:
      "VitalChek es el único proveedor autorizado en línea/teléfono. Se aplica un cargo de procesamiento adicional además del cargo estatal de $10. Acepta Visa, MasterCard, Discover y American Express. Entrega nocturna por UPS disponible por un cargo de envío adicional.",
    mailNotes:
      "Incluya el formulario de solicitud VS-37 completado y un cheque o giro postal a nombre del Tesorero del Estado de Kentucky. No envíe efectivo. Incluya una fotocopia de identificación con foto válida. También hay un buzón disponible en la entrada de visitantes en 275 E. Main St., Frankfort para entrega en persona de solicitudes tipo correo.",
    mailProcessingTime:
      "Hasta 30 días hábiles desde la fecha en que se registra el pago",
    inPersonLocations:
      "Oficina de Estadísticas Vitales, 275 East Main Street (entrada por Martin Luther King Blvd), Frankfort, KY. Los formularios de solicitud también están disponibles en los departamentos de salud del condado locales en todo el estado.",
    inPersonProcessingTime:
      "No se garantiza el mismo día; procesamiento estándar de hasta 30 días hábiles",
    inPersonNotes:
      "Servicio de vestíbulo sin cita disponible durante el horario de atención. Un buzón en la entrada de visitantes está disponible para envíos fuera del horario de atención. Los departamentos de salud del condado pueden proporcionar formularios de solicitud en blanco, pero las copias certificadas solo las emite la Oficina Estatal de Estadísticas Vitales.",
    phoneNotes:
      "Elija la opción 1. Mismos cargos que los pedidos en línea (cargo estatal más cargo de procesamiento de VitalChek). Se requiere tarjeta de crédito o débito.",
    requirementsNotes:
      "Kentucky restringe el acceso a los registros de nacimiento de menos de 100 años al registrante, padres, tutores legales, familiares inmediatos y representantes legales autorizados según KRS 213.131(5). Los registros de más de 100 años son públicos. Se recomienda una fotocopia de identificación con foto válida con todas las solicitudes.",
    feeWaivers: [
      {
        eligibility:
          "Personas sin hogar verificadas por un proveedor de servicios calificado (disponible para personas menores de 25 años en situación de calle)",
        howToClaim:
          "Un director o designado de una agencia gubernamental o sin fines de lucro que atienda a personas sin hogar, un enlace McKinney-Vento de una agencia educativa local, o un trabajador social/consejero escolar debe completar el Formulario VS-41 (Declaración Jurada de Situación de Calle para Acta de Nacimiento Exenta de Cargo). Cada persona elegible puede recibir solo un registro de nacimiento exento de cargo por solicitud.",
      },
      {
        eligibility:
          "Jóvenes en o saliendo del cuidado de crianza temporal del DCBS (Departamento de Servicios Comunitarios)",
        howToClaim:
          "Los trabajadores sociales del DCBS pueden presentar el formulario especial VS-37 DCBS Youth en nombre de jóvenes bajo cuidado. Los jóvenes que han salido del cuidado pueden comunicarse con la Rama de Servicios de Transición del DCBS o usar el portal KY RISE en https://prd.webapps.chfs.ky.gov/kyrise para asistencia en la obtención de documentos esenciales.",
      },
    ],
    specialNotes: [
      "Los registros de nacimiento de Kentucky datan de 1911 (el registro estatal comenzó en 1911 con cumplimiento general para 1917). Para nacimientos antes de 1911, comuníquese con el Departamento de Bibliotecas y Archivos de Kentucky en 300 Coffee Tree Road, Frankfort, KY 40602.",
      "VitalChek es el único proveedor externo autorizado para pedidos en línea y por teléfono.",
      "Un buzón está disponible en la entrada de visitantes en 275 E. Main St., Frankfort para presentar solicitudes fuera del horario de atención.",
      "El pago debe hacerse a nombre del Tesorero del Estado de Kentucky (cheque o giro postal para pedidos por correo).",
      "Los registros de nacimiento están restringidos por 100 años desde la fecha de nacimiento según KRS 213.131(5); después de 100 años se convierten en registros públicos.",
    ],
    noIdWorkaround:
      "Kentucky no requiere notarización como sustituto de identificación en la solicitud estándar VS-37. Si no tiene una identificación con foto, puede presentar dos formas de identificación secundaria (por ejemplo, tarjeta de Seguro Social, factura de servicios, estado de cuenta bancario). Las personas sin hogar menores de 25 años pueden obtener un certificado exento de cargo a través de un proveedor de servicios calificado usando el Formulario VS-41 sin identificación estándar. Los jóvenes en cuidado de crianza temporal del DCBS pueden hacer que su trabajador social solicite un certificado en su nombre. También puede autorizar a un representante que tenga identificación válida para solicitar el certificado con autorización escrita.",
  },
  LA: {
    officeHours:
      "lun–vie 8:00 AM – 3:30 PM CT (sin cita); excluye días feriados estatales",
    primaryId: [
      "Licencia de conducir estatal vigente con foto",
      "Tarjeta de identificación con foto estatal vigente",
      "Identificación militar vigente de EE.UU. con foto",
      "Pasaporte de EE.UU. o emitido en el extranjero",
      "Certificado de naturalización de EE.UU. (Formulario N-550, N-570 o N-578)",
      "Certificado de ciudadanía de EE.UU. (Formulario N-560 o N-578)",
      "Identificación escolar vigente o anuario con foto (estudiantes de secundaria)",
    ],
    paymentMethods: [
      "giro postal",
      "cheque",
      "efectivo (en persona, se requiere monto exacto)",
      "tarjeta de crédito (solo pedidos de VitalChek)",
    ],
    onlineNotes:
      "VitalChek es el único proveedor en línea autorizado. Se aplica un cargo de servicio adicional y un recargo estatal de $0.50 por pedido. El envío acelerado está disponible por un cargo adicional.",
    mailNotes:
      "Incluya el formulario de solicitud completado, una fotocopia de identificación con foto válida, y un cheque o giro postal a nombre de 'Louisiana Vital Records.' Se agrega un recargo estatal de $0.50 a cada pedido por correo.",
    mailProcessingTime: "8–10 semanas",
    inPersonLocations:
      "Oficina Central de Registros Vitales en Nueva Orleans, nueve centros de servicio regionales del OPH, y secretarios de tribunal parroquiales participantes en todo el estado",
    inPersonProcessingTime:
      "El mismo día en la Oficina Central y en la mayoría de las ubicaciones de secretarios de tribunal",
    inPersonNotes:
      "Los servicios sin cita están disponibles en la Oficina Central (1450 Poydras St., Suite 400, Nueva Orleans). Los secretarios de tribunal parroquiales participantes también pueden emitir copias certificadas de registros de nacimiento. Traiga identificación con foto válida y pago exacto. Los secretarios de tribunal usan un formulario de solicitud separado.",
    phoneNotes:
      "Se aplica el cargo de servicio de VitalChek (~$12.50) y un recargo estatal de $0.50. Se requiere tarjeta de crédito.",
    requirementsNotes:
      "Se requiere una identificación primaria o dos identificaciones secundarias. Cuando alguien que no es un padre listado en el certificado solicita el registro de un menor, se debe presentar un fallo de custodia — los documentos de custodia notariados o mandatos de custodia provisionales no se aceptan.",
    feeWaivers: [
      {
        eligibility:
          "Primera copia certificada del acta de nacimiento de un recién nacido enviada por correo al padre",
        howToClaim:
          "No se necesita ninguna acción — el estado envía automáticamente la primera copia certificada a la dirección del padre que aparece en el registro de nacimiento sin cargo.",
      },
      {
        eligibility:
          "Veteranos que solicitan registros para propósitos del VA",
        howToClaim:
          "Los registros necesarios para reclamaciones de la Administración de Veteranos se proporcionan sin cargo bajo la ley federal. Incluya documentación de que la solicitud es para propósitos del VA.",
      },
    ],
    specialNotes: [
      "Louisiana ofrece dos tipos de actas de nacimiento: una copia certificada de formato largo ($15) y una tarjeta de nacimiento de formato corto ($9). El formato largo es una fotocopia completa del registro original; el formato corto (tarjeta de nacimiento) muestra el nombre al nacer, fecha, parroquia, iniciales del padre, y apellido e inicial del nombre de la madre.",
      "Los cargos de Registros Vitales están establecidos por ley (La. R.S. 40:40) y oficialmente 'no están sujetos a exención' excepto según lo dispuesto por la ley.",
      "Se agrega un recargo estatal de $0.50 a cada pedido por correo o de VitalChek.",
      "Los secretarios de tribunal parroquiales participantes pueden emitir actas de nacimiento y pueden ofrecer un servicio en persona más rápido que la oficina central.",
      "Para nacimientos antes de 1911, solo los registros de la Parroquia de Orleans pueden estar disponibles a través de la oficina estatal. Comuníquese con los archivos del Secretario de Estado de Louisiana para registros más antiguos.",
      "Los cónyuges no figuran como solicitantes elegibles bajo la ley de Louisiana — solo el registrante, padres, hijos adultos, hermanos, abuelos, nietos adultos y sus abogados pueden solicitar copias sin una autorización firmada.",
    ],
    noIdWorkaround:
      "Haga que un familiar elegible (padre, hijo adulto, hermano, abuelo o nieto adulto) que tenga identificación con foto válida solicite el certificado en su nombre. Si ningún familiar puede ayudar, comuníquese con el Registro de Registros Vitales al (504) 593-5100 para discutir la presentación de dos documentos secundarios (por ejemplo, talón de pago con SSN, registro de votante, DD-214). Louisiana Legal Services (LouisianaLawHelp.org) y los proveedores locales de servicios para personas sin hogar también pueden ayudar con la obtención de documentos de identificación.",
  },
  MO: {
    officeHours:
      "lun–vie 8:30 AM – 4:30 PM CT (sin cita, solo con cita previa)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU.",
      "Identificación militar de EE.UU.",
      "Identificación con foto de trabajo o escuela",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/teléfono a través de VitalChek)",
      "efectivo (en persona en oficinas locales)",
    ],
    onlineNotes:
      "VitalChek es el ÚNICO método reconocido y respaldado para obtener registros vitales de Missouri en línea. Envío acelerado disponible por un cargo adicional. El procesamiento generalmente tarda de 7 a 10 días hábiles.",
    mailNotes:
      "Todas las solicitudes por correo deben ser notariadas (se acepta notarización tradicional, electrónica o en línea remota). Incluya el formulario de solicitud completado, copia de identificación con foto válida, firma notariada, sobre de devolución con su dirección y franqueo, y cheque o giro postal a nombre de 'Missouri Department of Health and Senior Services.'",
    mailProcessingTime: "4 a 6 semanas",
    inPersonLocations:
      "Oficina de Registros Vitales en 930 Wildwood Drive, Jefferson City, MO (con cita). También disponible en 115 oficinas de agencias de salud pública locales (LPHA) en todo Missouri que ofrecen servicio sin cita.",
    inPersonProcessingTime:
      "El mismo día en oficinas locales; varía en la oficina estatal dependiendo de la disponibilidad de citas",
    inPersonNotes:
      "Las agencias de salud pública locales suelen proporcionar un servicio más rápido. Debe presentar identificación con foto válida en persona. Comuníquese con su departamento de salud local para horarios y disponibilidad.",
    phoneNotes:
      "VitalChek es el único servicio autorizado de pedidos por teléfono. Mismos cargos que los pedidos en línea (cargo estatal más cargo de procesamiento de VitalChek). Consultas generales: (573) 751-6387.",
    requirementsNotes:
      "Todas las solicitudes por correo deben ser notariadas conforme a 19 CSR 10-10, independientemente del solicitante o motivo. La relación del solicitante con el registrante y el motivo de la solicitud determinan si se debe adjuntar documentación de interés tangible.",
    feeWaivers: [
      {
        eligibility:
          "Niños/jóvenes sin hogar o jóvenes no acompañados según la definición de 42 U.S.C. Sección 11434a(6)",
        howToClaim:
          "Un proveedor de servicios para personas sin hogar debe completar y presentar una 'Declaración Jurada de Situación de Joven Sin Hogar o No Acompañado para Copia Certificada de Acta de Nacimiento Exenta de Cargo' que verifique la situación de calle de la persona. Se proporciona un certificado sin costo; el cargo legal se aplica a copias adicionales.",
      },
      {
        eligibility: "Víctimas de violencia doméstica o abuso",
        howToClaim:
          "Proporcione documentación firmada por un empleado, agente o voluntario de un proveedor de servicios a víctimas, un abogado, o un profesional de salud o salud mental que declare bajo pena de perjurio que cree que la víctima ha estado involucrada en un incidente de violencia doméstica o abuso. Elegible solo una vez.",
      },
    ],
    specialNotes: [
      "Todas las solicitudes por correo deben ser notariadas — se acepta notarización tradicional, electrónica y en línea remota (RON) por la Oficina de Registros Vitales.",
      "Los registros vitales de Missouri no están abiertos al público general. Solo las personas con un interés directo y tangible en el registro pueden obtener una copia certificada.",
      "Las oficinas de agencias de salud pública locales (115 en todo Missouri) suelen proporcionar un servicio sin cita más rápido que la oficina estatal en Jefferson City.",
      "Para nacimientos antes de 1910, comuníquese con los Archivos del Estado de Missouri al (573) 751-3280 o visite sos.mo.gov/archives para registros históricos.",
      "La Oficina de Registros Vitales está implementando un nuevo sistema de Registros Vitales Electrónicos de Missouri (MoEVR 2.0) con implementación por fases desde el otoño de 2025 hasta el verano de 2027, lo que puede afectar temporalmente los tiempos de procesamiento.",
      "VitalChek es el ÚNICO proveedor autorizado en línea/teléfono para registros vitales de Missouri — tenga cuidado con sitios web de terceros no oficiales que cobran cargos excesivos.",
    ],
    noIdWorkaround:
      "Si no tiene identificación con foto, puede presentar dos documentos de identificación alternativa que contengan su nombre y el nombre de la organización emisora (factura de servicios, estado de cuenta bancario, tarjeta de seguro, tarjeta de registro de votante, etc.). Para solicitudes por correo, la solicitud aún debe ser notariada. Alternativamente, VitalChek puede verificar la identidad en línea a través de datos de registros públicos de LexisNexis sin requerir identificación física — esta es la opción recomendada por el estado para quienes no pueden presentar identificación estándar. Si está en situación de calle, un proveedor de servicios para personas sin hogar puede presentar una declaración jurada en su nombre, lo que también exime el cargo. Comuníquese con la Oficina al (573) 751-6387 o envíe un correo electrónico a VitalRecordsInfo@health.mo.gov para asistencia.",
  },
  MS: {
    officeHours:
      "lun–vie 8:00 AM – 5:00 PM CT; excluye días feriados estatales",
    primaryId: [
      "Licencia de conducir estatal válida con foto",
      "Tarjeta de identificación con foto estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU. con foto",
      "Tarjeta de residente permanente (green card)",
    ],
    paymentMethods: [
      "giro postal (a nombre de Mississippi State Department of Health)",
      "cheque certificado",
      "cheque personal",
      "tarjeta de crédito o débito (solo pedidos en línea y por teléfono)",
      "efectivo (solo en persona, se recomienda monto exacto)",
    ],
    onlineNotes:
      "VitalChek es el único proveedor en línea autorizado para registros vitales de Mississippi. Se aplica un cargo de servicio de aproximadamente $13.75 además del cargo estatal. Se requiere tarjeta de crédito o débito. Envío acelerado disponible por un costo adicional.",
    mailNotes:
      "Incluya un formulario de solicitud completado, una fotocopia de su identificación con foto válida, y un giro postal o cheque a nombre de 'Mississippi State Department of Health.' Incluya un sobre con su dirección y franqueo para agilizar la devolución. Los cheques personales pueden retrasar el procesamiento hasta que el cheque se compense.",
    mailProcessingTime: "4–6 semanas",
    inPersonLocations:
      "Departamento de Salud del Estado de Mississippi, oficina de Registros Vitales en 222 Marketridge Drive, Ridgeland, MS 39157, y oficinas de departamentos de salud del condado en todo el estado",
    inPersonProcessingTime:
      "El mismo día en la oficina de Ridgeland para registros en archivo; hasta 10 días hábiles en departamentos de salud del condado",
    inPersonNotes:
      "Se aceptan visitas sin cita en la oficina de Ridgeland. Traiga identificación con foto válida. Los departamentos de salud del condado también pueden procesar solicitudes pero pueden tener horarios limitados y tiempo de procesamiento adicional. Llame con anticipación para confirmar disponibilidad.",
    phoneNotes:
      "Se aplica el cargo de servicio de VitalChek (~$13.75) además del cargo estatal. Se requiere tarjeta de crédito o débito. Disponible las 24 horas, los 7 días de la semana.",
    requirementsNotes:
      "Se requiere una identificación con foto válida con cada solicitud. Si no hay identificación con foto disponible, se pueden aceptar dos documentos secundarios — comuníquese con la oficina de Registros Vitales para confirmar. Las solicitudes de representantes legales deben incluir prueba de autoridad (orden judicial o poder notarial notariado).",
    feeWaivers: [
      {
        eligibility:
          "Personas que necesitan un acta de nacimiento para obtener una identificación con foto para votar",
        howToClaim:
          "Presente una declaración firmada con su solicitud indicando que el acta de nacimiento se solicita únicamente con el propósito de obtener una identificación de votante. Mississippi exime el cargo para asegurar que el requisito de identificación de votante no funcione como un impuesto electoral.",
      },
      {
        eligibility:
          "Veteranos que solicitan registros para propósitos de la Administración de Veteranos",
        howToClaim:
          "Incluya documentación de que la solicitud es para propósitos de beneficios del VA. Los registros necesarios para reclamaciones de la Administración de Veteranos se proporcionan sin cargo bajo la ley federal.",
      },
      {
        eligibility:
          "Jóvenes actualmente o anteriormente en cuidado de crianza temporal bajo el Departamento de Protección Infantil de Mississippi",
        howToClaim:
          "Comuníquese con su trabajador social del DCPS o el Departamento de Protección Infantil de Mississippi. La agencia puede solicitar el acta de nacimiento en su nombre sin cargo.",
      },
    ],
    specialNotes: [
      "Mississippi comenzó el registro obligatorio estatal de nacimientos el 1 de noviembre de 1912. Los registros antes de esa fecha están incompletos — comuníquese con la oficina del secretario del tribunal de equidad del condado donde ocurrió el nacimiento para registros anteriores.",
      "Mississippi emite solo copias certificadas de formato largo (completo) de actas de nacimiento; las versiones de formato corto o tamaño billetera no están disponibles.",
      "Un acta de nacimiento conmemorativa (de reliquia) adecuada para enmarcar está disponible por un cargo adicional y se puede pedir a través de la oficina estatal.",
      "Para correcciones o cambios en un acta de nacimiento (nombre, paternidad, marcador de género), se requiere una orden judicial de un tribunal de equidad de Mississippi junto con una solicitud de enmienda por separado.",
      "Las actas de nacimiento tardías para nacimientos no registrados en su momento pueden presentarse a través del tribunal de equidad con evidencia de respaldo como registros del censo, registros hospitalarios o declaraciones juradas.",
      "Los registros de nacimiento de Mississippi se hacen públicos 100 años después de la fecha de nacimiento. Los registros de menos de 100 años están restringidos a solicitantes elegibles.",
    ],
    noIdWorkaround:
      "Haga que un familiar elegible (padre, cónyuge, hijo adulto, hermano o nieto) que tenga identificación con foto válida solicite el certificado en su nombre. Si necesita un acta de nacimiento específicamente para obtener identificación de votante, el cargo se exime bajo la ley de Mississippi — comuníquese con Registros Vitales al (601) 206-8200 para preguntar sobre el proceso de exención de cargo para identificación de votante. Si no tiene identificación con foto y ningún familiar puede ayudar, puede presentar dos documentos secundarios (por ejemplo, tarjeta de Seguro Social, tarjeta de registro de votante, declaración jurada notariada de identidad) — llame a la oficina estatal para discutir su situación. Mississippi Center for Legal Services (mscenterforlegalservices.org o 601-948-6752) o North Mississippi Rural Legal Services (nmrls.com o 662-234-2918) pueden ayudar a personas que tienen dificultades para obtener registros vitales.",
  },
  MT: {
    officeHours:
      "lun–jue 8:00 AM – 4:30 PM, vie 8:00 AM – 4:00 PM (cerrado vie 10:30 AM – 12:00 PM); cerrado en días feriados estatales",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida con foto y firma",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar válida de EE.UU. con foto",
      "Tarjeta de residente permanente (Formulario I-551, Green Card)",
      "Identificación con foto emitida por gobierno tribal",
    ],
    paymentMethods: [
      "cheque personal (a nombre de Montana DPHHS)",
      "giro postal",
      "tarjeta de crédito (pedidos en línea y por teléfono a través de VitalChek)",
      "tarjeta de débito (pedidos en línea y por teléfono a través de VitalChek)",
      "efectivo (solo en persona)",
    ],
    onlineNotes:
      "VitalChek es el único servicio de pedidos en línea autorizado para registros vitales de Montana. Se aplica un cargo de servicio adicional además del cargo estatal. Se requiere tarjeta de crédito o débito. El procesamiento estándar generalmente tarda de 2 a 4 semanas; el envío acelerado está disponible por un costo adicional.",
    mailNotes:
      "Incluya un formulario de Solicitud de Acta de Nacimiento completado, una fotocopia ampliada y legible de ambos lados de su licencia de conducir válida u otra identificación con foto emitida por el gobierno con firma, y un cheque o giro postal a nombre de 'Montana DPHHS.' Si no tiene una identificación con foto con firma, la solicitud debe ser notariada, o debe proporcionar dos formas alternativas de identificación (una debe tener su firma). Todos los cargos no son reembolsables.",
    mailProcessingTime: "2–4 semanas",
    inPersonLocations:
      "Oficina de Registros Vitales, 111 N Sanders, Sala 6, Helena, MT. Cualquier oficina del Secretario y Registrador del Condado en todo el estado también puede emitir actas de nacimiento para eventos que ocurrieron en Montana.",
    inPersonProcessingTime:
      "El mismo día en la oficina de Helena cuando el registro está en archivo; los tiempos de procesamiento varían en oficinas del condado",
    inPersonNotes:
      "Traiga identificación con foto válida emitida por el gobierno con firma y pago. Completará la solicitud en persona. Las oficinas del Secretario y Registrador del Condado pueden tener diferentes horarios y cargos — llame con anticipación para confirmar.",
    phoneNotes:
      "Se aplica el cargo de servicio de VitalChek además del cargo estatal. Se requiere tarjeta de crédito o débito. Disponible las 24 horas, los 7 días de la semana. Para consultas generales o para verificar el estado de su pedido, llame directamente a la Oficina de Registros Vitales al (406) 444-2685 o envíe un correo electrónico a HHSVitalRecords@mt.gov.",
    requirementsNotes:
      "Una fotocopia ampliada y legible de ambos lados de su identificación con foto con firma debe acompañar todas las solicitudes por correo. Si no tiene una identificación con foto con firma, debe hacer que la solicitud sea notariada o proporcionar dos formas alternativas de identificación (una debe incluir una firma). Los familiares elegibles que solicitan en nombre del registrante deben proporcionar prueba de parentesco (por ejemplo, su propia acta de nacimiento o certificado de matrimonio).",
    feeWaivers: [
      {
        eligibility:
          "Personas en situación de calle, incluidos jóvenes no acompañados, según la definición de la Ley Federal de Asistencia para Personas Sin Hogar McKinney-Vento",
        howToClaim:
          "La Oficina de Registros Vitales de Montana tiene una política voluntaria para eximir el cargo y reducir los requisitos de identificación para personas en situación de calle. Se puede presentar una carta de un proveedor de servicios para personas sin hogar, refugio, enlace escolar para personas sin hogar o agencia de servicios sociales que certifique la situación de calle del solicitante en lugar de la identificación estándar. Solo se requiere una forma de identificación en lugar de los requisitos estándar. Comuníquese con la Oficina de Registros Vitales al (406) 444-2685 para asistencia.",
      },
      {
        eligibility:
          "Agencias gubernamentales que solicitan registros para propósitos oficiales",
        howToClaim:
          "Las agencias gubernamentales federales, estatales y locales pueden obtener copias certificadas sin cargo cuando el registro se requiere para asuntos oficiales del gobierno. La solicitud debe presentarse en papel oficial de la agencia.",
      },
    ],
    specialNotes: [
      "Montana comenzó el registro estatal de nacimientos y defunciones en 1907. Los registros antes de 1907 están archivados con el Secretario del Condado donde ocurrió el nacimiento. El registro obligatorio no se aplicó de manera consistente hasta aproximadamente 1915, por lo que los registros tempranos pueden estar incompletos.",
      "A partir del 21 de septiembre de 2024, el cargo por cada copia certificada de un acta de nacimiento es de $16. Cada copia ordenada se cobra a la misma tarifa; no hay descuento por copias adicionales en el mismo pedido.",
      "Montana no acepta tarjetas de crédito directamente en la Oficina Estatal de Registros Vitales. Para pagos con tarjeta de crédito o débito, debe usar VitalChek en línea o por teléfono, lo cual cobra un cargo de servicio adicional.",
      "Las oficinas del Secretario y Registrador del Condado en todo Montana también pueden emitir actas de nacimiento. Los cargos y tiempos de procesamiento pueden variar por condado. Comuníquese con la oficina local para más detalles.",
      "Montana permite correcciones a las actas de nacimiento. Las correcciones dentro del primer año de nacimiento son gratuitas; después del primer año, se aplica un cargo de $41.",
      "Las actas de nacimiento tardías para nacimientos no registrados en el momento de ocurrencia pueden presentarse ante la Oficina de Registros Vitales con documentación de respaldo como registros hospitalarios, registros del censo o declaraciones juradas.",
      "VitalChek es el único proveedor autorizado en línea y por teléfono para registros vitales de Montana. Tenga cuidado con sitios web de terceros no oficiales que cobran cargos excesivos por el mismo servicio.",
    ],
    noIdWorkaround:
      "Haga que un familiar elegible (padre, abuelo, cónyuge o hijo adulto) que tenga identificación con foto válida solicite el certificado en su nombre con prueba de su parentesco con el registrante. Alternativamente, si no tiene una identificación con foto con firma, puede proporcionar dos formas alternativas de identificación (una debe incluir una firma), como una tarjeta de Seguro Social firmada más una factura de servicios con su dirección actual. También puede hacer que su solicitud sea notariada en lugar de proporcionar una identificación con foto. Si está en situación de calle, comuníquese con la Oficina de Registros Vitales al (406) 444-2685 — Montana tiene una política voluntaria de aceptar una carta de un proveedor de servicios para personas sin hogar o refugio como identificación y de eximir el cargo.",
  },
  NE: {
    officeHours:
      "lun–vie 8:00 AM – 5:00 PM CT (llegue antes de las 4:45 PM para visitas sin cita; cerrado en días feriados estatales)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida",
      "Pasaporte válido de EE.UU. o tarjeta de pasaporte",
      "Identificación militar de EE.UU. (servicio activo, reserva o retirado)",
      "Tarjeta de residente permanente (Formulario I-551, Green Card)",
      "Certificado de ciudadanía o naturalización de EE.UU.",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "tarjeta de crédito (en línea/teléfono a través de VitalChek)",
      "tarjeta de débito (en línea/teléfono a través de VitalChek)",
      "tarjeta de crédito (en persona: Visa, Mastercard)",
    ],
    onlineNotes:
      "Nebraska ofrece pedidos directos en línea a través de su propio portal en nevitalrecords-dhhs.ne.gov. Los pedidos acelerados también están disponibles a través de VitalChek en vitalchek.com o llamando al 1-800-255-2414, con un cargo de servicio adicional. Se requiere tarjeta de crédito o débito para pedidos en línea.",
    mailNotes:
      "Incluya un formulario de solicitud de acta de nacimiento completado, una fotocopia clara de su identificación con foto válida emitida por el gobierno (anverso y reverso), y un cheque o giro postal por $17.00 a nombre de 'Vital Records.' No se aceptan tarjetas de crédito para pedidos por correo. No se aceptan solicitudes por fax o correo electrónico. Las solicitudes incompletas serán devueltas y causarán demoras.",
    mailProcessingTime: "2 a 5 semanas",
    inPersonLocations:
      "Oficina de Registros Vitales en 1033 O Street, Suite 130, Lincoln, NE (edificio Gold's Galleria, primer piso). También disponible en el Departamento de Salud del Condado de Douglas, 1819 Farnam Street, Sala 402, Omaha, NE 68183 (teléfono: 402-444-7205) y algunas otras oficinas de secretarios del condado en todo Nebraska.",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal (si se localiza el registro); varía en oficinas locales",
    inPersonNotes:
      "Traiga identificación con foto válida emitida por el gobierno y pago. Se aceptan visitas sin cita durante el horario de atención; llegue no más tarde de las 4:45 PM. No todas las oficinas de secretarios del condado emiten actas de nacimiento — llame con anticipación para confirmar disponibilidad y métodos de pago aceptados.",
    phoneNotes:
      "Los pedidos por teléfono se procesan a través de VitalChek con un cargo de servicio adicional. Se requiere tarjeta de crédito o débito. Para consultas generales sobre su solicitud o registros, llame directamente a la Oficina de Registros Vitales al (402) 471-2871.",
    requirementsNotes:
      "Nebraska requiere que los solicitantes demuestren un 'propósito adecuado' bajo 174 NAC 3 para obtener una copia certificada. Una fotocopia clara de identificación con foto válida emitida por el gobierno (anverso y reverso) debe acompañar todas las solicitudes por correo. Si su nombre no está en el certificado, debe proporcionar prueba de su parentesco con el registrante.",
    feeWaivers: [
      {
        eligibility:
          "Personas que no tienen una licencia de conducir o tarjeta de identificación estatal de Nebraska vigente y necesitan un acta de nacimiento para obtener una identificación estatal para votar",
        howToClaim:
          "Indique en la solicitud que el propósito de la solicitud es obtener una tarjeta de identificación estatal para votar y que no tiene una licencia de conducir o identificación estatal de Nebraska vigente. Se proporciona una copia certificada sin cargo.",
      },
      {
        eligibility:
          "Agencias gubernamentales que solicitan registros para propósitos oficiales",
        howToClaim:
          "Las agencias gubernamentales federales, estatales y locales pueden obtener copias certificadas sin cargo cuando el registro se requiere para asuntos oficiales del gobierno. La solicitud debe presentarse en papel oficial de la agencia.",
      },
    ],
    specialNotes: [
      "El registro estatal de nacimientos de Nebraska comenzó en 1904, aunque los registros tempranos pueden estar incompletos. El cumplimiento con el registro estatal se logró generalmente para 1920. Para nacimientos antes de 1904, comuníquese con el secretario del condado en el condado de nacimiento, ya que algunos condados mantuvieron registros anteriores.",
      "Cada copia certificada cuesta $17 independientemente de si se ordenan copias adicionales al mismo tiempo.",
      "No se aceptan solicitudes por fax o correo electrónico en la oficina estatal.",
      "Para nacimientos en el Condado de Douglas, también puede solicitar certificados al Departamento de Salud del Condado de Douglas en 1819 Farnam Street, Sala 402, Omaha, NE 68183 (teléfono: 402-444-7205).",
      "Nebraska requiere que todos los solicitantes demuestren un 'propósito adecuado' bajo 174 NAC 3 antes de que se emita una copia certificada. Esto es más amplio que en algunos estados, pero aún requiere una razón legítima para la solicitud.",
      "VitalChek es el proveedor autorizado de pedidos por teléfono para registros vitales de Nebraska. Tenga cuidado con sitios web de terceros no oficiales que cobran cargos excesivos por el mismo servicio.",
      "Si fue adoptado, solicite usando su nombre adoptivo e indique 'adoptado' en la solicitud.",
    ],
    noIdWorkaround:
      "Si no tiene una identificación con foto emitida por el gobierno, puede proporcionar dos formas de identificación secundaria que contengan su nombre (por ejemplo, tarjeta de Seguro Social más una factura de servicios). Un familiar elegible que tenga identificación con foto válida puede presentar la solicitud en su nombre con prueba de su parentesco con el registrante. Si necesita un acta de nacimiento específicamente para obtener una identificación estatal para votar, el cargo se exime bajo Neb. Rev. Stat. § 71-612(9) — indique este propósito en la solicitud. Comuníquese con la Oficina de Registros Vitales al (402) 471-2871 o envíe un correo electrónico a DHHS.VitalRecords@nebraska.gov para orientación sobre documentación alternativa aceptable.",
  },
  NH: {
    officeHours:
      "Vestíbulo: lun–vie 8:30 AM – 3:30 PM ET; Sala de Investigación: lun–vie 8:30 AM – 4:30 PM ET",
    primaryId: [
      "Licencia de conducir válida",
      "Pasaporte válido de EE.UU.",
      "Otra identificación con foto emitida por el gobierno",
    ],
    paymentMethods: [
      "cheque",
      "giro postal",
      "efectivo (solo en persona)",
      "tarjeta de crédito (en línea a través de VitalChek o EB2Gov)",
    ],
    onlineNotes:
      "VitalChek y EB2Gov son los dos proveedores externos en línea autorizados. Ambos cobran cargos adicionales de procesamiento y envío además del cargo de búsqueda de $15. EB2Gov se usa principalmente a través de oficinas locales de secretarios de ciudad/pueblo. Todos los pedidos en línea se envían por correo; la recogida en persona no está disponible para pedidos en línea.",
    mailNotes:
      "Complete el formulario de solicitud VR-201, imprímalo y fírmelo, y envíelo por correo con el pago (cheque o giro postal a nombre de 'Treasurer, State of New Hampshire'), una fotocopia de su identificación con foto emitida por el gobierno, y un sobre con su dirección y franqueo. Solo fondos de EE. UU. El cargo de $15 se cobra independientemente de si se encuentra un registro.",
    mailProcessingTime: "20 días hábiles desde la recepción",
    inPersonLocations:
      "Oficina estatal del DVRA en 9 Ratification Way, Concord, NH. También disponible en las 234 oficinas de secretarios de ciudad y pueblo en todo el estado.",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal y en la mayoría de los secretarios de ciudad/pueblo",
    inPersonNotes:
      "Traiga una identificación con foto válida emitida por el gobierno y pago. Los secretarios de ciudad/pueblo mantienen sus propios registros y pueden emitir copias certificadas. El secretario de la ciudad/pueblo donde ocurrió el nacimiento puede tener el acceso más rápido.",
    phoneNotes:
      "Mismos cargos que los pedidos en línea más cargos adicionales de procesamiento y envío de VitalChek. Disponible las 24 horas, los 7 días de la semana a través del sistema automatizado de VitalChek.",
    requirementsNotes:
      "Los registros vitales de New Hampshire son privados y el acceso está restringido por RSA 5-C:9 y RSA 5-C:102 a aquellos con un 'interés directo y tangible.' Los registros de nacimiento de más de 100 años se consideran de dominio público y están disponibles sin restricción. A partir del 1 de enero de 2005, todos los solicitantes deben presentar identificación positiva con foto.",
    feeWaivers: [
      {
        eligibility:
          "Personas que se registran para votar y necesitan un acta de nacimiento únicamente como prueba de ciudadanía para el registro de votantes",
        howToClaim:
          "El DVRA proporciona copias certificadas gratuitas de registros vitales de NH solo para propósitos de registro de votantes. La copia certificada debe entregarse al funcionario electoral que procesa la solicitud de registro de votantes. Comuníquese con el DVRA o el secretario de su ciudad/pueblo local e indique que el registro se necesita para el registro de votantes.",
      },
      {
        eligibility:
          "La estructura de cargos del secretario de pueblo es más baja que la oficina estatal",
        howToClaim:
          "Bajo RSA 5-C:10, el cargo de búsqueda de $15 se divide entre el secretario de pueblo ($7) y el fondo estatal de registros vitales ($8). Los secretarios de pueblo cobran el mismo cargo legal, pero solicitar localmente evita los cargos de procesamiento de terceros cobrados por proveedores en línea.",
      },
    ],
    specialNotes: [
      "New Hampshire tiene un sistema dual: tanto el DVRA estatal como los 234 secretarios de ciudad/pueblo emiten actas de nacimiento certificadas. Visite al secretario de la ciudad/pueblo donde ocurrió el nacimiento para el servicio más rápido.",
      "El cargo de búsqueda de $15 se cobra independientemente de si se encuentra un registro. Si se encuentra un registro, la primera copia certificada está incluida en el cargo de búsqueda. Copias adicionales del mismo registro al mismo tiempo cuestan $10 cada una.",
      "Los registros de nacimiento de más de 100 años son de dominio público y están disponibles para cualquier persona sin demostrar interés directo y tangible (RSA 5-C:105).",
      "Un acta de nacimiento tardía (para nacimientos no registrados en el momento en que ocurrieron) cuesta $25, que incluye la emisión de una copia certificada.",
      "La Sala de Investigación del DVRA contiene registros genealógicos que datan de 1640 y está abierta al público.",
      "VitalChek y EB2Gov son los únicos proveedores externos en línea autorizados. Ambos cobran cargos adicionales de procesamiento y envío más allá del cargo estatal estándar de $15.",
    ],
    noIdWorkaround:
      "New Hampshire requiere una identificación con foto vigente emitida por el gobierno para todas las solicitudes de registros vitales. Si no tiene identificación con foto, comuníquese con el DVRA al (603) 271-4650 para discutir su situación — pueden aceptar documentación alternativa caso por caso. Puede obtener una identificación con foto gratuita para no conductores del DMV de NH para propósitos de votación (RSA 659:13). Un familiar inmediato elegible con identificación con foto válida puede solicitar el registro en su nombre, ya que los familiares tienen un 'interés directo y tangible' por ley. Para personas en situación de calle, marque 2-1-1 (NH 211) para conectarse con organizaciones comunitarias que ayudan a obtener registros vitales y documentos de identificación.",
  },
  NM: {
    officeHours:
      "lun–vie 8:00 AM – 5:00 PM MT (cerrado fines de semana y días feriados estatales)",
    primaryId: [
      "Licencia de conducir o tarjeta de identificación estatal válida de EE.UU.",
      "Pasaporte de EE.UU. o tarjeta de pasaporte",
      "Identificación militar de EE.UU. (servicio activo, reserva o retirado)",
      "Tarjeta de residente permanente (Formulario I-551, Green Card)",
      "Pasaporte extranjero con visa válida de EE.UU.",
      "Tarjeta de inscripción tribal con foto",
      "Certificado de ciudadanía o naturalización (Formulario N-550 o N-560)",
    ],
    paymentMethods: [
      "giro postal",
      "cheque personal",
      "cheque de caja",
      "tarjeta de crédito (pedidos en línea y por teléfono)",
      "tarjeta de débito (pedidos en línea y por teléfono)",
      "efectivo (solo en persona)",
    ],
    onlineNotes:
      "VitalChek es el proveedor en línea autorizado para la Oficina de Registros Vitales y Estadísticas de Salud de Nuevo México. El procesamiento estándar tarda de 2 a 4 semanas. Opciones de envío acelerado disponibles por un cargo adicional. Se requiere tarjeta de crédito o débito.",
    mailNotes:
      "Incluya el formulario de solicitud completado, pago mediante cheque o giro postal a nombre de 'Vital Records,' y una fotocopia clara del anverso y reverso de su identificación con foto válida emitida por el gobierno. Las solicitudes incompletas serán devueltas.",
    mailProcessingTime: "4–6 semanas",
    inPersonLocations:
      "La oficina estatal de la Oficina de Registros Vitales en 1190 S. St. Francis Drive, Suite S-1092, Santa Fe, NM 87505. Las oficinas de secretarios del condado en los 33 condados también emiten copias certificadas de actas de nacimiento.",
    inPersonProcessingTime:
      "El mismo día en la oficina estatal y en la mayoría de las oficinas de secretarios del condado",
    inPersonNotes:
      "Traiga una identificación con foto válida emitida por el gobierno, el formulario de solicitud completado y pago. En la oficina estatal, se aceptan solicitudes sin cita durante el horario de atención. Las oficinas de secretarios del condado pueden tener diferentes horarios y cargos. Llame con anticipación para confirmar disponibilidad.",
    phoneNotes:
      "Los pedidos por teléfono se procesan a través de VitalChek con cargos de servicio adicionales. Se requiere tarjeta de crédito o débito. El teléfono de la oficina estatal (866) 534-0051 es solo para información, no para pedidos.",
    requirementsNotes:
      "Nuevo México requiere prueba de identidad y prueba de elegibilidad para todas las solicitudes de acta de nacimiento. Para solicitudes por correo, incluya una fotocopia del anverso y reverso de una identificación con foto válida emitida por el gobierno. Para solicitudes en persona, presente la identificación original. Si el solicitante no es el registrante, también se debe proporcionar documentación que pruebe el parentesco (por ejemplo, orden judicial, certificado de matrimonio o acta de nacimiento que muestre la paternidad).",
    feeWaivers: [
      {
        eligibility:
          "Personas que necesitan un acta de nacimiento para registro de votantes o propósitos de votación",
        howToClaim:
          "Solicite una exención de cargo indicando que el acta de nacimiento se necesita para propósitos de identificación de votante. Bajo el Código Electoral de Nuevo México, las personas que necesitan un acta de nacimiento para obtener identificación para votar pueden solicitar una copia gratuita a la Oficina de Registros Vitales.",
      },
      {
        eligibility:
          "Agencias gubernamentales que solicitan registros para propósitos oficiales",
        howToClaim:
          "Las agencias gubernamentales estatales y locales pueden obtener copias certificadas sin cargo cuando el registro se necesita para asuntos gubernamentales oficiales.",
      },
      {
        eligibility:
          "Personas en situación de calle que necesitan documentos de identidad",
        howToClaim:
          "Solicite asistencia a través de un proveedor de servicios para personas sin hogar o agencia de servicios sociales. El Departamento de Servicios Humanos de Nuevo México o una organización asociada puede cubrir el cargo o solicitar una exención en nombre de la persona.",
      },
      {
        eligibility:
          "Veteranos que solicitan registros para propósitos del VA",
        howToClaim:
          "Los registros solicitados para propósitos de la Administración de Veteranos se proporcionan sin cargo según los requisitos federales. Presente la solicitud a través del VA o incluya documentación del propósito relacionado con el VA.",
      },
      {
        eligibility:
          "Víctimas de violencia doméstica que necesitan documentos de identidad para planificación de seguridad",
        howToClaim:
          "Una organización de servicios contra la violencia doméstica o agencia de las fuerzas del orden puede ayudar a obtener una exención de cargo. Comuníquese con la Coalición contra la Violencia Doméstica de Nuevo México o un refugio local para asistencia.",
      },
    ],
    specialNotes: [
      "El registro estatal de nacimientos en Nuevo México comenzó en 1920, aunque el cumplimiento no fue universal hasta finales de la década de 1930. Para nacimientos antes de 1920, comuníquese con el secretario del condado en el condado de nacimiento, ya que algunos condados mantuvieron registros anteriores. Los registros eclesiásticos y bautismales también pueden servir como evidencia de nacimiento.",
      "Nuevo México permite enmiendas a las actas de nacimiento para cambios de marcador de género. Se requiere una orden judicial para cambios legales de nombre y género en un acta de nacimiento. Las solicitudes se procesan a través de la Oficina de Registros Vitales.",
      "La Nación Navajo y las comunidades Pueblo en Nuevo México pueden tener registros de nacimiento separados. Los nacimientos ocurridos en tierras tribales se registran con el estado, pero las oficinas de inscripción tribal (como la Oficina de Registros Vitales e Identificación de la Nación Navajo en Window Rock, AZ) también pueden tener registros relevantes.",
      "Nuevo México emite documentos tanto de formato corto (certificación de nacimiento) como de formato largo (copia certificada del acta de nacimiento completa). Muchas agencias requieren la versión de formato largo, así que solicite una 'copia certificada' para recibir el documento completo.",
      "Las oficinas de secretarios del condado en los 33 condados pueden emitir copias certificadas de actas de nacimiento que ocurrieron en su condado. Los cargos en las oficinas del condado pueden diferir del cargo de la oficina estatal. Comuníquese directamente con el secretario del condado para cargos y horarios actuales.",
      "Para nacimientos que nunca fueron registrados, Nuevo México permite el registro tardío de nacimiento. Se debe presentar una petición ante el tribunal de distrito, respaldada por evidencia documental del nacimiento (por ejemplo, registros bautismales, registros hospitalarios, registros del censo, registros escolares). Consulte NMSA 1978, Sección 24-14-15.",
    ],
    noIdWorkaround:
      "Si no tiene una identificación con foto emitida por el gobierno, puede presentar una declaración jurada de identidad notariada con su solicitud. Esto requiere que un notario público verifique su identidad a través de conocimiento personal u otros medios. Alternativamente, un familiar elegible que tenga identificación con foto válida puede presentar la solicitud en su nombre con prueba de su parentesco con el registrante (por ejemplo, su propia acta de nacimiento, certificado de matrimonio u orden judicial). Para personas en situación de calle, comuníquese con el Departamento de Servicios Humanos de Nuevo México o un proveedor local de servicios para personas sin hogar, quienes pueden solicitar el certificado en su nombre. Las agencias gubernamentales y organizaciones de servicios sociales también pueden solicitar registros para propósitos oficiales bajo NMSA 1978, Sección 24-14-27.",
  },
};
