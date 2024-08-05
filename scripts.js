const provinces = {
    regional1: ["Provinsi A1", "Provinsi B1", "Provinsi C1"],
    regional2: ["Provinsi A2", "Provinsi B2", "Provinsi C2"],
    regional3: ["Provinsi A3", "Provinsi B3", "Provinsi C3"]
};

export function updateProvinces() {
    const regionalSelect = document.getElementById("regional");
    const provinceSelect = document.getElementById("provinsi");
    const selectedRegional = regionalSelect.value;

    // Clear previous options
    provinceSelect.innerHTML = '<option value="">Pilih Provinsi</option>';

    if (selectedRegional) {
        const selectedProvinces = provinces[selectedRegional];
        selectedProvinces.forEach(province => {
            const option = document.createElement("option");
            option.value = province;
            option.text = province;
            provinceSelect.appendChild(option);
        });
    }
}

// Mengambil data pelanggan dari backend (contoh menggunakan fetch)
async function getCustomerInfo() {
    try {
        // Gantikan URL dengan endpoint API yang sesuai
        const response = await fetch('https://api.example.com/customer-info');
        const data = await response.json();

        // Masukkan data ke dalam elemen HTML
        document.getElementById("customer-name").innerText = data.name;
        document.getElementById("customer-phone").innerText = data.phone;
    } catch (error) {
        console.error("Error fetching customer info:", error);
    }
}

// Panggil fungsi untuk mengambil data pelanggan saat halaman dimuat
getCustomerInfo();

document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const regional = document.getElementById("regional").value;
    const provinsi = document.getElementById("provinsi").value;
    const masalah = document.getElementById("masalah").value;

    if (!regional || !provinsi || !masalah) {
        alert("Semua field harus diisi!");
        return;
    }

    alert("Komplain berhasil dikirim!");
    // Lakukan logika pengiriman form di sini
});
