import jsPDF from 'jspdf';

export const generateRoutinePDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Background
  doc.setFillColor(11, 11, 11);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Tactical Border
  doc.setDrawColor(118, 132, 85); // Olive color
  doc.setLineWidth(0.8);
  doc.rect(8, 8, pageWidth - 16, pageHeight - 16);

  // Corner accents
  doc.setLineWidth(2);
  const cornerSize = 6;
  // Top-left
  doc.line(8, 8, 8 + cornerSize, 8);
  doc.line(8, 8, 8, 8 + cornerSize);
  // Top-right
  doc.line(pageWidth - 8, 8, pageWidth - 8 - cornerSize, 8);
  doc.line(pageWidth - 8, 8, pageWidth - 8, 8 + cornerSize);
  // Bottom-left
  doc.line(8, pageHeight - 8, 8 + cornerSize, pageHeight - 8);
  doc.line(8, pageHeight - 8, 8, pageHeight - 8 - cornerSize);
  // Bottom-right
  doc.line(pageWidth - 8, pageHeight - 8, pageWidth - 8 - cornerSize, pageHeight - 8);
  doc.line(pageWidth - 8, pageHeight - 8, pageWidth - 8, pageHeight - 8 - cornerSize);

  // Header Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(242, 242, 242);
  doc.text('THE FOCUS PLAN', pageWidth / 2, 22, { align: 'center' });

  doc.setFontSize(11);
  doc.setTextColor(118, 132, 85);
  doc.text('// PROTOCOLO OFICIAL • RUTINA GRATIS DEL MES', pageWidth / 2, 29, { align: 'center' });

  doc.setDrawColor(118, 132, 85);
  doc.setLineWidth(0.4);
  doc.line(16, 33, pageWidth - 16, 33);

  // Meta info box
  doc.setFillColor(20, 22, 18);
  doc.rect(16, 37, pageWidth - 32, 14, 'F');
  doc.setDrawColor(118, 132, 85);
  doc.setLineWidth(0.3);
  doc.rect(16, 37, pageWidth - 32, 14, 'D');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(118, 132, 85);
  doc.text('OBJETIVO:', 20, 43);
  doc.setTextColor(242, 242, 242);
  doc.setFont('helvetica', 'normal');
  doc.text('Fuerza, Quema de Grasa & Resistencia Táctica', 40, 43);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(118, 132, 85);
  doc.text('DURACIÓN:', 20, 48);
  doc.setTextColor(242, 242, 242);
  doc.setFont('helvetica', 'normal');
  doc.text('4 Semanas (Adaptable Gimnasio / Casa)', 40, 48);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(118, 132, 85);
  doc.text('COACH:', 125, 43);
  doc.setTextColor(242, 242, 242);
  doc.setFont('helvetica', 'normal');
  doc.text('Héctor / Focus Box & Fitness', 142, 43);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(118, 132, 85);
  doc.text('SOPORTE WA:', 125, 48);
  doc.setTextColor(242, 242, 242);
  doc.setFont('helvetica', 'normal');
  doc.text('+52 33 1804 2910', 150, 48);

  // WARM-UP SECTION
  let y = 58;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(118, 132, 85);
  doc.text('1. ACTIVACIÓN & MOVILIDAD ARTICULAR (8-10 min)', 16, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(210, 210, 210);
  const warmupLines = [
    '• Movilidad escapular y torácica con banda / palo de escoba (2 rondas x 12 reps)',
    '• 90/90 de cadera + World Greatest Stretch (5 reps x lado con pausa de 3s)',
    '• Activación glútea y core: Puente de glúteo con banda (15 reps) + Plancha isométrica (30s)'
  ];
  warmupLines.forEach(line => {
    doc.text(line, 20, y);
    y += 4.5;
  });

  // DAY 1
  y += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(118, 132, 85);
  doc.text('2. DÍA 1: TREN SUPERIOR & CORE TÁCTICO (Fuerza + Hipertrofia)', 16, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(210, 210, 210);
  const day1 = [
    '• A1. Press Militar con mancuernas o barra: 4 series x 8-10 reps (RIR 2, descanso 90s)',
    '• A2. Remo con mancuerna o en máquina: 4 series x 10-12 reps (énfasis en pausa 1s)',
    '• B1. Push-ups estrictos con pausa en el suelo: 3 series al fallo técnico (o 12-15 reps)',
    '• B2. Jalón al pecho o dominadas asistidas: 3 series x 10-12 reps',
    '• C1. Elevaciones laterales controladas: 3 series x 15 reps + Drop set al fallo',
    '• FINISHER CORE: 3 rondas sin descanso: 20 Hollow Rocks + 30s Plancha lateral x lado'
  ];
  day1.forEach(line => {
    doc.text(line, 20, y);
    y += 4.5;
  });

  // DAY 2
  y += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(118, 132, 85);
  doc.text('3. DÍA 2: ACONDICIONAMIENTO HYROX & METCON (Quema de Grasa)', 16, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(210, 210, 210);
  const day2 = [
    '• EMOM 20 min (Cada minuto en el minuto):',
    '   - Min 1: 15 Wall Balls (6kg chicas / 9kg chicos)',
    '   - Min 2: 12 Burpees over dumbbell',
    '   - Min 3: 15-20 Calorías SkiErg / Remo o 100m sprint en caminadora',
    '   - Min 4: 50m Farmer Carry con mancuernas pesadas',
    '   - Min 5: Descanso activo / respiración nasal',
    '• Realizar 4 vueltas completas manteniendo ritmo constante.'
  ];
  day2.forEach(line => {
    doc.text(line, 20, y);
    y += 4.5;
  });

  // DAY 3
  y += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(118, 132, 85);
  doc.text('4. DÍA 3: TREN INFERIOR, GLÚTEO & POTENCIA', 16, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(210, 210, 210);
  const day3 = [
    '• A1. Sentadilla Goblet pesada o Sentadilla con barra: 4 series x 8-10 reps (3s de bajada)',
    '• B1. Peso Muerto Rumano (RDL) con mancuernas: 4 series x 10-12 reps (isquios y glúteo)',
    '• B2. Zancadas búlgaras: 3 series x 10 reps por pierna (foco en estabilidad)',
    '• C1. Hip Thrust con barra o mancuerna: 3 series x 12 reps con contracción arriba de 2s',
    '• C2. Elevación de talones (pantorrilla) en escalón: 3 series x 20 reps'
  ];
  day3.forEach(line => {
    doc.text(line, 20, y);
    y += 4.5;
  });

  // TIPS & PERSONALIZATION NOTICE
  y += 3;
  doc.setFillColor(25, 28, 22);
  doc.rect(16, y, pageWidth - 32, 28, 'F');
  doc.setDrawColor(118, 132, 85);
  doc.setLineWidth(0.4);
  doc.rect(16, y, pageWidth - 32, 28, 'D');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(118, 132, 85);
  doc.text('⚡ ¿QUIERES MAXIMIZAR TUS RESULTADOS AL 100%?', 20, y + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(240, 240, 240);
  const promoNotice = [
    'Esta rutina es una base general. Si quieres un plan 100% adaptado a tus horarios, lesiones previa,',
    'objetivos de recomposición corporal (bajar grasa y subir músculo) o preparación específica para HYROX,',
    'activa tu Plan Personalizado con seguimiento diario vía WhatsApp y Stenfit App.'
  ];
  promoNotice.forEach((line, i) => {
    doc.text(line, 20, y + 12 + (i * 4.2));
  });

  // Footer banner
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(118, 132, 85);
  doc.text('FOCUS BOX & FITNESS // GUADALAJARA & ENTRENAMIENTO EN LÍNEA // THEFOCUSPLAN.COM', pageWidth / 2, pageHeight - 12, { align: 'center' });

  // Save the document
  doc.save('Rutina-Gratis-The-Focus-Plan.pdf');
};
