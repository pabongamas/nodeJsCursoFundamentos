const sharp=require('sharp');

sharp('toy.jpg').resize(80).grayscale().toFile('resized.png');