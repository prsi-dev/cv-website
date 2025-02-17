'use client';

import { Button } from '@/components/ui/button';

export default function DownloadPDFButton() {
  const downloadPDF = () => {
    fetch('/api/download-cv')
      .then(response => response.blob())
      .then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'pedro-rodriguez-cv.pdf';
        alink.click();
      })
      .catch(error => console.error('Error downloading the file:', error));
  };

  return (
    <Button asChild className='cursor-pointer' onClick={() => downloadPDF()} aria-label='Download PDF'>
      <p className='text-secondary'>Download PDF</p>
    </Button>
  );
}
