// Mengambil elemen popup dan tombol tutup
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close-btn');

// Mengambil elemen gambar dan deskripsi dalam popup
const popupImage = document.getElementById('popup-image');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');

// Menyimpan gambar dalam array untuk navigasi
let images = [];
let currentImageIndex = 0;

// Fungsi untuk membuka popup
function openPopup(event) {
    event.preventDefault(); // Menghentikan aksi default link
    
    // Ambil data dari atribut data-* pada elemen yang diklik
    const title = event.target.getAttribute('data-title');
    const description = event.target.getAttribute('data-description');
    const imageData = JSON.parse(event.target.getAttribute('data-images') || event.target.getAttribute('data-image'));

    // Mengubah konten popup dengan data yang diambil
    popupTitle.textContent = title;
    popupDescription.textContent = description;
    images = imageData;
    currentImageIndex = 0;
    
    // Tampilkan gambar pertama dalam popup
    popupImage.src = images[currentImageIndex];

    // Menampilkan popup dengan display 'flex' untuk centering
    popup.style.display = 'flex';
}

// Fungsi untuk menutup popup
function closePopup() {
    popup.style.display = 'none';
}

// Fungsi untuk navigasi ke gambar berikutnya
function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        popupImage.src = images[currentImageIndex];
    }
}

// Fungsi untuk navigasi ke gambar sebelumnya
function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        popupImage.src = images[currentImageIndex];
    }
}

// Menambahkan event listener untuk membuka popup pada link karya
const openPopupLinks = document.querySelectorAll('.open-popup');
openPopupLinks.forEach(link => {
    link.addEventListener('click', openPopup);
});

// Menambahkan event listener untuk menutup popup saat tombol tutup diklik
if (closeButton) {
    closeButton.addEventListener('click', closePopup);
} else {
    console.error("Tombol tutup tidak ditemukan!");
}

