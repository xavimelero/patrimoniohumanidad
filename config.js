var config = {
    style: 'mapbox://styles/xavimelero/cmbf9m0x1006001r0e7zlb5gl',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoieGF2aW1lbGVybyIsImEiOiJjbWF0dDcwczgwNzE2MmtzNXhqd2hyc3RwIn0.chYnlBhWaLT5UqcPEB1H6g',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'PATRIMONIOS DE LA HUMANIDAD EN ESPAÑA',
    subtitle: 'Descubre los espacios reconocidos por la UNESCO',
    byline: 'Por Javier Melero',
    footer: 'Fuente: World Heritage Foundation (UNESCO) <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Los 50 patrimonios mundiales de España',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/1199px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg?20161002141913',
            description: `La UNESCO reconoció en 1984 la Alhambra de Granada como patrimonio mundial. Desde entonces ha extendido esta consideración a 50 bienes. Consulta la lista en la tabla y viaja por este mapa interactivo para descubrirlos. 
<iframe src='https://flo.uri.sh/visualisation/23588946/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>`, 
            location: {
                center: [-3.59444000066237, 37.1766700012231],
                zoom: 3.04,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Alhambra, Generalife y Albaicín de Granada',
            image: 'https://whc.unesco.org/uploads/thumbs/site_0314_0022-594-0-20151105153009.jpg',
            description: 'Situados en dos colinas adyacentes, el Albaicín y la Alhambra forman el núcleo medieval de Granada que domina la ciudad moderna. En la parte este de la fortaleza y residencia real de la Alhambra se hallan los maravillosos jardines del Generalife, casa de campo de los emires que dominaron esta parte de España en los siglos XIII y XV. El barrio del Albaicín conserva un rico conjunto de construcciones hispanomusulmanas armoniosamente fusionadas con la arquitectura tradicional andaluza.',
            location: {
                center: [-3.59444000066237, 37.1766700012231],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Centro Histórico de Córdoba',
            image: 'https://whc.unesco.org/uploads/thumbs/site_0313_0001-594-0-20090929160107.jpg',
            description: 'El período de gloria de Córdoba comenzó en el siglo VIII, después de su conquista por los musulmanes, cuando se construyeron unas 300 mezquitas e innumerables palacios y edificios públicos. El esplendor de la ciudad llegó entonces a rivalizar con Constantinopla, Damasco y Bagdad. En el siglo XIII, en tiempos de Fernando III el Santo, se transformó la gran mezquita en catedral cristiana y se construyeron nuevos edificios defensivos como la Torre Fortaleza de la Calahorra y el Alcázar de los Reyes Cristianos.',
            location: {
                center: [-4.7797222223555,
          37.8791944406963],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Catedral de Burgos',
            image: 'https://whc.unesco.org/uploads/thumbs/site_0316_0011-594-0-20151105153056.jpg',
            description: 'La construcción de la Catedral de Santa María de Burgos comenzó en el siglo XIII, al mismo tiempo que la de las grandes catedrales francesas de la región de París, y finalizó en los siglos XV y XVI. Su espléndida arquitectura y la colección excepcional de obras maestras que alberga (pinturas, sitiales del coro, retablos, tumbas y vidrieras) son un verdadero compendio de la historia del arte gótico.',
            location: {
                center: [-3.70481388844625, 42.3405277787191],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Monasterio y Real Sitio de El Escorial',
            image: 'https://whc.unesco.org/uploads/thumbs/site_0318_0001-594-0-20151104155711.jpg',
            description: 'Construido a finales del siglo XVI con arreglo a un trazado en forma de parrilla (en memoria del suplicio infligido al mártir San Lorenzo con este instrumento) el Monasterio de El Escorial se yergue en un paisaje de Castilla de singular belleza. La austeridad de su estilo rompió con las tendencias arquitectónicas imperantes, ejerciendo posteriormente una acusada influencia en la arquitectura española durante más de medio siglo. Lugar de retiro del rey místico Felipe II en un principio, el monasterio fue en los últimos años de su reinado el centro del poder político de este monarca, el más poderoso de su época.',
            location: {
                center: [-4.12641666775564, 40.5817500003108],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Obra de Gaudí',
            image: 'https://whc.unesco.org/uploads/thumbs/site_0320_0001-594-0-20250108125021.jpg',
            description: 'Siete edificios construidos por el arquitecto Antoni Gaudí (1852–1926) en Barcelona o sus proximidades. Son: Parque Güell, Palacio Güell, Casa Milá, Casa Vicens, la obra de Gaudí en la fachada de la Natividad y la cripta de la Sagrada Familia, la Casa Batlló y la cripta de la Colonia Güell',
            location: {
                center: [2.15297199955274, 41.4133800007724],
                 zoom: 8.5,
                pitch: 60,
                bearing: -30.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Cueva de Altamira y Arte Rupestre Paleolítico de la Cornisa Cantábrica',
            image: 'https://whc.unesco.org/uploads/thumbs/site_0310_0001-594-0-20090924132936.jpg',
            description: 'Diecisiete grutas ornamentadas de la época paleolítica se agregaron a la Lista como ampliación del sitio de la cueva de Altamira, inscrito en 2005. Este bien aparece en la Lista con el nombre de Cueva de Altamira y arte rupestre paleolítico del norte de España. El conjunto es representativo del apogeo del arte rupestre paleolítico que se desarrolló en toda Europa, desde los Montes Urales hasta la Península Ibérica, entre los años 35.000 y 11.000 a.C.',
            location: {
                center: [-4.11616666652099, 43.3825277805434],
                zoom: 4,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Ciudad Vieja de Segovia y su Acueducto',
            image: 'https://whc.unesco.org/uploads/thumbs/site_0311_0001-594-0-20090708013648.jpg',
            description: 'Edificado probablemente hacia el año 50 d.C., el acueducto romano de Segovia se conserva excepcionalmente intacto. Esta imponente construcción de doble arcada se inserta en el marco magnífico de la ciudad histórica, donde se pueden admirar otros soberbios monumentos como el Alcázar, cuya construcción se inició en el siglo XI, y la catedral gótica del siglo XVI.',
            location: {
                center: [-4.11675000031881, 40.9484722210135],
                zoom: 3.04,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Monumentos de Oviedo y del reino de Asturias',
            image: 'https://whc.unesco.org/uploads/thumbs/site_0312_0001-594-0-20090924133410.jpg',
            description: 'En el siglo IX, el pequeño reino de Asturias mantuvo viva la llama del cristianismo en la Península Ibérica. En su territorio nació un estilo innovador de arquitectura prerrománica que desempeñaría, más tarde, un importante papel en el desarrollo de la arquitectura religiosa de toda la Península. Emplazadas en la capital asturiana, Oviedo, y en sus alrededores, las iglesias de Santa María del Naranco, San Miguel de Lillo, Santa Cristina de Lena, San Julián de los Prados y la Cámara Santa de la catedral de San Salvador son los edificios más representativos de ese estilo. La notable obra de ingeniería hidráulica conocida por el nombre de La Foncalada forma también parte del sitio.',
            location: {
                center: [-5.84303000037986, 43.3626200012968],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Ciudad Vieja de Santiago de Compostela.',
            image: 'https://whc.unesco.org/uploads/thumbs/site_0347_0006-594-0-20130221170250.jpg',
            description: 'Sede de uno de los más célebres lugares de peregrinación de la cristiandad y símbolo de la lucha de los cristianos españoles contra el Islam, esta ciudad del noroeste de España fue arrasada por los musulmanes a finales del siglo X. Totalmente reconstruida en el siglo siguiente, Santiago de Compostela es una de las zonas urbanas de mayor belleza del mundo, realzada por sus monumentos románicos, góticos y barrocos. Los más antiguos se concentran en torno a la catedral, tumba del apóstol San Santiago, a la que se accede por el magnífico Pórtico de la Gloria.',
            location: {
                center: [-8.5446799999023, 42.8807600006207],
                zoom: 4,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
