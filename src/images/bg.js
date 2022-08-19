const array = [
    '1.jpg',   '10.jpg',  '100.jpg', '11.jpg',  '12.jpg', '13.jpg',
    '14.png',  '15.jpg',  '16.jpg',  '17.jpg',  '18.jpg', '19.jpg',
    '2.jpg',   '20.jpg',  '21.jpg',  '22.jpg',  '23.jpg', '24.jpg',
    '25.jpg',  '26.jpg',  '27.jpg',  '28.jpg',  '29.jpg', '3.jpg',
    '30.jpg',  '31.jpg',  '32.png',  '33.jpg',  '34.jpg', '35.jpeg',
    '36.jpg',  '37.jpg',  '38.jpg',  '39.jpeg', '4.jpg',  '40.jpeg',
    '41.jpeg', '42.jpg',  '43.jpg',  '44.jpg',  '45.jpg', '46.jpg',
    '47.jpg',  '48.jpg',  '49.jpg',  '5.jpg',   '50.jpg', '51.jpg',
    '52.jpg',  '53.jpeg', '54.jpg',  '55.jpg',  '56.jpg', '57.jpg',
    '58.jpeg', '59.jpg',  '6.jpg',   '60.jpg',  '61.jpg', '62.jpeg',
    '63.jpeg', '64.jpg',  '65.jpg',  '66.jpg',  '67.jpg', '68.jpg',
    '69.jpg',  '7.jpg',   '70.jpg',  '71.jpg',  '72.jpg', '73.jpg',
    '74.jpg',  '75.jpg',  '76.jpg',  '77.jpg',  '78.jpg', '79.jpg',
    '8.jpg',   '80.jpg',  '81.jpg',  '82.jpg',  '83.jpg', '84.jpg',
    '85.png',  '86.jpg',  '87.jpg',  '88.jpg',  '89.jpg', '9.jpg',
    '90.jpg',  '91.jpg',  '92.jpg',  '93.jpg',  '94.jpg', '95.jpg',
    '96.jpg',  '97.jpg',  '98.jpg',  '99.jpg'
];

export default "https://savva-shishak.github.io/images/" + array[Math.random() * 100 >> 0];