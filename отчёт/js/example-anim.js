const imageLinks = [
    "https://sun9-12.userapi.com/impg/GTLUs834cjv8klF_rCD9DRMNRrTBaKlUMJq6xQ/JSgzitMgEfA.jpg?size=317x250&quality=96&sign=bca7224bbac6fedaa0a1d160966c8b3d&type=album",
    "https://sun9-31.userapi.com/impg/1PSMgQXfNAgkJpuG-lA_WVlCmohs1lNxCp7Clw/Wre94lEljkE.jpg?size=339x197&quality=96&sign=3a75f62de08f37bd4636afb2ebce66c5&type=album",
    "https://sun9-37.userapi.com/impg/6vihnR5Vmww3fQkS-XHhy9QpLnGy5lEq6lLuNw/iH4HBFITDBc.jpg?size=563x541&quality=96&sign=f2d0062c3c9c6917e36a91ed907e9569&type=album",

];

let currentImageIndex = 0;

function showImage() {
    const imageElement = document.getElementById("image");
    imageElement.src = imageLinks[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageLinks.length;
    showImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageLinks.length) % imageLinks.length;
    showImage();
}

showImage(); // Display the initial image