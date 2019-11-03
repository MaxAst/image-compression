const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

const compressImages = async () => {
	const files = await imagemin(['./uncompressed/*.{jpg,png}'], {
		destination: './compressed',
		plugins: [
			imageminMozjpeg({ quality: 25 }),
			imageminPngquant({
				quality: [0.6, 0.8]
			})
		]
	})

	console.log(files)
	//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
}

compressImages()
