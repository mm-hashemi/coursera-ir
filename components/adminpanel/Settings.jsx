import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Settings() {
  // State variables to manage banner and logo uploads
  const [banner, setBanner] = useState(null);
  const [bannerDescription, setBannerDescription] = useState('');
  const [companiesLogos, setCompaniesLogos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch existing banner and logos on page load
  useEffect(() => {
    async function fetchSettings() {
      try {
        const bannerRes = await axios.get('http://127.0.0.1:8000/api/hero-banner/');
        const logosRes = await axios.get('http://127.0.0.1:8000/api/companies-logo/');
        setBanner(bannerRes.data.banner);
        setBannerDescription(bannerRes.data.description);
        setCompaniesLogos(logosRes.data);
      } catch (err) {
        console.error('Error fetching settings:', err);
      }
    }
    fetchSettings();
  }, []);

  // Handle banner upload
  const handleBannerUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('banner', e.target.banner.files[0]);
    formData.append('description', bannerDescription);

    setLoading(true);

    try {
      await axios.put('http://127.0.0.1:8000/api/hero-banner/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Banner updated successfully!');
      setLoading(false);
    } catch (err) {
      console.error('Error updating banner:', err);
      alert('Error updating banner.');
      setLoading(false);
    }
  };

  // Handle logo upload
  const handleLogoUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < e.target.logos.files.length; i++) {
      formData.append('logoImage', e.target.logos.files[i]);
    }

    setLoading(true);

    try {
      await axios.put('http://127.0.0.1:8000/api/companies-logo/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Logos updated successfully!');
      setLoading(false);
    } catch (err) {
      console.error('Error updating logos:', err);
      alert('Error updating logos.');
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Settings Panel</h1>

      {/* Hero Banner Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hero Banner</h2>
        {banner && <img src={banner} alt="Hero Banner" className="w-full h-48 object-cover mb-2" />}
        <form onSubmit={handleBannerUpload}>
          <div className="mb-4">
            <label htmlFor="banner-description" className="block text-sm font-medium mb-2">
              Banner Description:
            </label>
            <input
              type="text"
              id="banner-description"
              value={bannerDescription}
              onChange={(e) => setBannerDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter description for the banner"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="banner" className="block text-sm font-medium mb-2">Upload New Banner Image:</label>
            <input type="file" id="banner" name="banner" className="w-full border border-gray-300 p-2" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md" disabled={loading}>
            {loading ? 'Uploading...' : 'Upload Banner'}
          </button>
        </form>
      </div>

      {/* Company Logos Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Company Logos</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {companiesLogos.length > 0 ? (
            companiesLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={logo.logoImage} alt={`Company ${index + 1}`} className="w-24 h-24 object-contain" />
              </div>
            ))
          ) : (
            <p>No logos found.</p>
          )}
        </div>
        <form onSubmit={handleLogoUpload}>
          <div className="mb-4">
            <label htmlFor="logos" className="block text-sm font-medium mb-2">Upload New Logos:</label>
            <input
              type="file"
              id="logos"
              name="logos"
              multiple
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md" disabled={loading}>
            {loading ? 'Uploading...' : 'Upload Logos'}
          </button>
        </form>
      </div>
    </div>
  );
}
