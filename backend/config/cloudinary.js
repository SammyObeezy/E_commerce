import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {
    try {
        // Configure Cloudinary
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY,
        });

        // Ping Cloudinary to check the connection
        const result = await cloudinary.api.ping();
        if (result.status === 'ok') {
            console.log('Cloudinary connected successfully!');
        } else {
            console.log('Failed to connect to Cloudinary:', result);
        }
    } catch (error) {
        console.error('Error connecting to Cloudinary:', error);
    }
}

export default connectCloudinary;
