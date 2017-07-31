module.exports = function ( grunt ) {
	grunt.initConfig( {
		//converte images to webp format
		cwebp: {
			images: {
				options: {
					arguments: [ '-q', 50 ],
					concurrency: 20
				},
				files: [
					{
						src: [ 'images_src/*.{jpeg,jpg,gif,png}' ]
					}
	 ]
			}
		},
		//create images with different resolutions and optmize them
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [ {
						width: 420,
						name: 'small',
					}, {
						width: 720,
						name: 'medium'
					}, {
						width: 1080,
						name: 'large'
					} ]
				},
				files: [ {
					expand: true,
					src: [ '*.{jpeg,jpg,gif,png,webp}' ],
					cwd: 'images_src/',
					dest: 'images/'
				} ]
			}
		},
		//copy svg images from images_src folder to images folder
		copy: {
			dev: {
				files: [ {
					expand: true,
					src: [ 'images_src/*.svg' ],
					dest: 'images/',
					flatten: true,
				} ]
			},
		},
	} );
	grunt.loadNpmTasks( 'grunt-webp-compress' );
	grunt.loadNpmTasks( 'grunt-responsive-images' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.registerTask( 'default', [ 'copy', 'cwebp', 'responsive_images' ] );
};
