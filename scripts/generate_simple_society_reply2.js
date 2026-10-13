const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType
} = require("docx");

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };
const headerShading = { fill: "F0F4F8", type: ShadingType.CLEAR };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "1A365D" },
        paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "2B6CB0" },
        paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 1 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Hi Cooper,", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Good to hear the quote and fabric breakdown were what you needed.", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "We will have the washed cotton stripe and our full fabric range ready for your July visit \u2014 including higher thread count options, silk/cotton blends, Tencel, bamboo blends, and our standard hotel-grade percales and sateens. You can compare everything side by side with your designs.", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "1. Factory Visit Duration", size: 24, bold: true, color: "2B6CB0" })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Set aside 2\u20133 hours total:", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "\u2022  Factory tour (weaving, cutting, sewing, QC): ~1 hour", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "\u2022  Fabric swatch viewing and hands-on comparison: ~1 hour", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "\u2022  Discussion / Q&A on custom specs, MOQ, lead times: ~30\u201345 minutes", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "If you want to keep it tighter, 2 hours covers the essentials. But 3 hours gives room to go deeper on anything that catches your eye.", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "2. Shipping to Sydney", size: 24, bold: true, color: "2B6CB0" })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "We work on FOB terms (Nantong or Shanghai). This means:", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "\u2022  You book the vessel and nominate your forwarder. We deliver the goods to the port and handle export customs clearance on our side.", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "\u2022  Once the goods are loaded on board, title and risk transfer to you. From that point, freight, insurance, and import clearance are yours to coordinate with your Sydney 3PL.", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "\u2022  We provide the full shipping document package (commercial invoice, packing list, bill of lading) on time so your forwarder has everything they need.", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "If you do not have a regular AU forwarder yet, we can recommend a few that we have worked with before, but the booking and freight arrangement stays on your side.", size: 22 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "3. Starting Custom Work", size: 24, bold: true, color: "2B6CB0" })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Reference samples + Pantone TCX cotton swatch references are enough to get started.", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "We recommend bringing the following to your visit:", size: 22 })]
      }),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [3000, 6026],
        rows: [
          new TableRow({
            children: [
              new TableCell({ borders, shading: headerShading, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "What to Bring", size: 20, bold: true })] })] }),
              new TableCell({ borders, shading: headerShading, width: { size: 6026, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "Why It Helps", size: 20, bold: true })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "Reference samples", size: 20, bold: true })] })] }),
              new TableCell({ borders, width: { size: 6026, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "We match construction, weight, hand feel, and finishing. A physical sample is the fastest way to align.", size: 20 })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "Pantone TCX cotton swatch book", size: 20, bold: true })] })] }),
              new TableCell({ borders, width: { size: 6026, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "We dye-to-match against TCX cotton standards for the most accurate color reproduction on fabric. TPX (paper) references are also usable but TCX is preferred.", size: 20 })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "Target price range", size: 20, bold: true })] })] }),
              new TableCell({ borders, width: { size: 6026, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "Helps us recommend the right fabric grade and construction without going over budget.", size: 20 })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders, width: { size: 3000, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "Design sketches / tech pack", size: 20, bold: true })] })] }),
              new TableCell({ borders, width: { size: 6026, type: WidthType.DXA }, margins: cellMargins,
                children: [new Paragraph({ children: [new TextRun({ text: "Not required to start, but speeds up sampling. If you have measurements and construction details, we can jump straight to a first counter sample.", size: 20 })] })] }),
            ]
          }),
        ]
      }),

      new Paragraph({ spacing: { after: 80 }, children: [new TextRun("")] }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "If you are bringing reference samples, we can examine them at the factory and give you a more precise quote for the custom pieces on the spot.", size: 22 })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Let us know your travel dates once they are locked in. We will block the time and have everything laid out and ready.", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "Looking forward to meeting you in Nantong.", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Cheers,", size: 22 })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "Nantong Linens Team", size: 22 })]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/nantongribao/Desktop/The-Simple-Society-Reply-July-Visit.docx", buffer);
  console.log("OK: " + buffer.length + " bytes");
});
