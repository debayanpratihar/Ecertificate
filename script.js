function generateCertificate(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const name = document.getElementById('name').value;
  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;

  // Load the PNG image
  const image = new Image();
  image.src = 'certificate.png';

  // Wait for the image to load
  image.onload = function() {
    // Set up the PDF document
    const doc = new jsPDF();
    const width = doc.internal.pageSize.width;
    const height = doc.internal.pageSize.height;

    // Calculate the scaling factor to maintain the aspect ratio of the image
    const scaleFactor = Math.min(width / image.width, height / image.height);

    // Calculate the dimensions of the scaled image
    const scaledWidth = image.width * scaleFactor;
    const scaledHeight = image.height * scaleFactor;

    // Add the image to the PDF document with its original size
    doc.addImage(image, 'PNG', (width - scaledWidth) / 2, (height - scaledHeight) / 2, scaledWidth, scaledHeight);

    // Add the text to the PDF document
    
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.setFont('Blackadder ITC', 'bold');
    doc.text(`This certificate is awarded to`,15, 145);
    doc.setFontSize(25);
    doc.setFont('Viner Hand ITC', 'bold');
    doc.setTextColor(40,61,126);
    doc.text(`${name}`,15, 155);
    doc.setFontSize(14);
    doc.setFont('Blackadder ITC', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(`for attending ${eventName} on ${eventDate}.`, 15, 165);

    // Save the PDF document with the user's name and event name
    doc.save(`${name}_${eventName}.pdf`);
  };
}
