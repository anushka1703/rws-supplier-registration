import jsPDF from 'jspdf';

function camelCaseToWords(str) {
    const result = str
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')  
        .replace(/([a-z])([A-Z])/g, '$1 $2');     
    
    return result.charAt(0).toUpperCase() + result.slice(1);
}

const downloadFormDataAsPDF = (formData) => {
  const doc = new jsPDF();
  let yOffset = 10;
  const lineHeight = 10; 
  const pageHeight = doc.internal.pageSize.height; 

  for (var [tab, sections] of Object.entries(formData)) {
    tab = camelCaseToWords(tab);
    doc.setFontSize(16);
    doc.setTextColor(0, 123, 255);
    doc.text(`Tab: ${tab}`, 10, yOffset);
    doc.setTextColor(0);
    yOffset += lineHeight;

    for ( var [section, fields] of Object.entries(sections)) {
        section = camelCaseToWords(section);
      doc.setFontSize(14);
      doc.text(`Section: ${section}`, 10, yOffset);
      yOffset += lineHeight;

      for ( var [field, value] of Object.entries(fields)) {
        field = camelCaseToWords(field);
        doc.setFontSize(12);

        if (typeof value === 'object' && value !== null && value.type === 'application/pdf') {
          // If the field is a PDF file, show the file name
          doc.text(`${field}: PDF File - ${value.name}`, 20, yOffset);
        } else {
          // Otherwise, show the field value
          doc.text(`${field}: ${value || 'N/A'}`, 20, yOffset);
        }

        yOffset += lineHeight;

        if (yOffset + lineHeight > pageHeight) {
          doc.addPage();
          yOffset = 10;
        }
      }

      doc.line(10, yOffset, 200, yOffset)
      
      yOffset += lineHeight;

      if (yOffset + lineHeight > pageHeight) {
        doc.addPage();
        yOffset = 10;
      }
    }


    yOffset += lineHeight;

    if (yOffset + lineHeight > pageHeight) {
      doc.addPage();
      yOffset = 10;
    }
  }

  // Save the PDF
  doc.save('form-data.pdf');
};

export default downloadFormDataAsPDF;
