import axios from "axios";

export const uploadInvoiceThumbnail = async (imageData) => {
    const formData = new FormData();
    formData.append('file', imageData);
    formData.append('upload_preset', 'invoice_thumbnail');
    formData.append('cloud_name', 'dmsa6cet8'); // Replace with your Cloudinary cloud name}
    const response = await axios.post(`https://api.cloudinary.com/v1_1/dmsa6cet8/image/upload`, formData);
    return response.data.secure_url;
}