// utils/downloadBrochure.js
export async function downloadCompanyBrochure() {
  try {
    const listRes = await fetch('https://srv733641.hstgr.cloud:22443/view-brochures/');
    if (!listRes.ok) throw new Error('Failed to fetch brochure list');
    
    const json = await listRes.json();
    const items = json?.data ?? [];
    const target = items.find(
      (i) => String(i.title).trim().toLowerCase() === 'company broucher'
    );
    
    if (!target?.file_url) {
      throw new Error('Company brochure not found');
    }

    // Create download link with download attribute
    const a = document.createElement('a');
    a.href = target.file_url;
    a.download = 'Company-Brochure.pdf'; // Forces download instead of preview
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
  } catch (error) {
    console.error('Download failed:', error);
    throw error;
  }
}
