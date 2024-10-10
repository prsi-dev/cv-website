'use client';

import { Button } from '@/components/ui/button';

export default function DownloadPDFButton() {
  const downloadPDF = () => {
    console.log('download pdf');

    fetch('/api/download-cv') // Ensure this endpoint matches your server setup
      .then((response) => response.blob())
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'pedro-rodriguez-cv.pdf'; // Change this to the desired file name
        alink.click();
      })
      .catch((error) => console.error('Error downloading the file:', error));
  };

  return (
    <Button asChild onClick={() => downloadPDF()} aria-label='Download PDF'>
      <p className='text-secondary'>Download PDF</p>
    </Button>
  );
}
