const dummyDataBase = [{
  "id": 1,
  "title": "Ecosonda y Gps Garmin Striker 4 ww",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "price": 42000,
  "pictureUrl": "https://drive.google.com/uc?id=1NaBHk-LZVALtkFDccwMrTSV5oeeTp-5f",
  "stock": 2,
  "category": "Instruments"
}, {
  "id": 2,
  "title": "Ecosonda y Gps Garmin Striker Plus 4 ww",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "price": 48000,
  "pictureUrl": "https://drive.google.com/uc?id=17XyzZ4Sp5PK51wOpOOG2d_qfJi27Q5tg",
  "stock": 2,
  "category": "Instruments"
}, {
  "id": 3,
  "title": "Inflable Power Nitro",
  "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "price": 28878,
  "pictureUrl": "https://drive.google.com/uc?id=1OqxY_YsnKVVIcZFqUpW3I9pkvFsbDFom",
  "stock": 1,
  "category": "Recreation"
}, {
  "id": 4,
  "title": "Skies Allegre Red Advanced 67",
  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "price": 59123,
  "pictureUrl": "https://drive.google.com/uc?id=1jIGHJuB_aG8XrF-r3YkQdvX8Hgei1SGa",
  "stock": 1,
  "category": "Recreation"
}, {
  "id": 5,
  "title": "Lavado Orejera Motor Fuera de Borda Metalico",
  "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "price": 1290,
  "pictureUrl": "https://drive.google.com/uc?id=12m1tIH03JbN1NWwIF6HUSAUdwZYD1UMr",
  "stock": 5,
  "category": "Accesories"
}, {
  "id": 6,
  "title": "Kayak Atlantikayak Triplo",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "price": 97000,
  "pictureUrl": "https://drive.google.com/uc?id=19Ri_iuEBh8SrP544qFKbyyNg5qO9-0D5",
  "stock": 2,
  "category": "Kayaks"
}, {
  "id": 7,
  "title": "Kayak Atlantikayak Simplo",
  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "price": 45000,
  "pictureUrl": "https://drive.google.com/uc?id=1Pf2bRY2MB6v3HQXSpSWNfEkcWupE6RTO",
  "stock": 2,
  "category": "Kayaks"
}, {
  "id": 8,
  "title": "Remo Kayaks",
  "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "price": 6000,
  "pictureUrl": "https://drive.google.com/uc?id=1M5ihRSG6MGyHIuPSyToN-ETsUiEaxPEZ",
  "stock": 7,
  "category": "Accesories"
}, {
  "id": 9,
  "title": "Kayak Atlantikayak Karku",
  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "price": 60000,
  "pictureUrl": "https://drive.google.com/uc?id=1jpO1SN7hShVB1TELZr0HN6JlOTyt-2jL",
  "stock": 2,
  "category": "Kayaks"
}, {
  "id": 10,
  "title": "Mercury Optimax",
  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "price": 14500,
  "pictureUrl": "https://drive.google.com/uc?id=1GQJQgx6Msg65tY8TVbR6gqJXYvT63Nsk",
  "stock": 10,
  "category": "Lubricants"
}]

export default dummyDataBase




