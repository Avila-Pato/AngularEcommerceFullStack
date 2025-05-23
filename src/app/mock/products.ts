
export const PRODUCTS = [
  {
    id: '1',
    name: 'Laptop Gamer Razer Blade 15',
    description: `<p class="mb-2">La máquina definitiva para gaming y creación de contenido. Diseñada con chasis de aluminio CNC y sistema de refrigeración vapor chamber.</p>
                  <ul class="list-disc pl-6">
                    <li><b>Procesador Intel Core i7-12800H</b> de 14 núcleos (4.8GHz Turbo)</li>
                    <li><b>GPU NVIDIA RTX 3080 Ti</b> con 16GB GDDR6 dedicados</li>
                    <li>Pantalla QHD 2560x1440 de 15.6" con <b>240Hz</b> y color 100% DCI-P3</li>
                    <li>32GB RAM DDR5 4800MHz (ampliable hasta 64GB)</li>
                    <li>Almacenamiento ultrarrápido: 1TB SSD PCIe 4.0 (2 slots M.2 disponibles)</li>
                    <li>Conectividad completa: Thunderbolt 4, USB-C, HDMI 2.1, Wi-Fi 6E</li>
                  </ul>`,
    urlImage: '/assets/images/gaming-laptop.jpg',
    reviews: 245,
    price: 1899.99,
    previusPrice: 2199.99
  },
  {
    id: '2',
    name: 'Audífonos Sony WH-1000XM5',
    description: `<p class="mb-2">Revolucionarios audífonos con cancelación de ruido líder en su clase. Ideal para viajes y oficina.</p>
                  <ul class="list-disc pl-6">
                    <li><b>8 micrófonos</b> para cancelación de ruido adaptativa inteligente</li>
                    <li>Control de sonido ambiental con <b>30 niveles ajustables</b></li>
                    <li>Autonomía de <b>40 horas</b> con NC activo (carga rápida en 3 minutos = 3 horas)</li>
                    <li>Drivers de 30mm con soporte para <b>LDAC</b> y Hi-Res Audio</li>
                    <li>Diseño ergonómico con almohadillas de piel suave premium</li>
                    <li>Asistente de voz integrado con manos libres y control táctil intuitivo</li>
                  </ul>`,
    urlImage: '/assets/images/sony-headphones.jpg',
    reviews: 367,
    price: 349.99,
    previusPrice: null
  },
  {
    id: '3',
    name: 'Monitor Curvo Samsung Odyssey G7',
    description: `<p class="mb-2">Monitor gaming curvo con tecnología Quantum Dot para colores increíblemente vivos.</p>
                  <ul class="list-disc pl-6">
                    <li>Pantalla <b>32" QLED</b> 2560x1440 con curvatura 1000R inmersiva</li>
                    <li>Tasa de refresco <b>240Hz</b> y tiempo de respuesta 1ms GTG</li>
                    <li>Soporte para <b>G-Sync</b> y FreeSync Premium Pro</li>
                    <li>Brillo HDR600 con 2500:1 de relación de contraste</li>
                    <li>Conexión dual HDMI 2.1 + DisplayPort 1.4</li>
                    <li>Diseño futurista con RGB Core Lighting y soporte VESA</li>
                  </ul>`,
    urlImage: '/assets/images/gaming-monitor.jpg',
    reviews: 189,
    price: 699.99,
    previusPrice: 799.99
  },
  {
    id: '4',
    name: 'Teclado Mecánico Corsair K100 RGB',
    description: `<p class="mb-2">El teclado definitivo para gaming profesional y productividad.</p>
                  <ul class="list-disc pl-6">
                    <li>Interruptores <b>OPX RGB</b> con actuación ultra rápida de 1.0mm</li>
                    <li>Panel táctil dinámico <b>iCUE Nexus</b> integrado</li>
                    <li>Construcción en aluminio anodizado con reposamuñecas magnético</li>
                    <li>Iluminación RGB <b>AXON Hyper-Processing</b> (4000Hz polling rate)</li>
                    <li>6 teclas macro dedicadas y perfil de aluminio aeronáutico</li>
                    <li>Compatibilidad con <b>Elgato Stream Deck</b> integrada</li>
                  </ul>`,
    urlImage: '/assets/images/mechanical-keyboard.jpg',
    reviews: 432,
    price: 199.99,
    previusPrice: 249.99
  },
  {
    id: '5',
    name: 'Consola PlayStation 5 Edición Digital',
    description: `<p class="mb-2">Potencia de nueva generación con almacenamiento ultra rápido y retrocompatibilidad.</p>
                  <ul class="list-disc pl-6">
                    <li><b>CPU AMD Zen 2</b> personalizada de 8 núcleos a 3.5GHz</li>
                    <li><b>GPU RDNA 2</b> con 10.28 TFLOPS y trazado de rayos</li>
                    <li>SSD NVMe de 825GB con velocidad de 5.5GB/s</li>
                    <li>Soporte para <b>4K 120Hz</b> y salida 8K</li>
                    <li>Tempest 3D AudioTech y DualSense con retroceso háptico</li>
                    <li>Incluye juego preinstalado <b>Astro's Playroom</b></li>
                  </ul>`,
    urlImage: '/assets/images/ps5-digital.jpg',
    reviews: 891,
    price: 399.99,
    previusPrice: null
  },
  {
    id: '6',
    name: 'Dron DJI Mavic 3 Pro',
    description: `<p class="mb-2">Dron profesional con triple cámara Hasselblad para cinematografía aérea.</p>
                  <ul class="list-disc pl-6">
                    <li>Sistema triple cámara: <b>4/3" 20MP</b> + 166mm tele + gran angular</li>
                    <li>Grabación <b>5.1K/50fps</b> y Apple ProRes 422 HQ</li>
                    <li>Autonomía de vuelo de <b>46 minutos</b> (batería inteligente)</li>
                    <li>Transmisión en vivo <b>HD 1080p/60fps</b> a 15KM de distancia</li>
                    <li>Detección omnidireccional de obstáculos con APAS 5.0</li>
                    <li>Plegado compacto y modo QuickShot inteligente</li>
                  </ul>`,
    urlImage: '/assets/images/dji-drone.jpg',
    reviews: 157,
    price: 2199.99,
    previusPrice: 2599.99
  },
  {
    id: '7',
    name: 'Smartwatch Garmin Fenix 7X Solar',
    description: `<p class="mb-2">Reloj deportivo premium con energía solar y navegación avanzada.</p>
                  <ul class="list-disc pl-6">
                    <li>Pantalla táctil <b>1.4"</b> con tecnología Power Glass solar</li>
                    <li>Sensores: GPS dual, GLONASS, Galileo, barómetro y monitor cardíaco</li>
                    <li>Modos deportivos: <b>+50 actividades</b> incluyendo golf y esquí</li>
                    <li>Resistencia <b>10 ATM</b> y MIL-STD-810 certificado</li>
                    <li>Mapas TOPO y ski resort maps preinstalados</li>
                    <li>Autonomía inteligente: <b>37 días</b> en modo smartwatch</li>
                  </ul>`,
    urlImage: '/assets/images/garmin-watch.jpg',
    reviews: 294,
    price: 899.99,
    previusPrice: 999.99
  },
  {
    id: '8',
    name: 'Tarjeta Gráfica NVIDIA RTX 4090 Founders Edition',
    description: `<p class="mb-2">La GPU definitiva para gaming 8K y creación con IA.</p>
                  <ul class="list-disc pl-6">
                    <li>Arquitectura <b>Ada Lovelace</b> con 16,384 núcleos CUDA</li>
                    <li><b>24GB GDDR6X</b> a 21Gbps con bus 384-bit</li>
                    <li>DLSS 3 con generación de frames mediante IA</li>
                    <li>Refrigeración vapor chamber dual axial</li>
                    <li>Soporte <b>AV1 encode</b> y 3 monitores 4K simultáneos</li>
                    <li>PCIe 5.0 y consumo máximo de 450W</li>
                  </ul>`,
    urlImage: '/assets/images/nvidia-gpu.jpg',
    reviews: 678,
    price: 1599.99,
    previusPrice: 1799.99
  },
  {
    id: '9',
    name: 'Tablet Samsung Galaxy Tab S9 Ultra',
    description: `<p class="mb-2">Tablet profesional con pantalla Dynamic AMOLED 2X y S Pen incluido.</p>
                  <ul class="list-disc pl-6">
                    <li>Pantalla <b>14.6"</b> 2960x1848 con tasa de refresco 120Hz</li>
                    <li>Chipset <b>Snapdragon 8 Gen 2</b> con 12GB RAM</li>
                    <li>Almacenamiento UFS 4.0 de 1TB + ranura microSD</li>
                    <li>Batería de 11200mAh con carga rápida de 45W</li>
                    <li>Resistencia <b>IP68</b> y cuadro de altavoces AKG</li>
                    <li>Modo DeX para experiencia tipo PC</li>
                  </ul>`,
    urlImage: '/assets/images/galaxy-tablet.jpg',
    reviews: 412,
    price: 1199.99,
    previusPrice: null
  },
  {
    id: '10',
    name: 'Cámara Mirrorless Sony A7 IV',
    description: `<p class="mb-2">Cámara full-frame para fotografía y video profesional.</p>
                  <ul class="list-disc pl-6">
                    <li>Sensor <b>BSI CMOS 33MP</b> con ISO 50-204800</li>
                    <li>Video 4K 60p 10-bit 4:2:2 con S-Log3</li>
                    <li>Autofocus híbrido de 759 puntos con seguimiento real</li>
                    <li>Estabilización 5.5 stops y doble ranura SD/CFexpress</li>
                    <li>Pantalla articulada táctil de 3" y EVF 3.69M-dot</li>
                    <li>Conectividad profesional: Wi-Fi 5GHz, FTP y USB 3.2</li>
                  </ul>`,
    urlImage: '/assets/images/sony-camera.jpg',
    reviews: 529,
    price: 2499.99,
    previusPrice: 2799.99
  }
];