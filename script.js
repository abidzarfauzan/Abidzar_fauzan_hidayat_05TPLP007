function showSection(section) {
    const sections = document.querySelectorAll('.konten');
    sections.forEach((sec) => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

function toggleForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addKaryawan() {
    const nama = document.getElementById('namaKaryawan').value;
    const kodeJabatan = document.getElementById('kodeJabatanKaryawan').value;
    const kodeDivisi = document.getElementById('kodeDivisiKaryawan').value;
    const tableKaryawan = document.getElementById('tabelKaryawan').querySelector('tbody');

    if (!nama || !kodeJabatan || !kodeDivisi) {
        alert("Harap lengkapi semua data karyawan.");
        return;
    }

    const rowKaryawan = tableKaryawan.insertRow();
    rowKaryawan.innerHTML = `
        <td>${nama}</td>
        <td>${kodeJabatan}</td>
        <td>${kodeDivisi}</td>
        <td><button onclick="showDeleteConfirmation(this)">Hapus</button></td>
    `;

    showModal("Data karyawan berhasil ditambahkan!");

    document.getElementById('namaKaryawan').value = '';
    document.getElementById('kodeJabatanKaryawan').value = '';
    document.getElementById('kodeDivisiKaryawan').value = '';

    toggleForm('formKaryawan');
}

function showDeleteConfirmation(button) {
    const row = button.closest('tr');
    const confirmation = confirm("Apakah Anda yakin ingin menghapus karyawan ini?");
    if (confirmation) {
        row.remove();
    }
}

function addAbsensi() {
    const namaKaryawan = document.getElementById('namaKaryawanAbsensi').value;
    const tanggal = document.getElementById('tanggalAbsensi').value;
    const status = document.getElementById('statusAbsensi').value;
    const tableAbsensi = document.getElementById('tabelAbsensi').querySelector('tbody');

    if (!namaKaryawan || !tanggal || !status) {
        alert("Harap lengkapi semua data absensi.");
        return;
    }

    const rowAbsensi = tableAbsensi.insertRow();
    rowAbsensi.innerHTML = `
        <td>${namaKaryawan}</td>
        <td>${tanggal}</td>
        <td>${status}</td>
        <td><button onclick="showDeleteConfirmation(this)">Hapus</button></td>
    `;

    showModal("Data absensi berhasil ditambahkan!");

    document.getElementById('namaKaryawanAbsensi').value = '';
    document.getElementById('tanggalAbsensi').value = '';
    document.getElementById('statusAbsensi').value = '';

    toggleForm('formAbsensi');
}

function addLembur() {
    const namaKaryawan = document.getElementById('namaKaryawanLembur').value;
    const tanggal = document.getElementById('tanggalLembur').value;
    const jamLembur = document.getElementById('jamLembur').value;
    const tableLembur = document.getElementById('tabelLembur').querySelector('tbody');

    if (!namaKaryawan || !tanggal || !jamLembur) {
        alert("Harap lengkapi semua data lembur.");
        return;
    }

    const rowLembur = tableLembur.insertRow();
    rowLembur.innerHTML = `
        <td>${namaKaryawan}</td>
        <td>${tanggal}</td>
        <td>${jamLembur}</td>
        <td><button onclick="showDeleteConfirmation(this)">Hapus</button></td>
    `;

    showModal("Data lembur berhasil ditambahkan!");

    document.getElementById('namaKaryawanLembur').value = '';
    document.getElementById('tanggalLembur').value = '';
    document.getElementById('jamLembur').value = '';

    toggleForm('formLembur');
}

function showModal(message) {
    const modal = document.getElementById('modalNotification');
    modal.querySelector('.modal-content p').textContent = message;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modalNotification').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modalNotification');
    if (event.target == modal) {
        closeModal();
    }
};
