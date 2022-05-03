import cloudinaryApi from '@/api/cloudinaryApi'

const uploadImage = async (file) => {
    if (!file) return

    try {
        const formData = new FormData()
        formData.append('upload_preset', 'bakiury-preset')
        formData.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/bakiury/image/upload'
        const { data } = await cloudinaryApi.post(url, formData)

        console.log(data)

        return data.secure_url

    } catch (error) {
        console.error('Error loading the image, check logs')
        console.log(error)
        return null
    }
}

export default uploadImage